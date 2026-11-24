import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Scroll, 
  BookOpen, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Heart, 
  Bookmark, 
  CheckCircle2, 
  Share2, 
  Search, 
  Crown,
  Sun,
  Flame,
  Feather,
  Copy,
  Check
} from 'lucide-react';
import { Language } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import { sacredHaptics } from '../services/haptics';

interface SacredLeelasProps {
  language: Language;
  onClose?: () => void;
  onOpenBlessing?: (title?: string, msg?: string) => void;
  onOpenSwadhyay?: (sakhiText?: string) => void;
  onSelectLanguage?: (lang: Language) => void;
}

interface LeelaEpisode {
  id: string;
  number: number;
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
  location: {
    pb: string;
    hi: string;
    en: string;
  };
  story: {
    pb: string[];
    hi: string[];
    en: string[];
  };
  spiritualEssence: {
    pb: string;
    hi: string;
    en: string;
  };
  keySakhi: {
    pb: string;
    hi: string;
    en?: string;
    source: {
      pb: string;
      hi: string;
      en: string;
    } | string;
  };
}

const LEELAS_DATABASE: LeelaEpisode[] = [
  {
    id: 'satya-yuga-sat-sukrit',
    number: 1,
    title: {
      pb: 'ਸਤਿਯੁਗ ਵਿੱਚ ਸਤਸੁਕ੍ਰਿਤ ਅਵਤਾਰ ਪਰਿਚਯ',
      hi: 'सत्ययुग में सतसुकृत अवतार परिचय',
      en: 'Sat Yuga: Descent of Sat Sukrit Avatar'
    },
    subtitle: {
      pb: 'ਚਾਰੋਂ ਜੁਗਾਂ ਵਿੱਚ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦਾ ਪ੍ਰਗਟਾਵ ਅਤੇ ਸਤਯ ਦਾ ਉਪਦੇਸ਼',
      hi: 'चारों युगों में सतगुरु कबीर साहेब का प्राकट्य और सत्य का पावन संदेश',
      en: 'The eternal manifestation across four cosmic epochs and the pristine voice of Truth'
    },
    location: {
      pb: 'ਸਤਯੁਗ (ਪਰਮ ਧਾਮ / ਅਮਰਲੋਕ ਤੋਂ ਪ੍ਰਗਟ)',
      hi: 'सत्ययुग (अमरलोक से दिव्य प्राकट्य)',
      en: 'Satya Yuga (Divine Manifestation from Amaralok)'
    },
    story: {
      pb: [
        'ਸਤਯੁਗ ਵਿੱਚ ਜਦੋਂ ਧਰਤੀ \'ਤੇ ਸ੍ਰਿਸ਼ਟੀ ਦੀ ਆਦਿ ਸਥਾਪਨਾ ਸੀ, ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਨੇ \'ਸਤਸੁਕ੍ਰਿਤ\' ਨਾਮਕ ਪ੍ਰਭਾਵਸ਼ਾਲੀ ਅਵਤਾਰ ਧਾਰਨ ਕੀਤਾ। ਇਸ ਯੁਗ ਵਿੱਚ ਜੀਵਾਂ ਦਾ ਮਨ ਬਹੁਤ ਨਿਰਮਲ ਸੀ ਅਤੇ ਸਾਰੇ ਜੀਵ ਪਰਮਾਤਮਾ ਦੀ ਭਗਤੀ ਵਿੱਚ ਲੀਨ ਸਨ।',
        'ਸਤਸੁਕ੍ਰਿਤ ਸਰੂਪ ਵਿੱਚ ਸਤਿਗੁਰੂ ਨੇ ਰਿਸ਼ੀਆਂ, ਮੁਨੀਆਂ ਅਤੇ ਦੇਵਤਿਆਂ ਨੂੰ ਅਮਰਲੋਕ ਦਾ ਭੇਦ ਸਮਝਾਇਆ ਅਤੇ ਸਿਖਾਇਆ ਕਿ ਕੇਵਲ ਸਤਯਨਾਮ ਦੇ ਸਿਮਰਨ ਨਾਲ ਹੀ ਜੀਵ ਕਾਲ ਦੇ ਬੰਧਨਾਂ ਤੋਂ ਮੁਕਤ ਹੋ ਸਕਦਾ ਹੈ।'
      ],
      hi: [
        'सत्ययुग में जब सृष्टि का आदिकाल था, सतगुरु कबीर साहेब ने \'सतसुकृत\' नाम से दिव्य अवतार धारण किया। इस युग में प्राणियों की बुद्धि अत्यंत सात्विक और निर्मल थी।',
        'सतसुकृत स्वरूप में सतगुरु ने ऋषियों-मुनियों को अमरलोक का परम रहस्य समझाया और यह चेतना दी कि काल और कर्म के चक्र से छूटने का एकमात्र मार्ग केवल सत्यनाम की आराधना है।'
      ],
      en: [
        'In Satya Yuga, at the dawn of creation, Satguru Kabir manifested as "Sat Sukrit," guiding early souls with pure spiritual wisdom from Amaralok.',
        'In this golden epoch, the Satguru instructed sages and seekers in the inner science of Surat-Shabda Yoga and the supreme worship of the eternal Supreme Lord.'
      ]
    },
    spiritualEssence: {
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਹਰ ਯੁਗ ਵਿੱਚ ਆਪਣੇ ਨਿਜਧਾਮ ਅਮਰਲੋਕ ਤੋਂ ਪ੍ਰਗਟ ਹੋ ਕੇ ਜੀਵਾਂ ਦਾ ਉਧਾਰ ਕਰਦੇ ਹਨ।',
      hi: 'सतगुरु कबीर साहेब हर युग में अपने निजधाम अमरलोक से प्रकट होकर जीवों का कल्याण करते हैं।',
      en: 'The Satguru manifests in every cosmic epoch from his eternal abode to redeem souls.'
    },
    keySakhi: {
      pb: 'ਸਤਯੁਗ ਸਤਸੁਕ੍ਰਿਤ ਕਹਾਇਆ, ਤ੍ਰੇਤਾ ਮੁਨੀਂਦਰ ਨਾਮ ਧਰਾਇਆ।\nਦ੍ਵਾਪਰ ਮੈਂ ਕਰੁਣਾਮਯ ਕਹਾਯਾ, ਕਲਯੁਗ ਕਬੀਰ ਨਾਮ ਧਰਾਯਾ ॥',
      hi: 'सत्ययुग सतसुकृत कहाया, त्रेता मुनीन्द्र नाम धराया ।\nद्वापर मैं करुणामय कहाया, कलियुग कबीर नाम धराया ॥',
      en: 'In Satya Yuga He was named Satsukrit, in Treta He was called Munindra.\nIn Dvapara He was known as Karunamay, and in Kali Yuga He took the name Kabir.',
      source: {
        hi: 'कबीर सागर · बोध सागर',
        pb: 'ਕਬੀਰ ਸਾਗਰ · ਬੋਧ ਸਾਗਰ',
        en: 'Kabir Sagar · Bodh Sagar'
      }
    }
  },
  {
    id: 'treta-yuga-munindra',
    number: 2,
    title: {
      pb: 'ਤ੍ਰੇਤਾਯੁਗ ਵਿੱਚ ਮੁਨੀਂਦਰ ਅਵਤਾਰ ਪਰਿਚਯ',
      hi: 'त्रेतायुग में मुनीन्द्र अवतार परिचय',
      en: 'Treta Yuga: Descent of Munindra Avatar'
    },
    subtitle: {
      pb: 'ਮਹਰਿਸ਼ੀ ਵਾਲਮੀਕਿ ਜੀ ਨੂੰ ਰਮਾਇਣ ਦਾ ਗਿਆਨ ਅਤੇ ਮੁਕਤੀ ਦਾ ਮਾਰਗ ਪ੍ਰਦਾਨ ਕਰਨਾ',
      hi: 'महर्षि वाल्मीकि को रामायण का दिव्य ज्ञान और मुक्ति का मार्ग प्रदान करना',
      en: 'Guiding Maharshi Valmiki and revealing the inner esoteric wisdom of Ramayana'
    },
    location: {
      pb: 'ਤ੍ਰੇਤਾਯੁਗ (ਤਪੋਵਣ ਅਤੇ ਰਤਨਾਕਰ ਦੀ ਕੁਟੀਆ)',
      hi: 'त्रेतायुग (तपोवन एवं वाल्मीकि आश्रम)',
      en: 'Treta Yuga (Sacred Hermitage & Taponovan)'
    },
    story: {
      pb: [
        'ਤ੍ਰੇਤਾਯੁਗ ਵਿੱਚ ਸਤਿਗੁਰੂ ਜੀ ਨੇ \'ਮੁਨੀਂਦਰ\' ਨਾਮ ਨਾਲ ਅਵਤਾਰ ਧਾਰਿਆ। ਇਸ ਯੁਗ ਵਿੱਚ ਰਤਨਾਕਰ ਡਾਕੂ (ਜੋ ਬਾਅਦ ਵਿੱਚ ਮਹਰਿਸ਼ੀ ਵਾਲਮੀਕਿ ਬਣੇ) ਪਾਪਾਂ ਦੇ ਕਰਮਾਂ ਵਿੱਚ ਫਸਿਆ ਹੋਇਆ ਸੀ।',
        'ਮੁਨੀਂਦਰ ਰੂਪ ਵਿੱਚ ਸਤਿਗੁਰੂ ਜੀ ਨੇ ਰਤਨਾਕਰ ਨੂੰ ਪਰਮ ਅਧਿਆਤਮਕ ਪ੍ਰਸ਼ਨ ਪੁੱਛੇ ਜਿਸ ਨਾਲ ਉਨ੍ਹਾਂ ਦਾ ਜੀਵਨ ਬਦਲ ਗਿਆ ਅਤੇ ਰਾਮਾਇਣ ਰਚਣ ਦੀ ਪ੍ਰੇਰਣਾ ਮਿਲੀ।'
      ],
      hi: [
        'त्रेतायुग में सतगुरु कबीर साहेब ने \'मुनीन्द्र\' नाम से अवतार लिया। इस काल में रत्नाकर डाकू पापकर्मों में लिप्त था।',
        'मुनीन्द्र रूप में सतगुरु ने उसे दिव्य बोध कराया जिससे रत्नाकर महर्षि वाल्मीकि बने और रामायण महाकाव्य की रचना की।'
      ],
      en: [
        'In Treta Yuga, Satguru incarnated as "Munindra" and transformed Ratnakar the highwayman into Maharshi Valmiki, inspiring the epic Ramayana.'
      ]
    },
    spiritualEssence: {
      pb: 'ਕੋਈ ਵੀ ਜੀਵ ਆਪਣੇ ਕਰਮਾਂ ਵਿੱਚ ਅਕਾਲ ਬੰਧਨ ਤੋਂ ਮੁਕਤ ਨਹੀਂ ਹੋ ਸਕਦਾ ਜਦੋਂ ਤੱਕ ਉਹ ਸਤਿਗੁਰੂ ਦੀ ਸ਼ਰਨ ਨਾ ਲਵੇ।',
      hi: 'कोई भी प्राणी अपने कर्म-फलों से तब तक मुक्त नहीं हो सकता जब तक वह सद्गुरु के चरणों में शरण न ले।',
      en: 'No soul can transcend karma without taking refuge at the lotus feet of the Satguru.'
    },
    keySakhi: {
      pb: 'मुनीन्द्र रूप त्रेता महिं आया, वाल्मीकि को ब्रह्म ज्ञान कराया।\nराम कथा का मर्म बताया, हरि पद प्रगट लक्ष लखाया ॥',
      hi: 'मुनीन्द्र रूप त्रेता महिं, वाल्मीकि को ब्रह्म ज्ञान कराया ।\nराम कथा का मर्म बताया, हरि पद प्रगट लक्ष लखाया ॥',
      source: {
        hi: 'कबीर बीजक · बोध ग्रंथ',
        pb: 'ਕਬੀਰ ਬੀਜਕ · ਬੋਧ ਗ੍ਰੰਥ',
        en: 'Kabir Bijak · Bodh Granth'
      }
    }
  },
  {
    id: 'dvapara-yuga-karunamay',
    number: 3,
    title: {
      pb: 'ਦ੍ਵਾਪਰਯੁਗ ਵਿੱਚ ਕਰੁਣਾਮਯ ਅਵਤਾਰ ਪਰਿਚਯ',
      hi: 'द्वापरयुग में करुणामय अवतार परिचय',
      en: 'Dvapara Yuga: Descent of Karunamay Avatar'
    },
    subtitle: {
      pb: 'ਮਹਾਂਭਾਰਤ ਕਾਲ ਵਿੱਚ ਕਰੁਣਾਮਯ ਰੂਪ ਵਿੱਚ ਪਾਂਡਵਾਂ ਅਤੇ ਮਹਾਨ ਰਿਸ਼ੀਆਂ ਨੂੰ ਸਤਿ ਮਾਰਗ ਦਰਸ਼ਨ',
      hi: 'महाभारत काल में करुणामय रूप में पांडवों और मुनियों को सत्य मार्ग दर्शन',
      en: 'Guiding the Pandavas and sages during the Mahabharata epoch as Karunamay'
    },
    location: {
      pb: 'ਦ੍ਵਾਪਰਯੁਗ (ਹਸਤਿਨਾਪੁਰ ਅਤੇ ਤਪੋਵਣ)',
      hi: 'द्वापरयुग (हस्तिनापुर एवं पाण्डव शिविर)',
      en: 'Dvapara Yuga (Mahabharata Battleground & Hermitage)'
    },
    story: {
      pb: [
        'ਦ੍ਵਾਪਰਯੁਗ ਦੇ ਅੰਤਿਮ ਚਰਣ ਵਿੱਚ ਜਦੋਂ ਮਹਾਂਭਾਰਤ ਦਾ ਯੁੱਧ ਚੱਲ ਰਿਹਾ ਸੀ, ਸਤਿਗੁਰੂ ਜੀ ਨੇ \'ਕਰੁਣਾਮਯ\' ਰੂਪ ਵਿੱਚ ਪ੍ਰਗਟ ਹੋ ਕੇ ਪਾਂਡਵਾਂ ਅਤੇ ਯੋਧਿਆਂ ਨੂੰ ਸੱਚੀ ਭਗਤੀ ਤੇ ਅਹਿੰਸਾ ਦਾ ਮਾਰਗ ਸਮਝਾਇਆ।'
      ],
      hi: [
        'द्वापरयुग के अंतिम चरण में जब महाभारत का काल आया, सतगुरु कबीर साहेब ने \'करुणामय\' के रूप में प्रकट होकर पाण्डवों और जिज्ञासुओं को कर्मयोग और मोक्ष का मार्ग प्रशस्त किया।'
      ],
      en: [
        'During Dvapara Yuga amidst the events of Mahabharata, Satguru appeared as "Karunamay" to guide the Pandavas and seekers in true devotion and righteous living.'
      ]
    },
    spiritualEssence: {
      pb: 'ਅਸਲੀ ਜਿੱਤ ਬਾਹਰੀ ਦੁਸ਼ਮਣਾਂ ਉੱਤੇ ਨਹੀਂ, ਸਗੋਂ ਆਪਣੇ ਮਨ ਅਤੇ ਵਿਕਾਰਾਂ ਉੱਤੇ ਕਾਬੂ ਪਾਉਣ ਵਿੱਚ ਹੈ।',
      hi: 'वास्तविक विजय बाहरी शत्रुओं पर नहीं, बल्कि अपने ही मन और विकारों पर नियंत्रण पाने में है।',
      en: 'True victory lies in subduing the turbulent mind and inner ego.'
    },
    keySakhi: {
      pb: 'द्वापर महिं करुणामय आए, धर्म युद्ध में भेद बताए।\nमन को जीतन हरि को ध्याए, सत्यनाम का मर्म लखाए ॥',
      hi: 'द्वापर महिं करुणामय आए, धर्म युद्ध में भेद बताए ।\nमन को जीतन हरि को ध्याए, सत्यनाम का मर्म लखाए ॥',
      en: 'In Dvapara Yuga, Karunamay descended and revealed the essence of inner conquest and Satyanaam.',
      source: {
        hi: 'कबीर सागर · ज्ञान सागर',
        pb: 'ਕਬੀਰ ਸਾਗਰ · ਗਿਆਨ ਸਾਗਰ',
        en: 'Kabir Sagar · Gyan Sagar'
      }
    }
  },
  {
    id: 'lahartara-pragat',
    number: 4,
    title: {
      pb: 'ਕਾਸ਼ੀ ਲਹਿਰਤਾਰਾ ਪ੍ਰਗਟ ਲੀਲਾ (ਕਲਯੁਗ)',
      hi: 'काशी लहरतारा प्रकट लीला (कलियुग)',
      en: 'The Divine Descent at Lahartara Lake (Kali Yuga)'
    },
    subtitle: {
      pb: 'ਕਮਲ ਦੇ ਪੁਸ਼ਪ \'ਤੇ ਬਾਲਕ ਰੂਪ ਵਿੱਚ ਅਵਤਰਣ ਅਤੇ ਨੀਰੂ-ਨੀਮਾ ਦੁਆਰਾ ਪ੍ਰਾਪਤੀ',
      hi: 'कमल पुष्प पर दिव्य शिशु रूप में अवतरण और नीरू-नीमा द्वारा प्राप्ति',
      en: 'Descent as a divine infant on a lotus flower and discovery by Neeru and Neema'
    },
    location: {
      pb: 'ਕਾਸ਼ੀ (ਵਾਰਾਣਸੀ), ਲਹਿਰਤਾਰਾ ਤਲਾਬ',
      hi: 'काशी (वाराणसी), लहरतारा सरोवर',
      en: 'Kashi (Varanasi), Lahartara Pond'
    },
    story: {
      pb: [
        'ਸੰਮਤ ੧੪੫੫ (ਸੰਨ ੧੩੯੮) ਜੇਠ ਸ਼ੁਕਲ ਪੂਰਨਮਾਸ਼ੀ ਦੇ ਬ੍ਰਹਮ ਮੁਹੂਰਤ ਸਮੇਂ, ਕਾਸ਼ੀ ਦੇ ਪ੍ਰਸਿੱਧ ਲਹਿਰਤਾਰਾ ਤਲਾਬ ਵਿੱਚ ਇੱਕ ਅਲੌਕਿਕ ਨੂਰਾਨੀ ਪ੍ਰਕਾਸ਼ ਫੈਲ ਗਿਆ। ਉਸ ਰੋਸ਼ਨੀ ਦੇ ਵਿਚਕਾਰ, ਇੱਕ ਵੱਡੇ ਕਮਲ ਦੇ ਫੁੱਲ \'ਤੇ ਇੱਕ ਪਰਮ ਸੁੰਦਰ ਅਤੇ ਤੇਜਸਵੀ ਬਾਲਕ ਵਿਰਾਜਮਾਨ ਸੀ।',
        'ਉਸੇ ਸਮੇਂ ਨੀਰੂ ਨਾਮਕ ਜੁਲਾਹਾ ਅਤੇ ਉਸਦੀ ਧਰਮ ਪਤਨੀ ਨੀਮਾ ਉਸ ਤਲਾਬ ਦੇ ਕੰਢੇ ਤੋਂ ਲੰਘ ਰਹੇ ਸਨ। ਬਾਲਕ ਦੇ ਕੋਮਲ ਰੋਣ ਜਾਂ ਕਿਲਕਾਰੀਆਂ ਸੁਣ ਕੇ ਨੀਮਾ ਨੇ ਪਾਣੀ ਵਿੱਚ ਵੇਖਿਆ। ਉਸ ਦਿਵਯ ਬਾਲਕ ਦੇ ਚਿਹਰੇ \'ਤੇ ਅਜਿਹਾ ਅਲੌਕਿਕ ਤੇਜ ਸੀ ਕਿ ਨੀਮਾ ਦਾ ਮਾਤਰੀ-ਹਿਰਦਾ ਛਲਕ ਪਿਆ।',
        'ਨੀਰੂ ਨੇ ਸ਼ੁਰੂ ਵਿੱਚ ਲੋਕ-ਲਾਜ ਕਾਰਨ ਝਿਜਕ ਵਿਖਾਈ, ਪਰ ਬਾਲਕ ਦੇ ਮੋਹਕ ਸਰੂਪ ਅੱਗੇ ਉਹ ਵੀ ਨਤਮਸਤਕ ਹੋ ਗਿਆ। ਉਹ ਦੋਵੇਂ ਉਸ ਪਵਿੱਤਰ ਬਾਲਕ ਨੂੰ ਆਪਣੇ ਘਰ ਲੈ ਆਏ। ਸਾਰੇ ਸ਼ਹਿਰ ਵਿੱਚ ਚਰਚਾ ਫੈਲ ਗਈ ਕਿ ਨੀਰੂ-ਨੀਮਾ ਦੇ ਘਰ ਪਰਮ ਪੁਰਸ਼ ਨੇ ਬਾਲਕ ਰੂਪ ਧਾਰਨ ਕਰ ਲਿਆ ਹੈ। ਇਸ ਤਰ੍ਹਾਂ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਨੇ ਮਾਤ-ਗਰਭ ਤੋਂ ਬਿਨਾਂ, ਅਮਰ ਕਮਲ \'ਤੇ ਪ੍ਰਗਟ ਹੋ ਕੇ ਸੰਸਾਰ ਨੂੰ ਸਤਿ ਦਾ ਸੰਦੇਸ਼ ਦੇਣਾ ਸ਼ੁਰੂ ਕੀਤਾ।'
      ],
      hi: [
        'संवत १४५५ (सन १३९८) ज्येष्ठ शुक्ल पूर्णिमा के ब्रह्म मुहूर्त में, काशी के पवित्र लहरतारा सरोवर में एक अनिर्वचनीय दिव्य ज्योति का अवतरण हुआ। उस अलौकिक प्रकाश के मध्य खिले हुए एक विशाल श्वेत कमल पुष्प पर एक अत्यंत तेजस्वी शिशु शोभायमान था।',
        'उसी समय नीरू नामक जुलाहा और उनकी धर्मपत्नी नीमा उस सरोवर के तट से गुजर रहे थे। कमल पर विराजमान दिव्य बालक के मंद हास्य और प्रकाश को देखकर नीमा का हृदय मातृ-स्नेह से उमड़ पड़ा।',
        'नीरू ने आरंभ में लोक-लाज के भय से संकोच किया, किंतु बालक के दिव्य मुखारविंद के दर्शन से उसका हृदय भी श्रद्धा से भर गया। वे दोनों उस बालक को अपने घर ले आए। इस प्रकार सतगुरु कबीर साहेब ने मातृ-गर्भ से रहित, सत्यलोक से सीधे कमल-पुष्प पर अवतरित होकर जन-कल्याण का मार्ग प्रशस्त किया।'
      ],
      en: [
        'In the divine dawn of Jyeshtha Purnima (1398 CE), an ethereal celestial radiance enveloped the sacred Lahartara lake in Varanasi. In the center of a majestic blooming lotus rested a luminous, radiant infant.',
        'The humble weaver Neeru and his wife Neema were passing along the banks. Drawn by the soft heavenly splendor, Neema gazed upon the divine child and was overwhelmed with pure maternal love.',
        'Though initially hesitant of social gossip, Neeru was deeply moved upon witnessing the heavenly aura. They carried the blessed child home. Thus, Satguru Kabir descended untouched by the mortal womb, manifesting on the lotus of pure consciousness.'
      ]
    },
    spiritualEssence: {
      pb: 'ਸਤਿਗੁਰੂ ਕਿਸੇ ਮਨੁੱਖੀ ਬੰਧਨ ਜਾਂ ਜਾਤ-ਪਾਤ ਦੇ ਅਧੀਨ ਨਹੀਂ ਹਨ। ਉਹ ਪਰਮ ਸੱਚ ਦੇ ਅਵਤਾਰ ਹਨ ਜੋ ਨਿਰਮਲ ਕਮਲ ਵਾਂਗ ਸੰਸਾਰਿਕ ਚਿੱਕੜ ਤੋਂ ਸਦਾ ਨਿਰਲੇਪ ਰਹਿੰਦੇ ਹਨ।',
      hi: 'सतगुरु किसी जाति, कुल अथवा सांसारिक बंधन में नहीं बंधे हैं। वे कमलवत निर्मल हैं जो संसार के कीचड़ में रहते हुए भी सदा निर्लेप और दिव्य रहते हैं।',
      en: 'The Satguru is beyond worldly bondage, caste, and creed. Like a lotus blossoming above water, divine consciousness remains untainted by the mire of worldly illusion.'
    },
    keySakhi: {
      pb: 'ਸਤਸੰਗਤਿ ਕਾ ਅੰਗ ਇਹ, ਕਬੀਰ ਨਿਰਮਲ ਧਾਰ ।\nਲਹਿਰਤਾਰਾ ਪ੍ਰਗਟ ਭਏ, ਕੀਨਾ ਜਗ ਉਧਾਰ ॥',
      hi: 'सतसंगति का अंग यह, कबीर निर्मल धार ।\nलहरतारा प्रकट भए, कीना जग उद्धार ॥',
      source: {
        hi: 'कबीर सागर · अमर बोध',
        pb: 'ਕਬੀਰ ਸਾਗਰ · ਅਮਰ ਬੋਧ',
        en: 'Kabir Sagar · Amar Bodh'
      }
    }
  },
  {
    id: 'ramanand-diksha',
    number: 5,
    title: {
      pb: 'ਸੁਆਮੀ ਰਾਮਾਨੰਦ ਜੀ ਤੋਂ ਦੀਖਿਆ ਲੀਲਾ',
      hi: 'स्वामी रामानंद जी से दीक्षा लीला',
      en: 'Initiation at Panchganga Ghat'
    },
    subtitle: {
      pb: 'ਪੰਚਗੰਗਾ ਘਾਟ ਦੀਆਂ ਪੌੜੀਆਂ \'ਤੇ ਸਵੇਰ ਸਮੇਂ "ਰਾਮ" ਸ਼ਬਦ ਦੀ ਦਾਤ',
      hi: 'पंचगंगा घाट की सीढ़ियों पर उषाकाल में "राम" नाम का दिव्य उपदेश',
      en: 'The morning encounter on the steps of the Ganges and the gift of the holy Word'
    },
    location: {
      pb: 'ਕਾਸ਼ੀ, ਪੰਚਗੰਗਾ ਘਾਟ',
      hi: 'काशी, पंचगंगा घाट',
      en: 'Kashi, Panchganga Ghat'
    },
    story: {
      pb: [
        'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਸੰਸਾਰ ਨੂੰ ਇਹ ਸਿਖਾਉਣਾ ਚਾਹੁੰਦੇ ਸਨ ਕਿ ਜੀਵਨ ਵਿੱਚ ਗੁਰੂ ਦੀ ਸ਼ਰਨ ਲੈਣੀ ਕਿੰਨੀ ਜ਼ਰੂਰੀ ਹੈ। ਉਸ ਸਮੇਂ ਕਾਸ਼ੀ ਦੇ ਮਹਾਨ ਸੰਤ ਸੁਆਮੀ ਰਾਮਾਨੰਦ ਜੀ ਜਾਤ-ਪਾਤ ਦੀਆਂ ਰੂੜ੍ਹੀਵਾਦੀ ਪਰੰਪਰਾਵਾਂ ਕਾਰਨ ਹਰ ਕਿਸੇ ਨੂੰ ਸ਼ਿਸ਼ ਨਹੀਂ ਬਣਾਉਂਦੇ ਸਨ।',
        'ਇਕ ਦਿਨ ਅੰਮ੍ਰਿਤ ਵੇਲੇ, ਜਦੋਂ ਸੁਆਮੀ ਰਾਮਾਨੰਦ ਜੀ ਪੰਚਗੰਗਾ ਘਾਟ \'ਤੇ ਗੰਗਾ ਇਸ਼ਨਾਨ ਲਈ ਜਾ ਰਹੇ ਸਨ, ਤਾਂ ਬਾਲਕ ਕਬੀਰ ਘਾਟ ਦੀਆਂ ਪੌੜੀਆਂ \'ਤੇ ਲੇਟ ਗਏ। ਹਨੇਰੇ ਵਿੱਚ ਸੁਆਮੀ ਜੀ ਦਾ ਖੜਾਵਾਂ ਵਾਲਾ ਪੈਰ ਬਾਲਕ ਦੇ ਸਰੀਰ \'ਤੇ ਲੱਗ ਗਿਆ।',
        'ਸੁਆਮੀ ਜੀ ਦੇ ਮੁੱਖੋਂ ਸਹਿਜੇ ਹੀ ਨਿਕਲਿਆ—"ਰਾਮ-ਰਾਮ ਕਹੋ! ਉਠੋ ਬੱਚਾ, ਰਾਮ ਕਹੋ!" ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਇਸੇ ਪਾਵਨ ਬਚਨ ਨੂੰ ਆਪਣਾ ਗੁਰੂ-ਮੰਤਰ ਮੰਨ ਲਿਆ। ਜਦੋਂ ਸੁਆਮੀ ਜੀ ਨੂੰ ਕਬੀਰ ਜੀ ਦੀ ਅਥਾਹ ਸ਼ਰਧਾ ਅਤੇ ਬ੍ਰਹਮ ਗਿਆਨ ਦਾ ਪਤਾ ਲੱਗਾ, ਤਾਂ ਉਨ੍ਹਾਂ ਨੇ ਕਬੀਰ ਸਾਹੇਬ ਨੂੰ ਆਪਣਾ ਸਭ ਤੋਂ ਪਿਆਰਾ ਮੁੱਖ ਸ਼ਿਸ਼ ਸਵੀਕਾਰ ਕਰ ਲਿਆ।'
      ],
      hi: [
        'सतगुरु कबीर साहेब संसार को यह शिक्षा देना चाहते थे कि बिना सद्गुरु के जीवन का उद्धार असंभव है। तत्कालीन समय में स्वामी रामानंद जी काशी के परम पूज्य संत थे।',
        'एक दिन ब्रह्म मुहूर्त में जब स्वामी रामानंद जी पंचगंगा घाट पर गंगा स्नान के लिए उतर रहे थे, तब कबीर जी सीढ़ियों पर लेट गए। अंधकार में स्वामी जी का चरण कबीर जी के मस्तक पर पड़ा।',
        'अकस्मात स्वामी जी के मुख से निकला—"राम! राम कहो बालक!" कबीर साहेब ने इसी पावन वचन को गुरु-दीक्षा मान लिया और रामानंद जी को अपना गुरु स्वीकार किया। बाद में जब स्वामी जी ने कबीर के आध्यात्मिक ज्ञान की गहराई को देखा, तो उन्होंने उन्हें अपना सर्वप्रिय शिष्य घोषित किया।'
      ],
      en: [
        'Satguru Kabir wished to teach humanity that a spiritual guide is essential for awakening. At that time, Swami Ramanand was the revered saint of Kashi.',
        'At the nectar hour of dawn, as Swami Ramanand walked down the steps of Panchganga Ghat for his ablutions, young Kabir lay upon the stone steps. In the dim morning twilight, Swami Ramanand\'s wooden sandal gently touched Kabir.',
        'Startled, the Swami exclaimed: "Ram! Speak the name of Ram, my child!" Kabir accepted this divine utterance as the holy initiation mantra. Recognizing Kabir\'s supreme realization, Ramanand embraced him as his foremost disciple.'
      ]
    },
    spiritualEssence: {
      pb: 'ਗੁਰੂ ਬਿਨਾਂ ਗਿਆਨ ਨਹੀਂ ਅਤੇ ਗਿਆਨ ਬਿਨਾਂ ਮੁਕਤੀ ਨਹੀਂ। ਸੱਚੀ ਸ਼ਰਧਾ ਅੱਗੇ ਸਾਰੇ ਸੰਸਾਰਿਕ ਨਿਯਮ ਅਤੇ ਭੇਦ-ਭਾਵ ਢਹਿ-ਢੇਰੀ ਹੋ ਜਾਂਦੇ ਹਨ।',
      hi: 'गुरु के बिना आध्यात्मिक जागृति संभव नहीं है। सच्ची निष्ठा और विनम्रता के सम्मुख समस्त सामाजिक भेदभाव और अवरोध समाप्त हो जाते हैं।',
      en: 'Without a True Guru, awakening remains unattainable. Before sincere surrender and purity of heart, all artificial societal boundaries dissolve.'
    },
    keySakhi: {
      pb: 'ਗੁਰੂ ਬਿਨੁ ਮਾਲਾ ਫੇਰਤੇ, ਗੁਰੂ ਬਿਨੁ ਦੇਤੇ ਦਾਨ ।\nਗੁਰੂ ਬਿਨੁ ਸਭ ਨਿਸ਼ਫਲ ਭਯਾ, ਪੂਛੌ ਬੇਦ ਪੁਰਾਨ ॥',
      hi: 'गुरु बिनु माला फेरते, गुरु बिनु देते दान ।\nगुरु बिनु सब निष्फल भया, पूछौ बेद पुरान ॥',
      source: {
        hi: 'साखी संग्रह · गुरुदेव को अंग',
        pb: 'ਸਾਖੀ ਸੰਗ੍ਰਹਿ · ਗੁਰੂਦੇਵ ਕੋ ਅੰਗ',
        en: 'Sakhi Sangrah · Gurudev Ko Ang'
      }
    }
  },
  {
    id: 'sikandar-lodi-trials',
    number: 6,
    title: {
      pb: 'ਸਿਕੰਦਰ ਲੋਧੀ ਦੀਆਂ ਪ੍ਰੀਖਿਆਵਾਂ ਦੀ ਲੀਲਾ',
      hi: 'सिकंदर लोधी की परीक्षा लीला',
      en: 'Trials by Sultan Sikandar Lodi'
    },
    subtitle: {
      pb: 'ਮਸਤ ਹਾਥੀ ਦਾ ਝੁਕਣਾ, ਜੰਜੀਰਾਂ ਦਾ ਟੁੱਟਣਾ ਅਤੇ ਅਗਨੀ ਦਾ ਸ਼ਾਂਤ ਹੋਣਾ',
      hi: 'मत्त हाथी का नतमस्तक होना, लोहे की बेड़ियों का टूटना और गंगा का तारना',
      en: 'The royal elephant bowing down, iron chains breaking, and surviving the raging waves'
    },
    location: {
      pb: 'ਕਾਸ਼ੀ ਦਾ ਸ਼ਾਹੀ ਦਰਬਾਰ ਅਤੇ ਗੰਗਾ ਤਟ',
      hi: 'काशी का शाही दरबार एवं गंगा तट',
      en: 'Royal Court of Kashi and banks of the Ganges'
    },
    story: {
      pb: [
        'ਕਾਸ਼ੀ ਦੇ ਰੂੜ੍ਹੀਵਾਦੀ ਪੰਡਤਾਂ ਅਤੇ ਮੁੱਲਾਂ ਨੇ ਸੁਲਤਾਨ ਸਿਕੰਦਰ ਲੋਧੀ ਦੇ ਕੰਨ ਭਰੇ ਕਿ ਕਬੀਰ ਹਿੰਦੂ ਅਤੇ ਮੁਸਲਿਮ ਦੋਹਾਂ ਧਰਮਾਂ ਦੀਆਂ ਪਖੰਡੀ ਰੀਤਾਂ ਦਾ ਖੰਡਨ ਕਰਦਾ ਹੈ ਅਤੇ ਬਾਦਸ਼ਾਹ ਨੂੰ ਸਲਾਮ ਨਹੀਂ ਕਰਦਾ। ਸਿਕੰਦਰ ਲੋਧੀ ਨੇ ਕਬੀਰ ਸਾਹੇਬ ਨੂੰ ਦਰਬਾਰ ਵਿੱਚ ਤਲਬ ਕੀਤਾ।',
        'ਜਦੋਂ ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਕੇਵਲ ਇੱਕ ਅਕਾਲ ਪੁਰਖ ਅੱਗੇ ਸੀਸ ਝੁਕਾਉਣ ਦੀ ਗੱਲ ਕਹੀ, ਤਾਂ ਕਰੋਧੀ ਸੁਲਤਾਨ ਨੇ ਉਨ੍ਹਾਂ ਨੂੰ ਮਸਤ ਖੂਨੀ ਹਾਥੀ ਅੱਗੇ ਸੁੱਟਣ ਦਾ ਹੁਕਮ ਦਿੱਤਾ। ਪਰ ਜਿਵੇਂ ਹੀ ਹਾਥੀ ਨੇੜੇ ਆਇਆ, ਉਸਨੇ ਕਬੀਰ ਸਾਹੇਬ ਦੇ ਸਾਹਮਣੇ ਆਪਣਾ ਮੱਥਾ ਟੇਕ ਦਿੱਤਾ ਅਤੇ ਪਿੱਛੇ ਹਟ ਗਿਆ।',
        'ਫਿਰ ਸੁਲਤਾਨ ਨੇ ਕਬੀਰ ਸਾਹੇਬ ਨੂੰ ਭਾਰੀ ਲੋਹੇ ਦੀਆਂ ਜੰਜੀਰਾਂ ਨਾਲ ਬੰਨ੍ਹ ਕੇ ਗੰਗਾ ਨਦੀ ਦੀਆਂ ਡੂੰਘੀਆਂ ਲਹਿਰਾਂ ਵਿੱਚ ਸੁੱਟ ਦਿੱਤਾ। ਪਰ ਪਰਮਾਤਮਾ ਦੀ ਕਿਰਪਾ ਨਾਲ ਜੰਜੀਰਾਂ ਟੁੱਟ ਗਈਆਂ ਅਤੇ ਕਬੀਰ ਸਾਹੇਬ ਸੁੱਖ-ਪੂਰਵਕ ਪਾਣੀ ਦੀ ਸਤ੍ਹਾ \'ਤੇ ਤੈਰਦੇ ਹੋਏ ਬਾਹਰ ਆ ਗਏ। ਸੁਲਤਾਨ ਸਿਕੰਦਰ ਲੋਧੀ ਸ਼ਰਮਸਾਰ ਹੋ ਕੇ ਕਬੀਰ ਸਾਹੇਬ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਡਿੱਗ ਪਿਆ।'
      ],
      hi: [
        'काशी के संकीर्ण विचारकों ने सुल्तान सिकंदर लोधी से शिकायत की कि कबीर न तो हिंदू रीति को मानता है और न ही रूढ़िवादी इस्लामी कर्मकांड को। सुल्तान ने उन्हें दरबार में बुलाया।',
        'कबीर साहेब ने निर्भीक होकर केवल एक निरंकार के आगे शीश झुकाने की बात कही। रुष्ट होकर सुल्तान ने उन्हें एक उन्मत्त हाथी के सम्मुख फिंकवा दिया। किंतु आश्चर्य! वह मतवाला हाथी कबीर साहेब के सम्मुख आते ही मस्तक झुकाकर बैठ गया।',
        'इसके पश्चात कबीर जी को भारी लोहे की जंजीरों में बांधकर गंगा की अथाह धारा में फेंक दिया गया। प्रभु कृपा से जंजीरें टूट गईं और कबीर साहेब जल की तरंगों पर कमल की भांति तैरने लगे। यह चमत्कार देखकर सुल्तान सिकंदर लोधी लज्जित होकर उनके चरणों में गिर पड़ा।'
      ],
      en: [
        'Dogmatic priests and clerics, uncomfortable with Kabir\'s uncompromising truth, petitioned Sultan Sikandar Lodi, alleging that Kabir disrespected orthodox rituals.',
        'Summoned before the court, Kabir refused to bow to temporal tyrants, declaring that he bows only to the Supreme Formless Truth. Infuriated, the Sultan ordered a ferocious royal elephant to trample him. But when the elephant approached, it knelt down in reverence before Kabir and refused to move.',
        'Next, Kabir was bound in heavy iron chains and cast into the swift, deep currents of the Ganges. By divine grace, the iron bonds shattered, and Kabir floated peacefully upon the waters. Witnessing this transcendence, Sultan Sikandar Lodi fell at the Master\'s feet seeking forgiveness.'
      ]
    },
    spiritualEssence: {
      pb: 'ਜਿਸ ਜੀਵ ਦੇ ਹਿਰਦੇ ਵਿੱਚ ਸੱਚ ਅਤੇ ਪਰਮਾਤਮਾ ਦਾ ਨਾਮ ਵੱਸਦਾ ਹੈ, ਉਸਦਾ ਸੰਸਾਰ ਦੀ ਕੋਈ ਵੀ ਤਾਕਤ, ਅਗਨੀ ਜਾਂ ਜੰਜੀਰ ਵਾਲ ਵੀ ਵਿੰਗਾ ਨਹੀਂ ਕਰ ਸਕਦੀ। ਨਿਰਭਉ ਹੋ ਕੇ ਸੱਚ ਦੇ ਮਾਰਗ \'ਤੇ ਚੱਲੋ।',
      hi: 'जिसके हृदय में सत्य और परमात्मा का निवास है, संसार की कोई भी शक्ति, बेड़ियां या दंड उसे पराजित नहीं कर सकते। निर्भय होकर सत्य का मार्ग अपनाएं।',
      en: 'The soul established in Truth cannot be subdued by iron chains, earthly monarchs, or fear of death. Walk fearlessly upon the righteous path.'
    },
    keySakhi: {
      pb: 'ਜਾਕੇ ਰਾਖੇ ਸਾਂਈਆਂ, ਮਾਰਿ ਸਕੈ ਨ ਕੋਇ ।\nਬਾਲ ਨ ਬਾਂਕਾ ਕਰਿ ਸਕੈ, ਜੋ ਜਗ ਬੈਰੀ ਹੋਇ ॥',
      hi: 'जाके राखे सांईयां, मारि सकै न कोइ ।\nबाल न बांका करि सकै, जो जग बैरी होइ ॥',
      source: {
        hi: 'साखी संग्रह · सांच को अंग',
        pb: 'ਸਾਖੀ ਸੰਗ੍ਰਹਿ · ਸਾਂਚ ਕੋ ਅੰਗ',
        en: 'Sakhi Sangrah · Sanch Ko Ang'
      }
    }
  },
  {
    id: 'maghar-departure',
    number: 7,
    title: {
      pb: 'ਮਗਹਰ ਪ੍ਰਸਥਾਨ ਅਤੇ ਸੁਗੰਧਿਤ ਫੁੱਲਾਂ ਦੀ ਲੀਲਾ',
      hi: 'मगहर प्रस्थान एवं सुगंधित पुष्प लीला',
      en: 'The Departure at Maghar & Miracle of Flowers'
    },
    subtitle: {
      pb: 'ਕਾਸ਼ੀ ਛੱਡ ਕੇ ਮਗਹਰ ਜਾਣਾ ਅਤੇ ਹਿੰਦੂ-ਮੁਸਲਿਮ ਏਕਤਾ ਲਈ ਫੁੱਲਾਂ ਦੀ ਅਮਰ ਦੇਣ',
      hi: 'अंधविश्वास तोड़कर मगहर जाना और हिंदू-मुस्लिम एकता हेतु पुष्पों का अवदान',
      en: 'Shattering the superstition of Kashi vs Maghar and the eternal legacy of fragrant flowers'
    },
    location: {
      pb: 'ਮਗਹਰ ਧਾਮ (ਉੱਤਰ ਪ੍ਰਦੇਸ਼)',
      hi: 'मगहर धाम (उत्तर प्रदेश)',
      en: 'Maghar Dham (Uttar Pradesh)'
    },
    story: {
      pb: [
        'ਉਸ ਜ਼ਮਾਨੇ ਵਿੱਚ ਇਹ ਅੰਧਵਿਸ਼ਵਾਸ ਫੈਲਿਆ ਹੋਇਆ ਸੀ ਕਿ ਕਾਸ਼ੀ ਵਿੱਚ ਮਰਨ ਵਾਲਾ ਸਿੱਧਾ ਸਵਰਗ/ਮੁਕਤੀ ਪਾਉਂਦਾ ਹੈ ਅਤੇ ਮਗਹਰ ਵਿੱਚ ਮਰਨ ਵਾਲਾ ਗਧਾ ਬਣਦਾ ਹੈ ਜਾਂ ਨਰਕ ਭੋਗਦਾ ਹੈ। ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਇਸ ਭਰਮ ਨੂੰ ਤੋੜਨ ਦਾ ਫੈਸਲਾ ਕੀਤਾ।',
        'ਆਪਣੇ ਅੰਤਿਮ ਸਮੇਂ, ੧੨੦ ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ, ਕਬੀਰ ਸਾਹੇਬ ਕਾਸ਼ੀ ਛੱਡ ਕੇ ਮਗਹਰ ਚਲੇ ਗਏ। ਉਨ੍ਹਾਂ ਫ਼ਰਮਾਇਆ: "ਜੇਕਰ ਕਾਸ਼ੀ ਮਰਨ ਨਾਲ ਹੀ ਮੁਕਤੀ ਮਿਲਦੀ ਹੈ, ਤਾਂ ਇਸ ਵਿੱਚ ਰਾਮ (ਪਰਮਾਤਮਾ) ਦੀ ਕੀ ਮਹਿਮਾ ਹੋਈ? ਮੁਕਤੀ ਤਾਂ ਸੱਚੇ ਸਿਮਰਨ ਨਾਲ ਹੁੰਦੀ ਹੈ, ਸਥਾਨ ਨਾਲ ਨਹੀਂ।" ਮਗਹਰ ਵਿੱਚ ਉਨ੍ਹਾਂ ਨੇ ਸੁੱਕੀ ਹੋਈ ਆਮੀ ਨਦੀ ਵਿੱਚ ਜਲ ਪ੍ਰਵਾਹਿਤ ਕਰ ਦਿੱਤਾ।',
        'ਜਦੋਂ ਜੋਤੀ-ਜੋਤਿ ਸਮਾਉਣ ਦਾ ਸਮਾਂ ਆਇਆ, ਤਾਂ ਹਿੰਦੂ ਅਤੇ ਮੁਸਲਿਮ ਦੋਵੇਂ ਸ਼ਿਸ਼ ਆਪਸ ਵਿੱਚ ਝਗੜਨ ਲੱਗੇ ਕਿ ਸਸਕਾਰ ਕਰਨਾ ਹੈ ਜਾਂ ਦਫ਼ਨਾਉਣਾ ਹੈ। ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਕੁਟੀਆ ਦਾ ਦਰਵਾਜ਼ਾ ਬੰਦ ਕਰਕੇ ਸਮਾਧੀ ਲੈ ਲਈ। ਜਦੋਂ ਚਾਦਰ ਹਟਾਈ ਗਈ, ਤਾਂ ਉੱਥੇ ਕੋਈ ਪਾਰਥਿਵ ਸਰੀਰ ਨਹੀਂ ਸੀ, ਬਲਕਿ ਤਾਜ਼ੇ ਸੁਗੰਧਿਤ ਫੁੱਲਾਂ ਦਾ ਢੇਰ ਸੀ। ਦੋਵਾਂ ਧਿਰਾਂ ਨੇ ਅੱਧੇ-ਅੱਧੇ ਫੁੱਲ ਵੰਡ ਲਏ। ਅੱਜ ਵੀ ਮਗਹਰ ਵਿੱਚ ਸਮਾਧੀ ਅਤੇ ਮਜ਼ਾਰ ਨਾਲ-ਨਾਲ ਬਣੇ ਹੋਏ ਹਨ।'
      ],
      hi: [
        'तत्कालीन समाज में यह अंधविश्वास व्याप्त था कि काशी में मरने वाला सीधे स्वर्ग जाता है और मगहर में प्राण त्यागने वाला नरक या गधे की योनि पाता है। कबीर साहेब ने इस रूढ़ि को खंडित करने का संकल्प लिया।',
        'अपने अंतिम समय में वे काशी छोड़कर मगहर पधारे और कहा: "यदि काशी में मरने से ही मुक्ति मिलती, तो इसमें राम-सुमिरन का क्या उपकार?" मगहर में उन्होंने सूखी आमी नदी को पुनः जलमयी कर दिया।',
        'जब देह त्याग का समय आया, तो हिंदू और मुस्लिम अनुयायी आपस में विवाद करने लगे कि दाह-संस्कार हो अथवा दफनाया जाए। कबीर साहेब ने चादर ओढ़ ली। आकाशवाणी के बाद जब चादर हटाई गई, तो वहां पार्थिव शरीर के स्थान पर ताजे सुगंधित पुष्प मिले। दोनों पक्षों ने आधे-आधे पुष्प लेकर परस्पर प्रेम का पाठ सीखा। आज भी मगहर में समाधि और मजार एक ही प्रांगण में प्रेम का प्रतीक हैं।'
      ],
      en: [
        'A pervasive superstition held that dying in Kashi guaranteed salvation, whereas dying in barren Maghar doomed one to hell or rebirth as a donkey. Satguru Kabir resolved to shatter this dogmatic falsehood.',
        'In his final days, at the age of 120, Kabir walked away from Kashi and arrived in Maghar, declaring: "If salvation comes merely from the soil of Kashi, what then is the worth of remembering the Lord? True liberation lies in the heart, not in geographical coordinates."',
        'Upon his departure, Hindu and Muslim followers quarreled over whether to cremate or bury him. Kabir lay beneath a white sheet. When the sheet was lifted, no mortal body remained—only a mound of fragrant, fresh flowers. The flowers were divided equally. To this day, the Samadhi and Mazar stand side by side in Maghar as an immortal monument to unity.'
      ]
    },
    spiritualEssence: {
      pb: 'ਪਰਮਾਤਮਾ ਕਿਸੇ ਵਿਸ਼ੇਸ਼ ਸ਼ਹਿਰ ਜਾਂ ਤੀਰਥ ਵਿੱਚ ਨਹੀਂ, ਬਲਕਿ ਸ਼ੁੱਧ ਹਿਰਦੇ ਵਿੱਚ ਵੱਸਦਾ ਹੈ। ਸਾਰੀ ਮਨੁੱਖਤਾ ਇਕ ਹੈ, ਧਰਮ ਦੇ ਨਾਮ \'ਤੇ ਵੰਡਣਾ ਅਗਿਆਨਤਾ ਹੈ।',
      hi: 'मुक्ति स्थान विशेष से नहीं, अपितु अंतःकरण की शुद्धि और नाम-सुमिरन से मिलती है। मानवता एक है, धर्म के नाम पर भेद करना अज्ञान है।',
      en: 'Liberation is born of inner remembrance and pure devotion, not superstitious geography. All humanity is one; sectarian division is mere ignorance.'
    },
    keySakhi: {
      pb: 'ਕਿਆ ਕਾਸ਼ੀ ਕਿਆ ਊਸਰ ਮਗਹਰ, ਰਾਮ ਰਿਦੈ ਜੌ ਹੋਈ ।\nਜੋ ਕਾਸ਼ੀ ਤਨੁ ਤਜੈ ਕਬੀਰਾ, ਰਾਮੈ ਕਵਨੁ ਨਿਹੋਰਾ ॥',
      hi: 'क्या काशी क्या ऊसर मगहर, राम रिदै जौ होई ।\nजो काशी तनु तजै कबीरा, रामै कवनु निहोरा ॥',
      source: {
        hi: 'गुरु ग्रंथ साहेब · राग गौड़ी',
        pb: 'ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹੇਬ · ਰਾਗੁ ਗਉੜੀ',
        en: 'Guru Granth Saheb · Raag Gauri'
      }
    }
  },
  {
    id: 'kamal-kamali',
    number: 8,
    title: {
      pb: 'ਕਮਾਲ ਅਤੇ ਕਮਾਲੀ ਦਾ ਪਾਵਨ ਪ੍ਰਸੰਗ',
      hi: 'कमाल और कमाली का पावन प्रसंग',
      en: 'The Compassion towards Kamal & Kamali'
    },
    subtitle: {
      pb: 'ਸੱਚੀ ਸੰਤਾਨ ਉਹੀ ਹੈ ਜੋ ਗੁਰੂ ਦੇ ਗਿਆਨ ਅਤੇ ਸੇਵਾ ਦੇ ਮਾਰਗ \'ਤੇ ਚੱਲੇ',
      hi: 'सच्ची संतान वही है जो गुरु के ज्ञान और वैराग्य के मार्ग पर चले',
      en: 'True kinship lies not in physical birth, but in spiritual dedication and selfless living'
    },
    location: {
      pb: 'ਕਾਸ਼ੀ, ਕਬੀਰ ਚੌਰਾ',
      hi: 'काशी, कबीर चौरा',
      en: 'Kashi, Kabir Chaura'
    },
    story: {
      pb: [
        'ਇਕ ਵਾਰ ਨਦੀ ਵਿੱਚ ਵਹਿ ਰਹੀ ਇਕ ਮਾਸੂਮ ਬਾਲਕ ਦੀ ਲਾਸ਼ ਨੂੰ ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਆਪਣੀ ਕਿਰਪਾ ਨਾਲ ਜੀਵਨ-ਦਾਨ ਦਿੱਤਾ। ਉਸ ਬਾਲਕ ਦਾ ਨਾਮ "ਕਮਾਲ" ਰੱਖਿਆ ਗਿਆ। ਇਸੇ ਤਰ੍ਹਾਂ ਇਕ ਬਾਲੜੀ ਦਾ ਉਧਾਰ ਕਰਕੇ ਉਸਦਾ ਨਾਮ "ਕਮਾਲੀ" ਰੱਖਿਆ ਗਿਆ।',
        'ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਉਨ੍ਹਾਂ ਦੋਹਾਂ ਨੂੰ ਕਦੇ ਵੀ ਸੰਸਾਰਿਕ ਮੋਹ-ਮਾਇਆ ਵਿੱਚ ਨਹੀਂ ਬੰਨ੍ਹਿਆ, ਬਲਕਿ ਸਤਿਗੁਰੂ ਭਗਤੀ, ਨਾਮ-ਸਿਮਰਨ ਅਤੇ ਮਿਹਨਤ ਦੀ ਕਮਾਈ ਦਾ ਮਾਰਗ ਸਿਖਾਇਆ।',
        'ਜਦੋਂ ਕਮਾਲ ਥੋੜ੍ਹਾ ਸੰਸਾਰਿਕ ਪ੍ਰਸਿੱਧੀ ਜਾਂ ਧਨ ਵੱਲ ਆਕਰਸ਼ਿਤ ਹੋਣ ਲੱਗਾ, ਤਾਂ ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਉਸਨੂੰ ਪਿਆਰ ਨਾਲ ਝਿੜਕਿਆ ਅਤੇ ਫ਼ਰਮਾਇਆ ਕਿ ਸਾਧੂ ਦਾ ਕੰਮ ਧਨ ਜੋੜਨਾ ਨਹੀਂ, ਬਲਕਿ ਨਾਮ ਧਨ ਕਮਾਉਣਾ ਹੈ। ਕਮਾਲ ਨੇ ਤੁਰੰਤ ਸਭ ਕੁਝ ਛੱਡ ਕੇ ਪੂਰਨ ਵੈਰਾਗ ਧਾਰਨ ਕਰ ਲਿਆ।'
      ],
      hi: [
        'एक बार नदी में बहते एक अचेत बालक को कबीर साहेब ने अपनी करुणा से नवजीवन प्रदान किया। उसका नाम "कमाल" रखा गया। इसी प्रकार एक बालिका को जीवनदान देकर उसका नाम "कमाली" रखा।',
        'कबीर साहेब ने दोनों को सांसारिक मोह से परे रखकर सत्य, त्याग और निस्वार्थ सेवा का संस्कार दिया।',
        'जब कमाल कभी सांसारिक भेंट अथवा मान-सम्मान के प्रति आकर्षित होने लगा, तो कबीर साहेब ने उसे सचेत करते हुए कहा कि साधक का वास्तविक वैभव सांसारिक संपत्ति नहीं, अपितु आत्म-संतोष और सत्यनाम है।'
      ],
      en: [
        'Out of deep compassion, Satguru Kabir saved an abandoned child floating on the river and brought him to life, naming him Kamal. Later, a young girl was similarly nurtured and named Kamali.',
        'Kabir raised them free from worldly possessiveness, instilling devotion, honest labor, and inner realization.',
        'When Kamal once showed interest in worldly donations or gifts, Kabir gently admonished him, reminding him that a true seeker\'s wealth is contentment and divine remembrance, not material accumulation.'
      ]
    },
    spiritualEssence: {
      pb: 'ਪਰਿਵਾਰਿਕ ਰਿਸ਼ਤੇ ਕੇਵਲ ਸਰੀਰਕ ਨਹੀਂ ਹੁੰਦੇ, ਸੱਚਾ ਨਾਤਾ ਤਾਂ ਆਤਮਾ ਅਤੇ ਗੁਰੂ-ਸ਼ਬਦ ਦਾ ਹੁੰਦਾ ਹੈ। ਲੋਭ ਅਤੇ ਸੰਗ੍ਰਹਿ ਦਾ ਤਿਆਗ ਹੀ ਸਾਧੂ ਦਾ ਲੱਛਣ ਹੈ।',
      hi: 'वास्तविक संबंध रक्त का नहीं, अपितु संस्कारों और आत्म-बोध का होता है। संग्रह वृत्ति का त्याग ही साधक की शोभा है।',
      en: 'True relationship is of the spirit and divine principles, not merely biological kinship. Renouncing hoard mentality is the true glory of a seeker.'
    },
    keySakhi: {
      pb: 'ਬੂਡਾ ਬੰਸ ਕਬੀਰ ਕਾ, ਉਪਜਿਓ ਪੂਤ ਕਮਾਲ ।\nਹਰਿ ਕਾ ਸਿਮਰਨ ਛੋਡਿ ਕੈ, ਘਰ ਲੇ ਆਵੈ ਮਾਲ ॥',
      hi: 'बूड़ा बंस कबीर का, उपजिओ पूत कमाल ।\nहरि का सिमरन छोड़ि कै, घर ले आवै माल ॥',
      source: {
        hi: 'साखी संग्रह · चेतावनी को अंग',
        pb: 'ਸਾਖੀ ਸੰਗ੍ਰਹਿ · ਚੇਤਾਵਨੀ ਕੋ ਅੰਗ',
        en: 'Sakhi Sangrah · Chetawani Ko Ang'
      }
    }
  },
  {
    id: 'pandit-sarvanand',
    number: 9,
    title: {
      pb: 'ਪੰਡਿਤ ਸਰਵਾਨੰਦ ਜੀ ਦਾ ਅਹੰਕਾਰ ਭੰਜਨ',
      hi: 'पंडित सर्वानंद का अहंकार भंजन',
      en: 'Shattering the Pride of Pandit Sarvanand'
    },
    subtitle: {
      pb: 'ਗੱਡਿਆਂ ਭਰੇ ਸ਼ਾਸਤਰਾਂ ਦੇ ਪਾਂਡੀ ਦਾ ਕਬੀਰ ਸਾਹੇਬ ਦੇ ਇਕ ਬਚਨ ਅੱਗੇ ਝੁਕਣਾ',
      hi: 'ग्रंथों से लदी बैलगाड़ियों वाले प्रकांड विद्वान का कबीर साहेब की विनम्रता के सम्मुख समर्पण',
      en: 'How the scholar carrying cartloads of scriptures was humbled by the supreme truth of love'
    },
    location: {
      pb: 'ਕਾਸ਼ੀ, ਕਬੀਰ ਚੌਰਾ ਕੁਟੀਆ',
      hi: 'काशी, कबीर चौरा कुटिया',
      en: 'Kashi, Kabir Chaura'
    },
    story: {
      pb: [
        'ਦੱਖਣ ਭਾਰਤ ਦਾ ਇਕ ਬਹੁਤ ਵੱਡਾ ਵਿਦਵਾਨ ਪੰਡਿਤ ਸਰਵਾਨੰਦ ਸਾਰੇ ਦੇਸ਼ ਵਿੱਚ ਸ਼ਾਸਤਰਾਰਥ ਜਿੱਤਦਾ ਹੋਇਆ ਕਾਸ਼ੀ ਪਹੁੰਚਿਆ। ਉਸਦੇ ਨਾਲ ਸ਼ਾਸਤਰਾਂ ਅਤੇ ਕਿਤਾਬਾਂ ਨਾਲ ਲੱਦੇ ਹੋਏ ਬੈਲ-ਗੱਡੇ ਚੱਲਦੇ ਸਨ। ਉਸਨੂੰ ਆਪਣੇ ਗਿਆਨ ਦਾ ਬਹੁਤ ਹੰਕਾਰ ਸੀ।',
        'ਉਹ ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਕੁਟੀਆ \'ਤੇ ਪਹੁੰਚਿਆ ਅਤੇ ਬੋਲਿਆ—"ਮੈਂ ਤੁਹਾਡੇ ਨਾਲ ਸ਼ਾਸਤਰਾਰਥ ਕਰਨ ਆਇਆ ਹਾਂ।" ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਹੱਥ ਜੋੜ ਕੇ ਬੜੀ ਨਿਮਰਤਾ ਨਾਲ ਕਿਹਾ—"ਪੰਡਿਤ ਜੀ, ਮੈਂ ਤਾਂ ਅਨਪੜ੍ਹ ਜੁਲਾਹਾ ਹਾਂ, ਮੈਂ ਮਸਿ-ਕਾਗਦ (ਕਲਮ-ਦਵਾਤ) ਛੋਹੀ ਵੀ ਨਹੀਂ। ਮੈਂ ਤਾਂ ਤੁਹਾਡੇ ਨਾਲ ਲੜਨ ਤੋਂ ਪਹਿਲਾਂ ਹੀ ਹਾਰ ਮੰਨਦਾ ਹਾਂ।" ਪੰਡਿਤ ਨੇ ਕਿਹਾ ਕਿ ਲਿਖ ਕੇ ਦਿਓ ਕਿ ਤੁਸੀਂ ਹਾਰ ਗਏ ਹੋ।',
        'ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਲਿਖ ਦਿੱਤਾ: "ਕਬੀਰ ਹਾਰਿਆ, ਸਰਵਾਨੰਦ ਜਿੱਤਿਆ।" ਪਰ ਜਦੋਂ ਪੰਡਿਤ ਨੇ ਘਰ ਜਾ ਕੇ ਕਾਗਜ਼ ਵੇਖਿਆ ਤਾਂ ਉੱਥੇ ਲਿਖਿਆ ਸੀ: "ਸਰਵਾਨੰਦ ਹਾਰਿਆ, ਕਬੀਰ ਜਿੱਤਿਆ।" ਉਹ ਦੁਬਾਰਾ ਆਇਆ, ਤਿੰਨ ਵਾਰ ਅਜਿਹਾ ਹੀ ਹੋਇਆ। ਅੰਤ ਵਿੱਚ ਸਰਵਾਨੰਦ ਨੂੰ ਸਮਝ ਆ ਗਈ ਕਿ ਅੱਖਰੀ ਗਿਆਨ ਨਾਲ ਅਹੰਕਾਰ ਵਧਦਾ ਹੈ, ਪਰ ਆਤਮ-ਗਿਆਨ ਨਾਲ ਨਿਮਰਤਾ ਆਉਂਦੀ ਹੈ। ਉਹ ਕਬੀਰ ਸਾਹੇਬ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਡਿੱਗ ਪਿਆ।'
      ],
      hi: [
        'विद्वान पंडित सर्वानंद शास्त्रों के ज्ञाता थे और विजय-पत्र प्राप्त करते हुए काशी पहुंचे। उनके साथ पुस्तकों से लदे बैलगाड़े चलते थे और उन्हें अपने पांडित्य का घमंड था।',
        'वे कबीर साहेब की कुटिया पर पहुंचे और शास्त्रार्थ की चुनौती दी। कबीर साहेब ने विनम्रता से हाथ जोड़कर कहा: "पंडित जी, मैं तो अनपढ़ जुलाहा हूं। मैंने स्याही-कागज को छुआ तक नहीं, मैं तो आपकी विद्वता के आगे पहले ही अपनी पराजय स्वीकार करता हूं।"',
        'पंडित के आग्रह पर कबीर जी ने विजय-पत्र लिख दिया। किंतु जब पंडित ने उसे खोला, तो वहां लिखा था—"सर्वानंद हारा, कबीर जीता।" कई बार पुनः लिखने पर भी यही अक्षर प्रकट हुए। तब सर्वानंद का ज्ञान-दर्प चूर-चूर हो गया। उन्होंने स्वीकार किया कि पोथी पढ़ने से कोई ज्ञानी नहीं होता, प्रेम के ढाई अक्षर ही सार हैं।'
      ],
      en: [
        'The renowned scholar Pandit Sarvanand traveled across India defeating philosophers in debate, accompanied by bullock carts laden with scriptures. Puffed up with academic arrogance, he challenged Kabir in Kashi.',
        'Kabir folded his hands with gentle humility: "O learned Pandit! I am an illiterate weaver who has never touched pen or paper. I gladly accept defeat before your vast erudition."',
        'Sarvanand demanded a written confession of defeat. Kabir signed: "Kabir is defeated, Sarvanand is victorious." But when Sarvanand opened the parchment, the letters mysteriously read: "Sarvanand is defeated, Kabir is victorious." Three times it was rewritten, with the same divine reversal. Broken of scholarly pride, Sarvanand fell at Kabir\'s feet, realizing that true wisdom is born of love and humility, not bookish conceit.'
      ]
    },
    spiritualEssence: {
      pb: 'ਪੋਥੀਆਂ ਪੜ੍ਹ-ਪੜ੍ਹ ਕੇ ਸੰਸਾਰ ਥੱਕ ਗਿਆ ਪਰ ਕੋਈ ਗਿਆਨੀ ਨਾ ਬਣਿਆ। ਪ੍ਰੇਮ ਦਾ ਢਾਈ ਅੱਖਰ ਪੜ੍ਹਨ ਵਾਲਾ ਹੀ ਸੱਚਾ ਪੰਡਿਤ ਹੈ।',
      hi: 'पोथी पढ़ि पढ़ि जग मुआ, पंडित भया न कोय । ढाई आखर प्रेम का, पढ़े सो पंडित होय ॥',
      en: 'Countless scholars perished reading volumes of scriptures without attaining realization. One who imbibes the word of pure divine love is the true scholar.'
    },
    keySakhi: {
      pb: 'ਪੋਥੀ ਪੜ੍ਹਿ ਪੜ੍ਹਿ ਜਗ ਮੁਆ, ਪੰਡਿਤ ਭਯਾ ਨ ਕੋਇ ।\nਢਾਈ ਆਖਰ ਪ੍ਰੇਮ ਕਾ, ਪੜ੍ਹੈ ਸੋ ਪੰਡਿਤ ਹੋਇ ॥',
      hi: 'पोथी पढ़ि पढ़ि जग मुआ, पंडित भया न कोय ।\nढाई आखर प्रेम का, पढ़े सो पंडित होय ॥',
      source: {
        hi: 'साखी संग्रह · साधु को अंग',
        pb: 'ਸਾਖੀ ਸੰਗ੍ਰਹਿ · ਸਾਧੂ ਕੋ ਅੰਗ',
        en: 'Sakhi Sangrah · Sadhu Ko Ang'
      }
    }
  },
  {
    id: 'mata-loi-milap',
    number: 10,
    title: {
      pb: 'ਮਾਤਾ ਲੋਈ ਜੀ ਦਾ ਪਾਵਨ ਮਿਲਾਪ ਅਤੇ ਗ੍ਰਹਿਸਥ-ਸਾਧਨਾ ਲੀਲਾ',
      hi: 'माता लोई जी का पावन मिलन एवं गृहस्थ-साधना लीला',
      en: 'Meeting Mata Loi & the Sacred Grihastha-Sadhana Leela'
    },
    subtitle: {
      pb: 'ਸਾਧੂ-ਸੇਵਾ, ਸੰਤੋਖ ਅਤੇ ਮਿਹਨਤ ਨਾਲ ਭਰਪੂਰ ਆਦਰਸ਼ ਗ੍ਰਹਿਸਥ ਜੀਵਨ',
      hi: 'साधु-सेवा, संतोष और श्रम-साधना से युक्त आदर्श गृहस्थ जीवन',
      en: 'Ideal spiritual household life grounded in selfless service, contentment, and honest labor'
    },
    location: {
      pb: 'ਕਾਸ਼ੀ, ਗੰਗਾ ਤਟ ਅਤੇ ਕਬੀਰ ਕੁਟੀਆ',
      hi: 'काशी, गंगा तट एवं कबीर कुटिया',
      en: 'Kashi, Ganges bank & Kabir Kutia'
    },
    story: {
      pb: [
        'ਮਾਤਾ ਲੋਈ ਜੀ ਬਾਲਪਨ ਤੋਂ ਹੀ ਇਕ ਤਪੱਸਵੀ ਸੰਤ ਦੇ ਆਸ਼ਰਮ ਵਿੱਚ ਪਲੇ ਸਨ। ਗੰਗਾ ਤਟ \'ਤੇ ਜਦੋਂ ਉਨ੍ਹਾਂ ਨੇ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੇ ਦਰਸ਼ਨ ਕੀਤੇ, ਤਾਂ ਉਨ੍ਹਾਂ ਦੇ ਅੰਦਰ ਪਰਮ ਵੈਰਾਗ ਅਤੇ ਨਿਸ਼ਕਾਮ ਸੇਵਾ ਦਾ ਦੀਵਾ ਜਗ ਪਿਆ। ਉਨ੍ਹਾਂ ਨੇ ਸਤਿਗੁਰੂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਆਪਣਾ ਸਾਰਾ ਜੀਵਨ ਅਰਪਣ ਕਰਨ ਦਾ ਸੰਕਲਪ ਲਿਆ।',
        'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਉਨ੍ਹਾਂ ਨੂੰ ਆਪਣੀ ਸੰਗੀ ਬਣਾਇਆ ਅਤੇ ਦੋਹਾਂ ਨੇ ਮਿਲ ਕੇ ਆਦਰਸ਼ ਗ੍ਰਹਿਸਥ ਜੀਵਨ ਦੀ ਨੀਂਹ ਰੱਖੀ। ਕਬੀਰ ਸਾਹੇਬ ਦਿਨ-ਰਾਤ ਖੱਡੀ \'ਤੇ ਕੱਪੜਾ ਬੁਣਦੇ ਅਤੇ ਮਾਤਾ ਲੋਈ ਧਾਗਾ ਕੱਤਦੀ ਅਤੇ ਆਏ ਹੋਏ ਸਾਧੂ-ਸੰਤਾਂ ਤੇ ਗਰੀਬਾਂ ਲਈ ਰੋਟੀ ਪਕਾਉਂਦੀ।',
        'ਕਈ ਵਾਰ ਘਰ ਵਿੱਚ ਅੰਨ ਦਾ ਇਕ ਦਾਣਾ ਵੀ ਨਾ ਹੁੰਦਾ, ਪਰ ਮਾਤਾ ਲੋਈ ਨੇ ਕਦੇ ਮੱਥੇ \'ਤੇ ਵੱਟ ਨਾ ਪਾਇਆ। ਉਨ੍ਹਾਂ ਨੇ ਸਿਖਾਇਆ ਕਿ ਸੰਤੋਖ ਵਿੱਚ ਹੀ ਸਭ ਤੋਂ ਵੱਡੀ ਦੌਲਤ ਹੈ। ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਗ੍ਰਹਿਸਥ ਵਿੱਚ ਰਹਿ ਕੇ ਸੰਸਾਰ ਨੂੰ ਵਿਖਾਇਆ ਕਿ ਘਰ-ਬਾਰ ਛੱਡ ਕੇ ਜੰਗਲਾਂ ਵਿੱਚ ਭੱਜਣ ਦੀ ਲੋੜ ਨਹੀਂ, ਸਗੋਂ ਜਲ ਵਿੱਚ ਕਮਲ ਵਾਂਗ ਰਹਿਣਾ ਹੀ ਸੱਚਾ ਵੈਰਾਗ ਹੈ।'
      ],
      hi: [
        'माता लोई जी का बाल्यकाल एक त्यागी संत के आश्रम में बीता था। गंगा तट पर जब उन्होंने सतगुरु कबीर साहेब के शांत, तेजोमय मुखारविंद के दर्शन किए, तो उनके भीतर आत्म-समर्पण और निष्काम सेवा की ज्योति प्रज्वलित हो उठी।',
        'कबीर साहेब ने उन्हें अपनी सहधर्मिणी और पावन संगी के रूप में स्वीकार किया। दोनों ने मिलकर श्रम और सेवा पर आधारित गृहस्थ जीवन का अनुपम आदर्श स्थापित किया। कबीर साहेब करघे पर कपड़ा बुनते और माता लोई सूत काततीं तथा अतिथि संतों की निष्कपट भाव से सेवा करतीं।',
        'अनेक बार घर में अन्न का अभाव होने पर भी माता लोई ने कभी अभाव की चिंता नहीं की। कबीर साहेब ने प्रमाणित किया कि प्रभु-प्राप्ति के लिए घर-परिवार त्यागकर वनों में भटकने की आवश्यकता नहीं, अपितु गृहस्थ में रहकर जल में कमल के समान निर्लेप रहना ही सच्ची साधना है।'
      ],
      en: [
        'Mata Loi was raised from infancy in the hermitage of an ascetic on the banks of the Ganges. Upon beholding the celestial serenity of Satguru Kabir, her heart was filled with profound reverence and selfless surrender.',
        'Satguru Kabir accepted her as his noble companion, and together they established the sublime paradigm of spiritual household life. Kabir wove cloth at his loom, while Mata Loi spun the cotton yarn and lovingly served visiting mendicants, seekers, and the destitute.',
        'Even in moments of sheer poverty when not a single grain remained in the kitchen, their contentment remained unshaken. Through their life together, Kabir proved that true liberation requires neither abandoning family nor fleeing to dense forests, but living untainted in worldly duties like a lotus in water.'
      ]
    },
    spiritualEssence: {
      pb: 'ਗ੍ਰਹਿਸਥ ਜੀਵਨ ਭਗਤੀ ਵਿੱਚ ਰੁਕਾਵਟ ਨਹੀਂ, ਸਗੋਂ ਸੇਵਾ ਅਤੇ ਸੰਜਮ ਦੀ ਸੱਚੀ ਤਪੋਭੂਮੀ ਹੈ। ਸੰਤੋਖੀ ਮਨ ਹੀ ਅਸਲ ਵੈਰਾਗੀ ਹੈ।',
      hi: 'गृहस्थ जीवन साधना में बाधक नहीं, बल्कि सेवा और संयम की सर्वोत्तम तपोभूमि है। संतोषी मन ही सच्चा वैरागी है।',
      en: 'Household life is not an obstacle to spiritual realization, but a sacred proving ground for selfless service and restraint. Contentment is true renunciation.'
    },
    keySakhi: {
      pb: 'ਰੂਖਾ ਸੂਖਾ ਖਾਇ ਕੈ, ਠੰਢਾ ਪਾਨੀ ਪੀਵ ।\nਦੇਖਿ ਪਰਾਈ ਚੂਪੜੀ, ਮਤ ਲਲਚਾਵੈ ਜੀਵ ॥',
      hi: 'रूखा सूखा खाय के, ठंडा पानी पीव ।\nदेखि पराई चूपड़ी, मत ललचावै जीव ॥',
      source: {
        hi: 'साखी संग्रह · संतोख को अंग',
        pb: 'ਸਾਖੀ ਸੰਗ੍ਰਹਿ · ਸੰਤੋਖ ਕੋ ਅੰਗ',
        en: 'Sakhi Sangrah · Santokh Ko Ang'
      }
    }
  },
  {
    id: 'gorakhnath-goshthi',
    number: 11,
    title: {
      pb: 'ਸਿੱਧ ਗੋਰਖਨਾਥ ਜੀ ਨਾਲ ਪਾਵਨ ਗਿਆਨ-ਗੋਸ਼ਠੀ ਲੀਲਾ',
      hi: 'सिद्ध गोरखनाथ जी के साथ पावन ज्ञान-गोष्ठी लीला',
      en: 'Divine Spiritual Dialogue with Guru Gorakhnath'
    },
    subtitle: {
      pb: 'ਰਿੱਧੀਆਂ-ਸਿੱਧੀਆਂ ਦੇ ਦਿਖਾਵੇ \'ਤੇ ਸਤਿ-ਸ਼ਬਦ ਅਤੇ ਸਹਿਜ ਸਮਾਧੀ ਦੀ ਸਰਵਉੱਚ ਜਿੱਤ',
      hi: 'ऋद्धि-सिद्धि के प्रदर्शन पर सत्य-शबद और सहज समाधि की सर्वोच्च विजय',
      en: 'The triumph of Supreme Shabda & Sahaj Samadhi over occult miracles and esoteric pride'
    },
    location: {
      pb: 'ਕਾਸ਼ੀ, ਮਣੀਕਰਣਿਕਾ ਅਤੇ ਸਿੱਧ ਵਣ',
      hi: 'काशी, मणिकर्णिका एवं सिद्ध वन',
      en: 'Kashi, Manikarnika Ghat & Siddha Forest'
    },
    story: {
      pb: [
        'ਇਕ ਵਾਰ ਨਾਥ ਪਰੰਪਰਾ ਦੇ ਮਹਾਨ ਯੋਗੀ ਸਿੱਧ ਗੋਰਖਨਾਥ ਜੀ ਆਪਣੇ ਚੇਲਿਆਂ ਸਮੇਤ ਕਾਸ਼ੀ ਆਏ। ਉਨ੍ਹਾਂ ਨੇ ਕਬੀਰ ਸਾਹੇਬ ਨੂੰ ਆਪਣੀਆਂ ਰਿੱਧੀਆਂ-ਸਿੱਧੀਆਂ ਵਿਖਾਉਂਦਿਆਂ ਪਾਣੀ \'ਤੇ ਖੜਾਵਾਂ ਤਰਾ ਕੇ ਅਤੇ ਹਵਾ ਵਿੱਚ ਉੱਡ ਕੇ ਆਪਣੀ ਯੋਗ ਸ਼ਕਤੀ ਦਾ ਪ੍ਰਦਰਸ਼ਨ ਕੀਤਾ ਅਤੇ ਕਬੀਰ ਸਾਹੇਬ ਨੂੰ ਵੀ ਚਮਤਕਾਰ ਵਿਖਾਉਣ ਲਈ ਕਿਹਾ।',
        'ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਬੜੀ ਸ਼ਾਂਤੀ ਨਾਲ ਮੁਸਕੁਰਾਉਂਦੇ ਹੋਏ ਕਿਹਾ: "ਗੋਰਖ ਜੀ! ਪਾਣੀ \'ਤੇ ਤਾਂ ਮੱਛੀ ਵੀ ਤੈਰ ਲੈਂਦੀ ਹੈ ਅਤੇ ਹਵਾ ਵਿੱਚ ਪੰਛੀ ਵੀ ਉੱਡ ਲੈਂਦੇ ਹਨ। ਇਨ੍ਹਾਂ ਚਮਤਕਾਰਾਂ ਨਾਲ ਜੀਵ ਦਾ ਕਾਲ ਅਤੇ ਜਨਮ-ਮਰਨ ਦਾ ਚੱਕਰ ਕਿਵੇਂ ਮਿਟੇਗਾ? ਇਹ ਤਾਂ ਮਾਇਆ ਦੇ ਖਿਡੌਣੇ ਹਨ।" ',
        'ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਗੋਰਖਨਾਥ ਜੀ ਨੂੰ ਅਨਹਦ ਸ਼ਬਦ, ਸਤਯਨਾਮ ਅਤੇ ਅਮਰਲੋਕ ਦਾ ਪਰਮ ਭੇਦ ਖੋਲ੍ਹ ਕੇ ਸੁਣਾਇਆ, ਜਿੱਥੇ ਮਾਇਆ, ਮਨ ਅਤੇ ਕਾਲ ਦੀ ਕੋਈ ਪਹੁੰਚ ਨਹੀਂ। ਗੋਰਖਨਾਥ ਜੀ ਕਬੀਰ ਸਾਹੇਬ ਦੇ ਬ੍ਰਹਮ-ਗਿਆਨ ਅਤੇ ਸਹਿਜ ਸਮਾਧੀ ਅੱਗੇ ਨਤਮਸਤਕ ਹੋ ਗਏ ਅਤੇ ਸਵੀਕਾਰ ਕੀਤਾ ਕਿ ਬਾਹਰੀ ਕਠਿਨ ਪ੍ਰਾਣਾਯਾਮ ਨਾਲੋਂ ਅੰਦਰੂਨੀ ਸਤਿਗੁਰੂ ਭਗਤੀ ਹੀ ਸਰਵਉੱਚ ਹੈ।'
      ],
      hi: [
        'नाथ संप्रदाय के महान सिद्ध योगी गोरखनाथ जी ने काशी में कबीर साहेब से भेंट की। गोरखनाथ जी ने अपनी योग सिद्धियों का प्रदर्शन करते हुए जल पर अपनी खड़ाऊं तैराई और आकाश में अधर स्थित होकर कबीर साहेब को चमत्कार दिखाने की चुनौती दी।',
        'कबीर साहेब ने सहज भाव से कहा: "हे सिद्ध योगी! जल पर तो मेंढक और मत्स्य भी तैर लेते हैं, और आकाश में पक्षी भी उड़ते हैं। इन बाह्य करामातों से आत्मा का चौरासी का बंधन कैसे कटेगा? सिद्धियां तो माया का ही सूक्ष्म जाल हैं।"',
        'कबीर साहेब ने उन्हें सुरति-शब्द योग, अनाहत नाद और सत्यलोक का परम रहस्य उद्घाटित किया। गोरखनाथ जी का योग-दर्प शांत हो गया और उन्होंने स्वीकार किया कि बाह्य हठयोग की अपेक्षा सद्गुरु का सहज प्रेम और शब्द-सुमिरन ही आत्मा को अमर पद प्रदान करता है।'
      ],
      en: [
        'The revered Siddha Yogi Gorakhnath visited Kashi and challenged Satguru Kabir, demonstrating esoteric occult feats—floating his sandals upon the river and levitating in mid-air—demanding Kabir to showcase his yogic powers.',
        'Kabir smiled serenely and replied: "O Yogi! Fishes swim upon water and birds soar in the sky with ease. Do such shallow tricks liberate the soul from birth and death? They are merely toys of illusion."',
        'Kabir revealed to Gorakhnath the inner realm of Surat-Shabda Yoga, Anahat Nada, and the timeless Amaralok beyond the reach of time and mind. Humbled, Gorakhnath bowed in deep reverence, acknowledging that inner realization through the True Guru surpasses all outer asceticism.'
      ]
    },
    spiritualEssence: {
      pb: 'ਜੋਗ, ਤਪ ਅਤੇ ਰਿੱਧੀਆਂ-ਸਿੱਧੀਆਂ ਮਾਇਆ ਦਾ ਪ੍ਰਪੰਚ ਹਨ। ਸਤਿਗੁਰੂ ਦੇ ਸ਼ਬਦ ਅਤੇ ਸਹਿਜ ਸਮਾਧੀ ਬਿਨਾਂ ਮੁਕਤੀ ਅਸੰਭਵ ਹੈ।',
      hi: 'योग, तप और ऋद्धियां-सिद्धियां माया का प्रपंच हैं। सद्गुरु के पावन शब्द और सहज समाधि के बिना मुक्ति असंभव है।',
      en: 'Yogic austerities and occult powers are merely spiritual glitter. Without the Master\'s Word and Sahaj Samadhi, liberation remains out of reach.'
    },
    keySakhi: {
      pb: 'ਅਵਧੂ ਗਗਨ ਘਟਾ ਘਹਰਾਨੀ, ਮਨ ਬਉਰਾਨਾ ਰੇ ।\nਸਹਜ ਸਮਾਧਿ ਅਗਮ ਘਰ ਬਾਸਾ, ਜਹਾਂ ਨਹਿਂ ਆਵਨ-ਜਾਨਾ ਰੇ ॥',
      hi: 'अवधू गगन घटा घहरानी, मन बौराना रे ।\nसहज समाधि अगम घर बासा, जहां नहिं आवन-जाना रे ॥',
      source: {
        hi: 'कबीर बीजक · रमैनी',
        pb: 'ਕਬੀਰ ਬੀਜਕ · ਰਮੈਨੀ',
        en: 'Kabir Bijak · Ramaini'
      }
    }
  },
  {
    id: 'dharmadas-bodh',
    number: 12,
    title: {
      pb: 'ਭਗਤ ਧਨੀ ਧਰਮਦਾਸ ਜੀ ਦਾ ਆਤਮ-ਬੋਧ ਅਤੇ ਸਮਰਪਣ ਲੀਲਾ',
      hi: 'भक्त धनी धर्मदास जी का आत्म-बोध एवं समर्पण लीला',
      en: 'Awakening and Surrender of Bhakt Dharmadas Ji'
    },
    subtitle: {
      pb: 'ਕਰੋੜਾਂ ਦੀ ਸੰਪਤੀ ਤੇ ਕਰਮਕਾਂਡ ਤਿਆਗ ਕੇ ਅਮਰਲੋਕ ਦੀ ਦੀਖਿਆ ਪ੍ਰਾਪਤ ਕਰਨਾ',
      hi: 'करोड़ों की संपत्ति और बाह्य कर्मकांड त्यागकर अमरलोक की दीक्षा प्राप्त करना',
      en: 'Renouncing immense wealth and rituals to receive the sacred initiation of Anurag Sagar'
    },
    location: {
      pb: 'ਬਾਂਧਵਗੜ੍ਹ (ਮੱਧ ਪ੍ਰਦੇਸ਼) ਅਤੇ ਮਥੁਰਾ ਘਾਟ',
      hi: 'बांधवगढ़ (मध्य प्रदेश) एवं मथुरा घाट',
      en: 'Bandhavgarh (Madhya Pradesh) & Mathura Ghat'
    },
    story: {
      pb: [
        'ਬਾਂਧਵਗੜ੍ਹ ਦੇ ਪ੍ਰਸਿੱਧ ਧਨਾਢ ਵਪਾਰੀ ਧਰਮਦਾਸ ਜੀ ਧਾਰਮਿਕ ਬਿਰਤੀ ਦੇ ਮਾਲਕ ਸਨ, ਪਰ ਪੱਥਰ-ਪੂਜਾ, ਵਰਤਾਂ ਅਤੇ ਤੀਰਥਾਂ ਦੇ ਕਰਮਕਾਂਡ ਵਿੱਚ ਉਲਝੇ ਹੋਏ ਸਨ। ਮਥੁਰਾ ਦੇ ਜਮਨਾ ਘਾਟ \'ਤੇ ਜਦੋਂ ਉਹ ਸ਼ਾਲਿਗ੍ਰਾਮ ਦੀ ਪੂਜਾ ਕਰਕੇ ਭੋਗ ਲਗਾ ਰਹੇ ਸਨ, ਤਾਂ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਇਕ ਸਾਧੂ ਦੇ ਭੇਸ ਵਿੱਚ ਉੱਥੇ ਪ੍ਰਗਟ ਹੋਏ।',
        'ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਪੁੱਛਿਆ: "ਸੇਠ ਜੀ! ਜਿਸ ਪੱਥਰ ਦੀ ਤੁਸੀਂ ਪੂਜਾ ਕਰ ਰਹੇ ਹੋ, ਕੀ ਉਸਨੇ ਕਦੇ ਭੋਗ ਖਾਧਾ? ਜੇਕਰ ਤੁਹਾਡੀ ਕਿਸ਼ਤੀ ਪਾਣੀ ਵਿੱਚ ਡੁੱਬਣ ਲੱਗੇ ਤਾਂ ਇਹ ਪੱਥਰ ਤੁਹਾਨੂੰ ਤਾਰੇਗਾ ਜਾਂ ਡੋਬੇਗਾ?" ਇਸ ਪ੍ਰਸ਼ਨ ਨੇ ਧਰਮਦਾਸ ਜੀ ਦੇ ਅੰਦਰ ਗਿਆਨ ਦੀ ਚਿਣਗ ਜਗਾ ਦਿੱਤੀ।',
        'ਬਾਅਦ ਵਿੱਚ ਬਾਂਧਵਗੜ੍ਹ ਵਿਖੇ ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਧਰਮਦਾਸ ਜੀ ਨੂੰ ਅਨੁਰਾਗ ਸਾਗਰ ਦਾ ਪਰਮ ਰੂਹਾਨੀ ਉਪਦੇਸ਼ ਦਿੱਤਾ। ਧਰਮਦਾਸ ਜੀ ਨੇ ਆਪਣੀ ਕਰੋੜਾਂ ਦੀ ਦੌਲਤ ਦੀਨ-ਦੁਖੀਆਂ ਵਿੱਚ ਵੰਡ ਦਿੱਤੀ ਅਤੇ ਸਤਿਗੁਰੂ ਦੇ ਮੁੱਖ ਸ਼ਿਸ਼ ਬਣ ਕੇ ਸਤਯਨਾਮ ਦਾ ਪ੍ਰਚਾਰ ਕੀਤਾ।'
      ],
      hi: [
        'बांधवगढ़ के अत्यंत समृद्ध व्यवसायी धर्मदास जी धार्मिक स्वभाव के थे, किंतु पाषाण-पूजा, तीर्थाटन और कर्मकांडों के जाल में जकड़े हुए थे। मथुरा में यमुना तट पर जब वे शालिग्राम शिला को भोग लगा रहे थे, तब कबीर साहेब एक फकीर के वेश में पधारे।',
        'कबीर साहेब ने उनसे पूछा: "हे धर्मात्मा सेठ! जिस पाषाण को तुम पूज रहे हो, क्या उसने कभी तुम्हारे प्रेम का उत्तर दिया? यदि विपत्ति की नदी में डूबो, तो यह पत्थर तुम्हें उबारेगा अथवा और गहराई में डुबो देगा?" इस मर्मभेदी प्रश्न ने धर्मदास के अंतःकरण को झकझोर दिया।',
        'कालांतर में बांधवगढ़ में कबीर साहेब ने उन्हें सृष्टि-रचना, काल के फंदे और सत्यलोक के अमर नाम की दीक्षा प्रदान की। धर्मदास जी ने अपनी संपूर्ण संपत्ति का त्याग कर स्वयं को सतगुरु चरणों में समर्पित कर दिया और कबीर परंपरा के महान ग्रंथ "अनुराग सागर" का संकलन किया।'
      ],
      en: [
        'Dharmadas, an immensely wealthy merchant of Bandhavgarh, was deeply devout but hopelessly entangled in stone idolatry and ceremonial pilgrimages. While offering food to a sacred Saligram stone at the Mathura ghat, Satguru Kabir appeared before him as an unassuming wanderer.',
        'Kabir posed a piercing question: "O noble merchant! Does that silent stone eat your food or answer your longing? If you sink in stormy waters, will that stone lift you or pull you deeper into the abyss?" This simple truth ignited an inner spiritual revolution in Dharmadas.',
        'Later at Bandhavgarh, Kabir initiated Dharmadas into the mystery of creation and the immortal word of Satyanaam. Dharmadas distributed his vast fortune to the needy, dedicated his life to the Satguru, and transcribed the immortal scripture "Anurag Sagar."'
      ]
    },
    spiritualEssence: {
      pb: 'ਬਾਹਰੀ ਪਖੰਡ ਅਤੇ ਪੱਥਰਾਂ ਦੀ ਪੂਜਾ ਨਾਲ ਆਤਮਾ ਦਾ ਉਧਾਰ ਨਹੀਂ ਹੁੰਦਾ। ਅੰਦਰਲੇ ਚੇਤਨ ਪ੍ਰਭੂ ਨੂੰ ਪਛਾਣ ਕੇ ਸਤਿਗੁਰੂ ਦੀ ਸ਼ਰਨ ਲੈਣਾ ਹੀ ਮੁਕਤੀ ਹੈ।',
      hi: 'बाह्य आडंबर और पत्थरों की पूजा से आत्मा तृप्त नहीं होती। भीतर छिपे चेतन देव को पहचानकर सद्गुरु की शरण लेना ही परम कल्याण है।',
      en: 'External ceremonies and idols cannot quench the thirst of the soul. Awakening to the Indwelling Divinity through the Satguru is true liberation.'
    },
    keySakhi: {
      pb: 'ਪਾਹਨ ਪੂਜੇ ਹਰਿ ਮਿਲੈ, ਤੋ ਮੈਂ ਪੂਜੌਂ ਪਹਾਰ ।\nਤਾਤੇ ਯਹ ਚਾਕੀ ਭਲੀ, ਪੀਸ ਖਾਇ ਸੰਸਾਰ ॥',
      hi: 'पाहन पूजे हरि मिलै, तो मैं पूजौं पहार ।\nताते यह चाकी भली, पीस खाय संसार ॥',
      source: {
        hi: 'साखी संग्रह · साखी १३५',
        pb: 'ਸਾਖੀ ਸੰਗ੍ਰਹਿ · ਸਾਖੀ ੧੩੫',
        en: 'Sakhi Sangrah · Sakhi 135'
      }
    }
  },
  {
    id: 'supach-sudarshan-yajna',
    number: 13,
    title: {
      pb: 'ਭਗਤ ਸੁਪਚ ਸੁਦਰਸ਼ਨ ਅਤੇ ਦ੍ਰੌਪਦੀ ਦੇ ਯੱਗ ਦੀ ਪਾਵਨ ਲੀਲਾ',
      hi: 'भक्त सुपच सुदर्शन एवं द्रौपदी के यज्ञ की पावन लीला',
      en: 'Devotee Supach Sudarshan & the Miracle of the Divine Bell'
    },
    subtitle: {
      pb: 'ਸਾਰੇ ਰਾਜਿਆਂ-ਪੰਡਿਤਾਂ ਦਾ ਹੰਕਾਰ ਟੁੱਟ ਕੇ ਇਕ ਨਿਰਮਲ ਭਗਤ ਦੀ ਗਿਰਾਹੀ ਨਾਲ ਅਲੌਕਿਕ ਸ਼ੰਖ ਦਾ ਗੂੰਜਣਾ',
      hi: 'समस्त राजाओं-पंडितों का घमंड टूटकर एक निष्कपट भक्त के कौर से दिव्य शंख का गूंजना',
      en: 'How the divine conch rang only when a humble, innocent devotee accepted a morsel of food'
    },
    location: {
      pb: 'ਹਸਤਿਨਾਪੁਰ, ਰਾਜਸੂਇ ਯੱਗ ਮੰਡਪ',
      hi: 'हस्तिनापुर, राजसूय यज्ञ मंडप',
      en: 'Hastinapur, Sacred Yajna Pavilion'
    },
    story: {
      pb: [
        'ਮਹਾਂਭਾਰਤ ਦੇ ਰਾਜਸੂਇ ਯੱਗ ਦੀ ਸਮਾਪਤੀ \'ਤੇ ਇਕ ਅਲੌਕਿਕ ਸ਼ੰਖ ਟੰਗਿਆ ਗਿਆ ਸੀ। ਆਕਾਸ਼ਵਾਣੀ ਸੀ ਕਿ ਜਦੋਂ ਕਿਸੇ ਪਰਮ ਪਵਿੱਤਰ ਭਗਤ ਦੇ ਭੋਜਨ ਕਰਨ ਨਾਲ ਇਹ ਸ਼ੰਖ ਆਪਣੇ ਆਪ ਵੱਜੇਗਾ, ਤਾਂ ਹੀ ਯੱਗ ਸੰਪੰਨ ਮੰਨਿਆ ਜਾਵੇਗਾ। ਹਜ਼ਾਰਾਂ ਰਾਜਿਆਂ, ਰਿਸ਼ੀਆਂ ਅਤੇ ਵਿਦਵਾਨਾਂ ਦੇ ਭੋਜਨ ਕਰਨ \'ਤੇ ਵੀ ਸ਼ੰਖ ਨਾ ਵੱਜਿਆ।',
        'ਭਗਵਾਨ ਕ੍ਰਿਸ਼ਨ ਨੇ ਦੱਸਿਆ ਕਿ ਜਦੋਂ ਤੱਕ ਨਿਰਛਲ ਸੰਤ ਸੁਪਚ ਸੁਦਰਸ਼ਨ (ਕਬੀਰ ਭਗਤੀ ਦੇ ਪ੍ਰਤੀਕ) ਭੋਜਨ ਨਹੀਂ ਕਰਨਗੇ, ਉਦੋਂ ਤੱਕ ਯੱਗ ਅਧੂਰਾ ਹੈ। ਜਦੋਂ ਸੁਪਚ ਸੁਦਰਸ਼ਨ ਜੀ ਨੂੰ ਆਦਰ ਨਾਲ ਬੁਲਾਇਆ ਗਿਆ, ਤਾਂ ਉੱਚੀ ਜਾਤ ਦੇ ਹੰਕਾਰੀ ਵਿਦਵਾਨ ਉਨ੍ਹਾਂ ਨੂੰ ਨੀਵੀਂ ਨਜ਼ਰ ਨਾਲ ਵੇਖਣ ਲੱਗੇ।',
        'ਜਿਵੇਂ ਹੀ ਸੁਪਚ ਸੁਦਰਸ਼ਨ ਜੀ ਨੇ ਪ੍ਰਭੂ ਦੇ ਪ੍ਰੇਮ ਵਿੱਚ ਭਿੱਜ ਕੇ ਪਹਿਲੀ ਗਿਰਾਹੀ ਮੁੱਖ ਵਿੱਚ ਪਾਈ, ਆਕਾਸ਼ੀ ਸ਼ੰਖ ਗਰਜ ਉੱਠਿਆ ਅਤੇ ਲਗਾਤਾਰ ਵੱਜਣ ਲੱਗਾ। ਇਸ ਲੀਲਾ ਨੇ ਸੰਸਾਰ ਨੂੰ ਸਿਖਾਇਆ ਕਿ ਪਰਮਾਤਮਾ ਜਾਤ-ਪਾਤ ਜਾਂ ਕੁੱਲ ਦੀ ਨਹੀਂ, ਕੇਵਲ ਹਿਰਦੇ ਦੀ ਸ਼ੁੱਧਤਾ ਅਤੇ ਪ੍ਰੇਮ ਦੇ ਭੁੱਖੇ ਹਨ।'
      ],
      hi: [
        'राजसूय यज्ञ के अवसर पर आकाश में एक दिव्य शंख स्थापित किया गया था। मान्यता थी कि जब किसी सच्चे और निष्पाप संत के भोजन करने से यह शंख स्वतः गूंजेगा, तभी यज्ञ सफल माना जाएगा। सहस्रों चक्रवर्ती राजाओं और तपस्वी मुनियों के भोजन उपरांत भी शंख मौन रहा।',
        'श्रीकृष्ण के निर्देश पर अत्यंत दीन-हीन और समाज द्वारा उपेक्षित समझे जाने वाले परम भक्त सुपच सुदर्शन को आदरपूर्वक आमंत्रित किया गया। यद्यपि अभिमानी लोग उनके साधारण वेश पर संशय कर रहे थे, किंतु द्रौपदी और प्रभु ने उन्हें सात्विक भाव से परोसा।',
        'जैसे ही सुपच सुदर्शन जी ने ईश्वर-स्मरण कर एक ग्रास ग्रहण किया, वह दिव्य शंख आकाश में गगनभेदी स्वर से निनादित हो उठा। समस्त उपस्थित जनों का जातिगत अहंकार चूर हो गया और यह सिद्ध हुआ कि ईश्वर के दरबार में केवल निर्मल भक्ति ही मान्य है।'
      ],
      en: [
        'At the grand sacrificial feast of the Rajasuya Yajna, a celestial conch was suspended in the sky. Prophecy decreed that the yajna would be fulfilled only when the conch sounded on its own upon being graced by a truly immaculate devotee. Thousands of crowned emperors and learned priests feasted, yet the conch remained utterly silent.',
        'At Lord Krishna\'s counsel, the humble devotee Supach Sudarshan, considered lowly by orthodox society, was respectfully invited. When proud courtiers looked upon him with disdain, the Lord Himself served him with utmost reverence.',
        'The instant Supach accepted a single morsel with pure, innocent gratitude in remembrance of God, the celestial conch reverberated thunderously across the heavens. All vanity of caste, birth, and erudition was dissolved in the triumph of pure devotion.'
      ]
    },
    spiritualEssence: {
      pb: 'ਪਰਮਾਤਮਾ ਜਾਤ-ਪਾਤ, ਉੱਚੇ ਅਹੁਦੇ ਜਾਂ ਧਨ-ਦੌਲਤ ਦੇ ਭੁੱਖੇ ਨਹੀਂ ਹਨ। ਉਹ ਕੇਵਲ ਨਿਰਮਲ ਪ੍ਰੇਮ ਅਤੇ ਨਿਮਰ ਭਾਵਨਾ ਦੇ ਅਧੀਨ ਹਨ।',
      hi: 'परमात्मा बाह्य जाति, पद या धन-वैभव के भूखे नहीं हैं। वे केवल निर्मल प्रेम और निष्कपट भाव के वशीभूत हैं।',
      en: 'The Divine seeks neither high birth, worldly prestige, nor ostentatious wealth. The Lord is won solely by pure, humble, unpretentious devotion.'
    },
    keySakhi: {
      pb: 'ਕਬੀਰ ਸੋਈ ਕੁਲ ਭਲੋ, ਜਾ ਕੁਲ ਉਪਜੈ ਸੰਤ ।\nਜਾ ਕੁਲ ਸੰਤ ਨ ਊਪਜੈ, ਸੋ ਕੁਲ ਅੰਤ ਵਿਅੰਤ ॥',
      hi: 'कबीर सोई कुल भलो, जा कुल उपजै संत ।\nजा कुल संत न ऊपजै, सो कुल अंत विअंत ॥',
      source: {
        hi: 'साखी संग्रह · साधु को अंग',
        pb: 'ਸਾਖੀ ਸੰਗ੍ਰਹਿ · ਸਾਧੂ ਕੋ ਅੰਗ',
        en: 'Sakhi Sangrah · Sadhu Ko Ang'
      }
    }
  },
  {
    id: 'jhini-jhini-chadar',
    number: 14,
    title: {
      pb: 'ਖੱਡੀ ਦਾ ਤਾਣਾ-ਪੇਟਾ ਅਤੇ \'ਝੀਨੀ ਝੀਨੀ ਚਦਰਿਆ\' ਲੀਲਾ',
      hi: 'करघे का ताना-बाना एवं \'झीनी झीनी चदरिया\' लीला',
      en: 'The Cosmic Loom & the Mystery of \'Jhini Jhini Chadariya\''
    },
    subtitle: {
      pb: 'ਕੱਪੜਾ ਬੁਣਦੇ-ਬੁਣਦੇ ਸੰਸਾਰ ਨੂੰ ਦੇਹੀ ਅਤੇ ਆਤਮਾ ਦਾ ਪਰਮ ਭੇਦ ਸਮਝਾਉਣਾ',
      hi: 'कपड़ा बुनते-बुनते संसार को देह और चेतना का परम रहस्य समझाना',
      en: 'Weaving cloth while unveiling the profound mystery of the mortal body and pristine soul'
    },
    location: {
      pb: 'ਕਾਸ਼ੀ, ਜੁਲਾਹਾ ਮੁਹੱਲਾ',
      hi: 'काशी, जुलाहा टोला',
      en: 'Kashi, Weaver Quarter'
    },
    story: {
      pb: [
        'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਕਾਸ਼ੀ ਵਿੱਚ ਰੋਜ਼ਾਨਾ ਆਪਣੀ ਖੱਡੀ \'ਤੇ ਕੱਪੜਾ ਬੁਣਦੇ ਸਨ। ਹਰ ਧਾਗੇ ਨਾਲ ਉਹ ਰਾਮ-ਨਾਮ ਦਾ ਸਿਮਰਨ ਕਰਦੇ ਸਨ। ਜਦੋਂ ਗਾਹਕ ਕੱਪੜੇ ਦਾ ਮੁੱਲ ਪੁੱਛਦੇ, ਤਾਂ ਉਹ ਬਿਨਾਂ ਕਿਸੇ ਮੁਨਾਫ਼ੇ ਦੇ ਕੇਵਲ ਸੂਤ ਦਾ ਅਸਲ ਮੁੱਲ ਲੈਂਦੇ।',
        'ਇਕ ਵਾਰ ਕੜਾਕੇ ਦੀ ਠੰਢ ਵਿੱਚ ਇਕ ਕੰਬਦਾ ਹੋਇਆ ਨੰਗਾ ਫਕੀਰ ਕਬੀਰ ਸਾਹੇਬ ਦੇ ਬੂਹੇ \'ਤੇ ਆਇਆ ਅਤੇ ਬਸਤਰ ਮੰਗਿਆ। ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਬਿਨਾਂ ਪਲ ਦੀ ਦੇਰੀ ਕੀਤੇ ਆਪਣੀ ਸਾਰੀ ਹਫ਼ਤੇ ਦੀ ਮਿਹਨਤ ਨਾਲ ਬੁਣਿਆ ਹੋਇਆ ਥਾਨ ਅੱਧਾ ਪਾੜ ਕੇ ਉਸ ਫਕੀਰ ਨੂੰ ਦੇ ਦਿੱਤਾ। ਜਦੋਂ ਫਕੀਰ ਨੇ ਬਾਕੀ ਅੱਧਾ ਵੀ ਮੰਗ ਲਿਆ, ਤਾਂ ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਮੁਸਕੁਰਾ ਕੇ ਸਾਰਾ ਕੱਪੜਾ ਉਸਨੂੰ ਭੇਟ ਕਰ ਦਿੱਤਾ।',
        'ਉਸੇ ਸ਼ਾਮ ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਮਨੁੱਖਾ ਸਰੀਰ ਨੂੰ ਇਕ ਅਲੌਕਿਕ ਚਾਦਰ ਦੱਸਦਿਆਂ ਅਮਰ ਪਦ ਰਚਿਆ: "ਝੀਨੀ ਝੀਨੀ ਬੀਨੀ ਚਦਰਿਆ।" ਉਨ੍ਹਾਂ ਦੱਸਿਆ ਕਿ ਇਹ ਸਰੀਰ ਪੰਜ ਤੱਤਾਂ ਅਤੇ ਸੁਆਸਾਂ ਦੇ ਤਾਣੇ-ਪੇਟੇ ਨਾਲ ਬੁਣਿਆ ਹੋਇਆ ਹੈ। ਸਤਿਗੁਰੂ ਨੇ ਇਸਨੂੰ ਜਤਨ ਨਾਲ ਵਰਤਿਆ ਅਤੇ ਬਿਨਾਂ ਕਿਸੇ ਦਾਗ਼-ਵਿਕਾਰ ਦੇ ਪ੍ਰਭੂ ਨੂੰ ਜਿਉਂ ਦੀ ਤਿਉਂ ਅਰਪ ਦਿੱਤਾ।'
      ],
      hi: [
        'सतगुरु कबीर साहेब प्रतिदिन अपने करघे पर बैठकर ताना-बाना बुनते थे। प्रत्येक तार के साथ वे राम-सुमिरन की अखंड धारा में लीन रहते। जो कोई कपड़ा खरीदने आता, वे बिना किसी प्रपंच के सूत की वास्तविक लागत पर ही कपड़ा दे देते।',
        'शीत ऋतु की एक अत्यंत ठंडी सुबह एक कांपता हुआ निर्धन याचक कबीर जी के द्वार पर आया। कबीर साहेब ने अपनी पूरे सप्ताह की निष्ठा से बुना हुआ उत्तम वस्त्र निकाला और आधा फाड़कर उस याचक को ओढ़ा दिया। जब उस याचक ने कहा कि आधा कपड़ा पर्याप्त नहीं है, तो कबीर साहेब ने सहर्ष शेष आधा भी उसे अर्पित कर दिया।',
        'उसी रात्रि कबीर साहेब के अंतस से वह कालजयी पद प्रस्फुटित हुआ—"झीनी झीनी बीनी चदरिया।" उन्होंने मानव देह को पंच-तत्वों और श्वासों के धागों से बुनी एक सूक्ष्म चादर बताया और संदेश दिया कि इसे वासनाओं के मैल से बचाकर साधना द्वारा निर्मल रखना ही जीवन की सार्थकता है।'
      ],
      en: [
        'Satguru Kabir sat daily at his handloom, weaving shuttle and thread with uninterrupted remembrance of the Divine Name. Customers were astonished by his absolute honesty, as he sold cloth strictly at the cost of the raw yarn.',
        'On a freezing winter morning, a shivering, destitute mendicant stood at Kabir\'s threshold begging for covering. Without a second thought, Kabir tore in half the exquisite cloth he had labored over all week and draped it over the seeker. When the mendicant asked for the remaining half, Kabir handed it over with joy, praising the Lord.',
        'That evening, Kabir composed the immortal mystical song "Jhini Jhini Beeni Chadariya," likening the human frame to an exquisite garment woven from five elements and rhythmic breaths of life, exhorting seekers to return this divine gift to the Creator spotless and untainted by ego.'
      ]
    },
    spiritualEssence: {
      pb: 'ਇਹ ਮਨੁੱਖਾ ਸਰੀਰ ਪ੍ਰਭੂ ਵੱਲੋਂ ਦਿੱਤੀ ਗਈ ਇਕ ਪਵਿੱਤਰ ਚਾਦਰ ਹੈ। ਇਸਨੂੰ ਵਿਕਾਰਾਂ ਨਾਲ ਮੈਲਾ ਨਾ ਹੋਣ ਦਿਓ, ਸਗੋਂ ਭਗਤੀ ਨਾਲ ਨਿਰਮਲ ਰੱਖ ਕੇ ਪ੍ਰਭੂ ਨੂੰ ਅਰਪਣ ਕਰੋ।',
      hi: 'यह मानव देह ईश्वर द्वारा दिया गया एक पावन वस्त्र है। इसे वासनाओं और विकारों से मैला न होने दें, बल्कि साधना से पवित्र रखकर प्रभु को अर्पण करें।',
      en: 'The human body is an exquisite celestial cloak lent to the soul. Guard it against vices and delusion, keeping it spotless through remembrance and devotion.'
    },
    keySakhi: {
      pb: 'ਝੀਨੀ ਝੀਨੀ ਬੀਨੀ ਚਦਰਿਆ, ਸੋ ਚਾਦਰ ਸੁਰ-ਨਰ-ਮੁਨਿ ਓਢੀ ।\nਦਾਸ ਕਬੀਰ ਜਤਨ ਸੋ ਓਢੀ, ਜ੍ਯੋਂ ਕੀ ਤ੍ਯੋਂ ਧਰ ਦੀਨ੍ਹੀ ਚਦਰਿਆ ॥',
      hi: 'झीनी झीनी बीनी चदरिया, सो चादर सुर-नर-मुनि ओढ़ी ।\nदास कबीर जतन सो ओढ़ी, ज्यों की त्यों धर दीन्ही चदरिया ॥',
      source: {
        hi: 'कबीर साखी संग्रह · पद संग्रह',
        pb: 'ਕਬੀਰ ਸਾਖੀ ਸੰਗ੍ਰਹਿ · ਪਦ ਸੰਗ੍ਰਹਿ',
        en: 'Kabir Sakhi Sangrah · Pad Sangrah'
      }
    }
  },
  {
    id: 'raja-birsingh-bijlikhan',
    number: 15,
    title: {
      pb: 'ਰਾਜਾ ਬੀਰਸਿੰਘ ਦੇਵ ਅਤੇ ਨਵਾਬ ਬਿਜਲੀ ਖ਼ਾਂ ਦੀ ਪਾਵਨ ਸ਼ਰਣਾਗਤੀ',
      hi: 'राजा बीरसिंह देव एवं नवाब बिजली खां की पावन शरणागति',
      en: 'The Surrender of King Bir Singh Dev & Nawab Bijli Khan'
    },
    subtitle: {
      pb: 'ਤਾਜ ਅਤੇ ਤਲਵਾਰਾਂ ਝੁਕਾ ਕੇ ਸਤਯਨਾਮ ਦੇ ਪਾਵਨ ਪ੍ਰੇਮ ਵਿੱਚ ਇਕ-ਮਿਕ ਹੋਣਾ',
      hi: 'राजमुकुट और तलवारें झुकाकर सत्यनाम के पावन प्रेम में एकाकार होना',
      en: 'How a mighty Hindu king and a fierce Muslim commander knelt together as brothers in Satyanaam'
    },
    location: {
      pb: 'ਮਗਹਰ ਅਤੇ ਕਾਸ਼ੀ',
      hi: 'मगहर एवं काशी',
      en: 'Maghar & Kashi'
    },
    story: {
      pb: [
        'ਬਘੇਲਖੰਡ ਦੇ ਸ਼ਕਤੀਸ਼ਾਲੀ ਹਿੰਦੂ ਸ਼ਾਸਕ ਰਾਜਾ ਬੀਰਸਿੰਘ ਦੇਵ ਅਤੇ ਗੋਰਖਪੁਰ ਦੇ ਮੁਸਲਿਮ ਨਵਾਬ ਬਿਜਲੀ ਖ਼ਾਂ ਪਠਾਣ ਆਪਸ ਵਿੱਚ ਰਾਜਨੀਤਿਕ ਅਤੇ ਧਾਰਮਿਕ ਵਿਰੋਧੀ ਸਨ। ਦੋਵੇਂ ਆਪਣੀ ਫੌਜ ਅਤੇ ਬਾਦਸ਼ਾਹੀ ਸ਼ਾਨ ਦੇ ਹੰਕਾਰ ਵਿੱਚ ਰਹਿੰਦੇ ਸਨ।',
        'ਜਦੋਂ ਦੋਹਾਂ ਨੇ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੀ ਸ਼ਰਨ ਲਈ, ਤਾਂ ਸਤਿਗੁਰੂ ਦੇ ਅਲੌਕਿਕ ਪ੍ਰੇਮ ਅਤੇ ਸਮਦ੍ਰਿਸ਼ਟੀ ਨੇ ਉਨ੍ਹਾਂ ਦੇ ਹਿਰਦਿਆਂ ਨੂੰ ਪਿਘਲਾ ਦਿੱਤਾ। ਸਤਿਗੁਰੂ ਨੇ ਫ਼ਰਮਾਇਆ: "ਨਾ ਰਾਜ ਰਹੇਗਾ, ਨਾ ਤਾਜ ਰਹੇਗਾ। ਕਾਲ ਦੇ ਮੂੰਹ ਵਿੱਚ ਸਭ ਸਮਾ ਜਾਣਗੇ, ਕੇਵਲ ਸਤਯਨਾਮ ਦਾ ਨਾਮ ਹੀ ਸੱਚੀ ਦੌਲਤ ਹੈ।" ',
        'ਦੋਹਾਂ ਸ਼ਾਸਕਾਂ ਨੇ ਆਪਣੇ ਮੁਕੁਟ ਅਤੇ ਤਲਵਾਰਾਂ ਕਬੀਰ ਸਾਹੇਬ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਧਰ ਦਿੱਤੀਆਂ ਅਤੇ ਆਪਸ ਵਿੱਚ ਜੱਫੀ ਪਾ ਕੇ ਸੱਚੇ ਭਰਾ ਬਣ ਗਏ। ਉਨ੍ਹਾਂ ਨੇ ਆਪਣੇ ਰਾਜਾਂ ਵਿੱਚ ਜੀਵ-ਹੱਤਿਆ ਬੰਦ ਕਰਵਾਈ ਅਤੇ ਦੀਨ-ਦੁਖੀਆਂ ਲਈ ਸਦਾਵਰਤ ਭੰਡਾਰੇ ਖੋਲ੍ਹੇ।'
      ],
      hi: [
        'बघेलखंड के प्रतापी हिंदू नरेश राजा बीरसिंह देव तथा गोरखपुर के मुस्लिम सूबेदार नवाब बिजली खां पठान राजनीतिक एवं सांप्रदायिक कारणों से परस्पर विरोधी थे। दोनों के पास विशाल सेनाएं थीं।',
        'जब दोनों सतगुरु कबीर साहेब के सान्निध्य में आए, तो कबीर साहेब के असीम वात्सल्य और समदर्शी ज्ञान ने उनके हृदय का सारा वैर-भाव धो डाला। साहेब ने कहा: "तलवारें और मुकुट मृत्यु के द्वार पर रक्षा नहीं कर सकते। केवल सत्यनाम का सुमिरन ही अविनाशी धन है।"',
        'दोनों शासकों ने अपने मुकुट और कृपाण सतगुरु के चरणों में अर्पित कर दिए और परस्पर गले मिलकर सत्यनाम के भाई बन गए। उन्होंने अपने-अपने क्षेत्रों में अहिंसा, सेवा और साम्प्रदायिक सद्भाव के नए युग का सूत्रपात किया।'
      ],
      en: [
        'Raja Bir Singh Dev of Baghelkhand and Nawab Bijli Khan Pathan of Gorakhpur were formidable regional rulers on opposing sides of political and religious conflict, commanding grand armies.',
        'When both came into the luminous presence of Satguru Kabir, their animosity dissolved in the ocean of divine compassion. Kabir reminded them: "Neither royal crowns nor sharp swords can stay the hand of Death. The treasure of Satyanaam alone endures across eternity."',
        'Moved to tears, both potentates laid their crowns and swords at the Master\'s feet, embracing one another as eternal brothers in spirit. They instituted communal peace, banned cruelty, and opened endless kitchens for the hungry throughout their domains.'
      ]
    },
    spiritualEssence: {
      pb: 'ਦੁਨੀਆ ਦੀ ਸੱਤਾ, ਤਾਜ ਅਤੇ ਬਾਦਸ਼ਾਹੀ ਨਾਸ਼ਵੰਤ ਹਨ। ਸਤਿਗੁਰੂ ਦੇ ਦਰਬਾਰ \'ਤੇ ਰਾਜਾ ਤੇ ਰੰਕ, ਹਿੰਦੂ ਤੇ ਮੁਸਲਮਾਨ ਸਭ ਇਕ ਪਰਮਾਤਮਾ ਦੇ ਬੱਚੇ ਹਨ।',
      hi: 'संसार की सत्ता, मुकुट और राज-पाट नश्वर हैं। सद्गुरु के पावन द्वार पर राजा और रंक, हिंदू और मुसलमान सब एक समान परमात्मा के बालक हैं।',
      en: 'Temporal thrones, kingdoms, and royal swords fade to dust. At the feet of the Satguru, king and pauper, Hindu and Muslim, unite as one family of God.'
    },
    keySakhi: {
      pb: 'ਹਿੰਦੂ ਕਹੂੰ ਤੋ ਮੈਂ ਨਹੀਂ, ਮੁਸਲਮਾਨ ਭੀ ਨਾਹਿਂ ।\nਗ਼ੈਬੀ ਦੋਨੋਂ ਬੀਚ ਮੇਂ, ਖੇਲੈ ਸਬ ਕੇ ਮਾਹਿਂ ॥',
      hi: 'हिंदू कहूं तो मैं नहीं, मुसलमान भी नाहिं ।\nगैबी दोनों बीच में, खेलै सब के माहिं ॥',
      source: {
        hi: 'कबीर बीजक · सबद',
        pb: 'ਕਬੀਰ ਬੀਜਕ · ਸਬਦ',
        en: 'Kabir Bijak · Sabad'
      }
    }
  },
  {
    id: 'amin-shah-bodh',
    number: 16,
    title: {
      pb: 'ਪੀਰ ਅਮੀਨ ਸ਼ਾਹ ਦਾ ਗਿਆਨ-ਬੋਧ ਅਤੇ ਪਾਵਨ ਸਾਖਿਆਤਕਾਰ',
      hi: 'पीर अमीन शाह का ज्ञान-बोध एवं पावन साक्षात्कार',
      en: 'Pir Ameen Shah\'s Realization & Divine Audience'
    },
    subtitle: {
      pb: 'ਸੂਫ਼ੀ ਸੰਤ ਅਮੀਨ ਸ਼ਾਹ ਦਾ ਕਾਸ਼ੀ ਆ ਕੇ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਤੋਂ ਅਧਿਆਤਮਕ ਭੇਦ ਪਾਉਣਾ',
      hi: 'सूफी संत अमीन शाह का काशी आकर सतगुरु कबीर साहेब से आध्यात्मिक रहस्यों की दीक्षा पाना',
      en: 'How the Sufi mystic Ameen Shah sought esoteric truth from Satguru Kabir in Kashi'
    },
    location: {
      pb: 'ਕਾਸ਼ੀ, ਕਬੀਰ ਚੌਰਾ',
      hi: 'काशी, कबीर चौरा',
      en: 'Kashi, Kabir Chaura'
    },
    story: {
      pb: [
        'ਪੀਰ ਅਮੀਨ ਸ਼ਾਹ ਆਪਣੇ ਸਮੇਂ ਦੇ ਪ੍ਰਸਿੱਧ ਅਤੇ ਗਿਆਨਵਾਨ ਸੂਫ਼ੀ ਫ਼ਕੀਰ ਸਨ। ਉਨ੍ਹਾਂ ਨੇ ਕਾਸ਼ੀ ਵਿੱਚ ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਮਹਿਮਾ ਸੁਣ ਕੇ ਆਪ ਜੀ ਨਾਲ ਮਿਲਣ ਦਾ ਫੈਸਲਾ ਕੀਤਾ। ਜਦੋਂ ਉਹ ਕੁਟੀਆ \'ਤੇ ਪਹੁੰਚੇ, ਤਾਂ ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਉਨ੍ਹਾਂ ਦੇ ਮਨ ਵਿੱਚ ਉੱਠ ਰਹੇ ਸਾਰੇ ਅਣਕਹੇ ਪ੍ਰਸ਼ਨਾਂ ਦੇ ਉੱਤਰ ਬਿਨਾਂ ਪੁੱਛੇ ਹੀ ਦੇ ਦਿੱਤੇ।',
        'ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਫ਼ਰਮਾਇਆ: "ਨੂਰ ਖ਼ੁਦਾ ਦਾ ਹਰ ਆਤਮਾ ਵਿੱਚ ਵੱਸਦਾ ਹੈ, ਮਜ਼ਹਬੀ ਦੀਵਾਰਾਂ ਕੇਵਲ ਮਨ ਦੀ ਕਲਪਨਾ ਹਨ।" ਅਮੀਨ ਸ਼ਾਹ ਜੀ ਸਤਿਗੁਰੂ ਦੇ ਇਸ ਅਲੌਕਿਕ ਗਿਆਨ ਅੱਗੇ ਨਤਮਸਤਕ ਹੋ ਗਏ ਅਤੇ ਉਨ੍ਹਾਂ ਨੇ ਸਤਯਨਾਮ ਦੀ ਦੀਖਿਆ ਪ੍ਰਾਪਤ ਕੀਤੀ।'
      ],
      hi: [
        'पीर अमीन शाह अपने समय के प्रतिष्ठित और विद्वान सूफी फकीर थे। कबीर साहेब की महिमा सुनकर वे काशी पधारे। जब वे कुटिया पर पहुंचे, तो कबीर साहेब ने उनके अंतस में चल रहे समस्त जिज्ञासा-प्रश्नों के उत्तर स्वतः प्रदान किए।',
        'कबीर साहेब ने समझाया कि परमात्मा किसी संप्रदाय विशेष की बपौती नहीं, बल्कि सर्वव्यापी नूर है। पीर अमीन शाह सन्त कबीर की वाणी से अत्यंत प्रभावित हुए और अमरलोक के मार्ग के पथिक बने।'
      ],
      en: [
        'Pir Ameen Shah was a renowned Sufi mystic of his era. Hearing of Kabir\'s spiritual grandeur, he visited Kashi. Before Shah could even speak, Kabir answered all the unasked esoteric questions stirring in his heart.',
        'Kabir expounded that the Divine Light resides in every soul and sectarian boundaries are mere mental constructs. Deeply moved, Ameen Shah took refuge at the Master\'s feet.'
      ]
    },
    spiritualEssence: {
      pb: 'ਅਧਿਆਤਮਕ ਸੱਚ ਕਿਸੇ ਇਕ ਮਜ਼ਹਬ ਜਾਂ ਜਾਤ ਦੀ ਸੀਮਾ ਵਿੱਚ ਨਹੀਂ ਬੰਨ੍ਹਿਆ ਜਾ ਸਕਦਾ। ਪ੍ਰਭੂ ਦਾ ਨੂਰ ਸਭ ਵਿੱਚ ਵਿਆਪਕ ਹੈ।',
      hi: 'आध्यात्मिक सत्य किसी एक संप्रदाय या मजहब की सीमा में नहीं बंधा है। परम प्रभु का नूर समस्त ब्रह्मांड में एकसमान व्याप्त है।',
      en: 'Spiritual truth transcends sectarian boundaries. The divine light illuminates every sincere seeker across all walks of life.'
    },
    keySakhi: {
      pb: 'अव्वल अल्लाह नूर उपाया, कुदरत के सब बंदे ।\nएक नूर ते सब जग उपज्या, कौन भला को मंदे ॥',
      hi: 'अव्वल अल्लाह नूर उपाया, कुदरत के सब बंदे ।\nएक नूर ते सब जग उपज्या, कौन भला को मंदे ॥',
      source: {
        hi: 'कबीर सागर · सूफी बोध',
        pb: 'ਕਬੀਰ ਸਾਗਰ · ਸੂਫ਼ੀ ਬੋਧ',
        en: 'Kabir Sagar · Sufi Bodh'
      }
    }
  },
  {
    id: 'kashi-nawab-satsang',
    number: 17,
    title: {
      pb: 'ਕਾਸ਼ੀ ਦੇ ਨਵਾਬ ਅਤੇ ਦਰਬਾਰੀ ਅਧਿਕਾਰੀਆਂ ਦਾ ਪਾਵਨ सत्संग',
      hi: 'काशी के नवाब एवं दरबारी अधिकारियों का पावन सत्संग',
      en: 'The Satsang with the Nawab and Officials of Kashi'
    },
    subtitle: {
      pb: 'ਸ਼ਾਹੀ ਦਰਬਾਰ ਵਿੱਚ ਸਤਯ, ਧਰਮ ਅਤੇ ਨਿਰਭੈਤਾ ਦਾ ਸੱਚਾ ਉਪਦੇਸ਼',
      hi: 'शाही दरबार में सत्य, धर्म और निर्भयता का दिव्य उपदेश',
      en: 'Proclaiming fearless truth and righteousness within the royal administration'
    },
    location: {
      pb: 'ਕਾਸ਼ੀ ਪ੍ਰਸ਼ਾਸਨਿਕ ਦਰਬਾਰ',
      hi: 'काशी प्रशासनिक दरबार',
      en: 'Kashi Administrative Court'
    },
    story: {
      pb: [
        'ਕਾਸ਼ੀ ਦੇ ਮੁਸਲਿਮ ਪ੍ਰਸ਼ਾਸਕ ਅਤੇ ਨਵਾਬ ਵੀ ਕਈ ਵਾਰ ਕਬੀਰ ਸਾਹੇਬ ਦੇ ਗਿਆਨ ਦੀ ਚਰਚਾ ਸੁਣ ਕੇ ਵਿਵਾਦ ਨਿਪਟਾਰੇ ਲਈ ਆਉਂਦੇ ਸਨ। ਕਬੀਰ ਸਾਹੇਬ ਕਦੇ ਵੀ ਰਾਜਿਆਂ ਜਾਂ ਨਵਾਬਾਂ ਤੋਂ ਨਹੀਂ ਡਰੇ, ਸਗੋਂ ਉਨ੍ਹਾਂ ਨੂੰ ਪ੍ਰਜਾ ਦੀ ਸੇਵਾ ਅਤੇ ਨਿਆਂ ਦਾ ਪਾਠ ਪੜ੍ਹਾਇਆ।',
        'ਸਤਿਗੁਰੂ ਨੇ ਸਮਝਾਇਆ ਕਿ ਅਸਲੀ ਬਾਦਸ਼ਾਹ ਉਹ ਹੈ ਜਿਸਨੇ ਆਪਣੇ ਮਨ ਨੂੰ ਜਿੱਤ ਲਿਆ ਹੈ। ਨਵਾਬ ਨੇ ਪ੍ਰਭਾਵਿਤ ਹੋ ਕੇ ਆਪਣੇ ਇਲਾਕੇ ਵਿੱਚ ਗਰੀਬਾਂ ਲਈ ਰਾਸ਼ਨ ਅਤੇ ਮੁਫ਼ਤ ਭੰਡਾਰੇ ਸ਼ੁਰੂ ਕਰਵਾਏ।'
      ],
      hi: [
        'काशी के स्थानीय नवाब और अधिकारी भी कबीर साहेब के निर्भीक स्वभाव और न्यायप्रियता से परिचित थे। जब कभी धार्मिक विवाद पहुंचते, कबीर साहेब सबको प्रेम और समता का पाठ पढ़ाते।',
        'साहेब ने स्पष्ट किया कि राजा का सच्चा धर्म प्रजा की रक्षा और अहंकार का त्याग है। नवाब ने प्रभावित होकर कबीर साहेब के प्रति अपनी गहरी श्रद्धा अर्पित की।'
      ],
      en: [
        'Local administrators and nobles of Kashi frequently sought Kabir\'s counsel to resolve social and communal disputes. Kabir stood fearlessly before temporal powers, teaching them true justice and compassion.',
        'He reminded leaders that true sovereignty belongs to one who conquers the turbulent mind. Inspired, the Nawab supported charitable relief for the poor.'
      ]
    },
    spiritualEssence: {
      pb: 'ਸੱਚਾ ਹਾਕਮ ਉਹ ਹੈ ਜੋ ਨਿਰਪੱਖ ਹੋ ਕੇ ਪ੍ਰਜਾ ਦੀ ਸੇਵਾ ਕਰੇ ਅਤੇ ਅਹੰਕਾਰ ਤੋਂ ਮੁਕਤ ਹੋਵੇ।',
      hi: 'सच्चा शासक वही है जो निष्पक्ष भाव से जनसेवा करे और अहंकार के पाश से मुक्त हो।',
      en: 'A true leader rules with impartial compassion, free from pride and greed.'
    },
    keySakhi: {
      pb: 'ਬਿਨਾ ਭਗਤੀ ਰਾਜੁ ਕਿਆ, ਕਿਆ ਬਨਵਾਸੁ ਸੁਖੁ ਹੋਇ ।\nਜਿਹ ਘਟਿ ਪ੍ਰੇਮ ਨ ਉਪਜਿਓ, ਸੋ ਘਟੁ ਮਰਸਨੁ ਹੋਇ ॥',
      hi: 'बिना भक्ति राजु क्या, क्या बनवासु सुखु होइ ।\nजिह घटि प्रेम न उपजिओ, सो घटु मरसनु होइ ॥',
      source: {
        hi: 'कबीर साखी संग्रह',
        pb: 'ਕਬੀਰ ਸਾਖੀ ਸੰਗ੍ਰਹਿ',
        en: 'Kabir Sakhi Sangrah'
      }
    }
  },
  {
    id: 'dadu-dayal-darshan',
    number: 18,
    title: {
      pb: 'ਸੰਤ ਦਾਦੂ ਦਿਆਲ ਜੀ ਨੂੰ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੇ ਪਾਵਨ ਦਰਸ਼ਨ',
      hi: 'संत दादू दयाल जी को सतगुरु कबीर साहेब के पावन दर्शन',
      en: 'Sant Dadu Dayal Ji\'s Vision of Satguru Kabir'
    },
    subtitle: {
      pb: 'ਰਾਜਸਥਾਨ ਦੇ ਮਹਾਨ ਸੰਤ ਦਾਦੂ ਜੀ ਨੂੰ ਬਾਲ ਅਤੇ ਬਿਰਧ ਰੂਪ ਵਿੱਚ ਅਲੌਕਿਕ ਪ੍ਰਗਟਾਵ',
      hi: 'राजस्थान के महान संत दादू जी को बाल एवं वृद्ध स्वरूप में अलौकिक प्राकट्य',
      en: 'The wondrous manifestation as child and elder to the great sage Dadu Dayal'
    },
    location: {
      pb: 'ਰਾਜਸਥਾਨ (ਨਰੇਣਾ ਅਤੇ ਅਭੈਪੁਰ)',
      hi: 'राजस्थान (नरेणा एवं अभयपुर)',
      en: 'Rajasthan (Naraina & Abhaypur)'
    },
    story: {
      pb: [
        'ਰਾਜਸਥਾਨ ਦੇ ਪ੍ਰਸਿੱਧ ਸੰਤ ਦਾਦੂ ਦਿਆਲ ਜੀ ਸਤਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੇ ਅਨੰਨ ਪ੍ਰੇਮੀ ਅਤੇ ਉਪਾਸਕ ਸਨ। ਇਕ ਦਿਨ ਧਿਆਨ ਅਵਸਥਾ ਵਿੱਚ ਉਨ੍ਹਾਂ ਨੂੰ ਸਤਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਅਲੌਕਿਕ ਦਰਸ਼ਨ ਦਿੱਤੇ।',
        'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਕਦੇ ਬਾਲਕ ਰੂਪ ਵਿੱਚ ਅਤੇ ਕਦੇ ਤੇਜਸਵੀ ਮਹਾਪੁਰਸ਼ ਦੇ ਰੂਪ ਵਿੱਚ ਪ੍ਰਗਟ ਹੋ ਕੇ ਉਨ੍ਹਾਂ ਨੂੰ ਅਮਰਲੋਕ ਦਾ ਗਿਆਨ ਦ੍ਰਿੜ੍ਹ ਕਰਵਾਉਂਦੇ ਸਨ। ਦਾਦੂ ਜੀ ਨੇ ਆਪਣੀ ਬਾਣੀ ਵਿੱਚ ਕਬੀਰ ਸਾਹੇਬ ਨੂੰ ਹੀ ਪਰਮ ਪ੍ਰਭੂ ਅਵਤਾਰ ਵਜੋਂ ਸਵੀਕਾਰ ਕੀਤਾ ਹੈ।'
      ],
      hi: [
        'राजस्थान के महान संत दादू दयाल जी कबीर साहेब के परम भक्त थे। अपनी साधना और ध्यान की उच्च अवस्था में उन्हें सतगुरु कबीर साहेब के दिव्य दर्शन हुए।',
        'साहेब ने उन्हें बाल रूप और वृद्ध महापुरुष के रूप में दर्शन देकर सुरति-शब्द योग की गहराइयों से अवगत कराया। संत दादू ने अपनी वाणी में कबीर साहेब को ही आदि सृष्टिकर्ता के रूप में महिमामंडित किया।'
      ],
      en: [
        'The venerated sage Dadu Dayal of Rajasthan was an ardent devotee of Satguru Kabir. In deep states of contemplative meditation, he was blessed with visions of Kabir.',
        'Appearing variously as an infant and as an illuminated elder, the Master imparted the inner science of Surat-Shabda Yoga. Dadu praised Kabir in his holy hymns as the Supreme Creator.'
      ]
    },
    spiritualEssence: {
      pb: 'ਸੱਚੇ ਪ੍ਰੇਮੀ ਅਤੇ ਸਾਧਕ ਨੂੰ ਸਤਿਗੁਰੂ ਜੀ ਹਰ ਘੜੀ ਅੰਗ-ਸੰਗ ਦਰਸ਼ਨ ਦਿੰਦੇ ਹਨ।',
      hi: 'सच्चे प्रेमी और साधक को सतगुरु अपनी कृपा से सर्वदा अंग-संग दर्शन देते हैं।',
      en: 'To the pure devotee, the Satguru is ever-present in spirit and grace.'
    },
    keySakhi: {
      pb: 'कबीर परमेश्वर प्रगट भये, जागत दीन्हा थोर ।\nदादू खोजत ही फिरे, मिले जो चित्त की छोर ॥',
      hi: 'कबीर परमेश्वर प्रगट भये, जागत दीन्हा थोर ।\nदादू खोजत ही फिरे, मिले जो चित्त की छोर ॥',
      source: {
        hi: 'दादू दयाल वाणी · कबीर अंग',
        pb: 'ਦਾਦੂ ਦਿਆਲ ਬਾਣੀ · ਕਬੀਰ ਅੰਗ',
        en: 'Dadu Dayal Vani'
      }
    }
  },
  {
    id: 'garibdas-chhudani',
    number: 19,
    title: {
      pb: 'ਸੰਤ ਗ਼ਰੀਬ ਦਾਸ ਜੀ ਨੂੰ ਛੁਡਾਨੀ ਧਾਮ ਵਿੱਚ ਦਿਵਯ ਦਰਸ਼ਨ',
      hi: 'संत गरीब दास जी को छुड़ानी धाम में दिव्य दर्शन',
      en: 'Sant Garib Das Ji\'s Divine Vision at Chhudani'
    },
    subtitle: {
      pb: 'ਬਾਰਾਂ ਵਰਸ਼ ਦੀ ਉਮਰ ਵਿੱਚ ਅਮਰਲੋਕ ਦੀ ਯਾਤਰਾ ਅਤੇ \'ਸਤਗ੍ਰੰਥ ਸਾਹੇਬ\' ਦੀ ਬਾਣੀ ਦਾ ਪ੍ਰਗਟਾਵ',
      hi: 'बारह वर्ष की आयु में अमरलोक की यात्रा और \'सतग्रंथ साहेब\' की वाणी का प्राकट्य',
      en: 'The journey to Amaralok at age twelve and the revelation of Satgranth'
    },
    location: {
      pb: 'ਛੁਡਾਨੀ ਧਾਮ (ਹਰਿਆਣਾ)',
      hi: 'छुड़ानी धाम (हरियाणा)',
      en: 'Chhudani Dham (Haryana)'
    },
    story: {
      pb: [
        'ਹਰਿਆਣਾ ਦੇ ਛੁਡਾਨੀ ਪਿੰਡ ਵਿੱਚ ਜਦੋਂ ਬਾਲਕ ਗ਼ਰੀਬ ਦਾਸ ਜੀ ਖੇਤ ਵਿੱਚ ਪਸ਼ੂ ਚਰਾ ਰਹੇ ਸਨ, ਤਾਂ ੧੨੦ ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ ਪ੍ਰਗਟ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜਿੰਦਾ ਫ਼ਕੀਰ ਦੇ ਰੂਪ ਵਿੱਚ ਉੱਥੇ ਆਏ।',
        'ਸਤਿਗੁਰੂ ਜੀ ਨੇ ਬਾਲਕ ਗ਼ਰੀਬ ਦਾਸ ਨੂੰ ਅਮਰਲੋਕ ਦੀ ਸੈਰ ਕਰਵਾਈ ਅਤੇ ਸਤਯਨਾਮ ਦਾ ਮੰਤਰ ਬਖਸ਼ਿਆ। ਬਾਲਕ ਗ਼ਰੀਬ ਦਾਸ ਸਮਾਧੀ ਵਿੱਚ ਚਲੇ ਗਏ ਅਤੇ ਉਨ੍ਹਾਂ ਦੇ ਮੁੱਖੋਂ ਅਕਾਸ਼ੀ ਬਾਣੀ ਪ੍ਰਗਟ ਹੋਈ ਜੋ ਅੱਜ \'ਸਤਗ੍ਰੰਥ ਸਾਹੇਬ\' ਵਜੋਂ ਪ੍ਰਸਿੱਧ ਹੈ।'
      ],
      hi: [
        'हरियाणा के छुड़ानी ग्राम में जब बारह वर्षीय बालक गरीब दास जी खेतों में पशु चरा रहे थे, तब सतगुरु कबीर साहेब जिंदा फकीर के रूप में प्रकट हुए।',
        'साहेब ने बालक गरीब दास को अमरलोक के दर्शन कराए और सत्यनाम की दीक्षा दी। समाधिलीन अवस्था में उनके मुख से जो दिव्य वाणी प्रस्फुटित हुई, वह \'सतग्रंथ साहेब\' के रूप में अमर हो गई।'
      ],
      en: [
        'While twelve-year-old Garib Das was tending cattle in the fields of Chhudani, Satguru Kabir appeared before him as a luminous wandering fakir.',
        'The Master took young Garib Das on a soul-journey to Amaralok and initiated him into Satyanaam. Immersed in divine ecstasy, the celestial hymns he uttered were compiled as \'Satgranth Saheb\'.'
      ]
    },
    spiritualEssence: {
      pb: 'ਪ੍ਰਭੂ ਦੀ ਕਿਰਪਾ ਲਈ ਉਮਰ ਜਾਂ ਰਸਮੀ ਪੜ੍ਹਾਈ ਦੀ ਲੋੜ ਨਹੀਂ, ਕੇਵਲ ਨਿਰਮਲ ਅਤੇ ਕੋਮਲ ਹਿਰਦੇ ਦੀ ਲੋੜ ਹੈ।',
      hi: 'प्रभु की कृपा और दीक्षा के लिए आयु या बाहरी उपाधियों की आवश्यकता नहीं, केवल सरल और निष्कलंक हृदय चाहिए।',
      en: 'Divine grace transcends age and academic learning; it requires only a pure, receptive heart.'
    },
    keySakhi: {
      pb: 'गरिब दास हमारी बाँणी, मिला जो सतगुरु पूरा ।\nअमर लोक का भेद बताया, मिटा जनम का सूरा ॥',
      hi: 'गरिब दास हमारी बाँणी, मिला जो सतगुरु पूरा ।\nअमर लोक का भेद बताया, मिटा जनम का सूरा ॥',
      source: {
        hi: 'सतग्रंथ साहेब · बोध सागर',
        pb: 'ਸਤਗ੍ਰੰਥ ਸਾਹੇਬ · ਬੋਧ ਸਾਗਰ',
        en: 'Satgranth Saheb'
      }
    }
  },
  {
    id: 'amaralok-satyanaam-mahimah',
    number: 20,
    title: {
      pb: 'ਅਮਰਲੋਕ ਦਾ ਮਹਾ-ਰਹਸ੍ਯ ਅਤੇ ਸਤਯਨਾਮ ਦੀ ਮਹਿਮਾ (ਸੰਪੂਰਨ ਉਪਦੇਸ਼)',
      hi: 'अमरलोक का महा-रहस्य एवं सत्यनाम की महिमा (पूर्ण उपदेश)',
      en: 'The Grand Mystery of Amaralok & Glory of Satyanaam'
    },
    subtitle: {
      pb: 'ਚੌਰਾਸੀ ਦੇ ਬੰਧਨਾਂ ਤੋਂ ਮੁਕਤੀ ਅਤੇ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦਾ ਅੰਤਿਮ ਪਾਵਨ ਸੰਦੇਸ਼',
      hi: 'चौरासी के बंधनों से मुक्ति और सतगुरु कबीर साहेब का अंतिम पावन संदेश',
      en: 'Liberation from the wheel of 84 lakh species and the ultimate message of Satguru Kabir'
    },
    location: {
      pb: 'ਅਮਰਲੋਕ ਅਤੇ ਕਾਸ਼ੀ-ਮਗਹਰ ਧਾਮ',
      hi: 'अमरलोक एवं काशी-मगहर धाम',
      en: 'Amaralok & Kashi-Maghar Dham'
    },
    story: {
      pb: [
        'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦਾ ਪੂਰਾ ਜੀਵਨ ਚਰਿੱਤਰ ਇਸ ਗੱਲ ਦਾ ਪ੍ਰਮਾਣ ਹੈ ਕਿ ਇਹ ਸੰਸਾਰ ਕਾਲ ਦਾ ਪਿੰਜਰਾ ਹੈ ਅਤੇ ਅਸਲੀ ਘਰ \'ਅਮਰਲੋਕ\' ਹੈ। ਜਿੱਥੇ ਕੋਈ ਜਨਮ, ਮੌਤ, ਬੁਢਾਪਾ ਜਾਂ ਦੁੱਖ ਨਹੀਂ ਹੈ।',
        'ਸਤਿਗੁਰੂ ਜੀ ਨੇ ਸਮੂਹ ਜੀਵਾਂ ਨੂੰ ਸੁਨੇਹਾ ਦਿੱਤਾ ਕਿ ਮਨੁੱਖਾ ਜੋਲਾ ਬਹੁਤ ਮੁਸ਼ਕਿਲ ਨਾਲ ਮਿਲਦਾ ਹੈ। ਇਸਨੂੰ ਵਿਕਾਰਾਂ ਵਿੱਚ ਨਾ ਗਵਾਓ, ਸਗੋਂ ਪੂਰਨ ਸਤਿਗੁਰੂ ਦੀ ਸ਼ਰਨ ਲੈ ਕੇ ਸਤਯਨਾਮ ਦਾ ਜਾਪ ਕਰੋ ਅਤੇ ਅਮਰਲੋਕ ਦੇ ਪਥਿਕ ਬਣੋ।'
      ],
      hi: [
        'सतगुरु कबीर साहेब का संपूर्ण प्राकट्य और लीलाएं मानवमात्र को यह चेतना देने के लिए थीं कि यह नश्वर संसार काल का जाल है और हमारा वास्तविक निजधाम \'अमरलोक\' है।',
        'साहेब ने अंतिम संदेश दिया कि दुर्लभ मानव योनि पाकर विषयों में न भटकें। पूर्ण सद्गुरु से सत्यनाम की दीक्षा लेकर अपने मूल घर अमरलोक की ओर लौटें। यही जीवन का परम लक्ष्य है।'
      ],
      en: [
        'The entire life and parables of Satguru Kabir serve as an eternal reminder that this mortal realm is a domain of suffering and illusion, while our true home is the deathless Amaralok.',
        'The Master\'s ultimate blessing to humanity is to cherish this rare human birth, take refuge in the true Satguru, meditate on Satyanaam, and return triumphantly to our eternal Abode of Peace.'
      ]
    },
    spiritualEssence: {
      pb: 'ਸੰਸਾਰ ਵਿੱਚ ਮੁਸਾਫਿਰ ਵਾਂਗ ਰਹੋ ਅਤੇ ਆਪਣੀ ਸੁਰਤਿ ਨੂੰ ਆਪਣੇ ਨਿਜਧਾਮ ਅਮਰਲੋਕ ਨਾਲ ਜੋੜੋ।',
      hi: 'संसार में मुसाफिर की भांति रहें और अपनी सुरति को अपने निजधाम अमरलोक से जोड़े रखें।',
      en: 'Live in the world like a traveler, keeping your inner consciousness anchored in the eternal Amaralok.'
    },
    keySakhi: {
      pb: 'ਕਬੀਰ ਸਾਚਾ ਸਤਿਗੁਰੂ ਸੇਵਿ ਲੇ, ਜਿਨਿ ਦਿਆ ਅਮਰ ਪਦ ਬਤਾਈ ।\nਆਵਨ ਜਾਨਾ ਬਿਨਸਿ ਗਇਆ, ਮਿਲਿਓ ਅਮਰਪੁਰ ਜਾਈ ॥',
      hi: 'कबीर साचा सतगुरू सेव ले, जिनि दिया अमर पद बताई ।\nआवन जाना बिनसि गइओ, मिलिओ अमरपुर जाई ॥',
      source: {
        hi: 'कबीर सागर · मोक्ष सागर',
        pb: 'ਕਬੀਰ ਸਾਗਰ · ਮੋਕਸ਼ ਸਾਗਰ',
        en: 'Kabir Sagar · Moksha Sagar'
      }
    }
  }
];

export const SacredLeelas: React.FC<SacredLeelasProps> = ({
  language,
  onClose,
  onOpenBlessing,
  onOpenSwadhyay,
  onSelectLanguage
}) => {
  const { theme } = useAppTheme();
  const [selectedId, setSelectedId] = useState<string>(LEELAS_DATABASE[0].id);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');
  const [readIds, setReadIds] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('saheb_leelas_read');
      if (saved) {
        try {
          setReadIds(JSON.parse(saved));
        } catch {
          setReadIds({});
        }
      }
    }
  }, []);

  const activeEpisode = LEELAS_DATABASE.find(e => e.id === selectedId) || LEELAS_DATABASE[0];

  const handleMarkAsRead = (id: string) => {
    sacredHaptics.lightTap();
    const updated = {
      ...readIds,
      [id]: !readIds[id]
    };
    setReadIds(updated);
    if (typeof window !== 'undefined') {
      localStorage.setItem('saheb_leelas_read', JSON.stringify(updated));
    }
    if (!readIds[id] && onOpenBlessing) {
      onOpenBlessing(
        language === 'pb' ? 'ਲੀਲਾ ਪਾਠ ਪ੍ਰਵਾਨ' : language === 'en' ? 'Leela Reading Accepted' : 'लीला पाठ स्वीकार',
        language === 'pb' ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੀ ਪਵਿੱਤਰ ਲੀਲਾ ਤੁਹਾਡੇ ਹਿਰਦੇ ਵਿੱਚ ਸ਼ਾਂਤੀ ਭਰੇ।' : language === 'en' ? 'May the sacred Leela of Satguru Kabir Saheb fill your heart with peace.' : 'सतगुरु कबीर साहेब की पावन लीला आपके हृदय में शांति भरे।'
      );
    }
  };

  const handleCopyStory = () => {
    const srcText = typeof activeEpisode.keySakhi.source === 'string'
      ? activeEpisode.keySakhi.source
      : (activeEpisode.keySakhi.source as any)[language] || (activeEpisode.keySakhi.source as any).hi;
    const text = `।। ${activeEpisode.title[language]} ।।\n\n[${language === 'hi' ? 'स्थान' : language === 'pb' ? 'ਅਸਥਾਨ' : 'Location'}: ${activeEpisode.location[language]}]\n\n${activeEpisode.story[language].join('\n\n')}\n\n${language === 'hi' ? 'तत्त्व-शिक्षा' : language === 'pb' ? 'ਤੱਤ-ਸਿੱਖਿਆ' : 'Spiritual Essence'}: ${activeEpisode.spiritualEssence[language]}\n\n${language === 'hi' ? 'साखी' : language === 'pb' ? 'ਸਾਖੀ' : 'Sakhi'}:\n${activeEpisode.keySakhi[language === 'pb' ? 'pb' : 'hi']}\n(${srcText})\n\n।। ${language === 'hi' ? 'साहेब बंदगी साहेब' : language === 'pb' ? 'ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ' : 'Saheb Bandagi Saheb'} ।।`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    sacredHaptics.lightTap();
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredEpisodes = LEELAS_DATABASE.filter(ep => {
    const q = searchQuery.toLowerCase();
    return (
      ep.title[language].toLowerCase().includes(q) ||
      ep.subtitle[language].toLowerCase().includes(q) ||
      ep.location[language].toLowerCase().includes(q)
    );
  });

  return (
    <div className="max-w-5xl mx-auto p-3 sm:p-6 space-y-6">
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
              <Scroll className="w-4 h-4 text-amber-700" />
              <span>
                {language === 'pb' ? 'ਜੀਵਨ ਚਰਿੱਤਰ ਪ੍ਰਸੰਗ' : language === 'en' ? 'Sacred Life Chronicles' : 'जीवन चरित्र प्रसंग'}
              </span>
              <span aria-hidden="true">·</span>
              <span>
                {language === 'pb' ? 'ਅਲੌਕਿਕ ਲੀਲਾ ਕਥਾਵਾਂ' : language === 'en' ? 'Divine Parables' : 'अलौकिक लीला कथाएं'}
              </span>
            </div>
            <h1 
              style={{ color: theme.sacredMaroon }}
              className="text-2xl sm:text-3xl font-black font-serif tracking-tight"
            >
              {language === 'pb' 
                ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਪਰਿਚਯ (ਚਾਰੋਂ ਜੁਗ) ਅਤੇ ਪਵਿੱਤਰ ਲੀਲਾ-ਕਥਾਵਾਂ' 
                : language === 'en' 
                ? 'Satguru Kabir Saheb Introduction (Four Yugas) & Sacred Leelas' 
                : 'सतगुरु कबीर साहेब परिचय (चारों युग) एवं पावन लीला-कथाएं'}
            </h1>
            <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 max-w-xl font-medium">
              {language === 'pb'
                ? 'ਸਤਯੁਗ, ਤ੍ਰੇਤਾ, ਦ੍ਵਾਪਰ, ਕਲਯੁਗ ਵਿੱਚ ਪ੍ਰਗਟਾਵ ਤੋਂ ਲੈ ਕੇ ਮਗਹਰ ਪ੍ਰਸਥਾਨ ਤੱਕ—ਸਤਿਗੁਰੂ ਜੀ ਦਾ ਪਾਵਨ ਜੀਵਨ ਚਰਿੱਤਰ।'
                : language === 'en'
                ? 'From the Four Yuga descents to the eternal departure at Maghar—sacred life chronicles of Satguru Kabir.'
                : 'चारों युगों में प्राकट्य—सत्ययुग, त्रेता, द्वापर, कलियुग एवं लहरतारा से मगहर प्रस्थान तक के अमर जीवन प्रसंग।'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            {/* Quick Language Switcher Control */}
            <div 
              className="flex items-center rounded-2xl p-1 border shadow-2xs"
              style={{ backgroundColor: theme.cardBg, borderColor: theme.accentGold }}
            >
              {(['hi', 'pb', 'en'] as Language[]).map((lng) => {
                const isSelected = language === lng;
                const label = lng === 'hi' ? 'हिंदी' : lng === 'pb' ? 'ਪੰਜਾਬੀ' : 'EN';
                return (
                  <button
                    key={lng}
                    id={`leela-lang-${lng}`}
                    onClick={() => {
                      if (onSelectLanguage) onSelectLanguage(lng);
                      if (typeof window !== 'undefined') {
                        window.dispatchEvent(new CustomEvent('sahebworld_lang_change', { detail: lng }));
                      }
                    }}
                    style={{
                      backgroundColor: isSelected ? theme.buttonPrimaryBg : 'transparent',
                      color: isSelected ? theme.buttonPrimaryText : theme.textSecondary,
                    }}
                    className="px-2.5 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer hover:opacity-90"
                    title={lng === 'hi' ? 'हिंदी' : lng === 'pb' ? 'ਪੰਜਾਬੀ' : 'English'}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            <span className="text-xs font-bold text-amber-900 dark:text-amber-300 font-serif">
              {Object.values(readIds).filter(Boolean).length} / {LEELAS_DATABASE.length} {language === 'pb' ? 'ਅਧਿਆਇ ਪੜ੍ਹੇ' : language === 'en' ? 'Read' : 'अध्याय संपन्न'}
            </span>
          </div>
        </div>
      </div>

      {/* Episode Selector Grid / Strip */}
      <div className="space-y-2">
        <div className="flex items-center justify-between px-1">
          <label className="text-xs font-bold text-stone-600 dark:text-stone-400">
            {language === 'pb' ? 'ਪਵਿੱਤਰ ਅਧਿਆਇ ਚੁਣੋ:' : language === 'en' ? 'Select Sacred Episode:' : 'पावन अध्याय चुनें:'}
          </label>
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'pb' ? 'ਅਧਿਆਇ ਖੋਜੋ...' : language === 'en' ? 'Search chapters...' : 'अध्याय खोजें...'}
              className="pl-7 pr-3 py-1 text-xs rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {filteredEpisodes.map((ep) => {
            const isSelected = ep.id === activeEpisode.id;
            const isRead = !!readIds[ep.id];
            return (
              <button
                key={ep.id}
                onClick={() => {
                  sacredHaptics.lightTap();
                  setSelectedId(ep.id);
                }}
                className={`p-3.5 rounded-2xl border text-left transition-all flex items-start gap-3 cursor-pointer ${
                  isSelected
                    ? 'bg-amber-100/90 dark:bg-stone-900 border-amber-500 shadow-xs ring-1 ring-amber-500/40'
                    : 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 hover:border-amber-300'
                }`}
              >
                <div className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold font-serif shrink-0 ${
                  isSelected ? 'bg-amber-800 text-white' : 'bg-amber-100 text-amber-900 dark:bg-stone-800 dark:text-amber-400'
                }`}>
                  {ep.number}
                </div>

                <div className="space-y-0.5 flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <h3 className="text-xs sm:text-sm font-bold font-serif truncate text-stone-900 dark:text-stone-100">
                      {ep.title[language]}
                    </h3>
                    {isRead && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />}
                  </div>
                  <p className="text-[11px] text-stone-500 truncate">
                    {ep.location[language]}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Story Reading Card */}
      <motion.div
        key={activeEpisode.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="p-5 sm:p-8 rounded-3xl border shadow-md space-y-6"
        style={{ 
          backgroundColor: theme.cardBg, 
          borderColor: theme.accentGold 
        }}
      >
        {/* Story Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b pb-4 border-amber-200/50">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-800 dark:text-amber-400">
              <Sun className="w-4 h-4 text-amber-600" />
              <span>{language === 'pb' ? `ਅਧਿਆਇ ${activeEpisode.number}` : language === 'en' ? `Chapter ${activeEpisode.number}` : `अध्याय ${activeEpisode.number}`}</span>
              <span aria-hidden="true">·</span>
              <span>{activeEpisode.location[language]}</span>
            </div>
            <h2 
              style={{ color: theme.sacredMaroon }}
              className="text-xl sm:text-2xl font-black font-serif"
            >
              {activeEpisode.title[language]}
            </h2>
            <p className="text-xs text-stone-600 dark:text-stone-400 font-medium">
              {activeEpisode.subtitle[language]}
            </p>
          </div>

          {/* Reading Controls */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => setFontSize(fontSize === 'normal' ? 'large' : 'normal')}
              className="px-2.5 py-1 rounded-xl border border-stone-300 dark:border-stone-700 text-xs font-bold text-stone-700 dark:text-stone-300 hover:bg-amber-50 cursor-pointer"
              title="Toggle Font Size"
            >
              {fontSize === 'normal' ? 'A+' : 'A-'}
            </button>

            <button
              onClick={() => handleMarkAsRead(activeEpisode.id)}
              className={`px-3 py-1 rounded-xl border text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                readIds[activeEpisode.id]
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                  : 'border-stone-300 dark:border-stone-700 text-stone-700 hover:bg-amber-50'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{readIds[activeEpisode.id] ? (language === 'pb' ? 'ਸੰਪੰਨ' : language === 'en' ? 'Completed' : 'संपन्न') : (language === 'pb' ? 'ਪੜ੍ਹ ਲਿਆ' : language === 'en' ? 'Mark Read' : 'पढ़ें')}</span>
            </button>

            <button
              onClick={handleCopyStory}
              className="p-1.5 rounded-xl border border-stone-300 dark:border-stone-700 text-stone-600 hover:bg-amber-50 cursor-pointer"
              title="Copy Story"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Narrative Paragraphs */}
        <div className={`space-y-4 font-serif text-stone-800 dark:text-stone-200 leading-relaxed ${
          fontSize === 'large' ? 'text-base sm:text-lg' : 'text-sm sm:text-base'
        }`}>
          {activeEpisode.story[language].map((paragraph, idx) => (
            <p key={idx} className="first-letter:text-2xl first-letter:font-bold first-letter:text-amber-800 first-letter:mr-0.5">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Spiritual Essence / Tatva Siksha */}
        <div 
          className="p-4 sm:p-5 rounded-2xl border space-y-2"
          style={{ 
            backgroundColor: theme.stepActiveBg,
            borderColor: theme.accentGold 
          }}
        >
          <div className="flex items-center gap-2">
            <Feather className="w-4 h-4 text-amber-700" />
            <h4 
              style={{ color: theme.sacredMaroon }}
              className="text-xs font-black uppercase tracking-wider font-serif"
            >
              {language === 'pb' ? 'ਪਾਵਨ ਤੱਤ-ਸਿੱਖਿਆ (ਰੂਹਾਨੀ ਸਾਰ)' : language === 'en' ? 'Spiritual Essence & Moral' : 'पावन तत्त्व-शिक्षा (आध्यात्मिक सार)'}
            </h4>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-900 dark:text-stone-100 font-serif leading-relaxed">
            {activeEpisode.spiritualEssence[language]}
          </p>
        </div>

        {/* Key Sacred Sakhi */}
        <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-stone-900/40 border border-amber-300 text-center space-y-1.5">
          <span className="text-[10px] text-amber-800 dark:text-amber-400 font-bold uppercase tracking-wider">
            {language === 'pb' ? 'ਇਸ ਲੀਲਾ ਨਾਲ ਸੰਬੰਧਿਤ ਪਾਵਨ ਸਾਖੀ' : language === 'en' ? 'Key Sacred Sakhi' : 'इस लीला से संबंधित पावन साखी'}
          </span>
          <p 
            style={{ color: theme.sacredMaroon }}
            className="text-sm sm:text-base font-bold font-serif whitespace-pre-line leading-relaxed"
          >
            {language === 'pb' ? activeEpisode.keySakhi.pb : language === 'en' ? ((activeEpisode.keySakhi as any).en || activeEpisode.keySakhi.hi) : activeEpisode.keySakhi.hi}
          </p>
          <span className="text-[11px] text-stone-500 font-serif">
            {typeof activeEpisode.keySakhi.source === 'string'
              ? activeEpisode.keySakhi.source
              : (activeEpisode.keySakhi.source as any)[language] || (activeEpisode.keySakhi.source as any).hi}
          </span>
        </div>

        {/* Next / Previous Episode Navigation */}
        <div className="flex items-center justify-between pt-4 border-t border-amber-200/50">
          <button
            disabled={activeEpisode.number <= 1}
            onClick={() => {
              sacredHaptics.lightTap();
              const prev = LEELAS_DATABASE.find(e => e.number === activeEpisode.number - 1);
              if (prev) setSelectedId(prev.id);
            }}
            className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 cursor-pointer ${
              activeEpisode.number <= 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-amber-50'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>{language === 'pb' ? 'ਪਿਛਲਾ ਅਧਿਆਇ' : language === 'en' ? 'Previous' : 'पिछला अध्याय'}</span>
          </button>

          <button
            disabled={activeEpisode.number >= LEELAS_DATABASE.length}
            onClick={() => {
              sacredHaptics.lightTap();
              const next = LEELAS_DATABASE.find(e => e.number === activeEpisode.number + 1);
              if (next) setSelectedId(next.id);
            }}
            className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 cursor-pointer ${
              activeEpisode.number >= LEELAS_DATABASE.length ? 'opacity-30 cursor-not-allowed' : 'hover:bg-amber-50'
            }`}
          >
            <span>{language === 'pb' ? 'ਅਗਲਾ ਅਧਿਆਇ' : language === 'en' ? 'Next' : 'अगला अध्याय'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};
