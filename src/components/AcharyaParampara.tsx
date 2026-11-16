import React from 'react';
import { motion } from 'motion/react';
import { History, ArrowLeft, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface AcharyaParamparaProps {
  language: Language;
  onClose: () => void;
}

export const AcharyaParampara: React.FC<AcharyaParamparaProps> = ({
  language,
  onClose,
}) => {
  const t = {
    hi: {
      title: 'आचार्य परंपरा इतिहास',
      subtitle: 'सतguru कबीर साहेब की पावन वंशावली',
      back: 'वापस जाएं',
      summary: 'सतगुरु कबीर साहेब की वंश बयालीस गुरु परंपरा का पावन परिचय। यह पवित्र वंशावली अनादि काल से चली आ रही सत्यनाम की अमर ज्योति को संसार में प्रज्वलित रखती है।'
    },
    pb: {
      title: 'ਆਚਾਰਯ ਪਰੰਪਰਾ ਇਤਿਹਾਸ',
      subtitle: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਪਾਵਨ ਵੰਸ਼ਾਵਲੀ',
      back: 'ਵਾਪਸ ਜਾਓ',
      summary: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਵੰਸ਼ ਬਿਆਲੀਸ ਗੁਰੂ ਪਰੰਪਰਾ ਦਾ ਪਾਵਨ ਪਰਿਚਯ।'
    },
    en: {
      title: 'Acharya Parampara History',
      subtitle: 'Sacred Lineage of Satguru Kabir Saheb',
      back: 'Go Back',
      summary: 'Introduction to the sacred Vansh 42 lineage of Satguru Kabir Saheb, preserving the timeless light of Satyanaam.'
    }
  }[language] || {
    title: 'आचार्य परंपरा इतिहास',
    subtitle: 'सतगुरु कबीर साहेब की पावन वंशावली',
    back: 'वापस',
    summary: 'सतगुरु कबीर साहेब की वंश बयालीस गुरु परंपरा का पावन परिचय।'
  };

  const ACHARYA_FULL_LINEAGE = [
    {
      num: "१",
      name: { hi: "प्रथम आचार्य - धनी धर्मदास साहेब जी", pb: "ਪ੍ਰਥਮ ਆਚਾਰਯ - ਧਨੀ ਧਰਮਦਾਸ ਸਾਹੇਬ ਜੀ", en: "1st Acharya - Dhani Dharmdas Saheb Ji" },
      period: { hi: "सृजन काल (संवत १४५-)", pb: "ਸਿਰਜਣ ਕਾਲ", en: "Creation Era" },
      role: { hi: "आदि गद्दीपति", pb: "ਆਦਿ ਗੱਦੀਪਤੀ", en: "Adi Gaddinashin" },
      desc: {
        hi: "कबीर साहेब जी के मुख्य शिष्य और कबीर पंथ की प्रथम गुरु गद्दी के संस्थापक। कबीर साहेब की पावन अमर वाणी 'बीजक' के संग्रहकर्ता।",
        pb: "ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੇ ਮੁੱਖ ਸ਼ਿਸ਼ ਅਤੇ ਕਬੀਰ ਪੰਥ ਦੀ ਪਹਿਲੀ ਗੱਦੀ ਦੇ ਸੰਸਥਾਪਕ। ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਪਾਵਨ ਅਮਰ ਬਾਣੀ 'ਬੀਜਕ' ਦੇ ਸੰਗ੍ਰਹਿਕਰਤਾ।",
        en: "Chief disciple of Kabir Saheb and founder of the first seat. Collector of the sacred scripture Bijak."
      }
    },
    {
      num: "२",
      name: { hi: "चूरामणि नाम साहेब जी", pb: "ਚੂਰਾਮਣਿ ਨਾਮ ਸਾਹੇਬ ਜੀ", en: "Churamani Naam Saheb Ji" },
      period: { hi: "वंश प्रथम राजा", pb: "ਵੰਸ਼ ਪ੍ਰਥਮ ਰਾਜਾ", en: "1st Lineage Heir" },
      role: { hi: "प्रथम वंशाचार्य", pb: "ਪ੍ਰਥਮ ਵੰਸ਼ਾਚਾਰਯ", en: "First Lineage Master" },
      desc: {
        hi: "धनी धर्मदास साहेब जी के जेष्ठ सुपुत्र। वंश बयालीस परंपरा के प्रथम वंशाचार्य जिन्होंने बंधावगढ़ में पंथ की ध्वजा फहराई।",
        pb: "ਧਨੀ ਧਰਮਦਾਸ ਸਾਹੇਬ ਜੀ ਦੇ ਸੁਪੁੱਤਰ ਅਤੇ ਵੰਸ਼ ਪਰੰਪਰਾ ਦੇ ਪਹਿਲੇ ਵੰਸ਼ਾਚਾਰੀਆ।",
        en: "Son of Dhani Dharmdas Saheb Ji and the pioneer of the Vansh 42 lineage."
      }
    },
    {
      num: "३",
      name: { hi: "सुदर्शन नाम साहेब जी", pb: "ਸੁਦਰਸ਼ਨ ਨਾਮ ਸਾਹੇਬ ਜੀ", en: "Sudarshan Naam Saheb Ji" },
      period: { hi: "द्वितीय वंशाचार्य", pb: "ਦੂਜੇ ਵੰਸ਼ਾਚਾਰਯ", en: "Second Lineage Master" },
      role: { hi: "वंशाचार्य", pb: "ਵੰਸ਼ਾਚਾਰਯ", en: "Lineage Master" },
      desc: {
        hi: "कबीर पंथ के द्वितीय वंशाचार्य जिन्होंने पवित्र अमर सिद्धांतों का देश-विदेश में अद्भुत प्रचार-प्रसार किया।",
        pb: "ਕਬੀਰ ਪੰਥ ਦੇ ਦੂਜੇ ਵੰਸ਼ਾਚਾਰੀਆ ਜਿਨ੍ਹਾਂ ਨੇ ਪਵਿੱਤਰ ਸਿਧਾਂਤਾਂ ਦਾ ਪ੍ਰਚਾਰ ਕੀਤਾ।",
        en: "Second lineage master who widely propagated the timeless teachings of Kabir."
      }
    },
    {
      num: "४",
      name: { hi: "कुलपति नाम साहेब जी", pb: "ਕੁਲਪਤਿ ਨਾਮ ਸਾਹੇਬ ਜੀ", en: "Kulapati Naam Saheb Ji" },
      period: { hi: "तृतीय वंशाचार्य", pb: "ਤੀਜੇ ਵੰਸ਼ਾਚਾਰਯ", en: "Third Lineage Master" },
      role: { hi: "वंशाचार्य", pb: "ਵੰਸ਼ਾਚਾਰਯ", en: "Lineage Master" },
      desc: {
        hi: "तृतीय वंशाचार्य जिन्होंने भक्ति मार्ग को सुदृढ़ किया और अनेक जीवों का उद्धार किया।",
        pb: "ਤੀਜੇ ਵੰਸ਼ਾਚਾਰੀਆ ਜਿਨ੍ਹਾਂ ਨੇ ਭਗਤੀ ਮਾਰਗ ਨੂੰ ਮਜ਼ਬੂਤ ਕੀਤਾ।",
        en: "Third lineage master who strengthened the path of devotion."
      }
    },
    {
      num: "५",
      name: { hi: "प्रबोध नाम साहेब जी", pb: "ਪ੍ਰਬੋਧ ਨਾਮ ਸਾਹੇਬ ਜੀ", en: "Prabodh Naam Saheb Ji" },
      period: { hi: "चतुर्थ वंशाचार्य", pb: "ਚੌਥੇ ਵੰਸ਼ਾਚਾਰਯ", en: "Fourth Lineage Master" },
      role: { hi: "वंशाचार्य", pb: "ਵੰਸ਼ਾਚਾਰਯ", en: "Lineage Master" },
      desc: {
        hi: "चतुर्थ वंशाचार्य जिन्होंने ज्ञान के प्रकाश से अज्ञानता के अंधकार को मिटाया।",
        pb: "ਚੌਥੇ ਵੰਸ਼ਾਚਾਰੀਆ ਜਿਨ੍ਹਾਂ ਨੇ ਗਿਆਨ ਦਾ ਪ੍ਰਕਾਸ਼ ਫੈਲਾਇਆ।",
        en: "Fourth lineage master who spread the light of spiritual knowledge."
      }
    },
    {
      num: "६-१८",
      name: { hi: "भानुनाम साहेब जी से मुक्तिनाम साहेब जी", pb: "ਭਾਨੂਨਾਮ ਸਾਹੇਬ ਜੀ ਤੋਂ ਮੁਕਤੀਨਾਮ ਸਾਹੇਬ ਜੀ", en: "Bhanunam to Muktinam Saheb Ji" },
      period: { hi: "ऐतिहासिक वंश परंपरा", pb: "ਇਤਿਹਾਸਕ ਵੰਸ਼ ਪਰੰਪਰਾ", en: "Historical Lineage" },
      role: { hi: "वंशाचार्य परंपरा", pb: "ਵੰਸ਼ਾਚਾਰਯ ਪਰੰਪਰਾ", en: "Lineage Masters" },
      desc: {
        hi: "वंश बयालीस परंपरा के क्रमिक वंशाचार्य जिन्होंने सत्यनाम की पावन ज्योति को पीढ़ी-दर-पीढ़ी प्रज्वलित रखा और असंख्य मुमुक्षु जीवों को मोक्ष प्रदान किया। इनमें भानुनाम, यमराजनाम, दयानाम, उग्रनाम, ज्ञाननाम, सिद्धनाम, ध्याननाम, अमोलनाम, सूरतस्नेहीनाम, हक़नाम, पावननाम, उदितनाम एवं मुक्तिनाम साहेब शामिल हैं।",
        pb: "ਵੰਸ਼ ਪਰੰਪਰਾ ਦੇ ਕ੍ਰਮਵਾਰ ਵੰਸ਼ਾਚਾਰੀਆ ਜਿਨ੍ਹਾਂ ਨੇ ਸਤਯਨਾਮ ਦੀ ਪਾਵਨ ਜੋਤੀ ਨੂੰ ਜਗਾ ਕੇ ਰੱਖਿਆ।",
        en: "Successive lineage masters of the Vansh 42 tradition who preserved the sacred flame of Satyanaam and guided countless souls to liberation."
      }
    },
    {
      num: "१९",
      name: { hi: "वर्तमान आचार्य - पंथ श्री हुजूर १०८ प्रकाशमुनि नाम साहेब जी", pb: "ਵਰਤਮਾਨ ਆਚਾਰਯ - ਪੰਥ ਸ਼੍ਰੀ ਹੁਜ਼ੂਰ ੧੦੮ ਪ੍ਰਕਾਸ਼ਮੁਨਿ ਨਾਮ ਸਾਹੇਬ ਜੀ", en: "Current Acharya - Panth Shri Huzur 108 Prakashmuni Naam Saheb Ji" },
      period: { hi: "वर्तमान गद्दीनशीन (दमाखेड़ा)", pb: "ਵਰਤਮਾਨ ਗੱਦੀਨਸ਼ੀਨ (ਦਮਾਖੇੜਾ)", en: "Current Gaddinashin (Damakheda)" },
      role: { hi: "वर्तमान पंथश्री", pb: "ਵਰਤਮਾਨ ਪੰਥਸ਼੍ਰੀ", en: "Supreme Head" },
      desc: {
        hi: "कबीर धर्मनगर दमाखेड़ा की पावन गद्दी के वर्तमान पूज्य आचार्य। आपके पावन कुशल मार्गदर्शन में कबीर पंथ का विश्वभर में अभूतपूर्व प्रचार, समाज सुधार, और जीव कल्याण के महान कार्य संचालित हो रहे हैं।",
        pb: "ਕਬੀਰ ਧਰਮਨਗਰ ਦਮਾਖੇੜਾ ਗੱਦੀ ਦੇ ਵਰਤਮਾਨ ਪੂਜਨੀਕ ਆਚਾਰੀਆ ਜੀ। ਆਪ ਜੀ ਦੇ ਮਾਰਗਦਰਸ਼ਨ ਵਿੱਚ ਵਿਸ਼ਵ ਭਰ ਵਿੱਚ ਪ੍ਰਚਾਰ ਹੋ ਰਿਹਾ ਹੈ।",
        en: "The current reverend spiritual sovereign of Kabir Dharamnagar Damakheda. Under his profound leadership, Kabir Panth's welfare programs are reaching worldwide."
      }
    },
    {
      num: "२०",
      name: { hi: "भावी आचार्य - युवराज श्री उदितमुनि नाम साहेब जी", pb: "ਭਾਵੀ ਆਚਾਰਯ - ਯੁਵਰਾਜ ਸ਼੍ਰੀ ਉਦਿਤਮੁਨਿ ਨਾਮ ਸਾਹੇਬ ਜੀ", en: "Future Acharya - Yuvraj Shri Uditmuni Naam Saheb Ji" },
      period: { hi: "युवराज साहेब", pb: "ਯੁਵਰਾਜ ਸਾਹੇਬ", en: "Future Lineage Heir" },
      role: { hi: "युवराज साहेब", pb: "ਯੁਵਰਾਜ ਸਾਹੇਬ", en: "Yuvraj Saheb" },
      desc: {
        hi: "दमाखेड़ा गद्दी के भावी उत्तराधिकारी (युवराज साहेब) जो आधुनिक युवा पीढ़ी में सत्यनाम का पावन संदेश अत्यंत प्रभावशाली ढंग से प्रचारित कर रहे हैं।",
        pb: "ਦਮਾਖੇੜਾ ਗੱਦੀ ਦੇ ਭਾਵੀ ਉੱਤਰਾਧਿਕਾਰੀ (ਯੁਵਰਾਜ ਸਾਹੇਬ) ਜੋ ਨੌਜਵਾਨ ਪੀੜ੍ਹੀ ਵਿੱਚ ਸਤਯਨਾਮ ਦਾ ਸੰਦੇਸ਼ ਫੈਲਾ ਰਹੇ ਹਨ।",
        en: "The future heir and spiritual successor of the Damakheda Gaddi, inspiring youth globally with the message of truth and non-violence."
      }
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto p-4 sm:p-6"
    >
      <div className="flex items-center justify-between mb-8 bg-amber-500/10 p-4 rounded-3xl border border-amber-500/20 shadow-xs">
        <button 
          onClick={onClose}
          className="p-3 rounded-2xl hover:bg-white transition-all bg-white/50 border border-amber-200/50 cursor-pointer shadow-xs"
        >
          <ArrowLeft className="w-5 h-5 text-amber-800" />
        </button>
        <div className="text-center flex-1">
          <h1 className="text-xl sm:text-2xl font-serif font-black text-amber-950 flex items-center justify-center gap-2">
            <span className="text-amber-600">🪷</span>
            {t.title}
          </h1>
          <p className="text-amber-800 text-xs sm:text-sm font-serif font-bold">{t.subtitle}</p>
        </div>
        <div className="w-12 h-12" />
      </div>

      {/* Summary Box */}
      <div className="bg-amber-50/50 border border-amber-200/60 p-5 rounded-3xl mb-8 flex items-start gap-4 shadow-2xs">
        <Sparkles className="w-6 h-6 text-amber-600 mt-0.5 shrink-0" />
        <p className="text-xs sm:text-sm font-serif text-amber-950 leading-relaxed italic">
          {t.summary}
        </p>
      </div>

      {/* Timeline Steps */}
      <div className="space-y-6">
        {ACHARYA_FULL_LINEAGE.map((acharya, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xs border border-amber-100 p-6 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-40" />
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-50 pb-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-800 font-serif font-black text-sm">
                  {acharya.num}
                </div>
                <div>
                  <h3 className="font-serif font-black text-amber-950 text-sm sm:text-base">
                    {acharya.name[language === 'pb' ? 'pb' : language === 'en' ? 'en' : 'hi']}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-amber-700 font-serif font-semibold">
                    {language === 'hi' ? `कार्यकाल: ${acharya.period.hi}` : language === 'pb' ? `ਕਾਲ: ${acharya.period.pb}` : `Period: ${acharya.period.en}`}
                  </p>
                </div>
              </div>
              <span className="self-start sm:self-center text-[10px] uppercase font-black tracking-widest px-3 py-1 rounded-full bg-amber-600/10 text-amber-800">
                {acharya.role[language === 'pb' ? 'pb' : language === 'en' ? 'en' : 'hi']}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-stone-700 font-serif leading-relaxed">
              {acharya.desc[language === 'pb' ? 'pb' : language === 'en' ? 'en' : 'hi']}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Timeless Footbar Salutation */}
      <div className="text-center mt-12 mb-8">
        <p className="text-sm text-amber-700 font-serif font-bold tracking-widest uppercase">
          {language === 'pb' ? '।। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ ।।' : language === 'en' ? '।। Saheb Bandagi Saheb ।।' : '।।साहेब बंदगी साहेब।।'}
        </p>
      </div>
    </motion.div>
  );
};
