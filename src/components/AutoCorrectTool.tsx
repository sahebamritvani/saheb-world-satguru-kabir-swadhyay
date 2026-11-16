import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Copy, 
  Check, 
  RotateCw, 
  ArrowRight, 
  SpellCheck, 
  Languages, 
  ArrowLeft,
  X,
  Search,
  Replace,
  Database,
  Undo2,
  Download,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Layers,
  ChevronDown,
  ChevronUp,
  SlidersHorizontal,
  BookOpen
} from 'lucide-react';
import { useAppTheme } from '../theme/ThemeContext';
import { translations } from '../data/translations';
import { Language } from '../types';
import { 
  sakhiBulkManager, 
  STANDARD_HARMONIZATION_RULES, 
  HarmonizationRule, 
  TargetField, 
  BulkReplaceResult, 
  MatchSnippet 
} from '../services/sakhiBulkManager';
import { purifyAndAnalyzeVaniOffline } from '../services/offlineVaniEngine';

interface AutoCorrectToolProps {
  language: Language;
  onClose?: () => void;
  initialText?: string;
  onOpenSwadhyay?: (sakhiNumber: number) => void;
}

interface VaniCorrectionItem {
  original: string;
  corrected: string;
  note?: string;
}

interface VaniCorrectionResultData {
  correctedText: string;
  corrections?: VaniCorrectionItem[];
  meaning?: string;
  fullFormattedText?: string;
  matchedSakhiNumber?: number;
  grantha?: string;
  categoryTitle?: string;
  source?: string;
  notice?: string;
}

const SAMPLE_VANIS = [
  {
    title: 'बीजक प्रथम रमैनी (Bijak)',
    text: 'अंतर जोती सबद एक नारी। ताकर नाम सरस्वती विचारि।।',
    meaning: 'अन्तःकरण में जो प्रकाश रूप शब्द है, वही मूल शक्ति है। उसी को विचारशील जन सरस्वती कहते हैं।'
  },
  {
    title: 'उलटबांसी रहस्य (Ulatbansi)',
    text: 'एक अचंभा देखा रे भाई, ठाढ़ा सिंह चरावे गाई। जल की मछली तरुवर ब्याई, पकड़ बिलाई मुर्गे खाई।।',
    meaning: 'कबीर साहेब उलटबांसी में कहते हैं कि जब जीवात्मा (सिंह) संसार के विषयों (गाई) के वश में था, तब उलटी दशा थी; किन्तु गुरु कृपा से अंतर्मुखी होकर माया भ्रम नष्ट हो जाता है।'
  },
  {
    title: 'गुरु महिमा साखी (Sakhi)',
    text: 'गुरु गोविन्द दोऊ खड़े, काके लागूं पाय । बलिहारी गुरु आपने, गोविन्द दियो बताय ॥',
    meaning: 'सद्गुरु और ईश्वर दोनों समक्ष हैं, तो पहले गुरु के चरणों में नमन है जिन्होंने ईश्वर तक पहुँचने का मार्ग दर्शाया।'
  },
  {
    title: 'कबीर सोता क्या करे...',
    text: 'कबीर सोता क्या करे, जागी न जपे मुरारि । एक दिन है सोवना, लंबे पांव पसारि ॥',
    meaning: 'हे जीव! तू अज्ञान की नींद में क्यों सो रहा है? जागकर सत्यनाम का सुमिरन कर, क्योंकि एक दिन यह शरीर सदा के लिए शांत हो जाएगा।'
  }
];

export const AutoCorrectTool: React.FC<AutoCorrectToolProps> = ({ 
  language, 
  onClose, 
  initialText,
  onOpenSwadhyay 
}) => {
  const { theme } = useAppTheme();
  const t = translations[language] || translations.hi;

  // Active Main Tab: 'single' (एकल वाणी) or 'bulk' (अखंड पाठ डेटाबेस सामूहिक प्रतिस्थापन)
  const [activeTab, setActiveTab] = useState<'single' | 'bulk'>('single');

  // --- SINGLE VANI CORRECTION STATES ---
  const [inputText, setInputText] = useState(initialText || SAMPLE_VANIS[0].text);
  const [resultData, setResultData] = useState<VaniCorrectionResultData | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [singleError, setSingleError] = useState<string | null>(null);
  const [copiedType, setCopiedType] = useState<string | null>(null);

  // --- BULK REPLACE STATES ---
  const [searchTerm, setSearchTerm] = useState('');
  const [replaceTerm, setReplaceTerm] = useState('');
  const [selectedFields, setSelectedFields] = useState<TargetField[]>([
    'text.hi', 
    'bhavarth.hi', 
    'wordMeanings',
    'contemplation.hi'
  ]);
  const [matchCase, setMatchCase] = useState(false);
  const [wholeWord, setWholeWord] = useState(false);
  const [granthaFilter, setGranthaFilter] = useState('all');

  // Preview & Results
  const [previewResult, setPreviewResult] = useState<BulkReplaceResult | null>(null);
  const [executionNotice, setExecutionNotice] = useState<string | null>(null);
  const [harmonizationSummary, setHarmonizationSummary] = useState<{
    totalRulesApplied: number;
    totalSakhisAffected: number;
    totalCorrections: number;
    ruleSummaries: Array<{ rule: HarmonizationRule; count: number; sakhisCount: number }>;
  } | null>(null);

  // Harmonization rules active selection
  const [activeRuleIds, setActiveRuleIds] = useState<string[]>(() => 
    STANDARD_HARMONIZATION_RULES.map(r => r.id)
  );

  // Database Stats
  const [dbStats, setDbStats] = useState(() => sakhiBulkManager.getStats());
  const [showHistory, setShowHistory] = useState(false);
  const [showHarmonizationDetails, setShowHarmonizationDetails] = useState(true);

  const refreshDbStats = () => {
    setDbStats(sakhiBulkManager.getStats());
  };

  useEffect(() => {
    const handleUpdate = () => refreshDbStats();
    window.addEventListener('sahebworld:sakhis-updated', handleUpdate);
    return () => window.removeEventListener('sahebworld:sakhis-updated', handleUpdate);
  }, []);

  // --- SINGLE CORRECTION HANDLER ---
  const handleAIApiCorrection = async () => {
    if (!inputText.trim()) return;
    setIsProcessing(true);
    setSingleError(null);
    setResultData(null);

    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      setResultData(purifyAndAnalyzeVaniOffline(inputText, { language, mode: 'vani' }));
      setIsProcessing(false);
      return;
    }

    try {
      const response = await fetch('/api/auto-correct', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: inputText,
          language: language,
          mode: 'vani',
        }),
      });

      if (!response.ok) {
        throw new Error('Server unreachable');
      }

      const data: VaniCorrectionResultData = await response.json();
      setResultData(data);
    } catch {
      // Seamless local sacred-rule fallback when offline or server unavailable
      setResultData(purifyAndAnalyzeVaniOffline(inputText, { language, mode: 'vani' }));
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCopy = (text: string, typeKey: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(typeKey);
    setTimeout(() => setCopiedType(null), 2000);
  };

  // --- BULK REPLACE PREVIEW & EXECUTE ---
  const handlePreviewBulk = () => {
    if (!searchTerm.trim()) return;
    setExecutionNotice(null);
    const result = sakhiBulkManager.previewBulkReplace({
      search: searchTerm.trim(),
      replace: replaceTerm,
      fields: selectedFields,
      matchCase,
      wholeWord,
      granthaFilter
    });
    setPreviewResult(result);
  };

  const handleExecuteBulk = () => {
    if (!searchTerm.trim()) return;
    const result = sakhiBulkManager.executeBulkReplace({
      search: searchTerm.trim(),
      replace: replaceTerm,
      fields: selectedFields,
      matchCase,
      wholeWord,
      granthaFilter
    });
    setPreviewResult(null);
    setExecutionNotice(`✓ सफलता: ${result.affectedSakhisCount} साखियों में कुल ${result.totalReplacements} स्थान पर "${searchTerm}" को बदलकर "${replaceTerm}" किया गया।`);
    refreshDbStats();
  };

  const handleApplyHarmonization = () => {
    const summary = sakhiBulkManager.executeHarmonization(activeRuleIds);
    setHarmonizationSummary(summary);
    setExecutionNotice(`✓ अखंड पाठ एवं साखी डेटाबेस मानकीकरण संपन्न: ${summary.totalSakhisAffected} साखियों में ${summary.totalCorrections} वर्तनी सुधार सफलतापूर्वक लागू किए गए।`);
    refreshDbStats();
  };

  const handleUndo = () => {
    const success = sakhiBulkManager.undoLastOperation();
    if (success) {
      setExecutionNotice('✓ पूर्ववत (Undo) सफल: अंतिम सामूहिक प्रतिस्थापन को सफलतापूर्वक वापस ले लिया गया।');
      setPreviewResult(null);
      refreshDbStats();
    } else {
      setExecutionNotice('पूर्ववत करने हेतु कोई पूर्व ऑपरेशन उपलब्ध नहीं है।');
    }
  };

  const handleResetDefaults = () => {
    if (window.confirm('क्या आप अखंड पाठ व साखी डेटाबेस को पुनः मूल प्रामाणिक रूप (Factory Defaults) में पुनर्स्थापित करना चाहते हैं?')) {
      sakhiBulkManager.resetToFactoryDefaults();
      setExecutionNotice('✓ संपूर्ण डेटाबेस को प्रामाणिक मूल स्वरूप में पुनर्स्थापित कर दिया गया है।');
      setPreviewResult(null);
      setHarmonizationSummary(null);
      refreshDbStats();
    }
  };

  const toggleField = (field: TargetField) => {
    setSelectedFields(prev => 
      prev.includes(field) ? prev.filter(f => f !== field) : [...prev, field]
    );
  };

  const toggleRule = (ruleId: string) => {
    setActiveRuleIds(prev => 
      prev.includes(ruleId) ? prev.filter(id => id !== ruleId) : [...prev, ruleId]
    );
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* Top Banner */}
      <div 
        style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
        className="p-5 sm:p-6 rounded-3xl border shadow-lg space-y-4"
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-700 dark:text-amber-300">
              <Languages className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h2 className="font-serif font-black text-lg sm:text-xl text-amber-950 dark:text-amber-100 flex items-center gap-2">
                {t.autoCorrectTitle || 'वाणी वर्तनी शोधन एवं सामूहिक मानकीकरण'}
              </h2>
              <p className="text-xs font-serif text-amber-800/80 dark:text-amber-300/80 mt-0.5">
                संत भाषा, सधुक्कड़ी शब्दावली, अखंड पाठ एवं संपूर्ण साखी संग्रह शुद्धिकरण यंत्र
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            {onClose && (
              <button
                onClick={onClose}
                style={{
                  backgroundColor: theme.accentGoldLight,
                  borderColor: theme.accentGold,
                  color: theme.sacredMaroon,
                }}
                className="px-3.5 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 hover:scale-105 transition-all duration-200 cursor-pointer shadow-xs active:scale-95 group"
                title={language === 'pb' ? 'ਵਾਪਸ ਜਾਓ' : language === 'en' ? 'Go Back' : 'वापस जाएं'}
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="font-serif font-bold">
                  {language === 'pb' ? 'ਵਾਪਸ ਜਾਓ' : language === 'en' ? 'Go Back' : 'वापस जाएं'}
                </span>
              </button>
            )}
          </div>
        </div>

        {/* Tab Switcher: Single vs Bulk */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-amber-500/20">
          <button
            onClick={() => setActiveTab('single')}
            style={{
              backgroundColor: activeTab === 'single' ? '#8B4513' : 'transparent',
              color: activeTab === 'single' ? '#FFFFFF' : undefined,
              borderColor: theme.borderOrnament
            }}
            className="px-4 py-2 rounded-xl border text-xs sm:text-sm font-serif font-bold flex items-center gap-2 cursor-pointer transition shadow-xs"
          >
            <SpellCheck className="w-4 h-4" />
            <span>एकल वाणी शोधन (Single Verse)</span>
          </button>

          <button
            onClick={() => setActiveTab('bulk')}
            style={{
              backgroundColor: activeTab === 'bulk' ? '#8B4513' : 'transparent',
              color: activeTab === 'bulk' ? '#FFFFFF' : undefined,
              borderColor: theme.borderOrnament
            }}
            className="px-4 py-2 rounded-xl border text-xs sm:text-sm font-serif font-bold flex items-center gap-2 cursor-pointer transition shadow-xs"
          >
            <Database className="w-4 h-4" />
            <span>अखंड पाठ एवं साखी सामूहिक प्रतिस्थापन (Bulk Replace)</span>
            {dbStats.customizedCount > 0 && (
              <span className="px-2 py-0.5 text-[10px] rounded-full bg-amber-500 text-amber-950 font-black">
                {dbStats.customizedCount} संशोधित
              </span>
            )}
          </button>
        </div>
      </div>

      {/* ======================================================== */}
      {/* TAB 1: SINGLE VERSE CORRECTION */}
      {/* ======================================================== */}
      {activeTab === 'single' && (
        <div className="space-y-6">
          <div 
            style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
            className="p-5 sm:p-7 rounded-3xl border shadow-lg space-y-5"
          >
            {/* Sample Presets */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300">
                त्वरित उदाहरण चुनें (Select Sample Vani):
              </span>
              <div className="flex flex-wrap gap-2">
                {SAMPLE_VANIS.map((sample, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setInputText(sample.text);
                      setResultData(null);
                    }}
                    className="px-3 py-1.5 rounded-xl border border-amber-500/20 hover:border-amber-500 text-xs font-serif bg-black/5 dark:bg-white/5 hover:bg-amber-500/10 transition cursor-pointer text-left"
                  >
                    {sample.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Area */}
            <div>
              <label className="block text-xs font-bold text-amber-800 dark:text-amber-300 mb-1">
                मूल वाणी पाठ (Sacred Text):
              </label>
              <textarea
                rows={4}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="यहाँ कबीर साहेब की मूल वाणी या साखी दर्ज करें..."
                style={{ backgroundColor: theme.bgSecondary, borderColor: theme.borderOrnament }}
                className="w-full px-4 py-3 rounded-xl border text-base font-serif font-bold outline-none focus:ring-2 focus:ring-amber-500 leading-relaxed"
              />
            </div>

            {/* Action Button */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={handleAIApiCorrection}
                disabled={isProcessing || !inputText.trim()}
                className="px-6 py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-serif font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isProcessing ? (
                  <RotateCw className="w-4 h-4 animate-spin" />
                ) : (
                  <SpellCheck className="w-4 h-4" />
                )}
                <span>
                  {isProcessing ? 'जांच जारी है...' : 'वाणी वर्तनी सुधारें (Check Spelling)'}
                </span>
              </button>
            </div>
          </div>

          {/* SINGLE CORRECTION RESULTS */}
          {resultData && (
            <div 
              style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
              className="p-6 rounded-3xl border shadow-xl space-y-4"
            >
              <div className="flex items-center justify-between border-b pb-3">
                <h3 className="font-serif font-bold text-base text-amber-950 dark:text-amber-100 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  शुद्ध वाणी स्वरूप:
                </h3>
                <button
                  onClick={() => handleCopy(resultData.correctedText, 'corrected_text')}
                  className="px-3 py-1.5 rounded-xl border text-xs font-serif font-bold flex items-center gap-1.5 cursor-pointer hover:bg-amber-500/10"
                >
                  {copiedType === 'corrected_text' ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>कॉपी करें</span>
                </button>
              </div>

              <p className="font-serif font-bold text-xl text-center p-4 rounded-2xl bg-amber-500/10 text-amber-950 dark:text-amber-100 leading-relaxed">
                {resultData.correctedText}
              </p>

              {resultData.meaning && (
                <div className="text-sm font-serif leading-relaxed opacity-90 p-4 rounded-xl border">
                  <strong>भावार्थ: </strong> {resultData.meaning}
                </div>
              )}

              {resultData.corrections && resultData.corrections.length > 0 && (
                <div className="space-y-2">
                  <span className="text-xs font-bold text-amber-800 dark:text-amber-300">
                    सुधार विवरण (Corrections Made):
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {resultData.corrections.map((corr, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-black/5 dark:bg-white/5 border text-xs flex items-center justify-between">
                        <span className="line-through opacity-50">{corr.original}</span>
                        <ArrowRight className="w-3 h-3 mx-2 opacity-50" />
                        <span className="font-bold text-green-700 dark:text-green-400">{corr.corrected}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 2: BULK REPLACE & AKHAND PATH HARMONIZATION */}
      {/* ======================================================== */}
      {activeTab === 'bulk' && (
        <div className="space-y-6">
          {/* Quick Actions & Status Strip */}
          <div 
            style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
            className="p-4 sm:p-5 rounded-3xl border shadow-md flex flex-wrap items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-800 dark:text-amber-200">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <div className="font-serif font-bold text-sm text-amber-950 dark:text-amber-100">
                  अखंड पाठ डेटाबेस स्थिति (Active Database Status)
                </div>
                <div className="text-xs text-amber-800/80 dark:text-amber-300/80">
                  कुल साखियां: <strong>{dbStats.totalSakhis}</strong> | संशोधित: <strong>{dbStats.customizedCount}</strong> | इतिहास प्रविष्टियां: <strong>{dbStats.historyCount}</strong>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {dbStats.historyCount > 0 && (
                <button
                  onClick={handleUndo}
                  className="px-3 py-1.5 rounded-xl border border-amber-500/30 hover:bg-amber-500/10 text-xs font-serif font-bold flex items-center gap-1.5 cursor-pointer"
                  title="अंतिम प्रतिस्थापन को वापस लें"
                >
                  <Undo2 className="w-3.5 h-3.5" />
                  <span>पूर्ववत (Undo)</span>
                </button>
              )}

              <button
                onClick={() => sakhiBulkManager.exportJson()}
                className="px-3 py-1.5 rounded-xl border border-amber-500/30 hover:bg-amber-500/10 text-xs font-serif font-bold flex items-center gap-1.5 cursor-pointer"
                title="वर्तमान डेटाबेस को JSON रूप में डाउनलोड करें"
              >
                <Download className="w-3.5 h-3.5" />
                <span>JSON निर्यात</span>
              </button>

              <button
                onClick={handleResetDefaults}
                className="px-3 py-1.5 rounded-xl border border-red-500/30 text-red-700 hover:bg-red-500/10 text-xs font-serif font-bold flex items-center gap-1.5 cursor-pointer"
                title="सभी संशोधनों को हटाकर मूल प्रामाणिक साखियों को पुनर्स्थापित करें"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>मूल रूप रीसेट</span>
              </button>
            </div>
          </div>

          {/* Success / Alert Notice */}
          {executionNotice && (
            <div className="p-4 rounded-2xl bg-green-500/10 border border-green-500/30 text-green-900 dark:text-green-200 text-sm font-serif font-bold flex items-start justify-between gap-3 animate-fadeIn">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                <span>{executionNotice}</span>
              </div>
              <button 
                onClick={() => setExecutionNotice(null)}
                className="p-1 hover:bg-green-500/20 rounded cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* ======================================================== */}
          {/* SECTION 1: 1-CLICK SACRED HARMONIZATION */}
          {/* ======================================================== */}
          <div 
            style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
            className="p-5 sm:p-6 rounded-3xl border shadow-lg space-y-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-600" />
                <h3 className="font-serif font-bold text-base text-amber-950 dark:text-amber-100">
                  1-क्लिक संत भाषा एवं अखंड पाठ मानकीकरण (Standard Harmonization)
                </h3>
              </div>
              <button
                onClick={() => setShowHarmonizationDetails(!showHarmonizationDetails)}
                className="p-1.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
              >
                {showHarmonizationDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>

            <p className="text-xs font-serif text-amber-800/80 dark:text-amber-300/80 leading-relaxed">
              यह प्रक्रिया कबीर वाणी व संत मत की सर्वमान्य वर्तनी मानकों (जैसे <em>ब्रम्ह ➔ ब्रह्म, सुरती ➔ सुरति, निरती ➔ निरति, पाखण्ड ➔ पाखंड, सुमिर्न ➔ सुमिरन</em>) को संपूर्ण 310+ साखियों के डेटाबेस में एक साथ सुसंगत (Consistent) करती है।
            </p>

            {showHarmonizationDetails && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 pt-2">
                {STANDARD_HARMONIZATION_RULES.map((rule) => {
                  const isChecked = activeRuleIds.includes(rule.id);
                  return (
                    <div 
                      key={rule.id}
                      onClick={() => toggleRule(rule.id)}
                      className={`p-3 rounded-2xl border text-xs font-serif cursor-pointer transition select-none flex items-start gap-2.5 ${
                        isChecked 
                          ? 'bg-amber-500/10 border-amber-500/40 text-amber-950 dark:text-amber-100 font-bold' 
                          : 'bg-black/5 dark:bg-white/5 border-transparent opacity-60'
                      }`}
                    >
                      <input 
                        type="checkbox" 
                        checked={isChecked}
                        onChange={() => {}}
                        className="mt-0.5 accent-amber-600 cursor-pointer"
                      />
                      <div>
                        <div className="text-sm">{rule.label}</div>
                        <div className="text-[11px] opacity-75 font-normal">{rule.description}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={handleApplyHarmonization}
                disabled={activeRuleIds.length === 0}
                className="px-6 py-3 rounded-2xl bg-amber-700 hover:bg-amber-800 text-white font-serif font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Sparkles className="w-4 h-4" />
                <span>
                  संपूर्ण अखंड पाठ डेटाबेस को मानकीकृत करें ({activeRuleIds.length} नियम लागू करें)
                </span>
              </button>
            </div>

            {/* Harmonization summary breakdown */}
            {harmonizationSummary && (
              <div className="mt-4 p-4 rounded-2xl bg-black/5 dark:bg-white/5 border text-xs space-y-2">
                <div className="font-bold text-sm text-amber-900 dark:text-amber-200">
                  सुधार का विस्तृत विवरण (Applied Harmonization Breakdown):
                </div>
                {harmonizationSummary.ruleSummaries.length === 0 ? (
                  <div className="opacity-75">
                    डेटाबेस पहले से ही इन सभी नियमों के अनुसार पूर्णतः शुद्ध व मानकीकृत है।
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {harmonizationSummary.ruleSummaries.map((s, idx) => (
                      <div key={idx} className="p-2 rounded-xl bg-white/40 dark:bg-black/40 flex items-center justify-between">
                        <span>{s.rule.label}</span>
                        <span className="font-bold text-green-700 dark:text-green-400">
                          {s.count} बार ({s.sakhisCount} साखियां)
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* ======================================================== */}
          {/* SECTION 2: CUSTOM BULK FIND & REPLACE */}
          {/* ======================================================== */}
          <div 
            style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
            className="p-5 sm:p-7 rounded-3xl border shadow-lg space-y-5"
          >
            <div className="flex items-center gap-2 border-b pb-3">
              <Replace className="w-5 h-5 text-amber-700" />
              <h3 className="font-serif font-bold text-base text-amber-950 dark:text-amber-100">
                कस्टम सामूहिक खोज एवं प्रतिस्थापन (Custom Bulk Find & Replace)
              </h3>
            </div>

            {/* Inputs: Search & Replace */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-amber-800 dark:text-amber-300 mb-1 flex items-center gap-1.5">
                  <Search className="w-3.5 h-3.5" />
                  खोजें (Find Term):
                </label>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="उदा. ब्रम्ह, साधू, स्मरण..."
                  style={{ backgroundColor: theme.bgSecondary, borderColor: theme.borderOrnament }}
                  className="w-full px-4 py-2.5 rounded-xl border text-sm font-serif font-bold outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-amber-800 dark:text-amber-300 mb-1 flex items-center gap-1.5">
                  <Replace className="w-3.5 h-3.5" />
                  बदलें (Replace With):
                </label>
                <input
                  type="text"
                  value={replaceTerm}
                  onChange={(e) => setReplaceTerm(e.target.value)}
                  placeholder="उदा. ब्रह्म, साधु, सुमिरन..."
                  style={{ backgroundColor: theme.bgSecondary, borderColor: theme.borderOrnament }}
                  className="w-full px-4 py-2.5 rounded-xl border text-sm font-serif font-bold outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            {/* Target Fields Scope */}
            <div>
              <span className="block text-xs font-bold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                प्रतिस्थापन का क्षेत्र चुनें (Target Fields):
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'text.hi', label: 'मूल साखी हिंदी (text.hi)' },
                  { id: 'text.pb', label: 'ਮੂਲ ਸਾਖੀ ਪੰਜਾਬੀ (text.pb)' },
                  { id: 'text.en', label: 'English Transliterated Verse' },
                  { id: 'bhavarth.hi', label: 'सरल भावार्थ हिंदी (bhavarth.hi)' },
                  { id: 'bhavarth.pb', label: 'ਸਰਲ ਭਾਵਾਰਥ ਪੰਜਾਬੀ (bhavarth.pb)' },
                  { id: 'bhavarth.en', label: 'English Meaning' },
                  { id: 'wordMeanings', label: 'कठिन शब्दार्थ (Word Meanings)' },
                  { id: 'contemplation.hi', label: 'दैनिक चिंतन (Contemplation)' }
                ].map((f) => {
                  const isChecked = selectedFields.includes(f.id as TargetField);
                  return (
                    <button
                      key={f.id}
                      onClick={() => toggleField(f.id as TargetField)}
                      className={`px-3 py-1.5 rounded-xl border text-xs font-serif cursor-pointer transition select-none flex items-center gap-1.5 ${
                        isChecked 
                          ? 'bg-amber-600 text-white font-bold border-amber-600' 
                          : 'bg-black/5 dark:bg-white/5 border-transparent opacity-70'
                      }`}
                    >
                      <input 
                        type="checkbox" 
                        checked={isChecked}
                        onChange={() => {}}
                        className="pointer-events-none accent-white"
                      />
                      <span>{f.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Additional Match Filters */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-serif">
              <label className="flex items-center gap-1.5 cursor-pointer select-none">
                <input 
                  type="checkbox" 
                  checked={matchCase}
                  onChange={(e) => setMatchCase(e.target.checked)}
                  className="accent-amber-600 cursor-pointer"
                />
                <span>केस संवेदनशील (Match Case)</span>
              </label>

              <label className="flex items-center gap-1.5 cursor-pointer select-none">
                <input 
                  type="checkbox" 
                  checked={wholeWord}
                  onChange={(e) => setWholeWord(e.target.checked)}
                  className="accent-amber-600 cursor-pointer"
                />
                <span>पूर्ण शब्द केवल (Whole Word)</span>
              </label>

              <div className="flex items-center gap-2">
                <span className="opacity-75">ग्रंथ फिल्टर:</span>
                <select
                  value={granthaFilter}
                  onChange={(e) => setGranthaFilter(e.target.value)}
                  style={{ backgroundColor: theme.bgSecondary, borderColor: theme.borderOrnament }}
                  className="px-2.5 py-1 rounded-lg border text-xs font-serif font-bold outline-none"
                >
                  <option value="all">सभी ग्रंथ (All Granthas)</option>
                  <option value="Sakhi Sangrah">साखी संग्रह (Sakhi Sangrah)</option>
                  <option value="Kabir Sagar">कबीर सागर (Kabir Sagar)</option>
                  <option value="Bijak">बीजक (Bijak)</option>
                </select>
              </div>
            </div>

            {/* Action Buttons: Preview & Execute */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={handlePreviewBulk}
                disabled={!searchTerm.trim() || selectedFields.length === 0}
                className="px-5 py-2.5 rounded-xl border border-amber-600 text-amber-900 dark:text-amber-100 hover:bg-amber-600/10 font-serif font-bold text-xs sm:text-sm flex items-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Search className="w-4 h-4" />
                <span>पूर्वावलोकन करें (Preview Matches)</span>
              </button>

              <button
                onClick={handleExecuteBulk}
                disabled={!searchTerm.trim() || selectedFields.length === 0}
                className="px-6 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-serif font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Replace className="w-4 h-4" />
                <span>सामूहिक प्रतिस्थापन लागू करें (Execute Bulk Replace)</span>
              </button>
            </div>
          </div>

          {/* ======================================================== */}
          {/* PREVIEW RESULTS DISPLAY */}
          {/* ======================================================== */}
          {previewResult && (
            <div 
              style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
              className="p-5 sm:p-6 rounded-3xl border shadow-xl space-y-4 animate-fadeIn"
            >
              <div className="flex items-center justify-between border-b pb-3">
                <div>
                  <h4 className="font-serif font-bold text-base text-amber-950 dark:text-amber-100 flex items-center gap-2">
                    <Search className="w-4 h-4 text-amber-600" />
                    पूर्वावलोकन परिणाम: {previewResult.affectedSakhisCount} साखियों में {previewResult.totalReplacements} मैच मिले
                  </h4>
                  <p className="text-xs text-amber-800/80 dark:text-amber-300/80 mt-0.5">
                    नीचे दिए गए परिवर्तनों की समीक्षा करें। लागू करने हेतु "सामूहिक प्रतिस्थापन लागू करें" पर क्लिक करें।
                  </p>
                </div>

                {previewResult.totalReplacements > 0 && (
                  <button
                    onClick={handleExecuteBulk}
                    className="px-4 py-2 rounded-xl bg-green-700 hover:bg-green-800 text-white font-serif font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <Check className="w-4 h-4" />
                    <span>अभी प्रतिस्थापित करें</span>
                  </button>
                )}
              </div>

              {previewResult.snippets.length === 0 ? (
                <div className="p-6 text-center text-sm font-serif opacity-75">
                  दिए गए खोज शब्द "{searchTerm}" के लिए कोई मैच नहीं मिला।
                </div>
              ) : (
                <div className="space-y-3 max-h-[450px] overflow-y-auto pr-1">
                  {previewResult.snippets.map((snip, idx) => (
                    <div 
                      key={idx}
                      className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border text-xs font-serif space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-amber-900 dark:text-amber-200">
                          साखी #{snip.sakhiNumber} • {snip.grantha} • {snip.category}
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-950 dark:text-amber-100 font-bold text-[10px]">
                          क्षेत्र: {snip.field} ({snip.matchCount} बार)
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                        <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20">
                          <span className="block font-bold text-red-700 dark:text-red-400 text-[10px] mb-1">
                            वर्तमान (Before):
                          </span>
                          <p className="line-through opacity-75 leading-relaxed">{snip.originalText}</p>
                        </div>
                        <div className="p-2.5 rounded-xl bg-green-500/10 border border-green-500/20">
                          <span className="block font-bold text-green-700 dark:text-green-400 text-[10px] mb-1">
                            संशोधित (After):
                          </span>
                          <p className="font-bold text-green-800 dark:text-green-200 leading-relaxed">
                            {snip.modifiedText}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
