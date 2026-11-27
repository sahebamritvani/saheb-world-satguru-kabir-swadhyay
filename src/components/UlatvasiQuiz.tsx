import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Sparkles, 
  Award, 
  RotateCw, 
  Trophy, 
  Flame, 
  ChevronRight, 
  ChevronLeft,
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  Lightbulb, 
  User, 
  Edit3, 
  Check, 
  X,
  Compass, 
  Zap, 
  BookOpen, 
  Volume2,
  RefreshCcw,
  Layers,
  Crown,
  Search,
  History as HistoryIcon,
  Scroll,
  ShieldCheck,
  ArrowLeft
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import type { GranthVerse } from '../data/granths/granthTypes';
import { SAKHIS_KAAL_KO_ANG } from '../data/sakhisKaalKoAng';
import { speechReciter, satyanaamAudio } from '../services/audioDhun';
import { Language, SACRED_BRANDING } from '../types';
import { sakhisDatabase } from '../data/sakhis';
import { 
  ULATVASI_CORE_QUESTIONS,
  loadAllUlatvasiDatabase,
  UlatvasiQuestion, 
  UlatvasiRealm, 
  getUlatvasiRank,
  LeaderboardEntry 
} from '../data/ulatvasiQuizData';
import { 
  getLocalSadhakProfile, 
  saveLocalSadhakProfile, 
  getLeaderboardEntries, 
  syncScoreToLeaderboard, 
  SadhakProfile 
} from '../services/ulatvasiLeaderboard';
import { sacredHaptics } from '../services/haptics';
import { useAppTheme } from '../theme/ThemeContext';

interface KaalRecallChallengeItem {
  id: string;
  sakhiNumber: number;
  verseText: { hi: string; pb: string; en: string };
  transliteration: string;
  themeTitle: { hi: string; pb: string; en: string };
  glossaryKey: string;
  glossaryBadge: { hi: string; pb: string; en: string };
  clue: { hi: string; pb: string; en: string };
  options: { hi: string[]; pb: string[]; en: string[] };
  correctIndex: number;
  explanation: { hi: string; pb: string; en: string };
}

const KAAL_KO_ANG_RECALL_CHALLENGES: KaalRecallChallengeItem[] = [
  {
    id: 'kaal-1',
    sakhiNumber: 1,
    verseText: {
      hi: 'आस पास जोधा खडे, सबे बजावै गाल।\nमंझ महल ते ले चला, ऐसा परबल काल।।',
      pb: 'ਆਸ ਪਾਸ ਜੋਧਾ ਖਡੇ, ਸਬੇ ਬਜਾਵੈ ਗਾਲ।\nਮੰਝ ਮਹਲ ਤੇ ਲੇ ਚਲਾ, ਐਸਾ ਪਰਬਲ ਕਾਲ।।',
      en: 'Aas paas jodhe khade, sabe bajaavain gaal |\nManjh mahal te le chala, aisa parbal kaal ||'
    },
    transliteration: 'Aas paas jodhe khade, sabe bajavain gaal. Manjh mahal te le chala, aisa parbal kaal.',
    themeTitle: {
      hi: 'परबल काल व वीरों का व्यर्थ अहंकार',
      pb: 'ਪਰਬਲ ਕਾਲ ਤੇ ਸੂਰਮਿਆਂ ਦਾ ਹੰਕਾਰ',
      en: 'Invincible Might of Kal & Futility of Warriors'
    },
    glossaryKey: 'परबल काल (Invincible Time)',
    glossaryBadge: { hi: 'परबल काल', pb: 'ਪਰਬਲ ਕਾਲ', en: 'Parbal Kaal' },
    clue: {
      hi: 'जब काल बीच महल से पकड़कर ले जाता है, तब कोई भी शूरवीर योद्धा रक्षा नहीं कर पाता।',
      pb: 'ਜਦੋਂ ਕਾਲ ਮਹਿਲ ਦੇ ਵਿਚਕਾਰੋਂ ਲੈ ਤੁਰਦਾ ਹੈ, ਤਦ ਕੋਈ ਸੂਰਮਾ ਕੁਝ ਨਹੀਂ ਕਰ ਸਕਦਾ।',
      en: 'When all-powerful Time snatches the soul from inner palaces, no mighty warrior can resist.'
    },
    options: {
      hi: [
        'परबल काल व वीरों का व्यर्थ अहंकार (काल की सर्वोपरिता)',
        'साधु संगति का अमर फल व सत्संग की महिमा',
        'कर्मकांड, दान-पुण्य व तीर्थ स्नान की विधि',
        'मन की चंचलता व हठयोग का प्राणायाम'
      ],
      pb: [
        'ਪਰਬਲ ਕਾਲ ਤੇ ਸੂਰਮਿਆਂ ਦਾ ਵਿਅਰਥ ਹੰਕਾਰ',
        'ਸਾਧ ਸੰਗਤ ਦਾ ਅਮਰ ਫਲ ਤੇ ਸਤਿਸੰਗ ਮਹਿਮਾ',
        'ਕਰਮਕਾਂਡ ਤੇ ਤੀਰਥ ਇਸ਼ਨਾਨ ਦੀ ਵਿਧੀ',
        'ਮਨ ਦੀ ਚੰਚਲਤਾ ਤੇ ਹਠਯੋਗ ਦਾ ਪ੍ਰਾਣਾਯਾਮ'
      ],
      en: [
        'Invincible Kal & Futility of Pride (Supremacy of Time)',
        'Immortal Fruits of Holy Satsang',
        'Outer Rituals and Pilgrim Bathing',
        'Restraint of Mind through Hatha Yoga'
      ]
    },
    correctIndex: 0,
    explanation: {
      hi: 'सतगुरु कबीर साहेब बताते हैं कि जीव की कैसी भी परिस्थिति हो, आस-पास चाहे कितने भी बलवान शूरवीर खड़े हों, काल जब बीच महल से पकड़कर ले चलता है तो कोई कुछ नहीं कर सकता।',
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ ਕਿ ਆਸ-ਪਾਸ ਭਾਵੇਂ ਕਿੰਨੇ ਵੀ ਸੂਰਮੇ ਖੜ੍ਹੇ ਹੋਣ, ਜਦੋਂ ਪਰਬਲ ਕਾਲ ਆਉਂਦਾ ਹੈ ਤਾਂ ਸਭ ਧਰੇ ਧਰਾਏ ਰਹਿ ਜਾਂਦੇ ਹਨ।',
      en: 'Satguru Kabir Saheb reveals that worldly power and guards are powerless when invincible Time extracts the embodied soul.'
    }
  },
  {
    id: 'kaal-2',
    sakhiNumber: 2,
    verseText: {
      hi: 'जरा कुत्ता जोबन ससा, काल अहेरी नित्त।\nदो बैरी बिच झोंपड़ा, कुशल कहां सो मित्त।।',
      pb: 'ਜਰਾ ਕੁੱਤਾ ਜੋਬਨ ਸਸਾ, ਕਾਲ ਅਹੇਰੀ ਨਿੱਤ।\nਦੋ ਬੈਰੀ ਬਿਚ ਝੋਂਪੜਾ, ਕੁਸ਼ਲ ਕਹਾਂ ਸੋ ਮਿੱਤ।।',
      en: 'Jara kutta joban sasa, kaal aheri nitt |\nDo bairi bich jhompada, kushal kahan so mitt ||'
    },
    transliteration: 'Jara kutta joban sasa, kaal aheri nitt. Do bairi bich jhompada, kushal kahan so mitt.',
    themeTitle: {
      hi: 'जरा (बुढ़ापा), यौवन और काल अहेरी (शिकारी)',
      pb: 'ਬੁਢਾਪਾ, ਜਵਾਨੀ ਤੇ ਕਾਲ ਸ਼ਿਕਾਰੀ (ਅਹੇਰੀ)',
      en: 'Aging, Youth & Kal Aheri (The Hunter of Time)'
    },
    glossaryKey: 'काल अहेरी (Time the Hunter)',
    glossaryBadge: { hi: 'काल अहेरी', pb: 'ਕਾਲ ਅਹੇਰੀ', en: 'Kaal Aheri' },
    clue: {
      hi: 'यौवन रूपी खरगोश पर बुढ़ापा रूपी कुत्ता और काल रूपी शिकारी नित्य ताक लगाए बैठे हैं।',
      pb: 'ਜਵਾਨੀ ਰੂਪੀ ਖ਼ਰਗੋਸ਼ \'ਤੇ ਬੁਢਾਪਾ ਕੁੱਤਾ ਅਤੇ ਕਾਲ ਸ਼ਿਕਾਰੀ ਨਿੱਤ ਸ਼ਿਕਾਰ ਲਈ ਛੱਡੇ ਹਨ।',
      en: 'Youth is the rabbit pursued by hound of old age and the hunter of death.'
    },
    options: {
      hi: [
        'जरा (बुढ़ापा), यौवन और काल अहेरी (शिकारी)',
        'इड़ा, पिंगला व सुखमना नाड़ी का योग',
        'हंस और बगुले का आध्यात्मिक भेद',
        'गुरु-शिष्य का पावन आत्म-समर्पण'
      ],
      pb: [
        'ਬੁਢਾਪਾ ਕੁੱਤਾ, ਜਵਾਨੀ ਖ਼ਰਗੋਸ਼ ਤੇ ਕਾਲ ਸ਼ਿਕਾਰੀ',
        'ਇੜਾ, ਪਿੰਗਲਾ ਤੇ ਸੁਖਮਨਾ ਨਾੜੀ ਦਾ ਯੋਗ',
        'ਹੰਸ ਤੇ ਬਗੁਲੇ ਦਾ ਅਧਿਆਤਮਿਕ ਭੇਦ',
        'ਗੁਰੂ-ਸਿੱਖ ਦਾ ਪਾਵਨ ਸਮਰਪਣ'
      ],
      en: [
        'Jara (Old Age), Youth & Kal Aheri (The Hunter)',
        'Yogic Confluence of Subtle Nadis',
        'Spiritual Distinction of Swan and Heron',
        'Humble Surrender to the Satguru'
      ]
    },
    correctIndex: 0,
    explanation: {
      hi: 'वृद्धावस्था कुत्ते की भांति और युवावस्था खरगोश की भांति है। काल रूपी शिकारी ने देह रूपी झोंपड़ी को दो शत्रुओं के बीच घेर रखा है। सत्यनाम बिना कुशल नहीं हो सकता।',
      pb: 'ਬੁਢਾਪਾ ਤੇ ਮੌਤ ਦੋਵੇਂ ਵੈਰੀਆਂ ਵਾਂਗ ਘੇਰੀ ਬੈਠੇ ਹਨ, ਸਤਿਗੁਰੂ ਦੇ ਸੱਚੇ ਨਾਮ ਬਿਨਾਂ ਜੀਵ ਦਾ ਬਚਾਅ ਸੰਭਵ ਨਹੀਂ।',
      en: 'The fragile human body is besieged between old age and impending death; only spiritual refuge delivers peace.'
    }
  },
  {
    id: 'kaal-3',
    sakhiNumber: 3,
    verseText: {
      hi: 'पात झरन्ता देखि के, हंसतीं, कूपलियां।\nहम चाले तुम चालियो, धीरी बापलियां।।',
      pb: 'ਪਾਤ ਝਰੰਤਾ ਦੇਖਿ ਕੇ, ਹੰਸਤੀਂ, ਕੂਪਲੀਆਂ।\nਹਮ ਚਾਲੇ ਤੁਮ ਚਾਲਿਯੋ, ਧੀਰੀ ਬਾਪਲੀਆਂ।।',
      en: 'Paat jharanta dekhi ke, hansateen kupaliyaan |\nHum chaale tum chaaliyo, dheeri baapaliyaan ||'
    },
    transliteration: 'Paat jharanta dekhi ke, hansateen kupaliyaan. Hum chale tum chaliyo, dheeri bapaliyaan.',
    themeTitle: {
      hi: 'पात व कूपलियां (संसार की क्षणभंगुरता व काल-प्रवाह)',
      pb: 'ਝੜਦੇ ਪੱਤੇ ਤੇ ਨਵੀਆਂ ਕਰੂੰਬਲਾਂ (ਨਾਸ਼ਵਾਨਤਾ ਦਾ ਬੋਧ)',
      en: 'Paat & Kupaliyan (Falling Leaves & Sprout Allegory)'
    },
    glossaryKey: 'पात व कूपलियां (Leaves & Young Shoots)',
    glossaryBadge: { hi: 'पात व कूपलियां', pb: 'ਪਾਤ ਤੇ ਕਰੂੰਬਲਾਂ', en: 'Paat & Kupaliyan' },
    clue: {
      hi: 'पतझर में गिरते सूखे पत्ते नई कोंपलों को उनके निश्चित अंत का भान कराते हैं।',
      pb: 'ਝੜਦੇ ਪੱਤੇ ਨਵੀਂ ਫੁੱਟਦੀ ਪੀੜ੍ਹੀ ਨੂੰ ਚੇਤਾਵਨੀ ਦਿੰਦੇ ਹਨ ਕਿ ਕੱਲ੍ਹ ਨੂੰ ਤੁਹਾਡਾ ਵੀ ਇਹੀ ਸਮਾਂ ਆਉਣਾ ਹੈ।',
      en: 'Withered falling leaves admonish tender sprouts of their own inevitable departure.'
    },
    options: {
      hi: [
        'पात व कूपलियां (संसार की क्षणभंगुरता व काल-प्रवाह)',
        'अनहद नाद व दसवें द्वार की ध्वनि',
        'वैराग्य व भिक्षाटन का संन्यास धर्म',
        'पूजा-अर्चन व आरती की विधि'
      ],
      pb: [
        'ਝੜਦੇ ਪੱਤੇ ਤੇ ਨਵੀਆਂ ਕਰੂੰਬਲਾਂ (ਨਾਸ਼ਵਾਨਤਾ ਦਾ ਬੋਧ)',
        'ਅਨਹਦ ਨਾਦ ਤੇ ਦਸਵੇਂ ਦੁਆਰ ਦੀ ਧੁਨੀ',
        'ਵੈਰਾਗ ਤੇ ਭਿੱਖਿਆ ਦਾ ਸੰਨਿਆਸ ਧਰਮ',
        'ਪੂਜਾ-ਅਰਚਨਾ ਤੇ ਆਰਤੀ ਦੀ ਵਿਧੀ'
      ],
      en: [
        'Paat & Kupaliyan (Transience of Mortal Existence)',
        'Anhad Naad in the Tenth Gate',
        'Renunciation and Wandering Mendicancy',
        'Ritual Aarti and Outer Worship'
      ]
    },
    correctIndex: 0,
    explanation: {
      hi: 'सूखे पीले पत्ते नई कोंपलों को समझाते हैं कि आज हमारा समय पूरा हुआ, थोड़ा धैर्य रखो, समय आने पर तुम्हें भी इसी मार्ग से गुजरना होगा। संसार अनित्य है।',
      pb: 'ਪੱਤਝੜ ਦੇ ਪੱਤੇ ਨਵੀਆਂ ਕਰੂੰਬਲਾਂ ਨੂੰ ਕਹਿੰਦੇ ਹਨ ਕਿ ਹੰਸੋ ਨਾ, ਧੀਰਜ ਰੱਖੋ, ਸਮਾਂ ਆਉਣ \'ਤੇ ਤੁਸੀਂ ਵੀ ਇੱਥੋਂ ਜਾਣਾ ਹੈ।',
      en: 'Every generation supplants the previous, only to depart in its turn before the relentless wheel of time.'
    }
  },
  {
    id: 'kaal-4',
    sakhiNumber: 4,
    verseText: {
      hi: 'काल पाय जग ऊपजो, काल पाय सब जाय।\nकाल पाय सब बिनसिहैं, काल काल कह खाय।।',
      pb: 'ਕਾਲ ਪਾਯ ਜਗ ਊਪਜੋ, ਕਾਲ ਪਾਯ ਸਬ ਜਾਯ।\nਕਾਲ ਪਾਯ ਸਬ ਬਿਨਸਿਹੈਂ, ਕਾਲ ਕਾਲ ਕਹ ਖਾਯ।।',
      en: 'Kaal paaya jag upajo, kaal paaya sab jaay |\nKaal paaya sab binasihain, kaal kaal kah khaay ||'
    },
    transliteration: 'Kaal paya jag upajo, kaal paya sab jaay. Kaal paya sab binasihain, kaal kaal kah khay.',
    themeTitle: {
      hi: 'काल-चक्र: उत्पत्ति, प्रलय व काल का भक्षण',
      pb: 'ਕਾਲ ਚੱਕਰ: ਉਤਪਤੀ, ਪ੍ਰਲੋ ਤੇ ਕਾਲ ਦਾ ਗ੍ਰਾਸ',
      en: 'Cosmic Wheel of Kal: Genesis, Dissolution & Beyond'
    },
    glossaryKey: 'काल-चक्र (Cosmic Wheel of Time)',
    glossaryBadge: { hi: 'काल-चक्र', pb: 'ਕਾਲ-ਚੱਕਰ', en: 'Cosmic Kal' },
    clue: {
      hi: 'समय के नियम से ही ब्रह्मांड उत्पन्न व नष्ट होता है, और अंत में सब काल में समा जाता है।',
      pb: 'ਕਾਲ ਦੇ ਨੇਮ ਨਾਲ ਹੀ ਸਭ ਬਣਦਾ ਤੇ ਮਿਟਦਾ ਹੈ, ਕਾਲ ਸਭ ਨੂੰ ਖਾ ਜਾਂਦਾ ਹੈ।',
      en: 'All cosmos is born of Time and consumed by Time until the absolute dissolution.'
    },
    options: {
      hi: [
        'काल-चक्र: उत्पत्ति, प्रलय व काल का भक्षण',
        'नवधा भक्ति व प्रेम रस का आस्वादन',
        'अष्टांग योग व षट्कर्म शुद्धि',
        'स्वर्ग-नरक के दंड व पुरस्कार'
      ],
      pb: [
        'ਕਾਲ ਚੱਕਰ: ਉਤਪਤੀ, ਪ੍ਰਲੋ ਤੇ ਕਾਲ ਦਾ ਗ੍ਰਾਸ',
        'ਨਵਧਾ ਭਗਤੀ ਤੇ ਪ੍ਰੇਮ ਰਸ ਦਾ ਅਨੰਦ',
        'ਅਸ਼ਟਾਂਗ ਯੋਗ ਤੇ ਸ਼ਟਕਰਮ ਸ਼ੁੱਧੀ',
        'ਸਵਰਗ-ਨਰਕ ਦੇ ਦੰਡ ਤੇ ਇਨਾਮ'
      ],
      en: [
        'Cosmic Wheel of Kal: Genesis & Universal Dissolution',
        'Ninefold Devotion & Nectar of Love',
        'Ashtanga Yogic Purification',
        'Heaven and Hell Moral Reckoning'
      ]
    },
    correctIndex: 0,
    explanation: {
      hi: 'समय पाकर ही समस्त प्राणी व प्रपंच उत्पन्न होते हैं और समय के साथ मिटते हैं। अंततः काल भी महाकाल में समा जाता है। केवल अमर सत्यनाम ही शाश्वत है।',
      pb: 'ਕਾਲ ਦੇ ਵਹਾਅ ਵਿੱਚ ਸਭ ਕੁਝ ਪੈਦਾ ਹੁੰਦਾ ਤੇ ਨਾਸ਼ ਹੁੰਦਾ ਹੈ, ਸਿਰਫ਼ ਅਕਾਲ ਸਤਿਪੁਰਖ ਹੀ ਸਦਾ ਥਿਰ ਹੈ।',
      en: 'Everything manifest dissolves into the matrix of Time; only the timeless Satguru transcends.'
    }
  },
  {
    id: 'kaal-5',
    sakhiNumber: 5,
    verseText: {
      hi: 'मैं अकेल वह दो जना, सेरी नाहीं कोय।\nजो जम आगे ऊबरो, तो जरा बैरी होय।।',
      pb: 'ਮੈਂ ਅਕੇਲ ਵਹ ਦੋ ਜਨਾ, ਸੇਰੀ ਨਾਹੀਂ ਕੋਯ।\nਜੋ ਜਮ ਆਗੇ ਊਬਰੋ, ਤੋ ਜਰਾ ਬੈਰੀ ਹੋਯ।।',
      en: 'Main akel wah do jana, seri naheen koye |\nJo Jam aage ubaro, to jara bairi hoye ||'
    },
    transliteration: 'Main akel wah do jana, seri naheen koye. Jo Jam aage ubaro, to jara bairi hoye.',
    themeTitle: {
      hi: 'अकेला जीव और दो बैरी: यमराज व जरा (बुढ़ापा)',
      pb: 'ਇਕੱਲਾ ਜੀਵ ਤੇ ਦੋ ਵੈਰੀ: ਜਮਰਾਜ ਤੇ ਬੁਢਾਪਾ',
      en: 'Solitary Soul between Two Foes: Yama & Jara'
    },
    glossaryKey: 'जम व जरा (Yama and Decrepitude)',
    glossaryBadge: { hi: 'जम व जरा', pb: 'ਜਮ ਤੇ ਜਰਾ', en: 'Jam & Jara' },
    clue: {
      hi: 'मृत्यु और बुढ़ापे के दोहरे संकट के बीच असहाय जीव अकेला खड़ा है।',
      pb: 'ਮੌਤ ਤੇ ਬੁਢਾਪੇ ਦੋਹਾਂ ਦੇ ਵਿਚਕਾਰ ਜੀਵ ਇਕੱਲਾ ਬੇਵੱਸ ਖੜ੍ਹਾ ਹੈ।',
      en: 'Besieged by mortality and aging, the lone soul has no mortal ally.'
    },
    options: {
      hi: [
        'अकेला जीव और दो बैरी: यमराज व जरा (बुढ़ापा)',
        'त्रिकुटी संगम पर अमृत स्नान',
        'कस्तूरी मृग व अंतर-खोज का रूपक',
        'गुरु की महिमा व चरण रज का महत्व'
      ],
      pb: [
        'ਇਕੱਲਾ ਜੀਵ ਤੇ ਦੋ ਵੈਰੀ: ਜਮਰਾਜ ਤੇ ਬੁਢਾਪਾ',
        'ਤ੍ਰਿਕੁਟੀ ਸੰਗਮ \'ਤੇ ਅੰਮ੍ਰਿਤ ਇਸ਼ਨਾਨ',
        'ਕਸਤੂਰੀ ਮ੍ਰਿਗ ਤੇ ਅੰਦਰੂਨੀ ਖੋਜ ਦਾ ਰੂਪਕ',
        'ਗੁਰੂ ਦੀ ਮਹਿਮਾ ਤੇ ਚਰਨ ਧੂੜ ਦਾ ਮਹੱਤਵ'
      ],
      en: [
        'Solitary Soul between Two Foes: Yama & Jara',
        'Amrit Bath at the Trikuti Tri-Junction',
        'Musk Deer and Inner Seeking Metaphor',
        'Glory of the Guru and Holy Dust'
      ]
    },
    correctIndex: 0,
    explanation: {
      hi: 'जीव अकेला है और यम तथा जरा दो प्रबल बैरी सम्मुख हैं। यदि किसी प्रकार मृत्यु से बच भी जाएं तो बुढ़ापा आकर शरीर को अशक्त कर देता है। सतगुरु ही एकमात्र रक्षक हैं।',
      pb: 'ਜੇ ਜਮ ਤੋਂ ਬਚੀਏ ਤਾਂ ਬੁਢਾਪਾ ਘੇਰ ਲੈਂਦਾ ਹੈ, ਇਹਨਾਂ ਦੋਹਾਂ ਵੈਰੀਆਂ ਤੋਂ ਸਿਰਫ ਸਤਿਗੁਰੂ ਦਾ ਆਸਰਾ ਹੀ ਬਚਾ ਸਕਦਾ ਹੈ।',
      en: 'Even if physical demise is delayed, decrepitude enervates the body; only the Master rescues the seeker.'
    }
  },
  {
    id: 'kaal-8',
    sakhiNumber: 8,
    verseText: {
      hi: 'कबीर सूता क्या करै, जागि न रोवै दुख।\nजाका बासा गोर में, सो क्यों सोवै सुख।।',
      pb: 'ਕਬੀਰ ਸੂਤਾ ਕ੍ਯਾ ਕਰੈ, ਜਾਗਿ ਨ ਰੋਵੈ ਦੁਖ।\nਜਾਕਾ ਬਾਸਾ ਗੋਰ ਮੇਂ, ਸੋ ਕ੍ਯੋਂ ਸੋਵੈ ਸੁਖ।।',
      en: 'Kabir soota kya karai, jaagi na rovai dukh |\nJaaka baasa gor mein, so kyon sovai sukh ||'
    },
    transliteration: 'Kabir soota kya karai, jaagi na rovai dukh. Jaaka baasa gor mein, so kyon sovai sukh.',
    themeTitle: {
      hi: 'अचेत निद्रा का त्याग व गोर (कब्र) का स्मरण',
      pb: 'ਗ਼ਫ਼ਲਤ ਦੀ ਨੀਂਦ ਦਾ ਤਿਆਗ ਤੇ ਗੋਰ (ਕਬਰ) ਦਾ ਚੇਤਾ',
      en: 'Abandoning Heedless Slumber & Awareness of the Grave'
    },
    glossaryKey: 'गोर व अचेत निद्रा (Grave & Spiritual Slumber)',
    glossaryBadge: { hi: 'गोर व अचेत निद्रा', pb: 'ਗੋਰ ਤੇ ਗ਼ਫ਼ਲਤ', en: 'Gor & Slumber' },
    clue: {
      hi: 'जिसका अंतिम ठिकाना गोर (कब्र/श्मशान) है, उसे माया के भ्रम में सुख से नहीं सोना चाहिए।',
      pb: 'ਜਿਸਦਾ ਆਖਰੀ ਟਿਕਾਣਾ ਕਬਰ ਹੈ, ਉਹ ਮਾਇਆ ਦੀ ਨੀਂਦ ਵਿੱਚ ਕਿਵੇਂ ਬੇਪਰਵਾਹ ਸੌਂ ਸਕਦਾ ਹੈ?',
      en: 'He whose ultimate abode is the grave must not slumber in the false illusions of Maya.'
    },
    options: {
      hi: [
        'अचेत निद्रा का त्याग व गोर (कब्र) का स्मरण',
        'षटचक्र भेदन व कुण्डलिनी उत्थान',
        'वर्णाश्रम धर्म व वैदिक यज्ञानुष्ठान',
        'माला फेरने व तिलक धारण का विधान'
      ],
      pb: [
        'ਗ਼ਫ਼ਲਤ ਦੀ ਨੀਂਦ ਦਾ ਤਿਆਗ ਤੇ ਗੋਰ ਦਾ ਚੇਤਾ',
        'ਸ਼ਟਚੱਕਰ ਭੇਦਨ ਤੇ ਕੁੰਡਲਿਨੀ ਜਾਗਰਣ',
        'ਵਰਣ-ਆਸ਼ਰਮ ਧਰਮ ਤੇ ਵੈਦਿਕ ਯੱਗ',
        'ਮਾਲਾ ਫੇਰਨ ਤੇ ਤਿਲਕ ਲਗਾਉਣ ਦਾ ਵਿਧਾਨ'
      ],
      en: [
        'Abandoning Heedless Slumber & Awareness of the Grave',
        'Piercing the Six Chakras and Kundalini Rise',
        'Caste Duties and Vedic Sacrifices',
        'Telling Beads and Forehead Markings'
      ]
    },
    correctIndex: 0,
    explanation: {
      hi: 'सतगुरु कबीर साहेब अचेत अज्ञानी जीव को जगाते हैं कि जब अंत में कब्र या श्मशान में ही समाना है, तो सांसारिक सुखों में बेखबर होकर सोने के बजाय सत्य की साधना में जागो।',
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਚੇਤਾਵਨੀ ਦਿੰਦੇ ਹਨ ਕਿ ਮਾਇਆ ਦੇ ਮੋਹ ਦੀ ਨੀਂਦ ਵਿੱਚੋਂ ਜਾਗੋ ਅਤੇ ਨਾਮ ਸਿਮਰਨ ਵਿੱਚ ਲੱਗੋ।',
      en: 'Knowing mortal impermanence, the seeker is urged to awaken from mundane sleep into devotional consciousness.'
    }
  },
  {
    id: 'kaal-10',
    sakhiNumber: 10,
    verseText: {
      hi: 'कबीर काल सबन को खाय, कालहि खाय कबीर।\nसत्यनाम की नाव चढ़ि, उतरा निर्मल तीर।।',
      pb: 'ਕਬੀਰ ਕਾਲ ਸਬਨ ਕੋ ਖਾਯ, ਕਾਲਹਿ ਖਾਯ ਕਬੀਰ।\nਸਤਯਨਾਮ ਕੀ ਨਾਵ ਚੜ੍ਹ, ਉਤਰਾ ਨਿਰਮਲ ਤੀਰ।।',
      en: 'Kabir kaal saban ko khaay, kaalahi khaay Kabir |\nSatyanaam ki naav chadhi, utara nirmal teer ||'
    },
    transliteration: 'Kabir kaal saban ko khaay, kaalahi khaay Kabir. Satyanaam ki naav chadhi, utara nirmal teer.',
    themeTitle: {
      hi: 'सत्यनाम की नाव व काल पर पूर्ण विजय',
      pb: 'ਸਤਯਨਾਮ ਦੀ ਬੇੜੀ ਤੇ ਕਾਲ ਉੱਤੇ ਪੂਰਨ ਜਿੱਤ',
      en: 'Ark of Satyanaam & Complete Victory Over Kal'
    },
    glossaryKey: 'सत्यनाम की नाव (Ark of Truth)',
    glossaryBadge: { hi: 'सत्यनाम की नाव', pb: 'ਸਤਯਨਾਮ ਦੀ ਬੇੜੀ', en: 'Ark of Satyanaam' },
    clue: {
      hi: 'सत्यनाम की नाव पर आरूढ़ होकर सतगुरु कबीर साहेब ने काल को ही जीत लिया और निर्मल तट पर पहुंच गए।',
      pb: 'ਸਤਯਨਾਮ ਦੀ ਬੇੜੀ ਵਿੱਚ ਸਵਾਰ ਹੋ ਕੇ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਕਾਲ ਨੂੰ ਜਿੱਤ ਲਿਆ ਤੇ ਪਾਰ ਉੱਤਰ ਗਏ।',
      en: 'Boarding the ark of Satyanaam, Kabir conquers Time itself and lands on the sacred shore.'
    },
    options: {
      hi: [
        'सत्यनाम की नाव व काल पर पूर्ण विजय',
        'तीनों गुणों में संतुलन व कर्मयोग',
        'द्वादश तिलक व कंठी माला की मर्यादा',
        'पंचभूतों का भौतिक विश्लेषण'
      ],
      pb: [
        'ਸਤਯਨਾਮ ਦੀ ਬੇੜੀ ਤੇ ਕਾਲ ਉੱਤੇ ਪੂਰਨ ਜਿੱਤ',
        'ਤਿੰਨਾਂ ਗੁਣਾਂ ਵਿੱਚ ਸੰਤੁਲਨ ਤੇ ਕਰਮਯੋਗ',
        'ਬਾਰਾਂ ਤਿਲਕ ਤੇ ਕੰਠੀ ਮਾਲਾ ਦੀ ਮਰਯਾਦਾ',
        'ਪੰਜ ਤੱਤਾਂ ਦਾ ਭੌਤਿਕ ਵਿਸ਼ਲੇਸ਼ਣ'
      ],
      en: [
        'Ark of Satyanaam & Complete Victory Over Kal',
        'Equilibrium of Three Gunas in Karma Yoga',
        'Wearing Twelve Sacred Forehead Marks & Rosary',
        'Physical Analysis of the Five Elements'
      ]
    },
    correctIndex: 0,
    explanation: {
      hi: 'काल संपूर्ण जगत का भक्षण करता है, किंतु समर्थ सतगुरु के सत्यनाम का आश्रय लेने वाले संत काल के बंधन से मुक्त होकर अमर लोक (निर्मल तीर) को प्राप्त होते हैं।',
      pb: 'ਕਾਲ ਸਾਰੇ ਜਗਤ ਨੂੰ ਖਾ ਜਾਂਦਾ ਹੈ ਪਰ ਸਤਯਨਾਮ ਦੀ ਬੇੜੀ ਰਾਹੀਂ ਸੰਤ ਕਾਲ ਦੇ ਪੰਜੇ ਵਿੱਚੋਂ ਨਿਕਲ ਕੇ ਮੁਕਤ ਹੋ ਜਾਂਦੇ ਹਨ।',
      en: 'While Kal consumes the mortal sphere, the seeker aboard the ship of Truth transcends death forever.'
    }
  }
];

export interface Sakhi5QuestionItem {
  id: string;
  sakhiNumber: number;
  categoryTitle: { hi: string; pb: string; en: string };
  coupletText: { hi: string; pb: string; en: string };
  transliteration?: string;
  promptQuestion: { hi: string; pb: string; en: string };
  options: { hi: string[]; pb: string[]; en: string[] };
  correctIndex: number;
  bhavarth: { hi: string; pb: string; en: string };
  wordMeanings?: { hi: { word: string; meaning: string }[]; pb?: { word: string; meaning: string }[] };
  contemplation?: { hi: string; pb: string; en: string };
}

export function generate5SakhiQuestions(db: any[]): Sakhi5QuestionItem[] {
  if (!db || db.length === 0) return [];
  // Shuffle sakhis
  const pool = [...db].sort(() => 0.5 - Math.random());
  const selected = pool.slice(0, Math.min(5, pool.length));

  return selected.map((sakhi, idx) => {
    // Pick 3 distractors
    const otherSakhis = pool.filter(s => s.id !== sakhi.id).slice(0, 3);
    const choices = [
      {
        hi: sakhi.bhavarth?.hi || sakhi.text.hi,
        pb: sakhi.bhavarth?.pb || sakhi.text.pb || sakhi.bhavarth?.hi || '',
        en: sakhi.bhavarth?.en || sakhi.text.en || sakhi.bhavarth?.hi || '',
        isCorrect: true,
      },
      ...otherSakhis.map(d => ({
        hi: d.bhavarth?.hi || d.text.hi,
        pb: d.bhavarth?.pb || d.text.pb || d.bhavarth?.hi || '',
        en: d.bhavarth?.en || d.text.en || d.bhavarth?.hi || '',
        isCorrect: false,
      }))
    ];

    // Shuffle options so correct answer is randomized
    const shuffledChoices = [...choices].sort(() => 0.5 - Math.random());
    const correctIdx = shuffledChoices.findIndex(c => c.isCorrect);

    return {
      id: `sakhi-q-${idx}-${sakhi.number}`,
      sakhiNumber: sakhi.number,
      categoryTitle: {
        hi: sakhi.categoryTitle?.hi || 'गुरु महिमा अंग',
        pb: sakhi.categoryTitle?.pb || 'ਗੁਰੂ ਮਹਿਮਾ ਅੰਗ',
        en: sakhi.categoryTitle?.en || 'Guru Mahima',
      },
      coupletText: {
        hi: sakhi.text.hi,
        pb: sakhi.text.pb || sakhi.text.hi,
        en: sakhi.text.en || sakhi.text.hi,
      },
      transliteration: sakhi.transliteration,
      promptQuestion: {
        hi: 'सतगुरु कबीर साहेब की इस पावन साखी का मुख्य आध्यात्मिक भावार्थ क्या है?',
        pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਇਸ ਪਾਵਨ ਸਾਖੀ ਦਾ ਮੁੱਖ ਆਤਮਿਕ ਭਾਵਾਰਥ ਕੀ ਹੈ?',
        en: 'What is the core spiritual essence of this sacred Sakhi by Satguru Kabir Saheb?',
      },
      options: {
        hi: shuffledChoices.map(c => c.hi),
        pb: shuffledChoices.map(c => c.pb),
        en: shuffledChoices.map(c => c.en),
      },
      correctIndex: correctIdx >= 0 ? correctIdx : 0,
      bhavarth: {
        hi: sakhi.bhavarth?.hi || '',
        pb: sakhi.bhavarth?.pb || sakhi.bhavarth?.hi || '',
        en: sakhi.bhavarth?.en || sakhi.bhavarth?.hi || '',
      },
      wordMeanings: sakhi.wordMeanings,
      contemplation: sakhi.contemplation ? {
        hi: sakhi.contemplation.hi || '',
        pb: sakhi.contemplation.pb || sakhi.contemplation.hi || '',
        en: sakhi.contemplation.en || sakhi.contemplation.hi || '',
      } : undefined,
    };
  });
}

interface UlatvasiQuizProps {
  language: Language;
  onSelectLanguage?: (lang: Language) => void;
  onClose?: () => void;
  onOpenBlessing?: () => void;
  initialTab?: QuizTabMode;
  initialUlatvasiId?: string | null;
}

type QuizTabMode = 'sakhi-5q-quiz' | 'paradox-quest' | 'library' | 'leaderboard' | 'realms' | 'memory-recall';

export const UlatvasiQuiz: React.FC<UlatvasiQuizProps> = ({
  language: initialLanguage,
  onSelectLanguage,
  onClose,
  onOpenBlessing,
  initialTab = 'paradox-quest',
  initialUlatvasiId = null,
}) => {
  const { theme } = useAppTheme();
  const [localLanguage, setLocalLanguage] = useState<Language>(initialLanguage);
  const language = localLanguage;

  useEffect(() => {
    setLocalLanguage(initialLanguage);
  }, [initialLanguage]);

  const handleLanguageChange = (newLang: Language) => {
    setLocalLanguage(newLang);
    if (onSelectLanguage) {
      onSelectLanguage(newLang);
    }
  };

  // Active Tab
  const [activeTab, setActiveTab] = useState<QuizTabMode>(initialTab);

  // Sync state if initialTab prop changes
  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  // Lazy-loaded Question Pool & Memory Recall Verse Pools
  const [ulatvasiPool, setUlatvasiPool] = useState<UlatvasiQuestion[]>(ULATVASI_CORE_QUESTIONS);
  const [ang14Verses, setAng14Verses] = useState<GranthVerse[]>([]);
  const [ang15Verses, setAng15Verses] = useState<GranthVerse[]>([]);

  useEffect(() => {
    let cancelled = false;
    loadAllUlatvasiDatabase()
      .then((all) => {
        if (!cancelled && all.length > 0) setUlatvasiPool(all);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  // Question & Realm Navigation
  const [selectedRealm, setSelectedRealm] = useState<UlatvasiRealm | 'all'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffleSeed, setShuffleSeed] = useState(0);

  // 250 Library State
  const [librarySearchQuery, setLibrarySearchQuery] = useState('');
  const [librarySelectedRealm, setLibrarySelectedRealm] = useState<string>('all');

  const filteredLibraryItems = React.useMemo(() => {
    return ulatvasiPool.filter(item => {
      const matchesSearch = 
        item.title[language].toLowerCase().includes(librarySearchQuery.toLowerCase()) ||
        item.verse[language].toLowerCase().includes(librarySearchQuery.toLowerCase());
      
      const matchesRealm = librarySelectedRealm === 'all' || item.realm === librarySelectedRealm;
      
      return matchesSearch && matchesRealm;
    });
  }, [librarySearchQuery, librarySelectedRealm, language, ulatvasiPool]);

  // Filtered Questions by Realm
  const filteredQuestions = React.useMemo(() => {
    if (selectedRealm === 'all') return ulatvasiPool;
    return ulatvasiPool.filter((q) => q.realm === selectedRealm);
  }, [selectedRealm, ulatvasiPool]);

  const rawQ: UlatvasiQuestion = filteredQuestions[currentIndex] || ulatvasiPool[0];

  // Shuffle quiz options (A, B, C, D) and randomize the position of the correct answer
  const currentQ = React.useMemo(() => {
    const rawOptionsHi = rawQ.options?.hi || [];
    const count = Math.max(4, rawOptionsHi.length || 4);

    // Create permutation array [0, 1, 2, ..., count-1]
    const permutation = Array.from({ length: count }, (_, i) => i);
    
    // Fisher-Yates shuffle on permutation indices
    for (let i = permutation.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [permutation[i], permutation[j]] = [permutation[j], permutation[i]];
    }

    const origCorrectIdx = typeof rawQ.correctIndex === 'number' ? rawQ.correctIndex : 0;
    const newCorrectIndex = permutation.indexOf(origCorrectIdx);

    const permute = (arr?: string[], fallback?: string[]): string[] => {
      const source = (arr && arr.length > 0) ? arr : (fallback && fallback.length > 0) ? fallback : [];
      if (!source.length) return [];
      return permutation.map(origIdx => source[origIdx] ?? source[origIdx % source.length] ?? '');
    };

    return { 
      ...rawQ, 
      options: {
        hi: permute(rawQ.options?.hi),
        pb: permute(rawQ.options?.pb, rawQ.options?.hi),
        en: permute(rawQ.options?.en, rawQ.options?.hi),
      }, 
      correctIndex: newCorrectIndex !== -1 ? newCorrectIndex : 0 
    };
  }, [rawQ, shuffleSeed]);

  // Memory Recall State
  const [memoryVerse, setMemoryRecallVerse] = useState<{ text: string, angId: string } | null>(null);
  const [memoryAnswerState, setMemoryAnswerState] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [memoryPoints, setMemoryPoints] = useState(0);

  // Kaal Ko Ang Specialized Recall Mode State
  const [recallSubMode, setRecallSubMode] = useState<'kaal-themes' | 'ang-identify'>('kaal-themes');
  const [kaalChallengeIndex, setKaalChallengeIndex] = useState(0);
  const [kaalSelectedChoice, setKaalSelectedChoice] = useState<number | null>(null);
  const [kaalAnswerState, setKaalAnswerState] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [kaalRetentionStreak, setKaalRetentionStreak] = useState(0);

  const currentKaalChallenge = KAAL_KO_ANG_RECALL_CHALLENGES[kaalChallengeIndex % KAAL_KO_ANG_RECALL_CHALLENGES.length];

  const handleKaalChoice = (idx: number) => {
    if (kaalAnswerState !== 'idle') return;
    setKaalSelectedChoice(idx);
    if (idx === currentKaalChallenge.correctIndex) {
      setKaalAnswerState('correct');
      setMemoryPoints(prev => prev + 15);
      setKaalRetentionStreak(prev => prev + 1);
      sacredHaptics.quizCorrect();
    } else {
      setKaalAnswerState('wrong');
      setKaalRetentionStreak(0);
      sacredHaptics.quizIncorrect();
    }
  };

  const handleNextKaalChallenge = () => {
    sacredHaptics.lightTap();
    setKaalAnswerState('idle');
    setKaalSelectedChoice(null);
    setKaalChallengeIndex(prev => (prev + 1) % KAAL_KO_ANG_RECALL_CHALLENGES.length);
  };

  const handleReciteKaalVerse = (text: string) => {
    sacredHaptics.lightTap();
    speechReciter.speak(text, language);
  };

  const initMemoryRecall = async () => {
    let pool14 = ang14Verses;
    let pool15 = ang15Verses;
    if (pool14.length === 0 || pool15.length === 0) {
      const [m14, m15] = await Promise.all([
        import('../data/granths/sakhiSangrahAng14'),
        import('../data/granths/sakhiSangrahAng15'),
      ]);
      pool14 = m14.SAKHI_SANGRAH_ANG_14_VERSES;
      pool15 = m15.SAKHI_SANGRAH_ANG_15_VERSES;
      setAng14Verses(pool14);
      setAng15Verses(pool15);
    }
    const isChetavani = Math.random() > 0.5;
    const pool = isChetavani ? pool15 : pool14;
    if (pool.length === 0) return;
    const rand = pool[Math.floor(Math.random() * pool.length)];
    setMemoryRecallVerse({
      text: (rand.lines[language]?.[0] || rand.lines.hi[0]) + " " + (rand.lines[language]?.[1] || rand.lines.hi[1] || ''),
      angId: isChetavani ? 'ang-15' : 'ang-14'
    });
    setMemoryAnswerState('idle');
  };

  useEffect(() => {
    if (activeTab === 'memory-recall' && !memoryVerse) {
      initMemoryRecall();
    }
  }, [activeTab]);

  const handleMemoryChoice = (choice: string) => {
    if (memoryAnswerState !== 'idle' || !memoryVerse) return;
    
    if (choice === memoryVerse.angId) {
      setMemoryAnswerState('correct');
      setMemoryPoints(prev => prev + 10);
      sacredHaptics.quizCorrect();
    } else {
      setMemoryAnswerState('wrong');
      sacredHaptics.quizIncorrect();
    }
  };

  // --- 5-QUESTION SAKHI GAMIFIED QUIZ STATE ---
  const [sakhi5QList, setSakhi5QList] = useState<Sakhi5QuestionItem[]>(() => generate5SakhiQuestions(sakhisDatabase));
  const [sakhi5QIndex, setSakhi5QIndex] = useState<number>(0);
  const [sakhi5QSelectedOption, setSakhi5QSelectedOption] = useState<number | null>(null);
  const [sakhi5QAnswerChecked, setSakhi5QAnswerChecked] = useState<boolean>(false);
  const [sakhi5QScore, setSakhi5QScore] = useState<number>(0);
  const [sakhi5QHistory, setSakhi5QHistory] = useState<{ isCorrect: boolean; sakhiNumber: number; category: string }[]>([]);
  const [sakhi5QCompleted, setSakhi5QCompleted] = useState<boolean>(false);

  const resetSakhi5QQuiz = () => {
    sacredHaptics.lightTap();
    const fresh = generate5SakhiQuestions(sakhisDatabase);
    setSakhi5QList(fresh);
    setSakhi5QIndex(0);
    setSakhi5QSelectedOption(null);
    setSakhi5QAnswerChecked(false);
    setSakhi5QScore(0);
    setSakhi5QHistory([]);
    setSakhi5QCompleted(false);
  };

  const handleSelectSakhi5QOption = async (optionIdx: number) => {
    if (sakhi5QAnswerChecked || sakhi5QCompleted) return;
    const currentQuestion = sakhi5QList[sakhi5QIndex];
    if (!currentQuestion) return;

    setSakhi5QSelectedOption(optionIdx);
    setSakhi5QAnswerChecked(true);

    const isCorrect = optionIdx === currentQuestion.correctIndex;
    if (isCorrect) {
      sacredHaptics.quizCorrect();
      triggerConfettiAnimation();
      try {
        satyanaamAudio.ringSacredBell();
      } catch {}
      setSakhi5QScore(prev => prev + 20);
      updateSadhanaStreak();
    } else {
      sacredHaptics.quizIncorrect();
    }

    setSakhi5QHistory(prev => [
      ...prev,
      {
        isCorrect,
        sakhiNumber: currentQuestion.sakhiNumber,
        category: currentQuestion.categoryTitle[language] || currentQuestion.categoryTitle.hi
      }
    ]);

    // Sync score to leaderboard
    await syncScoreToLeaderboard(
      isCorrect ? 20 : 0,
      isCorrect,
      currentQuestion.id
    );
  };

  const handleNextSakhi5Q = () => {
    sacredHaptics.lightTap();
    if (sakhi5QIndex < sakhi5QList.length - 1) {
      setSakhi5QIndex(prev => prev + 1);
      setSakhi5QSelectedOption(null);
      setSakhi5QAnswerChecked(false);
    } else {
      setSakhi5QCompleted(true);
      if (onOpenBlessing && sakhi5QScore >= 60) {
        onOpenBlessing();
      }
    }
  };

  // Gameplay State
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showClue, setShowClue] = useState(false);
  const [isRevealing, setIsRevealing] = useState(false);

  // Confetti Animation Particle State
  interface ConfettiParticle {
    id: number;
    x: number;
    y: number;
    color: string;
    size: number;
    delay: number;
    angle: number;
  }
  const [confettiParticles, setConfettiParticles] = useState<ConfettiParticle[]>([]);

  const triggerConfettiAnimation = () => {
    const colors = ['#F59E0B', '#EF4444', '#10B981', '#3B82F6', '#EC4899', '#8B5CF6', '#14B8A6'];
    const particles = Array.from({ length: 65 }).map((_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100, // random horizontal position (percentage)
      y: 100, // start from bottom
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 12 + 6,
      delay: Math.random() * 0.5,
      angle: Math.random() * 360,
    }));
    setConfettiParticles(particles);
    // Automatically clear confetti after 4 seconds
    setTimeout(() => {
      setConfettiParticles([]);
    }, 4500);
  };

  // Add Fullscreen & Text Size state
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  // Daily Sadhana Streak & Daily Challenge state variables
  const [sadhanaStreak, setSadhanaStreak] = useState<number>(0);
  const [dailyChallengeSolvedToday, setDailyChallengeSolvedToday] = useState<boolean>(false);
  const [selectedDailyChallengeOption, setSelectedDailyChallengeOption] = useState<number | null>(null);
  const [isDailyChallengeChecked, setIsDailyChallengeChecked] = useState<boolean>(false);

  // Daily challenge selection based on current date
  const dailyChallengeItem = useMemo(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const hashStr = `${yyyy}${mm}${dd}`;
    const hashNum = parseInt(hashStr, 10);
    const index = hashNum % Math.max(1, ulatvasiPool.length);
    return ulatvasiPool[index] || ulatvasiPool[0];
  }, [ulatvasiPool]);

  const updateSadhanaStreak = () => {
    try {
      const today = new Date();
      const todayStr = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
      
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = `${yesterday.getFullYear()}-${yesterday.getMonth() + 1}-${yesterday.getDate()}`;
      
      const stored = localStorage.getItem('sahebworld_sadhana_streak_v1');
      let newStreak = 1;
      
      if (stored) {
        const parsed = JSON.parse(stored);
        const { currentStreak, lastCompletedDateStr } = parsed;
        
        if (lastCompletedDateStr === todayStr) {
          newStreak = currentStreak;
        } else if (lastCompletedDateStr === yesterdayStr) {
          newStreak = currentStreak + 1;
        } else {
          newStreak = 1;
        }
      }
      
      const updatedRecord = { currentStreak: newStreak, lastCompletedDateStr: todayStr };
      localStorage.setItem('sahebworld_sadhana_streak_v1', JSON.stringify(updatedRecord));
      setSadhanaStreak(newStreak);
    } catch (e) {
      console.error('Error updating streak:', e);
    }
  };

  const markDailyChallengeAsSolved = () => {
    try {
      const today = new Date();
      const todayStr = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
      const solvedDates = JSON.parse(localStorage.getItem('sahebworld_daily_challenge_solved_dates') || '{}');
      solvedDates[todayStr] = true;
      localStorage.setItem('sahebworld_daily_challenge_solved_dates', JSON.stringify(solvedDates));
      setDailyChallengeSolvedToday(true);
      updateSadhanaStreak();
    } catch (e) {
      console.error(e);
    }
  };

  // Load / Sync Daily Challenge and Daily Sadhana Streak on mount
  useEffect(() => {
    try {
      const today = new Date();
      const todayStr = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
      
      // 1. Load Daily Challenge Solved status
      const solvedDates = JSON.parse(localStorage.getItem('sahebworld_daily_challenge_solved_dates') || '{}');
      if (solvedDates[todayStr]) {
        setDailyChallengeSolvedToday(true);
        setIsDailyChallengeChecked(true);
        setSelectedDailyChallengeOption(dailyChallengeItem.correctIndex);
      }

      // 2. Load Daily Sadhana Streak
      const storedStreak = localStorage.getItem('sahebworld_sadhana_streak_v1');
      if (storedStreak) {
        const parsed = JSON.parse(storedStreak);
        const { currentStreak, lastCompletedDateStr } = parsed;
        
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = `${yesterday.getFullYear()}-${yesterday.getMonth() + 1}-${yesterday.getDate()}`;
        
        if (lastCompletedDateStr === todayStr || lastCompletedDateStr === yesterdayStr) {
          setSadhanaStreak(currentStreak);
        } else {
          setSadhanaStreak(0); // broken
        }
      }
    } catch (e) {
      console.error('Error loading streak on mount:', e);
    }
  }, [dailyChallengeItem]);

  // Sadhak Profile & Leaderboard
  const [sadhakProfile, setSadhakProfile] = useState<SadhakProfile>(getLocalSadhakProfile());
  const [isEditingName, setIsEditingName] = useState(false);
  const [customNameInput, setCustomNameInput] = useState(sadhakProfile.name);
  const [leaderboardList, setLeaderboardList] = useState<LeaderboardEntry[]>([]);
  const [isLoadingLeaderboard, setIsLoadingLeaderboard] = useState(false);
  const [leaderboardFilter, setLeaderboardFilter] = useState<'all' | 'today'>('all');

  const containerRef = useRef<HTMLDivElement>(null);

  // Full screen toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  // Improved touch physics (placeholder for implementation in UI)
  const touchProps = {
    className: "overflow-y-auto",
    style: { WebkitOverflowScrolling: 'touch' }
  };

  // ... (existing state) ...

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      // Logic for scroll spy would go here
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update render for full screen & font size
  // ... inside return ...
  // Fullscreen button
  // <button onClick={toggleFullscreen}>Fullscreen</button>
  // Text resize buttons
  // <button onClick={() => setFontSize(s => s + 2)}>+</button>
  // <button onClick={() => setFontSize(s => s - 2)}>-</button>
  // ... style={{ fontSize: `${fontSize}px` }} ...


  // Timed Mode (Optional Blitz)
  const [isTimedMode, setIsTimedMode] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);

  // Load leaderboard when switched to tab
  useEffect(() => {
    if (activeTab === 'leaderboard') {
      loadLeaderboard();
    }
  }, [activeTab]);

  const loadLeaderboard = async () => {
    setIsLoadingLeaderboard(true);
    try {
      const data = await getLeaderboardEntries();
      setLeaderboardList(data);
    } catch {
      // fallback
    } finally {
      setIsLoadingLeaderboard(false);
    }
  };

  // Reset state on question change or option shuffle
  useEffect(() => {
    setSelectedOption(null);
    setIsAnswerChecked(false);
    setIsFlipped(false);
    setShowClue(false);
    setIsRevealing(false);
  }, [currentIndex, selectedRealm, shuffleSeed]);

  // Jump directly to a specific Ulatvasi pad when launched via "3D दर्शन एवं गेम"
  const lastAppliedUlatvasiIdRef = useRef<string | null>(null);
  const lastPoolSizeRef = useRef<number>(0);

  useEffect(() => {
    if (!initialUlatvasiId) {
      lastAppliedUlatvasiIdRef.current = null;
      return;
    }
    const poolChanged = ulatvasiPool.length !== lastPoolSizeRef.current;
    const idChanged = initialUlatvasiId !== lastAppliedUlatvasiIdRef.current;
    if (!idChanged && !poolChanged) return;

    const matchedIndex = ulatvasiPool.findIndex((q) => q.id === initialUlatvasiId);
    if (matchedIndex !== -1) {
      lastAppliedUlatvasiIdRef.current = initialUlatvasiId;
      lastPoolSizeRef.current = ulatvasiPool.length;
      setSelectedRealm('all');
      setActiveTab('paradox-quest');
      setCurrentIndex(matchedIndex);
      setIsFlipped(false);
      setSelectedOption(null);
      setIsAnswerChecked(false);
      setShowClue(false);
      setTimeout(() => {
        const el = document.getElementById('ulatvasi-3d-quest-card');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    }
  }, [initialUlatvasiId, ulatvasiPool]);

  // Timed mode tick
  useEffect(() => {
    if (!isTimedMode || isAnswerChecked) return;
    if (timeLeft <= 0) {
      handleCheckAnswer(true); // timeout check
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [isTimedMode, timeLeft, isAnswerChecked]);

  const handleSelectOption = (idx: number) => {
    if (isAnswerChecked) return;
    sacredHaptics.lightTap();
    setSelectedOption(idx);
  };

  const handleCheckAnswer = async (isTimeout = false) => {
    if (selectedOption === null && !isTimeout) return;
    if (isAnswerChecked) return;

    const isCorrect = selectedOption !== null && selectedOption === currentQ.correctIndex;
    setIsAnswerChecked(true);
    setIsRevealing(true);

    if (isCorrect) {
      sacredHaptics.quizCorrect();
      triggerConfettiAnimation();
      try {
        satyanaamAudio.ringSacredBell();
      } catch {}
      updateSadhanaStreak();
    } else {
      sacredHaptics.quizIncorrect();
    }

    // Flip card to reveal mystical wisdom after a brief dramatic pause
    setTimeout(() => {
      sacredHaptics.mysticFlip();
      setIsFlipped(true);
      setIsRevealing(false);
    }, 650);

    // Sync Score & Leaderboard
    const updated = await syncScoreToLeaderboard(
      isCorrect ? currentQ.wisdomPoints : 0,
      isCorrect,
      currentQ.id
    );
    setSadhakProfile(updated);
  };

  const handleNextParadox = () => {
    sacredHaptics.lightTap();
    setShuffleSeed((prev) => prev + 1);
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Loop or congratulate
      setCurrentIndex(0);
    }
  };

  const handlePrevParadox = () => {
    sacredHaptics.lightTap();
    setShuffleSeed((prev) => prev + 1);
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleSaveName = () => {
    const defaultName = language === 'hi' ? 'सत्य साधक' : language === 'pb' ? 'ਸੱਤ ਸਾਧਕ' : 'Satya Sadhak';
    const trimmed = customNameInput.trim() || defaultName;
    const updated = { ...sadhakProfile, name: trimmed };
    setSadhakProfile(updated);
    saveLocalSadhakProfile(updated);
    setIsEditingName(false);
    loadLeaderboard();
  };

  const currentRank = getUlatvasiRank(sadhakProfile.totalScore, language);
  const exactTop = SACRED_BRANDING.header[language];
  const exactBottom = SACRED_BRANDING.footer[language];

  // Trilingual UI strings
  const tr = {
    title: language === 'hi' ? 'उलटबांसी स्वाध्याय' : language === 'pb' ? 'ਉਲਟਬਾਂਸੀ ਸਵਾਧਿਆਏ' : 'Ulatvasi Swadhyay',
    backBtn: language === 'hi' ? 'वापस जाएं' : language === 'pb' ? 'ਵਾਪਸ ਜਾਓ' : 'Back',
    subtitle: language === 'hi' ? 'सतगुरु कबीर साहेब की गुप्त पहेलियों का 3D ज्ञान उद्घाटन' : language === 'pb' ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀਆਂ ਗੂੜ੍ਹ ਬੁਝਾਰਤਾਂ ਦਾ ਰਹੱਸ ਉਦਘਾਟਨ' : '3D Unveiling of Kabir’s Esoteric Paradoxes',
    tabSakhi5Q: language === 'hi' ? '🎯 ५-प्रश्न साखी क्विज' : language === 'pb' ? '🎯 ੫-ਪ੍ਰਸ਼ਨ ਸਾਖੀ ਕੁਇਜ਼' : '🎯 5-Question Sakhi Quiz',
    tabQuest: language === 'hi' ? 'रहस्य यात्रा' : language === 'pb' ? 'ਰਹੱਸ ਯਾਤਰਾ' : 'Paradox Quest',
    tabLibrary: language === 'hi' ? 'उलटबांसी संग्रह' : language === 'pb' ? 'ਉਲਟਬਾਂਸੀ ਸੰਗ੍ਰਹਿ' : 'Ulatvasi Library',
    tabLeaderboard: language === 'hi' ? 'पारखी लीडरबोर्ड' : language === 'pb' ? 'ਪਾਰਖੀ ਲੀਡਰਬੋਰਡ' : 'Leaderboard',
    tabRealms: language === 'hi' ? 'साधना मंडल' : language === 'pb' ? 'ਸਾਧਨਾ ਮੰਡਲ' : 'Realms',
    tabMemoryRecall: language === 'hi' ? 'स्मृति संचय' : language === 'pb' ? 'ਸਮ੍ਰਿਤੀ ਸੰਚਯ' : 'Memory Recall',
    unveilBtn: language === 'hi' ? 'रहस्य पर्दा खोलें' : language === 'pb' ? 'ਰਹੱਸ ਦਾ ਪਰਦਾ ਖੋਲ੍ਹੋ' : 'Unveil Wisdom',
    flipBackBtn: language === 'hi' ? 'पहेली देखें' : language === 'pb' ? 'ਬੁਝਾਰਤ ਦੇਖੋ' : 'View Paradox',
    flipWisdomBtn: language === 'hi' ? 'रहस्य देखें' : language === 'pb' ? 'ਰਹੱਸ ਦੇਖੋ' : 'View Wisdom',
    clueBtn: language === 'hi' ? 'गूढ़ साहेब संकेत' : language === 'pb' ? 'ਗੂੜ੍ਹ ਸਾਹੇਬ ਸੰਕੇਤ' : 'Mystic Clue',
    nextBtn: language === 'hi' ? 'अगला गूढ़ भेद' : language === 'pb' ? 'ਅਗਲਾ ਗੂੜ੍ਹ ਭੇਦ' : 'Next Paradox',
    prevBtn: language === 'hi' ? 'पिछला' : language === 'pb' ? 'ਪਿਛਲਾ' : 'Previous',
    score: language === 'hi' ? 'ज्ञान अंक' : language === 'pb' ? 'ਗਿਆਨ ਅੰਕ' : 'Wisdom Score',
    streak: language === 'hi' ? 'साधना प्रवाह' : language === 'pb' ? 'ਸਾਧਨਾ ਪ੍ਰਵਾਹ' : 'Streak',
    symbolsDecoded: language === 'hi' ? 'गुप्त प्रतीक व्याख्या' : language === 'pb' ? 'ਗੁਪਤ ਪ੍ਰਤੀਕ ਵਿਆਖਿਆ' : 'Decoded Sacred Symbols',
    parakhiNote: language === 'hi' ? 'पारखी साधक दृष्टि' : language === 'pb' ? 'ਪਾਰਖੀ ਸਾਧਕ ਦ੍ਰਿਸ਼ਟੀ' : 'Parakhi Seeker Insight',
    closeBtn: language === 'hi' ? 'प्रश्नोत्तरी बंद करें' : language === 'pb' ? 'ਪ੍ਰਸ਼ਨੋਤਰੀ ਬੰਦ ਕਰੋ' : 'Close Quiz',
    literalParadoxLabel: language === 'hi' ? 'बाह्य कौतूहल: ' : language === 'pb' ? 'ਬਾਹਰੀ ਕੌਤਕ: ' : 'External Paradox: ',
    bellSound: language === 'hi' ? 'घंटी ध्वनि' : language === 'pb' ? 'ਘੰਟੀ ਦੀ ਆਵਾਜ਼' : 'Bell Sound',
    spiritualMeaningLabel: language === 'hi' ? 'सतगुरु कबीर साहेब का गूढ़ आध्यात्मिक भावार्थ' : language === 'pb' ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦਾ ਗੂੜ੍ਹ ਰੂਹਾਨੀ ਭਾਵਾਰਥ' : 'Esoteric Spiritual Meaning',
    practiceAgain: language === 'hi' ? 'पुनः अभ्यास करें' : language === 'pb' ? 'ਦੁਬਾਰਾ ਅਭਿਆਸ ਕਰੋ' : 'Practice Again',
    paradoxSolved: language === 'hi' ? 'सत्य रहस्य सिद्ध हुआ!' : language === 'pb' ? 'ਸੱਚ ਰਹੱਸ ਸਿੱਧ ਹੋਇਆ!' : 'True Paradox Decoded!',
    esotericWisdom: language === 'hi' ? 'गूढ़ ज्ञान बोध' : language === 'pb' ? 'ਗੂੜ੍ਹ ਗਿਆਨ ਬੋਧ' : 'Esoteric Wisdom Realization',
    wisdomPointsReceived: language === 'hi' ? 'ज्ञान अंक प्राप्त हुए' : language === 'pb' ? 'ਗਿਆਨ ਅੰਕ ਪ੍ਰਾਪਤ ਹੋਏ' : 'Wisdom points received',
    experienceRevelation: language === 'hi' ? 'रहस्य का साक्षात्कार करें' : language === 'pb' ? 'ਰਹੱਸ ਦਾ ਸਾਖਾਤਕਾਰ ਕਰੋ' : 'Experience the Revelation',
    hideLabel: language === 'hi' ? 'छिपाएँ ▲' : language === 'pb' ? 'ਛੁਪਾਓ ▲' : 'Hide ▲',
    showLabel: language === 'hi' ? 'देखें ▼' : language === 'pb' ? 'ਦੇਖੋ ▼' : 'Show ▼',
    mysticParadoxLabel: language === 'hi' ? 'रहस्य भेद #' : language === 'pb' ? 'ਰਹੱਸ ਭੇਦ #' : 'Mystic Paradox #',
    pts: language === 'hi' ? 'अंक' : language === 'pb' ? 'ਅੰਕ' : 'pts',
    bhed: language === 'hi' ? 'भेद' : language === 'pb' ? 'ਭੇਦ' : 'Paradox',
    solved: language === 'hi' ? 'सुलझाए' : language === 'pb' ? 'ਸੁਲਝਾਏ' : 'solved',
    totalScore: language === 'hi' ? 'कुल अंक' : language === 'pb' ? 'ਕੁੱਲ ਅੰਕ' : 'Total Score',
    bestStreak: language === 'hi' ? 'सर्वश्रेष्ठ प्रवाह' : language === 'pb' ? 'ਸਰਵੋਤਮ ਪ੍ਰਵਾਹ' : 'Best Streak',
    accuracy: language === 'hi' ? 'सटीकता' : language === 'pb' ? 'ਸਟੀਕਤਾ' : 'Accuracy',
    topSeekers: language === 'hi' ? 'शीर्ष पारखी साधक' : language === 'pb' ? 'ਸਰਵੋਤਮ ਪਾਰਖੀ ਸਾਧਕ' : 'Top Wisdom Seekers',
    divineRevelation: language === 'hi' ? 'दिव्य रहस्योद्घाटन' : language === 'pb' ? 'ਦਿਵਯ ਰਹੱਸ ਉਦਘਾਟਨ' : 'Divine Revelation Unveiled'
  };

  return (
    <div
      id="ulatvasi-gaming-quiz"
      style={{
        backgroundColor: theme.cardBg,
        borderColor: theme.cardBorder,
        color: theme.textPrimary,
      }}
      className="rounded-3xl border shadow-2xl overflow-hidden flex flex-col transition-all duration-300"
    >
      {/* Main Header & Tab Controls */}
      <div className="p-4 sm:p-6 border-b space-y-4" style={{ borderColor: theme.cardBorder }}>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              style={{
                backgroundColor: 'rgba(245, 158, 11, 0.15)',
                borderColor: '#F59E0B',
              }}
              className="w-12 h-12 rounded-2xl border-2 flex items-center justify-center shadow-inner shrink-0"
            >
              <Sparkles className="w-6 h-6 text-amber-500 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span
                  style={{ color: theme.accentGold }}
                  className="text-xs font-extrabold font-serif"
                >
                  {language === 'hi' ? '3D दर्शन एवं गेम' : language === 'pb' ? '3D ਦਰਸ਼ਨ ਤੇ ਗੇਮ' : '3D Paradox Quest'}
                </span>
                <span aria-hidden="true" style={{ color: theme.textSecondary }}>·</span>
                <span className="text-xs font-semibold" style={{ color: theme.textSecondary }}>
                  {currentQ.realmTitle[language]}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black font-serif tracking-tight mt-0.5" style={{ color: theme.sacredMaroon }}>
                {tr.title}
              </h2>
            </div>
          </div>

          {/* Gamified Header Stats & Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Selector in Ulatvasi */}
            <div 
              style={{ backgroundColor: theme.bgSecondary, borderColor: theme.borderOrnament }}
              className="flex items-center p-0.5 rounded-xl border shadow-inner gap-0.5"
            >
              {(['hi', 'pb', 'en'] as Language[]).map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => handleLanguageChange(l)}
                  className={`px-2 py-1 rounded-lg font-serif text-[11px] font-bold transition cursor-pointer ${
                    language === l
                      ? 'bg-[#8B2500] text-white shadow-xs'
                      : 'opacity-70 hover:opacity-100 hover:bg-black/5'
                  }`}
                >
                  {l === 'hi' ? 'हिंदी' : l === 'pb' ? 'ਪੰਜਾਬੀ' : 'EN'}
                </button>
              ))}
            </div>

            {/* Sadhak Wisdom Score Badge */}
            <div
              style={{
                backgroundColor: theme.bgSecondary,
                borderColor: theme.borderOrnament,
              }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-2xl border shadow-xs text-xs font-bold"
            >
              <Trophy className="w-4 h-4 text-amber-500" />
              <span>
                {sadhakProfile.totalScore} <span className="text-[10px] opacity-75 font-normal">pts</span>
              </span>
            </div>

            {/* Streak Flame */}
            <div
              style={{
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                borderColor: '#EF4444',
                color: '#DC2626',
              }}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-2xl border text-xs font-bold shadow-xs"
              title="Current Wisdom Streak"
            >
              <Flame className="w-4 h-4 text-orange-500 animate-bounce" />
              <span>{sadhakProfile.currentStreak} 🔥</span>
            </div>

            {/* Daily Sadhana Streak */}
            <div
              style={{
                backgroundColor: 'rgba(245, 158, 11, 0.1)',
                borderColor: '#F59E0B',
                color: '#D97706',
              }}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-2xl border text-xs font-bold shadow-xs"
              title="Daily Sadhana Streak (Consecutive Days)"
            >
              <Flame className="w-4 h-4 text-amber-500 animate-pulse" />
              <span>{sadhanaStreak} {language === 'hi' ? 'दिवसीय साधना प्रवाह' : language === 'pb' ? 'ਦਿਨ ਸਾਧਨਾ ਪ੍ਰਵਾਹ' : 'Sadhana Streak'} 🗓️</span>
            </div>

            {/* Close Button */}
            {onClose && (
              <button
                id="ulatvasi-close-btn"
                type="button"
                onClick={onClose}
                style={{
                  backgroundColor: 'rgba(239, 68, 68, 0.1)',
                  borderColor: '#EF4444',
                  color: '#DC2626',
                }}
                className="p-2 sm:px-3 sm:py-1.5 rounded-2xl border text-xs font-bold flex items-center gap-1.5 hover:bg-red-500 hover:text-white transition cursor-pointer shadow-2xs"
                title={tr.closeBtn}
              >
                <X className="w-4 h-4 text-red-500 hover:text-white" />
                <span className="hidden sm:inline">{tr.closeBtn}</span>
              </button>
            )}
          </div>
        </div>

        {/* Navigation Mode Switcher Pills */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
          <div className="flex items-center gap-1.5 p-1 rounded-2xl border bg-black/5 dark:bg-white/5 overflow-x-auto" style={{ borderColor: theme.cardBorder }}>
            <button
              type="button"
              onClick={() => setActiveTab('sakhi-5q-quiz')}
              style={{
                backgroundColor: activeTab === 'sakhi-5q-quiz' ? theme.buttonPrimaryBg : 'transparent',
                color: activeTab === 'sakhi-5q-quiz' ? theme.buttonPrimaryText : theme.textSecondary,
              }}
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs whitespace-nowrap"
            >
              <Award className="w-3.5 h-3.5 text-amber-500" />
              <span>{tr.tabSakhi5Q}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('paradox-quest')}
              style={{
                backgroundColor: activeTab === 'paradox-quest' ? theme.buttonPrimaryBg : 'transparent',
                color: activeTab === 'paradox-quest' ? theme.buttonPrimaryText : theme.textSecondary,
              }}
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs whitespace-nowrap"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{tr.tabQuest}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('library')}
              style={{
                backgroundColor: activeTab === 'library' ? theme.buttonPrimaryBg : 'transparent',
                color: activeTab === 'library' ? theme.buttonPrimaryText : theme.textSecondary,
              }}
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{tr.tabLibrary}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('leaderboard')}
              style={{
                backgroundColor: activeTab === 'leaderboard' ? theme.buttonPrimaryBg : 'transparent',
                color: activeTab === 'leaderboard' ? theme.buttonPrimaryText : theme.textSecondary,
              }}
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Trophy className="w-3.5 h-3.5" />
              <span>{tr.tabLeaderboard}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('realms')}
              style={{
                backgroundColor: activeTab === 'realms' ? theme.buttonPrimaryBg : 'transparent',
                color: activeTab === 'realms' ? theme.buttonPrimaryText : theme.textSecondary,
              }}
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{tr.tabRealms}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('memory-recall')}
              style={{
                backgroundColor: activeTab === 'memory-recall' ? theme.buttonPrimaryBg : 'transparent',
                color: activeTab === 'memory-recall' ? theme.buttonPrimaryText : theme.textSecondary,
              }}
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <HistoryIcon className="w-3.5 h-3.5" />
              <span>{tr.tabMemoryRecall}</span>
            </button>
          </div>

          {/* Quick Realm Filter */}
          {activeTab === 'paradox-quest' && (
            <div className="flex items-center gap-1.5 overflow-x-auto py-1">
              {[
                { id: 'all', label: language === 'hi' ? 'सभी पहेलियाँ' : language === 'pb' ? 'ਸਾਰੀਆਂ ਉਲਟਬਾਂਸੀਆਂ' : 'All Paradoxes' },
                { id: 'kautuhal', label: language === 'hi' ? '१. कौतूहल (Curiosity)' : language === 'pb' ? '੧. ਕੌਤਕ (Curiosity)' : '1. Curiosity' },
                { id: 'antaryog', label: language === 'hi' ? '२. अंतर्योग (Yogic)' : language === 'pb' ? '੨. ਅੰਤਰਯੋਗ (Yogic)' : '2. Yogic' },
                { id: 'shunya-samadhi', label: language === 'hi' ? '३. शून्य समाधि (Absolute)' : language === 'pb' ? '੩. ਸੁੰਨ ਸਮਾਧੀ (Absolute)' : '3. Absolute' },
              ].map((r) => {
                const isSelected = selectedRealm === r.id;
                return (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => {
                      setSelectedRealm(r.id as any);
                      setCurrentIndex(0);
                    }}
                    style={{
                      backgroundColor: isSelected 
                        ? (theme.mode === 'mystic_dark' ? '#D97706' : theme.sacredMaroon) 
                        : (theme.mode === 'mystic_dark' ? '#18130E' : theme.bgSecondary),
                      color: isSelected 
                        ? (theme.mode === 'mystic_dark' ? '#000000' : '#FFFFFF') 
                        : (theme.mode === 'mystic_dark' ? '#FFFDF7' : theme.textPrimary),
                      borderColor: isSelected 
                        ? (theme.mode === 'mystic_dark' ? '#F59E0B' : theme.sacredMaroon) 
                        : (theme.mode === 'mystic_dark' ? 'rgba(253, 230, 138, 0.3)' : theme.cardBorder),
                    }}
                    className={`px-2.5 py-1 rounded-xl text-[11px] font-bold transition cursor-pointer border shadow-2xs ${
                      isSelected ? 'font-black ring-1 ring-amber-400/50' : 'hover:opacity-90'
                    }`}
                  >
                    {r.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* TAB CONTENT 1: 3D CARD-FLIP PARADOX QUEST */}
      {activeTab === 'paradox-quest' && (
        <div className="p-4 sm:p-6 space-y-6 relative">
          {/* Confetti Animation Layer */}
          {confettiParticles.length > 0 && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-50">
              {confettiParticles.map((p) => (
                <motion.div
                  key={p.id}
                  initial={{ 
                    x: `${p.x}%`, 
                    y: '100%', 
                    scale: 0.1, 
                    rotate: 0, 
                    opacity: 1 
                  }}
                  animate={{ 
                    y: '-10%', 
                    scale: [1, 1.2, 0.8],
                    rotate: p.angle + 720,
                    opacity: [1, 1, 0] 
                  }}
                  transition={{ 
                    duration: Math.random() * 1.5 + 1.8, 
                    delay: p.delay, 
                    ease: "easeOut" 
                  }}
                  style={{
                    position: 'absolute',
                    width: p.size,
                    height: p.size,
                    backgroundColor: p.color,
                    borderRadius: Math.random() > 0.5 ? '50%' : '15%',
                  }}
                />
              ))}
            </div>
          )}

          {/* DAILY CHALLENGE CARD */}
          <div 
            style={{
              backgroundColor: theme.bgSecondary,
              borderColor: '#F59E0B',
            }}
            className="rounded-3xl border-2 p-4 sm:p-5 shadow-lg space-y-3 relative overflow-hidden"
          >
            {/* Double Points Glow Effect */}
            <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-500 to-orange-500 text-stone-950 font-black text-[9px] sm:text-[10px] px-3 py-1 rounded-bl-xl tracking-wider uppercase">
              {language === 'hi' ? 'दोहरे अंक' : language === 'pb' ? 'ਦੁੱਗਣੇ ਅੰਕ' : 'Double Points'} ⚡
            </div>

            <div className="flex items-start gap-2.5">
              <span className="text-xl sm:text-2xl pt-0.5">🏆</span>
              <div>
                <h3 className="text-sm sm:text-base font-black font-serif" style={{ color: theme.sacredMaroon }}>
                  {language === 'hi' 
                    ? 'दैनिक उलटबांसी साधना चुनौती' 
                    : language === 'pb' 
                      ? 'ਦੈਨਿਕ ਉਲਟਬਾਂਸੀ ਸਾਧਨਾ ਚੁਣੌਤੀ' 
                      : 'Daily Ulatvasi Sadhana Challenge'}
                </h3>
                <p className="text-[11px] sm:text-xs" style={{ color: theme.textSecondary }}>
                  {language === 'hi'
                    ? 'आज की इस विशेष पहेली को सुलझाकर दोहरे अंक प्राप्त करें और अपनी साधना स्ट्रीक बनाए रखें!'
                    : language === 'pb'
                      ? 'ਅੱਜ ਦੀ ਇਸ ਵਿਸ਼ੇਸ਼ ਬੁਝਾਰਤ ਨੂੰ ਸੁਲਝਾ ਕੇ ਦੁੱਗਣੇ ਅੰਕ ਪ੍ਰਾਪਤ ਕਰੋ ਅਤੇ ਆਪਣੀ ਸਾਧਨਾ ਸਟ੍ਰੀਕ ਬਣਾਈ ਰੱਖੋ!'
                      : 'Solve this daily riddle for double points and keep your Daily Sadhana Streak alive!'}
                </p>
              </div>
            </div>

            {dailyChallengeSolvedToday ? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-4 text-center space-y-2 animate-fadeIn">
                <span className="text-3xl block">🎉</span>
                <p className="font-serif font-bold text-sm sm:text-base text-emerald-600 dark:text-emerald-400">
                  {language === 'hi'
                    ? 'बधाई हो! आपने आज की चुनौती सफलतापूर्वक सुलझा ली है।'
                    : language === 'pb'
                      ? 'ਵਧਾਈ ਹੋਵੇ! ਤੁਸੀਂ ਅੱਜ ਦੀ ਚੁਣੌਤੀ ਸਫਲਤਾਪੂਰਵਕ ਸੁਲਝਾ ਲਈ ਹੈ।'
                      : 'Congratulations! You have successfully solved today\'s challenge.'}
                </p>
                <div className="text-xs text-stone-500 dark:text-stone-400 font-medium">
                  {language === 'hi'
                    ? `आज का श्लोक: "${dailyChallengeItem.title.hi}"`
                    : language === 'pb'
                      ? `ਅੱਜ ਦਾ ਸ਼ਲੋਕ: "${dailyChallengeItem.title.pb}"`
                      : `Today's Verse: "${dailyChallengeItem.title.en}"`}
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-bold border border-emerald-500/20">
                  +{(dailyChallengeItem.wisdomPoints || 15) * 2} {tr.pts} Gained ⚡
                </div>
              </div>
            ) : (
              <div className="space-y-3 pt-1 border-t border-dashed border-amber-500/20">
                {/* Challenge Verse */}
                <div 
                  style={{ backgroundColor: theme.cardBg, borderColor: theme.borderOrnament }}
                  className="p-3.5 sm:p-4 rounded-2xl border text-center font-serif text-sm sm:text-base font-bold leading-relaxed whitespace-pre-line text-amber-700 dark:text-amber-300 relative"
                >
                  <p className="tracking-wide">
                    {dailyChallengeItem.verse[language]}
                  </p>
                </div>

                {/* Choices */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {dailyChallengeItem.options[language].map((opt, idx) => {
                    const isSelected = selectedDailyChallengeOption === idx;
                    const isCorrect = idx === dailyChallengeItem.correctIndex;

                    let btnBg = theme.cardBg;
                    let btnBorder = theme.cardBorder;
                    let textColor = theme.textPrimary;

                    if (isDailyChallengeChecked) {
                      if (isCorrect) {
                        btnBg = 'rgba(34, 197, 94, 0.15)';
                        btnBorder = '#22C55E';
                        textColor = '#15803D';
                      } else if (isSelected && !isCorrect) {
                        btnBg = 'rgba(239, 68, 68, 0.15)';
                        btnBorder = '#EF4444';
                        textColor = '#B91C1C';
                      }
                    } else if (isSelected) {
                      btnBg = theme.stepActiveBg;
                      btnBorder = '#F59E0B';
                    }

                    return (
                      <button
                        key={idx}
                        type="button"
                        disabled={isDailyChallengeChecked}
                        onClick={() => setSelectedDailyChallengeOption(idx)}
                        style={{
                          backgroundColor: btnBg,
                          borderColor: btnBorder,
                          color: textColor,
                        }}
                        className={`text-left p-3 rounded-xl border-2 transition-all flex items-center justify-between gap-2 text-xs font-semibold cursor-pointer ${
                          !isDailyChallengeChecked ? 'hover:scale-[1.01] active:scale-[0.99] hover:border-amber-400' : ''
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span
                            style={{
                              backgroundColor: isSelected ? '#F59E0B' : theme.bgSecondary,
                              color: isSelected ? '#1C1917' : theme.textSecondary,
                            }}
                            className="w-5 h-5 rounded-md text-[10px] font-black flex items-center justify-center shrink-0 border"
                          >
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span className="leading-tight text-[11px] sm:text-xs">{opt}</span>
                        </div>
                        {isDailyChallengeChecked && isCorrect && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        )}
                        {isDailyChallengeChecked && isSelected && !isCorrect && (
                          <XCircle className="w-4 h-4 text-red-600 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Action button */}
                <div className="flex justify-between items-center pt-1 gap-2">
                  <p className="text-[10px] sm:text-xs italic" style={{ color: theme.textSecondary }}>
                    💡 Tip: {dailyChallengeItem.clueHint[language].substring(0, 50)}...
                  </p>
                  
                  {!isDailyChallengeChecked && (
                    <button
                      type="button"
                      onClick={async () => {
                        if (selectedDailyChallengeOption === null) return;
                        const isCorrect = selectedDailyChallengeOption === dailyChallengeItem.correctIndex;
                        setIsDailyChallengeChecked(true);

                        if (isCorrect) {
                          sacredHaptics.quizCorrect();
                          triggerConfettiAnimation();
                          try {
                            satyanaamAudio.ringSacredBell();
                          } catch {}
                          
                          // Mark daily challenge solved & update streak
                          markDailyChallengeAsSolved();

                          // Add double points to profile & leaderboard
                          const doublePoints = (dailyChallengeItem.wisdomPoints || 15) * 2;
                          const updated = await syncScoreToLeaderboard(doublePoints, true, `daily_${dailyChallengeItem.id}`);
                          setSadhakProfile(updated);
                        } else {
                          sacredHaptics.quizIncorrect();
                          // Let user retry after a brief pause
                          setTimeout(() => {
                            setIsDailyChallengeChecked(false);
                            setSelectedDailyChallengeOption(null);
                          }, 1500);
                        }
                      }}
                      disabled={selectedDailyChallengeOption === null}
                      style={{
                        backgroundColor: selectedDailyChallengeOption !== null ? '#F59E0B' : theme.bgSecondary,
                        color: selectedDailyChallengeOption !== null ? '#1C1917' : theme.textSecondary,
                        borderColor: selectedDailyChallengeOption !== null ? '#D97706' : theme.cardBorder,
                      }}
                      className="px-4 py-2 rounded-xl border text-xs font-bold transition hover:opacity-90 disabled:opacity-50 cursor-pointer shadow-xs flex items-center gap-1 shrink-0"
                    >
                      <span>{tr.unveilBtn}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Visual Progress Bar */}
          <div className="space-y-1.5">
            <div className="w-full bg-black/10 dark:bg-white/10 h-2 sm:h-2.5 rounded-full overflow-hidden relative shadow-inner">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${((currentIndex + 1) / filteredQuestions.length) * 100}%` }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="h-full rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 shadow-[0_0_8px_rgba(245,158,11,0.5)]"
              />
            </div>
          </div>

          {/* Progress & Mystery Controls */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs" style={{ color: theme.textSecondary }}>
            <div className="flex items-center gap-2 font-bold">
              <span style={{ color: theme.accentGold }}>
                भेद #{currentQ.number} / {filteredQuestions.length}
              </span>
              <span>•</span>
              <span style={{ color: theme.sacredMaroon }}>{currentQ.title[language]}</span>
            </div>

            {/* Flip Card Manual Toggle Button */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsFlipped(!isFlipped)}
                style={{
                  backgroundColor: theme.bgSecondary,
                  borderColor: theme.borderOrnament,
                }}
                className="px-3 py-1.5 rounded-xl border font-bold text-xs flex items-center gap-1.5 hover:border-amber-500 transition cursor-pointer shadow-xs"
                title="Flip between Paradox and Unveiled Wisdom"
              >
                <RotateCw className={`w-3.5 h-3.5 text-amber-500 transition-transform duration-500 ${isFlipped ? 'rotate-180' : ''}`} />
                <span>{isFlipped ? tr.flipBackBtn : tr.flipWisdomBtn}</span>
              </button>
            </div>
          </div>

          {/* 3D PERSPECTIVE FLIP CARD CONTAINER */}
          <div id="ulatvasi-3d-quest-card" className="perspective-1200 w-full">
            <div
              className={`grid w-full transition-transform duration-700 ease-in-out transform-style-3d ${
                isFlipped ? 'rotate-y-180' : ''
              } ${isRevealing ? 'animate-pulse scale-[0.98]' : ''}`}
            >
              {/* ============================================================ */}
              {/* CARD FRONT: THE MYSTICAL PARADOX / पहेली द्वार */}
              {/* ============================================================ */}
              <div
                style={{
                  backgroundColor: theme.bgSecondary,
                  borderColor: isAnswerChecked ? (selectedOption === currentQ.correctIndex ? '#22C55E' : '#EF4444') : theme.borderOrnament,
                }}
                className={`col-start-1 row-start-1 w-full rounded-3xl border-2 p-5 sm:p-7 shadow-xl space-y-5 backface-hidden relative overflow-hidden ${
                  isFlipped ? 'pointer-events-none' : ''
                }`}
              >
                {/* Shimmer Effect on Correct Answer */}
                {isAnswerChecked && selectedOption === currentQ.correctIndex && (
                  <motion.div
                    initial={{ x: '-100%', opacity: 0 }}
                    animate={{ x: '100%', opacity: [0, 0.15, 0.15, 0] }}
                    transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-300 to-transparent pointer-events-none z-10"
                  />
                )}
                {/* Decorative Mystical Seal */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">📜</span>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                        {tr.mysticParadoxLabel}{currentQ.number}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold font-serif" style={{ color: theme.sacredMaroon }}>
                        {currentQ.title[language]}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black px-3 py-1 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-300 border border-amber-500/30">
                      +{currentQ.wisdomPoints} {tr.pts}
                    </span>
                  </div>
                </div>

                {/* THE SACRED PARADOX COUPLET (POETIC PARCHMENT) */}
                <div
                  style={{
                    backgroundColor: theme.cardBg,
                    borderColor: theme.accentGold,
                  }}
                  className="p-5 sm:p-6 rounded-2xl border-2 shadow-md relative overflow-hidden text-center space-y-3"
                >
                  <div className="text-amber-500 font-serif text-3xl opacity-20 absolute top-2 left-3 select-none">❝</div>
                  <div className="text-amber-500 font-serif text-3xl opacity-20 absolute bottom-2 right-3 select-none">❞</div>

                  <p
                    style={{ color: theme.sacredMaroon }}
                    className="font-serif text-lg sm:text-2xl font-bold leading-relaxed whitespace-pre-line tracking-wide"
                  >
                    {currentQ.verse[language]}
                  </p>

                  <div className="pt-2 border-t border-amber-500/20 text-xs sm:text-sm font-medium" style={{ color: theme.textSecondary }}>
                    <span className="font-bold text-amber-600 dark:text-amber-400">{tr.literalParadoxLabel}</span>
                    {currentQ.literalParadox[language]}
                  </div>
                </div>

                {/* CLUE / HINT ACCORDION DRAWER */}
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      sacredHaptics.clueReveal();
                      setShowClue(!showClue);
                    }}
                    style={{
                      backgroundColor: showClue ? 'rgba(245, 158, 11, 0.15)' : theme.cardBg,
                      borderColor: theme.accentGold,
                      color: theme.sacredMaroon,
                    }}
                    className="w-full px-4 py-2.5 rounded-xl border flex items-center justify-between text-xs sm:text-sm font-bold transition hover:opacity-90 cursor-pointer shadow-xs"
                  >
                    <div className="flex items-center gap-2">
                      <Lightbulb className="w-4 h-4 text-amber-500" />
                      <span>{tr.clueBtn}</span>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-md bg-black/10 dark:bg-white/10">
                      {showClue ? tr.hideLabel : tr.showLabel}
                    </span>
                  </button>

                  {showClue && (
                    <div
                      style={{ backgroundColor: theme.cardBg, borderColor: theme.borderOrnament }}
                      className="mt-2 p-3.5 rounded-xl border text-xs sm:text-sm space-y-2 animate-fadeIn"
                    >
                      <p className="font-medium italic" style={{ color: theme.textPrimary }}>
                        💡 {currentQ.clueHint[language]}
                      </p>
                      {/* Decoded Symbol Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {currentQ.symbols.map((s, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 rounded-lg bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20 text-[11px] font-semibold"
                          >
                            {s.symbol}: {s.meaning[language]}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* THE MYSTERY QUESTION & 4 ESOTERIC OPTIONS */}
                <div className="space-y-3 pt-1">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-amber-500 text-stone-950 font-black text-xs flex items-center justify-center">
                        ?
                      </span>
                      <h4 className="text-sm sm:text-base font-bold font-serif leading-snug">
                        {currentQ.question[language]}
                      </h4>
                    </div>

                    {!isAnswerChecked && (
                      <button
                        type="button"
                        onClick={() => {
                          sacredHaptics.lightTap();
                          setShuffleSeed((prev) => prev + 1);
                          setSelectedOption(null);
                        }}
                        className="shrink-0 px-2 py-1 rounded-lg border text-[11px] font-bold flex items-center gap-1 text-amber-700 dark:text-amber-300 hover:bg-amber-500/10 cursor-pointer shadow-2xs"
                        style={{ borderColor: theme.cardBorder }}
                        title={language === 'hi' ? 'विकल्प शफ़ल करें' : language === 'pb' ? 'ਵਿਕਲਪ ਸ਼ਫਲ ਕਰੋ' : 'Shuffle options'}
                      >
                        <RotateCw className="w-3 h-3 text-amber-600" />
                        <span className="hidden xs:inline text-[10px]">
                          {language === 'hi' ? 'शफ़ल' : language === 'pb' ? 'ਸ਼ਫਲ' : 'Shuffle'}
                        </span>
                      </button>
                    )}
                  </div>

                  <div className="space-y-2.5">
                    {currentQ.options[language].map((opt, idx) => {
                      const isSelected = selectedOption === idx;
                      const isCorrect = idx === currentQ.correctIndex;

                      let btnBg = theme.cardBg;
                      let btnBorder = theme.cardBorder;
                      let textColor = theme.textPrimary;

                      if (isAnswerChecked) {
                        if (isCorrect) {
                          btnBg = 'rgba(34, 197, 94, 0.15)';
                          btnBorder = '#22C55E';
                          textColor = '#15803D';
                        } else if (isSelected && !isCorrect) {
                          btnBg = 'rgba(239, 68, 68, 0.15)';
                          btnBorder = '#EF4444';
                          textColor = '#B91C1C';
                        }
                      } else if (isSelected) {
                        btnBg = theme.stepActiveBg;
                        btnBorder = '#F59E0B';
                      }

                      return (
                        <motion.button
                          key={idx}
                          type="button"
                          disabled={isAnswerChecked}
                          onClick={() => handleSelectOption(idx)}
                          animate={
                            isAnswerChecked && isCorrect && isSelected
                              ? { scale: [1, 1.12, 0.98, 1.02, 1], rotate: [0, -1, 1, 0] }
                              : {}
                          }
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          style={{
                            backgroundColor: btnBg,
                            borderColor: btnBorder,
                            color: textColor,
                          }}
                          className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border-2 transition-all flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold cursor-pointer ${
                            !isAnswerChecked ? 'hover:scale-[1.01] active:scale-[0.99] hover:border-amber-400' : ''
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span
                              style={{
                                backgroundColor: isSelected ? '#F59E0B' : theme.bgSecondary,
                                color: isSelected ? '#1C1917' : theme.textSecondary,
                              }}
                              className="w-7 h-7 rounded-xl text-xs font-black flex items-center justify-center shrink-0 border"
                            >
                              {String.fromCharCode(65 + idx)}
                            </span>
                            <span className="leading-snug">{opt}</span>
                          </div>

                          {isAnswerChecked && isCorrect && (
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                          )}
                          {isAnswerChecked && isSelected && !isCorrect && (
                            <XCircle className="w-5 h-5 text-red-600 shrink-0" />
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* BOTTOM ACTION BAR */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      disabled={currentIndex === 0}
                      onClick={handlePrevParadox}
                      className="px-3 py-2 rounded-xl border text-xs font-bold transition flex items-center gap-1 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                      style={{ borderColor: theme.cardBorder }}
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span className="hidden sm:inline">{tr.prevBtn}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleNextParadox}
                      className="px-3 py-2 rounded-xl border text-xs font-bold transition flex items-center gap-1 cursor-pointer"
                      style={{ borderColor: theme.cardBorder }}
                    >
                      <span className="hidden sm:inline">{tr.nextBtn}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {!isAnswerChecked ? (
                    <button
                      type="button"
                      disabled={selectedOption === null}
                      onClick={() => handleCheckAnswer(false)}
                      style={{
                        backgroundColor: selectedOption !== null ? theme.buttonPrimaryBg : theme.bgSecondary,
                        color: selectedOption !== null ? theme.buttonPrimaryText : theme.textMuted,
                      }}
                      className="px-6 py-3 rounded-2xl font-black text-sm transition shadow-lg flex items-center gap-2 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed active:scale-95 animate-mystic-glow"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>{tr.unveilBtn}</span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        sacredHaptics.mysticFlip();
                        setIsFlipped(true);
                      }}
                      style={{
                        backgroundColor: '#F59E0B',
                        color: '#1C1917',
                      }}
                      className="px-6 py-3 rounded-2xl font-black text-sm transition shadow-lg flex items-center gap-2 cursor-pointer active:scale-95"
                    >
                      <RotateCw className="w-4 h-4" />
                      <span>{tr.flipWisdomBtn}</span>
                    </button>
                  )}
                </div>
              </div>

              {/* ============================================================ */}
              {/* CARD BACK: THE UNVEILED MYSTICAL WISDOM / रहस्योद्घाटन */}
              {/* ============================================================ */}
              <div
                style={{
                  backgroundColor: theme.cardBg,
                  borderColor: theme.accentGold,
                }}
                className={`col-start-1 row-start-1 w-full rounded-3xl border-2 p-5 sm:p-7 shadow-2xl space-y-5 backface-hidden rotate-y-180 animate-mystic-glow overflow-hidden ${
                  !isFlipped ? 'pointer-events-none' : ''
                }`}
              >
                {/* Header of Wisdom Unveiling */}
                <div className="flex items-center justify-between border-b pb-4" style={{ borderColor: theme.cardBorder }}>
                  <div className="flex items-center gap-2.5">
                    <span className="text-3xl">🪷</span>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                        {tr.divineRevelation}
                      </span>
                      <h3 className="text-base sm:text-xl font-black font-serif" style={{ color: theme.sacredMaroon }}>
                        {currentQ.mysticalUnveiling.headline[language]}
                      </h3>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      sacredHaptics.mysticFlip();
                      setIsFlipped(false);
                    }}
                    style={{
                      backgroundColor: theme.bgSecondary,
                      borderColor: theme.cardBorder,
                    }}
                    className="px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1 hover:border-amber-500 transition cursor-pointer shadow-xs"
                  >
                    <RotateCw className="w-3.5 h-3.5 text-amber-500" />
                    <span>{tr.flipBackBtn}</span>
                  </button>
                </div>

                {/* Score & Sacred Bell Resonance Card */}
                <div
                  style={{
                    backgroundColor: selectedOption === currentQ.correctIndex ? 'rgba(34, 197, 94, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                    borderColor: selectedOption === currentQ.correctIndex ? '#22C55E' : '#F59E0B',
                  }}
                  className="p-4 rounded-2xl border flex items-center justify-between gap-3 shadow-inner"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">
                      {selectedOption === currentQ.correctIndex ? '👑' : '💡'}
                    </div>
                    <div>
                      <div className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                        {selectedOption === currentQ.correctIndex ? tr.paradoxSolved : tr.esotericWisdom}
                      </div>
                      <div className="text-sm font-bold" style={{ color: theme.sacredMaroon }}>
                        {selectedOption === currentQ.correctIndex ? `+${currentQ.wisdomPoints} ${tr.wisdomPointsReceived}` : tr.experienceRevelation}
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      try {
                        satyanaamAudio.ringSacredBell();
                      } catch {}
                    }}
                    className="p-2.5 rounded-xl bg-amber-500 text-stone-950 font-bold text-xs flex items-center gap-1.5 hover:opacity-90 transition cursor-pointer shadow-xs"
                    title="Play Sacred Resonance Chime"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span className="hidden sm:inline">{tr.bellSound}</span>
                  </button>
                </div>

                {/* DEEP SPIRITUAL MEANING */}
                <div
                  style={{ backgroundColor: theme.bgSecondary, borderColor: theme.borderOrnament }}
                  className="p-5 rounded-2xl border space-y-2.5"
                >
                  <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                    <BookOpen className="w-4 h-4" />
                    <span>{tr.spiritualMeaningLabel}</span>
                  </div>
                  <p className="text-sm sm:text-base font-serif leading-relaxed" style={{ color: theme.textPrimary }}>
                    {currentQ.mysticalUnveiling.deepMeaning[language]}
                  </p>
                </div>

                {/* SYMBOLS DECODED GRID */}
                <div className="space-y-2">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                    {tr.symbolsDecoded}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {currentQ.symbols.map((sym, sIdx) => (
                      <div
                        key={sIdx}
                        style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder }}
                        className="p-3 rounded-xl border flex items-start gap-2.5 text-xs font-medium"
                      >
                        <span className="text-base shrink-0">{sym.symbol.split(' ')[0]}</span>
                        <div>
                          <strong style={{ color: theme.sacredMaroon }}>{sym.symbol}</strong>
                          <p style={{ color: theme.textSecondary }} className="mt-0.5 leading-tight">
                            {sym.meaning[language]}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* PARAKHI SADHAK INSIGHT */}
                <div
                  style={{
                    backgroundColor: 'rgba(245, 158, 11, 0.08)',
                    borderColor: '#F59E0B',
                  }}
                  className="p-4 rounded-2xl border space-y-1.5"
                >
                  <div className="flex items-center gap-1.5 text-xs font-black text-amber-600 dark:text-amber-400">
                    <Sparkles className="w-4 h-4" />
                    <span>{tr.parakhiNote}</span>
                  </div>
                  <p className="text-xs sm:text-sm italic font-medium leading-relaxed" style={{ color: theme.textPrimary }}>
                    "{currentQ.mysticalUnveiling.parakhiInsight[language]}"
                  </p>
                </div>

                {/* WISDOM CARD ACTIONS */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      sacredHaptics.lightTap();
                      setSelectedOption(null);
                      setIsAnswerChecked(false);
                      setIsFlipped(false);
                      setShuffleSeed((prev) => prev + 1);
                    }}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer hover:bg-black/5"
                    style={{ borderColor: theme.cardBorder }}
                  >
                    <RefreshCcw className="w-3.5 h-3.5" />
                    <span>{tr.practiceAgain}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleNextParadox}
                    style={{
                      backgroundColor: theme.buttonPrimaryBg,
                      color: theme.buttonPrimaryText,
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-2xl font-black text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-95"
                  >
                    <span>{tr.nextBtn}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT 2: PARAKHI SADHAK LEADERBOARD */}
      {activeTab === 'leaderboard' && (
        <div className="p-4 sm:p-6 space-y-6">
          {/* User Sadhana Profile Card */}
          <div
            style={{
              backgroundColor: theme.bgSecondary,
              borderColor: '#F59E0B',
            }}
            className="rounded-3xl border-2 p-5 sm:p-6 space-y-4 shadow-md relative overflow-hidden"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border-2 border-amber-500 flex items-center justify-center text-3xl shadow-inner">
                  {currentRank.badge}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    {isEditingName ? (
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          value={customNameInput}
                          onChange={(e) => setCustomNameInput(e.target.value)}
                          maxLength={30}
                          className="px-2.5 py-1 rounded-lg border text-sm font-bold bg-white dark:bg-stone-900"
                        />
                        <button
                          type="button"
                          onClick={handleSaveName}
                          className="p-1.5 rounded-lg bg-emerald-600 text-white cursor-pointer"
                        >
                          <Check className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <>
                        <h3 className="text-lg font-black font-serif" style={{ color: theme.sacredMaroon }}>
                          {sadhakProfile.name}
                        </h3>
                        <button
                          type="button"
                          onClick={() => setIsEditingName(true)}
                          className="p-1 rounded text-stone-500 hover:text-amber-500 cursor-pointer"
                          title="Edit Seeker Name"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                      </>
                    )}
                  </div>

                  <div className="flex items-center gap-2 mt-0.5">
                    <span
                      style={{ backgroundColor: theme.accentGoldLight, color: theme.sacredMaroon }}
                      className="px-2.5 py-0.5 rounded-full text-xs font-black"
                    >
                      {currentRank.title[language]}
                    </span>
                    <span className="text-xs" style={{ color: theme.textSecondary }}>
                      {sadhakProfile.totalSolved} {tr.bhed} {tr.solved}
                    </span>
                  </div>
                </div>
              </div>

              {/* Profile Metrics Grid */}
              <div className="flex items-center gap-4 text-center">
                <div className="px-3 py-1.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10">
                  <div className="text-xs font-bold text-amber-600">{tr.totalScore}</div>
                  <div className="text-lg font-black">{sadhakProfile.totalScore}</div>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10">
                  <div className="text-xs font-bold text-orange-600">{tr.bestStreak}</div>
                  <div className="text-lg font-black">{sadhakProfile.bestStreak} 🔥</div>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10">
                  <div className="text-xs font-bold text-emerald-600">{tr.accuracy}</div>
                  <div className="text-lg font-black">
                    {sadhakProfile.totalAttempts > 0
                      ? `${Math.round((sadhakProfile.correctAttempts / sadhakProfile.totalAttempts) * 100)}%`
                      : '100%'}
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs italic" style={{ color: theme.textSecondary }}>
              {currentRank.description[language]}
            </p>
          </div>

          {/* LEADERBOARD PODIUM / TABLE */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Crown className="w-5 h-5 text-amber-500" />
                <h3 className="text-base sm:text-lg font-bold font-serif" style={{ color: theme.sacredMaroon }}>
                  {tr.topSeekers}
                </h3>
              </div>

              <button
                type="button"
                onClick={loadLeaderboard}
                className="px-3 py-1 rounded-xl border text-xs font-semibold flex items-center gap-1.5 hover:bg-black/5 cursor-pointer"
                style={{ borderColor: theme.cardBorder }}
              >
                <RefreshCcw className={`w-3.5 h-3.5 ${isLoadingLeaderboard ? 'animate-spin' : ''}`} />
                <span>{language === 'hi' ? 'रीफ्रेश' : language === 'pb' ? 'ਤਾਜ਼ਾ ਕਰੋ' : 'Refresh'}</span>
              </button>
            </div>

            <div className="space-y-2">
              {leaderboardList.map((entry, index) => {
                const isTop3 = index < 3;
                const medalIcon = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `#${index + 1}`;

                return (
                  <div
                    key={entry.id || index}
                    style={{
                      backgroundColor: entry.isCurrentUser ? 'rgba(245, 158, 11, 0.12)' : theme.bgSecondary,
                      borderColor: entry.isCurrentUser ? '#F59E0B' : theme.cardBorder,
                    }}
                    className={`p-3.5 sm:p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                      entry.isCurrentUser ? 'ring-2 ring-amber-500/40' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-xl bg-black/5 dark:bg-white/5 font-black text-sm flex items-center justify-center shrink-0 border">
                        {medalIcon}
                      </span>

                      <div>
                        <div className="flex items-center gap-2">
                          <strong className="text-sm sm:text-base font-bold" style={{ color: theme.sacredMaroon }}>
                            {entry.name}
                          </strong>
                          {entry.isCurrentUser && (
                            <span className="px-2 py-0.5 rounded-md bg-amber-500 text-stone-950 text-[10px] font-black">
                              YOU
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-2 text-xs" style={{ color: theme.textSecondary }}>
                          <span>{entry.badge} {entry.title}</span>
                          <span>•</span>
                          <span>{entry.solvedCount} {tr.bhed} {tr.solved}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-base sm:text-lg font-black text-amber-600 dark:text-amber-400">
                        {entry.score} pts
                      </div>
                      <div className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                        {entry.accuracy}% {tr.accuracy}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: 250 ULATVASI LIBRARY */}
      {activeTab === 'library' && (
        <div className="p-4 sm:p-6 space-y-6">
          <div className="text-center space-y-1">
            <h3 className="text-xl font-black font-serif" style={{ color: theme.sacredMaroon }}>
              {language === 'hi' ? '250 उलटबांसी रहस्य मंजूषा' : language === 'pb' ? '250 ਉਲਟਬਾਂਸੀ ਰਹੱਸ ਮੰਜ਼ੂਸ਼ਾ' : '250 Ulatvasi Sacred Library'}
            </h3>
            <p className="text-xs sm:text-sm" style={{ color: theme.textSecondary }}>
              {language === 'hi' ? 'सतगुरु कबीर साहेब की गुप्त अनुभूतियों का सम्पूर्ण प्रामाणिक संकलन' : language === 'pb' ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀਆਂ ਗੁਪਤ ਅਨੁਭੂਤੀਆਂ ਦਾ ਸੰਪੂਰਨ ਪ੍ਰਮਾਣਿਕ ਸੰਗ੍ਰਹਿ' : 'Complete authentic compilation of Saheb\'s esoteric revelations'}
            </p>
          </div>

          {/* Search & Sub-Realm Filter Bar */}
          <div className="space-y-4">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-600 opacity-50 group-focus-within:opacity-100" />
              <input
                type="text"
                value={librarySearchQuery}
                onChange={(e) => setLibrarySearchQuery(e.target.value)}
                placeholder={language === 'hi' ? 'उलटबांसी खोजें...' : language === 'pb' ? 'ਉਲਟਬਾਂਸੀ ਖੋਜੋ...' : 'Search Ulatvasi...'}
                className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 outline-none focus:ring-2 focus:ring-amber-500 transition-all text-sm font-medium"
                style={{ 
                  backgroundColor: theme.cardBg, 
                  borderColor: theme.cardBorder,
                  color: theme.textPrimary
                }}
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
              {[
                { id: 'all', title: { hi: 'सभी पहेलियाँ', pb: 'ਸਾਰੀਆਂ ਉਲਟਬਾਂਸੀਆਂ', en: 'All Paradoxes' } },
                { id: 'kautuhal', title: { hi: 'कौतूहल (Level 1)', pb: 'ਕੌਤਕ (Level 1)', en: 'Curiosity (Level 1)' } },
                { id: 'antaryog', title: { hi: 'अंतर्योग (Level 2)', pb: 'ਅੰਤਰਯੋਗ (Level 2)', en: 'Yogic (Level 2)' } },
                { id: 'shunya-samadhi', title: { hi: 'शून्य-समाधि (Level 3)', pb: 'ਸੁੰਨ-ਸਮਾਧੀ (Level 3)', en: 'Absolute (Level 3)' } }
              ].map(realm => {
                const isSelected = librarySelectedRealm === realm.id;
                return (
                  <button
                    key={realm.id}
                    type="button"
                    onClick={() => setLibrarySelectedRealm(realm.id)}
                    style={{
                      backgroundColor: isSelected 
                        ? (theme.mode === 'mystic_dark' ? '#D97706' : theme.sacredMaroon) 
                        : (theme.mode === 'mystic_dark' ? '#18130E' : theme.bgSecondary),
                      color: isSelected 
                        ? (theme.mode === 'mystic_dark' ? '#000000' : '#FFFFFF') 
                        : (theme.mode === 'mystic_dark' ? '#FFFDF7' : theme.textPrimary),
                      borderColor: isSelected 
                        ? (theme.mode === 'mystic_dark' ? '#F59E0B' : theme.sacredMaroon) 
                        : (theme.mode === 'mystic_dark' ? 'rgba(253, 230, 138, 0.3)' : theme.cardBorder)
                    }}
                    className={`px-3.5 py-1.5 rounded-full border text-xs font-bold whitespace-nowrap transition cursor-pointer shadow-2xs ${
                      isSelected ? 'font-black ring-1 ring-amber-400/50' : 'hover:opacity-90'
                    }`}
                  >
                    {realm.title[language]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredLibraryItems.map((item) => {
              const dbIndex = ulatvasiPool.findIndex(q => q.id === item.id);
              
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    if (dbIndex !== -1) {
                      setSelectedRealm('all');
                      setCurrentIndex(dbIndex);
                      setActiveTab('paradox-quest');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  style={{ 
                    backgroundColor: theme.cardBg, 
                    borderColor: theme.cardBorder 
                  }}
                  className="p-4 rounded-3xl border shadow-sm hover:shadow-md hover:border-amber-500 transition-all cursor-pointer group relative overflow-hidden flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div 
                        style={{ backgroundColor: theme.accentGoldLight, color: theme.sacredMaroon }}
                        className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs shrink-0 border border-amber-500/20 shadow-inner"
                      >
                        {item.number}
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-[9px] font-black uppercase tracking-widest text-amber-600">
                          {item.realmTitle[language]}
                        </span>
                        <h4 className="text-sm sm:text-base font-bold font-serif leading-tight group-hover:text-amber-700 transition-colors">
                          {item.title[language]}
                        </h4>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm font-serif italic line-clamp-2 opacity-80 pl-1" style={{ color: theme.textSecondary }}>
                      "{item.verse[language]}"
                    </p>
                  </div>

                  <div className="mt-3 pt-3 border-t border-dashed border-amber-500/10 flex items-center justify-between">
                    <span className="text-[10px] font-bold opacity-60">
                      ✨ {item.wisdomPoints} XP
                    </span>
                    <span 
                      style={{ color: theme.sacredMaroon }}
                      className="text-[10px] font-black flex items-center gap-1 group-hover:translate-x-1 transition-transform animate-pulse"
                    >
                      {language === 'hi' ? '3D गेमिंग में खेलें' : language === 'pb' ? '3D ਗੇਮਿੰਗ ਵਿੱਚ ਖੇਡੋ' : 'Play in 3D Mode'}
                      <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredLibraryItems.length === 0 && (
            <div className="text-center py-12 space-y-3">
              <Search className="w-12 h-12 mx-auto opacity-10" />
              <p className="text-sm font-bold opacity-40">
                {language === 'hi' ? 'कोई रहस्य नहीं मिला' : language === 'pb' ? 'ਕੋਈ ਰਹੱਸ ਨਹੀਂ ਮਿਲਿਆ' : 'No paradox found'}
              </p>
            </div>
          )}
        </div>
      )}

      {/* TAB CONTENT 3: SACRED REALMS SELECTOR */}
      {activeTab === 'realms' && (
        <div className="p-4 sm:p-6 space-y-6">
          <div className="text-center space-y-1">
            <h3 className="text-xl font-black font-serif" style={{ color: theme.sacredMaroon }}>
              {language === 'hi' ? 'साधना मंडल एवं ज्ञान सोपान' : language === 'pb' ? 'ਸਾਧਨਾ ਮੰਡਲ ਅਤੇ ਗਿਆਨ ਸੋਪਾਨ' : 'Sadhana Realms & Steps of Wisdom'}
            </h3>
            <p className="text-xs sm:text-sm" style={{ color: theme.textSecondary }}>
              {language === 'hi' ? 'सतगुरु कबीर साहेब की उलटबांसियों के तीन आध्यात्मिक स्तर' : language === 'pb' ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀਆਂ ਉਲਟਬਾਂਸੀਆਂ ਦੇ ਤਿੰਨ ਰੂਹਾਨੀ ਪੱਧਰ' : 'Three spiritual levels of Satguru Kabir Saheb’s Ulatvasi paradoxes'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                id: 'kautuhal' as UlatvasiRealm,
                badge: language === 'hi' ? '🌟 स्तर १' : language === 'pb' ? '🌟 ਪੱਧਰ ੧' : '🌟 Level 1',
                title: language === 'hi' ? 'कौतूहल भेद मंडल' : language === 'pb' ? 'ਕੌਤਕ ਭੇਦ ਮੰਡਲ' : 'Curiosity Realm',
                countLabel: language === 'hi' ? 'पहेलियाँ' : language === 'pb' ? 'ਬੁਝਾਰਤਾਂ' : 'Paradoxes',
                count: ulatvasiPool.filter((q) => q.realm === 'kautuhal').length,
                desc: language === 'hi' 
                  ? 'संसार एवं मन की उलटी चाल का बोध, सिंह द्वारा गाय चराना एवं पानी में प्यासी मछली का रहस्य।'
                  : language === 'pb' 
                  ? 'ਸੰਸਾਰ ਅਤੇ ਮਨ ਦੀ ਉਲਟੀ ਚਾਲ ਦਾ ਬੋਧ, ਸ਼ੇਰ ਦੁਆਰਾ ਗਾਂ ਚਰਾਉਣਾ ਅਤੇ ਪਾਣੀ ਵਿੱਚ ਪਿਆਸੀ ਮੱਛੀ ਦਾ ਰਹੱਸ।'
                  : 'Understanding the reverse nature of mind and world. The lion herds cows and the fish is thirsty in water.',
                enterLabel: language === 'hi' ? 'इस मंडल में प्रवेश करें' : language === 'pb' ? 'ਇਸ ਮੰਡਲ ਵਿੱਚ ਪ੍ਰਵੇਸ਼ ਕਰੋ' : 'Enter this Realm'
              },
              {
                id: 'antaryog' as UlatvasiRealm,
                badge: language === 'hi' ? '💎 स्तर २' : language === 'pb' ? '💎 ਪੱਧਰ ੨' : '💎 Level 2',
                title: language === 'hi' ? 'अंतर्योग व सुरति मंडल' : language === 'pb' ? 'ਅੰਤਰਯੋਗ ਤੇ ਸੁਰਤ ਮੰਡਲ' : 'Inner Yogic Realm',
                countLabel: language === 'hi' ? 'पहेलियाँ' : language === 'pb' ? 'ਬੁਝਾਰਤਾਂ' : 'Paradoxes',
                count: ulatvasiPool.filter((q) => q.realm === 'antaryog').length,
                desc: language === 'hi'
                  ? 'चींटी के पग में घुंघरू, सूक्ष्म अनाहत नाद श्रवण और नैया डूबने पर तिरिया के पार होने का भेद।'
                  : language === 'pb'
                  ? 'ਚੀਂਟੀ ਦੇ ਪੈਰ ਵਿੱਚ ਘੁੰਗਰੂ, ਸੂਖਮ ਅਨਾਹਤ ਨਾਦ ਸੁਣਨਾ ਅਤੇ ਬੇੜੀ ਡੁੱਬਣ ਤੇ ਤੀਵੀਂ ਦੇ ਪਾਰ ਹੋਣ ਦਾ ਭੇਦ।'
                  : 'Anklets on an ant\'s foot, hearing the subtle inner sound, and the boat sinking while crossing over.',
                enterLabel: language === 'hi' ? 'इस मंडल में प्रवेश करें' : language === 'pb' ? 'ਇਸ ਮੰਡਲ ਵਿੱਚ ਪ੍ਰਵੇਸ਼ ਕਰੋ' : 'Enter this Realm'
              },
              {
                id: 'shunya-samadhi' as UlatvasiRealm,
                badge: language === 'hi' ? '👑 स्तर ३' : language === 'pb' ? '👑 ਪੱਧਰ ੩' : '👑 Level 3',
                title: language === 'hi' ? 'शून्य समाधि व परम तत्व' : language === 'pb' ? 'ਸੁੰਨ ਸਮਾਧੀ ਤੇ ਪਰਮ ਤੱਤ' : 'Supreme Void Realm',
                countLabel: language === 'hi' ? 'पहेलियाँ' : language === 'pb' ? 'ਬੁਝਾਰਤਾਂ' : 'Paradoxes',
                count: ulatvasiPool.filter((q) => q.realm === 'shunya-samadhi').length,
                desc: language === 'hi'
                  ? 'गगन मंडल का अमृत कुआं, उल्टा तरुवर और निर्लेप साक्षी आत्मा का कैवल्य साक्षात्कार।'
                  : language === 'pb'
                  ? 'ਗਗਨ ਮੰਡਲ ਦਾ ਅੰਮ੍ਰਿਤ ਖੂਹ, ਉਲਟਾ ਬ੍ਰਿਛ ਅਤੇ ਨਿਰਲੇਪ ਸਾਖੀ ਆਤਮਾ ਦਾ ਕੈਵਲਿਆ ਸਾਖਾਤਕਾਰ।'
                  : 'The nectar well in the sky, the inverted tree, and the pristine witness self realization.',
                enterLabel: language === 'hi' ? 'इस मंडल में प्रवेश करें' : language === 'pb' ? 'ਇਸ ਮੰਡਲ ਵਿੱਚ ਪ੍ਰਵੇਸ਼ ਕਰੋ' : 'Enter this Realm'
              },
            ].map((realm) => (
              <div
                key={realm.id}
                style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder }}
                className="p-5 rounded-3xl border-2 space-y-3 flex flex-col justify-between hover:border-amber-500 transition shadow-sm"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-black/10 dark:bg-white/10">
                      {realm.badge}
                    </span>
                    <span className="text-xs font-bold text-amber-600">
                      {realm.count} {realm.countLabel}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold font-serif" style={{ color: theme.sacredMaroon }}>
                    {realm.title}
                  </h4>
                  <p className="text-xs leading-relaxed" style={{ color: theme.textSecondary }}>
                    {realm.desc}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedRealm(realm.id);
                    setCurrentIndex(0);
                    setActiveTab('paradox-quest');
                  }}
                  style={{
                    backgroundColor: theme.buttonPrimaryBg,
                    color: theme.buttonPrimaryText,
                  }}
                  className="w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer hover:opacity-90 transition shadow-xs"
                >
                  <span>{realm.enterLabel}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT 5: RECALL MODE / काल को अंग आध्यात्मिक स्मरण */}
      {activeTab === 'memory-recall' && (
        <div className="p-4 sm:p-8 space-y-6 animate-fadeIn text-center max-w-4xl mx-auto">
          {/* Sub-mode Switcher */}
          <div className="flex items-center justify-center gap-2 p-1.5 rounded-2xl bg-amber-50/80 dark:bg-stone-900/60 border border-amber-200/50 max-w-md mx-auto">
            <button
              type="button"
              onClick={() => {
                sacredHaptics.lightTap();
                setRecallSubMode('kaal-themes');
              }}
              className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                recallSubMode === 'kaal-themes'
                  ? 'bg-amber-800 text-white shadow-sm'
                  : 'text-stone-700 dark:text-stone-300 hover:bg-amber-100/60'
              }`}
            >
              <Scroll className="w-3.5 h-3.5" />
              <span>{language === 'pb' ? 'ਕਾਲ ਕੋ ਅੰਗ (ਸਮ੍ਰਿਤੀ)' : language === 'en' ? 'Kaal Ko Ang Recall' : 'काल को अंग: थीम संचय'}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                sacredHaptics.lightTap();
                setRecallSubMode('ang-identify');
              }}
              className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                recallSubMode === 'ang-identify'
                  ? 'bg-amber-800 text-white shadow-sm'
                  : 'text-stone-700 dark:text-stone-300 hover:bg-amber-100/60'
              }`}
            >
              <HistoryIcon className="w-3.5 h-3.5" />
              <span>{language === 'pb' ? 'ਅੰਗ ਪਛਾਣ' : language === 'en' ? 'Identify Ang' : 'अंग पहचान'}</span>
            </button>
          </div>

          {/* Stats Bar */}
          <div className="flex items-center justify-center gap-6 py-2 px-4 rounded-2xl bg-white/60 dark:bg-stone-900/40 border border-amber-200/40 w-fit mx-auto text-xs font-bold">
            <div className="flex items-center gap-1.5 text-amber-700 dark:text-amber-300">
              <Trophy className="w-4 h-4 text-amber-600" />
              <span>{language === 'pb' ? 'ਅੰਕ:' : language === 'en' ? 'Score:' : 'स्मृति अंक:'}</span>
              <span className="text-base font-black">{memoryPoints}</span>
            </div>

            {recallSubMode === 'kaal-themes' && (
              <div className="flex items-center gap-1.5 text-rose-600 dark:text-rose-400 border-l pl-4 border-stone-200 dark:border-stone-700">
                <Flame className="w-4 h-4" />
                <span>{language === 'pb' ? 'ਧਾਰਣਾ ਲੜੀ:' : language === 'en' ? 'Retention Streak:' : 'धारणा लड़ी:'}</span>
                <span className="text-base font-black">{kaalRetentionStreak}</span>
              </div>
            )}
          </div>

          {/* SUB-MODE 1: KAAL KO ANG THEME RECALL */}
          {recallSubMode === 'kaal-themes' && (
            <div className="space-y-6">
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-serif font-black bg-rose-500/15 text-rose-900 dark:text-rose-200 border border-rose-500/30">
                  <ShieldCheck className="w-3.5 h-3.5 text-rose-600" />
                  <span>{language === 'pb' ? 'ਕਾਲ ਕੋ ਅੰਗ · ਸ਼ਬਦਕੋਸ਼ ਥੀਮ ਸੁਮੇਲਨ' : language === 'en' ? 'Kaal Ko Ang · Spiritual Retention' : 'काल को अंग · शब्दकोश थीम संचय'}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-black" style={{ color: theme.sacredMaroon }}>
                  {language === 'pb' 
                    ? 'ਸਾਖੀ ਪੜ੍ਹੋ ਅਤੇ ਸ਼ਬਦਕੋਸ਼ ਦੀ ਮੂਲ ਧਾਰਣਾ ਪਛਾਣੋ' 
                    : language === 'en' 
                    ? 'Match the Verse from Kaal Ko Ang to its Core Glossary Theme' 
                    : 'साखी पढ़ें और शब्दकोश की मूल आध्यात्मिक थीम पहचानें'}
                </h3>
                <p className="text-xs sm:text-sm opacity-80 max-w-xl mx-auto leading-relaxed">
                  {language === 'pb'
                    ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੇ \'ਕਾਲ ਕੋ ਅੰਗ\' ਦੇ ਪਾਵਨ ਦੋਹੇ ਪੜ੍ਹ ਕੇ ਗੂੜ੍ਹ ਸੰਧੁੱਕੜੀ ਸ਼ਬਦਾਰਥ ਅਤੇ ਆਤਮਿਕ ਬੋਧ ਨੂੰ ਦ੍ਰਿੜ੍ਹ ਕਰੋ।'
                    : language === 'en'
                    ? 'Strengthen your spiritual retention by correlating authentic verses from Kaal Ko Ang with key concepts in the sacred lexicon.'
                    : 'सतगुरु कबीर साहेब के \'काल को अंग\' के पावन दोहों का स्वाध्याय कर संधुक्कड़ी शब्दकोश के गूढ़ भावों को अंतर्मन में धारण करें।'}
                </p>
              </div>

              {/* Verse Display Card */}
              <div 
                style={{ backgroundColor: theme.cardBg, borderColor: theme.accentGold }}
                className="p-6 sm:p-8 rounded-3xl border-2 shadow-md relative overflow-hidden text-center space-y-4"
              >
                {/* Header */}
                <div className="flex items-center justify-between text-xs font-serif font-bold text-amber-800 dark:text-amber-300 border-b pb-2.5 border-amber-200/40">
                  <span className="flex items-center gap-1.5">
                    <Scroll className="w-4 h-4 text-amber-600" />
                    <span>{language === 'pb' ? `ਸਾਖੀ ਸੰਗ੍ਰਹਿ · ਕਾਲ ਕੋ ਅੰਗ #${currentKaalChallenge.sakhiNumber}` : `साखी संग्रह · काल को अंग #${currentKaalChallenge.sakhiNumber}`}</span>
                  </span>

                  <button
                    type="button"
                    onClick={() => handleReciteKaalVerse(currentKaalChallenge.verseText[language] || currentKaalChallenge.verseText.hi)}
                    className="p-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-300 transition flex items-center gap-1 cursor-pointer"
                    title="साखी पाठ श्रवण करें"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span className="text-[11px] font-sans">{language === 'pb' ? 'ਸੁਣੋ' : language === 'en' ? 'Listen' : 'श्रवण'}</span>
                  </button>
                </div>

                {/* Couplet Lines */}
                <p 
                  style={{ color: theme.textPrimary }}
                  className="text-lg sm:text-2xl font-serif font-black leading-relaxed whitespace-pre-line text-center italic"
                >
                  "{currentKaalChallenge.verseText[language] || currentKaalChallenge.verseText.hi}"
                </p>

                {language === 'en' && currentKaalChallenge.transliteration && (
                  <p className="text-xs text-stone-500 font-sans italic text-center">
                    {currentKaalChallenge.transliteration}
                  </p>
                )}

                {/* Retention Clue */}
                <div className="p-3 rounded-2xl bg-amber-50/70 dark:bg-stone-900/50 border border-amber-200/40 text-xs font-serif text-amber-900 dark:text-amber-200 flex items-start sm:items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5 sm:mt-0" />
                  <span>
                    <strong>{language === 'pb' ? 'ਰਹੱਸ ਸੰਕੇਤ: ' : language === 'en' ? 'Spiritual Clue: ' : 'रहस्य संकेत: '}</strong>
                    {currentKaalChallenge.clue[language] || currentKaalChallenge.clue.hi}
                  </span>
                </div>
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-3xl mx-auto text-left">
                {currentKaalChallenge.options[language].map((opt, idx) => {
                  const isSelected = kaalSelectedChoice === idx;
                  const isCorrectOption = idx === currentKaalChallenge.correctIndex;
                  const isAnswered = kaalAnswerState !== 'idle';

                  let btnBg = theme.cardBg;
                  let btnBorder = theme.cardBorder;
                  let textColor = theme.textPrimary;

                  if (isAnswered) {
                    if (isCorrectOption) {
                      btnBg = '#22C55E';
                      btnBorder = '#16A34A';
                      textColor = '#FFFFFF';
                    } else if (isSelected && !isCorrectOption) {
                      btnBg = '#EF4444';
                      btnBorder = '#DC2626';
                      textColor = '#FFFFFF';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      type="button"
                      disabled={isAnswered}
                      onClick={() => handleKaalChoice(idx)}
                      style={{ 
                        backgroundColor: btnBg, 
                        borderColor: btnBorder,
                        color: textColor
                      }}
                      className="p-4 sm:p-5 rounded-2xl border-2 font-serif font-bold text-sm sm:text-base transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer shadow-xs flex items-center justify-between gap-3 text-left"
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-sans font-black shrink-0 ${
                          isAnswered && (isCorrectOption || isSelected)
                            ? 'bg-white text-stone-900'
                            : 'bg-amber-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300'
                        }`}>
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="leading-snug">{opt}</span>
                      </div>

                      {isAnswered && isCorrectOption && (
                        <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                      )}
                      {isAnswered && isSelected && !isCorrectOption && (
                        <XCircle className="w-5 h-5 text-white shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Feedback & Next Challenge Button */}
              {kaalAnswerState !== 'idle' && (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-4 max-w-2xl mx-auto">
                  <div className={`p-4 rounded-2xl border-2 font-serif text-sm ${
                    kaalAnswerState === 'correct' 
                      ? 'bg-emerald-500/10 border-emerald-500 text-emerald-800 dark:text-emerald-200' 
                      : 'bg-red-500/10 border-red-500 text-red-800 dark:text-red-200'
                  }`}>
                    <div className="font-bold text-base mb-1">
                      {kaalAnswerState === 'correct' 
                        ? (language === 'pb' ? '✓ ਅਦਭੁਤ ਸਮ੍ਰਿਤੀ! ਬਿਲਕੁਲ ਸਹੀ ਉੱਤਰ (+੧੫ ਅੰਕ)' : language === 'en' ? '✓ Splendid Retention! Correct Answer (+15 Points)' : '✓ अद्भुत आध्यात्मिक स्मरण! बिल्कुल सही उत्तर (+15 अंक)')
                        : (language === 'pb' ? '✗ ਇਹ ਉੱਤਰ ਸਹੀ ਨਹੀਂ ਹੈ।' : language === 'en' ? '✗ That is not the matching theme.' : '✗ क्षमा करें, यह उत्तर सही नहीं है।')}
                    </div>
                    <p className="opacity-90 leading-relaxed text-xs sm:text-sm">
                      <strong>{language === 'pb' ? 'ਸੰਧੁੱਕੜੀ ਅਰਥ ਤੇ ਭਾਵਾਰਥ: ' : language === 'en' ? 'Lexicon Exposition: ' : 'संधुक्कड़ी शब्दार्थ व भावार्थ: '}</strong>
                      {currentKaalChallenge.explanation[language] || currentKaalChallenge.explanation.hi}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleNextKaalChallenge}
                    style={{ backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText }}
                    className="px-8 py-3 rounded-2xl font-serif font-black shadow-lg hover:scale-105 transition cursor-pointer flex items-center gap-2 mx-auto"
                  >
                    <RotateCw className="w-4 h-4" />
                    <span>{language === 'pb' ? 'ਅਗਲੀ ਸਾਖੀ ਦਾ ਸਿਮਰਨ ਕਰੋ' : language === 'en' ? 'Next Kaal Verse Challenge' : 'अगली साखी का स्मरण करें'}</span>
                  </button>
                </motion.div>
              )}
            </div>
          )}

          {/* SUB-MODE 2: BROAD ANG RECALL */}
          {recallSubMode === 'ang-identify' && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-serif font-black" style={{ color: theme.sacredMaroon }}>
                  {language === 'hi' ? 'स्मृति संचय: अंग पहचान' : language === 'pb' ? 'ਸਮ੍ਰਿਤੀ ਸੰਚਯ: ਅੰਗ ਪਛਾਣ' : 'Memory Recall: Identify the Ang'}
                </h3>
                <p className="text-sm opacity-80 max-w-lg mx-auto leading-relaxed">
                  {language === 'hi' 
                    ? 'नीचे दी गई साखी को ध्यान से पढ़ें और पहचानें कि यह किस "अंग" से संबंधित है।' 
                    : 'Read the verse below carefully and identify which "Ang" it belongs to.'}
                </p>
              </div>

              <div 
                style={{ backgroundColor: theme.cardBg, borderColor: theme.accentGold }}
                className="p-6 sm:p-10 rounded-3xl border-2 shadow-inner relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none flex items-center justify-center">
                  <HistoryIcon className="w-64 h-64" />
                </div>
                
                <p className="text-xl sm:text-2xl font-serif font-black leading-relaxed relative z-10" style={{ color: theme.textPrimary }}>
                  {memoryVerse?.text}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <button
                  type="button"
                  onClick={() => handleMemoryChoice('ang-14')}
                  disabled={memoryAnswerState !== 'idle'}
                  style={{ 
                    backgroundColor: memoryAnswerState === 'correct' && memoryVerse?.angId === 'ang-14' ? '#22C55E' : 
                                     memoryAnswerState === 'wrong' && memoryVerse?.angId !== 'ang-14' ? '#EF4444' : theme.bgSecondary,
                    borderColor: theme.cardBorder,
                    color: memoryAnswerState !== 'idle' ? '#FFFFFF' : theme.textPrimary
                  }}
                  className="p-5 rounded-2xl border-2 font-black font-serif text-lg transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-sm"
                >
                  {language === 'hi' ? 'प्रेम को अंग' : language === 'pb' ? 'ਪ੍ਰੇਮ ਕੋ ਅੰਗ' : 'Prem ko Ang'}
                </button>

                <button
                  type="button"
                  onClick={() => handleMemoryChoice('ang-15')}
                  disabled={memoryAnswerState !== 'idle'}
                  style={{ 
                    backgroundColor: memoryAnswerState === 'correct' && memoryVerse?.angId === 'ang-15' ? '#22C55E' : 
                                     memoryAnswerState === 'wrong' && memoryVerse?.angId !== 'ang-15' ? '#EF4444' : theme.bgSecondary,
                    borderColor: theme.cardBorder,
                    color: memoryAnswerState !== 'idle' ? '#FFFFFF' : theme.textPrimary
                  }}
                  className="p-5 rounded-2xl border-2 font-black font-serif text-lg transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-sm"
                >
                  {language === 'hi' ? 'चेतावनी को अंग' : language === 'pb' ? 'ਚੇਤਾਵਨੀ ਕੋ ਅੰਗ' : 'Chetawani ko Ang'}
                </button>
              </div>

              {memoryAnswerState !== 'idle' && (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="space-y-4">
                  <div className={`p-4 rounded-2xl border-2 font-bold ${memoryAnswerState === 'correct' ? 'bg-emerald-500/10 border-emerald-500 text-emerald-700' : 'bg-red-500/10 border-red-500 text-red-700'}`}>
                    {memoryAnswerState === 'correct' 
                      ? (language === 'pb' ? '✓ ਅਦਭੁਤ ਸਿਮਰਤੀ! ਬਿਲਕੁਲ ਸਹੀ ਉੱਤਰ।' : language === 'en' ? '✓ Incredible Memory! Correct Answer.' : '✓ अद्भुत स्मृति! बिल्कुल सही उत्तर।') 
                      : (language === 'pb' ? '✗ ਮਾਫ਼ ਕਰਨਾ, ਇਹ ਉੱਤਰ ਸਹੀ ਨਹੀਂ ਹੈ।' : language === 'en' ? '✗ Sorry, that is not correct.' : '✗ क्षमा करें, यह उत्तर सही नहीं है।')}
                  </div>
                  <button
                    type="button"
                    onClick={initMemoryRecall}
                    style={{ backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText }}
                    className="px-8 py-3 rounded-2xl font-black shadow-lg hover:scale-105 transition cursor-pointer flex items-center gap-2 mx-auto"
                  >
                    <RotateCw className="w-5 h-5" />
                    <span>{language === 'pb' ? 'ਅਗਲੀ ਸਾਖੀ ਪਛਾਣੋ' : language === 'en' ? 'Next Verse' : 'अगली साखी पहचानें'}</span>
                  </button>
                </motion.div>
              )}
            </div>
          )}
        </div>
      )}

    </div>
  );
};
