import React, { useState } from 'react';
import { Sakhi, Language, SACRED_BRANDING } from '../types';
import { EightStepSwadhyayData } from '../services/swadhyayEightSteps';
import { ElevenStepSwadhyayData, normalizeElevenStepQuizQuestion } from '../services/swadhyayElevenSteps';
import { useAppTheme, FONT_STYLE_OPTIONS, getFontStyleOption } from '../theme/ThemeContext';
import {
  BookOpen,
  Volume2,
  VolumeX,
  Compass,
  Lightbulb,
  HelpCircle,
  Sparkles,
  Award,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  BookmarkCheck,
  Heart,
  Save,
  Check,
  Eye,
  FileText,
  RotateCcw,
  Scroll,
  Layers,
  Shuffle,
} from 'lucide-react';
import { SmartGlossaryText } from './SmartGlossaryText';
import { sacredHaptics } from '../services/haptics';
import { formatCoupletString } from '../utils/textSanitizer';
import { getStep1ConciseMeaning } from '../services/swadhyayContentEngine';

interface ZenElevenStepsViewerProps {
  sakhi: Sakhi;
  language: Language;
  eightStepData: EightStepSwadhyayData;
  elevenStepData: ElevenStepSwadhyayData;
  rc: any;
  readingTheme: string;
  onSaveToDiary?: (note: string) => void;
  onOpenCertificate: () => void;
  handlePlayStanza?: (text: string, key: string) => void;
  activePlayingStanzaKey?: string | null;
  onExitZen?: () => void;
  onReshuffleQuiz?: () => void;
}

export const ZenElevenStepsViewer: React.FC<ZenElevenStepsViewerProps> = ({
  sakhi,
  language,
  eightStepData,
  elevenStepData,
  rc,
  readingTheme,
  onSaveToDiary,
  onOpenCertificate,
  handlePlayStanza,
  activePlayingStanzaKey,
  onExitZen,
  onReshuffleQuiz,
}) => {
  // Local states for interactivity within Zen mode
  const [activeZenStep, setActiveZenStep] = useState<number>(1);
  const [completedZenSteps, setCompletedZenSteps] = useState<number[]>([1]);
  const [reflectionText, setReflectionText] = useState('');
  const [isSavedToast, setIsSavedToast] = useState(false);
  const [quizIdx, setQuizIdx] = useState<number>(0);
  const [quizSelected, setQuizSelected] = useState<Record<number, number>>({});
  const [showVocab, setShowVocab] = useState(true);
  const [unlockedRahasya, setUnlockedRahasya] = useState(true);
  const [dhyanTimerSeconds, setDhyanTimerSeconds] = useState<number>(180);
  const [isDhyanActive, setIsDhyanActive] = useState(false);

  const { fontFamily, fontStyle, setFontStyle } = useAppTheme();
  const activeFontClass = fontFamily === 'sans' ? 'font-saral font-sans' : 'font-granth font-serif';
  const activeFontStyle: React.CSSProperties = {
    fontFamily: getFontStyleOption(fontStyle).stack,
  };

  // Mark step complete and advance
  const markStepDone = (stepNum: number) => {
    sacredHaptics.lightTap();
    if (!completedZenSteps.includes(stepNum)) {
      setCompletedZenSteps((prev) => [...prev, stepNum]);
    }
    if (stepNum < 11) {
      setActiveZenStep(stepNum + 1);
    }
  };

  const handleSaveReflection = () => {
    if (!reflectionText.trim()) return;
    sacredHaptics.celebration();
    onSaveToDiary?.(reflectionText);
    setIsSavedToast(true);
    if (!completedZenSteps.includes(9)) {
      setCompletedZenSteps((prev) => [...prev, 9]);
    }
    setTimeout(() => setIsSavedToast(false), 3000);
  };

  const currentQuestions = elevenStepData.step5_quiz.questions
    .slice(0, 5)
    .map((q, idx) => normalizeElevenStepQuizQuestion(q, language, idx));
  const currentQ = currentQuestions[quizIdx] || currentQuestions[0];
  const selectedAnswer = quizSelected[quizIdx];

  const stepsList = [
    { num: 1, title: language === 'pb' ? 'ਮੂਲ ਪਾਠ' : language === 'en' ? 'Mool Vani' : 'मूल वाणी', icon: BookOpen },
    { num: 2, title: language === 'pb' ? 'ਸੰਦਰਭ' : language === 'en' ? 'Context' : 'संदर्भ', icon: Compass },
    { num: 3, title: language === 'pb' ? 'ਸ਼ਬਦਾਰਥ' : language === 'en' ? 'Glossary' : 'शब्दार्थ', icon: FileText },
    { num: 4, title: language === 'pb' ? 'ਸਤਿਸੰਗ ਭਾਵਾਰਥ' : language === 'en' ? 'Bhavarth' : 'सत्संग भावार्थ', icon: Lightbulb },
    { num: 5, title: language === 'pb' ? 'ਬੋਧ ਪ੍ਰਸ਼ਨੋਤਰੀ' : language === 'en' ? 'Quiz' : 'बोध प्रश्नोत्तरी', icon: HelpCircle },
    { num: 6, title: language === 'pb' ? 'ਰਹੱਸ' : language === 'en' ? 'Mystery' : 'गूढ़ रहस्य', icon: Sparkles },
    { num: 7, title: language === 'pb' ? 'ਮੁੱਖ ਸਿੱਖਿਆਵਾਂ' : language === 'en' ? 'Teachings' : 'मुख्य शिक्षाएं', icon: BookmarkCheck },
    { num: 8, title: language === 'pb' ? 'ਸਮਾਨਾਂਤਰ ਬਾਣੀ' : language === 'en' ? 'Parallels' : 'समानांतर वाणियाँ', icon: Layers },
    { num: 9, title: language === 'pb' ? 'ਚਿੰਤਨ-ਸੂਤਰ' : language === 'en' ? 'Contemplation' : 'चिंतन सूत्र', icon: Heart },
    { num: 10, title: language === 'pb' ? 'ਧਿਆਨ ਸਾਧਨਾ' : language === 'en' ? 'Meditation' : 'ध्यान साधना', icon: Scroll },
    { num: 11, title: language === 'pb' ? 'ਪ੍ਰਮਾਣ-ਪੱਤਰ' : language === 'en' ? 'Certificate' : 'सिद्धि प्रमाण-पत्र', icon: Award },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 text-left py-2">
      {/* Zen Mode 11-Step Progress Pills Bar + Font Switcher */}
      <div
        style={{ backgroundColor: rc.cardBg, borderColor: rc.border }}
        className="p-3 sm:p-4 rounded-3xl border shadow-sm relative z-20 backdrop-blur-md space-y-2"
      >
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <span className={`text-[11px] font-bold opacity-75 ${activeFontClass}`} style={{ color: rc.maroon }}>
            {language === 'pb' ? '੧੧-ਚਰਣੀ ਸਵਾਧਿਆਇ' : language === 'en' ? '11-Step Study' : '११-चरणीय स्वाध्याय'}
          </span>
          <div className="flex items-center gap-1.5 bg-black/5 dark:bg-white/5 rounded-xl px-2.5 py-1 border border-amber-400/20">
            <span className="text-xs">✒️</span>
            <select
              value={fontStyle}
              onChange={(e) => {
                sacredHaptics.lightTap();
                setFontStyle(e.target.value as any);
              }}
              style={{ color: rc.maroon }}
              className="bg-transparent text-[11px] font-bold cursor-pointer focus:outline-none max-w-[175px]"
              title={language === 'pb' ? 'ਫੌਂਟ ਸ਼ੈਲੀ (7 ਵਿਕਲਪ)' : language === 'en' ? 'Font Style (7 Options)' : 'फॉन्ट शैली चुनें (7 विकल्प)'}
            >
              {FONT_STYLE_OPTIONS.map((opt) => (
                <option key={opt.id} value={opt.id} className="text-black bg-white">
                  {opt.icon} {opt.label[language] || opt.label.hi}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none]">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-max">
            {stepsList.map((st) => {
              const isCur = activeZenStep === st.num;
              const isDone = completedZenSteps.includes(st.num);
              return (
                <button
                  key={st.num}
                  type="button"
                  onClick={() => {
                    sacredHaptics.lightTap();
                    setActiveZenStep(st.num);
                  }}
                  style={{
                    backgroundColor: isCur ? rc.accent : isDone ? rc.accentLight : 'transparent',
                    color: isCur ? '#FFFFFF' : rc.maroon,
                    borderColor: isCur ? rc.accent : rc.borderOrnament,
                  }}
                  className={`px-3 py-1.5 rounded-2xl border text-xs ${activeFontClass} font-black flex items-center gap-1.5 transition cursor-pointer ${
                    isCur ? 'shadow-md scale-105' : 'hover:opacity-80'
                  }`}
                >
                  <span className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-mono border" style={{ borderColor: isCur ? '#FFFFFF' : rc.accent }}>
                    {st.num}
                  </span>
                  <span className="whitespace-nowrap">{st.title}</span>
                  {isDone && <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400 shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* STEP CONTENT CONTAINER */}
      <div
        style={{ backgroundColor: rc.cardBg, borderColor: rc.accent, ...activeFontStyle }}
        className={`p-5 sm:p-8 rounded-3xl border-2 shadow-xl space-y-6 animate-fadeIn ${activeFontClass}`}
      >
        {/* STEP 1: मूल पावन वाणी */}
        {activeZenStep === 1 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: rc.borderOrnament }}>
              <div className="flex items-center gap-2" style={{ color: rc.accent }}>
                <BookOpen className="w-5 h-5 text-amber-600" />
                <h3 className="text-base sm:text-lg font-black tracking-wide">
                  {eightStepData.step1_originalText.title}
                </h3>
              </div>
              {handlePlayStanza && (
                <button
                  type="button"
                  onClick={() => handlePlayStanza(sakhi.text[language] || sakhi.text.hi, 'zen-step-1')}
                  style={{ backgroundColor: rc.accentLight, color: rc.maroon, borderColor: rc.accent }}
                  className="px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 hover:opacity-90 cursor-pointer transition shadow-2xs"
                >
                  {activePlayingStanzaKey === 'zen-step-1' ? <VolumeX className="w-4 h-4 text-amber-700 animate-pulse" /> : <Volume2 className="w-4 h-4 text-amber-700" />}
                  <span>
                    {activePlayingStanzaKey === 'zen-step-1'
                      ? (language === 'pb' ? 'ਰੋਕੋ' : language === 'en' ? 'Pause' : 'विराम')
                      : (language === 'pb' ? 'ਸੁਣੋ' : language === 'en' ? 'Listen' : 'श्रवण करें')}
                  </span>
                </button>
              )}
            </div>

            <div className="p-6 sm:p-10 rounded-3xl border-2 border-[#d6ba8d]/80 bg-gradient-to-br from-[#fbf6e9] via-[#f7ebd4] to-[#f2dfbf] dark:from-[#2c241c] dark:via-[#221b14] dark:to-[#1a140f] text-[#38200b] dark:text-[#f7e7ce] shadow-inner text-center space-y-4">
              <div className="text-xl sm:text-2xl font-black leading-relaxed whitespace-pre-line">
                {formatCoupletString(sakhi.text[language] || sakhi.text.hi)}
              </div>
              <div className="text-xs text-amber-800 dark:text-amber-300 font-bold tracking-widest pt-2">
                {SACRED_BRANDING.footer[language] || SACRED_BRANDING.footer.hi}
              </div>
            </div>

            {/* Step 1 Crisp Translation (सरल अर्थ) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/25 space-y-1.5">
              <div className="text-xs font-bold text-amber-900 dark:text-amber-200">
                {language === 'pb' ? 'ਸਰਲ ਅਰਥ:' : language === 'en' ? 'Literal Meaning:' : 'सरल अर्थ:'}
              </div>
              <div className="text-sm sm:text-base leading-relaxed text-stone-800 dark:text-stone-200">
                <SmartGlossaryText text={getStep1ConciseMeaning(sakhi, language)} language={language} />
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={() => markStepDone(1)}
                style={{ backgroundColor: rc.accent, color: '#FFFFFF' }}
                className="px-6 py-2.5 rounded-2xl font-black text-xs sm:text-sm flex items-center gap-2 shadow-md hover:opacity-90 cursor-pointer transition"
              >
                <span>{language === 'pb' ? 'ਅਗਲਾ ਚਰਣ: ਸੰਦਰਭ' : language === 'en' ? 'Next: Context' : 'अगला चरण: संदर्भ'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: साखी संदर्भ और आध्यात्मिक पृष्ठभूमि */}
        {activeZenStep === 2 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: rc.borderOrnament }}>
              <div className="flex items-center gap-2" style={{ color: rc.accent }}>
                <Compass className="w-5 h-5 text-amber-600" />
                <h3 className="text-base sm:text-lg font-black tracking-wide">
                  {eightStepData.step2_context.title}
                </h3>
              </div>
              {handlePlayStanza && (
                <button
                  type="button"
                  onClick={() => handlePlayStanza(`${eightStepData.step2_context.foundationNote}. ${eightStepData.step2_context.relevanceText}`, 'zen-step-2')}
                  style={{ backgroundColor: rc.accentLight, color: rc.maroon, borderColor: rc.accent }}
                  className="px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 hover:opacity-90 cursor-pointer transition shadow-2xs"
                >
                  {activePlayingStanzaKey === 'zen-step-2' ? <VolumeX className="w-4 h-4 text-amber-700" /> : <Volume2 className="w-4 h-4 text-amber-700" />}
                  <span>
                    {activePlayingStanzaKey === 'zen-step-2'
                      ? (language === 'pb' ? 'ਰੋਕੋ' : language === 'en' ? 'Pause' : 'विराम')
                      : (language === 'pb' ? 'ਸੁਣੋ' : language === 'en' ? 'Listen' : 'श्रवण')}
                  </span>
                </button>
              )}
            </div>

            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-sm leading-relaxed space-y-2">
              <div className="font-bold text-amber-900 dark:text-amber-200">
                {eightStepData.step2_context.foundationNote}
              </div>
              <p className="text-stone-700 dark:text-stone-300">
                {eightStepData.step2_context.relevanceText}
              </p>
              <div className="text-xs text-amber-800 dark:text-amber-300 italic pt-1 border-t border-amber-500/20">
                ✨ {eightStepData.step2_context.spiritualSignificance}
              </div>
            </div>

            <div className="flex justify-between items-center pt-2">
              <button
                type="button"
                onClick={() => setActiveZenStep(1)}
                className="px-4 py-2 rounded-2xl border text-xs font-bold flex items-center gap-1.5 cursor-pointer hover:bg-black/5"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>{language === 'pb' ? 'ਪਿਛਲਾ' : language === 'en' ? 'Previous' : 'पिछला'}</span>
              </button>
              <button
                type="button"
                onClick={() => markStepDone(2)}
                style={{ backgroundColor: rc.accent, color: '#FFFFFF' }}
                className="px-6 py-2.5 rounded-2xl font-black text-xs sm:text-sm flex items-center gap-2 shadow-md hover:opacity-90 cursor-pointer transition"
              >
                <span>{language === 'pb' ? 'ਅਗਲਾ: ਸ਼ਬਦਾਰਥ' : language === 'en' ? 'Next: Glossary' : 'अगला: शब्दार्थ'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: पावन शब्दार्थ व आध्यात्मिक कोष */}
        {activeZenStep === 3 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: rc.borderOrnament }}>
              <div className="flex items-center gap-2" style={{ color: rc.accent }}>
                <FileText className="w-5 h-5 text-amber-600" />
                <h3 className="text-base sm:text-lg font-black tracking-wide">
                  {eightStepData.step3_vocabulary.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowVocab(!showVocab)}
                className="text-xs font-bold text-amber-700 dark:text-amber-300 hover:underline cursor-pointer"
              >
                {showVocab
                  ? (language === 'pb' ? 'ਸੰਖੇਪ ਕਰੋ' : language === 'en' ? 'Collapse' : 'संक्षिप्त करें')
                  : (language === 'pb' ? 'ਵਿਸਥਾਰ ਕਰੋ' : language === 'en' ? 'Expand' : 'विस्तार करें')}
              </button>
            </div>

            {showVocab && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {eightStepData.step3_vocabulary.words.map((item, idx) => (
                  <div
                    key={idx}
                    style={{ backgroundColor: rc.bg, borderColor: rc.border }}
                    className="p-3.5 rounded-2xl border shadow-2xs space-y-1 hover:border-amber-500/50 transition"
                  >
                    <div className="font-bold text-sm text-amber-800 dark:text-amber-300">
                      {idx + 1}. {item.word}
                    </div>
                    <div className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                      {item.meaning}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex justify-between items-center pt-2">
              <button
                type="button"
                onClick={() => setActiveZenStep(2)}
                className="px-4 py-2 rounded-2xl border text-xs font-bold flex items-center gap-1.5 cursor-pointer hover:bg-black/5"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>{language === 'pb' ? 'ਪਿਛਲਾ' : language === 'en' ? 'Previous' : 'पिछला'}</span>
              </button>
              <button
                type="button"
                onClick={() => markStepDone(3)}
                style={{ backgroundColor: rc.accent, color: '#FFFFFF' }}
                className="px-6 py-2.5 rounded-2xl font-black text-xs sm:text-sm flex items-center gap-2 shadow-md hover:opacity-90 cursor-pointer transition"
              >
                <span>{language === 'pb' ? 'ਅਗਲਾ: ਸਤਿਸੰਗ ਭਾਵਾਰਥ' : language === 'en' ? 'Next: Satsang & Example' : 'अगला: सत्संग भावार्थ'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: गहन सत्संग भावार्थ व माया-मन विश्लेषण */}
        {activeZenStep === 4 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: rc.borderOrnament }}>
              <div className="flex items-center gap-2" style={{ color: rc.accent }}>
                <Lightbulb className="w-5 h-5 text-amber-600" />
                <h3 className="text-base sm:text-lg font-black tracking-wide">
                  {eightStepData.step4_bhavarthSatsang.title}
                </h3>
              </div>
              {handlePlayStanza && (
                <button
                  type="button"
                  onClick={() => handlePlayStanza(eightStepData.step4_bhavarthSatsang.bhavarth, 'zen-step-4')}
                  style={{ backgroundColor: rc.accentLight, color: rc.maroon, borderColor: rc.accent }}
                  className="px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 hover:opacity-90 cursor-pointer transition shadow-2xs"
                >
                  {activePlayingStanzaKey === 'zen-step-4' ? <VolumeX className="w-4 h-4 text-amber-700" /> : <Volume2 className="w-4 h-4 text-amber-700" />}
                  <span>
                    {activePlayingStanzaKey === 'zen-step-4'
                      ? (language === 'pb' ? 'ਰੋਕੋ' : language === 'en' ? 'Pause' : 'विराम')
                      : (language === 'pb' ? 'ਸੁਣੋ' : language === 'en' ? 'Listen' : 'श्रवण')}
                  </span>
                </button>
              )}
            </div>

            <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-4">
              <div className="space-y-1.5">
                <div className="text-xs font-bold text-amber-900 dark:text-amber-200">
                  {language === 'pb'
                    ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਇਹ ਉਪਦੇਸ਼ ਕਿਉਂ ਦਿੱਤਾ:'
                    : language === 'en'
                    ? 'Why Satguru Kabir Saheb Gave This Teaching:'
                    : 'सतगुरु कबीर साहेब ने यह उपदेश क्यों दिया:'}
                </div>
                <div className="text-sm sm:text-base leading-relaxed text-stone-800 dark:text-stone-200 whitespace-pre-line">
                  <SmartGlossaryText text={eightStepData.step4_bhavarthSatsang.bhavarth} language={language} />
                </div>
              </div>
              {eightStepData.step4_bhavarthSatsang.deepSatsangGyan && (
                <div className="p-4 rounded-xl bg-amber-500/10 border-l-4 border-amber-600 text-xs sm:text-sm text-stone-700 dark:text-stone-300 space-y-1.5">
                  <div className="font-bold text-amber-900 dark:text-amber-200">
                    {language === 'pb'
                      ? '।। ਰੋਜ਼ਾਨਾ ਜੀਵਨ ਉਦਾਹਰਨ ਤੇ ਵਿਵਹਾਰਕ ਸਤਿਸੰਗ ।।'
                      : language === 'en'
                      ? '।। Everyday Life Example & Practical Satsang ।।'
                      : '।। दैनिक जीवन दृष्टांत एवं व्यवहारिक सत्संग ।।'}
                  </div>
                  <p className="whitespace-pre-line leading-relaxed">{eightStepData.step4_bhavarthSatsang.deepSatsangGyan}</p>
                </div>
              )}
              {eightStepData.step4_bhavarthSatsang.mindMayaAnalysis && (
                <div className="p-3.5 rounded-xl bg-black/5 dark:bg-white/5 border border-amber-500/20 text-xs text-stone-700 dark:text-stone-300 whitespace-pre-line leading-relaxed">
                  {eightStepData.step4_bhavarthSatsang.mindMayaAnalysis}
                </div>
              )}
            </div>

            <div className="flex justify-between items-center pt-2">
              <button
                type="button"
                onClick={() => setActiveZenStep(3)}
                className="px-4 py-2 rounded-2xl border text-xs font-bold flex items-center gap-1.5 cursor-pointer hover:bg-black/5"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>{language === 'pb' ? 'ਪਿਛਲਾ' : language === 'en' ? 'Previous' : 'पिछला'}</span>
              </button>
              <button
                type="button"
                onClick={() => markStepDone(4)}
                style={{ backgroundColor: rc.accent, color: '#FFFFFF' }}
                className="px-6 py-2.5 rounded-2xl font-black text-xs sm:text-sm flex items-center gap-2 shadow-md hover:opacity-90 cursor-pointer transition"
              >
                <span>{language === 'pb' ? 'ਅਗਲਾ: ਬੋਧ ਪ੍ਰਸ਼ਨੋਤਰੀ' : language === 'en' ? 'Next: Quiz' : 'अगला: बोध प्रश्नोत्तरी'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 5: बोध प्रश्नोत्तरी */}
        {activeZenStep === 5 && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b pb-3" style={{ borderColor: rc.borderOrnament }}>
              <div className="flex items-center gap-2" style={{ color: rc.accent }}>
                <HelpCircle className="w-5 h-5 text-amber-600" />
                <h3 className="text-base sm:text-lg font-black tracking-wide">
                  {elevenStepData.step5_quiz.title}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                {onReshuffleQuiz && (
                  <button
                    type="button"
                    onClick={() => {
                      sacredHaptics.lightTap();
                      setQuizIdx(0);
                      setQuizSelected({});
                      onReshuffleQuiz();
                    }}
                    style={{ borderColor: rc.accent, color: rc.maroon, backgroundColor: rc.accentLight }}
                    className="px-2.5 py-1 rounded-xl border text-[11px] font-bold flex items-center gap-1 cursor-pointer hover:opacity-90 transition"
                  >
                    <Shuffle className="w-3 h-3" />
                    <span>{language === 'pb' ? 'ਕ੍ਰਮ ਬਦਲੋ' : language === 'en' ? 'Shuffle' : 'क्रम बदलें'}</span>
                  </button>
                )}
                <span className="text-xs font-mono font-bold text-amber-700 dark:text-amber-300">
                  {language === 'pb' ? 'ਪ੍ਰਸ਼ਨ' : language === 'en' ? 'Q' : 'प्रश्न'} {quizIdx + 1} / {currentQuestions.length}
                </span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-4">
              <h4 className="text-sm sm:text-base font-bold text-stone-900 dark:text-stone-100">
                {quizIdx + 1}. {currentQ.questionText || (currentQ as any).question}
              </h4>

              <div className="space-y-2">
                {currentQ.options.map((opt, oIdx) => {
                  const isChosen = selectedAnswer === oIdx;
                  const isCorrect = opt.isCorrect;
                  const showResult = selectedAnswer !== undefined;
                  return (
                    <button
                      key={oIdx}
                      type="button"
                      onClick={() => {
                        sacredHaptics.lightTap();
                        setQuizSelected((prev) => ({ ...prev, [quizIdx]: oIdx }));
                      }}
                      className={`w-full p-3 rounded-xl border text-left text-xs sm:text-sm font-medium transition cursor-pointer flex items-center justify-between gap-2 ${
                        showResult
                          ? isCorrect
                            ? 'bg-emerald-500/20 border-emerald-500 text-emerald-900 dark:text-emerald-200'
                            : isChosen
                            ? 'bg-red-500/20 border-red-500 text-red-900 dark:text-red-200'
                            : 'bg-stone-500/5 border-stone-200 dark:border-stone-700 opacity-60'
                          : isChosen
                          ? 'bg-amber-500/20 border-amber-600'
                          : 'bg-black/5 dark:bg-white/5 border-stone-200 dark:border-stone-700 hover:border-amber-400'
                      }`}
                    >
                      <span>{String.fromCharCode(65 + oIdx)}. {opt.text}</span>
                      {showResult && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                    </button>
                  );
                })}
              </div>

              {selectedAnswer !== undefined && (() => {
                const chosenOpt = currentQ.options[selectedAnswer];
                const correctIdx = currentQ.options.findIndex((o) => o.isCorrect);
                const correctOpt = correctIdx >= 0 ? currentQ.options[correctIdx] : undefined;
                const cleanSelectedFeedback =
                  (chosenOpt?.feedback || '').replace(/^[✓✗✔✕❌]\s*[^!|।]+[!|।]\s*/, '').trim() ||
                  chosenOpt?.feedback ||
                  '';
                const cleanCorrectFeedback =
                  (correctOpt?.feedback || currentQ.explanation || '')
                    .replace(/^[✓✗✔✕❌]\s*[^!|।]+[!|।]\s*/, '')
                    .trim() ||
                  correctOpt?.feedback ||
                  currentQ.explanation ||
                  '';
                return (
                  <div
                    style={activeFontStyle}
                    className={`p-3.5 rounded-xl border text-xs ${activeFontClass} leading-relaxed space-y-2 ${
                      chosenOpt?.isCorrect
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-900 dark:text-emerald-200'
                        : 'bg-rose-500/10 border-rose-500/30 text-rose-900 dark:text-rose-200'
                    }`}
                  >
                    <p className="font-bold flex items-center gap-1.5 text-xs sm:text-sm">
                      {chosenOpt?.isCorrect
                        ? (language === 'pb' ? '✓ ਸਹੀ ਉੱਤਰ!' : language === 'en' ? '✓ Correct Answer!' : '✓ सही उत्तर!')
                        : (language === 'pb' ? '✗ ਇਹ ਵਿਕਲਪ ਸਹੀ ਨਹੀਂ ਹੈ' : language === 'en' ? '✗ Incorrect Option' : '✗ यह विकल्प सही नहीं है')}
                    </p>
                    <p className="opacity-95 leading-relaxed">
                      <strong>
                        {chosenOpt?.isCorrect
                          ? (language === 'pb' ? 'ਸਹੀ ਉੱਤਰ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ: ' : language === 'en' ? 'Why this is correct: ' : 'सही उत्तर का विश्लेषण: ')
                          : (language === 'pb' ? 'ਗਲਤ ਉੱਤਰ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ: ' : language === 'en' ? 'Why this choice is incorrect: ' : 'गलत उत्तर का विश्लेषण: ')}
                      </strong>
                      {cleanSelectedFeedback}
                    </p>
                    {!chosenOpt?.isCorrect && correctOpt && (
                      <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-900 dark:text-emerald-200 space-y-1">
                        <p className="font-bold">
                          ✓ {language === 'pb' ? 'ਸਹੀ ਉੱਤਰ' : language === 'en' ? 'Correct Answer' : 'सही उत्तर'}{' '}
                          ({String.fromCharCode(65 + correctIdx)}): {correctOpt.text}
                        </p>
                        {cleanCorrectFeedback && (
                          <p className="opacity-95 leading-relaxed">
                            <strong>{language === 'pb' ? 'ਵਿਸ਼ਲੇਸ਼ਣ: ' : language === 'en' ? 'Explanation: ' : 'विश्लेषण: '}</strong>
                            {cleanCorrectFeedback}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                );
              })()}

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  disabled={quizIdx === 0}
                  onClick={() => setQuizIdx((i) => Math.max(0, i - 1))}
                  className="px-3 py-1.5 rounded-xl border text-xs font-bold disabled:opacity-30 cursor-pointer"
                >
                  {language === 'pb' ? 'ਪਿਛਲਾ ਪ੍ਰਸ਼ਨ' : language === 'en' ? 'Prev Question' : 'पिछला प्रश्न'}
                </button>
                {quizIdx < currentQuestions.length - 1 ? (
                  <button
                    type="button"
                    onClick={() => setQuizIdx((i) => i + 1)}
                    className="px-3 py-1.5 rounded-xl bg-[#8B2500] text-white text-xs font-bold cursor-pointer"
                  >
                    {language === 'pb' ? 'ਅਗਲਾ ਪ੍ਰਸ਼ਨ' : language === 'en' ? 'Next Question' : 'अगला प्रश्न'}
                  </button>
                ) : (
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold">
                    {language === 'pb' ? '✓ ਸਾਰੇ ਪ੍ਰਸ਼ਨ ਪੂਰਨ!' : language === 'en' ? '✓ All Questions Reviewed!' : '✓ सभी प्रश्न पूर्ण!'}
                  </span>
                )}
              </div>
            </div>

            <div className="flex justify-between items-center pt-2">
              <button
                type="button"
                onClick={() => setActiveZenStep(4)}
                className="px-4 py-2 rounded-2xl border text-xs font-bold flex items-center gap-1.5 cursor-pointer hover:bg-black/5"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>{language === 'pb' ? 'ਪਿਛਲਾ' : language === 'en' ? 'Previous' : 'पिछला'}</span>
              </button>
              <button
                type="button"
                onClick={() => markStepDone(5)}
                style={{ backgroundColor: rc.accent, color: '#FFFFFF' }}
                className="px-6 py-2.5 rounded-2xl font-black text-xs sm:text-sm flex items-center gap-2 shadow-md hover:opacity-90 cursor-pointer transition"
              >
                <span>{language === 'pb' ? 'ਅਗਲਾ: ਗੂੜ੍ਹ ਰਹੱਸ' : language === 'en' ? 'Next: Esoteric Mystery' : 'अगला: गूढ़ रहस्य'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 6: आध्यात्मिक रहस्य व गूढ़ संकेत */}
        {activeZenStep === 6 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: rc.borderOrnament }}>
              <div className="flex items-center gap-2" style={{ color: rc.accent }}>
                <Sparkles className="w-5 h-5 text-amber-600" />
                <h3 className="text-base sm:text-lg font-black tracking-wide">
                  {elevenStepData.step6_spiritualInsight.title}
                </h3>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs sm:text-sm leading-relaxed space-y-3">
              <p className={`${activeFontClass} text-stone-800 dark:text-stone-200 whitespace-pre-line`} style={activeFontStyle}>
                {elevenStepData.step6_spiritualInsight.mysticalCoding}
              </p>
              <div className="text-xs font-bold text-amber-800 dark:text-amber-300">
                ✨ {elevenStepData.step6_spiritualInsight.subtitle}
              </div>
            </div>

            <div className="flex justify-between items-center pt-2">
              <button
                type="button"
                onClick={() => setActiveZenStep(5)}
                className="px-4 py-2 rounded-2xl border text-xs font-bold flex items-center gap-1.5 cursor-pointer hover:bg-black/5"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>{language === 'pb' ? 'ਪਿਛਲਾ' : language === 'en' ? 'Previous' : 'पिछला'}</span>
              </button>
              <button
                type="button"
                onClick={() => markStepDone(6)}
                style={{ backgroundColor: rc.accent, color: '#FFFFFF' }}
                className="px-6 py-2.5 rounded-2xl font-black text-xs sm:text-sm flex items-center gap-2 shadow-md hover:opacity-90 cursor-pointer transition"
              >
                <span>{language === 'pb' ? 'ਅਗਲਾ: ਮੁੱਖ ਸਿੱਖਿਆਵਾਂ' : language === 'en' ? 'Next: Key Teachings' : 'अगला: मुख्य शिक्षाएं'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 7: मुख्य आध्यात्मिक शिक्षाएँ */}
        {activeZenStep === 7 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: rc.borderOrnament }}>
              <div className="flex items-center gap-2" style={{ color: rc.accent }}>
                <BookmarkCheck className="w-5 h-5 text-amber-600" />
                <h3 className="text-base sm:text-lg font-black tracking-wide">
                  {elevenStepData.step7_keyLearning.title}
                </h3>
              </div>
            </div>

            <div className="space-y-2">
              {elevenStepData.step7_keyLearning.bulletPoints.map((pt, idx) => (
                <div
                  key={idx}
                  style={{ backgroundColor: rc.bg, borderColor: rc.border }}
                  className="p-3.5 rounded-2xl border flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed"
                >
                  <span className="w-5 h-5 rounded-full bg-amber-600/15 text-amber-800 dark:text-amber-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-stone-800 dark:text-stone-200">{pt}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center pt-2">
              <button
                type="button"
                onClick={() => setActiveZenStep(6)}
                className="px-4 py-2 rounded-2xl border text-xs font-bold flex items-center gap-1.5 cursor-pointer hover:bg-black/5"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>{language === 'pb' ? 'ਪਿਛਲਾ' : language === 'en' ? 'Previous' : 'पिछला'}</span>
              </button>
              <button
                type="button"
                onClick={() => markStepDone(7)}
                style={{ backgroundColor: rc.accent, color: '#FFFFFF' }}
                className="px-6 py-2.5 rounded-2xl font-black text-xs sm:text-sm flex items-center gap-2 shadow-md hover:opacity-90 cursor-pointer transition"
              >
                <span>{language === 'pb' ? 'ਅਗਲਾ: ਸਮਾਨਾਂਤਰ ਬਾਣੀ' : language === 'en' ? 'Next: Parallel Vanis' : 'अगला: समानांतर वाणियाँ'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 8: समानांतर वाणियाँ */}
        {activeZenStep === 8 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: rc.borderOrnament }}>
              <div className="flex items-center gap-2" style={{ color: rc.accent }}>
                <Layers className="w-5 h-5 text-amber-600" />
                <h3 className="text-base sm:text-lg font-black tracking-wide">
                  {elevenStepData.step8_crossReferences.title}
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              {elevenStepData.step8_crossReferences.references.map((ref, idx) => (
                <div
                  key={idx}
                  style={{ backgroundColor: rc.bg, borderColor: rc.border }}
                  className="p-4 rounded-2xl border space-y-2 shadow-2xs"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-amber-800 dark:text-amber-300">
                    <span className="flex items-center gap-1.5">
                      <span className="px-1.5 py-0.5 rounded bg-amber-500/15 text-[10px] font-mono">
                        {idx + 1} / {elevenStepData.step8_crossReferences.references.length}
                      </span>
                      <span>📖 {ref.source}</span>
                    </span>
                    <span className="opacity-70">{ref.context}</span>
                  </div>
                  <blockquote className={`p-3 rounded-xl bg-amber-500/10 border-l-4 border-amber-600 text-xs sm:text-sm ${activeFontClass} italic text-stone-800 dark:text-stone-200 whitespace-pre-line`} style={activeFontStyle}>
                    "{ref.verse}"
                  </blockquote>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    <strong className="text-amber-900 dark:text-amber-200">
                      {language === 'pb'
                        ? 'ਰੂਹਾਨੀ ਸਾਂਝ: '
                        : language === 'en'
                        ? 'Spiritual Connection: '
                        : 'आध्यात्मिक सामंजस्य: '}
                    </strong>
                    {ref.connection}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center pt-2">
              <button
                type="button"
                onClick={() => setActiveZenStep(7)}
                className="px-4 py-2 rounded-2xl border text-xs font-bold flex items-center gap-1.5 cursor-pointer hover:bg-black/5"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>{language === 'pb' ? 'ਪਿਛਲਾ' : language === 'en' ? 'Previous' : 'पिछला'}</span>
              </button>
              <button
                type="button"
                onClick={() => markStepDone(8)}
                style={{ backgroundColor: rc.accent, color: '#FFFFFF' }}
                className="px-6 py-2.5 rounded-2xl font-black text-xs sm:text-sm flex items-center gap-2 shadow-md hover:opacity-90 cursor-pointer transition"
              >
                <span>{language === 'pb' ? 'ਅਗਲਾ: ਚਿੰਤਨ ਸੂਤਰ' : language === 'en' ? 'Next: Contemplation' : 'अगला: चिंतन सूत्र'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 9: चिंतन सूत्र व आत्म-निरीक्षण */}
        {activeZenStep === 9 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: rc.borderOrnament }}>
              <div className="flex items-center gap-2" style={{ color: rc.accent }}>
                <Heart className="w-5 h-5 text-amber-600" />
                <h3 className="text-base sm:text-lg font-black tracking-wide">
                  {elevenStepData.step9_contemplation.title}
                </h3>
              </div>
            </div>

            <div className="space-y-3">
              <blockquote
                style={{ borderColor: rc.accent, ...activeFontStyle }}
                className={`p-4 rounded-2xl bg-amber-500/10 border-l-4 text-sm sm:text-base ${activeFontClass} italic text-stone-800 dark:text-stone-200`}
              >
                "{sakhi.contemplation[language]}"
              </blockquote>

              <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-2">
                <div className="text-xs font-bold text-amber-900 dark:text-amber-200">
                  {language === 'pb' ? 'ਆਤਮ-ਨਿਰੀਖਣ ਪ੍ਰਸ਼ਨ:' : language === 'en' ? 'Self-Inquiry Questions:' : 'आत्म-निरीक्षण प्रश्न:'}
                </div>
                <ul className="list-disc list-inside text-xs text-stone-700 dark:text-stone-300 space-y-1">
                  {elevenStepData.step9_contemplation.questions.map((q, idx) => (
                    <li key={idx}>{q}</li>
                  ))}
                </ul>
              </div>

              {/* Reflection note input */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-amber-800 dark:text-amber-300 block">
                  {language === 'pb' ? 'ਆਪਣਾ ਅਨੁਭਵ / ਡਾਇਰੀ ਨੋਟ ਲਿਖੋ:' : language === 'en' ? 'Write Your Reflection / Diary Note:' : 'अपना अनुभव / डायरी नोट लिखें:'}
                </label>
                <textarea
                  value={reflectionText}
                  onChange={(e) => setReflectionText(e.target.value)}
                  placeholder={
                    language === 'pb'
                      ? 'ਸਤਿਗੁਰੂ ਦੀ ਇਸ ਸਾਖੀ ਤੋਂ ਮੇਰੇ ਜੀਵਨ ਵਿੱਚ ਕੀ ਬੋਧ ਪ੍ਰਗਟ ਹੋਇਆ...'
                      : language === 'en'
                      ? 'What insight did this sacred Sakhi awaken in my life today...'
                      : 'सतगुरु की इस साखी से मेरे जीवन में क्या बोध प्रकट हुआ...'
                  }
                  rows={3}
                  style={activeFontStyle}
                  className={`w-full p-3 rounded-2xl border border-amber-500/30 bg-black/5 dark:bg-white/5 text-xs sm:text-sm ${activeFontClass} focus:outline-none focus:ring-2 focus:ring-amber-500/50`}
                />
                <button
                  type="button"
                  onClick={handleSaveReflection}
                  style={{ backgroundColor: rc.accent, color: '#FFFFFF' }}
                  className="px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm hover:opacity-90 cursor-pointer"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>{language === 'pb' ? 'ਡਾਇਰੀ ਵਿੱਚ ਸੁਰੱਖਿਅਤ ਕਰੋ' : language === 'en' ? 'Save to Diary' : 'डायरी में सहेजें'}</span>
                </button>
                {isSavedToast && (
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold block">
                    {language === 'pb'
                      ? '✓ ਤੁਹਾਡਾ ਚਿੰਤਨ ਡਾਇਰੀ ਵਿੱਚ ਸੁਰੱਖਿਅਤ ਹੋ ਗਿਆ ਹੈ!'
                      : language === 'en'
                      ? '✓ Your reflection has been saved to your Diary!'
                      : '✓ आपका चिंतन डायरी में सुरक्षित हो गया है!'}
                  </span>
                )}
              </div>
            </div>

            <div className="flex justify-between items-center pt-2">
              <button
                type="button"
                onClick={() => setActiveZenStep(8)}
                className="px-4 py-2 rounded-2xl border text-xs font-bold flex items-center gap-1.5 cursor-pointer hover:bg-black/5"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>{language === 'pb' ? 'ਪਿਛਲਾ' : language === 'en' ? 'Previous' : 'पिछला'}</span>
              </button>
              <button
                type="button"
                onClick={() => markStepDone(9)}
                style={{ backgroundColor: rc.accent, color: '#FFFFFF' }}
                className="px-6 py-2.5 rounded-2xl font-black text-xs sm:text-sm flex items-center gap-2 shadow-md hover:opacity-90 cursor-pointer transition"
              >
                <span>{language === 'pb' ? 'ਅਗਲਾ: ਧਿਆਨ ਸਾਧਨਾ' : language === 'en' ? 'Next: Meditation' : 'अगला: ध्यान साधना'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 10: ध्यान साधना व श्वास-प्रश्वास */}
        {activeZenStep === 10 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: rc.borderOrnament }}>
              <div className="flex items-center gap-2" style={{ color: rc.accent }}>
                <Scroll className="w-5 h-5 text-amber-600" />
                <h3 className="text-base sm:text-lg font-black tracking-wide">
                  {elevenStepData.step10_audioIntegration.title}
                </h3>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-500/10 via-amber-600/5 to-amber-700/10 border border-amber-500/30 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-amber-600/20 flex items-center justify-center border-2 border-amber-500/40 animate-pulse">
                <Sparkles className="w-8 h-8 text-amber-600" />
              </div>
              <h4 className="text-base font-black text-amber-900 dark:text-amber-200">
                {elevenStepData.step10_audioIntegration.sadhanaMethodName}
              </h4>
              <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 max-w-lg mx-auto">
                {elevenStepData.step10_audioIntegration.subtitle}
              </p>

              <div className="space-y-2 text-left pt-2">
                {elevenStepData.step10_audioIntegration.stages.map((stg) => (
                  <div
                    key={stg.stageNumber}
                    className="p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-amber-500/20 text-xs space-y-0.5"
                  >
                    <span className="font-bold text-amber-800 dark:text-amber-300">
                      {language === 'pb' ? 'ਚਰਣ' : language === 'en' ? 'Stage' : 'चरण'} {stg.stageNumber}: {stg.title}
                    </span>
                    <p className="text-stone-600 dark:text-stone-400">{stg.instruction}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center pt-2">
              <button
                type="button"
                onClick={() => setActiveZenStep(9)}
                className="px-4 py-2 rounded-2xl border text-xs font-bold flex items-center gap-1.5 cursor-pointer hover:bg-black/5"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>{language === 'pb' ? 'ਪਿਛਲਾ' : language === 'en' ? 'Previous' : 'पिछला'}</span>
              </button>
              <button
                type="button"
                onClick={() => markStepDone(10)}
                style={{ backgroundColor: rc.accent, color: '#FFFFFF' }}
                className="px-6 py-2.5 rounded-2xl font-black text-xs sm:text-sm flex items-center gap-2 shadow-md hover:opacity-90 cursor-pointer transition"
              >
                <span>{language === 'pb' ? 'ਅਗਲਾ: ਪ੍ਰਮਾਣ-ਪੱਤਰ' : language === 'en' ? 'Next: Certificate' : 'अगला: सिद्धि प्रमाण-पत्र'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 11: पावन स्वाध्याय सिद्धि प्रमाण-पत्र */}
        {activeZenStep === 11 && (
          <div className="space-y-6 text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-amber-500 to-amber-600 text-white flex items-center justify-center shadow-xl animate-bounce">
              <Award className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-sm sm:text-base font-bold tracking-wide text-amber-700 dark:text-amber-300 whitespace-nowrap">
                {SACRED_BRANDING.header[language] || SACRED_BRANDING.header.hi}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-amber-900 dark:text-amber-100">
                {elevenStepData.step11_blessingCertificate.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 max-w-md mx-auto">
                {elevenStepData.step11_blessingCertificate.subtitle}
              </p>
            </div>

            <div style={activeFontStyle} className={`p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs sm:text-sm italic ${activeFontClass} text-amber-900 dark:text-amber-200`}>
              "{elevenStepData.step11_blessingCertificate.oneLineBlessing}"
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  sacredHaptics.celebration();
                  onOpenCertificate();
                }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white font-serif font-black text-sm shadow-xl hover:scale-105 active:scale-95 transition cursor-pointer flex items-center justify-center gap-2 ring-2 ring-amber-400/50"
              >
                <Award className="w-5 h-5 text-amber-200" />
                <span>
                  {language === 'pb' ? 'ਪ੍ਰਮਾਣ-ਪੱਤਰ ਦੇਖੋ ਤੇ ਡਾਊਨਲੋਡ ਕਰੋ' : language === 'en' ? 'View & Download Certificate' : 'प्रमाण-पत्र देखें व डाउनलोड करें'}
                </span>
              </button>

              {onExitZen && (
                <button
                  type="button"
                  onClick={onExitZen}
                  className="w-full sm:w-auto px-5 py-3 rounded-2xl border border-stone-300 dark:border-stone-700 text-xs font-bold hover:bg-black/5 transition cursor-pointer"
                >
                  {language === 'pb' ? 'ਆਮ ਸਕ੍ਰੀਨ ਤੇ ਪਰਤੋ' : language === 'en' ? 'Exit Zen Mode' : 'सामान्य स्क्रीन पर लौटें'}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
