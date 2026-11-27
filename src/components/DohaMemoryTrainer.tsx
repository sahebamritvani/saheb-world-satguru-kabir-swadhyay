import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  HelpCircle, 
  Award,
  ArrowRight,
  Flame,
  Volume2
} from 'lucide-react';
import { Language, SACRED_BRANDING, Sakhi } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import { sacredHaptics } from '../services/haptics';
import { sakhisDatabase } from '../data/sakhis';
import { speechReciter, satyanaamAudio } from '../services/audioDhun';

interface DohaMemoryTrainerProps {
  language: Language;
  onClose?: () => void;
  onOpenBlessing: (title?: string, message?: string) => void;
}

interface TrainerItem {
  id: number;
  firstLine: { hi: string; pb: string; en: string };
  missingLine: { hi: string; pb: string; en: string };
  options: Array<{ id: number; text: { hi: string; pb: string; en: string } }>;
  correctOptionId: number;
  spiritualContext: { hi: string; pb: string; en: string };
  sakhiNum: number;
}

export const DohaMemoryTrainer: React.FC<DohaMemoryTrainerProps> = ({
  language,
  onClose,
  onOpenBlessing
}) => {
  const { theme, isDarkMode } = useAppTheme();

  // Pick a curated list of profound Chetawani and Guru Mahima couplets for memory training
  const trainerVerses: TrainerItem[] = useMemo(() => {
    return [
      {
        id: 1,
        sakhiNum: 14,
        firstLine: {
          hi: 'ऊंचा दीसै धौहरा, मांड़ी चीती पोल।',
          pb: 'ਉੱਚਾ ਦੀਸੈ ਧੌਹਰਾ, ਮਾਂਡੀ ਚੀਤੀ ਪੋਲ।',
          en: 'High looking glorious palace, decorated and painted poles.'
        },
        missingLine: {
          hi: 'बिन सतगुरु के ज्ञान तें, यम लेइहै खोलि खोलि मोल ॥',
          pb: 'ਬਿਨ ਸਤਿਗੁਰੂ ਕੇ ਗਿਆਨ ਤੇਂ, ਯਮ ਲੇਇਹੈ ਖੋਲਿ ਖੋਲਿ ਮੋਲ ॥',
          en: 'Without Satguru true knowledge, Yam takes soul apart piece by piece.'
        },
        options: [
          {
            id: 1,
            text: {
              hi: 'बिन सतगुरु के ज्ञान तें, यम लेइहै खोलि खोलि मोल ॥',
              pb: 'ਬਿਨ ਸਤਿਗੁਰੂ ਕੇ ਗਿਆਨ ਤੇਂ, ਯਮ ਲੇਇਹੈ ਖੋਲਿ ਖੋਲਿ ਮੋਲ ॥',
              en: 'Without Satguru true knowledge, Yam takes soul apart piece by piece.'
            }
          },
          {
            id: 2,
            text: {
              hi: 'माया दीपक नर पतंग, भ्रमि भ्रमि इंवै पड़न्त ॥',
              pb: 'ਮਾਇਆ ਦੀਪਕ ਨਰ ਪਤੰਗ, ਭ੍ਰਮਿ ਭ੍ਰਮਿ ਇੰਵੈ ਪੜੰਤ ॥',
              en: 'Maya is the lamp, man the moth falling repeatedly.'
            }
          },
          {
            id: 3,
            text: {
              hi: 'कबीरा कागद की छुरी, सब घट चली चले ॥',
              pb: 'ਕਬੀਰਾ ਕਾਗਦ ਕੀ ਛੁਰੀ, ਸਭ ਘਟ ਚਲੀ ਚਲੇ ॥',
              en: 'Kabir, paper knife cutting through all hearts.'
            }
          }
        ],
        correctOptionId: 1,
        spiritualContext: {
          hi: 'सतगुरु कबीर साहेब चेतावनी देते हैं कि बाहरी महल-अटारी और दिखावा चाहे कितना भी सुंदर हो, बिना सतगुरु के नाम-ज्ञान के जीव को भवसागर में काल की मार सहनी पड़ती है।',
          pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਚੇਤਾਵਨੀ ਦਿੰਦੇ ਹਨ ਕਿ ਬਾਹਰੀ ਮਹਿਲ ਭਾਵੇਂ ਕਿੰਨੇ ਵੀ ਸੁੰਦਰ ਹੋਣ, ਸਤਿਗੁਰੂ ਬਿਨਾਂ ਮੁਕਤੀ ਸੰਭਵ ਨਹੀਂ।',
          en: 'Satguru Kabir cautions that exterior worldly splendor is futile without the inner awakening of Satguru’s true Nam.'
        }
      },
      {
        id: 2,
        sakhiNum: 28,
        firstLine: {
          hi: 'माया दीपक नर पतंग, भ्रमि भ्रमि इंवै पड़न्त।',
          pb: 'ਮਾਇਆ ਦੀਪਕ ਨਰ ਪਤੰਗ, ਭ੍ਰਮਿ ਭ੍ਰਮਿ ਇੰਵੈ ਪੜੰਤ।',
          en: 'Maya is the glowing lamp, man is the moth falling into illusion.'
        },
        missingLine: {
          hi: 'कहै कबीर गुरु ज्ञान तें, एक आध उभरन्त ॥',
          pb: 'ਕਹੈ ਕਬੀਰ ਗੁਰੂ ਗਿਆਨ ਤੇਂ, ਇਕ ਆਧ ਉਭਰੰਤ ॥',
          en: 'Satguru Kabir Saheb proclaims by Guru’s grace, rare souls manage to escape.'
        },
        options: [
          {
            id: 1,
            text: {
              hi: 'कहै कबीर गुरु ज्ञान तें, एक आध उभरन्त ॥',
              pb: 'ਕਹੈ ਕਬੀਰ ਗੁਰੂ ਗਿਆਨ ਤੇਂ, ਇਕ ਆਧ ਉਭਰੰਤ ॥',
              en: 'Satguru Kabir Saheb proclaims by Guru’s grace, rare souls manage to escape.'
            }
          },
          {
            id: 2,
            text: {
              hi: 'प्रथम वंदों सतगुरु चरना, जेहि प्रसादे भवजल तरना।',
              pb: 'ਪ੍ਰਥਮ ਵੰਦੋਂ ਸਤਿਗੁਰੂ ਚਰਨਾ, ਜੇਹਿ ਪ੍ਰਸਾਦੇ ਭਵਜਲ ਤਰਨਾ।',
              en: 'First I bow at Satguru lotus feet.'
            }
          },
          {
            id: 3,
            text: {
              hi: 'साधु भूखा भाव का, धन का भूखा नाहिं।',
              pb: 'ਸਾਧੂ ਭੂਖਾ ਭਾਵ ਕਾ, ਧਨ ਕਾ ਭੂਖਾ ਨਾਹਿਂ।',
              en: 'Saint is hungry for devotion, not wealth.'
            }
          }
        ],
        correctOptionId: 1,
        spiritualContext: {
          hi: 'संसार रूपी दीपक पर मोह-माया के कारण जीव पतंगे की तरह जल मरते हैं। केवल सतगुरु के पावन ज्ञान से ही कोई विरला साधक बच पाता है।',
          pb: 'ਸੰਸਾਰੀ ਮੋਹ-ਮਾਇਆ ਵਿੱਚ ਫਸ ਕੇ ਜੀਵ ਨਸ਼ਟ ਹੋ ਜਾਂਦੇ ਹਨ। ਕੇਵਲ ਸਤਿਗੁਰੂ ਦੇ ਗਿਆਨ ਨਾਲ ਹੀ ਬਚਾਅ ਸੰਭਵ ਹੈ।',
          en: 'Entangled in worldly attachments, souls burn in illusion. Only through Satguru’s wisdom is deliverance attained.'
        }
      },
      {
        id: 3,
        sakhiNum: 45,
        firstLine: {
          hi: 'कबीरा गर्व न कीजिए, कबहुँ न हँसै कोइ।',
          pb: 'ਕਬੀਰਾ ਗਰਵ ਨ ਕੀਜੀਏ, ਕਬਹੁਂ ਨ ਹੰਸੈ ਕੋਇ।',
          en: 'Kabir, never take pride or laugh scornfully at anyone.'
        },
        missingLine: {
          hi: 'अजै नाव समुद्र में, का जाने का होइ ॥',
          pb: 'ਅਜੈ ਨਾਉ ਸਮੁੰਦਰ ਮੇਂ, ਕਾ ਜਾਨੇ ਕਾ ਹੋਇ ॥',
          en: 'Your boat is still in mid ocean, who knows what destiny awaits.'
        },
        options: [
          {
            id: 1,
            text: {
              hi: 'अजै नाव समुद्र में, का जाने का होइ ॥',
              pb: 'ਅਜੈ ਨਾਉ ਸਮੁੰਦਰ ਮੇਂ, ਕਾ ਜਾਨੇ ਕਾ ਹੋਇ ॥',
              en: 'Your boat is still in mid ocean, who knows what destiny awaits.'
            }
          },
          {
            id: 2,
            text: {
              hi: 'उठि प्रभात सुमिरो सत्यनाम, मेटो भव के सब संताप।',
              pb: 'ਉਠਿ ਪ੍ਰਭਾਤ ਸੁਮਿਰੋ ਸਤਯਨਾਮ, ਮੇਟੋ ਭਵ ਕੇ ਸਬ ਸੰਤਾਪ।',
              en: 'Arise in morning and meditate on Satyanaam.'
            }
          },
          {
            id: 3,
            text: {
              hi: 'लोचन अनन्त उघाड़िया, अनन्त दिखावणहार ॥',
              pb: 'ਲੋਚਨ ਅਨੰਤ ਉਘਾੜਿਆ, ਅਨੰਤ ਦਿਖਾਵਣਹਾਰ ॥',
              en: 'Opened the infinite inner eyes.'
            }
          }
        ],
        correctOptionId: 1,
        spiritualContext: {
          hi: 'मनुष्य को कभी भी अपने बल या धन पर अहंकार नहीं करना चाहिए क्योंकि जीवन रूपी नौका अभी भवसागर के बीच में है।',
          pb: 'ਮਨੁੱਖ ਨੂੰ ਕਦੇ ਵੀ ਹੰਕਾਰ ਨਹੀਂ ਕਰਨਾ ਚਾਹੀਦਾ ਕਿਉਂਕਿ ਜੀਵਨ ਨੌਕਾ ਹਾਲੇ ਭਵਸਾਗਰ ਵਿੱਚ ਹੈ।',
          en: 'Humility is paramount for a seeker, for the journey across the ocean of existence is ongoing.'
        }
      }
    ];
  }, []);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const currentTrainer = trainerVerses[currentIndex];

  const handleSelectOption = (optId: number) => {
    if (isAnswered) return;
    sacredHaptics.lightTap();
    setSelectedOptionId(optId);
    setIsAnswered(true);

    if (optId === currentTrainer.correctOptionId) {
      setScore(prev => prev + 1);
      sacredHaptics.successVibration();
      try { satyanaamAudio.playStepCompletionChime(); } catch {}
    } else {
      sacredHaptics.quizIncorrect();
    }
  };

  const handleNext = () => {
    sacredHaptics.mediumTap();
    if (currentIndex < trainerVerses.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOptionId(null);
      setIsAnswered(false);
    } else {
      setIsCompleted(true);
      sacredHaptics.celebration();
      onOpenBlessing(
        language === 'pb' ? 'ਦੋਹਾ ਮੈਮੋਰੀ ਟ੍ਰੇਨਰ ਸੰਪੰਨ!' : language === 'en' ? 'Doha Memory Trainer Completed!' : 'दोहा स्मृति प्रशिक्षण संपन्न 🌹',
        language === 'pb' 
          ? `ਆਪ ਜੀ ਨੇ ਸਫਲਤਾਪੂਰਵਕ ${trainerVerses.length} ਵਿੱਚੋਂ ${score + (selectedOptionId === currentTrainer.correctOptionId ? 1 : 0)} ਸਹੀ ਦੋਹੇ ਯਾਦ ਰੱਖੇ ਹਨ।`
          : language === 'en'
          ? `You successfully completed the memory trainer test with sacred wisdom.`
          : `आपने सतगुरु कबीर साहेब की चेतावनियों व दोहों का अभ्यास सफलतापूर्वक पूर्ण कर लिया है।`
      );
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setIsAnswered(false);
    setScore(0);
    setIsCompleted(false);
  };

  const handlePlayVoice = (text: string) => {
    speechReciter.speak(text, language);
  };

  return (
    <div 
      style={{ backgroundColor: theme.cardBg, borderColor: theme.accentGold, color: theme.textPrimary }}
      className="max-w-2xl mx-auto rounded-3xl border-2 shadow-2xl overflow-hidden my-4 sm:my-8 animate-fadeIn"
    >
      {/* Top Header */}
      <div 
        style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.cardBorder }}
        className="border-b py-3 px-4 sm:px-6 flex items-center justify-between select-none"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-700 dark:text-amber-300 flex items-center justify-center">
            <Flame className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-serif font-black text-sm sm:text-base text-amber-900 dark:text-amber-200">
              {language === 'pb' ? 'ਦੋਹਾ ਮੈਮੋਰੀ ਟ੍ਰੇਨਰ (ਚੇਤਾਵਨੀ ਬਾਣੀ)' : language === 'en' ? 'Doha Memory Trainer' : 'दोहा स्मृति ट्रेनर (चेतावनी बाणी)'}
            </h3>
            <p className="text-[10px] font-serif opacity-75">
              {language === 'pb' ? 'ਮਨ ਵਿੱਚੋਂ ਚੇਤਾਵਨੀ ਦੋਹੇ ਪੂਰੇ ਕਰੋ' : language === 'en' ? 'Recall missing couplet halves from memory' : 'स्मृति से साखी की दूसरी पंक्ति पहचानें'}
            </p>
          </div>
        </div>

      </div>

      {/* Content Body */}
      <div className="p-5 sm:p-8 space-y-6">
        {!isCompleted ? (
          <>
            {/* Progress Bar */}
            <div className="flex items-center justify-between text-xs font-mono font-bold text-amber-700 dark:text-amber-300">
              <span>
                {language === 'pb' ? `ਪ੍ਰਸ਼ਨ ${currentIndex + 1} / ${trainerVerses.length}` : language === 'en' ? `Question ${currentIndex + 1} of ${trainerVerses.length}` : `प्रश्न ${currentIndex + 1} / ${trainerVerses.length}`}
              </span>
              <span>
                {language === 'pb'
                  ? `ਸਕੋਰ: ${score}`
                  : language === 'en'
                  ? `Score: ${score}`
                  : `स्कोर: ${score}`}
              </span>
            </div>

            {/* Display First Line */}
            <div 
              style={{ backgroundColor: theme.bgSecondary, borderColor: theme.borderOrnament }}
              className="p-5 rounded-2xl border text-center space-y-3 relative shadow-inner"
            >
              <div className="flex items-center justify-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300">
                  {language === 'pb'
                    ? 'ਪਹਿਲੀ ਪੰਕਤੀ (ਸਿਮਰਨ ਕਰੋ):'
                    : language === 'en'
                    ? 'First Line (Prompt):'
                    : 'प्रथम पंक्ति (स्मरण करें):'}
                </span>
                <button
                  onClick={() => handlePlayVoice(currentTrainer.firstLine[language] || currentTrainer.firstLine.hi)}
                  className="p-1 rounded hover:bg-amber-500/25 transition text-amber-800 dark:text-amber-200 cursor-pointer"
                  title={language === 'pb' ? 'ਬਾਣੀ ਸੁਣੋ' : language === 'en' ? 'Listen Audio' : 'श्रवण करें'}
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>

              <p className="font-serif font-black text-lg sm:text-xl text-amber-950 dark:text-amber-100 leading-relaxed">
                "{currentTrainer.firstLine[language] || currentTrainer.firstLine.hi}"
              </p>
            </div>

            {/* Prompt for Missing Line */}
            <div className="space-y-3">
              <p className="text-xs font-bold font-serif opacity-85">
                {language === 'pb' ? 'ਕਿਰਪਾ ਕਰਕੇ ਸਹੀ ਦੂਜੀ ਪੰਕਤੀ ਚੁਣੋ:' : language === 'en' ? 'Select the correct completing line from memory:' : 'स्मृति के आधार पर सही दूसरी पंक्ति चुनें:'}
              </p>

              <div className="space-y-2.5">
                {currentTrainer.options.map((opt) => {
                  const isSelected = selectedOptionId === opt.id;
                  const isCorrect = opt.id === currentTrainer.correctOptionId;

                  let btnBg = theme.bgSecondary;
                  let btnBorder = theme.cardBorder;
                  let btnText = theme.textPrimary;

                  if (isAnswered) {
                    if (isCorrect) {
                      btnBg = isDarkMode ? '#064E3B' : '#D1FAE5';
                      btnBorder = '#10B981';
                      btnText = isDarkMode ? '#D1FAE5' : '#065F46';
                    } else if (isSelected) {
                      btnBg = isDarkMode ? '#7F1D1D' : '#FEE2E2';
                      btnBorder = '#EF4444';
                      btnText = isDarkMode ? '#FEE2E2' : '#991B1B';
                    }
                  }

                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleSelectOption(opt.id)}
                      disabled={isAnswered}
                      style={{
                        backgroundColor: btnBg,
                        borderColor: btnBorder,
                        color: btnText,
                      }}
                      className={`w-full p-3.5 sm:p-4 rounded-2xl border-2 text-left font-serif font-bold text-xs sm:text-sm transition-all flex items-start gap-3 cursor-pointer ${
                        !isAnswered ? 'hover:scale-[1.01] hover:border-amber-400 active:scale-[0.99]' : ''
                      }`}
                    >
                      <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 font-sans text-[11px]">
                        {isAnswered && isCorrect ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        ) : isAnswered && isSelected ? (
                          <XCircle className="w-4 h-4 text-rose-500" />
                        ) : (
                          String.fromCharCode(65 + opt.id - 1)
                        )}
                      </div>
                      <span className="flex-1 leading-relaxed">{opt.text[language] || opt.text.hi}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Immediate Spiritual Context upon Completion */}
            {isAnswered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  backgroundColor: isDarkMode ? '#2A2016' : '#FEF3C7',
                  borderColor: isDarkMode ? '#F59E0B' : '#FCD34D',
                }}
                className="p-4 rounded-2xl border text-xs sm:text-sm font-serif leading-relaxed space-y-1.5 shadow-md"
              >
                <div className="flex items-center gap-1.5 font-black text-amber-700 dark:text-amber-300">
                  <Sparkles className="w-4 h-4" />
                  <span>{language === 'pb' ? 'ਆਤਮਿਕ ਅਰਥ ਤੇ ਰਹੱਸ' : language === 'en' ? 'Spiritual Insight & Context' : 'आध्यात्मिक रहस्य एवं प्रसंग'}</span>
                </div>
                <p style={{ color: isDarkMode ? '#FFFDF7' : '#78350F' }}>
                  {currentTrainer.spiritualContext[language] || currentTrainer.spiritualContext.hi}
                </p>

                <div className="pt-3">
                  <button
                    type="button"
                    onClick={handleNext}
                    style={{ backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText }}
                    className="w-full py-3 rounded-xl font-bold text-xs sm:text-sm shadow-lg hover:scale-[1.01] active:scale-[0.99] transition cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>
                      {currentIndex < trainerVerses.length - 1
                        ? language === 'pb'
                          ? 'ਅਗਲਾ ਦੋਹਾ ➔'
                          : language === 'en'
                          ? 'Next Couplet ➔'
                          : 'अगला दोहा ➔'
                        : language === 'pb'
                        ? 'ਅਭਿਆਸ ਪੂਰਾ ਕਰੋ 🌹'
                        : language === 'en'
                        ? 'Complete Practice 🌹'
                        : 'प्रशिक्षण पूर्ण करें 🌹'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}
          </>
        ) : (
          /* Completed View */
          <div className="text-center space-y-5 py-6 animate-fadeIn">
            <div className="w-16 h-16 mx-auto rounded-full bg-amber-500/20 text-amber-500 border-2 border-amber-400/50 flex items-center justify-center animate-bounce shadow-lg">
              <Award className="w-8 h-8 text-amber-600 dark:text-amber-300" />
            </div>

            <div className="space-y-1.5">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400 block">
                {language === 'pb'
                  ? 'ਮੈਮੋਰੀ ਟ੍ਰੇਨਰ ਸਫ਼ਲ'
                  : language === 'en'
                  ? 'Memory Trainer Completed'
                  : 'स्मृति अभ्यास संपन्न'}
              </span>
              <h3 className="font-serif font-black text-xl sm:text-2xl text-amber-900 dark:text-amber-100">
                {score === trainerVerses.length
                  ? language === 'pb'
                    ? '🌹 ਪੂਰਨ ਸਿਮਰਤੀ ਸਿੱਧੀ (Perfect Recall)'
                    : language === 'en'
                    ? '🌹 Perfect Sacred Recall'
                    : '🌹 पूर्ण स्मृति सिद्धि (Perfect Recall)'
                  : language === 'pb'
                  ? '✨ ਪਾਵਨ ਅਭਿਆਸ ਸੰਪੰਨ'
                  : language === 'en'
                  ? '✨ Sacred Practice Completed'
                  : '✨ पावन अभ्यास संपन्न'}
              </h3>
              <p className="text-xs sm:text-sm font-serif opacity-80">
                {language === 'pb'
                  ? `ਤੁਸੀਂ ${trainerVerses.length} ਵਿੱਚੋਂ ${score} ਦੋਹੇ ਆਪਣੀ ਯਾਦਦਾਸ਼ਤ ਨਾਲ ਪੂਰੇ ਕੀਤੇ। ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਬਾਣੀ ਤੁਹਾਡੇ ਹਿਰਦੇ ਵਿੱਚ ਸਦਾ ਅਮਰ ਰਹੇ।`
                  : language === 'en'
                  ? `You recalled ${score} out of ${trainerVerses.length} sacred couplets from memory. May Satguru Kabir Saheb's eternal Vani shine within your heart.`
                  : `आपने ${trainerVerses.length} में से ${score} दोहे अपनी स्मृति से पूर्ण किए। सतगुरु कबीर साहेब की वाणी आपके हृदय में सदा अमर रहे।`}
              </p>
            </div>

            <div className="pt-3">
              <button
                type="button"
                onClick={handleRestart}
                style={{ backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText }}
                className="w-full py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md hover:scale-105 transition cursor-pointer flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>
                  {language === 'pb'
                    ? 'ਦੁਬਾਰਾ ਅਭਿਆਸ ਕਰੋ'
                    : language === 'en'
                    ? 'Restart Practice'
                    : 'पुनः अभ्यास करें (Restart)'}
                </span>
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};
