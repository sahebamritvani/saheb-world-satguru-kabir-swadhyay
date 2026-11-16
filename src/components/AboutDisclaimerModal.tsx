import React from 'react';
import { X, BookOpen, ShieldCheck, Sparkles, Languages } from 'lucide-react';
import { useAppTheme } from '../theme/ThemeContext';
import { Language, SACRED_BRANDING } from '../types';

interface AboutDisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onSelectLanguage: (lang: Language) => void;
}

const MODAL_CONTENT = {
  hi: {
    aboutTitle: 'हमारे बारे में (About Us)',
    aboutHeader: 'साहेब वर्ल्ड - सतगुरु कबीर साहेब स्वाध्याय ऐप में आपका स्वागत है।',
    aboutPara1: 'यह ऐप संत शिरोमणि सद्गुरु कबीर साहेब के शाश्वत ज्ञान, उनके जीवन परिचय, क्रांतिकारी विचारों, साखियों, सबद, रमैनी और उनकी रहस्यमयी उलटबांसियों को आधुनिक तकनीक के माध्यम से जन-जन तक पहुँचाने का एक पवित्र प्रयास है।',
    aboutPara2: 'हमारा उद्देश्य सतगुरु कबीर साहेब के उस तत्वज्ञान को सहेजकर एक स्थान पर लाना है, जो समाज से अंधविश्वास, पाखंड और छुआछूत जैसी कुरीतियों को मिटाकर मानवता, आपसी भाईचारे और आत्मज्ञान का मार्ग प्रशस्त करता है। यह ऐप पूरी तरह से कबीर साहेब की शिक्षाओं और उनके मूल ग्रंथों पर आधारित है ताकि यूज़र्स को एक प्रामाणिक और सहज आध्यात्मिक अनुभव मिल सके।',
    
    disclaimerTitle: 'अस्वीकरण (Disclaimer) — कानूनी तौर पर ज़रूरी',
    disclaimerPara1: 'इस ऐप में दी गई सभी जानकारियाँ, जैसे सद्गुरु कबीर साहेब का जीवन परिचय, चारों युगों के अवतारों की कथाएँ, उलटबांसियाँ और दोहे, विभिन्न कबीर पंथी पवित्र ग्रंथों (जैसे बीजक, कबीर सागर, अनुराग सागर) और ऐतिहासिक मान्यताओं पर आधारित हैं।',
    disclaimerPara2: 'इस ऐप का मुख्य उद्देश्य केवल सतगुरु कबीर साहेब के विचारों का वैचारिक व आध्यात्मिक प्रचार-प्रसार करना और शिक्षा प्रदान करना है। हमारा इरादा किसी भी धर्म, संप्रदाय, जाति या समुदाय की भावनाओं को ठेस पहुँचाना नहीं है।',
    warningLabel: 'विशेष ध्यान दें:',
    warningText: 'ऐप में दिए गए यौगिक, चक्र साधना और ब्रह्मांड एवं अमरलोक दर्शन (Universe Map) के विवरण केवल सांकेतिक और दार्शनिक अर्थ समझाने के लिए हैं। किसी भी प्रकार की ध्यान या योग साधना को केवल एक योग्य और प्रामाणिक मार्गदर्शक या सच्चे गुरु की देखरेख में ही किया जाना चाहिए।'
  },
  pb: {
    aboutTitle: 'ਸਾਡੇ ਬਾਰੇ (About Us)',
    aboutHeader: 'ਸਾਹੇਬ ਵਰਲਡ - ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਸਵਾਧਿਆਏ ਐਪ ਵਿੱਚ ਤੁਹਾਡਾ ਸੁਆਗਤ ਹੈ।',
    aboutPara1: 'ਇਹ ਐਪ ਸੰਤ ਸ਼ਿਰੋਮਣੀ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੇ ਸਦੀਵੀ ਗਿਆਨ, ਉਨ੍ਹਾਂ ਦੇ ਜੀਵਨ ਪਰਿਚਯ, ਕ੍ਰਾਂਤੀਕਾਰੀ ਵਿਚਾਰਾਂ, ਸਾਖੀਆਂ, ਸਬਦ, ਰਮੈਣੀ ਅਤੇ ਉਨ੍ਹਾਂ ਦੀਆਂ ਰਹੱਸਮਈ ਉਲਟਬਾਂਸੀਆਂ ਨੂੰ ਆਧੁਨਿਕ ਤਕਨੀਕ ਰਾਹੀਂ ਹਰ ਘਰ ਤੱਕ ਪਹੁੰਚਾਉਣ ਦਾ ਇੱਕ ਪਵਿੱਤਰ ਉਪਰਾਲਾ ਹੈ।',
    aboutPara2: 'ਸਾਡਾ ਉਦੇਸ਼ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੇ ਉਸ ਤੱਤ-ਗਿਆਨ ਨੂੰ ਸੰਭਾਲ ਕੇ ਇੱਕ ਥਾਂ ਤੇ ਲਿਆਉਣਾ ਹੈ, ਜੋ ਸਮਾਜ ਵਿੱਚੋਂ ਅੰਧਵਿਸ਼ਵਾਸ, ਪਾਖੰਡ ਅਤੇ ਛੂਤ-ਛਾਤ ਵਰਗੀਆਂ ਕੁਰੀਤੀਆਂ ਨੂੰ ਮਿਟਾ ਕੇ ਮਨੁੱਖਤਾ, ਆਪਸੀ ਭਾਈਚਾਰੇ ਅਤੇ ਆਤਮ-ਗਿਆਨ ਦਾ ਮਾਰਗ ਪੱਧਰਾ ਕਰਦਾ ਹੈ। ਇਹ ਐਪ ਪੂਰੀ ਤਰ੍ਹਾਂ ਕਬੀਰ ਸਾਹੇਬ ਦੀਆਂ ਸਿੱਖਿਆਵਾਂ ਅਤੇ ਉਨ੍ਹਾਂ ਦੇ ਮੂਲ ਗ੍ਰੰਥਾਂ ਤੇ ਅਧਾਰਿਤ ਹੈ ਤਾਂ ਜੋ ਉਪਭੋਗਤਾਵਾਂ ਨੂੰ ਇੱਕ ਪ੍ਰਮਾਣਿਕ ਅਤੇ ਸਹਿਜ ਰੂਹਾਨੀ ਅਨੁਭਵ ਮਿਲ ਸਕੇ।',
    
    disclaimerTitle: 'ਅਸਵੀਕਾਰਤਾ (Disclaimer) — ਕਾਨੂੰਨੀ ਤੌਰ ਤੇ ਜ਼ਰੂਰੀ',
    disclaimerPara1: 'ਇਸ ਐਪ ਵਿੱਚ ਦਿੱਤੀਆਂ ਗਈਆਂ ਸਾਰੀਆਂ ਜਾਣਕਾਰੀਆਂ, ਜਿਵੇਂ ਕਿ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦਾ ਜੀਵਨ ਪਰਿਚਯ, ਚਾਰਾਂ ਯੁੱਗਾਂ ਦੇ ਅਵਤਾਰਾਂ ਦੀਆਂ ਕਹਾਣੀਆਂ, ਉਲਟਬਾਂਸੀਆਂ ਅਤੇ ਦੋਹੇ, ਵੱਖ-ਵੱਖ ਕਬੀਰ ਪੰਥੀ ਪਵਿੱਤਰ ਗ੍ਰੰਥਾਂ (ਜਿਵੇਂ ਬੀਜਕ, ਕਬੀਰ ਸਾਗਰ, ਅਨੁਰਾਗ ਸਾਗਰ) ਅਤੇ ਇਤਿਹਾਸਕ ਮਾਨਤਾਵਾਂ ਤੇ ਅਧਾਰਿਤ ਹਨ।',
    disclaimerPara2: 'ਇਸ ਐਪ ਦਾ ਮੁੱਖ ਉਦੇਸ਼ ਸਿਰਫ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੇ ਵਿਚਾਰਾਂ ਦਾ ਪ੍ਰਚਾਰ-ਪ੍ਰਸਾਰ ਕਰਨਾ ਅਤੇ ਸਿੱਖਿਆ ਪ੍ਰਦਾਨ ਕਰਨਾ ਹੈ। ਸਾਡਾ ਇਰਾਦਾ ਕਿਸੇ ਵੀ ਧਰਮ, ਸੰਪਰਦਾਇ, ਜਾਤ ਜਾਂ ਭਾਈਚਾਰੇ ਦੀਆਂ ਭਾਵਨਾਵਾਂ ਨੂੰ ਠੇਸ ਪਹੁੰਚਾਉਣਾ ਨਹੀਂ ਹੈ।',
    warningLabel: 'ਵਿਸ਼ੇਸ਼ ਧਿਆਨ ਦਿਓ:',
    warningText: 'ਐਪ ਵਿੱਚ ਦਿੱਤੇ ਗਏ ਯੋਗਿਕ, ਚੱਕਰ ਸਾਧਨਾ ਅਤੇ ਬ੍ਰਹਮੰਡ ਤੇ ਅਮਰਲੋਕ ਦਰਸ਼ਨ (Universe Map) ਦੇ ਵੇਰਵੇ ਸਿਰਫ ਸੰਕੇਤਕ ਅਤੇ ਦਾਰਸ਼ਨਿਕ ਅਰਥ ਸਮਝਾਉਣ ਲਈ ਹਨ। ਕਿਸੇ ਵੀ ਕਿਸਮ ਦੀ ਮੈਡੀਟੇਸ਼ਨ ਜਾਂ ਯੋਗ ਸਾਧਨਾ ਨੂੰ ਕੇਵਲ ਇੱਕ ਯੋਗ ਅਤੇ ਪ੍ਰਮਾਣਿਕ ਮਾਰਗਦਰਸ਼ਕ ਜਾਂ ਸੱਚੇ ਗੁਰੂ ਦੀ ਨਿਗਰਾਨੀ ਹੇਠ ਹੀ ਕੀਤਾ ਜਾਣਾ ਚਾਹੀਦਾ ਹੈ।'
  },
  en: {
    aboutTitle: 'About Us',
    aboutHeader: 'Welcome to Saheb World - Satguru Kabir Saheb Sacred Swadhyay App.',
    aboutPara1: 'This app is a sacred endeavor to propagate the eternal wisdom, life biography, revolutionary thoughts, Sakhis, Shabads, Ramainis, and mystical paradoxes (Ulatvansis) of Sant Shiromani Satguru Kabir Saheb using modern technology.',
    aboutPara2: 'Our objective is to preserve and unite the core philosophy of Satguru Kabir Saheb, which eradicates superstition, hypocrisy, and discrimination to pave the way for humanity, brotherhood, and self-realization. The app is deeply rooted in verified ancient texts to offer an authentic and serene spiritual experience.',
    
    disclaimerTitle: 'Disclaimer — Legally Required',
    disclaimerPara1: 'All information provided in this app, including the life biography of Satguru Kabir Saheb, stories of His manifestations across the four eras, paradoxes, and sakhis, is based on various sacred Kabir Panth scriptures (such as Bijak, Kabir Sagar, Anurag Sagar) and historical traditions.',
    disclaimerPara2: 'The primary objective of this app is to share the educational and spiritual ideas of Satguru Kabir Saheb. We do not intend to hurt the sentiments of any religion, sect, caste, or community.',
    warningLabel: 'Important Notice:',
    warningText: 'The descriptions of Yogic techniques, Chakra meditation, and cosmology/Universe Map are purely symbolic and philosophic. Any meditation or spiritual practice should only be performed under the guidance of a qualified master or true guru.'
  }
};

export const AboutDisclaimerModal: React.FC<AboutDisclaimerModalProps> = ({
  isOpen,
  onClose,
  language,
  onSelectLanguage,
}) => {
  const { theme } = useAppTheme();
  if (!isOpen) return null;

  const exactTop = SACRED_BRANDING.header[language];
  const exactBottom = SACRED_BRANDING.footer[language];
  const content = MODAL_CONTENT[language] || MODAL_CONTENT.hi;

  return (
    <div
      id="about-disclaimer-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm transition-opacity"
    >
      <div
        id="about-disclaimer-modal-card"
        style={{
          backgroundColor: theme.cardBg,
          borderColor: theme.accentGold,
          color: theme.textPrimary,
        }}
        className="relative z-20 w-full max-w-2xl rounded-2xl border-2 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] transition-all"
      >
        {/* Top Sacred Branding */}
        <div
          style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.cardBorder }}
          className="border-b py-2.5 px-4 text-center select-none flex items-center justify-between shrink-0"
        >
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-600 animate-pulse" />
            <span
              style={{ color: theme.sacredMaroon }}
              className="text-sm sm:text-base font-bold tracking-wider font-serif"
            >
              {exactTop}
            </span>
          </div>
          <button
            id="close-about-modal-btn"
            onClick={onClose}
            style={{ color: theme.textSecondary }}
            className="p-1 hover:text-black dark:hover:text-white transition cursor-pointer"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dynamic Language Switcher Option Inside Modal */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-between px-5 sm:px-8 py-3.5 border-b gap-3 select-none" 
          style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder }}
        >
          <div className="text-xs sm:text-sm font-black flex items-center gap-2" style={{ color: theme.sacredMaroon }}>
            <Languages className="w-4 h-4 text-amber-600 animate-spin-slow" />
            <span>{language === 'pb' ? 'ਭਾਸ਼ਾ ਬਦਲੋ' : language === 'en' ? 'Change Language' : 'भाषा का चुनाव करें'}</span>
          </div>
          <div className="flex border rounded-xl p-0.5 overflow-hidden" style={{ borderColor: theme.accentGold, backgroundColor: theme.cardBg }}>
            {(['hi', 'pb', 'en'] as Language[]).map((lng) => {
              const isSelected = language === lng;
              const label = lng === 'hi' ? 'हिंदी' : lng === 'pb' ? 'ਪੰਜਾਬੀ' : 'English';
              return (
                <button
                  key={lng}
                  onClick={() => onSelectLanguage(lng)}
                  className="text-xs font-bold px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap"
                  style={{
                    backgroundColor: isSelected ? theme.sacredMaroon : 'transparent',
                    color: isSelected ? '#FFFFFF' : theme.textSecondary,
                  }}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto px-5 sm:px-8 py-6 space-y-6 flex-1 overscroll-contain">
          {/* Section 1: About Us */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 pb-2 border-b" style={{ borderColor: theme.cardBorder }}>
              <BookOpen className="w-5 h-5 text-amber-600" />
              <h2 className="text-lg sm:text-xl font-bold font-serif" style={{ color: theme.sacredMaroon }}>
                {content.aboutTitle}
              </h2>
            </div>
            <div className="space-y-3 text-sm sm:text-base leading-relaxed opacity-95">
              <p className="font-bold text-amber-700 dark:text-amber-400">
                {content.aboutHeader}
              </p>
              <p>{content.aboutPara1}</p>
              <p>{content.aboutPara2}</p>
            </div>
          </div>

          {/* Section 2: Disclaimer */}
          <div className="space-y-3 pt-4 border-t" style={{ borderColor: theme.cardBorder }}>
            <div className="flex items-center gap-2 pb-2 border-b" style={{ borderColor: theme.cardBorder }}>
              <ShieldCheck className="w-5 h-5 text-amber-600" />
              <h2 className="text-lg sm:text-xl font-bold font-serif" style={{ color: theme.sacredMaroon }}>
                {content.disclaimerTitle}
              </h2>
            </div>
            <div className="space-y-3 text-sm sm:text-base leading-relaxed opacity-95">
              <p>{content.disclaimerPara1}</p>
              <p>{content.disclaimerPara2}</p>
              <div 
                style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.accentGold }}
                className="p-3.5 rounded-xl border text-xs sm:text-sm font-medium space-y-1"
              >
                <p className="font-bold text-amber-800 dark:text-amber-400">
                  ⚠️ {content.warningLabel}
                </p>
                <p className="opacity-95 leading-relaxed">
                  {content.warningText}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sacred Footer */}
        <div
          style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.cardBorder }}
          className="border-t py-2.5 px-4 text-center select-none shrink-0"
        >
          <span
            style={{ color: theme.sacredMaroon }}
            className="text-xs sm:text-sm font-semibold tracking-wider font-serif block"
          >
            {exactBottom}
          </span>
        </div>
      </div>
    </div>
  );
};
