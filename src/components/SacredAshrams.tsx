import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  Heart, 
  ExternalLink, 
  Share2, 
  Copy, 
  Navigation, 
  Search, 
  Sparkles, 
  Sun,
  ArrowLeft,
  Info
} from 'lucide-react';
import { Language, SACRED_BRANDING } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import { ASHRAMS_DATA } from '../data/ashrams';
import { sacredHaptics } from '../services/haptics';

interface SacredAshramsProps {
  language: Language;
  onClose?: () => void;
  onOpenDhun?: () => void;
  onOpenMeditation?: () => void;
}

export const SacredAshrams: React.FC<SacredAshramsProps> = ({
  language,
  onClose,
  onOpenDhun,
  onOpenMeditation,
}) => {
  const { theme } = useAppTheme();
  const [activeTab, setActiveTab] = useState<'physical' | 'inner'>('physical');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredAshrams = ASHRAMS_DATA.filter((ashram) => {
    const query = searchQuery.toLowerCase();
    return (
      ashram.name[language].toLowerCase().includes(query) ||
      ashram.location[language].toLowerCase().includes(query) ||
      ashram.description[language].toLowerCase().includes(query)
    );
  });

  const handleCopy = (ashram: any) => {
    const text = `${ashram.name[language]}\n${ashram.location[language]}\n${ashram.significanceTag[language]}\n\n${ashram.description[language]}\n\nMaps: ${ashram.mapsUrl}`;
    navigator.clipboard.writeText(text);
    setCopiedId(ashram.id);
    sacredHaptics.lightTap();
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleShare = async (ashram: any) => {
    const shareData = {
      title: ashram.name[language],
      text: `${ashram.significanceTag[language]}\n\n${ashram.description[language]}`,
      url: ashram.mapsUrl,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (e) {}
    } else {
      handleCopy(ashram);
    }
  };

  const labels = {
    hi: {
      title: 'कबीर पंथ के पावन तीर्थ स्थल',
      subtitle: 'सद्गुरु कबीर साहेब एवं धर्मदास वंशावली से जुड़े प्रमुख आध्यात्मिक केंद्र, जहाँ सत्यनाम की अमर ज्योति और मानवता का संदेश सदियों से प्रवाहित हो रहा है।',
      closing: '।। साहेब बंदगी साहेब ।।',
      physicalTab: 'पावन तीर्थ व आश्रम',
      innerTab: 'घट के भीतर (आध्यात्मिक)',
      searchPlaceholder: 'तीर्थ स्थल या शहर खोजें...',
      getDirections: 'गूगल मैप्स में मार्ग देखें',
      copy: 'विवरण कॉपी करें',
      share: 'शेयर करें',
      innerTitle: 'आध्यात्मिक एवं गूढ़ स्थान (Inner Residence)',
      innerDesc: 'कबीर साहेब की अमर वाणी के अनुसार, सतगुरु जी का असली स्थान बाहर किसी भौतिक स्थान पर सीमित नहीं है, बल्कि हर साधक के घट (हृदय) के भीतर शब्द रूप में विद्यमान है:',
      innerVerse: '"तेरा साईं तुझ में, ज्यों पोहुप में बास। कस्तूरी का हिरन ज्यों, फिर-फिर ढूँढत घास॥"',
      innerAmarlok: 'घट का अमरलोक:',
      innerAmarlokDesc: 'सुरत-शब्द योग साधना के द्वारा जब ध्यान (सुरत) शरीर और मन के पार अमरलोक/सतलोक में स्थिर होता है, तब सतगुरु जी का प्रत्यक्ष अनहद प्रकाश व अनाहत नाद घट में ही अनुभव होता है।',
      saadhnaSutra: '🌸 साधना सूत्र',
      saadhnaQuote: '"कबीर खोजै घट में खोजै, बाहर खोजे नाहीं।"',
      saadhnaAction: 'अपने घट के भीतर शांत होकर \'सत्यनाम\' का सुमिरन करें, सतगुरु जी सदैव आपके अत्यंत निकट आपके साथ हैं।',
      listenDhun: 'सत्यनाम पावन गूँज सुनें',
      meditationGuide: 'घट-ध्यान साधना (सुमिरन)',
    },
    pb: {
      title: 'ਕਬੀਰ ਪੰਥ ਦੇ ਪਾਵਨ ਤੀਰਥ ਸਥਾਨ',
      subtitle: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਅਤੇ ਧਰਮਦਾਸ ਵੰਸ਼ਾਵਲੀ ਨਾਲ ਜੁੜੇ ਪ੍ਰਮੁੱਖ ਅਧਿਆਤਮਿਕ ਕੇਂਦਰ, ਜਿੱਥੇ ਸਤਯਨਾਮ ਦੀ ਅਮਰ ਜੋਤ ਅਤੇ ਮਨੁੱਖਤਾ ਦਾ ਸੰਦੇਸ਼ ਸਦੀਆਂ ਤੋਂ ਪ੍ਰਵਾਹਿਤ ਹੋ ਰਿਹਾ ਹੈ।',
      closing: '।। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ ।।',
      physicalTab: 'ਪਾਵਨ ਤੀਰਥ ਤੇ ਆਸ਼ਰਮ',
      innerTab: 'ਹਿਰਦੇ ਅੰਦਰ (ਆਤਮਿਕ)',
      searchPlaceholder: 'ਤੀਰਥ ਸਥਾਨ ਜਾਂ ਸ਼ਹਿਰ ਖੋਜੋ...',
      getDirections: 'ਗੂਗਲ ਮੈਪਸ ਵਿੱਚ ਰਾਹ ਦੇਖੋ',
      copy: 'ਵੇਰਵਾ ਕਾਪੀ ਕਰੋ',
      share: 'ਸਾਂਝਾ ਕਰੋ',
      innerTitle: 'ਆਤਮਿਕ ਤੇ ਗੂੜ੍ਹ ਸਥਾਨ (Inner Residence)',
      innerDesc: 'ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਅਮਰ ਬਾਣੀ ਅਨੁਸਾਰ, ਸਤਗੁਰੂ ਜੀ ਦਾ ਅਸਲੀ ਸਥਾਨ ਬਾਹਰ ਕਿਸੇ ਭੌਤਿਕ ਸਥਾਨ ਤੇ ਸੀਮਿਤ ਨਹੀਂ ਹੈ, ਸਗੋਂ ਹਰ ਸਾਧਕ ਦੇ ਹਿਰਦੇ (ਘਟ) ਦੇ ਅੰਦਰ ਸ਼ਬਦ ਰੂਪ ਵਿੱਚ ਮੌਜੂਦ ਹੈ:',
      innerVerse: '"ਤੇਰਾ ਸਾਈਂ ਤੁਝ ਮੇਂ, ਜਿਉਂ ਪੋਹੁਪ ਮੇਂ ਬਾਸ। ਕਸਤੂਰੀ ਕਾ ਹਿਰਨ ਜਿਉਂ, ਫਿਰ-ਫਿਰ ਢੂੰਢਤ ਘਾਸ॥"',
      innerAmarlok: 'ਘਟ ਦਾ ਅਮਰਲੋਕ:',
      innerAmarlokDesc: 'ਸੁਰਤ-ਸ਼ਬਦ ਯੋਗ ਸਾਧਨਾ ਰਾਹੀਂ ਜਦੋਂ ਧਿਆਨ (ਸੁਰਤ) ਸਰੀਰ ਤੇ ਮਨ ਦੇ ਪਾਰ ਅਮਰਲੋਕ ਵਿੱਚ ਸਥਿਰ ਹੁੰਦਾ ਹੈ, ਤਾਂ ਸਤਗੁਰੂ ਜੀ ਦਾ ਪ੍ਰਤੱਖ ਪ੍ਰਕਾਸ਼ ਹਿਰਦੇ ਵਿੱਚ ਹੀ ਅਨੁਭਵ ਹੁੰਦਾ ਹੈ।',
      saadhnaSutra: '🌸 ਸਾਧਨਾ ਸੂਤਰ',
      saadhnaQuote: '"ਕਬੀਰ ਖੋਜੈ ਘਟ ਮੇਂ ਖੋਜੈ, ਬਾਹਰ ਖੋਜੇ ਨਾਹੀਂ।"',
      saadhnaAction: 'ਆਪਣੇ ਹਿਰਦੇ ਦੇ ਅੰਦਰ ਸ਼ਾਂਤ ਹੋ ਕੇ \'ਸਤਯਨਾਮ\' ਦਾ ਸਿਮਰਨ ਕਰੋ, ਸਤਗੁਰੂ ਜੀ ਸਦਾ ਤੁਹਾਡੇ ਨਾਲ ਹਨ।',
      listenDhun: 'ਸਤਯਨਾਮ ਪਾਵਨ ਗੂੰਜ ਸੁਣੋ',
      meditationGuide: 'ਹਿਰਦੇ-ਧਿਆਨ ਸਾਧਨਾ',
    },
    en: {
      title: 'Sacred Pilgrimage Sites of Kabir Panth',
      subtitle: 'Major spiritual centers associated with Sadguru Kabir Saheb and the Dharmadas lineage, where the eternal flame of Satnaam and universal brotherhood has shone for centuries.',
      closing: '|| Saheb Bandagi Saheb ||',
      physicalTab: 'Sacred Pilgrimages',
      innerTab: 'Inner Residence',
      searchPlaceholder: 'Search pilgrimage site or city...',
      getDirections: 'Get Directions (Google Maps)',
      copy: 'Copy Details',
      share: 'Share',
      innerTitle: 'Spiritual Inner Residence',
      innerDesc: 'According to Kabir Saheb, the true residence of the Satguru is not limited to any physical location, but exists as the "Word" within the heart of every seeker:',
      innerVerse: '"Your Lord is within you, like fragrance in a flower. Like the musk deer, you wander searching in the grass."',
      innerAmarlok: 'Inner Amarlok:',
      innerAmarlokDesc: 'Through Surat-Shabad Yoga, when attention transcends the body and mind into Amarlok, one experiences the direct light and sound of the Satguru within.',
      saadhnaSutra: '🌸 Sacred Directive',
      saadhnaQuote: '"Seek within the heart, do not seek outside."',
      saadhnaAction: 'Meditate on "Satyanaam" in inner silence; the Satguru is always closer than your own breath.',
      listenDhun: 'Listen to Satyanaam Resonance',
      meditationGuide: 'Meditation Guide',
    }
  };

  const t = labels[language] || labels.hi;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      className="max-w-4xl mx-auto px-4 py-6 sm:py-8 space-y-6 pb-20"
    >
      {/* Standardized Sacred Top Bar */}
      <div
        style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.cardBorder }}
        className="border-b py-2 px-3 sm:px-4 rounded-xl mb-4 select-none flex items-center justify-center overflow-hidden min-h-[42px]"
      >
        <span
          style={{ color: theme.sacredMaroon }}
          className="text-base sm:text-lg font-black tracking-wide font-serif block whitespace-nowrap text-center"
        >
          {SACRED_BRANDING.header[language] || SACRED_BRANDING.header.hi}
        </span>
      </div>

      {/* Header Controls Bar */}
      <div className="flex items-center justify-end px-1 mb-2">
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            style={{
              backgroundColor: theme.accentGoldLight,
              borderColor: theme.accentGold,
              color: theme.sacredMaroon,
            }}
            className="px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 hover:scale-105 transition-all duration-200 cursor-pointer shadow-xs active:scale-95 group"
            title={language === 'pb' ? 'ਵਾਪਸ ਜਾਓ' : language === 'en' ? 'Go Back' : 'वापस जाएं'}
          >
            <ArrowLeft size={14} />
            <span className="font-serif font-bold">{language === 'pb' ? 'ਵਾਪਸ ਜਾਓ' : language === 'en' ? 'Go Back' : 'वापस जाएं'}</span>
          </button>
        )}
      </div>

      {/* Header Banner */}
      <div 
        style={{ backgroundColor: theme.cardBg, borderColor: theme.accentGold }}
        className="rounded-3xl border-2 shadow-xl p-6 relative overflow-hidden text-center sm:text-left"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
          <div className="space-y-2">
            <h1 style={{ color: theme.sacredMaroon }} className="text-2xl sm:text-3xl font-black font-serif">
              {t.title}
            </h1>
            <p className="text-sm opacity-90 font-serif leading-relaxed max-w-2xl">
              {t.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex p-1 bg-black/5 rounded-2xl border border-amber-500/20">
        <button
          onClick={() => { setActiveTab('physical'); sacredHaptics.lightTap(); }}
          className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === 'physical' 
              ? 'bg-[#8B2500] text-white shadow-lg' 
              : 'text-gray-600 hover:bg-white/50'
          }`}
        >
          <MapPin className="w-4 h-4" />
          <span>{t.physicalTab}</span>
        </button>
        <button
          onClick={() => { setActiveTab('inner'); sacredHaptics.lightTap(); }}
          className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === 'inner' 
              ? 'bg-[#8B2500] text-white shadow-lg' 
              : 'text-gray-600 hover:bg-white/50'
          }`}
        >
          <Heart className="w-4 h-4" />
          <span>{t.innerTab}</span>
        </button>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'physical' ? (
          <motion.div
            key="physical"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="space-y-6"
          >
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 backdrop-blur-md focus:border-amber-500 outline-none transition shadow-sm font-serif text-sm sm:text-base"
              />
            </div>

            {/* Structured Pilgrimage Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredAshrams.map((ashram, index) => (
                <div
                  key={ashram.id}
                  style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
                  className="rounded-2xl border-2 backdrop-blur-md overflow-hidden shadow-md group hover:border-amber-500/50 transition-all flex flex-col justify-between"
                >
                  <div className="p-5 sm:p-6 space-y-4 flex-1">
                    {/* Top Row: Place Number & Name */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-amber-600 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                            {index + 1}
                          </span>
                          <span className="text-[11px] font-black uppercase tracking-wider text-amber-800 dark:text-amber-300 truncate">
                            {ashram.location[language]}
                          </span>
                        </div>
                        <h3 style={{ color: theme.sacredMaroon }} className="text-lg sm:text-xl font-black font-serif leading-tight pt-1">
                          {ashram.name[language]}
                        </h3>
                      </div>
                      <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-300 group-hover:scale-110 transition-transform shrink-0 border border-amber-500/20">
                        <MapPin className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="space-y-3 pt-1 text-sm">
                      {/* Spiritual Significance Tag */}
                      <div className="p-3 bg-amber-500/10 rounded-xl border border-amber-500/25 flex items-start gap-2.5">
                        <Info className="w-4 h-4 text-amber-700 dark:text-amber-300 shrink-0 mt-0.5" />
                        <p className="font-serif font-bold text-xs sm:text-sm text-amber-900 dark:text-amber-200 leading-snug">
                          {ashram.significanceTag[language]}
                        </p>
                      </div>

                      {/* Detailed Historical Description */}
                      <p className="font-serif text-xs sm:text-sm leading-relaxed text-stone-700 dark:text-stone-300 opacity-95">
                        {ashram.description[language]}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="px-4 py-3 bg-black/5 flex items-center gap-2 border-t" style={{ borderColor: theme.cardBorder }}>
                    <a
                      href={ashram.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sacredHaptics.lightTap()}
                      className="flex-1 py-2 px-3 rounded-xl bg-[#8B2500] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm hover:bg-[#7C1D00] transition cursor-pointer"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{t.getDirections}</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => handleCopy(ashram)}
                      className="p-2 rounded-xl bg-white dark:bg-zinc-800 border border-amber-500/30 text-amber-700 dark:text-amber-300 hover:bg-amber-50 transition cursor-pointer"
                      title={t.copy}
                    >
                      {copiedId === ashram.id ? <Sparkles className="w-4 h-4 animate-bounce text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleShare(ashram)}
                      className="p-2 rounded-xl bg-white dark:bg-zinc-800 border border-amber-500/30 text-amber-700 dark:text-amber-300 hover:bg-amber-50 transition cursor-pointer"
                      title={t.share}
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Closing Footer Quote / Statement */}
            <div 
              style={{ backgroundColor: theme.cardBg, borderColor: theme.accentGold }}
              className="rounded-2xl border-2 p-6 text-center shadow-md space-y-2 mt-8"
            >
              <div className="text-xl opacity-80">🌹</div>
              <p style={{ color: theme.sacredMaroon }} className="text-base sm:text-lg font-serif font-black dark:text-amber-300">
                {t.closing}
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="inner"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="space-y-6"
          >
            <div 
              style={{ backgroundColor: theme.cardBg, borderColor: theme.accentGold }}
              className="rounded-3xl border-2 backdrop-blur-md p-6 sm:p-8 space-y-8 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Sun className="w-48 h-48 animate-spin-slow" />
              </div>

              <div className="space-y-4 relative z-10 text-center max-w-2xl mx-auto">
                <h2 style={{ color: theme.sacredMaroon }} className="text-xl sm:text-2xl font-black font-serif">
                  {t.innerTitle}
                </h2>
                <p className="text-sm sm:text-base leading-relaxed font-serif opacity-90">
                  {t.innerDesc}
                </p>
                <div className="py-6 px-4 bg-amber-500/10 rounded-2xl border-y-2 border-amber-500/30 relative">
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white dark:bg-zinc-800 px-3 py-0.5 rounded-full text-[10px] font-black text-amber-800 dark:text-amber-300 border border-amber-500/30">अमर वाणी</span>
                  <p className="text-lg sm:text-xl font-black font-serif italic text-amber-900 dark:text-amber-200 leading-snug">
                    {t.innerVerse}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 pt-2">
                <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-2">
                  <h3 style={{ color: theme.sacredMaroon }} className="font-bold font-serif text-base dark:text-amber-300 flex items-center gap-2">
                    <span>✨</span>
                    <span>{t.innerAmarlok}</span>
                  </h3>
                  <p className="text-xs sm:text-sm font-serif leading-relaxed opacity-90">
                    {t.innerAmarlokDesc}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-2">
                  <h3 style={{ color: theme.sacredMaroon }} className="font-bold font-serif text-base dark:text-amber-300 flex items-center gap-2">
                    <span>🌿</span>
                    <span>{t.saadhnaSutra}</span>
                  </h3>
                  <p className="text-xs sm:text-sm font-serif italic font-bold text-amber-800 dark:text-amber-300">
                    {t.saadhnaQuote}
                  </p>
                  <p className="text-xs sm:text-sm font-serif leading-relaxed opacity-90 pt-1">
                    {t.saadhnaAction}
                  </p>
                </div>
              </div>

              {/* Internal Action Links */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-amber-500/20 relative z-10">
                {onOpenDhun && (
                  <button
                    type="button"
                    onClick={onOpenDhun}
                    style={{ backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText }}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl font-serif font-bold text-xs sm:text-sm shadow-md hover:scale-105 active:scale-95 transition cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>{t.listenDhun}</span>
                  </button>
                )}
                {onOpenMeditation && (
                  <button
                    type="button"
                    onClick={onOpenMeditation}
                    style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder, color: theme.sacredMaroon }}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl border font-serif font-bold text-xs sm:text-sm shadow-xs hover:brightness-95 transition cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>🧘</span>
                    <span>{t.meditationGuide}</span>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
