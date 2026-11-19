import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Language } from '../types';

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  language?: Language;
  itemLabel?: { hi: string; pb: string; en: string };
}

export const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
  language = 'hi',
  itemLabel = { hi: 'पद', pb: 'ਪਦ', en: 'Items' },
}) => {
  if (totalPages <= 1) return null;

  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);
  const label = itemLabel[language] || itemLabel.hi;

  const pageNumbers: number[] = [];
  const maxVisible = 5;
  let start = Math.max(1, currentPage - 2);
  let end = Math.min(totalPages, start + maxVisible - 1);
  if (end - start + 1 < maxVisible) {
    start = Math.max(1, end - maxVisible + 1);
  }
  for (let i = start; i <= end; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav
      aria-label="Pagination"
      className="flex flex-col sm:flex-row items-center justify-between gap-2.5 px-3.5 py-2.5 rounded-2xl border border-amber-500/30 bg-amber-50/70 dark:bg-stone-900/70 backdrop-blur-xs shadow-xs"
    >
      <div className="text-[11px] sm:text-xs font-serif font-bold text-amber-900 dark:text-amber-200">
        {language === 'pb'
          ? `ਪੰਨਾ ${currentPage} / ${totalPages} (${startItem}-${endItem} ਕੁੱਲ ${totalItems} ${label})`
          : language === 'en'
          ? `Page ${currentPage} of ${totalPages} (${startItem}-${endItem} of ${totalItems} ${label})`
          : `पृष्ठ ${currentPage} / ${totalPages} (${startItem}-${endItem}, कुल ${totalItems} ${label})`}
      </div>

      <div className="flex items-center gap-1 flex-wrap justify-center">
        <button
          type="button"
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="px-2.5 py-1.5 rounded-xl text-xs font-bold font-serif border border-amber-500/30 bg-white/80 dark:bg-zinc-800/80 text-amber-900 dark:text-amber-100 hover:bg-amber-500/15 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 transition cursor-pointer"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          <span>{language === 'pb' ? 'ਪਿਛਲਾ' : language === 'en' ? 'Prev' : 'पिछला'}</span>
        </button>

        {start > 1 && (
          <>
            <button
              type="button"
              onClick={() => onPageChange(1)}
              className="w-7 h-7 rounded-lg text-xs font-mono font-bold border border-amber-500/20 bg-white/70 dark:bg-zinc-800/70 text-amber-900 dark:text-amber-200 hover:bg-amber-500/15 cursor-pointer"
            >
              1
            </button>
            {start > 2 && <span className="px-1 text-xs opacity-60">…</span>}
          </>
        )}

        {pageNumbers.map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            className={`w-7 h-7 rounded-lg text-xs font-mono font-bold border transition cursor-pointer ${
              page === currentPage
                ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                : 'border-amber-500/20 bg-white/70 dark:bg-zinc-800/70 text-amber-900 dark:text-amber-200 hover:bg-amber-500/15'
            }`}
          >
            {page}
          </button>
        ))}

        {end < totalPages && (
          <>
            {end < totalPages - 1 && <span className="px-1 text-xs opacity-60">…</span>}
            <button
              type="button"
              onClick={() => onPageChange(totalPages)}
              className="w-7 h-7 rounded-lg text-xs font-mono font-bold border border-amber-500/20 bg-white/70 dark:bg-zinc-800/70 text-amber-900 dark:text-amber-200 hover:bg-amber-500/15 cursor-pointer"
            >
              {totalPages}
            </button>
          </>
        )}

        <button
          type="button"
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="px-2.5 py-1.5 rounded-xl text-xs font-bold font-serif border border-amber-500/30 bg-white/80 dark:bg-zinc-800/80 text-amber-900 dark:text-amber-100 hover:bg-amber-500/15 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 transition cursor-pointer"
        >
          <span>{language === 'pb' ? 'ਅਗਲਾ' : language === 'en' ? 'Next' : 'अगला'}</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </nav>
  );
};
