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
      title: 'आचार्य परंपरा इतिहास: सद्गुरु कबीर साहेब की पावन वंशावली',
      subtitle: "सद्गुरु कबीर साहेब की अटल 'वंश बयालीस' गुरु परंपरा का पावन परिचय। यह पवित्र वंशावली अनादि काल से चली आ रही सत्यनाम की अमर ज्योति और चौका-आरती परंपरा को संसार में प्रज्वलित रखती है।",
      back: 'वापस जाएं',
      closing: '।। साहेब बंदगी साहेब ।।'
    },
    pb: {
      title: 'ਆਚਾਰੀਆ ਪਰੰਪਰਾ ਇਤਿਹਾਸ: ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੀ ਪਾਵਨ ਵੰਸ਼ਾਵਲੀ',
      subtitle: "ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੀ ਅਟੱਲ 'ਵੰਸ਼ ਬਿਆਲੀ' ਗੁਰੂ ਪਰੰਪਰਾ ਦਾ ਪਾਵਨ ਪਰਿਚੈ। ਇਹ ਪਵਿੱਤਰ ਵੰਸ਼ਾਵਲੀ ਅਨਾਦਿ ਕਾਲ ਤੋਂ ਚੱਲੀ ਆ ਰਹੀ ਸਤਯਨਾਮ ਦੀ ਅਮਰ ਜੋਤ ਅਤੇ ਚੌਕਾ-ਆਰਤੀ ਪਰੰਪਰਾ ਨੂੰ ਸੰਸਾਰ ਵਿੱਚ ਪ੍ਰਜਵਲਿਤ ਰੱਖਦੀ ਹੈ।",
      back: 'ਵਾਪਸ ਜਾਓ',
      closing: '।। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ ।।'
    },
    en: {
      title: 'Acharya Parampara History: Sacred Lineage of Sadguru Kabir Saheb',
      subtitle: "A sacred introduction to the eternal 'Vansh Bayalis' (42 Generations) Guru lineage of Sadguru Kabir Saheb. This holy lineage keeps the eternal flame of Satyanaam and the Chauka-Aarti tradition alive in the world since time immemorial.",
      back: 'Go Back',
      closing: '|| Saheb Bandagi Saheb ||'
    }
  }[language] || {
    title: 'आचार्य परंपरा इतिहास: सद्गुरु कबीर साहेब की पावन वंशावली',
    subtitle: "सद्गुरु कबीर साहेब की अटल 'वंश बयालीस' गुरु परंपरा का पावन परिचय।",
    back: 'वापस',
    closing: '।।साहेब बंदगी साहेब।।'
  };

  const ACHARYA_FULL_LINEAGE = [
    {
      num: "1",
      name: {
        hi: "1. आदि आचार्य: धनी धर्मदास साहेब जी",
        pb: "1. ਆਦਿ ਆਚਾਰੀਆ: ਧਨੀ ਧਰਮਦਾਸ ਸਾਹੇਬ ਜੀ",
        en: "1. Adi Acharya: Dhani Dharmdas Saheb Ji"
      },
      role: {
        hi: "आदि गद्दीपति एवं वंश बयालीस के मूल आधार",
        pb: "ਆਦਿ ਗੱਦੀਪਤੀ ਅਤੇ ਵੰਸ਼ ਬਿਆਲੀ ਦੇ ਮੂਲ ਆਧਾਰ",
        en: "First Gaddi-Pati & Foundation of Vansh Bayalis"
      },
      desc: {
        hi: "सद्गुरु कबीर साहेब जी के प्रमुख शिष्य। कबीर साहेब ने आपको 'वंश बयालीस' का वरदान दिया। आपने बांधवगढ़ (मध्य प्रदेश) से सत्य भक्ति, सात्विक जीवन और चौका-आरती परंपरा का प्रथम प्रसार किया।",
        pb: "ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੇ ਪ੍ਰਮੁੱਖ ਸ਼ਿਸ਼। ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਆਪ ਜੀ ਨੂੰ 'ਵੰਸ਼ ਬਿਆਲੀ' ਦਾ ਵਰਦਾਨ ਦਿੱਤਾ। ਆਪ ਜੀ ਨੇ ਬਾਂਧਵਗੜ੍ਹ (ਮੱਧ ਪ੍ਰਦੇਸ਼) ਤੋਂ ਸੱਚੀ ਭਗਤੀ, ਸਾਤਵਿਕ ਜੀਵਨ ਅਤੇ ਚੌਕਾ-ਆਰਤੀ ਪਰੰਪਰਾ ਦਾ ਪਹਿਲਾ ਪ੍ਰਸਾਰ ਕੀਤਾ।",
        en: "Principal disciple of Sadguru Kabir Saheb Ji, blessed with the 'Vansh Bayalis' lineage. He initiated the spread of true devotion, pure living, and the Chauka-Aarti tradition from Bandhavgarh (Madhya Pradesh)."
      }
    },
    {
      num: "2",
      name: {
        hi: "2. प्रथम वंशाचार्य: पंथ श्री चूड़ामणि (मुक्तामणि) नाम साहेब जी",
        pb: "2. ਪਹਿਲੇ ਵੰਸ਼ਾਚਾਰੀਆ: ਪੰਥ ਸ੍ਰੀ ਚੂੜਾਮਣੀ (ਮੁਕਤਾਮਣੀ) ਨਾਮ ਸਾਹੇਬ ਜੀ",
        en: "2. 1st Vanshacharya: Panth Shri Chudamani (Muktamani) Naam Saheb Ji"
      },
      role: {
        hi: "प्रथम वंशाचार्य (बांधवगढ़ गद्दी)",
        pb: "ਪਹਿਲੇ ਵੰਸ਼ਾਚਾਰੀਆ (ਬਾਂਧਵਗੜ੍ਹ ਗੱਦੀ)",
        en: "First Vanshacharya (Bandhavgarh Gaddi)"
      },
      desc: {
        hi: "धनी धर्मदास साहेब जी और माता आमिनी देवी के सुपुत्र। कबीर साहेब के आशीर्वाद से उत्पन्न प्रथम वंशाचार्य, जिन्होंने बांधवगढ़ में पंथ की पावन ध्वजा फहराई और धर्म का विस्तार किया।",
        pb: "ਧਨੀ ਧਰਮਦਾਸ ਸਾਹੇਬ ਜੀ ਅਤੇ ਮਾਤਾ ਆਮਿਨੀ ਦੇਵੀ ਦੇ ਸਪੁੱਤਰ। ਕਬੀਰ ਸਾਹੇਬ ਦੇ ਆਸ਼ੀਰਵਾਦ ਨਾਲ ਪ੍ਰਗਟ ਹੋਏ ਪਹਿਲੇ ਵੰਸ਼ਾਚਾਰੀਆ, ਜਿਨ੍ਹਾਂ ਨੇ ਬਾਂਧਵਗੜ੍ਹ ਵਿਖੇ ਪੰਥ ਦਾ ਪਾਵਨ ਝੰਡਾ ਲਹਿਰਾਇਆ।",
        en: "Son of Dhani Dharmdas Saheb Ji and Mata Amini Devi. Born with the blessings of Kabir Saheb, he established the sacred seat at Bandhavgarh and hoisted the flag of Kabir Panth."
      }
    },
    {
      num: "3",
      name: {
        hi: "3. द्वितीय वंशाचार्य: पंथ श्री सुदर्शन नाम साहेब जी",
        pb: "3. ਦੂਜੇ ਵੰਸ਼ਾਚਾਰੀਆ: ਪੰਥ ਸ੍ਰੀ ਸੁਦਰਸ਼ਨ ਨਾਮ ਸਾਹੇਬ ਜੀ",
        en: "3. 2nd Vanshacharya: Panth Shri Sudarshan Naam Saheb Ji"
      },
      role: {
        hi: "द्वितीय वंशाचार्य",
        pb: "ਦੂਜੇ ਵੰਸ਼ਾਚਾਰੀਆ",
        en: "Second Vanshacharya"
      },
      desc: {
        hi: "कबीर पंथ के द्वितीय वंशाचार्य, जिन्होंने सत्यनाम के पवित्र सिद्धांतों का देश-विदेश में अद्भुत प्रचार-प्रसार किया और अनेक भटके हुए जीवों को सन्मार्ग दिखाया।",
        pb: "ਕਬੀਰ ਪੰਥ ਦੇ ਦੂਜੇ ਵੰਸ਼ਾਚਾਰੀਆ, ਜਿਨ੍ਹਾਂ ਨੇ ਸਤਯਨਾਮ ਦੇ ਪਵਿੱਤਰ ਸਿਧਾਂਤਾਂ ਦਾ ਦੇਸ਼-ਵਿਦੇਸ਼ ਵਿੱਚ ਅਦਭੁਤ ਪ੍ਰਚਾਰ-ਪ੍ਰਸਾਰ ਕੀਤਾ ਅਤੇ ਅਨੇਕਾਂ ਜੀਵਾਂ ਦਾ ਉਧਾਰ ਕੀਤਾ।",
        en: "The second Vanshacharya of Kabir Panth, who widely propagated the eternal principles of Satyanaam across regions and guided countless souls onto the path of truth."
      }
    },
    {
      num: "4",
      name: {
        hi: "4. तृतीय वंशाचार्य: पंथ श्री कुलपति नाम साहेब जी",
        pb: "4. ਤੀਜੇ ਵੰਸ਼ਾਚਾਰੀਆ: ਪੰਥ ਸ੍ਰੀ ਕੁਲਪਤੀ ਨਾਮ ਸਾਹੇਬ ਜੀ",
        en: "4. 3rd Vanshacharya: Panth Shri Kulpati Naam Saheb Ji"
      },
      role: {
        hi: "तृतीय वंशाचार्य",
        pb: "ਤੀਜੇ ਵੰਸ਼ਾਚਾਰੀਆ",
        en: "Third Vanshacharya"
      },
      desc: {
        hi: "तृतीय वंशाचार्य, जिन्होंने भक्ति मार्ग और आध्यात्मिक अनुशासन को सुदृढ़ किया तथा गुरु महिमा का विस्तार किया।",
        pb: "ਤੀਜੇ ਵੰਸ਼ਾਚਾਰੀਆ, ਜਿਨ੍ਹਾਂ ਨੇ ਭਗਤੀ ਮਾਰਗ ਅਤੇ ਅਧਿਆਤਮਿਕ ਅਨੁਸ਼ਾਸਨ ਨੂੰ ਮਜ਼ਬੂਤ ਕੀਤਾ।",
        en: "The third Vanshacharya, who strengthened the path of devotion, spiritual discipline, and the glory of the Guru."
      }
    },
    {
      num: "5",
      name: {
        hi: "5. चतुर्थ वंशाचार्य: पंथ श्री प्रमोदगुरु (बालापीर) नाम साहेब जी",
        pb: "5. ਚੌਥੇ ਵੰਸ਼ਾਚਾਰੀਆ: ਪੰਥ ਸ੍ਰੀ ਪ੍ਰਮੋਦਗੁਰੂ (ਬਾਲਾਪੀਰ) ਨਾਮ ਸਾਹੇਬ ਜੀ",
        en: "5. 4th Vanshacharya: Panth Shri Pramodguru (Balapir) Naam Saheb Ji"
      },
      role: {
        hi: "चतुर्थ वंशाचार्य (मंडला क्षेत्र विस्तारक)",
        pb: "ਚੌਥੇ ਵੰਸ਼ਾਚਾਰੀਆ (ਮੰਡਲਾ ਖੇਤਰ ਵਿਸਤਾਰਕ)",
        en: "Fourth Vanshacharya (Mandla Region Expansion)"
      },
      desc: {
        hi: "चतुर्थ वंशाचार्य, जिन्होंने ज्ञान के प्रकाश से अज्ञानता और पाखंड के अंधकार को मिटाया और मध्य प्रदेश के मंडला सहित विभिन्न क्षेत्रों में पंथ का विस्तार किया।",
        pb: "ਚੌਥੇ ਵੰਸ਼ਾਚਾਰੀਆ, ਜਿਨ੍ਹਾਂ ਨੇ ਗਿਆਨ ਦੇ ਪ੍ਰਕਾਸ਼ ਨਾਲ ਅਗਿਆਨਤਾ ਦੇ ਹਨੇਰੇ ਨੂੰ ਮਿਟਾਇਆ ਅਤੇ ਮੰਡਲਾ (ਮੱਧ ਪ੍ਰਦੇਸ਼) ਸਮੇਤ ਵੱਖ-ਵੱਖ ਖੇਤਰਾਂ ਵਿੱਚ ਪੰਥ ਦਾ ਵਿਸਤਾਰ ਕੀਤਾ।",
        en: "The fourth Vanshacharya, who dispelled the darkness of ignorance with the light of spiritual wisdom and expanded the Panth across Mandla (Madhya Pradesh) and surrounding regions."
      }
    },
    {
      num: "6",
      name: {
        hi: "6. पंचम से चतुर्दश वंशाचार्य (५ से १४): ऐतिहासिक वंश परंपरा",
        pb: "6. ਪੰਜਵੇਂ ਤੋਂ ਚੌਦਵੇਂ ਵੰਸ਼ਾਚਾਰੀਆ (੫ ਤੋਂ ੧੪): ਇਤਿਹਾਸਕ ਵੰਸ਼ ਪਰੰਪਰਾ",
        en: "6. 5th to 14th Vanshacharyas (5 – 14): Historical Lineage"
      },
      role: {
        hi: "क्रमिक वंशाचार्य (कवर्धा एवं दामाखेड़ा गद्दी की स्थापना)",
        pb: "ਲੜੀਵਾਰ ਵੰਸ਼ਾਚਾਰੀਆ (ਕਵਰਧਾ ਅਤੇ ਦਾਮਾਖੇੜਾ ਗੱਦੀ ਦੀ ਸਥਾਪਨਾ)",
        en: "Successive Vanshacharyas (Establishment of Kawardha & Damakheda Gaddi)"
      },
      desc: {
        hi: `वंश बयालीस परंपरा के क्रमिक वंशाचार्य, जिन्होंने पीढ़ी-दर-पीढ़ी सत्यनाम की ज्योति को प्रज्वलित रखा। इसी काल में कवर्धा और बाद में १२वें वंशाचार्य पूज्य उग्र नाम साहेब जी द्वारा सन् १९०३ में 'कबीर धर्मनगर, दामाखेड़ा' (छत्तीसगढ़) की पावन गद्दी की स्थापना की गई:
• ५. केवल नाम साहेब जी
• ६. अमोल नाम साहेब जी
• ७. सुरति सनेही नाम साहेब जी
• ८. हक़ (हक्का) नाम साहेब जी (कवर्धा गद्दी से जुड़े प्रमुख आचार्य)
• ९. पाक नाम साहेब जी
• १०. प्रगट नाम साहेब जी
• ११. धीरज नाम साहेब जी
• १२. उग्र नाम साहेब जी (कबीर धर्मनगर, दामाखेड़ा गद्दी के संस्थापक)
• १३. दया नाम साहेब जी
• १४. गृन्धमुनि नाम साहेब जी`,
        pb: `ਵੰਸ਼ ਬਿਆਲੀ ਪਰੰਪਰਾ ਦੇ ਲੜੀਵਾਰ ਵੰਸ਼ਾਚਾਰੀਆ, ਜਿਨ੍ਹਾਂ ਨੇ ਪੀੜ੍ਹੀ-ਦਰ-ਪੀੜ੍ਹੀ ਸਤਯਨਾਮ ਦੀ ਜੋਤ ਜਗਾਈ ਰੱਖੀ। ਇਸੇ ਕਾਲ ਵਿੱਚ ਕਵਰਧਾ ਅਤੇ ਬਾਅਦ ਵਿੱਚ ੧੨ਵੇਂ ਵੰਸ਼ਾਚਾਰੀਆ ਪੂਜਨੀਕ ਉਗਰ ਨਾਮ ਸਾਹੇਬ ਜੀ ਵੱਲੋਂ ਸੰਨ ੧੯੦੩ ਵਿੱਚ 'ਕਬੀਰ ਧਰਮਨਗਰ, ਦਾਮਾਖੇੜਾ' (ਛੱਤੀਸਗੜ੍ਹ) ਦੀ ਪਾਵਨ ਗੱਦੀ ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ ਗਈ:
• ੫. ਕੇਵਲ ਨਾਮ ਸਾਹੇਬ ਜੀ
• ੬. ਅਮੋਲ ਨਾਮ ਸਾਹੇਬ ਜੀ
• ੭. ਸੁਰਤਿ ਸਨੇਹੀ ਨਾਮ ਸਾਹੇਬ ਜੀ
• ੮. ਹੱਕ (ਹੱਕਾ) ਨਾਮ ਸਾਹੇਬ ਜੀ
• ੯. ਪਾਕ ਨਾਮ ਸਾਹੇਬ ਜੀ
• ੧੦. ਪ੍ਰਗਟ ਨਾਮ ਸਾਹੇਬ ਜੀ
• ੧੧. ਧੀਰਜ ਨਾਮ ਸਾਹੇਬ ਜੀ
• ੧੨. ਉਗਰ ਨਾਮ ਸਾਹੇਬ ਜੀ (ਕਬੀਰ ਧਰਮਨਗਰ, ਦਾਮਾਖੇੜਾ ਗੱਦੀ ਦੇ ਸੰਸਥਾਪਕ)
• ੧੩. ਦਯਾ ਨਾਮ ਸਾਹੇਬ ਜੀ
• ੧੪. ਗ੍ਰਿੰਧਮੁਨੀ ਨਾਮ ਸਾਹੇਬ ਜੀ`,
        en: `Successive Vanshacharyas of the Vansh Bayalis tradition who kept the flame of Satyanaam burning across generations. During this era, the seat moved to Kawardha and later in 1903, the 12th Vanshacharya, Pujya Ugra Naam Saheb Ji, established the sacred seat at 'Kabir Dharmanagar, Damakheda' (Chhattisgarh):
• 5. Kewal Naam Saheb Ji
• 6. Amol Naam Saheb Ji
• 7. Surati Sanehi Naam Saheb Ji
• 8. Haq (Hakka) Naam Saheb Ji
• 9. Paak Naam Saheb Ji
• 10. Pragat Naam Saheb Ji
• 11. Dheeraj Naam Saheb Ji
• 12. Ugra Naam Saheb Ji (Founder of Kabir Dharmanagar, Damakheda Gaddi)
• 13. Daya Naam Saheb Ji
• 14. Grindhmuni Naam Saheb Ji`
      }
    },
    {
      num: "7",
      name: {
        hi: "7. पंद्रहवें वंशाचार्य (१५): पंथ श्री हुजूर प्रकाशमुनि नाम साहेब जी",
        pb: "7. ਪੰਦਰਵੇਂ ਵੰਸ਼ਾਚਾਰੀਆ (੧੫): ਪੰਥ ਸ੍ਰੀ ਹਜ਼ੂਰ ਪ੍ਰਕਾਸ਼ਮੁਨੀ ਨਾਮ ਸਾਹੇਬ ਜੀ",
        en: "7. 15th Vanshacharya (15): Panth Shri Huzoor Prakashmuni Naam Saheb Ji"
      },
      role: {
        hi: "वर्तमान गद्दीनशीन आचार्य (कबीर धर्मनगर, दामाखेड़ा)",
        pb: "ਵਰਤਮਾਨ ਗੱਦੀਨਸ਼ੀਨ ਆਚਾਰੀਆ (ਕਬੀਰ ਧਰਮਨਗਰ, ਦਾਮਾਖੇੜਾ)",
        en: "Present Reigning Acharya (Kabir Dharmanagar, Damakheda)"
      },
      desc: {
        hi: "कबीर धर्मनगर दामाखेड़ा की पावन गद्दी के वर्तमान पूज्य १५वें वंशाचार्य। आपके कुशल मार्गदर्शन में कबीर पंथ का विश्वभर में अभूतपूर्व प्रचार, नशामुक्ति, समाज सुधार, पर्यावरण संरक्षण और जीव कल्याण के महान कार्य संचालित हो रहे हैं।",
        pb: "ਕਬੀਰ ਧਰਮਨਗਰ ਦਾਮਾਖੇੜਾ ਦੀ ਪਾਵਨ ਗੱਦੀ ਦੇ ਵਰਤਮਾਨ ਪੂਜਨੀਕ ੧੫ਵੇਂ ਵੰਸ਼ਾਚਾਰੀਆ। ਆਪ ਜੀ ਦੀ ਯੋਗ ਅਗਵਾਈ ਹੇਠ ਕਬੀਰ ਪੰਥ ਦਾ ਵਿਸ਼ਵ ਭਰ ਵਿੱਚ ਪ੍ਰਚਾਰ, ਨਸ਼ਾ-ਮੁਕਤੀ, ਸਮਾਜ ਸੁਧਾਰ ਅਤੇ ਜੀਵ ਭਲਾਈ ਦੇ ਮਹਾਨ ਕਾਰਜ ਚੱਲ ਰਹੇ ਹਨ।",
        en: "The present revered 15th Vanshacharya of the sacred seat at Kabir Dharmanagar, Damakheda. Under his visionary guidance, Kabir Panth is witnessing global propagation alongside major initiatives in de-addiction, social reform, environmental conservation, and human welfare."
      }
    },
    {
      num: "8",
      name: {
        hi: "8. सोलहवें वंशाचार्य (१६): पंथ श्री हुजूर उदितमुनि नाम साहेब जी",
        pb: "8. ਸੋਲ੍ਹਵੇਂ ਵੰਸ਼ਾਚਾਰੀਆ (੧੬): ਪੰਥ ਸ੍ਰੀ ਹਜ਼ੂਰ ਉਦਿਤਮੁਨੀ ਨਾਮ ਸਾਹੇਬ ਜੀ",
        en: "8. 16th Vanshacharya (16): Panth Shri Huzoor Uditmuni Naam Saheb Ji"
      },
      role: {
        hi: "१६वें नवोदित वंशाचार्य (वंश प्रतापाचार्य)",
        pb: "੧੬ਵੇਂ ਨਵੋਦਿਤ ਵੰਸ਼ਾਚਾਰੀਆ (ਵੰਸ਼ ਪ੍ਰਤਾਪਾਚਾਰੀਆ)",
        en: "16th Emerging Vanshacharya (Vansh Pratapacharya)"
      },
      desc: {
        hi: "कबीर धर्मदास वंशावली के १६वें नवोदित वंशाचार्य, जो आधुनिक युवा पीढ़ी और जनमानस में सत्यनाम का पावन संदेश अत्यंत प्रभावशाली और सरल ढंग से प्रचारित कर रहे हैं।",
        pb: "ਕਬੀਰ ਧਰਮਦਾਸ ਵੰਸ਼ਾਵਲੀ ਦੇ ੧੬ਵੇਂ ਨਵੋਦਿਤ ਵੰਸ਼ਾਚਾਰੀਆ, ਜੋ ਆਧੁਨਿਕ ਨੌਜਵਾਨ ਪੀੜ੍ਹੀ ਅਤੇ ਲੋਕਾਈ ਵਿੱਚ ਸਤਯਨਾਮ ਦਾ ਪਾਵਨ ਸੰਦੇਸ਼ ਬੜੇ ਪ੍ਰਭਾਵਸ਼ਾਲੀ ਢੰਗ ਨਾਲ ਪਹੁੰਚਾ ਰਹੇ ਹਨ।",
        en: "The 16th emerging Vanshacharya of the Kabir Dharmadas lineage, who is inspiring the modern youth and masses with the sacred message of Satyanaam in a profound and accessible manner."
      }
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto p-4 sm:p-6"
    >
      <div className="flex items-center justify-center mb-6 bg-amber-500/10 p-4 rounded-3xl border border-amber-500/20 shadow-xs">
        <div className="text-center flex-1 px-2">
          <h1 className="text-base sm:text-xl font-serif font-black text-amber-950 flex items-center justify-center gap-2">
            <span className="text-amber-600">🪷</span>
            <span className="truncate">{t.title}</span>
          </h1>
        </div>
      </div>

      {/* Summary Box */}
      <div className="bg-amber-50/60 border border-amber-200/60 p-5 sm:p-6 rounded-3xl mb-8 flex items-start gap-4 shadow-2xs">
        <Sparkles className="w-6 h-6 text-amber-600 mt-0.5 shrink-0" />
        <p className="text-xs sm:text-sm font-serif text-amber-950 leading-relaxed font-medium">
          {t.subtitle}
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
            className="bg-white dark:bg-zinc-900 rounded-3xl shadow-xs border border-amber-100 dark:border-zinc-800 p-6 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-40" />
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-50 dark:border-zinc-800 pb-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-100 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/50 flex items-center justify-center text-amber-800 dark:text-amber-300 font-serif font-black text-sm">
                  {acharya.num}
                </div>
                <div>
                  <h3 className="font-serif font-black text-amber-950 dark:text-amber-100 text-sm sm:text-base">
                    {acharya.name[language === 'pb' ? 'pb' : language === 'en' ? 'en' : 'hi']}
                  </h3>
                </div>
              </div>
              <span className="self-start sm:self-center text-[10px] uppercase font-black tracking-widest px-3 py-1 rounded-full bg-amber-600/10 dark:bg-amber-500/20 text-amber-800 dark:text-amber-300">
                {acharya.role[language === 'pb' ? 'pb' : language === 'en' ? 'en' : 'hi']}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 font-serif leading-relaxed whitespace-pre-line">
              {acharya.desc[language === 'pb' ? 'pb' : language === 'en' ? 'en' : 'hi']}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Timeless Footbar Salutation */}
      <div className="text-center mt-12 mb-8">
        <p className="text-sm text-amber-700 dark:text-amber-400 font-serif font-bold tracking-widest uppercase">
          {t.closing}
        </p>
      </div>
    </motion.div>
  );
};
