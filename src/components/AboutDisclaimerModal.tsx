import React, { useState, useEffect } from 'react';
import { X, BookOpen, ShieldCheck, Sparkles, Languages, Lock, HelpCircle } from 'lucide-react';
import { useAppTheme } from '../theme/ThemeContext';
import { Language, SACRED_BRANDING } from '../types';
import { UserGuideView } from './UserGuideView';
import { sacredHaptics } from '../services/haptics';
import {
  ADMIN_SLOTS_UPDATED_EVENT,
  AdminGranthSlotId,
  getInjectedGranthChapters,
  getSlotStatus,
} from '../services/adminSlotInjectorStore';

export type AboutDisclaimerSection = 'about' | 'disclaimer' | 'privacy' | 'guide';

const SECTION_SLOT_MAP: Record<AboutDisclaimerSection, AdminGranthSlotId> = {
  guide: 'slot-51-user-guide',
  about: 'slot-52-about-us',
  disclaimer: 'slot-53-disclaimer',
  privacy: 'slot-54-privacy-policy',
};

interface AboutDisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onSelectLanguage: (lang: Language) => void;
  section?: AboutDisclaimerSection;
}

const MODAL_CONTENT = {
  hi: {
    aboutTitle: 'हमारे बारे में (About Us)',
    aboutHeader: 'साहेब वर्ल्ड - सतगुरु कबीर साहेब स्वाध्याय ऐप में आपका स्वागत है।',
    aboutPara1: 'यह ऐप संत शिरोमणि सतगुरु कबीर साहेब के शाश्वत ज्ञान, उनके जीवन परिचय, क्रांतिकारी विचारों, साखियों, सबद, रमैनी और उनकी रहस्यमयी उलटबांसियों को आधुनिक तकनीक के माध्यम से जन-जन तक पहुँचाने का एक पवित्र प्रयास है।',
    aboutPara2: 'हमारा उद्देश्य सतगुरु कबीर साहेब के उस तत्वज्ञान को सहेजकर एक स्थान पर लाना है, जो समाज से अंधविश्वास, पाखंड और छुआछूत जैसी कुरीतियों को मिटाकर मानवता, आपसी भाईचारे और आत्मज्ञान का मार्ग प्रशस्त करता है। यह ऐप पूरी तरह से सतगुरु कबीर साहेब की शिक्षाओं और उनके मूल ग्रंथों पर आधारित है ताकि यूज़र्स को एक प्रामाणिक और सहज आध्यात्मिक अनुभव मिल सके।',
    
    disclaimerTitle: 'अस्वीकरण (Disclaimer)',
    disclaimerPara1: 'इस ऐप में दी गई सभी जानकारियाँ, जैसे सतगुरु कबीर साहेब का जीवन परिचय, चारों युगों के अवतारों की कथाएँ, उलटबांसियाँ और दोहे, विभिन्न कबीर पंथी पवित्र ग्रंथों (जैसे बीजक, कबीर सागर, अनुराग सागर) और ऐतिहासिक मान्यताओं पर आधारित हैं।',
    disclaimerPara2: 'इस ऐप का मुख्य उद्देश्य केवल सतगुरु कबीर साहेब के विचारों का वैचारिक व आध्यात्मिक प्रचार-प्रसार करना और शिक्षा प्रदान करना है। हमारा इरादा किसी भी धर्म, संप्रदाय, जाति या समुदाय की भावनाओं को ठेस पहुँचाना नहीं है।',
    warningLabel: 'विशेष ध्यान दें:',
    warningText: 'ऐप में दिए गए यौगिक, चक्र साधना और ब्रह्मांड एवं अमरलोक दर्शन (Universe Map) के विवरण केवल सांकेतिक और दार्शनिक अर्थ समझाने के लिए हैं। किसी भी प्रकार की ध्यान या योग साधना को केवल एक योग्य और प्रामाणिक मार्गदर्शक या सच्चे गुरु की देखरेख में ही किया जाना चाहिए।',

    privacyTitle: 'गोपनीयता नीति (Privacy Policy) — Saheb World App',
    privacyUpdated: 'अंतिम अद्यतन (Last Updated): नवंबर 2026',
    privacyIntro: '\'Saheb World\' ऐप का उपयोग करने के लिए धन्यवाद। हम आपकी निजता (Privacy) और डेटा सुरक्षा का पूर्ण सम्मान करते हैं। यह गोपनीयता नीति स्पष्ट करती है कि हमारा ऐप आपकी जानकारी को किस प्रकार संभालता है।',
    privacySections: [
      {
        heading: '१. हम कौन सी जानकारी एकत्र करते हैं? (Information We Collect)',
        bullets: [
          'व्यक्तिगत जानकारी (नाम व शहर): यदि आप स्वेच्छा से अपनी प्रोफाइल में अपना नाम या शहर दर्ज करते हैं, तो उसका उपयोग केवल आपके \'स्वाध्याय सिद्धि प्रमाण-पत्र\' (Completion Certificate) पर आपका नाम प्रिंट करने के लिए किया जाता है।',
          'स्वाध्याय प्रगति व जर्नल: आपकी ११-चरणीय स्वाध्याय प्रगति, क्विज़ के परिणाम और डायरी (चिंतन) के नोट्स केवल आपके अपने डिवाइस (ब्राउज़र/फोन की लोकल स्टोरेज) में सुरक्षित रहते हैं।'
        ]
      },
      {
        heading: '२. डेटा का उपयोग और सुरक्षा (Data Usage & Security)',
        bullets: [
          'हम आपका कोई भी व्यक्तिगत डेटा, ईमेल या मोबाइल नंबर किसी बाहरी सर्वर पर नहीं बेचते और न ही किसी थर्ड-पार्टी (विज्ञापन कंपनियों) के साथ साझा करते हैं।',
          'ऐप का मुख्य उद्देश्य केवल निःस्वार्थ आध्यात्मिक ज्ञान और स्वाध्याय की सुविधा प्रदान करना है।'
        ]
      },
      {
        heading: '३. डिवाइस अनुमतियाँ (App Permissions)',
        bullets: [
          'नोटिफिकेशन (Notifications): यदि आप \'दैनिक स्वाध्याय रिमाइंडर\' चालू करते हैं, तो ऐप केवल आपके द्वारा चुने गए समय पर आपको दैनिक साखी पढ़ने की याद दिलाने के लिए नोटिफिकेशन भेजता है। आप इसे कभी भी बंद कर सकते हैं।',
          'स्टोरेज / गैलरी (Storage): जब आप अपना प्रमाण-पत्र (Certificate) डाउनलोड करते हैं, तो ऐप केवल उस इमेज फाइल को आपके फोन की गैलरी में सेव करने की अनुमति लेता है।'
        ]
      },
      {
        heading: '४. बच्चों की गोपनीयता (Children\'s Privacy)',
        bullets: [
          'यह ऐप सभी आयु वर्ग के साधकों और परिवारों के लिए पूर्णतः सुरक्षित और ज्ञानवर्धक है। इसमें किसी भी प्रकार की आपत्तिजनक सामग्री नहीं है।'
        ]
      }
    ],
    privacyContactHeading: '५. संपर्क करें (Contact Us)',
    privacyContactText: 'यदि इस गोपनीयता नीति या ऐप से संबंधित आपका कोई प्रश्न या सुझाव है, तो आप हमें इस ईमेल पर संपर्क कर सकते हैं:',
    privacyEmailLabel: 'ईमेल:'
  },
  pb: {
    aboutTitle: 'ਸਾਡੇ ਬਾਰੇ (About Us)',
    aboutHeader: 'ਸਾਹੇਬ ਵਰਲਡ - ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਸਵਾਧਿਆਏ ਐਪ ਵਿੱਚ ਤੁਹਾਡਾ ਸੁਆਗਤ ਹੈ।',
    aboutPara1: 'ਇਹ ਐਪ ਸੰਤ ਸ਼ਿਰੋਮਣੀ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੇ ਸਦੀਵੀ ਗਿਆਨ, ਉਨ੍ਹਾਂ ਦੇ ਜੀਵਨ ਪਰਿਚਯ, ਕ੍ਰਾਂਤੀਕਾਰੀ ਵਿਚਾਰਾਂ, ਸਾਖੀਆਂ, ਸਬਦ, ਰਮੈਣੀ ਅਤੇ ਉਨ੍ਹਾਂ ਦੀਆਂ ਰਹੱਸਮਈ ਉਲਟਬਾਂਸੀਆਂ ਨੂੰ ਆਧੁਨਿਕ ਤਕਨੀਕ ਰਾਹੀਂ ਹਰ ਘਰ ਤੱਕ ਪਹੁੰਚਾਉਣ ਦਾ ਇੱਕ ਪਵਿੱਤਰ ਉਪਰਾਲਾ ਹੈ।',
    aboutPara2: 'ਸਾਡਾ ਉਦੇਸ਼ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੇ ਉਸ ਤੱਤ-ਗਿਆਨ ਨੂੰ ਸੰਭਾਲ ਕੇ ਇੱਕ ਥਾਂ ਤੇ ਲਿਆਉਣਾ ਹੈ, ਜੋ ਸਮਾਜ ਵਿੱਚੋਂ ਅੰਧਵਿਸ਼ਵਾਸ, ਪਾਖੰਡ ਅਤੇ ਛੂਤ-ਛਾਤ ਵਰਗੀਆਂ ਕੁਰੀਤੀਆਂ ਨੂੰ ਮਿਟਾ ਕੇ ਮਨੁੱਖਤਾ, ਆਪਸੀ ਭਾਈਚਾਰੇ ਅਤੇ ਆਤਮ-ਗਿਆਨ ਦਾ ਮਾਰਗ ਪੱਧਰਾ ਕਰਦਾ ਹੈ। ਇਹ ਐਪ ਪੂਰੀ ਤਰ੍ਹਾਂ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀਆਂ ਸਿੱਖਿਆਵਾਂ ਅਤੇ ਉਨ੍ਹਾਂ ਦੇ ਮੂਲ ਗ੍ਰੰਥਾਂ ਤੇ ਅਧਾਰਿਤ ਹੈ ਤਾਂ ਜੋ ਉਪਭੋਗਤਾਵਾਂ ਨੂੰ ਇੱਕ ਪ੍ਰਮਾਣਿਕ ਅਤੇ ਸਹਿਜ ਰੂਹਾਨੀ ਅਨੁਭਵ ਮਿਲ ਸਕੇ।',
    
    disclaimerTitle: 'ਅਸਵੀਕਾਰਤਾ (Disclaimer)',
    disclaimerPara1: 'ਇਸ ਐਪ ਵਿੱਚ ਦਿੱਤੀਆਂ ਗਈਆਂ ਸਾਰੀਆਂ ਜਾਣਕਾਰੀਆਂ, ਜਿਵੇਂ ਕਿ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦਾ ਜੀਵਨ ਪਰਿਚਯ, ਚਾਰਾਂ ਯੁੱਗਾਂ ਦੇ ਅਵਤਾਰਾਂ ਦੀਆਂ ਕਹਾਣੀਆਂ, ਉਲਟਬਾਂਸੀਆਂ ਅਤੇ ਦੋਹੇ, ਵੱਖ-ਵੱਖ ਕਬੀਰ ਪੰਥੀ ਪਵਿੱਤਰ ਗ੍ਰੰਥਾਂ (ਜਿਵੇਂ ਬੀਜਕ, ਕਬੀਰ ਸਾਗਰ, ਅਨੁਰਾਗ ਸਾਗਰ) ਅਤੇ ਇਤਿਹਾਸਕ ਮਾਨਤਾਵਾਂ ਤੇ ਅਧਾਰਿਤ ਹਨ।',
    disclaimerPara2: 'ਇਸ ਐਪ ਦਾ ਮੁੱਖ ਉਦੇਸ਼ ਸਿਰਫ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੇ ਵਿਚਾਰਾਂ ਦਾ ਪ੍ਰਚਾਰ-ਪ੍ਰਸਾਰ ਕਰਨਾ ਅਤੇ ਸਿੱਖਿਆ ਪ੍ਰਦਾਨ ਕਰਨਾ ਹੈ। ਸਾਡਾ ਇਰਾਦਾ ਕਿਸੇ ਵੀ ਧਰਮ, ਸੰਪਰਦਾਇ, ਜਾਤ ਜਾਂ ਭਾਈਚਾਰੇ ਦੀਆਂ ਭਾਵਨਾਵਾਂ ਨੂੰ ਠੇਸ ਪਹੁੰਚਾਉਣਾ ਨਹੀਂ ਹੈ।',
    warningLabel: 'ਵਿਸ਼ੇਸ਼ ਧਿਆਨ ਦਿਓ:',
    warningText: 'ਐਪ ਵਿੱਚ ਦਿੱਤੇ ਗਏ ਯੋਗਿਕ, ਚੱਕਰ ਸਾਧਨਾ ਅਤੇ ਬ੍ਰਹਮੰਡ ਤੇ ਅਮਰਲੋਕ ਦਰਸ਼ਨ (Universe Map) ਦੇ ਵੇਰਵੇ ਸਿਰਫ ਸੰਕੇਤਕ ਅਤੇ ਦਾਰਸ਼ਨਿਕ ਅਰਥ ਸਮਝਾਉਣ ਲਈ ਹਨ। ਕਿਸੇ ਵੀ ਕਿਸਮ ਦੀ ਮੈਡੀਟੇਸ਼ਨ ਜਾਂ ਯੋਗ ਸਾਧਨਾ ਨੂੰ ਕੇਵਲ ਇੱਕ ਯੋਗ ਅਤੇ ਪ੍ਰਮਾਣਿਕ ਮਾਰਗਦਰਸ਼ਕ ਜਾਂ ਸੱਚੇ ਗੁਰੂ ਦੀ ਨਿਗਰਾਨੀ ਹੇਠ ਹੀ ਕੀਤਾ ਜਾਣਾ ਚਾਹੀਦਾ ਹੈ।',

    privacyTitle: 'ਗੋਪਨੀਯਤਾ ਨੀਤੀ (Privacy Policy) — Saheb World App',
    privacyUpdated: 'ਆਖਰੀ ਅੱਪਡੇਟ (Last Updated): ਨਵੰਬਰ 2026',
    privacyIntro: '\'Saheb World\' ਐਪ ਦੀ ਵਰਤੋਂ ਕਰਨ ਲਈ ਧੰਨਵਾਦ। ਅਸੀਂ ਤੁਹਾਡੀ ਨਿੱਜਤਾ (Privacy) ਅਤੇ ਡੇਟਾ ਸੁਰੱਖਿਆ ਦਾ ਪੂਰਾ ਸਤਿਕਾਰ ਕਰਦੇ ਹਾਂ। ਇਹ ਗੋਪਨੀਯਤਾ ਨੀਤੀ ਸਪਸ਼ਟ ਕਰਦੀ ਹੈ ਕਿ ਸਾਡੀ ਐਪ ਤੁਹਾਡੀ ਜਾਣਕਾਰੀ ਨੂੰ ਕਿਵੇਂ ਸੰਭਾਲਦੀ ਹੈ।',
    privacySections: [
      {
        heading: '੧. ਅਸੀਂ ਕਿਹੜੀ ਜਾਣਕਾਰੀ ਇਕੱਠੀ ਕਰਦੇ ਹਾਂ? (Information We Collect)',
        bullets: [
          'ਨਿੱਜੀ ਜਾਣਕਾਰੀ (ਨਾਮ ਅਤੇ ਸ਼ਹਿਰ): ਜੇਕਰ ਤੁਸੀਂ ਆਪਣੀ ਮਰਜ਼ੀ ਨਾਲ ਪ੍ਰੋਫਾਈਲ ਵਿੱਚ ਆਪਣਾ ਨਾਮ ਜਾਂ ਸ਼ਹਿਰ ਦਰਜ ਕਰਦੇ ਹੋ, ਤਾਂ ਇਸ ਦੀ ਵਰਤੋਂ ਕੇਵਲ ਤੁਹਾਡੇ \'ਸਵਾਧਿਆਏ ਸਿੱਧੀ ਪ੍ਰਮਾਣ-ਪੱਤਰ\' (Completion Certificate) ਉੱਤੇ ਤੁਹਾਡਾ ਨਾਮ ਪ੍ਰਿੰਟ ਕਰਨ ਲਈ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।',
          'ਸਵਾਧਿਆਏ ਪ੍ਰਗਤੀ ਤੇ ਜਰਨਲ: ਤੁਹਾਡੀ ੧੧-ਪੜਾਵੀ ਸਵਾਧਿਆਏ ਪ੍ਰਗਤੀ, ਕੁਇਜ਼ ਦੇ ਨਤੀਜੇ ਅਤੇ ਡਾਇਰੀ (ਚਿੰਤਨ) ਦੇ ਨੋਟਸ ਕੇਵਲ ਤੁਹਾਡੇ ਆਪਣੇ ਡਿਵਾਈਸ (ਬ੍ਰਾਊਜ਼ਰ/ਫੋਨ ਦੀ ਲੋਕਲ ਸਟੋਰੇਜ) ਵਿੱਚ ਸੁਰੱਖਿਅਤ ਰਹਿੰਦੇ ਹਨ।'
        ]
      },
      {
        heading: '੨. ਡੇਟਾ ਦੀ ਵਰਤੋਂ ਅਤੇ ਸੁਰੱਖਿਆ (Data Usage & Security)',
        bullets: [
          'ਅਸੀਂ ਤੁਹਾਡਾ ਕੋਈ ਵੀ ਨਿੱਜੀ ਡੇਟਾ, ਈਮੇਲ ਜਾਂ ਮੋਬਾਈਲ ਨੰਬਰ ਕਿਸੇ ਬਾਹਰੀ ਸਰਵਰ \'ਤੇ ਨਹੀਂ ਵੇਚਦੇ ਅਤੇ ਨਾ ਹੀ ਕਿਸੇ ਥਰਡ-ਪਾਰਟੀ (ਇਸ਼ਤਿਹਾਰ ਕੰਪਨੀਆਂ) ਨਾਲ ਸਾਂਝਾ ਕਰਦੇ ਹਾਂ।',
          'ਐਪ ਦਾ ਮੁੱਖ ਉਦੇਸ਼ ਕੇਵਲ ਨਿਰਸਵਾਰਥ ਅਧਿਆਤਮਿਕ ਗਿਆਨ ਅਤੇ ਸਵਾਧਿਆਏ ਦੀ ਸਹੂਲਤ ਪ੍ਰਦਾਨ ਕਰਨਾ ਹੈ।'
        ]
      },
      {
        heading: '੩. ਡਿਵਾਈਸ ਅਨੁਮਤੀਆਂ (App Permissions)',
        bullets: [
          'ਨੋਟੀਫਿਕੇਸ਼ਨ (Notifications): ਜੇਕਰ ਤੁਸੀਂ \'ਦੈਨਿਕ ਸਵਾਧਿਆਏ ਰਿਮਾਈਂਡਰ\' ਚਾਲੂ ਕਰਦੇ ਹੋ, ਤਾਂ ਐਪ ਕੇਵਲ ਤੁਹਾਡੇ ਚੁਣੇ ਸਮੇਂ \'ਤੇ ਤੁਹਾਨੂੰ ਰੋਜ਼ਾਨਾ ਸਾਖੀ ਪੜ੍ਹਨ ਦੀ ਯਾਦ ਦਿਵਾਉਣ ਲਈ ਨੋਟੀਫਿਕੇਸ਼ਨ ਭੇਜਦੀ ਹੈ। ਤੁਸੀਂ ਇਸ ਨੂੰ ਕਦੇ ਵੀ ਬੰਦ ਕਰ ਸਕਦੇ ਹੋ।',
          'ਸਟੋਰੇਜ / ਗੈਲਰੀ (Storage): ਜਦੋਂ ਤੁਸੀਂ ਆਪਣਾ ਪ੍ਰਮਾਣ-ਪੱਤਰ (Certificate) ਡਾਊਨਲੋਡ ਕਰਦੇ ਹੋ, ਤਾਂ ਐਪ ਕੇਵਲ ਉਸ ਇਮੇਜ ਫਾਈਲ ਨੂੰ ਤੁਹਾਡੇ ਫੋਨ ਦੀ ਗੈਲਰੀ ਵਿੱਚ ਸੇਵ ਕਰਨ ਦੀ ਅਨੁਮਤੀ ਲੈਂਦੀ ਹੈ।'
        ]
      },
      {
        heading: '੪. ਬੱਚਿਆਂ ਦੀ ਗੋਪਨੀਯਤਾ (Children\'s Privacy)',
        bullets: [
          'ਇਹ ਐਪ ਹਰ ਉਮਰ ਵਰਗ ਦੇ ਸਾਧਕਾਂ ਅਤੇ ਪਰਿਵਾਰਾਂ ਲਈ ਪੂਰੀ ਤਰ੍ਹਾਂ ਸੁਰੱਖਿਅਤ ਅਤੇ ਗਿਆਨਵਰਧਕ ਹੈ। ਇਸ ਵਿੱਚ ਕਿਸੇ ਵੀ ਤਰ੍ਹਾਂ ਦੀ ਇਤਰਾਜ਼ਯੋਗ ਸਮੱਗਰੀ ਨਹੀਂ ਹੈ।'
        ]
      }
    ],
    privacyContactHeading: '੫. ਸੰਪਰਕ ਕਰੋ (Contact Us)',
    privacyContactText: 'ਜੇਕਰ ਇਸ ਗੋਪਨੀਯਤਾ ਨੀਤੀ ਜਾਂ ਐਪ ਬਾਰੇ ਤੁਹਾਡਾ ਕੋਈ ਸਵਾਲ ਜਾਂ ਸੁਝਾਅ ਹੈ, ਤਾਂ ਤੁਸੀਂ ਸਾਨੂੰ ਇਸ ਈਮੇਲ \'ਤੇ ਸੰਪਰਕ ਕਰ ਸਕਦੇ ਹੋ:',
    privacyEmailLabel: 'ਈਮੇਲ:'
  },
  en: {
    aboutTitle: 'About Us',
    aboutHeader: 'Welcome to Saheb World - Satguru Kabir Saheb Sacred Swadhyay App.',
    aboutPara1: 'This app is a sacred endeavor to propagate the eternal wisdom, life biography, revolutionary thoughts, Sakhis, Shabads, Ramainis, and mystical paradoxes (Ulatvansis) of Sant Shiromani Satguru Kabir Saheb using modern technology.',
    aboutPara2: 'Our objective is to preserve and unite the core philosophy of Satguru Kabir Saheb, which eradicates superstition, hypocrisy, and discrimination to pave the way for humanity, brotherhood, and self-realization. The app is deeply rooted in verified ancient texts to offer an authentic and serene spiritual experience.',
    
    disclaimerTitle: 'Disclaimer',
    disclaimerPara1: 'All information provided in this app, including the life biography of Satguru Kabir Saheb, stories of His manifestations across the four eras, paradoxes, and sakhis, is based on various sacred Kabir Panth scriptures (such as Bijak, Kabir Sagar, Anurag Sagar) and historical traditions.',
    disclaimerPara2: 'The primary objective of this app is to share the educational and spiritual ideas of Satguru Kabir Saheb. We do not intend to hurt the sentiments of any religion, sect, caste, or community.',
    warningLabel: 'Important Notice:',
    warningText: 'The descriptions of Yogic techniques, Chakra meditation, and cosmology/Universe Map are purely symbolic and philosophic. Any meditation or spiritual practice should only be performed under the guidance of a qualified master or true guru.',

    privacyTitle: 'Privacy Policy — Saheb World App',
    privacyUpdated: 'Last Updated: November 2026',
    privacyIntro: 'Thank you for using the \'Saheb World\' app. We fully respect your privacy and data security. This Privacy Policy clearly explains how our app handles your information.',
    privacySections: [
      {
        heading: '1. Information We Collect',
        bullets: [
          'Personal Information (Name & City): If you voluntarily enter your name or city in your profile, it is used solely to print your name on your personalized \'Swadhyay Completion Certificate\'.',
          'Swadhyay Progress & Journal: Your 11-step Swadhyay progress, Quiz results, and Diary (Chintan) notes stay stored strictly on your own device (browser/phone localStorage).'
        ]
      },
      {
        heading: '2. Data Usage & Security',
        bullets: [
          'We never sell your personal data, email address, or phone number to any external server, nor do we share it with any third-party or advertising networks.',
          'The sole objective of the app is to provide selfless spiritual wisdom and a serene Swadhyay experience.'
        ]
      },
      {
        heading: '3. App Permissions',
        bullets: [
          'Notifications: If you enable \'Daily Swadhyay Reminder\', the app only sends notifications at the time selected by you to remind you to read the Daily Sakhi. You can turn this off anytime.',
          'Storage / Gallery: When you download your Completion Certificate, the app only requests permission to save that PNG image file directly to your device gallery.'
        ]
      },
      {
        heading: '4. Children\'s Privacy',
        bullets: [
          'This app is completely safe, ad-free, and educational for seekers and families of all age groups. It contains no objectionable content of any kind.'
        ]
      }
    ],
    privacyContactHeading: '5. Contact Us',
    privacyContactText: 'If you have any questions or suggestions regarding this Privacy Policy or the app, you can contact us at:',
    privacyEmailLabel: 'Email:'
  }
};

export const AboutDisclaimerModal: React.FC<AboutDisclaimerModalProps> = ({
  isOpen,
  onClose,
  language,
  onSelectLanguage,
  section = 'about',
}) => {
  const { theme } = useAppTheme();
  const [currentTab, setCurrentTab] = useState<AboutDisclaimerSection>(section);
  const [slotRefreshTick, setSlotRefreshTick] = useState(0);

  useEffect(() => {
    setCurrentTab(section);
  }, [section]);

  useEffect(() => {
    const onUpdated = () => setSlotRefreshTick((t) => t + 1);
    window.addEventListener(ADMIN_SLOTS_UPDATED_EVENT, onUpdated);
    return () => window.removeEventListener(ADMIN_SLOTS_UPDATED_EVENT, onUpdated);
  }, []);

  if (!isOpen) return null;

  const activeSlotId = SECTION_SLOT_MAP[currentTab];
  const activeSlotLoaded = slotRefreshTick >= 0 && getSlotStatus(activeSlotId).loaded;
  const activeSlotChapters = activeSlotLoaded ? getInjectedGranthChapters(activeSlotId) : null;

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
        className="relative z-20 w-full max-w-3xl rounded-3xl border-2 shadow-2xl overflow-hidden flex flex-col max-h-[92vh] transition-all"
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
          className="flex flex-col sm:flex-row items-center justify-between px-5 sm:px-8 py-3 border-b gap-3 select-none" 
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
                    backgroundColor: isSelected ? theme.buttonPrimaryBg : 'transparent',
                    color: isSelected ? theme.buttonPrimaryText : theme.textSecondary,
                  }}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation Tabs for Guide, About, Disclaimer, Privacy */}
        <div 
          className="flex items-center gap-1.5 px-4 sm:px-8 py-2.5 border-b overflow-x-auto [scrollbar-width:none] select-none shrink-0" 
          style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
        >
          {[
            { id: 'guide' as const, label: language === 'pb' ? '📖 ਉਪਭੋਗਤਾ ਮਾਰਗਦਰਸ਼ਿਕਾ' : language === 'en' ? '📖 User Guide' : '📖 उपयोगकर्ता मार्गदर्शिका' },
            { id: 'about' as const, label: language === 'pb' ? 'ℹ️ ਸਾਡੇ ਬਾਰੇ (About Us)' : language === 'en' ? 'ℹ️ About Us' : 'ℹ️ हमारे बारे में (About Us)' },
            { id: 'disclaimer' as const, label: language === 'pb' ? '⚖️ ਅਸਵੀਕਾਰਤਾ (Disclaimer)' : language === 'en' ? '⚖️ Disclaimer' : '⚖️ अस्वीकरण (Disclaimer)' },
            { id: 'privacy' as const, label: language === 'pb' ? '🔒 ਗੋਪਨੀਯਤਾ ਨੀਤੀ (Privacy)' : language === 'en' ? '🔒 Privacy Policy' : '🔒 गोपनीयता नीति (Privacy)' },
          ].map((tab) => {
            const isCur = currentTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  sacredHaptics.lightTap();
                  setCurrentTab(tab.id);
                }}
                style={{
                  backgroundColor: isCur ? theme.buttonPrimaryBg : undefined,
                  color: isCur ? theme.buttonPrimaryText : theme.textPrimary,
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  isCur
                    ? 'shadow-xs'
                    : 'bg-black/5 dark:bg-white/5 hover:bg-black/10'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Scrollable Body — Strictly Separated Sections */}
        <div className="overflow-y-auto px-5 sm:px-8 py-6 space-y-6 flex-1 overscroll-contain">
          {currentTab === 'guide' && (
            <div id="user-guide-section" className="animate-fadeIn">
              <UserGuideView language={language} onClose={onClose} />
            </div>
          )}

          {currentTab === 'about' && (
            <div id="about-us-section" className="space-y-3">
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
          )}

          {currentTab === 'disclaimer' && (
            <div id="disclaimer-section" className="space-y-3">
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
          )}

          {currentTab === 'privacy' && (
            <div id="privacy-policy-section" className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b" style={{ borderColor: theme.cardBorder }}>
                <Lock className="w-5 h-5 text-amber-600 shrink-0" />
                <div>
                  <h2 className="text-lg sm:text-xl font-bold font-serif" style={{ color: theme.sacredMaroon }}>
                    {content.privacyTitle}
                  </h2>
                  <p className="text-xs font-semibold opacity-75" style={{ color: theme.textSecondary }}>
                    {content.privacyUpdated}
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base leading-relaxed opacity-95 font-serif">
                {content.privacyIntro}
              </p>

              <div className="space-y-4">
                {content.privacySections.map((sec, idx) => (
                  <div
                    key={idx}
                    style={{ backgroundColor: theme.bgSecondary, borderColor: theme.cardBorder }}
                    className="p-3.5 sm:p-4 rounded-xl border space-y-2"
                  >
                    <h3 className="text-sm sm:text-base font-bold font-serif" style={{ color: theme.sacredMaroon }}>
                      {sec.heading}
                    </h3>
                    <ul className="space-y-1.5 text-xs sm:text-sm leading-relaxed opacity-95 list-disc pl-5 font-serif">
                      {sec.bullets.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div
                  style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.accentGold }}
                  className="p-3.5 sm:p-4 rounded-xl border space-y-2"
                >
                  <h3 className="text-sm sm:text-base font-bold font-serif" style={{ color: theme.sacredMaroon }}>
                    {content.privacyContactHeading}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed opacity-95 font-serif">
                    {content.privacyContactText}
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeSlotChapters && activeSlotChapters.length > 0 && (
            <div
              style={{ backgroundColor: theme.stepActiveBg, borderColor: theme.accentGold }}
              className="p-4 rounded-2xl border space-y-3"
            >
              <h3 className="text-sm font-black font-serif" style={{ color: theme.sacredMaroon }}>
                {language === 'pb'
                  ? 'ਅਤਿਰਿਕਤ ਜਾਣਕਾਰੀ'
                  : language === 'en'
                  ? 'Additional Notes'
                  : 'अतिरिक्त अद्यतन जानकारी'}
              </h3>
              <div className="space-y-2.5">
                {activeSlotChapters.map((ch) => (
                  <div
                    key={ch.id}
                    style={{ backgroundColor: theme.cardBg, borderColor: theme.cardBorder }}
                    className="p-3 rounded-xl border space-y-1.5"
                  >
                    <p className="text-xs sm:text-sm font-bold font-serif" style={{ color: theme.sacredMaroon }}>
                      {ch.title[language] || ch.title.hi}
                    </p>
                    {ch.verses.map((v) => (
                      <div key={String(v.id)} className="text-xs sm:text-sm font-serif space-y-1">
                        {(v.lines[language] || v.lines.hi).map((line, lIdx) => (
                          <p key={lIdx}>{line}</p>
                        ))}
                        {v.bhavarth && (
                          <p className="text-xs opacity-80" style={{ color: theme.textSecondary }}>
                            {v.bhavarth[language] || v.bhavarth.hi}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
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
