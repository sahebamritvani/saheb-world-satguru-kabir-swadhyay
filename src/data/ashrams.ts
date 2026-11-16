import { Language } from '../types';

export interface AshramLocation {
  id: string;
  name: {
    hi: string;
    pb: string;
    en: string;
  };
  address: {
    hi: string;
    pb: string;
    en: string;
  };
  significance: {
    hi: string;
    pb: string;
    en: string;
  };
  nearestTransport: {
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
      hi: 'श्री कबीर प्राकट्य धाम (लहरतारा)',
      pb: 'ਸ੍ਰੀ ਕਬੀਰ ਪ੍ਰਗਟ ਧਾਮ (ਲਹਿਰਤਾਰਾ)',
      en: 'Sri Kabir Prakatya Dham (Lahartara)',
    },
    address: {
      hi: 'लहरतारा कबीर आश्रम व लहरतारा तालाब, वाराणसी (काशी), उत्तर प्रदेश, भारत',
      pb: 'ਲਹਿਰਤਾਰਾ ਕਬੀਰ ਆਸ਼ਰਮ ਤੇ ਲਹਿਰਤਾਰਾ ਤਲਾਬ, ਵਾਰਾਣਸੀ (ਕਾਸ਼ੀ), ਉੱਤਰ ਪ੍ਰਦੇਸ਼, ਭਾਰਤ',
      en: 'Lahartara Kabir Ashram & Lahartara Pond, Varanasi (Kashi), Uttar Pradesh, India',
    },
    significance: {
      hi: 'संवत् १४५५ (सन १३९८) में सतगुरु कबीर साहेब इसी लहरतारा सरोवर में कमल पुष्प पर अवतरित/प्रकट हुए थे।',
      pb: 'ਸੰਵਤ ੧੪੫੫ (੧੩੯੮ ਈ.) ਵਿੱਚ ਸਤਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਇਸੇ ਲਹਿਰਤਾਰਾ ਸਰੋਵਰ ਵਿੱਚ ਕੰਵਲ ਫੁੱਲ ਉੱਤੇ ਪ੍ਰਗਟ ਹੋਏ ਸਨ।',
      en: 'In 1398 CE, Satguru Kabir Saheb manifested upon a lotus flower in this very Lahartara pond.',
    },
    nearestTransport: {
      hi: 'वाराणसी जंक्शन (BSB) रेलवे स्टेशन से लगभग ३ किमी.',
      pb: 'ਵਾਰਾਣਸੀ ਜੰਕਸ਼ਨ (BSB) ਰੇਲਵੇ ਸਟੇਸ਼ਨ ਤੋਂ ਲਗਭਗ ੩ ਕਿਲੋਮੀਟਰ',
      en: 'Approx 3 km from Varanasi Junction (BSB) Railway Station.',
    },
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Lahartara+Kabir+Ashram+Varanasi',
  },
  {
    id: 'kabir-chaura',
    type: 'historical',
    name: {
      hi: 'श्री कबीर चौरा मठ (मूल गादी)',
      pb: 'ਸ੍ਰੀ ਕਬੀਰ ਚੌਰਾ ਮੱਠ (ਮੂਲ ਗਾਦੀ)',
      en: 'Sri Kabir Chaura Math (Mool Gaadi)',
    },
    address: {
      hi: 'कबीर चौरा मठ, कबीर चौरा मार्ग, वाराणसी (काशी), उत्तर प्रदेश',
      pb: 'ਕਬੀਰ ਚੌਰਾ ਮੱਠ, ਕਬੀਰ ਚੌਰਾ ਮਾਰਗ, ਵਾਰਾਣਸੀ (ਕਾਸ਼ੀ), ਉੱਤਰ ਪ੍ਰਦੇਸ਼',
      en: 'Kabir Chaura Math, Kabir Chaura Road, Varanasi (Kashi), Uttar Pradesh',
    },
    significance: {
      hi: 'यह साहेब कबीर जी का मुख्य कार्यक्षेत्र और लीला स्थल रहा है, जहाँ उन्होंने अपना सम्पूर्ण जीवन बिताया। ५०० वर्ष प्राचीन ऐतिहासिक गद्दी, नीरू टीला व ऐतिहासिक संग्रहालय यहाँ स्थित है।',
      pb: 'ਇਹ ਸਾਹੇਬ ਕਬੀਰ ਜੀ ਦਾ ਮੁੱਖ ਕਾਰਜ ਖੇਤਰ ਤੇ ਲੀਲ੍ਹਾ ਸਥਾਨ ਰਿਹਾ ਹੈ, ਜਿੱਥੇ ਉਨ੍ਹਾਂ ਨੇ ਆਪਣਾ ਸਾਰਾ ਜੀਵਨ ਬਿਤਾਇਆ।',
      en: 'The primary workplace and residence of Kabir Saheb. Home to the 500-year-old seat, Neeru Teela, and a historical museum.',
    },
    nearestTransport: {
      hi: 'वाराणसी सिटी रेलवे स्टेशन से २ किमी, वाराणसी जंक्शन से ४ किमी.',
      pb: 'ਵਾਰਾਣਸੀ ਸਿਟੀ ਰੇਲਵੇ ਸਟੇਸ਼ਨ ਤੋਂ ੨ ਕਿਲੋਮੀਟਰ, ਵਾਰਾਣਸੀ ਜੰਕਸ਼ਨ ਤੋਂ ੪ ਕਿਲੋਮੀਟਰ',
      en: '2 km from Varanasi City Station, 4 km from Varanasi Junction.',
    },
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kabir+Chaura+Math+Varanasi',
  },
  {
    id: 'maghar',
    type: 'historical',
    name: {
      hi: 'सतगुरु कबीर समाधि एवं मज़ार धाम (मगहर)',
      pb: 'ਸਤਗੁਰੂ ਕਬੀਰ ਸਮਾਧੀ ਤੇ ਮਜ਼ਾਰ ਧਾਮ (ਮਗਹਰ)',
      en: 'Satguru Kabir Samadhi & Mazar Dham (Maghar)',
    },
    address: {
      hi: 'कबीर समाधि व मज़ार धाम, मगहर, ज़िला - संत कबीर नगर, उत्तर प्रदेश',
      pb: 'ਕਬੀਰ ਸਮਾਧੀ ਤੇ ਮਜ਼ਾਰ ਧਾਮ, ਮਗਹਰ, ਜ਼ਿਲ੍ਹਾ - ਸੰਤ ਕਬੀਰ ਨਗਰ, ਉੱਤਰ ਪ੍ਰਦੇਸ਼',
      en: 'Kabir Samadhi & Mazar Dham, Maghar, Dist - Sant Kabir Nagar, Uttar Pradesh',
    },
    significance: {
      hi: 'जहाँ सतगुरु साहेब ने अपना भौतिक शरीर त्याग कर हिंदू-मुस्लिम एकता का अलौकिक संदेश दिया था। यहाँ हिंदू समाधि व मुस्लिम मज़ार एक ही परिसर में स्थित हैं।',
      pb: 'ਜਿੱਥੇ ਸਤਗੁਰੂ ਸਾਹੇਬ ਨੇ ਆਪਣਾ ਸਰੀਰ ਤਿਆਗ ਕੇ ਹਿੰਦੂ-ਮੁਸਲਿਮ ਏਕਤਾ ਦਾ ਸੰਦੇਸ਼ ਦਿੱਤਾ ਸੀ।',
      en: 'The site where Kabir Saheb departed from the material world, leaving behind fragrant flowers for both Hindus and Muslims.',
    },
    nearestTransport: {
      hi: 'मगहर रेलवे स्टेशन (MHH) से १ किमी, गोरखपुर एयरपोर्ट से ३५ किमी.',
      pb: 'ਮਗਹਰ ਰੇਲਵੇ ਸਟੇਸ਼ਨ (MHH) ਤੋਂ ੧ ਕਿਲੋਮੀਟਰ, ਗੋਰਖਪੁਰ ਏਅਰਪੋਰਟ ਤੋਂ ੩੫ ਕਿਲੋਮੀਟਰ',
      en: '1 km from Maghar Station (MHH), 35 km from Gorakhpur Airport.',
    },
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kabir+Samadhi+and+Mazar+Maghar',
  },
  {
    id: 'damakheda',
    type: 'historical',
    name: {
      hi: 'कबीर धर्मनगर — दामाखेड़ा धाम',
      pb: 'ਕਬੀਰ ਧਰਮਨਗਰ — ਦਾਮਾਖੇੜਾ ਧਾਮ',
      en: 'Kabir Dharamnagar — Damakheda Dham',
    },
    address: {
      hi: 'दामाखेड़ा धाम, रायपुर-बिलासपुर मार्ग, ज़िला - बलौदाबाजार-भाटापारा, छत्तीसगढ़',
      pb: 'ਦਾਮਾਖੇੜਾ ਧਾਮ, ਰਾਇਪੁਰ-ਬਿਲਾਸਪੁਰ ਮਾਰਗ, ਜ਼ਿਲ੍ਹਾ - ਬਲੌਦਾਬਾਜ਼ਾਰ-ਭਾਟਾਪਾਰਾ, ਛੱਤੀਸਗੜ੍ਹ',
      en: 'Damakheda Dham, Raipur-Bilaspur Road, Dist - Balodabazar-Bhatapara, Chhattisgarh',
    },
    significance: {
      hi: 'कबीर पंथ की वंश परंपरा की प्रमुख वंशावली गद्दी। यहाँ वर्ष भर सत्संग समागम होते रहते हैं।',
      pb: 'ਕਬੀਰ ਪੰਥ ਦੀ ਵੰਸ਼ ਪਰੰਪਰਾ ਦੀ ਮੁੱਖ ਗੱਦੀ। ਇੱਥੇ ਸਾਰਾ ਸਾਲ ਸਤਸੰਗ ਸਮਾਗਮ ਹੁੰਦੇ ਹਨ।',
      en: 'The primary seat of the lineage tradition in Kabir Panth. A major center for spiritual congregations.',
    },
    nearestTransport: {
      hi: 'रायपुर एयरपोर्ट (RPR) से ७० किमी, भाटापारा रेलवे स्टेशन से ४० किमी.',
      pb: 'ਰਾਇਪੁਰ ਏਅਰਪੋਰਟ (RPR) ਤੋਂ ੭੦ ਕਿਲੋਮੀਟਰ, ਭਾਟਾਪਾਰਾ ਰੇਲਵੇ ਸਟੇਸ਼ਨ ਤੋਂ ੪੦ ਕਿਲੋਮੀਟਰ',
      en: '70 km from Raipur Airport (RPR), 40 km from Bhatapara Station.',
    },
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Damakheda+Kabir+Ashram+Chhattisgarh',
  },
];
