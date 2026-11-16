import React from 'react';
import { motion } from 'motion/react';
import { useAppTheme } from '../theme/ThemeContext';

export const AnhadNaadVisualizer: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  const { theme } = useAppTheme();
  
  if (!isActive) return null;

  return (
    <div className="flex items-center justify-center gap-2 py-8">
      {[1, 2, 3, 4, 5].map((i) => (
        <motion.div
          key={i}
          animate={{ height: [20, 60 + Math.random() * 40, 20] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
          style={{ backgroundColor: theme.sacredMaroon }}
          className="w-2 rounded-full"
        />
      ))}
    </div>
  );
};
