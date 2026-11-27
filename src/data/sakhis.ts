import { Sakhi } from '../types';
import { sanitizeSakhi } from '../utils/textSanitizer';
import { SAKHIS_BATCH_1 } from './sakhisBatch1';
import { SAKHIS_BATCH_2 } from './sakhisBatch2';
import { SAKHIS_BATCH_3 } from './sakhisBatch3';
import { SAKHIS_BATCH_4 } from './sakhisBatch4';
import { SAKHIS_BATCH_5 } from './sakhisBatch5';
import { SAKHIS_BATCH_6 } from './sakhisBatch6';
import { SAKHIS_BATCH_7 } from './sakhisBatch7';
import { SAKHIS_BATCH_8 } from './sakhisBatch8';
import { SAKHIS_BATCH_9 } from './sakhisBatch9';
import { SAKHIS_BATCH_10 } from './sakhisBatch10';
import { SAKHIS_BATCH_11 } from './sakhisBatch11';
import { SAKHIS_BATCH_12 } from './sakhisBatch12';
import { SAKHIS_BATCH_13 } from './sakhisBatch13';
import { SAKHIS_BATCH_14 } from './sakhisBatch14';
import { SAKHIS_BATCH_15 } from './sakhisBatch15';
import { SAKHIS_BATCH_16 } from './sakhisBatch16';
import { SAKHIS_BATCH_17 } from './sakhisBatch17';
import { SAKHIS_BATCH_18 } from './sakhisBatch18';
import { SAKHIS_BATCH_19 } from './sakhisBatch19';
import { SAKHIS_BATCH_20 } from './sakhisBatch20';
import { SAKHIS_BATCH_21 } from './sakhisBatch21';
import { SAKHIS_BATCH_22 } from './sakhisBatch22';
import { SAKHIS_BATCH_23 } from './sakhisBatch23';
import { SAKHIS_BATCH_24 } from './sakhisBatch24';
import { SAKHIS_BATCH_25 } from './sakhisBatch25';
import { SAKHIS_BATCH_26 } from './sakhisBatch26';
import { SAKHIS_BATCH_27 } from './sakhisBatch27';
import { SAKHIS_BATCH_28 } from './sakhisBatch28';
import { SAKHIS_BATCH_29 } from './sakhisBatch29';
import { SAKHIS_BATCH_30 } from './sakhisBatch30';
import { SAKHIS_BATCH_31 } from './sakhisBatch31';
import { SAKHIS_BATCH_32 } from './sakhisBatch32';
import { SAKHIS_BATCH_33 } from './sakhisBatch33';
import { SAKHIS_BATCH_34 } from './sakhisBatch34';
import { SAKHIS_BATCH_35 } from './sakhisBatch35';
import { SAKHIS_BATCH_36 } from './sakhisBatch36';
import { SAKHIS_BATCH_37 } from './sakhisBatch37';
import { SAKHIS_BATCH_38 } from './sakhisBatch38';
import { SAKHIS_BATCH_39 } from './sakhisBatch39';
import { SAKHIS_SHABD_KO_ANG } from './sakhisShabdKoAng';
import { SAKHIS_JEEVAT_MRITAK_KO_ANG } from './sakhisJeevatMritakKoAng';
import { SAKHIS_KAAL_KO_ANG } from './sakhisKaalKoAng';
import { SAKHIS_SWAARATH_KO_ANG } from './sakhisSwaarathKoAng';
import { SAKHIS_PARMAARTH_KO_ANG } from './sakhisParmaarthKoAng';
import { SAKHIS_MAN_KO_ANG } from './sakhisManKoAng';
import { SAKHIS_MAYA_KO_ANG } from './sakhisMayaKoAng';
import { SAKHIS_MOH_KO_ANG } from './sakhisMohKoAng';
import { SAKHIS_KAAM_KO_ANG } from './sakhisKaamKoAng';
import { SAKHIS_KRODH_KO_ANG } from './sakhisKrodhKoAng';
import { SAKHIS_LOBH_KO_ANG } from './sakhisLobhKoAng';
import { SAKHIS_MAD_KO_ANG } from './sakhisMadKoAng';
import { SAKHIS_MAAN_KO_ANG } from './sakhisMaanKoAng';
import { SAKHIS_NINDA_KO_ANG } from './sakhisNindaKoAng';
import { SAKHIS_KATHANI_KO_ANG } from './sakhisKathaniKoAng';
import { SAKHIS_KARANI_KO_ANG } from './sakhisKaraniKoAng';
import { SAKHIS_KRAM_KO_ANG } from './sakhisKramKoAng';
import { SAKHIS_BHRAM_VIDHVANS_KO_ANG } from './sakhisBhramVidhvansKoAng';
import { SAKHIS_UPDESH_KO_ANG } from './sakhisUpdeshKoAng';
import { SAKHIS_DAYA_KO_ANG } from './sakhisDayaKoAng';
import { SAKHIS_DEENTA_KO_ANG } from './sakhisDeentaKoAng';
import { SAKHIS_SAANCH_KO_ANG } from './sakhisSaanchKoAng';
import { SAKHIS_PRABHAT_SANDHYA } from './sakhisPrabhatSandhya';
import { SAKHIS_GYAN_GUDRI } from './sakhisGyanGudri';
import { SAKHIS_ARJINAMA } from './sakhisArjinama';
import { SAKHIS_AARTI } from './sakhisAarti';

const INITIAL_SAKHIS: Sakhi[] = [
  {
    id: 'sakhi-1',
    number: 1,
    grantha: 'Sakhi Sangrah',
    category: 'guru-mahima',
    categoryTitle: {
      hi: 'गुरु महिमा अंग',
      pb: 'ਗੁਰੂ ਮਹਿਮਾ ਅੰਗ',
      en: 'Glory of Satguru (Guru Mahima)',
    },
    text: {
      hi: 'गुरु गोविंद दोऊ खड़े, काके लागूं पाँय ।\nबलिहारी गुरु आपने, गोविंद दियो बताय ॥',
      pb: 'ਗੁਰੂ ਗੋਵਿੰਦ ਦੋਊ ਖੜੇ, ਕਾਕੇ ਲਾਗੂੰ ਪਾਂਯ ।\nਬਲਿਹਾਰੀ ਗੁਰੂ ਆਪਨੇ, ਗੋਵਿੰਦ ਦੀਓ ਬਤਾਯ ॥',
      en: 'Guru Govind do-oo khade, kaake laagun paan-y |\nBalihari Guru aapne, Govind diyo bataay ||',
    },
    transliteration: 'Guru Govinda do-u khade, kake lagu paye. Balihari Guru aapne, Govind diyo bataye.',
    bhavarth: {
      hi: 'सतगुरु कबीर साहेब फरमाते हैं कि जब मेरे समक्ष गुरु और ईश्वर (गोविंद) दोनों साक्षात प्रकट खड़े हों, तो मेरे मन में संशय हुआ कि पहले किसके चरण स्पर्श करूँ? तब विवेक जागा कि मैं अपने सतगुरु पर न्योछावर हूँ, क्योंकि यदि सतगुरु कृपा न करते, तो मुझे ईश्वर की पहचान और उनका बोध कभी प्राप्त न होता। अतः गुरु का स्थान सर्वोपरि है।',
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ ਕਿ ਜੇਕਰ ਮੇਰੇ ਸਨਮੁੱਖ ਗੁਰੂ ਅਤੇ ਪ੍ਰਮਾਤਮਾ (ਗੋਵਿੰਦ) ਦੋਵੇਂ ਖੜ੍ਹੇ ਹੋਣ, ਤਾਂ ਮੈਂ ਪਹਿਲਾਂ ਕਿਸ ਦੇ ਚਰਨ ਛੋਹਾਂ? ਅੰਤ ਵਿੱਚ ਮੈਂ ਆਪਣੇ ਸਤਿਗੁਰੂ ਅੱਗੇ ਸਿਰ ਝੁਕਾਉਂਦਾ ਹਾਂ, ਕਿਉਂਕਿ ਸਤਿਗੁਰੂ ਜੀ ਦੀ ਬਖਸ਼ਿਸ਼ ਸਦਕਾ ਹੀ ਮੈਨੂੰ ਪ੍ਰਮਾਤਮਾ ਦਾ ਗਿਆਨ ਅਤੇ ਦਰਸ਼ਨ ਨਸੀਬ ਹੋਇਆ ਹੈ।',
      en: 'Satguru Kabir Saheb reveals: If both the Satguru and the Supreme Lord stand before me, at whose feet should I bow first? I surrender wholeheartedly unto my Satguru, for without the grace and light of the Guru, I would never have recognized the Divine.',
    },
    wordMeanings: {
      hi: [
        { word: 'गुरु (Guru)', meaning: 'अज्ञान रूपी अंधकार को मिटाकर सत्य का बोध कराने वाले सतगुरु' },
        { word: 'गोविंद (Govind)', meaning: 'परब्रह्म, परमात्मा, सृष्टि के स्वामी' },
        { word: 'दोऊ (Do-oo)', meaning: 'दोनों एक साथ' },
        { word: 'काके (Kaake)', meaning: 'किसके' },
        { word: 'पाँय (Paan-y)', meaning: 'चरणों में' },
        { word: 'बलिहारी (Balihari)', meaning: 'सर्वस्व न्योछावर करना, पूर्ण समर्पण' },
        { word: 'बताय (Bataay)', meaning: 'सत्य पथ का मार्ग दिखाया' },
      ],
      pb: [
        { word: 'ਗੁਰੂ (Guru)', meaning: 'ਅਗਿਆਨਤਾ ਦਾ ਹਨੇਰਾ ਦੂਰ ਕਰਕੇ ਸੱਚ ਦਰਸਾਉਣ ਵਾਲੇ' },
        { word: 'ਗੋਵਿੰਦ (Govind)', meaning: 'ਸੱਚਾ ਪ੍ਰਮਾਤਮਾ, ਕਰਤਾਰ' },
        { word: 'ਦੋਊ (Do-oo)', meaning: 'ਦੋਵੇਂ ਜਾਣੇ' },
        { word: 'ਕਾਕੇ (Kaake)', meaning: 'ਕਿਸ ਦੇ' },
        { word: 'ਪਾਂਯ (Paan-y)', meaning: 'ਚਰਨਾਂ ਉੱਤੇ' },
        { word: 'ਬਲਿਹਾਰੀ (Balihari)', meaning: 'ਕੁਰਬਾਨ ਜਾਣਾ, ਪੂਰਨ ਸਮਰਪਣ' },
        { word: 'ਬਤਾਯ (Bataay)', meaning: 'ਪ੍ਰਮਾਤਮਾ ਦੀ ਸੋਝੀ ਬਖਸ਼ੀ' },
      ],
      en: [
        { word: 'Guru', meaning: 'The enlightened Master who dispels spiritual ignorance' },
        { word: 'Govind', meaning: 'The Supreme Divine Being, the Formless Lord' },
        { word: 'Do-oo', meaning: 'Both standing together' },
        { word: 'Kaake', meaning: 'Unto whom' },
        { word: 'Paan-y', meaning: 'Sacred feet' },
        { word: 'Balihari', meaning: 'Utter and grateful surrender' },
        { word: 'Bataay', meaning: 'Revealed and illuminated the path' },
      ],
    },
    contemplation: {
      hi: 'क्या मेरे जीवन में गुरु के ज्ञान और विवेक को सांसारिक इच्छाओं व अहंकार से ऊपर सर्वोच्च स्थान प्राप्त है?',
      pb: 'ਕੀ ਮੇਰੇ ਜੀਵਨ ਵਿੱਚ ਗੁਰੂ ਜੀ ਦੇ ਗਿਆਨ ਤੇ ਸਿੱਖਿਆਵਾਂ ਨੂੰ ਮੇਰੇ ਹੰਕਾਰ ਨਾਲੋਂ ਉੱਚਾ ਦਰਜਾ ਹਾਸਿਲ ਹੈ?',
      en: 'In my daily journey, do I truly honor divine guidance and wisdom above my own ego and personal attachments?',
    },
    practicalApplication: {
      hi: 'आज के दिन जो भी शुभ या आध्यात्मिक मार्गदर्शन आपके सतगुरु अथवा श्रेष्ठ संतों से मिला है, उस पर संशय छोड़कर पूर्ण निष्ठा से आचरण करें और मार्गदर्शक के प्रति कृतज्ञता व्यक्त करें।',
      pb: 'ਅੱਜ ਦੇ ਦਿਨ ਗੁਰੂ ਜੀ ਦੀ ਕਿਸੇ ਵੀ ਇੱਕ ਪਾਵਨ ਸਿੱਖਿਆ ਨੂੰ ਆਪਣੇ ਮਨ, ਬੋਲ ਅਤੇ ਰੋਜ਼ਾਨਾ ਵਿਹਾਰ ਵਿੱਚ ਸੱਚੇ ਦਿਲੋਂ ਅਮਲ ਵਿੱਚ ਲਿਆਓ।',
      en: 'Today, practice profound gratitude toward your teachers and spiritual guides, choosing humble understanding over intellectual pride.',
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु कबीर साहेब! आपके पावन वचनों से ही मुझे सत्यनाम का मर्म मिला है। मेरे भीतर का अज्ञान और अहंकार शांत हो, और मेरा हृदय सदा आपके चरणों में समर्पित रहे। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ! ਆਪ ਜੀ ਦੀ ਮਿਹਰ ਨਾਲ ਹੀ ਸਤਯਨਾਮ ਦਾ ਰਸ ਮਿਲਿਆ ਹੈ। ਮੇਰੇ ਅੰਦਰਲਾ ਹੰਕਾਰ ਮਿਟੇ ਤੇ ਮੇਰਾ ਚਿੱਤ ਸਦਾ ਆਪ ਜੀ ਦੇ ਚਰਨਾਂ ਨਾਲ ਜੁੜਿਆ ਰਹੇ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Satguru Kabir Saheb! Through your divine grace alone, the nectar of Satyanaam is revealed. Dissolve my inner ego, and grant me steady shelter in pure awareness. Saheb Bandagi Saheb!',
    },
    contextNote: {
      hi: 'यह साखी सतगुरु कबीर साहेब की गुरु-महिमा का मूल आधार है, जो साधन और साध्य के बीच गुरु की अनिवार्यता सिद्ध करती है।',
      pb: 'ਇਹ ਸਾਖੀ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਗੁਰੂ-ਮਹਿਮਾ ਦਾ ਕੇਂਦਰੀ ਧੁਰਾ ਹੈ ਜੋ ਸਤਿਗੁਰੂ ਦੀ ਸਰਵਉੱਚਤਾ ਦਰਸਾਉਂਦੀ ਹੈ।',
      en: 'This foundational sakhi highlights why the enlightened Master is honored before all else: because without the lens of the Satguru, Truth remains unseen.',
    },
    quiz: [
      {
        id: 'q1-1',
        question: {
          hi: 'सतगुरु कबीर साहेब के अनुसार गुरु और गोविंद दोनों के समक्ष होने पर पहले किसके चरण छूने चाहिए?',
          pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਅਨੁਸਾਰ ਗੁਰੂ ਅਤੇ ਗੋਵਿੰਦ ਦੋਵਾਂ ਦੇ ਸਨਮੁੱਖ ਹੋਣ ਤੇ ਪਹਿਲਾਂ ਕਿਸ ਦੇ ਚਰਨ ਛੋਹਣੇ ਚਾਹੀਦੇ ਹਨ?',
          en: 'According to Satguru Kabir Saheb, when both Guru and Govind stand before you, whose feet should you touch first?',
        },
        options: {
          hi: ['गोविंद (ईश्वर) के', 'सतगुरु के', 'दोनों के एक साथ बिना सोचे', 'किसी के भी नहीं'],
          pb: ['ਗੋਵਿੰਦ (ਪ੍ਰਮਾਤਮਾ) ਦੇ', 'ਸਤਿਗੁਰੂ ਦੇ', 'ਦੋਵਾਂ ਦੇ ਇਕੱਠੇ ਬਿਨਾਂ ਸੋਚੇ', 'ਕਿਸੇ ਦੇ ਵੀ ਨਹੀਂ'],
          en: ['Govind (God)', 'Satguru (The Master)', 'Neither one', 'Whoever is closer'],
        },
        correctIndex: 1,
        explanation: {
          hi: 'सतगुरु के चरण पहले पूज्य हैं, क्योंकि गुरु की कृपा के बिना गोविंद की प्राप्ति और पहचान संभव नहीं थी।',
          pb: 'ਸਤਿਗੁਰੂ ਦੇ ਚਰਨ ਪਹਿਲਾਂ ਪੂਜਣਯੋਗ ਹਨ ਕਿਉਂਕਿ ਗੁਰੂ ਦੀ ਕਿਰਪਾ ਤੋਂ ਬਿਨਾਂ ਪ੍ਰਮਾਤਮਾ ਦੀ ਪ੍ਰਾਪਤੀ ਅਸੰਭਵ ਸੀ।',
          en: 'The Satguru is revered first because without the Guru’s grace, the vision and realization of Govind would be impossible.',
        },
      },
      {
        id: 'q1-2',
        question: {
          hi: 'इस साखी में "बलिहारी" शब्द का आध्यात्मिक तात्पर्य क्या है?',
          pb: 'ਇਸ ਸਾਖੀ ਵਿੱਚ "ਬਲਿਹਾਰੀ" ਸ਼ਬਦ ਦਾ ਰੂਹਾਨੀ ਅਰਥ ਕੀ ਹੈ?',
          en: 'What is the spiritual meaning of the sacred term "Balihari" in this couplet?',
        },
        options: {
          hi: ['आर्थिक दान देना', 'पूर्ण आत्म-समर्पण व कृतज्ञता', 'तीर्थ यात्रा करना', 'कठिन हठयोग करना'],
          pb: ['ਪੈਸਿਆਂ ਦਾ ਦਾਨ', 'ਪੂਰਨ ਸਮਰਪਣ ਤੇ ਸ਼ੁਕਰਾਨਾ', 'ਤੀਰਥ ਯਾਤਰਾ ਕਰਨਾ', 'ਹਠ-ਯੋਗ ਕਰਨਾ'],
          en: ['Financial donation', 'Complete inner surrender & gratitude', 'External pilgrimage', 'Physical austerities'],
        },
        correctIndex: 1,
        explanation: {
          hi: 'बलिहारी का अर्थ है अपने अहंकार और मन का गुरु चरणों में पूर्ण रूप से न्योछावर कर देना।',
          pb: 'ਬਲਿਹਾਰੀ ਦਾ ਅਰਥ ਹੈ ਆਪਣੀ ਹਉਮੈ ਨੂੰ ਗੁਰੂ ਚਰਨਾਂ ਵਿੱਚ ਕੁਰਬਾਨ ਕਰ ਦੇਣਾ।',
          en: '"Balihari" represents total, heartfelt surrender of one’s ego and mental will at the feet of the Master.',
        },
      },
      {
        id: 'q1-3',
        question: {
          hi: 'सतगुरु कबीर साहेब ने ईश्वर की पहचान कराने का श्रेय किसे दिया है?',
          pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਪ੍ਰਮਾਤਮਾ ਦੀ ਪਛਾਣ ਕਰਾਉਣ ਦਾ ਸਿਹਰਾ ਕਿਸ ਨੂੰ ਦਿੱਤਾ ਹੈ?',
          en: 'To whom does Satguru Kabir Saheb attribute the revelation and recognition of God?',
        },
        options: {
          hi: ['केवल शास्त्रों के पठन को', 'अपने सतगुरु की कृपा को', 'अपनी शारीरिक शक्ति को', 'सांसारिक मित्रों को'],
          pb: ['ਕੇਵਲ ਧਾਰਮਿਕ ਪੁਸਤਕਾਂ ਨੂੰ', 'ਆਪਣੇ ਸਤਿਗੁਰੂ ਜੀ ਦੀ ਕਿਰਪਾ ਨੂੰ', 'ਆਪਣੀ ਸਰੀਰਕ ਤਾਕਤ ਨੂੰ', 'ਸੰਸਾਰਕ ਮਿੱਤਰਾਂ ਨੂੰ'],
          en: ['Mere bookish knowledge', 'The grace and guidance of Satguru', 'Personal bodily strength', 'Social companions'],
        },
        correctIndex: 1,
        explanation: {
          hi: 'कहा गया है: "गोविंद दियो बताय" — गुरु ने ही गोविंद का भेद और मार्ग बताया है।',
          pb: '"ਗੋਵਿੰਦ ਦੀਓ ਬਤਾਯ" — ਸਤਿਗੁਰੂ ਜੀ ਨੇ ਹੀ ਸੱਚੇ ਮਾਲਕ ਦਾ ਭੇਤ ਖੋਲ੍ਹ ਕੇ ਸਮਝਾਇਆ ਹੈ।',
          en: '"Govind diyo bataay" confirms that it is the Guru who unveils the true secret and presence of the Supreme.',
        },
      },
      {
        id: 'q1-4',
        question: {
          hi: 'इस साखी से साधक को मुख्य रूप से क्या शिक्षा मिलती है?',
          pb: 'ਇਸ ਸਾਖੀ ਤੋਂ ਸਾਧਕ ਨੂੰ ਮੁੱਖ ਤੌਰ ਤੇ ਕੀ ਸਿੱਖਿਆ ਮਿਲਦੀ ਹੈ?',
          en: 'What primary spiritual principle does this sakhi impart to a true seeker?',
        },
        options: {
          hi: ['ज्ञानदाता गुरु के प्रति अनन्य निष्ठा और विनय', 'अहंकार को बढ़ावा देना', 'ईश्वर को भूल जाना', 'केवल बाह्य आडंबर करना'],
          pb: ['ਗਿਆਨਦਾਤਾ ਗੁਰੂ ਪ੍ਰਤੀ ਅਟੁੱਟ ਸ਼ਰਧਾ ਅਤੇ ਨਿਮਰਤਾ', 'ਹੰਕਾਰ ਨੂੰ ਵਧਾਉਣਾ', 'ਪ੍ਰਮਾਤਮਾ ਨੂੰ ਭੁਲਾਉਣਾ', 'ਦਿਖਾਵਾ ਕਰਨਾ'],
          en: ['Unwavering reverence and humility toward the Master', 'Fostering intellectual pride', 'Neglecting the Divine', 'Superficial ritualism'],
        },
        correctIndex: 0,
        explanation: {
          hi: 'सच्चा साधक जानता है कि गुरु ही वह सेतु है जो जीव को ब्रह्म से मिलाता है।',
          pb: 'ਸੱਚਾ ਸਾਧਕ ਜਾਣਦਾ ਹੈ ਕਿ ਸਤਿਗੁਰੂ ਹੀ ਉਹ ਪੁਲ ਹੈ ਜੋ ਜੀਵ ਨੂੰ ਪ੍ਰਮਾਤਮਾ ਨਾਲ ਜੋੜਦਾ ਹੈ।',
          en: 'The true seeker recognizes that the Satguru is the living bridge connecting the individual soul to the Supreme Truth.',
        },
      },
      {
        id: 'q1-5',
        question: {
          hi: 'सतगुरु कबीर साहेब की इस साखी का संबंध किस ग्रंथ अंग से है?',
          pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਇਸ ਸਾਖੀ ਦਾ ਸੰਬੰਧ ਕਿਸ ਅੰਗ ਨਾਲ ਹੈ?',
          en: 'Which section (Ang) of Satguru Kabir Saheb’s Sakhi Sangrah does this couplet belong to?',
        },
        options: {
          hi: ['गुरु महिमा अंग', 'माया अंग', 'काल अंग', 'उपदेश अंग'],
          pb: ['ਗੁਰੂ ਮਹਿਮਾ ਅੰਗ', 'ਮਾਇਆ ਅੰਗ', 'ਕਾਲ ਅੰਗ', 'ਉਪਦੇਸ਼ ਅੰਗ'],
          en: ['Guru Mahima Ang', 'Maya Ang', 'Kaal Ang', 'Upadesh Ang'],
        },
        correctIndex: 0,
        explanation: {
          hi: 'यह साखी साखी संग्रह के "गुरु महिमा अंग" की सर्वविदित और सर्वाधिक प्रसिद्ध वाणी है।',
          pb: 'ਇਹ ਸਾਖੀ ਸਾਖੀ ਸੰਗ੍ਰਹਿ ਦੇ "ਗੁਰੂ ਮਹਿਮਾ ਅੰਗ" ਦੀ ਮੂਲ ਬਾਣੀ ਹੈ।',
          en: 'This couplet is the crown jewel of the Guru Mahima Ang (The Section on the Glory of the Guru).',
        },
      },
    ],
  },

  {
    id: 'sakhi-2',
    number: 2,
    grantha: 'Sakhi Sangrah',
    category: 'prem-bhakti',
    categoryTitle: {
      hi: 'प्रेम-भक्ति अंग',
      pb: 'ਪ੍ਰੇਮ-ਭਗਤੀ ਅੰਗ',
      en: 'Divine Love & Devotion (Prem Bhakti)',
    },
    text: {
      hi: 'पोथी पढ़ि पढ़ि जग मुआ, पंडित भया न कोय ।\nढाई आखर प्रेम का, पढ़े सो पंडित होय ॥',
      pb: 'ਪੋਥੀ ਪੜ੍ਹ ਪੜ੍ਹ ਜਗ ਮੁਆ, ਪੰਡਿਤ ਭਯਾ ਨ ਕੋਯ ।\nਢਾਈ ਆਖਰ ਪ੍ਰੇਮ ਕਾ, ਪੜ੍ਹੇ ਸੋ ਪੰਡਿਤ ਹੋਯ ॥',
      en: 'Pothi padhi padhi jag mua, pandit bhaya na koy |\nDhai aakhar prem ka, padhe so pandit hoy ||',
    },
    transliteration: 'Pothi padhi padhi jag mua, pandit bhaya na koy. Dhai aakhar prem ka, padhe so pandit hoy.',
    bhavarth: {
      hi: 'संसार भर के लोग बड़े-बड़े ग्रंथ और शास्त्र पढ़-पढ़ कर मृत्यु को प्राप्त हो गए, किंतु केवल किताबी ज्ञान से कोई सच्चा विद्वान या ब्रह्म-ज्ञानी नहीं बन सका। जिसने वास्तव में प्रेम के मात्र "ढाई अक्षर" का अनुभव कर लिया, अर्थात जिसने समस्त जीवों में परमात्मा का प्रेम अनुभव कर लिया, वही वास्तव में सच्चा पंडित और ज्ञानी है।',
      pb: 'ਦੁਨੀਆ ਭਰ ਦੇ ਲੋਕ ਵੱਡੀਆਂ-ਵੱਡੀਆਂ ਧਾਰਮਿਕ ਪੁਸਤਕਾਂ ਪੜ੍ਹ-ਪੜ੍ਹ ਕੇ ਚਲੇ ਗਏ, ਪਰ ਸਿਰਫ਼ ਅੱਖਰੀ ਗਿਆਨ ਨਾਲ ਕੋਈ ਸੱਚਾ ਬ੍ਰਹਮ-ਗਿਆਨੀ ਨਹੀਂ ਬਣ ਸਕਿਆ। ਜਿਸ ਮਨੁੱਖ ਨੇ ਪ੍ਰੇਮ ਦੇ ਢਾਈ ਅੱਖਰ ਨੂੰ ਆਪਣੇ ਹਿਰਦੇ ਵਿੱਚ ਵਸਾ ਲਿਆ ਅਤੇ ਸੱਚਾ ਪਿਆਰ ਕੀਤਾ, ਉਹੀ ਅਸਲ ਵਿੱਚ ਗਿਆਨੀ ਹੈ।',
      en: 'Countless individuals have read scriptures upon scriptures, yet dry bookish reading cannot create a true sage. One who embodies and realizes the simple truth of selfless love—that single reality of the heart—becomes truly wise and spiritually enlightened.',
    },
    wordMeanings: {
      hi: [
        { word: 'पोथी (Pothi)', meaning: 'धार्मिक ग्रंथ, शास्त्र, बाह्य पुस्तकीय ज्ञान' },
        { word: 'जग मुआ (Jag Mua)', meaning: 'समस्त संसार समय के चक्र में विलीन हो गया' },
        { word: 'पंडित (Pandit)', meaning: 'सच्चा आत्म-ज्ञानी, विवेकशील प्रज्ञा पुरुष' },
        { word: 'ढाई आखर (Dhai Aakhar)', meaning: 'प्रेम (प+र्+ए+म) शब्द के ढाई अक्षर, अर्थात निष्काम ईश्वरीय प्रेम' },
        { word: 'पढ़े (Padhe)', meaning: 'हृदय में धारण करे, अनुभव में उतारे' },
      ],
      pb: [
        { word: 'ਪੋਥੀ (Pothi)', meaning: 'ਧਾਰਮਿਕ ਕਿਤਾਬਾਂ, ਸ਼ਾਸਤਰ' },
        { word: 'ਜਗ ਮੁਆ (Jag Mua)', meaning: 'ਸਾਰਾ ਸੰਸਾਰ ਬਿਨਾਂ ਗਿਆਨ ਮੁੱਕ ਗਿਆ' },
        { word: 'ਪੰਡਿਤ (Pandit)', meaning: 'ਸੱਚਾ ਆਤਮ-ਗਿਆਨੀ' },
        { word: 'ਢਾਈ ਆਖਰ (Dhai Aakhar)', meaning: 'ਪ੍ਰੇਮ ਦਾ ਸੱਚਾ ਅਤੇ ਡੂੰਘਾ ਤੱਤ' },
        { word: 'ਪੜ੍ਹੇ (Padhe)', meaning: 'ਅੰਦਰ ਅਨੁਭਵ ਕਰੇ' },
      ],
      en: [
        { word: 'Pothi', meaning: 'Scriptures, holy books, theoretical lore' },
        { word: 'Jag Mua', meaning: 'The mortal world passed away searching' },
        { word: 'Pandit', meaning: 'A truly enlightened knower of the Self' },
        { word: 'Dhai Aakhar', meaning: 'The two-and-a-half syllables of selfless Love' },
        { word: 'Padhe', meaning: 'To assimilate and live from the heart' },
      ],
    },
    contemplation: {
      hi: 'क्या मेरा ज्ञान केवल तर्क-वितर्क और शब्दों का संग्रह है, अथवा मेरे हृदय में सभी जीवों के प्रति निस्वार्थ प्रेम और करुणा का संचार हुआ है?',
      pb: 'ਕੀ ਮੇਰਾ ਗਿਆਨ ਕੇਵਲ ਬਹਿਸਾਂ ਤੇ ਕਿਤਾਬਾਂ ਤੱਕ ਸੀਮਤ ਹੈ ਜਾਂ ਮੇਰੇ ਹਿਰਦੇ ਵਿੱਚ ਹਰ ਇੱਕ ਲਈ ਪ੍ਰੇਮ ਤੇ ਦਇਆ ਹੈ?',
      en: 'Is my knowledge merely intellectual debate and memorized words, or has it transformed into genuine compassion, humility, and unconditional love?',
    },
    practicalApplication: {
      hi: 'आज किसी से विवाद करने या अपना बौद्धिक ज्ञान थोपने के स्थान पर, प्रेमपूर्वक उसकी बात सुनें और मधुर वाणी से सबकी सेवा करें।',
      pb: 'ਅੱਜ ਕਿਸੇ ਨਾਲ ਬਹਿਸ ਕਰਨ ਦੀ ਥਾਂ ਪਿਆਰ ਅਤੇ ਮਿੱਠੇ ਬੋਲਾਂ ਨਾਲ ਸਭ ਦਾ ਸਤਿਕਾਰ ਕਰੋ।',
      en: 'Refrain today from winning intellectual arguments; instead, offer active kindness, non-judgmental listening, and warm forgiveness.',
    },
    samarpanPrayer: {
      hi: 'सतगुरु साहेब! मुझे अहंकारयुक्त शब्दों का पाण्डित्य नहीं चाहिए। मेरे हृदय में अपने पावन प्रेम और सत्यनाम की निर्मल ज्योति प्रज्वलित कर दीजिए। साहेब बंदगी साहेब!',
      pb: 'ਸਤਿਗੁਰੂ ਜੀ! ਮੈਨੂੰ ਹਉਮੈ ਵਾਲੀ ਵਿਦਵਤਾ ਨਹੀਂ ਚਾਹੀਦੀ, ਮੇਰੇ ਹਿਰਦੇ ਵਿੱਚ ਆਪਣਾ ਨਿਰਮਲ ਪ੍ਰੇਮ ਭਰ ਦਿਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'Satguru Saheb! Spare me from intellectual arrogance. Ignite within my heart the pure, radiant flame of divine love and Satyanaam. Saheb Bandagi Saheb!',
    },
    contextNote: {
      hi: 'सतगुरु कबीर साहेब ने विद्वता के आडंबर पर चोट करते हुए प्रेम-भक्ति को अध्यात्म का प्राण माना है।',
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਵਿਖਾਵੇ ਵਾਲੀ ਵਿਦਵਤਾ ਦੀ ਥਾਂ ਹਿਰਦੇ ਦੇ ਪਵਿੱਤਰ ਪ੍ਰੇਮ ਨੂੰ ਸਭ ਤੋਂ ਉੱਤਮ ਮੰਨਿਆ ਹੈ।',
      en: 'Satguru Kabir Saheb cuts through empty scholarship, declaring that without the awakening of real love, knowledge remains dead weight.',
    },
    quiz: [
      {
        id: 'q2-1',
        question: {
          hi: 'सतगुरु कबीर साहेब के अनुसार सच्चा पंडित या ज्ञानी कौन बनता है?',
          pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਅਨੁਸਾਰ ਸੱਚਾ ਪੰਡਿਤ ਜਾਂ ਗਿਆਨੀ ਕੌਣ ਬਣਦਾ ਹੈ?',
          en: 'According to Satguru Kabir Saheb, who truly becomes an enlightened sage (Pandit)?',
        },
        options: {
          hi: ['जो बहुत सारे वेद-शास्त्र रट लेता है', 'जो प्रेम के ढाई अक्षर को हृदय में धारण करता है', 'जो कठिन संन्यास लेता है', 'जो बहुत धन दान करता है'],
          pb: ['ਜੋ ਬਹੁਤ ਸਾਰੀਆਂ ਕਿਤਾਬਾਂ ਰੱਟ ਲੈਂਦਾ ਹੈ', 'ਜੋ ਪ੍ਰੇਮ ਦੇ ਢਾਈ ਅੱਖਰ ਨੂੰ ਹਿਰਦੇ ਵਿੱਚ ਵਸਾਉਂਦਾ ਹੈ', 'ਜੋ ਜੰਗਲਾਂ ਵਿੱਚ ਜਾਂਦਾ ਹੈ', 'ਜੋ ਬਹੁਤ ਧਨ ਦਾਨ ਕਰਦਾ ਹੈ'],
          en: ['One who memorizes endless scriptures', 'One who realizes and lives the essence of Love', 'One who practices severe asceticism', 'One who amasses great donations'],
        },
        correctIndex: 1,
        explanation: {
          hi: 'साखी स्पष्ट कहती है: "ढाई आखर प्रेम का, पढ़े सो पंडित होय।" प्रेम ही सर्वोच्च ज्ञान है।',
          pb: '"ਢਾਈ ਆਖਰ ਪ੍ਰੇਮ ਕਾ, ਪੜ੍ਹੇ ਸੋ ਪੰਡਿਤ ਹੋਯ।" ਪ੍ਰੇਮ ਹੀ ਅਸਲ ਗਿਆਨ ਹੈ।',
          en: 'The couplet explicitly states that assimilating the truth of love is what creates genuine enlightenment.',
        },
      },
      {
        id: 'q2-2',
        question: {
          hi: 'साखी में "पोथी पढ़ि पढ़ि जग मुआ" से सतगुरु कबीर साहेब का क्या तात्पर्य है?',
          pb: 'ਸਾਖੀ ਵਿੱਚ "ਪੋਥੀ ਪੜ੍ਹ ਪੜ੍ਹ ਜਗ ਮੁਆ" ਤੋਂ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦਾ ਕੀ ਭਾਵ ਹੈ?',
          en: 'What does Satguru Kabir Saheb mean by "Pothi padhi padhi jag mua"?',
        },
        options: {
          hi: ['केवल पुस्तकों के बाह्य पठन से आत्म-कल्याण नहीं होता', 'किताबें पढ़ना पाप है', 'सभी को पढ़ना छोड़ देना चाहिए', 'पोथियां नदी में बहा देनी चाहिए'],
          pb: ['ਸਿਰਫ਼ ਕਿਤਾਬਾਂ ਪੜ੍ਹਨ ਨਾਲ ਆਤਮਿਕ ਮੁਕਤੀ ਨਹੀਂ ਮਿਲਦੀ', 'ਕਿਤਾਬਾਂ ਪੜ੍ਹਨਾ ਗੁਨਾਹ ਹੈ', 'ਪੜ੍ਹਾਈ ਬੰਦ ਕਰ ਦੇਣੀ ਚਾਹੀਦੀ ਹੈ', 'ਪੋਥੀਆਂ ਪਾਣੀ ਵਿੱਚ ਵਹਾ ਦਿਓ'],
          en: ['Mere theoretical reading without heart realization cannot grant liberation', 'Books are sinful', 'One should stop studying', 'Discard all literature'],
        },
        correctIndex: 0,
        explanation: {
          hi: 'सतगुरु कबीर साहेब का आशय यह है कि जब तक ज्ञान आचरण और प्रेम में न बदले, वह व्यर्थ बोझ है।',
          pb: 'ਜਦੋਂ ਤੱਕ ਗਿਆਨ ਜੀਵਨ ਵਿੱਚ ਅਮਲ ਅਤੇ ਪ੍ਰੇਮ ਦਾ ਰੂਪ ਨਾ ਲਵੇ, ਓਦੋਂ ਤੱਕ ਉਹ ਵਿਅਰਥ ਹੈ।',
          en: 'Unless knowledge transforms into lived love and conscious action, it remains an empty intellectual burden.',
        },
      },
      {
        id: 'q2-3',
        question: {
          hi: '"ढाई आखर प्रेम का" किस आध्यात्मिक भाव की ओर संकेत करता है?',
          pb: '"ਢਾਈ ਆਖਰ ਪ੍ਰੇਮ ਕਾ" ਕਿਸ ਰੂਹਾਨੀ ਭਾਵ ਵੱਲ ਇਸ਼ਾਰਾ ਕਰਦਾ ਹੈ?',
          en: 'What spiritual reality is symbolized by the "two-and-a-half letters of Love"?',
        },
        options: {
          hi: ['सांसारिक स्वार्थ', 'निस्वार्थ ईश्वरीय प्रेम व जीव-मात्र के प्रति करुणा', 'व्यापारिक अनुबंध', 'जातिगत बंधन'],
          pb: ['ਸੰਸਾਰਕ ਸੁਆਰਥ', 'ਨਿਸ਼ਕਾਮ ਪ੍ਰਭੂ ਪ੍ਰੇਮ ਅਤੇ ਸਰਬੱਤ ਦਾ ਭਲਾ', 'ਵਪਾਰਕ ਸਮਝੌਤਾ', 'ਜਾਤ-ਪਾਤ ਦਾ ਬੰਧਨ'],
          en: ['Worldly selfishness', 'Selfless divine love and universal compassion', 'Commercial contract', 'Caste distinctions'],
        },
        correctIndex: 1,
        explanation: {
          hi: 'यह शुद्ध, निष्काम और अहैतुक प्रेम है जो परमात्मा और उसकी समस्त सृष्टि को एक रूप में देखता है।',
          pb: 'ਇਹ ਉਹ ਪਵਿੱਤਰ ਪ੍ਰੇਮ ਹੈ ਜੋ ਸਭ ਵਿੱਚ ਇੱਕੋ ਜੋਤ ਨੂੰ ਦੇਖਦਾ ਹੈ।',
          en: 'It represents pristine, non-transactional divine love that sees the identical divine spark in all beings.',
        },
      },
      {
        id: 'q2-4',
        question: {
          hi: 'सच्चे ज्ञान की कसौटी सतगुरु कबीर साहेब के अनुसार क्या है?',
          pb: 'ਸੱਚੇ ਗਿਆਨ ਦੀ ਪਰਖ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਅਨੁਸਾਰ ਕੀ ਹੈ?',
          en: 'What is the true litmus test of genuine wisdom according to Satguru Kabir Saheb?',
        },
        options: {
          hi: ['तर्क में जीतना', 'हृदय में प्रेम और विनम्रता का प्रकटन', 'कठिन शब्दों का प्रयोग', 'दूसरों को नीचा दिखाना'],
          pb: ['ਬਹਿਸ ਵਿੱਚ ਜਿੱਤਣਾ', 'ਹਿਰਦੇ ਵਿੱਚ ਪਿਆਰ ਤੇ ਨਿਮਰਤਾ ਦਾ ਹੋਣਾ', 'ਔਖੇ ਸ਼ਬਦਾਂ ਦੀ ਵਰਤੋਂ', 'ਦੂਜਿਆਂ ਨੂੰ ਛੋਟਾ ਵਿਖਾਉਣਾ'],
          en: ['Winning arguments', 'The manifestation of love, humility, and peace in the heart', 'Using obscure terminology', 'Belittling others'],
        },
        correctIndex: 1,
        explanation: {
          hi: 'ज्ञान वही सच्चा है जो मनुष्य के अहंकार को गलाकर उसमें करुणा और प्रेम भर दे।',
          pb: 'ਸੱਚਾ ਗਿਆਨ ਉਹੀ ਹੈ ਜੋ ਹੰਕਾਰ ਮਿਟਾ ਕੇ ਮਨ ਵਿੱਚ ਪ੍ਰੇਮ ਪੈਦਾ ਕਰੇ।',
          en: 'True wisdom is that which dissolves ego and fills the human vessel with boundless compassion.',
        },
      },
      {
        id: 'q2-5',
        question: {
          hi: 'यह साखी किस श्रेणी में मुख्य रूप से गिनी जाती है?',
          pb: 'ਇਹ ਸਾਖੀ ਮੁੱਖ ਤੌਰ ਤੇ ਕਿਸ ਸ਼੍ਰੇਣੀ ਵਿੱਚ ਆਉਂਦੀ ਹੈ?',
          en: 'In which spiritual category is this celebrated couplet cataloged?',
        },
        options: {
          hi: ['प्रेम-भक्ति अंग', 'वैराग्य अंग', 'माया अंग', 'भ्रम विध्वंस अंग'],
          pb: ['ਪ੍ਰੇਮ-ਭਗਤੀ ਅੰਗ', 'ਵੈਰਾਗ ਅੰਗ', 'ਮਾਇਆ ਅੰਗ', 'ਭਰਮ ਅੰਗ'],
          en: ['Prem-Bhakti Ang (Divine Love)', 'Vairagya Ang', 'Maya Ang', 'Bhram Vidhwans Ang'],
        },
        correctIndex: 0,
        explanation: {
          hi: 'यह साखी प्रेम-भक्ति अंग का अनुपम रत्न है।',
          pb: 'ਇਹ ਸਾਖੀ ਪ੍ਰੇਮ-ਭਗਤੀ ਅੰਗ ਦਾ ਅਨਮੋਲ ਹੀਰਾ ਹੈ।',
          en: 'This sakhi is celebrated as the pinnacle of the Prem-Bhakti Ang.',
        },
      },
    ],
  },

  {
    id: 'sakhi-3',
    number: 3,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'चेतावनी अंग',
      pb: 'ਚੇਤਾਵਨੀ ਅੰਗ',
      en: 'Spiritual Awakening (Chetavani)',
    },
    text: {
      hi: 'माटी कहे कुम्हार से, तू क्या रूँदे मोहि ।\nएक दिन ऐसा आएगा, मैं रूँदूंगी तोहि ॥',
      pb: 'ਮਾਟੀ ਕਹੈ ਕੁਮ੍ਹਾਰ ਸੇ, ਤੂ ਕਿਆ ਰੂੰਦੈ ਮੋਹਿ ।\nਇਕ ਦਿਨ ਐਸਾ ਆਏਗਾ, ਮੈਂ ਰੂੰਦੂੰਗੀ ਤੋਹਿ ॥',
      en: 'Maati kahe kumhaar se, tu kya roonde mohi |\nEk din aisa aayega, main roondoongi tohi ||',
    },
    transliteration: 'Mati kahe kumhar se, tu kya ronde mohi. Ek din aisa aayega, main rondungi tohi.',
    bhavarth: {
      hi: 'सतगुरु कबीर साहेब अत्यंत गूढ़ चेतावनी देते हुए कहते हैं कि मिट्टी बर्तन बनाने वाले कुम्हार से कहती है: आज तू अपने पैरों से मुझे रौंद-रौंद कर घमंड कर रहा है, किंतु यह संसार नश्वर है। एक दिन काल का ऐसा चक्र आएगा जब तेरी यह नश्वर देह मिट्टी में मिल जाएगी और मैं तुझे अपने भीतर समाहित कर रौंदूँगी। अतः इस नश्वर शरीर का अहंकार त्याग कर सत्यनाम का स्मरण कर।',
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਬੜੀ ਗੰਭੀਰ ਚੇਤਾਵਨੀ ਦਿੰਦੇ ਹਨ ਕਿ ਮਿੱਟੀ ਘੁਮਿਆਰ ਨੂੰ ਆਖਦੀ ਹੈ: ਅੱਜ ਤੂੰ ਮੈਨੂੰ ਆਪਣੇ ਪੈਰਾਂ ਹੇਠ ਲਿਤਾੜ ਰਿਹਾ ਹੈਂ, ਪਰ ਯਾਦ ਰੱਖ ਇਕ ਦਿਨ ਅਜਿਹਾ ਆਵੇਗਾ ਜਦੋਂ ਤੇਰਾ ਸਰੀਰ ਮਿੱਟੀ ਵਿੱਚ ਮਿਲ ਜਾਵੇਗਾ ਅਤੇ ਮੈਂ ਤੈਨੂੰ ਆਪਣੇ ਵਿੱਚ ਸਮਾ ਲਵਾਂਗੀ। ਇਸ ਲਈ ਹੰਕਾਰ ਤਿਆਗ ਕੇ ਸਤਯਨਾਮ ਦਾ ਸਿਮਰਨ ਕਰ।',
      en: 'The clay speaks to the potter: Today, in your pride, you trample upon me to mold your vessels. But heed this truth—a day shall surely arrive when your mortal body will return to the earth, and I shall absorb you back into dust. Awaken from mortal pride and seek the eternal.',
    },
    wordMeanings: {
      hi: [
        { word: 'माटी (Maati)', meaning: 'पृथ्वी तत्व, नश्वर देह का आधारभूत तत्व' },
        { word: 'कुम्हार (Kumhaar)', meaning: 'बर्तन बनाने वाला, रूपक रूप में अहंकारी मनुष्य' },
        { word: 'रूँदे (Roonde)', meaning: 'पैरों से कुचलना, रौंदना' },
        { word: 'मोहि (Mohi)', meaning: 'मुझे' },
        { word: 'तोहि (Tohi)', meaning: 'तुझे' },
      ],
      pb: [
        { word: 'ਮਾਟੀ (Maati)', meaning: 'ਧਰਤੀ, ਮਿੱਟੀ ਦਾ ਤੱਤ' },
        { word: 'ਕੁਮ੍ਹਾਰ (Kumhaar)', meaning: 'ਘੁਮਿਆਰ, ਹੰਕਾਰੀ ਜੀਵ' },
        { word: 'ਰੂੰਦੈ (Roonde)', meaning: 'ਪੈਰਾਂ ਹੇਠ ਮਿੱਧਣਾ' },
        { word: 'ਮੋਹਿ (Mohi)', meaning: 'ਮੈਨੂੰ' },
        { word: 'ਤੋਹਿ (Tohi)', meaning: 'ਤੈਨੂੰ' },
      ],
      en: [
        { word: 'Maati', meaning: 'The earth, primal material of mortal form' },
        { word: 'Kumhaar', meaning: 'The potter, symbolic of mortal ego' },
        { word: 'Roonde', meaning: 'To tread upon, crush underfoot' },
        { word: 'Mohi', meaning: 'Unto me' },
        { word: 'Tohi', meaning: 'Unto you' },
      ],
    },
    contemplation: {
      hi: 'क्या मैं अपने इस अस्थायी शरीर, रूप-रंग और धन-दौलत का व्यर्थ अहंकार कर रहा हूँ, जो एक दिन राख और मिट्टी में मिल जाना है?',
      pb: 'ਕੀ ਮੈਂ ਆਪਣੇ ਇਸ ਕੱਚੇ ਸਰੀਰ ਅਤੇ ਧਨ-ਦੌਲਤ ਦਾ ਝੂਠਾ ਹੰਕਾਰ ਕਰ ਰਿਹਾ ਹਾਂ ਜੋ ਆਖ਼ਰ ਮਿੱਟੀ ਹੀ ਹੋ ਜਾਣਾ ਹੈ?',
      en: 'Am I harboring arrogance over physical beauty, temporary health, or material possessions that must inevitably return to dust?',
    },
    practicalApplication: {
      hi: 'आज अपने व्यवहार में विनम्रता लाएं। किसी भी कमजोर या दीन व्यक्ति को तुच्छ न समझें और यह स्मरण रखें कि सभी का मूल तत्व एक ही है।',
      pb: 'ਅੱਜ ਆਪਣੇ ਅੰਦਰ ਨਿਮਰਤਾ ਪੈਦਾ ਕਰੋ ਅਤੇ ਕਿਸੇ ਵੀ ਗਰੀਬ ਜਾਂ ਕਮਜ਼ੋਰ ਨੂੰ ਆਪਣੇ ਨਾਲੋਂ ਛੋਟਾ ਨਾ ਸਮਝੋ।',
      en: 'Cultivate radical humility today. Treat every human being with gentle respect, remembering our shared mortal frailty and divine origin.',
    },
    samarpanPrayer: {
      hi: 'हे अविनाशी सतगुरु कबीर साहेब! इस नश्वर काया के मोह और अहंकार से मेरी रक्षा कीजिए। मुझे सत्यनाम रूपी अविनाशी धन प्रदान कीजिए जो कभी नष्ट न हो। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਅਬਿਨਾਸੀ ਸਤਿਗੁਰੂ ਜੀ! ਮੈਨੂੰ ਇਸ ਨਾਸ਼ਵਾਨ ਸਰੀਰ ਦੇ ਝੂਠੇ ਮੋਹ ਤੋਂ ਬਚਾਓ ਅਤੇ ਸਤਯਨਾਮ ਦਾ ਅਮਰ ਧਨ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Immortal Satguru Kabir Saheb! Protect my consciousness from the trance of physical vanity. Bless me with the imperishable treasure of Satyanaam. Saheb Bandagi Saheb!',
    },
    contextNote: {
      hi: 'यह चेतावनी अंग की कालजयी साखी है, जो मनुष्य को जीवन की क्षणभंगुरता का यथार्थ स्मरण कराती है।',
      pb: 'ਇਹ ਚੇਤਾਵਨੀ ਅੰਗ ਦੀ ਮਹਾਨ ਸਾਖੀ ਹੈ ਜੋ ਇਨਸਾਨ ਨੂੰ ਮੌਤ ਅਤੇ ਸਰੀਰ ਦੀ ਨਾਸ਼ਵਾਨਤਾ ਦਾ ਅਹਿਸਾਸ ਕਰਾਉਂਦੀ ਹੈ।',
      en: 'A timeless couplet from Chetavani Ang, piercing through worldly illusions and urging the soul toward immediate spiritual awakening.',
    },
    quiz: [
      {
        id: 'q3-1',
        question: {
          hi: 'इस साखी में मिट्टी किसका प्रतीक है?',
          pb: 'ਇਸ ਸਾਖੀ ਵਿੱਚ ਮਿੱਟੀ ਕਿਸ ਦਾ ਪ੍ਰਤੀਕ ਹੈ?',
          en: 'What does the clay symbolize in this couplet?',
        },
        options: {
          hi: ['प्रकृति और नश्वर शरीर के मूल तत्व का', 'केवल एक बर्तन का', 'एक सजावटी वस्तु का', 'रंगों का'],
          pb: ['ਕੁਦਰਤ ਅਤੇ ਨਾਸ਼ਵਾਨ ਸਰੀਰ ਦੇ ਮੂਲ ਤੱਤ ਦਾ', 'ਕੇਵਲ ਇੱਕ ਭਾਂਡੇ ਦਾ', 'ਸਜਾਵਟ ਦਾ', 'ਰੰਗਾਂ ਦਾ'],
          en: ['Nature and the mortal elemental body', 'A mere household pot', 'Decorative art', 'Colors'],
        },
        correctIndex: 0,
        explanation: {
          hi: 'मिट्टी इस नश्वर देह और पंचतत्व की प्रतीक है जिसमें यह शरीर अंततः विलीन हो जाता है।',
          pb: 'ਮਿੱਟੀ ਪੰਜ ਤੱਤਾਂ ਦੀ ਪ੍ਰਤੀਕ ਹੈ ਜਿਸ ਵਿੱਚ ਇਹ ਸਰੀਰ ਅਖੀਰ ਰਲ ਜਾਂਦਾ ਹੈ।',
          en: 'The clay represents the five elements and the transient body which ultimately dissolves back into the earth.',
        },
      },
      {
        id: 'q3-2',
        question: {
          hi: 'मिट्टी ने कुम्हार को क्या चेतावनी दी?',
          pb: 'ਮਿੱਟੀ ਨੇ ਘੁਮਿਆਰ ਨੂੰ ਕੀ ਚੇਤਾਵਨੀ ਦਿੱਤੀ?',
          en: 'What solemn warning did the clay give to the potter?',
        },
        options: {
          hi: ['कि वह बर्तन नहीं बनने देगी', 'कि एक दिन कुम्हार भी मिट्टी में मिल जाएगा', 'कि वह बहुत कठोर हो जाएगी', 'कि वह पानी नहीं पिएगी'],
          pb: ['ਕਿ ਉਹ ਭਾਂਡਾ ਨਹੀਂ ਬਣਨ ਦੇਵੇਗੀ', 'ਕਿ ਇੱਕ ਦਿਨ ਘੁਮਿਆਰ ਵੀ ਮਿੱਟੀ ਵਿੱਚ ਮਿਲ ਜਾਵੇਗਾ', 'ਕਿ ਉਹ ਬਹੁਤ ਸਖ਼ਤ ਹੋ ਜਾਵੇਗੀ', 'ਕਿ ਉਹ ਪਾਣੀ ਨਹੀਂ ਪੀਵੇਗੀ'],
          en: ['That she will refuse to be molded', 'That one day the potter will dissolve back into the earth', 'That she will turn into stone', 'That she dislikes water'],
        },
        correctIndex: 1,
        explanation: {
          hi: 'मिट्टी स्मरण कराती है कि मनुष्य को अपनी नश्वर काया का अहंकार नहीं करना चाहिए।',
          pb: 'ਮਿੱਟੀ ਯਾਦ ਕਰਵਾਉਂਦੀ ਹੈ ਕਿ ਮਨੁੱਖ ਨੂੰ ਸਰੀਰ ਦਾ ਹੰਕਾਰ ਨਹੀਂ ਕਰਨਾ ਚਾਹੀਦਾ।',
          en: 'The clay reminds the potter that mortal life is transient and all forms return to their origin.',
        },
      },
      {
        id: 'q3-3',
        question: {
          hi: 'इस साखी का मुख्य संदेश क्या है?',
          pb: 'ਇਸ ਸਾਖੀ ਦਾ ਮੁੱਖ ਸੁਨੇਹਾ ਕੀ ਹੈ?',
          en: 'What is the central philosophical message of this sakhi?',
        },
        options: {
          hi: ['काया के अहंकार का त्याग और सत्य का स्मरण', 'बर्तन न बनाना', 'मिट्टी से दूर रहना', 'कुम्हार के काम की निंदा'],
          pb: ['ਸਰੀਰਕ ਹਉਮੈ ਦਾ ਤਿਆਗ ਅਤੇ ਸੱਚ ਦਾ ਸਿਮਰਨ', 'ਭਾਂਡੇ ਨਾ ਬਣਾਉਣਾ', 'ਮਿੱਟੀ ਤੋਂ ਦੂਰ ਰਹਿਣਾ', 'ਘੁਮਿਆਰ ਦੇ ਕੰਮ ਦੀ ਨਿੰਦਾ'],
          en: ['Renouncing bodily pride and remembering eternal Truth', 'Ceasing craftwork', 'Avoiding contact with clay', 'Criticizing potters'],
        },
        correctIndex: 0,
        explanation: {
          hi: 'यह साखी देह के नश्वर स्वभाव को देखकर अहंकार मिटाने की प्रेरणा देती है।',
          pb: 'ਇਹ ਸਾਖੀ ਸਰੀਰ ਦੀ ਨਾਸ਼ਵਾਨਤਾ ਸਮਝ ਕੇ ਹੰਕਾਰ ਤਿਆਗਣ ਦੀ ਪ੍ਰੇਰਨਾ ਦਿੰਦੀ ਹੈ।',
          en: 'It inspires the seeker to dissolve ego by recognizing the fleeting nature of physical existence.',
        },
      },
      {
        id: 'q3-4',
        question: {
          hi: 'सतगुरु कबीर साहेब की साखियों में "चेतावनी अंग" का क्या उद्देश्य होता है?',
          pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀਆਂ ਸਾਖੀਆਂ ਵਿੱਚ "ਚੇਤਾਵਨੀ ਅੰਗ" ਦਾ ਕੀ ਮਕਸਦ ਹੈ?',
          en: 'What is the primary spiritual purpose of "Chetavani Ang" in Satguru Kabir Saheb’s verses?',
        },
        options: {
          hi: ['जीव को मोह-निद्रा से जगाकर आत्म-कल्याण के मार्ग पर लगाना', 'केवल डराना', 'संसार को नष्ट करना', 'समय व्यतीत करना'],
          pb: ['ਜੀਵ ਨੂੰ ਮੋਹ ਦੀ ਨੀਂਦ ਤੋਂ ਜਗਾ ਕੇ ਆਤਮਿਕ ਭਲਾਈ ਦੇ ਰਾਹ ਤੋਰਨਾ', 'ਸਿਰਫ਼ ਡਰਾਉਣਾ', 'ਦੁਨੀਆ ਨਸ਼ਟ ਕਰਨਾ', 'ਸਮਾਂ ਲੰਘਾਉਣਾ'],
          en: ['To awaken the soul from the slumber of illusion toward self-realization', 'Mere fearmongering', 'Worldly destruction', 'Pastime leisure'],
        },
        correctIndex: 0,
        explanation: {
          hi: 'चेतावनी का अर्थ है विवेक को जाग्रत करना ताकि मनुष्य अमूल्य जीवन को व्यर्थ न गँवाए।',
          pb: 'ਚੇਤਾਵਨੀ ਦਾ ਅਰਥ ਹੈ ਸੁਰਤ ਨੂੰ ਜਗਾਉਣਾ ਤਾਂ ਜੋ ਅਨਮੋਲ ਜੀਵਨ ਵਿਅਰਥ ਨਾ ਜਾਵੇ।',
          en: 'Chetavani awakens discernment so the precious human birth is not squandered in unconsciousness.',
        },
      },
      {
        id: 'q3-5',
        question: {
          hi: 'इस साखी के अनुसार कौन-सा तत्व शाश्वत और अविनाशी है?',
          pb: 'ਇਸ ਸਾਖੀ ਅਨੁਸਾਰ ਕਿਹੜਾ ਤੱਤ ਅਟੱਲ ਤੇ ਅਬਿਨਾਸੀ ਹੈ?',
          en: 'Contrasted with the mortal body, what is eternal according to Satguru Kabir Saheb?',
        },
        options: {
          hi: ['सत्यनाम / आत्म-तत्व', 'भौतिक शरीर', 'सोना-चांदी', 'सांसारिक पद'],
          pb: ['ਸਤਯਨਾਮ / ਆਤਮ-ਤੱਤ', 'ਸਰੀਰ', 'ਸੋਨਾ-ਚਾਂਦੀ', 'ਦੁਨਿਆਵੀ ਕੁਰਸੀ'],
          en: ['Satyanaam / The Eternal Soul', 'Physical body', 'Gold and silver', 'Worldly titles'],
        },
        correctIndex: 0,
        explanation: {
          hi: 'शरीर मिट्टी में मिल जाता है, किंतु सत्यनाम और आत्मा अविनाशी हैं।',
          pb: 'ਸਰੀਰ ਮਿੱਟੀ ਵਿੱਚ ਮਿਲ ਜਾਂਦਾ ਹੈ ਪਰ ਸਤਯਨਾਮ ਸਦਾ ਅਟੱਲ ਰਹਿੰਦਾ ਹੈ।',
          en: 'The body returns to earth, but the soul and Satyanaam abide forever.',
        },
      },
    ],
  },

  {
    id: 'sakhi-4',
    number: 4,
    grantha: 'Kabir Sagar',
    category: 'naam-mahima',
    categoryTitle: {
      hi: 'सत्यनाम महिमा अंग',
      pb: 'ਸਤਯਨਾਮ ਮਹਿਮਾ ਅੰਗ',
      en: 'Glory of Satyanaam (Kabir Sagar)',
    },
    text: {
      hi: 'माला फेरत जुग भया, फिरा न मन का फेर ।\nकर का मनका डारि दे, मन का मनका फेर ॥',
      pb: 'ਮਾਲਾ ਫੇਰਤ ਜੁਗ ਭਯਾ, ਫਿਰਾ ਨ ਮਨ ਕਾ ਫੇਰ ।\nਕਰ ਕਾ ਮਨਕਾ ਡਾਰਿ ਦੇ, ਮਨ ਕਾ ਮਨਕਾ ਫੇਰ ॥',
      en: 'Maala pherat jug bhaya, phira na man ka pher |\nKar ka manka daari de, man ka manka pher ||',
    },
    transliteration: 'Mala pheyrat jug bhaya, phira na man ka pher. Kar ka manka dari de, man ka manka pher.',
    bhavarth: {
      hi: 'सतगुरु कबीर साहेब बाह्य दिखावे का खंडन करते हुए कहते हैं कि हाथ में माला फेरते हुए युग बीत गए, परंतु मन की चंचलता और विकारों का चक्कर नहीं छूटा। इसलिए हे मानव! हाथ (कर) के मनके (मोतियों की माला) को छोड़ और अपने "मन के मनके" को फेर, अर्थात अपने अंतर्मन को सत्यनाम में एकाग्र कर, अंतरात्मा का शुद्धिकरण कर।',
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ ਕਿ ਹੱਥ ਵਿੱਚ ਮਾਲਾ ਫੇਰਦਿਆਂ ਯੁਗ ਬੀਤ ਗਏ ਪਰ ਮਨ ਦੀ ਭਟਕਣਾ ਦੂਰ ਨਾ ਹੋਈ। ਇਸ ਲਈ ਹੱਥ ਦੇ ਮਣਕੇ ਛੱਡ ਕੇ ਆਪਣੇ ਅੰਦਰਲੇ ਮਨ ਦੇ ਮਣਕੇ ਨੂੰ ਪ੍ਰਭੂ ਵੱਲ ਮੋੜ ਅਤੇ ਸਤਯਨਾਮ ਦਾ ਅੰਦਰੂਨੀ ਸਿਮਰਨ ਕਰ।',
      en: 'Ages have passed counting the beads of the hand, yet the wanderings of the restless mind remain untamed. Set aside the external beads held by the hand, and turn the true bead of the mind—repose your conscious awareness inwardly within the holy vibration of Satyanaam.',
    },
    wordMeanings: {
      hi: [
        { word: 'जुग भया (Jug Bhaya)', meaning: 'युग बीत गए, बहुत लंबा समय व्यतीत हुआ' },
        { word: 'मन का फेर (Man Ka Pher)', meaning: 'मन की चंचलता, वासनाओं और भ्रम का चक्र' },
        { word: 'कर (Kar)', meaning: 'हाथ' },
        { word: 'मनका (Manka)', meaning: 'माला का दाना / मोती' },
        { word: 'मन का मनका (Man Ka Manka)', meaning: 'अंतःकरण की वृत्तियां, चित्त की एकाग्रता' },
      ],
      pb: [
        { word: 'ਜੁਗ ਭਯਾ (Jug Bhaya)', meaning: 'ਲੰਮਾ ਸਮਾਂ ਲੰਘ ਗਿਆ' },
        { word: 'ਮਨ ਕਾ ਫੇਰ (Man Ka Pher)', meaning: 'ਮਨ ਦੀਆਂ ਵਿਕਾਰ ਭਰੀਆਂ ਭਟਕਣਾਵਾਂ' },
        { word: 'ਕਰ (Kar)', meaning: 'ਹੱਥ' },
        { word: 'ਮਨਕਾ (Manka)', meaning: 'ਮਾਲਾ ਦਾ ਦਾਣਾ' },
        { word: 'ਮਨ ਕਾ ਮਨਕਾ (Man Ka Manka)', meaning: 'ਹਿਰਦੇ ਦੀ ਸੁਰਤ' },
      ],
      en: [
        { word: 'Jug Bhaya', meaning: 'Ages and eras elapsed' },
        { word: 'Man Ka Pher', meaning: 'The deceptive wanderings and habits of the mind' },
        { word: 'Kar', meaning: 'The physical hand' },
        { word: 'Manka', meaning: 'Rosary bead' },
        { word: 'Man Ka Manka', meaning: 'The inner bead of conscious attention' },
      ],
    },
    contemplation: {
      hi: 'क्या मेरी साधना केवल बाह्य अनुष्ठान और दिखावा है, अथवा मेरे विचार और वासनाएं भीतर से रूपांतरित हो रही हैं?',
      pb: 'ਕੀ ਮੇਰੀ ਭਗਤੀ ਕੇਵਲ ਵਿਖਾਵਾ ਹੈ ਜਾਂ ਮੇਰੇ ਮਨ ਦੇ ਅੰਦਰ ਸ਼ਾਂਤੀ ਤੇ ਸੁਧਾਰ ਆਇਆ ਹੈ?',
      en: 'Is my spiritual practice merely an outward display of ritual, or is my inner mind truly becoming pure, silent, and anchored in Truth?',
    },
    practicalApplication: {
      hi: 'आज जब भी मन में क्रोध, ईर्ष्या या चिंता उठे, तुरंत हाथ के काम रोककर गहरी श्वास लें और भीतर "सत्यनाम" का मानसिक स्मरण करें।',
      pb: 'ਅੱਜ ਜਦੋਂ ਵੀ ਮਨ ਵਿੱਚ ਗੁੱਸਾ ਜਾਂ ਚਿੰਤਾ ਆਵੇ, ਤਾਂ ਅੰਦਰੋਂ "ਸਤਯਨਾਮ" ਦਾ ਸ਼ਾਂਤ ਸਿਮਰਨ ਕਰੋ।',
      en: 'Whenever irritation or anxiety arises today, pause immediately, breathe gently, and mentally align with the sacred stillness of Satyanaam.',
    },
    samarpanPrayer: {
      hi: 'हे परम दयालु सतगुरु! मेरे चंचल मन को अपने पावन सत्यनाम में स्थिर कर दीजिए। मुझे बाह्य आडंबर से मुक्त कर अंतरंग भक्ति का वरदान दीजिए। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਦਿਆਲੂ ਸਤਿਗੁਰੂ ਜੀ! ਮੇਰੇ ਚੰਚਲ ਮਨ ਨੂੰ ਆਪਣੇ ਸਤਯਨਾਮ ਵਿੱਚ ਟਿਕਾ ਦਿਓ ਅਤੇ ਅੰਦਰੂਨੀ ਭਗਤੀ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Merciful Satguru! Steady my flickering attention within the serenity of Satyanaam. Free me from outward pretension and grant me inward devotion. Saheb Bandagi Saheb!',
    },
    contextNote: {
      hi: 'कबीर सागर में आंतरिक अजपा-जाप और सत्यनाम सुमिरन की इस विधि को मोक्ष का सीधा सोपान बताया गया है।',
      pb: 'ਕਬੀਰ ਸਾਗਰ ਅਨੁਸਾਰ ਅੰਦਰਲਾ ਸਤਯਨਾਮ ਸਿਮਰਨ ਹੀ ਜੀਵ ਨੂੰ ਸੱਚੀ ਮੁਕਤੀ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।',
      en: 'Kabir Sagar emphasizes that inward repetition and quiet presence are far superior to mechanical rituals performed with a distracted mind.',
    },
    quiz: [
      {
        id: 'q4-1',
        question: {
          hi: 'इस साखी में सतगुरु कबीर साहेब ने किसे छोड़ने का परामर्श दिया है?',
          pb: 'ਇਸ ਸਾਖੀ ਵਿੱਚ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਕਿਸ ਚੀਜ਼ ਨੂੰ ਛੱਡਣ ਦੀ ਸਲਾਹ ਦਿੱਤੀ ਹੈ?',
          en: 'What does Satguru Kabir Saheb advise setting aside in this couplet?',
        },
        options: {
          hi: ['हाथ की लकड़ी की माला का दिखावा', 'सत्य बोलना', 'स्वाध्याय करना', 'सत्संग जाना'],
          pb: ['ਹੱਥ ਦੀ ਮਾਲਾ ਦਾ ਵਿਖਾਵਾ', 'ਸੱਚ ਬੋਲਣਾ', 'ਸਵਾਧਿਆਏ ਕਰਨਾ', 'ਸਤਿਸੰਗ ਜਾਣਾ'],
          en: ['The superficial reliance on hand-held prayer beads', 'Speaking truth', 'Self-study', 'Attending holy gatherings'],
        },
        correctIndex: 0,
        explanation: {
          hi: '"कर का मनका डारि दे" का अर्थ है कि केवल हाथ की माला घुमाने से कोई लाभ नहीं जब तक मन न सुधरे।',
          pb: 'ਸਿਰਫ਼ ਹੱਥ ਵਿੱਚ ਮਾਲਾ ਫੇਰਨ ਨਾਲ ਕੁਝ ਨਹੀਂ ਬਣਦਾ ਜਦੋਂ ਤੱਕ ਮਨ ਨਾ ਬਦਲੇ।',
          en: '"Kar ka manka daari de" means that rolling beads in the hand is futile if the mind remains turbulent.',
        },
      },
      {
        id: 'q4-2',
        question: {
          hi: '"मन का मनका फेर" का वास्तविक आध्यात्मिक मर्म क्या है?',
          pb: '"ਮਨ ਕਾ ਮਨਕਾ ਫੇਰ" ਦਾ ਅਸਲ ਰੂਹਾਨੀ ਅਰਥ ਕੀ ਹੈ?',
          en: 'What is the true spiritual essence of "turning the bead of the mind"?',
        },
        options: {
          hi: ['अंतःकरण को शुद्ध कर सत्यनाम में एकाग्र करना', 'मन में धन की गणना करना', 'कल्पनाओं में खोए रहना', 'दूसरों के दोष देखना'],
          pb: ['ਹਿਰਦੇ ਨੂੰ ਸ਼ੁੱਧ ਕਰਕੇ ਸਤਯਨਾਮ ਵਿੱਚ ਜੋੜਨਾ', 'ਪੈਸਿਆਂ ਦੀ ਗਿਣਤੀ ਕਰਨਾ', 'ਖਿਆਲਾਂ ਵਿੱਚ ਗਵਾਚਣਾ', 'ਦੂਜਿਆਂ ਦੀਆਂ ਕਮੀਆਂ ਲੱਭਣਾ'],
          en: ['Purifying the inner consciousness and focusing on Satyanaam', 'Counting money in thought', 'Daydreaming', 'Judging others'],
        },
        correctIndex: 0,
        explanation: {
          hi: 'सच्चा सुमिरन वह है जो चित्त की गहराइयों में सत्यनाम की अनुभूति जगाए।',
          pb: 'ਸੱਚਾ ਸਿਮਰਨ ਉਹ ਹੈ ਜੋ ਮਨ ਦੇ ਅੰਦਰ ਸਤਯਨਾਮ ਦੀ ਜੋਤ ਜਗਾਵੇ।',
          en: 'True meditation is inward remembrance that awakens the divine light of Satyanaam within.',
        },
      },
      {
        id: 'q4-3',
        question: {
          hi: '"माला फेरत जुग भया" में "जुग" शब्द क्या दर्शाता है?',
          pb: '"ਮਾਲਾ ਫੇਰਤ ਜੁਗ ਭਯਾ" ਵਿੱਚ "ਜੁਗ" ਸ਼ਬਦ ਕੀ ਦਰਸਾਉਂਦਾ ਹੈ?',
          en: 'What does the word "Jug" indicate in this phrase?',
        },
        options: {
          hi: ['एक बहुत लंबा व्यतीत काल', 'एक छोटा क्षण', 'एक दिन', 'एक सप्ताह'],
          pb: ['ਇੱਕ ਬਹੁਤ ਲੰਮਾ ਸਮਾਂ', 'ਇੱਕ ਪਲ', 'ਇੱਕ ਦਿਨ', 'ਇੱਕ ਹਫ਼ਤਾ'],
          en: ['An extraordinarily long span of time / ages', 'A split second', 'A single day', 'A week'],
        },
        correctIndex: 0,
        explanation: {
          hi: 'यह दर्शाता है कि युगों-युगों से मनुष्य बाह्य पाखंड में उलझा रहा और आंतरिक शांति से वंचित रहा।',
          pb: 'ਇਹ ਦਰਸਾਉਂਦਾ ਹੈ ਕਿ ਲੰਮੇ ਸਮੇਂ ਤੋਂ ਇਨਸਾਨ ਬਾਹਰੀ ਵਿਖਾਵੇ ਵਿੱਚ ਭਟਕਦਾ ਰਿਹਾ।',
          en: 'It indicates that souls have wandered through ages in superficial rituals without finding inward peace.',
        },
      },
      {
        id: 'q4-4',
        question: {
          hi: 'सतगुरु कबीर साहेब के मत में सच्ची साधना का केंद्र क्या है?',
          pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਅਨੁਸਾਰ ਸੱਚੀ ਭਗਤੀ ਦਾ ਕੇਂਦਰ ਕੀ ਹੈ?',
          en: 'What is the epicenter of authentic spiritual practice according to Satguru Kabir Saheb?',
        },
        options: {
          hi: ['अंतःकरण और मन का शोधन', 'केवल वस्त्रों का रंग बदलना', 'जटाएं बढ़ाना', 'भस्म लगाना'],
          pb: ['ਮਨ ਅਤੇ ਆਤਮਾ ਦੀ ਸ਼ੁੱਧੀ', 'ਕੇਵਲ ਕੱਪੜਿਆਂ ਦਾ ਰੰਗ ਬਦਲਣਾ', 'ਜਟਾਵਾਂ ਵਧਾਉਣਾ', 'ਸੁਆਹ ਮਲਣੀ'],
          en: ['Inner purification of mind and consciousness', 'Changing the color of robes', 'Matted hair', 'Smearing ash'],
        },
        correctIndex: 0,
        explanation: {
          hi: 'सतगुरु कबीर साहेब बाह्य वेशभूषा की जगह मन की निर्मलता और सत्य आचरण को प्राथमिकता देते हैं।',
          pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਮਨ ਦੀ ਪਵਿੱਤਰਤਾ ਨੂੰ ਸਭ ਤੋਂ ਜ਼ਰੂਰੀ ਮੰਨਦੇ ਹਨ।',
          en: 'Satguru Kabir Saheb champions the purity of mind and truthful living over mere ascetic costumes.',
        },
      },
      {
        id: 'q4-5',
        question: {
          hi: 'यह साखी किस पवित्र नाम के सुमिरन की प्रेरणा देती है?',
          pb: 'ਇਹ ਸਾਖੀ ਕਿਸ ਪਵਿੱਤਰ ਨਾਮ ਦੇ ਸਿਮਰਨ ਦੀ ਪ੍ਰੇਰਨਾ ਦਿੰਦੀ ਹੈ?',
          en: 'Which sacred Name does this teaching direct the practitioner to remember inwardly?',
        },
        options: {
          hi: ['सत्यनाम (Satyanaam)', 'सांसारिक नाम', 'अहंकारी विचार', 'भौतिक वस्तुएं'],
          pb: ['ਸਤਯਨਾਮ (Satyanaam)', 'ਦੁਨਿਆਵੀ ਨਾਮ', 'ਹੰਕਾਰੀ ਖਿਆਲ', 'ਸਰੀਰਕ ਚੀਜ਼ਾਂ'],
          en: ['Satyanaam', 'Temporal worldly labels', 'Egotistical notions', 'Material things'],
        },
        correctIndex: 0,
        explanation: {
          hi: 'सत्यनाम ही सतगुरु कबीर साहेब का मूल मंत्र और शाश्वत सार है।',
          pb: 'ਸਤਯਨਾਮ ਹੀ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦਾ ਮੂਲ ਉਪਦੇਸ਼ ਹੈ।',
          en: 'Satyanaam is the supreme, primordial vibration and core teaching of Satguru Kabir Saheb.',
        },
      },
    ],
  },

  {
    id: 'sakhi-5',
    number: 5,
    grantha: 'Bijak',
    category: 'satya-aacharan',
    categoryTitle: {
      hi: 'सत्य एवं विवेक अंग',
      pb: 'ਸੱਚ ਤੇ ਵਿਵੇਕ ਅੰਗ',
      en: 'Truth & Discrimination (Bijak)',
    },
    text: {
      hi: 'साँच बराबर तप नहीं, झूठ बराबर पाप ।\nजाके हिरदै साँच है, ताके हिरदै आप ॥',
      pb: 'ਸਾਂਚ ਬਰਾਬਰ ਤਪ ਨਹੀਂ, ਝੂਠ ਬਰਾਬਰ ਪਾਪ ।\nਜਾਕੇ ਹਿਰਦੈ ਸਾਂਚ ਹੈ, ਤਾਕੇ ਹਿਰਦੈ ਆਪ ॥',
      en: 'Saanch baraabar tap nahin, jhooth baraabar paap |\nJaake hirdai saanch hai, taake hirdai aap ||',
    },
    transliteration: 'Sanch barabar tap nahi, jhooth barabar paap. Jaake hirde sanch hai, take hirde aap.',
    bhavarth: {
      hi: 'सत्य के समान इस संसार में कोई श्रेष्ठ तपस्या नहीं है, और असत्य (झूठ) के समान कोई बड़ा पाप या पतन नहीं है। जिस मनुष्य के हृदय में सत्य, निष्कपटता और सत्यनाम का वास होता है, उसके निर्मल हृदय में स्वयं परमात्मा (सतगुरु) साक्षात निवास करते हैं।',
      pb: 'ਸੱਚ ਦੇ ਬਰਾਬਰ ਦੁਨੀਆ ਵਿੱਚ ਕੋਈ ਵੱਡੀ ਤਪੱਸਿਆ ਨਹੀਂ ਹੈ ਅਤੇ ਝੂਠ ਦੇ ਬਰਾਬਰ ਕੋਈ ਪਾਪ ਨਹੀਂ। ਜਿਸ ਮਨੁੱਖ ਦੇ ਹਿਰਦੇ ਵਿੱਚ ਸੱਚ ਅਤੇ ਨਿਰਛਲਤਾ ਵਸਦੀ ਹੈ, ਉਸ ਦੇ ਪਵਿੱਤਰ ਹਿਰਦੇ ਵਿੱਚ ਪ੍ਰਮਾਤਮਾ ਖ਼ੁਦ ਵਾਸ ਕਰਦਾ ਹੈ।',
      en: 'There is no austerity equal to Truth, and no affliction or misstep greater than falsehood. In whose heart Truth, transparency, and Satyanaam reside—within that very sanctuary, the Divine Self is directly revealed.',
    },
    wordMeanings: {
      hi: [
        { word: 'साँच (Saanch)', meaning: 'सत्य, यथार्थ, निष्कपट सत्यनाम' },
        { word: 'तप (Tap)', meaning: 'तपस्या, आत्म-अनुशासन, सर्वोच्च साधना' },
        { word: 'हिरदै (Hirdai)', meaning: 'हृदय, अंतःकरण' },
        { word: 'आप (Aap)', meaning: 'स्वयं परमात्मा, सतगुरु' },
      ],
      pb: [
        { word: 'ਸਾਂਚ (Saanch)', meaning: 'ਸੱਚਾਈ, ਸਤਯਨਾਮ' },
        { word: 'ਤਪ (Tap)', meaning: 'ਤਪੱਸਿਆ, ਸਭ ਤੋਂ ਉੱਚੀ ਭਗਤੀ' },
        { word: 'ਹਿਰਦੈ (Hirdai)', meaning: 'ਦਿਲ, ਹਿਰਦਾ' },
        { word: 'ਆਪ (Aap)', meaning: 'ਸੱਚਾ ਪ੍ਰਮਾਤਮਾ ਆਪ' },
      ],
      en: [
        { word: 'Saanch', meaning: 'Absolute Truth, authenticity, Satyanaam' },
        { word: 'Tap', meaning: 'Spiritual austerity, penance, discipline' },
        { word: 'Hirdai', meaning: 'The sacred heart sanctuary' },
        { word: 'Aap', meaning: 'The Supreme Divine Self, the Master' },
      ],
    },
    contemplation: {
      hi: 'क्या मेरे वचन, विचार और कर्म एक समान सच्चे हैं, अथवा मैं अपने लाभ के लिए असत्य और छल का सहारा लेता हूँ?',
      pb: 'ਕੀ ਮੇਰੇ ਬੋਲਾਂ ਅਤੇ ਕੰਮਾਂ ਵਿੱਚ ਸੱਚਾਈ ਹੈ ਜਾਂ ਮੈਂ ਸੁਆਰਥ ਲਈ ਝੂਠ ਬੋਲਦਾ ਹਾਂ?',
      en: 'Are my thoughts, speech, and deeds harmoniously aligned with Truth, or do I compromise with deceit for personal convenience?',
    },
    practicalApplication: {
      hi: 'आज प्रत्येक परिस्थिति में सत्य का ही पक्ष लें। चाहे कैसी भी कठिन स्थिति हो, छल-कपट से दूर रहकर सरलता व निष्कपटता बनाए रखें।',
      pb: 'ਅੱਜ ਹਰ ਹਾਲਤ ਵਿੱਚ ਸੱਚ ਦਾ ਸਾਥ ਦਿਓ ਅਤੇ ਝੂਠ ਤੇ ਧੋਖੇ ਤੋਂ ਪੂਰੀ ਤਰ੍ਹਾਂ ਦੂਰ ਰਹੋ।',
      en: 'Stand firmly for truthfulness today. Speak straightforwardly with love, rejecting deceit, manipulation, or false flattery.',
    },
    samarpanPrayer: {
      hi: 'हे सत्यस्वरुप सतगुरु कबीर साहेब! मेरे मन, वचन और कर्म में सत्य का वास हो। असत्य और प्रपंच से मेरी रक्षा कीजिए और अपने पावन सत्यनाम में मेरा वास बनाए रखिए। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ! ਮੇਰੇ ਮਨ ਵਿੱਚ ਸਦਾ ਸੱਚ ਦਾ ਵਾਸ ਹੋਵੇ ਅਤੇ ਮੈਨੂੰ ਝੂਠ ਤੋਂ ਬਚਾ ਕੇ ਆਪਣੇ ਸਤਯਨਾਮ ਨਾਲ ਜੋੜੀ ਰੱਖੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Truth-Embodied Satguru Kabir Saheb! May my thoughts, speech, and deeds dwell forever in Truth. Guard me against all falsehood, and anchor me in Satyanaam. Saheb Bandagi Saheb!',
    },
    contextNote: {
      hi: 'बीजक का यह आधारभूत सूत्र आध्यात्मिक जीवन में सत्य के पालन को ब्रह्म-साक्षात्कार का द्वार घोषित करता है।',
      pb: 'ਬੀਜਕ ਦਾ ਇਹ ਪਵਿੱਤਰ ਬਚਨ ਸੱਚ ਦੇ ਪਾਲਣ ਨੂੰ ਪ੍ਰਭੂ-ਦਰਸ਼ਨ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਸਾਧਨ ਮੰਨਦਾ ਹੈ।',
      en: 'From the sacred Bijak, this formula declares that living in pure truth is the direct gateway to divine communion.',
    },
    quiz: [
      {
        id: 'q5-1',
        question: {
          hi: 'सतगुरु कबीर साहेब के अनुसार सबसे बड़ी तपस्या कौन सी है?',
          pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਅਨੁਸਾਰ ਸਭ ਤੋਂ ਵੱਡੀ ਤਪੱਸਿਆ ਕਿਹੜੀ ਹੈ?',
          en: 'According to Satguru Kabir Saheb, what is the greatest form of spiritual discipline (tap)?',
        },
        options: {
          hi: ['सत्य (साँच) का आचरण करना', 'पहाड़ों पर भूखे रहना', 'कड़ी धूप में बैठना', 'मौन रहने का दिखावा'],
          pb: ['ਸੱਚ (ਸਾਂਚ) ਉੱਤੇ ਚੱਲਣਾ', 'ਪਹਾੜਾਂ ਤੇ ਭੁੱਖੇ ਰਹਿਣਾ', 'ਧੁੱਪ ਵਿੱਚ ਬੈਠਣਾ', 'ਮੌਨ ਰਹਿਣ ਦਾ ਵਿਖਾਵਾ'],
          en: ['Living and practicing Truth (Saanch)', 'Starving on mountain peaks', 'Sitting in scorching heat', 'Feigning silence'],
        },
        correctIndex: 0,
        explanation: {
          hi: '"साँच बराबर तप नहीं" — सत्य से बढ़कर कोई तपस्या नहीं हो सकती।',
          pb: '"ਸਾਂਚ ਬਰਾਬਰ ਤਪ ਨਹੀਂ" — ਸੱਚ ਸਭ ਤੋਂ ਉੱਚਾ ਤਪ ਹੈ।',
          en: '"Saanch baraabar tap nahin" affirms that living in truth surpasses all physical mortifications.',
        },
      },
      {
        id: 'q5-2',
        question: {
          hi: 'परमात्मा (आप) किसके हृदय में साक्षात निवास करते हैं?',
          pb: 'ਪ੍ਰਮਾਤਮਾ (ਆਪ) ਕਿਸ ਦੇ ਹਿਰਦੇ ਵਿੱਚ ਵਾਸ ਕਰਦਾ ਹੈ?',
          en: 'In whose heart does the Supreme Divine reside directly?',
        },
        options: {
          hi: ['जिसके हृदय में सत्य और निष्कपटता है', 'जिसके पास बहुत धन है', 'जो बहुत अहंकारी है', 'जो दूसरों की निंदा करता है'],
          pb: ['ਜਿਸ ਦੇ ਹਿਰਦੇ ਵਿੱਚ ਸੱਚ ਅਤੇ ਨਿਰਛਲਤਾ ਹੈ', 'ਜਿਸ ਕੋਲ ਬਹੁਤ ਧਨ ਹੈ', 'ਜੋ ਹੰਕਾਰੀ ਹੈ', 'ਜੋ ਦੂਜਿਆਂ ਦੀ ਨਿੰਦਾ ਕਰਦਾ ਹੈ'],
          en: ['One whose heart is clean, truthful, and free from deceit', 'One with great worldly wealth', 'One who is full of pride', 'One who slanders others'],
        },
        correctIndex: 0,
        explanation: {
          hi: '"जाके हिरदै साँच है, ताके हिरदै आप" — जहाँ सत्य है, वहीं परमात्मा का वास है।',
          pb: 'ਜਿੱਥੇ ਸੱਚ ਵਸਦਾ ਹੈ ਓਥੇ ਹੀ ਪ੍ਰਮਾਤਮਾ ਦਾ ਵਾਸ ਹੁੰਦਾ ਹੈ।',
          en: 'The Divine naturally dwells within the spotless sanctuary of a truthful heart.',
        },
      },
      {
        id: 'q5-3',
        question: {
          hi: 'सतगुरु कबीर साहेब ने सबसे बड़ा पाप किसे माना है?',
          pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਸਭ ਤੋਂ ਵੱਡਾ ਪਾਪ ਕਿਸ ਨੂੰ ਮੰਨਿਆ ਹੈ?',
          en: 'What is regarded as the gravest spiritual failing according to Satguru Kabir Saheb?',
        },
        options: {
          hi: ['झूठ, असत्य और कपट को', 'निर्धन होने को', 'कम पढ़ा-लिखा होने को', 'व्यापार करने को'],
          pb: ['ਝੂਠ ਅਤੇ ਧੋਖੇ ਨੂੰ', 'ਗਰੀਬ ਹੋਣ ਨੂੰ', 'ਘੱਟ ਪੜ੍ਹੇ ਹੋਣ ਨੂੰ', 'ਵਪਾਰ ਕਰਨ ਨੂੰ'],
          en: ['Falsehood, deceit, and hypocrisy', 'Being materially poor', 'Having less formal schooling', 'Engaging in honest commerce'],
        },
        correctIndex: 0,
        explanation: {
          hi: '"झूठ बराबर पाप" — असत्य मनुष्य की चेतना को कलुषित कर देता है।',
          pb: 'ਝੂਠ ਮਨੁੱਖ ਦੀ ਆਤਮਾ ਨੂੰ ਮੈਲਾ ਕਰ ਦਿੰਦਾ ਹੈ।',
          en: 'Falsehood darkens and obscures the spiritual clarity of the soul.',
        },
      },
      {
        id: 'q5-4',
        question: {
          hi: 'यह साखी सतगुरु कबीर साहेब के किस प्रमुख ग्रंथ से उद्धृत है?',
          pb: 'ਇਹ ਸਾਖੀ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੇ ਕਿਸ ਪ੍ਰਮੁੱਖ ਗ੍ਰੰਥ ਵਿੱਚੋਂ ਹੈ?',
          en: 'From which major scripture of Satguru Kabir Saheb is this couplet sourced?',
        },
        options: {
          hi: ['बीजक / साखी संग्रह', 'सांसारिक उपन्यास', 'इतिहास पुस्तक', 'कथा संग्रह'],
          pb: ['ਬੀਜਕ / ਸਾਖੀ ਸੰਗ੍ਰਹਿ', 'ਨਾਵਲ', 'ਇਤਿਹਾਸ', 'ਕਹਾਣੀਆਂ'],
          en: ['Bijak / Sakhi Sangrah', 'Secular novels', 'History chronologies', 'Folktales'],
        },
        correctIndex: 0,
        explanation: {
          hi: 'यह साखी बीजक और साखी संग्रह की सुप्रसिद्ध वाणी है।',
          pb: 'ਇਹ ਬੀਜਕ ਤੇ ਸਾਖੀ ਸੰਗ੍ਰਹਿ ਦੀ ਮਹਾਨ ਬਾਣੀ ਹੈ।',
          en: 'This verse is preserved with utmost sanctity across the Bijak and Sakhi Sangrah.',
        },
      },
      {
        id: 'q5-5',
        question: {
          hi: 'इस साखी को अपने जीवन में उतारने का सर्वोत्तम उपाय क्या है?',
          pb: 'ਇਸ ਸਾਖੀ ਨੂੰ ਜੀਵਨ ਵਿੱਚ ਅਪਣਾਉਣ ਦਾ ਸਭ ਤੋਂ ਉੱਤਮ ਤਰੀਕਾ ਕੀ ਹੈ?',
          en: 'What is the finest way to embody this sakhi in daily life?',
        },
        options: {
          hi: ['मन, वचन और कर्म तीनों में सत्यनिष्ठा और ईमानदारी बरतना', 'केवल दूसरों को उपदेश देना', 'तर्क-वितर्क करना', 'सत्य से मुंह मोड़ना'],
          pb: ['ਮਨ, ਬੋਲ ਅਤੇ ਕੰਮਾਂ ਵਿੱਚ ਸੱਚਾਈ ਤੇ ਇਮਾਨਦਾਰੀ ਰੱਖਣੀ', 'ਸਿਰਫ਼ ਦੂਜਿਆਂ ਨੂੰ ਭਾਸ਼ਣ ਦੇਣਾ', 'ਬਹਿਸ ਕਰਨਾ', 'ਸੱਚ ਤੋਂ ਭੱਜਣਾ'],
          en: ['Upholding unwavering honesty and sincerity in thought, word, and deed', 'Merely lecturing others', 'Arguing endlessly', 'Turning away from truth'],
        },
        correctIndex: 0,
        explanation: {
          hi: 'सच्चा आचरण वही है जहाँ विचार, वाणी और कार्य में कोई भेद न हो।',
          pb: 'ਸੱਚਾ ਜੀਵਨ ਉਹੀ ਹੈ ਜਿੱਥੇ ਸੋਚ, ਬੋਲ ਅਤੇ ਕਰਮ ਵਿੱਚ ਏਕਤਾ ਹੋਵੇ।',
          en: 'Spiritual integrity is achieved when thoughts, words, and actions are unified in pristine truth.',
        },
      },
    ],
  },
  {
    id: 'sakhi-6',
    number: 6,
    grantha: 'Sakhi Sangrah',
    category: 'guru-mahima',
    categoryTitle: {
      hi: 'गुरु महिमा अंग',
      pb: 'ਗੁਰੂ ਮਹਿਮਾ ਅੰਗ',
      en: 'Glory of Satguru (Guru Mahima)',
    },
    text: {
      hi: 'जिन गुर जैसा जाण्या, तिन कूं तैसा लाभ ।\nओस प्यास न भाजसी, जब लगि धसै न आभ ॥',
      pb: 'ਜਿਨ ਗੁਰ ਜੈਸਾ ਜਾਣਿਆ, ਤਿਨ ਕੂੰ ਤੈਸਾ ਲਾਭ ।\nਓਸ ਪਿਆਸ ਨ ਭਾਜਸੀ, ਜਬ ਲਗਿ ਧਸੈ ਨ ਆਭ ॥',
      en: 'Jin Gur jaisa jaanya, tin koon taisa laabh |\nOas pyaas na bhaajasi, jab lagi dhasai na aabh ||',
    },
    transliteration: 'Jina Gura jaisa janya, tina kun taisa labha. Osa pyasa na bhajasi, jaba lagi dhasai na abha.',
    bhavarth: {
      hi: 'सतगुरु कबीर साहेब फरमाते हैं कि जिस शिष्य ने अपने गुरु को जैसा समझा (या जाना), उसे वैसा ही लाभ मिलता है। जैसे केवल ओस की बूंदें चाटने से प्यास नहीं बुझती, उसके लिए तो वर्षा की झड़ी (आभ/बादल का बरसना) में ही जाना पड़ता है। ठीक उसी तरह, ऊपरी या दिखावे की भक्ति से ईश्वर नहीं मिलते, गुरु के ज्ञान में पूरी तरह डूबना पड़ता है।',
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ ਕਿ ਜਿਸ ਜਗਿਆਸੂ ਨੇ ਆਪਣੇ ਸਤਿਗੁਰੂ ਜੀ ਨੂੰ ਜਿਸ ਭਾਵਨਾ ਨਾਲ ਸਮਝਿਆ ਤੇ ਜਾਣਿਆ, ਉਸਨੂੰ ਓਨਾ ਹੀ ਰੂਹਾਨੀ ਲਾਭ ਪ੍ਰਾਪਤ ਹੁੰਦਾ ਹੈ। ਜਿਵੇਂ ਮਾਤਰ ਤ੍ਰੇਲ (ਓਸ) ਦੀਆਂ ਬੂੰਦਾਂ ਚੱਟਣ ਨਾਲ ਪਿਆਸ ਨਹੀਂ ਬੁਝਦੀ, ਜਦ ਤੱਕ ਕਿ ਬੱਦਲਾਂ ਦੀ ਵਰਖਾ (ਆਭ) ਵਿੱਚ ਪੂਰੀ ਤਰ੍ਹਾਂ ਡੁੱਬਿਆ ਨਾ ਜਾਵੇ। ਠੀਕ ਉਸੇ ਤਰ੍ਹਾਂ, ਉੱਪਰਲੇ ਦਿਖਾਵੇ ਦੀ ਭਗਤੀ ਨਾਲ ਮੁਕਤੀ ਨਹੀਂ ਮਿਲਦੀ, ਸਤਿਗੁਰੂ ਦੇ ਗਿਆਨ ਵਿੱਚ ਪੂਰੀ ਤਰ੍ਹਾਂ ਲੀਨ ਹੋਣਾ ਪੈਂਦਾ ਹੈ।',
      en: 'Satguru Kabir Saheb reveals that as a seeker realizes and surrenders to the Master, so is the spiritual harvest they reap. Just as licking mere drops of dew cannot quench a burning thirst until one plunges into the deluge of the rainclouds, superficial devotion cannot liberate the soul until one is fully immersed in the ocean of the Satguru’s wisdom.',
    },
    wordMeanings: {
      hi: [
        { word: 'गुर (Gur)', meaning: 'सतगुरु, आत्म-मार्गदर्शक' },
        { word: 'जाण्या (Jaanya)', meaning: 'जाना, हृदय से पहचाना' },
        { word: 'तिन कूं (Tin Koon)', meaning: 'उस साधक को' },
        { word: 'ओस (Oas)', meaning: 'ओस की बूंदें, बाह्य दिखावटी साधन' },
        { word: 'भाजसी (Bhaajasi)', meaning: 'मिटेगी, शांत होगी' },
        { word: 'धसै (Dhasai)', meaning: 'प्रवेश करे, आकंठ डूबे' },
        { word: 'आभ (Aabh)', meaning: 'बादल, ज्ञान की मूसलाधार वर्षा' },
      ],
      pb: [
        { word: 'ਗੁਰ (Gur)', meaning: 'ਸਤਿਗੁਰੂ ਜੀ' },
        { word: 'ਜਾਣਿਆ (Jaanya)', meaning: 'ਪਛਾਣਿਆ, ਦਿਲੋਂ ਸਮਝਿਆ' },
        { word: 'ਤਿਨ ਕੂੰ (Tin Koon)', meaning: 'ਉਸ ਜਗਿਆਸੂ ਨੂੰ' },
        { word: 'ਓਸ (Oas)', meaning: 'ਤ੍ਰੇਲ ਦੀਆਂ ਬੂੰਦਾਂ' },
        { word: 'ਭਾਜਸੀ (Bhaajasi)', meaning: 'ਬੁਝੇਗੀ, ਦੂਰ ਹੋਵੇਗੀ' },
        { word: 'ਧਸੈ (Dhasai)', meaning: 'ਡੁੱਬ ਜਾਵੇ, ਦਾਖਲ ਹੋਵੇ' },
        { word: 'ਆਭ (Aabh)', meaning: 'ਬੱਦਲਾਂ ਦੀ ਅੰਮ੍ਰਿਤ ਵਰਖਾ' },
      ],
      en: [
        { word: 'Gur', meaning: 'The Satguru' },
        { word: 'Jaanya', meaning: 'Realized and perceived' },
        { word: 'Tin Koon', meaning: 'Unto that seeker' },
        { word: 'Oas', meaning: 'Drops of dew' },
        { word: 'Bhaajasi', meaning: 'Will be quenched' },
        { word: 'Dhasai', meaning: 'Immerses completely' },
        { word: 'Aabh', meaning: 'Rainclouds of grace' },
      ],
    },
    contemplation: {
      hi: 'क्या मेरा आध्यात्मिक जुड़ाव केवल बाहरी रस्मों तक सीमित है, या मैं सतगुरु के वचनों और ज्ञान में पूरी तरह डूब रहा हूँ?',
      pb: 'ਕੀ ਮੇਰਾ ਨਾਤਾ ਕੇਵਲ ਰਸਮੀ ਹੈ ਜਾਂ ਮੈਂ ਗੁਰੂ ਜੀ ਦੀ ਸਿੱਖਿਆ ਵਿੱਚ ਪੂਰੀ ਤਰ੍ਹਾਂ ਰੰਗਿਆ ਹੋਇਆ ਹਾਂ?',
      en: 'Is my spiritual dedication merely external and superficial, or am I diving headlong into the ocean of the Master’s wisdom?',
    },
    practicalApplication: {
      hi: 'आज के दिन सतगुरु के किसी एक गूढ़ उपदेश पर गहरा चिंतन करें और दिखावटी भक्ति के स्थान पर आंतरिक समर्पण का अभ्यास करें।',
      pb: 'ਅੱਜ ਦੇ ਦਿਨ ਦਿਖਾਵੇ ਦੀ ਥਾਂ ਅੰਤਰਮੁਖੀ ਸਮਰਪਣ ਅਤੇ ਸੱਚੇ ਅਭਿਆਸ ਤੇ ਧਿਆਨ ਕੇਂਦਰਿਤ ਕਰੋ।',
      en: 'Today, move past mere outer rituals and immerse yourself in sincere inner contemplation and genuine remembrance.',
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु! मेरी अल्प मति और दिखावे की प्यास को दूर करके मुझे अपने कृपा-जल की वर्षा में पूर्णतः सराबोर कर दीजिए। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ ਜੀ! ਮੈਨੂੰ ਆਪਣੇ ਗਿਆਨ ਦੀ ਪਾਵਨ ਵਰਖਾ ਵਿੱਚ ਪੂਰਨ ਤੌਰ ਤੇ ਭਿਓਂ ਦਿਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Satguru! Quench the deep thirst of my wandering soul by drowning me in the celestial rain of Your divine awareness. Saheb Bandagi Saheb!',
    },
    contextNote: {
      hi: 'यह साखी गुरु-महिमा अंग की अत्यंत प्रसिद्ध साखी है, जो स्पष्ट करती है कि सतगुरु के प्रति जैसी निष्ठा होगी, वैसा ही फल प्राप्त होगा।',
      pb: 'ਇਹ ਸਾਖੀ ਗੁਰੂ ਮਹਿਮਾ ਅੰਗ ਦੀ ਮਹਾਨ ਸਾਖੀ ਹੈ ਜੋ ਸ਼ਰਧਾ ਅਤੇ ਡੂੰਘੇ ਸਮਰਪਣ ਦੀ ਮਹੱਤਤਾ ਸਮਝਾਉਂਦੀ ਹੈ।',
      en: 'This classic Sakhi illustrates that spiritual attainment is directly proportional to the depth of the disciple’s surrender and reverence.',
    },
    quiz: [
      {
        id: 'q6-1',
        question: {
          hi: 'सतगुरु कबीर साहेब के अनुसार शिष्य को गुरु से कैसा लाभ प्राप्त होता है?',
          pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਅਨੁਸਾਰ ਚੇਲੇ ਨੂੰ ਗੁਰੂ ਤੋਂ ਕਿਸ ਤਰ੍ਹਾਂ ਦਾ ਲਾਭ ਮਿਲਦਾ ਹੈ?',
          en: 'According to Satguru Kabir Saheb, what kind of spiritual fruit does a disciple receive from the Guru?',
        },
        options: {
          hi: ['जैसा वह गुरु को समझता और जानता है', 'केवल धन-दौलत का', 'बिना किसी समर्पण के सब कुछ', 'कोई लाभ नहीं मिलता'],
          pb: ['ਜਿਵੇਂ ਉਹ ਗੁਰੂ ਨੂੰ ਸਮਝਦਾ ਅਤੇ ਜਾਣਦਾ ਹੈ', 'ਕੇਵਲ ਧਨ ਦੌਲਤ', 'ਬਿਨਾਂ ਸਮਰਪਣ ਦੇ ਸਭ ਕੁਝ', 'ਕੋਈ ਲਾਭ ਨਹੀਂ'],
          en: ['Directly proportional to how deeply they know and perceive the Guru', 'Only worldly wealth', 'Everything without effort', 'None at all'],
        },
        correctIndex: 0,
        explanation: {
          hi: '"जिन गुर जैसा जाण्या, तिन कूं तैसा लाभ" — जैसी साधक की भावना और समझ होगी, वैसा ही लाभ मिलेगा।',
          pb: 'ਜਿਵੇਂ ਜਗਿਆਸੂ ਦੀ ਭਾਵਨਾ ਤੇ ਸ਼ਰਧਾ ਹੋਵੇਗੀ, ਓਨਾ ਹੀ ਫਲ ਪ੍ਰਾਪਤ ਹੋਵੇਗਾ।',
          en: 'One’s inner realization is in exact accordance with one’s reverence and faith.',
        },
      },
      {
        id: 'q6-2',
        question: {
          hi: 'साखी में "ओस" और "आभ" का क्या दृष्टांत दिया गया है?',
          pb: 'ਸਾਖੀ ਵਿੱਚ "ਓਸ" ਅਤੇ "ਆਭ" ਦਾ ਕੀ ਪ੍ਰਤੀਕ ਹੈ?',
          en: 'What do "Oas" (dew) and "Aabh" (rainclouds) symbolize in this verse?',
        },
        options: {
          hi: ['ओस = दिखावटी अल्प साधन, आभ = ज्ञान की मूसलाधार वर्षा', 'दोनों केवल मौसम के नाम हैं', 'ओस को आभ से श्रेष्ठ बताया है', 'इनका कोई आध्यात्मिक अर्थ नहीं है'],
          pb: ['ਓਸ = ਬਾਹਰੀ ਦਿਖਾਵਾ, ਆਭ = ਗਿਆਨ ਦੀ ਪੂਰਨ ਵਰਖਾ', 'ਸਿਰਫ ਮੌਸਮ ਦੇ ਨਾਮ', 'ਓਸ ਵੱਡੀ ਹੈ', 'ਕੋਈ ਅਰਥ ਨਹੀਂ'],
          en: ['Oas = superficial drops, Aabh = complete immersion in the downpour of wisdom', 'Ordinary weather terms', 'Dew is greater than rain', 'No spiritual symbolism'],
        },
        correctIndex: 0,
        explanation: {
          hi: 'ओस की बूंदों से प्यास नहीं बुझती, प्यास बुझाने के लिए आभ (वर्षा की झड़ी) में ही उतरना पड़ता है।',
          pb: 'ਤ੍ਰੇਲ ਦੀਆਂ ਬੂੰਦਾਂ ਪਿਆਸ ਨਹੀਂ ਬੁਝਾ ਸਕਦੀਆਂ, ਬੱਦਲਾਂ ਦੀ ਵਰਖਾ ਵਿੱਚ ਹੀ ਜਾਣਾ ਪੈਂਦਾ ਹੈ।',
          en: 'Dewdrops cannot quench spiritual longing; only full immersion in the clouds of divine grace brings liberation.',
        },
      },
    ],
  },
  {
    id: 'sakhi-kabir-sagar-1',
    number: 101,
    grantha: 'Kabir Sagar',
    category: 'creation-truth',
    categoryTitle: {
      hi: 'सृष्टि रचना बोध',
      pb: 'ਸ੍ਰਿਸ਼ਟੀ ਰਚਨਾ ਬੋਧ',
      en: 'Knowledge of Creation',
    },
    text: {
      hi: 'अक्षर पुरुष एक पेड़ है, निरंजन वाकी डार ।\nतीनों देवा शाखा हैं, पात रूप संसार ॥',
      pb: 'ਅਕਸ਼ਰ ਪੁਰੁਸ਼ ਏਕ ਪੇੜ ਹੈ, ਨਿਰੰਜਨ ਵਾਕੀ ਡਾਰ ।\nਤੀਨੋਂ ਦੇਵਾ ਸਾਖਾ ਹੈਂ, ਪਾਤ ਰੂਪ ਸੰਸਾਰ ॥',
      en: 'Akshar Purush ek ped hai, Niranjan vaaki daar |\nTeeno Deva shaakha hain, paat roop sansar ||',
    },
    transliteration: 'Akshara Purusha eka peda hai, Niranjana vaki dara. Tino Deva shakha hain, pata rupa sansara.',
    bhavarth: {
      hi: 'सतगुरु कबीर साहेब सृष्टि के रहस्य को समझाते हुए कहते हैं कि अक्षर पुरुष (ब्रह्म) एक वृक्ष के समान है, और ज्योति निरंजन (काल) उसकी शाखा है। ब्रह्मा, विष्णु और महेश उस शाखा की उप-शाखाएं हैं, और सारा संसार पत्तों के समान है जो अस्थायी है।',
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਸ੍ਰਿਸ਼ਟੀ ਦੇ ਭੇਤ ਨੂੰ ਸਮਝਾਉਂਦੇ ਹੋਏ ਫੁਰਮਾਉਂਦੇ ਹਨ ਕਿ ਅਕਸ਼ਰ ਪੁਰਸ਼ ਇੱਕ ਰੁੱਖ ਵਰਗਾ ਹੈ ਅਤੇ ਨਿਰੰਜਨ ਉਸਦੀ ਟਾਹਣੀ ਹੈ। ਬ੍ਰਹਮਾ, ਵਿਸ਼ਨੂੰ ਤੇ ਮਹੇਸ਼ ਉਸ ਟਾਹਣੀ ਦੀਆਂ ਸ਼ਾਖਾਵਾਂ ਹਨ ਅਤੇ ਸਾਰਾ ਸੰਸਾਰ ਪੱਤਿਆਂ ਵਾਂਗ ਹੈ ਜੋ ਸਥਾਈ ਨਹੀਂ ਹੈ।',
      en: 'Satguru Kabir Saheb explains the hierarchy of creation: the Eternal Spirit (Akshar Purush) is like the trunk of a tree, Niranjan is its branch, the three deities (Brahma, Vishnu, Mahesh) are sub-branches, and the entire physical universe is like temporary leaves.',
    },
    wordMeanings: {
      hi: [
        { word: 'अक्षर पुरुष (Akshar Purush)', meaning: 'ब्रह्म, जो नाशवान नहीं है' },
        { word: 'निरंजन (Niranjan)', meaning: 'काल ब्रह्म, ज्योति निरंजन' },
        { word: 'डार (Daar)', meaning: 'शाखा या टहनी' },
        { word: 'पात (Paat)', meaning: 'पत्ता (संसार के जीव)' },
      ],
      pb: [
        { word: 'ਅਕਸ਼ਰ ਪੁਰੁਸ਼', meaning: 'ਬ੍ਰਹਮ, ਜੋ ਅਵਿਨਾਸ਼ੀ ਹੈ' },
        { word: 'ਨਿਰੰਜਨ', meaning: 'ਕਾਲ ਬ੍ਰਹਮ, ਜਯੋਤੀ ਨਿਰੰਜਨ' },
        { word: 'ਡਾਰ', meaning: 'ਟਾਹਣੀ' },
        { word: 'ਪਾਤ', meaning: 'ਪੱਤਾ (ਸੰਸਾਰ ਦੇ ਜੀਵ)' },
      ],
      en: [
        { word: 'Akshar Purush', meaning: 'The Imperishable Spirit' },
        { word: 'Niranjan', meaning: 'The entity of Time and Illusion' },
        { word: 'Daar', meaning: 'Branch' },
        { word: 'Paat', meaning: 'Leaves (representing the souls in the world)' },
      ],
    },
    contemplation: {
      hi: 'क्या मैं सृष्टि के इस विराट स्वरूप को समझकर मूल (जड़) की खोज में लगा हूँ या केवल पत्तों (संसार) में ही उलझा हूँ?',
      pb: 'ਕੀ ਮੈਂ ਸ੍ਰਿਸ਼ਟੀ ਦੇ ਇਸ ਵਿਰਾਟ ਰੂਪ ਨੂੰ ਸਮਝ ਕੇ ਜੜ੍ਹ (ਮੂਲ) ਦੀ ਭਾਲ ਕਰ ਰਿਹਾ ਹਾਂ ਜਾਂ ਸਿਰਫ ਪੱਤਿਆਂ (ਸੰਸਾਰ) ਵਿੱਚ ਹੀ ਉਲਝਿਆ ਹੋਇਆ ਹਾਂ?',
      en: 'Am I seeking the Root (the Eternal Source) or am I lost in the temporary leaves of wordly existence?',
    },
    practicalApplication: {
      hi: 'आज के दिन संसार की नश्वरता को याद रखते हुए अपने ध्यान को उस मूल सत्य (सत्यनाम) की ओर ले जाएं जो सदा स्थिर रहता है।',
      pb: 'ਅੱਜ ਦੇ ਦਿਨ ਸੰਸਾਰ ਦੀ ਨਾਸ਼ਮਾਨਤਾ ਨੂੰ ਯਾਦ ਰੱਖਦੇ ਹੋਏ ਆਪਣਾ ਧਿਆਨ ਉਸ ਮੂਲ ਸੱਚ ਵੱਲ ਲਗਾਓ ਜੋ ਸਦਾ ਸਥਿਰ ਰਹਿੰਦਾ ਹੈ।',
      en: 'Reflect on the temporary nature of things today and direct your awareness toward the Eternal Truth that remains unchanged.',
    },
    samarpanPrayer: {
      hi: 'हे साहेब! मुझे संसार के मोह-जाल से निकालकर अपनी पावन शरण में लें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਾਹੇਬ ਜੀ! ਮੈਨੂੰ ਸੰਸਾਰ ਦੇ ਮੋਹ-ਜਾਲ ਵਿਚੋਂ ਕੱਢ ਕੇ ਆਪਣੀ ਪਾਵਨ ਸ਼ਰਨ ਵਿੱਚ ਰੱਖੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Saheb! Lead me from the web of illusion into Your sacred sanctuary. Saheb Bandagi Saheb!',
    },
    contextNote: {
      hi: 'यह साखी कबीर सागर के "बोध सागर" अंग से ली गई है, जो ब्रह्मांड की उत्पत्ति और संरचना का गूढ़ ज्ञान देती है।',
      pb: 'ਇਹ ਸਾਖੀ ਕਬੀਰ ਸਾਗਰ ਦੇ "ਬੋਧ ਸਾਗਰ" ਅੰਗ ਵਿੱਚੋਂ ਲਈ ਗਈ ਹੈ ਜੋ ਬ੍ਰਹਿਮੰਡ ਦੀ ਬਣਤਰ ਦਾ ਡੂੰਘਾ ਗਿਆਨ ਦਿੰਦੀ ਹੈ।',
      en: 'This sakhi from Kabir Sagar provides deep insight into the structure and origin of the universe.',
    },
    quiz: [
      {
        id: 'q-ks-1',
        question: {
          hi: 'इस साखी में "वृक्ष" (पेड़) किसे कहा गया है?',
          pb: 'ਇਸ ਸਾਖੀ ਵਿੱਚ "ਰੁੱਖ" (ਪੇੜ) ਕਿਸਨੂੰ ਕਿਹਾ ਗਿਆ ਹੈ?',
          en: 'In this couplet, who is referred to as the "Tree"?',
        },
        options: {
          hi: ['अक्षर पुरुष को', 'निरंजन को', 'संसार को', 'ब्रह्मा को'],
          pb: ['ਅਕਸ਼ਰ ਪੁਰੁਸ਼ ਨੂੰ', 'ਨਿਰੰਜਨ ਨੂੰ', 'ਸੰਸਾਰ ਨੂੰ', 'ਬ੍ਰਹਮਾ ਨੂੰ'],
          en: ['Akshar Purush', 'Niranjan', 'The World', 'Brahma'],
        },
        correctIndex: 0,
        explanation: {
          hi: 'अक्षर पुरुष को वृक्ष कहा गया है क्योंकि वही मूल आधार है जिससे सृष्टि का विस्तार हुआ है।',
          pb: 'ਅਕਸ਼ਰ ਪੁਰੁਸ਼ ਨੂੰ ਰੁੱਖ ਕਿਹਾ ਗਿਆ ਹੈ ਕਿਉਂਕਿ ਉਹੀ ਮੂਲ ਆਧਾਰ ਹੈ ਜਿਸ ਤੋਂ ਸ੍ਰਿਸ਼ਟੀ ਦਾ ਵਿਸਥਾਰ ਹੋਇਆ ਹੈ।',
          en: 'Akshar Purush is the Root from which the entire cosmic tree expands.',
        },
      },
    ],
  },
  {
    id: 'sakhi-bijak-1',
    number: 201,
    grantha: 'Bijak',
    category: 'maya-illusion',
    categoryTitle: {
      hi: 'माया बोध',
      pb: 'ਮਾਇਆ ਬੋਧ',
      en: 'Illusion (Maya)',
    },
    text: {
      hi: 'माया महा ठगिनी हम जानी ।\nतिरगुन फाँस लिए कर डोलै, बोलै मधुरी बानी ॥',
      pb: 'ਮਾਇਆ ਮਹਾ ਠਗਿਨੀ ਹਮ ਜਾਨੀ ।\nਤਿਰਗੁਨ ਫਾਂਸ ਲੀਏ ਕਰ ਡੋਲੈ, ਬੋਲੈ ਮਧੁਰੀ ਬਾਨੀ ॥',
      en: 'Maya maha thagini hum jaani |\nTirgun phans liye kar doley, boley madhuri baani ||',
    },
    transliteration: 'Maya maha thagini ham jani. Tirguna phansa liye kara doley, boley madhuri bani.',
    bhavarth: {
      hi: 'सतगुरु कबीर साहेब चेतावनी देते हुए कहते हैं कि माया सबसे बड़ी ठगिनी है। वह अपने हाथ में तीन गुणों (सत, रज, तम) की फांसी लेकर घूमती है और बहुत ही मीठी वाणी बोलती है ताकि जीव को अपने मोहपाश में बांध सके।',
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਚੇਤਾਵਨੀ ਦਿੰਦੇ ਹੋਏ ਫੁਰਮਾਉਂਦੇ ਹਨ ਕਿ ਮਾਇਆ ਸਭ ਤੋਂ ਵੱਡੀ ਠਗਣੀ ਹੈ। ਉਹ ਆਪਣੇ ਹੱਥ ਵਿੱਚ ਤਿੰਨਾਂ ਗੁਣਾਂ ਦੀ ਫਾਹੀ ਲੈ ਕੇ ਘੁੰਮਦੀ ਹੈ ਅਤੇ ਬਹੁਤ ਮਿੱਠੀ ਬੋਲੀ ਬੋਲਦੀ ਹੈ ਤਾਂ ਜੋ ਜੀਵਾਂ ਨੂੰ ਆਪਣੇ ਮੋਹ-ਜਾਲ ਵਿੱਚ ਫਸਾ ਸਕੇ।',
      en: 'Satguru Kabir Saheb warns that Illusion (Maya) is a master deceiver. She holds the snare of the three gunas (qualities of nature) and speaks sweetly to trap the soul in the cycle of worldliness.',
    },
    wordMeanings: {
      hi: [
        { word: 'ठगिनी (Thagini)', meaning: 'धोखा देने वाली, ठगने वाली' },
        { word: 'तिरगुन (Tirgun)', meaning: 'तीनों गुण (सत, रज, तम)' },
        { word: 'फाँस (Phans)', meaning: 'फंदा या जाल' },
        { word: 'बानी (Baani)', meaning: 'वाणी या बोली' },
      ],
      pb: [
        { word: 'ਠਗਿਨੀ', meaning: 'ਧੋਖਾ ਦੇਣ ਵਾਲੀ' },
        { word: 'ਤਿਰਗੁਨ', meaning: 'ਤਿੰਨ ਗੁਣ (ਸਤ, ਰਜ, ਤਮ)' },
        { word: 'ਫਾਂਸ', meaning: 'ਫਾਹੀ' },
        { word: 'ਬਾਨੀ', meaning: 'ਬੋਲੀ' },
      ],
      en: [
        { word: 'Thagini', meaning: 'Deceiver / Swindler' },
        { word: 'Tirgun', meaning: 'The three modes of nature' },
        { word: 'Phans', meaning: 'Trap / Snare' },
        { word: 'Baani', meaning: 'Speech / Language' },
      ],
    },
    contemplation: {
      hi: 'क्या मैं संसार की मिठास और आकर्षण में फंसकर अपने असली लक्ष्य को तो नहीं भूल रहा?',
      pb: 'ਕੀ ਮੈਂ ਸੰਸਾਰ ਦੇ ਆਕਰਸ਼ਣ ਵਿੱਚ ਫਸ ਕੇ ਆਪਣੇ ਅਸਲ ਮਕਸਦ ਨੂੰ ਤਾਂ ਨਹੀਂ ਭੁੱਲ ਰਿਹਾ?',
      en: 'Am I getting trapped by the sweet illusions of the world and forgetting my ultimate spiritual purpose?',
    },
    practicalApplication: {
      hi: 'आज सतर्क रहें कि कहीं कोई स्वार्थ या बाहरी आकर्षण आपको सत्य के मार्ग से विचलित न कर दे।',
      pb: 'ਅੱਜ ਸੁਚੇਤ ਰਹੋ ਕਿ ਕੋਈ ਸੁਆਰਥ ਜਾਂ ਬਾਹਰੀ ਖਿੱਚ ਤੁਹਾਨੂੰ ਸੱਚ ਦੇ ਮਾਰਗ ਤੋਂ ਭਟਕਾ ਨਾ ਦੇਵੇ।',
      en: 'Be vigilant today and ensure that fleeting desires or worldly attractions do not steer you away from the path of Integrity.',
    },
    samarpanPrayer: {
      hi: 'साहेब! मुझे माया के इस प्रपंच से बचाएं और विवेक प्रदान करें। साहेब बंदगी साहेब!',
      pb: 'ਸਾਹੇਬ ਜੀ! ਮੈਨੂੰ ਮਾਇਆ ਦੇ ਇਸ ਜਾਲ ਤੋਂ ਬਚਾਓ ਅਤੇ ਵਿਵੇਕ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Saheb! Protect me from the web of Maya and grant me the wisdom of discrimination. Saheb Bandagi Saheb!',
    },
    contextNote: {
      hi: 'यह प्रसिद्ध पद बीजक के "शब्द" भाग से लिया गया है, जिसमें सतगुरु कबीर साहेब ने माया के प्रलोभनकारी स्वरूप का वर्णन किया है।',
      pb: 'ਇਹ ਪ੍ਰਸਿੱਧ ਸ਼ਬਦ ਬੀਜਕ ਵਿੱਚੋਂ ਲਿਆ ਗਿਆ ਹੈ ਜਿਸ ਵਿੱਚ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਮਾਇਆ ਦੇ ਮੋਹਣੇ ਰੂਪ ਦਾ ਵਰਣਨ ਕੀਤਾ ਹੈ।',
      en: 'This famous verse from the Bijak describes the alluring and deceptive nature of the material world.',
    },
    quiz: [
      {
        id: 'q-bj-1',
        question: {
          hi: 'माया जीव को फंसाने के लिए किसका उपयोग करती है?',
          pb: 'ਮਾਇਆ ਜੀਵ ਨੂੰ ਫਸਾਉਣ ਲਈ ਕਿਸਦੀ ਵਰਤੋਂ ਕਰਦੀ ਹੈ?',
          en: 'What does Maya use to trap the living beings?',
        },
        options: {
          hi: ['तीनों गुणों का', 'कठोर वाणी का', 'सत्य का', 'त्याग का'],
          pb: ['ਤਿੰਨਾਂ ਗੁਣਾਂ ਦੀ', 'ਕਠੋਰ ਬੋਲੀ ਦੀ', 'ਸੱਚ ਦੀ', 'ਤਿਆਗ ਦੀ'],
          en: ['The Three Gunas', 'Harsh Speech', 'Truth', 'Renunciation'],
        },
        correctIndex: 0,
        explanation: {
          hi: 'माया तीनों गुणों (सत, रज, तम) के माध्यम से जीव को संसार के चक्र में बांधे रखती है।',
          pb: 'ਮਾਇਆ ਤਿੰਨਾਂ ਗੁਣਾਂ ਦੇ ਰਾਹੀਂ ਜੀਵ ਨੂੰ ਸੰਸਾਰ ਦੇ ਚੱਕਰ ਵਿੱਚ ਬੰਨ੍ਹ ਕੇ ਰੱਖਦੀ ਹੈ।',
          en: 'Maya uses the three qualities of nature to bind the soul to the worldly cycle.',
        },
      },
    ],
  },
];

const RAW_SAKHIS: Sakhi[] = [
  ...INITIAL_SAKHIS,
  ...SAKHIS_BATCH_1,
  ...SAKHIS_BATCH_2,
  ...SAKHIS_BATCH_3,
  ...SAKHIS_BATCH_4,
  ...SAKHIS_BATCH_5,
  ...SAKHIS_BATCH_6,
  ...SAKHIS_BATCH_7,
  ...SAKHIS_BATCH_8,
  ...SAKHIS_BATCH_9,
  ...SAKHIS_BATCH_10,
  ...SAKHIS_BATCH_11,
  ...SAKHIS_BATCH_12,
  ...SAKHIS_BATCH_13,
  ...SAKHIS_BATCH_14,
  ...SAKHIS_BATCH_15,
  ...SAKHIS_BATCH_16,
  ...SAKHIS_BATCH_17,
  ...SAKHIS_BATCH_18,
  ...SAKHIS_BATCH_19,
  ...SAKHIS_BATCH_20,
  ...SAKHIS_BATCH_21,
  ...SAKHIS_BATCH_22,
  ...SAKHIS_BATCH_23,
  ...SAKHIS_BATCH_24,
  ...SAKHIS_BATCH_25,
  ...SAKHIS_BATCH_26,
  ...SAKHIS_BATCH_27,
  ...SAKHIS_BATCH_28,
  ...SAKHIS_BATCH_29,
  ...SAKHIS_BATCH_30,
  ...SAKHIS_BATCH_31,
  ...SAKHIS_BATCH_32,
  ...SAKHIS_BATCH_33,
  ...SAKHIS_BATCH_34,
  ...SAKHIS_BATCH_35,
  ...SAKHIS_BATCH_36,
  ...SAKHIS_BATCH_37,
  ...SAKHIS_BATCH_38,
  ...SAKHIS_BATCH_39,
  ...SAKHIS_SHABD_KO_ANG,
  ...SAKHIS_JEEVAT_MRITAK_KO_ANG,
  ...SAKHIS_KAAL_KO_ANG,
  ...SAKHIS_SWAARATH_KO_ANG,
  ...SAKHIS_PARMAARTH_KO_ANG,
  ...SAKHIS_MAN_KO_ANG,
  ...SAKHIS_MAYA_KO_ANG,
  ...SAKHIS_MOH_KO_ANG,
  ...SAKHIS_KAAM_KO_ANG,
  ...SAKHIS_KRODH_KO_ANG,
  ...SAKHIS_LOBH_KO_ANG,
  ...SAKHIS_MAD_KO_ANG,
  ...SAKHIS_MAAN_KO_ANG,
  ...SAKHIS_NINDA_KO_ANG,
  ...SAKHIS_KATHANI_KO_ANG,
  ...SAKHIS_KARANI_KO_ANG,
  ...SAKHIS_KRAM_KO_ANG,
  ...SAKHIS_BHRAM_VIDHVANS_KO_ANG,
  ...SAKHIS_UPDESH_KO_ANG,
  ...SAKHIS_DAYA_KO_ANG,
  ...SAKHIS_DEENTA_KO_ANG,
  ...SAKHIS_SAANCH_KO_ANG,
  ...SAKHIS_PRABHAT_SANDHYA,
  ...SAKHIS_GYAN_GUDRI,
  ...SAKHIS_ARJINAMA,
  ...SAKHIS_AARTI,
];

// Deduplicate Sakhis strictly by ID and Number to prevent any duplicate Sakhis in database
const seenSakhiIds = new Set<string>();
const seenSakhiNumbers = new Set<number>();

export const SACRED_SAKHIS: Sakhi[] = RAW_SAKHIS.filter((s) => {
  if (!s || !s.id) return false;
  if (seenSakhiIds.has(s.id) || (s.number && seenSakhiNumbers.has(s.number))) {
    return false;
  }
  seenSakhiIds.add(s.id);
  if (s.number) seenSakhiNumbers.add(s.number);
  return true;
}).map(s => sanitizeSakhi(s));

/**
 * Returns the Daily Pawan Sakhi based on the current date, guaranteeing deterministic daily rotation at 12:00 AM local time.
 */
export function getDailyPawanSakhi(date: Date = new Date()): Sakhi {
  // Epoch day calculation based on local date (changes precisely at 12:00 AM local midnight)
  const localEpochDay = Math.floor(
    (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())) / (1000 * 60 * 60 * 24)
  );
  const index = Math.abs(localEpochDay) % SACRED_SAKHIS.length;
  return SACRED_SAKHIS[index];
}

/**
 * Spiritual understanding rank evaluator based on quiz score (0 to 5)
 */
export function evaluateSpiritualRank(score: number) {
  if (score >= 5) {
    return {
      title: {
        hi: 'परम हंस (Param Hans) — पूर्ण ब्रह्म ज्ञानी',
        pb: 'ਪਰਮ ਹੰਸ (Param Hans) — ਪੂਰਨ ਬ੍ਰਹਮ ਗਿਆਨੀ',
        en: 'Param Hans (Supreme Swan) — Pure Knower of Truth',
      },
      description: {
        hi: 'आपने साखी के गूढ़ रहस्यों और सत्यनाम के मर्म को पूर्ण निष्ठा व विवेक से समझा है। सतगुरु का पावन आशीष आप पर सदा बना रहे।',
        pb: 'ਤੁਸੀਂ ਸਾਖੀ ਦੇ ਡੂੰਘੇ ਭੇਤਾਂ ਅਤੇ ਸਤਯਨਾਮ ਦੇ ਮਰਮ ਨੂੰ ਪੂਰੀ ਸ਼ਰਧਾ ਨਾਲ ਸਮਝਿਆ ਹੈ। ਸਤਿਗੁਰੂ ਜੀ ਦੀ ਮਿਹਰ ਸਦਾ ਬਣੀ ਰਹੇ।',
        en: 'You have discerned the profound mystical wisdom of the Sakhi with pristine clarity and devotion. May the Master’s blessings be forever with you.',
      },
      badge: '👑',
    };
  }
  if (score >= 4) {
    return {
      title: {
        hi: 'सत्य साधक (Satya Sadhak) — निष्ठावान भक्त',
        pb: 'ਸਤਿ ਸਾਧਕ (Satya Sadhak) — ਸ਼ਰਧਾਵਾਨ ਭਗਤ',
        en: 'Satya Sadhak — Devoted Seeker of Truth',
      },
      description: {
        hi: 'साखी के आध्यात्मिक संदेश की आपकी समझ बहुत गहरी और प्रशंसनीय है। स्वाध्याय को जीवन में निरंतर प्रवाहित रखें।',
        pb: 'ਸਾਖੀ ਦੇ ਰੂਹਾਨੀ ਸੁਨੇਹੇ ਦੀ ਤੁਹਾਡੀ ਸਮਝ ਬਹੁਤ ਡੂੰਘੀ ਹੈ। ਸਵਾਧਿਆਏ ਨੂੰ ਜੀਵਨ ਵਿੱਚ ਨਿਰੰਤਰ ਜਾਰੀ ਰੱਖੋ।',
        en: 'Your spiritual grasp of the Sakhi is admirable. Continue to nurture this deep contemplative practice in daily living.',
      },
      badge: '🌸',
    };
  }
  if (score >= 3) {
    return {
      title: {
        hi: 'जिज्ञासु (Jigyasu) — सत्य के खोजी',
        pb: 'ਜਿਗਿਆਸੂ (Jigyasu) — ਸੱਚ ਦੇ ਖੋਜੀ',
        en: 'Jigyasu — Sincere Inquirer of Truth',
      },
      description: {
        hi: 'आपका हृदय सत्य की खोज में लगा है। मनन और चिंतन के अभ्यास से आपकी समझ और अधिक प्रखर होगी।',
        pb: 'ਤੁਹਾਡਾ ਮਨ ਸੱਚ ਦੀ ਖੋਜ ਵਿੱਚ ਲੱਗਾ ਹੋਇਆ ਹੈ। ਲਗਾਤਾਰ ਚਿੰਤਨ ਨਾਲ ਤੁਹਾਡੀ ਸਮਝ ਹੋਰ ਨਿਖਰੇਗੀ।',
        en: 'Your heart is genuinely inclined toward Truth. With regular contemplation, your discrimination will deepen further.',
      },
      badge: '🕊️',
    };
  }
  return {
    title: {
      hi: 'आरंभिक पथिक (Pathik) — शरणार्थी',
      pb: 'ਆਰੰਭਿਕ ਪਥਿਕ (Pathik) — ਸ਼ਰਨਾਰਥੀ',
      en: 'Pathik — Beginning Pilgrim of the Path',
    },
    description: {
      hi: 'साखी का पुनः स्वाध्याय करें और शब्दार्थ पर ध्यान दें। सतगुरु कबीर साहेब की वाणी प्रत्येक प्रयास को पावन बनाती है।',
      pb: 'ਸਾਖੀ ਦਾ ਦੁਬਾਰਾ ਸਵਾਧਿਆਏ ਕਰੋ ਅਤੇ ਸ਼ਬਦਾਰਥਾਂ ਨੂੰ ਧਿਆਨ ਨਾਲ ਸਮਝੋ। ਹਰ ਕੋਸ਼ਿਸ਼ ਸਫਲ ਹੁੰਦੀ ਹੈ।',
      en: 'Review the Sakhi’s word-by-word meanings and contemplate once more. Every reverent effort draws the soul nearer to light.',
    },
    badge: '🌿',
  };
}

function loadInitialOverrides(list: Sakhi[]): Sakhi[] {
  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem('sahebworld_sakhi_customizations_v2');
      if (stored) {
        const overrides = JSON.parse(stored);
        for (const sakhi of list) {
          if (overrides[sakhi.id]) {
            Object.assign(sakhi, overrides[sakhi.id]);
          }
        }
      }
    } catch {
      // Graceful fallback
    }
  }
  return list;
}

export const sakhisDatabase = loadInitialOverrides(SACRED_SAKHIS);
