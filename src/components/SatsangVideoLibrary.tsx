import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'motion/react';
import {
  Play,
  Tv,
  Bookmark,
  BookmarkCheck,
  ArrowLeft,
  X,
  Share2,
  Search,
  Video,
  Check,
  Plus,
  Upload,
  Trash2,
  Link2,
  ShieldCheck,
  Cloud,
} from 'lucide-react';
import { Language } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import { sacredHaptics } from '../services/haptics';
import { useOnlineStatus } from '../hooks/usePWAInstall';
import { isAdminAuthenticated, isFirebaseAdminVerified } from '../services/adminAuth';
import {
  subscribeToSacredMedia,
  publishAdminSacredMedia,
  deleteAdminSacredMedia,
  SacredMediaItem,
} from '../services/sacredMediaService';

interface SatsangVideoLibraryProps {
  language: Language;
  onClose?: () => void;
}

export interface SatsangVideo {
  id: string;
  youtubeId?: string;
  mediaUrl: string;
  title: Record<Language, string>;
  category: 'bijak' | 'anurag' | 'leela' | 'amritvani' | 'yoga';
  speaker: string;
  duration: string;
  description: Record<Language, string>;
  thumbnailUrl?: string;
}

export const SatsangVideoLibrary: React.FC<SatsangVideoLibraryProps> = ({ language, onClose }) => {
  const { theme } = useAppTheme();
  const isHi = language === 'hi';
  const isPb = language === 'pb';
  const isOnline = useOnlineStatus();

  const [isAdmin, setIsAdmin] = useState<boolean>(() => isAdminAuthenticated());
  const [cloudItems, setCloudItems] = useState<SacredMediaItem[]>([]);

  // Admin Video Publish Form state
  const [showAddForm, setShowAddForm] = useState(false);
  const [videoTitle, setVideoTitle] = useState('');
  const [videoCategory, setVideoCategory] = useState<'anurag' | 'bijak' | 'amritvani' | 'yoga' | 'leela'>('anurag');
  const [videoSpeaker, setVideoSpeaker] = useState('सतगुरु कबीर साहेब आश्रम');
  const [videoDuration, setVideoDuration] = useState('12:00');
  const [videoUrlOrYt, setVideoUrlOrYt] = useState('');
  const [videoDescription, setVideoDescription] = useState('');
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [isPublishing, setIsPublishing] = useState(false);
  const [adminStatusMsg, setAdminStatusMsg] = useState<string | null>(null);

  useEffect(() => {
    const handleAuth = () => setIsAdmin(isAdminAuthenticated());
    window.addEventListener('sahebworld:admin-auth-change', handleAuth);
    const unsubMedia = subscribeToSacredMedia((items) => {
      setCloudItems(items.filter((it) => it.mediaType === 'video'));
    });
    return () => {
      window.removeEventListener('sahebworld:admin-auth-change', handleAuth);
      unsubMedia();
    };
  }, []);

  const videosList: SatsangVideo[] = useMemo(() => {
    return cloudItems.map((it) => {
      const cat: SatsangVideo['category'] =
        it.category === 'bijak' ||
        it.category === 'anurag' ||
        it.category === 'leela' ||
        it.category === 'amritvani' ||
        it.category === 'yoga'
          ? it.category
          : 'anurag';
      return {
        id: it.id,
        youtubeId: it.youtubeId || undefined,
        mediaUrl: it.mediaUrl,
        title: { hi: it.title, pb: it.title, en: it.title },
        category: cat,
        speaker: it.speakerOrArtist || 'सतगुरु कबीर साहेब आश्रम',
        duration: it.duration || 'सत्संग',
        description: {
          hi: it.description || 'एडमिन द्वारा प्रकाशित पावन सत्संग वीडियो दर्शन',
          pb: it.description || 'ਐਡਮਿਨ ਵੱਲੋਂ ਪ੍ਰਕਾਸ਼ਿਤ ਪਾਵਨ ਸਤਿਸੰਗ ਵੀਡੀਓ',
          en: it.description || 'Sacred Satsang video discourse published by Admin',
        },
      };
    });
  }, [cloudItems]);

  const [activeVideo, setActiveVideo] = useState<SatsangVideo | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'bijak' | 'anurag' | 'amritvani' | 'yoga' | 'leela' | 'bookmarks'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const [bookmarkedVideoIds, setBookmarkedVideoIds] = useState<string[]>(() => {
    try {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('sahebworld_video_bookmarks');
        return saved ? JSON.parse(saved) : [];
      }
    } catch {}
    return [];
  });

  const toggleBookmark = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    sacredHaptics.lightTap();
    setBookmarkedVideoIds((prev) => {
      const next = prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id];
      try {
        localStorage.setItem('sahebworld_video_bookmarks', JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const handleCopyShare = (video: SatsangVideo, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const shareUrl = video.youtubeId ? `https://www.youtube.com/watch?v=${video.youtubeId}` : video.mediaUrl;
    const text = `।। सत्यनाम ।।\nसत्संग वीडियो: ${video.title[language] || video.title.hi}\n${shareUrl}\n\nसाहेब वर्ल्ड - सतगुरु कबीर साहेब स्वाध्याय`;
    navigator.clipboard.writeText(text);
    setCopiedId(video.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleAdminPublishVideo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAdmin) return;
    setIsPublishing(true);
    setAdminStatusMsg(null);
    const res = await publishAdminSacredMedia({
      mediaType: 'video',
      title: videoTitle,
      category: videoCategory,
      speakerOrArtist: videoSpeaker,
      duration: videoDuration,
      description: videoDescription,
      mediaUrl: videoUrlOrYt,
      file: videoFile,
    });
    setIsPublishing(false);
    if (res.success) {
      setAdminStatusMsg('✓ पावन सत्संग वीडियो सफलतापूर्वक प्रकाशित हो गया!');
      setVideoTitle('');
      setVideoUrlOrYt('');
      setVideoDescription('');
      setVideoFile(null);
      setShowAddForm(false);
      setTimeout(() => setAdminStatusMsg(null), 4000);
    } else {
      setAdminStatusMsg(`✗ ${res.error}`);
    }
  };

  const handleAdminDeleteVideo = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (!isAdmin) return;
    const res = await deleteAdminSacredMedia(id);
    if (res.success) {
      if (activeVideo?.id === id) setActiveVideo(null);
      setAdminStatusMsg('✓ वीडियो हटाया गया।');
      setTimeout(() => setAdminStatusMsg(null), 3000);
    } else {
      setAdminStatusMsg(`✗ ${res.error}`);
    }
  };

  const filteredVideos = videosList.filter((v) => {
    if (selectedCategory === 'bookmarks') {
      if (!bookmarkedVideoIds.includes(v.id)) return false;
    } else if (selectedCategory !== 'all' && v.category !== selectedCategory) {
      return false;
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const title = (v.title[language] || v.title.hi).toLowerCase();
      const desc = (v.description[language] || v.description.hi).toLowerCase();
      const speaker = v.speaker.toLowerCase();
      return title.includes(q) || desc.includes(q) || speaker.includes(q);
    }
    return true;
  });

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20">
      {/* Standardized Sacred Top Bar */}
      <div
        style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.cardBorder }}
        className="border-b py-2 px-3 sm:px-4 select-none flex items-center justify-center overflow-hidden min-h-[42px] rounded-xl"
      >
        <span
          style={{ color: theme.sacredMaroon }}
          className="text-sm sm:text-lg font-black tracking-wider sm:tracking-widest font-serif block whitespace-nowrap overflow-hidden text-ellipsis"
        >
          {isPb ? '🌹 ।। ਸਤ੍ਯਨਾਮ ।। 🌹' : '🌹 ।। सत्यनाम ।। 🌹'}
        </span>
      </div>

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-black font-serif flex items-center gap-2" style={{ color: theme.sacredMaroon }}>
            <Tv className="w-6 h-6 text-amber-600" />
            <span>{isHi ? 'पावन सत्संग वीडियो दर्शन' : isPb ? 'ਸਤਿਸੰਗ ਵੀਡੀਓ ਦਰਸ਼ਨ' : 'Satsang Video Discourses'}</span>
          </h2>
          <p className="text-xs opacity-75" style={{ color: theme.textSecondary }}>
            {isHi ? 'सतगुरु कबीर साहेब के प्रामाणिक उपदेश, बीजक, अनुराग सागर एवं अमृतवाणी' : isPb ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੇ ਪਾਵਨ ਪ੍ਰਵਚਨ' : 'Curated spiritual video discourses and holy teachings'}
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {isAdmin && (
            <button
              type="button"
              onClick={() => setShowAddForm((p) => !p)}
              className="min-h-[40px] px-3.5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm cursor-pointer transition"
            >
              <Plus className="w-4 h-4" />
              <span>{isHi ? 'नया वीडियो जोड़ें (Admin)' : isPb ? 'ਨਵਾਂ ਵੀਡੀਓ ਜੋੜੋ' : 'Add Video'}</span>
            </button>
          )}

          {onClose && (
            <button
              type="button"
              onClick={onClose}
              style={{
                backgroundColor: theme.accentGoldLight,
                borderColor: theme.accentGold,
                color: theme.sacredMaroon,
              }}
              className="px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 hover:scale-105 transition cursor-pointer shadow-xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{isHi ? 'वापस जाएं' : isPb ? 'ਵਾਪਸ ਜਾਓ' : 'Go Back'}</span>
            </button>
          )}
        </div>
      </div>

      {adminStatusMsg && (
        <div className="p-3 rounded-2xl border border-amber-500/40 bg-amber-500/10 text-xs font-bold text-center" style={{ color: theme.textPrimary }}>
          {adminStatusMsg}
        </div>
      )}

      {/* Admin-Only Video Upload Drawer */}
      {isAdmin && showAddForm && (
        <form
          onSubmit={handleAdminPublishVideo}
          className="p-5 rounded-3xl border-2 border-emerald-500/40 space-y-3.5 shadow-lg"
          style={{ backgroundColor: theme.cardBg }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <h3 className="text-sm font-black font-serif" style={{ color: theme.sacredMaroon }}>
                नया सत्संग वीडियो जोड़ें / अपलोड करें (Admin Only)
              </h3>
            </div>
            <button type="button" onClick={() => setShowAddForm(false)} className="p-1.5 rounded-lg hover:bg-black/10 cursor-pointer">
              <X className="w-4 h-4" />
            </button>
          </div>

          {!isFirebaseAdminVerified() && (
            <div className="p-2.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-[11px] font-bold text-amber-900 dark:text-amber-200">
              ⚠️ क्लाउड वीडियो प्रकाशन हेतु कृपया Google एडमिन खाते से साइन-इन करें।
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              required
              value={videoTitle}
              onChange={(e) => setVideoTitle(e.target.value)}
              placeholder="सत्संग वीडियो का शीर्षक"
              className="w-full px-3 py-2 rounded-xl border text-xs font-bold outline-none"
              style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder, color: theme.textPrimary }}
            />
            <select
              value={videoCategory}
              onChange={(e) => setVideoCategory(e.target.value as SatsangVideo['category'])}
              className="w-full px-3 py-2 rounded-xl border text-xs font-bold outline-none"
              style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder, color: theme.textPrimary }}
            >
              <option value="anurag">अनुराग सागर (Anurag Sagar)</option>
              <option value="bijak">बीजक विचार (Bijak)</option>
              <option value="amritvani">अमृतवाणी (Amritvani)</option>
              <option value="yoga">सूरत-शब्द योग (Surat Shabad)</option>
              <option value="leela">जीवन लीला (Divine Leela)</option>
            </select>
            <input
              type="text"
              value={videoSpeaker}
              onChange={(e) => setVideoSpeaker(e.target.value)}
              placeholder="वक्ता / आश्रम नाम"
              className="w-full px-3 py-2 rounded-xl border text-xs outline-none"
              style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder, color: theme.textPrimary }}
            />
            <input
              type="text"
              value={videoDuration}
              onChange={(e) => setVideoDuration(e.target.value)}
              placeholder="अवधि (जैसे 15:20)"
              className="w-full px-3 py-2 rounded-xl border text-xs font-mono outline-none"
              style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder, color: theme.textPrimary }}
            />
          </div>

          <textarea
            rows={2}
            value={videoDescription}
            onChange={(e) => setVideoDescription(e.target.value)}
            placeholder="सत्संग का संक्षिप्त विवरण (वैकल्पिक)"
            className="w-full px-3 py-2 rounded-xl border text-xs outline-none"
            style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder, color: theme.textPrimary }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
            <div className="flex items-center gap-2">
              <Link2 className="w-4 h-4 text-amber-600 shrink-0" />
              <input
                type="text"
                value={videoUrlOrYt}
                onChange={(e) => setVideoUrlOrYt(e.target.value)}
                placeholder="YouTube लिंक / ID या HTTPS MP4 URL"
                className="w-full px-3 py-2 rounded-xl border text-xs outline-none"
                style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder, color: theme.textPrimary }}
              />
            </div>

            <label className="flex items-center gap-2 px-3 py-2 rounded-xl border border-dashed border-amber-500/50 cursor-pointer text-xs font-bold hover:bg-amber-500/10">
              <Upload className="w-4 h-4 text-amber-600 shrink-0" />
              <span className="truncate">{videoFile ? videoFile.name : 'या MP4/WebM वीडियो फ़ाइल चुनें'}</span>
              <input
                type="file"
                accept="video/mp4,video/webm,video/*"
                className="hidden"
                onChange={(e) => setVideoFile(e.target.files?.[0] || null)}
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={isPublishing || (!videoFile && !videoUrlOrYt.trim())}
            className="w-full min-h-[44px] py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md disabled:opacity-50 cursor-pointer transition"
          >
            {isPublishing ? 'अपलोड हो रहा है...' : '☁️ सभी भक्तों के लिए वीडियो प्रकाशित करें'}
          </button>
        </form>
      )}

      {/* Search & Categories */}
      <div className="space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 opacity-50" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isHi ? 'सत्संग खोजें (उदा. अनुराग सागर, बीजक, अमृतवाणी)...' : isPb ? 'ਸਤਿਸੰਗ ਖੋਜੋ...' : 'Search satsang videos...'}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm outline-none shadow-xs"
            style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder, color: theme.textPrimary }}
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          {[
            { id: 'all', label: isHi ? 'सभी सत्संग' : isPb ? 'ਸਾਰੇ ਸਤਿਸੰਗ' : 'All Videos' },
            { id: 'bookmarks', label: `⭐ ${isHi ? 'बुकमार्क' : 'Bookmarks'} (${bookmarkedVideoIds.length})` },
            { id: 'anurag', label: isHi ? 'अनुराग सागर' : 'Anurag Sagar' },
            { id: 'bijak', label: isHi ? 'बीजक विचार' : 'Bijak' },
            { id: 'amritvani', label: isHi ? 'अमृतवाणी' : 'Amritvani' },
            { id: 'yoga', label: isHi ? 'सूरत-शब्द योग' : 'Surat Shabad' },
            { id: 'leela', label: isHi ? 'जीवन लीला' : 'Divine Leelas' },
          ].map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id as any)}
                style={{
                  backgroundColor: isSelected ? theme.buttonPrimaryBg : theme.cardBg,
                  color: isSelected ? theme.buttonPrimaryText : theme.textPrimary,
                  borderColor: isSelected ? theme.buttonPrimaryBg : theme.cardBorder,
                }}
                className="px-3.5 py-1.5 rounded-full border text-xs font-bold whitespace-nowrap cursor-pointer transition shadow-2xs backdrop-blur-md"
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Embedded Theater Player Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-[120] bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5">
          <div
            className="w-full max-w-3xl rounded-3xl overflow-hidden border shadow-2xl space-y-4 backdrop-blur-xl"
            style={{ backgroundColor: theme.cardBg, borderColor: theme.accentGold }}
          >
            <div className="flex items-center justify-between px-5 py-3 border-b" style={{ borderColor: theme.cardBorder }}>
              <div className="flex items-center gap-2 truncate pr-2">
                <Video className="w-5 h-5 text-amber-600 shrink-0" />
                <h4 className="font-bold text-sm sm:text-base font-serif truncate" style={{ color: theme.textPrimary }}>
                  {activeVideo.title[language] || activeVideo.title.hi}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="p-1.5 rounded-full border border-black/10 hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-video w-full bg-black">
              {!activeVideo.youtubeId ? (
                <video
                  src={activeVideo.mediaUrl}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain bg-black"
                />
              ) : isOnline ? (
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`}
                  title={activeVideo.title[language] || activeVideo.title.hi}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-amber-100 font-serif space-y-2">
                  <Tv className="w-10 h-10 text-amber-400" />
                  <p className="text-sm sm:text-base font-bold">
                    {isPb
                      ? 'ਵੀਡੀਓ ਸਤਿਸੰਗ ਲਈ ਇੰਟਰਨੈੱਟ ਲੋੜੀਂਦਾ ਹੈ'
                      : isHi
                      ? 'वीडियो सत्संग चलाने के लिए इंटरनेट आवश्यक है'
                      : 'Internet connection is required to stream YouTube videos'}
                  </p>
                  <p className="text-xs text-amber-200/80 max-w-md">
                    {isPb
                      ? 'ਨਿਤਨੇਮ ਗੁਟਕਾ, ਸਤਯਨਾਮ ਧੁਨ, ਸਾਖੀਆਂ ਅਤੇ ਬਾਕੀ ਗ੍ਰੰਥ ਔਫਲਾਈਨ ਪੂਰੀ ਤਰ੍ਹਾਂ ਉਪਲਬਧ ਹਨ।'
                      : isHi
                      ? 'नितनेम गुटका साहेब, सत्यनाम धुन, साखियाँ एवं अन्य समस्त ग्रंथ बिना इंटरनेट पूर्णतः उपलब्ध हैं।'
                      : 'Nitnem Gutka, Satyanaam Dhun, Sakhis, and all scriptures remain fully usable offline.'}
                  </p>
                </div>
              )}
            </div>

            <div className="p-4 sm:p-5 space-y-3 pt-0">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-amber-700 dark:text-amber-300 font-bold">
                  {activeVideo.duration} • {activeVideo.speaker}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => toggleBookmark(activeVideo.id)}
                    className="p-2 rounded-xl border flex items-center gap-1.5 cursor-pointer hover:bg-amber-500/10 text-xs font-bold"
                    style={{ borderColor: theme.cardBorder }}
                  >
                    {bookmarkedVideoIds.includes(activeVideo.id) ? (
                      <BookmarkCheck className="w-4 h-4 text-amber-600" />
                    ) : (
                      <Bookmark className="w-4 h-4 opacity-50" />
                    )}
                    <span>{bookmarkedVideoIds.includes(activeVideo.id) ? (isHi ? 'सहेजा गया' : 'Saved') : (isHi ? 'बुकमार्क' : 'Bookmark')}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleCopyShare(activeVideo)}
                    className="p-2 rounded-xl border flex items-center gap-1.5 cursor-pointer hover:bg-amber-500/10 text-xs font-bold"
                    style={{ borderColor: theme.cardBorder }}
                  >
                    {copiedId === activeVideo.id ? <Check className="w-4 h-4 text-green-600" /> : <Share2 className="w-4 h-4 opacity-50" />}
                    <span>{copiedId === activeVideo.id ? (isHi ? 'कॉपी हुआ' : 'Copied') : (isHi ? 'साझा करें' : 'Share')}</span>
                  </button>
                </div>
              </div>
              <p className="text-xs leading-relaxed opacity-85 font-serif" style={{ color: theme.textSecondary }}>
                {activeVideo.description[language] || activeVideo.description.hi}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Videos Grid / Empty State */}
      {filteredVideos.length === 0 ? (
        <div
          style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
          className="p-10 sm:p-14 text-center rounded-3xl border-2 space-y-3 shadow-xs"
        >
          <div className="w-16 h-16 mx-auto rounded-full bg-amber-500/10 flex items-center justify-center text-amber-600">
            <Tv className="w-8 h-8 opacity-40" />
          </div>
          <h3 className="font-serif font-bold text-base sm:text-lg" style={{ color: theme.sacredMaroon }}>
            {isHi ? 'पावन सत्संग वीडियो दर्शन' : isPb ? 'ਸਤਿਸੰਗ ਵੀਡੀਓ ਦਰਸ਼ਨ' : 'Satsang Video Discourses'}
          </h3>
          <p className="text-xs sm:text-sm max-w-md mx-auto" style={{ color: theme.textSecondary }}>
            {isAdmin
              ? (isHi
                  ? 'अभी कोई वीडियो नहीं जोड़ा गया है। ऊपर "+ नया वीडियो जोड़ें (Admin)" दबाकर सत्संग वीडियो प्रकाशित करें।'
                  : 'No videos yet. Click "+ Add Video" above to publish a Satsang video.')
              : (isHi
                  ? 'वर्तमान में कोई वीडियो उपलब्ध नहीं है। शीघ्र ही पावन सत्संग वीडियो दर्शन यहाँ जुड़ेंगे।'
                  : isPb
                  ? 'ਇਸ ਸਮੇਂ ਕੋਈ ਵੀਡੀਓ ਉਪਲਬਧ ਨਹੀਂ ਹੈ। ਜਲਦੀ ਹੀ ਪਾਵਨ ਸਤਿਸੰਗ ਵੀਡੀਓ ਦਰਸ਼ਨ ਇੱਥੇ ਉਪਲਬਧ ਹੋਣਗੇ।'
                  : 'No video discourses are available at this time.')}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredVideos.map((video) => {
            const isBookmarked = bookmarkedVideoIds.includes(video.id);
            const thumb = video.youtubeId
              ? `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`
              : undefined;
            return (
              <motion.div
                key={video.id}
                whileHover={{ scale: 1.01 }}
                onClick={() => setActiveVideo(video)}
                className="p-4 rounded-3xl border space-y-3 cursor-pointer transition shadow-sm hover:shadow-md flex flex-col justify-between"
                style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
              >
                <div className="space-y-2.5">
                  {/* Video Preview Banner */}
                  <div className="aspect-video w-full rounded-2xl bg-amber-950/80 relative overflow-hidden flex items-center justify-center group shadow-inner">
                    {thumb && (
                      <div
                        className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:scale-105 transition-transform duration-500"
                        style={{ backgroundImage: `url('${thumb}')` }}
                      />
                    )}
                    <div className="w-12 h-12 rounded-full bg-amber-500/90 text-stone-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform relative z-10">
                      <Play className="w-6 h-6 ml-0.5" />
                    </div>
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-emerald-700/85 text-white text-[10px] font-bold flex items-center gap-1">
                      <Cloud className="w-3 h-3" /> {video.youtubeId ? 'YouTube' : 'MP4'}
                    </div>
                    <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-black/75 text-white font-mono text-[10px] font-bold">
                      {video.duration}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-sm sm:text-base font-serif line-clamp-2 leading-snug" style={{ color: theme.textPrimary }}>
                      {video.title[language] || video.title.hi}
                    </h3>
                    <p className="text-xs opacity-75 line-clamp-2 mt-1" style={{ color: theme.textSecondary }}>
                      {video.description[language] || video.description.hi}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t text-[11px]" style={{ borderColor: theme.cardBorder }}>
                  <span className="opacity-60 font-medium">{video.speaker}</span>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={(e) => toggleBookmark(video.id, e)}
                      className="p-1.5 rounded-lg border border-black/5 hover:bg-black/5 cursor-pointer"
                      title={isBookmarked ? 'बुकमार्क हटाया' : 'बुकमार्क करें'}
                    >
                      {isBookmarked ? <BookmarkCheck className="w-3.5 h-3.5 text-amber-600" /> : <Bookmark className="w-3.5 h-3.5 opacity-50" />}
                    </button>
                    <button
                      type="button"
                      onClick={(e) => handleCopyShare(video, e)}
                      className="p-1.5 rounded-lg border border-black/5 hover:bg-black/5 cursor-pointer"
                      title="Share link"
                    >
                      <Share2 className="w-3.5 h-3.5 opacity-50" />
                    </button>
                    {isAdmin && (
                      <button
                        type="button"
                        onClick={(e) => handleAdminDeleteVideo(e, video.id)}
                        className="p-1.5 rounded-lg border border-red-500/20 text-red-600 hover:bg-red-500/10 cursor-pointer"
                        title="एडमिन: वीडियो हटाएं"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
};
