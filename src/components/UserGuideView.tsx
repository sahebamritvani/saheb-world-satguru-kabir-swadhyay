import React, { useState } from 'react';
import {
  BookOpen,
  Compass,
  Sparkles,
  Award,
  Scroll,
  Volume2,
  Maximize2,
  Layers,
  Heart,
  Share2,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  ChevronsUp,
  ChevronsDown,
  HelpCircle,
  BookmarkCheck,
  Search,
  ShieldCheck,
  FileText,
  Lightbulb,
  WifiOff,
  Sun,
  Moon,
  Type
} from 'lucide-react';
import { Language } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import { sacredHaptics } from '../services/haptics';

interface UserGuideViewProps {
  language: Language;
  onClose?: () => void;
}

export const UserGuideView: React.FC<UserGuideViewProps> = ({
  language,
}) => {
  const { theme } = useAppTheme();
  const [activeTopicId, setActiveTopicId] = useState<string>('swadhyay-11-steps');
  const [searchQuery, setSearchQuery] = useState('');

  const labels = {
    hi: {
      title: 'साहेब वर्ल्ड उपयोगकर्ता मार्गदर्शिका (User Guide)',
      subtitle: 'सतगुरु कबीर साहेब जी की पावन वाणी, स्वाध्याय और नितनेम पाठ की संपूर्ण उपयोग विधि',
      searchPlaceholder: 'मार्गदर्शिका में खोजें (उदा. 11 चरण, नितनेम, प्रमाण-पत्र)...',
      allTopics: 'सभी प्रमुख विषय',
      tipsTitle: 'साधक के लिए विशेष सुझाव (Spiritual Tips)',
      satgurHeading: '🌹 ।। सत्यनाम ।। 🌹',
      salutation: '।। साहेब बंदगी साहेब ।। 🙏',
      expandAll: 'सभी खोलें',
      collapseAll: 'सभी समेटें'
    },
    pb: {
      title: 'ਸਾਹੇਬ ਵਰਲਡ ਉਪਭੋਗਤਾ ਮਾਰਗਦਰਸ਼ਿਕਾ (User Guide)',
      subtitle: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੀ ਪਵਿੱਤਰ ਬਾਣੀ, ਸਵਾਧਿਆਏ ਅਤੇ ਨਿੱਤਨੇਮ ਪਾਠ ਦੀ ਸੰਪੂਰਨ ਵਰਤੋਂ ਵਿਧੀ',
      searchPlaceholder: 'ਮਾਰਗਦਰਸ਼ਿਕਾ ਵਿੱਚ ਖੋਜੋ (ਜਿਵੇਂ ੧੧ ਚਰਣ, ਨਿੱਤਨੇਮ, ਪ੍ਰਮਾਣ-ਪੱਤਰ)...',
      allTopics: 'ਸਾਰੇ ਪ੍ਰਮੁੱਖ ਵਿਸ਼ੇ',
      tipsTitle: 'ਸਾਧਕ ਲਈ ਵਿਸ਼ੇਸ਼ ਸੁਝਾਅ (Spiritual Tips)',
      satgurHeading: '🌹 ।। ਸਤਯਨਾਮ ।। 🌹',
      salutation: '।। ਸਾਹਿਬ ਬੰਦਗੀ ਸਾਹਿਬ ।। 🙏',
      expandAll: 'ਸਾਰੇ ਖੋਲ੍ਹੋ',
      collapseAll: 'ਸਾਰੇ ਸਮੇਟੋ'
    },
    en: {
      title: 'Saheb World App User Guide',
      subtitle: 'Complete Guide to Satguru Kabir Saheb Sacred Swadhyay, Nitnem Prayers & Granths',
      searchPlaceholder: 'Search Guide (e.g., 11 Steps, Nitnem, Certificate)...',
      allTopics: 'Key Guide Topics',
      tipsTitle: 'Helpful Seeker Tips',
      satgurHeading: '🌹 || Satyanaam || 🌹',
      salutation: '|| Saheb Bandagi Saheb || 🙏',
      expandAll: 'Expand All',
      collapseAll: 'Collapse All'
    }
  };

  const t = labels[language] || labels.hi;

  const guideTopics = [
    {
      id: 'swadhyay-11-steps',
      icon: Compass,
      badge: 'मुख्य साधना',
      title: {
        hi: '१. पावन ११-चरणीय स्वाध्याय पद्धति (11-Step Swadhyay)',
        pb: '੧. ਪਵਿੱਤਰ ੧੧-ਚਰਣੀ ਸਵਾਧਿਆਏ ਪੱਧਤੀ (11-Step Swadhyay)',
        en: '1. Sacred 11-Step Swadhyay Paddhati'
      },
      summary: {
        hi: 'सतगुरु की साखी का केवल पाठ ही नहीं, बल्कि उसके गूढ़ रहस्यों का क्रमिक अध्ययन व आत्मसात करना।',
        pb: 'ਸਤਿਗੁਰੂ ਦੀ ਸਾਖੀ ਦਾ ਸਿਰਫ ਪਾਠ ਹੀ ਨਹੀਂ, ਸਗੋਂ ਉਸ ਦੇ ਗੂੜ੍ਹ ਰਹੱਸਾਂ ਦਾ ਕ੍ਰਮਵਾਰ ਅਧਿਐਨ ਤੇ ਅਨੁਭਵ ਕਰਨਾ।',
        en: 'Not just reading, but step-by-step realization of mystical esoteric wisdom.'
      },
      content: {
        hi: [
          {
            stepNum: 'चरण १',
            heading: 'मूल पावन वाणी (Mool Vani & Audio Recitation)',
            desc: 'सतगुरु कबीर साहेब जी की मूल साखी का दर्शन करें। ऊपर दिए गए "ऑडियो पाठ (Listen)" बटन को दबाकर शुद्ध उच्चारण में वाणी श्रवण करें। आप हिन्दी, ਪੰਜਾਬੀ (ਗੁਰਮੁਖੀ) और English में एक-क्लिक अनुवाद देख सकते हैं।'
          },
          {
            stepNum: 'चरण २',
            heading: 'साखी संदर्भ व आध्यात्मिक पृष्ठभूमि (Context & Background)',
            desc: 'साखी की ऐतिहासिक व आध्यात्मिक पृष्ठभूमि, कबीर साहेब का तात्कालिक संकेत और समाज-संस्कृति के परिप्रेक्ष्य में वाणी की प्रासंगिकता समझें।'
          },
          {
            stepNum: 'चरण ३',
            heading: 'पावन शब्दार्थ व आध्यात्मिक कोष (Sacred Sandhukkari Glossary)',
            desc: 'संधुक्कड़ी भाषा के प्राचीन व गूढ़ शब्दों (जैसे सुरति, निरति, अनहद, गगन, त्रिकुटी) का सरल और भावपूर्ण अर्थ पढ़ें।'
          },
          {
            stepNum: 'चरण ४',
            heading: 'गहन सत्संग भावार्थ व माया-मन विश्लेषण (Deep Bhavarth)',
            desc: 'वाणी का गहरा आध्यात्मिक भावार्थ और मन व माया के बंधनों से आत्मा की मुक्ति का विवेचन समझें।'
          },
          {
            stepNum: 'चरण ५',
            heading: 'बोध प्रश्नोत्तरी (Interactive Quiz - 5 MCQs)',
            desc: 'वाणी के तत्वज्ञान पर आधारित ५ रोचक बहुविकल्पीय प्रश्नों के उत्तर दें। सही उत्तर पर तुरंत व्याख्या व अंक प्राप्त करें।'
          },
          {
            stepNum: 'चरण ६',
            heading: 'आध्यात्मिक रहस्य व गूढ़ संकेत (Mystical Secrets / Rahasya)',
            desc: 'साखी में छिपा परा-विद्या का गुप्त संकेत और आंतरिक साधना का गूढ़ रहस्य जानें।'
          },
          {
            stepNum: 'चरण ७',
            heading: 'मुख्य आध्यात्मिक शिक्षाएँ (Core Life Teachings)',
            desc: 'दैनिक व्यावहारिक जीवन में साखी से मिलने वाली मुख्य प्रेरणाओं व शिक्षाओं के मुख्य बिंदु।'
          },
          {
            stepNum: 'चरण ८',
            heading: 'समानांतर वाणियाँ (Cross-References & Scriptures)',
            desc: 'कबीर बीजक, श्री गुरु ग्रंथ साहिब, कबीर सागर और अनुराग सागर से मिलती-जुलती प्रमाणिक साखियों का तुलनात्मक अध्ययन।'
          },
          {
            stepNum: 'चरण ९',
            heading: 'आत्म-निरीक्षण व साधना चिंतन (Daily Reflection & Diary)',
            desc: 'साखी का "चिंतन सूत्र" पढ़ें और अपने अंतर्मन के विचार नीचे दी गई डायरी में लिखकर "डायरी में सहेजें" बटन दबाएं।'
          },
          {
            stepNum: 'चरण १०',
            heading: 'साधना विधि व ध्यान-योग (Meditation & Breathing Rhythm)',
            desc: 'सतगुरु के शब्द में सुरति को एकाग्र करने हेतु निर्देशित श्वास-प्रश्वास व ध्यान-साधना का अभ्यास करें।'
          },
          {
            stepNum: 'चरण ११',
            heading: 'पावन स्वाध्याय सिद्धि प्रमाण-पत्र (Personalized Digital Certificate)',
            desc: '११ चरण पूर्ण करने पर अपने नाम का सुंदर डिजिटल प्रमाण-पत्र प्राप्त करें और एक क्लिक में गैलरी में डाउनलोड करें।'
          }
        ],
        pb: [
          {
            stepNum: 'ਚਰਣ ੧',
            heading: 'ਮੂਲ ਪਵਿੱਤਰ ਬਾਣੀ (Mool Vani & Audio Recitation)',
            desc: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੀ ਮੂਲ ਸਾਖੀ ਦਾ ਦਰਸ਼ਨ ਕਰੋ। ਆਡੀਓ ਪਾਠ ਬਟਨ ਦਬਾ ਕੇ ਸ਼ੁੱਧ ਉਚਾਰਨ ਸੁਣੋ। ਹਿੰਦੀ, ਪੰਜਾਬੀ (ਗੁਰਮੁਖੀ) ਅਤੇ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਅਨੁਵਾਦ ਵੇਖੋ।'
          },
          {
            stepNum: 'ਚਰਣ ੨',
            heading: 'ਸਾਖੀ ਸੰਦਰਭ ਅਤੇ ਅਧਿਆਤਮਿਕ ਪਿਛੋਕੜ (Context & Background)',
            desc: 'ਸਾਖੀ ਦਾ ਪਵਿੱਤਰ ਸੰਦਰਭ ਅਤੇ ਰੂਹਾਨੀ ਮਹੱਤਤਾ ਸਮਝੋ।'
          },
          {
            stepNum: 'ਚਰਣ ੩',
            heading: 'ਪਵਿੱਤਰ ਸ਼ਬਦਾਰਥ (Sacred Vocabulary)',
            desc: 'ਸੰਧੁੱਕੜੀ ਬੋਲੀ ਦੇ ਗੂੜ੍ਹ ਸ਼ਬਦਾਂ (ਜਿਵੇਂ ਸੁਰਤਿ, ਨਿਰਤਿ, ਅਨਹਦ, ਗਗਨ) ਦੇ ਸਪਸ਼ਟ ਅਰਥ ਪੜ੍ਹੋ।'
          },
          {
            stepNum: 'ਚਰਣ ੪',
            heading: 'ਗਹਿਰਾ ਸਤਿਸੰਗ ਭਾਵਾਰਥ (Deep Bhavarth)',
            desc: 'ਬਾਣੀ ਦਾ ਡੂੰਘਾ ਅਧਿਆਤਮਿਕ ਅਰਥ ਅਤੇ ਮਾਇਆ-ਮਨ ਦੇ ਜਾਲ ਤੋਂ ਮੁਕਤੀ ਦਾ ਮਾਰਗ ਜਾਣੋ।'
          },
          {
            stepNum: 'ਚਰਣ ੫',
            heading: 'ਬੋਧ ਪ੍ਰਸ਼ਨੋਤਰੀ (Interactive Quiz - 5 MCQs)',
            desc: 'ਸਾਖੀ ਆਧਾਰਿਤ ੫ ਸਵਾਲਾਂ ਦੇ ਜਵਾਬ ਦੇ ਕੇ ਆਪਣੀ ਸਮਝ ਦੀ ਪਰਖ ਕਰੋ।'
          },
          {
            stepNum: 'ਚਰਣ ੬',
            heading: 'ਰੂਹਾਨੀ ਰਹੱਸ (Mystical Secrets)',
            desc: 'ਬਾਣੀ ਅੰਦਰ ਛੁਪਿਆ ਰੂਹਾਨੀ ਭੇਤ ਅਤੇ ਪਰਮ ਸੱਚ ਦਾ ਪ੍ਰਕਾਸ਼।'
          },
          {
            stepNum: 'ਚਰਣ ੭',
            heading: 'ਮੁੱਖ ਸਿੱਖਿਆਵਾਂ (Core Teachings)',
            desc: 'ਰੋਜ਼ਾਨਾ ਜੀਵਨ ਵਿੱਚ ਅਪਣਾਉਣ ਯੋਗ ਅਧਿਆਤਮਿਕ ਸਿੱਖਿਆਵਾਂ।'
          },
          {
            stepNum: 'ਚਰਣ ੮',
            heading: 'ਸਮਾਨਾਂਤਰ ਬਾਣੀ (Cross-References)',
            desc: 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ, ਬੀਜਕ ਤੇ ਕਬੀਰ ਸਾਗਰ ਦੀਆਂ ਸਮਾਨਾਂਤਰ ਤੁਕਾਂ।'
          },
          {
            stepNum: 'ਚਰਣ ੯',
            heading: 'ਚਿੰਤਨ ਸੂਤਰ ਤੇ ਡਾਇਰੀ (Reflection & Diary)',
            desc: 'ਆਪਣੇ ਰੂਹਾਨੀ ਅਨੁਭਵ ਡਾਇਰੀ ਵਿੱਚ ਲਿਖ ਕੇ ਸੁਰੱਖਿਅਤ ਕਰੋ।'
          },
          {
            stepNum: 'ਚਰਣ ੧੦',
            heading: 'ਧਿਆਨ ਸਾਧਨਾ (Meditation Practice)',
            desc: 'ਸੁਰਤਿ-ਨਿਰਤਿ ਨੂੰ ਸਤਯਨਾਮ ਸ਼ਬਦ ਵਿੱਚ ਇਕਾਗਰ ਕਰਨ ਦੀ ਵਿਧੀ।'
          },
          {
            stepNum: 'ਚਰਣ ੧੧',
            heading: 'ਸਵਾਧਿਆਏ ਸਿੱਧੀ ਪ੍ਰਮਾਣ-ਪੱਤਰ (Digital Certificate)',
            desc: '੧੧ ਚਰਣ ਸੰਪੂਰਨ ਹੋਣ \'ਤੇ ਆਪਣੇ ਨਾਮ ਦਾ ਡਿਜੀਟਲ ਪ੍ਰਮਾਣ-ਪੱਤਰ ਡਾਊਨਲੋਡ ਕਰੋ।'
          }
        ],
        en: [
          {
            stepNum: 'Step 1',
            heading: 'Original Sacred Verse (Mool Vani & Audio)',
            desc: 'View the authentic couplet. Listen to clear audio recitation and switch translations among Hindi, Punjabi, and English.'
          },
          {
            stepNum: 'Step 2',
            heading: 'Context & Spiritual Background',
            desc: 'Understand the historical context and divine purpose behind the verse.'
          },
          {
            stepNum: 'Step 3',
            heading: 'Sacred Word Meanings (Sandhukkari Glossary)',
            desc: 'Explore deep esoteric definitions of ancient Sandhukkari terms like Surati, Nirati, Anhad, and Gagan.'
          },
          {
            stepNum: 'Step 4',
            heading: 'Deep Spiritual Commentary (Bhavarth)',
            desc: 'Immerse into philosophical commentary on mind, illusion (Maya), and soul liberation.'
          },
          {
            stepNum: 'Step 5',
            heading: 'Knowledge Check Quiz (5 MCQs)',
            desc: 'Engage with 5 interactive questions with instant explanations.'
          },
          {
            stepNum: 'Step 6',
            heading: 'Mystical Insights (Esoteric Rahasya)',
            desc: 'Uncover the hidden mystical codes and inner spiritual mechanics.'
          },
          {
            stepNum: 'Step 7',
            heading: 'Core Life Lessons',
            desc: 'Actionable spiritual virtues to practice in day-to-day living.'
          },
          {
            stepNum: 'Step 8',
            heading: 'Parallel Verses (Cross-References)',
            desc: 'Comparative study with Guru Granth Sahib, Kabir Bijak, and Anurag Sagar.'
          },
          {
            stepNum: 'Step 9',
            heading: 'Daily Reflection & Journal',
            desc: 'Ponder upon the contemplation prompt and save private notes to your local journal.'
          },
          {
            stepNum: 'Step 10',
            heading: 'Meditation & Breath Alignment',
            desc: 'Step-by-step breath synchronization and inner absorption in the Divine Sound.'
          },
          {
            stepNum: 'Step 11',
            heading: 'Swadhyay Completion Certificate',
            desc: 'Earn and download your verified high-resolution digital certificate.'
          }
        ]
      }
    },
    {
      id: 'nitnem-gutka',
      icon: BookOpen,
      badge: 'नित्य नियम',
      title: {
        hi: '२. नितनेम गुटका साहेब (Nitnem Gutka Reader)',
        pb: '੨. ਨਿੱਤਨੇਮ ਗੁਟਕਾ ਸਾਹਿਬ (Nitnem Gutka Reader)',
        en: '2. Nitnem Gutka Sacred Daily Prayers'
      },
      summary: {
        hi: 'कबीर साहेब जी के प्रातः, सांध्य व दैनिक नित्य पाठ, आरती एवं प्रार्थनाओं का संपूर्ण संग्रह।',
        pb: 'ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੇ ਅੰਮ੍ਰਿਤ ਵੇਲੇ, ਸੰਧਿਆ ਅਤੇ ਨਿੱਤ ਪਾਠ, ਆਰਤੀ ਤੇ ਬੇਨਤੀਆਂ ਦਾ ਸੰਗ੍ਰਹਿ।',
        en: 'Comprehensive daily prayer collection with sync audio, Pure Vani mode & Full Screen.'
      },
      content: {
        hi: [
          {
            stepNum: 'सुविधा १',
            heading: 'पावन पाठ अनुक्रमणिका (Index & Sections)',
            desc: 'प्रातः मंगल आचरण, कबीर साहेब आरती, संध्या साखी, गुदड़ी, अखरावती, कबीर बावन आखरी और ग्रंथ संकलन में से इच्छित पाठ चुनें।'
          },
          {
            stepNum: 'सुविधा २',
            heading: 'सिर्फ वाणी मोड (Pure Vani Mode)',
            desc: 'ऊपर "सिर्फ वाणी" बटन दबाने पर सभी अतिरिक्त पैनल हट जाते हैं और वाणी ऑटो-स्क्रॉल व निरंतर पावन ऑडियो के साथ प्रवाहित होती है।'
          },
          {
            stepNum: 'सुविधा ३',
            heading: 'पूर्ण स्क्रीन (Full Screen Experience)',
            desc: 'मोबाइल में "पूर्ण स्क्रीन" बटन दबाने पर पूरा फोन एक डिजिटल पावन पोथी बन जाता है। ऊपर दाईं ओर सेटिंग्स आइकन से फॉन्ट, थीम व ऑडियो नियंत्रित करें।'
          },
          {
            stepNum: 'सुविधा ४',
            heading: 'अखंड पाठ व ऑटो-स्क्रॉल गति',
            desc: 'बिना स्क्रीन छुए पठन हेतु गति को ०.५x से ३x तक सुगमता से घटा-बढ़ा सकते हैं।'
          }
        ],
        pb: [
          {
            stepNum: 'ਸਹੂਲਤ ੧',
            heading: 'ਪਵਿੱਤਰ ਪਾਠ ਸੂਚੀ (Index & Sections)',
            desc: 'ਅੰਮ੍ਰਿਤ ਵੇਲੇ ਦਾ ਮੰਗਲ ਆਚਰਣ, ਆਰਤੀ, ਸੰਧਿਆ ਸਾਖੀ ਅਤੇ ਹੋਰ ਬਾਣੀਆਂ ਚੁਣੋ।'
          },
          {
            stepNum: 'ਸਹੂਲਤ ੨',
            heading: 'ਸਿਰਫ਼ ਬਾਣੀ ਮੋਡ (Pure Vani Mode)',
            desc: 'ਆਟੋ-ਸਕ੍ਰੌਲ ਅਤੇ ਆਡੀਓ ਦੇ ਨਾਲ ਸ਼ਾਂਤ ਮਾਹੌਲ ਵਿੱਚ ਬਾਣੀ ਦਾ ਆਨੰਦ ਲਓ।'
          },
          {
            stepNum: 'ਸਹੂਲਤ ੩',
            heading: 'ਪੂਰੀ ਸਕਰੀਨ (Full Screen)',
            desc: 'ਫੋਨ ਦੀ ਪੂਰੀ ਸਕਰੀਨ \'ਤੇ ਪੋਥੀ ਪੜ੍ਹੋ। ਸੈਟਿੰਗਜ਼ ਆਈਕਨ ਹਮੇਸ਼ਾ ਉਪਲਬਧ ਰਹਿੰਦਾ ਹੈ।'
          }
        ],
        en: [
          {
            stepNum: 'Feature 1',
            heading: 'Sacred Section Selection',
            desc: 'Choose from Morning Prayers, Aarti, Evening Sakhis, and complete scriptures.'
          },
          {
            stepNum: 'Feature 2',
            heading: 'Pure Vani Mode',
            desc: 'Distraction-free auto-scrolling with synchronized background chanting.'
          },
          {
            stepNum: 'Feature 3',
            heading: 'Full Screen Mode',
            desc: 'Immersive reading designed for mobile devices with an always-accessible Settings button.'
          }
        ]
      }
    },
    {
      id: 'zen-focus-mode',
      icon: Sparkles,
      badge: 'एकाग्रता',
      title: {
        hi: '३. जेन एकाग्रता मोड (Zen Focus Mode)',
        pb: '੩. ਜ਼ੈਨ ਇਕਾਗਰਤਾ ਮੋਡ (Zen Focus Mode)',
        en: '3. Zen Focus Mode'
      },
      summary: {
        hi: 'सभी विकर्षणों को दूर कर सात्विक शांति में ध्यानमग्न होकर स्वाध्याय करें।',
        pb: 'ਸਾਰੇ ਭਟਕਾਵਾਂ ਤੋਂ ਮੁਕਤ ਹੋ ਕੇ ਸ਼ਾਂਤ ਚਿੱਤ ਨਾਲ ਸਾਧਨਾ ਤੇ ਪਾਠ ਕਰੋ।',
        en: 'Serene fullscreen interface for deep meditation and undisturbed contemplation.'
      },
      content: {
        hi: [
          {
            stepNum: 'फीचर १',
            heading: 'दो सुगम दृश्य विकल्प (Two View Tabs)',
            desc: '१) "📜 मूलवाणी व बोध" — केवल पावन दोहा व उसका संक्षिप्त सार।\n२) "🧭 सम्पूर्ण ११-चरणीय स्वाध्याय" — जेन वातावरण में रहते हुए सभी ११ चरणों का क्रमिक अध्ययन।'
          },
          {
            stepNum: 'फीचर २',
            heading: 'पृष्ठभूमि धुन (Background Dhun)',
            desc: 'स्वाध्याय के समय शांतिदायक आध्यात्मिक धुन ऑन या ऑफ कर सकते हैं।'
          },
          {
            stepNum: 'फीचर ३',
            heading: 'सहज वापसी (Easy Return)',
            desc: 'स्क्रीन के शीर्ष पर "सामान्य स्क्रीन (वापस आएं)" बटन दबाकर किसी भी क्षण सामान्य दृश्य में लौट सकते हैं।'
          }
        ],
        pb: [
          {
            stepNum: 'ਫੀਚਰ ੧',
            heading: 'ਦੋ ਦ੍ਰਿਸ਼ ਵਿਕਲਪ',
            desc: '੧) ਮੂਲ ਬਾਣੀ ਤੇ ਬੋਧ\n੨) ਸੰਪੂਰਨ ੧੧-ਚਰਣੀ ਸਵਾਧਿਆਏ।'
          },
          {
            stepNum: 'ਫੀਚਰ ੨',
            heading: 'ਪਿੱਠਭੂਮੀ ਧੁਨ',
            desc: 'ਰੂਹਾਨੀ ਸ਼ਾਂਤੀ ਲਈ ਧੁਨ ਚਾਲੂ ਜਾਂ ਬੰਦ ਕਰੋ।'
          }
        ],
        en: [
          {
            stepNum: 'Feature 1',
            heading: 'Dual Viewing Modes',
            desc: 'Toggle between "Mool Vani & Insight" or "All 11 Swadhyay Steps" in Zen mode.'
          },
          {
            stepNum: 'Feature 2',
            heading: 'Ambient Dhun & Font Scaling',
            desc: 'Calming ambient sound and elder-friendly font scaling.'
          }
        ]
      }
    },
    {
      id: 'certificate-guide',
      icon: Award,
      badge: 'सिद्धि प्रमाण',
      title: {
        hi: '४. पावन स्वाध्याय सिद्धि प्रमाण-पत्र (Certificate)',
        pb: '੪. ਪਵਿੱਤਰ ਸਵਾਧਿਆਏ ਸਿੱਧੀ ਪ੍ਰਮਾਣ-ਪੱਤਰ (Certificate)',
        en: '4. Swadhyay Completion Certificate'
      },
      summary: {
        hi: '११ चरण पूर्ण करने पर अपने नाम का डिजिटल प्रमाण-पत्र प्राप्त करें व सहेजें।',
        pb: '੧੧ ਚਰਣ ਪੂਰੇ ਹੋਣ \'ਤੇ ਆਪਣੇ ਨਾਮ ਦਾ ਡਿਜੀਟਲ ਸਰਟੀਫਿਕੇਟ ਪ੍ਰਾਪਤ ਕਰੋ।',
        en: 'Generate, personalize with your name, and download your authentic PNG certificate.'
      },
      content: {
        hi: [
          {
            stepNum: '१',
            heading: 'साधक का नाम दर्ज करना',
            desc: 'प्रमाण-पत्र में अपना नाम (जैसे श्री/सुश्री...) दर्ज करें। यह नाम आपके फोन में स्वतः सुरक्षित रहता है।'
          },
          {
            stepNum: '२',
            heading: 'हाई-रिज़ॉल्यूशन PNG डाउनलोड',
            desc: '"गैलरी में डाउनलोड करें" बटन दबाते ही पूर्ण स्पष्टता (High-Res 3x Pixel Ratio) के साथ सर्टिफिकेट आपके फोन में सेव हो जाता है।'
          },
          {
            stepNum: '३',
            heading: 'व्हाट्सएप व सोशल शेयर',
            desc: '"व्हाट्सएप पर शेयर करें" बटन दबाकर परिवार और साधक मित्रों के साथ अपनी स्वाध्याय सिद्धि साझा करें।'
          }
        ],
        pb: [
          {
            stepNum: '੧',
            heading: 'ਸਾਧਕ ਦਾ ਨਾਮ',
            desc: 'ਆਪਣਾ ਨਾਮ ਦਰਜ ਕਰੋ ਜੋ ਸਰਟੀਫਿਕੇਟ \'ਤੇ ਪ੍ਰਿੰਟ ਹੋਵੇਗਾ।'
          },
          {
            stepNum: '੨',
            heading: 'PNG ਡਾਊਨਲੋਡ',
            desc: 'ਇੱਕ ਕਲਿੱਕ ਵਿੱਚ ਫੋਨ ਦੀ ਗੈਲਰੀ ਵਿੱਚ ਸੇਵ ਕਰੋ।'
          }
        ],
        en: [
          {
            stepNum: '1',
            heading: 'Personalize Your Name',
            desc: 'Enter your name to generate your official Swadhyay milestone certificate.'
          },
          {
            stepNum: '2',
            heading: 'High-Res PNG Download',
            desc: 'Direct Canvas 2D export directly saves to your device photos.'
          }
        ]
      }
    },
    {
      id: 'quick-scroll-guide',
      icon: ChevronsUp,
      badge: 'नेविगेशन',
      title: {
        hi: '५. फ्लोटिंग क्विक-स्क्रॉल नेविगेशन (Quick Scroll)',
        pb: '੫. ਫਲੋਟਿੰਗ ਕੁਇਕ-ਸਕ੍ਰੌਲ ਨੈਵੀਗੇਸ਼ਨ (Quick Scroll)',
        en: '5. Floating Quick Scroll Navigation'
      },
      summary: {
        hi: 'मोबाइल स्क्रीन पर अंगूठे की सहज पहुँच में ऊपर और नीचे जाने की सुलभ सुविधा।',
        pb: 'ਮੋਬਾਈਲ ਸਕ੍ਰੀਨ \'ਤੇ ਅੰਗੂਠੇ ਦੀ ਸਹਿਜ ਪਹੁੰਚ ਵਿੱਚ ਉੱਪਰ-ਹੇਠਾਂ ਜਾਣ ਦੀ ਸਹੂਲਤ।',
        en: 'Floating thumb-zone pill to effortlessly jump to the top or bottom of any page.'
      },
      content: {
        hi: [
          {
            stepNum: 'बटन १',
            heading: 'शीर्ष पर जाएं (Scroll to Top)',
            desc: 'दाएँ निचले कोने में स्थित गोल फ्लोटिंग पिल का ऊपरी बटन (ChevronsUp) दबाते ही आप तुरंत पेज के सबसे ऊपर पहुँच जाएंगे।'
          },
          {
            stepNum: 'बटन २',
            heading: 'तल पर जाएं (Scroll to Bottom)',
            desc: 'निचला बटन (ChevronsDown) दबाते ही सीधे पेज के अंत व पाद-लेख तक सहज ग्लाइड कर सकते हैं।'
          }
        ],
        pb: [
          {
            stepNum: 'ਬਟਨ ੧',
            heading: 'ਸਭ ਤੋਂ ਉੱਪਰ ਜਾਓ',
            desc: 'ਸਕ੍ਰੀਨ ਦੇ ਸੱਜੇ ਪਾਸੇ ਦਿੱਤੇ ਬਟਨ ਨਾਲ ਤੁਰੰਤ ਉੱਪਰ ਪਹੁੰਚੋ।'
          },
          {
            stepNum: 'ਬਟਨ ੨',
            heading: 'ਸਭ ਤੋਂ ਹੇਠਾਂ ਜਾਓ',
            desc: 'ਸਿੱਧਾ ਪੇਜ ਦੇ ਅਖੀਰ ਤੱਕ ਸਕ੍ਰੌਲ ਕਰੋ।'
          }
        ],
        en: [
          {
            stepNum: 'Action 1',
            heading: 'Scroll to Top',
            desc: 'Tap the top arrow in the floating pill to smoothly glide to the page top.'
          },
          {
            stepNum: 'Action 2',
            heading: 'Scroll to Bottom',
            desc: 'Tap the bottom arrow to glide directly to the bottom footer.'
          }
        ]
      }
    },
    {
      id: 'app-sharing-offline',
      icon: Share2,
      badge: 'साझा व ऑफलाइन',
      title: {
        hi: '६. ऐप शेयर व ऑफलाइन उपयोग (Share & Offline PWA)',
        pb: '੬. ਐਪ ਸ਼ੇਅਰ ਤੇ ਆਫਲਾਈਨ ਵਰਤੋਂ (Share & Offline)',
        en: '6. Share App & Offline PWA Usage'
      },
      summary: {
        hi: 'मित्रों को ऐप शेयर करें और बिना इंटरनेट भी निरंतर स्वाध्याय जारी रखें।',
        pb: 'ਸਤਿਸੰਗੀਆਂ ਨਾਲ ਐਪ ਸਾਂਝੀ ਕਰੋ ਅਤੇ ਬਿਨਾਂ ਇੰਟਰਨੈੱਟ ਵੀ ਪਾਠ ਕਰੋ।',
        en: 'Share with spiritual companions and study completely offline without internet.'
      },
      content: {
        hi: [
          {
            stepNum: '१',
            heading: '📤 ऐप शेयर करें',
            desc: 'मेनू या फुटर में "ऐप शेयर करें" बटन दबाएं। यह स्वचालित रूप से सत्यनाम का पावन संदेश और ऐप का लाइव लिंक व्हाट्सएप पर शेयर करने हेतु तैयार कर देता है।'
          },
          {
            stepNum: '२',
            heading: 'ऑफलाइन सुविधा (PWA Install)',
            desc: 'इस ऐप को आप अपने फोन की होम स्क्रीन पर "Add to Home Screen" करके एक सामान्य ऐप की तरह इंस्टॉल कर सकते हैं। एक बार खुलने के बाद यह बिना इंटरनेट भी कार्य करता है।'
          }
        ],
        pb: [
          {
            stepNum: '੧',
            heading: 'ਐਪ ਸ਼ੇਅਰ ਕਰੋ',
            desc: 'ਸਤਿਸੰਗੀਆਂ ਨੂੰ ਸਤਯਨਾਮ ਦੇ ਸੰਦੇਸ਼ ਨਾਲ ਐਪ ਦਾ ਲਿੰਕ ਭੇਜੋ।'
          },
          {
            stepNum: '੨',
            heading: 'ਆਫਲਾਈਨ ਵਰਤੋਂ',
            desc: 'ਫੋਨ ਵਿੱਚ ਇੰਸਟਾਲ ਕਰਕੇ ਬਿਨਾਂ ਇੰਟਰਨੈੱਟ ਵੀ ਪੜ੍ਹੋ।'
          }
        ],
        en: [
          {
            stepNum: '1',
            heading: 'Share App on WhatsApp',
            desc: 'Tap Share App to send a beautiful pre-written devotional invitation with the live app link.'
          },
          {
            stepNum: '2',
            heading: 'Offline Install (PWA)',
            desc: 'Add to Home screen to enjoy full offline access anytime without mobile data.'
          }
        ]
      }
    }
  ];

  const filteredTopics = guideTopics.filter((tp) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const tTitle = tp.title[language] || tp.title.hi;
    const tSumm = tp.summary[language] || tp.summary.hi;
    return tTitle.toLowerCase().includes(q) || tSumm.toLowerCase().includes(q);
  });

  return (
    <div className="w-full space-y-6 font-serif" style={{ color: theme.textPrimary }}>
      {/* Sacred Top Banner */}
      <div className="text-center space-y-1 pb-2 border-b" style={{ borderColor: theme.cardBorder }}>
        <span style={{ color: theme.accentGold }} className="text-xs font-bold uppercase tracking-normal">
          {t.satgurHeading}
        </span>
        <h2 style={{ color: theme.sacredMaroon }} className="text-xl sm:text-2xl font-black">
          {t.title}
        </h2>
        <p style={{ color: theme.textSecondary }} className="text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      {/* Quick Search Bar */}
      <div className="relative max-w-md mx-auto">
        <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: theme.accentGold }} />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={t.searchPlaceholder}
          style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder, color: theme.textPrimary }}
          className="w-full pl-10 pr-4 py-2.5 rounded-2xl border backdrop-blur-md text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            style={{ color: theme.textMuted }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold hover:opacity-80 cursor-pointer"
          >
            ✕
          </button>
        )}
      </div>

      {/* Topic Switcher Pills */}
      <div className="flex items-center gap-2 overflow-x-auto [scrollbar-width:none] py-1">
        {guideTopics.map((tp) => {
          const Icon = tp.icon;
          const isAct = activeTopicId === tp.id;
          return (
            <button
              key={tp.id}
              type="button"
              onClick={() => {
                sacredHaptics.lightTap();
                setActiveTopicId(tp.id);
              }}
              style={
                isAct
                  ? { backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText, borderColor: theme.accentGold }
                  : { backgroundColor: theme.cardBg, color: theme.textPrimary, borderColor: theme.cardBorder }
              }
              className={`px-3 py-1.5 rounded-2xl border backdrop-blur-md text-xs font-bold flex items-center gap-1.5 transition cursor-pointer whitespace-nowrap shrink-0 ${
                isAct ? 'shadow-md scale-105' : 'hover:border-amber-400'
              }`}
            >
              <Icon size={14} style={{ color: isAct ? theme.buttonPrimaryText : theme.accentGold }} />
              <span>{tp.badge}</span>
            </button>
          );
        })}
      </div>

      {/* Detailed Topics Accordion / Walkthrough Cards */}
      <div className="space-y-4">
        {filteredTopics.map((topic) => {
          const Icon = topic.icon;
          const isSelected = activeTopicId === topic.id;
          const contentList = topic.content[language] || topic.content.hi;

          return (
            <div
              key={topic.id}
              id={`guide-card-${topic.id}`}
              style={{
                backgroundColor: theme.cardBg,
                borderColor: isSelected ? theme.accentGold : theme.cardBorder,
                color: theme.textPrimary,
              }}
              className={`rounded-3xl border-2 backdrop-blur-md transition-all duration-300 overflow-hidden shadow-sm ${
                isSelected ? 'shadow-md ring-1 ring-amber-500/30' : 'hover:border-amber-500/40'
              }`}
            >
              {/* Header Accordion Bar */}
              <button
                type="button"
                onClick={() => {
                  sacredHaptics.lightTap();
                  setActiveTopicId(isSelected ? '' : topic.id);
                }}
                className="w-full p-4 sm:p-5 flex items-center justify-between gap-3 text-left cursor-pointer transition"
              >
                <div className="flex items-start sm:items-center gap-3 min-w-0">
                  <div
                    style={{ backgroundColor: theme.stepActiveBg, color: theme.accentGold, borderColor: theme.cardBorder }}
                    className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 border shadow-2xs"
                  >
                    <Icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <h3 style={{ color: theme.sacredMaroon }} className="text-sm sm:text-base font-black">
                      {topic.title[language] || topic.title.hi}
                    </h3>
                    <p style={{ color: theme.textSecondary }} className="text-xs truncate mt-0.5">
                      {topic.summary[language] || topic.summary.hi}
                    </p>
                  </div>
                </div>

                <div
                  style={{ backgroundColor: theme.bgSecondary, color: theme.accentGold }}
                  className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                >
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${isSelected ? 'rotate-180' : ''}`}
                  />
                </div>
              </button>

              {/* Expanded Walkthrough Details */}
              {isSelected && (
                <div className="px-4 sm:px-6 pb-6 pt-1 space-y-3.5 border-t animate-fadeIn" style={{ borderColor: theme.cardBorder }}>
                  <div className="grid grid-cols-1 gap-3 pt-2">
                    {contentList.map((step, sIdx) => (
                      <div
                        key={sIdx}
                        style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder }}
                        className="p-3.5 sm:p-4 rounded-2xl border backdrop-blur-sm shadow-2xs space-y-1.5"
                      >
                        <div className="flex items-center gap-2">
                          <span
                            style={{ backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText }}
                            className="px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase tracking-wider"
                          >
                            {step.stepNum}
                          </span>
                          <h4 style={{ color: theme.sacredMaroon }} className="text-xs sm:text-sm font-black">
                            {step.heading}
                          </h4>
                        </div>
                        <p style={{ color: theme.textPrimary }} className="text-xs leading-relaxed whitespace-pre-line pl-1">
                          {step.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Devotional Salutation Footer */}
      <div className="pt-4 text-center border-t" style={{ borderColor: theme.cardBorder }}>
        <span style={{ color: theme.sacredMaroon }} className="text-xs sm:text-sm font-bold tracking-normal">
          {t.salutation}
        </span>
      </div>
    </div>
  );
};
