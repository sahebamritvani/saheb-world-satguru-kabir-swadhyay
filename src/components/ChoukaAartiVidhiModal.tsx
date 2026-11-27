import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, Flame, CheckCircle, HelpCircle, BookOpen, ChevronDown, ChevronUp, Sparkles, ShieldCheck } from 'lucide-react';
import { Language } from '../types';

interface ChoukaAartiVidhiModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

const CHOUKA_SECTIONS = {
  hi: {
    title: `चौका-आरती: पावन विधि एवं सात्विक नियम`,
    subtitle: `सतगुरु कबीर साहेब एवं धनी धर्मदास साहेब द्वारा प्रवर्तित 'सात्विक यज्ञ' का आध्यात्मिक परिचय।`,
    introTitle: `१. चौका-आरती का आध्यात्मिक महत्व`,
    introDesc: `कबीर पंथ में चौका-आरती को 'सात्विक यज्ञ' कहा गया है। यह अनुष्ठान जीव के चौरासी लाख योनियों के भ्रम को मिटाकर सतलोक और अमरलोक का मार्ग प्रशस्त करता है। यह सतगुरु कबीर साहेब के प्रति अनन्य भक्ति, कृतज्ञता और सत्यनाम के स्मरण का जीवंत माध्यम है।`,
    materialsTitle: `२. आवश्यक पवित्र सामग्री सूची`,
    materials: [
      `शुद्ध गंगाजल व पावन जल कलश`,
      `स्वच्छ आटा एवं चावल का चूर्ण (चौका अंकन हेतु)`,
      `श्रीफल (नारियल) - अहंकार समर्पण का प्रतीक`,
      `नौ पान के ताजे पत्ते व नौ सुपारियाँ (कसैली)`,
      `शुद्ध गाय का घी एवं कपूर`,
      `अगरबत्ती, पुष्पहार व सात्विक नैवेद्य (प्रसाद)`
    ],
    rulesTitle: `३. सात्विक नियम एवं मर्यादा`,
    rules: [
      `चौका-आरती करने वाले साधक का शरीर, वस्त्र व मन पूरी तरह पवित्र एवं सात्विक होना चाहिए।`,
      `मांस, मदिरा, तामसिक भोजन व व्यसनों से पूर्ण परहेज अनिवार्य है।`,
      `आरती के समय मस्तक पर अखंड श्वेत चंदन का सीधा तिलक धारण करें।`,
      `अनुष्ठान के दौरान पूर्ण अनुशासन, मौन और सत्यनाम का आंतरिक सुमिरन बनाए रखें।`
    ],
    stepsTitle: `४. चरण-दर-चरण पावन विधि`,
    steps: [
      { step: `प्रथम चरण: स्थान की शुद्धि व लिपाई`, desc: `पवित्र स्थल की सफाई करके शुद्ध जल व गंगाजल से छिड़काव करें। पावन भूमि को शुद्ध मिट्टी या गोबर से लीपकर आसन स्थापित करें।` },
      { step: `द्वितीय चरण: चौका का रेखांकन (आकृतियाँ)`, desc: `शुद्ध आटे या चावल के चूर्ण से सुंदर चौका रेखांकन करें। चौका के चारों कोनों पर स्वस्तिक, ॐ व कमल की पंखुड़ियाँ बनाएँ।` },
      { step: `तृतीय चरण: श्रीफल, पान व कसैली स्थापना`, desc: `चौका के केंद्र में श्रीफल (नारियल), नौ पान के पत्ते, नौ सुपारियाँ और पावन नैवेद्य श्रद्धापूर्वक अर्पित करें।` },
      { step: `चतुर्थ चरण: दीप प्रज्वलन व आरती गान`, desc: `कपूर व शुद्ध घृत (घी) का दीपक प्रज्वलित कर सतगुरु कबीर साहेब की आरती, मंगलाचरण और अमर वाणी का सस्वर पाठ करें।` },
      { step: `पंचम चरण: प्रसाद वितरण व बंदगी`, desc: `आरती पूर्ण होने पर सत्यनाम का सुमिरन करते हुए भक्तों में प्रसाद वितरित करें और साहेब बंदगी साहेब कहें।` }
    ]
  },
  pb: {
    title: `ਚੌਕਾ-ਆਰਤੀ: ਪਾਵਨ ਵਿਧੀ ਅਤੇ ਸਾਤਵਿਕ ਨਿਯਮ`,
    subtitle: `ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਅਤੇ ਧਨੀ ਧਰਮਦਾਸ ਸਾਹੇਬ ਦੁਆਰਾ ਚਲਾਏ ਗਏ 'ਸਾਤਵਿਕ ਯੱਗ' ਦਾ ਰੂਹਾਨੀ ਪਰਿਚਯ।`,
    introTitle: `੧. ਚੌਕਾ-ਆਰਤੀ ਦਾ ਰੂਹਾਨੀ ਮਹੱਤਵ`,
    introDesc: `ਕਬੀਰ ਪੰਥ ਵਿੱਚ ਚੌਕਾ-ਆਰਤੀ ਨੂੰ 'ਸਾਤਵਿਕ ਯੱਗ' ਕਿਹਾ ਗਿਆ ਹੈ। ਇਹ ਅਨੁਸ਼ਠਾਨ ਜੀਵ ਦੇ ਚੌਰਾਸੀ ਦੇ ਗੇੜ ਨੂੰ ਕੱਟ ਕੇ ਸਤਿਲੋਕ ਦਾ ਦੁਆਰ ਖੋਲ੍ਹਦਾ ਹੈ। ਇਹ ਸਤਿਗੁਰੂ ਪ੍ਰਤੀ ਅਨੰਤ ਸ਼ਰਧਾ ਅਤੇ ਸਤਯਨਾਮ ਦੇ ਸਿਮਰਨ ਦਾ ਸਾਧਨ ਹੈ।`,
    materialsTitle: `੨. ਲੋੜੀਂਦੀ ਪਵਿੱਤਰ ਸਮੱਗਰੀ ਸੂਚੀ`,
    materials: [
      `ਸ਼ੁੱਧ ਗੰਗਾਜਲ ਤੇ ਪਾਵਨ ਜਲ ਕਲਸ਼`,
      `ਸਾਫ਼ ਆਟਾ ਅਤੇ ਚੌਲਾਂ ਦਾ ਚੂਰਨ (ਚੌਕਾ ਬਣਾਉਣ ਲਈ)`,
      `ਸ਼੍ਰੀਫਲ (ਨਾਰੀਅਲ) - ਹੰਕਾਰ ਸਮਰਪਣ ਦਾ ਪ੍ਰਤੀਕ`,
      `ਨੌਂ ਪਾਨ ਦੇ ਤਾਜ਼ੇ ਪੱਤੇ ਅਤੇ ਨੌਂ ਸੁਪਾਰੀਆਂ`,
      `ਸ਼ੁੱਧ ਗਾਂ ਦਾ ਘਿਓ ਅਤੇ ਕਪੂਰ`,
      `ਅਗਰਬੱਤੀ, ਫੁੱਲ ਅਤੇ ਸਾਤਵਿਕ ਪ੍ਰਸ਼ਾਦ`
    ],
    rulesTitle: `੩. ਸਾਤਵਿਕ ਨਿਯਮ ਅਤੇ ਮਰਿਆਦਾ`,
    rules: [
      `ਚੌਕਾ-ਆਰਤੀ ਕਰਨ ਵਾਲੇ ਸਾਧਕ ਦਾ ਸਰੀਰ, ਕੱਪੜੇ ਅਤੇ ਮਨ ਪੂਰੀ ਤਰ੍ਹਾਂ ਸ਼ੁੱਧ ਹੋਣੇ ਚਾਹੀਦੇ ਹਨ।`,
      `ਮਾਸ, ਮਦਿਰਾ ਅਤੇ ਤਾਮਸਿਕ ਵਸਤੂਆਂ ਦਾ ਤਿਆਗ ਲਾਜ਼ਮੀ ਹੈ।`,
      `ਆਰਤੀ ਸਮੇਂ ਮੱਥੇ ਉੱਤੇ ਚਿੱਟੇ ਚੰਦਨ ਦਾ ਸਿੱਧਾ ਤਿਲਕ ਲਗਾਓ।`,
      `ਅਨੁਸ਼ਠਾਨ ਦੌਰਾਨ ਅਨੁਸ਼ਾਸਨ ਅਤੇ ਸਤਯਨਾਮ ਦਾ ਅੰਦਰੂਨੀ ਸਿਮਰਨ ਬਣਾਈ ਰੱਖੋ।`
    ],
    stepsTitle: `੪. ਪੜਾਅ-ਦਰ-ਪੜਾਅ ਪਾਵਨ ਵਿਧੀ`,
    steps: [
      { step: `ਪਹਿਲਾ ਪੜਾਅ: ਸਥਾਨ ਦੀ ਸ਼ੁੱਧੀ`, desc: `ਪਵਿੱਤਰ ਸਥਾਨ ਦੀ ਸਫ਼ਾਈ ਕਰਕੇ ਸ਼ੁੱਧ ਜਲ ਤੇ ਗੰਗਾਜਲ ਦਾ ਛਿੜਕਾਅ ਕਰੋ।` },
      { step: `ਦੂਜਾ ਪੜਾਅ: ਚੌਕਾ ਦਾ ਰੇਖਾਂਕਣ`, desc: `ਸ਼ੁੱਧ ਆਟੇ ਜਾਂ ਚੌਲਾਂ ਦੇ ਚੂਰਨ ਨਾਲ ਚੌਕਾ ਬਣਾਓ ਅਤੇ ਚਾਰਾਂ ਕੋਨਿਆਂ ਤੇ ਸਵਸਤਿਕ ਬਣਾਓ।` },
      { step: `ਤੀਜਾ ਪੜਾਅ: ਨਾਰੀਅਲ, ਪਾਨ ਤੇ ਸੁਪਾਰੀ ਸਥਾਪਨਾ`, desc: `ਚੌਕਾ ਦੇ ਮੱਧ ਵਿੱਚ ਸ਼੍ਰੀਫਲ, ਨੌਂ ਪਾਨ ਦੇ ਪੱਤੇ ਅਤੇ ਸੁਪਾਰੀਆਂ ਭੇਟ ਕਰੋ।` },
      { step: `ਚੌਥਾ ਪੜਾਅ: ਦੀਪ ਪ੍ਰਜਵਲਵਣ ਤੇ ਆਰਤੀ ਗਾਨ`, desc: `ਕਪੂਰ ਤੇ ਸ਼ੁੱਧ ਘਿਓ ਦਾ ਦੀਲਾ ਜਗਾ ਕੇ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਆਰਤੀ ਅਤੇ ਮੰਗਲਾਚਰਣ ਕਰੋ।` },
      { step: `ਪੰਜਵਾਂ ਪੜਾਅ: ਪ੍ਰਸ਼ਾਦ ਵੰਡਣਾ ਤੇ ਬੰਦਗੀ`, desc: `ਆਰਤੀ ਸੰਪੂਰਨ ਹੋਣ ਤੇ ਸਤਯਨਾਮ ਦਾ ਸਿਮਰਨ ਕਰਦਿਆਂ ਪ੍ਰਸ਼ਾਦ ਵੰਡੋ ਅਤੇ ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ ਕહો।` }
    ]
  },
  en: {
    title: `Chouka Aarti: Sacred Vidhi & Holy Rules`,
    subtitle: `The spiritual introduction of the Satvik Yajna established by Satguru Kabir Saheb and Dhani Dharmdas Saheb.`,
    introTitle: `1. Spiritual Significance of Chouka Aarti`,
    introDesc: `In Kabir Panth, Chouka Aarti is revered as the Supreme Satvik Yajna. It cuts through the cycle of 8.4 million reincarnations and opens the gateway to Satyaloka. It is a living embodiment of unyielding devotion, gratitude, and remembrance of Satyanaam.`,
    materialsTitle: `2. Sacred Materials Checklist`,
    materials: [
      `Pure Gangajal and holy water vessel`,
      `Clean wheat flour and rice powder for floor design`,
      `Shrifal (Coconut) - Symbol of ego surrender`,
      `9 fresh betel leaves and 9 areca nuts (supari)`,
      `Pure cow ghee and camphor`,
      `Incense sticks, floral garlands, and Satvik naivedya`
    ],
    rulesTitle: `3. Essential Rules & Discipline`,
    rules: [
      `The practitioner's body, garments, and mind must be completely clean and pure.`,
      `Absolute abstinence from meat, alcohol, and tamasic habits is mandatory.`,
      `Apply a clean straight vertical pure white sandalwood Tilak on the forehead.`,
      `Maintain deep inner discipline, silence, and continuous remembrance of Satyanaam.`
    ],
    stepsTitle: `4. Step-by-Step Sacred Procedure`,
    steps: [
      { step: `Step 1: Purification of Place`, desc: `Clean the sacred space thoroughly and sprinkle Gangajal. Prepare the sacred sanctum floor cleanly.` },
      { step: `Step 2: Floor Design & Rangoli (Chouka)`, desc: `Draw the sacred Chouka using pure flour or rice powder. Draw Swastika and lotus petals at the four corners.` },
      { step: `Step 3: Offering Coconut, Betel & Supari`, desc: `Place the Shrifal (coconut), 9 betel leaves, 9 areca nuts, and offerings at the center of the Chouka.` },
      { step: `Step 4: Lighting Lamp & Aarti Recitation`, desc: `Light the camphor and pure ghee lamp, reciting the Aarti of Satguru Kabir Saheb and Manglacharan.` },
      { step: `Step 5: Prasad Distribution & Bandagi`, desc: `After completion of Aarti, distribute sacred coconut prasad while chanting Satyanaam and saying Saheb Bandagi Saheb.` }
    ]
  }
};

const PANTHIC_QA_LIST = [
  {
    q: {
      hi: `प्रश्न १: चौका आरती का कबीर पंथ में क्या सर्वोपरि आध्यात्मिक महत्व है?`,
      pb: `ਪ੍ਰਸ਼ਨ ੧: ਚੌਕਾ ਆਰਤੀ ਦਾ ਕਬੀਰ ਪੰਥ ਵਿੱਚ ਕੀ ਰੂਹਾਨੀ ਮਹੱਤਵ ਹੈ?`,
      en: `Q1: What is the spiritual significance of Chouka Aarti in Kabir Panth?`
    },
    a: {
      hi: `चौका आरती सतगुरु कबीर साहेब द्वारा स्थापित परम पावन अनुष्ठान है। यह जीव के चौरासी के चक्र को काट कर सत्यलोक और आत्म-कल्याण का द्वार खोलता है।`,
      pb: `ਚੌਕਾ ਆਰਤੀ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੁਆਰਾ ਸਥਾਪਿਤ ਪਰਮ ਪਵਿੱਤਰ ਅਨੁਸ਼ਠਾਨ ਹੈ ਜੋ ਜੀਵ ਦੇ ਚੌਰਾਸੀ ਦੇ ਗੇੜ ਨੂੰ ਕੱਟ ਕੇ ਸਤਿਲੋਕ ਦਾ ਦੁਆਰ ਖੋਲ੍ਹਦਾ ਹੈ।`,
      en: `Chouka Aarti is the supreme sacred ritual established by Satguru Kabir Saheb. It dissolves past karmas and grants direct refuge in Satyaloka.`
    }
  },
  {
    q: {
      hi: `प्रश्न २: चौका आरती अनुष्ठान में नारियल (श्रीफल) भेंट करने का क्या विधान है?`,
      pb: `ਪ੍ਰਸ਼ਨ ੨: ਚੌਕਾ ਆਰਤੀ ਵਿੱਚ ਨਾਰੀਅਲ (ਸ਼੍ਰੀਫਲ) ਭੇਟ ਕਰਨ ਦਾ ਕੀ ਵਿਧਾਨ ਹੈ?`,
      en: `Q2: What is the sacred rule regarding Coconut (Shrifal) offering in Chouka Vidhi?`
    },
    a: {
      hi: `श्रीफल नारियल जीव के सिर एवं अहंकार के समर्पण का प्रतीक है। गुरुदेव के सम्मुख नारियल तोड़कर प्रसाद रूप में वितरण करने से काल-जाल और भय का नाश होता है।`,
      pb: `ਸ਼੍ਰੀਫਲ ਨਾਰੀਅਲ ਜੀਵ ਦੇ ਹੰਕਾਰ ਤੇ ਸੀਸ ਸਮਰਪਣ ਦਾ ਪ੍ਰਤੀਕ ਹੈ। ਗੁਰੂਦੇਵ ਦੇ ਸਨਮੁਖ ਨਾਰੀਅਲ ਤੋੜ ਕੇ ਪ੍ਰਸ਼ਾਦ ਵੰਡਣ ਨਾਲ ਕਾਲ ਦਾ ਡਰ ਨਾਸ ਹੁੰਦਾ ਹੈ।`,
      en: `Shrifal represents the surrender of ego and self to the Satguru. Offering and distributing it breaks the web of Kaal.`
    }
  },
  {
    q: {
      hi: `प्रश्न ३: मस्तक पर सफ़ेद चन्दन तिलक धारण करने का क्या रहस्य है?`,
      pb: `ਪ੍ਰਸ਼ਨ ੩: ਮੱਥੇ ਉੱਤੇ ਚਿੱਟੇ ਚੰਦਨ ਦਾ ਤਿਲਕ ਲਗਾਉਣ ਦਾ ਕੀ ਰਹੱਸ ਹੈ?`,
      en: `Q3: What is the significance of applying pure white sandalwood Tilak on the forehead?`
    },
    a: {
      hi: `कबीर पंथ मर्यादा अनुसार मस्तक पर भौंहों के मध्य से ऊपर की ओर सीधा अखंड सफ़ेद चन्दन तिलक धारण किया जाता है जो आज्ञा चक्र और सत्यनाम भक्ति की निर्मलता का प्रतीक है।`,
      pb: `ਕਬੀਰ ਪੰਥ ਮਰਿਆਦਾ ਅਨੁਸਾਰ ਮੱਥੇ ਉੱਤੇ ਸਿੱਧਾ ਅਖੰਡ ਚਿੱਟੇ ਚੰਦਨ ਦਾ ਤਿਲਕ ਲਗਾਇਆ ਜਾਂਦਾ ਹੈ ਜੋ ਸਤਯਨਾਮ ਭਗਤੀ ਦੀ ਪਵਿੱਤਰਤਾ ਦਾ ਪ੍ਰਤੀਕ ਹੈ।`,
      en: `According to Kabir Panth protocol, a clean straight vertical white sandalwood Tilak is applied on the forehead representing Satyanaam purity and the Ajna chakra.`
    }
  },
  {
    q: {
      hi: `प्रश्न ४: कबीर धर्मनगर दामाखेड़ा धाम की क्या पंथिक महत्ता है?`,
      pb: `ਪ੍ਰਸ਼ਨ ੪: ਕਬੀਰ ਧਰਮਨਗਰ ਦਾਮਾਖੇੜਾ ਧਾਮ ਦੀ ਕੀ ਮਹੱਤਤਾ ਹੈ?`,
      en: `Q4: What is the supreme importance of Kabir Dharamnagar Damakheda Dham?`
    },
    a: {
      hi: `दामाखेड़ा धाम धनी धर्मदास साहेब जी की वंश बयालीस आचार्यों की मूल पवित्र गद्दी है। यहाँ सतगुरु कबीर साहेब की मूल मर्यादा, चौका आरती एवं अखंड ज्योति की अविरल धारा प्रवाहित है।`,
      pb: `ਦਾਮਾਖੇੜਾ ਧਾਮ ਧਨੀ ਧਰਮਦਾਸ ਸਾਹੇਬ ਜੀ ਦੀ ਵੰਸ਼ ਬਿਆਲੀਸ ਆਚਾਰੀਆ ਜੀ ਦੀ ਮੁੱਖ ਗੱਦੀ ਹੈ ਜਿੱਥੇ ਅਮਰ ਸੰਦੇਸ਼ ਤੇ ਚੌਕਾ ਆਰਤੀ ਦੀ ਅਖੰਡ ਧਾਰਾ ਹੈ।`,
      en: `Damakheda Dham is the sacred supreme seat of Dhani Dharmdas Saheb Vansh 42 Acharyas, preserving authentic Kabir Panth traditions and eternal light.`
    }
  },
  {
    q: {
      hi: `प्रश्न ५: नितनेम, संध्या आरती एवं सुमिरन का सही समय क्या है?`,
      pb: `ਪ੍ਰਸ਼ਨ ੫: ਨਿਤਨੇਮ, ਸੰਧਿਆ ਆਰਤੀ ਤੇ ਸਿਮਰਨ ਦਾ ਸਹੀ ਸਮਾਂ ਕੀ ਹੈ?`,
      en: `Q5: What is the ideal time for Nitnem, Evening Aarti, and Simran?`
    },
    a: {
      hi: `सूर्योदय से पूर्व अमृतवेला (प्रातः ४ से ६ बजे) नितनेम व सुमिरन करें। सूर्यास्त के समय संध्या आरती व चौका सुमिरन का नियम जीवन में आत्म-शांति प्रदान करता है।`,
      pb: `ਸੂਰਜ ਚੜ੍ਹਨ ਤੋਂ ਪਹਿਲਾਂ ਅੰਮ੍ਰਿਤਵੇਲਾ ਨਿਤਨੇਮ ਤੇ ਸਿਮਰਨ ਕਰੋ। ਸ਼ਾਮ ਵੇਲੇ ਸੰਧਿਆ ਆਰਤੀ ਦਾ ਨਿਯਮ ਰੂਹਾਨੀ ਸ਼ਾਂਤੀ ਦਿੰਦਾ ਹੈ।`,
      en: `Amritvela (4 AM - 6 AM before sunrise) is ideal for Nitnem & Simran. Sunset is the divine hour for Evening Aarti and Chouka remembrance.`
    }
  }
];

export const ChoukaAartiVidhiModal: React.FC<ChoukaAartiVidhiModalProps> = ({ isOpen, onClose, language }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'materials' | 'rules' | 'steps' | 'qna'>('overview');
  const [openQaIndex, setOpenQaIndex] = useState<number | null>(0);

  if (!isOpen) return null;

  const currentContent = CHOUKA_SECTIONS[language] || CHOUKA_SECTIONS.hi;

  const modalContent = (
    <AnimatePresence>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '48px 14px',
          zIndex: 100,
        }}
        className="fixed inset-0 bg-black/85 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 12 }}
          style={{
            width: '100%',
            maxWidth: '480px',
            maxHeight: 'calc(100dvh - 104px)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            borderRadius: '16px',
          }}
          className="relative border-2 border-amber-400 dark:border-amber-700 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-amber-200 dark:border-zinc-800 bg-gradient-to-r from-[#7C1D00] via-[#8B2500] to-[#9A3412] text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-xl shadow-sm">
                🪷
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black font-serif">
                  {currentContent.title}
                </h3>
                <p className="text-[11px] font-serif opacity-90 text-amber-100">
                  {currentContent.subtitle}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl bg-black/20 hover:bg-black/30 text-white transition cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-5 border-b border-gray-100 dark:border-zinc-800 bg-amber-50/70 dark:bg-zinc-950 p-2 gap-1.5">
            <button
              type="button"
              onClick={() => setActiveTab('overview')}
              className={`py-2 px-2.5 rounded-xl font-bold font-serif text-[11px] transition cursor-pointer flex items-center justify-center gap-1 ${
                activeTab === 'overview'
                  ? 'bg-[#8B2500] text-white shadow-xs'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-amber-100 dark:hover:bg-zinc-800'
              }`}
            >
              <BookOpen size={14} />
              <span>{language === 'pb' ? 'ਮਹੱਤਵ' : language === 'en' ? 'Significance' : 'महत्व'}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('materials')}
              className={`py-2 px-2.5 rounded-xl font-bold font-serif text-[11px] transition cursor-pointer flex items-center justify-center gap-1 ${
                activeTab === 'materials'
                  ? 'bg-[#8B2500] text-white shadow-xs'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-amber-100 dark:hover:bg-zinc-800'
              }`}
            >
              <Sparkles size={14} />
              <span>{language === 'pb' ? 'ਸਮੱਗਰੀ' : language === 'en' ? 'Materials' : 'सामग्री'}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('rules')}
              className={`py-2 px-2.5 rounded-xl font-bold font-serif text-[11px] transition cursor-pointer flex items-center justify-center gap-1 ${
                activeTab === 'rules'
                  ? 'bg-[#8B2500] text-white shadow-xs'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-amber-100 dark:hover:bg-zinc-800'
              }`}
            >
              <ShieldCheck size={14} />
              <span>{language === 'pb' ? 'ਨਿਯਮ' : language === 'en' ? 'Rules' : 'नियम'}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('steps')}
              className={`py-2 px-2.5 rounded-xl font-bold font-serif text-[11px] transition cursor-pointer flex items-center justify-center gap-1 ${
                activeTab === 'steps'
                  ? 'bg-[#8B2500] text-white shadow-xs'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-amber-100 dark:hover:bg-zinc-800'
              }`}
            >
              <Flame size={14} />
              <span>{language === 'pb' ? 'ਵਿਧੀ' : language === 'en' ? 'Procedure' : 'विधि'}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('qna')}
              className={`col-span-2 sm:col-span-1 py-2 px-2.5 rounded-xl font-bold font-serif text-[11px] transition cursor-pointer flex items-center justify-center gap-1 ${
                activeTab === 'qna'
                  ? 'bg-[#8B2500] text-white shadow-xs'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-amber-100 dark:hover:bg-zinc-800'
              }`}
            >
              <HelpCircle size={14} />
              <span>{language === 'pb' ? 'ਪ੍ਰਸ਼ਨੋਤਰੀ' : language === 'en' ? 'Q&A' : 'प्रश्नोत्तरी'}</span>
            </button>
          </div>

          {/* Body Content */}
          <div className="p-5 sm:p-6 space-y-4 overflow-y-auto">
            {activeTab === 'overview' && (
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-950 dark:text-amber-200 text-xs font-serif leading-relaxed space-y-2">
                  <h4 className="font-bold text-sm text-[#8B2500] dark:text-amber-300">
                    {currentContent.introTitle}
                  </h4>
                  <p className="opacity-95 leading-relaxed">
                    {currentContent.introDesc}
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 dark:bg-zinc-800/60 border border-stone-200 dark:border-zinc-700 text-xs font-serif space-y-2">
                  <span className="font-bold text-amber-950 dark:text-amber-200 block">
                    ✨ {language === 'pb' ? 'ਸਤਯਨਾਮ ਦਾ ਪ੍ਰਕਾਸ਼' : language === 'en' ? 'Illumination of Satyanaam' : 'सत्यनाम का प्रकाश'}
                  </span>
                  <p className="opacity-85 leading-relaxed">
                    {language === 'hi' 
                      ? 'चौका-आरती केवल एक बाह्य अनुष्ठान नहीं, बल्कि अंतःकरण की शुद्धि, सतगुरु के चरणों में समर्पण और अमरलोक की प्राप्ति का मार्ग है।'
                      : language === 'pb' 
                      ? 'ਚੌਕਾ-ਆਰਤੀ ਕੇਵਲ ਇੱਕ ਬਾਹਰੀ ਅਨੁਸ਼ਠਾਨ ਨਹੀਂ, ਸਗੋਂ ਅੰਤਰਾਤਮਾ ਦੀ ਸ਼ੁੱਧੀ ਅਤੇ ਸਤਿਗੁਰੂ ਪ੍ਰਤੀ ਸਮਰਪਣ ਹੈ।'
                      : 'Chouka Aarti is not merely an external ritual, but inner purification, surrender at the feet of Satguru, and the pathway to Satyaloka.'}
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'materials' && (
              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-950 dark:text-amber-200 text-xs font-serif font-bold">
                  {currentContent.materialsTitle}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentContent.materials.map((mat, i) => (
                    <div key={i} className="p-3 rounded-xl bg-gray-50 dark:bg-zinc-800/60 border border-gray-100 dark:border-zinc-800 flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-full bg-amber-600/10 text-amber-700 dark:text-amber-300 flex items-center justify-center text-xs font-bold shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-xs font-serif text-gray-800 dark:text-gray-200">
                        {mat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'rules' && (
              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-950 dark:text-amber-200 text-xs font-serif font-bold">
                  {currentContent.rulesTitle}
                </div>
                <div className="space-y-2.5">
                  {currentContent.rules.map((rule, i) => (
                    <div key={i} className="p-3.5 rounded-2xl bg-amber-50/40 dark:bg-zinc-800/40 border border-amber-200/60 dark:border-zinc-700 flex items-start gap-3">
                      <ShieldCheck size={18} className="text-amber-600 shrink-0 mt-0.5" />
                      <p className="text-xs font-serif text-gray-800 dark:text-gray-200 leading-relaxed">
                        {rule}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'steps' && (
              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-950 dark:text-amber-200 text-xs font-serif font-bold">
                  {currentContent.stepsTitle}
                </div>
                <div className="space-y-2.5">
                  {currentContent.steps.map((st, i) => (
                    <div key={i} className="p-3.5 rounded-2xl bg-gray-50 dark:bg-zinc-800/60 border border-gray-100 dark:border-zinc-800 space-y-1">
                      <h5 className="text-xs font-black font-serif text-[#8B2500] dark:text-amber-300">
                        {st.step}
                      </h5>
                      <p className="text-xs font-serif opacity-80 leading-relaxed">
                        {st.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'qna' && (
              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-950 dark:text-amber-200 text-xs font-serif leading-relaxed">
                  ✨ <strong>{language === 'pb' ? 'ਪ੍ਰਸ਼ਨੋਤਰੀ ਤੇ ਸ਼ੰਕਾ ਸਮਾਧਾਨ:' : language === 'en' ? 'Panthic Q&A regarding rituals & Chouka Vidhi:' : 'प्रश्नोत्तरी एवं शंका-समाधान:'}</strong> कबीर पंथ की पावन मर्यादा, पूजन विधि, श्रीफल अर्पण व तिलक संबंधी प्रामाणिक शंका-समाधान।
                </div>

                <div className="space-y-2.5">
                  {PANTHIC_QA_LIST.map((item, idx) => {
                    const isOpen = openQaIndex === idx;
                    return (
                      <div
                        key={idx}
                        className="rounded-2xl border border-amber-200/80 dark:border-zinc-800 bg-amber-50/40 dark:bg-zinc-800/40 overflow-hidden transition-all"
                      >
                        <button
                          type="button"
                          onClick={() => setOpenQaIndex(isOpen ? null : idx)}
                          className="w-full p-3.5 text-left flex items-center justify-between gap-3 font-serif font-black text-xs sm:text-sm text-amber-950 dark:text-amber-200 cursor-pointer hover:bg-amber-100/50 dark:hover:bg-zinc-700/50 transition"
                        >
                          <span>{item.q[language] || item.q.hi}</span>
                          {isOpen ? <ChevronUp size={16} className="text-amber-600 shrink-0" /> : <ChevronDown size={16} className="text-amber-600 shrink-0" />}
                        </button>

                        {isOpen && (
                          <div className="px-4 pb-4 pt-1 text-xs font-serif leading-relaxed text-gray-800 dark:text-gray-200 border-t border-amber-200/40 dark:border-zinc-700/40 bg-white/60 dark:bg-zinc-900/60">
                            {item.a[language] || item.a.hi}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-3.5 sm:p-4 border-t border-gray-100 dark:border-zinc-800 bg-amber-50/50 dark:bg-zinc-950 flex items-center justify-between gap-2 shrink-0">
            <span className="text-[11px] font-serif text-amber-900 dark:text-amber-300 font-bold">
              {language === 'pb' ? 'ਦਾਮਾਖੇੜਾ ਕਬੀਰ ਪੰਥ ਮਰਿਆਦਾ' : language === 'en' ? 'Damakheda Kabir Panth Sacred Tradition' : 'दामाखेड़ा कबीर पंथ अमर मर्यादा'}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="px-4 sm:px-5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs cursor-pointer shrink-0"
            >
              {language === 'pb' ? '।। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ ।।' : language === 'en' ? '|| Saheb Bandagi Saheb ||' : '।। साहेब बंदगी साहेब ।।'}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );

  if (typeof document !== 'undefined') {
    return createPortal(modalContent, document.body);
  }

  return modalContent;
};
