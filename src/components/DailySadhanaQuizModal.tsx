import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Sparkles, 
  X, 
  RotateCcw, 
  Flower2, 
  Award, 
  Bookmark, 
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { Sakhi, Language, SACRED_BRANDING } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import { sacredHaptics } from '../services/haptics';
import { satyanaamAudio } from '../services/audioDhun';

interface DailySadhanaQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  sakhi: Sakhi;
  language: Language;
  onOpenBlessing?: (title?: string, message?: string) => void;
  onSaveToDiary?: (reflection: string) => void;
}

interface QuestionItem {
  id: number;
  question: { hi: string; pb: string; en: string };
  options: Array<{ id: number; text: { hi: string; pb: string; en: string } }>;
  correctOptionId: number;
  explanation: { hi: string; pb: string; en: string };
}

export const DailySadhanaQuizModal: React.FC<DailySadhanaQuizModalProps> = ({
  isOpen,
  onClose,
  sakhi,
  language,
  onOpenBlessing,
  onSaveToDiary
}) => {
  const { theme, isDarkMode, fontSize } = useAppTheme();

  // Dynamic Font Size Mapping for Quiz
  const questionFontSizes: Record<string, string> = {
    small: 'text-sm sm:text-base',
    normal: 'text-base sm:text-lg',
    medium: 'text-lg sm:text-xl',
    large: 'text-xl sm:text-2xl',
    xlarge: 'text-2xl sm:text-3xl',
    xl: 'text-3xl sm:text-4xl',
    elderly: 'text-4xl sm:text-5xl font-black text-amber-950 dark:text-amber-100',
  };

  const optionFontSizes: Record<string, string> = {
    small: 'text-xs sm:text-sm',
    normal: 'text-sm sm:text-base',
    medium: 'text-base sm:text-lg',
    large: 'text-lg sm:text-xl',
    xlarge: 'text-xl sm:text-2xl',
    xl: 'text-2xl sm:text-3xl',
    elderly: 'text-3xl sm:text-4xl font-bold',
  };

  const explanationFontSizes: Record<string, string> = {
    small: 'text-[10px] sm:text-xs',
    normal: 'text-xs sm:text-sm',
    medium: 'text-sm sm:text-base',
    large: 'text-base sm:text-lg',
    xlarge: 'text-lg sm:text-xl',
    xl: 'text-xl sm:text-2xl',
    elderly: 'text-2xl sm:text-3xl font-bold',
  };

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isQuizCompleted, setIsQuizCompleted] = useState<boolean>(false);
  const [savedToDiary, setSavedToDiary] = useState<boolean>(false);

  // Generate 3 contextual Sadhana questions tailored to the active Daily Sakhi
  const quizQuestions: QuestionItem[] = useMemo(() => {
    const textHi = sakhi.text.hi;
    const bhavarthHi = sakhi.bhavarth.hi;
    const category = sakhi.category || 'ज्ञान';

    return [
      {
        id: 1,
        question: {
          hi: `आज की पावन साखी #${sakhi.number} का मूल आध्यात्मिक संदेश क्या है?`,
          pb: `ਅੱਜ ਦੀ ਪਾਵਨ ਸਾਖੀ #${sakhi.number} ਦਾ ਮੂਲ ਅਧਿਆਤਮਕ ਸੰਦੇਸ਼ ਕੀ ਹੈ?`,
          en: `What is the primary spiritual essence of today's Sacred Sakhi #${sakhi.number}?`
        },
        options: [
          {
            id: 1,
            text: {
              hi: sakhi.bhavarth.hi.length > 80 ? sakhi.bhavarth.hi.slice(0, 80) + '...' : sakhi.bhavarth.hi,
              pb: sakhi.bhavarth.pb.length > 80 ? sakhi.bhavarth.pb.slice(0, 80) + '...' : sakhi.bhavarth.pb,
              en: sakhi.bhavarth.en.length > 80 ? sakhi.bhavarth.en.slice(0, 80) + '...' : sakhi.bhavarth.en,
            }
          },
          {
            id: 2,
            text: {
              hi: 'केवल बाह्य आडंबर, कर्मकांड और सांसारिक दिखावा ही धर्म का मूल लक्ष्य है।',
              pb: 'ਸਿਰਫ਼ ਬਾਹਰੀ ਕਰਮਕਾਂਡ ਅਤੇ ਦਿਖਾਵਾ ਹੀ ਧਰਮ ਦਾ ਮੁੱਖ ਟੀਚਾ ਹੈ।',
              en: 'Merely external rituals and worldly pretensions are the true spiritual path.'
            }
          },
          {
            id: 3,
            text: {
              hi: 'संसार में संचय और अहंकार बढ़ाना ही जीव की मुक्ति का एकमात्र साधन है।',
              pb: 'ਸੰਸਾਰ ਵਿੱਚ ਹਉਮੈ ਅਤੇ ਧਨ ਜੋੜਨਾ ਹੀ ਜੀਵ ਦੀ ਮੁਕਤੀ ਦਾ ਇਕੋ-ਇਕ ਸਾਧਨ ਹੈ।',
              en: 'Accumulating worldly ego and wealth is the sole means of liberation.'
            }
          }
        ],
        correctOptionId: 1,
        explanation: {
          hi: `सद्गुरु कबीर साहेब स्पष्ट करते हैं: "${bhavarthHi}"।`,
          pb: `ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫੁਰਮਾਉਂਦੇ ਹਨ: "${sakhi.bhavarth.pb}"।`,
          en: `Satguru Kabir Saheb illuminates: "${sakhi.bhavarth.en}".`
        }
      },
      {
        id: 2,
        question: {
          hi: `साखी में निहित आध्यात्मिक श्रेणी "${category}" का साधक के जीवन में क्या महत्व है?`,
          pb: `ਸਾਖੀ ਵਿੱਚ ਦਰਜ ਅਧਿਆਤਮਕ ਸ਼੍ਰੇਣੀ "${category}" ਦਾ ਸਾਧਕ ਦੇ ਜੀਵਨ ਵਿੱਚ ਕੀ ਮਹੱਤਵ ਹੈ?`,
          en: `What is the spiritual significance of the realm "${category}" in a seeker's daily life?`
        },
        options: [
          {
            id: 1,
            text: {
              hi: 'यह मन के विकारों को बढ़ाकर आत्मा को भ्रम में डालती है।',
              pb: 'ਇਹ ਮਨ ਦੇ ਵਿਕਾਰਾਂ ਨੂੰ ਵਧਾ ਕੇ ਆਤਮਾ ਨੂੰ ਭਰਮ ਵਿੱਚ ਪਾਉਂਦੀ ਹੈ।',
              en: 'It increases worldly distractions and creates spiritual illusions.'
            }
          },
          {
            id: 2,
            text: {
              hi: 'यह अंतर्मुखी चेतना, सत्यनाम स्मरण एवं सद्गुरु कृपा का प्रत्यक्ष द्वार खोलती है।',
              pb: 'ਇਹ ਅੰਤਰਮੁਖੀ ਚੇਤਨਾ, ਸਤਯਨਾਮ ਸਿਮਰਨ ਅਤੇ ਸਤਿਗੁਰੂ ਕ੍ਰਿਪਾ ਦਾ ਦੁਆਰ ਖੋਲ੍ਹਦੀ ਹੈ।',
              en: 'It awakens inner awareness, Satyanaam remembrance, and Satguru grace.'
            }
          },
          {
            id: 3,
            text: {
              hi: 'इसका किसी भी प्रकार के आत्म-कल्याण से कोई संबंध नहीं है।',
              pb: 'ਇਸਦਾ ਆਤਮ-ਕਲਿਆਣ ਨਾਲ ਕੋਈ ਸੰਬੰਧ ਨਹੀਂ ਹੈ।',
              en: 'It holds no practical relevance to spiritual self-realization.'
            }
          }
        ],
        correctOptionId: 2,
        explanation: {
          hi: 'कबीर साहेब की वाणी साधक को बाहर से हटाकर हृदय मंदिर में स्थिर करती है।',
          pb: 'ਕਬੀਰ ਸਾਹਿਬ ਦੀ ਬਾਣੀ ਸਾਧਕ ਨੂੰ ਬਾਹਰੋਂ ਮੋੜ ਕੇ ਹਿਰਦੇ ਵਿੱਚ ਸਥਿਰ ਕਰਦੀ ਹੈ।',
          en: 'Kabir Saheb’s divine verse guides the seeker inward toward the soul sanctuary.'
        }
      },
      {
        id: 3,
        question: {
          hi: 'आज के दिन इस पावन साखी को व्यावहारिक साधना में कैसे आत्मसात करें?',
          pb: 'ਅੱਜ ਦੇ ਦਿਨ ਇਸ ਪਾਵਨ ਸਾਖੀ ਨੂੰ ਰੋਜ਼ਾਨਾ ਅਭਿਆਸ ਵਿੱਚ ਕਿਵੇਂ ਲਾਗੂ ਕਰੀਏ?',
          en: 'How should one apply the contemplation of this Sacred Sakhi in practical daily life today?'
        },
        options: [
          {
            id: 1,
            text: {
              hi: 'क्रोध और अभिमान में दूसरों की निंदा करके समय बिताना।',
              pb: 'ਗੁੱਸੇ ਅਤੇ ਹੰਕਾਰ ਵਿੱਚ ਦੂਜਿਆਂ ਦੀ ਨਿੰਦਾ ਕਰਨਾ।',
              en: 'Engaging in anger, ego, and criticism of others.'
            }
          },
          {
            id: 2,
            text: {
              hi: 'सांसारिक मोह-माया में लिप्त होकर स्मरण को भूल जाना।',
              pb: 'ਮੋਹ-ਮਾਇਆ ਵਿੱਚ ਲਿਪਤ ਹੋ ਕੇ ਸਿਮਰਨ ਨੂੰ ਵਿਸਾਰ ਦੇਣਾ।',
              en: 'Becoming engrossed in worldly attachments and forgetting remembrance.'
            }
          },
          {
            id: 3,
            text: {
              hi: 'शांत मन से श्वास-श्वास में "सत्यनाम" का जाप एवं नम्रता, दया व सेवा का आचरण करना।',
              pb: 'ਸ਼ਾਂਤ ਮਨ ਨਾਲ ਸਾਸ-ਸਾਸ "ਸਤਯਨਾਮ" ਜਪਣਾ ਅਤੇ ਨਿਮਰਤਾ, ਦਇਆ ਤੇ ਸੇਵਾ ਅਪਣਾਉਣਾ।',
              en: 'Quietly contemplating "Satyanaam" in every breath with humility, compassion & selfless service.'
            }
          }
        ],
        correctOptionId: 3,
        explanation: {
          hi: 'सद्गुरु की सीख है: "साधु भूखा भाव का, धन का भूखा नाहिं"। सत्यनाम और दया ही सच्चा धर्म है।',
          pb: 'ਸਤਿਗੁਰੂ ਦੀ ਸਿੱਖਿਆ ਹੈ: "ਸਾਧੂ ਭੂਖਾ ਭਾਵ ਕਾ, ਧਨ ਕਾ ਭੂਖਾ ਨਾਹਿਂ"। ਸਤਯਨਾਮ ਅਤੇ ਦਇਆ ਹੀ ਸੱਚਾ ਧਰਮ ਹੈ।',
          en: 'The Master teaches: Pure devotion, truthful living, and inner compassion constitute true Sadhana.'
        }
      }
    ];
  }, [sakhi]);

  if (!isOpen) return null;

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const selectedAnswerId = selectedAnswers[currentQuestionIndex];
  const isCurrentAnswered = selectedAnswerId !== undefined;

  const handleSelectOption = (optionId: number) => {
    if (isCurrentAnswered) return;
    sacredHaptics.lightTap();
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: optionId,
    }));
  };

  const handleNext = () => {
    sacredHaptics.mediumTap();
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Quiz completed!
      setIsQuizCompleted(true);
      sacredHaptics.celebration();
      try {
        satyanaamAudio.ringSatyanaamTripleChime();
      } catch {}
      
      // Trigger blessing animation / modal
      if (onOpenBlessing) {
        onOpenBlessing(
          language === 'pb' ? 'ਦੈਨਿਕ ਸਾਧਨਾ ਪ੍ਰਸ਼ਨਾਵਲੀ ਪੂਰਨ ਅਸੀਸ' : language === 'en' ? 'Daily Sadhana Quiz Accomplishment Blessing' : 'दैनिक साधना प्रश्नोत्तरी पूर्ण पावन आशीष',
          language === 'pb' ? 'ਤੁਸੀਂ ਅੱਜ ਦੀ ਪਾਵਨ ਸਾਖੀ ਦਾ ਸੂਖਮ ਅਧਿਐਨ ਅਤੇ ਕੁਇਜ਼ ਸਫਲਤਾਪੂਰਵਕ ਸੰਪੰਨ ਕਰ ਲਿਆ ਹੈ।' : language === 'en' ? 'You have successfully completed today’s Daily Sadhana Quiz.' : 'आपने आज की पावन साखी का सूक्ष्म मनन एवं साधना प्रश्नोत्तरी सफलतापूर्वक पूर्ण कर ली है।'
        );
      }
    }
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setIsQuizCompleted(false);
    setSavedToDiary(false);
  };

  const handleSaveQuizResultToDiary = () => {
    if (onSaveToDiary && !savedToDiary) {
      sacredHaptics.lightTap();
      const reflection = `[दैनिक साधना प्रश्नोत्तरी पूर्ण] साखी #${sakhi.number} मनन। ३ में से ३ प्रश्न सफल। सत्यनाम साहेब।`;
      onSaveToDiary(reflection);
      setSavedToDiary(true);
    }
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctOptionId) {
        score += 1;
      }
    });
    return score;
  };

  const score = calculateScore();

  return (
    <div
      id="daily-sadhana-quiz-overlay"
      onClick={(e) => {
        if ((e.target as HTMLElement).id === 'daily-sadhana-quiz-overlay') {
          onClose();
        }
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md animate-fadeIn"
    >
      <div
        style={{
          backgroundColor: isDarkMode ? '#18130E' : theme.cardBg,
          borderColor: isDarkMode ? '#F59E0B' : theme.accentGold,
          color: isDarkMode ? '#FFFDF7' : theme.textPrimary,
        }}
        className="relative z-20 w-full max-w-lg rounded-3xl border-2 shadow-2xl overflow-hidden flex flex-col max-h-[92vh] transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Sacred Branding Bar */}
        <div
          style={{
            backgroundColor: isDarkMode ? '#2A2016' : theme.stepActiveBg,
            borderColor: isDarkMode ? 'rgba(253, 230, 138, 0.3)' : theme.cardBorder,
          }}
          className="border-b py-2.5 px-4 flex items-center justify-between select-none"
        >
          <div className="flex items-center gap-2">
            <span className="text-base select-none">🌹</span>
            <span
              style={{ color: isDarkMode ? '#FDE68A' : theme.sacredMaroon }}
              className="font-serif font-black text-xs sm:text-sm tracking-wide"
            >
              {language === 'pb' ? 'ਰੋਜ਼ਾਨਾ ਸਾਧਨਾ ਕੁਇਜ਼' : language === 'en' ? 'Daily Sadhana Quiz' : 'दैनिक साधना प्रश्नोत्तरी (3 प्रश्न)'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition cursor-pointer"
            title="Close"
          >
            <X className="w-4 h-4 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 text-left flex-1">
          {!isQuizCompleted ? (
            <>
              {/* Sakhi Context Badge */}
              <div
                style={{
                  backgroundColor: isDarkMode ? '#2A2016' : theme.bgSecondary,
                  borderColor: isDarkMode ? 'rgba(253, 230, 138, 0.25)' : theme.borderOrnament,
                }}
                className="p-3 rounded-2xl border flex items-start gap-2.5"
              >
                <BookOpen className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold text-amber-700 dark:text-amber-300 block uppercase tracking-wider">
                    {language === 'pb' ? `ਸਾਖੀ #${sakhi.number} ਆਧਾਰਿਤ ਪ੍ਰਸ਼ਨ` : language === 'en' ? `Based on Sakhi #${sakhi.number}` : `साखी #${sakhi.number} आधारित साधना प्रश्न`}
                  </span>
                  <p 
                    style={{ color: isDarkMode ? '#FFFDF7' : theme.textPrimary }}
                    className="font-serif font-bold text-xs sm:text-sm leading-snug italic"
                  >
                    "{sakhi.text[language]}"
                  </p>
                </div>
              </div>

              {/* Progress & Step Bar */}
              <div className="flex items-center justify-between text-xs font-mono font-bold text-amber-700 dark:text-amber-300 pt-1">
                <span>
                  {language === 'pb' ? `ਪ੍ਰਸ਼ਨ ${currentQuestionIndex + 1} / 3` : language === 'en' ? `Question ${currentQuestionIndex + 1} of 3` : `प्रश्न ${currentQuestionIndex + 1} / 3`}
                </span>
                <div className="flex items-center gap-1">
                  {[0, 1, 2].map((idx) => (
                    <div
                      key={idx}
                      className={`h-2 rounded-full transition-all ${
                        idx === currentQuestionIndex
                          ? 'w-6 bg-amber-500'
                          : selectedAnswers[idx] !== undefined
                          ? 'w-2 bg-emerald-500'
                          : 'w-2 bg-gray-300 dark:bg-zinc-700'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Question Text */}
              <h3 
                style={{ color: isDarkMode ? '#FFFDF7' : theme.textPrimary }}
                className={`font-serif font-black leading-snug pt-1 ${questionFontSizes[fontSize] || questionFontSizes.medium}`}
              >
                {currentQuestion.question[language]}
              </h3>

              {/* Options Matrix */}
              <div className="space-y-2.5 pt-1">
                {currentQuestion.options.map((opt) => {
                  const isSelected = selectedAnswerId === opt.id;
                  const isCorrect = opt.id === currentQuestion.correctOptionId;

                  let btnBg = isDarkMode ? '#2A2016' : theme.bgSecondary;
                  let btnBorder = isDarkMode ? 'rgba(253, 230, 138, 0.25)' : theme.cardBorder;
                  let btnText = isDarkMode ? '#FFFDF7' : theme.textPrimary;

                  if (isCurrentAnswered) {
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
                      disabled={isCurrentAnswered}
                      style={{
                        backgroundColor: btnBg,
                        borderColor: btnBorder,
                        color: btnText,
                      }}
                      className={`w-full p-3 sm:p-3.5 rounded-2xl border-2 text-left font-serif font-semibold transition-all flex items-start gap-3 cursor-pointer ${
                        !isCurrentAnswered ? 'hover:scale-[1.01] hover:border-amber-400 active:scale-[0.99]' : ''
                      } ${optionFontSizes[fontSize] || optionFontSizes.medium}`}
                    >
                      <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 font-sans font-bold text-[11px]">
                        {isCurrentAnswered && isCorrect ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        ) : isCurrentAnswered && isSelected ? (
                          <XCircle className="w-4 h-4 text-rose-500" />
                        ) : (
                          String.fromCharCode(65 + opt.id - 1)
                        )}
                      </div>
                      <span className="flex-1 leading-snug">{opt.text[language]}</span>
                    </button>
                  );
                })}
              </div>

              {/* Instant Explanation on Answer */}
              {isCurrentAnswered && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    backgroundColor: isDarkMode ? '#2A2016' : '#FEF3C7',
                    borderColor: isDarkMode ? '#F59E0B' : '#FCD34D',
                  }}
                  className="p-3.5 rounded-2xl border text-xs font-serif leading-relaxed space-y-1"
                >
                  <div className="flex items-center gap-1.5 font-black text-amber-700 dark:text-amber-300">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{language === 'pb' ? 'ਅਧਿਆਤਮਕ ਭੇਦ / ਵਿਆਖਿਆ' : language === 'en' ? 'Spiritual Insight' : 'आध्यात्मिक रहस्य एवं व्याख्या'}</span>
                  </div>
                  <p 
                    style={{ color: isDarkMode ? '#FFFDF7' : '#78350F' }}
                    className={explanationFontSizes[fontSize] || explanationFontSizes.medium}
                  >
                    {currentQuestion.explanation[language]}
                  </p>
                </motion.div>
              )}

              {/* Action Button */}
              {isCurrentAnswered && (
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleNext}
                    style={{
                      backgroundColor: isDarkMode ? '#D97706' : theme.buttonPrimaryBg,
                      color: isDarkMode ? '#000000' : theme.buttonPrimaryText,
                    }}
                    className="w-full py-3 px-4 rounded-xl font-bold font-serif text-sm shadow-lg hover:scale-[1.02] active:scale-[0.98] transition cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>
                      {currentQuestionIndex < quizQuestions.length - 1
                        ? (language === 'pb' ? 'ਅਗਲਾ ਪ੍ਰਸ਼ਨ' : language === 'en' ? 'Next Question' : 'अगला प्रश्न')
                        : (language === 'pb' ? 'ਸਾਧਨਾ ਪੂਰਨ ਅਸੀਸ ਲਵੋ 🌹' : language === 'en' ? 'Complete & Receive Blessing 🌹' : 'साधना पूर्ण एवं पावन आशीष प्राप्त करें 🌹')}
                    </span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          ) : (
            /* Quiz Completed View */
            <div className="text-center space-y-4 py-4 animate-fadeIn">
              <div className="w-16 h-16 mx-auto rounded-full bg-amber-500/20 text-amber-500 border-2 border-amber-400/50 flex items-center justify-center animate-bounce shadow-lg">
                <Award className="w-8 h-8 text-amber-600 dark:text-amber-300" />
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400 block">
                  {language === 'pb' ? 'ਸਾਧਨਾ ਪ੍ਰਸ਼ਨਾਵਲੀ ਸੰਪੰਨ' : language === 'en' ? 'Daily Sadhana Completed' : 'दैनिक साधना प्रश्नोत्तरी संपन्न'}
                </span>
                <h3 
                  style={{ color: isDarkMode ? '#FFFDF7' : theme.sacredMaroon }}
                  className="font-serif font-black text-xl sm:text-2xl"
                >
                  {score === 3 
                    ? (language === 'pb' ? '🌹 ਪੂਰਨ ਸਾਧਕ ਪਾਵਨ ਸਿੱਧੀ' : language === 'en' ? '🌹 Perfect Sadhaka Insight' : '🌹 पूर्ण साधक पावन सिद्धि')
                    : (language === 'pb' ? '✨ ਸਾਧਨਾ ਅਭਿਆਸ ਸਫਲ' : language === 'en' ? '✨ Divine Practice Accomplished' : '✨ साधना अभ्यास सफल')}
                </h3>
                <p style={{ color: isDarkMode ? '#FDE68A' : theme.textSecondary }} className="text-xs sm:text-sm font-serif">
                  {language === 'pb'
                    ? `ਤੁਸੀਂ ੩ ਵਿੱਚੋਂ ${score} ਪ੍ਰਸ਼ਨਾਂ ਦੇ ਉੱਤਰ ਸਫਲਤਾਪੂਰਵਕ ਦਿੱਤੇ। ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਕਿਰਪਾ ਸਦਾ ਬਣੀ ਰਹੇ।`
                    : language === 'en'
                    ? `You scored ${score} out of 3. May the divine wisdom of Satguru Kabir Saheb shine in your life.`
                    : `आपने ३ में से ${score} प्रश्नों का सटीक उत्तर दिया। सद्गुरु कबीर साहेब की पावन कृपा सदैव बनी रहे।`}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={handleSaveQuizResultToDiary}
                  disabled={savedToDiary}
                  style={{
                    backgroundColor: savedToDiary ? '#10B981' : (isDarkMode ? '#2A2016' : theme.bgSecondary),
                    borderColor: isDarkMode ? '#F59E0B' : theme.cardBorder,
                    color: savedToDiary ? '#FFFFFF' : (isDarkMode ? '#FFFDF7' : theme.textPrimary),
                  }}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl border-2 font-bold text-xs font-serif flex items-center justify-center gap-1.5 transition cursor-pointer"
                >
                  <Bookmark className="w-3.5 h-3.5" />
                  <span>{savedToDiary ? (language === 'pb' ? 'ਡਾਇਰੀ ਵਿੱਚ ਦਰਜ ਹੋ ਗਿਆ' : language === 'en' ? 'Saved to Diary' : 'डायरी में दर्ज हो गया') : (language === 'pb' ? 'ਡਾਇਰੀ ਵਿੱਚ ਸੁਰੱਖਿਅਤ ਕਰੋ' : language === 'en' ? 'Save to Spiritual Diary' : 'पावन डायरी में सुरक्षित करें')}</span>
                </button>

                <button
                  type="button"
                  onClick={handleRestart}
                  style={{
                    backgroundColor: isDarkMode ? '#D97706' : theme.buttonPrimaryBg,
                    color: isDarkMode ? '#000000' : theme.buttonPrimaryText,
                  }}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl font-bold text-xs font-serif flex items-center justify-center gap-1.5 shadow-md hover:scale-105 transition cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{language === 'pb' ? 'ਦੁਬਾਰਾ ਕੁਇਜ਼ ਦਿਓ' : language === 'en' ? 'Restart Quiz' : 'पुनः प्रश्नोत्तरी करें'}</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Sacred Invocation */}
        <div
          style={{
            backgroundColor: isDarkMode ? '#2A2016' : theme.stepActiveBg,
            borderColor: isDarkMode ? 'rgba(253, 230, 138, 0.3)' : theme.cardBorder,
          }}
          className="border-t py-2 px-4 text-center select-none"
        >
          <span
            style={{ color: isDarkMode ? '#FDE68A' : theme.sacredMaroon }}
            className="text-xs sm:text-sm font-semibold tracking-wider font-serif block"
          >
            {SACRED_BRANDING.footer[language]}
          </span>
        </div>
      </div>
    </div>
  );
};
