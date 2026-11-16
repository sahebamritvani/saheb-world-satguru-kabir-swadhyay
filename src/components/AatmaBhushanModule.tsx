import React from 'react';
import { GyanChakra } from './GyanChakra';
import { Language } from '../types';

interface AatmaBhushanModuleProps {
  language: Language;
  onClose?: () => void;
  onSaveToDiary?: (notes: string, sakhiNumber?: number) => void;
  onOpenDeepSearch?: (query: string) => void;
}

export const AatmaBhushanModule: React.FC<AatmaBhushanModuleProps> = ({ 
  language, 
  onClose,
  onSaveToDiary,
  onOpenDeepSearch
}) => {
  return (
    <GyanChakra
      language={language}
      onClose={onClose}
      onSaveToDiary={onSaveToDiary}
      onOpenDeepSearch={onOpenDeepSearch}
    />
  );
};
