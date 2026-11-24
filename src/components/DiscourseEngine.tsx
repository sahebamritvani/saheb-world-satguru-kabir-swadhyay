import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  BookOpen,
  Volume2,
  VolumeX,
  Type,
  ChevronDown,
  ChevronUp,
  Unlock,
  Lock,
  Compass,
  Sparkles,
  Sliders,
  Music,
  CheckCircle2,
  Copy,
  Share2,
  Edit3,
  Search,
  Check
} from 'lucide-react';
import { Language, Sakhi } from '../types';
import { sakhisDatabase } from '../data/sakhis';
import { useAppTheme } from '../theme/ThemeContext';
import { speechReciter, ambientReaderAudio, DhunSoundType } from '../services/audioDhun';
import { parseSakhiInto5StepDiscourse, Discourse5StepData } from '../services/discourseParser';
import { UnifiedDohaCard } from './UnifiedDohaCard';

interface DiscourseEngineProps {
  language: Language;
  initialSakhi?: Sakhi;
  onOpenBlessing?: (title: string, message: string) => void;
  onClose?: () => void;
}

export const DiscourseEngine: React.FC<DiscourseEngineProps> = ({
  language,
  initialSakhi,
}) => {
  const { theme } = useAppTheme();

  // Selected or Pasted Sakhi state
  const [selectedSakhi, setSelectedSakhi] = useState<Sakhi>(() => {
    return initialSakhi || sakhisDatabase[0];
  });
  const [pastedSakhiText, setPastedSakhiText] = useState<string>('');
  const [isCustomMode, setIsCustomMode] = useState<boolean>(false);
  const [searchFilter, setSearchFilter] = useState<string>('');

  // Audio Recitation & Drone Mixer States
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [isDronePlaying, setIsDronePlaying] = useState<boolean>(false);
  const [droneSoundType, setDroneSoundType] = useState<DhunSoundType>('tanpura');
  const [droneVolume, setDroneVolume] = useState<number>(0.4);
  const [showDroneMixer, setShowDroneMixer] = useState<boolean>(false);
  const [sacredFreq, setSacredFreq] = useState<'432' | '440'>('432');

  // Layer Toggles
  const [showVocab, setShowVocab] = useState<boolean>(true);
  const [unlockDeepBhavarth, setUnlockDeepBhavarth] = useState<boolean>(true);

  // Journal Reflection State
  const [journalInput, setJournalInput] = useState<string>('');
  const [journalSaved, setJournalSaved] = useState<boolean>(false);
  const [copiedToast, setCopiedToast] = useState<boolean>(false);

  // Parse current Sakhi or Custom Text into 5-Step Discourse
  const discourseData: Discourse5StepData = React.useMemo(() => {
    if (isCustomMode && pastedSakhiText.trim().length > 0) {
      return parseSakhiInto5StepDiscourse(pastedSakhiText, language);
    }
    return parseSakhiInto5StepDiscourse(selectedSakhi, language);
  }, [selectedSakhi, pastedSakhiText, isCustomMode, language]);

  // Clean up audio engines on screen unmount
  useEffect(() => {
    return () => {
      speechReciter.stop();
      ambientReaderAudio.stop();
    };
  }, []);

  // Handle Speech Recitation
  const handleToggleSpeech = () => {
    if (isSpeaking) {
      speechReciter.stop();
      setIsSpeaking(false);
    } else {
      speechReciter.speak(
        discourseData.originalText.fullText,
        language === 'pb' ? 'pb' : language === 'hi' ? 'hi' : 'en',
        () => setIsSpeaking(false)
      );
      setIsSpeaking(true);
    }
  };

  // Handle Background Drone Mixer Toggle
  const handleToggleDrone = () => {
    if (isDronePlaying) {
      ambientReaderAudio.stop();
      setIsDronePlaying(false);
    } else {
      ambientReaderAudio.setVolume(droneVolume);
      ambientReaderAudio.start(droneSoundType);
      setIsDronePlaying(true);
    }
  };

  const handleChangeDroneSound = (type: DhunSoundType) => {
    setDroneSoundType(type);
    ambientReaderAudio.setSoundType(type);
  };

  const handleChangeDroneVolume = (vol: number) => {
    setDroneVolume(vol);
    ambientReaderAudio.setVolume(vol);
  };

  // Save Journal Response
  const handleSaveJournal = () => {
    if (!journalInput.trim()) return;
    const key = `sahebworld_discourse_journal_${discourseData.sakhiNumber || 'custom'}`;
    localStorage.setItem(key, journalInput.trim());
    setJournalSaved(true);
    setTimeout(() => setJournalSaved(false), 3000);
  };

  // Copy Full Discourse Text
  const handleCopyDiscourse = () => {
    const fullText = `
|| ${discourseData.title} ||
${discourseData.context.foundationNote}

१. ${discourseData.context.title}
${discourseData.context.relevanceText}

२. ${discourseData.originalText.title}
${discourseData.originalText.lines.join('\n')}

३. ${discourseData.vocabulary.title}
${discourseData.vocabulary.words.map((w) => `${w.word}: ${w.meaning}`).join('\n')}

४. ${discourseData.deepBhavarth.title}
${discourseData.deepBhavarth.bhavarthSummary}

५. ${discourseData.dainikChintan.title}
${discourseData.dainikChintan.questions.join('\n')}

- साहेब बंदगी साहेब • Saheb World
`.trim();

    navigator.clipboard.writeText(fullText).then(() => {
      setCopiedToast(true);
      setTimeout(() => setCopiedToast(false), 2500);
    });
  };

  // Filtered Sakhis list
  const filteredSakhis = React.useMemo(() => {
    if (!searchFilter.trim()) return sakhisDatabase.slice(0, 30);
    const q = searchFilter.toLowerCase();
    return sakhisDatabase.filter(
      (s) =>
        s.number.toString().includes(q) ||
        s.text.hi.toLowerCase().includes(q) ||
        (s.categoryTitle?.hi || '').toLowerCase().includes(q)
    );
  }, [searchFilter]);

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-12 animate-fadeIn">
      {/* --- HEADER BANNER: Satguru Kabir Satyanaam Path-Pradarshak --- */}
      <div
        style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
        className="p-6 sm:p-8 rounded-3xl border-2 shadow-xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <BookOpen className="w-36 h-36 text-amber-600" />
        </div>

        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-spin" style={{ animationDuration: '6s' }} />
            <span>{language === 'pb' ? '੫-ਪੜਾਵੀ ਗਹਿਨ ਸਵਾਧਿਆਏ ਇੰਜਣ' : language === 'en' ? '5-Layer Sacred Discourse Engine' : '५-पड़ावी गहन आध्यात्मिक स्वाध्याय'}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-serif font-black tracking-tight" style={{ color: theme.textPrimary }}>
            {discourseData.title}
          </h1>

          <p className="text-xs sm:text-sm font-serif leading-relaxed max-w-2xl opacity-80" style={{ color: theme.textSecondary }}>
            {language === 'pb'
              ? 'ਕੋਈ ਵੀ ਦੋ-ਲਾਈਨਾਂ ਦੀ ਸਾਖੀ ਚੁਣੋ ਜਾਂ ਪੇਸਟ ਕਰੋ। ਇਹ ਸਿਸਟਮ ਇਸਨੂੰ ੫ ਗਹਿਰੇ ਆਤਮਿਕ ਪੜਾਵਾਂ ਵਿੱਚ ਵਿਸ਼ਲੇਸ਼ਿਤ ਕਰਕੇ ਸੁਰਤ-ਸ਼ਬਦ ਯੋਗ ਅਨੁਸਾਰ ਪ੍ਰਗਟ ਕਰਦਾ ਹੈ।'
              : language === 'en'
              ? 'Select or paste any two-line Sakhi. The engine dynamically expands it into 5 structured spiritual layers aligned with Surat Shabad Yoga.'
              : 'किसी भी दो-पंक्ति साखी का चयन करें या पेस्ट करें। यह पथ-प्रदर्शक इंजन इसे ५ गहन आध्यात्मिक परतों में विश्लेषित करके सुरति-शब्द योग के अनुसार प्रकट करता है।'}
          </p>

          {/* SAKHI INPUT & PARSER TOGGLE BAR */}
          <div className="pt-3 flex flex-wrap items-center gap-3">
            <button
              onClick={() => setIsCustomMode(false)}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition cursor-pointer ${
                !isCustomMode
                  ? 'bg-[#8B2500] text-white shadow-md'
                  : 'bg-black/5 dark:bg-white/5 border border-amber-500/20 text-amber-900 dark:text-amber-200'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>{language === 'pb' ? 'ਗ੍ਰੰਥ ਸਾਖੀ ਚੁਣੋ' : language === 'en' ? 'Select Granth Sakhi' : 'ग्रंथ साखी चुनें'}</span>
            </button>

            <button
              onClick={() => setIsCustomMode(true)}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition cursor-pointer ${
                isCustomMode
                  ? 'bg-[#8B2500] text-white shadow-md'
                  : 'bg-black/5 dark:bg-white/5 border border-amber-500/20 text-amber-900 dark:text-amber-200'
              }`}
            >
              <Edit3 className="w-4 h-4" />
              <span>{language === 'pb' ? 'ਆਪਣੀ ਸਾਖੀ ਪੇਸਟ ਕਰੋ' : language === 'en' ? 'Paste Custom Sakhi' : 'अपनी साखी पेस्ट करें'}</span>
            </button>

            <button
              onClick={handleCopyDiscourse}
              className="ml-auto px-3.5 py-2 rounded-xl border text-xs font-bold flex items-center gap-1.5 hover:bg-amber-500/10 transition cursor-pointer"
            >
              {copiedToast ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-amber-600" />}
              <span>{copiedToast ? 'Copied' : 'Share Discourse'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* --- SAKHI SELECTOR / PASTE CONTAINER --- */}
      {isCustomMode ? (
        <div
          style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
          className="p-5 rounded-3xl border-2 backdrop-blur-md space-y-3 shadow-md animate-fadeIn"
        >
          <label className="text-xs font-bold font-serif flex items-center gap-2 text-amber-900 dark:text-amber-200">
            <Edit3 className="w-4 h-4 text-amber-600" />
            <span>
              {language === 'pb'
                ? 'ਦੋ ਲਾਈਨਾਂ ਦੀ ਕੋਈ ਵੀ ਸਾਖੀ ਜਾਂ ਬਾਣੀ ਇੱਥੇ ਪੇਸਟ ਕਰੋ:'
                : language === 'en'
                ? 'Paste any two-line Sakhi or verse here:'
                : 'दो पंक्तियों की कोई भी साखी या वाणी यहाँ पेस्ट करें:'}
            </span>
          </label>

          <textarea
            value={pastedSakhiText}
            onChange={(e) => setPastedSakhiText(e.target.value)}
            placeholder={`जाका गुरु है आंधरा, चेला खारा निरंध ।\nअंधे अंधा ठेलिया, दोनों कूप पड़ंत ॥`}
            className="w-full p-4 rounded-2xl border bg-amber-50/50 dark:bg-amber-950/20 text-sm font-serif focus:ring-2 focus:ring-amber-500 focus:outline-none h-28 resize-none shadow-inner"
          />

          <div className="flex justify-end">
            <span className="text-[11px] font-bold opacity-60">
              {language === 'pb' ? 'ਜੀਵੰਤ ਵਿਸ਼ਲੇਸ਼ਣ ਤੁਰੰਤ ਲਾਗੂ ਹੁੰਦਾ ਹੈ' : language === 'en' ? 'Live dynamic parsing active' : 'जीवंत ५-पड़ावी विश्लेषण स्वतः लागू'}
            </span>
          </div>
        </div>
      ) : (
        <div
          style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
          className="p-5 rounded-3xl border-2 backdrop-blur-md space-y-3 shadow-md animate-fadeIn"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Search className="w-4 h-4 text-amber-600 shrink-0" />
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder={language === 'pb' ? 'ਸਾਖੀ ਖੋਜੋ...' : language === 'en' ? 'Search sakhi...' : 'साखी खोजें... (संख्या या शब्द)'}
                className="w-full sm:w-64 px-3 py-1.5 rounded-xl border text-xs focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>

            <span className="text-xs font-mono font-bold text-amber-700 dark:text-amber-300">
              {discourseData.context.foundationNote}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 max-h-48 overflow-y-auto pr-1">
            {filteredSakhis.map((s) => (
              <button
                key={s.id}
                onClick={() => setSelectedSakhi(s)}
                className={`p-2.5 rounded-xl border text-left text-xs font-serif transition cursor-pointer flex flex-col justify-between gap-1 ${
                  selectedSakhi.number === s.number
                    ? 'bg-[#8B2500] text-white font-bold shadow-sm border-amber-500'
                    : 'bg-black/5 dark:bg-white/5 hover:bg-amber-500/10 border-amber-500/10'
                }`}
              >
                <span className="font-bold text-[10px] uppercase opacity-80">
                  साखी #{s.number}
                </span>
                <span className="line-clamp-1">{s.text.hi.split('\n')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================================
          STRUCTURAL LAYER १: विषय संदर्भ (Context)
          ========================================================================= */}
      <div
        style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
        className="p-6 rounded-3xl border-2 backdrop-blur-md space-y-3 shadow-md relative"
      >
        <div className="flex flex-wrap items-center justify-between border-b pb-3 border-amber-500/20 gap-2">
          <h2 className="text-lg sm:text-xl font-serif font-black flex items-center gap-2.5 text-amber-900 dark:text-amber-200">
            <BookOpen className="w-5 h-5 text-amber-600" />
            <span>{discourseData.context.title}</span>
          </h2>
          <span className="text-xs font-bold font-mono px-3 py-1 bg-amber-500/10 text-amber-800 dark:text-amber-300 rounded-full border border-amber-500/20">
            {discourseData.categoryTitle}
          </span>
        </div>

        <p className="text-sm sm:text-base leading-relaxed font-serif text-amber-950 dark:text-amber-100 font-medium">
          {discourseData.context.relevanceText}
        </p>

        <p className="text-xs sm:text-sm italic font-serif bg-amber-500/10 p-3.5 rounded-2xl border border-amber-500/20 text-amber-900 dark:text-amber-200">
          ✨ {discourseData.context.spiritualSignificance}
        </p>
      </div>

      {/* =========================================================================
          STRUCTURAL LAYER २: मूल वाणी (Original Text) + [🎵 Audio Trigger & Background Drone Mixer Toggle]
          ========================================================================= */}
      <div
        style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
        className="p-6 sm:p-8 rounded-3xl border-2 backdrop-blur-md text-center relative overflow-hidden shadow-xl space-y-5"
      >
        <div className="flex flex-wrap items-center justify-between border-b pb-3 border-amber-500/20 gap-2">
          <span className="text-xs font-black uppercase tracking-widest text-amber-800 dark:text-amber-300">
            {discourseData.originalText.title}
          </span>

          <div className="flex items-center gap-2">
            {/* 🎵 Audio Recitation Trigger Button */}
            <button
              onClick={handleToggleSpeech}
              className={`px-3.5 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition cursor-pointer shadow-xs ${
                isSpeaking
                  ? 'bg-[#8B2500] text-white border-amber-500 animate-pulse'
                  : 'bg-amber-500/10 text-amber-900 dark:text-amber-200 border-amber-500/20 hover:bg-amber-500/20'
              }`}
            >
              {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-amber-600" />}
              <span>{isSpeaking ? 'पाठ रोकें' : '🎵 साखी पाठ सुनें'}</span>
            </button>

            {/* Background Drone Mixer Setting Toggle */}
            <button
              onClick={() => setShowDroneMixer(!showDroneMixer)}
              className={`p-1.5 rounded-xl border text-xs font-bold transition cursor-pointer ${
                isDronePlaying || showDroneMixer
                  ? 'bg-[#8B2500] text-white border-amber-500'
                  : 'bg-amber-500/10 text-amber-900 dark:text-amber-200 border-amber-500/20'
              }`}
              title="Anahad Tanpura/Drone Mixer Controls"
            >
              <Sliders className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ANAHAD TANPURA / DRONE MIXER DRAWER */}
        <AnimatePresence>
          {showDroneMixer && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden p-4 rounded-2xl bg-amber-950/10 border border-amber-500/20 space-y-3 text-left"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold font-serif flex items-center gap-1.5 text-amber-900 dark:text-amber-200">
                  <Music className="w-4 h-4 text-amber-600 animate-bounce" />
                  <span>अनहद तानपूरा एवं ड्रोन मिक्सर (Background Drone Sound)</span>
                </span>

                <button
                  onClick={handleToggleDrone}
                  className={`px-3 py-1 rounded-xl text-xs font-bold cursor-pointer ${
                    isDronePlaying ? 'bg-[#8B2500] text-white' : 'bg-amber-200 text-amber-950'
                  }`}
                >
                  {isDronePlaying ? 'ड्रोन बंद करें' : '▶ चालू करें'}
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'tanpura', label: '🪕 तानपूरा' },
                  { id: 'satyanaam', label: 'सत्यनाम अनहद नाद' },
                  { id: 'flute', label: '🪈 बांसुरी' },
                  { id: 'stream', label: '🌊 जलधारा' },
                ].map((snd) => (
                  <button
                    key={snd.id}
                    onClick={() => handleChangeDroneSound(snd.id as DhunSoundType)}
                    className={`py-1.5 px-2 rounded-xl text-xs font-bold border transition cursor-pointer ${
                      droneSoundType === snd.id
                        ? 'bg-[#8B2500] text-white border-amber-500 shadow-xs'
                        : 'bg-white dark:bg-zinc-800 text-amber-900 dark:text-amber-200 border-amber-200'
                    }`}
                  >
                    {snd.label}
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between gap-4 pt-1">
                <div className="flex items-center gap-2 flex-1">
                  <span className="text-[10px] font-bold">मात्रा:</span>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={droneVolume}
                    onChange={(e) => handleChangeDroneVolume(parseFloat(e.target.value))}
                    className="w-full accent-amber-600 cursor-pointer"
                  />
                  <span className="text-[10px] font-mono font-bold w-8">{Math.round(droneVolume * 100)}%</span>
                </div>

                <div className="flex items-center gap-1 text-[10px] font-bold">
                  <span>तरंग:</span>
                  <button
                    onClick={() => setSacredFreq('432')}
                    className={`px-2 py-0.5 rounded-lg border ${
                      sacredFreq === '432' ? 'bg-[#8B2500] text-white' : 'bg-black/5'
                    }`}
                  >
                    432Hz
                  </button>
                  <button
                    onClick={() => setSacredFreq('440')}
                    className={`px-2 py-0.5 rounded-lg border ${
                      sacredFreq === '440' ? 'bg-[#8B2500] text-white' : 'bg-black/5'
                    }`}
                  >
                    440Hz
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* SACRED COUPLET DISPLAY (UNIFIED DOHA CARD) */}
        <div className="text-left">
          <UnifiedDohaCard
            id={`discourse-${discourseData.sakhiNumber || 'custom'}`}
            verseNumber={discourseData.sakhiNumber}
            badgeLabel={discourseData.originalText.title}
            source={discourseData.originalText.transliteration}
            text={discourseData.originalText.lines.join('\n')}
            meaning={discourseData.deepBhavarth.bhavarthSummary}
            language={language}
            defaultExpandedMeaning={false}
          />
        </div>
      </div>

      {/* =========================================================================
          STRUCTURAL LAYER ३: शब्दार्थ (Vocabulary) — [Toggle Show/Hide button]
          ========================================================================= */}
      <div
        style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
        className="p-6 rounded-3xl border-2 backdrop-blur-md space-y-3 shadow-md"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-lg sm:text-xl font-serif font-black flex items-center gap-2.5 text-amber-900 dark:text-amber-200">
            <Type className="w-5 h-5 text-amber-600" />
            <span>{discourseData.vocabulary.title}</span>
          </h2>

          <button
            onClick={() => setShowVocab(!showVocab)}
            className="px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 bg-amber-500/15 text-amber-900 dark:text-amber-200 border border-amber-500/30 hover:bg-amber-500/25 transition cursor-pointer"
          >
            {showVocab ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            <span>{showVocab ? 'शब्दार्थ छिपाएं' : 'शब्दार्थ दिखाएं'}</span>
          </button>
        </div>

        <AnimatePresence>
          {showVocab && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2"
            >
              {discourseData.vocabulary.words.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl border bg-amber-50/50 dark:bg-amber-950/20 border-amber-500/20 flex flex-col text-xs space-y-1 shadow-2xs"
                >
                  <span className="font-serif font-black text-sm sm:text-base text-amber-900 dark:text-amber-300">
                    {item.word}
                  </span>
                  <span className="text-xs leading-relaxed text-amber-950 dark:text-amber-100 opacity-90">
                    {item.meaning}
                  </span>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* =========================================================================
          STRUCTURAL LAYER ४: सत्यनाम केंद्रित दीप भावार्थ (Deep Bhavarth via Surat Shabad Yoga)
          ========================================================================= */}
      <div
        style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
        className="p-6 rounded-3xl border-2 backdrop-blur-md space-y-4 shadow-md"
      >
        <div className="flex items-center justify-between border-b pb-3 border-amber-500/20">
          <h2 className="text-lg sm:text-xl font-serif font-black flex items-center gap-2.5 text-amber-900 dark:text-amber-200">
            <Sparkles className="w-5 h-5 text-amber-600 animate-pulse" />
            <span>{discourseData.deepBhavarth.title}</span>
          </h2>

          <button
            onClick={() => setUnlockDeepBhavarth(!unlockDeepBhavarth)}
            className="px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 bg-[#8B2500] text-white shadow-sm hover:scale-105 active:scale-95 transition cursor-pointer"
          >
            {unlockDeepBhavarth ? <Unlock className="w-4 h-4 text-amber-200" /> : <Lock className="w-4 h-4" />}
            <span>{unlockDeepBhavarth ? 'सुरति शब्द योग खोलें' : 'भावार्थ खोलें'}</span>
          </button>
        </div>

        <AnimatePresence>
          {unlockDeepBhavarth && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="space-y-4 pt-1"
            >
              {/* Bhavarth Summary */}
              <p className="text-base sm:text-lg leading-relaxed font-serif font-extrabold text-amber-950 dark:text-amber-100">
                {discourseData.deepBhavarth.bhavarthSummary}
              </p>

              {/* SURAT SHABAD YOGA GUIDELINES GRID */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-950/10 via-amber-900/5 to-amber-950/10 border border-amber-500/30 space-y-3">
                <h3 className="text-xs font-serif font-black uppercase tracking-wider text-amber-800 dark:text-amber-300">
                  ।। सुरति-शब्द योग साधना सूत्र (Merging Consciousness into Uncreated Shabad Vibration) ।।
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-serif">
                  <div className="p-3 rounded-xl bg-white/60 dark:bg-zinc-800/60 border border-amber-500/20 space-y-1">
                    <p className="font-bold text-amber-900 dark:text-amber-300">
                      {discourseData.deepBhavarth.suratShabadYogaGuidance.suratFocus}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-white/60 dark:bg-zinc-800/60 border border-amber-500/20 space-y-1">
                    <p className="font-bold text-amber-900 dark:text-amber-300">
                      {discourseData.deepBhavarth.suratShabadYogaGuidance.anahatResonance}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-white/60 dark:bg-zinc-800/60 border border-amber-500/20 space-y-1">
                    <p className="font-bold text-amber-900 dark:text-amber-300">
                      {discourseData.deepBhavarth.suratShabadYogaGuidance.shabadVibration}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-white/60 dark:bg-zinc-800/60 border border-amber-500/20 space-y-1">
                    <p className="font-bold text-amber-900 dark:text-amber-300">
                      {discourseData.deepBhavarth.suratShabadYogaGuidance.mergingGuideline}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* =========================================================================
          STRUCTURAL LAYER ५: दैनिक चिंतन (Dainik Chintan) — [Two Introspective Questions]
          ========================================================================= */}
      <div
        style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
        className="p-6 rounded-3xl border-2 backdrop-blur-md space-y-4 shadow-md"
      >
        <div className="flex items-center justify-between border-b pb-3 border-amber-500/20">
          <h2 className="text-lg sm:text-xl font-serif font-black flex items-center gap-2.5 text-amber-900 dark:text-amber-200">
            <Compass className="w-5 h-5 text-amber-600" />
            <span>{discourseData.dainikChintan.title}</span>
          </h2>
        </div>

        {/* 2 INTROSPECTIVE QUESTIONS */}
        <div className="space-y-3">
          {discourseData.dainikChintan.questions.map((q, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-500/30 text-xs sm:text-sm font-serif font-bold text-amber-950 dark:text-amber-100 flex items-start gap-2.5 shadow-2xs"
            >
              <span className="text-amber-600 font-black shrink-0">❓</span>
              <p className="leading-relaxed">{q}</p>
            </div>
          ))}
        </div>

        {/* INTERACTIVE JOURNAL REFLECTION INPUT */}
        <div className="space-y-2 pt-1">
          <label className="text-xs font-bold text-amber-900 dark:text-amber-300 block font-serif">
            {discourseData.dainikChintan.sadhanaPrompt}
          </label>

          <textarea
            value={journalInput}
            onChange={(e) => setJournalInput(e.target.value)}
            placeholder={language === 'pb' ? 'ਆਪਣੇ ਮਨ ਦੇ ਵਿਚਾਰ ਤੇ ਸੰਕਲਪ ਇੱਥੇ ਲਿਖੋ...' : language === 'en' ? 'Write your personal Sadhana reflection here...' : 'अपने अंतर्मन का विचार व साधना संकल्प यहाँ लिखें...'}
            className="w-full p-4 rounded-2xl border bg-white dark:bg-zinc-800 text-xs sm:text-sm font-serif focus:ring-2 focus:ring-amber-500 focus:outline-none h-24 resize-none shadow-inner"
          />

          <div className="flex items-center justify-between">
            <button
              onClick={handleSaveJournal}
              disabled={!journalInput.trim()}
              className="px-5 py-2.5 rounded-xl bg-[#8B2500] text-white text-xs font-bold font-serif shadow-md hover:scale-105 active:scale-95 transition disabled:opacity-40 cursor-pointer flex items-center gap-1.5"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{language === 'pb' ? 'ਸੰਕਲਪ ਸੁਰੱਖਿਅਤ ਕਰੋ' : language === 'en' ? 'Save Reflection' : 'साधना संकल्प सुरक्षित करें'}</span>
            </button>

            {journalSaved && (
              <span className="text-xs font-bold text-green-600 dark:text-green-400 font-serif animate-pulse">
                ✓ साधना संकल्प सुरक्षित कर लिया गया है!
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
