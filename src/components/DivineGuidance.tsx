import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, 
  Sparkles, 
  Heart, 
  Share2, 
  Copy, 
  Check, 
  BookmarkPlus, 
  RotateCcw, 
  Flame,
  ArrowRight,
  Sun,
  ShieldCheck,
  HelpCircle,
  Eye,
  Feather
} from 'lucide-react';
import { Language } from '../types';
import { useAppTheme } from '../theme/ThemeContext';
import { sacredHaptics } from '../services/haptics';
import { UnifiedDohaCard } from './UnifiedDohaCard';

interface DivineGuidanceProps {
  language: Language;
  onClose?: () => void;
  onOpenBlessing?: (title?: string, msg?: string) => void;
  onSaveToDiary?: (reflectionNotes: string) => void;
  onOpenSwadhyay?: (sakhiNumber?: number) => void;
}

interface GuidanceEntry {
  id: string;
  category: {
    pb: string;
    hi: string;
    en: string;
  };
  dilemma: {
    pb: string;
    hi: string;
    en: string;
  };
  sakhiText: {
    pb: string;
    hi: string;
  };
  source: string;
  meaning: {
    pb: string;
    hi: string;
    en: string;
  };
  divineDirection: {
    pb: string;
    hi: string;
    en: string;
  };
  practicalAction: {
    pb: string;
    hi: string;
    en: string;
  };
  seedMantra: {
    pb: string;
    hi: string;
    en: string;
  };
}

const SACRED_GUIDANCE_DB: GuidanceEntry[] = [
  {
    id: 'anger-krodha',
    category: {
      pb: 'ਕ੍ਰੋਧ ਤੇ ਅਸ਼ਾਂਤੀ',
      hi: 'क्रोध एवं अशांति',
      en: 'Anger & Restlessness'
    },
    dilemma: {
      pb: 'ਜਦੋਂ ਕਿਸੇ ਗੱਲ \'ਤੇ ਬਹੁਤ ਗੁੱਸਾ ਆ ਰਿਹਾ ਹੋਵੇ ਜਾਂ ਅੰਦਰ ਬੇਚੈਨੀ ਹੋਵੇ',
      hi: 'जब किसी बात पर तीव्र क्रोध या मन में अशांति उत्पन्न हो रही हो',
      en: 'When experiencing intense anger, agitation or inner turmoil'
    },
    sakhiText: {
      pb: 'ਕਬੀਰ ਆਵਤ ਗਾਰੀ ਏਕ ਹੈ, ਉਲਟਤ ਹੋਇ ਅਨੇਕ ।\nਕਹਿ ਕਬੀਰ ਨਹਿਂ ਉਲਟਿਯੈ, ਵਹੀ ਏਕ ਕੀ ਏਕ ॥',
      hi: 'कबीर आवत गारी एक है, उलटत होइ अनेक ।\nकह कबीर नहिं उलटियै, वही एक की एक ॥'
    },
    source: 'ਸਾਖੀ ਸੰਗ੍ਰਹਿ · ਗਾਲੀ ਕੋ ਅੰਗ',
    meaning: {
      pb: 'ਕੋਈ ਅਪਮਾਨਜਨਕ ਬੋਲ ਜਾਂ ਗਾਲੀ ਇਕ ਹੀ ਆਉਂਦੀ ਹੈ, ਪਰ ਜੇ ਅਸੀਂ ਉਸਦਾ ਉਲਟਾ ਜਵਾਬ ਦੇ ਦਈਏ ਤਾਂ ਉਹ ਅਨੇਕਾਂ ਬਣ ਜਾਂਦੀ ਹੈ। ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ ਕਿ ਪਲਟ ਕੇ ਜਵਾਬ ਨਾ ਦਿਓ, ਉਹ ਗਾਲੀ ਇਕ ਹੀ ਰਹਿ ਕੇ ਆਪਣੇ-ਆਪ ਸ਼ਾਂਤ ਹੋ ਜਾਵੇਗੀ।',
      hi: 'अपशब्द या गाली जब सामने से आती है तो वह केवल एक होती है, पर यदि उसका पलटकर उत्तर दिया जाए तो वह अनेक बन जाती है। सतगुरु कबीर साहेब फरमाते हैं कि पलटकर उत्तर मत दो, वह एक की एक ही रहकर शांत हो जाएगी।',
      en: 'When an insult comes, it is just one. But if returned in retaliation, it multiplies endlessly. Do not react or throw it back; let it dissolve into quietude.'
    },
    divineDirection: {
      pb: 'ਸਤਿਗੁਰੂ ਦਾ ਆਦੇਸ਼: ਚੁੱਪ ਧਾਰਨ ਕਰੋ। ਗੁੱਸੇ ਦਾ ਮੁਕਾਬਲਾ ਸ਼ਬਦਾਂ ਨਾਲ ਨਹੀਂ, ਧੀਰਜ ਅਤੇ ਮੌਨ ਨਾਲ ਕਰੋ। ਸੱਚਾ ਸੂਰਮਾ ਉਹ ਹੈ ਜੋ ਆਪਣੇ ਕ੍ਰੋਧ ਨੂੰ ਪੀ ਲਵੇ।',
      hi: 'सतगुरु का आदेश: मौन धारण करें। क्रोध का मुकाबला कटु वचनों से नहीं, अपितु धैर्य और शांति से करें। सच्चा शूरवीर वही है जो अपने क्रोध को पी जाए।',
      en: 'Satguru\'s Direction: Maintain sacred silence. Answer provocation not with retaliation, but with patient inner stillness.'
    },
    practicalAction: {
      pb: 'ਅੱਜ ਕਿਸੇ ਵੀ ਗੱਲ \'ਤੇ ਤੁਰੰਤ ਪ੍ਰਤੀਕਿਰਿਆ ਨਾ ਦਿਓ। 3 ਵਾਰ ਲੰਮੇ ਸਾਹ ਲੈ ਕੇ "ਸਤਯਨਾਮ" ਦਾ ਅੰਦਰੂਨੀ ਸਿਮਰਨ ਕਰੋ।',
      hi: 'आज किसी भी बात पर तुरंत प्रतिक्रिया न दें। तीन गहरे श्वास लेकर अंतर्मन में "सत्यनाम" का सुमिरन करें।',
      en: 'Do not react impulsively today. Take 3 deep breaths and remember the sacred name of Truth.'
    },
    seedMantra: {
      pb: 'ਧੀਰਜ ਧਰੋ, ਮੌਨ ਹੀ ਸਭ ਤੋਂ ਵੱਡੀ ਤਾਕਤ ਹੈ।',
      hi: 'धैर्य धरो, मौन ही सबसे बड़ा बल है।',
      en: 'Hold patience; sacred silence is supreme strength.'
    }
  },
  {
    id: 'ego-ahankar',
    category: {
      pb: 'ਅਹੰਕਾਰ ਤੇ ਮਾਣ',
      hi: 'अहंकार एवं दर्प',
      en: 'Ego & Pride'
    },
    dilemma: {
      pb: 'ਜਦੋਂ ਆਪਣੇ ਗਿਆਨ, ਧਨ, ਰੂਪ ਜਾਂ ਸਫਲਤਾ ਦਾ ਹੰਕਾਰ ਮਨ ਵਿੱਚ ਸਿਰ ਚੁੱਕੇ',
      hi: 'जब ज्ञान, धन, पद या सफलता का अभिमान मन को घेरने लगे',
      en: 'When pride of knowledge, wealth, or achievement clouds the soul'
    },
    sakhiText: {
      pb: 'ਕਬੀਰ ਗਰਬੁ ਨ ਕੀਜੀਐ, ਕਬਹੂੰ ਨ ਹਸੀਐ ਕੋਇ ।\nਅਜਹੂੰ ਨਾਵ ਸਮੁੰਦ ਮੇਂ, ਕਿਆ ਜਾਨੌਂ ਕਿਆ ਹੋਇ ॥',
      hi: 'कबीर गरबु न कीजिए, कबहूं न हसीए कोइ ।\nअजहूं नाव समुंद में, क्या जानौं क्या होइ ॥'
    },
    source: 'ਸਾਖੀ ਸੰਗ੍ਰਹਿ · ਗਰਬ ਗੰਜਨ ਕੋ ਅੰਗ',
    meaning: {
      pb: 'ਕਦੇ ਵੀ ਕਿਸੇ ਚੀਜ਼ ਦਾ ਹੰਕਾਰ ਨਾ ਕਰੋ ਅਤੇ ਨਾ ਹੀ ਕਿਸੇ ਕਮਜ਼ੋਰ ਉੱਤੇ ਹੱਸੋ। ਅਜੇ ਤੁਹਾਡੇ ਜੀਵਨ ਦੀ ਬੇੜੀ ਸੰਸਾਰ-ਸਮੁੰਦਰ ਦੇ ਵਿਚਕਾਰ ਹੈ, ਕੱਲ੍ਹ ਕੀ ਪਰਿਸਥਿਤੀ ਬਣ ਜਾਵੇ, ਕੋਈ ਨਹੀਂ ਜਾਣਦਾ।',
      hi: 'कभी भी किसी बात का घमंड मत करो और न ही किसी पर हंसो। अभी तुम्हारी जीवन रूपी नौका भवसागर में है, भविष्य के गर्भ में क्या छिपा है, कोई नहीं जानता।',
      en: 'Never swell with pride, nor scoff at anyone. The boat of your life is still in the open sea; none knows what storms lie ahead.'
    },
    divineDirection: {
      pb: 'ਸਤਿਗੁਰੂ ਦਾ ਆਦੇਸ਼: ਨਿਮਰਤਾ ਹੀ ਸਭ ਤੋਂ ਵੱਡਾ ਗਹਿਣਾ ਹੈ। ਸਾਰੀ ਸਫਲਤਾ ਦਾ ਸਿਹਰਾ ਪਰਮ-ਸੱਤਾ ਨੂੰ ਸੌਂਪ ਦਿਓ ਅਤੇ ਆਪਣੇ ਆਪ ਨੂੰ ਕੇਵਲ ਸੇਵਕ ਸਮਝੋ।',
      hi: 'सतगुरु का आदेश: विनम्रता ही आत्मा का परम आभूषण है। समस्त उपलब्धियों का श्रेय सतगुरु को अर्पित कर स्वयं को मात्र एक विनम्र साधक मानें।',
      en: 'Satguru\'s Direction: Humility is the jewel of the soul. Dedicate all achievements to the Divine and walk as a humble servant.'
    },
    practicalAction: {
      pb: 'ਅੱਜ ਕਿਸੇ ਇਕ ਵਿਅਕਤੀ ਅੱਗੇ ਨਿਮਰਤਾ ਨਾਲ ਸੀਸ ਝੁਕਾਓ ਅਤੇ ਆਪਣੀ ਕਿਸੇ ਪ੍ਰਸ਼ੰਸਾ ਨੂੰ ਗੁਰੂ-ਚਰਨਾਂ ਵਿੱਚ ਅਰਪਿਤ ਕਰ ਦਿਓ।',
      hi: 'आज किसी भी व्यक्ति के प्रति कृतज्ञता और नम्रता प्रकट करें तथा अपनी प्रशंसा को गुरु-चरणों में समर्पित कर दें।',
      en: 'Bow in sincere humility to someone today and offer all praise to the lotus feet of the Satguru.'
    },
    seedMantra: {
      pb: 'ਮੈਂ ਕੁਝ ਨਹੀਂ, ਜੋ ਕੁਝ ਹੈ ਸਤਿਗੁਰੂ ਦੀ ਕਿਰਪਾ ਹੈ।',
      hi: 'मैं कुछ नहीं, सब कुछ सतगुरु की कृपा है।',
      en: 'I am nothing; all is the grace of the Satguru.'
    }
  },
  {
    id: 'worry-chinta',
    category: {
      pb: 'ਚਿੰਤਾ ਤੇ ਬੇਚੈਨੀ',
      hi: 'चिंता एवं भय',
      en: 'Worry & Anxiety'
    },
    dilemma: {
      pb: 'ਜਦੋਂ ਭਵਿੱਖ ਦੀ ਚਿੰਤਾ, ਪਰਿਵਾਰ ਜਾਂ ਕੰਮ-ਕਾਰ ਦਾ ਬੋਝ ਦਿਲ ਨੂੰ ਦਬਾ ਰਿਹਾ ਹੋਵੇ',
      hi: 'जब भविष्य, परिवार, आजीविका या किसी अनहोनी का भय सता रहा हो',
      en: 'When burdened by anxiety about the future, family, or livelihood'
    },
    sakhiText: {
      pb: 'ਕਬੀਰ ਚਿੰਤਾ ਤੌ ਕਰੀਐ, ਜੋ ਅਨਹੋਨੀ ਹੋਇ ।\nਅਨਹੋਨੀ ਹੋਨੀ ਨਹੀਂ, ਹੋਨੀ ਹੋਇ ਸੋ ਹੋਇ ॥',
      hi: 'कबीर चिंता तौ करिए, जो अनहोनी होइ ।\nअनहोनी होनी नहीं, होनी होइ सो होइ ॥'
    },
    source: 'ਸਾਖੀ ਸੰਗ੍ਰਹਿ · ਚੇਤਾਵਨੀ ਕੋ ਅੰਗ',
    meaning: {
      pb: 'ਚਿੰਤਾ ਤਾਂ ਤਦ ਕਰੋ ਜੇਕਰ ਕੋਈ ਅਣਹੋਣੀ ਹੋਣ ਵਾਲੀ ਹੋਵੇ। ਪਰ ਜੋ ਹੋਣੀ ਨਹੀਂ ਉਹ ਹੋ ਨਹੀਂ ਸਕਦੀ, ਅਤੇ ਜੋ ਹੋਣਾ ਹੈ ਉਹ ਆਪਣੇ ਨਿਯਮ ਨਾਲ ਹੋ ਕੇ ਰਹੇਗਾ। ਵਿਅਰਥ ਚਿੰਤਾ ਕਰਕੇ ਆਪਣਾ ਅੱਜ ਕਿਉਂ ਖੋਣਾ?',
      hi: 'चिंता तब करनी चाहिए जब कुछ अनहोनी घटित होने वाली हो। लेकिन जो नहीं होना वह कभी होगा नहीं, और जो विधाता का विधान है वह होकर रहेगा। फिर व्यर्थ चिंता क्यों?',
      en: 'Worry would be warranted if the impossible could occur. But the impossible never happens, and what is destined will unfold. Cease futile anxiety.'
    },
    divineDirection: {
      pb: 'ਸਤਿਗੁਰੂ ਦਾ ਆਦੇਸ਼: ਚਿੰਤਾ ਛੱਡ ਕੇ ਚਿੰਤਨ (ਸਿਮਰਨ) ਕਰੋ। ਜਿਸ ਦਾਤਾਰ ਨੇ ਚੁੰਝ ਦਿੱਤੀ ਹੈ, ਉਹ ਚੋਗਾ ਵੀ ਜ਼ਰੂਰ ਦੇਵੇਗਾ। ਪੂਰਨ ਭਰੋਸਾ ਰੱਖੋ।',
      hi: 'सतगुरु का आदेश: चिंता छोड़कर सुमिरन में लीन हों। जिसने श्वास दी है, वह सार-संभाल भी अवश्य करेगा। परमात्मा के विधान पर पूर्ण विश्वास रखें।',
      en: 'Satguru\'s Direction: Abandon anxiety and embrace inner remembrance. The Creator who gave breath will provide sustenance.'
    },
    practicalAction: {
      pb: 'ਆਪਣੀ ਸਾਰੀ ਚਿੰਤਾ ਕਾਗਜ਼ \'ਤੇ ਲਿਖ ਕੇ ਜਾਂ ਮਨ ਵਿੱਚ ਸੰਕਲਪ ਕਰਕੇ ਸਤਿਗੁਰੂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਅਰਪਿਤ ਕਰ ਦਿਓ। ਕਹੋ: "ਸਤਿਗੁਰੂ ਆਪ ਸੰਭਾਲੋ।"',
      hi: 'अपनी चिंता को सतगुरु के चरणों में अर्पित कर दें और कहें: "हे सतगुरु! सब आपके हाथ में है।" फिर निश्चिंत हो जाएं।',
      en: 'Surrender all worries into the care of the Master: "O Satguru, everything is in Thy hands."'
    },
    seedMantra: {
      pb: 'ਚਿੰਤਾ ਛੱਡੋ, ਚਿੰਤਨ ਕਰੋ। ਸਤਯਨਾਮ ਸਹਾਈ ਹੈ।',
      hi: 'चिंता तजो, सुमिरन करो। सत्यनाम ही रक्षक है।',
      en: 'Drop worry, embrace remembrance. Truth alone protects.'
    }
  },
  {
    id: 'attachment-moh',
    category: {
      pb: 'ਮੋਹ, ਮਾਇਆ ਤੇ ਵਿਛੋੜਾ',
      hi: 'मोह, माया एवं आसक्ति',
      en: 'Attachment & Illusion'
    },
    dilemma: {
      pb: 'ਜਦੋਂ ਕਿਸੇ ਵਿਅਕਤੀ, ਵਸਤੂ ਜਾਂ ਸੰਸਾਰਿਕ ਸੁੱਖ ਦੇ ਗਵਾਚਣ ਦਾ ਡੂੰਘਾ ਦੁੱਖ ਹੋਵੇ',
      hi: 'जब किसी व्यक्ति, संपत्ति या संबंध के छूटने का गहन दुख सता रहा हो',
      en: 'When grieving loss of worldly possessions, status, or attachments'
    },
    sakhiText: {
      pb: 'ਝੂਠੇ ਸੁਖ ਕੋ ਸੁਖ ਕਹੈ, ਮਾਨਤ ਹੈ ਮਨ ਮੋਦ ।\nਖਲਕ ਚਬੀਨਾ ਕਾਲ ਕਾ, ਕਛੁ ਮੁਖ ਮੇਂ ਕਛੁ ਗੋਦ ॥',
      hi: 'झूठे सुख को सुख कहै, मानत है मन मोद ।\nखलक चबीना काल का, कछु मुख में कछु गोद ॥'
    },
    source: 'ਸਾਖੀ ਸੰਗ੍ਰਹਿ · ਕਾਲ ਕੋ ਅੰਗ',
    meaning: {
      pb: 'ਇਨਸਾਨ ਇਸ ਨਾਸ਼ਵੰਤ ਝੂਠੇ ਸੁੱਖ ਨੂੰ ਅਸਲੀ ਸੁੱਖ ਮੰਨ ਕੇ ਮਨ ਵਿੱਚ ਖੁਸ਼ ਹੁੰਦਾ ਰਹਿੰਦਾ ਹੈ। ਜਦਕਿ ਸਾਰਾ ਸੰਸਾਰ ਤਾਂ ਕਾਲ (ਸਮੇਂ) ਦਾ ਚਬੇਣਾ (ਭੋਜਨ) ਹੈ—ਕੁਝ ਉਸਦੇ ਮੂੰਹ ਵਿੱਚ ਜਾ ਚੁੱਕਾ ਹੈ ਅਤੇ ਕੁਝ ਉਸਦੀ ਗੋਦੀ ਵਿੱਚ ਹੈ।',
      hi: 'मनुष्य इस नश्वर झूठे संसार को सुख मानकर प्रसन्न होता है, जबकि सारा संसार काल का भोजन है—कुछ उसके मुख में है और कुछ उसकी गोद में जाने की प्रतीक्षा में है।',
      en: 'Humans delight in false ephemeral pleasures, unaware that this whole world is food for Time—part already in its jaws, part waiting in its lap.'
    },
    divineDirection: {
      pb: 'ਸਤਿਗੁਰੂ ਦਾ ਆਦੇਸ਼: ਸੰਸਾਰ ਨੂੰ ਇੱਕ ਰੈਣ-ਬਸੇਰਾ (ਮੁਸਾਫਿਰਖਾਨਾ) ਸਮਝੋ। ਕਿਸੇ ਵੀ ਨਾਸ਼ਵਾਨ ਚੀਜ਼ ਨਾਲ ਐਸਾ ਮੋਹ ਨਾ ਪਾਓ ਜੋ ਤੁਹਾਡੀ ਆਤਮਾ ਨੂੰ ਰੁਆਵੇ। ਅਮਰ ਪਦ ਨਾਲ ਜੁੜੋ।',
      hi: 'सतगुरु का आदेश: संसार को एक सराय (विश्राम गृह) समझें। किसी नश्वर वस्तु या संबंध से इतनी आसक्ति न रखें जो आत्मा को बंधन में डाले। नित्य सत्य से जुड़ें।',
      en: 'Satguru\'s Direction: View this world as a traveler\'s inn. Cling to nothing perishable; anchor your soul in the imperishable Truth.'
    },
    practicalAction: {
      pb: 'ਮਨ ਵਿੱਚ ਵਿਚਾਰੋ: "ਸਭ ਕੁਝ ਇੱਥੇ ਹੀ ਰਹਿ ਜਾਣਾ ਹੈ, ਕੇਵਲ ਸਤਿਗੁਰੂ ਦੀ ਭਗਤੀ ਤੇ ਸ਼ੁਭ ਕਰਮ ਹੀ ਨਾਲ ਜਾਣਗੇ।"',
      hi: 'मन में विचार करें: "सब यहीं छूट जाना है, केवल सत्यनाम का सुमिरन और शुभ कर्म ही साथ जाएंगे।"',
      en: 'Reflect: "Everything worldly will be left behind; only true devotion and pure deeds accompany the soul."'
    },
    seedMantra: {
      pb: 'ਸੰਸਾਰ ਨਾਸ਼ਵੰਤ ਹੈ, ਸਤਯਨਾਮ ਅਮਰ ਹੈ।',
      hi: 'संसार नश्वर है, सत्यनाम अमर है।',
      en: 'The world is fleeting; Satya-Naam alone is eternal.'
    }
  },
  {
    id: 'sweet-speech',
    category: {
      pb: 'ਕੌੜੇ ਬੋਲ ਤੇ ਬਾਣੀ ਸੰਜਮ',
      hi: 'वाणी संयम एवं मिठास',
      en: 'Speech & Pure Conduct'
    },
    dilemma: {
      pb: 'ਜਦੋਂ ਕਿਸੇ ਨਾਲ ਮਤਭੇਦ ਹੋਵੇ ਜਾਂ ਕੌੜੇ ਸ਼ਬਦ ਕਹਿਣ ਦੀ ਉਤੇਜਨਾ ਹੋਵੇ',
      hi: 'जब किसी से कटु संवाद या विवाद की स्थिति उत्पन्न हो रही हो',
      en: 'When facing interpersonal conflict or the urge to utter harsh words'
    },
    sakhiText: {
      pb: 'ਐਸੀ ਬਾਨੀ ਬੋਲੀਐ, ਮਨ ਕਾ ਆਪਾ ਖੋਇ ।\nਔਰਨ ਕੋ ਸੀਤਲ ਕਰੈ, ਆਪਹੁ ਸੀਤਲ ਹੋਇ ॥',
      hi: 'ऐसी बानी बोलिए, मन का आपा खोइ ।\nऔरन को सीतल करै, आपहु सीतल होइ ॥'
    },
    source: 'ਸਾਖੀ ਸੰਗ੍ਰਹਿ · ਸਾਧੂ ਕੋ ਅੰਗ',
    meaning: {
      pb: 'ਆਪਣੇ ਮਨ ਦੇ ਅਹੰਕਾਰ ਨੂੰ ਮਿਟਾ ਕੇ ਅਜਿਹੇ ਮਿੱਠੇ ਅਤੇ ਹਿਤਕਾਰੀ ਬੋਲ ਬੋਲੋ, ਜੋ ਸੁਣਨ ਵਾਲੇ ਦੇ ਹਿਰਦੇ ਨੂੰ ਵੀ ਸ਼ਾਂਤ ਤੇ ਠੰਡਾ ਕਰ ਦੇਣ ਅਤੇ ਤੁਹਾਡੇ ਆਪਣੇ ਅੰਦਰ ਵੀ ਸ਼ਾਂਤੀ ਭਰ ਦੇਣ।',
      hi: 'मन के अहंकार को त्यागकर ऐसी मधुर व प्रेमपूर्ण वाणी बोलें जो सुनने वाले के हृदय को शांति प्रदान करे और स्वयं आपके अंतःकरण को भी शीतल कर दे।',
      en: 'Shed the ego of the mind and speak words of soothing grace; words that bring cool serenity to the listener, and sacred peace to your own heart.'
    },
    divineDirection: {
      pb: 'ਸਤਿਗੁਰੂ ਦਾ ਆਦੇਸ਼: ਬੋਲਣ ਤੋਂ ਪਹਿਲਾਂ ਸ਼ਬਦਾਂ ਨੂੰ ਆਪਣੇ ਹਿਰਦੇ ਦੀ ਤੱਕੜੀ \'ਤੇ ਤੋਲੋ। ਮਿੱਠਾ ਬੋਲਣਾ ਸਭ ਤੋਂ ਵੱਡਾ ਜਪ-ਤਪ ਹੈ।',
      hi: 'सतगुरु का आदेश: बोलने से पहले अपने वचनों को हृदय की तराजू पर तोलें। मीठा बोलना और वाणी पर संयम रखना सबसे बड़ा तप है।',
      en: 'Satguru\'s Direction: Weigh your words in the scales of the heart before speaking. Gentle speech is the highest penance.'
    },
    practicalAction: {
      pb: 'ਅੱਜ ਸਾਰਾ ਦਿਨ ਕਿਸੇ ਲਈ ਕੋਈ ਕੌੜਾ ਜਾਂ ਕਟਾਕਸ਼ ਵਾਲਾ ਸ਼ਬਦ ਨਾ ਬੋਲੋ। ਹਰ ਇੱਕ ਨਾਲ ਪ੍ਰੇਮ ਨਾਲ ਗੱਲ ਕਰੋ।',
      hi: 'आज पूरे दिन किसी के प्रति कोई व्यंग्य या कटु शब्द न बोलें। सभी से आदर और प्रेमपूर्वक बात करें।',
      en: 'Refrain from cynicism or harsh remarks today; treat everyone with warmth and respect.'
    },
    seedMantra: {
      pb: 'ਮਿੱਠਾ ਬੋਲੋ, ਮਨ ਦਾ ਅਹੰਕਾਰ ਖੋਵੋ।',
      hi: 'मधुर वाणी, शीतल अंतःकरण।',
      en: 'Sweet speech brings a calm and cooled heart.'
    }
  },
  {
    id: 'restless-mind',
    category: {
      pb: 'ਮਨ ਦੀ ਭਟਕਣ ਤੇ ਸਿਮਰਨ',
      hi: 'मन की चंचलता एवं सुमिरन',
      en: 'Restless Mind & Simran'
    },
    dilemma: {
      pb: 'ਜਦੋਂ ਪਾਠ ਜਾਂ ਧਿਆਨ ਕਰਦੇ ਸਮੇਂ ਮਨ ਇੱਧਰ-ਉੱਧਰ ਭਟਕ ਰਿਹਾ ਹੋਵੇ',
      hi: 'जब सुमिरन या ध्यान के समय मन बार-बार सांसारिक बातों में भटक रहा हो',
      en: 'When the mind wanders into mundane thoughts during meditation'
    },
    sakhiText: {
      pb: 'ਮਾਲਾ ਫੇਰਤ ਜੁਗ ਭਯਾ, ਫਿਰਾ ਨ ਮਨ ਕਾ ਫੇਰ ।\nਕਰ ਕਾ ਮਨਕਾ ਡਾਰਿ ਦੇ, ਮਨ ਕਾ ਮਨਕਾ ਫੇਰ ॥',
      hi: 'माला फेरत जुग भया, फिरा न मन का फेर ।\nकर का मनका डारि दे, मन का मनका फेर ॥'
    },
    source: 'ਸਾਖੀ ਸੰਗ੍ਰਹਿ · ਸੁਮਿਰਨ ਕੋ ਅੰਗ',
    meaning: {
      pb: 'ਹੱਥ ਵਿੱਚ ਮਾਲਾ ਫੇਰਦਿਆਂ ਯੁੱਗ ਬੀਤ ਗਏ, ਪਰ ਮਨ ਦੀ ਭਟਕਣ ਅਤੇ ਵਿਕਾਰ ਦੂਰ ਨਾ ਹੋਏ। ਹੁਣ ਹੱਥ ਦੀ ਲੱਕੜੀ ਦੀ ਮਾਲਾ ਛੱਡ ਕੇ ਆਪਣੇ ਮਨ ਦੇ ਮਣਕੇ ਨੂੰ ਪ੍ਰਭੂ-ਚਰਨਾਂ ਵੱਲ ਫੇਰੋ (ਮਨ ਨੂੰ ਨਿਰਮਲ ਕਰੋ)।',
      hi: 'हाथ में माला फेरते हुए युग बीत गए, फिर भी मन का भटकाव दूर नहीं हुआ। अब हाथ की माला छोड़कर मन के भावों को शुद्ध करो और अंतर्मन को सत्य में लगाओ।',
      en: 'Ages have passed turning beads with fingers, yet the mind\'s rotation ceased not. Lay aside the wooden rosary and turn the beads of the heart.'
    },
    divineDirection: {
      pb: 'ਸਤਿਗੁਰੂ ਦਾ ਆਦੇਸ਼: ਕੇਵਲ ਬਾਹਰੀ ਦਿਖਾਵਾ ਨਾ ਕਰੋ। ਸਿਮਰਨ ਹਿਰਦੇ ਦੀ ਡੂੰਘਾਈ ਵਿੱਚੋਂ ਉੱਠਣਾ ਚਾਹੀਦਾ ਹੈ। ਮਨ ਨੂੰ ਜ਼ਬਰਦਸਤੀ ਨਾ ਰੋਕੋ, ਉਸਨੂੰ ਪ੍ਰੇਮ ਰਸ ਪਿਲਾਓ।',
      hi: 'सतगुरु का आदेश: बाह्य आडंबर से बचें। सुमिरन हृदय की गहराई से उठना चाहिए। मन को बलपूर्वक दबाने के बजाय उसे प्रेम रस में निमग्न करें।',
      en: 'Satguru\'s Direction: Abandon outer pretension. Let remembrance spring from inner devotion; soak the mind in divine nectar rather than fighting it.'
    },
    practicalAction: {
      pb: '5 ਮਿੰਟ ਅੱਖਾਂ ਬੰਦ ਕਰਕੇ ਆਪਣੇ ਹਰੇਕ ਸਾਹ ਦੇ ਨਾਲ "ਸਤਿ-ਨਾਮ" ਦਾ ਧਿਆਨ ਕਰੋ।',
      hi: '5 मिनट एकांत में आंखें बंद कर प्रत्येक श्वास के साथ "सत्यनाम" की ध्वनि का अनुभव करें।',
      en: 'Sit quietly for 5 minutes and observe each incoming and outgoing breath with the silent remembrance of Satya-Naam.'
    },
    seedMantra: {
      pb: 'ਮਨ ਨੂੰ ਪ੍ਰੇਮ ਨਾਲ ਸਤਿਗੁਰੂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਜੋੜੋ।',
      hi: 'मन का मनका फेरो, सहज समाधि पाओ।',
      en: 'Turn the rosary of the heart; attain effortless communion.'
    }
  },
  {
    id: 'guru-bhakti',
    category: {
      pb: 'ਗੁਰੂ ਭਗਤੀ ਤੇ ਸ਼ਰਧਾ',
      hi: 'गुरु भक्ति एवं समर्पण',
      en: 'Guru Bhakti & Faith'
    },
    dilemma: {
      pb: 'ਜਦੋਂ ਜੀਵਨ ਵਿੱਚ ਅਸਲੀ ਮਾਰਗਦਰਸ਼ਕ ਦੀ ਭਾਲ ਹੋਵੇ ਜਾਂ ਸ਼ਰਧਾ ਕਮਜ਼ੋਰ ਪੈ ਰਹੀ ਹੋਵੇ',
      hi: 'जब जीवन में सच्ची दिशा की खोज हो अथवा श्रद्धा में शिथिलता आ रही हो',
      en: 'Seeking true spiritual direction or renewing devotion to the Master'
    },
    sakhiText: {
      pb: 'ਗੁਰੂ ਗੋਵਿੰਦ ਦੋਊ ਖੜੇ, ਕਾਕੇ ਲਾਗੂੰ ਪਾਇ ।\nਬਲਿਹਾਰੀ ਗੁਰੂ ਆਪਨੇ, ਗੋਵਿੰਦ ਦੀਯੋ ਬਤਾਇ ॥',
      hi: 'गुरु गोविंद दोऊ खड़े, काके लागूं पाइ ।\nबलिहारी गुरु आपने, गोविंद दीयो बताइ ॥'
    },
    source: 'ਸਾਖੀ ਸੰਗ੍ਰਹਿ · ਗੁਰੂਦੇਵ ਕੋ ਅੰਗ',
    meaning: {
      pb: 'ਜੇਕਰ ਮੇਰੇ ਸਾਹਮਣੇ ਗੁਰੂ ਅਤੇ ਭਗਵਾਨ ਦੋਵੇਂ ਖੜ੍ਹੇ ਹੋਣ, ਤਾਂ ਮੈਂ ਪਹਿਲਾਂ ਕਿਸ ਦੇ ਚਰਨ ਛੂਹਾਂਗਾ? ਮੈਂ ਆਪਣੇ ਸਤਿਗੁਰੂ ਉੱਤੇ ਬਲਿਹਾਰ ਜਾਂਦਾ ਹਾਂ ਜਿਨ੍ਹਾਂ ਨੇ ਮੈਨੂੰ ਗੋਵਿੰਦ (ਪਰਮਾਤਮਾ) ਦਾ ਭੇਤ ਦੱਸਿਆ।',
      hi: 'यदि गुरु और परमात्मा दोनों सम्मुख खड़े हों, तो मैं पहले किसके चरण स्पर्श करूं? मैं अपने गुरु पर बलिहारी जाता हूं, जिन्होंने मुझे परमात्मा का मार्ग दिखाया।',
      en: 'If the Guru and the Divine both stood before me, whose feet would I touch first? All glory to the Satguru who opened the door to the Supreme Truth.'
    },
    divineDirection: {
      pb: 'ਸਤਿਗੁਰੂ ਦਾ ਆਦੇਸ਼: ਸਤਿਗੁਰੂ ਹੀ ਸੰਸਾਰ-ਸਮੁੰਦਰ ਤੋਂ ਪਾਰ ਲੰਘਾਉਣ ਵਾਲਾ ਮਲਾਹ ਹੈ। ਗੁਰੂ-ਸ਼ਬਦ \'ਤੇ ਦ੍ਰਿੜ੍ਹ ਭਰੋਸਾ ਰੱਖੋ, ਸਾਰੇ ਭਰਮ ਮਿਟ ਜਾਣਗੇ।',
      hi: 'सतगुरु का आदेश: सतगुरु ही भवसागर से पार उतारने वाले खेवनहार हैं। गुरु-उपदेश पर अडिग विश्वास रखें, समस्त संशय स्वतः समाप्त हो जाएंगे।',
      en: 'Satguru\'s Direction: The Satguru is the ferryman across the ocean of existence. Firm faith in the Guru\'s Word dispels all darkness.'
    },
    practicalAction: {
      pb: 'ਸਤਿਗੁਰੂ ਦੇ ਸਨਮੁਖ ਮਨ ਹੀ ਮਨ ਪ੍ਰਣਾਮ ਕਰੋ ਅਤੇ ਨਿਰਸੁਆਰਥ ਭਾਵ ਨਾਲ ਅੱਜ ਕਿਸੇ ਲੋੜਵੰਦ ਦੀ ਸੇਵਾ ਕਰੋ।',
      hi: 'सतगुरु के सम्मुख मन ही मन साष्टांग नमन करें और निष्काम भाव से किसी प्राणी की सेवा करें।',
      en: 'Bow mentally to the Satguru and perform one selfless act of kindness today.'
    },
    seedMantra: {
      pb: 'ਗੁਰੂ ਚਰਨਾਂ ਵਿੱਚ ਪੂਰਨ ਸਮਰਪਣ ਹੀ ਮੁਕਤੀ ਦਾ ਦੁਆਰ ਹੈ।',
      hi: 'गुरु चरण ही परम शरण हैं।',
      en: 'The lotus feet of the Master are the supreme sanctuary.'
    }
  },
  {
    id: 'sadhana-karma',
    category: {
      pb: 'ਕਰਮ ਤੇ ਸੰਤੋਖ',
      hi: 'कर्म एवं संतोष',
      en: 'Contentment & Duty'
    },
    dilemma: {
      pb: 'ਜਦੋਂ ਦੂਜਿਆਂ ਦੀ ਦੌਲਤ ਜਾਂ ਵਡਿਆਈ ਵੇਖ ਕੇ ਆਪਣੇ ਹਾਲਾਤਾਂ \'ਤੇ ਈਰਖਾ ਜਾਂ ਹੀਣ-ਭਾਵਨਾ ਹੋਵੇ',
      hi: 'जब दूसरों की समृद्धि या वैभव देखकर मन में ईर्ष्या या असंतोष उत्पन्न हो',
      en: 'When feeling discontented or comparing your life to others'
    },
    sakhiText: {
      pb: 'ਰੂਖੀ ਸੂਖੀ ਖਾਇ ਕੇ, ਠੰਢਾ ਪਾਨੀ ਪੀਉ ।\nਦੇਖਿ ਪਰਾਈ ਚੂਪੜੀ, ਮਤ ਲਲਚਾਵੈ ਜੀਉ ॥',
      hi: 'रूखी सूखी खाइ के, ठंडा पानी पीउ ।\nदेखि पराई चूपड़ी, मत ललचावै जीउ ॥'
    },
    source: 'ਸਾਖੀ ਸੰਗ੍ਰਹਿ · ਸੰਤੋਖ ਕੋ ਅੰਗ',
    meaning: {
      pb: 'ਆਪਣੀ ਨੇਕ ਕਮਾਈ ਦੀ ਰੁੱਖੀ-ਸੁੱਕੀ ਰੋਟੀ ਖਾ ਕੇ ਸ਼ਾਂਤੀ ਨਾਲ ਠੰਡਾ ਪਾਣੀ ਪੀ ਲਵੋ। ਦੂਜਿਆਂ ਦੀ ਘਿਓ ਨਾਲ ਚੋਪੜੀ ਰੋਟੀ (ਦੌਲਤ-ਵੈਭਵ) ਵੇਖ ਕੇ ਆਪਣੇ ਮਨ ਨੂੰ ਲਾਲਚੀ ਨਾ ਬਣਾਓ।',
      hi: 'अपनी ईमानदारी की रूखी-सूखी रोटी खाकर संतोष से ठंडा पानी पी लो। दूसरों की घी से चुपड़ी रोटी देखकर अपने मन में लालच मत आने दो।',
      en: 'Eat your honestly earned dry crust in peace and drink cool water. Do not let your heart covet another\'s buttered loaf or worldly opulence.'
    },
    divineDirection: {
      pb: 'ਸਤਿਗੁਰੂ ਦਾ ਆਦੇਸ਼: ਸੰਤੋਖ ਹੀ ਸਭ ਤੋਂ ਵੱਡਾ ਧਨ ਹੈ। ਜਿਸ ਦੇ ਅੰਦਰ ਸੰਤੋਖ ਧਨ ਆ ਜਾਂਦਾ ਹੈ, ਉਸ ਅੱਗੇ ਸਾਰੇ ਸੰਸਾਰ ਦੇ ਧਨ ਮਿੱਟੀ ਬਰਾਬਰ ਹੋ ਜਾਂਦੇ ਹਨ।',
      hi: 'सतगुरु का आदेश: संतोष ही सबसे बड़ा धन है। जब संतोष रूपी अमृत अंतःकरण में उतरता है, तो समस्त सांसारिक तृष्णाएं शांत हो जाती हैं।',
      en: 'Satguru\'s Direction: Contentment is supreme wealth. When contentment awakens in the soul, all worldly cravings dissolve like dust.'
    },
    practicalAction: {
      pb: 'ਅੱਜ ਆਪਣੇ ਕੋਲ ਜੋ ਵੀ ਕੁਦਰਤ ਦੀ ਬਖਸ਼ਿਸ਼ ਹੈ, ਉਸ ਲਈ ਪਰਮਾਤਮਾ ਦਾ ਧੰਨਵਾਦ ਕਰੋ। ਕੋਈ ਸ਼ਿਕਵਾ ਨਾ ਕਰੋ।',
      hi: 'आज अपने जीवन में जो कुछ भी प्राप्त है, उसके प्रति कृतज्ञता व्यक्त करें। कोई शिकायत न करें।',
      en: 'Give heartfelt thanks today for all blessings in your life; let no complaint cross your lips.'
    },
    seedMantra: {
      pb: 'ਸੰਤੋਖ ਹੀ ਸਭ ਤੋਂ ਵੱਡਾ ਸੁੱਖ ਹੈ।',
      hi: 'संतोष धन परम धन है।',
      en: 'Contentment is the wealth of wealths.'
    }
  }
];

const formatSakhiSource = (src: string, lang: Language) => {
  if (lang === 'hi') {
    return src
      .replace(/ਸਾਖੀ ਸੰਗ੍ਰਹਿ/g, 'साखी संग्रह')
      .replace(/ਗਾਲੀ ਕੋ ਅੰਗ/g, 'गाली को अंग')
      .replace(/ਗਰਬ ਗੰਜਨ ਕੋ ਅੰਗ/g, 'ग़रब गंजन को अंग')
      .replace(/ਚੇਤਾਵਨੀ ਕੋ ਅੰਗ/g, 'चेतावनी को अंग')
      .replace(/ਕਾਲ ਕੋ ਅੰਗ/g, 'काल को अंग')
      .replace(/ਸਾਧੂ ਕੋ ਅੰਗ/g, 'साधु को अंग')
      .replace(/ਸੁਮਿਰਨ ਕੋ ਅੰਗ/g, 'सुमिरन को अंग')
      .replace(/ਗੁਰੂਦੇਵ ਕੋ ਅੰਗ/g, 'गुरुदेव को अंग')
      .replace(/ਸੰਤੋਖ ਕੋ ਅੰਗ/g, 'संतोख को अंग');
  } else if (lang === 'en') {
    return src
      .replace(/ਸਾਖੀ ਸੰਗ੍ਰਹਿ/g, 'Sakhi Sangrah')
      .replace(/ਗਾਲੀ ਕੋ ਅੰਗ/g, 'Gali Ko Ang')
      .replace(/ਗਰਬ ਗੰਜਨ ਕੋ ਅੰਗ/g, 'Garab Ganjan Ko Ang')
      .replace(/ਚੇਤਾਵਨੀ ਕੋ ਅੰਗ/g, 'Chetawani Ko Ang')
      .replace(/ਕਾਲ ਕੋ ਅੰਗ/g, 'Kaal Ko Ang')
      .replace(/ਸਾਧੂ ਕੋ ਅੰਗ/g, 'Sadhu Ko Ang')
      .replace(/ਸੁਮਿਰਨ ਕੋ ਅੰਗ/g, 'Sumiran Ko Ang')
      .replace(/ਗੁਰੂਦੇਵ ਕੋ ਅੰਗ/g, 'Gurudev Ko Ang')
      .replace(/ਸੰਤੋਖ ਕੋ ਅੰਗ/g, 'Santokh Ko Ang');
  }
  return src;
};

export const DivineGuidance: React.FC<DivineGuidanceProps> = ({
  language,
  onOpenBlessing,
  onSaveToDiary,
}) => {
  const { theme } = useAppTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeGuidance, setActiveGuidance] = useState<GuidanceEntry | null>(null);
  const [isMeditating, setIsMeditating] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [savedToDiary, setSavedToDiary] = useState<boolean>(false);

  const handleSeekGuidance = (entry?: GuidanceEntry) => {
    sacredHaptics.mediumTap();
    setIsMeditating(true);
    setActiveGuidance(null);
    setCopied(false);
    setSavedToDiary(false);

    // Meditative 1.2s delay for sacred revelation
    setTimeout(() => {
      if (entry) {
        setActiveGuidance(entry);
      } else {
        const pool = selectedCategory === 'all' 
          ? SACRED_GUIDANCE_DB 
          : SACRED_GUIDANCE_DB.filter(item => item.id === selectedCategory);
        const randomItem = pool[Math.floor(Math.random() * pool.length)] || SACRED_GUIDANCE_DB[0];
        setActiveGuidance(randomItem);
      }
      setIsMeditating(false);
      sacredHaptics.successVibration();
      if (onOpenBlessing) {
        onOpenBlessing(
          language === 'pb' ? 'ਸਤਿਗੁਰੂ ਦਿਵਯ ਆਦੇਸ਼ ਪ੍ਰਗਟ' : language === 'en' ? 'Divine Guidance Revealed' : 'सतगुरु दिव्य आदेश प्रकट',
          language === 'pb' ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਕਿਰਪਾ ਆਪ ਜੀ ਦੇ ਅੰਗ-ਸੰਗ ਹੈ।' : language === 'en' ? 'The grace of Satguru Kabir Saheb is forever with you.' : 'सतगुरु कबीर साहेब की कृपा आपके अंग-संग है।'
        );
      }
    }, 1200);
  };

  const handleCopy = () => {
    if (!activeGuidance) return;
    const formattedSrc = formatSakhiSource(activeGuidance.source, language);
    const text = `।। ${language === 'hi' ? 'सतगुरु दिव्य आदेश' : language === 'pb' ? 'ਸਤਿਗੁਰੂ ਦਿਵਯ ਆਦੇਸ਼' : 'Satguru Divine Guidance'} ।।\n\n${activeGuidance.sakhiText[language === 'pb' ? 'pb' : 'hi']}\n\n[${language === 'hi' ? 'स्रोत' : language === 'pb' ? 'ਸ੍ਰੋਤ' : 'Source'}: ${formattedSrc}]\n\n${language === 'hi' ? 'अर्थ' : language === 'pb' ? 'ਅਰਥ' : 'Meaning'}: ${activeGuidance.meaning[language]}\n\n${language === 'hi' ? 'सतगुरु आदेश' : language === 'pb' ? 'ਸਤਿਗੁਰੂ ਆਦੇਸ਼' : 'Divine Direction'}: ${activeGuidance.divineDirection[language]}\n\n${language === 'hi' ? 'जीवन अमल' : language === 'pb' ? 'ਜੀਵਨ ਅਮਲ' : 'Practice'}: ${activeGuidance.practicalAction[language]}\n\n${language === 'hi' ? 'मंत्र' : language === 'pb' ? 'ਮੰਤਰ' : 'Mantra'}: ${activeGuidance.seedMantra[language]}\n\n।। ${language === 'hi' ? 'साहेब बंदगी साहेब' : language === 'pb' ? 'ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ' : 'Saheb Bandagi Saheb'} ।।`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    sacredHaptics.lightTap();
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSaveDiary = () => {
    if (!activeGuidance || !onSaveToDiary) return;
    const notes = `[ਦਿਵਯ ਮਾਰਗਦਰਸ਼ਨ: ${activeGuidance.category[language]}]\n\n${activeGuidance.sakhiText.hi}\n\nਸਤਿਗੁਰੂ ਆਦੇਸ਼: ${activeGuidance.divineDirection[language]}\nਅਮਲ: ${activeGuidance.practicalAction[language]}`;
    onSaveToDiary(notes);
    setSavedToDiary(true);
    sacredHaptics.successVibration();
    setTimeout(() => setSavedToDiary(false), 2500);
  };

  return (
    <div className="max-w-4xl mx-auto p-3 sm:p-6 space-y-6">
      {/* Top Banner & Header */}
      <div 
        className="p-5 sm:p-7 rounded-3xl border shadow-sm relative overflow-hidden"
        style={{ 
          backgroundColor: theme.stepActiveBg, 
          borderColor: theme.accentGold 
        }}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 dark:text-amber-300">
              <Compass className="w-4 h-4 text-amber-700" />
              <span>
                {language === 'pb' ? 'ਅਧਿਆਤਮਿਕ ਸੰਦੇਹ ਨਿਵਾਰਣ' : language === 'en' ? 'Spiritual Dilemma Resolution' : 'अध्यात्म संशय निवारण'}
              </span>
              <span aria-hidden="true">·</span>
              <span>
                {language === 'pb' ? 'ਗੁਰੂ-ਕਿਰਪਾ ਆਦੇਸ਼' : language === 'en' ? 'Divine Guidance' : 'गुरु-कृपा आदेश'}
              </span>
            </div>
            <h1 
              style={{ color: theme.sacredMaroon }}
              className="text-2xl sm:text-3xl font-black font-serif tracking-tight"
            >
              {language === 'pb' 
                ? 'ਸਤਿਗੁਰੂ ਦਿਵਯ ਆਦੇਸ਼ / ਮਾਰਗਦਰਸ਼ਨ' 
                : language === 'en' 
                ? 'Satguru Divine Guidance & Solution' 
                : 'सतगुरु दिव्य आदेश एवं समाधान'}
            </h1>
            <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 max-w-xl font-medium">
              {language === 'pb'
                ? 'ਜਦੋਂ ਵੀ ਮਨ ਵਿੱਚ ਕੋਈ ਦੁਚਿੱਤੀ, ਚਿੰਤਾ ਜਾਂ ਉਲਝਣ ਹੋਵੇ, ਤਾਂ ਸ਼ਰਧਾ ਨਾਲ ਸੀਸ ਝੁਕਾ ਕੇ ਸਤਿਗੁਰੂ ਦਾ ਆਦੇਸ਼ ਪ੍ਰਾਪਤ ਕਰੋ।'
                : language === 'en'
                ? 'When in doubt, grief, or dilemma, seek the luminous guidance of Satguru Kabir Saheb with reverence.'
                : 'जब भी मन में कोई संशय, चिंता या दुविधा हो, तो श्रद्धापूर्वक नमन कर सतगुरु का पावन आदेश प्राप्त करें।'}
            </p>
          </div>

          <div className="flex flex-col items-end gap-3 shrink-0">
            <button
              onClick={() => handleSeekGuidance()}
              disabled={isMeditating}
              style={{ 
                backgroundColor: theme.sacredMaroon,
                color: '#FFFBF5'
              }}
              className="px-5 py-3 rounded-2xl font-bold font-serif text-sm shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5 cursor-pointer shrink-0"
            >
              <Sparkles className="w-4 h-4 text-amber-300 animate-spin" />
              <span>
                {language === 'pb' ? 'ਦਿਵਯ ਆਦੇਸ਼ ਲਓ' : language === 'en' ? 'Seek Guidance' : 'दिव्य आदेश प्राप्त करें'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Dilemma Selector Tabs */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-stone-600 dark:text-stone-400 block px-1">
          {language === 'pb' ? 'ਮਨੋਭਾਵ / ਪ੍ਰਸ਼ਨ ਚੁਣੋ (Optional):' : language === 'en' ? 'Select State of Mind / Question:' : 'मनोभाव अथवा प्रश्न चुनें:'}
        </label>
        <div className="flex flex-wrap gap-1.5 p-1.5 bg-amber-50/70 dark:bg-stone-900/40 rounded-2xl border border-amber-200/50 dark:border-stone-800">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-amber-800 text-white shadow-xs'
                : 'text-stone-700 dark:text-stone-300 hover:bg-amber-100/60'
            }`}
          >
            {language === 'pb' ? 'ਸਾਰੇ ਪ੍ਰਸ਼ਨ (All)' : language === 'en' ? 'All (General)' : 'समस्त प्रश्न (सभी)'}
          </button>

          {SACRED_GUIDANCE_DB.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setSelectedCategory(item.id);
                handleSeekGuidance(item);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === item.id
                  ? 'bg-amber-800 text-white shadow-xs font-bold'
                  : 'text-stone-700 dark:text-stone-300 hover:bg-amber-100/60'
              }`}
            >
              {item.category[language]}
            </button>
          ))}
        </div>
      </div>

      {/* Meditating Animation State */}
      {isMeditating && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="p-10 rounded-3xl border text-center space-y-4 shadow-sm"
          style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
        >
          <div className="relative inline-flex items-center justify-center">
            <div className="w-16 h-16 rounded-full border-4 border-amber-500/20 border-t-amber-600 animate-spin" />
            <Flame className="w-7 h-7 text-amber-600 absolute animate-pulse" />
          </div>
          <div className="space-y-1">
            <p className="text-base font-bold font-serif" style={{ color: theme.sacredMaroon }}>
              {language === 'pb' ? 'ਸਤਿਗੁਰੂ ਦੇ ਸਨਮੁਖ ਅੰਤਰ-ਧਿਆਨ ਹੋ ਰਹੇ ਹੋ...' : language === 'en' ? 'Attuning to the Divine Presence...' : 'सतगुरु के सम्मुख अंतर्ध्यान हो रहे हैं...'}
            </p>
            <p className="text-xs text-stone-500 font-medium font-serif">
              {language === 'hi' ? '।। सत्यनाम ।। साहेब बंदगी साहेब ।।' : language === 'pb' ? '।। ਸਤਯਨਾਮ ।। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ ।।' : '।। Satyanaam ।। Saheb Bandagi Saheb ।।'}
            </p>
          </div>
        </motion.div>
      )}

      {/* Revealed Guidance Display Card */}
      {!isMeditating && activeGuidance && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="p-5 sm:p-8 rounded-3xl border shadow-md space-y-6 relative overflow-hidden"
          style={{ 
            backgroundColor: theme.cardBg, 
            borderColor: theme.accentGold 
          }}
        >
          {/* Top Decorative Header */}
          <div className="flex items-center justify-between border-b pb-3 border-amber-200/50">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-800 dark:text-amber-400">
              <Sun className="w-4 h-4 text-amber-600" />
              <span>{activeGuidance.category[language]}</span>
              <span aria-hidden="true">·</span>
              <span className="opacity-80 font-serif">{formatSakhiSource(activeGuidance.source, language)}</span>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleCopy}
                className="p-2 rounded-xl text-stone-600 hover:text-amber-800 hover:bg-amber-50 dark:hover:bg-stone-800 transition cursor-pointer"
                title="Copy Guidance"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>

              {onSaveToDiary && (
                <button
                  onClick={handleSaveDiary}
                  className="p-2 rounded-xl text-stone-600 hover:text-amber-800 hover:bg-amber-50 dark:hover:bg-stone-800 transition cursor-pointer"
                  title="Save in Spiritual Diary"
                >
                  {savedToDiary ? <Check className="w-4 h-4 text-emerald-600" /> : <BookmarkPlus className="w-4 h-4" />}
                </button>
              )}
            </div>
          </div>

          {/* User Dilemma Stated */}
          <div className="p-3 rounded-2xl bg-amber-50/80 dark:bg-stone-900/40 border border-amber-200/50 text-xs text-stone-700 dark:text-stone-300">
            <span className="font-bold text-amber-900 dark:text-amber-300 mr-1.5">
              {language === 'pb' ? 'ਸੰਦੇਹ / ਸਥਿਤੀ:' : language === 'en' ? 'Your Concern:' : 'संशय / स्थिति:'}
            </span>
            {activeGuidance.dilemma[language]}
          </div>

          {/* Sacred Verse Centerpiece */}
          <UnifiedDohaCard
            id={`guidance-${activeGuidance.id}`}
            badgeLabel={activeGuidance.category}
            source={formatSakhiSource(activeGuidance.source, language)}
            text={{
              hi: activeGuidance.sakhiText.hi,
              pb: activeGuidance.sakhiText.pb,
              en: activeGuidance.sakhiText.hi,
            }}
            meaning={activeGuidance.meaning}
            language={language}
            defaultExpandedMeaning={false}
          />

          {/* Meaning / Bhavarth */}
          <div className="space-y-1.5">
            <h3 className="text-xs font-black uppercase tracking-wider text-amber-900 dark:text-amber-400 flex items-center gap-1.5">
              <Feather className="w-3.5 h-3.5" />
              <span>{language === 'pb' ? 'ਪਾਵਨ ਭਾਵ ਅਰਥ' : language === 'en' ? 'Sacred Meaning' : 'पावन भावार्थ'}</span>
            </h3>
            <p className="text-sm text-stone-800 dark:text-stone-200 leading-relaxed font-serif">
              {activeGuidance.meaning[language]}
            </p>
          </div>

          {/* Divine Direction (सतगुरु का आदेश) */}
          <div 
            className="p-4 rounded-2xl border space-y-1.5"
            style={{ 
              backgroundColor: 'rgba(184, 120, 40, 0.08)',
              borderColor: theme.accentGold
            }}
          >
            <h3 
              style={{ color: theme.sacredMaroon }}
              className="text-xs font-black uppercase tracking-wider flex items-center gap-1.5"
            >
              <Compass className="w-3.5 h-3.5 text-amber-700" />
              <span>{language === 'pb' ? 'ਸਤਿਗੁਰੂ ਦਾ ਆਦੇਸ਼ ਤੇ ਰੂਹਾਨੀ ਸੇਧ' : language === 'en' ? 'Satguru\'s Divine Direction' : 'सतगुरु का आदेश एवं आध्यात्मिक दिशा'}</span>
            </h3>
            <p className="text-sm font-semibold text-stone-900 dark:text-stone-100 leading-relaxed">
              {activeGuidance.divineDirection[language]}
            </p>
          </div>

          {/* Actionable Today Step & Seed Mantra */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-2xl border border-amber-200/60 dark:border-stone-800 bg-white/70 dark:bg-zinc-900/50 space-y-1">
              <span className="text-[11px] font-bold text-amber-800 dark:text-amber-400 uppercase tracking-wide flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                {language === 'pb' ? 'ਅੱਜ ਦਾ ਅਭਿਆਸ / ਅਮਲ' : language === 'en' ? 'Today\'s Practical Step' : 'आज का आचरण / साधना'}
              </span>
              <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                {activeGuidance.practicalAction[language]}
              </p>
            </div>

            <div className="p-3.5 rounded-2xl border border-amber-200/60 dark:border-stone-800 bg-white/70 dark:bg-zinc-900/50 space-y-1">
              <span className="text-[11px] font-bold text-amber-800 dark:text-amber-400 uppercase tracking-wide flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                {language === 'pb' ? 'ਅੰਤਰ-ਸਿਮਰਨ ਬੀਜ ਸੂਤਰ' : language === 'en' ? 'Seed Contemplation' : 'अंतर्-सुमिरन बीज सूत्र'}
              </span>
              <p className="text-xs font-bold text-amber-900 dark:text-amber-300 leading-relaxed font-serif">
                "{activeGuidance.seedMantra[language]}"
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-amber-200/50">
            <button
              onClick={() => handleSeekGuidance()}
              className="px-4 py-2.5 rounded-xl border border-amber-400/50 hover:bg-amber-100/50 text-xs font-bold text-stone-800 dark:text-stone-200 transition flex items-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5 text-amber-700" />
              <span>{language === 'pb' ? 'ਹੋਰ ਆਦੇਸ਼ ਲਓ' : language === 'en' ? 'Seek Another Guidance' : 'अन्य आदेश प्राप्त करें'}</span>
            </button>

            <div className="flex items-center gap-2">
              {onOpenBlessing && (
                <button
                  onClick={() => onOpenBlessing(
                    language === 'pb' ? 'ਪੁਸ਼ਪ ਅਰਪਣ ਤੇ ਗੁਰੂ ਕਿਰਪਾ' : language === 'en' ? 'Sacred Petal Offering & Grace' : 'पुष्प अर्पण एवं गुरु कृपा',
                    language === 'pb' ? 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਆਪ ਜੀ ਦਾ ਸਮਰਪਣ ਪ੍ਰਵਾਨ ਹੋਵੇ।' : language === 'en' ? 'May your devotion at the lotus feet of Satguru Kabir Saheb be accepted.' : 'सतगुरु कबीर साहेब के चरणों में आपका समर्पण स्वीकार हो।'
                  )}
                  style={{ backgroundColor: theme.stepActiveBg, color: theme.sacredMaroon }}
                  className="px-4 py-2.5 rounded-xl border border-amber-300 font-bold text-xs hover:scale-105 transition flex items-center gap-1.5 cursor-pointer"
                >
                  <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600" />
                  <span>{language === 'pb' ? 'ਪੁਸ਼ਪ ਅਰਪਿਤ ਕਰੋ' : language === 'en' ? 'Offer Petals' : 'पुष्प अर्पित करें'}</span>
                </button>
              )}
            </div>
          </div>
        </motion.div>
      )}

      {/* Initial Guidance Card (Prompt to tap) */}
      {!isMeditating && !activeGuidance && (
        <div 
          className="p-8 sm:p-12 rounded-3xl border text-center space-y-4 shadow-sm"
          style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
        >
          <div className="w-16 h-16 rounded-3xl mx-auto flex items-center justify-center bg-amber-100/80 dark:bg-stone-900 border border-amber-300">
            <Compass className="w-8 h-8 text-amber-700" />
          </div>
          <div className="space-y-1.5 max-w-md mx-auto">
            <h3 
              style={{ color: theme.sacredMaroon }}
              className="text-lg font-bold font-serif"
            >
              {language === 'pb' 
                ? 'ਕਿਸੇ ਵੀ ਜੀਵਨ-ਪ੍ਰਸ਼ਨ \'ਤੇ ਸਤਿਗੁਰੂ ਦੀ ਸਲਾਹ ਲਓ' 
                : language === 'en' 
                ? 'Receive Timeless Guidance for Life Questions' 
                : 'किसी भी जीवन-प्रश्न पर सतगुरु की पावन सलाह प्राप्त करें'}
            </h3>
            <p className="text-xs text-stone-600 dark:text-stone-400 font-medium">
              {language === 'pb'
                ? 'ਕ੍ਰੋਧ, ਚਿੰਤਾ, ਅਹੰਕਾਰ, ਮੋਹ ਜਾਂ ਭਟਕਣ ਦੇ ਹੱਲ ਲਈ ਉੱਪਰ ਦਿੱਤੇ ਬਟਨ \'ਤੇ ਟੈਪ ਕਰੋ।'
                : language === 'en'
                ? 'Tap the button above to receive clear, direct spiritual resolution for anger, worry, ego, or attachment.'
                : 'क्रोध, चिंता, अहंकार, मोह अथवा भटकाव के समाधान के लिए ऊपर दिए गए बटन पर टैप करें।'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
