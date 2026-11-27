import { Language } from '../types';

export interface AshramLocation {
  id: string;
  name: {
    hi: string;
    pb: string;
    en: string;
  };
  location: {
    hi: string;
    pb: string;
    en: string;
  };
  significanceTag: {
    hi: string;
    pb: string;
    en: string;
  };
  description: {
    hi: string;
    pb: string;
    en: string;
  };
  mapsUrl: string;
  type: 'historical' | 'regional';
}

export const ASHRAMS_DATA: AshramLocation[] = [
  {
    id: 'lahartara',
    type: 'historical',
    name: {
      hi: 'लहरतारा',
      pb: 'ਲਹਿਰਤਾਰਾ',
      en: 'Lahartara',
    },
    location: {
      hi: 'काशी / वाराणसी, उत्तर प्रदेश',
      pb: 'ਕਾਸ਼ੀ / ਵਾਰਾਣਸੀ, ਉੱਤਰ ਪ੍ਰਦੇਸ਼',
      en: 'Kashi / Varanasi, Uttar Pradesh',
    },
    significanceTag: {
      hi: 'महत्व: सतगुरु कबीर साहेब का पावन प्राकट्य स्थल',
      pb: 'ਮਹੱਤਵ: ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦਾ ਪਾਵਨ ਪ੍ਰਗਟ ਸਥਾਨ',
      en: 'Significance: Sacred Manifestation (Prakatya) Site of Satguru Kabir Saheb',
    },
    description: {
      hi: 'ज्येष्ठ शुक्ल पूर्णिमा, संवत १४५५ (सन् १३९८) को काशी के पवित्र लहरतारा सरोवर में कमल के पुष्प पर सतगुरु कबीर साहेब का दिव्य प्राकट्य हुआ। यहीं से नीरू और नीमा जी को बालक रूप में साहेब प्राप्त हुए। यह स्थान विश्वभर के कबीर अनुयायियों के लिए परम आस्था का केंद्र है।',
      pb: 'ਜੇਠ ਸੁਦੀ ਪੂਰਨਮਾਸ਼ੀ, ਸੰਮਤ ੧੪੫੫ (ਸੰਨ ੧੩੯੮) ਨੂੰ ਕਾਸ਼ੀ ਦੇ ਪਵਿੱਤਰ ਲਹਿਰਤਾਰਾ ਸਰੋਵਰ ਵਿੱਚ ਕਮਲ ਦੇ ਫੁੱਲ ਉੱਤੇ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦਾ ਦਿਵ੍ ਪ੍ਰਕਾਸ਼ ਹੋਇਆ। ਇੱਥੋਂ ਹੀ ਨੀਰੂ ਅਤੇ ਨੀਮਾ ਜੀ ਨੂੰ ਬਾਲਕ ਰੂਪ ਵਿੱਚ ਸਾਹੇਬ ਪ੍ਰਾਪਤ ਹੋਏ। ਇਹ ਸਥਾਨ ਦੁਨੀਆ ਭਰ ਦੇ ਕਬੀਰ ਨਾਮ-ਲੇਵਾ ਸੰਗਤਾਂ ਲਈ ਪਰਮ ਆਸਥਾ ਦਾ ਕੇਂਦਰ ਹੈ।',
      en: 'On Jyeshtha Shukla Purnima, Vikram Samvat 1455 (1398 CE), Satguru Kabir Saheb manifested miraculously upon a lotus flower in the sacred Lahartara pond in Kashi, where He was found by Neeru and Neema. It stands as a supreme center of faith for Kabir followers worldwide.',
    },
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Lahartara+Kabir+Ashram+Varanasi',
  },
  {
    id: 'maghar',
    type: 'historical',
    name: {
      hi: 'मगहर',
      pb: 'ਮਗਹਰ',
      en: 'Maghar',
    },
    location: {
      hi: 'संत कबीर नगर, उत्तर प्रदेश',
      pb: 'ਸੰਤ ਕਬੀਰ ਨਗਰ, ਉੱਤਰ ਪ੍ਰਦੇਸ਼',
      en: 'Sant Kabir Nagar, Uttar Pradesh',
    },
    significanceTag: {
      hi: 'महत्व: सतगुरु कबीर साहेब का पावन निर्वाण (अंतर्ध्यान) स्थल',
      pb: 'ਮਹੱਤਵ: ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦਾ ਪਾਵਨ ਨਿਰਵਾਣ (ਅੰਤਰਧਿਆਨ) ਸਥਾਨ',
      en: 'Significance: Sacred Departure (Nirvana) Site of Satguru Kabir Saheb',
    },
    description: {
      hi: 'तत्कालीन अंधविश्वास (कि काशी में मरने से स्वर्ग और मगहर में मरने से नरक मिलता है) को तोड़ने के लिए सतगुरु कबीर साहेब अपने अंतिम समय में काशी छोड़कर मगहर पधारे। संवत १५७५ (सन् १५१८) में माघ शुक्ल एकादशी को यहीं से साहेब ने सशरीर परमधाम गमन किया और चादर के नीचे सुगंधित पुष्प मिले। यहाँ हिंदू और मुस्लिम दोनों आस्थाओं के स्मारक सद्भाव का संदेश देते हैं।',
      pb: 'ਉਸ ਸਮੇਂ ਦੇ ਅੰਧਵਿਸ਼ਵਾਸ (ਕਿ ਕਾਸ਼ੀ ਵਿੱਚ ਮਰਨ ਨਾਲ ਸਵਰਗ ਅਤੇ ਮਗਹਰ ਵਿੱਚ ਮਰਨ ਨਾਲ ਨਰਕ ਮਿਲਦਾ ਹੈ) ਨੂੰ ਤੋੜਨ ਲਈ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਅੰਤਿਮ ਸਮੇਂ ਕਾਸ਼ੀ ਛੱਡ ਕੇ ਮਗਹਰ ਪਧਾਰੇ। ਸੰਮਤ ੧੫੭੫ (ਸੰਨ ੧੫੧੮) ਵਿੱਚ ਮਾਘ ਸੁਦੀ ਇਕਾਦਸ਼ੀ ਨੂੰ ਇੱਥੋਂ ਹੀ ਸਾਹੇਬ ਸਰੀਰ ਸਮੇਤ ਪਰਮਧਾਮ ਪਧਾਰੇ ਅਤੇ ਚਾਦਰ ਹੇਠੋਂ ਸੁਗੰਧਿਤ ਫੁੱਲ ਪ੍ਰਾਪਤ ਹੋਏ। ਇੱਥੇ ਸਾਂਝੀਵਾਲਤਾ ਅਤੇ ਭਾਈਚਾਰੇ ਦਾ ਅਦਭੁਤ ਸੰਦੇਸ਼ ਮਿਲਦਾ ਹੈ।',
      en: 'To shatter the prevailing superstition that dying in Kashi grants heaven while dying in Maghar leads to hell, Satguru Kabir Saheb left Kashi for Maghar in His final days. On Magh Shukla Ekadashi, Samvat 1575 (1518 CE), He departed from this mortal world, leaving behind fragrant flowers beneath His shroud. Today, adjacent shrines stand here as timeless symbols of communal harmony.',
    },
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kabir+Samadhi+and+Mazar+Maghar',
  },
  {
    id: 'bandhavgarh',
    type: 'historical',
    name: {
      hi: 'बांधवगढ़',
      pb: 'ਬਾਂਧਵਗੜ੍ਹ',
      en: 'Bandhavgarh',
    },
    location: {
      hi: 'उमरिया, मध्य प्रदेश',
      pb: 'ਉਮਰੀਆ, ਮੱਧ ਪ੍ਰਦੇਸ਼',
      en: 'Umaria, Madhya Pradesh',
    },
    significanceTag: {
      hi: 'महत्व: आदि गद्दी एवं वंश बयालीस का उद्गम स्थल',
      pb: 'ਮਹੱਤਵ: ਆਦਿ ਗੱਦੀ ਅਤੇ ਵੰਸ਼ ਬਿਆਲੀ ਦਾ ਉਦਗਮ ਸਥਾਨ',
      en: 'Significance: Adi Gaddi & Origin of Vansh Bayalis',
    },
    description: {
      hi: 'सतगुरु कबीर साहेब के प्रमुख शिष्य धनी धर्मदास साहेब जी की कर्मस्थली और कबीर धर्मदास वंशावली की प्रथम गद्दी। यहीं पर सतगुरु कबीर साहेब ने धर्मदास साहेब को \'वंश बयालीस\' का आशीर्वाद दिया और प्रथम वंशाचार्य चूड़ामणि नाम साहेब जी ने पंथ की पावन ध्वजा फहराई।',
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੇ ਪ੍ਰਮੁੱਖ ਸ਼ਿਸ਼ ਧਨੀ ਧਰਮਦਾਸ ਸਾਹੇਬ ਜੀ ਦੀ ਕਰਮ ਭੂਮੀ ਅਤੇ ਕਬੀਰ ਧਰਮਦਾਸ ਵੰਸ਼ਾਵਲੀ ਦੀ ਪਹਿਲੀ ਗੱਦੀ। ਇੱਥੇ ਹੀ ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਧਰਮਦਾਸ ਸਾਹੇਬ ਨੂੰ \'ਵੰਸ਼ ਬਿਆਲੀ\' ਦਾ ਵਰਦਾਨ ਦਿੱਤਾ ਅਤੇ ਪਹਿਲੇ ਵੰਸ਼ਾਚਾਰੀਆ ਚੂੜਾਮਣੀ ਨਾਮ ਸਾਹੇਬ ਜੀ ਨੇ ਪੰਥ ਦਾ ਪਾਵਨ ਝੰਡਾ ਲਹਿਰਾਇਆ।',
      en: 'The spiritual workplace of Dhani Dharmadas Saheb Ji and the original seat (Adi Gaddi) of the Kabir Dharmadas lineage. It was here that Satguru Kabir Saheb blessed Dharmadas Ji with the \'Vansh Bayalis\' lineage, and the 1st Vanshacharya, Chudamani Naam Saheb Ji, hoisted the sacred flag of the Panth.',
    },
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Bandhavgarh+Kabir+Ashram',
  },
  {
    id: 'kawardha',
    type: 'historical',
    name: {
      hi: 'कवर्धा',
      pb: 'ਕਵਰਧਾ',
      en: 'Kawardha',
    },
    location: {
      hi: 'कबीरधाम, छत्तीसगढ़',
      pb: 'ਕਬੀਰਧਾਮ, ਛੱਤੀਸਗੜ੍ਹ',
      en: 'Kabirdham, Chhattisgarh',
    },
    significanceTag: {
      hi: 'महत्व: ऐतिहासिक वंशाचार्य गद्दी',
      pb: 'ਮਹੱਤਵ: ਇਤਿਹਾਸਕ ਵੰਸ਼ਾਚਾਰੀਆ ਗੱਦੀ',
      en: 'Significance: Historic Vanshacharya Seat',
    },
    description: {
      hi: 'बांधवगढ़ के पश्चात कबीर धर्मदास वंशावली के अनेक पूज्य आचार्यों ने कवर्धा को अपना मुख्य केंद्र बनाया। विशेष रूप से ८वें वंशाचार्य हक़ नाम साहेब जी से लेकर ११वें वंशाचार्य तक यह स्थान सत्यनाम प्रचार और चौका-आरती परंपरा का प्रमुख केंद्र रहा।',
      pb: 'ਬਾਂਧਵਗੜ੍ਹ ਤੋਂ ਬਾਅਦ ਕਬੀਰ ਧਰਮਦਾਸ ਵੰਸ਼ਾਵਲੀ ਦੇ ਅਨੇਕਾਂ ਪੂਜਨੀਕ ਆਚਾਰੀਆਂ ਨੇ ਕਵਰਧਾ ਨੂੰ ਆਪਣਾ ਮੁੱਖ ਕੇਂਦਰ ਬਣਾਇਆ। ਖ਼ਾਸ ਕਰਕੇ ੮ਵੇਂ ਵੰਸ਼ਾਚਾਰੀਆ ਹੱਕ ਨਾਮ ਸਾਹੇਬ ਜੀ ਤੋਂ ਲੈ ਕੇ ੧੧ਵੇਂ ਵੰਸ਼ਾਚਾਰੀਆ ਤੱਕ ਇਹ ਸਥਾਨ ਸਤਯਨਾਮ ਪ੍ਰਚਾਰ ਅਤੇ ਚੌਕਾ-ਆਰਤੀ ਪਰੰਪਰਾ ਦਾ ਪ੍ਰਮੁੱਖ ਕੇਂਦਰ ਰਿਹਾ।',
      en: 'Following Bandhavgarh, several revered Acharyas of the Dharmadas lineage established Kawardha as their principal spiritual center. Particularly from the 8th Vanshacharya, Haq Naam Saheb Ji, through the 11th Vanshacharya, Kawardha served as a major hub for propagating Satyanaam and the Chauka-Aarti tradition.',
    },
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kawardha+Kabir+Ashram',
  },
  {
    id: 'damakheda',
    type: 'historical',
    name: {
      hi: 'कबीर धर्मनगर, दामाखेड़ा',
      pb: 'ਕਬੀਰ ਧਰਮਨਗਰ, ਦਾਮਾਖੇੜਾ',
      en: 'Kabir Dharmanagar, Damakheda',
    },
    location: {
      hi: 'बलौदाबाजार, छत्तीसगढ़',
      pb: 'ਬਲੌਦਾਬਾਜ਼ਾਰ, ਛੱਤੀਸਗੜ੍ਹ',
      en: 'Balodabazar, Chhattisgarh',
    },
    significanceTag: {
      hi: 'महत्व: वर्तमान मुख्य आचार्य गद्दी एवं विश्व मुख्यालय',
      pb: 'ਮਹੱਤਵ: ਵਰਤਮਾਨ ਮੁੱਖ ਆਚਾਰੀਆ ਗੱਦੀ ਅਤੇ ਵਿਸ਼ਵ ਹੈੱਡਕੁਆਰਟਰ',
      en: 'Significance: Present Principal Acharya Gaddi & Global Headquarters',
    },
    description: {
      hi: 'सन् १९०३ में १२वें वंशाचार्य पूज्य उग्र नाम साहेब जी द्वारा स्थापित यह पावन धाम वर्तमान में कबीर धर्मदास वंशावली का सर्वोच्च केंद्र है। वर्तमान में १५वें वंशाचार्य पंथ श्री हुजूर प्रकाशमुनि नाम साहेब जी एवं १६वें नवोदित वंशाचार्य पंथ श्री हुजूर उदितमुनि नाम साहेब जी यहीं से विश्वभर में पंथ का संचालन कर रहे हैं। प्रतिवर्ष माघ पूर्णिमा पर यहाँ भव्य अंतर्राष्ट्रीय संत समागम एवं मेला लगता है।',
      pb: 'ਸੰਮਤ/ਸੰਨ ੧੯੦੩ ਵਿੱਚ ੧੨ਵੇਂ ਵੰਸ਼ਾਚਾਰੀਆ ਪੂਜਨੀਕ ਉਗਰ ਨਾਮ ਸਾਹੇਬ ਜੀ ਵੱਲੋਂ ਸਥਾਪਿਤ ਇਹ ਪਾਵਨ ਧਾਮ ਵਰਤਮਾਨ ਵਿੱਚ ਕਬੀਰ ਧਰਮਦਾਸ ਵੰਸ਼ਾਵਲੀ ਦਾ ਸਰਵਉੱਚ ਕੇਂਦਰ ਹੈ। ਵਰਤਮਾਨ ਵਿੱਚ ੧੫ਵੇਂ ਵੰਸ਼ਾਚਾਰੀਆ ਪੰਥ ਸ੍ਰੀ ਹਜ਼ੂਰ ਪ੍ਰਕਾਸ਼ਮੁਨੀ ਨਾਮ ਸਾਹੇਬ ਜੀ ਅਤੇ ੧੬ਵੇਂ ਨਵੋਦਿਤ ਵੰਸ਼ਾਚਾਰੀਆ ਪੰਥ ਸ੍ਰੀ ਹਜ਼ੂਰ ਉਦਿਤਮੁਨੀ ਨਾਮ ਸਾਹੇਬ ਜੀ ਇੱਥੋਂ ਹੀ ਵਿਸ਼ਵ ਭਰ ਵਿੱਚ ਪੰਥ ਦਾ ਸੰਚਾਲਨ ਕਰ ਰਹੇ ਹਨ। ਹਰ ਸਾਲ ਮਾਘ ਪੂਰਨਮਾਸ਼ੀ \'ਤੇ ਇੱਥੇ ਵਿਸ਼ਾਲ ਅੰਤਰਰਾਸ਼ਟਰੀ ਸੰਤ ਸਮਾਗਮ ਅਤੇ ਮੇਲਾ ਲੱਗਦਾ ਹੈ।',
      en: 'Founded in 1903 by the 12th Vanshacharya, Pujya Ugra Naam Saheb Ji, Damakheda is the present supreme headquarters of the Kabir Dharmadas lineage. Currently, the 15th Vanshacharya, Panth Shri Huzoor Prakashmuni Naam Saheb Ji, and the 16th emerging Vanshacharya, Panth Shri Huzoor Uditmuni Naam Saheb Ji, guide the global Panth from here. Every year on Magh Purnima, a grand international Sant Samagam and fair is hosted here.',
    },
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Damakheda+Kabir+Ashram+Chhattisgarh',
  },
];
