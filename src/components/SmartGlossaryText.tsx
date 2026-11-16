import React, { useState } from 'react';
import { SANDHUKKARI_GLOSSARY, SandhukkariTerm } from '../services/sandhukkariGlossary';
import { Language } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import { SmartGlossaryTooltip } from './SmartGlossaryTooltip';
import { SandhukkariGlossaryModal } from './SandhukkariGlossaryModal';
import { sacredHaptics } from '../services/haptics';

interface SmartGlossaryTextProps {
  text: string;
  language: Language;
  className?: string;
  style?: React.CSSProperties;
}

export const SmartGlossaryText: React.FC<SmartGlossaryTextProps> = ({
  text,
  language,
  className = '',
  style = {},
}) => {
  const { theme } = useAppTheme();
  const [activeTooltipTerm, setActiveTooltipTerm] = useState<SandhukkariTerm | null>(null);
  const [tooltipTargetRect, setTooltipTargetRect] = useState<DOMRect | null>(null);
  const [fullModalTerm, setFullModalTerm] = useState<SandhukkariTerm | null>(null);

  // Prepare lookup map by language, sorting keys by length descending to match compound terms first
  const termMap = React.useMemo(() => {
    const map = new Map<string, SandhukkariTerm>();
    const allTerms = Object.values(SANDHUKKARI_GLOSSARY);

    for (const term of allTerms) {
      if (term.word) map.set(term.word, term);
      if (term.punjabi) map.set(term.punjabi, term);
      if (term.transliteration) map.set(term.transliteration, term);
    }
    return map;
  }, []);

  const sortedKeys = React.useMemo(() => {
    return Array.from(termMap.keys())
      .filter(k => k.length >= 2)
      .sort((a, b) => b.length - a.length);
  }, [termMap]);

  // Function to render text with glossary highlights
  const renderGlossedContent = () => {
    if (!text) return null;

    // Create a regex pattern from all glossary keys
    const escapedKeys = sortedKeys.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    if (escapedKeys.length === 0) return text;

    const pattern = new RegExp(`(${escapedKeys.join('|')})`, 'g');
    const result: React.ReactNode[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    const isWordChar = (char: string) => {
      return !!char && /^[\p{L}\p{M}]$/u.test(char);
    };

    while ((match = pattern.exec(text)) !== null) {
      const matchedStr = match[0];
      const startIndex = match.index;
      const endIndex = startIndex + matchedStr.length;

      // Check character immediately before match and immediately after match to ensure whole word match
      const charBefore = startIndex > 0 ? text[startIndex - 1] : '';
      const charAfter = endIndex < text.length ? text[endIndex] : '';

      const isWholeWord = !isWordChar(charBefore) && !isWordChar(charAfter);
      const matchedTerm = isWholeWord ? termMap.get(matchedStr) : null;

      if (matchedTerm) {
        if (startIndex > lastIndex) {
          result.push(text.substring(lastIndex, startIndex));
        }
        result.push(
          <span
            key={`gloss-${startIndex}`}
            onClick={(e) => {
              e.stopPropagation();
              sacredHaptics.lightTap();
              const rect = e.currentTarget.getBoundingClientRect();
              setTooltipTargetRect(rect);
              setActiveTooltipTerm(matchedTerm);
            }}
            title={language === 'pb' ? 'ਸਾਹਿਤਕ ਅਰਥ (ਟੈਪ ਕਰੋ)' : language === 'en' ? 'Spiritual Glossary Term (Tap to view definition)' : 'साहित्य शब्दार्थ (टैप करें)'}
            style={{
              color: theme.sacredMaroon,
              borderBottomColor: theme.accentGold,
            }}
            className="cursor-pointer font-bold border-b-2 border-dotted hover:bg-amber-500/15 dark:hover:bg-amber-400/20 px-0.5 rounded transition-colors inline-block whitespace-nowrap align-baseline group relative select-text"
          >
            <span>{matchedStr}</span>
            <span className="text-[9px] opacity-60 group-hover:opacity-100 text-amber-600 dark:text-amber-400 ml-0.5 inline-block select-none">✦</span>
          </span>
        );
        lastIndex = endIndex;
      }
    }

    if (lastIndex < text.length) {
      result.push(text.substring(lastIndex));
    }

    return result.length > 0 ? result : text;
  };

  return (
    <>
      <span className={className} style={style}>
        {renderGlossedContent()}
      </span>

      {/* Non-intrusive compact tooltip */}
      <SmartGlossaryTooltip
        term={activeTooltipTerm}
        targetRect={tooltipTargetRect}
        onClose={() => {
          setActiveTooltipTerm(null);
          setTooltipTargetRect(null);
        }}
        onOpenFullModal={(term) => {
          setActiveTooltipTerm(null);
          setFullModalTerm(term);
        }}
        language={language}
      />

      {/* Optional Full Deep-dive Modal if user clicks 'View Details' in the tooltip */}
      <SandhukkariGlossaryModal
        term={fullModalTerm}
        isOpen={Boolean(fullModalTerm)}
        onClose={() => setFullModalTerm(null)}
        language={language}
      />
    </>
  );
};
