import { NitnemSection } from '../../types';
import { POONAM_VERSES_PART_1 } from './poonamVersesPart1';
import { POONAM_VERSES_PART_2 } from './poonamVersesPart2';
import { POONAM_KAHRA_VERSES, POONAM_MANGAL_VERSES } from './poonamKahraMangalVerses';
import { POONAM_LAGHU_VERSES } from './poonamLaghuVerses';
import { POONAM_BARSAIT_VERSES } from './poonamBarsaitVerses';

export const POONAM_MAHATMYA_SECTIONS: NitnemSection[] = [
  {
    id: "poonam-brihat-mahatmya",
    majorCategoryId: "poonam-mahatmya",
    majorCategoryTitle: {
      hi: "४. पूनो महात्म्य पाठ",
      pb: "੪. ਪੂਨੋ ਮਹਾਤਮਯ ਪਾਠ",
      en: "4. Full Moon Discourse (Poonam Mahatmya Path)"
    },
    subGroup: "पूनो महात्म्य",
    title: {
      hi: "अथ बृहत पूनो महात्म्य",
      pb: "ਅਥ ਬ੍ਰਿਹਤ ਪੂਨੋ ਮਹਾਤਮਯ",
      en: "Brihat Poonam Mahatmya (Major Full Moon Discourse)"
    },
    subtitle: {
      hi: "।। सत्यनाम ।। पूर्णिमा व्रत महात्म्य, सत्य कबीर अमर ज्ञान, गुरु वंदना एवं विधि",
      pb: "॥ ਸਤਯਨਾਮ ॥ ਪੂਰਨਮਾਸ਼ੀ ਦੀ ਪਾਵਨ ਮਹਿਮਾ ਅਤੇ ਗੁਰੂ ਵੰਦਨਾ",
      en: "The Grand Eulogy of the Sacred Full Moon & Guru Salutation"
    },
    iconName: "Moon",
    estimatedMinutes: 25,
    totalVerses: 13,
    verses: [
      {
        id: "pbm-v1",
        type: "doha",
        lines: {
          hi: [
            "।। सत्यनाम ।।",
            "सत्यनाम साहेब, ",
            "सत्यसुकृत साहेब, ",
            "आदि अद्ली साहेब, ",
            "अजर अचिन्त साहेब, ",
            "पुरुष मुनिन्द्र साहेब, ",
            "करुणामय साहेब, ",
            "कबीर साहेब, ",
            "सुरतियोग संतायन साहेब, ",
            "धनी धर्मदास साहेब, ",
            "वचन वंश चूरामणि नाम साहेब, ",
            "पंथ श्री हुजूर सुदर्शन नाम साहेब, ",
            "पंथ श्री हुजूर कुलपति नाम साहेब, ",
            "पंथ श्री हुजूर प्रमोद गुरु बालापीर नाम साहेब, ",
            "पंथ श्री हुजूर केवल नाम साहेब, ",
            "पंथ श्री हुजूर अमोल नाम साहेब, ",
            "पंथ श्री हुजूर सुरति सनेही नाम साहेब, ",
            "पंथ श्री हुजूर हक्क नाम साहेब, ",
            "पंथ श्री हुजूर पाक नाम साहेब, ",
            "पंथ श्री हुजूर प्रगट नाम साहेब, ",
            "पंथ श्री हुजूर धीरज नाम साहेब, ",
            "पंथ श्री हुजूर उग्रनाम साहेब, ",
            "पंथ श्री हुजूर दया नाम साहेब, ",
            "पंथ श्री हुजूर गृन्धमुनि नाम साहेब, ",
            "पंथ श्री हुजूर प्रकाशमुनि नाम साहेब, ",
            "पंथ श्री हुजूर उदितमुनि नाम साहेब, ",
            "चार गुरु वंश ब्यालीस के चरण कमलों में अथ बृहत पूनो महात्म्य पाठ की पायलगि बंदगी।"
          ],
          pb: [
            "।। ਸਤਯਨਾਮ ।।",
            "ਸਤਯਨਾਮ ਸਾਹੇਬ, ",
            "ਸਤਯਸੁਕ੍ਰਿਤ ਸਾਹੇਬ, ",
            "ਆਦਿ ਅਦਲੀ ਸਾਹੇਬ, ",
            "ਅਜਰ ਅਚਿੰਤ ਸਾਹੇਬ, ",
            "ਪੁਰੁਸ਼ ਮੁਨਿੰਦ੍ਰ ਸਾਹੇਬ, ",
            "ਕਰੁਣਾਮਯ ਸਾਹੇਬ, ",
            "ਕਬੀਰ ਸਾਹੇਬ, ",
            "ਸੁਰਤਿਯੋਗ ਸੰਤਾਯਨ ਸਾਹੇਬ, ",
            "ਧਨੀ ਧਰਮਦਾਸ ਸਾਹੇਬ, ",
            "ਵਚਨ ਵੰਸ਼ ਚੂਰਾਮਣਿ ਨਾਮ ਸਾਹੇਬ, ",
            "ਪੰਥ ਸ਼੍ਰੀ ਹੁਜ਼ੂਰ ਸੁਦਰਸ਼ਨ ਨਾਮ ਸਾਹੇਬ, ",
            "ਪੰਥ ਸ਼੍ਰੀ ਹੁਜ਼ੂਰ ਕੁਲਪਤਿ ਨਾਮ ਸਾਹੇਬ, ",
            "ਪੰਥ ਸ਼੍ਰੀ ਹੁਜ਼ੂਰ ਪ੍ਰਮੋਦ ਗੁਰੂ ਬਾਲਾਪੀਰ ਨਾਮ ਸਾਹੇਬ, ",
            "ਪੰਥ ਸ਼੍ਰੀ ਹੁਜ਼ੂਰ ਕੇਵਲ ਨਾਮ ਸਾਹੇਬ, ",
            "ਪੰਥ ਸ਼੍ਰੀ ਹੁਜ਼ੂਰ ਅਮੋਲ ਨਾਮ ਸਾਹੇਬ, ",
            "ਪੰਥ ਸ਼੍ਰੀ ਹੁਜ਼ੂਰ ਸੁਰਤਿ ਸਨੇਹੀ ਨਾਮ ਸਾਹੇਬ, ",
            "ਪੰਥ ਸ਼੍ਰੀ ਹੁਜ਼ੂਰ ਹੱਕ ਨਾਮ ਸਾਹੇਬ, ",
            "ਪੰਥ ਸ਼੍ਰੀ ਹੁਜ਼ੂਰ ਪਾਕ ਨਾਮ ਸਾਹੇਬ, ",
            "ਪੰਥ ਸ਼੍ਰੀ ਹੁਜ਼ੂਰ ਪ੍ਰਗਟ ਨਾਮ ਸਾਹੇਬ, ",
            "ਪੰਥ ਸ਼੍ਰੀ ਹੁਜ਼ੂਰ ਧੀਰਜ ਨਾਮ ਸਾਹੇਬ, ",
            "ਪੰਥ ਸ਼੍ਰੀ ਹੁਜ਼ੂਰ ਉਗ੍ਰਨਾਮ ਸਾਹੇਬ, ",
            "ਪੰਥ ਸ਼੍ਰੀ ਹੁਜ਼ੂਰ ਦਯา ਨਾਮ ਸਾਹੇਬ, ",
            "ਪੰਥ ਸ਼੍ਰੀ ਹੁਜ਼ੂਰ ਗ੍ਰਿੰਧਮੁਨਿ ਨਾਮ ਸਾਹੇਬ, ",
            "ਪੰਥ ਸ਼੍ਰੀ ਹੁਜ਼ੂਰ ਪ੍ਰਕਾਸ਼ਮੁਨਿ ਨਾਮ ਸਾਹੇਬ, ",
            "ਪੰਥ ਸ਼੍ਰੀ ਹੁਜ਼ੂਰ ਉਦਿਤਮੁਨਿ ਨਾਮ ਸਾਹੇਬ, ",
            "ਚਾਰ ਗੁਰੂ ਵੰਸ਼ ਬ੍ਯਾਲੀਸ ਕੇ ਚਰਣ ਕਮਲੋਂ ਮੇਂ ਅਥ ਬ੍ਰਿਹਤ ਪੂਨੋ ਮਹਾਤਮਯ ਪਾਠ ਕੀ ਪਾਯਲਗਿ ਬੰਦਗੀ।"
          ],
          en: [
            "|| Satyanam ||",
            "Satyanam Saheb, ",
            "Satyasukrit Saheb, ",
            "Aadi Adli Saheb, ",
            "Ajar Achint Saheb, ",
            "Purush Munindra Saheb, ",
            "Karunamay Saheb, ",
            "Kabeer Saheb, ",
            "Suratiyog Santayan Saheb, ",
            "Dhani Dharmdaas Saheb, ",
            "Vachan Vansh Chooramani Nam Saheb, ",
            "Panth Shri Huzur Sudarshan Nam Saheb, ",
            "Panth Shri Huzur Kulapati Nam Saheb, ",
            "Panth Shri Huzur Pramod Guru Balapeer Nam Saheb, ",
            "Panth Shri Huzur Keval Nam Saheb, ",
            "Panth Shri Huzur Amol Nam Saheb, ",
            "Panth Shri Huzur Surati Sanehi Nam Saheb, ",
            "Panth Shri Huzur Haq Nam Saheb, ",
            "Panth Shri Huzur Paak Nam Saheb, ",
            "Panth Shri Huzur Pragat Nam Saheb, ",
            "Panth Shri Huzur Dheeraj Nam Saheb, ",
            "Panth Shri Huzur Ugranam Saheb, ",
            "Panth Shri Huzur Daya Nam Saheb, ",
            "Panth Shri Huzur Grindhamuni Nam Saheb, ",
            "Panth Shri Huzur Prakashmuni Nam Saheb, ",
            "Panth Shri Huzur Uditmuni Nam Saheb, ",
            "Chaar guru vansh byalis ke charan kamalon mein Ath Brihat Poono Mahatmya path ki payalgi bandgi."
          ]
        },
        bhavarth: {
          hi: "सत्यपुरुष साहेब, आदि गुरु कबीर साहेब, धनी धर्मदास साहेब और उनके पावन ब्यालीस वंश गुरुओं की पवित्र गुरु-परम्परा के श्रीचरणों में 'बृहत पूनो महात्म्य' पाठ के शुभारंभ की विनम्र पायलगि व साहेब बंदगी साहेब।",
          pb: "ਸਤਿਪੁਰਖ ਸਾਹੇਬ, ਆਦਿ ਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ, ਧਨੀ ਧਰਮਦਾਸ ਸਾਹੇਬ ਅਤੇ ਉਹਨਾਂ ਦੀ ਪਵਿੱਤਰ ਬਿਆਲੀਸ ਵੰਸ਼ ਗੁਰੂ-ਪਰੰਪਰਾ ਦੇ ਚਰਨ ਕਮਲਾਂ ਵਿੱਚ 'ਬਰਿਹਤ ਪੂਨੋ ਮਹਾਤਮਯ' ਪਾਠ ਦੇ ਸ਼ੁਰੂਆਤ ਦੀ ਬੰਦਗੀ।",
          en: "Humble prostrations at the lotus feet of the Primal Supreme Being, Satguru Kabir, Dhani Dharmadas, and the complete 42 Vansh lineage before starting the sacred Brihat Poonam Mahatmya discourse."
        }
      },
      ...POONAM_VERSES_PART_1,
      ...POONAM_VERSES_PART_2
    ]
  },
  {
    id: "poonam-kahra-mangal",
    majorCategoryId: "poonam-mahatmya",
    majorCategoryTitle: {
      hi: "४. पूनो महात्म्य पाठ",
      pb: "੪. ਪੂਨੋ ਮਹਾਤਮਯ ਪਾਠ",
      en: "4. Full Moon Discourse (Poonam Mahatmya Path)"
    },
    subGroup: "पूनो महात्म्य",
    title: {
      hi: "कहरा एवं मंगल (पूनम पद)",
      pb: "ਕਹਰਾ ਅਤੇ ਮੰਗਲ (ਪੂਨਮ ਪਦ)",
      en: "Kahra & Mangal (Poonam Sacred Verses)"
    },
    subtitle: {
      hi: "कहरा छंद एवं आनंद मंगल गान",
      pb: "ਕਹਰਾ ਛੰਦ ਅਤੇ ਮੰਗਲ ਗੀਤ",
      en: "Joyous Mangal Hymns of Full Moon"
    },
    iconName: "Music",
    estimatedMinutes: 8,
    totalVerses: 14,
    verses: [
      ...POONAM_KAHRA_VERSES,
      ...POONAM_MANGAL_VERSES
    ]
  },
  {
    id: "poonam-laghu-barsait",
    majorCategoryId: "poonam-mahatmya",
    majorCategoryTitle: {
      hi: "४. पूनो महात्म्य पाठ",
      pb: "੪. ਪੂਨੋ ਮਹਾਤਮਯ ਪਾਠ",
      en: "4. Full Moon Discourse (Poonam Mahatmya Path)"
    },
    subGroup: "पूनो महात्म्य",
    title: {
      hi: "लघु पूनो, पूनम साधन सुमिरण एवं बरसाइत महात्म्य",
      pb: "ਲਘੂ ਪੂਨੋ, ਪੂਨਮ ਸਾਧਨ ਸੁਮਿਰਨ ਅਤੇ ਬਰਸਾਇਤ ਬਹਸਤਮਯ",
      en: "Laghu Poonam, Sadhan Sumiran & Barsait Mahatmya"
    },
    subtitle: {
      hi: "संक्षिप्त पूनो महात्म्य, साधन विधि एवं वार्षिक बरसाइत महात्म्य",
      pb: "ਪੂਨਮ ਸਾਧਨਾ ਅਤੇ ਬਰਸਾਇਤ ਮਹਾਤਮਯ",
      en: "Short Poonam Discourse, Sumiran & Annual Barsait Praise"
    },
    iconName: "Scroll",
    estimatedMinutes: 28,
    totalVerses: 28,
    verses: [
      ...POONAM_LAGHU_VERSES,
      ...POONAM_BARSAIT_VERSES
    ]
  }
];
