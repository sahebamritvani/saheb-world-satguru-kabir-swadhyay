import { Language } from '../types';

export interface SatyaVachanSutra {
  num: number;
  sutra: Record<Language, string>;
  bhavarth: Record<Language, string>;
  lifeMessage: Record<Language, string>;
}

export const TEN_SATYA_VACHAN_SUTRAS: SatyaVachanSutra[] = [
  {
    num: 1,
    sutra: {
      hi: 'जीवन से भागो नहीं, जीवन में जागो।',
      pb: 'ਜੀਵਨ ਤੋਂ ਭੱਜੋ ਨਹੀਂ, ਜੀਵਨ ਵਿੱਚ ਜਾਗੋ।',
      en: 'Do not flee from life, awaken within life.',
    },
    bhavarth: {
      hi: 'जीवन की कठिनाइयों, दायित्वों व दुःखों से पलायन करने के बजाय परम चेतन होकर उनका सामना करो।',
      pb: 'ਜੀਵਨ ਦੀਆਂ ਔਕੜਾਂ, ਜ਼ਿੰਮੇਵਾਰੀਆਂ ਅਤੇ ਦੁੱਖਾਂ ਤੋਂ ਭੱਜਣ ਦੀ ਬਜਾਏ ਪੂਰਨ ਸੁਚੇਤ ਹੋ ਕੇ ਸਾਹਮਣਾ ਕਰੋ।',
      en: 'Instead of escaping life’s duties, hardships, and sorrows, face them with heightened spiritual consciousness.',
    },
    lifeMessage: {
      hi: 'समस्याएँ शत्रु नहीं, बल्कि जागृति व आत्म-सुधार का सुअवसर हैं।',
      pb: 'ਮੁਸ਼ਕਿਲਾਂ ਵੈਰੀ ਨਹੀਂ, ਸਗੋਂ ਜਾਗ੍ਰਿਤੀ ਅਤੇ ਆਤਮ-ਸੁਧਾਰ ਦਾ ਸ਼ੁਭ ਮੌਕਾ ਹਨ।',
      en: 'Adversities are not enemies, but divine opportunities for self-awakening and transformation.',
    },
  },
  {
    num: 2,
    sutra: {
      hi: 'ईश्वर को मानो नहीं, ईश्वर को जानो।',
      pb: 'ਰੱਬ ਨੂੰ ਕੇਵਲ ਮੰਨੋ ਨਹੀਂ, ਰੱਬ ਨੂੰ ਜਾਣੋ ਤੇ ਅਨੁਭਵ ਕਰੋ।',
      en: 'Do not blindly believe God, know and experience God.',
    },
    bhavarth: {
      hi: 'केवल परंपरा या सुनी हुई बातों पर अंधविश्वास करने के बजाय सत्य को अपनी आत्म-अनुभूति में अपरोक्ष रूप से समझो।',
      pb: 'ਸਿਰਫ਼ ਸੁਣੀਆਂ-ਸੁਣਾਈਆਂ ਗੱਲਾਂ ਤੇ ਅੰਧਵਿਸ਼ਵਾਸ ਕਰਨ ਦੀ ਬਜਾਏ ਸੱਚ ਨੂੰ ਆਪਣੀ ਆਤਮਿਕ ਅਨੁਭੂਤੀ ਵਿੱਚ ਸਿੱਧਾ ਸਮਝੋ।',
      en: 'Instead of relying on dogmatic belief or second-hand hearsay, realize Truth directly through inner perception.',
    },
    lifeMessage: {
      hi: 'केवल अंधश्रद्धा नहीं, बल्कि विवेक और अनुभव ही प्रभु-प्राप्ति का द्वार है।',
      pb: 'ਅੰਧਸ਼ਰਧਾ ਨਹੀਂ, ਸਗੋਂ ਬਿਬੇਕ ਅਤੇ ਨਿੱਜੀ ਅਨੁਭਵ ਹੀ ਪ੍ਰਭੂ-ਮਿਲਾਪ ਦਾ ਸੱਚਾ ਦੁਆਰ ਹੈ।',
      en: 'Not dogma, but spiritual discernment and direct experience are the gateway to the Divine.',
    },
  },
  {
    num: 3,
    sutra: {
      hi: 'भक्ति को करो नहीं, स्वयं (खुद) को पहचानो।',
      pb: 'ਭਗਤੀ ਨੂੰ ਸਿਰਫ਼ ਕਰੋ ਨਹੀਂ, ਆਪਣੇ ਆਪ (ਖ਼ੁਦ) ਨੂੰ ਪਛਾਣੋ।',
      en: 'Do not reduce devotion to ritual, realize your true Inner Self.',
    },
    bhavarth: {
      hi: 'भक्ति को केवल बाहरी कर्मकाण्ड या दिखावे तक सीमित मत रखो; अपने वास्तविक चेतन स्वरूप और निज-आत्मा को पहचानना ही सच्ची भक्ति है।',
      pb: 'ਭਗਤੀ ਨੂੰ ਕੇਵਲ ਬਾਹਰੀ ਕਰਮਕਾਂਡ ਜਾਂ ਦਿਖਾਵੇ ਤੱਕ ਸੀਮਤ ਨਾ ਰੱਖੋ; ਆਪਣੇ ਅਸਲ ਚੇਤਨ ਸਰੂਪ ਅਤੇ ਨਿੱਜ-ਆਤਮਾ ਨੂੰ ਪਛਾਨਣਾ ਹੀ ਸੱਚੀ ਭਗਤੀ ਹੈ।',
      en: 'Do not confine devotion to external performance; recognizing your true conscious essence and soul is genuine devotion.',
    },
    lifeMessage: {
      hi: 'भक्ति कोई बाहरी क्रिया नहीं, अपने भीतर सत्य को पहचानने की पवित्र यात्रा है।',
      pb: 'ਭਗਤੀ ਕੋਈ ਰਸਮ ਨਹੀਂ, ਅੰਦਰਲੇ ਸੱਚ ਨੂੰ ਪਛਾਨਣ ਦਾ ਪਾਵਨ ਸਫ਼ਰ ਹੈ।',
      en: 'Devotion is not an outward routine, but the sacred inner journey of knowing who you truly are.',
    },
  },
  {
    num: 4,
    sutra: {
      hi: 'अपने को बाहर नहीं, अपने को भीतर खोजो।',
      pb: 'ਆਪਣੇ ਆਪ ਨੂੰ ਬਾਹਰ ਨਹੀਂ, ਅੰਦਰ ਖੋਜੋ।',
      en: 'Do not search for Truth outside, seek within your heart.',
    },
    bhavarth: {
      hi: 'अपनी वास्तविक पहचान, असीम शांति और शक्ति को सांसारिक पदार्थों व बाहर नहीं, बल्कि अंतर्मुखी ध्यान व साक्षात घट में खोजो।',
      pb: 'ਆਪਣੀ ਅਸਲ ਹੋਂਦ, ਪਰਮ ਸ਼ਾਂਤੀ ਅਤੇ ਸ਼ਕਤੀ ਨੂੰ ਬਾਹਰੀ ਸੰਸਾਰਿਕ ਵਸਤਾਂ ਵਿੱਚ ਨਹੀਂ, ਸਗੋਂ ਅੰਤਰਮੁਖੀ ਧਿਆਨ ਅਤੇ ਆਪਣੇ ਘਟ ਵਿੱਚ ਤਲਾਸ਼ੋ।',
      en: 'Seek your true identity, infinite peace, and strength not in ephemeral external objects, but in the sanctuary of your heart.',
    },
    lifeMessage: {
      hi: 'आत्मज्ञान और शांति का अक्षय खजाना आपके अपने हृदय-मंदिर में है।',
      pb: 'ਆਤਮ-ਗਿਆਨ ਅਤੇ ਸ਼ਾਂਤੀ ਦਾ ਅਮੁੱਕ ਖ਼ਜ਼ਾਨਾ ਤੁਹਾਡੇ ਆਪਣੇ ਹਿਰਦੇ-ਮੰਦਰ ਵਿੱਚ ਹੈ।',
      en: 'The inexhaustible treasure of peace and wisdom resides right within your inner temple.',
    },
  },
  {
    num: 5,
    sutra: {
      hi: 'ईश्वर से नहीं, अपने कर्मों से डरो।',
      pb: 'ਰੱਬ ਤੋਂ ਨਹੀਂ, ਆਪਣੇ ਕਰਮਾਂ ਤੋਂ ਡਰੋ।',
      en: 'Do not fear God, fear bad karma and wrong deeds.',
    },
    bhavarth: {
      hi: 'ईश्वर भयभीत करने वाली कोई क्रूर सत्ता नहीं हैं; असली डर दुष्कर्मों का होना चाहिए क्योंकि कर्मफल प्रकृति का अटल नियम है।',
      pb: 'ਪ੍ਰਮਾਤਮਾ ਕੋਈ ਡਰਾਉਣ ਵਾਲੀ ਤਾਕਤ ਨਹੀਂ ਹਨ; ਅਸਲ ਡਰ ਮਾੜੇ ਕਰਮਾਂ ਦਾ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ ਕਿਉਂਕਿ ਕਰਮਾਂ ਦਾ ਫਲ ਕੁਦਰਤ ਦਾ ਅਟੱਲ ਨਿਯਮ ਹੈ।',
      en: 'God is not an entity to be feared; beware of harmful deeds because the law of Karma is unbending.',
    },
    lifeMessage: {
      hi: 'निष्काम, पवित्र व श्रेष्ठ कर्म ही जीवन की सच्ची सुरक्षा हैं।',
      pb: 'ਨੇਕ, ਨਿਸ਼ਕਾਮ ਅਤੇ ਪਵਿੱਤਰ ਕਰਮ ਹੀ ਜੀਵਨ ਦੀ ਅਸਲ ਰੱਖਿਆ ਹਨ।',
      en: 'Pure, selfless, and righteous deeds are the soul’s only true shield in life.',
    },
  },
  {
    num: 6,
    sutra: {
      hi: 'अंधकार से डरो नहीं, अंधकार से लड़ो।',
      pb: 'ਹਨੇਰੇ ਤੋਂ ਡਰੋ ਨਹੀਂ, ਹਨੇਰੇ ਨਾਲ ਲੜੋ।',
      en: 'Do not fear darkness, ignite wisdom and fight it.',
    },
    bhavarth: {
      hi: 'अज्ञान, भय, निराशा और विपरीत परिस्थितियों से घबराने के बजाय ज्ञान और साहस का दीप जलाकर निर्भीकता से सामना करो।',
      pb: 'ਅਗਿਆਨਤਾ, ਡਰ, ਨਿਰਾਸ਼ਾ ਅਤੇ ਔਖੇ ਹਾਲਾਤਾਂ ਤੋਂ ਘਬਰਾਉਣ ਦੀ ਬਜਾਏ ਗਿਆਨ ਤੇ ਹੌਸਲੇ ਦਾ ਦੀਵਾ ਜਗਾ ਕੇ ਦਲੇਰੀ ਨਾਲ ਮੁਕਾਬਲਾ ਕਰੋ।',
      en: 'Instead of surrendering to ignorance, anxiety, or despair, light the flame of truth and face reality with bravery.',
    },
    lifeMessage: {
      hi: 'आत्म-बल और सत्य का प्रकाश ही अज्ञान के घोर अंधकार को मिटाता है।',
      pb: 'ਆਤਮਿਕ ਬਲ ਹੀ ਅਗਿਆਨ ਦੇ ਘੋਰ ਅੰਧਕਾਰ ਨੂੰ ਪ੍ਰਕਾਸ਼ ਵਿੱਚ ਬਦਲਦਾ ਹੈ।',
      en: 'Inner spiritual fortitude and the light of truth dispel the densest darkness.',
    },
  },
  {
    num: 7,
    sutra: {
      hi: 'चित्त में चिंता नहीं, चित्त में चिंतन करो।',
      pb: 'ਮਨ ਵਿੱਚ ਚਿੰਤਾ ਨਹੀਂ, ਚਿੱਤ ਵਿੱਚ ਚਿੰਤਨ ਕਰੋ।',
      en: 'Keep no anxiety in mind, engage in divine contemplation.',
    },
    bhavarth: {
      hi: 'चिंता मन को निर्बल और शांत चेतना को नष्ट करती है, जबकि आत्म-चिंतन समाधान और साहेब के नाम की परम शांति देता है।',
      pb: 'ਚਿੰਤਾ ਮਨ ਨੂੰ ਕਮਜ਼ੋਰ ਅਤੇ ਸ਼ਾਂਤੀ ਨੂੰ ਨਸ਼ਟ ਕਰਦੀ ਹੈ, ਜਦਕਿ ਆਤਮ-ਚਿੰਤਨ ਸਮਾਧਾਨ ਅਤੇ ਸਤਿਗੁਰੂ ਦੇ ਨਾਮ ਦੀ ਪਰਮ ਸ਼ਾਂਤੀ ਬਖ਼ਸ਼ਦਾ ਹੈ।',
      en: 'Anxiety weakens the intellect and shatters peace, whereas contemplation brings clarity and divine serenity.',
    },
    lifeMessage: {
      hi: 'हर संकट पर शांत मन से चिंतन व साहेब का स्मरण करो।',
      pb: 'ਹਰ ਦੁੱਖ-ਦਰਦ ਵੇਲੇ ਸ਼ਾਂਤ ਮਨ ਨਾਲ ਚਿੰਤਨ ਤੇ ਸਿਮਰਨ ਕਰੋ।',
      en: 'In times of turmoil, replace worry with quiet reflection and remembrance of Satyanaam.',
    },
  },
  {
    num: 8,
    sutra: {
      hi: 'मन से हारो नहीं, मन में नमन व मनन करो।',
      pb: 'ਮਨ ਤੋਂ ਹਾਰੋ ਨਹੀਂ, ਮਨ ਵਿੱਚ ਨਮਨ ਤੇ ਮੰਨਨ ਕਰੋ।',
      en: 'Do not surrender to mental defeat: bow in humility and reflect deeply.',
    },
    bhavarth: {
      hi: 'जीवन में कैसी भी कठिन परिस्थिति आए, मन को पराजित मत होने दो। अहंकार छोड़कर नम्रता (नमन) और विचार (मनन) से सही निर्णय लो।',
      pb: 'ਜ਼ਿੰਦਗੀ ਵਿੱਚ ਕਿੰਨੀ ਵੀ ਔਖੀ ਘੜੀ ਆਵੇ, ਮਨ ਨੂੰ ਹਾਰਨ ਨਾ ਦਿਓ। ਹੰਕਾਰ ਛੱਡ ਕੇ ਨਿਮਰਤਾ (ਨਮਨ) ਅਤੇ ਵੀਚਾਰ (ਮੰਨਨ) ਨਾਲ ਸਹੀ ਰਾਹ ਚੁਣੋ।',
      en: 'No matter how severe the storm, never let your spirit capitulate. Relinquish ego, bow in humility, and reflect with wisdom.',
    },
    lifeMessage: {
      hi: 'नम्रता (नमन) व आत्म-मनन ही हर संकट से उबारकर जीवन का सच्चा सुधार करते हैं।',
      pb: 'ਨਿਮਰਤਾ ਅਤੇ ਗਹਿਰਾ ਮੰਨਨ ਹੀ ਹਰ ਮੁਸੀਬਤ ਵਿੱਚੋਂ ਪਾਰ ਲੰਘਾਉਂਦੇ ਹਨ।',
      en: 'Humility and mindful self-inquiry deliver the soul from despair to empowerment.',
    },
  },
  {
    num: 9,
    sutra: {
      hi: 'भरोसा दूसरों पर नहीं, भरोसा स्वयं पर करो।',
      pb: 'ਭਰੋਸਾ ਦੂਜਿਆਂ ਤੇ ਨਹੀਂ, ਭਰੋਸਾ ਆਪਣੇ ਆਪ ਤੇ ਕਰੋ।',
      en: 'Do not depend on others, cultivate self-reliance.',
    },
    bhavarth: {
      hi: 'दूसरों की बैसाखियों व परावलम्बन को त्यागकर अपनी आत्मा की शक्ति, पुरुषार्थ व विवेक पर अडिग भरोसा रखो।',
      pb: 'ਦੂਜਿਆਂ ਦੀਆਂ ਵਿਸਾਖੀਆਂ ਅਤੇ ਨਿਰਭਰਤਾ ਨੂੰ ਛੱਡ ਕੇ ਆਪਣੀ ਆਤਮਾ ਦੀ ਤਾਕਤ, ਮਿਹਨਤ ਅਤੇ ਬਿਬੇਕ ਤੇ ਅਡੋਲ ਵਿਸ਼ਵਾਸ ਰੱਖੋ।',
      en: 'Discard emotional crutches and external dependency; anchor your faith in your divine soul and honest endeavor.',
    },
    lifeMessage: {
      hi: 'आत्मविश्वास व आत्म-निर्भरता ही आध्यात्मिक कल्याण की प्रथम सीढ़ी है।',
      pb: 'ਆਤਮ-ਵਿਸ਼ਵਾਸ ਅਤੇ ਆਤਮ-ਨਿਰਭਰਤਾ ਹੀ ਅਸਲ ਕਲਿਆਣ ਦੀ ਪਹਿਲੀ ਪੌੜੀ ਹੈ।',
      en: 'Unwavering self-trust and self-reliance form the bedrock of spiritual ascension.',
    },
  },
  {
    num: 10,
    sutra: {
      hi: 'स्वयं को गुरुर में नहीं, स्वयं को सरूर में रखो।',
      pb: 'ਆਪਣੇ ਆਪ ਨੂੰ ਗੁਰੂਰ (ਹੰਕਾਰ) ਵਿੱਚ ਨਹੀਂ, ਸਤਿਗੁਰੂ ਦੇ ਸਰੂਰ ਵਿੱਚ ਰੱਖੋ।',
      en: 'Dwell not in ego (gurur), rest in divine intoxication & humility (saroor).',
    },
    bhavarth: {
      hi: 'क्षणभंगुर अहंकार (गुरुर) में न जीकर सतगुरु-नाम के अलौकिक आनंद और सहज नम्रता के खुमार (सरूर) में मगन रहो।',
      pb: 'ਨਾਸ਼ਵਾਨ ਹਉਮੈ-ਹੰਕਾਰ (ਗੁਰੂਰ) ਵਿੱਚ ਜਿਉਣ ਦੀ ਬਜਾਏ ਸਤਿਗੁਰੂ ਦੇ ਨਾਮ ਦੇ ਅਲੌਕਿਕ ਆਨੰਦ ਅਤੇ ਮਸਤੀ (ਸਰੂਰ) ਵਿੱਚ ਲੀਨ ਰਹੋ।',
      en: 'Instead of being trapped in pride and arrogance (gurur), immerse yourself in the joyful intoxication of divine love (saroor).',
    },
    lifeMessage: {
      hi: 'गुरुर व्यक्ति को नीचे गिराता है, जबकि गुरु-कृपा का सरूर परमपद दिलाता है।',
      pb: 'ਗੁਰੂਰ ਇਨਸਾਨ ਨੂੰ ਡੇਗਦਾ ਹੈ, ਜਦਕਿ ਨਾਮ ਦਾ ਸਰੂਰ ਪਰਮਪਦ ਬਖ਼ਸ਼ਦਾ ਹੈ।',
      en: 'Ego debases the seeker, whereas the ecstatic grace of the Satguru elevates the soul to ultimate liberation.',
    },
  },
];

export const DAS_SUTRAS_METADATA = {
  headerBadge: {
    hi: '🌹।।सत्यनाम।।🌹',
    pb: '🌹।।ਸਤਯਨਾਮ।।🌹',
    en: '🌹।।Satyanaam।।🌹',
  },
  title: {
    hi: '💯 📜 सत्य वचन: १० पावन सूत्र',
    pb: '💯 📜 ਸਤਯ ਵਚਨ: ੧੦ ਪਾਵਨ ਸੂਤਰ',
    en: '💯 📜 Truth Teachings: 10 Divine Sutras',
  },
  subtitle: {
    hi: 'सतगुरु कबीर साहेब की अमर चेतना से उपजे १० आत्म-जागृति सूत्र — भावार्थ, जीवन संदेश एवं गहराई से विश्लेषण',
    pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਅਮਰ ਚੇਤਨਾ ਤੋਂ ਪ੍ਰਗਟ ਹੋਏ ੧੦ ਆਤਮ-ਜਾਗ੍ਰਿਤੀ ਸੂਤਰ — ਭਾਵਾਰਥ, ਜੀਵਨ ਸੰਦੇਸ਼ ਅਤੇ ਡੂੰਘਾ ਵਿਸ਼ਲੇਸ਼ਣ',
    en: '10 Divine Awakening Sutras from Satguru Kabir Saheb’s eternal wisdom — Meaning, life message, and deep analysis',
  },
  bhavarthLabel: {
    hi: 'भावार्थ:',
    pb: 'ਭਾਵਾਰਥ:',
    en: 'Meaning:',
  },
  lifeMessageLabel: {
    hi: 'जीवन संदेश:',
    pb: 'ਜੀਵਨ ਸੰਦੇਸ਼:',
    en: 'Life Message:',
  },
  copyBtn: {
    hi: '१० सूत्र कॉपी करें',
    pb: '੧੦ ਸੂਤਰ ਕਾਪੀ ਕਰੋ',
    en: 'Copy 10 Sutras',
  },
  copiedBtn: {
    hi: '✓ कॉपी हो गया!',
    pb: '✓ ਕਾਪੀ ਹੋ ਗਿਆ!',
    en: '✓ Copied!',
  },
  summaryCardTitle: {
    hi: 'समग्र समीक्षा व क्रमबद्ध सोपान',
    pb: 'ਸਮੁੱਚੀ ਸਮੀਖਿਆ ਅਤੇ ਲੜੀਵਾਰ ਪੜਾਅ',
    en: 'Holistic Synthesis & Sequential Stages',
  },
  stages: [
    {
      num: 1,
      heading: {
        hi: '१. पहली २ पंक्तियाँ:',
        pb: '੧. ਪਹਿਲੀਆਂ ੨ ਤੁਕਾਂ:',
        en: '1. First 2 Sutras:',
      },
      text: {
        hi: 'जागृति व प्रत्यक्ष सत्य-बोध (भागो नहीं-जागो, मानो नहीं-जानो)।',
        pb: 'ਜਾਗ੍ਰਿਤੀ ਅਤੇ ਸਿੱਧਾ ਸੱਚ-ਬੋਧ (ਭੱਜੋ ਨਹੀਂ-ਜਾਗੋ, ਮੰਨੋ ਨਹੀਂ-ਜਾਣੋ)।',
        en: 'Awakening & Direct Realization (Awaken in life, know God directly).',
      },
    },
    {
      num: 2,
      heading: {
        hi: '२. अगली ३ पंक्तियाँ:',
        pb: '੨. ਅਗਲੀਆਂ ੩ ਤੁਕਾਂ:',
        en: '2. Next 3 Sutras:',
      },
      text: {
        hi: 'आत्मज्ञान व कर्म-दायित्व (स्वयं को पहचानो, भीतर खोजो, कर्मों से डरो)।',
        pb: 'ਆਤਮ-ਗਿਆਨ ਅਤੇ ਕਰਮ-ਜ਼ਿੰਮੇਵਾਰੀ (ਆਪੇ ਨੂੰ ਪਛਾਣੋ, ਅੰਦਰ ਖੋਜੋ, ਕਰਮਾਂ ਤੋਂ ਡਰੋ)।',
        en: 'Self-Knowledge & Karma Responsibility (Recognize yourself, seek within, heed actions).',
      },
    },
    {
      num: 3,
      heading: {
        hi: '३. मध्य ३ पंक्तियाँ:',
        pb: '੩. ਵਿਚਕਾਰਲੀਆਂ ੩ ਤੁਕਾਂ:',
        en: '3. Middle 3 Sutras:',
      },
      text: {
        hi: 'साहस व मानसिक साधना (लड़ो, चिंतन करो, नमन व मनन करो)।',
        pb: 'ਹੌਸਲਾ ਅਤੇ ਮਾਨਸਿਕ ਸਾਧਨਾ (ਹਨੇਰੇ ਨਾਲ ਲੜੋ, ਚਿੰਤਨ ਕਰੋ, ਨਮਨ ਤੇ ਮੰਨਨ ਕਰੋ)।',
        en: 'Courage & Mindful Discipline (Dispel darkness, reflect calmly, bow in humility).',
      },
    },
    {
      num: 4,
      heading: {
        hi: '४. अंतिम २ पंक्तियाँ:',
        pb: '੪. ਆਖਰੀ ੨ ਤੁਕਾਂ:',
        en: '4. Final 2 Sutras:',
      },
      text: {
        hi: 'आत्मविश्वास व सहज सरूर (स्वयं पर भरोसा, गुरुर छोड़ सरूर में रहो)।',
        pb: 'ਆਤਮ-ਵਿਸ਼ਵਾਸ ਅਤੇ ਸਹਿਜ ਸਰੂਰ (ਆਪਣੇ ਆਪ ਤੇ ਭਰੋਸਾ, ਗੁਰੂਰ ਛੱਡ ਸਰੂਰ ਵਿੱਚ ਰਹੋ)।',
        en: 'Self-Trust & Divine Joy (Cultivate self-reliance, shed ego to rest in divine ecstasy).',
      },
    },
  ],
  salutation: {
    hi: '।। साहेब बंदगी साहेब।।🙏',
    pb: '।। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ ।।🙏',
    en: '|| Saheb Bandagi Saheb || 🙏',
  },
};
