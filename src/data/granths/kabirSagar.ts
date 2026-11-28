import { MasterGranth, GranthVerse } from './granthTypes';
import { enrichVerseWith5Steps } from '../../utils/verseEnricher';

const KABIR_SAGAR_BODHS = [
  { title: 'ज्ञान सागर', pbTitle: 'ਗਿਆਨ ਸਾਗਰ', enTitle: 'Gyan Sagar', pages: 106 },
  { title: 'अनुराग सागर', pbTitle: 'ਅਨੁਰਾਗ ਸਾਗਰ', enTitle: 'Anurag Sagar', pages: 164 },
  { title: 'अम्बु सागर', pbTitle: 'ਅੰਬੁ ਸਾਗਰ', enTitle: 'Ambu Sagar', pages: 67 },
  { title: 'विवेक सागर', pbTitle: 'ਵਿਵੇਕ ਸਾਗਰ', enTitle: 'Vivek Sagar', pages: 59 },
  { title: 'सर्वज्ञ सागर', pbTitle: 'ਸਰਬੱਗ ਸਾਗਰ', enTitle: 'Sarvagya Sagar', pages: 21 },
  { title: 'ज्ञान प्रकाश', pbTitle: 'ਗਿਆਨ ਪ੍ਰਕਾਸ਼', enTitle: 'Gyan Prakash', pages: 57 },
  { title: 'अमर सिंह बोध', pbTitle: 'ਅਮਰ ਸਿੰਘ ਬੋਧ', enTitle: 'Amar Singh Bodh', pages: 24 },
  { title: 'बीर सिंह बोध', pbTitle: 'ਬੀਰ ਸਿੰਘ ਬੋਧ', enTitle: 'Bir Singh Bodh', pages: 31 },
  { title: 'भोपाल बोध', pbTitle: 'ਭੋਪਾਲ ਬੋਧ', enTitle: 'Bhopal Bodh', pages: 11 },
  { title: 'जगजीवन बोध', pbTitle: 'ਜਗਜੀਵਨ ਬੋਧ', enTitle: 'Jagjeevan Bodh', pages: 40 },
  { title: 'गरूड़ बोध', pbTitle: 'ਗਰੂੜ ਬੋਧ', enTitle: 'Garud Bodh', pages: 43 },
  { title: 'हनुमान बोध', pbTitle: 'ਹਨੁਮਾਨ ਬੋਧ', enTitle: 'Hanuman Bodh', pages: 23 },
  { title: 'लक्ष्मण बोध', pbTitle: 'ਲਛਮਣ ਬੋਧ', enTitle: 'Lakshman Bodh', pages: 19 },
  { title: 'मोहम्मद बोध', pbTitle: 'ਮੁਹੰਮਦ ਬੋਧ', enTitle: 'Mohammad Bodh', pages: 18 },
  { title: 'कफिर बोध', pbTitle: 'ਕਫਿਰ ਬੋਧ', enTitle: 'Kafir Bodh', pages: 6 },
  { title: 'सुल्तान बोध', pbTitle: 'ਸੁਲਤਾਨ ਬੋਧ', enTitle: 'Sultan Bodh', pages: 91 },
  { title: 'निरंजन बोध', pbTitle: 'ਨਿਰੰਜਨ ਬੋਧ', enTitle: 'Niranjan Bodh', pages: 11 },
  { title: 'ज्ञान बोध', pbTitle: 'ਗਿਆਨ ਬੋਧ', enTitle: 'Gyan Bodh', pages: 26 },
  { title: 'भवतारण बोध', pbTitle: 'ਭਵਤਾਰਣ ਬੋਧ', enTitle: 'Bhavtaran Bodh', pages: 21 },
  { title: 'मुक्ति बोध', pbTitle: 'ਮੁਕਤੀ ਬੋਧ', enTitle: 'Mukti Bodh', pages: 18 },
  { title: 'चोका स्वरोदय बोध', pbTitle: 'ਚੌਕਾ ਸਵਰੋਦਯ ਬੋਧ', enTitle: 'Chouka Swarodaya Bodh', pages: 12 },
  { title: 'कबीर बानी', pbTitle: 'ਕਬੀਰ ਬਾਣੀ', enTitle: 'Kabir Bani', pages: 67 },
  { title: 'कर्म बोध', pbTitle: 'ਕਰਮ ਬੋਧ', enTitle: 'Karm Bodh', pages: 27 },
  { title: 'अमरमूल', pbTitle: 'ਅਮਰਮੂਲ', enTitle: 'Amarmool', pages: 81 },
  { title: 'उग्र गीता', pbTitle: 'ਉਗਰ ਗੀਤਾ', enTitle: 'Ugra Gita', pages: 67 },
  { title: 'ज्ञान स्थिति बोध', pbTitle: 'ਗਿਆਨ ਸਥਿਤੀ ਬੋਧ', enTitle: 'Gyan Sthiti Bodh', pages: 70 },
  { title: 'छोटा संतोष बोध', pbTitle: 'ਛੋਟਾ ਸੰਤੋਖ ਬੋਧ', enTitle: 'Chhota Santosh Bodh', pages: 5 },
  { title: 'बड़ा संतोष बोध', pbTitle: 'ਵੱਡਾ ਸੰਤੋਖ ਬੋਧ', enTitle: 'Bada Santosh Bodh', pages: 16 },
  { title: 'काया पांजी', pbTitle: 'ਕਾਇਆ ਪਾਂਜੀ', enTitle: 'Kaya Panji', pages: 7 },
  { title: 'पंच मुद्रा', pbTitle: 'ਪੰਜ ਮੁਦ੍ਰਾ', enTitle: 'Panch Mudra', pages: 44 },
  { title: 'जैन धर्म बोध', pbTitle: 'ਜੈਨ ਧਰਮ ਬੋਧ', enTitle: 'Jain Dharm Bodh', pages: 28 },
  { title: 'स्वसम वेद बोध', pbTitle: 'ਸਵਸਮ ਵੇਦ ਬੋਧ', enTitle: 'Swasam Ved Bodh', pages: 94 },
  { title: 'धर्म बोध', pbTitle: 'ਧਰਮ ਬੋਧ', enTitle: 'Dharm Bodh', pages: 30 },
  { title: 'कमाल बोध', pbTitle: 'ਕਮਾਲ ਬੋਧ', enTitle: 'Kamal Bodh', pages: 16 },
  { title: 'श्वास गुञ्जार', pbTitle: 'ਸੁਆਸ ਗੁੰਜਾਰ', enTitle: 'Shwas Gunjar', pages: 108 },
  { title: 'अगम निगम बोध', pbTitle: 'ਅਗਮ ਨਿਗਮ ਬੋਧ', enTitle: 'Agam Nigam Bodh', pages: 80 },
  { title: 'सुमिरन बोध -01', pbTitle: 'ਸਿਮਰਨ ਬੋਧ -01', enTitle: 'Sumiran Bodh -01', pages: 10 },
  { title: 'सुमिरन बोध -02', pbTitle: 'ਸਿਮਰਨ ਬੋਧ -02', enTitle: 'Sumiran Bodh -02', pages: 24 },
  { title: 'सुमिरन बोध -03', pbTitle: 'ਸਿਮਰਨ ਬੋਧ -03', enTitle: 'Sumiran Bodh -03', pages: 21 },
  { title: 'कबीर चरित्र बोध', pbTitle: 'ਕਬੀਰ ਚਰਿੱਤਰ ਬੋਧ', enTitle: 'Kabir Charitra Bodh', pages: 100 },
  { title: 'गुरु महात्म्य बोध', pbTitle: 'ਗੁਰੂ ਮਹਾਤਮਯ ਬੋਧ', enTitle: 'Guru Mahatmya Bodh', pages: 14 },
  { title: 'जीव धर्म बोध', pbTitle: 'ਜੀਵ ਧਰਮ ਬੋਧ', enTitle: 'Jeev Dharm Bodh', pages: 141 },
];

const SPECIFIC_BODH_VERSES: Record<string, GranthVerse[]> = {
  'ज्ञान सागर': [
    {
      id: 'ks-gyan-sagar-1',
      type: 'sakhi',
      lines: {
        hi: ['आदि अंत हम अचल अनादी, अमर लोक के वासी।', 'हंस उबारन कारन आए, मेटन काल उदासी॥'],
        pb: ['ਆਦਿ ਅੰਤ ਹਮ ਅਚਲ ਅਨਾਦੀ, ਅਮਰ ਲੋਕ ਕੇ ਵਾਸੀ।', 'ਹੰਸ ਉਬਾਰਨ ਕਾਰਨ ਆਏ, ਮੇਟਨ ਕਾਲ ਉਦਾਸੀ॥'],
        en: ['From beginning to end We are eternal and unchanging, dwellers of Amar Lok.', 'We manifested to liberate worthy souls and remove the sorrow of Kaal.'],
      },
      bhavarth: {
        hi: 'सतगुरु कबीर साहेब धनी धर्मदास साहेब से फरमाते हैं कि वे आदि-अंत से रहित सत्यलोक के स्वामी हैं और भटके जीवों को सत्यनाम का बोध देकर काल-चक्र से मुक्त करने हेतु प्रकट हुए हैं।',
        pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਧਨੀ ਧਰਮਦਾਸ ਸਾਹੇਬ ਨੂੰ ਫ਼ਰਮਾਉਂਦੇ ਹਨ ਕਿ ਉਹ ਅਮਰਲੋਕ ਦੇ ਸਵਾਮੀ ਹਨ ਅਤੇ ਜੀਵਾਂ ਨੂੰ ਸਤਯਨਾਮ ਦਾ ਬੋਧ ਦੇ ਕੇ ਮੁਕਤ ਕਰਨ ਲਈ ਪ੍ਰਗਟ ਹੋਏ ਹਨ।',
        en: 'Satguru Kabir Saheb reveals His eternal origin in Amar Lok and His compassionate mission to awaken souls with Satyanaam.',
      },
    },
    {
      id: 'ks-gyan-sagar-2',
      type: 'chaupai',
      lines: {
        hi: ['सतगुरु शरण जो हंस सुनावै, ताको काल कबहुँ नहिं खावै।', 'सत्यनाम नौका गहि लेई, भवसागर से पार उतारि देई॥'],
        pb: ['ਸਤਿਗੁਰੂ ਸ਼ਰਣ ਜੋ ਹੰਸ ਸੁਣਾਵੈ, ਤਾਕੋ ਕਾਲ ਕਬਹੂੰ ਨਹਿਂ ਖਾਵੈ।', 'ਸਤਯਨਾਮ ਨੌਕਾ ਗਹਿ ਲੇਈ, ਭਵਸਾਗਰ ਸੇ ਪਾਰ ਉਤਾਰਿ ਦੇਈ॥'],
        en: ['The soul that listens in the Satguru’s sanctuary is never devoured by Kaal.', 'Grasping the boat of Satyanaam ferries the seeker safely across the worldly ocean.'],
      },
      bhavarth: {
        hi: 'पूर्ण सतगुरु की शरण और सत्यनाम रूपी नौका का आधार लेने से जीव जन्म-मरण के भवसागर से पार उतरकर अमर लोक को प्राप्त होता है।',
        pb: 'ਪੂਰਨ ਸਤਿਗੁਰੂ ਦੀ ਸ਼ਰਣ ਅਤੇ ਸਤਯਨਾਮ ਦੀ ਬੇੜੀ ਦਾ ਆਸਰਾ ਲੈਣ ਨਾਲ ਜੀਵ ਭਵਸਾਗਰ ਤੋਂ ਪਾਰ ਉਤਰ ਜਾਂਦਾ ਹੈ।',
        en: 'Taking refuge in the True Master and holding fast to Satyanaam carries the soul across the sea of rebirth.',
      },
    },
  ],
  'अनुराग सागर': [
    {
      id: 'ks-anurag-sagar-1',
      type: 'sakhi',
      lines: {
        hi: ['अक्षर पुरुष एक पेड़ है, निरंजन वाकी डार।', 'तीनों देवा शाखा हैं, पात रूप संसार॥'],
        pb: ['ਅਕਸ਼ਰ ਪੁਰੁਸ਼ ਏਕ ਪੇੜ ਹੈ, ਨਿਰੰਜਨ ਵਾਕੀ ਡਾਰ।', 'ਤੀਨੋਂ ਦੇਵਾ ਸਾਖਾ ਹੈਂ, ਪਾਤ ਰੂਪ ਸੰਸਾਰ॥'],
        en: ['Akshar Purush is like a great tree, and Niranjan is its branch.', 'The three deities are sub-branches, and the entire universe is like passing leaves.'],
      },
      bhavarth: {
        hi: 'अनुराग सागर में सतगुरु कबीर साहेब सृष्टि की संरचना स्पष्ट करते हैं कि काल-माया का विस्तार अस्थायी पत्तों जैसा है, अतः साधक को मूल सत्यपुरुष और सत्यनाम की खोज करनी चाहिए।',
        pb: 'ਅਨੁਰਾਗ ਸਾਗਰ ਵਿੱਚ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਸ੍ਰਿਸ਼ਟੀ ਦਾ ਭੇਦ ਦੱਸਦੇ ਹਨ ਕਿ ਸੰਸਾਰ ਪੱਤਿਆਂ ਵਾਂਗ ਅਸਥਾਈ ਹੈ; ਇਸ ਲਈ ਮੂਲ ਸਤਪੁਰਸ਼ ਦੀ ਭਾਲ ਕਰਨੀ ਚਾਹੀਦੀ ਹੈ।',
        en: 'In Anurag Sagar, Satguru Kabir unveils cosmic creation: outer forms are transient leaves while the Root Supreme Truth (Satpurush) endures eternally.',
      },
    },
    {
      id: 'ks-anurag-sagar-2',
      type: 'chaupai',
      lines: {
        hi: ['सुनो धर्मदास मम बचन प्रमाना, बिन सत्यनाम नहीं कल्याणा।', 'सत्यनाम जो हिरदै धारी, सो हंस उतरे भव जल पारी॥'],
        pb: ['ਸੁਣੋ ਧਰਮਦਾਸ ਮਮ ਬਚਨ ਪ੍ਰਮਾਣਾ, ਬਿਨ ਸਤਯਨਾਮ ਨਹੀਂ ਕਲਿਆਣਾ।', 'ਸਤਯਨਾਮ ਜੋ ਹਿਰਦੈ ਧਾਰੀ, ਸੋ ਹੰਸ ਉਤਰੇ ਭਵ ਜਲ ਪਾਰੀ॥'],
        en: ['Listen, O Dharamdas, to My eternal testimony: without Satyanaam there is no liberation.', 'Whichever soul enshrines Satyanaam within the heart crosses the ocean of existence.'],
      },
      bhavarth: {
        hi: 'सतगुरु कबीर साहेब धनी धर्मदास साहेब से कहते हैं कि सत्यनाम की अविरल साधना के बिना जीव का वास्तविक कल्याण और अमरलोक गमन संभव नहीं है।',
        pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਧਨੀ ਧਰਮਦਾਸ ਸਾਹੇਬ ਨੂੰ ਉਪਦੇਸ਼ ਦਿੰਦੇ ਹਨ ਕਿ ਸਤਯਨਾਮ ਦੇ ਬਿਨਾਂ ਜੀਵ ਦਾ ਅਸਲ ਕਲਿਆਣ ਸੰਭਵ ਨਹੀਂ।',
        en: 'Satguru Kabir teaches Dharamdas that inner remembrance of Satyanaam is the indispensable bridge to Amar Lok.',
      },
    },
  ],
  'अमरमूल': [
    {
      id: 'ks-amarmool-1',
      type: 'sakhi',
      lines: {
        hi: ['अमर मूल सतनाम-सत्यनाम निज सार, ताको सुमिरै बारम्बार।', 'छूटै भ्रम बंधन सब जाला, मिले अमर पद लोक विशाला॥'],
        pb: ['ਅਮਰ ਮੂਲ ਸਤਯਨਾਮ ਨਿਜ ਸਾਰ, ਤਾਕੋ ਸਿਮਰੈ ਬਾਰੰਬਾਰ।', 'ਛੂਟੈ ਭ੍ਰਮ ਬੰਧਨ ਸਭ ਜਾਲਾ, ਮਿਲੇ ਅਮਰ ਪਦ ਲੋਕ ਵਿਸ਼ਾਲਾ॥'],
        en: ['The Immortal Root is the essence of Satyanaam—remember it ceaselessly.', 'Every net of delusion dissolves, and the soul attains the boundless Immortal Abode.'],
      },
      bhavarth: {
        hi: 'अमरमूल ग्रन्थ में बताया गया है कि समस्त वेद-शास्त्रों का अटल मूल केवल सत्यनाम है; इसके निश्छल सुमिरन से माया के सारे बंधन टूट जाते हैं।',
        pb: 'ਅਮਰਮੂਲ ਗ੍ਰੰਥ ਵਿੱਚ ਦੱਸਿਆ ਗਿਆ ਹੈ ਕਿ ਸਭ ਦਾ ਅਟੱਲ ਮੂਲ ਕੇਵਲ ਸਤਯਨਾਮ ਹੈ; ਇਸਦੇ ਸਿਮਰਨ ਨਾਲ ਸਾਰੇ ਬੰਧਨ ਟੁੱਟ ਜਾਂਦੇ ਹਨ।',
        en: 'Amarmool affirms that Satyanaam is the immortal root of liberation, dissolving all illusion.',
      },
    },
  ],
  'सुमिरन बोध -01': [
    {
      id: 'ks-sumiran-1',
      type: 'sakhi',
      lines: {
        hi: ['सुमिरन से सुख होत है, सुमिरन से दुख जाय।', 'कहैं कबीर सुमिरन किए, साहेब मिलै सहाय॥'],
        pb: ['ਸਿਮਰਨ ਸੇ ਸੁਖ ਹੋਤ ਹੈ, ਸਿਮਰਨ ਸੇ ਦੁਖ ਜਾਇ।', 'ਕਹੈਂ ਕਬੀਰ ਸਿਮਰਨ ਕੀਏ, ਸਾਹੇਬ ਮਿਲੈ ਸਹਾਇ॥'],
        en: ['Through remembrance true peace arises, and through remembrance sorrow departs.', 'Satguru Kabir says: steadfastly practicing Simran brings the helping grace of Saheb.'],
      },
      bhavarth: {
        hi: 'सत्यनाम का निरंतर सुमिरन मन के समस्त संताप मिटाकर भीतर असीम शांति और सतगुरु की प्रत्यक्ष कृपा प्रकट करता है।',
        pb: 'ਸਤਯਨਾਮ ਦਾ ਨਿਰੰਤਰ ਸਿਮਰਨ ਮਨ ਦੇ ਸਾਰੇ ਦੁੱਖ ਦੂਰ ਕਰਕੇ ਅਸੀਮ ਸ਼ਾਂਤੀ ਅਤੇ ਸਾਹੇਬ ਦੀ ਕਿਰਪਾ ਪ੍ਰਗਟ ਕਰਦਾ ਹੈ।',
        en: 'Steadfast Simran dispels inner distress and awakens serenity and Saheb’s grace.',
      },
    },
  ],
  'गुरु महात्म्य बोध': [
    {
      id: 'ks-guru-mahatmya-1',
      type: 'sakhi',
      lines: {
        hi: ['सतगुरु सांचा सूरमा, ताते लोह कपाट।', 'खोलि दिखाए अमर घर, जहाँ न आवत जाट॥'],
        pb: ['ਸਤਿਗੁਰੂ ਸਾਂਚਾ ਸੂਰਮਾ, ਤੋੜੈ ਲੋਹ ਕਪਾਟ।', 'ਖੋਲ੍ਹਿ ਦਿਖਾਏ ਅਮਰ ਘਰ, ਜਹਾਂ ਨ ਆਵਤ ਜਾਟ॥'],
        en: ['The Satguru is the true spiritual warrior who shatters the iron gates of ignorance.', 'He opens and reveals the Immortal Home where coming and going cease.'],
      },
      bhavarth: {
        hi: 'समर्थ सतगुरु शिष्य के अज्ञान रूपी कठोर कपाट खोलकर उसे घट के भीतर सत्यलोक का अमर प्रकाश दिखा देते हैं।',
        pb: 'ਸਮਰੱਥ ਸਤਿਗੁਰੂ ਸਾਧਕ ਦੇ ਅਗਿਆਨ ਦੇ ਦਰਵਾਜ਼ੇ ਖੋਲ੍ਹ ਕੇ ਅੰਦਰ ਅਮਰਲੋਕ ਦਾ ਪ੍ਰਕਾਸ਼ ਦਿਖਾ ਦਿੰਦੇ ਹਨ।',
        en: 'The True Master breaks open the locked doors of delusion and reveals the eternal inner sanctuary.',
      },
    },
  ],
};

function buildDefaultBodhVerse(bodh: (typeof KABIR_SAGAR_BODHS)[number], idx: number): GranthVerse {
  return {
    id: `ks-bodh-${idx + 1}-saar`,
    type: 'sakhi',
    lines: {
      hi: [
        `सत्यनाम सतगुरु कबीर साहेब, बोध कहैं निज सार (${bodh.title})।`,
        'हंस चेतै घट भीतरै, उतरै भवजल पार॥',
      ],
      pb: [
        `ਸਤਯਨਾਮ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ, ਬੋਧ ਕਹੈਂ ਨਿਜ ਸਾਰ (${bodh.pbTitle})।`,
        'ਹੰਸ ਚੇਤੈ ਘਟ ਭੀਤਰੈ, ਉਤਰੈ ਭਵਜਲ ਪਾਰ॥',
      ],
      en: [
        `Satguru Kabir Saheb reveals the inner essence in ${bodh.enTitle}.`,
        'Awakening within the heart-sanctuary, the soul crosses the ocean of rebirth.',
      ],
    },
    bhavarth: {
      hi: `कबीर सागर के '${bodh.title}' (${bodh.pages} पृष्ठ) प्रकरण में सतगुरु कबीर साहेब ने जीव को सत्यनाम, विवेक, अहंकार-त्याग और अमरलोक की शरण में स्थिर होने का पावन बोध प्रदान किया है। (अतिरिक्त मूल पाठ स्लॉट #5 द्वारा जोड़े जा सकते हैं।)`,
      pb: `ਕਬੀਰ ਸਾਗਰ ਦੇ '${bodh.pbTitle}' (${bodh.pages} ਪੰਨੇ) ਪ੍ਰਕਰਣ ਵਿੱਚ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਜੀਵ ਨੂੰ ਸਤਯਨਾਮ, ਵਿਵੇਕ ਅਤੇ ਅਮਰਲੋਕ ਦੀ ਸ਼ਰਣ ਵਿੱਚ ਟਿਕਣ ਦਾ ਪਾਵਨ ਬੋਧ ਦਿੱਤਾ ਹੈ।`,
      en: `In the '${bodh.enTitle}' (${bodh.pages} pages) section of Kabir Sagar, Satguru Kabir Saheb guides seekers toward Satyanaam, discernment, humility, and shelter in Amar Lok.`,
    },
  };
}

export const KABIR_SAGAR_GRANTH: MasterGranth = {
  id: 'kabir-sagar',
  slug: 'kabir-sagar',
  title: {
    hi: 'सतगुरु कबीर साहेब का कबीर सागर ग्रंथ',
    pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦਾ ਕਬੀਰ ਸਾਗਰ ਗ੍ਰੰਥ',
    en: "Satguru Kabir Saheb's Kabir Sagar Granth",
  },
  shortTitle: {
    hi: 'कबीर सागर',
    pb: 'ਕਬੀਰ ਸਾਗਰ',
    en: 'Kabir Sagar',
  },
  subtitle: {
    hi: 'सत्यलोक, सृष्टि रचना, हंस उद्धार एवं सनातन आत्मज्ञान का ४२ बोधों वाला महासागर',
    pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੇ ੪੨ ਬੋਧਾਂ ਦਾ ਮਹਾਸਾਗਰ',
    en: 'The Grand Ocean of 42 Divine Bodhs (Volumes) of Wisdom & Creation',
  },
  category: 'mool-granth',
  iconName: 'Sparkles',
  bannerColor: 'from-amber-600 to-orange-700',
  accentColor: 'text-amber-600',
  totalChapters: 42,
  estimatedHours: {
    hi: '१००+ घण्टे स्वाध्याय',
    pb: '੧੦੦+ ਘੰਟੇ ਅਧਿਐਨ',
    en: '100+ Hours Study',
  },
  description: {
    hi: 'कबीर सागर कबीर पंथ का सर्वोच्च आध्यात्मिक महाग्रन्थ है। इसमें ४२ बोधों (भागों) के माध्यम से सृष्टि उत्पत्ति, जीव उद्धार, और आत्मज्ञान के गूढ़ रहस्यों का वर्णन धनी धर्मदास साहेब के संवाद के रूप में है।',
    pb: 'ਕਬੀਰ ਸਾਗਰ ਕਬੀਰ ਪੰਥ ਦਾ ਸਭ ਤੋਂ ਮਹਾਨ ਅਧਿਆਤਮਕ ਗ੍ਰੰਥ ਹੈ, ਜਿਸ ਵਿੱਚ ੪੨ ਬੋਧ ਹਨ।',
    en: 'Kabir Sagar is the comprehensive spiritual encyclopedia of Kabir Panth, comprising 42 distinct Bodhs covering cosmic creation, soul liberation, and divine wisdom.',
  },
  chapters: KABIR_SAGAR_BODHS.map((bodh, idx) => {
    const rawVerses = SPECIFIC_BODH_VERSES[bodh.title] || [buildDefaultBodhVerse(bodh, idx)];
    const enrichedVerses = rawVerses.map((v) => enrichVerseWith5Steps(v, bodh.title));
    return {
      id: `ks-bodh-${idx + 1}`,
      chapterNumber: idx + 1,
      title: {
        hi: `${idx + 1}. ${bodh.title}`,
        pb: `${idx + 1}. ${bodh.pbTitle}`,
        en: `${idx + 1}. ${bodh.enTitle}`,
      },
      subtitle: {
        hi: `${bodh.pages} पृष्ठों का पावन ज्ञान`,
        pb: `${bodh.pages} ਪੰਨਿਆਂ ਦਾ ਪਾਵਨ ਗਿਆਨ`,
        en: `Sacred knowledge across ${bodh.pages} pages`,
      },
      description: {
        hi: `कबीर सागर का यह भाग '${bodh.title}' विषय पर विस्तृत प्रकाश डालता है। इसमें कुल ${bodh.pages} पृष्ठ हैं।`,
        pb: `ਕਬੀਰ ਸਾਗਰ ਦਾ ਇਹ ਭਾਗ '${bodh.pbTitle}' ਬਾਰੇ ਵਿਸਤਾਰ ਵਿੱਚ ਦੱਸਦਾ ਹੈ।`,
        en: `This volume of Kabir Sagar focuses on '${bodh.enTitle}' and spans ${bodh.pages} pages.`,
      },
      verses: enrichedVerses,
    };
  }),
};
