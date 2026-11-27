import { NitnemSection } from '../../types';
import {
  AARTI_PATH_SECTION,
  SANDHYA_AARTI_1_SECTION,
  SANDHYA_AARTI_2_SECTION,
  SANDHYA_AARTI_3_SECTION,
  SANDHYA_AARTI_4_SECTION,
} from './aartiPath';
import {
  VINATI_PRAVANCHI_SECTION,
  SANDHYA_VINATI_1_SECTION,
  SANDHYA_VINATI_2_SECTION,
  SANDHYA_SUMIRAN_AARTI_SECTION,
  SANDHYA_SHLOK_DHYANAM_SECTION,
  SANDHYA_ANTIM_VINATI_SECTION,
} from './vinatiPravanchi';
import { SUMIRAN_SANDHYA_SAKHI_SECTION } from './sumiranSandhyaSakhi';
import { SANDHYA_PRABHAT_SANDHYA_SAKHI_SECTION } from './prabhatSandhyaSakhi';
import { GYAN_STOTRA_SECTION } from './gyanStotra';
import { VIGYAN_STOTRA_SECTION } from './vigyanStotra';
import { DAYASAGAR_STUTI_SECTION, ADHIK_MAHIMA_SECTION } from './dayasagarStuti';
import { CHETAVANI_SAKHI_SECTION } from './chetavaniSakhi';
import { SAT_KA_SHABAD_SECTION } from './satKaShabad';
import { GYAAN_GUDADI_SANDHYA_SECTION } from './gyaanGudadi';
import { ARJINAMA_SANDHYA_SECTION, SANDHYA_ARJINAMA_2_SECTION } from './arjinama';
import { SANDHYA_DHANAKSHARI_SECTION } from './dhanakshari';

export const SANDHYA_AARAMBH_VANDANA_SECTION: NitnemSection = {
  "id": "sandhya-aarambh-vandana",
  "majorCategoryId": "sandhya-path",
  "majorCategoryTitle": {
    "hi": "२. मूल संध्या पाठ",
    "pb": "੨. ਮੂਲ ਸੰਧਿਆ ਪਾਠ",
    "en": "2. Evening Sacred Recitation (Mool Sandhya Path)"
  },
  "subGroup": "वंदना",
  "title": {
    "hi": "आरंभ वंदना",
    "pb": "ਆਰੰਭ ਵੰਦਨਾ",
    "en": "Inaugural Salutation"
  },
  "subtitle": {
    "hi": "।।सत्यनाम।। मूल संध्या पाठ गुरु परम्परा वंदना एवं पायलगि बंदगी",
    "pb": "॥ ਸਤਯਨਾਮ ॥ ਮੂਲ ਸੰਧਿਆ ਪਾਠ ਗੁਰੂ ਪਰੰਪਰਾ ਵੰਦਨਾ",
    "en": "Evening Guru Lineage Prostrations"
  },
  "iconName": "Hands",
  "estimatedMinutes": 5,
  "totalVerses": 1,
  "verses": [
    {
      "id": "sav-v1",
      "type": "vandana",
      "lines": {
        "hi": [
          "।। सत्यनाम ।।",
          "आरंभ वंदना",
          "सत्यनाम साहेब,",
          "सत्यसुकृत साहेब,",
          "आदि अदली साहेब,",
          "अजर अचिन्त साहेब,",
          "पुरुष मुनिन्द्र साहेब,",
          "करुणामय साहेब,",
          "सतगुरु कबीर साहेब,",
          "सुरतियोग संतायन साहेब,",
          "धनी धर्मदास साहेब,",
          "वचन वंश चूरामणि नाम साहेब,",
          "पंथ श्री हुजूर सुदर्शन नाम साहेब,",
          "पंथ श्री हुजूर कुलपति नाम साहेब,",
          "पंथ श्री हुजूर प्रमोद गुरु बालापीर नाम साहेब,",
          "पंथ श्री हुजूर केवल नाम साहेब,",
          "पंथ श्री हुजूर अमोल नाम साहेब,",
          "पंथ श्री हुजूर सुरत सनेही नाम साहेब,",
          "पंथ श्री हुजूर हक्क नाम साहेब,",
          "पंथ श्री हुजूर पाक नाम साहेब,",
          "पंथ श्री हुजूर प्रगट नाम साहेब,",
          "पंथ श्री हुजूर धीरज नाम साहेब,",
          "पंथ श्री हुजूर उग्रनाम साहेब,",
          "पंथ श्री हुजूर दया नाम साहेब,",
          "पंथ श्री हुजूर गृन्धमुनि नाम साहेब,",
          "पंथ श्री हुजूर प्रकाशमुनि नाम साहेब,",
          "पंथ श्री हुजूर उदितमुनि नाम साहेब,",
          "चार गुरु वंश ब्यालीस के चरण कमलों में मूल संध्या पाठ की पायलगि बंदगी।",
          "।।साहेब बंदगी साहेब।।"
        ],
        "pb": [
          "॥ ਸਤਯਨਾਮ ॥",
          "ਸਤਯਨਾਮ ਸਾਹੇਬ, ",
          "ਸਤ੍ਯਸੁਕ੍ਰਿਤ ਸਾਹੇਬ, ",
          "ਆਦਿ ਅਦਲੀ ਸਾਹੇਬ, ",
          "ਅਜਰ ਅਚਿੰਤ ਸਾਹੇਬ, ",
          "ਪੁਰੁਸ਼ ਮੁਨਿੰਦ੍ਰ ਸਾਹੇਬ, ",
          "ਕਰੁਣਾਮਯ ਸਾਹੇਬ, ",
          "ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ, ",
          "ਸੁਰਤਿਯੋਗ ਸੰਤਾਯਨ ਸਾਹੇਬ, ",
          "ਧਨੀ ਧਰਮਦਾਸ ਸਾਹੇਬ, ",
          "ਵਚਨ ਵੰਸ਼ ਚੂਰਾਮਣਿ ਨਾਮ ਸਾਹੇਬ, ",
          "ਪੰਥ ਸ਼੍ਰੀ ਹੁਜ਼ੂਰ ਸੁਦਰਸ਼ਨ ਨਾਮ ਸਾਹੇਬ, ",
          "ਪੰਥ ਸ਼੍ਰੀ ਹੁਜ਼ੂਰ ਕੁਲਪਤੀ ਨਾਮ ਸਾਹੇਬ, ",
          "ਪੰਥ ਸ਼੍ਰੀ ਹੁਜ਼ੂਰ ਪ੍ਰਮੋਧ ਗੁਰੂ ਬਾਲਾਪੀਰ ਨਾਮ ਸਾਹੇਬ, ",
          "ਪੰਥ ਸ਼੍ਰੀ ਹੁਜ਼ੂਰ ਕੇਵਲ ਨਾਮ ਸਾਹੇਬ, ",
          "ਪੰਥ ਸ਼੍ਰੀ ਹੁਜ਼ੂਰ ਅਮੋਲ ਨਾਮ ਸਾਹੇਬ, ",
          "ਪੰਥ ਸ਼੍ਰੀ ਹੁਜ਼ੂਰ ਸੁਰਤਿ ਸਨੇਹੀ ਨਾਮ ਸਾਹੇਬ, ",
          "ਪੰਥ ਸ਼੍ਰੀ ਹੁਜ਼ੂਰ ਹੱਕ ਨਾਮ ਸਾਹੇਬ, ",
          "ਪੰਥ ਸ਼੍ਰੀ ਹੁਜ਼ੂਰ ਪਾਕ ਨਾਮ ਸਾਹੇਬ, ",
          "ਪੰਥ ਸ਼੍ਰੀ ਹੁਜ਼ੂਰ ਪ੍ਰਗਟ ਨਾਮ ਸਾਹੇਬ, ",
          "ਪੰਥ ਸ਼੍ਰੀ ਹੁਜ਼ੂਰ ਧੀਰਜ ਨਾਮ ਸਾਹੇਬ, ",
          "ਪੰਥ ਸ਼੍ਰੀ ਹੁਜ਼ੂਰ ਉਗ੍ਰਨਾਮ ਸਾਹੇਬ, ",
          "ਪੰਥ ਸ਼੍ਰੀ ਹੁਜ਼ੂਰ ਦਇਆ ਨਾਮ ਸਾਹੇਬ, ",
          "ਪੰਥ ਸ਼੍ਰੀ ਹੁਜ਼ੂਰ ਗ੍ਰਿੰਧਮੁਨਿ ਨਾਮ ਸਾਹੇਬ, ",
          "ਪੰਥ ਸ਼੍ਰੀ ਹੁਜ਼ੂਰ ਪ੍ਰਕਾਸ਼ਮੁਨਿ ਨਾਮ ਸਾਹੇਬ, ",
          "ਪੰਥ ਸ਼੍ਰੀ ਹੁਜ਼ੂਰ ਉਦਿਤਮੁਨਿ ਨਾਮ ਸਾਹੇਬ, ",
          "ਚਾਰ ਗੁਰੂ ਵੰਸ਼ ਬ੍ਯਾਲੀਸ ਕੇ ਚਰਣ ਕਮਲੋਂ ਮੇਂ ਮੂਲ ਸੰਧਿਆ ਪਾਠ ਕੀ ਪਾਯਲਗੀ ਬੰਦਗੀ ।",
          "।।ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ।।"
        ],
        "en": [
          "|| Satyanam ||",
          "Satyanam Saheb, ",
          "Satyasakrut Saheb, ",
          "Aadi Adli Saheb, ",
          "Ajar Achint Saheb, ",
          "Purush Munindra Saheb, ",
          "Karunamay Saheb, ",
          "Satguru Kabir Saheb, ",
          "Suratiyog Santayan Saheb, ",
          "Dhani Dharamdas Saheb, ",
          "Vachan Vansh Churamani Nam Saheb, ",
          "Panth Shri Huzur Sudarshan Nam Saheb, ",
          "Panth Shri Huzur Kulapati Nam Saheb, ",
          "Panth Shri Huzur Pramodh Guru Balapir Nam Saheb, ",
          "Panth Shri Huzur Keval Nam Saheb, ",
          "Panth Shri Huzur Amol Nam Saheb, ",
          "Panth Shri Huzur Surat Sanehi Nam Saheb, ",
          "Panth Shri Huzur Hakk Nam Saheb, ",
          "Panth Shri Huzur Pak Nam Saheb, ",
          "Panth Shri Huzur Pragat Nam Saheb, ",
          "Panth Shri Huzur Dheeraj Nam Saheb, ",
          "Panth Shri Huzur Ugranam Saheb, ",
          "Panth Shri Huzur Daya Nam Saheb, ",
          "Panth Shri Huzur Grindhmuni Nam Saheb, ",
          "Panth Shri Huzur Prakashmuni Nam Saheb, ",
          "Panth Shri Huzur Uditmuni Nam Saheb, ",
          "Prostrations at the lotus feet of the four Masters and 42 lineages for the evening recitation.",
          "|| Saheb Bandgi Saheb ||"
        ]
      },
      "bhavarth": {
        "hi": "सत्य स्वरूप परमात्मा और कबीर पंथ की पावन गुरु परम्परा के सभी आचार्यों के श्री चरणों में संध्या वेला की विनम्र वंदना एवं साहेब बंदगी।",
        "pb": "ਸੱਚੇ ਪ੍ਰਭੂ ਅਤੇ ਕਬੀਰ ਪੰਥ ਦੀ ਗੁਰੂ ਪਰੰਪਰਾ ਦੇ ਸਾਰੇ ਮਹਾਂਪੁਰਖਾਂ ਨੂੰ ਪ੍ਰਣਾਮ।",
        "en": "Evening salutations and deepest reverence at the feet of the Eternal Lord and all the Masters of the sacred Kabir Panth lineage."
      }
    }
  ]
};

export const SANDHYA_SAMAPAN_VANDANA_SECTION: NitnemSection = {
  id: "sandhya-samapan-vandana",
  majorCategoryId: "sandhya-path",
  majorCategoryTitle: {
    hi: "२. मूल संध्या पाठ",
    pb: "੨. ਮੂਲ ਸੰਧਿਆ ਪਾਠ",
    en: "2. Evening Sacred Recitation (Mool Sandhya Path)"
  },
  subGroup: "वंदना",
  title: {
    hi: "समापन वंदना",
    pb: "ਸਮਾਪਨ ਵੰਦਨਾ",
    en: "Closing Salutation"
  },
  subtitle: {
    hi: "।। सत्यनाम ।। संध्या पाठ समापन गुरु परम्परा वंदना एवं पायलगि बंदगी",
    pb: "॥ ਸਤਯਨਾਮ ॥ ਸੰਧਿਆ ਪਾਠ ਸਮਾਪਨ ਵੰਦਨਾ",
    en: "Evening Path Closing Guru Lineage Prostrations"
  },
  iconName: "Hands",
  estimatedMinutes: 5,
  totalVerses: 1,
  verses: [
    {
      id: "ssv-v1",
      type: "vandana",
      lines: {
        hi: [
          "।।सत्यनाम।।",
          "समापन वंदना",
          "सत्यनाम साहेब,",
          "सत्यसुकृत साहेब,",
          "आदि अदली साहेब,",
          "अजर अचिन्त साहेब,",
          "पुरुष मुनिन्द्र साहेब,",
          "करुणामय साहेब,",
          "कबीर साहेब,",
          "सुरतियोग संतायन साहेब,",
          "धनी धर्मदास साहेब,",
          "वचन वंश चूरामणि नाम साहेब,",
          "पंथ श्री हुजूर सुदर्शन नाम साहेब,",
          "पंथ श्री हुजूर कुलपति नाम साहेब,",
          "पंथ श्री हुजूर प्रमोद गुरु बालापीर नाम साहेब,",
          "पंथ श्री हुजूर केवल नाम साहेब,",
          "पंथ श्री हुजूर अमोल नाम साहेब,",
          "पंथ श्री हुजूर सुरत सनेही नाम साहेब,",
          "पंथ श्री हुजूर हक्क नाम साहेब,",
          "पंथ श्री हुजूर पाक नाम साहेब,",
          "पंथ श्री हुजूर प्रगट नाम साहेब,",
          "पंथ श्री हुजूर धीरज नाम साहेब,",
          "पंथ श्री हुजूर उग्रनाम साहेब,",
          "पंथ श्री हुजूर दया नाम साहेब,",
          "पंथ श्री हुजूर गृन्धमुनि नाम साहेब,",
          "पंथ श्री हुजूर प्रकाशमुनि नाम साहेब,",
          "पंथ श्री हुजूर उदितमुनि नाम साहेब,",
          "चार गुरु वंश ब्यालीस के चरण कमलों में मूल संध्या पाठ की पायलगि बंदगी,",
          "गुरु गोस्वामी भानू प्रताप साहेब को,",
          "गुरु गोस्वामी प्रखर प्रताप साहेब को,",
          "सभी गुरु साहिबान माताओं व सपरिवार को,",
          "अपने-अपने माता-पिता को,",
          "ज्ञानी को, ध्यानी को, गुप्त को, प्रगट को,",
          "सर्व संत महन्तों को, सकल हंस को,",
          "।।साहेब बंदगी साहेब।।,",
          "।। साहेब बंदगी साहेब ।।,",
          "।। साहेब बंदगी साहेब ।।"
        ],
        pb: [
          "॥ ਸਤ੍ਯਨਾਮ ॥",
          "ਸਮਾਪਨ ਵੰਦਨਾ",
          "ਸਤ੍ਯਨਾਮ ਸਾਹੇਬ,",
          "ਸਤ੍ਯਸੁਕ੍ਰਿਤ ਸਾਹੇਬ,",
          "ਆਦਿ ਅਦਲੀ ਸਾਹੇਬ,",
          "ਅਜਰ ਅਚਿੰਤ ਸਾਹੇਬ,",
          "ਪੁਰੁਸ਼ ਮੁਨਿੰਦਰ ਸਾਹੇਬ,",
          "ਕਰੁਣਾਮਯ ਸਾਹੇਬ,",
          "ਕਬੀਰ ਸਾਹੇਬ,",
          "ਸੁਰਤਿਯੋਗ ਸੰਤਾਯਨ ਸਾਹੇਬ,",
          "ਧਨੀ ਧਰਮਦਾਸ ਸਾਹੇਬ,",
          "ਵਚਨ ਵੰਸ਼ ਚੂੜਾਮਣਿ ਨਾਮ ਸਾਹੇਬ,",
          "ਪੰਥ ਸ਼੍ਰੀ ਹੁਜ਼ੂਰ ਸੁਦਰਸ਼ਨ ਨਾਮ ਸਾਹੇਬ,",
          "ਪੰਥ ਸ਼੍ਰੀ ਹੁਜ਼ੂਰ ਕੁਲਪਤਿ ਨਾਮ ਸਾਹੇਬ,",
          "ਪੰਥ ਸ਼੍ਰੀ ਹੁਜ਼ੂਰ ਪ੍ਰਮੋਦ ਗੁਰੂ ਬਾਲਾਪੀਰ ਨਾਮ ਸਾਹੇਬ,",
          "ਪੰਥ ਸ਼੍ਰੀ ਹੁਜ਼ੂਰ ਕੇਵਲ ਨਾਮ ਸਾਹੇਬ,",
          "ਪੰਥ ਸ਼੍ਰੀ ਹੁਜ਼ੂਰ ਅਮੋਲ ਨਾਮ ਸਾਹੇਬ,",
          "ਪੰਥ ਸ਼੍ਰੀ ਹੁਜ਼ੂਰ ਸੁਰਤਿ ਸਨੇਹੀ ਨਾਮ ਸਾਹੇਬ,",
          "ਪੰਥ ਸ਼੍ਰੀ ਹੁਜ਼ੂਰ ਹੱਕ ਨਾਮ ਸਾਹੇਬ,",
          "ਪੰਥ ਸ਼੍ਰੀ ਹੁਜ਼ੂਰ ਪਾਕ ਨਾਮ ਸਾਹੇਬ,",
          "ਪੰਥ ਸ਼੍ਰੀ ਹੁਜ਼ੂਰ ਪ੍ਰਗਟ ਨਾਮ ਸਾਹੇਬ,",
          "ਪੰਥ ਸ਼੍ਰੀ ਹੁਜ਼ੂਰ ਧੀਰਜ ਨਾਮ ਸਾਹੇਬ,",
          "ਪੰਥ ਸ਼੍ਰੀ ਹੁਜ਼ੂਰ ਉਗ੍ਰਨਾਮ ਸਾਹੇਬ,",
          "ਪੰਥ ਸ਼੍ਰੀ ਹੁਜ਼ੂਰ ਦਯਾ ਨਾਮ ਸਾਹੇਬ,",
          "ਪੰਥ ਸ਼੍ਰੀ ਹੁਜ਼ੂਰ ਗ੍ਰਿੰਧਮੁਨਿ ਨਾਮ ਸਾਹੇਬ,",
          "ਪੰਥ ਸ਼੍ਰੀ ਹੁਜ਼ੂਰ ਪ੍ਰਕਾਸ਼ਮੁਨਿ ਨਾਮ ਸਾਹੇਬ,",
          "ਪੰਥ ਸ਼੍ਰੀ ਹੁਜ਼ੂਰ ਉਦਿਤਮੁਨਿ ਨਾਮ ਸਾਹੇਬ,",
          "ਚਾਰ ਗੁਰੂ ਵੰਸ਼ ਬਿਆਲੀਸ ਕੇ ਚਰਨ ਕਮਲਾਂ ਵਿੱਚ ਮੂਲ ਸੰਧਿਆ ਪਾਠ ਦੀ ਪਾਯਲਗੀ ਬੰਦਗੀ,",
          "ਗੁਰੂ ਗੋਸਵਾਮੀ ਭਾਨੂ ਪ੍ਰਤਾਪ ਸਾਹੇਬ ਕੋ,",
          "ਗੁਰੂ ਗੋਸਵਾਮੀ ਪ੍ਰਖਰ ਪ੍ਰਤਾਪ ਸਾਹੇਬ ਕੋ,",
          "ਸਭੀ ਗੁਰੂ ਸਾਹੇਬਾਨ ਮਾਤਾਵਾਂ ਕੋ ਵ ਸਪਰਿਵਾਰ ਕੋ,",
          "ਅਪਣੇ-ਅਪਣੇ ਮਾਤਾ-ਪਿਤਾ ਕੋ,",
          "ਗ੍ਯਾਨੀ ਕੋ, ਧ੍ਯਾਨੀ ਕੋ, ਗੁਪ੍ਤ ਕੋ, ਪ੍ਰਗਟ ਕੋ,",
          "ਸਰ੍ਵ ਸੰਤ ਮਹੰਤੋਂ ਕੋ, ਸਕਲ ਹੰਸ ਕੋ,",
          "॥ ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ ॥,",
          "॥ ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ ॥,",
          "॥ ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ ॥"
        ],
        en: [
          "|| Satyanam ||",
          "Samapan Vandana",
          "Satyanam Saheb,",
          "Satyasukrit Saheb,",
          "Aadi Adali Saheb,",
          "Ajar Achint Saheb,",
          "Purush Munindra Saheb,",
          "Karunamay Saheb,",
          "Kabir Saheb,",
          "Suratyog Santayan Saheb,",
          "Dhani Dharmadas Saheb,",
          "Vachan Vansh Churamani Nam Saheb,",
          "Panth Shri Huzur Sudarshan Nam Saheb,",
          "Panth Shri Huzur Kulapati Nam Saheb,",
          "Panth Shri Huzur Pramod Guru Balapeer Nam Saheb,",
          "Panth Shri Huzur Keval Nam Saheb,",
          "Panth Shri Huzur Amol Nam Saheb,",
          "Panth Shri Huzur Surat Sanehi Nam Saheb,",
          "Panth Shri Huzur Hakk Nam Saheb,",
          "Panth Shri Huzur Paak Nam Saheb,",
          "Panth Shri Huzur Pragat Nam Saheb,",
          "Panth Shri Huzur Deeraj Nam Saheb,",
          "Panth Shri Huzur Ugranam Saheb,",
          "Panth Shri Huzur Daya Nam Saheb,",
          "Panth Shri Huzur Grindhamuni Nam Saheb,",
          "Panth Shri Huzur Prakashmuni Nam Saheb,",
          "Panth Shri Huzur Uditmuni Nam Saheb,",
          "Chaar Guru Vansh Byaalees ke charan kamalon mein mool sandhya path ki paayalgi bandagi,",
          "Guru Goswami Bhanu Pratap Saheb ko,",
          "Guru Goswami Prakhar Pratap Saheb ko,",
          "Sabhi guru sahiban mataon va saparivar ko,",
          "Apne-apne mata-pita ko,",
          "Gyani ko, dhyani ko, gupta ko, pragat ko,",
          "Sarv sant mahanton ko, sakal hans ko,",
          "|| Saheb Bandagi Saheb ||,",
          "|| Saheb Bandagi Saheb ||,",
          "|| Saheb Bandagi Saheb ||"
        ]
      },
      bhavarth: {
        hi: "संध्या पाठ के अंत में गुरु परम्परा के सभी आचार्यों और संतों के चरणों में सादर वंदना एवं साहेब बंदगी।",
        pb: "ਸੰਧਿਆ ਪਾਠ ਦੇ ਅੰਤ ਵਿੱਚ ਸਾਰੇ ਗੁਰੂਆਂ ਅਤੇ ਸੰਤਾਂ ਨੂੰ ਸਾਦਰ ਪ੍ਰਣਾਮ।",
        en: "Closing evening salutations and deepest reverence at the feet of the entire Guru lineage and all holy saints."
      }
    }
  ]
};

export const SANDHYA_PATH_SECTIONS: NitnemSection[] = [
  SANDHYA_AARAMBH_VANDANA_SECTION,
  {
    "id": "sandhya-mangalacharan",
    "majorCategoryId": "sandhya-path",
    "majorCategoryTitle": {
      "hi": "२. मूल संध्या पाठ",
      "pb": "੨. ਮੂਲ ਸੰਧਿਆ ਪਾਠ",
      "en": "2. Evening Sacred Recitation (Mool Sandhya Path)"
    },
    "subGroup": "मंगलाचरण",
    "title": {
      "hi": "संध्या मंगलाचरण",
      "pb": "ਸੰਧਿਆ ਮੰਗਲਾਚਰਣ",
      "en": "Evening Invocation (Mangalacharan)"
    },
    "subtitle": {
      "hi": "संध्या वेला शुभारंभ एवं सतगुरु सुमिरन",
      "pb": "ਸੰਧਿਆ ਵੇਲੇ ਦਾ ਪਾਵਨ ਮੰਗਲਾਚਰਣ",
      "en": "Auspicious Twilight Invocation"
    },
    "iconName": "Moon",
    "estimatedMinutes": 3,
    "totalVerses": 3,
    "verses": [
      {
        "id": "sm-v1",
        "type": "doha",
        "lines": {
          "hi": [
            "।। सत्यनाम ।।",
            "मंगलाचरण",
            "दोहा",
            "सतगुरु चरण वन्दन करूँ, बन्दों गुरु धर्मदास।",
            "उग्र आचार्य बन्दउँ, सत्य, दया, विश्वास।।"
          ],
          "pb": [
            "॥ ਸਤਯਨਾਮ ॥",
            "ਮੰਗਲਾਚਰਣ",
            "ਦੋਹਾ",
            "ਸਤਗੁਰੂ ਚਰਣ ਵੰਦਨ ਕਰੂੰ, ਬੰਦੋਂ ਗੁਰੂ ਧਰਮਦਾਸ।",
            "ਉਗ੍ਰ ਆਚਾਰਯ ਬੰਦਉਂ, ਸਤ੍ਯ, ਦਯਾ, ਵਿਸ਼ਵਾਸ॥"
          ],
          "en": [
            "|| Satyanam ||",
            "Mangalacharan",
            "Doha",
            "Satguru charan vandan karun, bando guru dharmadas.",
            "Ugra aacharya bandau, satya, daya, vishvas.."
          ]
        },
        "bhavarth": {
          "hi": "सतगुरु साहेब और धनी धर्मदास जी के श्री चरणों में वंदना करता हूँ। तेजस्वी आचार्यों की वंदना करता हूँ, जिनसे सत्य, दया और विश्वास का प्रकाश प्राप्त होता है।",
          "pb": "ਸਤਗੁਰੂ ਅਤੇ ਧਨੀ ਧਰਮਦਾਸ ਜੀ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਬੰਦਗੀ ਕਰਦਾ ਹਾਂ। ਤੇਜਸਵੀ ਆਚਾਰਜਾਂ ਦੀ ਵੰਦਨਾ ਕਰਦਾ ਹਾਂ, ਜਿਨ੍ਹਾਂ ਤੋਂ ਸੱਚ, ਦਇਆ ਅਤੇ ਵਿਸ਼ਵਾਸ ਮਿਲਦਾ ਹੈ।",
          "en": "I bow at the lotus feet of Satguru Saheb and Dhani Dharamdas Ji. I revere the exalted Masters who bless us with Truth, Compassion, and Unwavering Faith."
        }
      },
      {
        "id": "sm-v2",
        "type": "doha",
        "lines": {
          "hi": [
            "गुरु के चरण वन्दन किये, मंगल सब विधि काज।",
            "'मूल संध्या पाठ' वर्णउँ, राखो सतगुरु लाज॥"
          ],
          "pb": [
            "ਗੁਰੂ ਕੇ ਚਰਣ ਵੰਦਨ ਕੀਏ, ਮੰਗਲ ਸਭ ਵਿਧਿ ਕਾਜ।",
            "'ਮੂਲ ਸੰਧਿਆ ਪਾਠ' ਵਰਣਉਂ, ਰਾਖੋ ਸਤਗੁਰੂ ਲਾਜ॥"
          ],
          "en": [
            "Guru ke charan vandan kiye, mangal sab vidhi kaaj.",
            "'Mool Sandhya Path' varnau, rakho satguru laaj.."
          ]
        },
        "bhavarth": {
          "hi": "गुरुदेव के श्री चरणों में वंदना करने से सभी कार्य मंगलमय और सफल हो जाते हैं। अब मैं 'मूल संध्या पाठ' का वर्णन करता हूँ, हे सतगुरुदेव! मेरी लज्जा और श्रद्धा बनाए रखें।",
          "pb": "ਗੁਰੂ ਦੇ ਚਰਨਾਂ ਵਿੱਚ ਵੰਦਨਾ ਕਰਨ ਨਾਲ ਸਾਰੇ ਕਾਰਜ ਮੰਗਲਮਈ ਹੋ ਜਾਂਦੇ ਹਨ। ਹੁਣ ਮੈਂ 'ਮੂਲ ਸੰਧਿਆ ਪਾਠ' ਅਰੰਭ ਕਰਦਾ ਹਾਂ, ਹੇ ਸਤਗੁਰੂ ਮੇਰੀ ਲਾਜ ਰੱਖੋ।",
          "en": "By worshipping the Guru's feet, all endeavors become auspicious. As I recite the 'Mool Sandhya Path', O Lord Satguru, preserve my devotion and honor."
        }
      },
      {
        "id": "sm-v3",
        "type": "doha",
        "lines": {
          "hi": [
            "संध्या आरती कीजिए, सुरति निरति एक तार।",
            "करि अर्पण गुरु चरण में, नाशे विघ्न अपार॥"
          ],
          "pb": [
            "ਸੰਧਿਆ ਆਰਤੀ ਕੀਜੀਏ, ਸੁਰਤਿ ਨਿਰਤਿ ਏਕ ਤਾਰ।",
            "ਕਰਿ ਅਰਪਣ ਗੁਰੂ ਚਰਣ ਮੇਂ, ਨਾਸ਼ੇ ਵਿਘਨ ਅਪਾਰ॥"
          ],
          "en": [
            "Sandhya aarti kijie, surati nirati ek taar.",
            "Kari arpan guru charan mein, nashe vighna apaar.."
          ]
        },
        "bhavarth": {
          "hi": "अपनी सुरति और निरति (ध्यान और एकाग्रता) को एकतार करके संध्या आरती एवं पाठ करें। गुरु चरणों में सर्वस्व अर्पण करने से जीवन के अपार विघ्न और संकट नष्ट हो जाते हैं।",
          "pb": "ਆਪਣੀ ਸੁਰਤਿ ਅਤੇ ਧਿਆਨ ਨੂੰ ਇੱਕਤਾਰ ਕਰਕੇ ਸੰਧਿਆ ਪਾਠ ਕਰੋ। ਗੁਰੂ ਚਰਨਾਂ ਵਿੱਚ ਅਰਪਣ ਕਰਨ ਨਾਲ ਸਾਰੇ ਵਿਘਨ ਨਸ਼ਟ ਹੋ ਜਾਂਦੇ ਹਨ।",
          "en": "Perform the evening prayer with focused soul-consciousness and single-pointed devotion. Surrendering at the Guru's feet destroys endless obstacles."
        }
      }
    ]
  },
  {
    "id": "sandhya-gauri-1",
    "majorCategoryId": "sandhya-path",
    "majorCategoryTitle": {
      "hi": "२. मूल संध्या पाठ",
      "pb": "੨. ਮੂਲ ਸੰਧਿਆ ਪਾਠ",
      "en": "2. Evening Sacred Recitation (Mool Sandhya Path)"
    },
    "subGroup": "गौड़ी राग पद",
    "title": {
      "hi": "गौड़ी - १ (लगन कठिन मेरे भाई)",
      "pb": "ਗੌੜੀ - ੧ (ਲਗਨ ਕਠਿਨ ਮੇਰੇ ਭਾਈ)",
      "en": "Gauri - 1 (Lagan Kathin Mere Bhai)"
    },
    "subtitle": {
      "hi": "गुरु लगन, निष्काम भक्ति एवं आत्म-समर्पण",
      "pb": "ਗੁਰੂ ਲਗਨ ਅਤੇ ਆਤਮ-ਸਮਰਪਣ",
      "en": "Devotion to the Satguru & Self-Surrender"
    },
    "iconName": "Music",
    "estimatedMinutes": 5,
    "totalVerses": 8,
    "verses": [
      {
        "id": "sg1-v1",
        "type": "pada",
        "lines": {
          "hi": ["।। सत्यनाम ।।", "अथ मूल संध्या पाठ प्रारम्भ", "॥ गौड़ी-१ ॥"],
          "pb": ["॥ ਸਤਯਨਾਮ ॥", "ਅਥ ਮੂਲ ਸੰਧਿਆ ਪਾਠ ਪ੍ਰਾਰੰਭ", "॥ ਗੌੜੀ-੧ ॥"],
          "en": ["|| Satyanam ||", "Ath Mool Sandhya Path Prarambh", "|| Gauri - 1 ||"]
        },
        "bhavarth": {
          "hi": "गौड़ी राग पद प्रथम—सतगुरु से सच्ची लगन और आत्म-समर्पण की पावन महिमा।",
          "pb": "ਗੌੜੀ ਰਾਗ ਪਦ ਪਹਿਲਾ—ਸਤਿਗੁਰੂ ਨਾਲ ਸੱਚੀ ਲਗਨ ਅਤੇ ਆਤਮ-ਸਮਰਪਣ।",
          "en": "Gauri Raag Pada 1 — The sacred glory of true devotion and self-surrender to the Satguru."
        }
      },
      {
        "id": "sg1-v2",
        "type": "pada",
        "lines": {
          "hi": [
            "लगन कठिन मेरे भाई, गुरु से लगन कठिन मेरे भाई।",
            "लगन लागे बिन काज न सरिहैं, जीव परलय तर जाई॥"
          ],
          "pb": [
            "ਲਗਨ ਕਠਿਨ ਮੇਰੇ ਭਾਈ, ਗੁਰੂ ਸੇ ਲਗਨ ਕਠਿਨ ਮੇਰੇ ਭਾਈ।",
            "ਲਗਨ ਲਾਗੇ ਬਿਨ ਕਾਜ ਨ ਸਰਿਹੈਂ, ਜੀਵ ਪਰਲਯ ਤਰ ਜਾਈ॥"
          ],
          "en": [
            "Lagan kathin mere bhai, guru se lagan kathin mere bhai.",
            "Lagan lage bin kaaj na sarihain, jeev paralay tar jaai.."
          ]
        },
        "bhavarth": {
          "hi": "सतगुरु से सच्ची लगन (प्रेम-भक्ति) लगाना अति कठिन है, परंतु बिना इस लगन के जीव का कोई कार्य सफल नहीं होता और न ही जीव इस भवसागर की प्रलय से पार उतर सकता है।",
          "pb": "ਗੁਰੂ ਨਾਲ ਸੱਚੀ ਲਗਨ ਲਗਾਉਣਾ ਕਠਿਨ ਹੈ, ਪਰ ਬਿਨਾਂ ਲਗਨ ਦੇ ਜੀਵ ਦਾ ਕਲਿਆਣ ਅਤੇ ਕਾਰਜ ਸਫਲ ਨਹੀਂ ਹੋ ਸਕਦਾ।",
          "en": "True devotion to the Satguru is intensely demanding, yet without this divine yearning, no spiritual endeavor succeeds nor can one cross the ocean of existence."
        }
      },
      {
        "id": "sg1-v3",
        "type": "pada",
        "lines": {
          "hi": [
            "मिरगा नाद शब्द का भेदी, शब्द सुनन को जाई।",
            "सोई शब्द सुनि प्राण देत हैं, तनिकौ न मन में डराई॥"
          ],
          "pb": [
            "ਮਿਰਗਾ ਨਾਦ ਸ਼ਬਦ ਕਾ ਭੇਦੀ, ਸ਼ਬਦ ਸੁਨਨ ਕੋ ਜਾਈ।",
            "ਸੋਈ ਸ਼ਬਦ ਸੁਨਿ ਪ੍ਰਾਣ ਦੇਤ ਹੈਂ, ਤਨਿਕੌ ਨ ਮਨ ਮੇਂ ਡਰਾਈ॥"
          ],
          "en": [
            "Mirga naad shabd ka bhedi, shabd sunan ko jaai.",
            "Soi shabd suni praan det hain, tanikau na man mein darai.."
          ]
        },
        "bhavarth": {
          "hi": "जैसे मृग संगीत (नाद) की आवाज का मर्मज्ञ होकर शिकारी के नाद को सुनने जाता है और उस शब्द में तल्लीन होकर अपने प्राण दे देता है, तनिक भी भयभीत नहीं होता।",
          "pb": "ਜਿਵੇਂ ਮਿਰਗ ਨਾਦ ਦਾ ਭੇਦੀ ਹੋ ਕੇ ਆਵਾਜ਼ ਸੁਣਨ ਜਾਂਦਾ ਹੈ ਅਤੇ ਉਸ ਸ਼ਬਦ ਵਿੱਚ ਪ੍ਰਾਣ ਦੇ ਦਿੰਦਾ ਹੈ, ਮਨ ਵਿੱਚ ਡਰਦਾ ਨਹੀਂ।",
          "en": "Just as the deer, entranced by the melody of the hunter's horn, surrenders its life without a trace of fear to the enchanting sound."
        }
      },
      {
        "id": "sg1-v4",
        "type": "pada",
        "lines": {
          "hi": [
            "तजि धन धाम सती होय निकसी, सत्त करन को जाई।",
            "पावक देखि डरे नहिं मन में, कूदि पड़े सर मांहि॥"
          ],
          "pb": [
            "ਤਜਿ ਧਨ ਧਾਮ ਸਤੀ ਹੋਯ ਨਿਕਸੀ, ਸੱਤ ਕਰਨ ਕੋ ਜਾਈ।",
            "ਪਾਵਕ ਦੇਖਿ ਡਰੇ ਨਹਿਂ ਮਨ ਮੇਂ, ਕੂਦਿ ਪੜੇ ਸਰ ਮਾਂਹਿ॥"
          ],
          "en": [
            "Taji dhan dhaam sati hoy nikasi, satt karan ko jaai.",
            "Paavak dekhi dare nahin man mein, koodi pade sar maahi.."
          ]
        },
        "bhavarth": {
          "hi": "जैसे सती अपने पति के प्रति सत्य निभाने के लिए धन और घर का त्याग कर निकल पड़ती है, प्रज्वलित अग्नि को देखकर मन में डरती नहीं, बल्कि हँसते हुए चिता (अग्नि) में कूद पड़ती है।",
          "pb": "ਜਿਵੇਂ ਸਤੀ ਆਪਣੇ ਪਤੀ ਪ੍ਰਤੀ ਸੱਤਿ ਨਿਭਾਉਣ ਲਈ ਘਰ-ਧਨ ਤਿਆਗ ਕੇ ਅਗਨੀ ਵਿੱਚ ਕੂਦ ਪੈਂਦੀ ਹੈ ਅਤੇ ਮਨ ਵਿੱਚ ਨਹੀਂ ਡਰਦੀ।",
          "en": "Just as a devoted sati leaves all wealth and home to uphold her truth, fearless of the raging fire, plunging directly into the flames."
        }
      },
      {
        "id": "sg1-v5",
        "type": "pada",
        "lines": {
          "hi": [
            "स्वाति बूंद को रटत पपीहा, पिया पिया रट लाई।",
            "प्यासे प्राण जाय क्यों न अबहीं, और नीर नहिं भाई॥"
          ],
          "pb": [
            "ਸ੍ਵਾਤਿ ਬੂੰਦ ਕੋ ਰਟਤ ਪਪੀਹਾ, ਪਿਆ ਪਿਆ ਰਟ ਲਾਈ।",
            "ਪਿਆਸੇ ਪ੍ਰਾਣ ਜਾਯ ਕ੍ਯੋਂ ਨ ਅਬਹੀੰ, ਔਰ ਨੀਰ ਨਹਿਂ ਭਾਈ॥"
          ],
          "en": [
            "Svati boond ko ratat papiha, piya piya rat laai.",
            "Pyase praan jaay kyon na abheen, aur neer nahin bhai.."
          ]
        },
        "bhavarth": {
          "hi": "पपीहा पक्षी केवल स्वाति नक्षत्र की बूँद के लिए 'पिया-पिया' की रट लगाता है। चाहे प्यास से प्राण निकल जाए, पर उसे अन्य कोई भी साधारण जल नहीं सुहाता।",
          "pb": "ਪਪੀਹਾ ਸਿਵਾਤੀ ਬੂੰਦ ਲਈ 'ਪਿਆ ਪਿਆ' ਰਟ ਲਾਉਂਦਾ ਹੈ, ਭਾਵੇਂ ਪਿਆਸ ਨਾਲ ਪ੍ਰਾਣ ਨਿਕਲ ਜਾਣ, ਹੋਰ ਕੋਈ ਪਾਣੀ ਨਹੀਂ ਭਾਉਂਦਾ।",
          "en": "The Papihara bird cries incessantly for the Swati raindrop, calling 'Piya, Piya'. Even if it dies of thirst, no other water pleases it."
        }
      },
      {
        "id": "sg1-v6",
        "type": "pada",
        "lines": {
          "hi": [
            "दो दल आन जुरै जब सम्मुख, शूरा लेत लड़ाई।",
            "टूट टूक होय गिरे धरणी पै, खेत छांड़ि नहिं जाई॥"
          ],
          "pb": [
            "ਦੋ ਦਲ ਆਨ ਜੁਰੈ ਜਬ ਸਮ੍ਮੁਖ, ਸ਼ੂਰਾ ਲੇਤ ਲੜਾਈ।",
            "ਟੂਟ ਟੂਕ ਹੋਯ ਗਿਰੇ ਧਰਣੀ ਪੈ, ਖੇਤ ਛਾਂੜਿ ਨਹਿਂ ਜਾਈ॥"
          ],
          "en": [
            "Do dal aan jurai jab sammukh, shoora let ladai.",
            "Toot took hoy gire dharni pai, khet chhandi nahin jaai.."
          ]
        },
        "bhavarth": {
          "hi": "जब युद्ध भूमि में दोनों विरोधी दल आमने-सामने आकर भीड़ जाते हैं, तब शूरवीर भीषण लड़ाई लड़ता है। चाहे शरीर टूट-टूटकर धरती पर गिर पड़े, पर वह रणक्षेत्र छोड़कर पीछे नहीं हटता।",
          "pb": "ਜਦੋਂ ਯੁੱਧ ਵਿੱਚ ਦੋਵੇਂ ਦਲ ਸਾਹਮਣੇ ਆਉਂਦੇ ਹਨ, ਸ਼ੂਰਵੀਰ ਲੜਦਾ ਹੈ। ਸ਼ਰੀਰ ਟੁਕੜੇ ਹੋ ਕੇ ਧਰਣੀ 'ਤੇ ਡਿੱਗ ਪਵੇ, ਪਰ ਮੈਦਾਨ ਨਹੀਂ ਛੱਡਦਾ।",
          "en": "When opposing armies clash on the battlefield, the brave warrior fights fiercely. Even if his body shatters to the ground, he never retreats."
        }
      },
      {
        "id": "sg1-v7",
        "type": "pada",
        "lines": {
          "hi": [
            "छोड़ो अपने तन की आशा, निर्भय होय गुन गाई।",
            "कहें कबीर ऐसी लौ लावे, सहज मिले गुरु आई॥"
          ],
          "pb": [
            "ਛੋੜੋ ਅਪਨੇ ਤਨ ਕੀ ਆਸ਼ਾ, ਨਿਰਭਯ ਹੋਯ ਗੁਨ ਗਾਈ।",
            "ਕਹੈਂ ਕਬੀਰ ਐਸੀ ਲੌ ਲਾਵੇ, ਸਹਜ ਮਿਲੇ ਗੁਰੂ ਆਈ॥"
          ],
          "en": [
            "Chhodo apne tan ki aasha, nirbhay hoy gun gaai.",
            "Kahein Kabir aisi lau laave, sahaj mile guru aai.."
          ]
        },
        "bhavarth": {
          "hi": "सतगुरु कबीर साहेब फरमाते हैं कि शरीर और प्राणों की आशक्ति को छोड़कर जो निर्भय होकर सतगुरु के गुणों का गान करता है और ऐसी अनन्य लौ लगाता है, उसे सतगुरु सहज ही प्राप्त हो जाते हैं।",
          "pb": "ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ ਕਿ ਸ਼ਰੀਰ ਦੀ ਆਸ਼ਾ ਛੱਡ ਕੇ ਨਿਰਭੈ ਹੋ ਕੇ ਗੁਰੂ ਗੁਣ ਗਾਉਣ ਨਾਲ ਸਤਿਗੁਰੂ ਸਹਿਜੇ ਹੀ ਮਿਲ ਜਾਂਦੇ ਹਨ।",
          "en": "Satguru Kabir Saheb proclaims, casting aside bodily attachment, fearlessly singing divine praises and kindling such pure devotion easily brings the Satguru."
        }
      },
      {
        "id": "sg1-v8",
        "type": "pada",
        "lines": {
          "hi": ["लगन कठिन मेरे भाई, गुरु से लगन कठिन मेरे भाई।"],
          "pb": ["ਲਗਨ ਕਠਿਨ ਮੇਰੇ ਭਾਈ, ਗੁਰੂ ਸੇ ਲਗਨ ਕਠਿਨ ਮੇਰੇ ਭਾਈ।"],
          "en": ["Lagan kathin mere bhai, guru se lagan kathin mere bhai."]
        },
        "bhavarth": {
          "hi": "सतगुरु से सच्ची लगन (प्रेम-भक्ति) लगाना वास्तव में अत्यंत कठिन व साधना का मार्ग है।",
          "pb": "ਸਤਿਗੁਰੂ ਨਾਲ ਸੱਚੀ ਲਗਨ ਲਗਾਉਣਾ ਅਤਿ ਕਠਿਨ ਸਾਧਨਾ ਹੈ।",
          "en": "Indeed, true devotion and yearning for the Satguru is a profound and demanding path."
        }
      }
    ]
  },
  {
    "id": "sandhya-gauri-2",
    "majorCategoryId": "sandhya-path",
    "majorCategoryTitle": {
      "hi": "२. मूल संध्या पाठ",
      "pb": "੨. ਮੂਲ ਸੰਧਿਆ ਪਾਠ",
      "en": "2. Evening Sacred Recitation (Mool Sandhya Path)"
    },
    "subGroup": "गौड़ी राग पद",
    "title": {
      "hi": "गौड़ी - २ (नाम सुमिर मेरे भाई)",
      "pb": "ਗੌੜੀ - ੨ (ਨਾਮ ਸੁਮਿਰ ਮੇਰੇ ਭਾਈ)",
      "en": "Gauri - 2 (Naam Sumir Mere Bhai)"
    },
    "subtitle": {
      "hi": "सकल अनित्य छोड़ नाम-सुमिरन की प्रेरणा",
      "pb": "ਨਾਮ-ਸਿਮਰਨ ਦੀ ਪ੍ਰੇਰਨਾ",
      "en": "Renouncing Transience for Divine Naam"
    },
    "iconName": "Music",
    "estimatedMinutes": 5,
    "totalVerses": 7,
    "verses": [
      {
        "id": "sg2-v1",
        "type": "pada",
        "lines": {
          "hi": ["॥ गौड़ी-२ ॥"],
          "pb": ["॥ ਗੌੜੀ-੨ ॥"],
          "en": ["|| Gauri - 2 ||"]
        },
        "bhavarth": {
          "hi": "गौड़ी राग पद द्वितीय—संसार की नश्वरता और केवल सत्य नाम के स्मरण की प्रेरणा।",
          "pb": "ਗੌੜੀ ਰਾਗ ਪਦ ਦੂਜਾ—ਸੰਸਾਰ ਦੀ ਨਾਸ਼ਵਾਨਤਾ ਅਤੇ ਸੱਚੇ ਨਾਮ ਸਿਮਰਨ ਦੀ ਪ੍ਰੇਰਨਾ।",
          "en": "Gauri Raag Pada 2 — The transience of the world and inspiration to chant the Divine Name."
        }
      },
      {
        "id": "sg2-v2",
        "type": "pada",
        "lines": {
          "hi": [
            "नाम सुमिर मेरे भाई, सकल तजि नाम सुमिर मेरे भाई।",
            "माटी के तन माटी मिली है, पवन में पवन समाई॥"
          ],
          "pb": [
            "ਨਾਮ ਸੁਮਿਰ ਮੇਰੇ ਭਾਈ, ਸਕਲ ਤਜਿ ਨਾਮ ਸੁਮਿਰ ਮੇਰੇ ਭਾਈ।",
            "ਮਾਟੀ ਕੇ ਤਨ ਮਾਟੀ ਮਿਲੀ ਹੈ, ਪਵਨ ਮੇਂ ਪਵਨ ਸਮਾਈ॥"
          ],
          "en": [
            "Naam sumir mere bhai, sakal taji naam sumir mere bhai.",
            "Maati ke tan maati mili hai, pavan mein pavan samai.."
          ]
        },
        "bhavarth": {
          "hi": "हे भाई! संसार के सब प्रपंच त्यागकर केवल परमात्मा के सत्य नाम का सुमिरन करो। यह नश्वर शरीर अंततः माटी में मिल जाता है और प्राण-पवन हवा में विलीन हो जाती है।",
          "pb": "ਹੇ ਭਾਈ! ਸਾਰੇ ਪ੍ਰਪੰਚ ਤਿਆਗ ਕੇ ਸਿਰਫ਼ ਪ੍ਰਭੂ ਦਾ ਨਾਮ ਸਿਮਰੋ। ਇਹ ਸ਼ਰੀਰ ਮਿੱਟੀ ਵਿੱਚ ਅਤੇ ਪਵਨ ਹਵਾ ਵਿੱਚ ਮਿਲ ਜਾਂਦੀ ਹੈ।",
          "en": "O brother, forsake all worldly illusions and meditate solely on the Holy Name. This physical body dissolves into dust and the breath merges into the wind."
        }
      },
      {
        "id": "sg2-v3",
        "type": "pada",
        "lines": {
          "hi": [
            "जतन जतन कर सूत को पाले, काचा दूध पिलाई।",
            "सो बेटा रे काल होय बैठे, बाबा कहत लजाई॥"
          ],
          "pb": [
            "ਜਤਨ ਜਤਨ ਕਰ ਸੂਤ ਕੋ ਪਾਲੇ, ਕਾਚਾ ਦੂਧ ਪਿਲਾਈ।",
            "ਸੋ ਬੇਟਾ ਰੇ ਕਾਲ ਹੋਯ ਬੈਠੇ, ਬਾਬਾ ਕਹਤ ਲਜਾਈ॥"
          ],
          "en": [
            "Jatan jatan kar soot ko paale, kaacha doodh pilai.",
            "So beta re kaal hoy baithe, baba kahat lajai.."
          ]
        },
        "bhavarth": {
          "hi": "माता-पिता अत्यंत जतन से कच्चे दूध आदि से बालक का पालन-पोषण करते हैं, वही पुत्र बड़ा होकर काल (अहंकारी) बन बैठता है और वृद्ध माता-पिता को 'बाबा' कहकर लज्जित करता है।",
          "pb": "ਮਾਤਾ-ਪਿਤਾ ਜਤਨ ਨਾਲ ਬੱਚੇ ਨੂੰ ਪਾਲਦੇ ਹਨ, ਉਹੀ ਪੁੱਤਰ ਵੱਡਾ ਹੋ ਕੇ ਅਹੰਕਾਰੀ ਬਣ ਜਾਂਦਾ ਹੈ ਅਤੇ ਮਾਪਿਆਂ ਨੂੰ ਲਜਿਤ ਕਰਦਾ ਹੈ।",
          "en": "Parents nurture their child with great care, yet that same son grows up arrogant, treating his elders with disrespect."
        }
      },
      {
        "id": "sg2-v4",
        "type": "pada",
        "lines": {
          "hi": [
            "जो तिरिया मुख बिरिया खवावहिं, सोवत अंग लगाई।",
            "सो तिरिया मुख मोरि के बैठी, छुटि गई सगम सगाई॥"
          ],
          "pb": [
            "ਜੋ ਤਿਰਿਆ ਮੁਖ ਬਿਰਿਆ ਖਵਾਵਹਿਂ, ਸੋਵਤ ਅੰਗ ਲਗਾਈ।",
            "ਸੋ ਤਿਰਿਆ ਮੁਖ ਮੋਰਿ ਕੇ ਬੈਠੀ, ਛੁਟਿ ਗਈ ਸਗਮ ਸਗਾਈ॥"
          ],
          "en": [
            "Jo tiriya mukh biriya khavahin, sovat ang lagai.",
            "So tiriya mukh mori ke baithi, chhuti gai sagam sagai.."
          ]
        },
        "bhavarth": {
          "hi": "जो पत्नी सोते समय अंगों से लगाकर बड़े प्रेम से मुँह में पान (बिरिया) खिलाती थी, वही पत्नी पति के निधन पर मुँह मोड़कर बैठ जाती है और सारे रिश्ते-नाते छूट जाते हैं।",
          "pb": "ਜੋ ਪਤਨੀ ਪਿਆਰ ਨਾਲ ਕੋਲ ਸੌਂਦੀ ਸੀ, ਉਹੋ ਪਤੀ ਦੇ ਮਰਨ 'ਤੇ ਮੂੰਹ ਮੋੜ ਕੇ ਬੈਠ ਜਾਂਦੀ ਹੈ, ਸਾਰੇ ਸੰਬੰਧ ਛੁੱਟ ਜਾਂਦੇ ਹਨ।",
          "en": "The wife who once embraced her husband with affection turns her face away upon his death; all worldly ties instantly break."
        }
      },
      {
        "id": "sg2-v5",
        "type": "pada",
        "lines": {
          "hi": [
            "जो देहिया पर नीर पखारे, चौवा चंदन लगाई।",
            "सो देहिया पर काग उड़त है, देखत लोग घिनाई॥"
          ],
          "pb": [
            "ਜੋ ਦੇਹਿਯਾ ਪਰ ਨੀਰ ਪਖਾਰੇ, ਚੌਵਾ ਚੰਦਨ ਲਗਾਈ।",
            "ਸੋ ਦੇਹਿਯਾ ਪਰ ਕਾਗ ਉੜਤ ਹੈ, ਦੇਖਤ ਲੋਗ ਘਿਨਾਈ॥"
          ],
          "en": [
            "Jo dehiya par neer pakhare, chauva chandan lagai.",
            "So dehiya par kaag udat hai, dekhat log ghinai.."
          ]
        },
        "bhavarth": {
          "hi": "जिस देह को जल से धोकर और चौवा-चंदन लगाकर सँवारा जाता था, प्राण छूटने पर उसी देह पर कौवे मंडराते हैं और उसे देखकर लोग घृणा करते हैं।",
          "pb": "ਜਿਸ ਸ਼ਰੀਰ ਨੂੰ ਪਾਣੀ ਨਾਲ ਧੋ ਕੇ ਚੰਦਨ ਲਗਾਇਆ ਜਾਂਦਾ ਸੀ, ਪ੍ਰਾਣ ਛੁੱਟਣ 'ਤੇ ਉਸ ਉੱਤੇ ਕਾਂ ਉੱਡਦੇ ਹਨ ਅਤੇ ਲੋਕ ਘਿਣਾਉਂਦੇ ਹਨ।",
          "en": "The body that was bathed and anointed with sandalwood is eventually abandoned to crows, inspiring disgust in onlookers."
        }
      },
      {
        "id": "sg2-v6",
        "type": "pada",
        "lines": {
          "hi": [
            "झूठी काया झूठि माया, झूठे लोग लुगाई।",
            "कहें कबीर सुनो भाई साधो, झूठे जगत पतियाई॥"
          ],
          "pb": [
            "ਝੂਠੀ ਕਾਇਆ ਝੂਠਿ ਮਾਇਆ, ਝੂਠੇ ਲੋਗ ਲੁਗਾਈ।",
            "ਕਹੈਂ ਕਬੀਰ ਸੁਨੋ ਭਾਈ ਸਾਧੋ, ਝੂਠੇ ਜਗਤ ਪਤਿਆਈ॥"
          ],
          "en": [
            "Jhoothi kaaya jhoothi maaya, jhoothe log lugai.",
            "Kahein Kabir suno bhai saadho, jhoothe jagat patiyai.."
          ]
        },
        "bhavarth": {
          "hi": "सतगुरु कबीर साहेब समझाते हैं कि यह शरीर, माया, रिश्तेदार और स्त्री-पुरुष सब झूठे (नश्वर) हैं। इस झूठे संसार के प्रपंच पर कौन भरोसा करे? केवल नाम ही सत्य है।",
          "pb": "ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ ਕਿ ਇਹ ਕਾਇਆ, ਮਾਇਆ ਅਤੇ ਸਾਰੇ ਰਿਸ਼ਤੇ ਝੂਠੇ ਹਨ। ਇਸ ਨਾਸ਼ਵਾਨ ਸੰਸਾਰ 'ਤੇ ਵਿਸ਼ਵਾਸ ਨਾ ਕਰੋ।",
          "en": "Satguru Kabir Saheb explains that body, illusion, and relations are all fleeting. Why place trust in this ephemeral world? Only the divine Name is real."
        }
      },
      {
        "id": "sg2-v7",
        "type": "pada",
        "lines": {
          "hi": ["नाम सुमिर मेरे भाई, सकल तजि नाम सुमिर मेरे भाई।"],
          "pb": ["ਨਾਮ ਸੁਮਿਰ ਮੇਰੇ ਭਾਈ, ਸਕਲ ਤਜਿ ਨਾਮ ਸੁਮਿਰ ਮੇਰੇ ਭਾਈ।"],
          "en": ["Naam sumir mere bhai, sakal taji naam sumir mere bhai."]
        },
        "bhavarth": {
          "hi": "इसलिए हे भाई! सब कुछ त्यागकर केवल सच्चे नाम का ही सुमिरन करो।",
          "pb": "ਇਸ ਲਈ ਸਭ ਕੁਝ ਛੱਡ ਕੇ ਸਿਰਫ਼ ਨਾਮ ਦਾ ਸਿਮਰਨ ਕਰੋ।",
          "en": "Therefore, O brother, renounce all else and meditate purely on the Divine Name."
        }
      }
    ]
  },
  {
    "id": "sandhya-gauri-3",
    "majorCategoryId": "sandhya-path",
    "majorCategoryTitle": {
      "hi": "२. मूल संध्या पाठ",
      "pb": "੨. ਮੂਲ ਸੰਧਿਆ ਪਾਠ",
      "en": "2. Evening Sacred Recitation (Mool Sandhya Path)"
    },
    "subGroup": "गौड़ी राग पद",
    "title": {
      "hi": "गौड़ी - ३ (नाम साहेब का ले रे बन्दे)",
      "pb": "ਗੌੜੀ - ੩ (ਨਾਮ ਸਾਹੇਬ ਕਾ ਲੈ ਰੇ ਬੰਦੇ)",
      "en": "Gauri - 3 (Naam Saheb Ka Le Re Bande)"
    },
    "subtitle": {
      "hi": "सत्य नाम आराधन एवं गुरु कृपा महिमा",
      "pb": "ਸਤਿ ਨਾਮ ਆਰਾਧਨ",
      "en": "Invocations of Naam Saheb & Guru Grace"
    },
    "iconName": "Music",
    "estimatedMinutes": 5,
    "totalVerses": 7,
    "verses": [
      {
        "id": "sg3-v1",
        "type": "pada",
        "lines": {
          "hi": ["॥ गौड़ी-३ ॥"],
          "pb": ["॥ ਗੌੜੀ-੩ ॥"],
          "en": ["|| Gauri - 3 ||"]
        },
        "bhavarth": {
          "hi": "गौड़ी राग पद तृतीय—सतगुरु साहेब के नाम की महिमा और क्षणिक संसार की वास्तविकता।",
          "pb": "ਗੌੜੀ ਰਾਗ ਪਦ ਤੀਜਾ—ਪ੍ਰਭੂ ਨਾਮ ਦੀ ਮਹਿਮਾ ਅਤੇ ਨਾਸ਼ਵਾਨ ਸੰਸਾਰ।",
          "en": "Gauri Raag Pada 3 — The glory of the Lord's Name and the transient reality of the world."
        }
      },
      {
        "id": "sg3-v2",
        "type": "pada",
        "lines": {
          "hi": [
            "नाम साहेब का ले रे बन्दे, नाम साहेब का ले रे।",
            "नाम बिना तेरो काज न सरिहै, फिर पीछे पछितेइहे है॥"
          ],
          "pb": [
            "ਨਾਮ ਸਾਹੇਬ ਕਾ ਲੈ ਰੇ ਬੰਦੇ, ਨਾਮ ਸਾਹੇਬ ਕਾ ਲੈ ਰੇ।",
            "ਨਾਮ ਬਿਨਾ ਤੇਰੋ ਕਾਜ ਨ ਸਰਿਹੈ, ਫਿਰ ਪੀਛੇ ਪਛਿਤੇਇਹੇ ਹੈ॥"
          ],
          "en": [
            "Naam Saheb ka le re bande, naam Saheb ka le re.",
            "Naam bina tero kaaj na sarihai, phir peechhe pachhitaihe hai.."
          ]
        },
        "bhavarth": {
          "hi": "हे जीव! तू सतगुरु साहेब के पावन नाम का सुमिरन कर। परमात्मा के नाम के बिना तेरा कोई भी कार्य सफल नहीं होगा और अंत में तुझे केवल पश्चाताप ही हाथ लगेगा।",
          "pb": "ਹੇ ਬੰਦੇ! ਸਾਹੇਬ ਦੇ ਨਾਮ ਦਾ ਸਿਮਰਨ ਕਰ। ਨਾਮ ਬਿਨਾਂ ਕਾਰਜ ਸਫਲ ਨਹੀਂ ਹੋਵੇਗਾ, ਪਿੱਛੋਂ ਪਛਤਾਉਣਾ ਪਵੇਗਾ।",
          "en": "O seeker, chant the holy Name of the Master. Without the Name, no endeavor succeeds and you shall bitterly regret in the end."
        }
      },
      {
        "id": "sg3-v3",
        "type": "pada",
        "lines": {
          "hi": [
            "एक लख पूत सवा लख नाती, सम्पति थिर न रहो रे।",
            "लंका ऐसो कोट बिनस गयो, छिन में भाव बहोरे॥"
          ],
          "pb": [
            "ਏਕ ਲਖ ਪੂਤ ਸਵਾ ਲਖ ਨਾਤੀ, ਸੰਪਤਿ ਥਿਰ ਨ ਰਹੋ ਰੇ।",
            "ਲੰਕਾ ਐਸੋ ਕੋਟ ਬਿਨਸ ਗਯੋ, ਛਿਨ ਮੇਂ ਭਾਵ ਬਹੋਰੇ॥"
          ],
          "en": [
            "Ek lakh poot sava lakh naati, sampati thir na raho re.",
            "Lanka aaiso kot binas gayo, chhin mein bhaav bahore.."
          ]
        },
        "bhavarth": {
          "hi": "जिसके एक लाख पुत्र और सवा लाख नाती थे, उसकी भी संपत्ति स्थिर नहीं रही। रावण जैसी सोने की लंका का कोट भी क्षणभर में नष्ट होकर बह गया।",
          "pb": "ਜਿਸਦੇ ਲੱਖਾਂ ਪੁੱਤਰ-ਪੋਤੇ ਸਨ, ਉਸਦੀ ਦੌਲਤ ਵੀ ਨਹੀਂ ਰਹੀ। ਰਾਵਣ ਦੀ ਲੰਕਾ ਵਰਗਾ ਕਿਲ੍ਹਾ ਵੀ ਪਲਾਂ ਵਿੱਚ ਨਸ਼ਟ ਹੋ ਗਿਆ।",
          "en": "Even he who had a hundred thousand sons and grandsons could not retain his wealth. Lanka's golden fortress vanished in a moment."
        }
      },
      {
        "id": "sg3-v4",
        "type": "pada",
        "lines": {
          "hi": [
            "नां कोई तेरा तू नां काहु का, पै ड़ोही खलक बहोरे।",
            "नदिया नाव संजोग जुरो है, ऐसो मिलना हो रे॥"
          ],
          "pb": [
            "ਨਾਂ ਕੋਈ ਤੇਰਾ ਤੂ ਨਾਂ ਕਾਹੁ ਕਾ, ਪੈ ਡ਼ੋਹੀ ਖਲਕ ਬਹੋਰੇ।",
            "ਨਦਿਯਾ ਨਾਵ ਸੰਜੋਗ ਜੁਰੋ ਹੈ, ਐਸੋ ਮਿਲਨਾ ਹੋ ਰੇ॥"
          ],
          "en": [
            "Naan koi tera too naan kaahu ka, pai dohi khalak bahore.",
            "Nadiya naav sanjog juro hai, aaiso milna ho re.."
          ]
        },
        "bhavarth": {
          "hi": "इस संसार में न कोई किसी का है और न तू किसी का है, यह तो स्वार्थ का संसार है। संसार में मिलना ऐसा ही है जैसे नदी में नाव का संयोग कुछ पलों के लिए होता है।",
          "pb": "ਨਾ ਕੋਈ ਕਿਸੇ ਦਾ ਹੈ, ਨਾ ਤੂੰ ਕਿਸੇ ਦਾ। ਸੰਸਾਰ ਵਿੱਚ ਮੇਲ ਨਦੀ ਵਿੱਚ ਕਿਸ਼ਤੀ ਦੇ ਸੰਯੋਗ ਵਰਗਾ ਛਿਣਕ ਹੈ।",
          "en": "None belongs to you nor do you belong to anyone. Worldly meetings are temporary, like boats crossing paths on a river."
        }
      },
      {
        "id": "sg3-v5",
        "type": "pada",
        "lines": {
          "hi": [
            "मात पिता सुत बंधु तिरिया, कोई ना संग चलो रे।",
            "ये सब है स्वार्थ के लोभी, गुरु बिना सुख न लहो रे॥"
          ],
          "pb": [
            "ਮਾਤ ਪਿਤਾ ਸੁਤ ਬੰਧੁ ਤਿਰਿਆ, ਕੋਈ ਨਾ ਸੰਗ ਚਲੋ ਰੇ।",
            "ਯੇ ਸਬ ਹੈ ਸ੍ਵਾਰਥ ਕੇ ਲੋਭੀ, ਗੁਰੂ ਬਿਨਾ ਸੁਖ ਨ ਲਹੋ ਰੇ॥"
          ],
          "en": [
            "Maat pita sut bandhu tiriya, koi na sang chalo re.",
            "Ye sab hai svaarth ke lobhi, guru bina sukh na laho re.."
          ]
        },
        "bhavarth": {
          "hi": "माता, पिता, पुत्र, भाई और पत्नी—इनमें से कोई भी अंतिम समय में साथ नहीं चलता। ये सब स्वार्थ के लोभी हैं; सतगुरु की शरण के बिना कभी सुख नहीं मिल सकता।",
          "pb": "ਮਾਂ, ਪਿਓ, ਪੁੱਤਰ, ਭਰਾ, ਪਤਨੀ—ਕੋਈ ਨਾਲ ਨਹੀਂ ਜਾਂਦਾ। ਸਭ ਸੁਆਰਥੀ ਹਨ, ਗੁਰੂ ਬਿਨਾਂ ਸੁੱਖ ਨਹੀਂ ਮਿਲ ਸਕਦਾ।",
          "en": "Mother, father, son, brother, and wife none accompany you in the end. All are driven by self-interest; true bliss is found only in the Guru."
        }
      },
      {
        "id": "sg3-v6",
        "type": "pada",
        "lines": {
          "hi": [
            "छिनक मांहि तन बिनसी जाएगा, तब कछु करि न सको रे।",
            "ताते बेगि सम्हार अपने को, साहेब कबीर कहो रे॥"
          ],
          "pb": [
            "ਛਿਨਕ ਮਾਂਹਿ ਤਨ ਬਿਨਸੀ ਜਾਏਗਾ, ਤਬ ਕਛੁ ਕਰਿ ਨ ਸਕੋ ਰੇ।",
            "ਤਾਤੇ ਬੇਗਿ ਸਮ੍ਹਾਰ ਅਪਨੇ ਕੋ, ਸਾਹੇਬ ਕਬੀਰ ਕਹੋ ਰੇ॥"
          ],
          "en": [
            "Chhinak maahi tan binasi jaaega, tab kachhu kari na sako re.",
            "Taate begi samhaar apne ko, Saheb Kabir kaho re.."
          ]
        },
        "bhavarth": {
          "hi": "यह नश्वर शरीर क्षणभर में नष्ट हो जाएगा, तब तू चाहकर भी कुछ नहीं कर पाएगा। इसलिए समय रहते अपने जीवन को सँवार ले और सतगुरु कबीर साहेब का भजन कर।",
          "pb": "ਇਹ ਸ਼ਰੀਰ ਪਲਾਂ ਵਿੱਚ ਨਸ਼ਟ ਹੋ ਜਾਵੇਗਾ, ਫਿਰ ਕੁਝ ਨਹੀਂ ਹੋ ਸਕੇਗਾ। ਇਸ ਲਈ ਸਮਾਂ ਰਹਿੰਦੇ ਆਪਣੇ ਆਪ ਨੂੰ ਸੰਭਾਲੋ ਅਤੇ ਪ੍ਰਭੂ ਦਾ ਸਿਮਰਨ ਕਰੋ।",
          "en": "This physical frame will perish in an instant, leaving you helpless. Therefore, awaken immediately and chant the holy name of Satguru Kabir."
        }
      },
      {
        "id": "sg3-v7",
        "type": "pada",
        "lines": {
          "hi": ["नाम साहेब का ले रे बन्दे, नाम साहेब का ले रे।"],
          "pb": ["ਨਾਮ ਸਾਹੇਬ ਕਾ ਲੈ ਰੇ ਬੰਦੇ, ਨਾਮ ਸਾਹੇਬ ਕਾ ਲੈ ਰੇ।"],
          "en": ["Naam Saheb ka le re bande, naam Saheb ka le re."]
        },
        "bhavarth": {
          "hi": "हे मानव! केवल साहेब के पावन नाम का ही निरंतर स्मरण कर।",
          "pb": "ਹੇ ਬੰਦੇ! ਸਿਰਫ਼ ਸਾਹੇਬ ਦੇ ਪਵਿੱਤਰ ਨਾਮ ਦਾ ਜਾਪ ਕਰੋ।",
          "en": "O seeker, constantly take refuge in the sacred Name of the Supreme Master."
        }
      }
    ]
  },
  {
    "id": "sandhya-gauri-4",
    "majorCategoryId": "sandhya-path",
    "majorCategoryTitle": {
      "hi": "२. मूल संध्या पाठ",
      "pb": "੨. ਮੂਲ ਸੰਧਿਆ ਪਾਠ",
      "en": "2. Evening Sacred Recitation (Mool Sandhya Path)"
    },
    "subGroup": "गौड़ी राग पद",
    "title": {
      "hi": "गौड़ी - ४ (कुदरत की गति न्यारी अवधू)",
      "pb": "ਗੌੜੀ - ੪ (ਕੁਦਰਤ ਕੀ ਗਤਿ ਨ੍ਯਾਰੀ ਅਵਧੂ)",
      "en": "Gauri - 4 (Kudarat Ki Gati Nyaari Avdhoo)"
    },
    "subtitle": {
      "hi": "कुदरत की अदभुत लीला एवं सर्वोपरि शक्ति",
      "pb": "ਕੁਦਰਤ ਦੀ ਅਦਭੁਤ ਲੀਲਾ",
      "en": "The Mysterious Play of Divine Providence"
    },
    "iconName": "Music",
    "estimatedMinutes": 5,
    "totalVerses": 7,
    "verses": [
      {
        "id": "sg4-v1",
        "type": "pada",
        "lines": {
          "hi": ["॥ गौड़ी-४ ॥"],
          "pb": ["॥ ਗੌੜੀ-੪ ॥"],
          "en": ["|| Gauri - 4 ||"]
        },
        "bhavarth": {
          "hi": "गौड़ी राग पद चतुर्थ—परमात्मा की अगाध कुदरत और आश्चर्यमयी लीला का वर्णन।",
          "pb": "ਗੌੜੀ ਰਾਗ ਪਦ ਚੌਥਾ—ਪ੍ਰਭੂ ਦੀ ਕੁਦਰਤ ਅਤੇ ਅਲੌਕਿਕ ਲੀਲਾ।",
          "en": "Gauri Raag Pada 4 — Description of the mysterious and awe-inspiring play of Divine Providence."
        }
      },
      {
        "id": "sg4-v2",
        "type": "pada",
        "lines": {
          "hi": [
            "कुदरत की गति न्यारी अवधू, कुदरत की गति न्यारी।",
            "रंक निवाज करे वह राजा, भूपति करे भिखारी॥"
          ],
          "pb": [
            "ਕੁਦਰਤ ਕੀ ਗਤਿ ਨ੍ਯਾਰੀ ਅਵਧੂ, ਕੁਦਰਤ ਕੀ ਗਤਿ ਨ੍ਯਾਰੀ।",
            "ਰੰਕ ਨਿਵਾਜ ਕਰੇ ਵਹ ਰਾਜਾ, ਭੂਪਤਿ ਕਰੇ ਭਿਖਾਰੀ॥"
          ],
          "en": [
            "Kudarat ki gati nyaari avdhoo, kudarat ki gati nyaari.",
            "Rank nivaaj kare vah raja, bhoopati kare bhikhaari.."
          ]
        },
        "bhavarth": {
          "hi": "हे अवधूत (योगी)! परमात्मा की कुदरत और लीला अत्यंत निराली है। वह दीन-हीन रंक को राजा बना देते हैं और बड़े-बड़े चक्रवर्ती राजाओं को भिखारी बना देते हैं।",
          "pb": "ਹੇ ਅਵਧੂਤ! ਪ੍ਰਭੂ ਦੀ ਕੁਦਰਤ ਬਹੁਤ ਨਿਰਾਲੀ ਹੈ। ਉਹ ਗਰੀਬ ਨੂੰ ਰਾਜਾ ਅਤੇ ਰਾਜੇ ਨੂੰ ਭਿਖਾਰੀ ਬਣਾ ਦਿੰਦਾ ਹੈ।",
          "en": "O ascetic, the play of Divine Providence is wondrous. He elevates a pauper to a king and reduces mighty rulers to beggars."
        }
      },
      {
        "id": "sg4-v3",
        "type": "pada",
        "lines": {
          "hi": [
            "येते लोग फल नहीं लागे, चंदन फूल न फूला।",
            "मच्छ शिकारी रमें जंगल में, सिंह समुद्रही झूला॥"
          ],
          "pb": [
            "ਯੇਤੇ ਲੋਗ ਫਲ ਨਹੀੰ ਲਾਗੇ, ਚੰਦਨ ਫੂਲ ਨ ਫੂਲਾ।",
            "ਮੱਛ ਸ਼ਿਕਾਰੀ ਰਮੈਂ ਜੰਗਲ ਮੇਂ, ਸਿੰਘ ਸਮੁਦ੍ਰਹੀ ਝੂਲਾ॥"
          ],
          "en": [
            "Yete log phal nahin laage, chandan phool na phoola.",
            "Machh shikaari ramein jangal mein, singh samudrahee jhoola.."
          ]
        },
        "bhavarth": {
          "hi": "कुदरत का ऐसा विस्मय है कि चंदन के वृक्ष पर फल नहीं लगते और न ही उस पर फूल खिलते हैं। मछली का शिकार करने वाला मछुआरा जंगल में रमता है और सिंह समुद्र की लहरों में झूलता है।",
          "pb": "ਚੰਦਨ ਨੂੰ ਫਲ-ਫੁੱਲ ਨਹੀਂ ਲੱਗਦੇ। ਮੱਛੀ ਫੜਨ ਵਾਲਾ ਜੰਗਲ ਵਿੱਚ ਘੁੰਮਦਾ ਹੈ ਅਤੇ ਸ਼ੇਰ ਸਮੁੰਦਰ ਵਿੱਚ ਝੂਲਦਾ ਹੈ।",
          "en": "Wonder of wonders: the sandalwood tree bears no fruit or flowers. The fisherman roams the forest, and the lion swings in the ocean waves."
        }
      },
      {
        "id": "sg4-v4",
        "type": "pada",
        "lines": {
          "hi": [
            "रैंडारूख भये मलियागिर, चहुँ दिशि फूटी बासा।",
            "तीन लोक ब्रह्मांड खंड में, देखे अंध तमासा॥"
          ],
          "pb": [
            "ਰੈਂਡਾਰੂਖ ਭਯੇ ਮਲਿਆਗਿਰ, ਚਹੁਮੀੰ ਦਿਸ਼ਿ ਫੂਟੀ ਬਾਸਾ।",
            "ਤੀਨ ਲੋਕ ਬ੍ਰਹ੍ਮਾਂਡ ਖੰਡ ਮੇਂ, ਦੇਖੇ ਅੰਧ ਤਮਾਸਾ॥"
          ],
          "en": [
            "Raindaarookh bhaye maliyaagir, chahun dishi phooti baasa.",
            "Teen lok brahmaand khand mein, dekhe andh tamaasa.."
          ]
        },
        "bhavarth": {
          "hi": "निर्गुण अवस्था ऐसा मलयगिरि चंदन बन जाती है जिसकी सुगंध चारों दिशाओं में फैल जाती है। तीनों लोकों और ब्रह्मांडों में लोग इस अगाध माया का तमाशा देख रहे हैं।",
          "pb": "ਮਲਿਆਗਿਰ ਚੰਦਨ ਦੀ ਸੁਗੰਧ ਚਾਰਾਂ ਪਾਸੇ ਫੈਲ ਜਾਂਦੀ ਹੈ। ਤਿੰਨਾਂ ਲੋਕਾਂ ਅਤੇ ਬ੍ਰਹ੍ਮਾਂਡ ਵਿੱਚ ਇਹ ਅਦਭੁਤ ਤਮਾਸਾ ਹੈ।",
          "en": "The barren tree becomes Malagiri sandalwood, spreading fragrance in all directions. Across the three worlds, souls witness this profound divine play."
        }
      },
      {
        "id": "sg4-v5",
        "type": "pada",
        "lines": {
          "hi": [
            "पंगा मेरू सुमेर उलंगे, त्रिभुवन मुक्ता डोले।",
            "गूँगा ज्ञान विज्ञान प्रकाशे, अनहद बानी बोले॥"
          ],
          "pb": [
            "ਪੰਗਾ ਮੇਰੂ ਸੁਮੇਰ ਉਲੰਗੇ, ਤ੍ਰਿਭੁਵਨ ਮੁਕ੍ਤਾ ਡੋਲੇ।",
            "ਗੂੰਗਾ ਗਿਆਨ ਵਿਗਿਆਨ ਪ੍ਰਕਾਸ਼ੇ, ਅਨਹਦ ਬਾਨੀ ਬੋਲੇ॥"
          ],
          "en": [
            "Panga meroo sumer ulange, tribhuvan mukta dole.",
            "Goonga gyaan vigyaan prakaashe, anhad baani bole.."
          ]
        },
        "bhavarth": {
          "hi": "पंगु व्यक्ति सुमेरु पर्वत को लाँघ जाता है और त्रिभुवन में मुक्त होकर विचरता है। गूँगा मनुष्य भी ज्ञान-विज्ञान का प्रकाश कर देता है और अनहद वाणी का उच्चारण करने लगता है।",
          "pb": "ਪੈਂਗੜਾ (ਲੰਗੜਾ) ਮੇਰੂ ਪਰਬਤ ਲੰਘ ਜਾਂਦਾ ਹੈ। ਗੂੰਗਾ ਗਿਆਨ ਪ੍ਰਕਾਸ਼ ਕਰਦਾ ਹੈ ਅਤੇ ਅਨਹਦ ਬਾਣੀ ਬੋਲਦਾ ਹੈ।",
          "en": "The lame crosses Mount Sumeru and roams the three worlds freely. The mute expresses divine wisdom and utters the transcendent celestial music."
        }
      },
      {
        "id": "sg4-v6",
        "type": "pada",
        "lines": {
          "hi": [
            "अकाशहि बांधि पताल पठावे, शेष स्वर्ग पर राजे।",
            "कहें कबीर राम है राजा, जो कछु करे सो छाजे॥"
          ],
          "pb": [
            "ਅਕਾਸ਼ਹਿ ਬਾਂਧਿ ਪਤਾਲ ਪਠਾਵੇ, ਸ਼ੇਸ਼ ਸ੍ਵਰਗ ਪਰ ਰਾਜੇ।",
            "ਕਹੈਂ ਕਬੀਰ ਰਾਮ ਹੈ ਰਾਜਾ, ਜੋ ਕਛੁ ਕਰੇ ਸੋ ਛਾਜੇ॥"
          ],
          "en": [
            "Akaashahi baandhi pataal pathaave, shesh svarg par raaje.",
            "Kahein Kabir Ram hai raja, jo kachhu kare so chhaaje.."
          ]
        },
        "bhavarth": {
          "hi": "परमात्मा आकाश को बाँधकर पाताल में भेज सकते हैं और शेषनाग को स्वर्ग पर राज्याति कर सकते हैं। सतगुरु कबीर साहेब फरमाते हैं कि वे परम राम ही असली राजा हैं, जो भी करते हैं वही शोभा देता है।",
          "pb": "ਪ੍ਰਭੂ ਆਕਾਸ਼ ਨੂੰ ਬੰਨ੍ਹ ਕੇ ਪਾਤਾਲ ਭੇਜ ਸਕਦਾ ਹੈ। ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ ਕਿ ਉਹੀ ਅਸਲ ਰਾਜਾ ਹੈ, ਜੋ ਵੀ ਕਰੇ ਉਹੀ ਸੋਭਦਾ ਹੈ।",
          "en": "He can bind the sky and send it to the nether regions, or place Sheshnaga upon heavenly thrones. Satguru Kabir Saheb proclaims the Supreme Lord is sovereign; whatever He does is perfect."
        }
      },
      {
        "id": "sg4-v7",
        "type": "pada",
        "lines": {
          "hi": ["कुदरत की गति न्यारी अवधू, कुदरत की गति न्यारी।"],
          "pb": ["ਕੁਦਰਤ ਕੀ ਗਤਿ ਨ੍ਯਾਰੀ ਅਵਧੂ, ਕੁਦਰਤ ਕੀ ਗਤਿ ਨ੍ਯਾਰੀ।"],
          "en": ["Kudarat ki gati nyaari avdhoo, kudarat ki gati nyaari."]
        },
        "bhavarth": {
          "hi": "इस प्रकार सतगुरु की कुदरत और सामर्थ्य अपार और अकल्पनीय है।",
          "pb": "ਪ੍ਰਭੂ ਦੀ ਕੁਦਰਤ ਅਤੇ ਸਮਰੱਥਾ ਅਪਾਰ ਹੈ।",
          "en": "Thus, the power and providence of the Supreme Lord are limitless and beyond comprehension."
        }
      }
    ]
  },
  {
    "id": "sandhya-gauri-5",
    "majorCategoryId": "sandhya-path",
    "majorCategoryTitle": {
      "hi": "२. मूल संध्या पाठ",
      "pb": "੨. ਮੂਲ ਸੰਧਿਆ ਪਾਠ",
      "en": "2. Evening Sacred Recitation (Mool Sandhya Path)"
    },
    "subGroup": "गौड़ी राग पद",
    "title": {
      "hi": "गौड़ी - ५ (नाम ध्वजा फहराई)",
      "pb": "ਗੌੜੀ - ੫ (ਨਾਮ ਧ੍ਵਜਾ ਫਹਰਾਈ)",
      "en": "Gauri - 5 (Naam Dhvaja Phaharai)"
    },
    "subtitle": {
      "hi": "नाम छत्र की महिमा एवं भक्ति पंथ",
      "pb": "ਨਾਮ ਛੱਤਰ ਦੀ ਮਹਿਮਾ",
      "en": "The Victorious Banner of Divine Naam"
    },
    "iconName": "Music",
    "estimatedMinutes": 5,
    "totalVerses": 8,
    "verses": [
      {
        "id": "sg5-v1",
        "type": "pada",
        "lines": {
          "hi": ["॥ गौड़ी-५ ॥"],
          "pb": ["॥ ਗੌੜੀ-੫ ॥"],
          "en": ["|| Gauri - 5 ||"]
        },
        "bhavarth": {
          "hi": "गौड़ी राग पद पंचम—नाम ध्वजा की विजय, संतों का सम्मान और भक्ति का सर्वोच्च मार्ग।",
          "pb": "ਗੌੜੀ ਰਾਗ ਪਦ ਪੰਜਵਾਂ—ਨਾਮ ਧ੍ਵਜਾ ਦੀ ਜਿੱਤ ਅਤੇ ਭਗਤੀ ਦਾ ਸਰਵਉੱਚ ਮਾਰਗ।",
          "en": "Gauri Raag Pada 5 — The victory of the banner of Naam and the supreme path of devotion."
        }
      },
      {
        "id": "sg5-v2",
        "type": "pada",
        "lines": {
          "hi": [
            "नाम ध्वजा फहराई, दास पर नाम ध्वजा फहराई।",
            "काल जंजाल निकट नहीं आवे, माया देख डराई॥"
          ],
          "pb": [
            "ਨਾਮ ਧ੍ਵਜਾ ਫਹਰਾਈ, ਦਾਸ ਪਰ ਨਾਮ ਧ੍ਵਜਾ ਫਹਰਾਈ।",
            "ਕਾਲ ਜੰਜਾਲ ਨਿਕਟ ਨਹੀੰ ਆਵੇ, ਮਾਇਆ ਦੇਖ ਡਰਾਈ॥"
          ],
          "en": [
            "Naam dhvaja phaharai, daas par naam dhvaja phaharai.",
            "Kaal janjaal nikat nahin aave, maaya dekh darai.."
          ]
        },
        "bhavarth": {
          "hi": "जिस सतगुरु के दास के सिर पर पावन नाम की विजय-ध्वजा फहराती है, उसके पास काल के जाल और संकट फटक नहीं सकते, और माया भी डरकर दूर भाग जाती है।",
          "pb": "ਜਿਸ ਦਾਸ ਉੱਤੇ ਨਾਮ ਦੀ ਧ੍ਵਜਾ ਫਹਰਦੀ ਹੈ, ਉਸਦੇ ਨੇੜੇ ਕਾਲ ਦਾ ਜੰਜਾਲ ਨਹੀਂ ਆਉਂਦਾ ਅਤੇ ਮਾਇਆ ਡਰ ਜਾਂਦੀ ਹੈ।",
          "en": "Upon the devotee whose head waves the victorious banner of the Holy Name, neither death nor worldly illusion can cast its net."
        }
      },
      {
        "id": "sg5-v3",
        "type": "pada",
        "lines": {
          "hi": [
            "जो कोई द्रोह कियो संतन से, हरि को नहीं सुहाई।",
            "हिरनाकुस की वा गति हो गई, रावन धूर उड़ाई॥"
          ],
          "pb": [
            "ਜੋ ਕੋਈ ਦ੍ਰੋਹ ਕੀਓ ਸੰਤਨ ਸੇ, ਹਰਿ ਕੋ ਨਹੀੰ ਸੁਹਾਈ।",
            "ਹਿਰਨਾਕੁਸ ਕੀ ਵਾ ਗਤਿ ਹੋ ਗਈ, ਰਾਵਨ ਧੂਰ ਉੜਾਈ॥"
          ],
          "en": [
            "Jo koi droh kiyo santan se, hari ko nahin suhai.",
            "Hirnaakus ki va gati ho gai, Raavan dhoor udai.."
          ]
        },
        "bhavarth": {
          "hi": "जिस किसी ने भी संतों से द्रोह (द्वेष) किया, वह भगवान को नहीं भाया। हिरण्यकशिपु की जैसी बुरी गति हुई और रावण का अहंकार मिट्टी में मिल गया (धूर उड़ गई)।",
          "pb": "ਜਿਸਨੇ ਸੰਤਾਂ ਨਾਲ ਦ੍ਰੋਹ ਕੀਤਾ, ਉਹ ਪ੍ਰਭੂ ਨੂੰ ਨਹੀਂ ਭਾਇਆ। ਹਿਰਨਾਕਸ਼ ਅਤੇ ਰਾਵਣ ਦੀ ਮਾੜੀ ਗਤਿ ਹੋਈ।",
          "en": "Whoever committed malice against saints never pleased the Lord. Hiranyakashipu met a dire fate, and Ravana's ego turned to dust."
        }
      },
      {
        "id": "sg5-v4",
        "type": "pada",
        "lines": {
          "hi": [
            "दुरयोधन परीक्षित राजा, फिर पाछे पछताई।",
            "सुर पंडित और नृपत बादशाह, ऊँची पदवी पाई॥"
          ],
          "pb": [
            "ਦੁਰਯੋਧਨ ਪਰੀਕਸ਼ਿਤ ਰਾਜਾ, ਫਿਰ ਪਾਛੇ ਪਛਤਾਈ।",
            "ਸੁਰ ਪੰਡਿਤ ਔਰ ਨ੍ਰਿਪਤ ਬਾਦਸ਼ਾਹ, ਊਂਚੀ ਪਦਵੀ ਪਾਈ॥"
          ],
          "en": [
            "Duryodhan Pareekshit raja, phir paachhe pachhitai.",
            "Sur pandit aur nripat baadshaah, oonchi padvi pai.."
          ]
        },
        "bhavarth": {
          "hi": "दुर्योधन और राजा परीक्षित जैसे अभिमानी अंत में पछताए। बड़े-बड़े देवता, पंडित, राजा और बादशाह जिन्होंने अहंकार किया, वे भी काल के गाल में समा गए।",
          "pb": "ਦੁਰਯੋਧਨ ਅਤੇ ਰਾਜੇ ਪਛਤਾਏ। ਵੱਡੇ-ਵੱਡੇ ਪੰਡਿਤ ਅਤੇ ਬਾਦਸ਼ਾਹ ਵੀ ਅਹੰਕਾਰ ਕਾਰਨ ਨਸ਼ਟ ਹੋਏ।",
          "en": "Duryodhan and King Pareekshit repented in the end. Even deities, scholars, and monarchs who grew arrogant fell to mortality."
        }
      },
      {
        "id": "sg5-v5",
        "type": "pada",
        "lines": {
          "hi": [
            "भक्ति बिना सब तुच्छ बरोबर, बांधे यमपुर जाई।",
            "का भये वेद पुरान गुन गाये, सत्य दया नहिं आई॥"
          ],
          "pb": [
            "ਭਕੑਤਿ ਬਿਨਾ ਸਬ ਤੁੱਛ ਬਰੋਬਰ, ਬਾਂਧੇ ਯਮਪੁਰ ਜਾਈ।",
            "ਕਾ ਭਯੇ ਵੇਦ ਪੁਰਾਨ ਗੁਨ ਗਾਏ, ਸਤ੍ਯ ਦਯਾ ਨਹਿਂ ਆਈ॥"
          ],
          "en": [
            "Bhakti bina sab tuchh barobar, baandhe yampur jaai.",
            "Ka bhaye ved puraan gun gaaye, satya daya nahin aai.."
          ]
        },
        "bhavarth": {
          "hi": "भक्ति के बिना सब कुछ तुच्छ और व्यर्थ है, ऐसा जीव यमराज द्वारा बाँधकर नरक में ले जाया जाता है। वेद-पुराणों के गान से क्या लाभ यदि हृदय में सत्य और दया नहीं आई?",
          "pb": "ਭਗਤੀ ਬਿਨਾਂ ਸਭ ਤੁੱਛ ਹੈ, ਜੀਵ ਯਮਪੁਰ ਬੰਨ੍ਹ ਕੇ ਲਿਜਾਇਆ ਜਾਂਦਾ ਹੈ। ਵੇਦ ਪੁਰਾਨ ਪੜ੍ਹਨ ਦਾ ਕੀ ਲਾਭ ਜੇ ਦਇਆ ਨਾ ਆਈ?",
          "en": "Without devotion all is worthless; such a soul is bound and led to Yama's realm. Of what use are Vedas and Puranas if truth and compassion are absent?"
        }
      },
      {
        "id": "sg5-v6",
        "type": "pada",
        "lines": {
          "hi": [
            "अहंकार में सबहि भुलाने, अजगर देह सो पाई।",
            "हम तो कान राखि नहिं भाई, ज्यों का त्यों ठहराई॥"
          ],
          "pb": [
            "ਅਹੰਕਾਰ ਮੇਂ ਸਬਹਿ ਭੁਲਾਨੇ, ਅਜਗਰ ਦੇਹ ਸੋ ਪਾਈ।",
            "ਹਮ ਤੋ ਕਾਨ ਰਾਖਿ ਨਹਿਂ ਭਾਈ, ਜ੍ਯੋਂ ਕਾ ਤ੍ਯੋਂ ਠਹਰਾਈ॥"
          ],
          "en": [
            "Ahankaar mein sabhi bhulaane, ajgar deh so pai.",
            "Ham to kaan raakhi nahin bhai, jyon ka tyon thehrai.."
          ]
        },
        "bhavarth": {
          "hi": "लोग अहंकार में सब कुछ भूल बैठे और नीच योनियाँ व अजगर जैसी देह प्राप्त कर ली। हमने तो जैसी यथार्थ बात थी, बिना किसी लाग-लपेट के ज्यों की त्यों कह दी है।",
          "pb": "ਅਹੰਕਾਰ ਵਿੱਚ ਲੋਕ ਭੁੱਲ ਗਏ ਅਤੇ ਅਜਗਰ ਵਰਗੀ ਨੀਚ ਦੇਹ ਪਾਈ। ਅਸੀਂ ਸੱਚੀ ਗੱਲ ਬਿਨਾਂ ਲਾਗ-ਲਪੇਟ ਦੇ ਕਹਿ ਦਿੱਤੀ ਹੈ।",
          "en": "Blinded by pride, souls forget and descend into lowly serpent-like births. We have stated the pure, unvarnished truth directly."
        }
      },
      {
        "id": "sg5-v7",
        "type": "pada",
        "lines": {
          "hi": [
            "भावे कोई सुख दुख कर माने, भक्ति का पंथ चलाई।",
            "योग यज्ञ तीरथ व्रत संयम, करनी कोट कराई॥"
          ],
          "pb": [
            "ਭਾਵੇ ਕੋਈ ਸੁਖ ਦੁਖ ਕਰ ਮਾਨੇ, ਭਕੑਤਿ ਕਾ ਪੰਥ ਚਲਾਈ।",
            "ਯੋਗ ਯਜੑ ਯ ਤੀਰਥ ਵ੍ਰਤ ਸੰਯਮ, ਕਰਨੀ ਕੋਟ ਕਰਾਈ॥"
          ],
          "en": [
            "Bhaave koi sukh dukh kar maane, bhakti ka panth chalai.",
            "Yog yagya teerath vrat sanyam, karani kot karai.."
          ]
        },
        "bhavarth": {
          "hi": "चाहे कोई सुख माने या दुःख, सतगुरु ने तो भक्ति का सच्चा मार्ग चला दिया है। इसके आगे योग, यज्ञ, तीर्थ, व्रत और संयम रूपी करोड़ों कर्म भी फीके हैं।",
          "pb": "ਭਾਵੇਂ ਕੋਈ ਕੁਝ ਵੀ ਮੰਨੇ, ਗੁਰੂ ਨੇ ਭਗਤੀ ਦਾ ਮਾਰਗ ਚਲਾ ਦਿੱਤਾ ਹੈ। ਯੋਗ, ਤੀਰਥ, ਵਰਤ ਅਤੇ ਸੰਯਮ ਕਰੋੜਾਂ ਕਰਮ ਇਸ ਅੱਗੇ ਤੁੱਛ ਹਨ।",
          "en": "Whether others accept it or not, the Satguru has established the path of devotion. Millions of yogic sacrifices, fasts, and pilgrimages pale in comparison."
        }
      },
      {
        "id": "sg5-v8",
        "type": "pada",
        "lines": {
          "hi": [
            "नाम बिना सबही हैं खाली, कहें कबीर समुझाई।",
            "नाम ध्वजा फहराई, दास पर नाम ध्वजा फहराई॥"
          ],
          "pb": [
            "ਨਾਮ ਬਿਨਾ ਸਬਹੀ ਹੈਂ ਖਾਲੀ, ਕਹੈਂ ਕਬੀਰ ਸਮੁਝਾਈ।",
            "ਨਾਮ ਧ੍ਵਜਾ ਫਹਰਾਈ, ਦਾਸ ਪਰ ਨਾਮ ਧ੍ਵਜਾ ਫਹਰਾਈ॥"
          ],
          "en": [
            "Naam bina sabhi hain khaali, kahein Kabir samujhai.",
            "Naam dhvaja phaharai, daas par naam dhvaja phaharai."
          ]
        },
        "bhavarth": {
          "hi": "सतगुरु कबीर साहेब समझाते हैं कि हरि नाम के बिना सब कुछ खाली (व्यर्थ) है। केवल सतगुरु के दास के अंग-संग पावन नाम की ध्वजा फहराती है।",
          "pb": "ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਸਮਝਾਉਂਦੇ ਹਨ ਕਿ ਨਾਮ ਬਿਨਾਂ ਸਭ ਖਾਲੀ ਹੈ। ਸਤਿਗੁਰੂ ਦੇ ਦਾਸ ਉੱਤੇ ਨਾਮ ਦੀ ਧ੍ਵਜਾ ਫਹਰਦੀ ਹੈ।",
          "en": "Kabir explains that without the Name all is empty. The banner of the Divine Name proudly waves over the true servant of the Satguru."
        }
      }
    ]
  },
  SANDHYA_PRABHAT_SANDHYA_SAKHI_SECTION,
  SUMIRAN_SANDHYA_SAKHI_SECTION,
  GYAN_STOTRA_SECTION,
  VIGYAN_STOTRA_SECTION,
  DAYASAGAR_STUTI_SECTION,
  ADHIK_MAHIMA_SECTION,
  CHETAVANI_SAKHI_SECTION,
  SAT_KA_SHABAD_SECTION,
  GYAAN_GUDADI_SANDHYA_SECTION,
  ARJINAMA_SANDHYA_SECTION,
  {
    "id": "sandhya-ashtak-1",
    "majorCategoryId": "sandhya-path",
    "majorCategoryTitle": {
      "hi": "२. मूल संध्या पाठ",
      "pb": "੨. ਮੂਲ ਸੰਧਿਆ ਪਾਠ",
      "en": "2. Evening Sacred Recitation (Mool Sandhya Path)"
    },
    "subGroup": "अष्टक पाठ",
    "title": {
      "hi": "अष्टक - १ (अष्टक स्तुति)",
      "pb": "ਅਸ਼ਟਕ - ੧ (ਅਸ਼ਟਕ ਸ੍ਤੁਤਿ)",
      "en": "Ashtak - 1 (Eight Octave Verses)"
    },
    "subtitle": {
      "hi": "गुरु ध्यान सार एवं सतगुरु स्तुति",
      "pb": "ਗੁਰੂ ਧਿਆਨ ਸਾਰ ਤੇ ਸਤਿਗੁਰੂ ਮਹਿਮਾ",
      "en": "Praise of Satguru Kabir Saheb and Guru Meditation"
    },
    "iconName": "Scroll",
    "estimatedMinutes": 5,
    "totalVerses": 12,
    "verses": [
      {
        "id": "ashtak1-v0",
        "type": "mangal",
        "lines": {
          "hi": [
            "गुरु ध्यान सार भज बार बार सब तज विकार, सत्यनाम सार सो कर यारी।",
            "जय जय गुरु पीरं सत्य कबीरं अमर शरीरं अधिकारी॥"
          ],
          "pb": [
            "ਗੁਰੂ ਧ੍ਯਾਨ ਸਾਰ ਭਜ ਬਾਰ ਬਾਰ ਸਬ ਤਜ ਵਿਕਾਰ, ਸਤਯਨਾਮ ਸਾਰ ਸੋ ਕਰ ਯਾਰੀ।",
            "ਜਯ ਜਯ ਗੁਰੂ ਪੀਰੰ ਸਤ੍ਯ ਕਬੀਰੰ ਅਮਰ ਸ਼ਰੀਰੰ ਅਧਿਕਾਰੀ॥"
          ],
          "en": [
            "Guru dhyaan saar bhaj baar baar sab taj vikaar, satyanaam saar so kar yaaree.",
            "Jay jay guru peeram satya Kabeeram amar shareeram adhikaaree."
          ]
        },
        "bhavarth": {
          "hi": "गुरु के ध्यान को ही जीवन का सार मानकर, समस्त मानसिक विकारों को त्याग कर बार-बार प्रभु नाम का भजन करो और परम सत्यनाम से प्रीति करो। अमर शरीर के स्वामी, सत्यस्वरूप गुरु सतगुरु कबीर साहेब की जय-जयकार है।",
          "pb": "ਗੁਰੂ ਦਾ ਧਿਆਨ ਹੀ ਜੀਵਨ ਦਾ ਸਾਰ ਹੈ, ਸਾਰੇ ਵਿਕਾਰ ਛੱਡ ਕੇ ਸਤਯਨਾਮ ਨਾਲ ਪ੍ਰੀਤ ਕਰੋ। ਅਮਰ ਸਰੀਰ ਦੇ ਮਾਲਕ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਜੈ-ਜੈਕਾਰ ਹੈ।",
          "en": "Meditate repeatedly on the Master as the essence of life, relinquishing all flaws, and attach your soul to the Supreme Satyanaam. Victory to Satguru Kabir, the Master of the Immortal Form."
        }
      },
      {
        "id": "ashtak1-v1",
        "type": "pada",
        "lines": {
          "hi": [
            "निर्गुण निज मूलं धरी स्थूलं, काटन शूलं भव भारी।",
            "सुरति निज सोहं कलिमल खोहं जन मन मोहं छवि भारी॥"
          ],
          "pb": [
            "ਨਿਰਗੁਣ ਨਿਜ ਮੂਲੰ ਧਰੀ ਸਥੂਲੰ, ਕਾਟਨ ਸ਼ੂਲੰ ਭਵ ਭਾਰੀ।",
            "ਸੁਰਤਿ ਨਿਜ ਸੋਹੰ ਕਲਿਮਲ ਖੋਹੰ ਜਨ ਮਨ ਮੋਹੰ ਛਵਿ ਭਾਰੀ॥"
          ],
          "en": [
            "Nirgun nij moolam dharee sthoolam, kaatan shoolam bhav bhaaree.",
            "Surati nij soham kalimal khoham jan man moham chhavi bhaaree."
          ]
        },
        "bhavarth": {
          "hi": "जो निर्गुण और परम मूल-तत्त्व हैं, उन्होंने संसार के भीषण कष्टों और दुखों को काटने के लिए साकार रूप धारण किया है। आपकी सुरति 'सोहं' स्वरूप में स्थित है, आप कलयुग के पापों को नष्ट करने वाले और जन-जन के मन को मोहने वाली दिव्य छवि वाले हैं।",
          "pb": "ਜੋ ਨਿਰਗੁਣ ਪਰਮ ਪ੍ਰਭੂ ਹਨ, ਉਨ੍ਹਾਂ ਨੇ ਸੰਸਾਰ ਦੇ ਦੁੱਖ ਕੱਟਣ ਲਈ ਸਾਕਾਰ ਰੂਪ ਧਾਰਿਆ। ਆਪ ਕਲਯੁਗ ਦੇ ਪਾਪ ਨਾਸ ਕਰਨ ਵਾਲੇ ਅਤੇ ਮਨਮੋਹਕ ਸਰੂਪ ਵਾਲੇ ਹੋ।",
          "en": "The Primal Attributeless Lord took physical form to destroy the immense afflictions of worldly existence. Situated in divine consciousness, You erase the sins of Kaliyuga with Your enchanting form."
        }
      },
      {
        "id": "ashtak1-v2",
        "type": "pada",
        "lines": {
          "hi": [
            "अमरपुर वासी सब सुख राशि सदा विलासी बलिहारी।",
            "पीरन के पीरा मति के धीरा अलख फकीरा ब्रह्मचारी॥"
          ],
          "pb": [
            "ਅਮਰਪੁਰ ਵਾਸੀ ਸਬ ਸੁਖ ਰਾਸ਼ਿ ਸਦਾ ਵਿਲਾਸੀ ਬਲਿਹਾਰੀ।",
            "ਪੀਰਨ ਕੇ ਪੀਰਾ ਮਤਿ ਕੇ ਧੀਰਾ ਅਲਖ ਫਕੀਰਾ ਬ੍ਰਹ੍ਮਚਾਰੀ॥"
          ],
          "en": [
            "Amarpur vaasee sab sukh raashi sadaa vilaasee balihaaree.",
            "Peeran ke peeraa mati ke dheeraa alakh phakeeraa brahmachaaree."
          ]
        },
        "bhavarth": {
          "hi": "आप अमरलोक के निवासी हैं, समस्त सुखों के भंडार हैं और आत्म-आनंद में सदा लीन रहते हैं, हम आप पर बलिहार जाते हैं। आप पीरों के भी पीर, परम धीरता वाले, अलख फकीर और सर्वदा निर्मल ब्रह्मचारी हैं।",
          "pb": "ਆਪ ਅਮਰਲੋਕ ਦੇ ਵਾਸੀ, ਸੁੱਖਾਂ ਦੇ ਭੰਡਾਰ ਹੋ। ਆਪ ਪੀਰਾਂ ਦੇ ਪੀਰ, ਧੀਰਜਵਾਨ, ਅਲਖ ਫ਼ਕੀਰ ਅਤੇ ਪਰਮ ਬ੍ਰਹਮਚਾਰੀ ਹੋ।",
          "en": "Resident of the Immortal Abode, the treasure-house of all joy, eternally immersed in divine bliss! You are the Saint of Saints, steadfast in wisdom, the imperceptible ascetic and pristine Celestate."
        }
      },
      {
        "id": "ashtak1-v3",
        "type": "pada",
        "lines": {
          "hi": [
            "हंसन हितकारी जग पगु धारी वर्ग प्रहारी उपकारी।",
            "काशी में आये साहेब कहाये हंस बचाये प्रणधारी॥"
          ],
          "pb": [
            "ਹੰਸਨ ਹਿਤਕਾਰੀ ਜਗ ਪਗੁ ਧਾਰੀ ਵਰਗ ਪ੍ਰਹਾਰੀ ਉਪਕਾਰੀ।",
            "ਕਾਸ਼ੀ ਮੇਂ ਆਯੇ ਸਾਹੇਬ ਕਹਾਯੇ ਹੰਸ ਬਚਾਯੇ ਪ੍ਰਣਧਾਰੀ॥"
          ],
          "en": [
            "Hansan hitkaaree jag pagu dhaaree varg prahaaree upkaaree.",
            "Kaashee mein aaye saheb kahaaye hans bachaaye pranadhaaree."
          ]
        },
        "bhavarth": {
          "hi": "आप शुद्ध जीवात्मा (हंसों) का हित करने वाले हैं, जिन्होंने इस संसार में अवतरित होकर अज्ञानता और कुमार्ग प्रहारकों पर प्रहार किया। आपने काशी नगरी में प्रकट होकर साहेब कहलाए और अपने प्रण के अनुसार अज्ञान में डूबे हंसों का उद्धार किया।",
          "pb": "ਆਪ ਹੰਸ-ਆਤਮਾਵਾਂ ਦਾ ਭਲਾ ਕਰਨ ਲਈ ਸੰਸਾਰ ਵਿੱਚ ਆਏ। ਕਾਸ਼ੀ ਵਿੱਚ ਪ੍ਰਗਟ ਹੋ ਕੇ ਆਪ ਨੇ ਸਾਹੇਬ ਅਖਵਾਇਆ ਅਤੇ ਜੀਵਾਂ ਦਾ ਉੱਧਾਰ ਕੀਤਾ।",
          "en": "Benevolently stepping into the world to benefit pure souls, You dispelled dark ignorance. Appearing in Kashi, You were acclaimed as Saheb, steadfastly redeeming liberation-seeking souls."
        }
      },
      {
        "id": "ashtak1-v4",
        "type": "pada",
        "lines": {
          "hi": [
            "रामानन्द स्वामी अन्तर्यामी है बड़ नामी संसारी।",
            "उनको गुरु कीन्हा मतबुद्धि लीन्हा उनहूं न चिन्हा करतारी॥"
          ],
          "pb": [
            "ਰਾਮਾਨੰਦ ਸ੍ਵਾਮੀ ਅੰਤ੍ਰਯਾਮੀ ਹੈ ਬੜ ਨਾਮੀ ਸੰਸਾਰੀ।",
            "ਉਨਕੋ ਗੁਰੂ ਕੀਨ੍ਹਾ ਮਤਬੁੱਧਿ ਲੀਨ੍ਹਾ ਉਨਹੂੰ ਨ ਚਿਨ੍ਹਾ ਕਰਤਾਰੀ॥"
          ],
          "en": [
            "Raamaanand swaamee antaryaamee hai bad naamee sansaaree.",
            "Unko guru keenhaa matbuddhi leenhaa unhoon na chinhaa kartaaree."
          ]
        },
        "bhavarth": {
          "hi": "संसार में प्रसिद्ध एवं सम्मानित स्वामी रामानंद जी को आपने लोक-मर्यादा हेतु गुरु स्वीकार किया और उनकी बाह्य दृष्टि का समाधान किया, क्योंकि प्रारंभ में वे भी आपकी साक्षात् परमेश्वरता को पहचान न सके थे।",
          "pb": "ਸੰਸਾਰ ਵਿੱਚ ਪ੍ਰਸਿੱਧ ਸਵਾਮੀ ਰਾਮਾਨੰਦ ਜੀ ਨੂੰ ਆਪ ਨੇ ਲੋਕ-ਮਰਿਆਦਾ ਲਈ ਗੁਰੂ ਬਣਾਇਆ, ਜੋ ਪਹਿਲਾਂ ਆਪ ਜੀ ਦੀ ਪਰਮ-ਜੋਤਿ ਨੂੰ ਨਾ ਪਛਾਣ ਸਕੇ।",
          "en": "You accepted the renowned Swami Ramananda as Guru to establish spiritual tradition, illuminating his understanding when even he initially recognized not Your Supreme Divinity."
        }
      },
      {
        "id": "ashtak1-v5",
        "type": "pada",
        "lines": {
          "hi": [
            "ब्राह्मण सन्यासी कीन्ही हांसी तब अविनाशी पगुधारी।",
            "मगहर स्थाना किया पयाना दे परवाना जन तारी॥"
          ],
          "pb": [
            "ਬ੍ਰਾਹਮਣ ਸੰਨ੍ਯਾਸੀ ਕੀਨ੍ਹੀ ਹਾਂਸੀ ਤਬ ਅਵਿਨਾਸ਼ੀ ਪਗੁਧਾਰੀ।",
            "ਮਗਹਰ ਸਥਾਨਾ ਕਿਯਾ ਪਯਾਨਾ ਦੇ ਪਰਵਾਨਾ ਜਨ ਤਾਰੀ॥"
          ],
          "en": [
            "Braahman sanyaasee keenhee haansee tab avinaashee pagudhaaree.",
            "Maghar sthaanaa kiya payaanaa de parvaanaa jan taaree."
          ]
        },
        "bhavarth": {
          "hi": "जब अंधविश्वासी ब्राह्मणों और संन्यासियों ने काशी-मगहर के भ्रम में उपहास किया, तब अविनाशी साहेब ने मगहर की ओर प्रस्थान किया और मुक्ति का परवाना देकर जीवों को भवसागर से तार दिया।",
          "pb": "ਜਦੋਂ ਕਾਸ਼ੀ-ਮਗਹਰ ਦੇ ਭਰਮ ਵਿੱਚ ਪੰਡਿਤਾਂ ਨੇ ਹੱਸਿਆ, ਤਦ ਅਵਿਨਾਸ਼ੀ ਪ੍ਰਭੂ ਨੇ ਮਗਹਰ ਜਾ ਕੇ ਜੀਵਾਂ ਨੂੰ ਮੁਕਤੀ ਦਾ ਪਰਵਾਨਾ ਦਿੱਤਾ।",
          "en": "When ritualistic priests and ascetics mocked the dogma of Maghar vs. Kashi, the Eternal Lord marched to Maghar, granting the certificate of eternal liberation to true seekers."
        }
      },
      {
        "id": "ashtak1-v6",
        "type": "pada",
        "lines": {
          "hi": [
            "तहां बलवीरा तजे शरीरा काटन पीरा भवभारी।",
            "वीरसिंह देव राजा सुनि बल गाजा सब दल साजा संहारी॥"
          ],
          "pb": [
            "ਤਹਾਂ ਬਲਵੀਰਾ ਤਜੇ ਸ਼ਰੀਰਾ ਕਾਟਨ ਪੀਰਾ ਭਵਭਾਰੀ।",
            "ਵੀਰਸਿੰਘ ਦੇਵ ਰਾਜਾ ਸੁਨਿ ਬਲ ਗਾਜਾ ਸਬ ਦਲ ਸਾਜਾ ਸੰਹਾਰੀ॥"
          ],
          "en": [
            "Tahaan balveeraa taje shareeraa kaatan peeraa bhavbhaaree.",
            "Veersingh dev raajaa suni bal gaajaa sab dal saajaa sanhaaree."
          ]
        },
        "bhavarth": {
          "hi": "मगहर में जब साहेब ने संसार के बंधनों को काटने के लिए शरीर अंतर्धान का लीला-कौतुक रचा, तब बघेल राजा वीरसिंह देव अपनी सेना सजाकर युद्ध के लिए तैयार हो गए।",
          "pb": "ਮਗਹਰ ਵਿੱਚ ਜਦੋਂ ਸਾਹੇਬ ਨੇ ਸਰੀਰ ਓਹਲੇ ਕੀਤਾ, ਤਦ ਰਾਜਾ ਵੀਰਸਿੰਘ ਆਪਣੀ ਫੌਜ ਲੈ ਕੇ ਯੁੱਧ ਲਈ ਆਇਆ।",
          "en": "At Maghar, when the Supreme Master enacted His physical departure to end cosmic agony, King Veersingh Dev assembled his army in martial fervor."
        }
      },
      {
        "id": "ashtak1-v7",
        "type": "pada",
        "lines": {
          "hi": [
            "उत पीर पठाना अति बलवाना लाय कमाना करडारी।",
            "सम्मुख नियराना छूटे न बाना भये घमशाना रण भारी॥"
          ],
          "pb": [
            "ਉਤ ਪੀਰ ਪਠਾਨਾ ਅਤਿ ਬਲਵਾਨਾ ਲਾਯ ਕਮਾਨਾ ਕਰਡਾਰੀ।",
            "ਸੰਮੁਖ ਨਿਯਰਾਨਾ ਛੂਟੇ ਨ ਬਾਨਾ ਭਯੇ ਘਮਸ਼ਾਨਾ ਰਣ ਭਾਰੀ॥"
          ],
          "en": [
            "Ut peer patthaanaa ati balvaanaa laay kamaanaa kardaaree.",
            "Sammukh niyraanaa chhoote na baanaa bhaye ghamshaanaa ran bhaaree."
          ]
        },
        "bhavarth": {
          "hi": "दूसरी ओर नवाब बिजली खान पठान के शूरवीर हाथों में धनुष-कमान लेकर आमने-सामने आ गए, जिससे भारी युद्ध और घमासान की स्थिति उत्पन्न हो गई।",
          "pb": "ਦੂਜੇ ਪਾਸੇ ਨਵਾਬ ਦੇ ਪਠਾਨ ਯੋਧੇ ਧਨੁਸ਼ ਲੈ ਕੇ ਸਾਹਮਣੇ ਆ ਗਏ ਅਤੇ ਘਮਾਸਾਨ ਲੜਾਈ ਦੀ ਨੌਬਤ ਆ ਗਈ।",
          "en": "On the other side, the powerful Pathan ruler and his soldiers prepared their bows and arrows, creating a tense battleground scene."
        }
      },
      {
        "id": "ashtak1-v8",
        "type": "pada",
        "lines": {
          "hi": [
            "तबही गुरु ज्ञानी मन की जानी अद्धरी बानी उच्चारी।",
            "तुम खोलो परदा है नहिं मुरदा युद्ध अवस्था कर डारी॥"
          ],
          "pb": [
            "ਤਬਹੀ ਗੁਰੂ ਗਿਆਨੀ ਮਨ ਕੀ ਜਾਨੀ ਅੱਧਰੀ ਬਾਨੀ ਉੱਚਾਰੀ।",
            "ਤੁਮ ਖੋਲੋ ਪਰਦਾ ਹੈ ਨਹਿਂ ਮੁਰਦਾ ਯੁੱਧ ਅਵਸਥਾ ਕਰ ਡਾਰੀ॥"
          ],
          "en": [
            "Tabhee guru gyaanee man kee jaanee addharee baanee uchchaaree.",
            "Tum kholo pardaa hai nahin murdaa yuddh avasthaa kar daaree."
          ]
        },
        "bhavarth": {
          "hi": "तभी अंतर्यामी ज्ञानी गुरु सतगुरु कबीर साहेब ने उनके मंतव्य को जानकर आकाशवाणी (अद्धरी बानी) की: 'तुम चादर का पर्दा हटाकर देखो, वहाँ कोई मृत शरीर नहीं है, तुम व्यर्थ ही युद्ध की स्थिति बना रहे हो!'",
          "pb": "ਤਦ ਅੰਤਰਜਾਮੀ ਗੁਰੂ ਨੇ ਆਕਾਸ਼ਵਾਣੀ ਕੀਤੀ: 'ਪਰਦਾ ਚੁੱਕ ਕੇ ਵੇਖੋ, ਉੱਥੇ ਕੋਈ ਮੁਰਦਾ ਨਹੀਂ ਹੈ, ਤੁਸੀਂ ਫਜ਼ੂਲ ਲੜਾਈ ਕਰ ਰਹੇ ਹੋ!'",
          "en": "Thereupon the Omniscient Master uttered a voice from the heavens: 'Lift the cloth cover! There is no corpse within; why wage this futile war?'"
        }
      },
      {
        "id": "ashtak1-v9",
        "type": "pada",
        "lines": {
          "hi": [
            "सुनिके यह बानी अचरज मानी, देखि निशानी सिर मारी।",
            "रोवे परवीना हम मति हीना तुमहिं न चीन्हा करतारी॥"
          ],
          "pb": [
            "ਸੁਨਿਕੇ ਯਹ ਬਾਨੀ ਅਚਰਜ ਮਾਨੀ, ਦੇਖਿ ਨਿਸ਼ਾਨੀ ਸਿਰ ਮਾਰੀ।",
            "ਰੋਵੇ ਪਰਵੀਨਾ ਹਮ ਮਤਿ ਹੀਨਾ ਤੁਮਹਿਂ ਨ ਚੀਨ੍ਹਾ ਕਰਤਾਰੀ॥"
          ],
          "en": [
            "Sunike yah baanee acharaj maanee, dekhi nishaanee sir maaree.",
            "Rove parveenaa ham mati heenaa tumhin na cheenhaa kartaaree."
          ]
        },
        "bhavarth": {
          "hi": "यह आकाशवाणी सुनकर सब आश्चर्यचकित हो गए। चादर हटाने पर केवल ताज़े पुष्प देखकर सब पछताने लगे और रोते हुए बोले: 'हम मंदबुद्धि आपको साक्षात् कर्तार नहीं पहचान सके!'",
          "pb": "ਇਹ ਸੁਣ ਕੇ ਸਭ ਨੇ ਹੈਰਾਨੀ ਮੰਨੀ, ਫੁੱਲਾਂ ਦੀ ਨਿਸ਼ਾਨੀ ਵੇਖ ਕੇ ਰੋਣ ਲੱਗੇ ਕਿ ਅਸੀਂ ਆਪ ਜੀ ਨੂੰ ਪਰਮੇਸ਼ੁਰ ਨਾ ਪਛਾਣ ਸਕੇ।",
          "en": "Hearing this divine voice, all were awe-struck; beholding only fresh flowers beneath the cloth, leaders wept bitterly in grief, repenting their inability to recognize the Supreme Being."
        }
      },
      {
        "id": "ashtak1-v10",
        "type": "pada",
        "lines": {
          "hi": [
            "मगहर तजि वासा किया प्रकाशा जहां धर्मदासा व्रतधारी।",
            "तिनको शिष्य कीन्हा सर्व सो दीन्हा दुखहरि लीन्हा भ्रमभारी॥"
          ],
          "pb": [
            "ਮਗਹਰ ਤਜਿ ਵਾਸਾ ਕਿਯਾ ਪ੍ਰਕਾਸ਼ਾ ਜਹਾਂ ਧਰਮਦਾਸਾ ਵ੍ਰਤਧਾਰੀ।",
            "ਤਿਨਕੋ ਸ਼ਿਸ਼੍ਯ ਕੀਨ੍ਹਾ ਸਰ੍ਵ ਸੋ ਦੀਨ੍ਹਾ ਦੁਖਹਰਿ ਲੀਨ੍ਹਾ ਭ੍ਰਮਭਾਰੀ॥"
          ],
          "en": [
            "Maghar taji vaasaa kiya prakaashaa jahaan dharmathaasaa vratdhaaree.",
            "Tinako shishya keenhaa serv so deenhaa dukhhari leenhaa bhrambhaaree."
          ]
        },
        "bhavarth": {
          "hi": "मगहर से अंतर्धान होकर साहेब ने परम पवित्र भक्त धर्मदास जी के समक्ष स्वयं को प्रकट किया। उन्हें अपना प्रिय शिष्य बनाकर ब्रह्म-ज्ञान की सर्व संपदा सौंप दी और उनके सारे संशय व भ्रम हर लिए।",
          "pb": "ਮਗਹਰ ਤੋਂ ਓਹਲੇ ਹੋ ਕੇ ਸਾਹੇਬ ਨੇ ਧਰਮਦਾਸ ਜੀ ਅੱਗੇ ਪ੍ਰਕਾਸ਼ ਕੀਤਾ, ਉਨ੍ਹਾਂ ਨੂੰ ਆਪਣਾ ਸਿੱਖ ਬਣਾ ਕੇ ਗਿਆਨ ਦਾ ਖ਼ਜ਼ਾਨਾ ਬਖ਼ਸ਼ਿਆ।",
          "en": "Departing Maghar, the Master manifested before the devoted Dharmdas, accepting him as His foremost disciple and bestowing upon him the ultimate spiritual wealth."
        }
      },
      {
        "id": "ashtak1-v11",
        "type": "pada",
        "lines": {
          "hi": [
            "सत्य पन्थ चलाये भर्म मिटाये इष्ट दृढ़ाये संसारी।",
            "रतना जन तेरो करत निहेरो हम तन हेरो साहेब बलिहारी॥"
          ],
          "pb": [
            "ਸਤ੍ਯ ਪੰਥ ਚਲਾਏ ਭ੍ਰਮ ਮਿਟਾਏ ਇਸ਼੍ਟ ਦ੍ਰਿੜ੍ਹਾਏ ਸੰਸਾਰੀ।",
            "ਰਤਨਾ ਜਨ ਤੇਰੋ ਕਰਤ ਨਿਹੇਰੋ ਹਮ ਤਨ ਹੇਰੋ ਸਾਹੇਬ ਬਲਿਹਾਰੀ॥"
          ],
          "en": [
            "Satya panth chalaaye bhram mitaaye isht dridhaaye sansaaree.",
            "Ratnaa jan tero karat nihero ham tan hero saheb balihaaree."
          ]
        },
        "bhavarth": {
          "hi": "आपने सत्य का पावन पंथ चलाकर संसार के समस्त भ्रमों को मिटाया और इष्ट-देव की सुदृढ़ भक्ति सिखाई। दास (रत्ना/सेवक) आपके चरणों में आर्त पुकार करता है कि हे साहेब! अपनी कृपा-दृष्टि हमारे ऊपर कीजिए, हम आप पर बलिहार हैं।",
          "pb": "ਆਪ ਨੇ ਸੱਚ ਦਾ ਮਾਰਗ ਚਲਾ ਕੇ ਭਰਮ ਮਿਟਾਏ। ਹੇ ਸਾਹੇਬ! ਆਪਣੇ ਸੇਵਕ 'ਤੇ ਮਿਹਰ ਦੀ ਨਜ਼ਰ ਕਰੋ, ਅਸੀਂ ਆਪ ਤੋਂ ਬਲਿਹਾਰ ਜਾਂਦੇ ਹਾਂ।",
          "en": "Establishing the Path of Truth, You eradicated worldly delusions and anchored mankind in true devotion. Your humble servant prays: O Lord Saheb, cast Your merciful gaze upon us, we dedicate ourselves to You!"
        }
      }
    ]
  },
  {
    "id": "sandhya-ashtak-2",
    "majorCategoryId": "sandhya-path",
    "majorCategoryTitle": {
      "hi": "२. मूल संध्या पाठ",
      "pb": "੨. ਮੂਲ ਸੰਧਿਆ ਪาਠ",
      "en": "2. Evening Sacred Recitation (Mool Sandhya Path)"
    },
    "subGroup": "अष्टक पाठ",
    "title": {
      "hi": "अष्टक - २ (त्रिभंगी छन्द)",
      "pb": "ਅਸ਼ਟਕ - ੨ (ਤ੍ਰਿਭੰਗੀ ਛੰਦ)",
      "en": "Ashtak - 2 (Tribhangi Chhand)"
    },
    "subtitle": {
      "hi": "त्रिभंगी छंदबद्ध अलौकिक स्तुति प्रवाह",
      "pb": "ਤ੍ਰਿਭੰਗੀ ਛੰਦ ਵਿੱਚ ਸਤਿਗੁਰੂ ਮਹਿਮਾ",
      "en": "Rhythmic Tribhangi Metric Hymn"
    },
    "iconName": "Music",
    "estimatedMinutes": 4,
    "totalVerses": 8,
    "verses": [
      {
        "id": "ashtak2-v1",
        "type": "chhand",
        "lines": {
          "hi": [
            "साहेब गुरुज्ञानी समरथ ध्यानी, अकल स्थानी अस्थीरम्।",
            "अविगत बानी मुक्ति निशानी, जग में आनी कब्बीरम्॥"
          ],
          "pb": [
            "ਸਾਹੇਬ ਗੁਰੁਗ੍ਯਾਨੀ ਸਮਰਥ ਧ੍ਯਾਨੀ, ਅਕਲ ਸਥਾਨੀ ਅਸਥੀਰਮ੍।",
            "ਅਵਿਗਤ ਬਾਨੀ ਮੁਕ੍ਤਿ ਨਿਸ਼ਾਨੀ, ਜਗ ਮੇਂ ਆਨੀ ਕਬ੍ਬੀਰਮ੍॥"
          ],
          "en": [
            "Saheb gurugyaanee samarath dhyaanee, akal sthaanee astheeram.",
            "Avigat baanee mukti nishaanee, jag mein aanee Kabbeeram."
          ]
        },
        "bhavarth": {
          "hi": "हे साहेब कबीर! आप परम ज्ञानी सतगुरु, सर्वसमर्थ ध्यानी और मन-बुद्धि से परे अखंड सनातन स्थान में स्थिर हैं। आपकी वाणी अगम्य है और मुक्ति की सच्ची निशानी है, जो आप स्वयं कबीर रूप में इस संसार में लाए हैं।",
          "pb": "ਹੇ ਸਾਹੇਬ ਕਬੀਰ! ਆਪ ਪਰਮ ਗਿਆਨੀ ਸਤਿਗੁਰੂ, ਸਰਬ-ਸਮਰਥ ਅਤੇ ਅਟੱਲ ਧਾਮ ਵਿੱਚ ਸਥਿਰ ਹੋ। ਆਪ ਜੀ ਦੀ ਬਾਣੀ ਮੁਕਤੀ ਦੀ ਨਿਸ਼ਾਨੀ ਹੈ ਜੋ ਆਪ ਜਗਤ ਵਿੱਚ ਲਿਆਏ ਹੋ।",
          "en": "O Lord Kabir! You are the all-knowing Master, omnipotent, and established in the unshakeable divine abode. Your voice is of the unmanifest realm and the true sign of liberation brought into this world."
        }
      },
      {
        "id": "ashtak2-v2",
        "type": "chhand",
        "lines": {
          "hi": [
            "शीश विराजित तिलक अखण्डित, मुख सतसुकृत गंभीरम्।",
            "ज्ञान प्रचण्डित पाखण्ड खण्डित, सुमिता मण्डित कब्बीरम्॥"
          ],
          "pb": [
            "ਸ਼ੀਸ਼ ਵਿਰਾਜਿਤ ਤਿਲਕ ਅਖਣ੍ਡਿਤ, ਮੁਖ ਸਤਸੁਕ੍ਰਿਤ ਗੰਭੀਰਮ੍।",
            "ਗ੍ਯਾਨ ਪ੍ਰਚਣ੍ਡਿਤ ਪਾਖਣ੍ਡ ਖਣ੍ਡਿਤ, ਸੁਮਿਤਾ ਮਣ੍ਡਿਤ ਕਬ੍ਬੀਰਮ੍॥"
          ],
          "en": [
            "Sheesh viraajit tilak akhandit, mukh satasukrit gambheeram.",
            "Gyan prachandit paakhand khandit, sumita mandit Kabbeeram."
          ]
        },
        "bhavarth": {
          "hi": "आपके मस्तक पर अखंड दिव्य तिलक सुशोभित है, और आपका मुख-मंडल परम सत्य, कल्याणकारी व अत्यंत गंभीर है। आपका ज्ञान अत्यंत प्रचंड है जिसने पाखंड और अंधविश्वासों का खंडन किया है, आप परम शांति व सुमति से मंडित साहेब कबीर हैं।",
          "pb": "ਆਪ ਜੀ ਦੇ ਮੱਥੇ 'ਤੇ ਤਿਲਕ ਸੋਹੰਦਾ ਹੈ ਅਤੇ ਮੁਖ 'ਤੇ ਸੱਚੀ ਗੰਭੀਰਤਾ ਹੈ। ਪ੍ਰਚੰਡ ਗਿਆਨ ਨਾਲ ਆਪ ਨੇ ਪਾਖੰਡਾਂ ਦਾ ਖੰਡਨ ਕੀਤਾ, ਆਪ ਸੁੰਦਰ ਸੁਮੱਤ ਨਾਲ ਸਜੇ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਹੋ।",
          "en": "An unbroken divine mark adorns Your forehead, and Your countenance is profoundly solemn and benevolent. With blazing spiritual wisdom, You destroyed external dogmatic hypocrisy."
        }
      },
      {
        "id": "ashtak2-v3",
        "type": "chhand",
        "lines": {
          "hi": [
            "वेष रिशाला सुमरणी माला, प्रेम उजियारा कृपा गहीरम्।",
            "दीन दयाला जन प्रतिपाला, सदा कृपालम् कब्बीरम्॥"
          ],
          "pb": [
            "ਵੇਸ਼ ਰਿਸ਼ਾਲਾ ਸੁਮਰਣੀ ਮਾਲਾ, ਪ੍ਰੇਮ ਉਜਿਯਾਰਾ ਕ੍ਰਿਪਾ ਗਹੀਰਮ੍।",
            "ਦੀਨ ਦਯਾਲਾ ਜਨ ਪ੍ਰਤਿਪਾਲਾ, ਸਦਾ ਕ੍ਰਿਪਾਲਮ੍ ਕਬ੍ਬੀਰਮ੍॥"
          ],
          "en": [
            "Vesh rishaalaa sumaranee maala, prem ujiyaaraa kripa gaheeram.",
            "Deen dayaalaa jan pratipaala, sadaa kripaalam Kabbeeram."
          ]
        },
        "bhavarth": {
          "hi": "आपका वेष अत्यंत सुंदर व अलौकिक है, गले में नाम-स्मरण की माला सुशोभित है। आपके हृदय में प्रेम का प्रकाश और कृपा का गहरा सागर है। आप दीनों पर दया करने वाले, सेवकों के प्रतिपालक और सर्वदा कृपालु सतगुरु कबीर साहेब हैं।",
          "pb": "ਆਪ ਜੀ ਦਾ ਸੁੰਦਰ ਸਰੂਪ ਹੈ, ਗਲੇ ਵਿੱਚ ਸਿਮਰਨ ਦੀ ਮਾਲਾ ਹੈ ਤੇ ਪ੍ਰੇਮ ਦਾ ਚਾਨਣ ਹੈ। ਆਪ ਗਰੀਬਾਂ ਦੇ ਰੱਖਵਾਲੇ ਅਤੇ ਸਦਾ ਦਿਆਲੂ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਹੋ।",
          "en": "Wearing a beautiful, elegant attire with a rosary of remembrance, You shine with the light of pure love and a deep ocean of grace. Protector of the humble, You are ever-compassionate."
        }
      },
      {
        "id": "ashtak2-v4",
        "type": "chhand",
        "lines": {
          "hi": [
            "संकट टारन कष्ट निवारण, शीश विडारन यम धीरम्।",
            "हंस उबारन जीव निस्तारन, भर्म विडारन कब्बीरम्॥"
          ],
          "pb": [
            "ਸੰਕਟ ਟਾਰਨ ਕਸ਼੍ਟ ਨਿਵਾਰਣ, ਸ਼ੀਸ਼ ਵਿਡਾਰਨ ਯਮ ਧੀਰਮ੍।",
            "ਹੰਸ ਉਬਾਰਨ ਜੀਵ ਨਿਸ੍ਤਾਰਨ, ਭਰ੍ਮ ਵਿਡਾਰਨ ਕਬ੍ਬੀਰਮ੍॥"
          ],
          "en": [
            "Sankat taaran kasht nivaaran, sheesh vidaaran yam dheeram.",
            "Hans ubaaran jeev nistaaran, bharm vidaaran Kabbeeram."
          ]
        },
        "bhavarth": {
          "hi": "आप भक्तों के संकटों को टालने वाले, कष्टों का निवारण करने वाले और कठोर यमराज के भय का नाश करने वाले हैं। आप अज्ञान से हंस-आत्माओं को उबारने वाले, जीवों का निस्तार करने वाले और संसार के भ्रमों को मिटाने वाले सतगुरु कबीर साहेब हैं।",
          "pb": "ਆਪ ਸੰਕਟਾਂ ਤੇ ਕਸ਼ਟਾਂ ਨੂੰ ਦੂਰ ਕਰਨ ਵਾਲੇ, ਜਮਾਂ ਦੇ ਡਰ ਨੂੰ ਨਾਸ ਕਰਨ ਵਾਲੇ ਅਤੇ ਜੀਵਾਂ ਨੂੰ ਭਰਮਾਂ ਤੋਂ ਮੁਕਤ ਕਰਨ ਵਾਲੇ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਹੋ।",
          "en": "Dispeller of adversities and sufferings, You shatter the authority of the god of death. You rescue pure souls, liberate living beings, and erase all delusions."
        }
      },
      {
        "id": "ashtak2-v5",
        "type": "chhand",
        "lines": {
          "hi": [
            "सतयुग त्रेता द्वापर बीता, रमता तीता पर पीरम्।",
            "कलयुग कीता सब सो जीता, परम पुनीता कब्बीरम्॥"
          ],
          "pb": [
            "ਸਤਯੁਗ ਤ੍ਰੇਤਾ ਦ੍ਵਾਪਰ ਬੀਤਾ, ਰਮਤਾ ਤੀਤਾ ਪਰ ਪੀਰਮ੍।",
            "ਕਲਯੁਗ ਕੀਤਾ ਸਬ ਸੋ ਜੀਤਾ, ਪਰਮ ਪੁਨੀਤਾ ਕਬ੍ਬੀਰਮ੍॥"
          ],
          "en": [
            "Satyug tretaa dwaapar beetaa, ramtaa teetaa par peeram.",
            "Kalayug keetaa sab so jeetaa, param puneetaa Kabbeeram."
          ]
        },
        "bhavarth": {
          "hi": "सतयुग, त्रेता और द्वापर युग बीत गए, आप सदा काल से परे अनादि रूप में रमन करते हुए जीवों के कष्टों को दूर करते आ रहे हैं। कलयुग में भी आपने सबको अपने सत्य ज्ञान से जीतकर जीवों का कल्याण किया, आप परम पवित्र सतगुरु कबीर साहेब हैं।",
          "pb": "ਸਾਰੇ ਜੁਗਾਂ ਵਿੱਚ ਆਪ ਜੀ ਦਾ ਪ੍ਰਕਾਸ਼ ਰਿਹਾ। ਕਲਯੁਗ ਵਿੱਚ ਵੀ ਆਪ ਨੇ ਸਤਯਨਾਮ ਦੇ ਬਲ ਨਾਲ ਸਭ ਜੀਵਾਂ ਦਾ ਉੱਧਾਰ ਕੀਤਾ, ਆਪ ਪਰਮ ਪਵਿੱਤਰ ਕਬੀਰ ਹੋ।",
          "en": "Across Satya, Treta, and Dwapar Yugas, You moved eternally to relieve pain; in Kaliyuga as well, You conquered hearts with Truth, O most holy Lord Kabir."
        }
      },
      {
        "id": "ashtak2-v6",
        "type": "chhand",
        "lines": {
          "hi": [
            "काशी छोड़ उड़ीसा आये, आशा गाड़े सिन्धु तीरम्।",
            "ठाकुर पण्डो गर्व बिहण्डो, पाखण्ड खण्डो कब्बीरम्॥"
          ],
          "pb": [
            "ਕਾਸ਼ੀ ਛੋੜ ਉੜੀਸา ਆਯੇ, ਆਸ਼ਾ ਗਾੜੇ ਸਿੰਧੁ ਤੀਰਮ੍।",
            "ਠਾਕੁਰ ਪਣ੍ਡੋ ਗਰ੍ਵ ਬਿਹਣ੍ਡੋ, ਪਾਖਣ੍ਡ ਖਣ੍ਡੋ ਕਬ੍ਬੀਰਮ੍॥"
          ],
          "en": [
            "Kaashee chhod udeesaa aaye, aashaa gaade sindhu teeram.",
            "Thaakur pando garv bihando, paakhand khando Kabbeeram."
          ]
        },
        "bhavarth": {
          "hi": "आप काशी नगरी छोड़कर जगन्नाथ पुरी (ओडिशा) पधारे और समुद्र तट पर अपना आशा (भक्ति-स्तम्भ) स्थापित किया। वहाँ के अहंकारी पण्डों और शासकों के गर्व को चूर कर उनके पाखंड का खंडन किया।",
          "pb": "ਆਪ ਕਾਸ਼ੀ ਛੱਡ ਕੇ ਉੜੀਸਾ ਆਏ ਅਤੇ ਸਮੁੰਦਰ ਕੰਢੇ ਆਪਣੀ ਗੱਦੀ ਸਥਾਪਿਤ ਕੀਤੀ। ਪਾਂਡਿਆਂ ਦਾ ਹੰਕਾਰ ਤੋੜ ਕੇ ਪਾਖੰਡ ਦਾ ਖੰਡਨ ਕੀਤਾ।",
          "en": "Leaving Kashi, You arrived in Odisha and established Your holy pillar on the ocean shore. You shattered the pride of the temple priests and dismantled their hollow rituals."
        }
      },
      {
        "id": "ashtak2-v7",
        "type": "chhand",
        "lines": {
          "hi": [
            "पुरुष विदेही अविचल देही, नाम सनेही अस्थीरम्।",
            "जो जन जाने भेटे ताही, दर्शन देहु गुरु कब्बीरम्॥"
          ],
          "pb": [
            "ਪੁਰੁਸ਼ ਵਿਦੇਹੀ ਅਵਿਚਲ ਦੇਹੀ, ਨਾਮ ਸਨੇਹੀ ਅਸਥੀਰਮ੍।",
            "jo jan jaane bhete taahee, darshan dehu guru Kabbeeram॥"
          ],
          "en": [
            "Purush videhee avichal dehee, naam sanehee astheeram.",
            "Jo jan jaane bhete taahee, darshan dehu guru Kabbeeram."
          ]
        },
        "bhavarth": {
          "hi": "आप विदेह पुरुष (शरीर के बंधनों से मुक्त), अविनाशी अविचल शरीर वाले और सत्यनाम से अनुराग रखने वाले अचल प्रभु हैं। जो जन आपके इस सत्य स्वरूप को जानता है, उसे आप भेंटते हैं; हे गुरु कबीर! हमें अपने पावन दर्शन दीजिए।",
          "pb": "ਆਪ ਅਵਿਨਾਸ਼ੀ ਦੇਹ ਵਾਲੇ, ਨਾਮ ਦੇ ਪਿਆਰੇ ਹੋ। ਜੋ ਜੀਵ ਆਪ ਜੀ ਦੇ ਸੱਚੇ ਰੂਪ ਨੂੰ ਜਾਣਦਾ ਹੈ, ਉਸ ਨੂੰ ਦਰਸ਼ਨ ਦਿੰਦੇ ਹੋ, ਹੇ ਗੁਰੂ ਕਬੀਰ ਦਰਸ਼ਨ ਦਿਓ।",
          "en": "The bodiless Supreme Soul with an unshakeable eternal body, You are forever steady in the love of the Name. Whoever realizes this truth meets You; grant us Your divine vision, Guru Kabir!"
        }
      },
      {
        "id": "ashtak2-v8",
        "type": "chhand",
        "lines": {
          "hi": [
            "कबीर अष्टक टारन कष्टक, भवजल नष्टक कर स्थिरम्।",
            "धर्मनि दासं नित अभ्यासं, प्राप्त तासं कब्बीरम्॥"
          ],
          "pb": [
            "ਕਬੀਰ ਅਸ਼ਟਕ ਟਾਰਨ ਕਸ਼੍ਟਕ, ਭਵਜਲ ਨਸ਼੍ਟਕ ਕਰ ਸ੍ਥਿਰਮ੍।",
            "ਧਰਮਨਿ ਦਾਸੰ ਨਿਤ ਅਭ੍ਯਾਸੰ, ਪ੍ਰਾਪ੍ਤ ਤਾਸੰ ਕਬ੍ਬੀਰਮ੍॥"
          ],
          "en": [
            "Kabeer ashtak taaran kashtak, bhavajal nashtak kar sthiram.",
            "Dharmani daasam nit abhyaasam, praapt taasam Kabbeeram."
          ]
        },
        "bhavarth": {
          "hi": "सतगुरु कबीर साहेब का यह पावन अष्टक कष्टों को टालने वाला, संसार रूपी भवजल के दुखों को नष्ट करने वाला और मन को स्थिर करने वाला है। दास धर्मदास नित्य इसका अभ्यास/स्मरण करते हैं और इस प्रकार सतगुरु कबीर साहेब की कृपा प्राप्त करते हैं।",
          "pb": "ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦਾ ਇਹ ਅਸ਼ਟਕ ਕਸ਼ਟਾਂ ਨੂੰ ਦੂਰ ਕਰਦਾ ਹੈ ਤੇ ਮਨ ਨੂੰ ਸਥਿਰ ਕਰਦਾ ਹੈ। ਦਾਸ ਧਰਮਦਾਸ ਨਿੱਤ ਇਸ ਦਾ ਪਾਠ ਕਰ ਕੇ ਪ੍ਰਭੂ ਕ੍ਰਿਪਾ ਪਾਉਂਦਾ ਹੈ।",
          "en": "This Kabir Ashtak dispels all distress, dissolves the illusions of the worldly ocean, and centers the mind. Servant Dharmdas meditates on it daily, attaining union with Lord Kabir."
        }
      }
    ]
  },
  {
    "id": "sandhya-ashtak-3",
    "majorCategoryId": "sandhya-path",
    "majorCategoryTitle": {
      "hi": "२. मूल संध्या पाठ",
      "pb": "੨. ਮੂਲ ਸੰਧਿਆ ਪਾਠ",
      "en": "2. Evening Sacred Recitation (Mool Sandhya Path)"
    },
    "subGroup": "अष्टक पाठ",
    "title": {
      "hi": "अष्टक - ३ (परम पद अष्टक)",
      "pb": "ਅਸ਼ਟਕ - ੩ (ਪਰਮ ਪਦ ਅਸ਼ਟਕ)",
      "en": "Ashtak - 3 (Param Pad Ashtak)"
    },
    "subtitle": {
      "hi": "सत्यलोक गमन एवं मोक्ष अष्टक",
      "pb": "ਮੁਕਤੀ ਦਾ ਅਸ਼ਟਕ",
      "en": "Octave of the Supreme Abode"
    },
    "iconName": "Scroll",
    "estimatedMinutes": 6,
    "totalVerses": 16,
    "verses": [
      {
        "id": "ashtak3-v1",
        "type": "stuti",
        "lines": {
          "hi": [
            "मंगल रूप अनुपम पूरण, नाम कबीर सो आप उदारा।",
            "मो पर दृष्टि दया करि हेरहु, हों अति बालक दास तुम्हारा॥"
          ],
          "pb": [
            "ਮੰਗਲ ਰੂਪ ਅਨੁਪਮ ਪੂਰਣ, ਨਾਮ ਕਬੀਰ ਸੋ ਆਪ ਉਦਾਰਾ।",
            "ਮੋ ਪਰ ਦ੍ਰਿਸ਼੍ਟਿ ਦਯਾ ਕਰਿ ਹੇਰਹੁ, ਹੋਂ ਅਤਿ ਬਾਲਕ ਦਾਸ ਤੁਮ੍ਹਾਰਾ॥"
          ],
          "en": [
            "Mangal roop anupam pooran, naam Kabeer so aap udaaraa.",
            "Mo par drishti daya kari herahu, hon ati baalak daas tumhaaraa."
          ]
        },
        "bhavarth": {
          "hi": "हे कल्याणकारी, अनुपम और पूर्ण परमेश्वर! आपका नाम कबीर है और आप परम दयालु हैं। हे स्वामी! मुझ पर दया दृष्टि कीजिए, मैं आपका अबोध बालक और सेवक हूँ.",
          "pb": "ਹੇ ਕਲਿਆਣਕਾਰੀ, ਅਨੂਪਮ ਅਤੇ ਪੂਰਨ ਪ੍ਰਭੂ! ਆਪ ਦਾ ਨਾਮ ਕਬੀਰ ਹੈ ਅਤੇ ਆਪ ਪਰਮ ਦਿਆਲੂ ਹੋ। ਮੇਰੇ 'ਤੇ ਮਿਹਰ ਦੀ ਨਜ਼ਰ ਕਰੋ, ਮੈਂ ਆਪ ਜੀ ਦਾ ਨਿਆਣਾ ਬਾਲਕ ਹਾਂ।",
          "en": "O auspicious, incomparable, and perfect Lord! Your name is Kabir and You are immensely generous. Cast Your merciful glance upon me, for I am Your innocent child and servant."
        }
      },
      {
        "id": "ashtak3-v2",
        "type": "stuti",
        "lines": {
          "hi": [
            "काम अपार महाबल भारत, देखत के मम चित डारावे।",
            "कीजे कृपा उर अन्तर्यामी सु, संकट सो बहु जीव दुखावे॥"
          ],
          "pb": [
            "ਕਾਮ ਅਪਾਰ ਮਹਾਬਲ ਭਾਰਤ, ਦੇਖਤ ਕੇ ਮਮ ਚਿਤ ਡਾਰਾਵੇ।",
            "ਕੀਜੇ ਕ੍ਰਿਪਾ ਉਰ ਅੰਤ੍ਰਯਾਮੀ ਸੁ, ਸੰਕਟ ਸੋ ਬਹੁ ਜੀਵ ਦੁਖਾਵੇ॥"
          ],
          "en": [
            "Kaam apaar mahaabal bhaarat, dekhat ke mam chit daaraave.",
            "Keeje kripa ur antaryaamee su, sankat so bahu jeev dukhaave."
          ]
        },
        "bhavarth": {
          "hi": "यह संसार काम-वासना रूपी अत्यंत बलशाली शत्रु से घिरा हुआ है, जिसे देखकर मेरा मन भयभीत होता है। हे अंतर्यामी! कृपा कीजिए, क्योंकि इस काम रूपी संकट से जीव अत्यधिक दुखी रहते हैं।",
          "pb": "ਸੰਸਾਰ ਵਿੱਚ ਕਾਮ-ਵਾਸਨਾ ਵਰਗਾ ਬਲਵਾਨ ਵੈਰੀ ਮੇਰੇ ਮਨ ਨੂੰ ਡਰਾਉਂਦਾ ਹੈ। ਹੇ ਅੰਤਰਜਾਮੀ ਪ੍ਰਭੂ! ਦਿਆ ਕਰੋ, ਇਸ ਸੰਕਟ ਨਾਲ ਜੀਵ ਬਹੁਤ ਦੁਖੀ ਹੁੰਦੇ ਹਨ।",
          "en": "The immense, powerful force of desire terrifies my heart. O Omniscient Lord, show mercy, for this desire plagues and distresses souls deeply."
        }
      },
      {
        "id": "ashtak3-v3",
        "type": "stuti",
        "lines": {
          "hi": [
            "लोभ महा मद क्रोध उपावत, होत अधीर बहुत चित्त मेरो।",
            "मोह माया ममता रजनी यो तो, बारम्बार रहो नित घेरो॥"
          ],
          "pb": [
            "ਲੋਭ ਮਹਾ ਮਦ ਕ੍ਰੋਧ ਉਪਾਵਤ, ਹੋਤ ਅਧੀਰ ਬਹੁਤ ਚਿਤ੍ਤ ਮੇਰੋ।",
            "ਮੋਹ ਮਾਯਾ ਮਮਤਾ ਰਜਨੀ ਯੋ ਤੋ, ਬਾਰਮ੍ਬਾਰ ਰਹੋ ਨਿਤ ਘੇਰੋ॥"
          ],
          "en": [
            "Lobh mahaa mad krodh upaavat, hot adheer bahut chitt mero.",
            "Moh maayaa mamtaa rajanee yo to, baarambaar raho nit ghero."
          ]
        },
        "bhavarth": {
          "hi": "लोभ, अहंकार और क्रोध जैसी भावनाएं मेरे चित्त को अशांत और अधीर करती हैं। मोह, माया और ममता रूपी रात्रि मुझे बार-बार चारों ओर से घेरे रखती है।",
          "pb": "ਲੋਭ, ਹੰਕਾਰ ਤੇ ਕ੍ਰੋਧ ਮੇਰੇ ਮਨ ਨੂੰ ਅਧੀਰ ਕਰਦੇ ਹਨ। ਮੋਹ-ਮਾਇਆ ਦੀ ਰਾਤ ਮੈਨੂੰ ਵਾਰ-ਵਾਰ ਘੇਰ ਕੇ ਰੱਖਦੀ ਹੈ।",
          "en": "Greed, pride, and wrath agitate my consciousness, making me highly impatient. The night of attachment and illusion surrounds me relentlessly."
        }
      },
      {
        "id": "ashtak3-v4",
        "type": "stuti",
        "lines": {
          "hi": [
            "एक उपाय अहै बचिवे अब, होहु दयालु दया करि हेरो।",
            "कहा कहू कछु आप छिप्यो कहा, हो प्रभु नाथ अनाथन केरो॥"
          ],
          "pb": [
            "ਏਕ ਉਪਾਯ ਅਹੈ ਬਚਿਵੇ ਅਬ, ਹੋਹੁ ਦਯਾਲੂ ਦਯา ਕਰਿ ਹੇਰੋ।",
            "ਕਹਾ ਕਹੂ ਕਛੁ ਆਪ ਛਿਪ੍ਯੋ ਕਹਾ, ਹੋ ਪ੍ਰਭੂ ਨਾਥ ਅਨਾਥਨ ਕੇਰੋ॥"
          ],
          "en": [
            "Ek upaay ahai bachive ab, hohu dayaalu daya kari hero.",
            "Kahaa kahoo kachhu aap chhipyo kahaa, ho prabhu naath anaathan kero."
          ]
        },
        "bhavarth": {
          "hi": "अब इससे बचने का केवल एक ही उपाय है कि आप दयालु होकर मेरी ओर दया की दृष्टि करें। मैं आपसे क्या कहूँ, आपसे कुछ भी छिपा नहीं है; आप ही अनाथों के नाथ हैं।",
          "pb": "ਹੁਣ ਬਚਣ ਦਾ ਇੱਕੋ ਇੱਕ ਰਾਹ ਹੈ ਕਿ ਆਪ ਦਿਆਲੂ ਹੋ ਕੇ ਮੇਰੇ ਵੱਲ ਤੱਕੋ। ਮੈਂ ਕੀ ਆਖਾਂ, ਆਪ ਤੋਂ ਕੁਝ ਛੁਪਿਆ ਨਹੀਂ, ਆਪ ਹੀ ਅਨਾਥਾਂ ਦੇ ਨਾਥ ਹੋ।",
          "en": "There is now but one way to escape: be merciful and look upon me with grace. What can I say? Nothing is hidden from You; You are indeed the Lord of the protectorless."
        }
      },
      {
        "id": "ashtak3-v5",
        "type": "stuti",
        "lines": {
          "hi": [
            "मो कह तात तुही पितु मातु सु, और उपाय नहीं कछु मोहीं।",
            "जो सुत मात पिता ढिंग आवत, तो वह मातु सो दृष्टि न जोई॥"
          ],
          "pb": [
            "ਮੋ ਕਹ ਤਾਤ ਤੁਹੀ ਪਿਤੁ ਮਾਤੁ ਸੁ, ਔਰ ਉਪਾਯ ਨਹੀਂ ਕਛੁ ਮੋਹੀਂ।",
            "ਜੋ ਸੁਤ ਮਾਤ ਪਿਤਾ ਢਿੰਗ ਆਵਤ, ਤੋ ਵਹ ਮਾਤੁ ਸੋ ਦ੍ਰਿਸ਼੍ਟਿ ਨ ਜੋਈ॥"
          ],
          "en": [
            "Mo kaat taat tuhee pitu maatu su, aur upaay nahee kachhu mohee.",
            "Jo sut maat pitaa dhing aavat, to vah maatu so drishti na joee."
          ]
        },
        "bhavarth": {
          "hi": "मेरे लिए आप ही माता-पिता और रक्षक हैं, आपके अतिरिक्त मेरा अन्य कोई सहारा नहीं है। जब कोई बालक माता-पिता के समीप आता है, तो माँ कभी अपनी स्नेह-दृष्टि उससे नहीं हटाती।",
          "pb": "ਮੇਰੇ ਲਈ ਆਪ ਹੀ ਮਾਤਾ-ਪਿਤਾ ਹੋ, ਆਪ ਤੋਂ ਬਿਨਾਂ ਹੋਰ ਕੋਈ ਓਟ ਨਹੀਂ। ਜਦੋਂ ਬੱਚਾ ਮਾਤਾ-ਪਿਤਾ ਕੋਲ ਆਉਂਦਾ ਹੈ, ਤਾਂ ਮਾਂ ਉਸ ਤੋਂ ਪਿਆਰ ਦੀ ਨਜ਼ਰ ਨਹੀਂ ਹਟਾਉਂਦੀ।",
          "en": "For me, You are my mother, father, and protector; I have no other refuge. When a child approaches its parents, the mother never withdraws her gaze of love."
        }
      },
      {
        "id": "ashtak3-v6",
        "type": "stuti",
        "lines": {
          "hi": [
            "तो पुनि लोटत पोटत अंगन, लेत उठाय दया करि वोही।",
            "त्यों गुरुदेव कबीर कृपालु सु, हो एक आस शरणागति तोही॥"
          ],
          "pb": [
            "ਤੋ ਪੁਨਿ ਲੋਟਤ ਪੋਟਤ ਅੰਗਨ, ਲੈਤ ਉਠਾਯ ਦਯਾ ਕਰਿ ਵੋਹੀ।",
            "ਤ੍ਯੋਂ ਗੁਰੁਦੇਵ ਕਬੀਰ ਕ੍ਰਿਪਾਲੁ ਸੁ, ਹੋ ਏਕ ਆਸ ਸ਼ਰਣਾਗਤਿ ਤੋਹੀ॥"
          ],
          "en": [
            "To puni lotat potat angan, let uthaay daya kari vohee.",
            "Tyon gurudev Kabeer kripaalu su, ho ek aas sharanaagati tohee."
          ]
        },
        "bhavarth": {
          "hi": "यदि बालक धूल में भी लोट रहा हो, तो माँ उसे दयापूर्वक गोद में उठा लेती है। उसी प्रकार हे कृपालु गुरुदेव कबीर! मुझे केवल आपकी शरण की ही एकमात्र आशा है।",
          "pb": "ਜੇ ਬੱਚਾ ਮਿੱਟੀ ਵਿੱਚ ਵੀ ਲੇਟ ਰਿਹਾ ਹੋਵੇ, ਤਾਂ ਮਾਂ ਉਸ ਨੂੰ ਚੁੱਕ ਲੈਂਦੀ ਹੈ। ਉਸੇ ਤਰ੍ਹਾਂ ਹੇ ਗੁਰੂ ਕਬੀਰ! ਮੈਨੂੰ ਕੇਵਲ ਆਪ ਜੀ ਦੀ ਸ਼ਰਨ ਦੀ ਆਸ ਹੈ।",
          "en": "Even if the child rolls in the dust, the mother compassionately picks it up. Likewise, O merciful Master Kabir, my only hope lies in Your divine sanctuary."
        }
      },
      {
        "id": "ashtak3-v7",
        "type": "stuti",
        "lines": {
          "hi": [
            "दास को संकट देखि दयानिधि, हो करुणा करि आतुर धायो।",
            "इन्द्रमति जब टेर किया प्रभु, जाय तहां वह पीर मिटायो॥"
          ],
          "pb": [
            "ਦਾਸ ਕੋ ਸੰਕਟ ਦੇਖਿ ਦਯਾਨਿਧਿ, ਹੋ ਕਰੁਣਾ ਕਰਿ ਆਤੁਰ ਧਾਯੋ।",
            "ਇਨ੍ਦ੍ਰਮਤਿ ਜਬ ਟੇਰ ਕਿਯਾ ਪ੍ਰਭੂ, ਜਾਯ ਤਹਾਂ ਵਹ ਪੀਰ ਮਿਟਾਯੋ॥"
          ],
          "en": [
            "Daas ko sankat dekhi dayaanidhi, ho karunaa kari aatur dhaayo.",
            "Indramati jab ter kiyaa prabhu, jaay tahaan vah peer mitaayo."
          ]
        },
        "bhavarth": {
          "hi": "हे दयानिधि! अपने सेवकों को संकट में देखकर आप सदा करुणापूर्वक अत्यंत व्याकुल होकर सहायता के लिए दौड़े हैं। जब रानी इंद्रमती ने आर्त पुकार की, तब आपने तत्क्षण प्रकट होकर उनके सारे कष्ट दूर किए।",
          "pb": "ਹੇ ਦਇਆ ਦੇ ਸਾਗਰ! ਸੇਵਕਾਂ 'ਤੇ ਭੀੜ ਪਈ ਵੇਖ ਕੇ ਆਪ ਹਮੇਸ਼ਾ ਦੌੜੇ ਆਏ ਹੋ। ਜਦੋਂ ਰਾਣੀ ਇੰਦਰਮਤੀ ਨੇ ਆਪ ਜੀ ਨੂੰ ਪੁਕਾਰਿਆ, ਤਦ ਆਪ ਨੇ ਉਸ ਦਾ ਦੁੱਖ ਮਿਟਆਇਆ।",
          "en": "O ocean of mercy, seeing Your servants in distress, You have always rushed in compassionate haste. When Queen Indramati called out, You appeared and removed her suffering."
        }
      },
      {
        "id": "ashtak3-v8",
        "type": "stuti",
        "lines": {
          "hi": [
            "बांधत सेतु सहाय कियो प्रभु, रामहु केर उपाय बतायो।",
            "कौन सो संकट मोय गरीब को, जो तुम सो नहि जात छुड़ायो॥"
          ],
          "pb": [
            "ਬਾਂਧਤ ਸੇਤੁ ਸਹਾਯ ਕਿਯੋ ਪ੍ਰਭੂ, ਰਾਮਹੁ ਕੇਰ ਉਪਾਯ ਬਤਾਯੋ।",
            "ਕੌਨ ਸੋ ਸੰਕਟ ਮੋਯ ਗਰੀਬ ਕੋ, ਜੋ ਤੁਮ ਸੋ ਨਹਿ ਜਾਤ ਛੁੜਾਯੋ॥"
          ],
          "en": [
            "Baandhat setu sahaay kiyo prabhu, raamahu ker upaay bataayo.",
            "Kaun so sankat moy gareeb ko, jo tum so nahi jaat chhudaayo."
          ]
        },
        "bhavarth": {
          "hi": "त्रेतायुग में समुद्र पर सेतु बाँधते समय आपने सहायता की और प्रभु श्री रामचंद्र जी को सफल उपाय सुझाया। हे साहेब! मुझ गरीब का ऐसा कौन सा संकट है, जिसे आप दूर नहीं कर सकते?",
          "pb": "ਸਮੁੰਦਰ 'ਤੇ ਪੁਲ ਬੰਨ੍ਹਣ ਵੇਲੇ ਆਪ ਨੇ ਸ੍ਰੀ ਰਾਮਚੰਦਰ ਜੀ ਦੀ ਸਹਾਇਤਾ ਕੀਤੀ। ਹੇ ਸਾਹੇਬ! ਮੇਰਾ ਅਜਿਹਾ ਕਿਹੜਾ ਦੁੱਖ ਹੈ, ਜਿਸ ਨੂੰ ਆਪ ਦੂਰ ਨਹੀਂ ਕਰ ਸਕਦੇ?",
          "en": "While building the ocean bridge, You aided and guided Sri Ramachandra. O Master, what trouble could a poor soul like me have that is beyond Your power to resolve?"
        }
      },
      {
        "id": "ashtak3-v9",
        "type": "stuti",
        "lines": {
          "hi": [
            "जाय पुरी पुरुषोत्तम के प्रभु, देकर दण्ड समुद्र हटायो।",
            "विप्रन को अभिमान महा प्रभु, तोरन को बहु रूप दिखायो॥"
          ],
          "pb": [
            "ਜਾਯ ਪੁਰੀ ਪੁਰੁਸ਼ੋਤ੍ਤਮ ਕੇ ਪ੍ਰਭੂ, ਦੇਕਰ ਦਣ੍ਡ ਸਮੁਦ੍ਰ ਹਟਾਯੋ।",
            "ਵਿਪ੍ਰਨ ਕੋ ਅਭਿਮਾਨ ਮਹਾ ਪ੍ਰਭੂ, ਤੋਰਨ ਕੋ ਬਹੁ ਰੂਪ ਦਿਖਾਯੋ॥"
          ],
          "en": [
            "Jaay puree purushottam ke prabhu, dekar dand samudru hataayo.",
            "Vipran ko abhimaan mahaa prabhu, toran ko bahu roop dikhaayo."
          ]
        },
        "bhavarth": {
          "hi": "जगन्नाथ पुरी में जाकर आपने समुद्र को दंडित कर (पीछे हटने का आदेश देकर) पीछे हटाया। वहाँ के दंभी पंडितों के महान अहंकार को तोड़ने के लिए आपने अनेक अलौकिक कौतुक दिखाए।",
          "pb": "ਜਗੰਨਾਥ ਪੁਰੀ ਜਾ ਕੇ ਆਪ ਨੇ ਸਮੁੰਦਰ ਨੂੰ ਪਿੱਛੇ ਹਟਾਇਆ ਅਤੇ ਉੱਥੋਂ ਦੇ ਪੰਡਿਤਾਂ ਦਾ ਅਭਿਮਾਨ ਤੋੜਨ ਲਈ ਕਈ ਕੌਤਕ ਕੀਤੇ।",
          "en": "Journeying to Jagannath Puri, You disciplined the ocean to recede, and to shatter the profound ego of the temple priests, You exhibited many divine forms."
        }
      },
      {
        "id": "ashtak3-v10",
        "type": "stuti",
        "lines": {
          "hi": [
            "वे भये दीन पड़े चरणों तब, सबही जाति सो एक मिलायो।",
            "दास जहाँ जहाँ जो कछु टेरत, ता कहाँ होहु तुम बेगि सहायो॥"
          ],
          "pb": [
            "ਵੇ ਭਯੇ ਦੀਨ ਪੜੇ ਚਰਣੋਂ ਤਬ, ਸਬਹੀ ਜਾਤਿ ਸੋ ਏਕ ਮਿਲਾਯੋ।",
            "ਦਾਸ ਜਹਾਂ ਜਹਾਂ ਜੋ ਕਛੁ ਟੇਰਤ, ਤਾ ਕਹਾਂ ਹੋਹੁ ਤੁਮ ਬੇਗਿ ਸਹਾਯੋ॥"
          ],
          "en": [
            "Ve bhaye deen pade charanon tab, sabahu jaati so ek milaayo.",
            "Daas jahaan jahaan jo kachhu terat, taa kahaan hohu tum begi sahaayo."
          ]
        },
        "bhavarth": {
          "hi": "वे सब अहंता को त्याग कर जब आपके चरणों में नत हुए, तब आपने उन्हें एक ही मानव जाति के सूत्र में पिरो दिया। आपका दास जब भी जहाँ भी आपको पुकारता है, आप शीघ्र ही उसकी सहायता को आते हैं।",
          "pb": "ਜਦੋਂ ਉਹ ਹੰਕਾਰ ਛੱਡ ਕੇ ਚਰਨੀਂ ਪਏ, ਤਾਂ ਆਪ ਨੇ ਸਾਰਿਆਂ ਨੂੰ ਇੱਕ ਰੂਪ ਕਰ ਦਿੱਤਾ। ਸੇਵਕ ਜਿੱਥੇ ਵੀ ਪੁਕਾਰਦਾ ਹੈ, ਆਪ ਤੁਰੰਤ ਸਹਾਇਤਾ ਕਰਦੇ ਹੋ।",
          "en": "When they became humble and fell at Your feet, You united all castes into one human family. Wherever Your servant calls, You hasten to render assistance."
        }
      },
      {
        "id": "ashtak3-v11",
        "type": "stuti",
        "lines": {
          "hi": [
            "मो कहं काहे बिसारत समरथ, दीन दयाल कबीर उदारा।",
            "आनंद रूप अचिन्त गोसांई, सो moh माया सब सो प्रभु पारा॥"
          ],
          "pb": [
            "ਮੋ ਕਹਂ ਕਾਹੇ ਬਿਸਾਰਤ ਸਮਰਥ, ਦੀਨ ਦਯਾਲ ਕਬੀਰ ਉਦਾਰਾ।",
            "ਆਨੰਦ ਰੂਪ ਅਚਿਨ੍ਤ ਗੋਸਾਂਈ, ਸੋ ਮੋਹ ਮਾਯਾ ਸਬ ਸੋ ਪ੍ਰਭੂ ਪਾਰਾ॥"
          ],
          "en": [
            "Mo kahan kaahe bisaarat samarath, deen dayaal Kabeer udaaraa.",
            "Aanand roop achint gosaanee, so moh maayaa sab so prabhu paara."
          ]
        },
        "bhavarth": {
          "hi": "हे सर्वसमर्थ, दीनों पर दया करने वाले परम उदार सतगुरु कबीर साहेब! आप मुझे क्यों विस्मृत कर रहे हैं? आप आनंदस्वरूप, चिंताओं से परे परमेश्वर हैं, जो मोह और माया के बंधनों से सर्वथा परे हैं।",
          "pb": "ਹੇ ਸਰਬ-ਸਮਰਥ, ਉਦਾਰ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ! ਆਪ ਮੈਨੂੰ ਕਿਉਂ ਵਿਸਾਰਦੇ ਹੋ? ਆਪ ਆਨੰਦ ਸਰੂਪ ਪਰਮੇਸ਼ੁਰ ਹੋ, ਜੋ ਮੋਹ-ਮਾਇਆ ਤੋਂ ਬਹੁਤ ਪਰੇ ਹੋ।",
          "en": "O all-powerful, merciful, and generous Kabir! Why do You forget me? You are the embodiment of bliss, beyond anxiety, and untouched by illusion."
        }
      },
      {
        "id": "ashtak3-v12",
        "type": "stuti",
        "lines": {
          "hi": [
            "साक्षी स्वरूप अनुपम शोभित, पारख रूप आकार तुम्हारा।",
            "हों अति दीन अधीन दुखी बहु, मेट्हु मोर अघोर अंधेरा॥"
          ],
          "pb": [
            "ਸਾਕ੍ਸ਼ੀ ਸ੍ਵਰੂਪ ਅਨੁਪਮ ਸ਼ੋਭਿਤ, ਪਾਰਖ ਰੂਪ ਆਕਾਰ ਤੁਮ੍ਹਾਰਾ।",
            "ਹੋਂ ਅਤਿ ਦੀਨ ਅਧੀਨ ਦੁਖੀ ਬਹੁ, ਮੇਟ੍ਹੁ ਮੋਰ ਅਘੋਰ ਅੰਧੇਰਾ॥"
          ],
          "en": [
            "Saakshee swaroop anupam shobhit, paarakh roop aakaar tumhaaraa.",
            "Hon ati deen adheen dukhee bahu, metahu mor aghor andheraa."
          ]
        },
        "bhavarth": {
          "hi": "आप सृष्टि के साक्षी स्वरूप और पारख ज्ञान के साक्षात् विग्रह हैं। मैं अत्यंत दीन, पराधीन और दुखी जीव हूँ; कृपा कर मेरे अज्ञान रूपी घोर अंधकार का नाश कर दीजिए।",
          "pb": "ਆਪ ਸ੍ਰਿਸ਼ਟੀ ਦੇ ਸਾਖੀ ਸਰੂਪ ਅਤੇ ਪਾਰਖ ਗਿਆਨ ਦੇ ਮਾਲਕ ਹੋ। ਮੈਂ ਬਹੁਤ ਦੁਖੀ ਤੇ ਗਰੀਬ ਹਾਂ, ਮੇਰਾ ਅਗਿਆਨਤਾ ਦਾ ਹਨੇਰਾ ਦੂਰ ਕਰੋ।",
          "en": "You are the supreme witness, beautifully adorned as the personification of analytical wisdom. I am deeply wretched and sorrowful; erase my terrible darkness of ignorance."
        }
      },
      {
        "id": "ashtak3-v13",
        "type": "stuti",
        "lines": {
          "hi": [
            "यह वर मांगहु देहू दया करि, अन्तर्यामी सु ज्ञान प्रकाशा।",
            "बोध स्वरूप सदा निर्णय गुरु, सो मम में तुम होहु उजासा॥"
          ],
          "pb": [
            "ਯਹ ਵਰ ਮਾਂਗਹੁ ਦੇਹੂ ਦਯਾ ਕਰਿ, ਅਨ੍ਤ੍ਰਯਾਮੀ ਸੁ ਗ੍ਯਾਨ ਪ੍ਰਕਾਸ਼ਾ।",
            "ਬੋਧ ਸ੍ਵਰੂਪ ਸਦਾ ਨਿਰ੍ਣਯ ਗੁਰੂ, ਸੋ ਮਮ ਮੇਂ ਤੁਮ ਹੋਹੁ ਉਜਾਸਾ॥"
          ],
          "en": [
            "Yah var maangahu dehoo daya kari, antaryaamee su gyaan prakaashaa.",
            "Bodh swaroop sadaa nirnay guru, so mam mein tum hohu ujaasaa."
          ]
        },
        "bhavarth": {
          "hi": "हे अंतर्यामी! मैं आपसे यही वरदान मांगता हूँ कि मेरे भीतर ज्ञान का प्रकाश कीजिए। हे विवेक और बोध के सागर सतगुरु! मेरे हृदय में आपके अविनाशी ज्ञान का उजाला हो।",
          "pb": "ਹੇ ਅੰਤਰਜਾਮੀ ਸਤਿਗੁਰੂ! ਮੈਂ ਇਹੀ ਵਰ ਮੰਗਦਾ ਹਾਂ ਕਿ ਮੇਰੇ ਅੰਦਰ ਗਿਆਨ ਦਾ ਚਾਨਣ ਕਰੋ। ਮੇਰੇ ਹਿਰਦੇ ਵਿੱਚ ਆਪ ਜੀ ਦੀ ਜੋਤਿ ਜਗੇ।",
          "en": "O inner Knower! I beg this boon: illuminate my mind with divine knowledge. O Guru of definitive wisdom and realization, may Your light shine inside me."
        }
      },
      {
        "id": "ashtak3-v14",
        "type": "stuti",
        "lines": {
          "hi": [
            "वेद पुराण कुराण जो गावहिं पार न पावहिं होहिं उदासा।",
            "जा पर मौज करो तुम साहेब, सो पुनि हंस मिले तुम पासा॥"
          ],
          "pb": [
            "ਵੇਦ ਪੁਰਾਣ ਕੁਰਾਣ ਜੋ ਗਾਵਹਿਂ ਪਾਰ ਨ ਪਾਵਹਿਂ ਹੋਹਿਂ ਉਦਾਸา।",
            "ਜਾ ਪਰ ਮੌਜ ਕਰੋ ਤੁਮ ਸਾਹੇਬ, ਸੋ ਪੁਨਿ ਹੰਸ ਮਿਲੇ ਤੁਮ ਪਾਸา॥"
          ],
          "en": [
            "Ved puraan kuraan jo gaavahin paar na paavahin hohin udaasaa.",
            "Jaa par mauj karo tum saheb, so puni hans mile tum paasaa."
          ]
        },
        "bhavarth": {
          "hi": "वेद, पुराण, कुरान आदि धर्मग्रंथ जिस परम सत्य का यश गाते हैं पर उसका पार न पाकर मौन हो जाते हैं। हे साहेब! जिस पर आपकी असीम कृपा (मौज) होती है, वही हंस-आत्मा आपकी सन्निधि प्राप्त करती है।",
          "pb": "ਵੇਦ, ਪੁਰਾਣ ਤੇ ਕੁਰਾਨ ਵੀ ਜਿਸ ਪਰਮ ਸੱਚ ਦਾ ਪਾਰ ਨਹੀਂ ਪਾ ਸਕਦੇ। ਹੇ ਸਾਹੇਬ! ਜਿਸ 'ਤੇ ਆਪ ਦੀ ਮਿਹਰ ਹੁੰਦੀ ਹੈ, ਉਹੀ ਆਤਮਾ ਆਪ ਜੀ ਨੂੰ ਪਾਉਂਦੀ ਹੈ।",
          "en": "Vedas, Puranas, and Quran sing Your praises but fail to find Your limit and fall silent. O Master, whoever receives Your divine grace is reunited with You."
        }
      },
      {
        "id": "ashtak3-v15",
        "type": "stuti",
        "lines": {
          "hi": [
            "ये गुरु अष्टक पाठ करे नर, आप सुने और ध्यान धरेंगे।",
            "होय श्रद्धा अति प्रेमहु पावत, मारग चाल सुचाल चलेंगे॥"
          ],
          "pb": [
            "ਯੇ ਗੁਰੁ ਅਸ਼ਟਕ ਪਾਠ ਕਰੇ ਨਰ, ਆਪ ਸੁਨੇ ਔਰ ਧ੍ਯਾਨ ਧਰੇਂਗੇ।",
            "ਹੋਯ ਸ਼੍ਰੱਧਾ ਅਤਿ ਪ੍ਰੇਮਹੁ ਪਾਵਤ, ਮਾਰਗ ਚਾਲ ਸੁਚਾਲ ਚਲੇਂਗੇ॥"
          ],
          "en": [
            "Ye guru ashtak paath kare nar, aap sune aur dhyaan dharenge.",
            "Hoy shraddhaa ati premahu paavat, maarag chaal suchaal chalenge."
          ]
        },
        "bhavarth": {
          "hi": "जो भी मनुष्य इस सतगुरु अष्टक का पाठ करता है, स्वयं सुनता है और प्रभु का ध्यान करता है, वह हृदय में अगाध श्रद्धा और प्रेम प्राप्त कर सत्य के पावन मार्ग पर चलता है।",
          "pb": "ਜੋ ਮਨੁੱਖ ਇਸ ਗੁਰੂ ਅਸ਼ਟਕ ਦਾ ਪਾਠ ਕਰਦਾ ਹੈ, ਸੁਣਦਾ ਹੈ ਤੇ ਧਿਆਨ ਧਰਦਾ ਹੈ, ਉਹ ਸ਼ਰਧਾ ਤੇ ਪ੍ਰੇਮ ਪਾ ਕੇ ਸੱਚੇ ਮਾਰਗ 'ਤੇ ਚੱਲਦਾ ਹੈ।",
          "en": "The person who recites this Guru Ashtak, listens to it, and meditates, obtains supreme faith and love, and treads the righteous path of truth."
        }
      },
      {
        "id": "ashtak3-v16",
        "type": "stuti",
        "lines": {
          "hi": [
            "ते नर पावहिं मुक्ति पदारथ, पाखण्ड रूप विकार तजेंगे।",
            "होहि सुखी लहि आनन्द को पद, सो भव सागर पार लगेंगे॥"
          ],
          "pb": [
            "ਤੇ ਨਰ ਪਾਵਹਿਂ ਮੁਕ੍ਤਿ ਪਦਾਰਥ, ਪਾਖਣ੍ਡ ਰੂਪ ਵਿਕਾਰ ਤਜੇਂਗੇ।",
            "ਹੋਹਿ ਸੁਖੀ ਲਹਿ ਆਨਨ੍ਦ ਕੋ ਪਦ, ਸੋ ਭਵ ਸਾਗਰ ਪਾਰ ਲਗੇਂਗੇ॥"
          ],
          "en": [
            "Te nar paavahin mukti padaarath, paakhand roop vikaar tajenge.",
            "Hohin sukhee lahi aanand ko pad, so bhav saagar paar lagenge."
          ]
        },
        "bhavarth": {
          "hi": "वे मनुष्य मुक्ति रूपी परम धन को प्राप्त करते हैं और पाखंड तथा मानसिक विकारों का त्याग कर देते हैं। वे परम आनंद पद पाकर सुखी होते हैं और भवसागर को पार कर जाते हैं।",
          "pb": "ਉਹ ਮਨੁੱਖ ਮੁਕਤੀ ਪਾਉਂਦੇ ਹਨ ਅਤੇ ਪਾਖੰਡ ਤੇ ਵਿਕਾਰਾਂ ਨੂੰ ਤਿਆਗ ਦਿੰਦੇ ਹਨ। ਉਹ ਪਰਮ ਆਨੰਦ ਪਾ ਕੇ ਭਵਜਲ ਤੋਂ ਪਾਰ ਲੰਘ ਜਾਂਦੇ ਹਨ।",
          "en": "They achieve the supreme boon of liberation, renouncing deceitful illusions and vices. Reaching the state of eternal bliss, they safely cross the worldly ocean."
        }
      }
    ]
  },
  SANDHYA_DHANAKSHARI_SECTION,
  SANDHYA_ARJINAMA_2_SECTION,
  SANDHYA_AARTI_1_SECTION,
  SANDHYA_AARTI_2_SECTION,
  SANDHYA_AARTI_3_SECTION,
  SANDHYA_AARTI_4_SECTION,
  SANDHYA_VINATI_1_SECTION,
  SANDHYA_VINATI_2_SECTION,
  SANDHYA_SUMIRAN_AARTI_SECTION,
  SANDHYA_SHLOK_DHYANAM_SECTION,
  SANDHYA_ANTIM_VINATI_SECTION,
  SANDHYA_SAMAPAN_VANDANA_SECTION
];
