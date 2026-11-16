import React, { useState, useEffect } from 'react';
import { Award, CheckCircle2, XCircle, RotateCcw, Sparkles, ChevronRight, HelpCircle, X, Trophy, BookOpen } from 'lucide-react';
import { Sakhi, Language, SACRED_BRANDING } from '../types';
import { translations } from '../data/translations';
import { evaluateSpiritualRank } from '../data/sakhis';
import { useAppTheme } from '../theme/ThemeContext';
import { satyanaamAudio } from '../services/audioDhun';
import { sacredHaptics } from '../services/haptics';
import { UlatvasiQuiz } from './UlatvasiQuiz';

interface SpiritualQuizProps {
  sakhi: Sakhi;
  language: Language;
  onCompleteQuiz: (score: number) => void;
  onOpenBlessing: () => void;
  onClose?: () => void;
  initialMode?: 'sakhi' | 'ulatvasi';
}

interface ShuffledQuestion {
  id: string;
  questionText: string;
  options: string[];
  correctAnswerText: string;
  explanation: string;
}

export const SpiritualQuiz: React.FC<SpiritualQuizProps> = ({
  sakhi,
  language,
  onCompleteQuiz,
  onOpenBlessing,
  onClose,
  initialMode = 'sakhi',
}) => {
  const { theme } = useAppTheme();
  const t = translations[language];

  const [activeQuizMode, setActiveQuizMode] = useState<'sakhi' | 'ulatvasi'>(initialMode);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<ShuffledQuestion[]>([]);

  // If in Ulatvasi Mode, render the full 3D Ulatvasi Gaming Quiz with Leaderboard!
  if (activeQuizMode === 'ulatvasi') {
    return (
      <div className="space-y-4">
        {/* Mode Switcher Bar */}
        <div
          style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
          className="p-2 rounded-2xl border flex items-center justify-between gap-2 shadow-sm"
        >
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10">
            <button
              type="button"
              onClick={() => setActiveQuizMode('sakhi')}
              className="px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer text-stone-600 dark:text-stone-300 hover:text-amber-600"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? 'दैनिक साखी प्रश्नोत्तरी' : language === 'pb' ? 'ਰੋਜ਼ਾਨਾ ਸਾਖੀ ਪ੍ਰਸ਼ਨੋਤਰੀ' : 'Daily Sakhi Quiz'}</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveQuizMode('ulatvasi')}
              style={{
                backgroundColor: theme.buttonPrimaryBg,
                color: theme.buttonPrimaryText,
              }}
              className="px-3 py-1.5 rounded-lg text-xs font-black shadow-xs flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? '⚡ उलटबांसी 3D गेमिंग' : language === 'pb' ? '⚡ ਉਲਟਬਾਂਸੀ 3D ਗੇਮਿੰਗ' : '⚡ Ulatvasi 3D Quest'}</span>
            </button>
          </div>
        </div>

        <UlatvasiQuiz
          language={language}
          onClose={onClose}
          onOpenBlessing={onOpenBlessing}
        />
      </div>
    );
  }

  // Prepare & shuffle questions whenever sakhi or language changes
  useEffect(() => {
    resetQuiz();
  }, [sakhi, language]);

  const resetQuiz = () => {
    const quizItems = sakhi.quiz || [];
    const prepared: ShuffledQuestion[] = quizItems.map((q) => {
      const qText = q.question[language];
      const originalOptions = q.options[language];
      const correctOriginal = originalOptions[q.correctIndex];

      // Fisher-Yates shuffle options randomly
      const shuffled = [...originalOptions];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }

      return {
        id: q.id,
        questionText: qText,
        options: shuffled,
        correctAnswerText: correctOriginal,
        explanation: q.explanation[language],
      };
    });

    setShuffledQuestions(prepared);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswerChecked(false);
    setScore(0);
    setIsFinished(false);
  };

  const handleSelectOption = (index: number) => {
    if (isAnswerChecked) return;
    sacredHaptics.lightTap();
    setSelectedOption(index);
  };

  const handleCheckAnswer = () => {
    if (selectedOption === null || isAnswerChecked) return;

    const currentQ = shuffledQuestions[currentIndex];
    const isCorrect = currentQ.options[selectedOption] === currentQ.correctAnswerText;

    if (isCorrect) {
      sacredHaptics.quizCorrect();
      setScore((prev) => prev + 1);
      try {
        satyanaamAudio.ringSacredBell();
      } catch {
        // audio optional
      }
    } else {
      sacredHaptics.quizIncorrect();
    }

    setIsAnswerChecked(true);
  };

  const handleNextQuestion = () => {
    if (currentIndex < shuffledQuestions.length - 1) {
      sacredHaptics.lightTap();
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerChecked(false);
    } else {
      setIsFinished(true);
      const finalScore = score + (selectedOption !== null && shuffledQuestions[currentIndex].options[selectedOption] === shuffledQuestions[currentIndex].correctAnswerText ? 1 : 0);
      onCompleteQuiz(finalScore);
      // If score is high (>= 3), trigger triumphant vibration & offer divine blessing
      if (finalScore >= 3) {
        sacredHaptics.quizTriumph();
        setTimeout(() => {
          onOpenBlessing();
        }, 600);
      } else {
        sacredHaptics.lightTap();
      }
    }
  };

  const currentQ = shuffledQuestions[currentIndex];
  const exactTop = SACRED_BRANDING.header[language];
  const exactBottom = SACRED_BRANDING.footer[language];

  if (!currentQ && !isFinished) {
    return null;
  }

  const rank = evaluateSpiritualRank(score);

  return (
    <div
      id="spiritual-quiz-container"
      style={{
        backgroundColor: theme.cardBg,
        borderColor: theme.cardBorder,
        color: theme.textPrimary,
      }}
      className="rounded-2xl border shadow-lg overflow-hidden flex flex-col transition-all max-w-2xl mx-auto"
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

      <div className="p-4 sm:p-6 space-y-6">
        {/* Header with Title & Gamified Score */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b pb-4" style={{ borderColor: theme.cardBorder }}>
          <div className="flex-1 min-w-[200px]">
            <div className="flex items-center gap-2">
              <span
                style={{ backgroundColor: theme.accentGoldLight, color: theme.sacredMaroon }}
                className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider"
              >
                {sakhi.categoryTitle[language]} #{sakhi.number}
              </span>
              <span style={{ color: theme.textMuted }} className="text-xs">
                {t.quizTitle}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold font-serif mt-1">
              {t.quizSubtitle}
            </h3>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                style={{
                  backgroundColor: 'rgba(239, 68, 68, 0.1)',
                  borderColor: '#EF4444',
                  color: '#DC2626',
                }}
                className="px-2.5 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 hover:bg-red-500 hover:text-white transition-all duration-200 cursor-pointer shadow-xs active:scale-95 group"
                title={language === 'pb' ? 'ਬੰਦ ਕਰੋ (Close)' : language === 'en' ? 'Close' : 'बंद करें (Close)'}
              >
                <X size={14} className="group-hover:rotate-90 transition-transform duration-200" />
                <span className="hidden sm:inline font-serif font-bold">{language === 'pb' ? 'ਬੰਦ ਕਰੋ' : language === 'en' ? 'Close' : 'बंद करें'}</span>
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Mode Switcher to Ulatvasi */}
          <button
            type="button"
            onClick={() => setActiveQuizMode('ulatvasi')}
            style={{
              backgroundColor: 'rgba(245, 158, 11, 0.15)',
              borderColor: '#F59E0B',
              color: '#B45309',
            }}
            className="px-3 py-1.5 rounded-xl border text-xs font-black flex items-center gap-1.5 hover:bg-amber-500 hover:text-stone-950 transition cursor-pointer shadow-xs"
            title="Switch to Ulatvasi 3D Gaming Mode"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>{language === 'hi' ? '⚡ उलटबांसी 3D मोड' : language === 'pb' ? '⚡ ਉਲਟਬਾਂਸੀ 3D ਮੋਡ' : '⚡ Ulatvasi 3D Mode'}</span>
          </button>

          {!isFinished && (
            <div
              style={{
                backgroundColor: theme.bgSecondary,
                borderColor: theme.borderOrnament,
              }}
              className="flex items-center gap-3 px-3.5 py-1.5 rounded-xl border text-sm font-semibold"
            >
              <Award style={{ color: theme.accentGold }} className="w-4 h-4" />
              <span>
                {t.scoreLabel}: <strong style={{ color: theme.sacredMaroon }}>{score}</strong> / {shuffledQuestions.length}
              </span>
            </div>
          )}
        </div>

        {/* Finished Screen */}
        {isFinished ? (
          <div
            id="quiz-results-card"
            style={{ backgroundColor: theme.bgSecondary, borderColor: theme.borderOrnament }}
            className="rounded-xl border p-6 text-center space-y-5"
          >
            <div className="text-5xl">{rank.badge}</div>

            <div className="space-y-1">
              <div
                style={{ color: theme.accentGold }}
                className="text-xs uppercase font-bold tracking-widest"
              >
                {t.quizCompletedTitle}
              </div>
              <h4 style={{ color: theme.sacredMaroon }} className="text-2xl font-bold font-serif">
                {rank.title[language]}
              </h4>
              <p style={{ color: theme.textSecondary }} className="text-sm max-w-md mx-auto leading-relaxed">
                {rank.description[language]}
              </p>
            </div>

            {/* Score Ring Display */}
            <div
              style={{
                backgroundColor: theme.cardBg,
                borderColor: theme.accentGold,
              }}
              className="w-24 h-24 mx-auto rounded-full border-2 flex flex-col items-center justify-center shadow-inner"
            >
              <span style={{ color: theme.sacredMaroon }} className="text-3xl font-black font-serif">
                {score}/{shuffledQuestions.length}
              </span>
              <span style={{ color: theme.textMuted }} className="text-[10px] uppercase font-semibold">
                {t.scoreLabel}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                id="claim-blessing-btn"
                onClick={onOpenBlessing}
                style={{
                  backgroundColor: theme.buttonPrimaryBg,
                  color: theme.buttonPrimaryText,
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-sm shadow-md hover:opacity-95 transition flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <Sparkles className="w-4 h-4" />
                <span>{t.claimBlessingBtn}</span>
              </button>

              <button
                id="retake-quiz-btn"
                onClick={resetQuiz}
                style={{
                  backgroundColor: theme.cardBg,
                  borderColor: theme.cardBorder,
                  color: theme.textPrimary,
                }}
                className="w-full sm:w-auto px-5 py-3 rounded-xl border font-medium text-sm hover:opacity-90 transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>{t.retakeQuizBtn}</span>
              </button>
            </div>
          </div>
        ) : (
          /* Active Question View */
          <div className="space-y-5">
            {/* Progress indicator */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-medium" style={{ color: theme.textSecondary }}>
                <span>
                  {t.questionNumber} {currentIndex + 1} {t.ofTotal} {shuffledQuestions.length}
                </span>
                <span>{Math.round(((currentIndex + 1) / shuffledQuestions.length) * 100)}%</span>
              </div>
              <div
                style={{ backgroundColor: theme.bgSecondary }}
                className="h-2 w-full rounded-full overflow-hidden"
              >
                <div
                  style={{
                    backgroundColor: theme.accentGold,
                    width: `${((currentIndex + 1) / shuffledQuestions.length) * 100}%`,
                  }}
                  className="h-full transition-all duration-300 rounded-full"
                />
              </div>
            </div>

            {/* Question Text */}
            <div
              style={{ backgroundColor: theme.bgSecondary, borderColor: theme.borderOrnament }}
              className="p-4 rounded-xl border flex items-start gap-3"
            >
              <div
                style={{ backgroundColor: theme.accentGoldLight, color: theme.sacredMaroon }}
                className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0 mt-0.5"
              >
                Q{currentIndex + 1}
              </div>
              <p className="text-base sm:text-lg font-serif font-semibold leading-relaxed">
                {currentQ.questionText}
              </p>
            </div>

            {/* 4 Options Grid */}
            <div className="space-y-2.5">
              {currentQ.options.map((option, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = option === currentQ.correctAnswerText;

                let btnBg = theme.cardBg;
                let btnBorder = theme.cardBorder;
                let textColor = theme.textPrimary;

                if (isAnswerChecked) {
                  if (isCorrect) {
                    btnBg = 'rgba(34, 197, 94, 0.12)';
                    btnBorder = '#22C55E';
                    textColor = '#15803D';
                  } else if (isSelected && !isCorrect) {
                    btnBg = 'rgba(239, 68, 68, 0.12)';
                    btnBorder = '#EF4444';
                    textColor = '#B91C1C';
                  }
                } else if (isSelected) {
                  btnBg = theme.stepActiveBg;
                  btnBorder = theme.accentGold;
                }

                return (
                  <button
                    key={idx}
                    id={`quiz-option-${currentIndex}-${idx}`}
                    disabled={isAnswerChecked}
                    onClick={() => handleSelectOption(idx)}
                    style={{
                      backgroundColor: btnBg,
                      borderColor: btnBorder,
                      color: textColor,
                    }}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all flex items-center justify-between gap-3 text-sm sm:text-base font-medium cursor-pointer ${
                      !isAnswerChecked ? 'hover:scale-[1.01] active:scale-[0.99]' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        style={{
                          backgroundColor: isSelected ? theme.accentGold : theme.bgSecondary,
                          color: isSelected ? '#FFFFFF' : theme.textSecondary,
                        }}
                        className="w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 border"
                      >
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{option}</span>
                    </div>

                    {isAnswerChecked && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    )}
                    {isAnswerChecked && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-red-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Answer Explanation Display */}
            {isAnswerChecked && (
              <div
                style={{
                  backgroundColor: theme.bgSecondary,
                  borderColor: theme.borderOrnament,
                }}
                className="p-4 rounded-xl border space-y-1.5 animate-fadeIn"
              >
                <div className="flex items-center gap-1.5 text-xs font-bold" style={{ color: theme.accentGold }}>
                  <HelpCircle className="w-4 h-4" />
                  <span>{t.explanationTitle}</span>
                </div>
                <p style={{ color: theme.textSecondary }} className="text-sm leading-relaxed">
                  {currentQ.explanation}
                </p>
              </div>
            )}

            {/* Action Bar */}
            <div className="flex items-center justify-end gap-3 pt-2">
              {!isAnswerChecked ? (
                <button
                  id="submit-answer-btn"
                  disabled={selectedOption === null}
                  onClick={handleCheckAnswer}
                  style={{
                    backgroundColor: selectedOption !== null ? theme.buttonPrimaryBg : theme.bgSecondary,
                    color: selectedOption !== null ? theme.buttonPrimaryText : theme.textMuted,
                  }}
                  className="px-6 py-2.5 rounded-xl font-semibold text-sm transition shadow-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {t.submitAnswerBtn}
                </button>
              ) : (
                <button
                  id="next-question-btn"
                  onClick={handleNextQuestion}
                  style={{
                    backgroundColor: theme.buttonPrimaryBg,
                    color: theme.buttonPrimaryText,
                  }}
                  className="px-6 py-2.5 rounded-xl font-semibold text-sm transition shadow-md flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>
                    {currentIndex < shuffledQuestions.length - 1 ? t.nextQuestionBtn : t.completeSwadhyayBtn}
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Strict Sacred Footer Spelling */}
      <div
        style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.cardBorder }}
        className="border-t py-2 px-4 text-center select-none"
      >
        <span
          style={{ color: theme.sacredMaroon }}
          className="text-xs sm:text-sm font-semibold tracking-wider font-serif block"
        >
          {exactBottom}
        </span>
      </div>
    </div>
  );
};
