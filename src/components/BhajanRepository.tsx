import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, Disc, Music, Sparkles, X, Volume2, Radio } from 'lucide-react';
import { Language } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import { ambientReaderAudio, DhunSoundType } from '../services/audioDhun';

interface BhajanRepositoryProps {
  language: Language;
  onClose?: () => void;
}

interface TraditionalBhajan {
  id: string;
  title: { hi: string; pb: string; en: string };
  category: { hi: string; pb: string; en: string };
  lyrics: string[];
  duration: string;
  dhunType: DhunSoundType;
}

const DAMAKHEDA_BHAJANS: TraditionalBhajan[] = [
  {
    id: 'bhajan-1',
    title: { hi: 'चौका आरती व मंगलाचरण - अमर वाणी', pb: 'ਚੌਕਾ ਆਰਤੀ ਵ ਮੰਗਲਾਚਰਣ', en: 'Chouka Aarti & Mangalacharan' },
    category: { hi: 'परंपरागत चौका आरती', pb: 'ਪਰੰਪਰਾਗਤ ਚੌਕਾ ਆਰਤੀ', en: 'Traditional Chouka Aarti' },
    lyrics: [
      'सतगुरु की महिमा अनंत, अनंत किया उपकार।',
      'लोचन अनंत उघाड़िया, अनंत दिखाया सृजनहार॥',
      'आरती कीजै सतगुरु की, पातक दोष मिटै सब जी की।',
      'सतलोक धाम ते साहेब आए, बन्दीछोड़ सतगुरु कहलाए॥'
    ],
    duration: '12:45 min',
    dhunType: 'tanpura'
  },
  {
    id: 'bhajan-2',
    title: { hi: 'अमर कथा व बीजक साखी धुन', pb: 'ਅਮਰ ਕਥਾ ਵ ਬੀਜਕ ਸਾਖੀ ਧੁਨ', en: 'Amar Katha & Beejak Sakhi Dhun' },
    category: { hi: 'दमाखेड़ा साखी धुन', pb: 'ਦਮਾਖੇੜਾ ਸਾਖੀ ਧੁਨ', en: 'Damakheda Sakhi Dhun' },
    lyrics: [
      'सुमिरन कर ले बंदे मोत न टारे टारी।',
      'माया के मद में भूला, माटी मिल जाएगी सारी॥',
      'कबीर साहेब की बानी जो मन चित्त लावे।',
      'जन्म मरण के फंदे से निश्चय तर जावे॥'
    ],
    duration: '08:30 min',
    dhunType: 'satyanaam'
  },
  {
    id: 'bhajan-3',
    title: { hi: 'चेतावनी शबद - जागो जागो मुसाफिर भाई', pb: 'ਚੇਤਾਵਨੀ ਸ਼ਬਦ - ਜਾਗੋ ਜਾਗੋ ਮੁਸਾਫਿਰ ਭਾਈ', en: 'Chetawani Shabad - Jago Jago Musafir' },
    category: { hi: 'चेतावनी व उलटबासी', pb: 'ਚੇਤਾਵਨੀ ਵ ਉਲਟਬਾਂਸੀ', en: 'Chetawani & Ulatvasi' },
    lyrics: [
      'जागो जागो मुसाफिर भोर भयो, रेन गँवाई सोवत में॥',
      'साँस साँस हीरा जनम अनमोल खोवत, जग मोहे रोवत में॥',
      'कबीर कहे चेतो नर प्राणी, श्वास की डोरी टूटत पलक में॥'
    ],
    duration: '10:15 min',
    dhunType: 'flute'
  },
  {
    id: 'bhajan-4',
    title: { hi: 'अमृतवेला सत्यनाम सिमरन तरंग', pb: 'ਅੰਮ੍ਰਿਤਵੇਲਾ ਸਤਯਨਾਮ ਸਿਮਰਨ ਤਰੰਗ', en: 'Amritvela Satyanaam Meditation Wave' },
    category: { hi: 'सिमरन ध्यान धुन', pb: 'ਸਿਮਰਨ ਧਿਆਨ ਧੁਨ', en: 'Simran Meditation Wave' },
    lyrics: [
      'सत्यनाम सत्यनाम सत्यनाम जी।',
      'सुमिरन कर ले मन मेरे, कटै पाप तमाम जी॥'
    ],
    duration: '15:00 min',
    dhunType: 'stream'
  }
];

export const BhajanRepository: React.FC<BhajanRepositoryProps> = ({ language, onClose }) => {
  const { theme } = useAppTheme();
  const [activeBhajan, setActiveBhajan] = useState<TraditionalBhajan | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handlePlayBhajan = (bhajan: TraditionalBhajan) => {
    if (activeBhajan?.id === bhajan.id && isPlaying) {
      ambientReaderAudio.stop();
      setIsPlaying(false);
      setActiveBhajan(null);
    } else {
      setActiveBhajan(bhajan);
      ambientReaderAudio.start(bhajan.dhunType);
      setIsPlaying(true);
    }
  };

  const handleStopAll = () => {
    ambientReaderAudio.stop();
    setIsPlaying(false);
    setActiveBhajan(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6">
      {/* Header Banner */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 text-white p-6 sm:p-8 shadow-xl border border-amber-400/40">
        <div className="absolute -right-8 -bottom-8 opacity-15 text-9xl">🪷</div>
        <div className="relative z-10 flex items-center justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <Radio size={13} className="animate-pulse" /> {language === 'pb' ? 'ਦਮਾਖੇੜਾ ਪਰੰਪਰਾ ਅਤੇ ਚੌਕਾ ਆਰਤੀ' : language === 'en' ? 'Damakheda Tradition & Chauka Aarti' : 'दमाखेड़ा परंपरा & चौका आरती'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-serif">
              {language === 'pb' ? 'ਪਰੰਪਰਾਗਤ ਭਜਨ ਤੇ ਸਾਖੀ ਧੁਨ ਸੰਗ੍ਰਹਿ' : language === 'en' ? 'Traditional Bhajan & Sakhi Dhun Archive' : 'पारंपरिक भजन व साखी धुन संग्रह'}
            </h2>
            <p className="text-xs sm:text-sm font-serif opacity-90 mt-1 max-w-xl">
              {language === 'pb'
                ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੇ ਪਵਿੱਤਰ ਭਜਨ, ਚੌਕਾ ਆਰਤੀ ਅਤੇ ਸਿਮਰਨ ਧੁਨਾਂ ਜੋ ਆਤਮਾ ਨੂੰ ਨਿਹਾਲ ਕਰਦੀਆਂ ਹਨ।'
                : language === 'en'
                ? 'Sacred traditional bhajans, Chauka Aarti chants, and devotional meditation waves of Satguru Kabir Saheb.'
                : 'सतगुरु कबीर साहेब जी के पावन पारंपरिक भजन, चौका आरती और सिमरन धुनें जो आत्मा को विभोर करती हैं।'}
            </p>
          </div>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="p-2.5 rounded-2xl bg-black/20 hover:bg-black/30 text-white transition cursor-pointer"
            >
              <X size={20} />
            </button>
          )}
        </div>
      </div>

      {/* Bhajan Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {DAMAKHEDA_BHAJANS.map((bhajan) => {
          const isThisPlaying = activeBhajan?.id === bhajan.id && isPlaying;
          return (
            <motion.div
              key={bhajan.id}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className={`p-5 rounded-3xl border-2 transition-all shadow-sm flex flex-col justify-between ${
                isThisPlaying
                  ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-500 ring-2 ring-amber-400/30 shadow-md'
                  : 'bg-white dark:bg-zinc-900 border-gray-100 dark:border-zinc-800 hover:border-amber-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/20">
                    {bhajan.category[language] || bhajan.category.hi}
                  </span>
                  <span className="text-xs font-mono font-bold opacity-60">
                    ⏱️ {bhajan.duration}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-black font-serif text-gray-900 dark:text-gray-100 mb-2">
                  {bhajan.title[language] || bhajan.title.hi}
                </h3>

                <div className="space-y-1 mb-4 p-3 rounded-2xl bg-black/5 dark:bg-white/5 font-serif text-xs italic opacity-85">
                  {bhajan.lyrics.map((l, i) => (
                    <p key={i}>"{l}"</p>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 dark:border-zinc-800 flex items-center justify-between">
                <span className="text-[11px] font-mono opacity-75">
                  {isThisPlaying
                    ? (language === 'pb' ? '🎶 ਚੱਲ ਰਿਹਾ ਹੈ...' : language === 'en' ? '🎶 Now Playing...' : '🎶 बज रहा है...')
                    : (language === 'pb' ? '✨ ਦਮਾਖੇੜਾ ਪਰੰਪਰਾ' : language === 'en' ? '✨ Damakheda Tradition' : '✨ दमाखेड़ा परंपरा')}
                </span>
                <button
                  type="button"
                  onClick={() => handlePlayBhajan(bhajan)}
                  className={`px-4 py-2 rounded-2xl text-xs font-bold font-serif flex items-center gap-2 transition cursor-pointer ${
                    isThisPlaying
                      ? 'bg-[#8B2500] text-white shadow-md animate-pulse'
                      : 'bg-amber-500/10 dark:bg-amber-500/20 text-amber-900 dark:text-amber-300 hover:bg-amber-500/25'
                  }`}
                >
                  {isThisPlaying ? <Pause size={15} /> : <Play size={15} />}
                  <span>
                    {isThisPlaying
                      ? (language === 'pb' ? 'ਰੋਕੋ' : language === 'en' ? 'Pause' : 'विराम')
                      : (language === 'pb' ? 'ਸੁਣੋ' : language === 'en' ? 'Listen' : 'श्रवण करें')}
                  </span>
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {isPlaying && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[140] w-[95%] max-w-md p-3.5 rounded-3xl bg-zinc-950 text-white border-2 border-amber-500 shadow-2xl flex items-center justify-between gap-3 backdrop-blur-md">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="w-9 h-9 rounded-2xl bg-amber-600 flex items-center justify-center text-white shrink-0 animate-spin">
              <Disc size={18} />
            </div>
            <div className="truncate">
              <span className="text-[10px] font-mono text-amber-400 font-bold block">
                {language === 'pb' ? '🪷 24x7 ਭਜਨ ਧਾਰਾ ਚਾਲੂ' : language === 'en' ? '🪷 24x7 Bhajan Stream Active' : '🪷 २४x७ भजन धारा सक्रिय'}
              </span>
              <p className="text-xs font-serif font-bold truncate">
                {activeBhajan?.title[language] || activeBhajan?.title.hi}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleStopAll}
            className="px-3 py-1.5 rounded-xl bg-red-600/30 hover:bg-red-600/50 text-red-300 font-bold text-xs transition cursor-pointer"
          >
            {language === 'pb' ? 'ਬੰਦ ਕਰੋ' : language === 'en' ? 'Stop' : 'बंद करें'}
          </button>
        </div>
      )}
    </div>
  );
};
