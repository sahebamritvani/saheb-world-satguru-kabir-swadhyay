import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Copy,
  Check,
  Share2,
  RotateCw,
  BookOpen,
  Volume2,
  VolumeX,
  Feather,
  ChevronRight,
} from 'lucide-react';
import { Sakhi, Language, SACRED_BRANDING } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import { STARTER_SAKHIS, loadFullSakhisModule } from '../data/sakhiStarterData';
import { sacredHaptics } from '../services/haptics';
import { speechReciter } from '../services/audioDhun';

interface SacredWisdomWidgetProps {
  language: Language;
  onOpenSwadhyay?: (sakhi?: Sakhi) => void;
  onOpenDiaryWithVerse?: (verseText: string, sakhiNumber?: number) => void;
}

interface CuratedAmritSutra {
  id: string;
  number: number;
  grantha: string;
  categoryTitle: Record<Language, string>;
  text: Record<Language, string>;
  transliteration: string;
  bhavarth: Record<Language, string>;
}

const CURATED_AMRIT_SUTRAS: CuratedAmritSutra[] = [
  {
    id: 'amar-sutra-1',
    number: 1,
    grantha: 'कबीर अमर सूत्र • बीजक सार',
    categoryTitle: {
      hi: 'विवेक एवं आत्म-ज्ञान सूत्र',
      pb: 'ਬਿਬੇਕ ਅਤੇ ਆਤਮ-ਗਿਆਨ ਸੂਤਰ',
      en: 'Discernment & Self-Knowledge Sutra',
    },
    text: {
      hi: 'साधो ऐसा ही गुरु कीजै, घट के पट जो खोलै।\nअनल अचैतन्य पारख देई, अमृत बानी बोलै॥',
      pb: 'ਸਾਧੋ ਐਸਾ ਹੀ ਗੁਰੂ ਕੀਜੈ, ਘਟ ਕੇ ਪਟ ਜੋ ਖੋਲੈ।\nਅਨਲ ਅਚੈਤੰਨ੍ਯ ਪਾਰਖ ਦੇਈ, ਅੰਮ੍ਰਿਤ ਬਾਨੀ ਬੋਲੈ॥',
      en: 'Seek such a Satguru who opens the inner portals of your heart, awakens dormant consciousness, and speaks immortal wisdom.',
    },
    transliteration: 'Sadho aisa hi guru keejai, ghat ke pat jo kholai; Anal achaitanya parakh deyi, amrit bani bolai.',
    bhavarth: {
      hi: 'सच्चे सद्गुरु वही हैं जो बाहरी आडंबर से हटाकर हृदय के अज्ञान के कपाट खोल दें और सुरति को अमर सत्यनाम से जोड़ दें।',
      pb: 'ਸੱਚੇ ਸਤਿਗੁਰੂ ਉਹੀ ਹਨ ਜੋ ਬਾਹਰੀ ਆਡੰਬਰ ਤੋਂ ਹਟਾ ਕੇ ਹਿਰਦੇ ਦੇ ਅਗਿਆਨ ਦੇ ਕਪਾਟ ਖੋਲ੍ਹ ਦਿੰਦੇ ਹਨ ਤੇ ਸੁਰਤ ਨੂੰ ਅਮਰ ਸਤਯਨਾਮ ਨਾਲ ਜੋੜਦੇ ਹਨ।',
      en: 'True Satguru is the one who removes outer delusion, unlocks the heart’s inner door, and unites awareness with eternal Satyanaam.',
    },
  },
  {
    id: 'amar-sutra-2',
    number: 2,
    grantha: 'कबीर अमर सूत्र • वाणी संयम',
    categoryTitle: {
      hi: 'मधुर वाणी एवं समता सूत्र',
      pb: 'ਮਧੁਰ ਬਾਣੀ ਅਤੇ ਸਮਤਾ ਸੂਤਰ',
      en: 'Compassionate Speech & Equanimity',
    },
    text: {
      hi: 'ऐसी बानी बोलिये, मन का आपा खोय।\nऔरन को शीतल करै, आपहुँ शीतल होय॥',
      pb: 'ਐਸੀ ਬਾਨੀ ਬੋਲੀਯੇ, ਮਨ ਕਾ ਆਪਾ ਖੋਯ।\nਔਰਨ ਕੋ ਸ਼ੀਤਲ ਕਰੈ, ਆਪਹੁਂ ਸ਼ੀਤਲ ਹੋਯ॥',
      en: 'Speak words devoid of ego, bringing coolness and peace to listeners as well as to your own soul.',
    },
    transliteration: 'Aisi bani boliye, man ka aapa khoy; Auran ko sheetal karai, aapahun sheetal hoy.',
    bhavarth: {
      hi: 'अहंकार छोड़कर विनम्र और प्रेमपूर्ण वचन बोलने से सामने वाले के हृदय को शांति मिलती है और स्वयं का अंतःकरण भी निर्मल होता है।',
      pb: 'ਹਉਮੈ ਛੱਡ ਕੇ ਨਿਮਰ ਤੇ ਪ੍ਰੇਮ ਭਰੇ ਬਚਨ ਬੋਲਣ ਨਾਲ ਸੁਣਨ ਵਾਲੇ ਨੂੰ ਸ਼ਾਂਤੀ ਮਿਲਦੀ ਹੈ ਅਤੇ ਆਪਣਾ ਮਨ ਵੀ ਨਿਰਮਲ ਹੁੰਦਾ ਹੈ।',
      en: 'Relinquishing pride and speaking gently soothes the hearts of others while purifying your own inner being.',
    },
  },
  {
    id: 'amar-sutra-3',
    number: 3,
    grantha: 'कबीर अमर सूत्र • संतोष धन',
    categoryTitle: {
      hi: 'संतोष एवं तृष्णा विसर्जन',
      pb: 'ਸੰਤੋਖ ਅਤੇ ਤ੍ਰਿਸ਼ਨਾ ਤਿਆਗ',
      en: 'Contentment & Freedom from Craving',
    },
    text: {
      hi: 'गो धन गज धन बाजि धन, और रतन धन खान।\nजब आवै संतोष धन, सब धन धूरि समान॥',
      pb: 'ਗੋ ਧਨ ਗਜ ਧਨ ਬਾਜਿ ਧਨ, ਔਰ ਰਤਨ ਧਨ ਖਾਨ।\nਜਬ ਆਵੈ ਸੰਤੋਖ ਧਨ, ਸਬ ਧਨ ਧੂਰਿ ਸਮਾਨ॥',
      en: 'Though one possess herds, elephants, steeds, and mines of gems—when the wealth of contentment dawns, all else seems dust.',
    },
    transliteration: 'Go dhan gaj dhan baaji dhan, aur ratan dhan khaan; Jab aawai santosh dhan, sab dhan dhoori samaan.',
    bhavarth: {
      hi: 'संसार के समस्त वैभव भीतर की शांति नहीं खरीद सकते। हृदय में संतोष रूपी धन आते ही सारी तृष्णा शांत हो जाती है।',
      pb: 'ਦੁਨੀਆ ਦੇ ਸਾਰੇ ਖ਼ਜ਼ਾਨੇ ਮਨ ਦੀ ਸ਼ਾਂਤੀ ਨਹੀਂ ਖਰੀਦ ਸਕਦੇ। ਹਿਰਦੇ ਵਿੱਚ ਸੰਤੋਖ ਧਨ ਆਉਂਦੇ ਹੀ ਸਾਰੀ ਤ੍ਰਿਸ਼ਨਾ ਮਿਟ ਜਾਂਦੀ ਹੈ।',
      en: 'Worldly riches cannot purchase inner peace; once contentment awakens within, endless cravings vanish like dust.',
    },
  },
  {
    id: 'amar-sutra-4',
    number: 4,
    grantha: 'कबीर अमर सूत्र • पारखी विवेक',
    categoryTitle: {
      hi: 'सार-असार विवेक सूत्र',
      pb: 'ਸਾਰ-ਅਸਾਰ ਬਿਬੇਕ ਸੂਤਰ',
      en: 'Discerning the Essential',
    },
    text: {
      hi: 'साधु ऐसा चाहिये, जैसा सूप सुभाय।\nसार सार को गहि रहै, थोथा देई उड़ाय॥',
      pb: 'ਸਾਧੂ ਐਸਾ ਚਾਹੀਯੇ, ਜੈਸਾ ਸੂਪ ਸੁਭਾਯ।\nਸਾਰ ਸਾਰ ਕੋ ਗਹਿ ਰਹੈ, ਥੋਥਾ ਦੇਈ ਉਡਾਯ॥',
      en: 'A true seeker is like a winnowing fan: retaining the pure grain of truth and blowing away hollow chaff.',
    },
    transliteration: 'Sadhu aisa chahiye, jaisa soop subhay; Saar saar ko gahi rahai, thotha deyi uday.',
    bhavarth: {
      hi: 'विवेकशील साधक सदैव सत्य, गुण और सत्संग का सार ग्रहण करता है तथा व्यर्थ के विवाद, निंदा व भ्रम को त्याग देता है।',
      pb: 'ਬਿਬੇਕੀ ਸਾਧਕ ਹਮੇਸ਼ਾ ਸੱਚ, ਗੁਣ ਅਤੇ ਸਤਿਸੰਗ ਦਾ ਸਾਰ ਗ੍ਰਹਿਣ ਕਰਦਾ ਹੈ ਅਤੇ ਵਿਅਰਥ ਝਗੜੇ ਤੇ ਭਰਮ ਛੱਡ ਦਿੰਦਾ ਹੈ।',
      en: 'A wise aspirant absorbs essential truth and virtues while discarding idle gossip, vanity, and illusion.',
    },
  },
  {
    id: 'amar-sutra-5',
    number: 5,
    grantha: 'कबीर अमर सूत्र • अंतर्दर्शन',
    categoryTitle: {
      hi: 'निज-घट दर्शन सूत्र',
      pb: 'ਨਿਜ-ਘਟ ਦਰਸ਼ਨ ਸੂਤਰ',
      en: 'Seeking Within the Heart',
    },
    text: {
      hi: 'मोको कहाँ ढूंढे रे बन्दे, मैं तो तेरे पास में।\nना तीर्थ में ना मूरत में, ना एकांत निवास में॥',
      pb: 'ਮੋਕੋ ਕਹਾਂ ਢੂੰਢੇ ਰੇ ਬੰਦੇ, ਮੈਂ ਤੋ ਤੇਰੇ ਪਾਸ ਮੇਂ।\nਨਾ ਤੀਰਥ ਮੇਂ ਨਾ ਮੂਰਤ ਮੇਂ, ਨਾ ਏਕਾਂਤ ਨਿਵਾਸ ਮੇਂ॥',
      en: 'Where do you search for Me, O seeker? I dwell right beside you—within the breath of every breath.',
    },
    transliteration: 'Moko kahan dhoondhe re bande, main to tere paas mein; Na teerath mein na moorat mein, na ekaant nivaas mein.',
    bhavarth: {
      hi: 'परमात्मा किसी दूर स्थान में नहीं, प्रत्येक प्राणी की श्वासों में विराजमान हैं। सच्ची खोज बाहर भटकने में नहीं, अंतर्मुखी होने में है।',
      pb: 'ਪਰਮਾਤਮਾ ਕਿਸੇ ਦੂਰ ਥਾਂ ਨਹੀਂ, ਸਗੋਂ ਹਰ ਪ੍ਰਾਣੀ ਦੇ ਸੁਆਸਾਂ ਵਿੱਚ ਵੱਸਦੇ ਹਨ। ਸੱਚੀ ਖੋਜ ਬਾਹਰ ਭਟਕਣ ਵਿੱਚ ਨਹੀਂ, ਅੰਤਰਮੁਖੀ ਹੋਣ ਵਿੱਚ ਹੈ।',
      en: 'The Supreme Lord is not confined to distant shrines; realization blooms through sincere inward awareness and devotion.',
    },
  },
  {
    id: 'amar-sutra-6',
    number: 6,
    grantha: 'कबीर अमर सूत्र • अहंकार विसर्जन',
    categoryTitle: {
      hi: 'नम्रता एवं समर्पण सूत्र',
      pb: 'ਨਿਮਰਤਾ ਅਤੇ ਸਮਰਪਣ ਸੂਤਰ',
      en: 'Humility & Surrender',
    },
    text: {
      hi: 'जब मैं था तब हरि नहीं, अब हरि हैं मैं नाहिं।\nसब अँधियारा मिटि गया, जब दीपक देख्या माहिं॥',
      pb: 'ਜਬ ਮੈਂ ਥਾ ਤਬ ਹਰਿ ਨਹੀਂ, ਅਬ ਹਰਿ ਹੈਂ ਮੈਂ ਨਾਹਿਂ।\nਸਬ ਅੰਧਿਆਰਾ ਮਿਟਿ ਗਯਾ, ਜਬ ਦੀਪਕ ਦੇਖ੍ਯਾ ਮਾਹਿਂ॥',
      en: 'When "I" (ego) existed, the Divine was absent; now Truth abides and "I" is gone. All darkness vanished once the inner lamp was seen.',
    },
    transliteration: 'Jab main tha tab Hari nahin, ab Hari hain main naahin; Sab andhiyara miti gaya, jab deepak dekhya maahin.',
    bhavarth: {
      hi: 'अहंकार और परमात्मा एक साथ नहीं रह सकते। जैसे ही गुरु ज्ञान का दीपक हृदय में जलता है, "मैं-पन" का अज्ञान तुरंत मिट जाता है।',
      pb: 'ਹਉਮੈ ਤੇ ਪਰਮਾਤਮਾ ਇਕੱਠੇ ਨਹੀਂ ਰਹਿ ਸਕਦੇ। ਜਿਵੇਂ ਹੀ ਗੁਰੂ ਗਿਆਨ ਦਾ ਦੀਵਾ ਹਿਰਦੇ ਵਿੱਚ ਜਗਦਾ ਹੈ, "ਮੈਂ-ਪਣ" ਦਾ ਹਨੇਰਾ ਮਿਟ ਜਾਂਦਾ ਹੈ।',
      en: 'Ego and Divine realization cannot coexist; when the inner lamp of Satguru’s wisdom lights up, all darkness dissolves.',
    },
  },
  {
    id: 'amar-sutra-7',
    number: 7,
    grantha: 'कबीर अमर सूत्र • काल जागरूकता',
    categoryTitle: {
      hi: 'तत्काल सत्कर्म सूत्र',
      pb: 'ਤਤਕਾਲ ਸਤਕਰਮ ਸੂਤਰ',
      en: 'Immediacy of Right Action',
    },
    text: {
      hi: 'काल करे सो आज कर, आज करे सो अब।\nपल में परलय होयगी, बहुरि करेगा कब॥',
      pb: 'ਕਾਲ ਕਰੇ ਸੋ ਆਜ ਕਰ, ਆਜ ਕਰੇ ਸੋ ਅਬ।\nਪਲ ਮੇਂ ਪਰਲਯ ਹੋਯਗੀ, ਬਹੁਰਿ ਕਰੇਗਾ ਕਬ॥',
      en: 'Do tomorrow’s noble task today, and today’s right now; in a single fleeting moment the hour turns—when else will you fulfill it?',
    },
    transliteration: 'Kaal kare so aaj kar, aaj kare so ab; Pal mein parlay hoyegi, bahuri karega kab.',
    bhavarth: {
      hi: 'भक्ति, सेवा और शुभ कर्म को कभी कल पर नहीं टालना चाहिए। श्वासों का भरोसा नहीं, इसलिए प्रत्येक क्षण को सत्यनाम व सत्कर्म में सार्थक करें।',
      pb: 'ਭਗਤੀ, ਸੇਵਾ ਤੇ ਚੰਗੇ ਕੰਮ ਕਦੇ ਕੱਲ੍ਹ ਤੇ ਨਾ ਟਾਲੋ। ਸੁਆਸਾਂ ਦਾ ਭਰੋਸਾ ਨਹੀਂ, ਇਸ ਲਈ ਹਰ ਪਲ ਸਤਯਨਾਮ ਤੇ ਸਤਕਰਮ ਵਿੱਚ ਸਾਰਥਕ ਕਰੋ।',
      en: 'Never postpone devotion, kindness, or noble duties; breathe awareness into the present moment before time slips away.',
    },
  },
  {
    id: 'amar-sutra-8',
    number: 8,
    grantha: 'कबीर अमर सूत्र • प्रेम तत्व',
    categoryTitle: {
      hi: 'निर्मल प्रेम एवं करुणा',
      pb: 'ਨਿਰਮਲ ਪ੍ਰੇਮ ਅਤੇ ਦਇਆ',
      en: 'Pure Divine Love',
    },
    text: {
      hi: 'पोथी पढ़ि पढ़ि जग मुआ, पंडित भया न कोय।\nढाई आखर प्रेम का, पढ़े सो पंडित होय॥',
      pb: 'ਪੋਥੀ ਪੜ੍ਹਿ ਪੜ੍ਹਿ ਜਗ ਮੁਆ, ਪੰਡਿਤ ਭਯਾ ਨ ਕੋਯ।\nਢਾਈ ਆਖਰ ਪ੍ਰੇਮ ਕਾ, ਪੜ੍ਹੇ ਸੋ ਪੰਡਿਤ ਹੋਯ॥',
      en: 'Multitudes exhausted life reading volumes yet none grew truly wise; one who understands pure Love alone is a sage.',
    },
    transliteration: 'Pothi padhi padhi jag mua, pandit bhaya na koy; Dhaai aakhar prem ka, padhe so pandit hoy.',
    bhavarth: {
      hi: 'केवल पुस्तकीय पांडित्य से ईश्वर नहीं मिलते। सब जीवों के प्रति निष्कपट प्रेम, दया और समर्पण ही सच्चा ज्ञान है।',
      pb: 'ਕੇਵਲ ਕਿਤਾਬੀ ਗਿਆਨ ਨਾਲ ਪ੍ਰਭੂ ਨਹੀਂ ਮਿਲਦੇ। ਸਾਰੇ ਜੀਵਾਂ ਪ੍ਰਤੀ ਨਿਰਛਲ ਪ੍ਰੇਮ, ਦਇਆ ਤੇ ਸਮਰਪਣ ਹੀ ਅਸਲ ਗਿਆਨ ਹੈ।',
      en: 'Bookish intellect alone cannot realize Truth; sincere love, compassion, and humility reveal supreme wisdom.',
    },
  },
  {
    id: 'amar-sutra-9',
    number: 9,
    grantha: 'कबीर अमर सूत्र • साधु रक्षा',
    categoryTitle: {
      hi: 'निंदा व दोष-दृष्टि त्याग',
      pb: 'ਨਿੰਦਾ ਅਤੇ ਦੋਸ਼-ਦ੍ਰਿਸ਼ਟੀ ਤਿਆਗ',
      en: 'Transforming Inner Vision',
    },
    text: {
      hi: 'बुरा जो देखन मैं चला, बुरा न मिलिया कोय।\nजो दिल खोजा आपना, मुझसा बुरा न कोय॥',
      pb: 'ਬੁਰਾ ਜੋ ਦੇਖਨ ਮੈਂ ਚਲਾ, ਬੁਰਾ ਨ ਮਿਲਿਯਾ ਕੋਯ।\nਜੋ ਦਿਲ ਖੋਜਾ ਆਪਨਾ, ਮੁਝਸਾ ਬੁਰਾ ਨ ਕੋਯ॥',
      en: 'When I went out looking for flaws in others, I found none truly evil; searching my own heart revealed what needed refining.',
    },
    transliteration: 'Bura jo dekhan main chala, bura na miliya koy; Jo dil khoja aapna, mujhsa bura na koy.',
    bhavarth: {
      hi: 'दूसरों में दोष देखने के बजाय स्वयं के मन का निरीक्षण करना आध्यात्मिक प्रगति की पहली सीढ़ी है। आत्म-सुधार ही परम साधना है।',
      pb: 'ਦੂਜਿਆਂ ਦੇ ਔਗੁਣ ਲੱਭਣ ਦੀ ਬਜਾਏ ਆਪਣੇ ਮਨ ਦੀ ਪੜਚੋਲ ਕਰਨਾ ਅਧਿਆਤਮਕ ਤਰੱਕੀ ਦੀ ਪਹਿਲੀ ਪੌੜੀ ਹੈ।',
      en: 'Examining one’s own heart instead of judging others is the authentic doorway to spiritual transformation.',
    },
  },
  {
    id: 'amar-sutra-10',
    number: 10,
    grantha: 'कबीर अमर सूत्र • सद्गुरु विश्वास',
    categoryTitle: {
      hi: 'धीरज एवं परिपक्वता सूत्र',
      pb: 'ਧੀਰਜ ਅਤੇ ਪਰਿਪੱਕਤਾ ਸੂਤਰ',
      en: 'Patience & Steady Faith',
    },
    text: {
      hi: 'धीरे धीरे रे मना, धीरे सब कुछ होय।\nमाली सींचे सौ घड़ा, ऋतु आए फल होय॥',
      pb: 'ਧੀਰੇ ਧੀਰੇ ਰੇ ਮਨਾ, ਧੀਰੇ ਸਬ ਕੁਛ ਹੋਯ।\nਮਾਲੀ ਸੀਂਚੇ ਸੌ ਘੜਾ, ਰਿਤੁ ਆਏ ਫਲ ਹੋਯ॥',
      en: 'Be patient, O mind—all unfolds in its right season. Though a gardener pours a hundred vessels, fruit ripens in due time.',
    },
    transliteration: 'Dheere dheere re mana, dheere sab kuch hoy; Maali seenche sau ghada, ritu aaye phal hoy.',
    bhavarth: {
      hi: 'साधना और जीवन में उतावलापन नहीं, धैर्य व निरंतर अभ्यास आवश्यक है। समय और प्रभु-कृपा आने पर फल अवश्य प्राप्त होता है।',
      pb: 'ਸਾਧਨਾ ਤੇ ਜੀਵਨ ਵਿੱਚ ਕਾਹਲੀ ਨਹੀਂ, ਸਬਰ ਤੇ ਲਗਾਤਾਰ ਅਭਿਆਸ ਲੋੜੀਂਦਾ ਹੈ। ਸਮਾਂ ਆਉਣ ਤੇ ਫ਼ਲ ਜ਼ਰੂਰ ਮਿਲਦਾ ਹੈ।',
      en: 'Spiritual growth requires steady practice and patience rather than haste; grace matures every sincere effort in season.',
    },
  },
];

export const SacredWisdomWidget: React.FC<SacredWisdomWidgetProps> = ({
  language,
  onOpenSwadhyay,
  onOpenDiaryWithVerse,
}) => {
  const { theme } = useAppTheme();
  const [sourceMode, setSourceMode] = useState<'sutra' | 'sakhi'>('sutra');
  const [sutraIdx, setSutraIdx] = useState<number>(() => Math.floor(Math.random() * CURATED_AMRIT_SUTRAS.length));

  const [sakhisList, setSakhisList] = useState<Sakhi[]>(STARTER_SAKHIS);
  // Random Sakhi state
  const [currentSakhi, setCurrentSakhi] = useState<Sakhi>(() => STARTER_SAKHIS[0]);

  const [isCopied, setIsCopied] = useState(false);
  const [shareToast, setShareToast] = useState<string | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);

  useEffect(() => {
    let active = true;
    loadFullSakhisModule()
      .then((mod) => {
        if (!active || !mod.sakhisDatabase?.length) return;
        setSakhisList(mod.sakhisDatabase);
        const randomIndex = Math.floor(Math.random() * mod.sakhisDatabase.length);
        setCurrentSakhi(mod.sakhisDatabase[randomIndex] || mod.sakhisDatabase[0]);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    speechReciter.stop();
    setIsPlayingAudio(false);
  }, [language]);

  useEffect(() => {
    return () => {
      speechReciter.stop();
    };
  }, []);

  const activeEntry = useMemo(() => {
    if (sourceMode === 'sutra') {
      const s = CURATED_AMRIT_SUTRAS[sutraIdx % CURATED_AMRIT_SUTRAS.length] || CURATED_AMRIT_SUTRAS[0];
      return {
        id: s.id,
        number: s.number,
        grantha: s.grantha,
        categoryLabel: s.categoryTitle[language] || s.categoryTitle.hi,
        verse: s.text[language] || s.text.hi,
        transliteration: s.transliteration,
        bhavarth: s.bhavarth[language] || s.bhavarth.hi,
        isSutra: true,
        rawSakhi: undefined as Sakhi | undefined,
      };
    }
    return {
      id: currentSakhi.id,
      number: currentSakhi.number,
      grantha: currentSakhi.grantha,
      categoryLabel: currentSakhi.categoryTitle[language] || currentSakhi.categoryTitle.hi,
      verse: currentSakhi.text[language] || currentSakhi.text.hi,
      transliteration: currentSakhi.transliteration,
      bhavarth: currentSakhi.bhavarth[language] || currentSakhi.bhavarth.hi,
      isSutra: false,
      rawSakhi: currentSakhi,
    };
  }, [sourceMode, sutraIdx, currentSakhi, language]);

  const handleShuffle = () => {
    sacredHaptics.lightTap();
    setIsShuffling(true);
    speechReciter.stop();
    setIsPlayingAudio(false);

    setTimeout(() => {
      if (sourceMode === 'sutra') {
        setSutraIdx((prev) => (prev + 1) % CURATED_AMRIT_SUTRAS.length);
      } else {
        let randomIndex = Math.floor(Math.random() * sakhisList.length);
        if (sakhisList[randomIndex]?.id === currentSakhi.id && sakhisList.length > 1) {
          randomIndex = (randomIndex + 1) % sakhisList.length;
        }
        setCurrentSakhi(sakhisList[randomIndex] || sakhisList[0]);
      }
      setIsShuffling(false);
    }, 180);
  };

  const getFormattedVerseText = () => {
    const header = SACRED_BRANDING.header[language];
    const footer = SACRED_BRANDING.footer[language];
    const tag = activeEntry.isSutra ? `अमर सूत्र #${activeEntry.number}` : `साखी #${activeEntry.number}`;

    return (
      `।। ${header} ।।\n\n` +
      `📜 ${tag} (${activeEntry.categoryLabel})\n\n` +
      `"${activeEntry.verse}"\n\n` +
      `💡 भावार्थ: ${activeEntry.bhavarth}\n\n` +
      `।। ${footer} ।।\n` +
      `📱 Saheb World App`
    );
  };

  const handleCopyToClipboard = async () => {
    sacredHaptics.lightTap();
    const textToCopy = getFormattedVerseText();

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }

      setIsCopied(true);
      sacredHaptics.successVibration();
      setTimeout(() => setIsCopied(false), 2500);
    } catch (err) {
      console.warn('Clipboard copy error:', err);
    }
  };

  const handleShare = async () => {
    sacredHaptics.lightTap();
    const textToShare = getFormattedVerseText();
    const shareTitle =
      language === 'pb'
        ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਪਾਵਨ ਬਿਬੇਕ ਤੇ ਅਮਰ ਸੂਤਰ - ਸਾਹੇਬ ਵਰਲਡ'
        : language === 'en'
        ? 'Satguru Kabir Saheb Sacred Wisdom - Saheb World'
        : 'सतगुरु कबीर साहेब पावन विवेक एवं अमर सूत्र - साहेब वर्ल्ड';

    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: textToShare,
          url: window.location.origin,
        });
        sacredHaptics.successVibration();
      } catch (err: any) {
        if (err.name !== 'AbortError') {
          handleCopyToClipboard();
        }
      }
    } else {
      handleCopyToClipboard();
      setShareToast(
        language === 'pb'
          ? 'ਟੈਕਸਟ ਕਾਪੀ ਹੋ ਗਿਆ ਹੈ, ਤੁਸੀਂ ਸੋਸ਼ਲ ਮੀਡੀਆ ਤੇ ਸਾਂਝਾ ਕਰ ਸਕਦੇ ਹੋ।'
          : language === 'en'
          ? 'Verse copied to clipboard! Ready to share.'
          : 'सूत्र कॉपी हो गया है, आप इसे किसी भी सोशल मीडिया पर शेयर कर सकते हैं।'
      );
      setTimeout(() => setShareToast(null), 3000);
    }
  };

  const handleToggleAudio = () => {
    sacredHaptics.lightTap();
    if (isPlayingAudio) {
      speechReciter.stop();
      setIsPlayingAudio(false);
    } else {
      setIsPlayingAudio(true);
      speechReciter.speak(activeEntry.verse, language, () => {
        setIsPlayingAudio(false);
      });
    }
  };

  const handleReflectInJournal = () => {
    sacredHaptics.lightTap();
    if (onOpenDiaryWithVerse) {
      onOpenDiaryWithVerse(activeEntry.verse, activeEntry.number);
    }
  };

  return (
    <motion.div
      id="sacred-wisdom-widget"
      initial={{ opacity: 0, y: 22, scale: 0.99 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        backgroundColor: theme.cardBg,
        borderColor: theme.accentGold,
        color: theme.textPrimary,
      }}
      className="rounded-3xl border-2 p-5 sm:p-7 shadow-xl space-y-4 relative overflow-hidden transition-all group"
    >
      {/* Decorative Subtle Background Aura */}
      <div
        className="absolute -right-12 -top-12 w-40 h-40 rounded-full blur-2xl opacity-15 pointer-events-none"
        style={{ backgroundColor: theme.accentGold }}
      />
      <div
        className="absolute -left-12 -bottom-12 w-40 h-40 rounded-full blur-2xl opacity-10 pointer-events-none"
        style={{ backgroundColor: theme.sacredMaroon }}
      />

      {/* Widget Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b pb-3.5" style={{ borderColor: theme.cardBorder }}>
        <div className="flex items-center gap-2.5">
          <div
            style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.accentGold }}
            className="w-10 h-10 rounded-2xl border flex items-center justify-center text-amber-600 shadow-2xs shrink-0"
          >
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-serif font-black text-base sm:text-lg" style={{ color: theme.sacredMaroon }}>
                {language === 'pb' ? 'ਪਾਵਨ ਬਿਬੇਕ ਤੇ ਅਮਰ ਸੂਤਰ' : language === 'en' ? 'Sacred Wisdom & Sutras' : 'पावन विवेक एवं अमर सूत्र'}
              </h3>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/30">
                {activeEntry.isSutra ? `सूत्र ${activeEntry.number}/${CURATED_AMRIT_SUTRAS.length}` : `#${activeEntry.number}`}
              </span>
            </div>
            <p className="text-[11px] opacity-75 font-serif line-clamp-1" style={{ color: theme.textSecondary }}>
              {activeEntry.categoryLabel} • {activeEntry.grantha}
            </p>
          </div>
        </div>

        {/* Action Controls Toolbar */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            type="button"
            onClick={handleToggleAudio}
            style={{
              backgroundColor: isPlayingAudio ? theme.buttonPrimaryBg : theme.bgSecondary,
              borderColor: isPlayingAudio ? theme.accentGold : theme.cardBorder,
              color: isPlayingAudio ? theme.buttonPrimaryText : theme.textPrimary,
            }}
            className="p-2 sm:px-2.5 sm:py-2 rounded-xl border text-xs font-bold transition hover:scale-105 active:scale-95 cursor-pointer shadow-2xs flex items-center gap-1.5"
            title={isPlayingAudio ? 'Stop Audio' : 'Listen Verse'}
          >
            {isPlayingAudio ? (
              <>
                <VolumeX className="w-4 h-4 animate-pulse" />
                <span className="text-[11px] hidden sm:inline">{language === 'pb' ? 'ਰੋਕੋ' : language === 'en' ? 'Stop' : 'रोकें'}</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4" style={{ color: theme.accentGold }} />
                <span className="text-[11px] hidden sm:inline">{language === 'pb' ? 'ਸੁਣੋ' : language === 'en' ? 'Listen' : 'सुनें'}</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleShuffle}
            disabled={isShuffling}
            style={{
              backgroundColor: theme.bgSecondary,
              borderColor: theme.cardBorder,
              color: theme.sacredMaroon,
            }}
            className="p-2 sm:px-2.5 sm:py-2 rounded-xl border text-xs font-bold transition hover:scale-105 active:scale-95 cursor-pointer shadow-2xs flex items-center gap-1.5 disabled:opacity-50"
            title={language === 'pb' ? 'ਅਗਲਾ ਸੂਤਰ' : language === 'en' ? 'Next Sutra' : 'अगला सूत्र'}
          >
            <RotateCw className={`w-4 h-4 text-amber-600 ${isShuffling ? 'animate-spin' : ''}`} />
            <span className="text-[11px] hidden sm:inline">{language === 'pb' ? 'ਅਗਲਾ' : language === 'en' ? 'Next' : 'अगला सूत्र'}</span>
          </button>

          <button
            type="button"
            onClick={handleCopyToClipboard}
            style={{
              backgroundColor: isCopied ? '#10B981' : theme.bgSecondary,
              borderColor: isCopied ? '#10B981' : theme.cardBorder,
              color: isCopied ? '#FFFFFF' : theme.textPrimary,
            }}
            className="p-2 sm:px-3 sm:py-2 rounded-xl border text-xs font-bold transition hover:scale-105 active:scale-95 cursor-pointer shadow-2xs flex items-center gap-1.5"
            title={language === 'pb' ? 'ਕਾਪੀ ਕਰੋ' : language === 'en' ? 'Copy to Clipboard' : 'कॉपी करें'}
          >
            {isCopied ? (
              <>
                <Check className="w-4 h-4" />
                <span className="text-[11px]">{language === 'pb' ? 'ਕਾਪੀ ਹੋ ਗਿਆ' : language === 'en' ? 'Copied' : 'कॉपी हुआ'}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-amber-600" />
                <span className="text-[11px] hidden sm:inline">{language === 'pb' ? 'ਕਾਪੀ' : language === 'en' ? 'Copy' : 'कॉपी'}</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleShare}
            style={{
              backgroundColor: theme.buttonPrimaryBg,
              color: theme.buttonPrimaryText,
              borderColor: theme.accentGold,
            }}
            className="p-2 sm:px-3.5 sm:py-2 rounded-xl border text-xs font-bold transition hover:scale-105 active:scale-95 cursor-pointer shadow-md flex items-center gap-1.5"
            title={language === 'pb' ? 'ਸੋਸ਼ਲ ਮੀਡੀਆ ਤੇ ਸਾਂਝਾ ਕਰੋ' : language === 'en' ? 'Share Verse' : 'सोशल मीडिया पर शेयर करें'}
          >
            <Share2 className="w-4 h-4" />
            <span className="text-[11px]">{language === 'pb' ? 'ਸ਼ੇਅਰ' : language === 'en' ? 'Share' : 'शेयर'}</span>
          </button>
        </div>
      </div>

      {/* Curated Mode & Quick Sutra Picker Strip */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="inline-flex items-center p-1 rounded-xl border text-[11px] font-bold" style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder }}>
          <button
            type="button"
            onClick={() => {
              sacredHaptics.lightTap();
              setSourceMode('sutra');
            }}
            className={`px-2.5 py-1 rounded-lg transition cursor-pointer ${
              sourceMode === 'sutra' ? 'bg-[#8B2500] text-white shadow-xs' : 'opacity-80 hover:opacity-100'
            }`}
          >
            {language === 'pb' ? '✨ ਅਮਰ ਸੂਤਰ (10)' : language === 'en' ? '✨ Amrit Sutras (10)' : '✨ अमर सूत्र संग्रह (10)'}
          </button>
          <button
            type="button"
            onClick={() => {
              sacredHaptics.lightTap();
              setSourceMode('sakhi');
            }}
            className={`px-2.5 py-1 rounded-lg transition cursor-pointer ${
              sourceMode === 'sakhi' ? 'bg-[#8B2500] text-white shadow-xs' : 'opacity-80 hover:opacity-100'
            }`}
          >
            {language === 'pb' ? `📜 ਸਾਖੀ ਬਿਬੇਕ (${sakhisList.length}+)` : language === 'en' ? `📜 Sakhi Wisdom (${sakhisList.length}+)` : `📜 साखी विवेक (${sakhisList.length}+)`}
          </button>
        </div>

        {sourceMode === 'sutra' && (
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar max-w-full">
            {CURATED_AMRIT_SUTRAS.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                onClick={() => {
                  sacredHaptics.lightTap();
                  setSutraIdx(idx);
                }}
                className={`w-6 h-6 rounded-lg text-[10px] font-bold transition cursor-pointer shrink-0 border ${
                  sutraIdx % CURATED_AMRIT_SUTRAS.length === idx
                    ? 'bg-[#8B2500] text-white border-[#7C1D00] shadow-xs'
                    : 'bg-amber-500/10 text-amber-900 dark:text-amber-200 border-amber-500/20 hover:bg-amber-500/20'
                }`}
                title={s.categoryTitle[language] || s.categoryTitle.hi}
              >
                {s.number}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main Verse Content Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${sourceMode}-${activeEntry.id}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          style={{ backgroundColor: theme.bgSecondary, borderColor: theme.borderOrnament }}
          className="rounded-2xl border p-4 sm:p-6 space-y-3.5 text-center relative"
        >
          <span
            style={{ color: theme.accentGold }}
            className="text-[11px] uppercase tracking-widest font-black block font-serif"
          >
            {language === 'pb' ? '।। ਸਤਿਗੁਰੂ ਕਬੀਰ ਬਚਨਾਮ੍ਰਿਤ ।।' : language === 'en' ? '।। Satguru Kabir Sacred Word ।।' : '।। सतगुरु कबीर वचनामृत ।।'}
          </span>

          <p
            style={{ color: theme.sacredMaroon }}
            className="font-serif font-black text-base sm:text-xl md:text-2xl leading-relaxed whitespace-pre-line tracking-wide"
          >
            {activeEntry.verse}
          </p>

          {activeEntry.transliteration && (
            <p className="text-xs sm:text-sm italic opacity-75 max-w-xl mx-auto font-sans">
              {activeEntry.transliteration}
            </p>
          )}

          <div
            style={{ borderColor: theme.cardBorder }}
            className="pt-3 mt-3 border-t text-left"
          >
            <div className="flex items-start gap-2">
              <span className="text-xs font-black text-amber-600 shrink-0 mt-0.5">
                {language === 'pb' ? 'ਭਾਵਾਰਥ:' : language === 'en' ? 'Meaning:' : 'भावार्थ:'}
              </span>
              <p className="text-xs sm:text-sm leading-relaxed opacity-90 font-serif" style={{ color: theme.textSecondary }}>
                {activeEntry.bhavarth}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Quick Journaling & Contemplation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-1 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="opacity-75 font-serif" style={{ color: theme.textSecondary }}>
            {language === 'pb'
              ? 'ਰੋਜ਼ਾਨਾ ਅੰਮ੍ਰਿਤ ਵਚਨਾਂ ਦਾ ਮਨਨ ਕਰੋ'
              : language === 'en'
              ? 'Contemplate sacred wisdom daily'
              : 'दैनिक पावन वचनों का आत्म-मनन करें'}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {onOpenDiaryWithVerse && (
            <button
              type="button"
              onClick={handleReflectInJournal}
              style={{ color: theme.accentGold }}
              className="font-bold flex items-center gap-1.5 hover:underline cursor-pointer"
            >
              <Feather className="w-3.5 h-3.5" />
              <span>{language === 'pb' ? 'ਡਾਇਰੀ ਵਿੱਚ ਦਰਜ ਕਰੋ' : language === 'en' ? 'Reflect in Journal' : 'जर्नल / डायरी में चिंतन लिखें'}</span>
            </button>
          )}

          {onOpenSwadhyay && (
            <button
              type="button"
              onClick={() => onOpenSwadhyay(activeEntry.rawSakhi)}
              style={{
                backgroundColor: theme.stepActiveBg,
                borderColor: theme.accentGold,
                color: theme.sacredMaroon,
              }}
              className="px-3 py-1 rounded-xl border font-bold flex items-center gap-1 hover:scale-105 transition cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-600" />
              <span>{language === 'pb' ? 'ਸਵਾਧਿਆਏ' : language === 'en' ? 'Swadhyay' : 'स्वाध्याय'}</span>
              <ChevronRight className="w-3 h-3 opacity-70" />
            </button>
          )}
        </div>
      </div>

      {shareToast && (
        <div
          style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.accentGold, color: theme.sacredMaroon }}
          className="p-2.5 rounded-xl border text-center text-xs font-bold animate-fadeIn shadow-md"
        >
          {shareToast}
        </div>
      )}
    </motion.div>
  );
};
