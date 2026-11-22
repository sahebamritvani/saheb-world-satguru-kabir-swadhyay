import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Volume2, 
  VolumeX,
  Flower2, 
  ShieldCheck,
  Upload,
  RotateCcw,
  Cloud,
  Maximize2,
  Minimize2,
  Eye,
  EyeOff,
  Sparkles,
  BookOpen,
  Copy,
  Check,
  Image as ImageIcon,
  Trash2,
  Lock
} from 'lucide-react';
import { Language } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import {
  DarshanObjectFit,
  DarshanPortraitState,
  compressDarshanImage,
  getCustomDarshanState,
  isFirebaseAdminSessionActive,
  publishAdminDarshanPortrait,
  resetAdminDarshanPortrait,
  subscribeToCustomPortraitState,
  updateAdminDarshanObjectFit,
} from '../services/customPortraitStore';
import { isAdminAuthenticated, isAuthorizedAdminEmail } from '../services/adminAuth';
import {
  SacredMediaItem,
  subscribeToSacredMedia,
  publishAdminSacredMedia,
  deleteAdminSacredMedia,
} from '../services/sacredMediaService';
import { signInWithGoogle } from '../lib/firebase';
import { speechReciter } from '../services/audioDhun';
import { sacredHaptics } from '../services/haptics';

const SHLOKA_DHYANAM_TEXT: Record<Language, string> = {
  hi: `ध्यायतं सद्‌गुरु श्वेतरूप मंगलम् श्वेताम्बरं शोभितम् ।
कर्णेल कुण्डलं श्वेत शुभ्र मुकुटं हिरामणि मण्डितम् ।।
नाना माल मुक्तादि शोभित गला प‌द्मासने सुस्थितम् ।
दयाब्धि धीर सुप्रसन्न वदनं सद्‌गुरु तन्नमामि ।।
द्वै पदम् द्वै भुजम् प्रसन्न वदनं द्वै नेत्रम् दयालम् ।
सेलीकंठ भाल ऊर्ध्व तिलकम् श्वेताम्बरी मेखला ॥
चक्रांकित शिर टोप रत्न लसितम् तेजोमयी विग्रहम् ।
बन्दों सतगुरु योग दण्ड सहितं कब्बीर करुणामयम् ॥
ध्यान मूलम् गुरु मूर्ति, पूजा मूलम् गुरु पदम् ।
मन्त्र मूलम् गुरु वाक्यं, मोक्ष मूलम् गुरु कृपा ॥`,
  pb: `ਧਿਆਯਤੰ ਸਦਗੁਰੂ ਸ਼ਵੇਤਰੂਪ ਮੰਗਲਮ ਸ਼ਵੇਤਾਮ੍ਬਰੰ ਸ਼ੋਭਿਤਮ ।
ਕਰਣੇਲ ਕੁੰਡਲੰ ਸ਼ਵੇਤ ਸ਼ੁਭ੍ਰ ਮੁਕੁਟੰ ਹੀਰਾਮਣੀ ਮੰਡਿਤਮ ॥
ਨਾਨਾ ਮਾਲ ਮੁਕ੍ਤਾਦਿ ਸ਼ੋਭਿਤ ਗਲਾ ਪਦਮਾਸਨੇ ਸੁਸਥਿਤਮ ।
ਦਯਾਬਧਿ ਧੀਰ ਸੁਪ੍ਰਸੰਨ ਵਦਨੰ ਸਦਗੁਰੂ ਤੰਨਮਾਮਿ ॥
ਦ੍ਵੈ ਪਦਮ ਦ੍ਵੈ ਭੁਜਮ ਪ੍ਰਸੰਨ ਵਦਨੰ ਦ੍ਵੈ ਨੇਤ੍ਰਮ ਦਯਾਲਮ ।
ਸੇਲੀਕੰਠ ਭਾਲ ਊਰਧਵ ਤਿਲਕਮ ਸ਼ਵੇਤਾਮ੍ਬਰੀ ਮੇਖਲਾ ॥
ਚਕ੍ਰਾਂਕਿਤ ਸ਼ਿਰ ਟੋਪ ਰਤਨ ਲਸਿਤਮ ਤੇਜੋਮਯੀ ਵਿਗ੍ਰਹਮ ।
ਬੰਦੋਂ ਸਤਿਗੁਰੂ ਯੋਗ ਦੰਡ ਸਹਿਤੰ ਕਬੀਰ ਕਰੁਣਾਮਯਮ ॥
ਧਿਆਨ ਮੂਲਮ ਗੁਰੂ ਮੂਰਤਿ, ਪੂਜਾ ਮੂਲਮ ਗੁਰੂ ਪਦਮ ।
ਮੰਤ੍ਰ ਮੂਲਮ ਗੁਰੂ ਵਾਕਯੰ, ਮੋਕਸ਼ ਮੂਲਮ ਗੁਰੂ ਕ੍ਰਿਪਾ ॥`,
  en: `Dhyayatam Sadguru Shwetaroop Mangalam Shwetambaram Shobhitam |
Karnel Kundalam Shwet Shubhra Mukutam Hiramani Manditam ||
Naana Maal Muktaadi Shobhit Galaa Padmaasane Susthitam |
Dayaabdhi Dheer Suprasanna Vadanam Sadguru Tannamaami ||
Dwai Padam Dwai Bhujam Prasanna Vadanam Dwai Netram Dayalam |
Selikanth Bhaal Oordhva Tilakam Shwetambari Mekhalaa ||
Chakraankit Shir Top Ratna Lasitam Tejomayi Vigraham |
Bandon Satguru Yog Dand Sahitam Kabbeer Karunaamayam ||
Dhyaan Moolam Guru Moorti, Poojaa Moolam Guru Padam |
Mantra Moolam Guru Vaakyam, Moksha Moolam Guru Kripaa ||`,
};

const VINTI_TEXT: Record<Language, string> = {
  hi: `सत्य कबीर गुरु बालापीर, लड़के बच्चे होय फकीर।
सूखी नदी बहावे नीर, भूखे को खिलावे खीर ॥
नंगे को पहिरावे चीर, इतना बांटे सत्य कबीर ।
सत्य कबीर का बालका, पानी पीवे पताल का ॥
निशाना मारे काल को, भजो सत्यनाम को ।
पावो सुखधाम को, मेटो जम जाल को ।।`,
  pb: `ਸਤਯ ਕਬੀਰ ਗੁਰੂ ਬਾਲਾਪੀਰ, ਲੜਕੇ ਬੱਚੇ ਹੋਇ ਫ਼ਕੀਰ।
ਸੁੱਕੀ ਨਦੀ ਬਹਾਵੇ ਨੀਰ, ਭੁੱਖੇ ਕੋ ਖਿਲਾਵੇ ਖੀਰ ॥
ਨੰਗੇ ਕੋ ਪਹਿਰਾਵੇ ਚੀਰ, ਇਤਨਾ ਬਾਂਟੇ ਸਤਯ ਕਬੀਰ ।
ਸਤਯ ਕਬੀਰ ਕਾ ਬਾਲਕਾ, ਪਾਣੀ ਪੀਵੇ ਪਤਾਲ ਕਾ ॥
ਨਿਸ਼ਾਨਾ ਮਾਰੇ ਕਾਲ ਕੋ, ਭਜੋ ਸਤਯਨਾਮ ਕੋ ।
ਪਾਵੋ ਸੁਖਧਾਮ ਕੋ, ਮੇਟੋ ਜਮ ਜਾਲ ਕੋ ॥`,
  en: `Satya Kabir Guru Balapeer, ladke bachche hoye fakeer.
Sookhi nadi bahaave neer, bhookhe ko khilaave kheer ||
Nange ko pahiraave cheer, itnaa baante Satya Kabir.
Satya Kabir kaa baalkaa, paani peeve pataal kaa ||
Nishaanaa maare Kaal ko, bhajo Satyanaam ko.
Paavo sukhdhaam ko, meto Jam jaal ko ||`,
};

interface DivineDarshanModuleProps {
  language: Language;
  onClose: () => void;
  onOpenBlessing?: (title?: string, message?: string) => void;
  onOpenSettings?: () => void;
}

export const DivineDarshanModule: React.FC<DivineDarshanModuleProps> = ({
  language: propLanguage,
  onClose,
  onOpenBlessing,
}) => {
  const { theme } = useAppTheme();
  const { language: contextLanguage, setLanguage } = useLanguage();
  const language: Language = contextLanguage || propLanguage || 'hi';

  const [isAdmin, setIsAdmin] = useState<boolean>(() => isAdminAuthenticated());
  const [isFirebaseAdmin, setIsFirebaseAdmin] = useState<boolean>(() => isFirebaseAdminSessionActive());
  const [flowerCount, setFlowerCount] = useState<number>(() => {
    try {
      return parseInt(localStorage.getItem('sahebworld_darshan_flowers') || '0', 10);
    } catch {
      return 0;
    }
  });

  const [fallingPetals, setFallingPetals] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [portraitState, setPortraitState] = useState<DarshanPortraitState>(() => getCustomDarshanState());
  const fileInputRef = useRef<HTMLInputElement>(null);
  const galleryInputRef = useRef<HTMLInputElement>(null);

  // Shloka Dhyanam & Vinti Visibility + Deep Meaning Toggles
  const [showDhyanShloka, setShowDhyanShloka] = useState<boolean>(true);
  const [showDhyanMeaning, setShowDhyanMeaning] = useState<boolean>(false);
  const [showVinti, setShowVinti] = useState<boolean>(true);
  const [showVintiMeaning, setShowVintiMeaning] = useState<boolean>(false);
  const [speakingSection, setSpeakingSection] = useState<'dhyan' | 'vinti' | null>(null);
  const [copiedSection, setCopiedSection] = useState<'dhyan' | 'vinti' | null>(null);

  // Admin-Published Sacred Darshan Gallery Images
  const [galleryImages, setGalleryImages] = useState<SacredMediaItem[]>([]);
  const [isUploadingGallery, setIsUploadingGallery] = useState<boolean>(false);

  useEffect(() => {
    const handleAuthChange = () => {
      setIsAdmin(isAdminAuthenticated());
      setIsFirebaseAdmin(isFirebaseAdminSessionActive());
    };
    window.addEventListener('sahebworld:admin-auth-change', handleAuthChange);
    const unsubscribe = subscribeToCustomPortraitState((next) => {
      setPortraitState(next);
    });
    const unsubscribeMedia = subscribeToSacredMedia((items) => {
      setGalleryImages(items.filter((it) => it.mediaType === 'image'));
    });
    return () => {
      window.removeEventListener('sahebworld:admin-auth-change', handleAuthChange);
      unsubscribe();
      unsubscribeMedia();
      speechReciter.stop();
    };
  }, []);

  useEffect(() => {
    speechReciter.stop();
    setSpeakingSection(null);
  }, [language]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isAdmin) {
      showToast(language === 'hi' ? 'केवल एडमिन पावन स्वरूप बदल सकते हैं।' : 'Only Admin can change the portrait.');
      return;
    }
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;

    setIsUploading(true);
    try {
      const compressedDataUrl = await compressDarshanImage(file);
      const res = await publishAdminDarshanPortrait(compressedDataUrl, portraitState.objectFit);
      if (res.syncedToCloud) {
        showToast(
          language === 'pb'
            ? '✓ ਪਾਵਨ ਸਰੂਪ ਸਫਲਤਾਪੂਰਵਕ ਸੁਰੱਖਿਅਤ ਤੇ ਗਲੋਬਲ ਸਿੰਕ ਹੋ ਗਿਆ'
            : language === 'en'
            ? '✓ Sacred portrait updated & synced for all devotees'
            : '✓ पावन स्वरूप सफलतापूर्वक सेव एवं सभी भक्तों हेतु वैश्विक सिंक हो गया'
        );
      } else if (res.needsGoogleAdminSignIn) {
        showToast(
          language === 'pb'
            ? 'ਡਿਵਾਈਸ ਤੇ ਸੁਰੱਖਿਅਤ ਹੈ — ਗਲੋਬਲ ਸਿੰਕ ਲਈ Google Admin ਸਾਈਨ-ਇਨ ਕਰੋ'
            : language === 'en'
            ? 'Saved on this device — Sign in with Admin Google account to sync globally'
            : 'इस डिवाइस पर सेव हो गया — सभी के लिए सिंक करने हेतु ऊपर Google एडमिन साइन-इन करें'
        );
      } else {
        showToast(res.error || (language === 'hi' ? 'पावन स्वरूप अपडेट हुआ' : 'Portrait updated'));
      }
    } catch (err: any) {
      showToast(
        err?.message ||
          (language === 'hi' ? 'छवि संसाधित करने में त्रुटि, कृपया छोटी छवि चुनें।' : 'Unable to process image file.')
      );
    } finally {
      setIsUploading(false);
    }
  };

  const handleAdminGoogleSync = async () => {
    if (!isAdmin) return;
    try {
      const user = await signInWithGoogle();
      setIsFirebaseAdmin(isFirebaseAdminSessionActive());
      if (user?.email && isAuthorizedAdminEmail(user.email)) {
        if (portraitState.imageData) {
          const res = await publishAdminDarshanPortrait(portraitState.imageData, portraitState.objectFit);
          if (res.syncedToCloud) {
            showToast(
              language === 'pb'
                ? '✓ Google ਐਡਮਿਨ ਪ੍ਰਮਾਣਿਤ ਅਤੇ ਪਾਵਨ ਸਰੂਪ ਗਲੋਬਲ ਸਿੰਕ ਹੋ ਗਿਆ'
                : language === 'en'
                ? '✓ Admin Google verified & sacred portrait synced globally!'
                : '✓ Google एडमिन प्रमाणित — पावन स्वरूप सभी के लिए वैश्विक सिंक हो गया!'
            );
            return;
          }
        }
        showToast(language === 'hi' ? '✓ Google एडमिन सत्र सक्रिय हो गया' : '✓ Admin Google session active');
      } else {
        showToast(
          language === 'hi'
            ? 'कृपया अधिकृत एडमिन ईमेल (smongia76@gmail.com) से साइन-इन करें।'
            : 'Please sign in with the authorized admin email (smongia76@gmail.com).'
        );
      }
    } catch {
      showToast(
        language === 'hi'
          ? 'पॉप-अप ब्लॉक हुआ या रद्द किया गया। कृपया नए टैब में Google साइन-इन आज़माएं।'
          : 'Google Sign-In popup cancelled or blocked in preview frame.'
      );
    }
  };

  const handleToggleObjectFit = async (fit: DarshanObjectFit) => {
    if (!isAdmin) return;
    await updateAdminDarshanObjectFit(fit);
    showToast(
      fit === 'contain'
        ? language === 'hi'
          ? '✓ पूर्ण चित्र फ़िट (बिना कटे) लागू'
          : '✓ Full portrait fit (uncropped)'
        : language === 'hi'
        ? '✓ फ़्रेम भरें (Cover) लागू'
        : '✓ Frame fill (Cover) applied'
    );
  };

  const handleResetImage = async () => {
    if (!isAdmin) return;
    await resetAdminDarshanPortrait();
    showToast(
      language === 'pb'
        ? 'ਮੂਲ ਸਥਾਨ ਰੀਸੈੱਟ ਹੋ ਗਿਆ'
        : language === 'en'
        ? 'Reset to sacred emblem'
        : 'पावन ध्यान प्रतीक पर रीसेट किया गया'
    );
  };

  const handleOfferFlowers = () => {
    sacredHaptics.mediumTap();
    const newCount = flowerCount + 1;
    setFlowerCount(newCount);
    try {
      localStorage.setItem('sahebworld_darshan_flowers', newCount.toString());
    } catch {}

    const newPetals = Array.from({ length: 18 }, (_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 90 + 5,
      delay: Math.random() * 0.4,
      duration: 2.5 + Math.random() * 1.5,
    }));
    setFallingPetals(newPetals);
    setTimeout(() => setFallingPetals([]), 4500);

    if (onOpenBlessing) {
      onOpenBlessing(
        language === 'pb'
          ? 'ਫੁੱਲ ਅਰਪਣ ਤੇ ਸਤਿਗੁਰੂ ਪਾਵਨ ਅਸੀਸ'
          : language === 'en'
          ? 'Offer Flowers & Satguru Sacred Blessing'
          : 'पुष्प अर्पण एवं सतगुरु पावन आशीष',
        language === 'pb'
          ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੇ ਪਾਵਨ ਚਰਨਾਂ ਵਿੱਚ ਕੋਟਿ-ਕੋਟਿ ਪ੍ਰਣਾਮ।'
          : language === 'en'
          ? 'Infinite salutations at the sacred feet of Satguru Kabir Saheb.'
          : 'सतगुरु कबीर साहेब के पावन चरणों में कोटि-कोटि वंदना।'
      );
    }
  };

  const handlePranamChant = () => {
    sacredHaptics.lightTap();
    const textToSpeak =
      language === 'pb'
        ? 'ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ। ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਕੀ ਜੈ।'
        : language === 'en'
        ? 'Saheb Bandgi Saheb. Victory to Bandichhor Satguru Kabir Saheb.'
        : 'साहेब बंदगी साहेब। बंदीछोड़ सतगुरु कबीर साहेब की जय।';
    speechReciter.speak(textToSpeak, language);
  };

  const handleToggleRecite = (section: 'dhyan' | 'vinti', text: string) => {
    sacredHaptics.lightTap();
    if (speakingSection === section) {
      speechReciter.stop();
      setSpeakingSection(null);
      return;
    }
    setSpeakingSection(section);
    speechReciter.speak(
      text,
      language,
      () => setSpeakingSection(null),
      () => setSpeakingSection(null)
    );
  };

  const handleCopySacredText = async (section: 'dhyan' | 'vinti', title: string, text: string) => {
    sacredHaptics.lightTap();
    const opening =
      language === 'pb' ? '।। ਸਤਯਨਾਮ ।।' : language === 'en' ? '|| Satyanaam ||' : '।। सत्यनाम ।।';
    const closing =
      language === 'pb'
        ? '।। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ ।।'
        : language === 'en'
        ? '|| Saheb Bandagi Saheb ||'
        : '।। साहेब बंदगी साहेब ।।';
    const formatted = `${opening}\n\n${title}\n\n${text}\n\n${closing}`;
    try {
      await navigator.clipboard.writeText(formatted);
      setCopiedSection(section);
      sacredHaptics.successVibration();
      setTimeout(() => setCopiedSection(null), 2200);
    } catch {
      showToast(
        language === 'pb'
          ? 'ਕਾਪੀ ਕਰਨ ਵਿੱਚ ਗਲਤੀ ਹੋਈ'
          : language === 'en'
          ? 'Unable to copy text'
          : 'कॉपी करने में त्रुटि हुई'
      );
    }
  };

  const handleUploadGalleryImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isAdmin) return;
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    setIsUploadingGallery(true);
    try {
      const cleanName = file.name.replace(/\.[^/.]+$/, '').replace(/[_-]+/g, ' ').trim() || 'पावन दर्शन चित्र';
      const res = await publishAdminSacredMedia({
        mediaType: 'image',
        title: cleanName,
        category: 'पावन दर्शन गैलरी',
        description: 'अधिकृत एडमिन द्वारा प्रकाशित सतगुरु कबीर साहेब पावन दर्शन चित्र',
        file,
      });
      if (res.success) {
        showToast('✓ पावन चित्र गैलरी में सुरक्षित व सार्वजनिक रूप से प्रकाशित हो गया!');
      } else {
        showToast(res.error || 'चित्र अपलोड विफल रहा');
      }
    } catch (err: any) {
      showToast(err?.message || 'चित्र अपलोड करने में त्रुटि');
    } finally {
      setIsUploadingGallery(false);
    }
  };

  const handleDeleteGalleryImage = async (mediaId: string) => {
    if (!isAdmin) return;
    const res = await deleteAdminSacredMedia(mediaId);
    if (res.success) {
      showToast('✓ चित्र गैलरी से हटाया गया');
    } else {
      showToast(res.error || 'चित्र हटाने में त्रुटि');
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 pb-12 relative animate-fadeIn select-none">
      {/* Falling Flower Petals Shower Effect */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {fallingPetals.map((petal) => (
          <motion.div
            key={petal.id}
            initial={{ y: -40, opacity: 1, rotate: 0 }}
            animate={{ y: '100vh', opacity: [1, 0.9, 0], rotate: 360 }}
            transition={{ duration: petal.duration, delay: petal.delay, ease: 'easeOut' }}
            style={{ left: `${petal.left}%` }}
            className="absolute text-xl sm:text-2xl"
          >
            🌸
          </motion.div>
        ))}
      </div>

      {/* Main Darshan Card */}
      <div
        style={{
          backgroundColor: theme.cardBg,
          borderColor: theme.cardBorder,
          color: theme.textPrimary,
        }}
        className="rounded-3xl border-2 p-4 sm:p-7 shadow-2xl space-y-6 relative overflow-hidden backdrop-blur-md"
      >
        {/* Top Header Bar */}
        <div
          style={{ borderColor: theme.cardBorder, backgroundColor: theme.stepActiveBg }}
          className="border-b -mx-4 -mt-4 sm:-mx-7 sm:-mt-7 p-4 sm:p-5 relative flex flex-col gap-4"
        >
          {/* Top Row: Language Toggles, Pranam and Back Button */}
          <div className="flex items-center justify-between gap-3">
            <div
              className="flex items-center gap-1 z-10 p-0.5 rounded-md border"
              style={{
                backgroundColor: theme.bgSecondary,
                borderColor: theme.cardBorder,
              }}
            >
              {(['hi', 'pb', 'en'] as Language[]).map((lang) => {
                const isSelected = language === lang;
                return (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    style={{
                      backgroundColor: isSelected ? theme.buttonPrimaryBg : 'transparent',
                      color: isSelected ? theme.buttonPrimaryText : theme.textPrimary,
                    }}
                    className={`px-2 py-0.5 rounded text-[10px] font-bold transition cursor-pointer ${
                      isSelected ? 'font-black shadow-xs' : 'hover:opacity-90'
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2 z-10">
              <button
                onClick={handlePranamChant}
                className="p-2 sm:px-3 sm:py-2 rounded-xl flex items-center gap-1.5 font-bold font-serif text-xs sm:text-sm border transition-all cursor-pointer hover:scale-105 active:scale-95 shadow-2xs"
                style={{
                  backgroundColor: theme.accentGoldLight,
                  borderColor: theme.accentGold,
                  color: theme.sacredMaroon,
                }}
                title={language === 'pb' ? 'ਨਮਨ ਵਾਣੀ' : language === 'en' ? 'Salutation Chant' : 'नमन वाणी'}
              >
                <span className="hidden sm:inline">{language === 'pb' ? 'ਨਮਨ' : language === 'en' ? 'Salutation' : 'नमन'}</span>
                <Volume2 className="w-4 h-4" />
              </button>

              <button
                onClick={onClose}
                className="px-3 py-2 rounded-xl flex items-center justify-center border transition-all cursor-pointer hover:scale-105 active:scale-95 shadow-2xs gap-2"
                style={{
                  backgroundColor: theme.cardBg,
                  borderColor: theme.accentGold,
                  color: theme.sacredMaroon,
                }}
                title={language === 'pb' ? 'ਪਿੱਛੇ' : language === 'en' ? 'Back' : 'वापस'}
                aria-label="Go Back"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-bold text-xs sm:text-sm">
                  {language === 'pb' ? 'ਵਾਪਸ ਜਾਓ' : language === 'en' ? 'Go Back' : 'वापस आएं'}
                </span>
              </button>
            </div>
          </div>

          {/* Satyanaam Badge Below Header */}
          <div className="flex items-center justify-center">
            <div
              style={{ color: theme.sacredMaroon }}
              className="flex flex-row items-center justify-center gap-3 sm:gap-5 text-lg sm:text-xl md:text-2xl font-black tracking-normal font-serif drop-shadow-xs"
            >
              <span className="shrink-0 text-xl sm:text-2xl select-none" aria-hidden="true">🌹</span>
              <span className="whitespace-nowrap">
                {language === 'pb' ? '।। ਸਤਯਨਾਮ ।।' : language === 'en' ? '|| Satyanaam ||' : '।। सत्यनाम ।।'}
              </span>
              <span className="shrink-0 text-xl sm:text-2xl select-none" aria-hidden="true">🌹</span>
            </div>
          </div>
        </div>

        {/* Toast Alert */}
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            style={{
              backgroundColor: theme.accentGoldLight,
              borderColor: theme.accentGold,
              color: theme.sacredMaroon,
            }}
            className="p-3 rounded-2xl border text-center font-bold text-xs sm:text-sm shadow-sm"
          >
            {toastMessage}
          </motion.div>
        )}

        {/* Admin Status Banner (STRICTLY ONLY visible when Admin is authenticated) */}
        {isAdmin && (
          <div
            style={{
              backgroundColor: theme.mode === 'mystic_dark' ? '#1E293B' : '#ECFDF5',
              borderColor: '#10B981',
            }}
            className="p-3.5 sm:p-4 rounded-2xl border-2 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fadeIn"
          >
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <h5 className="text-xs sm:text-sm font-black font-serif text-emerald-950 dark:text-emerald-200 flex items-center gap-1.5">
                  <span>👑 सतगुरु साहेब एडमिन मोड सक्रिय (Admin Authorized)</span>
                </h5>
                <p className="text-[0.6875rem] text-emerald-900/80 dark:text-emerald-300/80 font-serif">
                  {isFirebaseAdmin
                    ? '✓ Google एडमिन क्लाउड सिंक सक्रिय — आपका अपलोड सभी भक्तों और APK में दिखाई देगा।'
                    : 'केवल आप (एडमिन) पावन स्वरूप बदल सकते हैं। सभी उपकरणों हेतु क्लाउड सिंक के लिए Google साइन-इन करें।'}
                </p>
              </div>
            </div>

            {!isFirebaseAdmin && (
              <button
                type="button"
                onClick={handleAdminGoogleSync}
                className="px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold font-serif flex items-center gap-1.5 shrink-0 cursor-pointer shadow-xs transition"
              >
                <Cloud className="w-3.5 h-3.5" />
                <span>Google एडमिन सिंक</span>
              </button>
            )}
          </div>
        )}

        {/* Central Darshan Frame */}
        <div className="flex flex-col items-center justify-center text-center space-y-4 pt-2">
          <div className="text-center pt-1 pb-1">
            <h1
              style={{ color: theme.sacredMaroon }}
              className="text-xl sm:text-2xl md:text-3xl font-black font-serif tracking-wide leading-tight"
            >
              {language === 'pb'
                ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦਿਵਯ ਪਾਵਨ ਦਰਸ਼ਨ'
                : language === 'en'
                ? 'Satguru Kabir Saheb Divine Sacred Darshan'
                : 'सतगुरु कबीर साहेब दिव्य पावन दर्शन'}
            </h1>
          </div>

          {/* Hidden File Input strictly gated for Admin */}
          {isAdmin && (
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept="image/jpeg,image/png,image/webp,image/*"
              className="hidden"
            />
          )}

          {/* Sanctum Sacred Card — Zero App Icon Fallback */}
          <div
            style={{ borderColor: theme.accentGold, backgroundColor: theme.bgSecondary }}
            className="relative w-full max-w-md aspect-[4/5] sm:aspect-[3/4] rounded-3xl border-2 shadow-xl overflow-hidden flex flex-col items-center justify-center p-3 group backdrop-blur-md"
          >
            {portraitState.imageData ? (
              <div className="relative w-full h-full rounded-2xl overflow-hidden flex items-center justify-center bg-gradient-to-b from-[#2A180B] via-[#3A2210] to-[#1F1208] shadow-inner border border-amber-500/40">
                <img
                  src={portraitState.imageData}
                  alt="Satguru Kabir Saheb Divine Swaroop"
                  className={`w-full h-full ${portraitState.objectFit === 'cover' ? 'object-cover' : 'object-contain'} rounded-xl select-none`}
                />
              </div>
            ) : (
              <div
                style={{
                  background: theme.mode === 'mystic_dark' || theme.mode === 'amrit_neel' || theme.mode === 'flow_state'
                    ? 'radial-gradient(circle at center, rgba(217, 119, 6, 0.22) 0%, rgba(24, 16, 10, 0.96) 75%)'
                    : 'radial-gradient(circle at center, #FFFDF5 0%, #FDF2D0 55%, #F5DFB0 100%)',
                  borderColor: theme.accentGold,
                }}
                className="relative w-full h-full rounded-2xl overflow-hidden flex flex-col items-center justify-center p-6 text-center shadow-inner border border-amber-500/40"
              >
                {/* Sacred Golden Lotus Sanctuary Emblem (Clean SVG, never app icon) */}
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center mb-4">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-amber-500/50 animate-spin-slow" />
                  <div className="absolute inset-3 rounded-full bg-amber-400/15 blur-md" />
                  <svg
                    viewBox="0 0 120 120"
                    className="w-24 h-24 sm:w-28 sm:h-28 text-amber-600 dark:text-amber-400 drop-shadow-md relative z-10"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle cx="60" cy="60" r="52" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                    <circle cx="60" cy="60" r="40" stroke="currentColor" strokeWidth="1.5" opacity="0.65" />
                    <path
                      d="M60 20 C67 34, 72 44, 60 58 C48 44, 53 34, 60 20 Z"
                      fill="currentColor"
                      opacity="0.85"
                    />
                    <path
                      d="M60 58 C74 44, 88 46, 94 58 C82 68, 70 66, 60 58 Z"
                      fill="currentColor"
                      opacity="0.7"
                    />
                    <path
                      d="M60 58 C46 44, 32 46, 26 58 C38 68, 50 66, 60 58 Z"
                      fill="currentColor"
                      opacity="0.7"
                    />
                    <path
                      d="M36 74 C44 64, 52 64, 60 72 C68 64, 76 64, 84 74 C76 88, 66 94, 60 96 C54 94, 44 88, 36 74 Z"
                      fill="currentColor"
                      opacity="0.5"
                    />
                    <circle cx="60" cy="58" r="5" fill="#FFFDF7" />
                  </svg>
                </div>

                <p
                  style={{ color: theme.sacredMaroon }}
                  className="text-lg sm:text-xl font-black font-serif tracking-wide"
                >
                  {language === 'pb'
                    ? '।। ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ।।'
                    : language === 'en'
                    ? '|| Satguru Kabir Saheb ||'
                    : '।। सतगुरु कबीर साहेब ।।'}
                </p>
                <p
                  style={{ color: theme.textSecondary }}
                  className="text-xs sm:text-sm font-serif mt-2 max-w-xs leading-relaxed opacity-85"
                >
                  {language === 'pb'
                    ? 'ਦਿਵਯ ਪਾਵਨ ਧਿਆਨ ਸਰੂਪ — ਅਧਿਕਾਰਤ ਐਡਮਿਨ ਵੱਲੋਂ ਪਾਵਨ ਚਿੱਤਰ ਪ੍ਰਕਾਸ਼ਿਤ ਹੋਣ ਦੀ ਉਡੀਕ ਵਿੱਚ।'
                    : language === 'en'
                    ? 'Sacred contemplation sanctuary — awaiting authorized Admin publication of Satguru Kabir Saheb portrait.'
                    : 'पावन ध्यान एवं दर्शन स्थल — अधिकृत एडमिन द्वारा सतगुरु कबीर साहेब का पावन स्वरूप स्थापित किए जाने हेतु सुरक्षित।'}
                </p>
              </div>
            )}

            <div className="absolute inset-0 rounded-3xl ring-1 ring-amber-400/30 pointer-events-none" />
          </div>

          {/* STRICTLY ADMIN-ONLY Upload, Fit & Reset Controls */}
          {isAdmin ? (
            <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
              <button
                type="button"
                disabled={isUploading}
                onClick={() => fileInputRef.current?.click()}
                style={{
                  backgroundColor: theme.accentGoldLight,
                  borderColor: theme.accentGold,
                  color: theme.sacredMaroon,
                }}
                className="min-h-[44px] px-4 py-2 rounded-xl border-2 font-bold font-serif text-xs sm:text-sm flex items-center gap-2 hover:scale-105 active:scale-95 transition cursor-pointer shadow-xs disabled:opacity-60"
              >
                <Upload className="w-4 h-4 text-amber-700" />
                <span>
                  {isUploading
                    ? language === 'hi'
                      ? 'अपलोड हो रहा है...'
                      : 'Uploading...'
                    : language === 'pb'
                    ? 'ਪਾਵਨ ਸਰੂਪ ਅੱਪਲੋਡ / ਬਦਲੋ'
                    : language === 'en'
                    ? 'Upload / Change Swaroop'
                    : 'पावन स्वरूप अपलोड / बदलें'}
                </span>
              </button>

              {portraitState.imageData && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      handleToggleObjectFit(portraitState.objectFit === 'contain' ? 'cover' : 'contain')
                    }
                    style={{
                      backgroundColor: theme.cardBg,
                      borderColor: theme.cardBorder,
                      color: theme.textPrimary,
                    }}
                    className="min-h-[44px] px-3 py-2 rounded-xl border font-bold text-xs flex items-center gap-1.5 hover:bg-black/5 transition cursor-pointer"
                  >
                    {portraitState.objectFit === 'contain' ? (
                      <>
                        <Maximize2 className="w-3.5 h-3.5 text-amber-600" />
                        <span>{language === 'hi' ? 'फ़्रेम भरें (Cover)' : 'Fill Frame'}</span>
                      </>
                    ) : (
                      <>
                        <Minimize2 className="w-3.5 h-3.5 text-amber-600" />
                        <span>{language === 'hi' ? 'पूर्ण चित्र (Contain)' : 'Fit Full'}</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleResetImage}
                    style={{
                      backgroundColor: theme.cardBg,
                      borderColor: theme.cardBorder,
                      color: theme.textSecondary,
                    }}
                    className="min-h-[44px] px-3 py-2 rounded-xl border font-bold text-xs flex items-center gap-1.5 hover:bg-black/5 transition cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>{language === 'pb' ? 'ਰੀਸੈੱਟ' : language === 'en' ? 'Reset' : 'रीसेट'}</span>
                  </button>
                </>
              )}
            </div>
          ) : (
            <p className="text-xs font-serif opacity-75 italic max-w-md px-2">
              {language === 'pb'
                ? '🔒 ਇਹ ਪਾਵਨ ਦਰਸ਼ਨ ਸਥਾਨ ਸਰਵਜਨਕ ਤੌਰ ਤੇ ਸੁਰੱਖਿਅਤ (Read-Only) ਹੈ। ਕੇਵਲ ਅਧਿਕਾਰਤ ਐਡਮਿਨ ਹੀ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦਾ ਸਰੂਪ ਸਥਾਪਿਤ ਜਾਂ ਬਦਲ ਸਕਦੇ ਹਨ।'
                : language === 'en'
                ? '🔒 This sacred darshan frame is read-only for visitors. Only the Authorized Admin can set or change Satguru Kabir Saheb’s portrait.'
                : '🔒 यह पावन दर्शन स्थल सभी साधकों हेतु सुरक्षित (Read-Only) है। केवल अधिकृत एडमिन ही सतगुरु कबीर साहेब का पावन स्वरूप स्थापित या परिवर्तित कर सकते हैं।'}
            </p>
          )}

          {/* Sacred Mantra & Offer Flowers Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={handleOfferFlowers}
              style={{
                backgroundColor: theme.buttonPrimaryBg,
                color: theme.buttonPrimaryText,
              }}
              className="px-6 py-3 rounded-2xl font-bold font-serif text-sm sm:text-base flex items-center gap-2.5 shadow-lg hover:scale-105 active:scale-95 transition cursor-pointer"
            >
              <Flower2 className="w-5 h-5 animate-pulse" />
              <span>
                {language === 'pb'
                  ? `ਪੁਸ਼ਪ ਅਰਪਣ ਕਰੋ (${flowerCount})`
                  : language === 'en'
                  ? `Offer Flowers (${flowerCount})`
                  : `पुष्प अर्पण करें (${flowerCount})`}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* SACRED SHLOKA DHYANAM (श्लोक ध्यानं) WITH SHOW/HIDE & DEEP MEANING    */}
      {/* ===================================================================== */}
      <div
        style={{ backgroundColor: theme.cardBg, borderColor: theme.accentGold, color: theme.textPrimary }}
        className="rounded-3xl border-2 p-5 sm:p-7 shadow-xl space-y-4 backdrop-blur-md"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b pb-3.5" style={{ borderColor: theme.cardBorder }}>
          <div className="flex items-center gap-3">
            <div
              style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.accentGold, color: theme.sacredMaroon }}
              className="w-10 h-10 rounded-2xl border flex items-center justify-center shrink-0"
            >
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 style={{ color: theme.sacredMaroon }} className="text-lg sm:text-xl font-black font-serif">
                {language === 'pb'
                  ? '🙏 ਸ਼ਲੋਕ ਧਿਆਨੰ (ਸਤਿਗੁਰੂ ਸਰੂਪ ਧਿਆਨ)'
                  : language === 'en'
                  ? '🙏 Shloka Dhyanam (Sacred Form Contemplation)'
                  : '🙏 श्लोक ध्यानं (सतगुरु स्वरूप ध्यान स्तुति)'}
              </h2>
              <p className="text-xs font-serif opacity-90" style={{ color: theme.textSecondary }}>
                {language === 'pb'
                  ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੇ ਸ਼ਵੇਤ-ਮੰਗਲ ਸਰੂਪ ਦਾ ਪਾਵਨ ਧਿਆਨ'
                  : language === 'en'
                  ? 'Meditative invocation of Satguru Kabir Saheb’s pure luminous white form'
                  : 'सतगुरु कबीर साहेब के श्वेत-मंगल, करुणामय दिव्य स्वरूप का पावन ध्यान'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              type="button"
              onClick={() => handleToggleRecite('dhyan', SHLOKA_DHYANAM_TEXT[language])}
              style={{
                backgroundColor: speakingSection === 'dhyan' ? theme.buttonPrimaryBg : theme.bgSecondary,
                borderColor: speakingSection === 'dhyan' ? theme.buttonPrimaryBg : theme.cardBorder,
                color: speakingSection === 'dhyan' ? theme.buttonPrimaryText : theme.textPrimary,
              }}
              className="min-h-[40px] px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 hover:scale-105 transition cursor-pointer"
            >
              {speakingSection === 'dhyan' ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" style={{ color: theme.accentGold }} />}
              <span>
                {speakingSection === 'dhyan'
                  ? language === 'pb'
                    ? 'ਰੋਕੋ'
                    : language === 'en'
                    ? 'Stop'
                    : 'रोकें'
                  : language === 'pb'
                  ? 'ਸੁਣੋ'
                  : language === 'en'
                  ? 'Listen'
                  : 'सुनें'}
              </span>
            </button>

            <button
              type="button"
              onClick={() =>
                handleCopySacredText(
                  'dhyan',
                  language === 'pb' ? 'ਸ਼ਲੋਕ ਧਿਆਨੰ' : language === 'en' ? 'Shloka Dhyanam' : 'श्लोक ध्यानं',
                  SHLOKA_DHYANAM_TEXT[language]
                )
              }
              style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder, color: theme.textPrimary }}
              className="min-h-[40px] px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 hover:scale-105 transition cursor-pointer"
            >
              {copiedSection === 'dhyan' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-amber-600" />}
              <span>
                {copiedSection === 'dhyan'
                  ? language === 'pb'
                    ? 'ਕਾਪੀ ਹੋਇਆ'
                    : language === 'en'
                    ? 'Copied'
                    : 'कॉपी हुआ'
                  : language === 'pb'
                  ? 'ਕਾਪੀ'
                  : language === 'en'
                  ? 'Copy'
                  : 'कॉपी'}
              </span>
            </button>

            <button
              type="button"
              onClick={() => {
                sacredHaptics.lightTap();
                setShowDhyanShloka(!showDhyanShloka);
              }}
              style={{
                backgroundColor: theme.accentGoldLight,
                borderColor: theme.accentGold,
                color: theme.sacredMaroon,
              }}
              className="min-h-[40px] px-3.5 py-1.5 rounded-xl border text-xs font-black font-serif flex items-center gap-1.5 hover:scale-105 transition cursor-pointer shadow-xs"
            >
              {showDhyanShloka ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              <span>
                {showDhyanShloka
                  ? language === 'pb'
                    ? 'ਲੁਕਾਓ'
                    : language === 'en'
                    ? 'Hide Shloka'
                    : 'छुपाओ (Hide)'
                  : language === 'pb'
                  ? 'ਦਿਖਾਓ'
                  : language === 'en'
                  ? 'Show Shloka'
                  : 'दिखाओ (Show)'}
              </span>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {showDhyanShloka && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-4 overflow-hidden"
            >
              <div
                style={{ backgroundColor: theme.bgSecondary, borderColor: theme.borderOrnament }}
                className="p-4 sm:p-6 rounded-2xl border text-center space-y-3"
              >
                <p
                  style={{ color: theme.sacredMaroon }}
                  className="font-serif font-bold text-sm sm:text-lg leading-loose whitespace-pre-line tracking-wide"
                >
                  {SHLOKA_DHYANAM_TEXT[language]}
                </p>

                <div className="pt-2 flex justify-center">
                  <button
                    type="button"
                    onClick={() => {
                      sacredHaptics.lightTap();
                      setShowDhyanMeaning(!showDhyanMeaning);
                    }}
                    style={{
                      backgroundColor: theme.accentGoldLight,
                      borderColor: theme.accentGold,
                      color: theme.sacredMaroon,
                    }}
                    className="min-h-[40px] px-4 py-2 rounded-xl border text-xs sm:text-sm font-serif font-bold flex items-center gap-2 hover:scale-105 transition cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>
                      {showDhyanMeaning
                        ? language === 'pb'
                          ? 'ਗਹਿਰਾ ਅਧਿਆਤਮਿਕ ਭਾਵਾਰਥ ਲੁਕਾਓ'
                          : language === 'en'
                          ? 'Hide Deep Spiritual Meaning'
                          : 'गहन आध्यात्मिक भावार्थ छुपाओ'
                        : language === 'pb'
                        ? 'ਗਹਿਰਾ ਅਧਿਆਤਮਿਕ ਭਾਵਾਰਥ ਦਿਖਾਓ'
                        : language === 'en'
                        ? 'Show Deep Spiritual Meaning'
                        : 'गहन आध्यात्मिक भावार्थ दिखाओ'}
                    </span>
                    {showDhyanMeaning ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <AnimatePresence>
                {showDhyanMeaning && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.accentGold }}
                    className="p-4 sm:p-5 rounded-2xl border space-y-3 text-left font-serif text-xs sm:text-sm leading-relaxed"
                  >
                    <h4 style={{ color: theme.sacredMaroon }} className="font-black text-sm sm:text-base flex items-center gap-2">
                      <span>🪔</span>
                      <span>
                        {language === 'pb'
                          ? 'ਸ਼ਲੋਕ ਧਿਆਨੰ ਦਾ ਗਹਿਰਾ ਅਧਿਆਤਮਿਕ ਭਾਵਾਰਥ:'
                          : language === 'en'
                          ? 'Deep Spiritual Meaning of Shloka Dhyanam:'
                          : 'श्लोक ध्यानं का गहन आध्यात्मिक भावार्थ एवं ध्यान-रहस्य:'}
                      </span>
                    </h4>
                    {language === 'en' ? (
                      <div className="space-y-2" style={{ color: theme.textSecondary }}>
                        <p>
                          <strong>1. Shwetaroop & Shwetambar (Luminous Purity):</strong> White represents the pristine, unstained soul consciousness (<em>Satvik Jyoti</em>) beyond the three gunas and delusion. Contemplating the white-clad Satguru stills restless thoughts and awakens inner clarity.
                        </p>
                        <p>
                          <strong>2. Padmasana, Kundan-Mukut & Tejomaya Vigraha:</strong> Seated stably in lotus posture with radiant crown, garlands of spiritual virtues, and the sacred vertical Tilak (<em>Urdhva Pundra</em> symbolizing upward-rising <em>Surat</em>/awareness), Satguru holds the <em>Yoga-Danda</em> (staff of disciplined restraint).
                        </p>
                        <p>
                          <strong>3. Dhyan Moolam Guru Murti (Essence of Liberation):</strong> True meditation begins by anchoring the mind in Guru’s serene image; worship culminates in surrendering at Guru’s sacred feet; the true mantra is living the Satguru’s spoken truth; and ultimate liberation (<em>Moksha</em>) dawns purely through Guru’s boundless grace.
                        </p>
                      </div>
                    ) : language === 'pb' ? (
                      <div className="space-y-2" style={{ color: theme.textSecondary }}>
                        <p>
                          <strong>੧. ਸ਼ਵੇਤ ਰੂਪ ਅਤੇ ਸ਼ਵੇਤਾਂਬਰ (ਪਰਮ ਪਵਿੱਤਰਤਾ):</strong> ਚਿੱਟਾ ਰੰਗ ਮਾਇਆ ਦੇ ਤਿੰਨਾਂ ਗੁਣਾਂ ਤੋਂ ਪਰੇ ਨਿਰਮਲ, ਅਕਲੰਕ ਆਤਮ-ਜੋਤ ਦਾ ਪ੍ਰਤੀਕ ਹੈ। ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੇ ਸ਼ਵੇਤ ਸ਼ੁਭ੍ਰ ਮੁਕੁਟ, ਪਦਮਾਸਨ ਅਤੇ ਦਇਆ ਦੇ ਸਾਗਰ ਪ੍ਰਸੰਨ ਮੁਖ ਦਾ ਧਿਆਨ ਕਰਨ ਨਾਲ ਮਨ ਦੀ ਚੰਚਲਤਾ ਸ਼ਾਂਤ ਹੁੰਦੀ ਹੈ।
                        </p>
                        <p>
                          <strong>੨. ਸੇਲੀਕੰਠ, ਊਰਧਵ ਤਿਲਕ ਅਤੇ ਯੋਗ-ਦੰਡ:</strong> ਮੱਥੇ ਤੇ ਉੱਪਰ ਵੱਲ ਜਾਂਦਾ ਸ਼ਵੇਤ ਤਿਲਕ ਸਾਡੀ ਸੁਰਤ ਨੂੰ ਸੰਸਾਰ ਤੋਂ ਚੁੱਕ ਕੇ ਦਸਮ ਦੁਆਰ ਵੱਲ ਲੈ ਜਾਣ ਦਾ ਸੰਕੇਤ ਹੈ, ਅਤੇ ਹੱਥ ਵਿੱਚ ਯੋਗ-ਦੰਡ ਇੰਦਰੀਆਂ ਦੇ ਸੰਯਮ ਦਾ ਪ੍ਰਤੀਕ ਹੈ।
                        </p>
                        <p>
                          <strong>੩. ਧਿਆਨ ਮੂਲੰ ਗੁਰੂ ਮੂਰਤਿ:</strong> ਸਾਧਨਾ ਦਾ ਮੂਲ ਸਤਿਗੁਰੂ ਦੇ ਸਰੂਪ ਦਾ ਧਿਆਨ ਹੈ, ਸੱਚੀ ਪੂਜਾ ਗੁਰੂ-ਚਰਨਾਂ ਵਿੱਚ ਸਮਰਪਣ ਹੈ, ਸੱਚਾ ਮੰਤਰ ਸਤਿਗੁਰੂ ਦੇ ਉਪਦੇਸ਼ ਤੇ ਚੱਲਣਾ ਹੈ ਅਤੇ ਅੰਤਮ ਮੋਕਸ਼ ਸਤਿਗੁਰੂ ਦੀ ਕ੍ਰਿਪਾ ਨਾਲ ਹੀ ਪ੍ਰਾਪਤ ਹੁੰਦਾ ਹੈ।
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-2" style={{ color: theme.textSecondary }}>
                        <p>
                          <strong>१. श्वेतरूप एवं श्वेताम्बर (परम निर्मलता का प्रतीक):</strong> 'श्वेत' वर्ण तीनों गुणों (रज, तम, सत) से परे निर्मल, निष्कलंक आत्म-ज्योति का द्योतक है। श्वेत वस्त्रों, हीरा-मोती मण्डित मुकुट और करुणा के सागर प्रसन्न मुखमण्डल का ध्यान करने से मन के समस्त मलिन विकार धुल जाते हैं और भीतर सात्विक शांति जाग्रत होती है।
                        </p>
                        <p>
                          <strong>२. पद्मासन, भाल ऊर्ध्व तिलक एवं योग-दण्ड:</strong> पद्मासन में स्थिर विराजमान सद्गुरु हमें सिखाते हैं कि साधक की बुद्धि और चित्त भी संसार के द्वंद्वों में अडिग रहे। मस्तक पर ऊपर की ओर सुशोभित <strong>ऊर्ध्व तिलक</strong> हमारी <em>सुरति (चेतना)</em> को अधोगति (विषयों) से उठाकर ऊर्ध्वगति (ब्रह्मरंध्र / सत्यनाम) की ओर ले जाने का संकेत है, और हाथों में <strong>योग-दण्ड</strong> संयम व विवेक की शक्ति का प्रतीक है।
                        </p>
                        <p>
                          <strong>३. ध्यान मूलम् गुरु मूर्ति (साधना का चतुःसूत्री सार):</strong> अंत में यह महावाक्य स्पष्ट करता है कि भटकते मन को एकाग्र करने का आधार <em>गुरु की ध्यान-मूर्ति</em> है; सच्ची पूजा <em>गुरु-चरणों की सेवा व नम्रता</em> है; जीवन बदलने वाला सिद्ध मंत्र <em>गुरु का सत्य वचन</em> है; और काल-माया के बंधनों से परम मोक्ष केवल <em>सद्गुरु की अपार करुणा व कृपा</em> से ही प्राप्त होता है।
                        </p>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ===================================================================== */}
      {/* SACRED VINTI (विनती) WITH SHOW/HIDE & DEEP SPIRITUAL MEANING         */}
      {/* ===================================================================== */}
      <div
        style={{ backgroundColor: theme.cardBg, borderColor: theme.accentGold, color: theme.textPrimary }}
        className="rounded-3xl border-2 p-5 sm:p-7 shadow-xl space-y-4 backdrop-blur-md"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b pb-3.5" style={{ borderColor: theme.cardBorder }}>
          <div className="flex items-center gap-3">
            <div
              style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.accentGold, color: theme.sacredMaroon }}
              className="w-10 h-10 rounded-2xl border flex items-center justify-center shrink-0"
            >
              <Flower2 className="w-5 h-5" />
            </div>
            <div>
              <h2 style={{ color: theme.sacredMaroon }} className="text-lg sm:text-xl font-black font-serif">
                {language === 'pb'
                  ? '🪷 ਪਾਵਨ ਵਿਨਤੀ (ਸਤਿਗੁਰੂ ਸ਼ਰਣਾਗਤੀ ਪ੍ਰਾਰਥਨਾ)'
                  : language === 'en'
                  ? '🪷 Sacred Vinti (Prayer of Refuge & Grace)'
                  : '🪷 पावन विनती (सतगुरु करुणा एवं शरणागति प्रार्थना)'}
              </h2>
              <p className="text-xs font-serif opacity-90" style={{ color: theme.textSecondary }}>
                {language === 'pb'
                  ? 'ਸਤਯਨਾਮ ਦੀ ਓਟ, ਕਾਲ-ਜਾਲ ਤੋਂ ਮੁਕਤੀ ਅਤੇ ਸੁਖਧਾਮ ਪ੍ਰਾਪਤੀ ਦੀ ਅਰਦਾਸ'
                  : language === 'en'
                  ? 'Devotional prayer invoking Satyanaam protection and release from illusion'
                  : 'सत्य कबीर गुरु की अपार दया, सत्यनाम के आश्रय एवं जम-जाल से मुक्ति की प्रार्थना'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              type="button"
              onClick={() => handleToggleRecite('vinti', VINTI_TEXT[language])}
              style={{
                backgroundColor: speakingSection === 'vinti' ? theme.buttonPrimaryBg : theme.bgSecondary,
                borderColor: speakingSection === 'vinti' ? theme.buttonPrimaryBg : theme.cardBorder,
                color: speakingSection === 'vinti' ? theme.buttonPrimaryText : theme.textPrimary,
              }}
              className="min-h-[40px] px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 hover:scale-105 transition cursor-pointer"
            >
              {speakingSection === 'vinti' ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" style={{ color: theme.accentGold }} />}
              <span>
                {speakingSection === 'vinti'
                  ? language === 'pb'
                    ? 'ਰੋਕੋ'
                    : language === 'en'
                    ? 'Stop'
                    : 'रोकें'
                  : language === 'pb'
                  ? 'ਸੁਣੋ'
                  : language === 'en'
                  ? 'Listen'
                  : 'सुनें'}
              </span>
            </button>

            <button
              type="button"
              onClick={() =>
                handleCopySacredText(
                  'vinti',
                  language === 'pb' ? 'ਪਾਵਨ ਵਿਨਤੀ' : language === 'en' ? 'Sacred Vinti' : 'पावन विनती',
                  VINTI_TEXT[language]
                )
              }
              style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder, color: theme.textPrimary }}
              className="min-h-[40px] px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 hover:scale-105 transition cursor-pointer"
            >
              {copiedSection === 'vinti' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-amber-600" />}
              <span>
                {copiedSection === 'vinti'
                  ? language === 'pb'
                    ? 'ਕਾਪੀ ਹੋਇਆ'
                    : language === 'en'
                    ? 'Copied'
                    : 'कॉपी हुआ'
                  : language === 'pb'
                  ? 'ਕਾਪੀ'
                  : language === 'en'
                  ? 'Copy'
                  : 'कॉपी'}
              </span>
            </button>

            <button
              type="button"
              onClick={() => {
                sacredHaptics.lightTap();
                setShowVinti(!showVinti);
              }}
              style={{
                backgroundColor: theme.accentGoldLight,
                borderColor: theme.accentGold,
                color: theme.sacredMaroon,
              }}
              className="min-h-[40px] px-3.5 py-1.5 rounded-xl border text-xs font-black font-serif flex items-center gap-1.5 hover:scale-105 transition cursor-pointer shadow-xs"
            >
              {showVinti ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              <span>
                {showVinti
                  ? language === 'pb'
                    ? 'ਲੁਕਾਓ'
                    : language === 'en'
                    ? 'Hide Vinti'
                    : 'छुपाओ (Hide)'
                  : language === 'pb'
                  ? 'ਦਿਖਾਓ'
                  : language === 'en'
                  ? 'Show Vinti'
                  : 'दिखाओ (Show)'}
              </span>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {showVinti && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-4 overflow-hidden"
            >
              <div
                style={{ backgroundColor: theme.bgSecondary, borderColor: theme.borderOrnament }}
                className="p-4 sm:p-6 rounded-2xl border text-center space-y-3"
              >
                <p
                  style={{ color: theme.sacredMaroon }}
                  className="font-serif font-bold text-sm sm:text-lg leading-loose whitespace-pre-line tracking-wide"
                >
                  {VINTI_TEXT[language]}
                </p>

                <div className="pt-2 flex justify-center">
                  <button
                    type="button"
                    onClick={() => {
                      sacredHaptics.lightTap();
                      setShowVintiMeaning(!showVintiMeaning);
                    }}
                    style={{
                      backgroundColor: theme.accentGoldLight,
                      borderColor: theme.accentGold,
                      color: theme.sacredMaroon,
                    }}
                    className="min-h-[40px] px-4 py-2 rounded-xl border text-xs sm:text-sm font-serif font-bold flex items-center gap-2 hover:scale-105 transition cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>
                      {showVintiMeaning
                        ? language === 'pb'
                          ? 'ਗਹਿਰਾ ਅਧਿਆਤਮਿਕ ਭਾਵਾਰਥ ਲੁਕਾਓ'
                          : language === 'en'
                          ? 'Hide Deep Spiritual Meaning'
                          : 'गहन आध्यात्मिक भावार्थ छुपाओ'
                        : language === 'pb'
                        ? 'ਗਹਿਰਾ ਅਧਿਆਤਮਿਕ ਭਾਵਾਰਥ ਦਿਖਾਓ'
                        : language === 'en'
                        ? 'Show Deep Spiritual Meaning'
                        : 'गहन आध्यात्मिक भावार्थ दिखाओ'}
                    </span>
                    {showVintiMeaning ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <AnimatePresence>
                {showVintiMeaning && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.accentGold }}
                    className="p-4 sm:p-5 rounded-2xl border space-y-3 text-left font-serif text-xs sm:text-sm leading-relaxed"
                  >
                    <h4 style={{ color: theme.sacredMaroon }} className="font-black text-sm sm:text-base flex items-center gap-2">
                      <span>✨</span>
                      <span>
                        {language === 'pb'
                          ? 'ਪਾਵਨ ਵਿਨਤੀ ਦਾ ਗਹਿਰਾ ਅਧਿਆਤਮਿਕ ਭਾਵਾਰਥ:'
                          : language === 'en'
                          ? 'Deep Spiritual Meaning of Sacred Vinti:'
                          : 'पावन विनती का गहन आध्यात्मिक भावार्थ:'}
                      </span>
                    </h4>
                    {language === 'en' ? (
                      <div className="space-y-2" style={{ color: theme.textSecondary }}>
                        <p>
                          <strong>1. Balapeer & Innocent Spiritual Child (फकीरी भाव):</strong> True seekers approach Satguru like innocent children—free from arrogance and cunning. In that humble state, the entire family is blessed with inner detachment and spiritual grace.
                        </p>
                        <p>
                          <strong>2. Dry River, Hunger & Nakedness (Inner Renewal):</strong> Spiritually, the "dry river" symbolizes a heart parched by worldly stress and doubt—which Satguru revives with the nectar-stream of <em>Bhakti</em>. Feeding spiritual "kheer" (sweet wisdom) and clothing the soul in virtues removes inner poverty and fear.
                        </p>
                        <p>
                          <strong>3. Drinking Subterranean Water & Defeating Kal (सत्यनाम बाण):</strong> A genuine disciple of Satguru draws inner nourishment directly from deep meditative stillness ("paatal ka paani" — deep spiritual source). By chanting <em>Satyanaam</em>, the arrow of truth pierces fear of death (<em>Kal</em>), shatters the net of illusion (<em>Jam-Jaal</em>), and grants entry to the eternal abode of bliss (<em>Sukh-Dham / Satlok</em>).
                        </p>
                      </div>
                    ) : language === 'pb' ? (
                      <div className="space-y-2" style={{ color: theme.textSecondary }}>
                        <p>
                          <strong>੧. ਬਾਲਾਪੀਰ ਤੇ ਫ਼ਕੀਰੀ ਦਾ ਭਾਵ:</strong> ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਅਜਿਹੇ ਸਮਰੱਥ 'ਬਾਲਾਪੀਰ' ਹਨ ਜਿਨ੍ਹਾਂ ਦੀ ਸ਼ਰਨ ਵਿੱਚ ਆ ਕੇ ਪਰਿਵਾਰ ਦੇ ਬੱਚੇ-ਵੱਡੇ ਸਭ ਹਉਮੈ ਛੱਡ ਕੇ ਨਿਰਛਲ ਫ਼ਕੀਰੀ ਤੇ ਨਿਮਰਤਾ ਧਾਰਨ ਕਰਦੇ ਹਨ।
                        </p>
                        <p>
                          <strong>੨. ਸੁੱਕੀ ਨਦੀ, ਭੁੱਖ ਤੇ ਵਸਤਰ (ਆਤਮਿਕ ਪ੍ਰਤੀਕ):</strong> ਮਨੁੱਖ ਦਾ ਖੁਸ਼ਕ ਤੇ ਚਿੰਤਿਤ ਹਿਰਦਾ 'ਸੁੱਕੀ ਨਦੀ' ਵਾਂਗ ਹੈ, ਜਿਸ ਵਿੱਚ ਸਤਿਗੁਰੂ ਭਗਤੀ ਦਾ ਨੀਰ ਵਹਾ ਦਿੰਦੇ ਹਨ। ਗਿਆਨ-ਭਗਤੀ ਦੀ 'ਖੀਰ' ਨਾਲ ਆਤਮਿਕ ਭੁੱਖ ਮਿਟਾਉਂਦੇ ਹਨ ਅਤੇ ਸਦਗੁਣਾਂ ਦਾ 'ਚੀਰ' (ਵਸਤਰ) ਪਹਿਨਾ ਕੇ ਆਤਮਾ ਦੀ ਇੱਜ਼ਤ ਰੱਖਦੇ ਹਨ।
                        </p>
                        <p>
                          <strong>੩. ਪਾਤਾਲ ਦਾ ਪਾਣੀ ਤੇ ਕਾਲ ਤੇ ਨਿਸ਼ਾਨਾ:</strong> ਸੱਚੇ ਕਬੀਰ-ਬਾਲਕ ਆਪਣੀ ਸੁਰਤ ਨੂੰ ਗਹਿਰੀ ਸਮਾਧੀ (ਅੰਦਰੂਨੀ ਅਥਾਹ ਸਰੋਤ) ਤੋਂ ਤ੍ਰਿਪਤ ਕਰਦੇ ਹਨ। 'ਸਤਯਨਾਮ' ਦੇ ਸਿਮਰਨ ਨਾਲ ਉਹ ਕਾਲ ਦੇ ਭੈਅ ਤੇ ਜਮ ਦੇ ਜਾਲ ਨੂੰ ਕੱਟ ਕੇ ਸਦਾ ਰਹਿਣ ਵਾਲੇ ਸੁਖਧਾਮ (ਸਤਿਲੋਕ) ਨੂੰ ਪ੍ਰਾਪਤ ਕਰਦੇ ਹਨ।
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-2" style={{ color: theme.textSecondary }}>
                        <p>
                          <strong>१. बालापीर एवं निष्कपट फकीरी:</strong> कबीर साहेब बाल-सुलभ सरलता और परम समर्थता के स्वामी हैं। उनकी कृपा से संपूर्ण परिवार में अहंकार व मोह मिटकर संतोष, सेवा और सहज 'फकीरी' (आंतरिक वैराग्य व निर्भयता) का उदय होता है।
                        </p>
                        <p>
                          <strong>२. सूखी नदी, क्षुधा और वस्त्र (गहन आध्यात्मिक प्रतीक):</strong> संसार की चिंता और संशय से सूख चुके हृदय रूपी <em>'सूखी नदी'</em> में सतगुरु भक्ति व प्रेम का अमृत-जल प्रवाहित कर देते हैं। ज्ञान-विवेक रूपी मधुर <em>'खीर'</em> से आत्मा की जन्मों की प्यास बुझाते हैं और सद्गुणों व शील रूपी <em>'चीर'</em> (वस्त्र) पहनाकर जीव की लाज बचाते हैं।
                        </p>
                        <p>
                          <strong>३. पाताल का जल एवं सत्यनाम का अमोघ बाण:</strong> 'सत्य कबीर का बालका, पानी पीवे पताल का' का तात्पर्य है कि सतगुरु का शिष्य उथले दिखावों से नहीं, अपितु गहरी अंतःसाधना के अथाह स्रोत से आत्म-तृप्ति पाता है। <em>'सत्यनाम'</em> के निरंतर भजन से काल (भय/मृत्यु) और माया-मोह का जाल नष्ट हो जाता है तथा साधक सदा आनंदमय <strong>सुखधाम (सतलोक)</strong> का अधिकारी बन जाता है।
                        </p>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ===================================================================== */}
      {/* ADMIN-MANAGED SACRED DARSHAN GALLERY (PUBLIC READ-ONLY, ADMIN WRITE)  */}
      {/* ===================================================================== */}
      {(galleryImages.length > 0 || isAdmin) && (
        <div
          style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder, color: theme.textPrimary }}
          className="rounded-3xl border p-5 sm:p-7 shadow-xl space-y-4 backdrop-blur-md"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b pb-3" style={{ borderColor: theme.cardBorder }}>
            <div className="flex items-center gap-2.5">
              <ImageIcon className="w-5 h-5" style={{ color: theme.accentGold }} />
              <div>
                <h3 style={{ color: theme.sacredMaroon }} className="font-serif font-black text-base sm:text-lg">
                  {language === 'pb'
                    ? '🖼️ ਪਾਵਨ ਦਰਸ਼ਨ ਚਿੱਤਰ ਸੰਗ੍ਰਹਿ (ਗੈਲਰੀ)'
                    : language === 'en'
                    ? '🖼️ Sacred Darshan Image Gallery'
                    : '🖼️ पावन दर्शन चित्र संग्रह (गैलरी)'}
                </h3>
                <p className="text-[11px] font-serif opacity-90" style={{ color: theme.textSecondary }}>
                  {isAdmin
                    ? '👑 एडमिन मोड सक्रिय: आप नए पावन चित्र जोड़ या हटा सकते हैं।'
                    : '🔒 सार्वजनिक रीड-ओनली: केवल अधिकृत एडमिन द्वारा प्रकाशित पावन चित्र।'}
                </p>
              </div>
            </div>

            {isAdmin ? (
              <div>
                <input
                  ref={galleryInputRef}
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/*"
                  onChange={handleUploadGalleryImage}
                  className="hidden"
                />
                <button
                  type="button"
                  disabled={isUploadingGallery}
                  onClick={() => galleryInputRef.current?.click()}
                  style={{ backgroundColor: theme.buttonPrimaryBg, color: theme.buttonPrimaryText }}
                  className="min-h-[40px] px-4 py-2 rounded-xl text-xs font-bold font-serif flex items-center gap-1.5 shadow-sm hover:opacity-95 transition cursor-pointer disabled:opacity-60"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>{isUploadingGallery ? 'अपलोड हो रहा है...' : '+ नया चित्र अपलोड (Admin)'}</span>
                </button>
              </div>
            ) : (
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-stone-500/10 border border-stone-500/20 flex items-center gap-1 opacity-75">
                <Lock className="w-3 h-3" /> Read-Only
              </span>
            )}
          </div>

          {galleryImages.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((imgItem) => (
                <div
                  key={imgItem.id}
                  style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder }}
                  className="rounded-2xl border overflow-hidden shadow-xs flex flex-col"
                >
                  <div className="aspect-[4/3] bg-stone-900 overflow-hidden relative">
                    <img
                      src={imgItem.mediaUrl}
                      alt={imgItem.title}
                      className="w-full h-full object-cover"
                    />
                    {isAdmin && (
                      <button
                        type="button"
                        onClick={() => handleDeleteGalleryImage(imgItem.id)}
                        className="absolute top-2 right-2 p-1.5 rounded-lg bg-red-600/90 hover:bg-red-700 text-white shadow-md cursor-pointer"
                        title="चित्र हटाएं (Admin Only)"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                  <div className="p-3 space-y-1">
                    <h4 className="font-serif font-bold text-xs sm:text-sm truncate" style={{ color: theme.sacredMaroon }}>
                      {imgItem.title}
                    </h4>
                    {imgItem.description && (
                      <p className="text-[11px] opacity-75 line-clamp-2" style={{ color: theme.textSecondary }}>
                        {imgItem.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DivineDarshanModule;
