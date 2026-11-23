import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Sun, 
  Star, 
  Bell, 
  ArrowLeft, 
  Filter
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { useAppTheme } from '../theme/ThemeContext';
import { jantriEvents2026, JantriEvent, EventType } from '../data/jantri';
import { sacredHaptics } from '../services/haptics';

// Custom Full Moon icon (पूर्णिमा - Glowing Orb)
const FullMoonIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="9" className="fill-amber-400 stroke-amber-500" />
    <circle cx="9" cy="9" r="1.5" className="fill-amber-200 opacity-70 stroke-none" />
    <circle cx="15" cy="14" r="2" className="fill-amber-200 opacity-60 stroke-none" />
    <circle cx="13" cy="8" r="1" className="fill-amber-200 opacity-60 stroke-none" />
  </svg>
);

// Custom No Moon / New Moon icon (अमावस्या - Dark shadow orb with subtle lunar ring)
const NoMoonIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.75">
    <circle cx="12" cy="12" r="9" className="fill-slate-800 stroke-slate-500" />
    <circle cx="12" cy="12" r="7" stroke="currentColor" strokeDasharray="2 2" className="stroke-slate-600 opacity-60" />
  </svg>
);

interface SpiritualCalendarProps {
  language: Language;
  onClose?: () => void;
  onOpenNitnem?: () => void;
}

type JantriFilter = 'all' | 'high-vibration' | 'purnima' | 'amavasya' | 'sangrand' | 'kabir-parva';

export const SpiritualCalendar: React.FC<SpiritualCalendarProps> = ({ 
  language, 
  onClose,
  onOpenNitnem 
}) => {
  const t = translations[language];
  const { theme } = useAppTheme();
  
  const [currentDate, setCurrentDate] = useState(new Date());
  const [activeFilter, setActiveFilter] = useState<JantriFilter>('all');

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const monthNames: Record<Language, string[]> = {
    hi: ['जनवरी', 'फरवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितंबर', 'अक्टूबर', 'नवंबर', 'दिसंबर'],
    pb: ['ਜਨਵਰੀ', 'ਫ਼ਰਵਰੀ', 'ਮਾਰਚ', 'ਅਪ੍ਰੈਲ', 'ਮਈ', 'ਜੂਨ', 'ਜੁਲਾਈ', 'ਅਗਸਤ', 'ਸਤੰਬਰ', 'ਅਕਤੂਬਰ', 'ਨਵੰਬਰ', 'ਦਸੰਬਰ'],
    en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  };

  const dayLabels: Record<Language, string[]> = {
    hi: ['रवि', 'सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र', 'शनि'],
    pb: ['ਐਤ', 'ਸੋਮ', 'ਮੰਗਲ', 'ਬੁੱਧ', 'ਵੀਰ', 'ਸ਼ੁੱਕਰ', 'ਸ਼ਨੀ'],
    en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  };

  const prevMonth = () => {
    sacredHaptics.lightTap();
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    sacredHaptics.lightTap();
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const getEventsForDay = (day: number) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    let events = jantriEvents2026.filter(e => e.date === dateStr);

    if (activeFilter === 'all') return events;
    if (activeFilter === 'purnima') return events.filter(e => e.type === 'purnima' || (e.type === 'jayanti' && e.title.hi.includes('पूर्णिमा')));
    if (activeFilter === 'amavasya') return events.filter(e => e.type === 'amavasya');
    if (activeFilter === 'sangrand') return events.filter(e => e.type === 'sangrand');
    if (activeFilter === 'kabir-parva') return events.filter(e => e.type === 'jayanti' || e.type === 'nirvan');
    if (activeFilter === 'high-vibration') return events.filter(e => e.type === 'purnima' || e.type === 'jayanti' || e.type === 'nirvan');
    
    return events;
  };

  const isHighVibrationDay = (day: number) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return jantriEvents2026.some(e => e.date === dateStr && (e.type === 'purnima' || e.type === 'jayanti' || e.type === 'nirvan'));
  };

  const getEventIcon = (type: EventType) => {
    switch (type) {
      case 'purnima': return <FullMoonIcon className="w-3.5 h-3.5 shrink-0" />;
      case 'amavasya': return <NoMoonIcon className="w-3.5 h-3.5 shrink-0" />;
      case 'sangrand': return <Sun className="w-3 h-3 text-orange-500" />;
      case 'jayanti': return <Star className="w-3.5 h-3.5 text-red-600 fill-red-600" />;
      case 'nirvan': return <Bell className="w-3.5 h-3.5 text-indigo-600" />;
      default: return <Star className="w-3 h-3 text-amber-500" />;
    }
  };

  const getEventBg = (type: EventType) => {
    switch (type) {
      case 'jayanti': return 'bg-red-500/15 text-red-900 border-red-500/30';
      case 'nirvan': return 'bg-indigo-500/15 text-indigo-900 border-indigo-500/30';
      case 'purnima': return 'bg-amber-500/15 text-amber-900 border-amber-500/30';
      case 'amavasya': return 'bg-slate-500/15 text-slate-800 border-slate-500/30';
      case 'sangrand': return 'bg-orange-500/15 text-orange-900 border-orange-500/30';
      default: return 'bg-white/50 border-gray-200';
    }
  };

  const monthlyGridData = Array.from({ length: 12 }, (_, monthIdx) => {
    const monthEvents = jantriEvents2026.filter(e => {
      const d = new Date(e.date);
      return d.getFullYear() === 2026 && d.getMonth() === monthIdx;
    });

    return {
      monthIdx,
      monthName: monthNames[language][monthIdx],
      sangrand: monthEvents.find(e => e.type === 'sangrand'),
      purnima: monthEvents.find(e => e.type === 'purnima' || (e.type === 'jayanti' && (e.title.hi.includes('पूर्णिमा') || e.title.pb.includes('ਪੂਰਨਮਾਸ਼ੀ') || e.title.en.includes('Purnima')))),
      amavasya: monthEvents.find(e => e.type === 'amavasya'),
      parva: monthEvents.find(e => e.type === 'jayanti' || e.type === 'nirvan')
    };
  });

  const formatGridDate = (dateStr?: string) => {
    if (!dateStr) return '-';
    const d = new Date(dateStr);
    const day = d.getDate();
    const dayName = d.toLocaleDateString(language === 'hi' ? 'hi-IN' : (language === 'pb' ? 'pa-IN' : 'en-US'), { weekday: 'short' });
    return (
      <div className="flex flex-col items-center">
        <span className="text-sm font-black text-amber-950 dark:text-amber-200">{day}</span>
        <span className="text-[10px] opacity-60 leading-none">{dayName}</span>
      </div>
    );
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      className="max-w-5xl mx-auto px-3 sm:px-6 py-4 sm:py-8 space-y-6 pb-20 select-none"
    >
      {/* Standardized Sacred Top Bar */}
      <div
        style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.cardBorder }}
        className="border-b py-2 px-3 sm:px-4 select-none flex items-center justify-center overflow-hidden min-h-[42px]"
      >
        <span
          style={{ color: theme.sacredMaroon }}
          className="text-sm sm:text-lg font-black tracking-wider sm:tracking-widest font-serif block whitespace-nowrap overflow-hidden text-ellipsis"
        >
          {language === 'pb' ? '🌹 ।। ਸਤ੍ਯਨਾਮ ।। 🌹' : language === 'en' ? '🌹 ।। Satyanaam ।। 🌹' : '🌹 ।। सत्यनाम ।। 🌹'}
        </span>
      </div>

      {/* Top Banner with Close & Title */}
      <div 
        style={{ backgroundColor: theme.cardBg, borderColor: theme.accentGold }}
        className="rounded-3xl border-2 shadow-xl p-5 sm:p-7 relative overflow-hidden space-y-4"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-3 py-0.5 rounded-full text-xs font-black bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/30">
                {language === 'pb' ? '।। ਸਾਹੇਬ ਜੰਤਰੀ ੨੦੨੬ ।।' : language === 'en' ? '।। Saheb Jantri 2026 ।।' : '।। साहेब जंत्री २०२६ ।।'}
              </span>
              <span className="text-xs font-bold text-gray-500 font-mono">
                संवत् २०८२-८३
              </span>
            </div>
            <h1 
              style={{ color: theme.sacredMaroon }}
              className="text-2xl sm:text-3xl font-black font-serif tracking-tight"
            >
              {language === 'pb' ? 'ਸਾਹੇਬ ਜੰਤਰੀ: ਪਾਵਨ ਤਿਉਹਾਰ ਤੇ ਤਿਥੀਆਂ' : language === 'en' ? 'Saheb Jantri: Spiritual Almanac & Sacred Dates' : 'साहेब जंत्री: आध्यात्मिक पंचांग एवं पावन तिथियां'}
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-serif">
              {t.jantriSubtitle}
            </p>
          </div>

          {onClose && (
            <div className="shrink-0 self-end sm:self-center">
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
            </div>
          )}
        </div>

        {/* Prominent High-Vibration Divas Cards: Janam & Nirvana */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          {/* Janam Divas Card */}
          <div 
            style={{ 
              borderColor: '#F59E0B',
              background: 'linear-gradient(135deg, rgba(254, 243, 199, 0.4) 0%, rgba(255, 251, 235, 0.4) 100%)'
            }}
            className="p-4 sm:p-5 rounded-2xl border-2 shadow-sm space-y-2 relative overflow-hidden"
          >
            <div className="flex items-center justify-between text-xs">
              <span className="px-2.5 py-0.5 rounded-full font-black bg-amber-500 text-white text-[10px] tracking-wider uppercase">
                {language === 'pb' ? 'ਮਹਾਨ ਪ੍ਰਗਟ ਦਿਵਸ' : language === 'en' ? 'Sacred Manifestation' : 'परम प्राकट्य दिवस'}
              </span>
              <span className="font-mono font-bold text-amber-900 text-xs">
                ३० मई २०२६ (ज्येष्ठ पूर्णिमा)
              </span>
            </div>
            <h3 
              style={{ color: theme.sacredMaroon }}
              className="text-base sm:text-lg font-black font-serif"
            >
              {language === 'pb' ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜਯੰਤੀ' : language === 'en' ? 'Satguru Kabir Saheb Jayanti' : 'सतगुरु कबीर साहेब जयंती'}
            </h3>
            <p className="text-xs text-gray-700 dark:text-gray-300 font-serif leading-relaxed">
              {language === 'pb'
                ? 'ਕਾਸ਼ੀ ਦੇ ਲਹਿਰਤਾਰਾ ਸਰੋਵਰ ਵਿੱਚ ਨੀਲੇ ਕੰਵਲ ਫੁੱਲ \'ਤੇ ਪੂਰਨ ਸਤਿਪੁਰੁਸ਼ ਦਾ ਅਲੌਕਿਕ ਪ੍ਰਗਟਾਵਾ।'
                : language === 'en'
                ? 'Divine self-manifestation upon the radiant lotus of Lahartara Pond, Kashi.'
                : 'काशी के लहरतारा सरोवर में नीले कमल पुष्प पर पूर्ण सत्यपुरुष का अलौकिक प्राकट्य।'}
            </p>
          </div>

          {/* Nirvana Divas Card */}
          <div 
            style={{ 
              borderColor: '#6366F1',
              background: 'linear-gradient(135deg, rgba(238, 242, 255, 0.4) 0%, rgba(245, 243, 255, 0.4) 100%)'
            }}
            className="p-4 sm:p-5 rounded-2xl border-2 shadow-sm space-y-2 relative overflow-hidden"
          >
            <div className="flex items-center justify-between text-xs">
              <span className="px-2.5 py-0.5 rounded-full font-black bg-indigo-600 text-white text-[10px] tracking-wider uppercase">
                {language === 'pb' ? 'ਮਹਾਨ ਨਿਰਵਾਣ ਉਤਸਵ' : language === 'en' ? 'Mahaprayana Festival' : 'महाप्रयाण निर्वाण दिवस'}
              </span>
              <span className="font-mono font-bold text-indigo-900 text-xs">
                ४ फरवरी २०२६ (माघ शुक्ल)
              </span>
            </div>
            <h3 
              style={{ color: theme.sacredMaroon }}
              className="text-base sm:text-lg font-black font-serif"
            >
              {language === 'pb' ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਨਿਰਵਾਣ ਦਿਵਸ (ਮਘਰ)' : language === 'en' ? 'Satguru Kabir Nirvana Day (Maghar)' : 'सतगुरु कबीर साहेब निर्वाण दिवस (मगहर)'}
            </h3>
            <p className="text-xs text-gray-700 dark:text-gray-300 font-serif leading-relaxed">
              {language === 'pb'
                ? 'ਮਗਹਰ ਦੀ ਧਰਤੀ ਤੋਂ ਦੇਹ ਦਾ ਸੁਗੰਧਿਤ ਪੁਸ਼ਪਾਂ ਵਿੱਚ ਰੂਪਾਂਤਰਣ ਅਤੇ ਅਮਰਲੋਕ ਮਹਾਪ੍ਰਯਾਣ।'
                : language === 'en'
                ? 'Ascension from Maghar to Amar Lok, leaving sweet flowers in place of the mortal body.'
                : 'मगहर की पावन धरा से देह का सुगंधित पुष्पों में रूपांतरण एवं अमरलोक महाप्रयाण।'}
            </p>
          </div>
        </div>

        {/* Matrix Filter Chips */}
        <div className="pt-2 flex flex-wrap items-center gap-1.5 sm:gap-2">
          <span className="text-xs font-bold text-gray-500 mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            <span>फ़िल्टर:</span>
          </span>
          {[
            { id: 'all' as JantriFilter, label: language === 'pb' ? 'ਸਾਰੇ ਦਿਨ' : language === 'en' ? 'All' : 'सभी दिन' },
            { id: 'high-vibration' as JantriFilter, label: language === 'pb' ? '✨ ਉੱਚ-ਕੰਪਨ ਦਿਨ' : language === 'en' ? '✨ High Vibration' : '✨ उच्च-कंपन दिवस' },
            { id: 'purnima' as JantriFilter, label: t.purnimaLabel },
            { id: 'amavasya' as JantriFilter, label: t.amavasyaLabel },
            { id: 'sangrand' as JantriFilter, label: t.sangrandLabel },
            { id: 'kabir-parva' as JantriFilter, label: language === 'pb' ? '⭐ ਸਾਹੇਬ ਪੁਰਬ' : language === 'en' ? '⭐ Kabir Parva' : '⭐ कबीर पर्व' },
          ].map(chip => (
            <button
              key={chip.id}
              type="button"
              onClick={() => {
                sacredHaptics.lightTap();
                setActiveFilter(chip.id);
              }}
              style={{
                backgroundColor: activeFilter === chip.id ? theme.buttonPrimaryBg : theme.cardBg,
                color: activeFilter === chip.id ? theme.buttonPrimaryText : theme.textPrimary,
                borderColor: activeFilter === chip.id ? theme.buttonPrimaryBg : theme.cardBorder,
              }}
              className="px-3 py-1 rounded-xl border text-xs font-bold transition-all hover:scale-105 cursor-pointer shadow-2xs backdrop-blur-md"
            >
              {chip.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Calendar Month View */}
      <div 
        className="rounded-3xl shadow-xl overflow-hidden border backdrop-blur-md"
        style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
      >
        {/* Month Selector Bar */}
        <div 
          className="p-5 border-b flex flex-wrap items-center justify-between gap-4"
          style={{ borderColor: theme.cardBorder, backgroundColor: theme.stepActiveBg }}
        >
          <div className="flex items-center gap-3">
            <button 
              type="button"
              onClick={prevMonth} 
              className="p-2 rounded-xl bg-black/5 hover:bg-black/10 transition cursor-pointer"
              title="पिछला माह (Previous Month)"
            >
              <ChevronLeft className="w-5 h-5 text-amber-900" />
            </button>
            <h2 className="text-xl sm:text-2xl font-black font-serif" style={{ color: theme.sacredMaroon }}>
              {monthNames[language][month]} {year}
            </h2>
            <button 
              type="button"
              onClick={nextMonth} 
              className="p-2 rounded-xl bg-black/5 hover:bg-black/10 transition cursor-pointer"
              title="अगला माह (Next Month)"
            >
              <ChevronRight className="w-5 h-5 text-amber-900" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setCurrentDate(new Date(2026, 4, 1))}
              className="px-2.5 py-1 rounded-lg border text-xs font-bold bg-amber-500/10 border-amber-500/30 text-amber-800 hover:bg-amber-500 hover:text-white transition"
              title="मई २०२६ (जयंती माह)"
            >
              कबीर जयंती (मई)
            </button>
            <button
              type="button"
              onClick={() => setCurrentDate(new Date(2026, 1, 1))}
              className="px-2.5 py-1 rounded-lg border text-xs font-bold bg-indigo-500/10 border-indigo-500/30 text-indigo-800 hover:bg-indigo-500 hover:text-white transition"
              title="फरवरी २०२६ (निर्वाण माह)"
            >
              निर्वाण दिवस (फरवरी)
            </button>
          </div>
        </div>

        {/* Days of Week Header */}
        <div className="grid grid-cols-7 bg-black/5 border-b" style={{ borderColor: theme.cardBorder }}>
          {dayLabels[language].map((label, i) => (
            <div key={i} className="py-2.5 text-center text-[10px] font-black uppercase tracking-widest opacity-60">
              {label}
            </div>
          ))}
        </div>

        {/* Days Grid */}
        <div className="grid grid-cols-7">
          {Array.from({ length: firstDayOfMonth }).map((_, i) => (
            <div key={`pad-${i}`} className="h-24 sm:h-32 border-r border-b opacity-20 bg-black/[0.01]" style={{ borderColor: theme.cardBorder }} />
          ))}
          
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const events = getEventsForDay(day);
            const isToday = new Date().toDateString() === new Date(year, month, day).toDateString();
            const isHighVib = isHighVibrationDay(day);
            
            return (
              <div 
                key={day} 
                className={`h-24 sm:h-32 border-r border-b relative p-1.5 transition-colors hover:bg-black/5 flex flex-col justify-between ${
                  isToday ? 'bg-amber-500/10' : ''
                } ${isHighVib ? 'ring-1 ring-amber-400/40' : ''}`}
                style={{ borderColor: theme.cardBorder }}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-bold px-1.5 py-0.5 rounded-md ${
                    isToday ? 'bg-[#8B2500] text-white shadow-xs' : 'opacity-70'
                  }`}>
                    {day}
                  </span>
                  {isHighVib && (
                    <span title="उच्च-कंपन पावन दिवस" className="text-amber-500 text-xs">
                      ✨
                    </span>
                  )}
                </div>
                
                <div className="mt-1 space-y-1 overflow-y-auto max-h-[calc(100%-24px)]">
                  {events.map((e, idx) => (
                    <div 
                      key={idx} 
                      className={`text-[8px] sm:text-[9px] p-1 rounded-lg border leading-tight flex items-start gap-1 font-serif font-bold ${getEventBg(e.type)} ${
                        e.isMain ? 'ring-1 ring-red-400 font-black' : ''
                      }`}
                    >
                      <span className="flex-shrink-0 mt-0.5">{getEventIcon(e.type)}</span>
                      <span className="truncate">{e.title[language]}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Annual 12-Month Matrix Layout */}
      <div 
        className="rounded-3xl shadow-xl overflow-hidden border backdrop-blur-md"
        style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
      >
        <div className="p-5 border-b" style={{ borderColor: theme.cardBorder, backgroundColor: theme.stepActiveBg }}>
          <h3 className="text-center text-lg font-black font-serif" style={{ color: theme.sacredMaroon }}>
            {t.monthlyGridTitle}
          </h3>
          <p className="text-center text-xs opacity-70 italic font-serif">
            {language === 'pb' ? 'ਸੰਗਰਾਂਦ, ਪੂਰਨਮਾਸ਼ੀ, ਮੱਸਿਆ ਅਤੇ ਪਾਵਨ ਪੁਰਬਾਂ ਦੀ ਸਾਲਾਨਾ ਸੂਚੀ' : language === 'en' ? 'Annual Comprehensive Matrix of Sangrand, Purnima, Amavasya & Sacred Festivals' : 'संग्रांद, पूर्णिमा, अमावस्या एवं पावन कबीर पर्वों की वार्षिक सारणी'}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-zinc-800 text-[10px] font-black uppercase tracking-widest border-b" style={{ borderColor: theme.cardBorder }}>
                <th className="p-3 border-r" style={{ borderColor: theme.cardBorder }}>{language === 'hi' ? 'माह' : (language === 'pb' ? 'ਮਹੀਨਾ' : 'Month')}</th>
                <th className="p-3 border-r text-orange-700 bg-orange-50/40" style={{ borderColor: theme.cardBorder }}>{t.sangrandLabel}</th>
                <th className="p-3 border-r text-amber-700 bg-amber-50/40" style={{ borderColor: theme.cardBorder }}>{t.purnimaLabel}</th>
                <th className="p-3 border-r text-slate-700 bg-slate-50/40" style={{ borderColor: theme.cardBorder }}>{t.amavasyaLabel}</th>
                <th className="p-3 text-red-700 bg-red-50/40" style={{ borderColor: theme.cardBorder }}>विशेष पावन पर्व</th>
              </tr>
            </thead>
            <tbody>
              {monthlyGridData.map((row, idx) => (
                <tr key={idx} className="border-b last:border-0 hover:bg-black/5 transition-colors" style={{ borderColor: theme.cardBorder }}>
                  <td className="p-3 border-r font-black text-xs bg-slate-50/20" style={{ borderColor: theme.cardBorder }}>
                    {row.monthName}
                  </td>
                  <td className="p-3 border-r" style={{ borderColor: theme.cardBorder }}>
                    {formatGridDate(row.sangrand?.date)}
                  </td>
                  <td className="p-3 border-r" style={{ borderColor: theme.cardBorder }}>
                    {formatGridDate(row.purnima?.date)}
                  </td>
                  <td className="p-3 border-r" style={{ borderColor: theme.cardBorder }}>
                    {formatGridDate(row.amavasya?.date)}
                  </td>
                  <td className="p-3 font-serif text-xs font-bold" style={{ borderColor: theme.cardBorder }}>
                    {row.parva ? (
                      <span className="inline-block px-2.5 py-1 rounded-md bg-red-500/10 text-red-800 dark:text-red-300 border border-red-500/30">
                        ⭐ {row.parva.title[language]}
                      </span>
                    ) : (
                      <span className="opacity-40">-</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};
