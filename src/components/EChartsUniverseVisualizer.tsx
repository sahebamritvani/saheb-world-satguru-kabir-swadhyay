import React, { useRef, useState, useMemo, useEffect, useCallback } from 'react';
import ReactECharts from 'echarts-for-react';
import type { EChartsOption } from 'echarts';
import { useAppTheme } from '../theme/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { sacredHaptics } from '../services/haptics';
import { 
  Sun, 
  Sparkles, 
  RotateCcw, 
  Maximize2, 
  Minimize2, 
  X, 
  Search,
  BookOpen,
  Network,
  GitFork,
  Check,
  Compass,
  Layers,
  Award
} from 'lucide-react';
import { Language } from '../types';

export interface SunburstNode {
  name: string;
  value?: number;
  itemStyle?: {
    color?: string;
    borderColor?: string;
    borderWidth?: number;
    shadowBlur?: number;
    shadowColor?: string;
    opacity?: number;
  };
  label?: {
    color?: string;
    rotate?: number | 'radial' | 'tangential';
    minAngle?: number;
    fontSize?: number;
    fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | number;
    overflow?: 'truncate' | 'break' | 'breakAll' | 'none';
    ellipsis?: string;
  };
  tooltipInfo?: {
    title: string;
    realm: string;
    category: string;
    desc: string;
    granthTeaching?: string;
    stateOfSoul?: string;
    verse?: string;
    searchKeywords?: string;
  };
  children?: SunburstNode[];
}

interface EChartsUniverseVisualizerProps {
  externalSearchQuery?: string;
  onSelectNode?: (nodeInfo: NonNullable<SunburstNode['tooltipInfo']>) => void;
}

export const EChartsUniverseVisualizer: React.FC<EChartsUniverseVisualizerProps> = ({
  externalSearchQuery = '',
  onSelectNode
}) => {
  const chartRef = useRef<any>(null);
  const { theme, isDarkMode } = useAppTheme();
  const { language, setLanguage } = useLanguage();

  // Search filter query state
  const [searchQuery, setSearchQuery] = useState<string>(externalSearchQuery);

  // Sync external search query
  useEffect(() => {
    if (externalSearchQuery !== undefined) {
      setSearchQuery(externalSearchQuery);
    }
  }, [externalSearchQuery]);

  // Visualizer Mode: 'sunburst' | 'network' | 'tree'
  const [chartMode, setChartMode] = useState<'sunburst' | 'network' | 'tree'>('sunburst');
  
  // Fullscreen / Full Page state
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // Key to force reset/remount chart reliably on reset click
  const [chartKey, setChartKey] = useState<number>(0);

  // Reset toast state
  const [resetToast, setResetToast] = useState<string | null>(null);

  // Selected node details for drawer / bottom sheet
  const [selectedNodeInfo, setSelectedNodeInfo] = useState<NonNullable<SunburstNode['tooltipInfo']> | null>(null);

  // Handle ESC key to exit fullscreen
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

  // Lock body scroll during full page view
  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isFullscreen]);

  // Quick Teaching Tags for search filter
  const searchTags = useMemo(() => [
    { label: language === 'pb' ? 'ਅਨਾਮੀ ਲੋਕ (ਸਰਵਉੱਚ)' : language === 'en' ? 'Anami Lok (Apex)' : 'अनामी लोक (सर्वोच्च)', query: 'Anami' },
    { label: language === 'pb' ? 'ਸਤਯਲੋਕ / ਸੱਚਖੰਡ' : language === 'en' ? 'Satlok' : 'सत्यलोक / सचखंड', query: 'Satlok' },
    { label: language === 'pb' ? 'ਅਲਖ ਤੇ ਅਗਮ ਲੋਕ' : language === 'en' ? 'Alakh & Agam' : 'अलख व अगम लोक', query: 'Alakh' },
    { label: language === 'pb' ? '੨੧ ਬ੍ਰਹਿਮੰਡ (ਕਾਲ)' : language === 'en' ? '21 Brahmands' : '२१ ब्रह्मांड (काल)', query: 'Brahmand' },
    { label: language === 'pb' ? 'ਮਾਨਸਰੋਵਰ ਤੇ ਮਹਾਂ-ਸੁੰਨ' : language === 'en' ? 'Mansarovar Void' : 'मानसरोवर व महा-सुन्न', query: 'Mansarovar' },
    { label: language === 'pb' ? 'ਕਬੀਰ ਸਾਗਰ ਉਪਦੇਸ਼' : language === 'en' ? 'Kabir Sagar Teachings' : 'कबीर सागर उपदेश', query: 'Kabir Sagar' },
  ], [language]);

  // HIERARCHY DATA ORDER (AS REQUESTED):
  // 1. ANAMI LOK (ABSOLUTE TOP / ਸਰਵਉੱਚ ਸ਼ਿਖਰ / सबसे ऊपर)
  // 2. SATLOK / SATYALOKA (ਅਮਰਲੋਕ ਸਤਿਪੁਰੁਸ਼ ਧਾਮ)
  // 3. ALAKH LOK (ਅਲਖ ਲੋਕ)
  // 4. AGAM LOK (ਅਗਮ ਲੋਕ)
  // 5. INTERMEDIATE REALMS (Bhanwar Gupha, Maha Sunna, Trikuti)
  // 6. 21 BRAHMANDS OF KAAL NIRANJAN (Nether, Mortal, Astral, Causal)
  const sunburstData = useMemo<SunburstNode[]>(() => {
    const isPb = language === 'pb';
    const isEn = language === 'en';
    const query = searchQuery.trim().toLowerCase();

    // Helper to evaluate matching search
    const matchesSearch = (title: string, desc: string, realm: string, keywords: string = '') => {
      if (!query) return true;
      return (
        title.toLowerCase().includes(query) ||
        desc.toLowerCase().includes(query) ||
        realm.toLowerCase().includes(query) ||
        keywords.toLowerCase().includes(query)
      );
    };

    // 21 Brahmands of Kaal Niranjan
    const brahmandItems: SunburstNode[] = Array.from({ length: 21 }, (_, i) => {
      const bNum = i + 1;
      let planeTypePb = 'ਸੂਖਮ ਕਰਮ ਖੇਤਰ';
      let planeTypeHi = 'सूक्ष्म कर्म क्षेत्र';
      let planeTypeEn = 'Subtle Karmic Plane';
      let color = '#78350f'; // bronze / dark brown

      if (bNum <= 7) {
        planeTypePb = 'ਅਧੋਲੋਕ (੭ ਪਾਤਾਲ ਮੰਡਲ)';
        planeTypeHi = 'अधोलोक (७ पाताल मंडल)';
        planeTypeEn = 'Nether Realms (7 Patalas)';
        color = '#991b1b'; // dark ruby red
      } else if (bNum <= 14) {
        planeTypePb = 'ਮੱਧਲੋਕ (ਭੂਲੋਕ, ਪ੍ਰਿਥਵੀ ਤੇ ਸਵਰਗ)';
        planeTypeHi = 'मध्यलोक (भूलोक, पृथ्वी व स्वर्ग)';
        planeTypeEn = 'Mortal & Astral Realms';
        color = '#c2410c'; // burnt orange
      } else {
        planeTypePb = 'ਉੱਚ ਤਪੋਲੋਕ ਤੇ ਬ੍ਰਹਮਲੋਕ';
        planeTypeHi = 'उच्च तपोलोक व ब्रह्मलोक';
        planeTypeEn = 'Causal & Brahma Planes';
        color = '#b45309'; // amber brown
      }

      const name = isPb ? `ਬ੍ਰਹਿਮੰਡ ${bNum}` : isEn ? `Univ ${bNum}` : `ब्रह्मांड ${bNum}`;
      const title = `${name} (${isPb ? planeTypePb : isEn ? planeTypeEn : planeTypeHi})`;
      const desc = isPb
        ? `ਕਾਲ ਦੇ ੨੧ ਬ੍ਰਹਿਮੰਡਾਂ ਵਿੱਚੋਂ ${bNum}ਵਾਂ ਬ੍ਰਹਿਮੰਡ ਜਿੱਥੇ ਜੀਵ ਕਰਮਾਂ ਅਤੇ ਚੌਰਾਸੀ ਲੱਖ ਜੂਨਾਂ ਦੇ ਚੱਕਰ ਵਿੱਚ ਬੱਝਾ ਰਹਿੰਦਾ ਹੈ। ਇੱਥੇ ਜਨਮ, ਮਰਨ ਅਤੇ ਪਾਪ-ਪੁੰਨ ਦਾ ਲੇਖਾ ਹੁੰਦਾ ਹੈ।`
        : isEn
        ? `Universe ${bNum} of the 21 Brahmands under Kaal Niranjan, where souls undergo karmic transmigrations across 8.4 million species.`
        : `काल के २१ ब्रह्मांडों में से ${bNum}वाँ ब्रह्मांड जहाँ जीवात्मा कर्म-चक्र एवं चौरासी लाख योनियों में बँधी रहती है। यहाँ जन्म, मृत्यु और पाप-पुण्य का चक्र निरंतर चलता है।`;
      const realm = isPb ? 'ਕਾਲ ਨਿਰੰਜਨ ਦਾ ਨਾਸ਼ਵਾਨ ਖੇਤਰ' : isEn ? 'Mortal Territory of Kaal Niranjan' : 'काल निरंजन का नश्वर क्षेत्र';
      const keywords = `brahmand universe ${bNum} kaal niranjan maya karma pind patal mrityulok`;
      const isMatched = matchesSearch(title, desc, realm, keywords);

      return {
        name,
        value: 1,
        itemStyle: {
          color,
          borderColor: isDarkMode ? '#1e1e24' : '#ffffff',
          borderWidth: isMatched && query ? 2.5 : 1,
          opacity: query && !isMatched ? 0.25 : 1,
          shadowBlur: isMatched && query ? 15 : 0,
          shadowColor: '#f59e0b',
        },
        label: {
          color: '#ffffff',
          fontSize: isFullscreen ? 9 : 8,
          minAngle: 5,
          rotate: 'radial',
          overflow: 'truncate',
          ellipsis: '...',
        },
        tooltipInfo: {
          title,
          realm,
          category: isPb ? '੨੧ ਬ੍ਰਹਿਮੰਡ (ਨਾਸ਼ਵਾਨ)' : isEn ? '21 Universes (Material)' : '२१ ब्रह्मांड (नश्वर)',
          desc,
          granthTeaching: isPb 
            ? 'ਕਬੀਰ ਸਾਗਰ: ਇੱਕੀਸ ਬ੍ਰਹਿਮੰਡ ਕਾਲ ਕਾ ਪਸਾਰਾ, ਤਾਕੇ ਪਾਰ ਅਮਰਪੁਰ ਧਾਰਾ॥' 
            : isEn 
            ? 'Kabir Sagar: The 21 universes are the expanse of Kaal; beyond them lies the immortal river.' 
            : 'कबीर सागर: इक्कीस ब्रह्मांड काल का पसारा, ताके पार अमरपुर धारा॥',
          stateOfSoul: isPb 
            ? 'ਕਰਮ-ਬੰਧਨ ਅਤੇ ਜਨਮ-ਮਰਨ ਦੇ ਚੱਕਰ ਵਿੱਚ' 
            : isEn 
            ? 'Bound in karmic transmigrations & rebirth' 
            : 'कर्म-बंधन और जन्म-मरण के चक्र में',
          verse: isPb
            ? 'ਇੱਕੀਸ ਬ੍ਰਹਿਮੰਡ ਕਾਲ ਕਾ ਪਸਾਰਾ, ਤਾਕੇ ਪਾਰ ਅਮਰਪੁਰ ਧਾਰਾ॥'
            : isEn
            ? 'Twenty-one universes are the expanse of Kaal; beyond them flows the eternal stream of Amarlok.'
            : 'इक्कीस ब्रह्मांड काल का पसारा, ताके पार अमरपुर धारा॥',
          searchKeywords: keywords,
        },
      };
    });

    // 1. ANAMI LOK (ABSOLUTE TOP ROOT)
    const anamiTitle = isPb ? 'ਅਨਾਮੀ ਲੋਕ (ਅਕਹ ਧਾਮ — ਸਰਵਉੱਚ ਸ਼ਿਖਰ / ਸਭ ਤੋਂ ਉੱਪਰ)' : isEn ? 'Anami Lok (The Supreme Nameless Pinnacle - Absolute Top)' : 'अनामी लोक (अकथ धाम — सर्वोच्च शिखर / सबसे ऊपर)';
    const anamiDesc = isPb
      ? 'ਸਮੂਹ ਸ੍ਰਿਸ਼ਟੀ, ਸਾਰੇ ਲੋਕਾਂ ਅਤੇ ਸਮੁੱਚੀ ਚੇਤਨਾ ਦਾ ਸਰਵਉੱਚ ਅਨਾਦਿ ਸ਼ਿਖਰ। ਜਿੱਥੇ ਨਾ ਨਾਮ ਹੈ ਨਾ ਰੂਪ, ਸਿਰਫ਼ ਅਖੰਡ ਨਿਰਮਲ ਚੇਤਨਾ ਅਤੇ ਅਕਹ ਸੁੱਖ ਦਾ ਮਹਾਂ-ਸਾਗਰ ਹੈ।'
      : isEn
      ? 'The absolute top timeless pinnacle of all realms and creation beyond name and form; the infinite ocean of supreme unconditioned radiant consciousness.'
      : 'समस्त ब्रह्मांडों, समस्त लोकों एवं सकल चेतना का सर्वोच्च अनादि शिखर (सबसे ऊपर)। जहाँ न कोई नाम है न रूप, केवल अखंड सच्चिदानंद का अनंत महासागर है।';
    const anamiRealm = isPb ? 'ਸਰਵਉੱਚ ਅਨਾਦਿ ਸ਼ਿਖਰ (ਸਭ ਤੋਂ ਉੱਪਰ)' : isEn ? 'Supreme Timeless Apex (Absolute Top)' : 'सर्वोच्च अनादि शिखर (सर्वोपरि सबसे ऊपर)';
    const anamiKeywords = 'anami purush lok supreme apex akah dham kabeer sagar highest';
    const anamiMatched = matchesSearch(anamiTitle, anamiDesc, anamiRealm, anamiKeywords);

    // 2. SATLOK / SATYALOKA (Next under Anami)
    const satlokTitle = isPb ? 'ਸਤਯਲੋਕ / ਸੱਚਖੰਡ (ਸਤਿਪੁਰੁਸ਼ ਕਬੀਰ ਸਾਹੇਬ ਧਾਮ)' : isEn ? 'Satlok / Satyaloka (Sachkhand - Satpurush Kabir Saheb)' : 'सत्यलोक / सचखंड (सतपुरुष कबीर साहेब धाम)';
    const satlokDesc = isPb
      ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦਾ ਨਿੱਜ ਧਾਮ ਜਿੱਥੇ ਇੱਕ-ਇੱਕ ਹੰਸ ਦਾ ਤੇਜ ਕ੍ਰੋੜਾਂ ਸੂਰਜਾਂ ਤੋਂ ਵੀ ਅਧਿਕ ਹੁੰਦਾ ਹੈ। ਅੰਮ੍ਰਿਤ ਦੇ ਮਾਨਸਰੋਵਰ ਅਤੇ ਅਮਰ ਕਲਪਵ੍ਰਿਕਸ਼ ਹਨ।'
      : isEn
      ? 'The eternal heart of Amarlok where Satguru Kabir Saheb resides. Every soul shines brighter than millions of suns.'
      : 'सतगुरु कबीर साहेब का निज शाश्वत धाम जहाँ एक-एक हंस का तेज करोड़ों सूर्यों से अधिक देदीप्यमान होता है। यहाँ अमृत के मानसरोवर व कल्पवृक्ष हैं।';
    const satlokRealm = isPb ? 'ਅਮਰਲੋਕ ਦਾ ਮੁੱਖ ਪ੍ਰਵੇਸ਼ ਧਾਮ' : isEn ? 'Heart of Amarlok' : 'अमरलोक का मुख्य दिव्य धाम';
    const satlokKeywords = 'satlok satyaloka sachkhand satpurush kabir saheb hans amrit mansarovar';
    const satlokMatched = matchesSearch(satlokTitle, satlokDesc, satlokRealm, satlokKeywords);

    // 3. ALAKH LOK (Next)
    const alakhTitle = isPb ? 'ਅਲਖ ਲੋਕ (ਅਲਖ ਪੁਰਸ਼ ਮੰਡਲ)' : isEn ? 'Alakh Lok (Incomprehensible Plane)' : 'अलख लोक (अलख पुरुष मंडल)';
    const alakhDesc = isPb
      ? 'ਜੋ ਲਿਖਿਆ ਜਾਂ ਬੋਲਿਆ ਨਹੀਂ ਜਾ ਸਕਦਾ; ਬੁੱਧੀ ਤੋਂ ਪਰੇ ਅਲਖ ਪੁਰਸ਼ ਦਾ ਦਿਵਯ ਮੰਡਲ।'
      : isEn
      ? 'Beyond verbal articulation and intellectual concepts; the pristine plane of Alakh Purush.'
      : 'जो मन-बुद्धि की सीमा से परे है; अलख पुरुष का अनिर्वचनीय दिव्य आध्यात्मिक मंडल।';
    const alakhRealm = isPb ? 'ਸੂਖਮ ਅਲੌਕਿਕ ਅਵਸਥਾ' : isEn ? 'Transcendent Void' : 'सूक्ष्म अलौकिक स्थिति';
    const alakhKeywords = 'alakh purush lok transcendent';
    const alakhMatched = matchesSearch(alakhTitle, alakhDesc, alakhRealm, alakhKeywords);

    // 4. AGAM LOK (Next)
    const agamTitle = isPb ? 'ਅਗਮ ਲੋਕ (ਅਗਮ ਪੁਰਸ਼ ਧਾਮ)' : isEn ? 'Agam Lok (Inaccessible Realm)' : 'अगम लोक (अगम पुरुष धाम)';
    const agamDesc = isPb
      ? 'ਅਗਮ ਪੁਰਸ਼ ਦਾ ਸਥਾਨ ਜਿੱਥੇ ਕੇਵਲ ਪੂਰਨ ਸਤਿਗੁਰੂ ਦੇ ਸਾਰ ਸ਼ਬਦ ਦੀ ਡੋਰ ਨਾਲ ਹੀ ਪਹੁੰਚਿਆ ਜਾ ਸਕਦਾ ਹੈ।'
      : isEn
      ? 'The domain reached exclusively via the unbroken cord of the Master\'s Sar Shabad.'
      : 'अगम पुरुष का पावन धाम जहाँ केवल सार शब्द की डोर द्वारा ही गमन संभव है।';
    const agamRealm = isPb ? 'ਪਰਮ ਗੂੜ੍ਹ ਖੇਤਰ' : isEn ? 'Unfathomable Pinnacle' : 'परम अगम्य क्षेत्र';
    const agamKeywords = 'agam purush lok sar shabad';
    const agamMatched = matchesSearch(agamTitle, agamDesc, agamRealm, agamKeywords);

    // 5. INTERMEDIARY VOID (Bhanwar Gupha, Maha Sunna, Trikuti)
    const interTitle = isPb ? 'ਮੱਧ ਲੋਕ ਤੇ ਪਾਰਬ੍ਰਹਮ ਦੁਆਰ' : isEn ? 'Intermediate & Parabrahm Portals' : 'मध्य लोक व पारब्रह्म द्वार';
    const interDesc = isPb
      ? 'ਕਾਲ ਦੇ ੨੧ ਬ੍ਰਹਿਮੰਡਾਂ ਤੋਂ ਪਾਰ ਅਤੇ ਅਮਰਲੋਕ ਦੇ ਦੁਆਰ ਦੇ ਵਿਚਕਾਰ ਦਾ ਅੰਤਰਿਕਸ਼ ਖੇਤਰ।'
      : isEn
      ? 'The cosmic threshold between the 21 material universes and the eternal domain of Amarlok.'
      : 'काल के २१ ब्रह्मांडों के पार एवं अमरलोक के प्रवेश द्वार के मध्य का पावन क्षेत्र।';
    const interRealm = isPb ? 'ਪਾਰਬ੍ਰਹਮ ਦੁਆਰ' : isEn ? 'Gate of Parabrahm' : 'पारब्रह्म द्वार';
    const interKeywords = 'bhanwar gupha maha sunna trikuti soham';
    const interMatched = matchesSearch(interTitle, interDesc, interRealm, interKeywords);

    // 6. KAAL-LOK (21 Brahmands)
    const kaalTitle = isPb ? 'ਕਾਲ-ਲੋਕ (੨੧ ਬ੍ਰਹਿਮੰਡ)' : isEn ? 'Kaal-Lok (21 Universes)' : 'काल-लोक (२१ ब्रह्मांड)';
    const kaalDesc = isPb
      ? 'ਕਾਲ ਨਿਰੰਜਨ ਦੇ ੨੧ ਬ੍ਰਹਿਮੰਡ ਜਿੱਥੇ ਜੀਵਾਤਮਾ ਤ੍ਰਿਗੁਣ ਮਾਇਆ (ਰਜੋ, ਤਮੋ, ਸਤੋ) ਦੇ ਜਾਲ ਵਿੱਚ ਫਸੀ ਰਹਿੰਦੀ ਹੈ।'
      : isEn
      ? 'The 21 universes governed by Kaal Niranjan, where souls remain trapped under the three gunas (Rajas, Tamas, Sattva).'
      : 'काल निरंजन के २१ ब्रह्मांड जहाँ जीवात्मा त्रिगुण माया (रजो, तमो, सतो) के जाल में फँसी रहती है।';
    const kaalRealm = isPb ? 'ਨਾਸ਼ਵਾਨ ਖੇਤਰ' : isEn ? 'Material Realm' : 'नश्वर क्षेत्र';
    const kaalKeywords = 'kaal lok niranjan 21 brahmands maya gunas';
    const kaalMatched = matchesSearch(kaalTitle, kaalDesc, kaalRealm, kaalKeywords);

    return [
      {
        name: isPb ? 'ਅਨਾਮੀ ਲੋਕ (ਸਭ ਤੋਂ ਉੱਪਰ)' : isEn ? 'Anami Lok (Top)' : 'अनामी लोक (सर्वोच्च)',
        itemStyle: {
          color: '#991b1b', // Supreme crimson red
          borderColor: '#ffffff',
          borderWidth: anamiMatched && query ? 3.5 : 2.5,
          shadowBlur: 25,
          shadowColor: 'rgba(185, 28, 28, 0.9)',
          opacity: query && !anamiMatched ? 0.4 : 1,
        },
        label: {
          color: '#ffffff',
          fontSize: isFullscreen ? 11.5 : 10,
          fontWeight: 'bold',
          overflow: 'truncate',
        },
        tooltipInfo: {
          title: anamiTitle,
          realm: anamiRealm,
          category: isPb ? 'ਸਰਵਉੱਚ ਅਨਾਮੀ ਚੇਤਨਾ' : isEn ? 'Absolute Apex Source' : 'सर्वोच्च अनामी चेतना',
          desc: anamiDesc,
          granthTeaching: isPb
            ? 'ਕਬੀਰ ਸਾਗਰ: ਅਲਖ ਅਗਮ ਕੀ ਸੀਮਾ ਨਾਹੀਂ, ਅਨਾਮੀ ਪੁਰਸ਼ ਤਹਾਂ ਸਮਾਨੀ। ਜਹਾਂ ਨ ਸੂਰਜ ਚਾਂਦ ਨ ਪਾਨੀ, ਅਨਾਮੀ ਪੁਰਸ਼ ਕੀ ਅਜਬ ਕਹਾਨੀ॥'
            : isEn
            ? 'Kabir Sagar: The boundless summit where Anami Purush dwells beyond all elements.'
            : 'कबीर सागर: अलख अगम की सीमा नाहीं, अनामी पुरुष तहाँ समानी। जहाँ न सूरज चाँद न पानी, अनामी पुरुष की अजब कहानी॥',
          stateOfSoul: isPb 
            ? 'ਪਰਮ ਕੈਵਲਯ ਅਦਵੈਤ ਸਥਿਤੀ (ਪੂਰਨ ਮੁਕਤੀ)' 
            : isEn 
            ? 'Supreme Non-dual Kaivalya Bliss' 
            : 'परम कैवल्य अद्वैत स्थिति (पूर्ण मोक्ष)',
          verse: isPb
            ? 'ਅਲਖ ਅਗਮ ਕੀ ਸੀਮਾ ਨਾਹੀਂ, ਅਨਾਮੀ ਪੁਰਸ਼ ਤਹਾਂ ਸਮਾਨੀ॥'
            : isEn
            ? 'Beyond the limits of Alakh and Agam dwells the Nameless Purush.'
            : 'अलख अगम की सीमा नाहीं, अनामी पुरुष तहाँ समानी॥',
          searchKeywords: anamiKeywords,
        },
        children: [
          // 1. SATLOK / SATYALOKA (Under Anami)
          {
            name: isPb ? 'ਸਤਯਲੋਕ (ਸੱਚਖੰਡ)' : isEn ? 'Satlok (Sachkhand)' : 'सत्यलोक (सचखंड)',
            itemStyle: {
              color: '#f59e0b', // Radiant sacred gold
              borderColor: '#ffffff',
              borderWidth: satlokMatched && query ? 3 : 2,
              shadowBlur: 15,
              shadowColor: 'rgba(245, 158, 11, 0.7)',
              opacity: query && !satlokMatched ? 0.35 : 1,
            },
            label: {
              color: '#78350f',
              fontSize: isFullscreen ? 11 : 9.5,
              fontWeight: 'bold',
              overflow: 'truncate',
            },
            tooltipInfo: {
              title: satlokTitle,
              realm: satlokRealm,
              category: isPb ? 'ਸ਼ਾਸ਼ਵਤ ਅਮਰ ਮੰਡਲ' : isEn ? 'Eternal Abode of Kabir Saheb' : 'शाश्वत अमर मंडल',
              desc: satlokDesc,
              granthTeaching: isPb
                ? 'ਕਬੀਰ ਸਾਗਰ: ਕੋਟਿਨ ਰਵਿ ਜਾਕੇ ਤੇਜ ਪ੍ਰਕਾਸ਼ਾ, ਹੰਸਾ ਕਰਹਿਂ ਅੰਮ੍ਰਿਤ ਕਾ ਪਾਸਾ। ਸਤਿ ਕਬੀਰ ਸਾਹੇਬ ਸੁਖਦਾਈ, ਅਮਰ ਲੋਕ ਮੇਂ ਜਯੋਤ ਜਗਾਈ॥'
                : isEn
                ? 'Kabir Sagar: The eternal realm where souls dwell in nectar, illuminated by Satguru Kabir.'
                : 'कबीर सागर: कोटिन रवि जाके तेज प्रकाशा, हंसा करहिं अमृत का पासा। सत्य कबीर साहेब सुखदाई, अमर लोक में ज्योत जगाई॥',
              stateOfSoul: isPb ? 'ਹੰਸ ਰੂਪ ਵਿਚ ਅਮਰ ਤੇ ਅਬਿਨਾਸ਼ੀ' : isEn ? 'Immortal Hansa in pure bliss' : 'हंस रूप में अमर व अविनाशी',
              verse: isPb
                ? 'ਅਮਰ ਲੋਕ ਸੋਈ ਹੰਸਾ ਜਾਈ, ਜਾਕੋ ਸਤਿਗੁਰੂ ਦੇਹਿ ਲਖਾਈ॥'
                : isEn
                ? 'To the Immortal World only that pure soul arrives, to whom the True Satguru reveals the path.'
                : 'अमर लोक सोई हंसा जाई, जाको सतगुरु देहि लखाई॥',
              searchKeywords: satlokKeywords,
            },
            children: [
              // 2. ALAKH LOK (Under Satlok)
              {
                name: isPb ? 'ਅਲਖ ਲੋਕ' : isEn ? 'Alakh Lok' : 'अलख लोक',
                value: 6,
                itemStyle: { 
                  color: '#ea580c',
                  borderWidth: alakhMatched && query ? 2.5 : 1.5,
                  opacity: query && !alakhMatched ? 0.3 : 1
                },
                label: { color: '#ffffff', fontSize: isFullscreen ? 10 : 8.5, fontWeight: 'bold', overflow: 'truncate' },
                tooltipInfo: {
                  title: alakhTitle,
                  realm: alakhRealm,
                  category: isPb ? 'ਅਮਰਲੋਕ ਮੰਡਲ' : isEn ? 'Amarlok Sphere' : 'अमरलोक मंडल',
                  desc: alakhDesc,
                  granthTeaching: isPb
                    ? 'ਕਬੀਰ ਸਾਗਰ: ਅਲਖ ਅਗਮ ਕੀ ਮਹਿਮਾ ਭਾਰੀ, ਜਹੰ ਸੁਰਤ ਪਹੁੰਚੇ ਨਿਰਵਿਕਾਰੀ॥'
                    : isEn
                    ? 'Kabir Sagar: Incomprehensible plane of pristine non-attachment.'
                    : 'कबीर सागर: अलख अगम की महिमा भारी, जहँ सुरत पहुंचे निर्विकारी॥',
                  stateOfSoul: isPb ? 'ਅਲਖ ਨਿਰਮਲ ਚੇਤਨਾ' : isEn ? 'Pure transcendent awareness' : 'अलख निर्मल चेतना',
                  verse: isPb ? 'ਅਲਖ ਅਗਮ ਕੀ ਸੀਮਾ ਨਾਹੀਂ, ਅਨਾਮੀ ਪੁਰਸ਼ ਤਹਾਂ ਸਮਾਨੀ॥' : 'अलख अगम की सीमा नाहीं, अनामी पुरुष तहाँ समानी॥',
                  searchKeywords: alakhKeywords,
                },
              },

              // 3. AGAM LOK (Under Satlok)
              {
                name: isPb ? 'ਅਗਮ ਲੋਕ' : isEn ? 'Agam Lok' : 'अगम लोक',
                value: 6,
                itemStyle: { 
                  color: '#d97706',
                  borderWidth: agamMatched && query ? 2.5 : 1.5,
                  opacity: query && !agamMatched ? 0.3 : 1
                },
                label: { color: '#ffffff', fontSize: isFullscreen ? 10 : 8.5, fontWeight: 'bold', overflow: 'truncate' },
                tooltipInfo: {
                  title: agamTitle,
                  realm: agamRealm,
                  category: isPb ? 'ਅਮਰਲੋਕ ਮੰਡਲ' : isEn ? 'Amarlok Sphere' : 'अमरलोक मंडल',
                  desc: agamDesc,
                  granthTeaching: isPb
                    ? 'ਕਬੀਰ ਸਾਗਰ: ਅਗਮ ਦੇਸ਼ ਕੀ ਅਜਬ ਕਹਾਨੀ, ਜੋ ਜਾਨੇ ਸੋਈ ਪਹਿਚਾਨੇ। ਕਬੀਰ ਸਾਹੇਬ ਅਗਮ ਲਖਾਯਾ, ਆਵਾਗਮਨ ਕਾ ਕਸ਼ਟ ਮਿਟਾਯਾ॥'
                    : isEn
                    ? 'Kabir Sagar: Inaccessible realm attained via the true Sar Shabad.'
                    : 'कबीर सागर: अगम देश की अजब कहानी, जो जाने सोई पहचाने। कबीर साहेब अगम लखाया, आवागमन का कष्ट मिटाया॥',
                  stateOfSoul: isPb ? 'ਅਗਮ ਅਵਸਥਾ ਵਿੱਚ ਲੀਨ' : isEn ? 'Merged in Agam essence' : 'अगम अवस्था में लीन',
                  verse: isPb ? 'ਕਬੀਰ ਸਾਹੇਬ ਅਗਮ ਲਖਾਯਾ, ਆਵਾਗਮਨ ਕਾ ਕਸ਼ਟ ਮਿਟਾਯਾ॥' : 'कबीर साहेब अगम लखाया, आवागमन का कष्ट मिटाया॥',
                  searchKeywords: agamKeywords,
                },
              },
            ],
          },

          // 4. INTERMEDIATE REALMS & PORTALS
          {
            name: isPb ? 'ਮੱਧ ਲੋਕ ਤੇ ਪਾਰਬ੍ਰਹਮ' : isEn ? 'Intermediate Planes' : 'मध्य लोक व पारब्रह्म',
            itemStyle: {
              color: '#6366f1',
              borderColor: '#ffffff',
              borderWidth: interMatched && query ? 2.5 : 1.5,
              opacity: query && !interMatched ? 0.3 : 1,
            },
            label: {
              color: '#ffffff',
              fontSize: isFullscreen ? 9.5 : 8.5,
              fontWeight: 'bold',
              overflow: 'truncate',
            },
            tooltipInfo: {
              title: interTitle,
              realm: interRealm,
              category: isPb ? 'ਸੂਖਮ ਮਾਰਗ' : isEn ? 'Subtle Path' : 'सूक्ष्म मार्ग',
              desc: interDesc,
              granthTeaching: isPb
                ? 'ਕਬੀਰ ਸਾਗਰ: ਮਾਨਸਰੋਵਰ ਨ੍ਹਾਏ ਕੇ, ਹੰਸਾ ਭਏ ਸਚੇਤ। ਪਾਪ-ਪੁੰਨ ਸਬ ਦੂਰ ਭਏ, ਨਿਰਮਲ ਭਯੋ ਨਿਕੇਤ॥'
                : isEn
                ? 'Kabir Sagar: Crossing the great void and bathing in Mansarovar cleanses all karmic sheaths.'
                : 'कबीर सागर: मानसरोवर न्हाय के, हंसा भये सचेत। पाप-पुण्य सब दूर भये, निरमल भयो निकेत॥',
              searchKeywords: interKeywords,
            },
            children: [
              {
                name: isPb ? 'ਭੰਵਰ ਗੁਫ਼ਾ' : isEn ? 'Bhanwar Gupha' : 'भंवर गुफा',
                value: 4,
                itemStyle: { color: '#8b5cf6' },
                label: { color: '#ffffff', fontSize: isFullscreen ? 9 : 7.5, overflow: 'truncate' },
                tooltipInfo: {
                  title: isPb ? 'ਭੰਵਰ ਗੁਫ਼ਾ (ਸੋਹੰ ਲੋਕ — ਮੁਰਲੀ ਧੁਨ)' : isEn ? 'Bhanwar Gupha (Soham Realm)' : 'भंवर गुफा (सोहं लोक — मुरली धुन)',
                  realm: isPb ? 'ਅਮਰਲੋਕ ਦਾ ਮੁੱਖ ਦੁਆਰ' : isEn ? 'Portal of Amarlok' : 'अमरलोक का मुख्य द्वार',
                  category: isPb ? 'ਸੂਖਮ ਮੰਡਲ' : isEn ? 'Subtle Sphere' : 'सूक्ष्म मंडल',
                  desc: isPb
                    ? 'ਜਿੱਥੇ ਨਿਰੰਤਰ ਅੰਮ੍ਰਿਤ ਬੰਸਰੀ ਦੀ ਧੁਨ ਵੱਜਦੀ ਹੈ ਅਤੇ ਹੰਸ ਪਰਮਾਨੰਦ ਵਿੱਚ ਝੂਮਦੇ ਹਨ।'
                    : isEn
                    ? 'Resonates with the celestial flute melody before the gates of Truth.'
                    : 'जहाँ निरंतर अमृतमयी मुरली की धुन गूंजती है और हंस परमानंद में मग्न रहते हैं।',
                  verse: isPb ? 'ਭੰਵਰ ਗੁਫ਼ਾ ਮੇਂ ਮੁਰਲੀ ਬਾਜੇ, ਸੋਹੰ ਲੋਕ ਸੁਹਾਵਨ ਹੋ॥' : 'भंवर गुफा में मुरली बाजे, सोहं लोक सुहावन हो॥',
                  searchKeywords: 'bhanwar gupha soham murli flute',
                },
              },
              {
                name: isPb ? 'ਮਹਾਂ-ਸੁੰਨ' : isEn ? 'Maha Sunna' : 'महा-सुन्न',
                value: 4,
                itemStyle: { color: '#4f46e5' },
                label: { color: '#ffffff', fontSize: isFullscreen ? 9 : 7.5, overflow: 'truncate' },
                tooltipInfo: {
                  title: isPb ? 'ਮਹਾਂ-ਸੁੰਨ (ਅਥਾਹ ਖਲਾਅ)' : isEn ? 'Maha Sunna (The Great Void)' : 'महा-सुन्न (अगाध महा-शून्य)',
                  realm: isPb ? '੧੬ ਸ਼ੰਖ ਯੋਜਨ ਘਾਟੀ' : isEn ? '16 Shankh Yojanas' : '१६ शंख योजन घाटी',
                  category: isPb ? 'ਸੂਖਮ ਮੰਡਲ' : isEn ? 'Subtle Sphere' : 'सूक्ष्म मंडल',
                  desc: isPb
                    ? '੧੬ ਸ਼ੰਖ ਯੋਜਨ ਦਾ ਗੰਭੀਰ ਖਲਾਅ ਜਿੱਥੇ ਸਿਰਫ਼ ਸਤਿਗੁਰੂ ਦੇ ਸਤਯਨਾਮ ਦਾ ਪ੍ਰਕਾਸ਼ ਹੀ ਪਾਰ ਲੰਘਾਉਂਦਾ ਹੈ।'
                    : isEn
                    ? 'The 16 Shankh Yojanas void where only the light of the Master\'s Name guides the soul.'
                    : '१६ शंख योजन का अगाध महा-शून्य जहाँ केवल सतगुरु के सत्यनाम का प्रकाश ही पार ले जाता है।',
                  verse: isPb ? 'ਮਹਾਸ਼ੁੰਨ ਕੀ ਘਾਟੀ ਭਾਰੀ, ਗੁਰੂ ਬਿਨੁ ਪਾਰ ਨ ਪਾਵੇ ਕੋਈ॥' : 'महाशून्य की घाटी भारी, गुरु बिनु पार न पावै कोई॥',
                  searchKeywords: 'maha sunna great void 16 shankh yojanas',
                },
              },
              {
                name: isPb ? 'ਤ੍ਰਿਕੁਟੀ' : isEn ? 'Trikuti' : 'त्रिकुटी',
                value: 4,
                itemStyle: { color: '#2563eb' },
                label: { color: '#ffffff', fontSize: isFullscreen ? 9 : 7.5, overflow: 'truncate' },
                tooltipInfo: {
                  title: isPb ? 'ਤ੍ਰਿਕੁਟੀ (ਓਂਕਾਰ ਧਾਮ)' : isEn ? 'Trikuti (Omkar Plane)' : 'त्रिकुटी (ओंकार धाम)',
                  realm: isPb ? 'ਬ੍ਰਹਮ ਲੋਕ' : isEn ? 'Brahma Plane' : 'ब्रह्म लोक',
                  category: isPb ? 'ਸੂਖਮ ਮੰਡਲ' : isEn ? 'Subtle Sphere' : 'सूक्ष्म मंडल',
                  desc: isPb
                    ? '੨੧ ਬ੍ਰਹਿਮੰਡਾਂ ਦੀ ਸਿਖਰ ਜਿੱਥੇ ਓਂਕਾਰ ਦੀ ਧੁਨ ਹੈ। ਇਸਦੇ ਪਾਰ ਅਮਰਲੋਕ ਦਾ ਰਾਹ ਖੁੱਲ੍ਹਦਾ ਹੈ।'
                    : isEn
                    ? 'The summit of Kaal\'s territory where Omkar sound reverberates.'
                    : '२१ ब्रह्मांडों का शिखर जहाँ ओंकार की नाद है। इसके पार अमरलोक का मार्ग खुलता है।',
                  verse: isPb ? 'ਤ੍ਰਿਕੁਟੀ ਮਹਲ ਮੇਂ ਬਾਦਲ ਗਰਜੇ, ਲਾਲ ਗਗਨ ਵਿਚ ਸੁਰਤ ਬਿਰਾਜੇ॥' : 'त्रिकुटी महल में बादल गरजे, लाल गगन विच सुरत बिराजे॥',
                  searchKeywords: 'trikuti omkar brahma kaal',
                },
              },
            ],
          },

          // 5. 21 BRAHMANDS OF KAAL NIRANJAN
          {
            name: isPb ? 'ਕਾਲ-ਲੋਕ (੨੧ ਬ੍ਰਹਿਮੰਡ)' : isEn ? 'Kaal-Lok (21 Universes)' : 'काल-लोक (२१ ब्रह्मांड)',
            itemStyle: {
              color: '#475569',
              borderColor: '#ffffff',
              borderWidth: kaalMatched && query ? 2.5 : 1.5,
              opacity: query && !kaalMatched ? 0.3 : 1,
            },
            label: {
              color: '#ffffff',
              fontSize: isFullscreen ? 9.5 : 8.5,
              fontWeight: 'bold',
              overflow: 'truncate',
            },
            tooltipInfo: {
              title: kaalTitle,
              realm: kaalRealm,
              category: isPb ? 'ਕਾਲ ਨਿਰੰਜਨ ਦਾ ਜਾਲ' : isEn ? 'Kaal Niranjan Trap' : 'काल निरंजन का जाल',
              desc: kaalDesc,
              granthTeaching: isPb
                ? 'ਕਬੀਰ ਸਾਗਰ: ਕਾਲ ਪਸਾਰਾ ਸਭ ਜਗਤ ਬੰਧਾਨਾ, ਕੋਈ ਵਿਰਲਾ ਹੰਸਾ ਪਾਰ ਨਿਕਾਨਾ॥'
                : isEn
                ? 'Kabir Sagar: The 21 universes of Kaal Niranjan where souls wander in transmigrations.'
                : 'कबीर सागर: काल पसारा सब जगत बंधाना, कोई विरला हंसा पार निकाला॥',
              stateOfSoul: isPb ? 'ਚੌਰਾਸੀ ਲੱਖ ਜੂਨਾਂ ਵਿੱਚ ਭਟਕਣਾ' : isEn ? 'Wandering in 8.4 million species' : 'चौरासी लाख योनियों में भ्रमण',
              verse: isPb ? 'ਕਾਲ ਪਸਾਰਾ ਸਭ ਜਗਤ ਬੰਧਾਨਾ, ਕੋਈ ਵਿਰਲਾ ਹੰਸਾ ਪਾਰ ਨਿਕਾਨਾ॥' : 'काल पसारा सब जगत बंधाना, कोई विरला हंसा पार निकाला॥',
              searchKeywords: kaalKeywords,
            },
            children: brahmandItems,
          },
        ],
      },
    ];
  }, [language, isDarkMode, isFullscreen, searchQuery]);

  // ECharts Sunburst Chart Option
  const sunburstOption = useMemo<EChartsOption>(() => {
    return {
      backgroundColor: 'transparent',
      tooltip: {
        show: false,
      },
      series: [
        {
          type: 'sunburst',
          data: sunburstData,
          nodeClick: false, // Prevents stuck zoom; click triggers full details bottom drawer
          radius: isFullscreen ? ['14%', '84%'] : ['12%', '86%'],
          center: ['50%', '50%'],
          sort: undefined,
          emphasis: {
            focus: 'self',
            itemStyle: {
              shadowBlur: 20,
              shadowColor: 'rgba(245, 158, 11, 0.9)',
            },
          },
          levels: [
            {},
            {
              r0: '0%',
              r: '22%',
              itemStyle: { borderWidth: 2 },
              label: {
                rotate: 0,
                fontSize: isFullscreen ? 11 : 9,
                fontWeight: 'bold',
                color: '#ffffff',
                overflow: 'truncate',
                ellipsis: '...',
              },
            },
            {
              r0: '22%',
              r: '44%',
              label: {
                rotate: 'tangential',
                fontSize: isFullscreen ? 10 : 8.5,
                fontWeight: 'bold',
                overflow: 'truncate',
                ellipsis: '...',
              },
            },
            {
              r0: '44%',
              r: '66%',
              label: {
                rotate: 'radial',
                fontSize: isFullscreen ? 9 : 7.5,
                minAngle: 7,
                overflow: 'truncate',
                ellipsis: '...',
              },
            },
            {
              r0: '66%',
              r: '88%',
              label: {
                rotate: 'radial',
                fontSize: isFullscreen ? 8.5 : 7,
                minAngle: 5,
                overflow: 'truncate',
                ellipsis: '...',
              },
              itemStyle: {
                borderWidth: 1,
              },
            },
          ],
        },
      ],
    };
  }, [sunburstData, isFullscreen]);

  // ECharts Cosmic Network Graph Option
  const networkOption = useMemo<EChartsOption>(() => {
    const isPb = language === 'pb';
    const isEn = language === 'en';

    const nodes = [
      { id: '0', name: isPb ? 'ਅਨਾਮੀ ਲੋਕ (ਸਭ ਤੋਂ ਉੱਪਰ)' : isEn ? 'Anami Lok (Top)' : 'अनामी लोक (सर्वोच्च)', symbolSize: isFullscreen ? 48 : 36, itemStyle: { color: '#991b1b' }, category: 0 },
      { id: '1', name: isPb ? 'ਸਤਯਲੋਕ (ਸੱਚਖੰਡ)' : isEn ? 'Satlok (Sachkhand)' : 'सत्यलोक (सचखंड)', symbolSize: isFullscreen ? 38 : 28, itemStyle: { color: '#f59e0b' }, category: 1 },
      { id: '2', name: isPb ? 'ਅਲਖ ਲੋਕ' : isEn ? 'Alakh Lok' : 'अलख लोक', symbolSize: isFullscreen ? 28 : 22, itemStyle: { color: '#ea580c' }, category: 1 },
      { id: '3', name: isPb ? 'ਅਗਮ ਲੋਕ' : isEn ? 'Agam Lok' : 'अगम लोक', symbolSize: isFullscreen ? 28 : 22, itemStyle: { color: '#d97706' }, category: 1 },
      { id: '4', name: isPb ? 'ਭੰਵਰ ਗੁਫ਼ਾ' : isEn ? 'Bhanwar Gupha' : 'भंवर गुफा', symbolSize: isFullscreen ? 22 : 17, itemStyle: { color: '#8b5cf6' }, category: 2 },
      { id: '5', name: isPb ? 'ਮਹਾਂ-ਸੁੰਨ' : isEn ? 'Maha-Sunn' : 'महा-सुन्न', symbolSize: isFullscreen ? 22 : 17, itemStyle: { color: '#6366f1' }, category: 2 },
      { id: '6', name: isPb ? 'ਤ੍ਰਿਕੁਟੀ' : isEn ? 'Trikuti' : 'त्रिकुटी', symbolSize: isFullscreen ? 22 : 17, itemStyle: { color: '#3b82f6' }, category: 2 },
      { id: '7', name: isPb ? 'ਕਾਲ ਨਿਰੰਜਨ' : isEn ? 'Kaal Niranjan' : 'काल निरंजन', symbolSize: isFullscreen ? 34 : 26, itemStyle: { color: '#dc2626' }, category: 3 },
      ...Array.from({ length: 21 }, (_, i) => ({
        id: `b_${i + 1}`,
        name: isPb ? `ਬ੍ਰਹਿਮੰਡ ${i + 1}` : isEn ? `Univ ${i + 1}` : `ब्रह्मांड ${i + 1}`,
        symbolSize: isFullscreen ? 14 : 11,
        itemStyle: { color: i < 7 ? '#991b1b' : i < 14 ? '#c2410c' : '#b45309' },
        category: 4,
      })),
    ];

    const links = [
      { source: '0', target: '1' }, // Anami -> Satlok
      { source: '1', target: '2' }, // Satlok -> Alakh
      { source: '1', target: '3' }, // Satlok -> Agam
      { source: '0', target: '4' }, // Anami -> Bhanwar Gupha
      { source: '4', target: '5' }, // Bhanwar Gupha -> Maha Sunna
      { source: '5', target: '6' }, // Maha Sunna -> Trikuti
      { source: '6', target: '7' }, // Trikuti -> Kaal Niranjan
      ...Array.from({ length: 21 }, (_, i) => ({
        source: '7',
        target: `b_${i + 1}`,
      })),
    ];

    return {
      backgroundColor: 'transparent',
      tooltip: {
        trigger: 'item',
        formatter: '{b}',
      },
      series: [
        {
          type: 'graph',
          layout: 'force',
          data: nodes,
          links: links,
          roam: true,
          label: {
            show: true,
            position: 'right',
            color: isDarkMode ? '#fef3c7' : '#78350f',
            fontFamily: 'serif',
            fontSize: isFullscreen ? 10 : 8.5,
            overflow: 'truncate',
          },
          force: {
            repulsion: isFullscreen ? 180 : 95,
            edgeLength: isFullscreen ? [25, 75] : [14, 40],
            gravity: 0.16,
          },
          lineStyle: {
            color: '#f59e0b',
            opacity: 0.5,
            width: 1.5,
            curveness: 0.1,
          },
          emphasis: {
            focus: 'adjacency',
            lineStyle: {
              width: 3,
            },
          },
        },
      ],
    };
  }, [language, isFullscreen, isDarkMode]);

  // ECharts Tree Layout Option
  const treeOption = useMemo<EChartsOption>(() => {
    return {
      backgroundColor: 'transparent',
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove',
      },
      series: [
        {
          type: 'tree',
          data: sunburstData as any,
          top: '5%',
          left: isFullscreen ? '12%' : '15%',
          bottom: '5%',
          right: isFullscreen ? '16%' : '20%',
          symbolSize: isFullscreen ? 10 : 8,
          roam: true,
          label: {
            position: 'left',
            verticalAlign: 'middle',
            align: 'right',
            fontSize: isFullscreen ? 10.5 : 9,
            color: isDarkMode ? '#fef3c7' : '#78350f',
            fontFamily: 'serif',
            distance: 5,
            overflow: 'truncate',
          },
          leaves: {
            label: {
              position: 'right',
              verticalAlign: 'middle',
              align: 'left',
              distance: 5,
              overflow: 'truncate',
            },
          },
          emphasis: {
            focus: 'ancestor',
          },
          expandAndCollapse: true,
          animationDuration: 400,
          animationDurationUpdate: 500,
        },
      ],
    };
  }, [sunburstData, isFullscreen, isDarkMode]);

  // Handle Chart Node Click
  const onChartClick = useCallback((params: any) => {
    sacredHaptics.lightTap();
    const data = params.data as SunburstNode;
    if (data?.tooltipInfo) {
      setSelectedNodeInfo(data.tooltipInfo);
      if (onSelectNode) onSelectNode(data.tooltipInfo);
    } else {
      const name = params.name;
      const findNode = (nodes: SunburstNode[]): SunburstNode | null => {
        for (const node of nodes) {
          if (node.name === name && node.tooltipInfo) return node;
          if (node.children) {
            const res = findNode(node.children);
            if (res) return res;
          }
        }
        return null;
      };
      const match = findNode(sunburstData);
      if (match?.tooltipInfo) {
        setSelectedNodeInfo(match.tooltipInfo);
        if (onSelectNode) onSelectNode(match.tooltipInfo);
      }
    }
  }, [sunburstData, onSelectNode]);

  // Guaranteed 100% Comprehensive Reset Handler
  const resetView = useCallback(() => {
    sacredHaptics.lightTap();
    setSelectedNodeInfo(null);
    setSearchQuery('');
    setChartKey((k) => k + 1);

    if (chartRef.current) {
      try {
        const echartsInstance = chartRef.current.getEchartsInstance();
        if (echartsInstance) {
          echartsInstance.dispatchAction({ type: 'restore' });
          echartsInstance.dispatchAction({ type: 'dataZoom', start: 0, end: 100 });
          echartsInstance.resize();
        }
      } catch (e) {
        // Safe key remount
      }
    }

    const toastMsg = language === 'pb' ? 'ਮੂਲ ਦ੍ਰਿਸ਼ ਰੀਸੈੱਟ ਹੋ ਗਿਆ' : language === 'en' ? 'View Reset to Normal' : 'मूल दृश्य रीसेट हो गया';
    setResetToast(toastMsg);
    setTimeout(() => setResetToast(null), 2500);
  }, [language]);

  const currentOption = chartMode === 'sunburst' ? sunburstOption : chartMode === 'network' ? networkOption : treeOption;

  return (
    <div className={`w-full ${isFullscreen ? 'fixed inset-0 z-[200] bg-stone-950 flex flex-col h-screen w-screen overflow-hidden' : 'space-y-3'}`}>
      {/* Toast Confirmation for Reset */}
      {resetToast && (
        <div className="fixed top-12 left-1/2 -translate-x-1/2 z-[260] px-4 py-1.5 rounded-full bg-amber-500 text-stone-950 text-xs font-bold font-serif shadow-xl flex items-center gap-1.5 animate-fadeIn">
          <Check size={13} />
          <span>{resetToast}</span>
        </div>
      )}

      {/* Top Search Filter Bar (Highlights relevant hierarchy branches and Granth teachings) */}
      <div className={`p-2.5 sm:p-3 border-b border-amber-500/20 shrink-0 ${
        isFullscreen ? 'bg-stone-900/95 text-amber-100' : 'rounded-2xl bg-amber-500/10 border border-amber-500/30'
      }`}>
        {/* Row 1: Search Input + Quick Actions */}
        <div className="flex items-center justify-between gap-1.5 sm:gap-2 flex-wrap sm:flex-nowrap">
          <div className="relative flex-1 min-w-[180px]">
            <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-600 dark:text-amber-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'pb' ? 'ਗ੍ਰੰਥ ਉਪਦੇਸ਼ ਜਾਂ ਮੰਡਲ ਖੋਜੋ (ਅਨਾਮੀ, ਸਤਯਲੋਕ, ਕਾਲ)...' : language === 'en' ? 'Search teaching or realm (Anami, Satlok, Kaal)...' : 'ग्रंथ उपदेश या मंडल खोजें (अनामी, सत्यलोक, काल)...'}
              className="w-full pl-9 pr-8 py-1.5 rounded-xl border border-amber-500/30 bg-white/80 dark:bg-stone-900/80 text-xs font-serif focus:outline-none focus:ring-2 focus:ring-amber-500 text-stone-900 dark:text-stone-100 placeholder-stone-400"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 p-0.5"
                title="Clear Search"
              >
                <X size={12} />
              </button>
            )}
          </div>

          <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
            {/* Quick Language Switcher */}
            <div className="flex items-center bg-black/30 dark:bg-white/10 p-0.5 rounded-lg border border-amber-500/30">
              {(['hi', 'pb', 'en'] as Language[]).map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => {
                    sacredHaptics.lightTap();
                    setLanguage(l);
                  }}
                  className={`px-1.5 sm:px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-black uppercase transition cursor-pointer ${
                    language === l
                      ? 'bg-amber-500 text-stone-950 shadow-xs'
                      : 'text-stone-600 dark:text-stone-300 hover:text-amber-500'
                  }`}
                >
                  {l === 'hi' ? 'HI' : l === 'pb' ? 'PB' : 'EN'}
                </button>
              ))}
            </div>

            {/* Reset Button */}
            <button
              type="button"
              onClick={resetView}
              className="px-2 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-900 dark:text-amber-200 text-xs font-serif font-bold transition flex items-center gap-1 cursor-pointer border border-amber-500/30 active:scale-95"
              title="Reset View"
            >
              <RotateCcw size={11} className="text-amber-600 dark:text-amber-300" />
              <span className="text-[10px] sm:text-[11px]">{language === 'pb' ? 'ਰੀਸੈੱਟ' : language === 'en' ? 'Reset' : 'रीसेट'}</span>
            </button>

            {/* Fullscreen Toggle */}
            <button
              type="button"
              onClick={() => {
                sacredHaptics.lightTap();
                setIsFullscreen(!isFullscreen);
              }}
              className="px-2 sm:px-2.5 py-1 rounded-lg bg-amber-600 text-white hover:bg-amber-700 transition cursor-pointer flex items-center gap-1 text-xs font-bold shadow-xs active:scale-95 shrink-0"
              title={isFullscreen ? 'Exit Fullscreen' : 'Full Page View'}
            >
              {isFullscreen ? (
                <>
                  <Minimize2 size={12} />
                  <span className="text-[10px] sm:text-xs">{language === 'pb' ? 'ਛੋਟਾ ਕਰੋ' : language === 'en' ? 'Exit' : 'छोटा करें'}</span>
                </>
              ) : (
                <>
                  <Maximize2 size={12} />
                  <span className="text-[10px] sm:text-xs">{language === 'pb' ? 'ਪੂਰਾ ਪੰਨਾ' : language === 'en' ? 'Full' : 'फुल स्क्रीन'}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Row 2: Quick Search Tags + Mode Selector Buttons */}
        <div className="flex items-center justify-between gap-2 mt-2 pt-1.5 border-t border-amber-500/15 overflow-x-auto">
          {/* Quick Granth Teaching Filter Chips */}
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5 shrink-0">
            {searchTags.map((tag) => (
              <button
                key={tag.query}
                type="button"
                onClick={() => {
                  sacredHaptics.lightTap();
                  setSearchQuery(searchQuery === tag.query ? '' : tag.query);
                }}
                className={`px-2 py-0.5 rounded-lg text-[9px] sm:text-[10px] font-bold transition whitespace-nowrap cursor-pointer border ${
                  searchQuery.toLowerCase() === tag.query.toLowerCase()
                    ? 'bg-amber-600 text-white border-amber-700 shadow-xs'
                    : 'bg-black/5 dark:bg-white/5 text-stone-700 dark:text-stone-300 border-amber-500/20 hover:bg-amber-500/10'
                }`}
              >
                {tag.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1 bg-black/20 dark:bg-white/10 p-0.5 rounded-xl border border-amber-500/20 shrink-0">
            <button
              type="button"
              onClick={() => {
                sacredHaptics.lightTap();
                setChartMode('sunburst');
              }}
              className={`px-2 sm:px-2.5 py-1 rounded-lg text-xs font-serif font-bold transition flex items-center gap-1 cursor-pointer ${
                chartMode === 'sunburst'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-stone-700 dark:text-stone-300 hover:bg-amber-500/10'
              }`}
            >
              <Sun size={11} />
              <span className="text-[10px] sm:text-xs">{language === 'pb' ? 'ਸਨਬਰਸਟ' : language === 'en' ? 'Sunburst' : 'सनबर्स्ट'}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                sacredHaptics.lightTap();
                setChartMode('network');
              }}
              className={`px-2 sm:px-2.5 py-1 rounded-lg text-xs font-serif font-bold transition flex items-center gap-1 cursor-pointer ${
                chartMode === 'network'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-stone-700 dark:text-stone-300 hover:bg-amber-500/10'
              }`}
            >
              <Network size={11} />
              <span className="text-[10px] sm:text-xs">{language === 'pb' ? 'ਨੈੱਟਵਰਕ' : language === 'en' ? 'Network' : 'नेटवर्क'}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                sacredHaptics.lightTap();
                setChartMode('tree');
              }}
              className={`px-2 sm:px-2.5 py-1 rounded-lg text-xs font-serif font-bold transition flex items-center gap-1 cursor-pointer ${
                chartMode === 'tree'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-stone-700 dark:text-stone-300 hover:bg-amber-500/10'
              }`}
            >
              <GitFork size={11} />
              <span className="text-[10px] sm:text-xs">{language === 'pb' ? 'ਟ੍ਰੀ' : language === 'en' ? 'Tree' : 'ट्री'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Visualizer Area */}
      <div 
        style={{ backgroundColor: isFullscreen ? '#0c0a09' : theme.cardBg }}
        className={`relative overflow-hidden transition-all duration-300 ${
          isFullscreen 
            ? 'flex-1 w-full h-full min-h-0 flex items-center justify-center p-1 sm:p-2' 
            : 'rounded-3xl p-2 sm:p-4 border-2 shadow-sm'
        }`}
      >
        <div className={`w-full ${isFullscreen ? 'h-full' : 'h-[420px] sm:h-[540px]'}`}>
          <ReactECharts
            key={`echarts_${chartKey}_${chartMode}_${language}_${isFullscreen}_${searchQuery}`}
            ref={chartRef}
            option={currentOption}
            style={{ width: '100%', height: '100%' }}
            onEvents={{
              click: onChartClick,
            }}
            opts={{ renderer: 'canvas' }}
          />
        </div>

        {/* Legend Footer (Non-fullscreen view only) */}
        {!isFullscreen && (
          <div className="pt-2.5 border-t border-amber-500/15 flex items-center justify-between gap-2 flex-wrap text-[10px] sm:text-[11px] font-serif text-stone-600 dark:text-stone-400">
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-red-700 inline-block" />
                <span>{language === 'pb' ? 'ਅਨਾਮੀ ਲੋਕ (ਸਭ ਤੋਂ ਉੱਪਰ)' : 'अनामी लोक (सबसे ऊपर)'}</span>
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                <span>{language === 'pb' ? 'ਸਤਯਲੋਕ (ਸੱਚਖੰਡ)' : 'सत्यलोक (सचखंड)'}</span>
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-600 inline-block" />
                <span>{language === 'pb' ? 'ਅਲਖ ਤੇ ਅਗਮ ਲੋਕ' : 'अलख व अगम लोक'}</span>
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-stone-600 inline-block" />
                <span>{language === 'pb' ? '੨੧ ਬ੍ਰਹਿਮੰਡ (ਕਾਲ)' : '२१ ब्रह्मांड (काल)'}</span>
              </span>
            </div>
            <span className="text-[10px] italic text-amber-700 dark:text-amber-300 font-bold">
              💡 {language === 'pb' ? 'ਕਿਸੇ ਵੀ ਮੰਡਲ \'ਤੇ ਕਲਿੱਕ ਕਰਕੇ ਪੂਰਾ ਕਬੀਰ ਸਾਗਰ ਉਪਦੇਸ਼ ਵੇਖੋ' : 'किसी भी मंडल पर क्लिक करके पूरा कबीर सागर उपदेश देखें'}
            </span>
          </div>
        )}

        {/* Selected Node Details Drawer / Floating Bottom Sheet */}
        {selectedNodeInfo && (
          <div className={`p-3.5 sm:p-5 rounded-3xl bg-stone-900/95 text-amber-100 border-2 border-amber-500/40 shadow-2xl space-y-2 animate-fadeIn font-serif backdrop-blur-md overflow-hidden break-words ${
            isFullscreen 
              ? 'absolute bottom-2 left-2 right-2 max-w-xl mx-auto z-40 max-h-[48vh] overflow-y-auto' 
              : 'mt-2.5'
          }`}>
            <div className="flex items-center justify-between gap-2 border-b pb-1.5 border-amber-500/30 flex-wrap">
              <div className="flex items-center gap-1.5 min-w-0 flex-1 overflow-hidden">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <h5 className="font-serif font-black text-xs sm:text-sm text-amber-200 truncate">
                  {selectedNodeInfo.title}
                </h5>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {selectedNodeInfo.realm}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedNodeInfo(null)}
                  className="p-1 rounded-full hover:bg-white/10 text-stone-400 hover:text-white transition cursor-pointer"
                  title="Close Details"
                >
                  <X size={14} />
                </button>
              </div>
            </div>

            <p className="text-[11px] sm:text-xs text-stone-200 leading-relaxed break-words">
              {selectedNodeInfo.desc}
            </p>

            {selectedNodeInfo.granthTeaching && (
              <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/25 text-[10px] sm:text-[11px] font-sans text-amber-200/90 break-words leading-relaxed">
                📖 <strong>{language === 'pb' ? 'ਗ੍ਰੰਥ ਉਪਦੇਸ਼:' : language === 'en' ? 'Granth Teaching:' : 'ग्रंथ उपदेश:'}</strong> {selectedNodeInfo.granthTeaching}
              </div>
            )}

            {selectedNodeInfo.stateOfSoul && (
              <div className="text-[10px] sm:text-[11px] text-amber-300/90 font-medium break-words">
                <strong>{language === 'pb' ? 'ਆਤਮਾ ਦੀ ਸਥਿਤੀ:' : language === 'en' ? 'State of Soul:' : 'जीवात्मा की स्थिति:'}</strong> {selectedNodeInfo.stateOfSoul}
              </div>
            )}

            {selectedNodeInfo.verse && (
              <div className="p-2 rounded-xl bg-amber-500/15 border border-amber-500/30 text-[10px] sm:text-[11px] italic font-bold text-amber-200 break-words leading-relaxed">
                📜 {selectedNodeInfo.verse}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
