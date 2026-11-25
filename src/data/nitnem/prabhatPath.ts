import { NitnemSection } from '../../types';
import { GURU_MAHIMA_2_SECTION } from './guruMahima2';
import { GURU_SHATAK_SAAR_SECTION } from './guruShatakSaar';
import { PRABHAT_SANDHYA_SAKHI_SECTION } from './prabhatSandhyaSakhi';
import { GYAAN_GUDADI_SECTION } from './gyaanGudadi';
import { ARJINAMA_SECTION } from './arjinama';
import { PRATAH_SUMIRAN_SECTION, PRABHAT_PRATAH_SUMIRAN_AARTI_SECTION, PRABHAT_SHLOK_DHYANAM_SECTION, PRABHAT_VINATI_SECTION } from './pratahSumiran';
import { DHANAKSHARI_SECTION } from './dhanakshari';
import { PRABHAT_AARTI_1_SECTION, PRABHAT_AARTI_2_SECTION, PRABHAT_AARTI_3_SECTION, PRABHAT_AARTI_4_SECTION } from './prabhatAartis';
import { PRABHAT_VINATI_1_SECTION, PRABHAT_VINATI_2_SECTION } from './prabhatVinati';
import { PRABHAT_SAMAPAN_VANDANA_SECTION } from './samapanVandana';

const PRABHAT_AARAMBH_VANDANA_SECTION: NitnemSection = {
  "id": "prabhat-aarambh-vandana",
  "majorCategoryId": "prabhat-path",
  "majorCategoryTitle": {
    "hi": "१. प्रभात (प्रातः) पाठ",
    "pb": "੧. ਪ੍ਰਭਾਤ (ਪ੍ਰਾਤਹ) ਪਾਠ",
    "en": "1. Morning Sacred Recitation (Prabhat Path)"
  },
  "subGroup": "वंदना",
  "title": {
    "hi": "आरंभ वंदना",
    "pb": "ਆਰੰਭ ਵੰਦਨਾ",
    "en": "Inaugural Salutation"
  },
  "subtitle": {
    "hi": "।।सत्यनाम।। प्रभात वेला गुरु परम्परा वंदना एवं पायलगि बंदगी",
    "pb": "॥ ਸਤਯਨਾਮ ॥ ਪ੍ਰਭਾਤ ਗੁਰੂ ਪਰੰਪਰਾ ਵੰਦਨਾ",
    "en": "Morning Guru Lineage Prostrations"
  },
  "iconName": "Hands",
  "estimatedMinutes": 5,
  "totalVerses": 1,
  "verses": [
    {
      "id": "pav-v1",
      "type": "vandana",
      "lines": {
        "hi": [
          "।।सत्यनाम।।",
          "सत्यनाम साहेब, ",
          "सत्यसुकृत साहेब, ",
          "आदि अदली साहेब, ",
          "अजर अचिन्त साहेब, ",
          "पुरुष मुनिन्द्र साहेब, ",
          "करुणामय साहेब, ",
          "कबीर साहेब, ",
          "सुरतियोग संतायन साहेब, ",
          "धनी धर्मदास साहेब, ",
          "वचन वंश चूरामणि नाम साहेब, ",
          "पंथ श्री हुजूर सुदर्शन नाम साहेब, ",
          "पंथ श्री हुजूर कुलपति नाम साहेब, ",
          "पंथ श्री हुजूर प्रमोध गुरु बालापीर नाम साहेब, ",
          "पंथ श्री हुजूर केवल नाम साहेब, ",
          "पंथ श्री हुजूर अमोल नाम साहेब, ",
          "पंथ श्री हुजूर सुरत सनेही नाम साहेब, ",
          "पंथ श्री हुजूर हक्क नाम साहेब, ",
          "पंथ श्री हुजूर पाक नाम साहेब, ",
          "पंथ श्री हुजूर प्रगट नाम साहेब, ",
          "पंथ श्री हुजूर धीरज नाम साहेब, ",
          "पंथ श्री हुजूर उग्रनाम साहेब, ",
          "पंथ श्री हुजूर दया नाम साहेब, ",
          "पंथ श्री हुजूर गृन्धमुनि नाम साहेब, ",
          "पंथ श्री हुजूर प्रकाशमुनि नाम साहेब, ",
          "पंथ श्री हुजूर उदितमुनि नाम साहेब, ",
          "चार गुरु वंश ब्यालीस के चरण कमलों में गुरु महिमा प्रभात (प्रातः) पाठ की पायलगी बंदगी ।",
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
          "ਕਬੀਰ ਸਾਹੇਬ, ",
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
          "ਚਾਰ ਗੁਰੂ ਵੰਸ਼ ਬ੍ਯਾਲੀਸ ਕੇ ਚਰਣ ਕਮਲੋਂ ਮੇਂ ਗੁਰੂ ਮਹਿਮਾ ਪ੍ਰਾਤਹ ਪ੍ਰਭਾਤ ਪਾਠ ਕੀ ਪਾਯਲਗੀ ਬੰਦਗੀ ।",
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
          "Kabir Saheb, ",
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
          "Prostrations at the lotus feet of the four Masters and 42 lineages for the morning recitation.",
          "|| Saheb Bandgi Saheb ||"
        ]
      },
      "bhavarth": {
        "hi": "सत्य स्वरूप परमात्मा और कबीर पंथ की पावन गुरु परम्परा के सभी आचार्यों के श्री चरणों में प्रभात वेला की विनम्र वंदना एवं साहेब बंदगी।",
        "pb": "ਸੱਚੇ ਪ੍ਰਭੂ ਅਤੇ ਕਬੀਰ ਪੰਥ ਦੀ ਗੁਰੂ ਪਰੰਪਰਾ ਦੇ ਸਾਰੇ ਮਹਾਂਪੁਰਖਾਂ ਨੂੰ ਪ੍ਰਣਾਮ।",
        "en": "Morning salutations and deepest reverence at the feet of the Eternal Lord and all the Masters of the sacred Kabir Panth lineage."
      }
    }
  ]
};

export const PRABHAT_PATH_SECTIONS: NitnemSection[] = [
  PRABHAT_AARAMBH_VANDANA_SECTION,
  {
    "id": "prabhat-mangalacharan",
    "majorCategoryId": "prabhat-path",
    "majorCategoryTitle": {
      "hi": "१. प्रभात (प्रातः) पाठ",
      "pb": "੧. ਪ੍ਰਭਾਤ (ਪ੍ਰਾਤਹ) ਪਾਠ",
      "en": "1. Morning Sacred Recitation (Prabhat Path)"
    },
    "subGroup": "मंगलाचरण",
    "title": {
      "hi": "मंगलाचरण",
      "pb": "ਮੰਗਲਾਚਰਨ",
      "en": "Mangalacharan (Sacred Invocation)"
    },
    "subtitle": {
      "hi": "।। सत्यनाम ।। सोरठा, चौपाई एवं पावन साखी",
      "pb": "॥ ਸਤਯਨਾਮ ॥ ਸੋਰਠਾ, ਚੌਪਈ ਅਤੇ ਪਾਵਨ ਸਾਖੀ",
      "en": "|| Satyanam || Sortha, Chaupai and Sacred Sakhi"
    },
    "iconName": "Sparkles",
    "estimatedMinutes": 5,
    "totalVerses": 9,
    "verses": [
      {
        "id": "pm-v1",
        "type": "sortha",
        "lines": {
          "hi": [
            "बन्दों पुरुष कबीर, बन्दों षोडस अंश को ।",
            "बन्दों परमातम धीर, बन्दों एकोत्तर वंश को ॥"
          ],
          "pb": [
            "ਬੰਦੋਂ ਪੁਰੁਸ਼ ਕਬੀਰ, ਬੰਦੋਂ ਸ਼ੋਡਸ ਅੰਸ਼ ਕੋ ।",
            "ਬੰਦੋਂ ਪਰਮਾਤਮ ਧੀਰ, ਬੰਦੋਂ ਏਕੋੱਤਰ ਵੰਸ਼ ਕੋ ॥"
          ],
          "en": [
            "Bando purush Kabir, bando shodas ansh ko |",
            "Bando Paramatam dheer, bando ekottar vansh ko ||"
          ]
        },
        "bhavarth": {
          "hi": "सर्वशक्तिमान पुरुषोत्तम कबीर साहेब और उनके सोलह दिव्य अंशों की वंदना करता हूँ। अचल-धैर्यवान परमात्मा और एक सौ एक (१०१) वंशों की पावन परम्परा को मेरा बारम्बार नमन है।",
          "pb": "ਸਰਬਸ਼ਕਤੀਮਾਨ ਕਬੀਰ ਸਾਹੇਬ ਅਤੇ ਉਨ੍ਹਾਂ ਦੇ ੧੬ ਅੰਸ਼ਾਂ ਦੀ ਵੰਦਨਾ ਹੈ। ਧੀਰਜਵਾਨ ਪ੍ਰਭੂ ਅਤੇ ੧੦੧ ਵੰਸ਼ਾਂ ਦੀ ਪਰੰਪਰਾ ਨੂੰ ਮੇਰਾ ਪ੍ਰਣਾਮ ਹੈ।",
          "en": "I bow to the Supreme Being Kabir Saheb and His sixteen divine emanations. Salutations to the steadfast Divine and the sacred lineage of 101 generations."
        }
      },
      {
        "id": "pm-v2",
        "type": "chaupai",
        "lines": {
          "hi": [
            "बन्दों गुरु सहतेजी बाई । बन्दों सात वंश अधिकाई ।।",
            "बन्दों राय बंकेजी गुरु भूपा । बन्दों वंश सत्ताइस रूपा ।। "
          ],
          "pb": [
            "ਬੰਦੋਂ ਗੁਰੂ ਸਹਤੇਜੀ ਬਾਈ। ਬੰਦੋਂ ਸਾਤ ਵੰਸ਼ ਅਧਿਕਾਈ ॥",
            "ਬੰਦੋਂ ਰਾਇ ਬੰਕੇਜੀ ਗੁਰੂ ਭੂਪਾ। ਬੰਦੋਂ ਵੰਸ਼ ਸਤਾਈਸ ਰੂਪਾ ॥"
          ],
          "en": [
            "Bando guru Sahateji Bai | Bando saat vansh adhikai ||",
            "Bando rai Bankeji guru bhoopa | Bando vansh sattais roopa ||"
          ]
        },
        "bhavarth": {
          "hi": "मैं गुरु सहतेजी बाई और सात प्रमुख वंशों की वंदना करता हूँ। राजा के समान प्रतापी सद्गुरु राय बंकेजी और सत्ताईस (२७) स्वरूपों वाले पावन वंशों को मेरा सादर नमन है।",
          "pb": "ਮੈਂ ਗੁਰੂ ਸਹਤੇਜੀ ਬਾਈ ਅਤੇ ਸੱਤ ਵੰਸ਼ਾਂ ਦੀ ਵੰਦਨਾ ਕਰਦਾ ਹਾਂ। ਪ੍ਰਤਾਪੀ ਗੁਰੂ ਬੰਕੇਜੀ ਅਤੇ ੨੭ ਵੰਸ਼ਾਂ ਨੂੰ ਮੇਰਾ ਪ੍ਰਣਾਮ ਹੈ।",
          "en": "I revere Guru Sahateji Bai and the seven exalted lineages. Homage to the majestic Guru Bankeji and the twenty-seven forms of the holy lineage."
        }
      },
      {
        "id": "pm-v3",
        "type": "chaupai",
        "lines": {
          "hi": [
            "बन्दों गुरु चतुर्भुज स्वामी । बन्दों सोला सुत सहिदानी ॥",
            "बन्दों धनी धर्मदास अधिकारे । बन्दों वंश ब्यालीस प्यारे ।। "
          ],
          "pb": [
            "ਬੰਦੋਂ ਗੁਰੂ ਚਤੁਰਭੁਜ ਸਵਾਮੀ। ਬੰਦੋਂ ਸੋਲਾ ਸੁਤ ਸਹਿਦਾਨੀ ॥",
            "ਬੰਦੋਂ ਧਨੀ ਧਰਮਦਾਸ ਅਧਿਕਾਰੇ। ਬੰਦੋਂ ਵੰਸ਼ ਬ੍ਯਾਲੀਸ ਪਿਆਰੇ ॥"
          ],
          "en": [
            "Bando guru Chaturbhuj swami | Bando sola sut sahidani ||",
            "Bando dhani Dharamdas adhikare | Bando vansh byalis pyare ||"
          ]
        },
        "bhavarth": {
          "hi": "परम पूज्य गुरु चतुर्भुज स्वामी और उनके साक्षी रूप सोलह आत्म-सुपुत्रों (शिष्यों) की वंदना करता हूँ। भक्ति के अधिकारी धनी धर्मदास साहेब और उनके अति प्रिय ब्यालीस (४२) वंशों को मेरा कोटि-कोटि प्रणाम है।",
          "pb": "ਮੈਂ ਗੁਰੂ ਚਤੁਰਭੁਜ ਸਵਾਮੀ ਅਤੇ ਉਨ੍ਹਾਂ ਦੇ ੧੬ ਸਪੁੱਤਰਾਂ/ਸਿੱਖਾਂ ਦੀ ਵੰਦਨਾ ਕਰਦਾ ਹਾਂ। ਧਰਮਦਾਸ ਜੀ ਅਤੇ ੪੨ ਵੰਸ਼ਾਂ ਨੂੰ ਮੇਰਾ ਪ੍ਰਣਾਮ ਹੈ।",
          "en": "I bow to Guru Chaturbhuj Swami and his sixteen disciples who bear witness to truth. Endless prostrations to Dhani Dharamdas and his beloved forty-two lineages."
        }
      },
      {
        "id": "pm-v4",
        "type": "chaupai",
        "lines": {
          "hi": [
            "चार गुरु और नौतम अंशा । मुक्ति करे सब जग के हंसा ॥",
            "चुरामणि है पंथ के राजा । जिनके हाथ जीवन को काजा ॥"
          ],
          "pb": [
            "ਚਾਰ ਗੁਰੂ ਔਰ ਨੌਤਮ ਅੰਸ਼ਾ। ਮੁਕਤੀ ਕਰੇ ਸਬ ਜਗ ਕੇ ਹੰਸਾ ॥",
            "ਚੂਰਾਮਣਿ ਹੈ ਪੰਥ ਕੇ ਰਾਜਾ। ਜਿਨਕੇ ਹਾਥ ਜੀਵਨ ਕੋ ਕਾਜਾ ॥"
          ],
          "en": [
            "Chaar guru aur nautam ansha | Mukti kare sab jag ke hansa ||",
            "Churamani hai panth ke raja | Jinke haath jeevan ko kaaja ||"
          ]
        },
        "bhavarth": {
          "hi": "चारों सद्गुरु और परमात्मा के दिव्य नवीन अंश संसार के सभी हंस-जीवों को भवसागर से पार उतारते हैं। चूरामणि नाम साहेब इस कबीर पंथ के छत्रपति राजा हैं, जिनके कृपा-हस्त में जीवों का परम कल्याण निहित है।",
          "pb": "ਚਾਰ ਗੁਰੂ ਅਤੇ ਨਵੇਂ ਅੰਸ਼ ਸਾਰੇ ਜਗਤ ਦੇ ਜੀਵਾਂ ਦਾ ਉਧਾਰ ਕਰਦੇ ਹਨ। ਚੂਰਾਮਣਿ ਸਾਹੇਬ ਪੰਥ ਦੇ ਰਾਜਾ ਹਨ ਜਿਨ੍ਹਾਂ ਦੇ ਹੱਥ ਜੀਵਾਂ ਦੇ ਕਲਿਆਣ ਦੀ ਕੁੰਜੀ ਹੈ।",
          "en": "The four holy Masters and divine emanations liberate all the pure souls of the world. Churamani Nam Saheb is the sovereign protector of the lineage, in whose hands lies the spiritual salvation of all beings."
        }
      },
      {
        "id": "pm-v5",
        "type": "chaupai",
        "lines": {
          "hi": [
            "वंश बयालीस दाया कीजे । कोटिन कोटि बंदगी लीजे ।।",
            "प्रणमों कोटि बार करजोरी । जाकी दाया विमल बुधि मोरी ॥"
          ],
          "pb": [
            "ਵੰਸ਼ ਬਯਾਲੀਸ ਦਾਯਾ ਕੀਜੇ। ਕੋਟਿਨ ਕੋਟਿ ਬੰਦਗੀ ਲੀਜੇ ॥",
            "ਪ੍ਰਣਮੋਂ ਕੋਟਿ ਬਾਰ ਕਰਜੋਰੀ। ਜਾਕੀ ਦਾਯਾ ਵਿਮਲ ਬੁਧਿ ਮੋਰੀ ॥"
          ],
          "en": [
            "Vansh bayalis daya keeje | Kotin koti bandgi leeje ||",
            "Pranamo koti baar karjori | Jaaki daya vimal budhi mori ||"
          ]
        },
        "bhavarth": {
          "hi": "हे ब्यालीस वंश के पावन गुरुओं! हम दीन जनों पर दया कीजिए और हमारी करोड़ों बंदगी स्वीकार कीजिए। दोनों हाथ जोड़कर मैं बारम्बार प्रणाम करता हूँ, जिनकी कृपा से मेरी बुद्धि निर्मल और विकार-रहित हुई है।",
          "pb": "ਹੇ ੪੨ ਵੰਸ਼ ਦੇ ਗੁਰੂਓ! ਦਇਆ ਕਰੋ ਅਤੇ ਕਰੋੜਾਂ ਬੰਦਗੀਆਂ ਪ੍ਰਵਾਨ ਕਰੋ। ਹੱਥ ਜੋੜ ਕੇ ਪ੍ਰਣਾਮ ਕਰਦਾ ਹਾਂ ਜਿਨ੍ਹਾਂ ਦੀ ਕ੍ਰਿਪਾ ਨਾਲ ਮੇਰੀ ਬੁੱਧੀ ਨਿਰਮਲ ਹੋਈ ਹੈ।",
          "en": "O holy Masters of the forty-two lineages, shower your grace and accept our millions of humble salutations! With folded hands I bow countless times, by whose mercy my intellect has become pure and luminous."
        }
      },
      {
        "id": "pm-v6",
        "type": "sortha",
        "lines": {
          "hi": [
            "बन्दो गुरु पद कंज, जरा मरन दुख नाश भौ ।",
            "सत्यनाम मन रंज, सतगुरु दाया जाहि पर ।।"
          ],
          "pb": [
            "ਬੰਦੋ ਗੁਰੂ ਪਦ ਕੰਜ, ਜਰਾ ਮਰਨ ਦੁਖ ਨਾਸ਼ ਭੌ ।",
            "ਸਤਯਨਾਮ ਮਨ ਰੰਜ, ਸਤਗੁਰੂ ਦਾਯਾ ਜਾਹਿ ਪਰ ॥"
          ],
          "en": [
            "Bando guru pad kanj, jara maran dukh naash bhau |",
            "Satyanam man ranj, Satguru daya jaahi par ||"
          ]
        },
        "bhavarth": {
          "hi": "सद्गुरु के चरण कमलों की वंदना करता हूँ, जिससे जन्म, वृद्धावस्था और मरण का संताप समूल नष्ट हो गया। जिस जीव पर सद्गुरु की कृपा हो जाती है, उसका मन सत्यनाम के आनंद में सदा मग्न रहता है।",
          "pb": "ਸਤਿਗੁਰੂ ਦੇ ਚਰਨ ਕਮਲਾਂ ਨੂੰ ਪ੍ਰਣਾਮ ਹੈ, ਜਿਨ੍ਹਾਂ ਨਾਲ ਜਨਮ-ਮਰਨ ਦੇ ਦੁੱਖ ਦੂਰ ਹੁੰਦੇ ਹਨ। ਜਿਸ 'ਤੇ ਸਤਿਗੁਰੂ ਦੀ ਦਇਆ ਹੋਵੇ, ਉਸਦਾ ਮਨ ਸਤਯਨਾਮ ਵਿੱਚ ਲੀਨ ਰਹਿੰਦਾ ਹੈ।",
          "en": "I bow to the lotus feet of the True Master, which obliterate the agonies of old age and death. He upon whom the Satguru showers grace finds eternal delight in Satyanam."
        }
      },
      {
        "id": "pm-v7",
        "type": "sortha",
        "lines": {
          "hi": [
            "सत्यनाम है सार, बूझो संत विवेक करि ।",
            "उतरो भवजल पार, सतगुरु का उपदेश यह ॥"
          ],
          "pb": [
            "ਸਤਯਨਾਮ ਹੈ ਸਾਰ, ਬੂਝੋ ਸੰਤ ਵਿਵੇਕ ਕਰਿ ।",
            "ਉਤਰੋ ਭਵਜਲ ਪਾਰ, ਸਤਗੁਰੂ ਕਾ ਉਪਦੇਸ਼ ਯਹ ॥"
          ],
          "en": [
            "Satyanam hai saar, boojho sant vivek kari |",
            "Utaro bhavjal paar, Satguru ka updesh yeh ||"
          ]
        },
        "bhavarth": {
          "hi": "हे संतों! विवेकपूर्वक समझो कि इस संसार में केवल 'सत्यनाम' ही एकमात्र सार तत्व है। सद्गुरु का यही पावन उपदेश है कि सत्यनाम का सुमिरन करके इस भवसागर को पार कर जाओ।",
          "pb": "ਹੇ ਸੰਤੋ! ਵਿਵੇਕ ਨਾਲ ਸਮਝੋ ਕਿ ਸਤਯਨਾਮ ਹੀ ਸਭ ਦਾ ਸਾਰ ਹੈ। ਸਤਿਗੁਰੂ ਦਾ ਇਹੀ ਉਪਦੇਸ਼ ਹੈ ਕਿ ਇਸ ਭਵਸਾਗਰ ਤੋਂ ਪਾਰ ਉਤਰ ਜਾਓ।",
          "en": "O saints, realize with discerning wisdom that Satyanam alone is the essence of all reality. The True Master's eternal teaching is to cross the ocean of mundane existence through this sacred truth."
        }
      },
      {
        "id": "pm-v8",
        "type": "sakhi",
        "lines": {
          "hi": [
            "गुरु के चरण वंदन किये, मंगल सब विधि काज ।",
            "गुरु महिमा वर्णन करूं, राखो सतगुरु लाज ॥"
          ],
          "pb": [
            "ਗੁਰੂ ਕੇ ਚਰਣ ਵੰਦਨ ਕਿਯੇ, ਮੰਗਲ ਸਬ ਵਿਧਿ ਕਾਜ ।",
            "ਗੁਰੂ ਮਹਿਮਾ ਵਰਣਨ ਕਰੂੰ, ਰਾਖੋ ਸਤਗੁਰੂ ਲਾਜ ॥"
          ],
          "en": [
            "Guru ke charan vandan kiye, mangal sab vidhi kaaj |",
            "Guru mahima varnan karoon, raakho Satguru laaj ||"
          ]
        },
        "bhavarth": {
          "hi": "सद्गुरु के पावन चरणों की वंदना करने से समस्त कार्य मंगलकारी और सिद्ध हो जाते हैं। अब मैं सद्गुरु की अपार महिमा का गान करने जा रहा हूँ, हे मेरे दयालु सतगुरु, मेरी लाज और संकल्प की रक्षा कीजिए।",
          "pb": "ਗੁਰੂ ਦੇ ਚਰਨਾਂ ਦੀ ਵੰਦਨਾ ਨਾਲ ਸਾਰੇ ਕਾਰਜ ਸਫਲ ਹੁੰਦੇ ਹਨ। ਮੈਂ ਗੁਰੂ ਦੀ ਮਹਿਮਾ ਦਾ ਵਰਣਨ ਕਰਦਾ ਹਾਂ, ਹੇ ਸਤਿਗੁਰੂ, ਮੇਰੀ ਲਾਜ ਰੱਖਣਾ।",
          "en": "By saluting the Master's holy feet, all undertakings turn into auspicious blessings. As I now narrate the glory of the Master, protect my devotion and dignity, O compassionate Satguru!"
        }
      },
      {
        "id": "pm-v9",
        "type": "sakhi",
        "lines": {
          "hi": [
            "हे सतगुरु संतन रमण, श्वेत कंज सुख धाम ।",
            "सदग्रंथन प्रारंभ करूँ, करिके तुम्हें प्रणाम ।।"
          ],
          "pb": [
            "ਹੇ ਸਤਗੁਰੂ ਸੰਤਨ ਰਮਣ, ਸ਼੍ਵੇਤ ਕੰਜ ਸੁਖ ਧਾਮ ।",
            "ਸਦਗ੍ਰੰਥਨ ਪ੍ਰਾਰੰਭ ਕਰੂੰ, ਕਰਿਕੇ ਤੁਮ੍ਹੇਂ ਪ੍ਰਣਾਮ ॥"
          ],
          "en": [
            "He Satguru santan raman, shwet kanj sukh dhaam |",
            "Sadgranthan prarambh karoon, karike tumhein pranaam ||"
          ]
        },
        "bhavarth": {
          "hi": "हे संतों के हृदय में रमण करने वाले, श्वेत कमल के समान परम पवित्र एवं आनंद के धाम सद्गुरु! आपको श्रद्धापूर्वक प्रणाम करके मैं इस पावन सदग्रंथ (गुरु महिमा पाठ) का श्रीगणेश करता हूँ।",
          "pb": "ਹੇ ਸੰਤਾਂ ਦੇ ਹਿਰਦੇ ਵਿੱਚ ਵੱਸਣ ਵਾਲੇ, ਸ਼ਵੇਤ ਕੰਵਲ ਰੂਪ ਸੁੱਖ ਦੇ ਧਾਮ ਸਤਿਗੁਰੂ! ਤੁਹਾਨੂੰ ਪ੍ਰਣਾਮ ਕਰਕੇ ਮੈਂ ਪਵਿੱਤਰ ਬਾਣੀ ਦਾ ਆਰੰਭ ਕਰਦਾ ਹਾਂ।",
          "en": "O Satguru who abides within the hearts of saints, pure as a white lotus and abode of supreme bliss! Offering my humble prostrations unto You, I commence this sacred recitation of the scriptures."
        }
      }
    ]
  },
  {
    "id": "prabhat-guru-mahima-1",
    "majorCategoryId": "prabhat-path",
    "majorCategoryTitle": {
      "hi": "१. प्रभात (प्रातः) पाठ",
      "pb": "੧. ਪ੍ਰਭਾਤ (ਪ੍ਰਾਤਹ) ਪਾਠ",
      "en": "1. Morning Sacred Recitation (Prabhat Path)"
    },
    "subGroup": "गुरु महिमा",
    "title": {
      "hi": "अथ श्री गुरु महिमा (१)",
      "pb": "ਅਥ ਸ਼੍ਰੀ ਗੁਰੂ ਮਹਿਮਾ (੧)",
      "en": "The Glory of the Master (Part 1)"
    },
    "subtitle": {
      "hi": "सद्गुरु की अपार महिमा और भक्ति का महात्म्य",
      "pb": "ਸਤਿਗੁਰੂ ਦੀ ਅਪਾਰ ਮਹਿਮਾ ਅਤੇ ਭਗਤੀ ਦਾ ਮਹਾਤਮ",
      "en": "The Infinite Glory of the True Master and the Greatness of Devotion"
    },
    "iconName": "Star",
    "estimatedMinutes": 8,
    "totalVerses": 49,
    "verses": [
      {
        "id": "gm1-v1",
        "type": "chaupai",
        "lines": {
          "hi": ["गुरु की शरना लीजै भाई। जाते जीव नरक नहिं जाई ।।", "गुरु मुख होय परम पद पावै । चौरासी में बहुरि न आवै ॥"],
          "pb": ["ਗੁਰੂ ਕੀ ਸ਼ਰਨਾ ਲੀਜੈ ਭਾਈ। ਜਾਤੇ ਜੀਵ ਨਰਕ ਨਹਿਂ ਜਾਈ ॥", "ਗੁਰੂ ਮੁਖ ਹੋਇ ਪਰਮ ਪਦ ਪਾਵੈ। ਚੌਰਾਸੀ ਮੇਂ ਬਹੁਰਿ ਨ ਆਵੈ ॥"],
          "en": ["Guru ki sharana leeje bhai | Jaate jeev narak nahi jaai ||", "Guru mukh hoye param pad paave | Chaurasi mein bahuri na aave ||"]
        },
        "bhavarth": {
          "hi": "गुरु की शरण ही जीव का सच्चा सुरक्षा कवच है, जिससे वह नर्क के दुखों से बचकर परम पद को प्राप्त करता है और ८४ लाख योनियों के चक्र से मुक्त हो जाता है।",
          "pb": "ਗੁਰੂ ਦੀ ਸ਼ਰਨ ਲੈਣ ਨਾਲ ਜੀਵ ਨਰਕ ਦੇ ਦੁੱਖਾਂ ਤੋਂ ਬਚ ਜਾਂਦਾ ਹੈ ਅਤੇ ਪਰਮ ਪਦ ਪ੍ਰਾਪਤ ਕਰਕੇ ਜਨਮ-ਮਰਨ ਦੇ ਚੱਕਰ ਤੋਂ ਮੁਕਤ ਹੋ ਜਾਂਦਾ ਹੈ।",
          "en": "Taking refuge in the Master is the soul's true protection, saving it from hellish suffering and liberating it from the cycle of 8.4 million births."
        }
      },
      {
        "id": "gm1-v2",
        "type": "chaupai",
        "lines": {
          "hi": ["गुरु पद सेवे बिरला कोई । जापर कृपा साहेब की होई ॥", "गुरु बिन मुक्ति न पावै भाई । नरक ऊर्ध्व मुख बासा पाई ॥"],
          "pb": ["ਗੁਰੂ ਪਦ ਸੇਵੇ ਬਿਰਲਾ ਕੋਈ। ਜਾਪਰ ਕ੍ਰਿਪਾ ਸਾਹੇਬ ਕੀ ਹੋਈ ॥", "ਗੁਰੂ ਬਿਨ ਮੁਕਤੀ ਨ ਪਾਵੈ ਭਾਈ। ਨਰਕ ਊਰਧ ਮੁਖ ਬਾਸਾ ਪਾਈ ॥"],
          "en": ["Guru pad seve birla koi | Japar kripa Saheb ki hoi ||", "Guru bin mukti na paave bhai | Narak urdhva mukh baasa paai ||"]
        },
        "bhavarth": {
          "hi": "गुरु के चरणों की सेवा वही विरला सौभाग्यशाली कर पाता है जिस पर परमात्मा की विशेष कृपा हो। बिना गुरु के जीव मुक्ति नहीं पा सकता और अधोगति को प्राप्त होता है।",
          "pb": "ਗੁਰੂ ਦੇ ਚਰਨਾਂ ਦੀ ਸੇਵਾ ਕੋਈ ਵਿਰਲਾ ਹੀ ਕਰਦਾ ਹੈ ਜਿਸ 'ਤੇ ਪਰਮਾਤਮਾ ਦੀ ਕਿਰਪਾ ਹੋਵੇ। ਗੁਰੂ ਤੋਂ ਬਿਨਾਂ ਮੁਕਤੀ ਅਸੰਭਵ ਹੈ।",
          "en": "Only a rare fortunate soul serves the Master's feet by divine grace. Without a Master, liberation is impossible, leading to spiritual downfall."
        }
      },
      {
        "id": "gm1-v3",
        "type": "chaupai",
        "lines": {
          "hi": ["गुरु की कृपा कटै यम फांसी। बिलम न होय मिले अविनासी ॥", "गुरु बिन काहू न पाया ज्ञाना। ज्यों थोथा भुस छांड़ किसाना ॥"],
          "pb": ["ਗੁਰੂ ਕੀ ਕ੍ਰਿਪਾ ਕਟੈ ਯਮ ਫਾਂਸੀ। ਬਿਲਮ ਨ ਹੋਇ ਮਿਲੇ ਅਵਿਨਾਸੀ ॥", "ਗੁਰੂ ਬਿਨ ਕਾਹੂ ਨ ਪਾਯਾ ਗਿਆਨਾ। ਜਯੋਂ ਥੋਥਾ ਭੁਸ ਛਾਂੜ ਕਿਸਾਨਾ ॥"],
          "en": ["Guru ki kripa kate yam fansi | Bilam na hoye mile avinasi ||", "Guru bin kaahu na paya gyana | Jyon thotha bhus chhaand kisana ||"]
        },
        "bhavarth": {
          "hi": "सद्गुरु की कृपा काल के फंदे को क्षण भर में काट देती है और जीव का मिलन अविनाशी पुरुष से हो जाता है। बिना गुरु के ज्ञान वैसा ही निष्फल है जैसे बिना दाने के भूसा।",
          "pb": "ਸਤਿਗੁਰੂ ਦੀ ਕਿਰਪਾ ਨਾਲ ਜਮਾਂ ਦੀ ਫਾਂਸੀ ਕੱਟੀ ਜਾਂਦੀ ਹੈ। ਗੁਰੂ ਤੋਂ ਬਿਨਾਂ ਗਿਆਨ ਉਸੇ ਤਰ੍ਹਾਂ ਹੈ ਜਿਵੇਂ ਬਿਨਾਂ ਦਾਣੇ ਦੇ ਫੂਸ।",
          "en": "The Master's grace severs the noose of death instantly, uniting the soul with the Eternal. Knowledge without a Master is as hollow as chaff without grain."
        }
      },
      {
        "id": "gm1-v4",
        "type": "chaupai",
        "lines": {
          "hi": ["गुरु महिमा शुकदेव जु पाई । चढ़ि विमान बैकुण्ठै जाई ॥", "गुरु बिन पढ़े जो वेद पुराना । ताको नाहिं मिले भगवाना ॥"],
          "pb": ["ਗੁਰੂ ਮਹਿਮਾ ਸ਼ੁਕਦੇਵ ਜੁ ਪਾਈ। ਚੜਿ ਵਿਮਾਨ ਬੈਕੁੰਠੈ ਜਾਈ ॥", "ਗੁਰੂ ਬਿਨ ਪੜੇ ਜੋ ਵੇਦ ਪੁਰਾਨਾ। ਤਾਕੋ ਨਾਹਿਂ ਮਿਲੇ ਭਗਵਾਨਾ ॥"],
          "en": ["Guru mahima Shukdev ju paai | Chadh viman vaikunthai jaai ||", "Guru bin padhe jo ved purana | Taako naahin mile bhagwana ||"]
        },
        "bhavarth": {
          "hi": "शुकदेव मुनि ने भी गुरु धारण कर ही वैकुण्ठ की प्राप्ति की। केवल शास्त्रों के पाठ से परमात्मा नहीं मिलते, गुरु का सानिध्य ही सत्य की उपलब्धि कराता है।",
          "pb": "ਸ਼ੁਕਦੇਵ ਮੁਨੀ ਨੇ ਵੀ ਗੁਰੂ ਦੀ ਕਿਰਪਾ ਨਾਲ ਹੀ ਉੱਚੀ ਅਵਸਥਾ ਪ੍ਰਾਪਤ ਕੀਤੀ। ਗੁਰੂ ਤੋਂ ਬਿਨਾਂ ਸ਼ਾਸਤਰਾਂ ਦਾ ਪਾਠ ਵੀ ਅਧੂਰਾ ਹੈ।",
          "en": "Even Shukdev attained higher realms only after accepting a Master. Scriptures alone cannot reveal the Divine; only the Master's presence leads to Truth."
        }
      },
      {
        "id": "gm1-v5",
        "type": "chaupai",
        "lines": {
          "hi": ["गुरु की सेव जो करे सुभागा। माया मोह सकल भ्रम त्यागा ॥", "गुरु की नाव चढ़े जो प्राणी । खेइ उतारे सतगुरु ज्ञानी ॥"],
          "pb": ["ਗੁਰੂ ਕੀ ਸੇਵ ਜੋ ਕਰੇ ਸੁਭਾਗਾ। ਮਾਯਾ ਮੋਹ ਸਕਲ ਭ੍ਰਮ ਤਿਆਗਾ ॥", "ਗੁਰੂ ਕੀ ਨਾਵ ਚੜੇ ਜੋ ਪ੍ਰਾਣੀ। ਖੇਇ ਉਤਾਰੇ ਸਤਿਗੁਰੂ ਗਿਆਨੀ ॥"],
          "en": ["Guru ki sev jo kare subhaga | Maya moh sakal bhram tyaga ||", "Guru ki naav chadhe jo prani | Khei utare Satguru gyani ||"]
        },
        "bhavarth": {
          "hi": "सौभाग्यशाली साधक ही गुरु सेवा द्वारा माया के मोह और भ्रम का त्याग कर पाता है। सतगुरु ज्ञानी मल्लाह की तरह जीव को भवसागर से पार उतार देते हैं।",
          "pb": "ਸੁਭਾਗਿਆਵਾਨ ਸੇਵਕ ਹੀ ਗੁਰੂ ਦੀ ਸੇਵਾ ਨਾਲ ਮਾਇਆ ਦਾ ਤਿਆਗ ਕਰਦਾ ਹੈ। ਸਤਿਗੁਰੂ ਜੀਵ ਨੂੰ ਸੰਸਾਰ ਸਾਗਰ ਤੋਂ ਪਾਰ ਉਤਾਰ ਦਿੰਦੇ ਹਨ।",
          "en": "Only a fortunate seeker sheds the illusions of Maya through service. The Master acts as a divine oarsman, ferrying the soul across the ocean of existence."
        }
      },
      {
        "id": "gm1-v6",
        "type": "chaupai",
        "lines": {
          "hi": ["तीरथ ब्रत देव और पूजा। गुरु बिन दाता और न दूजा ॥", "नवो नाथ चौरासी सिद्धा। गुरु के चरन सेव गोविन्दा ।।"],
          "pb": ["ਤੀਰਥ ਬ੍ਰਤ ਦੇਵ ਔਰ ਪੂਜਾ। ਗੁਰੂ ਬਿਨ ਦਾਤਾ ਔਰ ਨ ਦੂਜਾ ॥", "ਨਵੋ ਨਾਥ ਚੌਰਾਸੀ ਸਿੱਧਾ। ਗੁਰੂ ਕੇ ਚਰਨ ਸੇਵ ਗੋਵਿੰਦਾ ॥"],
          "en": ["Teerath brat dev aur pooja | Guru bin data aur na dooja ||", "Navo nath chaurasi siddha | Guru ke charan sev govinda ||"]
        },
        "bhavarth": {
          "hi": "तीर्थ, व्रत और अन्य देवताओं की पूजा से बढ़कर गुरु तत्व है। समस्त नाथों और सिद्धों ने भी गुरु चरणों की शरण लेकर ही गोविंद (परमात्मा) को पाया है।",
          "pb": "ਤੀਰਥਾਂ ਅਤੇ ਵਰਤਾਂ ਨਾਲੋਂ ਗੁਰੂ ਦੀ ਸੇਵਾ ਉੱਤਮ ਹੈ। ਸਾਰੇ ਸਿੱਧਾਂ ਨੇ ਗੁਰੂ ਦੇ ਚਰਨਾਂ ਰਾਹੀਂ ਹੀ ਪ੍ਰਭੂ ਨੂੰ ਪਾਇਆ ਹੈ।",
          "en": "The Master is superior to pilgrimages, fasts, and external rituals. All great saints and adepts attained the Divine only through the Master's feet."
        }
      },
      {
        "id": "gm1-v7",
        "type": "chaupai",
        "lines": {
          "hi": ["गुरु बिन प्रेत जन्म सो पावै । वर्ष सहस्त्र गर्भ मांहि रहावै ॥", "गुरु बिन दान पुण्य जो करहीं। मिथ्या होय कबहूं नहि फलहीं ।।"],
          "pb": ["ਗੁਰੂ ਬਿਨ ਪ੍ਰੇਤ ਜਨਮ ਸੋ ਪਾਵੈ। ਵਰਸ਼ ਸਹਸਤ੍ਰ ਗਰਭ ਮਾਂਹਿ ਰਹਾਵੈ ॥", "ਗੁਰੂ ਬਿਨ ਦਾਨ ਪੁਣਯ ਜੋ ਕਰਹੀਂ। ਮਿਥਿਆ ਹੋਇ ਕਬਹੂੰ ਨਹਿ ਫਲਹੀਂ ॥"],
          "en": ["Guru bin pret janam so paave | Varsh sahastra garbh maahi rahaave ||", "Guru bin daan punya jo karhi | Mithya hoye kabahu nahi falahi ||"]
        },
        "bhavarth": {
          "hi": "बिना गुरु के जीव अधोगति (प्रेत योनि) को प्राप्त होता है और हजारों वर्षों तक गर्भ के कष्ट सहता है। गुरु के बिना किया गया दान-पुण्य फलदायी नहीं होता।",
          "pb": "ਗੁਰੂ ਤੋਂ ਬਿਨਾਂ ਜੀਵ ਨੀਵੀਂਆਂ ਜੂਨਾਂ ਵਿਚ ਭਟਕਦਾ ਹੈ। ਗੁਰੂ ਤੋਂ ਬਿਨਾਂ ਕੀਤਾ ਦਾਨ-ਪੁੰਨ ਨਿਰਾਰਥਕ ਹੈ।",
          "en": "Without a Master, the soul wanders in lower realms and suffers long cycles of rebirth. Charities performed without a Master's guidance bear no fruit."
        }
      },
      {
        "id": "gm1-v8",
        "type": "chaupai",
        "lines": {
          "hi": ["गुरु बिन भ्रम ना भागे भाई । कोटि उपाय करै चतुराई ।।", "गुरु बिन होम यज्ञ जो साधे । औरो मन दस पातक बांधे ॥"],
          "pb": ["ਗੁਰੂ ਬਿਨ ਭ੍ਰਮ ਨਾ ਭਾਗੇ ਭਾਈ। ਕੋਟਿ ਉਪਾਯ ਕਰੈ ਚਤੁਰਾਈ ॥", "ਗੁਰੂ ਬਿਨ ਹੋਮ ਯਗਿਆ ਜੋ ਸਾਧੇ। ਔਰੋ ਮਨ ਦਸ ਪਾਤਕ ਬਾਂਧੇ ॥"],
          "en": ["Guru bin bhram na bhaage bhai | Koti upaay kare chaturai ||", "Guru bin hom yagya jo saadhe | Auro man das paatak baandhe ||"]
        },
        "bhavarth": {
          "hi": "करोड़ों चतुराई भरे उपायों से भी मन का भ्रम गुरु बिना नहीं मिटता। गुरु के बिना किये गए कर्मकांड केवल अहंकार और पापों का बोझ ही बढ़ाते हैं।",
          "pb": "ਗੁਰੂ ਤੋਂ ਬਿਨਾਂ ਮਨ ਦਾ ਭੁਲੇਖਾ ਦੂਰ ਨਹੀਂ ਹੁੰਦਾ। ਗੁਰੂ ਤੋਂ ਬਿਨਾਂ ਕੀਤੇ ਹੋਮ-ਯਗਿਆ ਹੰਕਾਰ ਵਧਾਉਂਦੇ ਹਨ।",
          "en": "Even millions of clever tricks cannot dispel mental illusions without a Master. Rituals without a Master only increase ego and spiritual debt."
        }
      },
      {
        "id": "gm1-v9",
        "type": "chaupai",
        "lines": {
          "hi": ["सतगुरु मिले तो अगम बतावै । यम की आँच ताहि नहिं आवै ॥", "गुरु के मिले कटे दुख पापा । जन्म जन्म के मिटे संतापा ॥"],
          "pb": ["ਸਤਿਗੁਰੂ ਮਿਲੇ ਤੋ ਅਗਮ ਬਤਾਵੈ। ਯਮ ਕੀ ਆਂਚ ਤਾਹਿ ਨਹਿਂ ਆਵੈ ॥", "ਗੁਰੂ ਕੇ ਮਿਲੇ ਕਟੇ ਦੁਖ ਪਾਪਾ। ਜਨਮ ਜਨਮ ਕੇ ਮਿਟੇ ਸੰਤਾਪਾ ॥"],
          "en": ["Satguru mile to agam bataave | Yam ki aanch taahi nahin aave ||", "Guru ke mile kate dukh paapa | Janam janam ke mite santaapa ||"]
        },
        "bhavarth": {
          "hi": "सद्गुरु उस अगम देश का रहस्य बताते हैं जिससे यमराज का भय समाप्त हो जाता है। गुरु के मिलन से जन्म-जन्मांतर के संताप और पाप नष्ट हो जाते हैं।",
          "pb": "ਸਤਿਗੁਰੂ ਅਗੰਮ ਦਾ ਭੇਦ ਦੱਸਦੇ ਹਨ ਜਿਸ ਨਾਲ ਮੌਤ ਦਾ ਡਰ ਮੁੱਕ ਜਾਂਦਾ ਹੈ ਅਤੇ ਸਾਰੇ ਪਾਪ ਕੱਟੇ ਜਾਂਦੇ ਹਨ।",
          "en": "The True Master reveals the unapproachable realm, ending the fear of death. Meeting the Master dissolves the sins and sufferings of countless lifetimes."
        }
      },
      {
        "id": "gm1-v10",
        "type": "chaupai",
        "lines": {
          "hi": ["गुरु के चरण सदा चित दीजै । जीवन जन्म सुफल कर लीजै ॥", "गुरु के चरन सदा चित जाना। क्यों भूले तुम चतुर सुजाना ॥"],
          "pb": ["ਗੁਰੂ ਕੇ ਚਰਣ ਸਦਾ ਚਿਤ ਦੀਜੈ। ਜੀਵਨ ਜਨਮ ਸੁਫਲ ਕਰ ਲੀਜੈ ॥", "ਗੁਰੂ ਕੇ ਚਰਣ ਸਦਾ ਚਿਤ ਜਾਨਾ। ਕਿਯੋਂ ਭੂਲੇ ਤੁਮ ਚਤੁਰ ਸੁਜਾਨਾ ॥"],
          "en": ["Guru ke charan sada chit deeje | Jeevan janam sufal kar leeje ||", "Guru ke charan sada chit jaana | Kyon bhoole tum chatur sujaana ||"]
        },
        "bhavarth": {
          "hi": "अपने चित्त को सदा गुरु के चरणों में लगाकर इस दुर्लभ मानव जीवन को सफल करना चाहिए। हे बुद्धिमान प्राणी! तुम इस सत्य को क्यों भूल रहे हो?",
          "pb": "ਆਪਣੇ ਮਨ ਨੂੰ ਹਮੇਸ਼ਾ ਗੁਰੂ ਦੇ ਚਰਨਾਂ ਵਿਚ ਲਗਾ ਕੇ ਜੀਵਨ ਨੂੰ ਸਫਲ ਕਰੋ।",
          "en": "Focus your mind eternally on the Master's feet to make this rare human birth fruitful. O wise one, why do you forget this truth?"
        }
      },
      {
        "id": "gm1-v11",
        "type": "chaupai",
        "lines": {
          "hi": ["गुरु भक्ता मम आतम सोई । वाके हिरदे रहों समोई ॥", "गुरु मुख ज्ञान ले चेतो भाई । मानुष जन्म बहुरि नहिं आई ॥"],
          "pb": ["ਗੁਰੂ ਭਕਤਾ ਮਮ ਆਤਮ ਸੋਈ। ਵਾਕੇ ਹਿਰਦੇ ਰਹੋਂ ਸਮੋਈ ॥", "ਗੁਰੂ ਮੁਖ ਗਿਆਨ ਲੇ ਚੇਤੋ ਭਾਈ। ਮਾਨੁਸ਼ ਜਨਮ ਬਹੁਰਿ ਨਹਿਂ ਆਈ ॥"],
          "en": ["Guru bhakta mam aatam soi | Vaake hirde rahon samoi ||", "Guru mukh gyan le cheto bhai | Maanush janam bahuri nahin aai ||"]
        },
        "bhavarth": {
          "hi": "परमात्मा कहते हैं कि गुरु का भक्त मेरी अपनी आत्मा है, मैं सदा उसके हृदय में निवास करता हूँ। गुरु से ज्ञान लेकर जागो, क्योंकि यह मनुष्य जन्म बार-बार नहीं मिलता।",
          "pb": "ਗੁਰੂ ਦਾ ਭਗਤ ਪ੍ਰਭੂ ਦੀ ਆਪਣੀ ਆਤਮਾ ਹੈ। ਗੁਰੂ ਤੋਂ ਗਿਆਨ ਲੈ ਕੇ ਜਾਗੋ, ਇਹ ਜਨਮ ਕੀਮਤੀ ਹੈ।",
          "en": "The Divine says, 'The Master's devotee is My own soul; I reside in their heart.' Awake with the Master's wisdom, for this human life is rare."
        }
      },
      {
        "id": "gm1-v12",
        "type": "chaupai",
        "lines": {
          "hi": ["सुख सम्पत्ति आपन नहिं प्राणी। समुझ देखि तुम निश्चय जानी।।", "चौबीस रूप हरि आपहि धरिया । गुरु सेवा हरि आपहि करिया ॥"],
          "pb": ["ਸੁਖ ਸਮਪੱਤੀ ਆਪਨ ਨਹਿਂ ਪ੍ਰਾਣੀ। ਸਮੁਝ ਦੇਖਿ ਤੁਮ ਨਿਸ਼ਚਯ ਜਾਨੀ ॥", "ਚੌਬੀਸ ਰੂਪ ਹਰਿ ਆਪਹਿ ਧਰਿਯਾ। ਗੁਰੂ ਸੇਵਾ ਹਰਿ ਆਪਹਿ ਕਰਿਯਾ ॥"],
          "en": ["Sukh sampatti aapan nahin prani | Samujh dekhi tum nishchay jaani ||", "Chaubis roop hari aapahi dhariya | Guru seva hari aapahi kariya ||"]
        },
        "bhavarth": {
          "hi": "संसार की सुख-सम्पत्ति अपनी नहीं है, इसे निश्चय करके समझो। स्वयं भगवान ने भी अवतार धारण कर गुरु सेवा की महत्ता को संसार के सामने सिद्ध किया है।",
          "pb": "ਸੰਸਾਰ ਦੀ ਦੌਲਤ ਆਪਣੀ ਨਹੀਂ ਹੈ। ਪ੍ਰਭੂ ਨੇ ਵੀ ਅਵਤਾਰ ਲੈ ਕੇ ਗੁਰੂ ਦੀ ਸੇਵਾ ਕੀਤੀ ਹੈ।",
          "en": "Worldly wealth and comforts are transient; realize this for certain. Even the Divine took incarnations and performed service to prove the Master's glory."
        }
      },
      {
        "id": "gm1-v13",
        "type": "chaupai",
        "lines": {
          "hi": ["गुरु की निन्दा सुने जो काना। ताको निश्चय नरक निदाना ॥", "दसवां अंश गुरु को दीजै। जीवन जन्म सुफल करि लीजै ॥"],
          "pb": ["ਗੁਰੂ ਕੀ ਨਿੰਦਾ ਸੁਨੇ ਜੋ ਕਾਨਾ। ਤਾਕੋ ਨਿਸ਼ਚਯ ਨਰਕ ਨਿਦਾਨਾ ॥", "ਦਸਵਾਂ ਅੰਸ਼ ਗੁਰੂ ਕੋ ਦੀਜੈ। ਜੀਵਨ ਜਨਮ ਸੁਫਲ ਕਰਿ ਲੀਜੈ ॥"],
          "en": ["Guru ki ninda sune jo kaana | Taako nishchay narak nidana ||", "Daswan ansh guru ko deeje | Jeevan janam sufal kari leeje ||"]
        },
        "bhavarth": {
          "hi": "जो गुरु की निंदा सुनता है, उसका नर्क में जाना निश्चित है। अपनी कमाई का दसवां अंश गुरु सेवा में समर्पित कर अपने जीवन को सफल बनाना चाहिए।",
          "pb": "ਗੁਰੂ ਦੀ ਨਿੰਦਾ ਸੁਣਨ ਵਾਲਾ ਨਰਕ ਦਾ ਭਾਗੀ ਬਣਦਾ ਹੈ। ਆਪਣੀ ਕਮਾਈ ਦਾ ਦਸਵਾਂ ਹਿੱਸਾ ਗੁਰੂ ਸੇਵਾ ਵਿਚ ਲਗਾਓ।",
          "en": "He who listens to the Master's slander is destined for hell. Devote a tenth of your earnings to the Master's cause to sanctify your life."
        }
      },
      {
        "id": "gm1-v14",
        "type": "chaupai",
        "lines": {
          "hi": ["गुरु मुख प्राणी काहे न हूजै । हिरदय नाम सदा रस पीजै ॥", "गुरु सीढ़ी चढ़ि ऊपर जाई । सुख सागर में रहे समाई ॥"],
          "pb": ["ਗੁਰੂ ਮੁਖ ਪ੍ਰਾਣੀ ਕਾਹੇ ਨ ਹੂਜੈ। ਹਿਰਦਯ ਨਾਮ ਸਦਾ ਰਸ ਪੀਜੈ ॥", "ਗੁਰੂ ਸੀਢੀ ਚੜਿ ਊਪਰ ਜਾਈ। ਸੁਖ ਸਾਗਰ ਮੇਂ ਰਹੇ ਸਮਾਈ ॥"],
          "en": ["Guru mukh prani kaahe na hooje | Hirday naam sada ras peeje ||", "Guru seedhi chadh upar jaai | Sukh sagar mein rahe samai ||"]
        },
        "bhavarth": {
          "hi": "हे मनुष्य! तुम गुरुमुख (गुरु के प्रति समर्पित) क्यों नहीं होते? हृदय में नाम का रस पीओ। गुरु रूपी सीढ़ी पर चढ़कर ही आत्मा सुख के सागर (परमात्मा) में समा सकती है।",
          "pb": "ਗੁਰੂਮੁਖ ਬਣ ਕੇ ਨਾਮ ਦਾ ਅੰਮ੍ਰਿਤ ਪੀਓ। ਗੁਰੂ ਦੀ ਪੌੜੀ ਰਾਹੀਂ ਹੀ ਸੁੱਖਾਂ ਦੇ ਸਾਗਰ ਵਿਚ ਸਮਾਇਆ ਜਾ ਸਕਦਾ ਹੈ।",
          "en": "O man, why do you not become a true disciple? Drink the nectar of the Name. Only by climbing the Master's ladder can the soul merge into the ocean of bliss."
        }
      },
      {
        "id": "gm1-v15",
        "type": "chaupai",
        "lines": {
          "hi": ["अपने मुख जो निन्दा करई । शूकर श्वान जन्म सो धरई ॥", "निगुरा करै मुक्ति की आशा । कैसे पावे मुक्ति निवासा ।। "],
          "pb": ["ਅਪਣੇ ਮੁਖ ਜੋ ਨਿੰਦਾ ਕਰਈ। ਸ਼ੂਕਰ ਸ਼ਵਾਨ ਜਨਮ ਸੋ ਧਰਈ ॥", "ਨਿਗੁਰਾ ਕਰੈ ਮੁਕਤੀ ਕੀ ਆਸ਼ਾ। ਕੈਸੇ ਪਾਵੈ ਮੁਕਤੀ ਨਿਵਾਸਾ ॥"],
          "en": ["Apne mukh jo ninda karai | Shukar shwan janam so dharai ||", "Nigura karai mukti ki asha | Kaise paave mukti niwasa ||"]
        },
        "bhavarth": {
          "hi": "जो अपने मुख से गुरु की निंदा करता है, वह नीच योनियों को प्राप्त होता है। बिना गुरु वाला व्यक्ति यदि मुक्ति की आशा करे, तो वह निष्फल है।",
          "pb": "ਗੁਰੂ ਦੀ ਨਿੰਦਾ ਕਰਨ ਵਾਲਾ ਨੀਵੀਆਂ ਜੂਨਾਂ ਵਿਚ ਜਾਂਦਾ ਹੈ। ਬਿਨਾਂ ਗੁਰੂ ਦੇ ਮੁਕਤੀ ਦੀ ਆਸ ਵਿਅਰਥ ਹੈ।",
          "en": "He who slanders the Master falls into lower births. A masterless person's hope for liberation is as futile as searching for water in a desert."
        }
      },
      {
        "id": "gm1-v16",
        "type": "chaupai",
        "lines": {
          "hi": ["औरो सुकृत देह जो पावै । सतगुरु बिना मुक्ति नहीं पावै ॥", "गौरी शंकर और गणेशा । सबहिन लीना गुरु उपदेशा ।।"],
          "pb": ["ਔਰੋ ਸੁਕ੍ਰਿਤ ਦੇਹ ਜੋ ਪਾਵੈ। ਸਤਿਗੁਰੂ ਬਿਨਾ ਮੁਕਤੀ ਨਹੀਂ ਪਾਵੈ ॥", "ਗੌਰੀ ਸ਼ੰਕਰ ਔਰ ਗਣੇਸ਼ਾ। ਸਬਹਿਨ ਲੀਨਾ ਗੁਰੂ ਉਪਦੇਸ਼ਾ ॥"],
          "en": ["Auro sukrit deh jo paave | Satguru bina mukti nahin paave ||", "Gauri Shankar aur Ganesha | Sabahin leena guru updesha ||"]
        },
        "bhavarth": {
          "hi": "अच्छे कर्मों से श्रेष्ठ शरीर तो मिल सकता है, पर मुक्ति केवल सतगुरु की कृपा से ही संभव है। शिव, पार्वती और गणेश जी ने भी गुरु उपदेश को ही सर्वोपरि माना।",
          "pb": "ਚੰਗੇ ਕਰਮਾਂ ਨਾਲ ਸਰੀਰ ਮਿਲ ਸਕਦਾ ਹੈ ਪਰ ਮੁਕਤੀ ਗੁਰੂ ਤੋਂ ਬਿਨਾਂ ਨਹੀਂ। ਦੇਵੀ-ਦੇਵਤਿਆਂ ਨੇ ਵੀ ਗੁਰੂ ਦਾ ਉਪਦੇਸ਼ ਲਿਆ ਹੈ।",
          "en": "Virtuous deeds may grant a good body, but liberation comes only via the Master. Even Shiva, Parvati, and Ganesha sought the Master's instructions."
        }
      },
      {
        "id": "gm1-v17",
        "type": "chaupai",
        "lines": {
          "hi": ["शिव विरचि गुरु सेवा कीन्हा । नारद दीक्षा ध्रुव को दीन्हा ॥", "सतगुरु मिले परम सुखदाई । जन्म जन्म का दुःख नसाई ॥"],
          "pb": ["ਸ਼ਿਵ ਵਿਰਚਿ ਗੁਰੂ ਸੇਵਾ ਕੀਨ੍ਹਾ। ਨਾਰਦ ਦੀਕਸ਼ਾ ਧ੍ਰੁਵ ਕੋ ਦੀਨ੍ਹਾ ॥", "ਸਤਿਗੁਰੂ ਮਿਲੇ ਪਰਮ ਸੁਖਦਾਈ। ਜਨਮ ਜਨਮ ਕਾ ਦੁੱਖ ਨਸਾਈ ॥"],
          "en": ["Shiv virachi guru seva keenha | Narad deeksha dhruv ko deenha ||", "Satguru mile param sukhdai | Janam janam ka dukh nasai ||"]
        },
        "bhavarth": {
          "hi": "ब्रह्मा और शिव ने भी गुरु सेवा की। नारद जी ने ध्रुव को दीक्षा दी। सतगुरु का मिलना परम सुख का स्रोत है जो जन्मों के दुखों को समाप्त कर देता है।",
          "pb": "ਬ੍ਰਹਮਾ ਤੇ ਸ਼ਿਵ ਨੇ ਗੁਰੂ ਸੇਵਾ ਕੀਤੀ। ਸਤਿਗੁਰੂ ਦਾ ਮਿਲਣਾ ਜਨਮਾਂ ਦੇ ਦੁੱਖਾਂ ਨੂੰ ਦੂਰ ਕਰਦਾ ਹੈ।",
          "en": "Even Brahma and Shiva served the Master. Narada initiated Dhruva. Finding the True Master is the source of ultimate peace that erases age-old sorrows."
        }
      },
      {
        "id": "gm1-v18",
        "type": "chaupai",
        "lines": {
          "hi": ["जब गुरु किया अटल अविनासी। सुर नर मुनि सब सेव करासी ॥", "भवजल नदिया अगम अपारा । गुरु बिन कैसे उतरै पारा ॥"],
          "pb": ["ਜਬ ਗੁਰੂ ਕਿਯਾ ਅਟਲ ਅਵਿਨਾਸੀ। ਸੁਰ ਨਰ ਮੁਨਿ ਸਬ ਸੇਵ ਕਰਾਸੀ ॥", "ਭਵਜਲ ਨਦਿਯਾ ਅਗਮ ਅਪਾਰਾ। ਗੁਰੂ ਬਿਨ ਕੈਸੇ ਉਤਰੈ ਪਾਰਾ ॥"],
          "en": ["Jab guru kiya atal avinasi | Sur nar muni sab sev karasi ||", "Bhavjal nadiya agam apara | Guru bin kaise utarai paara ||"]
        },
        "bhavarth": {
          "hi": "जब जीव अविनाशी सतगुरु को अपना लेता है, तब देवता और मुनि भी उसकी सेवा करते हैं। संसार रूपी अपार नदी को बिना गुरु की शरण के पार नहीं किया जा सकता।",
          "pb": "ਅਵਿਨਾਸ਼ੀ ਗੁਰੂ ਨੂੰ ਧਾਰਨ ਕਰਨ ਵਾਲੇ ਦੀ ਦੇਵਤੇ ਵੀ ਸੇਵਾ ਕਰਦੇ ਹਨ। ਸੰਸਾਰ ਸਾਗਰ ਤੋਂ ਪਾਰ ਹੋਣ ਲਈ ਗੁਰੂ ਜ਼ਰੂਰੀ ਹੈ।",
          "en": "When one accepts the Eternal Master, even gods and sages serve them. The bottomless river of existence cannot be crossed without the Master's aid."
        }
      },
      {
        "id": "gm1-v19",
        "type": "chaupai",
        "lines": {
          "hi": ["गुरु बिन कैसे आतम जानै । सुख सागर कैसे पहिचानै ।।", "भक्ति पदारथ कैसे पावै । गुरु बिन कौन जो राह बतावै ॥"],
          "pb": ["ਗੁਰੂ ਬਿਨ ਕੈਸੇ ਆਤਮ ਜਾਨੈ। ਸੁਖ ਸਾਗਰ ਕੈਸੇ ਪਹਿਚਾਨੈ ॥", "ਭਕਤੀ ਪਦਾਰਥ ਕੈਸੇ ਪਾਵੈ। ਗੁਰੂ ਬਿਨ ਕੌਨ ਜੋ ਰਾਹ ਬਤਾਵੈ ॥"],
          "en": ["Guru bin kaise aatam jaanai | Sukh sagar kaise pahichaanai ||", "Bhakti padarth kaise paave | Guru bin kaun jo raah bataave ||"]
        },
        "bhavarth": {
          "hi": "बिना गुरु के अपनी आत्मा का ज्ञान और सुख के सागर का परिचय कैसे हो सकता है? भक्ति रूपी अनमोल पदार्थ को पाने के लिए गुरु के बिना कोई मार्ग दिखाने वाला नहीं है।",
          "pb": "ਗੁਰੂ ਤੋਂ ਬਿਨਾਂ ਆਤਮ-ਗਿਆਨ ਨਹੀਂ ਹੋ ਸਕਦਾ ਅਤੇ ਭਗਤੀ ਦਾ ਮਾਰਗ ਕੋਈ ਹੋਰ ਨਹੀਂ ਦੱਸ ਸਕਦਾ।",
          "en": "How can one know the soul or recognize the ocean of bliss without a Master? No one but the Master can show the way to the treasure of devotion."
        }
      },
      {
        "id": "gm1-v20",
        "type": "chaupai",
        "lines": {
          "hi": ["गुरु मुख नामदेव रैदासा । गुरु महिमा उन्हूं परकाशा ।।", "तैंतीस कोटि देव त्रिपुरारी । गुरु बिन भूले सकल अचारी ॥"],
          "pb": ["ਗੁਰੂ ਮੁਖ ਨਾਮਦੇਵ ਰੈਦਾਸਾ। ਗੁਰੂ ਮਹਿਮਾ ਉਨ੍ਹੂੰ ਪਰਕਾਸ਼ਾ ॥", "ਤੈਂਤੀਸ ਕੋਟਿ ਦੇਵ ਤ੍ਰਿਪੁਰਾਰੀ। ਗੁਰੂ ਬਿਨ ਭੂਲੇ ਸਕਲ ਅਚਾਰੀ ॥"],
          "en": ["Guru mukh Namdev Raidasa | Guru mahima unhu parkasha ||", "Taintees koti dev Tripurari | Guru bin bhoole sakal achari ||"]
        },
        "bhavarth": {
          "hi": "नामदेव और रैदास जी गुरु की शरण में जाकर ही प्रकाशमान हुए। तैंतीस करोड़ देवता भी यदि गुरु की महत्ता को भूल जाएं, तो वे सत्य मार्ग से भटक जाते हैं।",
          "pb": "ਨਾਮਦੇਵ ਤੇ ਰੈਦਾਸ ਜੀ ਗੁਰੂ ਕਿਰਪਾ ਨਾਲ ਹੀ ਰੌਸ਼ਨ ਹੋਏ। ਗੁਰੂ ਤੋਂ ਬਿਨਾਂ ਦੇਵਤੇ ਵੀ ਭਟਕ ਜਾਂਦੇ ਹਨ।",
          "en": "Namdev and Raidasa shone brightly only through the Master's grace. Even the multitude of deities wander lost if they neglect the Master's path."
        }
      },
      {
        "id": "gm1-v21",
        "type": "chaupai",
        "lines": {
          "hi": ["गुरु बिन भरमें लख चौरासी । जन्म अनेक नरक के वासी ॥", "गुरु बिनु पशु जन्म सो पावै । फिर फिर गर्भवास महं आवै ॥"],
          "pb": ["ਗੁਰੂ ਬਿਨ ਭਰਮੇਂ ਲਖ ਚੌਰਾਸੀ। ਜਨਮ ਅਨੇਕ ਨਰਕ ਕੇ ਵਾਸੀ ॥", "ਗੁਰੂ ਬਿਨੁ ਪਸ਼ੁ ਜਨਮ ਸੋ ਪਾਵੈ। ਫਿਰ ਫਿਰ ਗਰਭਵਾਸ ਮਹਂ ਆਵੈ ॥"],
          "en": ["Guru bin bharmen lakh chaurasi | Janam anek narak ke waasi ||", "Guru binu pashu janam so paave | Phir phir garbhwas mahn aave ||"]
        },
        "bhavarth": {
          "hi": "गुरु के बिना जीव ८४ लाख योनियों और नर्कों में भटकता रहता है। गुरु विहीन व्यक्ति पशु योनि को प्राप्त होकर बार-बार गर्भ के कष्ट भोगता है।",
          "pb": "ਗੁਰੂ ਤੋਂ ਬਿਨਾਂ ਜੀਵ ਚੌਰਾਸੀ ਲੱਖ ਜੂਨਾਂ ਵਿਚ ਭਟਕਦਾ ਹੈ। ਉਹ ਪਸ਼ੂ ਜੂਨ ਵਿਚ ਪੈ ਕੇ ਦੁੱਖ ਭੋਗਦਾ ਹੈ।",
          "en": "Without a Master, the soul wanders through 8.4 million species and hells. A masterless one receives an animal birth and suffers repeatedly in the womb."
        }
      },
      {
        "id": "gm1-v22",
        "type": "chaupai",
        "lines": {
          "hi": ["गुरु विमुख सोई दुख पावै । जन्म जन्म सोई डहकावै ।।", "गुरु सेवे सो चतुर सुजाना। गुरु पट तर कोई और न आना ॥"],
          "pb": ["ਗੁਰੂ ਵਿਮੁਖ ਸੋਈ ਦੁਖ ਪਾਵੈ। ਜਨਮ ਜਨਮ ਸੋਈ ਡਹਕਾਵੈ ॥", "ਗੁਰੂ ਸੇਵੇ ਸੋ ਚਤੁਰ ਸੁਜਾਨਾ। ਗੁਰੂ ਪਟ ਤਰ ਕੋਈ ਔਰ ਨ ਆਨਾ ॥"],
          "en": ["Guru vimukh soi dukh paave | Janam janam soi dahkaave ||", "Guru seve so chatur sujaana | Guru pat tar koi aur na aana ||"]
        },
        "bhavarth": {
          "hi": "गुरु से विमुख (मुँह मोड़ने वाला) जीव हमेशा दुखी रहता है। गुरु की सेवा करने वाला ही वास्तव में चतुर और बुद्धिमान है, गुरु के समान अन्य कोई नहीं है।",
          "pb": "ਗੁਰੂ ਤੋਂ ਮੂੰਹ ਮੋੜਨ ਵਾਲਾ ਹਮੇਸ਼ਾ ਦੁਖੀ ਰਹਿੰਦਾ ਹੈ। ਗੁਰੂ ਦੀ ਸੇਵਾ ਕਰਨ ਵਾਲਾ ਹੀ ਸਿਆਣਾ ਹੈ।",
          "en": "He who turns away from the Master remains in sorrow. Only those who serve the Master are truly wise; nothing compares to the Master's value."
        }
      },
      {
        "id": "gm1-v23",
        "type": "chaupai",
        "lines": {
          "hi": ["गुरु की सेवा मुक्ति निज पावै । बहुरि न हंसा भवजल आवै ॥", "भवजल छूटन यहि उपाई। गुरु की सेवा करो सब भाई ॥"],
          "pb": ["ਗੁਰੂ ਕੀ ਸੇਵਾ ਮੁਕਤੀ ਨਿਜ ਪਾਵੈ। ਬਹੁਰਿ ਨ ਹੰਸਾ ਭਵਜਲ ਆਵੈ ॥", "ਭਵਜਲ ਛੂਟਨ ਯਹਿ ਉਪਾਈ। ਗੁਰੂ ਕੀ ਸੇਵਾ ਕਰੋ ਸਬ ਭਾਈ ॥"],
          "en": ["Guru ki seva mukti nij paave | Bahuri na hansa bhavjal aave ||", "Bhavjal chhootan yahi upaai | Guru ki seva karo sab bhai ||"]
        },
        "bhavarth": {
          "hi": "गुरु सेवा से ही सच्ची मुक्ति प्राप्त होती है और आत्मा को फिर इस संसार में नहीं आना पड़ता। संसार के बंधनों से छूटने का यही एकमात्र उपाय है।",
          "pb": "ਗੁਰੂ ਦੀ ਸੇਵਾ ਨਾਲ ਹੀ ਮੁਕਤੀ ਮਿਲਦੀ ਹੈ। ਸੰਸਾਰ ਦੇ ਬੰਧਨਾਂ ਤੋਂ ਛੁਟਕਾਰਾ ਪਾਉਣ ਦਾ ਇਹੀ ਇਕ ਤਰੀਕਾ ਹੈ।",
          "en": "Service to the Master grants true liberation, and the soul never returns to this world. This is the only way to escape the bonds of existence."
        }
      },
      {
        "id": "gm1-s1",
        "type": "sakhi",
        "lines": {
          "hi": ["सतगुरु दीनदयाल है, देई मुक्ति का धाम ।", "मनसा वाचा कर्मणा, सुमिरो सतगुरु नाम ।। "],
          "pb": ["ਸਤਿਗੁਰੂ ਦੀਨਦਯਾਲ ਹੈ, ਦੇਈ ਮੁਕਤੀ ਕਾ ਧਾਮ ।", "ਮਨਸਾ ਵਾਚਾ ਕਰਮਣਾ, ਸੁਮਿਰੋ ਸਤਿਗੁਰੂ ਨਾਮ ॥"],
          "en": ["Satguru deendayal hai, dei mukti ka dhaam |", "Manasa vaacha karmana, sumiro Satguru naam ||"]
        },
        "bhavarth": {
          "hi": "सतगुरु दीन-दयाल (करुणा के सागर) हैं जो मुक्ति का पद प्रदान करते हैं। मन, वाणी और कर्म से एकाग्र होकर केवल सतगुरु के नाम का सुमिरन करो।",
          "pb": "ਸਤਿਗੁਰੂ ਦਇਆਵਾਨ ਹਨ ਜੋ ਮੁਕਤੀ ਦਿੰਦੇ ਹਨ। ਮਨ, ਵਚਨ ਤੇ ਕਰਮ ਨਾਲ ਗੁਰੂ ਦਾ ਨਾਮ ਜਪੋ।",
          "en": "The True Master is the merciful protector who grants the abode of liberation. Meditate on His Name with complete unity of thought, word, and deed."
        }
      },
      {
        "id": "gm1-s2",
        "type": "sakhi",
        "lines": {
          "hi": ["सत्य शब्द के पटतरे, देवे को कुछ नांहि ।", "कहा ले गुरु संतोषिये, हौंस रही मन मांहि ।। "],
          "pb": ["ਸਤਯ ਸ਼ਬਦ ਕੇ ਪਟਤਰੇ, ਦੇਵੇ ਕੋ ਕੁਛ ਨਾਂਹਿ ।", "ਕਹਾ ਲੇ ਗੁਰੂ ਸੰਤੋਸ਼ਿਯੇ, ਹੌਂਸ ਰਹੀ ਮਨ ਮਾਂਹਿ ॥"],
          "en": ["Satya shabd ke pattare, deve ko kuchh naahi |", "Kaha le guru santoshiye, hauns rahi man maahi ||"]
        },
        "bhavarth": {
          "hi": "गुरु ने जो सत्य शब्द (नाम) दिया है, उसके बदले में संसार में देने योग्य कुछ भी नहीं है। मैं क्या देकर गुरु को संतुष्ट करूँ, यही अभिलाषा मन में बनी रहती है।",
          "pb": "ਗੁਰੂ ਦੇ ਦਿੱਤੇ ਨਾਮ ਦੇ ਬਦਲੇ ਕੁਝ ਵੀ ਦਿੱਤਾ ਨਹੀਂ ਜਾ ਸਕਦਾ। ਮਨ ਵਿਚ ਇਹੀ ਇੱਛਾ ਰਹਿੰਦੀ ਹੈ ਕਿ ਗੁਰੂ ਨੂੰ ਕਿਵੇਂ ਰੀਝਾਵਾਂ।",
          "en": "There is nothing in the universe equal in value to the True Word given by the Master. My heart yearns to find something worthy enough to offer Him."
        }
      },
      {
        "id": "gm1-s3",
        "type": "sakhi",
        "lines": {
          "hi": ["अति ऊंचा गहिरा घना, बुद्धिवन्त बहुधीर ।", "सो धोखा बिचले नहीं, सतगुरु मिले कबीर ।। "],
          "pb": ["ਅਤਿ ਊਂਚਾ ਗਹਿਰਾ ਘਨਾ, ਬੁੱਧਿਵੰਤ ਬਹੁਧੀਰ ।", "ਸੋ ਧੋਖਾ ਬਿਚਲੇ ਨਹੀਂ, ਸਤਿਗੁਰੂ ਮਿਲੇ ਕਬੀਰ ॥"],
          "en": ["Ati ooncha gahira ghana, buddhivant bahudheer |", "So dhokha bichle nahin, Satguru mile Kabir ||"]
        },
        "bhavarth": {
          "hi": "सतगुरु कबीर अत्यंत ऊंचे, गंभीर और अपार धैर्यवान हैं। जिस साधक को ऐसे सतगुरु मिल जाते हैं, वह संसार के किसी भी भ्रम या धोखे से विचलित नहीं होता।",
          "pb": "ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਬਹੁਤ ਉੱਚੇ ਤੇ ਗੰਭੀਰ ਹਨ। ਜਿਸ ਨੂੰ ਉਹ ਮਿਲ ਜਾਣ, ਉਹ ਕਦੇ ਭਟਕਦਾ ਨਹੀਂ।",
          "en": "Satguru Kabir is supremely high, deep, and patient. One who finds such a Master is never shaken by any illusion or deception in the world."
        }
      },
      {
        "id": "gm1-v24",
        "type": "chaupai",
        "lines": {
          "hi": ["गुरु देवन की महिमा बरनों। जय गुरुदेव तुम्हारी शरणों ॥", "गावत ही गुण पार न पावै । ब्रह्मा शंकर शेष गुण गावै ।।"],
          "pb": ["ਗੁਰੂ ਦੇਵਨ ਕੀ ਮਹਿਮਾ ਬਰਨੋਂ। ਜਯ ਗੁਰੂਦੇਵ ਤੁਮ੍ਹਾਰੀ ਸ਼ਰਣੋਂ ॥", "ਗਾਵਤ ਹੀ ਗੁਣ ਪਾਰ ਨ ਪਾਵੈ। ਬ੍ਰਹਮਾ ਸ਼ੰਕਰ ਸ਼ੇਸ਼ ਗੁਣ ਗਾਵੈ ॥"],
          "en": ["Guru devan ki mahima barno | Jai Gurudev tumhari sharno ||", "Gaavat hi gun paar na paave | Brahma Shankar Shesh gun gaave ||"]
        },
        "bhavarth": {
          "hi": "मैं गुरुदेव की महिमा का वर्णन करता हूँ, हे गुरुदेव! मैं आपकी शरण में हूँ। ब्रह्मा, शिव और शेषनाग भी जिनके गुणों का अंत नहीं पा सके।",
          "pb": "ਮੈਂ ਗੁਰੂ ਦੀ ਮਹਿਮਾ ਕਰਦਾ ਹਾਂ। ਬ੍ਰਹਮਾ ਤੇ ਸ਼ਿਵ ਵੀ ਉਨ੍ਹਾਂ ਦੇ ਗੁਣਾਂ ਦਾ ਅੰਤ ਨਹੀਂ ਪਾ ਸਕੇ।",
          "en": "I describe the Master's glory; O Gurudev, I am in Your refuge. Even Brahma, Shiva, and Shesha cannot reach the limits of Your virtues."
        }
      },
      {
        "id": "gm1-v25",
        "type": "chaupai",
        "lines": {
          "hi": ["प्रथमहिं गुरु ऐसा जो कीन्हा । तारक मंत्र राम कहँ दीन्हा ॥", "माला तिलक दिया स्वरूपा । जाको बन्दो राजा भूपा ॥"],
          "pb": ["ਪ੍ਰਥਮਹਿਂ ਗੁਰੂ ਐਸਾ ਜੋ ਕੀਨ੍ਹਾ। ਤਾਰਕ ਮੰਤ੍ਰ ਰਾਮ ਕਹਂ ਦੀਨ੍ਹਾ ॥", "ਮਾਲਾ ਤਿਲਕ ਦਿਯਾ ਸਵਰੂਪਾ। ਜਾਕੋ ਬੰਦੋ ਰਾਜਾ ਭੂਪਾ ॥"],
          "en": ["Prathamahin guru aisa jo keenha | Taarak mantra Ram kahn deenha ||", "Maala tilak diya swaroopa | Jaako bando raja bhoopa ||"]
        },
        "bhavarth": {
          "hi": "आदि गुरु ने ही वह तारक मंत्र (नाम) दिया जिससे राम भी पार उतरे। गुरु ने ही भक्ति का स्वरूप (माला-तिलक) दिया, जिसकी वंदना बड़े-बड़े राजा करते हैं।",
          "pb": "ਗੁਰੂ ਨੇ ਉਹ ਨਾਮ ਦਿੱਤਾ ਜਿਸ ਨਾਲ ਸੰਸਾਰ ਤਰ ਜਾਂਦਾ ਹੈ। ਗੁਰੂ ਦੀ ਭਗਤੀ ਨੂੰ ਰਾਜੇ-ਮਹਾਰਾਜੇ ਵੀ ਨਮਸਕਾਰ ਕਰਦੇ ਹਨ।",
          "en": "The Primal Master gave the liberating Name that even Ram honored. He granted the symbols of devotion which are revered by kings and sovereigns."
        }
      },
      {
        "id": "gm1-v26",
        "type": "chaupai",
        "lines": {
          "hi": ["ज्ञानी गुरु उपदेश बताया । दया धर्म की राह चिन्हाया ।।", "जीव दया घट ही में होई। जीव दया ब्रह्म है सोई ।।"],
          "pb": ["ਗਿਆਨੀ ਗੁਰੂ ਉਪਦੇਸ਼ ਬਤਾਯਾ। ਦਯਾ ਧਰਮ ਕੀ ਰਾਹ ਚਿਨ੍ਹਾਯਾ ॥", "ਜੀਵ ਦਯਾ ਘਟ ਹੀ ਮੇਂ ਹੋਈ। ਜੀਵ ਦਯਾ ਬ੍ਰਹਮ ਹੈ ਸੋਈ ॥"],
          "en": ["Gyani guru updesh bataya | Daya dharm ki raah chinhaya ||", "Jeev daya ghat hi mein hoi | Jeev daya brahm hai soi ||"]
        },
        "bhavarth": {
          "hi": "ज्ञानी गुरु ने ही सत्य उपदेश देकर दया और धर्म का मार्ग दिखाया। अपने भीतर जीव मात्र के प्रति दया का होना ही ब्रह्म (परमात्मा) का साक्षात्कार है।",
          "pb": "ਗਿਆਨੀ ਗੁਰੂ ਨੇ ਦਇਆ ਤੇ ਧਰਮ ਦਾ ਰਸਤਾ ਦਿਖਾਇਆ। ਜੀਵਾਂ 'ਤੇ ਦਇਆ ਕਰਨਾ ਹੀ ਰੱਬ ਦੀ ਭਗਤੀ ਹੈ।",
          "en": "The wise Master taught the true path of mercy and righteousness. Compassion for all living beings within one's heart is itself the realization of the Divine."
        }
      },
      {
        "id": "gm1-v27",
        "type": "chaupai",
        "lines": {
          "hi": ["गुरु से आधीन चेला बोलै । खरा शब्द गुरु अन्तर खोलै ॥", "खारा मिसरी बचनहि खमै । गुरु चरनों चेला नित रमै ।। "],
          "pb": ["ਗੁਰੂ ਸੇ ਆਧੀਨ ਚੇਲਾ ਬੋਲੈ। ਖਰਾ ਸ਼ਬਦ ਗੁਰੂ ਅੰਤਰ ਖੋਲੈ ॥", "ਖਾਰਾ ਮਿਸਰੀ ਬਚਨਹਿ ਖਮੈ। ਗੁਰੂ ਚਰਨੋਂ ਚੇਲਾ ਨਿਤ ਰਮੈ ॥"],
          "en": ["Guru se adheen chela bolai | Khara shabd guru antar kholai ||", "Khara misari vachanahi khamai | Guru charano chela nit ramat ||"]
        },
        "bhavarth": {
          "hi": "जब शिष्य गुरु के प्रति पूर्ण समर्पित होता है, तब गुरु उसके हृदय में सत्य शब्द का भेद खोलते हैं। शिष्य को गुरु के कठोर और मीठे दोनों वचनों को समभाव से सहना चाहिए।",
          "pb": "ਜਦੋਂ ਚੇਲਾ ਨਿਮਰ ਹੁੰਦਾ ਹੈ, ਤਾਂ ਗੁਰੂ ਗਿਆਨ ਦਾ ਭੇਦ ਖੋਲ੍ਹਦੇ ਹਨ। ਚੇਲੇ ਨੂੰ ਗੁਰੂ ਦੇ ਬਚਨਾਂ ਨੂੰ ਖਿੜੇ ਮੱਥੇ ਮੰਨਣਾ ਚਾਹੀਦਾ ਹੈ।",
          "en": "When a disciple speaks with humility, the Master reveals the pure Word within. A disciple should accept both harsh and sweet words with equanimity while staying devoted."
        }
      },
      {
        "id": "gm1-v28",
        "type": "chaupai",
        "lines": {
          "hi": ["भीतर हिरदय गुरु सो भले । ताके पीछे रामहि मिले ॥", "गुरु रीझै सो कीजै कामा । ता पीछे रीझेगा रामा ।। "],
          "pb": ["ਭੀਤਰ ਹਿਰਦਯ ਗੁਰੂ ਸੋ ਭਲੇ। ਤਾਕੇ ਪੀਛੇ ਰਾਮਹਿ ਮਿਲੇ ॥", "ਗੁਰੂ ਰੀਝੈ ਸੋ ਕੀਜੈ ਕਾਮਾ। ਤਾ ਪੀਛੇ ਰੀਝੇਗਾ ਰਾਮਾ ॥"],
          "en": ["Bheetar hirday guru so bhale | Taake peechhe Ramahi mile ||", "Guru reejhai so keejai kaama | Ta peechhe reejhega Rama ||"]
        },
        "bhavarth": {
          "hi": "जिसके हृदय के भीतर गुरु का वास है, उसे परमात्मा स्वतः मिल जाते हैं। पहले वह कार्य करो जिससे गुरु प्रसन्न हों, फिर राम तो अपने आप प्रसन्न हो जाएंगे।",
          "pb": "ਜਿਸ ਦੇ ਹਿਰਦੇ ਵਿਚ ਗੁਰੂ ਹੈ, ਉਸ ਨੂੰ ਰਾਮ ਵੀ ਮਿਲ ਜਾਂਦਾ ਹੈ। ਪਹਿਲਾਂ ਉਹ ਕੰਮ ਕਰੋ ਜਿਸ ਨਾਲ ਗੁਰੂ ਖੁਸ਼ ਹੋਵੇ।",
          "en": "He whose heart is aligned with the Master will surely find the Divine. Perform tasks that please the Master, and the Lord will follow with His pleasure."
        }
      },
      {
        "id": "gm1-v29",
        "type": "chaupai",
        "lines": {
          "hi": ["शिष्य सरस्वति गुरु यमुना अंगा। राम मिले सब सरिता गंगा ।।", "चेला गुरू में गुरु में राम । भक्ति महातम न्यारा नाम ।।"],
          "pb": ["ਸ਼ਿਸ਼ਯ ਸਰਸਵਤੀ ਗੁਰੂ ਯਮੁਨਾ ਅੰਗਾ। ਰਾਮ ਮਿਲੇ ਸਬ ਸਰਿਤਾ ਗੰਗਾ ॥", "ਚੇਲਾ ਗੁਰੂ ਮੇਂ ਗੁਰੂ ਮੇਂ ਰਾਮ। ਭਕਤੀ ਮਹਾਤਮ ਨਿਆਰਾ ਨਾਮ ॥"],
          "en": ["Shishya Saraswati guru Yamuna anga | Ram mile sab sarita Ganga ||", "Chela guru mein guru mein Ram | Bhakti mahatam nyara naam ||"]
        },
        "bhavarth": {
          "hi": "शिष्य सरस्वती और गुरु यमुना के समान हैं, इनके मिलन से राम रूपी गंगा प्रकट होती है। चेला गुरु में और गुरु राम में लय हो जाते हैं, यही भक्ति का महान फल है।",
          "pb": "ਚੇਲਾ, ਗੁਰੂ ਤੇ ਰਾਮ ਮਿਲ ਕੇ ਇਕ ਹੋ ਜਾਂਦੇ ਹਨ। ਭਗਤੀ ਦੀ ਮਹਿਮਾ ਬਹੁਤ ਵੱਡੀ ਹੈ।",
          "en": "The disciple is like Saraswati and the Master like Yamuna; their union reveals the Lord like the Ganges. The disciple merges in the Master, and the Master in God."
        }
      },
      {
        "id": "gm1-v30",
        "type": "chaupai",
        "lines": {
          "hi": ["गुरु आज्ञा निर्वाहे नेमा । तब पावै सर्वज्ञी प्रेमा ।।", "सर्वज्ञी राम सकल घट सारा । है सबही में सबसे न्यारा ।। "],
          "pb": ["ਗੁਰੂ ਆਗਿਆ ਨਿਰਵਾਹੇ ਨੇਮਾ। ਤਬ ਪਾਵੈ ਸਰਵਗਿਆਨੀ ਪ੍ਰੇਮਾ ॥", "ਸਰਵਗਿਆਨੀ ਰਾਮ ਸਕਲ ਘਟ ਸਾਰਾ। ਹੈ ਸਬਹੀ ਮੇਂ ਸਬਸੇ ਨਿਆਰਾ ॥"],
          "en": ["Guru agya nirvahe nema | Tab paave sarvagyi prema ||", "Sarvagyi Ram sakal ghat saara | Hai sabahi mein sabse nyara ||"]
        },
        "bhavarth": {
          "hi": "जो गुरु की आज्ञा और नियमों का पालन करता है, उसे उस सर्वज्ञ परमात्मा का प्रेम मिलता है जो सभी के भीतर होते हुए भी सबसे निर्लिप्त और न्यारा है।",
          "pb": "ਗੁਰੂ ਦੀ ਆਗਿਆ ਮੰਨਣ ਵਾਲੇ ਨੂੰ ਪ੍ਰਭੂ ਦਾ ਪ੍ਰੇਮ ਮਿਲਦਾ ਹੈ। ਉਹ ਪ੍ਰਭੂ ਸਭ ਵਿਚ ਹੈ ਪਰ ਸਭ ਤੋਂ ਵੱਖਰਾ ਹੈ।",
          "en": "Adhering to the Master's commands leads to the love of the Omniscient One, who dwells in all hearts yet remains detached and unique."
        }
      },
      {
        "id": "gm1-v31",
        "type": "chaupai",
        "lines": {
          "hi": ["ऐसा जाने मन में रहे । खोजे बूझै ताको कहै ॥", "गुरु महिमा संक्षेपहि बनी। गुरु की महिमा अनन्त घनी ॥"],
          "pb": ["ਐਸਾ ਜਾਨੇ ਮਨ ਮੇਂ ਰਹੇ। ਖੋਜੇ ਬੂਝੈ ਤਾਕੋ ਕਹੈ ॥", "ਗੁਰੂ ਮਹਿਮਾ ਸੰਖੇਪਹਿ ਬਨੀ। ਗੁਰੂ ਕੀ ਮਹਿਮਾ ਅਨੰਤ ਘਨੀ ॥"],
          "en": ["Aisa jaane man mein rahe | Khoje boojhai taako kahai ||", "Guru mahima sankshepahi bani | Guru ki mahima anant ghani ||"]
        },
        "bhavarth": {
          "hi": "इस सत्य को जानकर जो अपने भीतर खोजता है, उसे ही वह पद मिलता है। गुरु की यह महिमा तो संक्षेप में है, वास्तव में गुरु की महिमा अनंत और अत्यंत सघन है।",
          "pb": "ਗੁਰੂ ਦੀ ਮਹਿਮਾ ਅਨੰਤ ਹੈ, ਇਹ ਤਾਂ ਸਿਰਫ ਥੋੜ੍ਹਾ ਜਿਹਾ ਵਰਣਨ ਹੈ।",
          "en": "He who realizes this and searches within attains the goal. This description of the Master's glory is brief; in truth, it is infinite and vast."
        }
      },
      {
        "id": "gm1-v32",
        "type": "chaupai",
        "lines": {
          "hi": ["अवतार धरि हरि गुरु करै । गुरु किये तब नारद तरै ॥", "साख पुरातन ऐसी सुनी। बात हमारी गुरु सो बनी ॥"],
          "pb": ["ਅਵਤਾਰ ਧਰਿ ਹਰਿ ਗੁਰੂ ਕਰੈ। ਗੁਰੂ ਕਿਯੇ ਤਬ ਨਾਰਦ ਤਰੈ ॥", "ਸਾਖ ਪੁਰਾਤਨ ਐਸੀ ਸੁਨੀ। ਬਾਤ ਹਮਾਰੀ ਗੁਰੂ ਸੋ ਬਨੀ ॥"],
          "en": ["Avtar dhari hari guru karai | Guru kiye tab Narad tarai ||", "Saakh puratan aisi suni | Baat hamari guru so bani ||"]
        },
        "bhavarth": {
          "hi": "स्वयं भगवान ने अवतार लेकर गुरु धारण किये। नारद जी भी गुरु बनाने के बाद ही मुक्त हुए। प्राचीन कथाओं से स्पष्ट है कि गुरु बिना कल्याण संभव नहीं है।",
          "pb": "ਭਗਵਾਨ ਨੇ ਵੀ ਅਵਤਾਰ ਲੈ ਕੇ ਗੁਰੂ ਧਾਰਨ ਕੀਤੇ। ਨਾਰਦ ਜੀ ਵੀ ਗੁਰੂ ਬਣਾ ਕੇ ਹੀ ਤਰੇ।",
          "en": "The Lord Himself took human form to accept a Master. Even Narada was liberated only after finding a Master. Ancient accounts confirm this necessity."
        }
      },
      {
        "id": "gm1-v33",
        "type": "chaupai",
        "lines": {
          "hi": ["कीड़ी जैसा मैं हूं दासा । पड़ा रहूं गुरु चरणों पासा ।।", "गुरु चरणों राखो विश्वासा । गुरु ही पुरवे मन की आशा ॥"],
          "pb": ["ਕੀੜੀ ਜੈਸਾ ਮੈਂ ਹੂੰ ਦਾਸਾ। ਪੜਾ ਰਹੂੰ ਗੁਰੂ ਚਰਣੋਂ ਪਾਸਾ ॥", "ਗੁਰੂ ਚਰਣੋਂ ਰਾਖੋ ਵਿਸ਼ਵਾਸਾ। ਗੁਰੂ ਹੀ ਪੁਰਵੇ ਮਨ ਕੀ ਆਸ਼ਾ ॥"],
          "en": ["Keedi jaisa main hoon dasa | Pada rahun guru charano paasa ||", "Guru charano rakho vishwas | Guru hi purve man ki asha ||"]
        },
        "bhavarth": {
          "hi": "मैं एक तुच्छ चींटी के समान गुरु का दास हूँ जो सदा उनके चरणों में पड़ा रहता हूँ। गुरु चरणों में दृढ़ विश्वास रखो, वे ही मन की सभी सात्विक इच्छाओं को पूर्ण करेंगे।",
          "pb": "ਮੈਂ ਗੁਰੂ ਦਾ ਨਿਮਾਣਾ ਦਾਸ ਹਾਂ। ਗੁਰੂ ਦੇ ਚਰਨਾਂ ਵਿਚ ਵਿਸ਼ਵਾਸ ਰੱਖੋ।",
          "en": "I am a humble servant like a tiny ant, lying eternally at the Master's feet. Keep unwavering faith in His feet; He alone fulfills the heart's true desires."
        }
      },
      {
        "id": "gm1-s4",
        "type": "sakhi",
        "lines": {
          "hi": ["गुरु गोविंद अरू शिष्य मिलि , कीन्हा भक्ति विवेक।", "त्रिवेणी धारा बहे, आगे गंगा एक ॥"],
          "pb": ["ਗੁਰੂ ਗੋਵਿੰਦ ਅਰੂ ਸ਼ਿਸ਼ਯ ਮਿਲਿ, ਕੀਨ੍ਹਾ ਭਕਤੀ ਵਿਵੇਕ।", "ਤ੍ਰਿਵੇਣੀ ਧਾਰਾ ਬਹੇ, ਆਗੇ ਗੰਗਾ ਏਕ ॥"],
          "en": ["Guru Govind aru shishya mili, keenha bhakti vivek |", "Triveni dhara bahe, aage Ganga ek ||"]
        },
        "bhavarth": {
          "hi": "जब गुरु, परमात्मा और शिष्य का भाव एक हो जाता है, तब भक्ति की त्रिवेणी बहती है और अंत में सब एक ही परमात्मा रूपी गंगा में समाहित हो जाते हैं।",
          "pb": "ਗੁਰੂ, ਗੋਵਿੰਦ ਤੇ ਚੇਲਾ ਮਿਲ ਕੇ ਭਗਤੀ ਦੀ ਤ੍ਰਿਵੇਣੀ ਬਣਾਉਂਦੇ ਹਨ।",
          "en": "When Master, God, and Disciple unite in wisdom, the triple stream of devotion flows, merging finally into the singular Ganges of the Divine."
        }
      },
      {
        "id": "gm1-s5",
        "type": "sakhi",
        "lines": {
          "hi": ["गुरु की महिमा अनन्त है, मोसो कही न जाय ।", "तन मन धन को सौंपि के, चरणों रहे समाय ॥"],
          "pb": ["ਗੁਰੂ ਕੀ ਮਹਿਮਾ ਅਨੰਤ ਹੈ, ਮੋਸੋ ਕਹੀ ਨ ਜਾਯ ।", "ਤਨ ਮਨ ਧਨ ਕੋ ਸੌਂਪਿ ਕੇ, ਚਰਣੋਂ ਰਹੇ ਸਮਾਯ ॥"],
          "en": ["Guru ki mahima anant hai, moso kahi na jaay |", "Tan man dhan ko saunpi ke, charano rahe samay ||"]
        },
        "bhavarth": {
          "hi": "गुरु की महिमा इतनी अनंत है कि वाणी से उसका वर्णन नहीं किया जा सकता। अपना तन, मन और धन सब उन्हें समर्पित कर उनके चरणों में लीन रहना ही श्रेष्ठ है।",
          "pb": "ਗੁਰੂ ਦੀ ਮਹਿਮਾ ਅਪਾਰ ਹੈ, ਆਪਣਾ ਸਭ ਕੁਝ ਗੁਰੂ ਨੂੰ ਅਰਪਨ ਕਰ ਦਿਓ।",
          "en": "The Master's glory is so infinite it cannot be spoken. It is best to surrender body, mind, and wealth and remain absorbed in His feet."
        }
      },
      {
        "id": "gm1-v34",
        "type": "chaupai",
        "lines": {
          "hi": ["गुरु सत पद जप अमृत वाणी। गुरु बिन मुक्ति नहीं रे प्राणी ॥", "गुरु है आदि अंत के त्राता । गुरु है मुक्ति पद के दाता ॥"],
          "pb": ["ਗੁਰੂ ਸਤ ਪਦ ਜਪ ਅਮ੍ਰਿਤ ਵਾਣੀ। ਗੁਰੂ ਬਿਨ ਮੁਕਤੀ ਨਹੀਂ ਰੇ ਪ੍ਰਾਣੀ ॥", "ਗੁਰੂ ਹੈ ਆਦਿ ਅੰਤ ਕੇ ਤ੍ਰਾਤਾ। ਗੁਰੂ ਹੈ ਮੁਕਤੀ ਪਦ ਕੇ ਦਾਤਾ ॥"],
          "en": ["Guru sat pad jap amrit vani | Guru bin mukti nahin re prani ||", "Guru hai aadi ant ke trata | Guru hai mukti pad ke data ||"]
        },
        "bhavarth": {
          "hi": "गुरु के सत्य पद और अमृतमयी वाणी का जप करो, क्योंकि गुरु बिना मुक्ति संभव नहीं है। गुरु ही आदि से अंत तक रक्षक हैं और वही मोक्ष प्रदान करने वाले हैं।",
          "pb": "ਗੁਰੂ ਦੀ ਅੰਮ੍ਰਿਤ ਵਾਣੀ ਜਪੋ, ਗੁਰੂ ਹੀ ਮੁਕਤੀ ਦੇਣ ਵਾਲੇ ਹਨ।",
          "en": "Chant the Master's eternal word; without Him, there is no liberation. The Master is the savior from beginning to end and the bestower of salvation."
        }
      },
      {
        "id": "gm1-v35",
        "type": "chaupai",
        "lines": {
          "hi": ["गुरु गंगा काशी स्थाना। चार वेद गुरु दम से जाना ।।", "अड़सठ तीरथ भ्रमि भ्रमि आवै । सो फल गुरु के चरणों पावै ॥"],
          "pb": ["ਗੁਰੂ ਗੰਗਾ ਕਾਸ਼ੀ ਸਥਾਨਾ। ਚਾਰ ਵੇਦ ਗੁਰੂ ਦਮ ਸੇ ਜਾਨਾ ॥", "ਅੜਸਠ ਤੀਰਥ ਭ੍ਰਮਿ ਭ੍ਰਮਿ ਆਵੈ। ਸੋ ਫਲ ਗੁਰੂ ਕੇ ਚਰਣੋਂ ਪਾਵੈ ॥"],
          "en": ["Guru Ganga Kashi sthana | Chaar ved guru dam se jaana ||", "Adsath teerath bhrami bhrami aavai | So phal guru ke charano paave ||"]
        },
        "bhavarth": {
          "hi": "गुरु ही गंगा और काशी के समान पवित्र हैं, समस्त वेदों का ज्ञान उनके एक श्वास (उपदेश) में समाहित है। ६८ तीर्थों के भ्रमण का फल गुरु चरणों की सेवा में ही मिल जाता है।",
          "pb": "ਗੁਰੂ ਹੀ ਗੰਗਾ ਤੇ ਕਾਸ਼ੀ ਹਨ। ਸਾਰੇ ਤੀਰਥਾਂ ਦਾ ਫਲ ਗੁਰੂ ਦੇ ਚਰਨਾਂ ਵਿਚ ਹੈ।",
          "en": "The Master is as sacred as the Ganges and Kashi; all Vedic wisdom is in His breath. The merit of 68 pilgrimages is found at the Master's feet."
        }
      },
      {
        "id": "gm1-v36",
        "type": "chaupai",
        "lines": {
          "hi": ["गुरु को तजै भजै जो आना । ता पशुवा को फोकट ज्ञाना ॥", "गुरु पारस परसै जो कोई । लोहा ते जीव कंचन होई ॥"],
          "pb": ["ਗੁਰੂ ਕੋ ਤਜੈ ਭਜੈ ਜੋ ਆਨਾ। ਤਾ ਪਸ਼ੁਵਾ ਕੋ ਫੋਕਟ ਗਿਆਨਾ ॥", "ਗੁਰੂ ਪਾਰਸ ਪਰਸੈ ਜੋ ਕੋਈ। ਲੋਹਾ ਤੇ ਜੀਵ ਕੰਚਨ ਹੋਈ ॥"],
          "en": ["Guru ko tajai bhajai jo aana | Ta pashuwa ko fokat gyana ||", "Guru paaras parsai jo koi | Loha te jeev kanchan hoi ||"]
        },
        "bhavarth": {
          "hi": "जो गुरु को त्याग कर अन्यत्र भटकता है, उसका ज्ञान व्यर्थ है। गुरु उस पारस पत्थर के समान हैं जिसके स्पर्श मात्र से लोहे जैसा संसारी जीव सोने के समान शुद्ध हो जाता है।",
          "pb": "ਗੁਰੂ ਨੂੰ ਛੱਡ ਕੇ ਭਟਕਣਾ ਵਿਅਰਥ ਹੈ। ਗੁਰੂ ਪਾਰਸ ਵਰਗੇ ਹਨ ਜੋ ਜੀਵ ਨੂੰ ਸੋਨਾ ਬਣਾ ਦਿੰਦੇ ਹਨ।",
          "en": "He who leaves the Master for another has hollow knowledge. The Master is like a philosopher's stone, turning the iron-like soul into pure gold."
        }
      },
      {
        "id": "gm1-v37",
        "type": "chaupai",
        "lines": {
          "hi": ["शुक गुरु किये जनक विदेही । वे भी गुरु के परम सनेही ॥", "नारद गुरु प्रहलाद पढ़ाये । भक्ति हेतु जिन दर्शन पाये ।। "],
          "pb": ["ਸ਼ੁਕ ਗੁਰੂ ਕਿਯੇ ਜਨਕ ਵਿਦੇਹੀ। ਵੇ ਭੀ ਗੁਰੂ ਕੇ ਪਰਮ ਸਨੇਹੀ ॥", "ਨਾਰਦ ਗੁਰੂ ਪ੍ਰਹਲਾਦ ਪਢ਼ਾਯੇ। ਭਕਤੀ ਹੇਤੁ ਜਿਨ ਦਰਸ਼ਨ ਪਾਯੇ ॥"],
          "en": ["Shuk guru kiye Janak Videhi | Ve bhi guru ke param snehi ||", "Narad guru Prahlad padhaye | Bhakti hetu jin darshan paaye ||"]
        },
        "bhavarth": {
          "hi": "शुकदेव मुनि ने राजा जनक को गुरु बनाया। नारद जी ने प्रहलाद को ज्ञान दिया जिससे उन्हें परमात्मा के दर्शन हुए। बड़े-बड़े संतों ने भी गुरु प्रेम को ही अपनाया।",
          "pb": "ਸ਼ੁਕਦੇਵ ਨੇ ਰਾਜਾ ਜਨਕ ਨੂੰ ਗੁਰੂ ਬਣਾਇਆ। ਨਾਰਦ ਜੀ ਨੇ ਪ੍ਰਹਲਾਦ ਨੂੰ ਸਿੱਖਿਆ ਦਿੱਤੀ।",
          "en": "Shukdev chose King Janaka as His Master. Narada taught Prahlad, leading him to divine vision. Even the greatest saints cherished the Master's love."
        }
      },
      {
        "id": "gm1-v38",
        "type": "chaupai",
        "lines": {
          "hi": ["काग भुशंडी शम्भु गुरु कीन्हा। अगम निगम सबही कह दीन्हा ॥", "ब्रह्मा गुरु अग्नि को कीन्हा। होम यज्ञ जिन आज्ञा दीन्हा ॥"],
          "pb": ["ਕਾਗ ਭੁਸ਼ੰਡੀ ਸ਼ਮਭੁ ਗੁਰੂ ਕੀਨ੍ਹਾ। ਅਗਮ ਨਿਗਮ ਸਬਹੀ ਕਹ ਦੀਨ੍ਹਾ ॥", "ਬ੍ਰਹਮਾ ਗੁਰੂ ਅਗਨੀ ਕੋ ਕੀਨ੍ਹਾ। ਹੋਮ ਯਗਿਆ ਜਿਨ ਆਗਿਆ ਦੀਨ੍ਹਾ ॥"],
          "en": ["Kaag Bhushandi Shambhu guru keenha | Agam nigam sabahi kah deenha ||", "Brahma guru Agni ko keenha | Hom yagya jin agya deenha ||"]
        },
        "bhavarth": {
          "hi": "कागभुशुंडी ने शिव को गुरु बनाया और समस्त वेदों का ज्ञान पाया। ब्रह्मा जी ने भी मर्यादा स्थापना के लिए अग्नि को गुरु मानकर यज्ञ का विधान किया।",
          "pb": "ਕਾਗਭੁਸ਼ੰਡੀ ਨੇ ਸ਼ਿਵ ਨੂੰ ਗੁਰੂ ਬਣਾਇਆ। ਬ੍ਰਹਮਾ ਜੀ ਨੇ ਵੀ ਗੁਰੂ ਮਰਿਆਦਾ ਦੀ ਪਾਲਣਾ ਕੀਤੀ।",
          "en": "Bhushandi chose Shiva as Master and gained all Vedic secrets. Even Brahma followed the Master-tradition to establish the rituals of sacrifice."
        }
      },
      {
        "id": "gm1-v39",
        "type": "chaupai",
        "lines": {
          "hi": ["वशिष्ठ मुनि गुरु किये रघुनाथा । पाये दर्शन भये सनाथा ॥", " कृष्ण गये दुर्वासा शरना । पाये भक्ति जग तारन तरना ।। "],
          "pb": ["ਵਸ਼ਿਸ਼ਠ ਮੁਨਿ ਗੁਰੂ ਕਿਯੇ ਰਘੁਨਾਥਾ। ਪਾਯੇ ਦਰਸ਼ਨ ਭਏ ਸਨਾਥਾ ॥", "ਕ੍ਰਿਸ਼ਨ ਗਏ ਦੁਰਵਾਸਾ ਸ਼ਰਨਾ। ਪਾਯੇ ਭਕਤੀ ਜਗ ਤਾਰਨ ਤਰਨਾ ॥"],
          "en": ["Vashistha muni guru kiye Raghunatha | Paaye darshan bhaye sanatha ||", "Krishna gaye Durvasa sharna | Paaye bhakti jag taaran tarna ||"]
        },
        "bhavarth": {
          "hi": "श्री राम ने वशिष्ठ मुनि को गुरु बनाया। श्री कृष्ण दुर्वासा ऋषि की शरण में गए। इन महान अवतारों ने भी गुरु धारण कर संसार को भक्ति का सच्चा मार्ग दिखाया।",
          "pb": "ਰਾਮ ਨੇ ਵਸ਼ਿਸ਼ਠ ਨੂੰ ਤੇ ਕ੍ਰਿਸ਼ਨ ਨੇ ਦੁਰਵਾਸਾ ਨੂੰ ਗੁਰੂ ਬਣਾਇਆ।",
          "en": "Lord Ram chose Vashistha as His Master. Krishna sought refuge in Durvasa. These incarnations accepted Masters to show the world the true path."
        }
      },
      {
        "id": "gm1-v40",
        "type": "chaupai",
        "lines": {
          "hi": ["धीमर शिक्षा नारद पाये । चौरासी से तुरत बचाये ।।", "गुरु कहै सोई है सांचा । बिन परिचय सेवक है कांचा ।। "],
          "pb": ["ਧੀਮਰ ਸ਼ਿਕਸ਼ਾ ਨਾਰਦ ਪਾਯੇ। ਚੌਰਾਸੀ ਸੇ ਤੁਰਤ ਬਚਾਯੇ ॥", "ਗੁਰੂ ਕਹੈ ਸੋਈ ਹੈ ਸਾਂਚਾ। ਬਿਨ ਪਰਿਚਯ ਸੇਵਕ ਹੈ ਕਾਂਚਾ ॥"],
          "en": ["Dheemar shiksha Narad paaye | Chaurasi se turat bachaaye ||", "Guru kahai soi hai saancha | Bin parichay sevak hai kaancha ||"]
        },
        "bhavarth": {
          "hi": "नारद जी ने एक धीवर (मछुआरे) से भी शिक्षा लेकर गुरु मर्यादा निभाई। गुरु के वचन ही परम सत्य हैं, बिना गुरु के अनुभव के शिष्य की साधना कच्ची रह जाती है।",
          "pb": "ਗੁਰੂ ਦੇ ਬਚਨ ਹੀ ਸੱਚ ਹਨ। ਗੁਰੂ ਦੇ ਅਨੁਭਵ ਤੋਂ ਬਿਨਾਂ ਸਾਧਨਾ ਅਧੂਰੀ ਹੈ।",
          "en": "Narada even learned from a humble fisherman to uphold the Master's dignity. The Master's word is Absolute Truth; without His touch, a disciple's practice is incomplete."
        }
      },
      {
        "id": "gm1-v41",
        "type": "chaupai",
        "lines": {
          "hi": ["गुरु समर्थ है सब के पारा । गुरु शरनन उतरे भव पारा ॥", "कहहिं कबीर गुरु आप अकेला । दसों अवतार गुरु का चेला ॥"],
          "pb": ["ਗੁਰੂ ਸਮਰਥ ਹੈ ਸਬ ਕੇ ਪਾਰਾ। ਗੁਰੂ ਸ਼ਰਨਨ ਉਤਰੇ ਭਵ ਪਾਰਾ ॥", "ਕਹਹਿਂ ਕਬੀਰ ਗੁਰੂ ਆਪ ਅਕੇਲਾ। ਦਸੋਂ ਅਵਤਾਰ ਗੁਰੂ ਕਾ ਚੇਲਾ ॥"],
          "en": ["Guru samarth hai sab ke paara | Guru sharnan utare bhav paara ||", "Kahahin Kabir guru aap akela | Dason avtar guru ka chela ||"]
        },
        "bhavarth": {
          "hi": "गुरु सर्व-समर्थ हैं जो संसार के पार ले जाते हैं। कबीर साहेब कहते हैं कि गुरु तत्व अद्वितीय है, यहाँ तक कि दसों अवतारों ने भी गुरु की महत्ता को स्वीकार किया है।",
          "pb": "ਗੁਰੂ ਸਭ ਕੁਝ ਕਰਨ ਦੇ ਸਮਰਥ ਹਨ। ਕਬੀਰ ਸਾਹੇਬ ਕਹਿੰਦੇ ਹਨ ਕਿ ਗੁਰੂ ਦੀ ਮਹਿਮਾ ਸਭ ਤੋਂ ਉੱਪਰ ਹੈ।",
          "en": "The Master is all-powerful, transcending everything. Kabir says the Master-principle is unique; even the ten incarnations were humble followers of the Master."
        }
      },
      {
        "id": "gm1-s6",
        "type": "sakhi",
        "lines": {
          "hi": ["राम कृष्ण से को बड़ा, उनहूं तो गुरु कीन्ह ।", "तीन लोक के वे धनी, गुरु आगे आधीन ॥"],
          "pb": ["ਰਾਮ ਕ੍ਰਿਸ਼ਨ ਸੇ ਕੋ ਬੜਾ, ਉਨਹੂੰ ਤੋ ਗੁਰੂ ਕੀਨ੍ਹਾ।", "ਤੀਨ ਲੋਕ ਕੇ ਵੇ ਧਨੀ, ਗੁਰੂ ਆਗੇ ਆਧੀਨ ॥"],
          "en": ["Ram Krishna se ko bada, unhu to guru keenh |", "Teen lok ke ve dhani, guru aage adheen ||"]
        },
        "bhavarth": {
          "hi": "राम और कृष्ण से बड़ा कौन हो सकता है? पर उन्होंने भी गुरु धारण किये। तीनों लोकों के स्वामी होते हुए भी वे गुरु चरणों में पूर्ण समर्पित और आधीन रहे।",
          "pb": "ਰਾਮ ਤੇ ਕ੍ਰਿਸ਼ਨ ਨੇ ਵੀ ਗੁਰੂ ਧਾਰਨ ਕੀਤੇ। ਉਹ ਤਿੰਨਾਂ ਲੋਕਾਂ ਦੇ ਮਾਲਕ ਹੋ ਕੇ ਵੀ ਗੁਰੂ ਅੱਗੇ ਨਿਮਰ ਰਹੇ।",
          "en": "Who is greater than Ram or Krishna? Yet even they accepted Masters. Though sovereigns of the three worlds, they remained humble before their Masters."
        }
      },
      {
        "id": "gm1-s7",
        "type": "sakhi",
        "lines": {
          "hi": ["हरि सेवा युग चार है, गुरु सेवा पल एक ।", "ताके पटतर ना तुलै, सन्तन किया विवेक ॥"],
          "pb": ["ਹਰਿ ਸੇਵਾ ਯੁਗ ਚਾਰ ਹੈ, ਗੁਰੂ ਸੇਵਾ ਪਲ ਏਕ ।", "ਤਾਕੇ ਪਟਤਰ ਨਾ ਤੁਲੈ, ਸੰਤਨ ਕਿਯਾ ਵਿਵੇਕ ॥"],
          "en": ["Hari seva yug chaar hai, guru seva pal ek |", "Taake pattar na tulai, santan kiya vivek ||"]
        },
        "bhavarth": {
          "hi": "चारों युगों तक भगवान की पूजा करने का जो फल है, वह गुरु की एक पल की सेवा के बराबर भी नहीं है। संतों ने विवेक से इसी परम सत्य को सिद्ध किया है।",
          "pb": "ਗੁਰੂ ਦੀ ਇਕ ਪਲ ਦੀ ਸੇਵਾ ਚਾਰਾਂ ਜੁਗਾਂ ਦੀ ਭਗਤੀ ਤੋਂ ਉੱਤਮ ਹੈ।",
          "en": "The merit of worshipping the Lord for four ages does not equal a single moment of service to the Master. Wise saints have confirmed this profound truth."
        }
      },
      {
        "id": "gm1-footer",
        "type": "mangal",
        "lines": {
          "hi": ["॥ श्री गुरु महिमा (१) सम्पूर्ण ॥"],
          "pb": ["॥ ਸ਼੍ਰੀ ਗੁਰੂ ਮਹਿਮਾ (੧) ਸੰਪੂਰਨ ॥"],
          "en": ["|| Sri Guru Mahima (1) Completed ||"]
        },
        "bhavarth": {
          "hi": "श्री गुरु महिमा का प्रथम भाग यहाँ पूर्ण होता है, जो गुरु की अनंत अनुकम्पा का बोध कराता है।",
          "pb": "ਗੁਰੂ ਮਹਿਮਾ ਦਾ ਪਹਿਲਾ ਭਾਗ ਇੱਥੇ ਸਮਾਪਤ ਹੁੰਦਾ ਹੈ।",
          "en": "The first part of Guru Mahima concludes here, awakening the realization of the Master's infinite grace."
        }
      }
    ]
  },
  GURU_MAHIMA_2_SECTION,
  GURU_SHATAK_SAAR_SECTION,
  PRABHAT_SANDHYA_SAKHI_SECTION,
  GYAAN_GUDADI_SECTION,
  DHANAKSHARI_SECTION,
  ARJINAMA_SECTION,
  PRABHAT_AARTI_1_SECTION,
  PRABHAT_AARTI_2_SECTION,
  PRABHAT_AARTI_3_SECTION,
  PRABHAT_AARTI_4_SECTION,
  PRABHAT_VINATI_1_SECTION,
  PRABHAT_VINATI_2_SECTION,
  PRABHAT_PRATAH_SUMIRAN_AARTI_SECTION,
  PRABHAT_SHLOK_DHYANAM_SECTION,
  PRABHAT_VINATI_SECTION,
  PRABHAT_SAMAPAN_VANDANA_SECTION
];
