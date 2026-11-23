import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Upload, Check, ShieldCheck, Database } from 'lucide-react';
import { Language } from '../types';

interface BackupRestoreModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const BackupRestoreModal: React.FC<BackupRestoreModalProps> = ({ isOpen, onClose, language }) => {
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleExportBackup = () => {
    try {
      const backupData = {
        version: '1.0',
        timestamp: new Date().toISOString(),
        bookmarks: localStorage.getItem('sahebworld_sacred_bookmarks'),
        diary: localStorage.getItem('sahebworld_diary_entries'),
        malaCount: localStorage.getItem('sahebworld_mala_count'),
        lastRead: localStorage.getItem('sahebworld_last_read_nitnem'),
        settings: localStorage.getItem('sahebworld_settings')
      };

      const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `sahebworld_sacred_backup_${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setSuccessMsg(language === 'pb' ? 'ਬੈਕਅੱਪ ਫਾਈਲ ਸਫਲਤਾਪੂਰਵਕ ਡਾਊਨਲੋਡ ਹੋ ਗਈ!' : 'बैकअप फाइल सफलतापूर्वक डाउनलोड हो गई!');
      setTimeout(() => setSuccessMsg(null), 3000);
    } catch (err) {
      console.error('Export error:', err);
    }
  };

  const handleImportBackup = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        if (json.bookmarks) localStorage.setItem('sahebworld_sacred_bookmarks', json.bookmarks);
        if (json.diary) localStorage.setItem('sahebworld_diary_entries', json.diary);
        if (json.malaCount) localStorage.setItem('sahebworld_mala_count', json.malaCount);
        if (json.lastRead) localStorage.setItem('sahebworld_last_read_nitnem', json.lastRead);
        if (json.settings) localStorage.setItem('sahebworld_settings', json.settings);

        setSuccessMsg(language === 'pb' ? 'ਬੈਕਅੱਪ ਸਫਲਤਾਪੂਰਵਕ ਰੀਸੋਰਟ ਹੋ ਗਿਆ! ਪੰਨਾ ਰਿਫ੍ਰੈਸ਼ ਹੋ ਰਿहा है।' : 'बैकअप सफलतापूर्वक पुनर्स्थापित (Restore) हो गया! पृष्ठ रीफ्रेश हो रहा है।');
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } catch (err) {
        alert('Invalid backup file format.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[250] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 15 }}
          className="relative w-full max-w-md rounded-3xl border-2 border-amber-400 dark:border-amber-700 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="p-4 border-b border-amber-200 dark:border-zinc-800 bg-amber-50/90 dark:bg-zinc-950/90 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#8B2500] text-white flex items-center justify-center shadow-sm">
                <Database size={18} />
              </div>
              <h3 className="text-base font-black font-serif text-amber-950 dark:text-amber-200">
                {language === 'pb' ? 'ਸਥਾਨਕ ਬੈਕਅੱਪ ਤੇ ਰੀਸੋਰਟ' : 'लोकल क्लाउड बैकअप व रिस्टोर'}
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl bg-black/5 hover:bg-black/10 dark:hover:bg-white/10 text-gray-500 hover:text-gray-800 dark:text-gray-300 transition cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-6 space-y-5">
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-200 text-xs leading-relaxed">
              <ShieldCheck size={20} className="shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
              <p>
                {language === 'pb'
                  ? 'ਆਪਣੇ ਬੁੱਕਮਾਰਕ, ਡਾਇਰੀ ਨੋਟਸ ਅਤੇ ਜਾਪ ਕਾਊਂਟਰ ਦਾ ਬੈਕਅੱਪ ਸੁਰੱਖਿਅਤ ਕਰੋ ਤਾਂ ਜੋ ਫੋਨ ਬਦਲਣ ਉੱਤੇ ਵੀ ਤੁਹਾਡਾ ਡਾਟਾ ਸੁਰੱਖਿਅਤ ਰਹੇ।'
                  : 'अपने सभी बुकमार्क, स्वाध्याय डायरी नोट्स, और जाप काउंटर का सुरक्षित बैकअप डाउनलोड करें ताकि फोन बदलने पर भी आपका डेटा सुरक्षित रहे।'}
              </p>
            </div>

            {successMsg && (
              <div className="p-3 rounded-xl bg-green-500/20 border border-green-500/30 text-green-800 dark:text-green-300 text-xs font-bold flex items-center gap-2 animate-in fade-in">
                <Check size={16} />
                <span>{successMsg}</span>
              </div>
            )}

            <div className="space-y-3">
              <button
                type="button"
                onClick={handleExportBackup}
                className="w-full py-3 px-4 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Download size={18} />
                <span>{language === 'pb' ? 'ਬੈਕਅੱਪ ਫਾਈਲ ਡਾਊनਲੋਡ ਕਰੋ (Export)' : 'बैकअप फाइल डाउनलोड करें (Export Backup)'}</span>
              </button>

              <label className="w-full py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-2.5 cursor-pointer">
                <Upload size={18} />
                <span>{language === 'pb' ? 'ਬੈਕਅੱਪ ਰੀਸੋਰਟ ਕਰੋ (Restore)' : 'बैकअप फाइल से डेटा रिस्टोर करें'}</span>
                <input
                  type="file"
                  accept=".json"
                  onChange={handleImportBackup}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
