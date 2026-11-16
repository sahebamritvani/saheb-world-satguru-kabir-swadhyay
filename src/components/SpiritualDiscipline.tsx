import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  Circle, 
  Flame, 
  Trophy, 
  Calendar as CalendarIcon, 
  Sparkles, 
  Heart, 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight,
  RotateCcw,
  Sun,
  Award,
  Scroll,
  Info,
  ArrowLeft,
  X
} from 'lucide-react';
import { Language } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import { sacredHaptics } from '../services/haptics';

interface SpiritualDisciplineProps {
  language: Language;
  onClose?: () => void;
  onOpenBlessing?: (title?: string, msg?: string) => void;
  onSelectLanguage?: (lang: Language) => void;
}

interface DisciplineItem {
  id: string;
  title: {
    pb: string;
    hi: string;
    en: string;
  };
  subtitle: {
    pb: string;
    hi: string;
    en: string;
  };
  category: 'core' | 'daily' | 'mind';
  sakhiRef?: {
    text: {
      pb: string;
      hi: string;
      en: string;
    };
    source: {
      pb: string;
      hi: string;
      en: string;
    };
  };
}

const DISCIPLINE_ITEMS: DisciplineItem[] = [
  {
    id: 'niyam-satya',
    title: {
      pb: '੧. ਸਤਿ ਸੰਭਾਸ਼ਣ (ਸੱਚ ਬੋਲਣਾ)',
      hi: '१. सत्य संभाषण (सत्य बोलना)',
      en: '1. Truthfulness (Satya)'
    },
    subtitle: {
      pb: 'ਕੋਈ ਝੂਠ, ਧੋਖਾ ਜਾਂ ਪਖੰਡ ਨਾ ਕਰਨਾ। ਸਦਾ ਨਿਰਛਲ ਸੱਚੇ ਵਚਨ ਬੋਲਣਾ।',
      hi: 'झूठ, छल और पाखंड से विमुख रहकर सत्य और निष्कपट वाणी बोलना।',
      en: 'Refrain from falsehood and deceit; speak with purity and integrity.'
    },
    category: 'core',
    sakhiRef: {
      text: {
        pb: 'ਸਾਂਚ ਬਰਾਬਰ ਤਪ ਨਹੀਂ, ਝੂਠ ਬਰਾਬਰ ਪਾਪ । ਜਾਕੇ ਹਿਰਦੈ ਸਾਂਚ ਹੈ, ਤਾਕੇ ਹਿਰਦੈ ਆਪ ॥',
        hi: 'सांच बराबर तप नहीं, झूठ बराबर पाप । जाके हिरदै सांच है, ताके हिरदै आप ॥',
        en: 'No penance equals truth, no sin equals falsehood. In whose heart truth resides, the Divine Himself abides.'
      },
      source: {
        hi: 'साखी संग्रह · सांच को अंग',
        pb: 'ਸਾਖੀ ਸੰਗ੍ਰਹਿ · ਸਾਂਚ ਕੋ ਅੰਗ',
        en: 'Sakhi Sangrah · Sanch Ko Ang'
      }
    }
  },
  {
    id: 'niyam-ahimsa',
    title: {
      pb: '੨. ਜੀਵ ਦਇਆ ਤੇ ਅਹਿੰਸਾ',
      hi: '२. जीव दया एवं अहिंसा',
      en: '2. Compassion & Ahimsa'
    },
    subtitle: {
      pb: 'ਕਿਸੇ ਵੀ ਜੀਵ ਦੀ ਹੱਤਿਆ ਜਾਂ ਪੀੜਾ ਦਾ ਕਾਰਨ ਨਾ ਬਣਨਾ। ਸ਼ੁੱਧ ਸ਼ਾਕਾਹਾਰੀ ਰਹਿਣੀ।',
      hi: 'किसी भी मूक प्राणी को कष्ट न देना। पूर्ण सात्विक एवं शाकाहारी जीवन।',
      en: 'Harbor no cruelty toward any sentient being; observe pure vegetarian lifestyle.'
    },
    category: 'core',
    sakhiRef: {
      text: {
        pb: 'ਦਯਾ ਕੌਨ ਪਰ ਕੀਜੀਏ, ਕਾ ਪਰ ਕੀਜੈ ਘਾਤ । ਸਭ ਘਟ ਮੇਂ ਸਾਂਈਂ ਬਸੈ, ਕਛੁ ਨਹਿਂ ਦੂਜੀ ਬਾਤ ॥',
        hi: 'दया कौन पर कीजिए, का पर कीजै घात । सब घट में सांईं बसै, कछु नहिं दूजी बात ॥',
        en: 'Upon whom shall mercy be shown, whom should one harm? In every vessel dwells the Lord, speak no other word.'
      },
      source: {
        hi: 'साखी संग्रह · दया को अंग',
        pb: 'ਸਾਖੀ ਸੰਗ੍ਰਹਿ · ਦਇਆ ਕੋ ਅੰਗ',
        en: 'Sakhi Sangrah · Daya Ko Ang'
      }
    }
  },
  {
    id: 'niyam-simran',
    title: {
      pb: '੩. ਨਾਮ-ਸਿਮਰਨ ਤੇ ਨਿਤਨੇਮ',
      hi: '३. नाम-सुमिरन एवं नित्यनेम',
      en: '3. Satyanaam Simran'
    },
    subtitle: {
      pb: 'ਰੋਜ਼ਾਨਾ ਸਤਯਨਾਮ ਦਾ ਜਾਪ (ਘੱਟੋ-ਘੱਟ ੧੫ ਮਿੰਟ ਜਾਂ ੧ ਮਾਲਾ) ਅਤੇ ਨਿਤਨੇਮ ਪਾਠ।',
      hi: 'प्रतिदिन सत्यनाम का ध्यान (न्यूनतम १५ मिनट या १ माला) तथा नित्यनेम।',
      en: 'Daily meditation on Satya-Naam (minimum 15 mins) and devotional remembrance.'
    },
    category: 'core',
    sakhiRef: {
      text: {
        pb: 'ਸੁਮਿਰਨ ਕੀ ਸੁਧਿ ਯੌਂ ਕਰੋ, ਜੈਸੇ ਨਾਦ ਕੁਰੰਗ । ਕਹਿ ਕਬੀਰ ਬਿਸਰੈ ਨਹੀ, ਤਨ ਛੂਟੈ ਤਿਹਿ ਸੰਗ ॥',
        hi: 'सुमिरन की सुधि यौं करो, जैसे नाद कुरंग । कहि कबीर बिसरै नही, तन छूटै तिहि संग ॥',
        en: 'Remember the Divine as the deer entranced by sweet sound; says Kabir, never forget Him even when life departs.'
      },
      source: {
        hi: 'साखी संग्रह · सुमिरन को अंग',
        pb: 'ਸਾਖੀ ਸੰਗ੍ਰਹਿ · ਸੁਮਿਰਨ ਕੋ ਅੰਗ',
        en: 'Sakhi Sangrah · Sumiran Ko Ang'
      }
    }
  },
  {
    id: 'niyam-santokh',
    title: {
      pb: '੪. ਸੰਤੋਖ ਤੇ ਪਰ-ਤਿਆਗ',
      hi: '४. संतोष एवं सदाचार',
      en: '4. Contentment & Virtue'
    },
    subtitle: {
      pb: 'ਪਰ-ਧਨ ਅਤੇ ਪਰ-ਨਾਰੀ/ਪਰ-ਪੁਰਸ਼ ਦਾ ਤਿਆਗ। ਨੇਕ ਕਿਰਤ ਅਤੇ ਸ਼ੁਕਰਾਨਾ।',
      hi: 'पराया धन और पराई दृष्टि का त्याग। ईमानदारी की आजीविका और संतोष।',
      en: 'Purity of desire, absence of covetousness; contentment with honest earnings.'
    },
    category: 'core',
    sakhiRef: {
      text: {
        pb: 'ਗੋਧਨ ਗਜਧਨ ਬਾਜਧਨ, ਔਰ ਰਤਨ ਧਨ ਖਾਨ । ਜਬ ਆਵੈ ਸੰਤੋਸ਼ ਧਨ, ਸਭ ਧਨ ਧੂਰੀ ਸਮਾਨ ॥',
        hi: 'गोधन गजधन बाजधन, और रतन धन खान । जब आवै संतोष धन, सब धन धूरी समान ॥',
        en: 'Cattle-wealth, elephant-wealth, horse-wealth, and mines of gems; when contentment-wealth arrives, all wealth turns to dust.'
      },
      source: {
        hi: 'साखी संग्रह · संतोख को अंग',
        pb: 'ਸਾਖੀ ਸੰਗ੍ਰਹਿ · ਸੰਤੋਖ ਕੋ ਅੰਗ',
        en: 'Sakhi Sangrah · Santokh Ko Ang'
      }
    }
  },
  {
    id: 'niyam-seva',
    title: {
      pb: '੫. ਗੁਰੂ-ਸੇਵਾ, ਸਾਧੂ-ਸੰਗਤ ਤੇ ਨਿਮਰਤਾ',
      hi: '५. गुरु सेवा, साधु संगति एवं नम्रता',
      en: '5. Seva, Satsang & Humility'
    },
    subtitle: {
      pb: 'ਸਤਿਗੁਰੂ ਦੇ ਸਨਮੁਖ ਸੀਸ ਨਿਵਾਉਣਾ, ਸੰਤਾਂ ਦਾ ਆਦਰ ਅਤੇ ਅਹੰਕਾਰ ਦਾ ਤਿਆਗ।',
      hi: 'सतगुरु के प्रति पूर्ण समर्पण, संतों का आदर एवं अहंकार का शमन।',
      en: 'Reverence to Satguru, holy company (Satsang), and dismantling the false ego.'
    },
    category: 'core',
    sakhiRef: {
      text: {
        pb: 'ਕਬੀਰ ਸੰਗਤਿ ਸਾਧ ਕੀ, ਬੇਗਿ ਨ ਕੀਜੈ ਹਾਨਿ । ਨਿਰਮਲ ਤੂਕ ਨਿਵਾਸ ਹੈ, ਪਾਵੈ ਪਦ ਨਿਰਬਾਨ ॥',
        hi: 'कबीर संगति साध की, बेगि न कीजै हानि । निर्मल तूक निवास है, पावै पद निरबान ॥',
        en: 'Kabir, never turn away from the company of saints; it is a sacred abode that grants the state of Nirvana.'
      },
      source: {
        hi: 'साखी संग्रह · साधु संगति को अंग',
        pb: 'ਸਾਖੀ ਸੰਗ੍ਰਹਿ · ਸਾਧੂ ਸੰਗਤਿ ਕੋ ਅੰਗ',
        en: 'Sakhi Sangrah · Sadhu Sangati Ko Ang'
      }
    }
  },
  {
    id: 'niyam-amritvela',
    title: {
      pb: '੬. ਅੰਮ੍ਰਿਤ ਵੇਲਾ ਜਾਗਰਣ',
      hi: '६. अमृत वेला जागरण',
      en: '6. Early Morning Awakening'
    },
    subtitle: {
      pb: 'ਸੂਰਜ ਚੜ੍ਹਨ ਤੋਂ ਪਹਿਲਾਂ ਜਾਗ ਕੇ ਪਵਿੱਤਰ ਮਨ ਨਾਲ ਸਤਿਗੁਰੂ ਨੂੰ ਯਾਦ ਕਰਨਾ।',
      hi: 'सूर्योदय से पूर्व जागकर शांत मन से सतगुरु का ध्यान व सुमिरन।',
      en: 'Awakening before dawn in serenity for quiet reflection.'
    },
    category: 'daily',
    sakhiRef: {
      text: {
        pb: 'ਰਾਤਿ ਗਵਾਈ ਸੋਇ ਕਰਿ, ਦਿਵਸੁ ਗਵਾਇਆ ਖਾਇ । ਹੀਰੇ ਜੈਸਾ ਜਨਮੁ ਹੈ, ਕਉਡੀ ਬਦਲੇ ਜਾਇ ॥',
        hi: 'राति गवाई सोइ करि, दिवसु गवाया खाइ । हीरे जैसा जनमु है, कौडी बदले जाइ ॥',
        en: 'Night is spent in sleep, day in consumption; this diamond-like birth is being traded for a worthless shell.'
      },
      source: {
        hi: 'साखी संग्रह · चेतावनी को अंग',
        pb: 'ਸਾਖੀ ਸੰਗ੍ਰਹਿ · ਚੇਤਾਵਨੀ ਕੋ ਅੰਗ',
        en: 'Sakhi Sangrah · Chetawani Ko Ang'
      }
    }
  },
  {
    id: 'niyam-kshama',
    title: {
      pb: '੭. ਖਿਮਾ ਤੇ ਸ਼ਾਂਤੀ',
      hi: '७. क्षमा एवं शांति',
      en: '7. Forgiveness & Peace'
    },
    subtitle: {
      pb: 'ਦਿਲ ਵਿੱਚ ਕਿਸੇ ਲਈ ਵੀ ਵੈਰ-ਵਿਰੋਧ ਜਾਂ ਬਦਲੇ ਦੀ ਭਾਵਨਾ ਨਾ ਰੱਖਣਾ।',
      hi: 'हृदय में किसी के प्रति द्वेष या बदले की भावना न रखना; क्षमादान।',
      en: 'Clearing the heart of resentment and holding no grudges.'
    },
    category: 'mind',
    sakhiRef: {
      text: {
        pb: 'ਜਹਾਂ ਦਇਆ ਤਹਾਂ ਧਰਮ ਹੈ, ਜਹਾਂ ਲੋਭ ਤਹਾਂ ਪਾਪ । ਜਹਾਂ ਕ੍ਰੋਧ ਤਹਾਂ ਕਾਲ ਹੈ, ਜਹਾਂ ਖਿਮਾ ਤਹਾਂ ਆਪ ॥',
        hi: 'जहां दया तहां धर्म है, जहां लोभ तहां पाप । जहां क्रोध तहां काल है, जहां क्षमा तहां आप ॥',
        en: 'Where compassion resides, righteousness abides; where greed, sin; where anger, death; where forgiveness, God Himself dwells.'
      },
      source: {
        hi: 'साखी संग्रह · क्षमा को अंग',
        pb: 'ਸਾਖੀ ਸੰਗ੍ਰਹਿ · ਖਿਮਾ ਕੋ ਅੰਗ',
        en: 'Sakhi Sangrah · Kshama Ko Ang'
      }
    }
  },
  {
    id: 'niyam-swadhyay',
    title: {
      pb: '੮. ਦੈਨਿਕ ਬਾਣੀ ਸਵਾਧਿਆਏ',
      hi: '८. दैनिक वाणी स्वाध्याय',
      en: '8. Daily Sacred Reading'
    },
    subtitle: {
      pb: 'ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੀ ਘੱਟੋ-ਘੱਟ ਇਕ ਸਾਖੀ ਜਾਂ ਸ਼ਬਦ ਦਾ ਅਰਥ ਸਮੇਤ ਪਾਠ ਕਰਨਾ।',
      hi: 'कबीर साहेब की कम से कम एक साखी या पद का अर्थ सहित पठन।',
      en: 'Reading at least one sacred Sakhi or verse daily with reflection.'
    },
    category: 'daily',
    sakhiRef: {
      text: {
        pb: 'ਪੋਥੀ ਪੜ੍ਹਿ ਪੜ੍ਹਿ ਜਗ ਮੁਆ, ਪੰਡਿਤ ਭਯਾ ਨ ਕੋਇ । ਢਾਈ ਆਖਰ ਪ੍ਰੇਮ ਕਾ, ਪੜ੍ਹੈ ਸੋ ਪੰਡਿਤ ਹੋਇ ॥',
        hi: 'पोथी पढ़ि पढ़ि जग मुआ, पंडित भया न कोय । ढाई आखर प्रेम का, पढ़े सो पंडित होय ॥',
        en: 'Reading countless scriptures without devotion makes none a sage; one who lives divine love is the true scholar.'
      },
      source: {
        hi: 'साखी संग्रह · साधु को अंग',
        pb: 'ਸਾਖੀ ਸੰਗ੍ਰਹਿ · ਸਾਧੂ ਕੋ ਅੰਗ',
        en: 'Sakhi Sangrah · Sadhu Ko Ang'
      }
    }
  }
];

export const SpiritualDiscipline: React.FC<SpiritualDisciplineProps> = ({
  language,
  onClose,
  onOpenBlessing,
  onSelectLanguage
}) => {
  const { theme } = useAppTheme();
  
  // Date State (Defaults to Today YYYY-MM-DD)
  const getTodayStr = () => new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState<string>(getTodayStr());

  // Completed items map: { [itemId: string]: boolean }
  const [completedMap, setCompletedMap] = useState<Record<string, boolean>>({});
  const [streakDays, setStreakDays] = useState<number>(1);
  const [bestStreak, setBestStreak] = useState<number>(3);

  // Load records for selected date
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storageKey = `saheb_discipline_${selectedDate}`;
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        try {
          setCompletedMap(JSON.parse(saved));
        } catch {
          setCompletedMap({});
        }
      } else {
        setCompletedMap({});
      }

      // Calculate streak
      calculateStreak();
    }
  }, [selectedDate]);

  const calculateStreak = () => {
    if (typeof window === 'undefined') return;
    let currentStreak = 0;
    const now = new Date();

    for (let i = 0; i < 30; i++) {
      const d = new Date();
      d.setDate(now.getDate() - i);
      const dateStr = d.toISOString().split('T')[0];
      const saved = localStorage.getItem(`saheb_discipline_${dateStr}`);
      if (saved) {
        try {
          const map = JSON.parse(saved);
          const checkedCount = Object.values(map).filter(Boolean).length;
          if (checkedCount >= 4) {
            currentStreak++;
          } else if (i > 0) {
            break;
          }
        } catch {
          break;
        }
      } else if (i > 0) {
        break;
      }
    }
    setStreakDays(Math.max(currentStreak, 1));
    const savedBest = localStorage.getItem('saheb_discipline_best_streak');
    if (savedBest) {
      setBestStreak(Math.max(parseInt(savedBest, 10), currentStreak));
    } else {
      setBestStreak(Math.max(currentStreak, 1));
    }
  };

  const handleToggleItem = (id: string) => {
    sacredHaptics.lightTap();
    const updated = {
      ...completedMap,
      [id]: !completedMap[id]
    };
    setCompletedMap(updated);

    if (typeof window !== 'undefined') {
      const storageKey = `saheb_discipline_${selectedDate}`;
      localStorage.setItem(storageKey, JSON.stringify(updated));

      // Check if newly reached 100%
      const count = Object.values(updated).filter(Boolean).length;
      if (count === DISCIPLINE_ITEMS.length && onOpenBlessing) {
        sacredHaptics.successVibration();
        onOpenBlessing(
          language === 'pb' ? 'ਪੂਰਨ ਨੇਮ ਪਾਲਣ ਦੀ ਵਧਾਈ!' : language === 'en' ? 'Congratulations on Complete Discipline!' : 'पूर्ण नेम पालन की बधाई!',
          language === 'pb' ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੀ ਕਿਰਪਾ ਨਾਲ ਅੱਜ ਆਪ ਜੀ ਦੇ ਸਾਰੇ ਨੇਮ ਪੂਰੇ ਹੋਏ।' : language === 'en' ? 'By the grace of Satguru Kabir Saheb, all your spiritual vows are fulfilled today.' : 'सतगुरु कबीर साहेब की कृपा से आज आपके सभी नियम संपन्न हुए।'
        );
      }
    }
  };

  const completedCount = Object.values(completedMap).filter(Boolean).length;
  const percentage = Math.round((completedCount / DISCIPLINE_ITEMS.length) * 100);

  const handleDateShift = (delta: number) => {
    sacredHaptics.lightTap();
    const cur = new Date(selectedDate);
    cur.setDate(cur.getDate() + delta);
    setSelectedDate(cur.toISOString().split('T')[0]);
  };

  const isToday = selectedDate === getTodayStr();

  return (
    <div className="max-w-4xl mx-auto p-3 sm:p-6 space-y-6">
      {/* Top Close Button Bar */}
      {onClose && (
        <div className="flex justify-start -mb-2">
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
            <ArrowLeft className="w-4 h-4" />
            <span className="font-serif font-bold">{language === 'pb' ? 'ਵਾਪਸ ਜਾਓ' : language === 'en' ? 'Go Back' : 'वापस जाएं'}</span>
          </button>
        </div>
      )}

      {/* Top Banner */}
      <div 
        className="p-5 sm:p-7 rounded-3xl border shadow-sm relative overflow-hidden"
        style={{ 
          backgroundColor: theme.stepActiveBg, 
          borderColor: theme.accentGold 
        }}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 dark:text-amber-300">
              <ShieldCheck className="w-4 h-4 text-amber-700" />
              <span>
                {language === 'pb' ? 'ਕਬੀਰ ਪੰਥ ਮੂਲ ਅਨੁਸ਼ਾਸਨ' : language === 'en' ? 'Kabir Spiritual Code' : 'कबीर पंथ मूल अनुशासन'}
              </span>
              <span aria-hidden="true">·</span>
              <span>
                {language === 'pb' ? 'ਰੋਜ਼ਾਨਾ ਸਾਧਨਾ ਟਰੈਕਰ' : language === 'en' ? 'Daily Vows Tracker' : 'दैनिक साधना ट्रैकर'}
              </span>
            </div>
            <h1 
              style={{ color: theme.sacredMaroon }}
              className="text-2xl sm:text-3xl font-black font-serif tracking-tight"
            >
              {language === 'pb' 
                ? 'ਪੰਚਾਮ੍ਰਿਤ ਨੇਮ ਤੇ ਦੈਨਿਕ ਸਾਧਨਾ ਟਰੈਕਰ' 
                : language === 'en' 
                ? 'Panchamrit Vows & Daily Spiritual Discipline' 
                : 'पंचामृत नेम एवं दैनिक साधना ट्रैकर'}
            </h1>
            <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 max-w-xl font-medium">
              {language === 'pb'
                ? 'ਸਤਿ, ਦਇਆ, ਨਾਮ-ਸਿਮਰਨ, ਸੰਤੋਖ ਅਤੇ ਗੁਰੂ-ਸੇਵਾ—ਇਹ ੫ ਅੰਮ੍ਰਿਤ ਨੇਮ ਸਾਧਕ ਦੀ ਆਤਮਾ ਨੂੰ ਪਰਮ ਪਵਿੱਤਰ ਬਣਾਉਂਦੇ ਹਨ।'
                : language === 'en'
                ? 'Truth, compassion, remembrance, contentment, and Guru seva—the 5 nectar vows that sanctify the seeker\'s life.'
                : 'सत्य, दया, सुमिरन, संतोष एवं गुरु सेवा—ये ५ अमृत नियम साधक की आत्मा को परम पवित्र और निर्दोष बनाते हैं।'}
            </p>
          </div>

          <div className="flex flex-col items-end gap-3 shrink-0">


            {/* Right Action Area: In-page Quick Language Switcher & Streak Indicator */}
            <div className="flex flex-wrap items-center gap-2.5">
              {/* Quick Language Switcher Control */}
              <div 
                className="flex items-center rounded-2xl p-1 border shadow-2xs"
                style={{ backgroundColor: theme.cardBg, borderColor: theme.accentGold }}
              >
              {(['hi', 'pb', 'en'] as Language[]).map((lng) => {
                const isSelected = language === lng;
                const label = lng === 'hi' ? 'हि' : lng === 'pb' ? 'ਪੰ' : 'EN';
                return (
                  <button
                    key={lng}
                    id={`vows-lang-${lng}`}
                    onClick={() => {
                      if (onSelectLanguage) onSelectLanguage(lng);
                      if (typeof window !== 'undefined') {
                        window.dispatchEvent(new CustomEvent('sahebworld_lang_change', { detail: lng }));
                      }
                    }}
                    style={{
                      backgroundColor: isSelected ? theme.sacredMaroon : 'transparent',
                      color: isSelected ? '#FFFFFF' : theme.textSecondary,
                    }}
                    className="px-2.5 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer hover:opacity-90"
                    title={lng === 'hi' ? 'हिंदी' : lng === 'pb' ? 'ਪੰਜਾਬੀ' : 'English'}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            {/* Streak Indicator */}
            <div className="flex items-center gap-3 p-2.5 sm:p-3 rounded-2xl bg-white/80 dark:bg-stone-900 border border-amber-300 shadow-xs shrink-0">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600">
                <Flame className="w-5 h-5 animate-pulse fill-amber-500" />
              </div>
              <div>
                <div className="text-[11px] text-stone-500 font-bold uppercase tracking-wider">
                  {language === 'pb' ? 'ਸਾਧਨਾ ਸਟ੍ਰੀਕ' : language === 'en' ? 'Streak' : 'साधना स्ट्रीक'}
                </div>
                <div className="text-sm sm:text-base font-black text-amber-900 dark:text-amber-300 font-serif">
                  {streakDays} {language === 'pb' ? 'ਦਿਨ ਨਿਰੰਤਰ' : language === 'en' ? 'Days' : 'दिन निरंतर'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* Date Navigator & Completion Bar */}
      <div 
        className="p-4 sm:p-5 rounded-2xl border shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
      >
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleDateShift(-1)}
            className="p-2 rounded-xl border border-stone-200 dark:border-stone-800 hover:bg-amber-50 dark:hover:bg-stone-800 transition cursor-pointer"
            title="Previous Day"
          >
            <ChevronLeft className="w-4 h-4 text-stone-700 dark:text-stone-300" />
          </button>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-50/80 dark:bg-stone-900 border border-amber-200/60 text-xs font-bold text-amber-900 dark:text-amber-300">
            <CalendarIcon className="w-3.5 h-3.5 text-amber-700" />
            <span>{selectedDate}</span>
            {isToday && (
              <span className="text-[10px] bg-amber-700 text-white px-2 py-0.5 rounded-md font-semibold">
                {language === 'pb' ? 'ਅੱਜ' : language === 'en' ? 'Today' : 'आज'}
              </span>
            )}
          </div>

          <button
            onClick={() => handleDateShift(1)}
            disabled={isToday}
            className={`p-2 rounded-xl border border-stone-200 dark:border-stone-800 transition cursor-pointer ${
              isToday ? 'opacity-40 cursor-not-allowed' : 'hover:bg-amber-50 dark:hover:bg-stone-800'
            }`}
            title="Next Day"
          >
            <ChevronRight className="w-4 h-4 text-stone-700 dark:text-stone-300" />
          </button>
        </div>

        {/* Progress Display */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="text-right">
            <div className="text-xs font-bold text-stone-700 dark:text-stone-300">
              {completedCount} / {DISCIPLINE_ITEMS.length} {language === 'pb' ? 'ਨੇਮ ਸੰਪੰਨ' : language === 'en' ? 'Vows Done' : 'नियम संपन्न'}
            </div>
            <div className="text-[10px] text-stone-500 font-medium">
              {percentage}% {language === 'pb' ? 'ਅਨੁਸ਼ਾਸਨ ਸਕੋਰ' : language === 'en' ? 'Discipline Score' : 'अनुशासन स्कोर'}
            </div>
          </div>

          <div className="w-28 sm:w-36 h-3 bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden border border-stone-200 dark:border-stone-700">
            <div 
              className="h-full bg-gradient-to-r from-amber-600 to-amber-700 rounded-full transition-all duration-500"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Discipline Checklist Items */}
      <div className="space-y-3">
        {DISCIPLINE_ITEMS.map((item, index) => {
          const isChecked = !!completedMap[item.id];
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 }}
              onClick={() => handleToggleItem(item.id)}
              className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 select-none ${
                isChecked
                  ? 'bg-amber-50/90 dark:bg-stone-900/60 border-amber-400/80 shadow-xs'
                  : 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 hover:border-amber-300'
              }`}
            >
              <button 
                type="button"
                className="mt-0.5 shrink-0 transition-transform active:scale-90"
              >
                {isChecked ? (
                  <CheckCircle2 className="w-5 h-5 text-amber-700 dark:text-amber-500 fill-amber-100 dark:fill-amber-950" />
                ) : (
                  <Circle className="w-5 h-5 text-stone-400 hover:text-amber-600" />
                )}
              </button>

              <div className="space-y-1 flex-1">
                <div className="flex items-center justify-between">
                  <h3 
                    style={{ color: isChecked ? theme.sacredMaroon : theme.textPrimary }}
                    className={`text-sm sm:text-base font-bold font-serif ${
                      isChecked ? 'line-through opacity-85' : ''
                    }`}
                  >
                    {item.title[language]}
                  </h3>
                  {item.category === 'core' && (
                    <span className="text-[10px] text-amber-800 dark:text-amber-400 font-bold uppercase tracking-wider">
                      {language === 'pb' ? 'ਮੂਲ ਪੰਚਾਮ੍ਰਿਤ' : language === 'en' ? 'Core Niyam' : 'मूल पंचामृत'}
                    </span>
                  )}
                </div>

                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-medium">
                  {item.subtitle[language]}
                </p>

                {item.sakhiRef && (
                  <div className="pt-1.5 text-[11px] text-amber-900 dark:text-amber-300/90 font-serif italic border-t border-amber-200/40 mt-2">
                    "{typeof item.sakhiRef.text === 'string' ? item.sakhiRef.text : (item.sakhiRef.text[language] || item.sakhiRef.text.hi)}" <span className="not-italic text-stone-500 font-sans text-[10px]">· {typeof item.sakhiRef.source === 'string' ? item.sakhiRef.source : (item.sakhiRef.source[language] || item.sakhiRef.source.hi)}</span>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Daily Sankalp Box */}
      <div 
        className="p-5 rounded-3xl border text-center space-y-3 shadow-xs"
        style={{ 
          backgroundColor: theme.stepActiveBg, 
          borderColor: theme.accentGold 
        }}
      >
        <span className="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase tracking-widest block font-serif">
          {language === 'hi' ? '।। सतगुरु कबीर साहेब पावन संकल्प ।।' : language === 'pb' ? '।। ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਪਾਵਨ ਸੰਕਲਪ ।।' : '।। Satguru Kabir Saheb Sacred Vow ।।'}
        </span>
        <p 
          style={{ color: theme.sacredMaroon }}
          className="text-base sm:text-lg font-bold font-serif leading-relaxed max-w-xl mx-auto"
        >
          {language === 'pb'
            ? 'ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੀ ਰਸਨਾ \'ਤੇ ਸਦਾ ਸਤਿ ਹੋਵੇ, ਹਿਰਦੇ ਵਿੱਚ ਦਇਆ ਹੋਵੇ, ਹੱਥਾਂ ਨਾਲ ਨਿਰਸੁਆਰਥ ਸੇਵਾ ਹੋਵੇ, ਅਤੇ ਮਨ ਵਿੱਚ ਸਦਾ ਆਪ ਜੀ ਦੇ ਸਤਯਨਾਮ ਦਾ ਵਾਸ ਹੋਵੇ।'
            : language === 'en'
            ? 'O Satguru! May truth dwell on my tongue, compassion in my heart, selfless service in my hands, and Thy holy Name in my mind.'
            : 'हे सतगुरु! मेरी रसना पर सदा सत्य का वास हो, हृदय में जीव दया हो, हाथों से निष्काम सेवा हो और मन में आपके सत्यनाम का अखंड सुमिरन हो।'}
        </p>
        <div className="pt-2">
          <button
            onClick={() => {
              sacredHaptics.successVibration();
              if (onOpenBlessing) {
                onOpenBlessing(
                  language === 'pb' ? 'ਸੰਕਲਪ ਸਮਰਪਣ ਪ੍ਰਵਾਨ' : language === 'en' ? 'Sacred Vow Consecrated' : 'संकल्प समर्पण स्वीकार',
                  language === 'pb' ? 'ਸਤਿਗੁਰੂ ਦੀ ਕਿਰਪਾ ਨਾਲ ਆਪ ਜੀ ਦੀ ਸਾਧਨਾ ਸਦਾ ਫਲਦਾਇਕ ਹੋਵੇ।' : language === 'en' ? 'By Satguru\'s grace, may your spiritual discipline bring everlasting peace.' : 'सतगुरु की कृपा से आपकी साधना सदा कल्याणकारी हो।'
                );
              }
            }}
            style={{ backgroundColor: theme.sacredMaroon, color: '#FFFFFF' }}
            className="px-5 py-2.5 rounded-xl text-xs font-bold font-serif hover:scale-105 active:scale-95 transition shadow-sm cursor-pointer"
          >
            {language === 'pb' ? 'ਸੰਕਲਪ ਦੁਹਰਾਓ ਤੇ ਅਰਪਿਤ ਕਰੋ' : language === 'en' ? 'Reaffirm Sacred Vow' : 'संकल्प दोहराएं एवं समर्पित करें'}
          </button>
        </div>
      </div>
    </div>
  );
};
