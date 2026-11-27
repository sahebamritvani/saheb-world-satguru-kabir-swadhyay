import React, { useState, useEffect, useRef } from 'react';
import {
  Award,
  CheckCircle2,
  XCircle,
  RotateCcw,
  ChevronRight,
  Download,
  User,
  BookOpen,
} from 'lucide-react';
import { AppView, Language, SACRED_BRANDING } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import { sacredHaptics } from '../services/haptics';
import { NewModulesNavBar } from './NewModulesNavBar';

interface KabirGyanQuizProps {
  language: Language;
  onSelectLanguage?: (lang: Language) => void;
  onNavigateView: (view: AppView) => void;
  onClose: () => void;
}

interface QuizQuestionItem {
  id: string;
  question: Record<Language, string>;
  options: Record<Language, string[]>;
  correctIndex: number;
  explanation: Record<Language, string>;
}

const QUIZ_QUESTIONS: QuizQuestionItem[] = [
  {
    id: 'q1-lahartara',
    question: {
      hi: 'सतगुरु कबीर साहेब का पावन प्राकट्य किस सरोवर में हुआ था?',
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦਾ ਪਾਵਨ ਪ੍ਰਕਾਸ਼ ਕਿਸ ਸਰੋਵਰ ਵਿੱਚ ਹੋਇਆ ਸੀ?',
      en: 'In which sacred pond did Satguru Kabir Saheb manifest?',
    },
    options: {
      hi: ['लहरतारा (काशी)', 'मानसरोवर', 'पुष्कर', 'त्रिवेणी'],
      pb: ['ਲਹਿਰਤਾਰਾ (ਕਾਸ਼ੀ)', 'ਮਾਨਸਰੋਵਰ', 'ਪੁਸ਼ਕਰ', 'ਤ੍ਰਿਵੇਣੀ'],
      en: ['Lahartara (Kashi)', 'Mansarovar', 'Pushkar', 'Triveni'],
    },
    correctIndex: 0,
    explanation: {
      hi: 'ज्येष्ठ शुक्ल पूर्णिमा, संवत १४५५ (सन् १३९८) को काशी के पावन लहरतारा तालाब में कमल पुष्प पर सतगुरु कबीर साहेब का प्राकट्य हुआ था।',
      pb: 'ਜੇਠ ਸੁਦੀ ਪੂਰਨਮਾਸ਼ੀ, ਸੰਮਤ ੧੪੫੫ (੧੩੯੮ ਈ.) ਨੂੰ ਕਾਸ਼ੀ ਦੇ ਪਾਵਨ ਲਹਿਰਤਾਰਾ ਸਰੋਵਰ ਵਿੱਚ ਕਮਲ ਫੁੱਲ ਉੱਤੇ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਪ੍ਰਗਟ ਹੋਏ ਸਨ।',
      en: 'On Jyeshtha Shukla Purnima in 1398 CE, Satguru Kabir Saheb manifested upon a blooming lotus in the sacred Lahartara pond in Kashi.',
    },
  },
  {
    id: 'q2-dharmadas',
    question: {
      hi: "सतगुरु कबीर साहेब ने किस शिष्य को 'वंश बयालीस' का वरदान दिया था?",
      pb: "ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਕਿਸ ਸ਼ਿਸ਼ ਨੂੰ 'ਵੰਸ਼ ਬਿਆਲੀ' ਦਾ ਵਰਦਾਨ ਦਿੱਤਾ ਸੀ?",
      en: "Which disciple did Satguru Kabir Saheb bless with the 'Vansh Bayalis' lineage?",
    },
    options: {
      hi: ['धनी धर्मदास साहेब जी', 'कमाल साहेब जी', 'सुरति गोपाल साहेब जी', 'भगवानदास साहेब जी'],
      pb: ['ਧਨੀ ਧਰਮਦਾਸ ਸਾਹੇਬ ਜੀ', 'ਕਮਾਲ ਸਾਹੇਬ ਜੀ', 'ਸੁਰਤਿ ਗੋਪਾਲ ਸਾਹੇਬ ਜੀ', 'ਭਗਵਾਨਦਾਸ ਸਾਹੇਬ ਜੀ'],
      en: ['Dhani Dharmadas Saheb Ji', 'Kamal Saheb Ji', 'Surati Gopal Saheb Ji', 'Bhagwandas Saheb Ji'],
    },
    correctIndex: 0,
    explanation: {
      hi: "सतगुरु कबीर साहेब ने अपने परम शिष्य धनी धर्मदास साहेब जी और माता आमिनी देवी की अनन्य भक्ति से प्रसन्न होकर ४२ पीढ़ियों के 'वंश बयालीस' का वरदान दिया था।",
      pb: "ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਧਨੀ ਧਰਮਦਾਸ ਸਾਹੇਬ ਜੀ ਅਤੇ ਮਾਤਾ ਆਮਿਨੀ ਦੇਵੀ ਦੀ ਭਗਤੀ ਤੋਂ ਪ੍ਰਸੰਨ ਹੋ ਕੇ ੪੨ ਪੀੜ੍ਹੀਆਂ ਦੇ 'ਵੰਸ਼ ਬਿਆਲੀ' ਦਾ ਵਰਦਾਨ ਦਿੱਤਾ ਸੀ।",
      en: "Pleased with the supreme devotion of Dhani Dharmadas Saheb Ji and Mata Amini Devi, Satguru Kabir Saheb granted the boon of the 42-generation 'Vansh Bayalis' lineage.",
    },
  },
  {
    id: 'q3-damakheda-founder',
    question: {
      hi: 'कबीर धर्मनगर दामाखेड़ा गद्दी की स्थापना किस वंशाचार्य ने की थी?',
      pb: 'ਕਬੀਰ ਧਰਮਨਗਰ ਦਾਮਾਖੇੜਾ ਗੱਦੀ ਦੀ ਸਥਾਪਨਾ ਕਿਸ ਵੰਸ਼ਾਚਾਰੀਆ ਨੇ ਕੀਤੀ ਸੀ?',
      en: 'Which Vanshacharya founded the Kabir Dharmanagar Damakheda Gaddi?',
    },
    options: {
      hi: [
        '१२वें वंशाचार्य उग्र नाम साहेब जी',
        'प्रथम वंशाचार्य चूड़ामणि नाम साहेब जी',
        '८वें वंशाचार्य हक़ नाम साहेब जी',
        '४थे वंशाचार्य प्रमोदगुरु साहेब जी',
      ],
      pb: [
        '੧੨ਵੇਂ ਵੰਸ਼ਾਚਾਰੀਆ ਉਗਰ ਨਾਮ ਸਾਹੇਬ ਜੀ',
        'ਪਹਿਲੇ ਵੰਸ਼ਾਚਾਰੀਆ ਚੂੜਾਮਣੀ ਨਾਮ ਸਾਹੇਬ ਜੀ',
        '੮ਵੇਂ ਵੰਸ਼ਾਚਾਰੀਆ ਹੱਕ ਨਾਮ ਸਾਹੇਬ ਜੀ',
        '੪ਥੇ ਵੰਸ਼ਾਚਾਰੀਆ ਪ੍ਰਮੋਦਗੁਰੂ ਸਾਹੇਬ ਜੀ',
      ],
      en: [
        '12th Vanshacharya Ugra Naam Saheb Ji',
        '1st Vanshacharya Chudamani Naam Saheb Ji',
        '8th Vanshacharya Haq Naam Saheb Ji',
        '4th Vanshacharya Pramodguru Saheb Ji',
      ],
    },
    correctIndex: 0,
    explanation: {
      hi: 'कबीर धर्मनगर दामाखेड़ा की पावन मुख्य गद्दी की स्थापना १२वें वंशाचार्य पंथ श्री उग्र नाम साहेब जी द्वारा की गई थी।',
      pb: 'ਕਬੀਰ ਧਰਮਨਗਰ ਦਾਮਾਖੇੜਾ ਦੀ ਪਾਵਨ ਮੁੱਖ ਗੱਦੀ ਦੀ ਸਥਾਪਨਾ ੧੨ਵੇਂ ਵੰਸ਼ਾਚਾਰੀਆ ਪੰਥ ਸ੍ਰੀ ਉਗਰ ਨਾਮ ਸਾਹੇਬ ਜੀ ਨੇ ਕੀਤੀ ਸੀ।',
      en: 'The sacred seat at Kabir Dharmanagar Damakheda was established by the 12th Vanshacharya, Panth Shri Ugra Naam Saheb Ji.',
    },
  },
  {
    id: 'q4-present-acharya',
    question: {
      hi: 'कबीर धर्मनगर दामाखेड़ा के वर्तमान १५वें वंशाचार्य कौन हैं?',
      pb: 'ਕਬੀਰ ਧਰਮਨਗਰ ਦਾਮਾਖੇੜਾ ਦੇ ਵਰਤਮਾਨ ੧੫ਵੇਂ ਵੰਸ਼ਾਚਾਰੀਆ ਕੌਣ ਹਨ?',
      en: 'Who is the present 15th Vanshacharya of Kabir Dharmanagar Damakheda?',
    },
    options: {
      hi: [
        'पंथ श्री हुजूर प्रकाशमुनि नाम साहेब जी',
        'पंथ श्री हुजूर उदितमुनि नाम साहेब जी',
        'गृन्धमुनि नाम साहेब जी',
        'दया नाम साहेब जी',
      ],
      pb: [
        'ਪੰਥ ਸ੍ਰੀ ਹਜ਼ੂਰ ਪ੍ਰਕਾਸ਼ਮੁਨੀ ਨਾਮ ਸਾਹੇਬ ਜੀ',
        'ਪੰਥ ਸ੍ਰੀ ਹਜ਼ੂਰ ਉਦਿਤਮੁਨੀ ਨਾਮ ਸਾਹੇਬ ਜੀ',
        'ਗ੍ਰਿੰਧਮੁਨੀ ਨਾਮ ਸਾਹੇਬ ਜੀ',
        'ਦਯਾ ਨਾਮ ਸਾਹੇਬ ਜੀ',
      ],
      en: [
        'Panth Shri Huzoor Prakashmuni Naam Saheb Ji',
        'Panth Shri Huzoor Uditmuni Naam Saheb Ji',
        'Grindhmuni Naam Saheb Ji',
        'Daya Naam Saheb Ji',
      ],
    },
    correctIndex: 0,
    explanation: {
      hi: 'पंथ श्री हुजूर प्रकाशमुनि नाम साहेब जी वर्तमान १५वें वंशाचार्य हैं, जो दामाखेड़ा गद्दी से संपूर्ण विश्व में सत्यनाम एवं नशामुक्ति का संदेश दे रहे हैं।',
      pb: 'ਪੰਥ ਸ੍ਰੀ ਹਜ਼ੂਰ ਪ੍ਰਕਾਸ਼ਮੁਨੀ ਨਾਮ ਸਾਹੇਬ ਜੀ ਵਰਤਮਾਨ ੧੫ਵੇਂ ਵੰਸ਼ਾਚਾਰੀਆ ਹਨ, ਜੋ ਦਾਮਾਖੇੜਾ ਗੱਦੀ ਤੋਂ ਸਤਯਨਾਮ ਅਤੇ ਨਸ਼ਾ-ਮੁਕਤੀ ਦਾ ਸੰਦੇਸ਼ ਦੇ ਰਹੇ ਹਨ।',
      en: 'Panth Shri Huzoor Prakashmuni Naam Saheb Ji is the current 15th Vanshacharya guiding the global Kabir Panth from Damakheda.',
    },
  },
  {
    id: 'q5-chauka-aarti',
    question: {
      hi: "कबीर पंथ के 'सात्विक यज्ञ' को किस नाम से जाना जाता है?",
      pb: "ਕਬੀਰ ਪੰਥ ਦੇ 'ਸਾਤਵਿਕ ਯੱਗ' ਨੂੰ ਕਿਸ ਨਾਮ ਨਾਲ ਜਾਣਿਆ ਜਾਂਦਾ ਹੈ?",
      en: "By what name is the non-violent 'Satvik Yagya' of Kabir Panth known?",
    },
    options: {
      hi: ['चौका-आरती', 'हवन यज्ञ', 'दीपदान', 'अभिषेक'],
      pb: ['ਚੌਕਾ-ਆਰਤੀ', 'ਹਵਨ ਯੱਗ', 'ਦੀਪਦਾਨ', 'ਅਭਿਸ਼ੇਕ'],
      en: ['Chauka-Aarti', 'Havan Yagya', 'Deepdaan', 'Abhishek'],
    },
    correctIndex: 0,
    explanation: {
      hi: 'कबीर पंथ में चौका-आरती को अहिंसक सात्विक यज्ञ कहा गया है, जो आत्मा की शुद्धि और सतगुरु के प्रति कृतज्ञता का पावन अनुष्ठान है।',
      pb: 'ਕਬੀਰ ਪੰਥ ਵਿੱਚ ਚੌਕਾ-ਆਰਤੀ ਨੂੰ ਅਹਿੰਸਕ ਸਾਤਵਿਕ ਯੱਗ ਕਿਹਾ ਜਾਂਦਾ ਹੈ, ਜੋ ਆਤਮਾ ਦੀ ਸ਼ੁੱਧੀ ਅਤੇ ਸਤਿਗੁਰੂ ਪ੍ਰਤੀ ਸ਼ਰਧਾ ਦਾ ਪਵਿੱਤਰ ਅਨੁਸ਼ਠਾਨ ਹੈ।',
      en: 'In Kabir Panth, Chauka-Aarti is celebrated as the non-violent Satvik Yagya for spiritual purification and gratitude to Satguru.',
    },
  },
  {
    id: 'q6-first-vanshacharya',
    question: {
      hi: "'वंश बयालीस' परंपरा के प्रथम वंशाचार्य और धनी धर्मदास साहेब जी के सुपुत्र कौन थे?",
      pb: "'ਵੰਸ਼ ਬਿਆਲੀ' ਪਰੰਪਰਾ ਦੇ ਪਹਿਲੇ ਵੰਸ਼ਾਚਾਰੀਆ ਅਤੇ ਧਨੀ ਧਰਮਦਾਸ ਸਾਹੇਬ ਜੀ ਦੇ ਸਪੁੱਤਰ ਕੌਣ ਸਨ?",
      en: "Who was the 1st Vanshacharya of the 'Vansh Bayalis' lineage and son of Dhani Dharmadas Saheb Ji?",
    },
    options: {
      hi: [
        'पंथ श्री चूड़ामणि (मुक्तामणि) नाम साहेब जी',
        'सुदर्शन नाम साहेब जी',
        'कुलपति नाम साहेब जी',
        'उग्र नाम साहेब जी',
      ],
      pb: [
        'ਪੰਥ ਸ੍ਰੀ ਚੂੜਾਮਣੀ (ਮੁਕਤਾਮਣੀ) ਨਾਮ ਸਾਹੇਬ ਜੀ',
        'ਸੁਦਰਸ਼ਨ ਨਾਮ ਸਾਹੇਬ ਜੀ',
        'ਕੁਲਪਤੀ ਨਾਮ ਸਾਹੇਬ ਜੀ',
        'ਉਗਰ ਨਾਮ ਸਾਹੇਬ ਜੀ',
      ],
      en: [
        'Panth Shri Chudamani (Muktamani) Naam Saheb Ji',
        'Sudarshan Naam Saheb Ji',
        'Kulpati Naam Saheb Ji',
        'Ugra Naam Saheb Ji',
      ],
    },
    correctIndex: 0,
    explanation: {
      hi: 'धनी धर्मदास साहेब जी एवं माता आमिनी देवी के सुपुत्र पंथ श्री चूड़ामणि (मुक्तामणि) नाम साहेब जी वंश बयालीस परंपरा के प्रथम वंशाचार्य थे।',
      pb: 'ਧਨੀ ਧਰਮਦਾਸ ਸਾਹੇਬ ਜੀ ਅਤੇ ਮਾਤਾ ਆਮਿਨੀ ਦੇਵੀ ਦੇ ਸਪੁੱਤਰ ਪੰਥ ਸ੍ਰੀ ਚੂੜਾਮਣੀ (ਮੁਕਤਾਮਣੀ) ਨਾਮ ਸਾਹੇਬ ਜੀ ਵੰਸ਼ ਬਿਆਲੀ ਪਰੰਪਰਾ ਦੇ ਪਹਿਲੇ ਵੰਸ਼ਾਚਾਰੀਆ ਸਨ।',
      en: 'Panth Shri Chudamani (Muktamani) Naam Saheb Ji, son of Dhani Dharmadas Saheb Ji and Mata Amini Devi, was the 1st Vanshacharya.',
    },
  },
];

const QUIZ_STORAGE_KEY = 'sahebworld_kabir_gyan_quiz_stats_v1';

interface QuizStats {
  seekerName: string;
  bestScore: number;
  attempts: number;
  lastScore: number | null;
}

export const KabirGyanQuiz: React.FC<KabirGyanQuizProps> = ({
  language,
  onSelectLanguage,
  onNavigateView,
  onClose,
}) => {
  const { theme, isDarkMode } = useAppTheme();

  const [stats, setStats] = useState<QuizStats>(() => {
    try {
      const raw = localStorage.getItem(QUIZ_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        return {
          seekerName: typeof parsed.seekerName === 'string' ? parsed.seekerName : '',
          bestScore: Number(parsed.bestScore) || 0,
          attempts: Number(parsed.attempts) || 0,
          lastScore: typeof parsed.lastScore === 'number' ? parsed.lastScore : null,
        };
      }
    } catch {}
    return { seekerName: '', bestScore: 0, attempts: 0, lastScore: null };
  });

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const certCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(stats));
    } catch {}
  }, [stats]);

  const currentQuestion = QUIZ_QUESTIONS[currentIdx];

  const ui = {
    hi: {
      title: 'कबीर ज्ञान प्रश्नोत्तरी',
      subtitle: 'सतगुरु कबीर साहेब, धनी धर्मदास साहेब एवं वंश बयालीस परंपरा से जुड़े ६ प्रामाणिक प्रश्न।',
      questionLabel: 'प्रश्न',
      of: 'में से',
      bestScore: 'सर्वश्रेष्ठ स्कोर:',
      attempts: 'प्रयास:',
      correctFeedback: 'सही उत्तर!',
      wrongFeedback: 'सही उत्तर है:',
      nextBtn: 'अगला प्रश्न',
      finishBtn: 'परिणाम एवं प्रमाण-पत्र देखें',
      certTitle: 'कबीर ज्ञान प्रमाण-पत्र',
      certSubtitle: 'Certificate of Appreciation',
      certBody: 'को कबीर ज्ञान प्रश्नोत्तरी सफलतापूर्वक पूर्ण करने पर सादर प्रदान किया जाता है।',
      scoreLabel: 'प्राप्तांक:',
      nameLabel: 'प्रमाण-पत्र हेतु आपका नाम:',
      namePlaceholder: 'अपना शुभ नाम लिखें...',
      downloadCert: 'प्रमाण-पत्र डाउनलोड करें (PNG)',
      retakeBtn: 'प्रश्नोत्तरी पुनः खेलें',
      defaultSeeker: 'श्रद्धालु साधक',
    },
    pb: {
      title: 'ਕਬੀਰ ਗਿਆਨ ਪ੍ਰਸ਼ਨੋਤਰੀ',
      subtitle: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ, ਧਨੀ ਧਰਮਦਾਸ ਸਾਹੇਬ ਅਤੇ ਵੰਸ਼ ਬਿਆਲੀ ਪਰੰਪਰਾ ਨਾਲ ਜੁੜੇ ੬ ਪ੍ਰਮਾਣਿਕ ਪ੍ਰਸ਼ਨ।',
      questionLabel: 'ਪ੍ਰਸ਼ਨ',
      of: 'ਵਿੱਚੋਂ',
      bestScore: 'ਵਧੀਆ ਸਕੋਰ:',
      attempts: 'ਕੋਸ਼ਿਸ਼ਾਂ:',
      correctFeedback: 'ਸਹੀ ਜਵਾਬ!',
      wrongFeedback: 'ਸਹੀ ਜਵਾਬ ਹੈ:',
      nextBtn: 'ਅਗਲਾ ਪ੍ਰਸ਼ਨ',
      finishBtn: 'ਨਤੀਜਾ ਅਤੇ ਪ੍ਰਮਾਣ-ਪੱਤਰ ਵੇਖੋ',
      certTitle: 'ਕਬੀਰ ਗਿਆਨ ਪ੍ਰਮਾਣ-ਪੱਤਰ',
      certSubtitle: 'Certificate of Appreciation',
      certBody: 'ਨੂੰ ਕਬੀਰ ਗਿਆਨ ਪ੍ਰਸ਼ਨੋਤਰੀ ਸਫਲਤਾਪੂਰਵਕ ਪੂਰੀ ਕਰਨ ਤੇ ਸਤਿਕਾਰ ਸਹਿਤ ਭੇਂਟ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।',
      scoreLabel: 'ਪ੍ਰਾਪਤ ਅੰਕ:',
      nameLabel: 'ਪ੍ਰਮਾਣ-ਪੱਤਰ ਲਈ ਤੁਹਾਡਾ ਨਾਮ:',
      namePlaceholder: 'ਆਪਣਾ ਸ਼ੁਭ ਨਾਮ ਲਿਖੋ...',
      downloadCert: 'ਪ੍ਰਮਾਣ-ਪੱਤਰ ਡਾਊਨਲੋਡ ਕਰੋ (PNG)',
      retakeBtn: 'ਦੁਬਾਰਾ ਖੇਡੋ',
      defaultSeeker: 'ਸ਼ਰਧਾਲੂ ਸਾਧਕ',
    },
    en: {
      title: 'Kabir Gyan Spiritual Quiz',
      subtitle: 'Test your knowledge with 6 authentic questions on Satguru Kabir Saheb, Dhani Dharmadas Ji, and the Vansh Bayalis lineage.',
      questionLabel: 'Question',
      of: 'of',
      bestScore: 'Best Score:',
      attempts: 'Attempts:',
      correctFeedback: 'Correct Answer!',
      wrongFeedback: 'Correct Answer:',
      nextBtn: 'Next Question',
      finishBtn: 'View Score & Certificate',
      certTitle: 'Certificate of Appreciation',
      certSubtitle: 'कबीर ज्ञान प्रमाण-पत्र',
      certBody: 'is hereby honored for successfully completing the Kabir Gyan Spiritual Quiz.',
      scoreLabel: 'Final Score:',
      nameLabel: 'Your Name on Certificate:',
      namePlaceholder: 'Enter your name...',
      downloadCert: 'Download Certificate (PNG)',
      retakeBtn: 'Retake Quiz',
      defaultSeeker: 'Devoted Seeker',
    },
  }[language];

  const handleSelectOption = (optIdx: number) => {
    if (selectedIdx !== null) return;
    setSelectedIdx(optIdx);
    if (optIdx === currentQuestion.correctIndex) {
      sacredHaptics.divineBlessing();
      setScore((prev) => prev + 1);
    } else {
      sacredHaptics.lightTap();
    }
  };

  const handleNext = () => {
    sacredHaptics.lightTap();
    if (currentIdx + 1 < QUIZ_QUESTIONS.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedIdx(null);
    } else {
      setIsCompleted(true);
      setStats((prev) => ({
        ...prev,
        attempts: prev.attempts + 1,
        lastScore: score,
        bestScore: Math.max(prev.bestScore, score),
      }));
    }
  };

  const handleRestart = () => {
    sacredHaptics.mediumTap();
    setCurrentIdx(0);
    setSelectedIdx(null);
    setScore(0);
    setIsCompleted(false);
  };

  const handleDownloadCertificate = () => {
    sacredHaptics.mediumTap();
    const canvas = certCanvasRef.current || document.createElement('canvas');
    const w = 1200;
    const h = 850;
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Cream spiritual parchment background
    ctx.fillStyle = '#FDF8EE';
    ctx.fillRect(0, 0, w, h);

    // Outer royal maroon border
    ctx.strokeStyle = '#6B1D1D';
    ctx.lineWidth = 18;
    ctx.strokeRect(32, 32, w - 64, h - 64);

    // Inner gold border
    ctx.strokeStyle = '#D97706';
    ctx.lineWidth = 5;
    ctx.strokeRect(56, 56, w - 112, h - 112);

    ctx.textAlign = 'center';
    ctx.fillStyle = '#D97706';
    ctx.font = 'bold 28px Georgia, "Noto Sans Devanagari", "Noto Sans Gurmukhi", serif';
    ctx.fillText(SACRED_BRANDING.header[language], w / 2, 130);

    ctx.fillStyle = '#6B1D1D';
    ctx.font = 'bold 48px Georgia, "Noto Sans Devanagari", "Noto Sans Gurmukhi", serif';
    ctx.fillText(ui.certTitle, w / 2, 210);

    ctx.fillStyle = '#B45309';
    ctx.font = '600 24px Georgia, serif';
    ctx.fillText(ui.certSubtitle, w / 2, 255);

    // Divider
    ctx.strokeStyle = 'rgba(217, 119, 6, 0.4)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(260, 290);
    ctx.lineTo(w - 260, 290);
    ctx.stroke();

    const recipient = stats.seekerName.trim() || ui.defaultSeeker;
    ctx.fillStyle = '#1F1610';
    ctx.font = 'bold 52px Georgia, "Noto Sans Devanagari", "Noto Sans Gurmukhi", serif';
    ctx.fillText(recipient, w / 2, 385);

    ctx.fillStyle = '#4A3728';
    ctx.font = '26px Georgia, "Noto Sans Devanagari", "Noto Sans Gurmukhi", serif';
    ctx.fillText(ui.certBody, w / 2, 460);

    // Score box
    ctx.fillStyle = '#6B1D1D';
    ctx.fillRect(w / 2 - 190, 515, 380, 92);
    ctx.strokeStyle = '#D97706';
    ctx.lineWidth = 3;
    ctx.strokeRect(w / 2 - 190, 515, 380, 92);

    ctx.fillStyle = '#FDE68A';
    ctx.font = 'bold 38px Georgia, "Noto Sans Devanagari", "Noto Sans Gurmukhi", serif';
    ctx.fillText(`${ui.scoreLabel} ${score} / ${QUIZ_QUESTIONS.length}`, w / 2, 575);

    const dateStr = new Date().toLocaleDateString(
      language === 'hi' ? 'hi-IN' : language === 'pb' ? 'pa-IN' : 'en-US'
    );
    ctx.fillStyle = '#6B1D1D';
    ctx.font = 'bold 24px Georgia, "Noto Sans Devanagari", "Noto Sans Gurmukhi", serif';
    ctx.fillText(`${SACRED_BRANDING.footer[language]}  ·  ${dateStr}`, w / 2, 715);

    const url = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = url;
    link.download = `kabir-gyan-certificate-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-6 py-4 sm:py-6 space-y-5 animate-fadeIn">
      <NewModulesNavBar
        currentView="kabir-gyan-quiz"
        language={language}
        onSelectLanguage={onSelectLanguage}
        onNavigateView={onNavigateView}
        onClose={onClose}
      />

      {/* Header */}
      <div
        style={{
          backgroundColor: isDarkMode ? '#231812' : '#FDF8EE',
          borderColor: '#D97706',
        }}
        className="rounded-3xl border-2 p-5 sm:p-7 shadow-md space-y-2"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h1
            style={{ color: isDarkMode ? '#FDE68A' : '#6B1D1D' }}
            className="text-xl sm:text-3xl font-serif font-black tracking-tight"
          >
            {ui.title}
          </h1>
          <div
            style={{ color: theme.textSecondary }}
            className="text-xs font-serif font-bold tabular-nums flex items-center gap-3"
          >
            <span>
              {ui.bestScore} {stats.bestScore}/{QUIZ_QUESTIONS.length}
            </span>
            <span aria-hidden="true">·</span>
            <span>
              {ui.attempts} {stats.attempts}
            </span>
          </div>
        </div>
        <p style={{ color: theme.textSecondary }} className="text-xs sm:text-sm font-serif leading-relaxed">
          {ui.subtitle}
        </p>
      </div>

      {!isCompleted ? (
        <div
          style={{
            backgroundColor: isDarkMode ? '#1C1612' : '#FFFFFF',
            borderColor: theme.cardBorder,
          }}
          className="rounded-3xl border p-5 sm:p-7 shadow-sm space-y-5"
        >
          {/* Progress */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-serif font-bold tabular-nums">
              <span style={{ color: isDarkMode ? '#FDE68A' : '#6B1D1D' }}>
                {ui.questionLabel} {currentIdx + 1} {ui.of} {QUIZ_QUESTIONS.length}
              </span>
              <span style={{ color: theme.textSecondary }}>
                {score} / {QUIZ_QUESTIONS.length}
              </span>
            </div>
            <div className="h-2 w-full rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
              <div
                className="h-full bg-[#D97706] rounded-full transition-all duration-300"
                style={{ width: `${((currentIdx + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <h2
            style={{ color: isDarkMode ? '#FEF3C7' : '#3B0A0A' }}
            className="text-lg sm:text-xl font-serif font-black leading-snug"
          >
            {currentQuestion.question[language]}
          </h2>

          {/* Options */}
          <div className="space-y-2.5">
            {currentQuestion.options[language].map((optionText, idx) => {
              const isAnswered = selectedIdx !== null;
              const isChosen = selectedIdx === idx;
              const isCorrect = idx === currentQuestion.correctIndex;

              let borderColor = theme.cardBorder;
              let bgColor = theme.bgSecondary;
              let textColor = theme.textPrimary;

              if (isAnswered) {
                if (isCorrect) {
                  borderColor = '#15803D';
                  bgColor = isDarkMode ? 'rgba(21, 128, 61, 0.25)' : '#ECFDF5';
                  textColor = isDarkMode ? '#BBF7D0' : '#14532D';
                } else if (isChosen) {
                  borderColor = '#B91C1C';
                  bgColor = isDarkMode ? 'rgba(185, 28, 28, 0.25)' : '#FEF2F2';
                  textColor = isDarkMode ? '#FECACA' : '#7F1D1D';
                }
              }

              return (
                <button
                  key={idx}
                  type="button"
                  disabled={isAnswered}
                  onClick={() => handleSelectOption(idx)}
                  style={{
                    backgroundColor: bgColor,
                    borderColor,
                    color: textColor,
                  }}
                  className="w-full min-h-[50px] p-3.5 rounded-2xl border-2 text-left text-sm sm:text-base font-serif font-bold flex items-center justify-between gap-3 transition cursor-pointer disabled:cursor-default hover:border-amber-500/70"
                >
                  <span>{optionText}</span>
                  {isAnswered && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  )}
                  {isAnswered && isChosen && !isCorrect && (
                    <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Instant Feedback & Explanation */}
          {selectedIdx !== null && (
            <div
              style={{
                backgroundColor: isDarkMode ? '#231812' : '#FDF8EE',
                borderColor: '#D97706',
              }}
              className="p-4 rounded-2xl border space-y-2 animate-fadeIn"
            >
              <div className="flex items-center gap-2 text-sm font-serif font-black">
                {selectedIdx === currentQuestion.correctIndex ? (
                  <span className="text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    {ui.correctFeedback}
                  </span>
                ) : (
                  <span className="text-red-700 dark:text-red-300 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4" />
                    {ui.wrongFeedback} {currentQuestion.options[language][currentQuestion.correctIndex]}
                  </span>
                )}
              </div>
              <p style={{ color: theme.textSecondary }} className="text-xs sm:text-sm font-serif leading-relaxed flex items-start gap-2">
                <BookOpen className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                <span>{currentQuestion.explanation[language]}</span>
              </p>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={handleNext}
                  className="min-h-[44px] px-5 py-2.5 rounded-xl bg-[#6B1D1D] hover:bg-[#541515] text-white text-xs sm:text-sm font-serif font-bold flex items-center gap-2 shadow-sm transition cursor-pointer"
                >
                  <span>
                    {currentIdx + 1 < QUIZ_QUESTIONS.length ? ui.nextBtn : ui.finishBtn}
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Certificate of Appreciation */
        <div className="space-y-5 animate-fadeIn">
          {/* Name Input for Certificate */}
          <div
            style={{
              backgroundColor: isDarkMode ? '#1C1612' : '#FFFFFF',
              borderColor: theme.cardBorder,
            }}
            className="rounded-2xl border p-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
          >
            <label
              htmlFor="quiz-certificate-name"
              style={{ color: isDarkMode ? '#FDE68A' : '#6B1D1D' }}
              className="text-xs sm:text-sm font-serif font-black flex items-center gap-2 shrink-0"
            >
              <User className="w-4 h-4 text-[#D97706]" />
              <span>{ui.nameLabel}</span>
            </label>
            <input
              id="quiz-certificate-name"
              type="text"
              value={stats.seekerName}
              onChange={(e) => setStats((prev) => ({ ...prev, seekerName: e.target.value }))}
              placeholder={ui.namePlaceholder}
              style={{
                backgroundColor: theme.bgSecondary,
                borderColor: theme.cardBorder,
                color: theme.textPrimary,
              }}
              className="flex-1 min-h-[42px] px-3.5 py-2 rounded-xl border text-sm font-serif focus:outline-none focus:ring-2 focus:ring-amber-500/50"
            />
          </div>

          {/* Visual Certificate Card */}
          <div
            className="rounded-3xl p-6 sm:p-10 text-center space-y-5 shadow-xl relative"
            style={{
              backgroundColor: '#FDF8EE',
              border: '6px solid #6B1D1D',
              boxShadow: 'inset 0 0 0 6px #FDF8EE, inset 0 0 0 8px #D97706',
              color: '#3B0A0A',
            }}
          >
            <p className="text-sm font-serif font-black text-[#D97706]">
              {SACRED_BRANDING.header[language]}
            </p>

            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-[#6B1D1D] text-amber-300 flex items-center justify-center shadow-md">
                <Award className="w-9 h-9" />
              </div>
            </div>

            <div className="space-y-1">
              <h2 className="text-2xl sm:text-4xl font-serif font-black text-[#6B1D1D]">
                {ui.certTitle}
              </h2>
              <p className="text-xs sm:text-sm font-serif font-bold text-[#B45309]">
                {ui.certSubtitle}
              </p>
            </div>

            <div className="py-2 space-y-2">
              <p className="text-2xl sm:text-3xl font-serif font-black text-[#1F1610]">
                {stats.seekerName.trim() || ui.defaultSeeker}
              </p>
              <p className="text-sm sm:text-base font-serif text-[#4A3728] max-w-xl mx-auto">
                {ui.certBody}
              </p>
            </div>

            <div className="inline-block px-6 py-3 rounded-2xl bg-[#6B1D1D] border-2 border-[#D97706] text-amber-200 font-serif font-black text-xl sm:text-2xl tabular-nums">
              {ui.scoreLabel} {score} / {QUIZ_QUESTIONS.length}
            </div>

            <p className="text-xs font-serif font-bold text-[#6B1D1D] pt-2">
              {SACRED_BRANDING.footer[language]} · Saheb World
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              type="button"
              onClick={handleDownloadCertificate}
              className="min-h-[46px] px-6 py-2.5 rounded-xl bg-[#6B1D1D] hover:bg-[#541515] text-white text-sm font-serif font-bold flex items-center justify-center gap-2 shadow-sm transition cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{ui.downloadCert}</span>
            </button>
            <button
              type="button"
              onClick={handleRestart}
              className="min-h-[46px] px-6 py-2.5 rounded-xl bg-[#D97706] hover:bg-[#B45309] text-white text-sm font-serif font-bold flex items-center justify-center gap-2 shadow-sm transition cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{ui.retakeBtn}</span>
            </button>
          </div>

          <canvas ref={certCanvasRef} className="hidden" aria-hidden="true" />
        </div>
      )}
    </div>
  );
};
