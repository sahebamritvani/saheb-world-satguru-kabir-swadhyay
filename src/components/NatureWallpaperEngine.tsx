import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  Download, 
  Share2, 
  RotateCcw, 
  Image as ImageIcon, 
  Sliders, 
  Check, 
  Smartphone, 
  Sun, 
  Feather, 
  Type, 
  Volume2,
  Maximize2,
  X,
  ChevronDown,
  Languages
} from 'lucide-react';
import { Sakhi, Language, SACRED_BRANDING } from '../types';
import { translations } from '../data/translations';
import { sakhisDatabase } from '../data/sakhis';
import { SggsKabirVerse, FALLBACK_HUKAMNAMA_VERSE } from '../data/sggsKabirMetadata';
import { satyanaamAudio } from '../services/audioDhun';
import { downloadOrShareImage, triggerBlobDownload, GeneratedCardResult } from '../services/quoteCardGenerator';
import { autoCorrectSacredText, formatCoupletString, formatCoupletIntoTwoLines, ensureSatguruKabirSaheb } from '../utils/textSanitizer';
import { SACRED_SHARE_TEMPLATE, buildStandardShareText } from '../services/shareTemplate';
import { useAppTheme } from '../theme/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { sacredHaptics } from '../services/haptics';
import banyanGhatWallpaper from '../assets/images/clean_banyan_ghat_nature_1794927914606.jpg';
import magharDhamWallpaper from '../assets/images/clean_maghar_dham_nature_1794927914335.jpg';
import sahebEmblemWallpaper from '../assets/images/saheb_world_emblem_wallpaper_1794954938340.jpg';
import lightFloralWallpaper from '../assets/images/light_floral_geometric_wallpaper_1794955840163.jpg';
import lightLotusWallpaper from '../assets/images/light_lotus_blossom_wallpaper_1794956964295.jpg';

const magharAuthenticWallpaper = '/assets/aistudio/clean_maghar_dham_nature_1794955298410_2cef22f0.jpg';

interface NatureWallpaperEngineProps {
  language: Language;
  onLanguageChange?: (lang: Language) => void;
  isBellEnabled?: boolean;
  onClose?: () => void;
  initialHukamnama?: { verse: SggsKabirVerse; triggerKey: number } | null;
}

export type WallpaperPreset = 
  | 'royal_bhojpatra'
  | 'maghar_dham'
  | 'kabir_chaura_kashi'
  | 'lahartara_pond'
  | 'bandhavgarh_forest'
  | 'jagannath_puri_math'
  | 'damakheda_darshan'
  | 'banyan_ghat'
  | 'saheb_icon_emblem'
  | 'maghar_authentic'
  | 'light_floral_geometric'
  | 'light_lotus'
  | 'dawn_mountain'
  | 'emerald_forest'
  | 'sunset_sky'
  | 'sacred_river'
  | 'golden_autumn';

export interface PresetItem {
  id: WallpaperPreset;
  title: string;
  sub: string;
  imgSrc?: string;
  accent: string;
}

export const NatureWallpaperEngine: React.FC<NatureWallpaperEngineProps> = ({
  language,
  onLanguageChange,
  isBellEnabled = true,
  onClose,
  initialHukamnama = null,
}) => {
  const { theme, globalWallpaper, setGlobalWallpaper } = useAppTheme();
  const { language: contextLang, setLanguage } = useLanguage();
  const activeLang: Language = language || contextLang;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // States - Default to royal_bhojpatra
  const [selectedPreset, setSelectedPreset] = useState<WallpaperPreset>('royal_bhojpatra');
  const [aspectRatio, setAspectRatio] = useState<'1:1' | '9:16' | '16:9'>('9:16');
  const [textMode, setTextMode] = useState<'sakhi' | 'sggs' | 'custom'>(
    initialHukamnama?.verse ? 'sggs' : 'sakhi'
  );
  const [selectedSakhiId, setSelectedSakhiId] = useState<string>(sakhisDatabase[0]?.id || 'sakhi-1');
  const [selectedSalokId, setSelectedSalokId] = useState<string>(
    initialHukamnama?.verse?.id || 'sggs-salok-1'
  );
  const [customTitle, setCustomTitle] = useState<string>('।। सत्यनाम ।।');
  const [customText, setCustomText] = useState<string>(
    'कबीर मेरी सिमरनी रसना ऊपरि रामु ॥\nआदि जुगादी सगल भगत ता को सुखु बिस्रामु ॥'
  );
  const [customBhavarth, setCustomBhavarth] = useState<string>(
    'मेरी रसना पर निरंतर राम नाम का वास है, यही मेरी सच्ची सिमरनी है। युगांतरों से समस्त भक्तों ने इसी से परम सुख पाया है।'
  );

  const [overlayOpacity, setOverlayOpacity] = useState<number>(0.55);
  const [glassCardOpacity, setGlassCardOpacity] = useState<number>(0.85);
  const [accentColor, setAccentColor] = useState<string>('#FACC15'); // Gold
  const [showCornerOrnaments, setShowCornerOrnaments] = useState<boolean>(true);
  const [verseFontSize, setVerseFontSize] = useState<number>(40);
  const [bhavarthFontSize, setBhavarthFontSize] = useState<number>(22);

  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [previewResult, setPreviewResult] = useState<GeneratedCardResult | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [sggsVerses, setSggsVerses] = useState<SggsKabirVerse[]>(() =>
    initialHukamnama?.verse && initialHukamnama.verse.id !== FALLBACK_HUKAMNAMA_VERSE.id
      ? [initialHukamnama.verse, FALLBACK_HUKAMNAMA_VERSE]
      : [FALLBACK_HUKAMNAMA_VERSE]
  );

  // Sync whenever Daily Hukamnama launches the wallpaper engine
  useEffect(() => {
    if (!initialHukamnama?.verse) return;
    const incoming = initialHukamnama.verse;
    setSggsVerses((prev) =>
      prev.some((v) => v.id === incoming.id) ? prev : [incoming, ...prev]
    );
    setTextMode('sggs');
    setSelectedSalokId(incoming.id);
    const incomingLines =
      activeLang === 'pb'
        ? incoming.moolGurmukhi
        : activeLang === 'en' && incoming.moolRoman?.length
        ? incoming.moolRoman
        : incoming.moolDevanagari;
    setCustomTitle(
      `${incoming.title?.[activeLang] || incoming.title?.hi || 'दैनिक हुकमनामा'} (${
        activeLang === 'pb' ? 'ਅੰਗ' : activeLang === 'en' ? 'Ang' : 'अंग'
      } ${incoming.ang})`
    );
    setCustomText(incomingLines.join('\n'));
    setCustomBhavarth(incoming.bhavarth?.[activeLang] || incoming.bhavarth?.hi || '');
  }, [initialHukamnama, activeLang]);

  useEffect(() => {
    if (textMode !== 'sggs') return;
    let cancelled = false;
    import('../data/sggsKabirBaniData')
      .then((mod) => {
        if (!cancelled && mod.SGGS_KABIR_VERSES_COLLECTION.length > 0) {
          setSggsVerses((prev) => {
            const incoming = initialHukamnama?.verse;
            if (
              incoming &&
              !mod.SGGS_KABIR_VERSES_COLLECTION.some((v) => v.id === incoming.id)
            ) {
              return [incoming, ...mod.SGGS_KABIR_VERSES_COLLECTION];
            }
            if (prev.length > mod.SGGS_KABIR_VERSES_COLLECTION.length) {
              return prev;
            }
            return mod.SGGS_KABIR_VERSES_COLLECTION;
          });
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [textMode, initialHukamnama]);

  const currentSakhi: Sakhi = sakhisDatabase.find((s: Sakhi) => s.id === selectedSakhiId) || sakhisDatabase[0];
  const currentSalok = sggsVerses.find((v) => v.id === selectedSalokId) || sggsVerses[0] || FALLBACK_HUKAMNAMA_VERSE;
  const t = translations[activeLang] || translations.hi;

  const presetsList: PresetItem[] = [
    {
      id: 'royal_bhojpatra',
      title:
        activeLang === 'pb'
          ? 'ਸ਼ਾਹੀ ਭੋਜਪੱਤਰ ਕਰੀਮ'
          : activeLang === 'en'
          ? 'Royal Bhojpatra Cream'
          : 'शाही भोजपत्र क्रीम',
      sub:
        activeLang === 'pb'
          ? 'ਸੁਨਹਿਰੀ ਤੇ ਪ੍ਰਾਚੀਨ ਭੋਜਪੱਤਰ'
          : activeLang === 'en'
          ? 'Royal Cream & Gold'
          : 'स्वर्ण एवं प्राचीन भोजपत्र',
      accent: '#FACC15',
    },
    {
      id: 'maghar_dham',
      title:
        activeLang === 'pb'
          ? 'ਮਗਹਰ ਪਾਵਨ ਸਮਾਧੀ ਅਸਥਾਨ'
          : activeLang === 'en'
          ? 'Maghar Nirvana Dham'
          : 'मगहर पावन समाधि स्थल',
      sub:
        activeLang === 'pb'
          ? 'ਸਤਿਗੁਰੂ ਜੀ ਦੀ ਨਿਰਵਾਣ ਭੂਮੀ'
          : activeLang === 'en'
          ? 'Sacred Nirvana Abode of Satguru'
          : 'सतगुरु की निर्वाण भूमि',
      imgSrc: magharDhamWallpaper,
      accent: '#F59E0B',
    },
    {
      id: 'kabir_chaura_kashi',
      title:
        activeLang === 'pb'
          ? 'ਕਬੀਰ ਚੌਰਾ ਧਾਮ, ਕਾਸ਼ੀ'
          : activeLang === 'en'
          ? 'Kabir Chaura Math, Kashi'
          : 'कबीर चौरा धाम, काशी',
      sub:
        activeLang === 'pb'
          ? 'ਮੂਲ ਪ੍ਰਗਟ ਤੇ ਸਾਧਨਾ ਪੀਠ'
          : activeLang === 'en'
          ? 'Sacred Mool Peeth of Kashi'
          : 'मूल प्राकट्य एवं साधना पीठ',
      accent: '#FBBF24',
    },
    {
      id: 'lahartara_pond',
      title:
        activeLang === 'pb'
          ? 'ਲਹਿਰਤਾਰਾ ਪਾਵਨ ਸਰੋਵਰ'
          : activeLang === 'en'
          ? 'Lahartara Sacred Lotus Pond'
          : 'लहरतारा पावन सरोवर',
      sub:
        activeLang === 'pb'
          ? 'ਨੀਰੂ-ਨੀਮਾ ਤੇ ਕਮਲ ਪੁਸ਼ਪ'
          : activeLang === 'en'
          ? 'Lotus Flower & Divine Incarnation'
          : 'नीरू-नीमा व कमल पुष्प प्राकट्य',
      accent: '#38BDF8',
    },
    {
      id: 'bandhavgarh_forest',
      title:
        activeLang === 'pb'
          ? 'ਬਾਂਧਵਗੜ੍ਹ ਪਾਵਨ ਅਸਥਾਨ'
          : activeLang === 'en'
          ? 'Bandhavgarh Sacred Hill & Forest'
          : 'बांधवगढ़ पावन स्थल',
      sub:
        activeLang === 'pb'
          ? 'ਪਾਵਨ ਗੁਫਾ ਤੇ ਤਪੋਭੂਮੀ'
          : activeLang === 'en'
          ? 'Sacred Tapobhoomi & Forest'
          : 'पावन गुफा एवं तपोभूमि',
      accent: '#34D399',
    },
    {
      id: 'jagannath_puri_math',
      title:
        activeLang === 'pb'
          ? 'ਜਗਨਨਾਥ ਪੁਰੀ ਕਬੀਰ ਮਠ'
          : activeLang === 'en'
          ? 'Jagannath Puri Kabir Chaura Math'
          : 'जगन्नाथ पुरी कबीर मठ',
      sub:
        activeLang === 'pb'
          ? 'ਸਮੁੰਦਰ ਤੱਟ ਤੇ ਇਤਿਹਾਸਕ ਮਠ'
          : activeLang === 'en'
          ? 'Historic Ocean Shore Math'
          : 'समुद्र तट व ऐतिहासिक मठ',
      accent: '#FDE047',
    },
    {
      id: 'damakheda_darshan',
      title:
        activeLang === 'pb'
          ? 'ਦਾਮਾਖੇੜਾ ਦਰਸ਼ਨ ਅਸਥਾਨ'
          : activeLang === 'en'
          ? 'Damakheda Paavan Darshan Sthal'
          : 'दामाखेड़ा दर्शन स्थल',
      sub:
        activeLang === 'pb'
          ? 'ਕਬੀਰ ਪੰਥ ਗੁਰੂ ਗੱਦੀ'
          : activeLang === 'en'
          ? 'Kabir Panth Guru Gaddi'
          : 'कबीर पंथ गुरु गद्दी एवं दर्शन',
      accent: '#F97316',
    },
    {
      id: 'banyan_ghat',
      title: t.themeBanyanGhat,
      sub:
        activeLang === 'pb'
          ? 'ਪਾਵਨ ਸੂਰਜ-ਉਦੇ ਤੇ ਬਰਗਦ ਤੱਟ'
          : activeLang === 'en'
          ? 'Sacred Sunrise & Banyan Ghat'
          : 'पावन सूर्योदय व बरगद तट',
      imgSrc: banyanGhatWallpaper,
      accent: '#FACC15',
    },
    {
      id: 'maghar_authentic',
      title:
        activeLang === 'pb'
          ? 'ਮਗਹਰ ਪ੍ਰਮਾਣਿਕ ਧਾਮ'
          : activeLang === 'en'
          ? 'Maghar Authentic Dham'
          : 'मगहर प्रामाणिक धाम',
      sub:
        activeLang === 'pb'
          ? 'ਇਤਿਹਾਸਕ ਸ਼ਵੇਤ ਗੁੰਬਦ ਤੇ ਵਿਹੜਾ'
          : activeLang === 'en'
          ? 'Historic White Dome & Courtyard'
          : 'ऐतिहासिक श्वेत गुंबद व प्रांगण',
      imgSrc: magharAuthenticWallpaper,
      accent: '#F59E0B',
    },
    {
      id: 'light_floral_geometric',
      title:
        activeLang === 'pb'
          ? 'ਪੁਸ਼ਪ ਜਿਆਮਿਤੀ (Light)'
          : activeLang === 'en'
          ? 'Floral Geometric (Light)'
          : 'पुष्पीय ज्यामितीय (Light)',
      sub:
        activeLang === 'pb'
          ? 'ਗੁਲਾਬ ਫੁੱਲ 🌹 ਤੇ ਪਵਿੱਤਰ ਚੱਕਰ'
          : activeLang === 'en'
          ? 'Rose Petals 🌹 & Sacred Mandala'
          : 'गुलाब फूल 🌹 व ज्यामितीय चक्र',
      imgSrc: lightFloralWallpaper,
      accent: '#E11D48',
    },
    {
      id: 'light_lotus',
      title:
        activeLang === 'pb'
          ? 'ਪਾਵਨ ਸ਼ਵੇਤ-ਸਵਰਨ ਕਮਲ'
          : activeLang === 'en'
          ? 'Pure White & Gold Lotus'
          : 'पावन श्वेत-स्वर्ण कमल',
      sub:
        activeLang === 'pb'
          ? 'ਨਿਰਮਲ ਸੰਗਮਰਮਰ ਤੇ ਦਿਵਯ ਕਮਲ 🪷'
          : activeLang === 'en'
          ? 'Serene Marble & Divine Lotus 🪷'
          : 'निर्मल संगमरमर व दिव्य कमल 🪷',
      imgSrc: lightLotusWallpaper,
      accent: '#D97706',
    },
    {
      id: 'saheb_icon_emblem',
      title:
        activeLang === 'pb'
          ? 'ਸਾਹੇਬ ਵਰਲਡ ਪ੍ਰਤੀਕ (Emblem)'
          : activeLang === 'en'
          ? 'Saheb World Emblem'
          : 'साहेब वर्ल्ड प्रतीक (App Emblem)',
      sub:
        activeLang === 'pb'
          ? 'ਸੁਨਹਿਰੀ ਚੱਕਰ ਤੇ ਕਮਲ'
          : activeLang === 'en'
          ? 'Golden Chakra & Lotus'
          : 'गोल्डन चक्र व कमल',
      imgSrc: sahebEmblemWallpaper,
      accent: '#FBBF24',
    },
    {
      id: 'dawn_mountain',
      title: t.themeDawn,
      sub:
        activeLang === 'pb'
          ? 'ਪ੍ਰਭਾਤ ਵੇਲਾ ਤੇ ਪਰਬਤ ਸ਼ਿਖਰ'
          : activeLang === 'en'
          ? 'Golden Dawn & Mountain Peaks'
          : 'अरुणोदय व पर्वत शिखर',
      accent: '#FAD074',
    },
    {
      id: 'emerald_forest',
      title: t.themeForest,
      sub:
        activeLang === 'pb'
          ? 'ਸ਼ਾਂਤ ਵਣ ਤੇ ਦਿਵਯ ਕਿਰਨਾਂ'
          : activeLang === 'en'
          ? 'Serene Forest & Divine Rays'
          : 'शांत वन व दिव्य प्रकाश किरणें',
      accent: '#6EE7B7',
    },
    {
      id: 'sunset_sky',
      title: t.themeSunset,
      sub:
        activeLang === 'pb'
          ? 'ਸੰਧਿਆ ਆਕਾਸ਼ ਤੇ ਸਰੋਵਰ ਕਮਲ'
          : activeLang === 'en'
          ? 'Twilight Sky & Lotus Pond'
          : 'संध्या गगन व सरसी कमल',
      accent: '#FFD166',
    },
    {
      id: 'sacred_river',
      title: t.themeRiver,
      sub:
        activeLang === 'pb'
          ? 'ਪਾਵਨ ਨਦੀ ਤੱਟ ਤੇ ਜਗਮਗ ਦੀਪ'
          : activeLang === 'en'
          ? 'Sacred Riverbank & Glowing Lamps'
          : 'गंगा तट व प्रज्वलित दीप',
      accent: '#67E8F9',
    },
    {
      id: 'golden_autumn',
      title: t.themeAutumn,
      sub:
        activeLang === 'pb'
          ? 'ਸੁਨਹਿਰੀ ਪੱਤੇ ਤੇ ਅਨਹਦ ਆਭਾ'
          : activeLang === 'en'
          ? 'Golden Banyan Leaves & Radiance'
          : 'स्वर्ण वट पत्र व अनहद आभा',
      accent: '#FFE082',
    },
  ];

  // Render wallpaper on Canvas whenever controls change
  const renderWallpaperCanvas = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let width = 1080;
    let height = 1920; // Default 9:16
    if (aspectRatio === '1:1') {
      height = 1080;
    } else if (aspectRatio === '16:9') {
      width = 1920;
      height = 1080;
    }

    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, width, height);

    const presetObj = presetsList.find((p) => p.id === selectedPreset) || presetsList[0];

    // 1. Draw Background: Image asset OR Procedural Nature Sky
    let isLoaded = false;
    if (presetObj.imgSrc) {
      try {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        await new Promise<void>((resolve) => {
          img.onload = () => resolve();
          img.onerror = () => resolve();
          img.src = presetObj.imgSrc!;
        });

        if (img.complete && img.naturalWidth > 0) {
          isLoaded = true;
          const imgRatio = img.naturalWidth / img.naturalHeight;
          const canvasRatio = width / height;
          let dw = width;
          let dh = height;
          let dx = 0;
          let dy = 0;

          if (imgRatio > canvasRatio) {
            dh = height;
            dw = height * imgRatio;
            dx = (width - dw) / 2;
          } else {
            dw = width;
            dh = width / imgRatio;
            dy = (height - dh) / 2;
          }

          ctx.drawImage(img, dx, dy, dw, dh);
        }
      } catch {
        isLoaded = false;
      }
    }

    if (!isLoaded) {
      // Draw procedural sky/landscape based on preset
      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      if (selectedPreset === 'royal_bhojpatra') {
        bgGrad.addColorStop(0, '#1C1208');
        bgGrad.addColorStop(0.35, '#3D220F');
        bgGrad.addColorStop(0.7, '#6E3E18');
        bgGrad.addColorStop(1, '#9C5B23');
      } else if (selectedPreset === 'maghar_dham') {
        bgGrad.addColorStop(0, '#140B05');
        bgGrad.addColorStop(0.4, '#381A0B');
        bgGrad.addColorStop(0.8, '#733714');
        bgGrad.addColorStop(1, '#B4571A');
      } else if (selectedPreset === 'kabir_chaura_kashi') {
        bgGrad.addColorStop(0, '#1A0E05');
        bgGrad.addColorStop(0.4, '#44220A');
        bgGrad.addColorStop(0.75, '#854211');
        bgGrad.addColorStop(1, '#C26B1E');
      } else if (selectedPreset === 'lahartara_pond') {
        bgGrad.addColorStop(0, '#02101B');
        bgGrad.addColorStop(0.4, '#06263B');
        bgGrad.addColorStop(0.75, '#0E486D');
        bgGrad.addColorStop(1, '#1A759F');
      } else if (selectedPreset === 'bandhavgarh_forest') {
        bgGrad.addColorStop(0, '#03120B');
        bgGrad.addColorStop(0.4, '#0A2D1C');
        bgGrad.addColorStop(0.75, '#1B5E3C');
        bgGrad.addColorStop(1, '#2D8A5B');
      } else if (selectedPreset === 'jagannath_puri_math') {
        bgGrad.addColorStop(0, '#061324');
        bgGrad.addColorStop(0.4, '#0F294A');
        bgGrad.addColorStop(0.75, '#1E4774');
        bgGrad.addColorStop(1, '#3B75A6');
      } else if (selectedPreset === 'damakheda_darshan') {
        bgGrad.addColorStop(0, '#1D0804');
        bgGrad.addColorStop(0.4, '#45150A');
        bgGrad.addColorStop(0.75, '#872B15');
        bgGrad.addColorStop(1, '#C44520');
      } else if (selectedPreset === 'dawn_mountain') {
        bgGrad.addColorStop(0, '#1A0F03');
        bgGrad.addColorStop(0.4, '#4A280B');
        bgGrad.addColorStop(0.8, '#9E5B1A');
        bgGrad.addColorStop(1, '#E09C48');
      } else if (selectedPreset === 'emerald_forest') {
        bgGrad.addColorStop(0, '#04120C');
        bgGrad.addColorStop(0.5, '#0B2D1F');
        bgGrad.addColorStop(1, '#2B7051');
      } else if (selectedPreset === 'sunset_sky') {
        bgGrad.addColorStop(0, '#1E0517');
        bgGrad.addColorStop(0.4, '#4A0E2E');
        bgGrad.addColorStop(0.7, '#8C1F38');
        bgGrad.addColorStop(1, '#F4A261');
      } else if (selectedPreset === 'sacred_river') {
        bgGrad.addColorStop(0, '#02101C');
        bgGrad.addColorStop(0.5, '#0B2D46');
        bgGrad.addColorStop(1, '#228BE6');
      } else {
        bgGrad.addColorStop(0, '#190E02');
        bgGrad.addColorStop(0.5, '#422406');
        bgGrad.addColorStop(1, '#B87319');
      }
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Sun halo or nature shapes
      const sunGrad = ctx.createRadialGradient(width / 2, height * 0.35, 10, width / 2, height * 0.35, 300);
      sunGrad.addColorStop(0, 'rgba(255, 240, 180, 0.45)');
      sunGrad.addColorStop(0.5, 'rgba(255, 180, 80, 0.15)');
      sunGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = sunGrad;
      ctx.beginPath();
      ctx.arc(width / 2, height * 0.35, 300, 0, Math.PI * 2);
      ctx.fill();
    }

    // 2. Dark Vignette Overlay with Opacity Control
    const vignette = ctx.createLinearGradient(0, 0, 0, height);
    const alphaTop = Math.min(overlayOpacity, 0.6);
    const alphaBottom = Math.min(overlayOpacity + 0.25, 0.92);
    vignette.addColorStop(0, `rgba(0, 0, 0, ${alphaTop})`);
    vignette.addColorStop(0.5, `rgba(0, 0, 0, ${overlayOpacity * 0.5})`);
    vignette.addColorStop(1, `rgba(0, 0, 0, ${alphaBottom})`);
    ctx.fillStyle = vignette;
    ctx.fillRect(0, 0, width, height);

    // 3. Ornate Golden Outer Frames
    if (showCornerOrnaments) {
      ctx.strokeStyle = accentColor;
      ctx.lineWidth = 6;
      ctx.strokeRect(36, 36, width - 72, height - 72);

      ctx.lineWidth = 2;
      ctx.strokeRect(48, 48, width - 96, height - 96);

      const drawOrnament = (x: number, y: number) => {
        ctx.beginPath();
        ctx.arc(x, y, 12, 0, Math.PI * 2);
        ctx.fillStyle = accentColor;
        ctx.fill();
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2;
        ctx.stroke();
      };
      drawOrnament(36, 36);
      drawOrnament(width - 36, 36);
      drawOrnament(36, height - 36);
      drawOrnament(width - 36, height - 36);
    }

    // 4. HEADER BRANDING (TOP)
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 36px "Noto Serif Devanagari", "Gurmukhi MN", Georgia, serif';
    ctx.textAlign = 'center';
    ctx.fillText(SACRED_BRANDING.header[activeLang], width / 2, height * 0.08);

    ctx.font = 'bold 26px "Noto Serif Devanagari", "Gurmukhi MN", Georgia, serif';
    ctx.fillStyle = accentColor;
    ctx.fillText(
      activeLang === 'pb'
        ? 'ਬੰਦੀਛੋੜ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ'
        : activeLang === 'en'
        ? 'Bandichhod Satguru Kabir Saheb'
        : 'बंदीछोड़ सतगुरु कबीर साहेब',
      width / 2,
      height * 0.125
    );

    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(width / 2 - 180, height * 0.145);
    ctx.lineTo(width / 2 + 180, height * 0.145);
    ctx.stroke();

    // 5. TEXT CONTENT SELECTION & PREPARATION
    let verseText = '';
    let bhavarthText = '';
    let categoryBadge = '';

    if (textMode === 'sakhi') {
      const [l1, l2] = formatCoupletIntoTwoLines(currentSakhi.text[activeLang] || currentSakhi.text.hi, activeLang);
      verseText = [l1, l2].filter(Boolean).join('\n');
      bhavarthText = ensureSatguruKabirSaheb(currentSakhi.bhavarth[activeLang] || currentSakhi.bhavarth.hi);
      const sakhiLabel = activeLang === 'pb' ? 'ਸਾਖੀ' : activeLang === 'en' ? 'Sakhi' : 'साखी';
      categoryBadge = `${sakhiLabel} #${currentSakhi.number} • ${currentSakhi.grantha}`;
    } else if (textMode === 'sggs') {
      const lines =
        activeLang === 'pb'
          ? currentSalok.moolGurmukhi
          : activeLang === 'en' && currentSalok.moolRoman?.length
          ? currentSalok.moolRoman
          : currentSalok.moolDevanagari;
      const joined = lines.join('\n');
      const [l1, l2] = formatCoupletIntoTwoLines(joined, activeLang);
      verseText = (l1 && l2) ? `${l1}\n${l2}` : lines.join('\n');
      bhavarthText = currentSalok.bhavarth[activeLang] || currentSalok.bhavarth.hi;
      const angLabel = activeLang === 'pb' ? 'ਅੰਗ' : activeLang === 'en' ? 'Ang' : 'अंग';
      categoryBadge = `${currentSalok.title[activeLang] || currentSalok.title.hi} • ${angLabel} ${currentSalok.ang}`;
    } else {
      const [l1, l2] = formatCoupletIntoTwoLines(customText.trim(), activeLang);
      verseText = (l1 && l2) ? `${l1}\n${l2}` : customText.trim();
      bhavarthText = customBhavarth.trim();
      categoryBadge =
        customTitle.trim() ||
        (activeLang === 'pb' ? 'ਪਾਵਨ ਕਬੀਰ ਬਾਣੀ' : activeLang === 'en' ? 'Sacred Kabir Vani' : 'पावन कबीर वाणी');
    }

    // Badge Title
    ctx.fillStyle = accentColor;
    ctx.font = 'bold 24px "Noto Serif Devanagari", "Noto Serif Gurmukhi", Georgia, serif';
    ctx.fillText(categoryBadge, width / 2, height * 0.20);

    // 6. MAIN VERSE TEXT (CENTER) with strict 2 lines & auto-fit horizontal scaling
    const rawLines = verseText
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean);
    const isLongPassage = rawLines.length > 3;
    const baseVerseFontSize = isLongPassage
      ? Math.max(22, Math.min(verseFontSize, 32))
      : verseFontSize;

    const maxVerseWidth = width - 140;

    // Auto-fit check: smoothly scale down font size so every line fits horizontally
    let effectiveVerseFontSize = baseVerseFontSize;
    for (let testSize = baseVerseFontSize; testSize >= 20; testSize -= 1) {
      ctx.font = `bold italic ${testSize}px "Noto Serif Devanagari", "Noto Serif Gurmukhi", Georgia, serif`;
      const allFit = rawLines.every((l) => ctx.measureText(l).width <= maxVerseWidth);
      if (allFit) {
        effectiveVerseFontSize = testSize;
        break;
      }
      effectiveVerseFontSize = testSize;
    }

    ctx.fillStyle = '#FFFFFF';
    ctx.font = `bold italic ${effectiveVerseFontSize}px "Noto Serif Devanagari", "Noto Serif Gurmukhi", Georgia, serif`;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
    ctx.shadowBlur = 12;

    const wrappedVerseLines: string[] = [];
    rawLines.forEach((rawLine) => {
      if (ctx.measureText(rawLine).width <= maxVerseWidth) {
        wrappedVerseLines.push(rawLine);
      } else {
        const words = rawLine.split(/\s+/);
        let cur = '';
        words.forEach((w) => {
          const test = cur ? `${cur} ${w}` : w;
          if (ctx.measureText(test).width > maxVerseWidth && cur) {
            wrappedVerseLines.push(cur);
            cur = w;
          } else {
            cur = test;
          }
        });
        if (cur) wrappedVerseLines.push(cur);
      }
    });

    const maxVerseDisplayLines = aspectRatio === '9:16' ? 8 : 5;
    const visibleVerseLines = wrappedVerseLines.slice(0, maxVerseDisplayLines);
    const lineHeight = effectiveVerseFontSize * (visibleVerseLines.length > 4 ? 1.32 : 1.48);
    let currentY = isLongPassage
      ? (aspectRatio === '1:1' ? height * 0.23 : height * 0.255)
      : (aspectRatio === '1:1' ? height * 0.25 : height * 0.28);
    visibleVerseLines.forEach((ln) => {
      ctx.fillText(ln, width / 2, currentY);
      currentY += lineHeight;
    });

    // Attribution Line right below Doha
    ctx.font = 'bold 22px "Noto Serif Devanagari", "Noto Serif Gurmukhi", Georgia, serif';
    ctx.fillStyle = accentColor;
    ctx.fillText(SACRED_SHARE_TEMPLATE.attribution[activeLang], width / 2, currentY + 12);
    currentY += 34;

    ctx.shadowBlur = 0; // Reset shadow

    // 7. GLASSMORPHIC BHAVARTH CARD BOX (LOWER HALF - 100% Dynamic Auto-Height)
    if (bhavarthText) {
      currentY += 18;
      const boxW = width - 150;
      const boxX = 75;

      // Localized Bhavarth Label
      const bhavarthLabel =
        activeLang === 'pb'
          ? 'ਭਾਵਾਰਥ:'
          : activeLang === 'en'
          ? 'Essence:'
          : 'भावार्थ:';

      // Word wrap bhavarth lines based on box inner width
      ctx.font = `${bhavarthFontSize}px "Noto Serif Devanagari", "Gurmukhi MN", Georgia, serif`;
      const bWords = bhavarthText.split(/\s+/).filter(Boolean);
      let bLine = '';
      const bLines: string[] = [];
      bWords.forEach((bw) => {
        const testLine = bLine ? `${bLine} ${bw}` : bw;
        if (ctx.measureText(testLine).width > boxW - 56) {
          if (bLine) bLines.push(bLine);
          bLine = bw;
        } else {
          bLine = testLine;
        }
      });
      if (bLine) bLines.push(bLine);

      const bLineHeight = bhavarthFontSize * 1.54;
      const titleHeight = 44;
      const topPadding = 20;
      const bottomPadding = 20;
      const textBlockHeight = bLines.length * bLineHeight;

      // 100% Dynamic auto-height
      const dynamicBoxH = Math.max(120, topPadding + titleHeight + textBlockHeight + bottomPadding);
      const footerLimit = height * 0.865;

      let boxY = currentY;
      if (boxY + dynamicBoxH > footerLimit) {
        boxY = Math.max(currentY, footerLimit - dynamicBoxH);
      }
      const finalBoxH = Math.min(dynamicBoxH, footerLimit - boxY);

      // Dark Glass Card Background
      ctx.fillStyle = `rgba(12, 10, 8, ${glassCardOpacity})`;
      ctx.strokeStyle = accentColor;
      ctx.lineWidth = 2;

      // Safe rounded rect
      if (typeof ctx.roundRect === 'function') {
        ctx.beginPath();
        ctx.roundRect(boxX, boxY, boxW, finalBoxH, 20);
        ctx.fill();
        ctx.stroke();
      } else {
        ctx.fillRect(boxX, boxY, boxW, finalBoxH);
        ctx.strokeRect(boxX, boxY, boxW, finalBoxH);
      }

      // Bhavarth Label
      ctx.fillStyle = accentColor;
      ctx.font = 'bold 24px "Noto Serif Devanagari", "Noto Serif Gurmukhi", Georgia, serif';
      ctx.textAlign = 'center';
      ctx.fillText(
        bhavarthLabel,
        width / 2,
        boxY + topPadding + 22
      );

      // Bhavarth Lines
      ctx.fillStyle = '#FEF08A';
      ctx.font = `${bhavarthFontSize}px "Noto Serif Devanagari", "Gurmukhi MN", Georgia, serif`;

      let bY = boxY + topPadding + titleHeight + (bhavarthFontSize * 0.7);
      bLines.forEach((bl) => {
        if (bY + bLineHeight <= boxY + finalBoxH + 4) {
          ctx.fillText(bl.trim(), width / 2, bY);
          bY += bLineHeight;
        }
      });
    }

    // 8. FOOTER BRANDING (Clean unified footer, zero duplicate branding)
    ctx.textAlign = 'center';
    ctx.fillStyle = accentColor;
    ctx.font = 'bold 22px "Noto Sans Devanagari", sans-serif';
    ctx.fillText('सौजन्य: साहेब वर्ल्ड (Saheb World)', width / 2, height * 0.89);

    ctx.font = 'bold 26px "Noto Serif Devanagari", "Gurmukhi MN", Georgia, serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText('।। साहेब बंदगी साहेब ।। 🙏', width / 2, height * 0.935);

    // Save canvas as Blob URL for immediate preview
    canvas.toBlob(
      (blob) => {
        if (!blob) return;
        const objectUrl = URL.createObjectURL(blob);
        const dataUrl = canvas.toDataURL('image/png');
        setPreviewResult({
          blob,
          objectUrl,
          dataUrl,
          fileName: `SahebWorld_Nature_Wallpaper_${Date.now()}.png`,
        });
      },
      'image/png',
      0.95
    );
  };

  useEffect(() => {
    renderWallpaperCanvas();
  }, [
    selectedPreset,
    aspectRatio,
    textMode,
    selectedSakhiId,
    selectedSalokId,
    customTitle,
    customText,
    customBhavarth,
    overlayOpacity,
    glassCardOpacity,
    accentColor,
    showCornerOrnaments,
    verseFontSize,
    bhavarthFontSize,
    activeLang,
    sggsVerses,
  ]);

  const handleResetSettings = () => {
    try {
      sacredHaptics.lightTap();
      setSelectedPreset('royal_bhojpatra');
      setAspectRatio('9:16');
      setTextMode('sakhi');
      setOverlayOpacity(0.55);
      setGlassCardOpacity(0.85);
      setVerseFontSize(40);
      setBhavarthFontSize(22);
      setAccentColor('#FACC15');
      setShowCornerOrnaments(true);
      setCustomTitle('।। सत्यनाम ।।');
      setCustomText('कबीर मेरी सिमरनी रसना ऊपरि रामु ॥\nआदि जुगादी सगल भगत ता को सुखु बिस्रामु ॥');
      setCustomBhavarth('मेरी रसना पर निरंतर राम नाम का वास है, यही मेरी सच्ची सिमरनी है। युगांतरों से समस्त भक्तों ने इसी से परम सुख पाया है।');
      setToastMessage(
        activeLang === 'pb'
          ? 'ਸੈਟਿੰਗਾਂ ਅਤੇ ਪ੍ਰੀਵਿਊ ਰੀਸੈਟ ਹੋ ਗਏ!'
          : activeLang === 'en'
          ? 'Settings & live preview reset!'
          : 'सेटिंग्स व पूर्वावलोकन रीसेट हो गए!'
      );
      setTimeout(() => setToastMessage(null), 3000);
      renderWallpaperCanvas();
    } catch (err) {
      console.error("Reset error:", err);
    }
  };

  const handleDownloadOrShare = async (preferShare: boolean = false) => {
    if (!previewResult) return;
    setIsGenerating(true);

    try {
      if (isBellEnabled) {
        try {
          satyanaamAudio.ringSacredBell();
        } catch {}
      }

      if (preferShare) {
        const currentVerseText =
          textMode === 'sakhi'
            ? formatCoupletString(autoCorrectSacredText(currentSakhi.text[activeLang] || currentSakhi.text.hi))
            : textMode === 'sggs'
            ? (activeLang === 'pb' ? currentSalok.moolGurmukhi : currentSalok.moolDevanagari).join('\n')
            : customText;

        const shareText =
          textMode === 'sakhi'
            ? buildStandardShareText({
                text: currentSakhi.text[activeLang] || currentSakhi.text.hi,
                language: activeLang,
                source: currentSakhi.grantha,
                meaning: currentSakhi.bhavarth[activeLang] || currentSakhi.bhavarth.hi,
                sakhiNumber: currentSakhi.number,
              })
            : `${SACRED_SHARE_TEMPLATE.header[activeLang]}\n\n${currentVerseText}\n${SACRED_SHARE_TEMPLATE.attribution[activeLang]}\n\n${SACRED_SHARE_TEMPLATE.footer[activeLang]}`;

        const status = await downloadOrShareImage(
          previewResult,
          'Saheb World Nature Wallpaper',
          shareText
        );
        setToastMessage(
          status === 'shared'
            ? activeLang === 'pb'
              ? 'ਵਾਲਪੇਪਰ ਸਾਂਝਾ / ਗੈਲਰੀ ਵਿੱਚ ਸੁਰੱਖਿਅਤ ਹੋ ਗਿਆ!'
              : activeLang === 'en'
              ? 'Wallpaper shared / saved to gallery!'
              : 'वॉलपेपर गैलरी / शेयर हो गया!'
            : activeLang === 'pb'
            ? 'ਡਾਊਨਲੋਡ ਸ਼ੁਰੂ ਹੋ ਗਿਆ!'
            : activeLang === 'en'
            ? 'Download started!'
            : 'डाउनलोड प्रारंभ हो गया!'
        );
      } else {
        triggerBlobDownload(previewResult.objectUrl, previewResult.fileName);
        setToastMessage(
          activeLang === 'pb'
            ? 'HD ਵਾਲਪੇਪਰ ਡਾਊਨਲੋਡ ਹੋ ਗਿਆ!'
            : activeLang === 'en'
            ? 'HD Wallpaper downloaded!'
            : 'HD वॉलपेपर डाउनलोड हो गया!'
        );
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsGenerating(false);
      setTimeout(() => setToastMessage(null), 4000);
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-24">
      {/* Header Banner */}
      <div
        style={{
          background: 'linear-gradient(135deg, #1A0F03 0%, #4A280B 50%, #9E5B1A 100%)',
          color: '#FFFFFF',
        }}
        className="rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden text-white"
      >
        <div className="relative z-10 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-200 text-xs font-serif font-bold">
              <Sun className="w-4 h-4 text-amber-400" />
              <span>
                {activeLang === 'pb'
                  ? 'ਕੁਦਰਤ ਵਾਲਪੇਪਰ ਇੰਜਣ'
                  : activeLang === 'en'
                  ? 'Nature Wallpaper Engine'
                  : 'कुदरत वॉलपेपर इंजन'}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {/* Global Language Switcher */}
              <div
                className="inline-flex items-center gap-1 p-1 rounded-xl bg-black/35 border border-amber-400/35 backdrop-blur-sm"
                role="group"
                aria-label="Global Language Switcher"
              >
                <Languages className="w-3.5 h-3.5 text-amber-300 ml-1.5 mr-0.5 shrink-0" />
                {(['hi', 'pb', 'en'] as Language[]).map((langOpt) => (
                  <button
                    key={langOpt}
                    type="button"
                    onClick={() => {
                      sacredHaptics.lightTap();
                      setLanguage(langOpt);
                      onLanguageChange?.(langOpt);
                    }}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold font-serif transition cursor-pointer whitespace-nowrap ${
                      activeLang === langOpt
                        ? 'bg-amber-500 text-stone-950 shadow-sm'
                        : 'text-amber-100/85 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {langOpt === 'hi' ? 'हिंदी' : langOpt === 'pb' ? 'ਪੰਜਾਬੀ' : 'English'}
                  </button>
                ))}
              </div>

            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black font-serif tracking-wide text-amber-100">
            {activeLang === 'pb'
              ? '🌿 ਕੁਦਰਤ ਵਾਲਪੇਪਰ ਅਤੇ ਡਿਜੀਟਲ ਚਿੱਤਰ ਕਾਰਡ ਜਨਰੇਟਰ'
              : activeLang === 'en'
              ? '🌿 Nature Wallpaper & Sacred Card Generator'
              : '🌿 कुदरत वॉलपेपर एवं डिजिटल चित्र कार्ड जनरेटर'}
          </h1>

          <p className="text-xs sm:text-base text-amber-100/90 max-w-3xl leading-relaxed">
            {activeLang === 'pb'
              ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀਆਂ ਪਾਵਨ ਸਾਖੀਆਂ, ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦੇ ਸਲੋਕ ਅਤੇ ਸਤਯਨਾਮ ਮਹਾਂਮੰਤਰ ਦੇ ਕੁਦਰਤੀ ਵਾਲਪੇਪਰ ਤਿਆਰ ਕਰੋ। ਮੋਬਾਈਲ (9:16), ਡੀਪੀ (1:1) ਤੇ ਡੈਸਕਟਾਪ (16:9) ਲਈ HD ਡਾਊਨਲੋਡ ਕਰੋ।'
              : activeLang === 'en'
              ? 'Create HD nature wallpapers of Satguru Kabir Saheb Sacred Sakhis, Sri Guru Granth Sahib Saloks, and Satyanaam Mantra for Mobile Lockscreen (9:16), DP (1:1), or Desktop (16:9).'
              : 'सतगुरु कबीर साहेब की पावन साखियों, श्री गुरु ग्रंथ साहब के सलोक एवं सत्यनाम महामंत्र के प्राकृतिक वॉलपेपर तैयार करें। मोबाइल लॉक-स्क्रीन (9:16), प्रोफाइल डीपी (1:1) व डेस्कटॉप (16:9) के लिए HD डाउनलोड करें।'}
          </p>
        </div>
      </div>

      {/* Main Studio Grid: Left Studio Controls vs Right Canvas Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT COLUMN: CONTROLS (7 Cols) */}
        <div
          style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder, color: theme.textPrimary }}
          className="lg:col-span-7 space-y-5 p-5 sm:p-6 rounded-3xl border backdrop-blur-md shadow-lg text-xs"
        >
          {/* SECTION 1: PRESET BACKGROUND SELECTOR */}
          <div className="space-y-2">
            <label className="font-bold text-sm font-serif text-amber-950 dark:text-amber-200 flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-amber-600" />
              <span>
                {activeLang === 'pb'
                  ? '੧. ਕੁਦਰਤੀ ਵਾਲਪੇਪਰ ਥੀਮ ਚੁਣੋ:'
                  : activeLang === 'en'
                  ? '1. Select Nature Wallpaper Theme:'
                  : '१. प्राकृतिक वॉलपेपर थीम चुनें:'}
              </span>
            </label>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {presetsList.map((preset) => (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => {
                    setSelectedPreset(preset.id as WallpaperPreset);
                    setAccentColor(preset.accent);
                  }}
                  className={`p-3 rounded-2xl border text-left transition cursor-pointer flex flex-col justify-between h-20 relative overflow-hidden ${
                    selectedPreset === preset.id
                      ? 'border-amber-600 ring-2 ring-amber-500/50 bg-amber-500/10 shadow-sm'
                      : 'border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  <div>
                    <strong className="block text-xs font-serif font-bold text-amber-950 dark:text-amber-100 truncate">
                      {preset.title}
                    </strong>
                    <span className="text-[10px] text-gray-500 dark:text-gray-400 block truncate mt-0.5">
                      {preset.sub}
                    </span>
                  </div>
                  {selectedPreset === preset.id && (
                    <span className="absolute top-2 right-2 p-0.5 rounded-full bg-[#8B2500] text-white">
                      <Check className="w-3 h-3" />
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* SECTION 2: ASPECT RATIO */}
          <div className="space-y-2 pt-2 border-t border-black/10 dark:border-white/10">
            <label className="font-bold text-sm font-serif text-amber-950 dark:text-amber-200 flex items-center gap-2">
              <Maximize2 className="w-4 h-4 text-amber-600" />
              <span>
                {activeLang === 'pb'
                  ? '੨. ਚਿੱਤਰ ਆਕਾਰ (Aspect Ratio):'
                  : activeLang === 'en'
                  ? '2. Canvas Aspect Ratio:'
                  : '२. चित्र आकार (Aspect Ratio):'}
              </span>
            </label>

            <div className="grid grid-cols-3 gap-2">
              {[
                {
                  id: '9:16',
                  label: '📱 9:16',
                  desc:
                    activeLang === 'pb'
                      ? 'ਮੋਬਾਈਲ ਲੌਕ-ਸਕ੍ਰੀਨ / ਸਟੋਰੀ'
                      : activeLang === 'en'
                      ? 'Mobile Lockscreen / Story'
                      : 'मोबाइल लॉक-स्क्रीन / स्टोरी',
                },
                {
                  id: '1:1',
                  label: '🖼️ 1:1',
                  desc:
                    activeLang === 'pb'
                      ? 'ਪ੍ਰੋਫਾਈਲ DP / WhatsApp'
                      : activeLang === 'en'
                      ? 'Profile DP / Square Post'
                      : 'प्रोफ़ाइल DP / व्हाट्सएप',
                },
                {
                  id: '16:9',
                  label: '💻 16:9',
                  desc:
                    activeLang === 'pb'
                      ? 'ਡੈਸਕਟਾਪ / ਲੈਪਟਾਪ'
                      : activeLang === 'en'
                      ? 'Desktop / Widescreen'
                      : 'डेस्कटॉप / लैपटॉप',
                },
              ].map((rObj) => (
                <button
                  key={rObj.id}
                  type="button"
                  onClick={() => setAspectRatio(rObj.id as any)}
                  className={`p-2.5 rounded-2xl border text-center transition cursor-pointer ${
                    aspectRatio === rObj.id
                      ? 'bg-[#8B2500] text-white border-[#8B2500] shadow-md font-bold'
                      : 'bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <span className="block font-bold text-xs">{rObj.label}</span>
                  <span className="text-[9px] block opacity-80 mt-0.5">{rObj.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* SECTION 3: TEXT SOURCE SELECTION */}
          <div className="space-y-3 pt-2 border-t border-black/10 dark:border-white/10">
            <label className="font-bold text-sm font-serif text-amber-950 dark:text-amber-200 flex items-center gap-2">
              <Type className="w-4 h-4 text-amber-600" />
              <span>
                {activeLang === 'pb'
                  ? '੩. ਪਾਵਨ ਬਾਣੀ ਤੇ ਪਾਠ ਚੁਣੋ:'
                  : activeLang === 'en'
                  ? '3. Choose Sacred Vani & Text:'
                  : '३. पावन वाणी एवं पाठ चुनें:'}
              </span>
            </label>

            {/* Sub-tabs for text source */}
            <div className="flex gap-1.5 p-1 rounded-2xl bg-black/5 dark:bg-black/30 border border-amber-500/20">
              <button
                type="button"
                onClick={() => setTextMode('sakhi')}
                className={`flex-1 py-2 px-2 rounded-xl font-bold text-xs transition cursor-pointer ${
                  textMode === 'sakhi' ? 'bg-[#8B2500] text-white shadow-xs' : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {activeLang === 'pb' ? '📜 ਸਾਖੀ ਸੰਗ੍ਰਹਿ' : activeLang === 'en' ? '📜 Sakhi Archive' : '📜 साखी संग्रह'}
              </button>

              <button
                type="button"
                onClick={() => setTextMode('sggs')}
                className={`flex-1 py-2 px-2 rounded-xl font-bold text-xs transition cursor-pointer ${
                  textMode === 'sggs' ? 'bg-[#8B2500] text-white shadow-xs' : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {activeLang === 'pb' ? '☬ SGGS ਸਲੋਕ' : activeLang === 'en' ? '☬ SGGS Salok' : '☬ SGGS सलोक'}
              </button>

              <button
                type="button"
                onClick={() => setTextMode('custom')}
                className={`flex-1 py-2 px-2 rounded-xl font-bold text-xs transition cursor-pointer ${
                  textMode === 'custom' ? 'bg-[#8B2500] text-white shadow-xs' : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {activeLang === 'pb' ? '✏️ ਖੁਦ ਦਾ ਪਾਠ' : activeLang === 'en' ? '✏️ Custom Text' : '✏️ स्वयं का पाठ'}
              </button>
            </div>

            {/* Dropdown / Selector based on active textMode */}
            {textMode === 'sakhi' && (
              <div className="space-y-1">
                <label className="block text-[11px] font-bold text-amber-900 dark:text-amber-300">
                  {activeLang === 'pb'
                    ? `ਸਾਖੀ ਚੁਣੋ (${sakhisDatabase.length} ਸਾਖੀਆਂ ਉਪਲਬਧ ਹਨ):`
                    : activeLang === 'en'
                    ? `Select Sakhi (${sakhisDatabase.length} available):`
                    : `साखी चुनें (${sakhisDatabase.length} साखियाँ उपलब्ध हैं):`}
                </label>
                <select
                  value={selectedSakhiId}
                  onChange={(e) => setSelectedSakhiId(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-black/15 dark:border-white/15 bg-white dark:bg-zinc-900 text-amber-950 dark:text-amber-100 font-serif text-xs"
                >
                  {sakhisDatabase.map((s: Sakhi) => {
                    const [l1, l2] = formatCoupletIntoTwoLines(s.text[activeLang] || s.text.hi, activeLang);
                    return (
                      <option key={s.id} value={s.id}>
                        #{s.number} • {l1} / {l2}
                      </option>
                    );
                  })}
                </select>
              </div>
            )}

            {textMode === 'sggs' && (
              <div className="space-y-1">
                <label className="block text-[11px] font-bold text-amber-900 dark:text-amber-300">
                  {activeLang === 'pb'
                    ? 'ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਕਬੀਰ ਬਾਣੀ / ਹੁਕਮਨਾਮਾ:'
                    : activeLang === 'en'
                    ? 'Sri Guru Granth Sahib Ji Kabir Vani / Hukamnama:'
                    : 'श्री गुरु ग्रंथ साहिब जी कबीर वाणी / हुकमनामा:'}
                </label>
                <select
                  value={selectedSalokId}
                  onChange={(e) => setSelectedSalokId(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-black/15 dark:border-white/15 bg-white dark:bg-zinc-900 text-amber-950 dark:text-amber-100 font-serif text-xs"
                >
                  {sggsVerses.map((s) => (
                    <option key={s.id} value={s.id}>
                      {(s.title[activeLang] || s.title.pb)} ({activeLang === 'pb' ? 'ਅੰਗ' : activeLang === 'en' ? 'Ang' : 'अंग'} {s.ang})
                    </option>
                  ))}
                </select>
              </div>
            )}

            {textMode === 'custom' && (
              <div className="space-y-2">
                <div>
                  <label className="block text-[11px] font-bold text-amber-900 dark:text-amber-300 mb-1">
                    {activeLang === 'pb' ? 'ਸਿਰਲੇਖ (Header Label):' : activeLang === 'en' ? 'Header Label:' : 'शीर्षक (Header Label):'}
                  </label>
                  <input
                    type="text"
                    value={customTitle}
                    onChange={(e) => setCustomTitle(e.target.value)}
                    className="w-full p-2 rounded-xl border border-black/15 dark:border-white/15 bg-white dark:bg-zinc-900 text-amber-950 dark:text-amber-100 font-serif text-xs"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-amber-900 dark:text-amber-300 mb-1">
                    {activeLang === 'pb' ? 'ਮੂਲ ਸਾਖੀ / ਦੋਹਾ (2 ਸਤਰਾਂ):' : activeLang === 'en' ? 'Original Sakhi / Couplet (2 lines):' : 'मूल साखी / दोहा (2 पंक्तियाँ):'}
                  </label>
                  <textarea
                    rows={2}
                    value={customText}
                    onChange={(e) => setCustomText(e.target.value)}
                    className="w-full p-2 rounded-xl border border-black/15 dark:border-white/15 bg-white dark:bg-zinc-900 text-amber-950 dark:text-amber-100 font-serif text-xs"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-amber-900 dark:text-amber-300 mb-1">
                    {activeLang === 'pb' ? 'ਭਾਵਾਰਥ (Spiritual Essence):' : activeLang === 'en' ? 'Spiritual Essence:' : 'भावार्थ (Spiritual Essence):'}
                  </label>
                  <textarea
                    rows={2}
                    value={customBhavarth}
                    onChange={(e) => setCustomBhavarth(e.target.value)}
                    className="w-full p-2 rounded-xl border border-black/15 dark:border-white/15 bg-white dark:bg-zinc-900 text-amber-950 dark:text-amber-100 font-serif text-xs"
                  />
                </div>
              </div>
            )}
          </div>

          {/* SECTION 4: SLIDERS & FINE TUNING */}
          <div className="space-y-3 pt-2 border-t border-black/10 dark:border-white/10">
            <label className="font-bold text-sm font-serif text-amber-950 dark:text-amber-200 flex items-center gap-2">
              <Sliders className="w-4 h-4 text-amber-600" />
              <span>
                {activeLang === 'pb'
                  ? '੪. ਰੋਸ਼ਨੀ ਤੇ ਪਾਰਦਰਸ਼ਤਾ ਕੰਟਰੋਲ:'
                  : activeLang === 'en'
                  ? '4. Lighting & Typography Controls:'
                  : '४. प्रकाश व पारदर्शिता नियंत्रण:'}
              </span>
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="flex justify-between text-[11px] font-bold mb-1">
                  <span>{activeLang === 'pb' ? 'ਡਾਰਕ ਵਿਗਨੇਟ ਛਾਂ:' : activeLang === 'en' ? 'Dark Vignette Shade:' : 'डार्क विग्नेट छाया:'}</span>
                  <span>{Math.round(overlayOpacity * 100)}%</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="0.85"
                  step="0.05"
                  value={overlayOpacity}
                  onChange={(e) => setOverlayOpacity(parseFloat(e.target.value))}
                  className="w-full accent-amber-600 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[11px] font-bold mb-1">
                  <span>{activeLang === 'pb' ? 'ਭਾਵਾਰਥ ਕਾਰਡ ਪਾਰਦਰਸ਼ਤਾ:' : activeLang === 'en' ? 'Meaning Card Opacity:' : 'भावार्थ कार्ड पारदर्शिता:'}</span>
                  <span>{Math.round(glassCardOpacity * 100)}%</span>
                </div>
                <input
                  type="range"
                  min="0.4"
                  max="0.95"
                  step="0.05"
                  value={glassCardOpacity}
                  onChange={(e) => setGlassCardOpacity(parseFloat(e.target.value))}
                  className="w-full accent-amber-600 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[11px] font-bold mb-1">
                  <span>{activeLang === 'pb' ? 'ਮੁੱਖ ਬਾਣੀ ਅੱਖਰ ਆਕਾਰ:' : activeLang === 'en' ? 'Main Verse Font Size:' : 'मुख्य वाणी अक्षर आकार:'}</span>
                  <span>{verseFontSize}px</span>
                </div>
                <input
                  type="range"
                  min="24"
                  max="80"
                  step="2"
                  value={verseFontSize}
                  onChange={(e) => setVerseFontSize(parseInt(e.target.value, 10))}
                  className="w-full accent-amber-600 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[11px] font-bold mb-1">
                  <span>{activeLang === 'pb' ? 'ਭਾਵਾਰਥ ਅੱਖਰ ਆਕਾਰ:' : activeLang === 'en' ? 'Meaning Font Size:' : 'भावार्थ अक्षर आकार:'}</span>
                  <span>{bhavarthFontSize}px</span>
                </div>
                <input
                  type="range"
                  min="14"
                  max="60"
                  step="1"
                  value={bhavarthFontSize}
                  onChange={(e) => setBhavarthFontSize(parseInt(e.target.value, 10))}
                  className="w-full accent-amber-600 cursor-pointer"
                />
              </div>
            </div>

            {/* Accent Color Selection & Frame Toggle */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <button
                type="button"
                onClick={handleResetSettings}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-200 font-bold hover:bg-amber-500/20 transition cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{activeLang === 'pb' ? 'ਰੀਸੈੱਟ ਕਰੋ' : activeLang === 'en' ? 'Reset All' : 'रीसेट करें'}</span>
              </button>
              <div className="flex items-center gap-2">
                <span className="font-bold text-[11px] text-amber-950 dark:text-amber-200">
                  {activeLang === 'pb' ? 'ਅੱਖਰ ਰੰਗ:' : activeLang === 'en' ? 'Accent Color:' : 'अक्षर वर्ण:'}
                </span>
                {[
                  { name: 'Gold', hex: '#FACC15' },
                  { name: 'Saffron', hex: '#F97316' },
                  { name: 'Emerald', hex: '#34D399' },
                  { name: 'Cyan', hex: '#38BDF8' },
                  { name: 'White', hex: '#FFFFFF' },
                ].map((col) => (
                  <button
                    key={col.hex}
                    type="button"
                    onClick={() => setAccentColor(col.hex)}
                    style={{ backgroundColor: col.hex }}
                    className={`w-6 h-6 rounded-full border-2 transition cursor-pointer ${
                      accentColor === col.hex ? 'border-amber-950 dark:border-white scale-110 shadow-md' : 'border-black/20'
                    }`}
                    title={col.name}
                  />
                ))}
              </div>

              <label className="flex items-center gap-2 cursor-pointer font-bold text-[11px] text-amber-950 dark:text-amber-200">
                <input
                  type="checkbox"
                  checked={showCornerOrnaments}
                  onChange={(e) => setShowCornerOrnaments(e.target.checked)}
                  className="rounded text-amber-600 focus:ring-amber-500 w-4 h-4 cursor-pointer"
                />
                <span>
                  {activeLang === 'pb'
                    ? 'ਸੁਨਹਿਰੀ ਬਾਰਡਰ ਤੇ ਕੋਨੇ ਦੀ ਸਜਾਵਟ'
                    : activeLang === 'en'
                    ? 'Golden Border & Corner Ornaments'
                    : 'स्वर्ण बॉर्डर व कोना आभूषण'}
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: LIVE CANVAS PREVIEW & DOWNLOAD (5 Cols) */}
        <div className="lg:col-span-5 space-y-4 sticky top-6">
          <div
            style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder, color: theme.textPrimary }}
            className="p-4 sm:p-5 rounded-3xl border backdrop-blur-md shadow-xl space-y-4 text-center"
          >
            <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-3">
              <span className="font-serif font-bold text-sm text-amber-950 dark:text-amber-100 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>
                  {activeLang === 'pb'
                    ? `ਲਾਈਵ ਵਾਲਪੇਪਰ ਪ੍ਰੀਵਿਊ (${aspectRatio})`
                    : activeLang === 'en'
                    ? `Live Wallpaper Preview (${aspectRatio})`
                    : `लाइव वॉलपेपर पूर्वावलोकन (${aspectRatio})`}
                </span>
              </span>

              <button
                type="button"
                onClick={handleResetSettings}
                className="p-1.5 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 text-amber-700 dark:text-amber-300 transition cursor-pointer"
                title={activeLang === 'pb' ? 'ਰੀਸੈੱਟ ਕਰੋ' : activeLang === 'en' ? 'Reset Preview' : 'रीसेट करें'}
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Hidden actual canvas element for drawing */}
            <canvas ref={canvasRef} className="hidden" />

            {/* Live Rendered Image Preview Container */}
            <div className="bg-black/80 rounded-2xl p-2 border border-amber-500/20 overflow-hidden shadow-inner flex items-center justify-center min-h-[360px] max-h-[520px]">
              {previewResult ? (
                <img
                  src={previewResult.objectUrl}
                  alt="Nature Wallpaper Preview"
                  className="max-h-[480px] w-auto rounded-xl object-contain shadow-2xl transition scale-[1] hover:scale-[1.01]"
                />
              ) : (
                <div className="p-8 text-white/60 font-serif text-xs animate-pulse">
                  {activeLang === 'pb'
                    ? 'ਵਾਲਪੇਪਰ ਤਿਆਰ ਹੋ ਰਿਹਾ ਹੈ...'
                    : activeLang === 'en'
                    ? 'Rendering wallpaper...'
                    : 'वॉलपेपर तैयार हो रहा है...'}
                </div>
              )}
            </div>

            {/* Toast Message */}
            {toastMessage && (
              <div className="p-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-md animate-fadeIn flex items-center justify-center gap-2">
                <Check className="w-4 h-4" />
                <span>{toastMessage}</span>
              </div>
            )}

            {/* ACTION BUTTONS */}
            <div className="space-y-2 pt-1">
              <button
                type="button"
                onClick={() => {
                  const isRemoving = selectedPreset === globalWallpaper;
                  setGlobalWallpaper(isRemoving ? null : selectedPreset);
                  sacredHaptics.lightTap();
                  setToastMessage(
                    isRemoving
                      ? (activeLang === 'pb' ? 'ਕੁਦਰਤੀ ਬੈਕਗ੍ਰਾਊਂਡ ਹਟਾਇਆ ਗਿਆ' : activeLang === 'en' ? 'Global Nature Theme removed' : 'कुदरती थीम हटाई गई')
                      : (activeLang === 'pb' ? '✓ ਪੂਰੇ ਐਪ ਵਿੱਚ ਕੁਦਰਤੀ ਥੀਮ ਲਾਗੂ ਹੋ ਗਈ!' : activeLang === 'en' ? '✓ Global Nature Theme applied across app!' : '✓ पूरे ऐप पर कुदरती थीम लागू हो गई!')
                  );
                  setTimeout(() => setToastMessage(null), 3000);
                }}
                className={`w-full py-3.5 px-4 rounded-2xl font-bold text-xs sm:text-sm shadow-lg transition flex items-center justify-center gap-2 cursor-pointer ${
                  selectedPreset === globalWallpaper 
                    ? 'bg-red-600 hover:bg-red-700 text-white' 
                    : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                }`}
              >
                {selectedPreset === globalWallpaper ? <X size={18} /> : <Sparkles size={18} />}
                <span>
                  {selectedPreset === globalWallpaper
                    ? activeLang === 'pb'
                      ? 'ਵਾਲਪੇਪਰ ਹਟਾਓ (Remove Global)'
                      : activeLang === 'en'
                      ? 'Remove Global Wallpaper'
                      : 'वॉलपेपर हटाएं (Remove Global)'
                    : activeLang === 'pb'
                    ? 'ਪੂਰੇ ਐਪ ਤੇ ਲਗਾਓ (Apply Globally)'
                    : activeLang === 'en'
                    ? 'Apply Across Entire App'
                    : 'पूरे ऐप पर लगाएं (Apply Globally)'}
                </span>
              </button>

              <button
                type="button"
                onClick={() => handleDownloadOrShare(false)}
                disabled={isGenerating || !previewResult}
                className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold text-xs sm:text-sm shadow-lg transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Download className="w-4.5 h-4.5" />
                <span>
                  {activeLang === 'pb'
                    ? 'HD ਵਾਲਪੇਪਰ ਡਾਊਨਲੋਡ ਕਰੋ (PNG)'
                    : activeLang === 'en'
                    ? 'Download HD Wallpaper (PNG)'
                    : 'HD वॉलपेपर डाउनलोड करें (PNG)'}
                </span>
              </button>

              <button
                type="button"
                onClick={() => handleDownloadOrShare(true)}
                disabled={isGenerating || !previewResult}
                className="w-full py-3 px-4 rounded-2xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-amber-950 dark:text-amber-100 font-bold text-xs transition flex items-center justify-center gap-2 cursor-pointer border border-black/10 dark:border-white/10"
              >
                <Share2 className="w-4 h-4 text-amber-600" />
                <span>
                  {activeLang === 'pb'
                    ? '📱 ਗੈਲਰੀ ਵਿੱਚ ਸੇਵ ਕਰੋ / ਸਾਂਝਾ ਕਰੋ'
                    : activeLang === 'en'
                    ? '📱 Save to Gallery / Share'
                    : '📱 गैलरी में सहेजें / मोबाइल शेयर'}
                </span>
              </button>
            </div>

            {/* Mobile wallpaper tip */}
            <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-950 dark:text-amber-200 text-[11px] text-left flex items-start gap-2">
              <Smartphone className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                {activeLang === 'pb' ? (
                  <>
                    <strong>ਮੋਬਾਈਲ ਲੌਕ-ਸਕ੍ਰੀਨ ਸੁਝਾਅ:</strong> ਡਾਊਨਲੋਡ ਕੀਤੇ ਚਿੱਤਰ ਨੂੰ ਆਪਣੇ ਫ਼ੋਨ ਦੀ ਗੈਲਰੀ ਵਿੱਚ ਖੋਲ੍ਹੋ ਅਤੇ "Set as Wallpaper" ਚੁਣੋ।
                  </>
                ) : activeLang === 'en' ? (
                  <>
                    <strong>Lockscreen Tip:</strong> Open the downloaded HD PNG in your phone Gallery and choose "Set as Wallpaper".
                  </>
                ) : (
                  <>
                    <strong>मोबाइल लॉक-स्क्रीन टिप:</strong> डाउनलोड किए गए चित्र को अपने फ़ोन की Gallery में खोलें और "Set as Wallpaper" चुनें।
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
