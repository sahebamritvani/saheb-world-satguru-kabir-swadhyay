import { MasterGranth } from './granthTypes';

export const SHABDAWALI_GRANTH: MasterGranth = {
  id: 'shabdawali-granth',
  slug: 'shabdawali',
  title: {
    hi: 'शब्दावली ग्रंथ (राग व पद संग्रह)',
    pb: 'ਸ਼ਬਦਾਵਲੀ ਗ੍ਰੰਥ (ਰਾਗ ਤੇ ਪਦ ਸੰਗ੍ਰਹਿ)',
    en: 'Shabdawali Granth (Sacred Hymns & Ragas)',
  },
  shortTitle: {
    hi: 'शब्दावली',
    pb: 'ਸ਼ਬਦਾਵਲੀ',
    en: 'Shabdawali',
  },
  subtitle: {
    hi: 'सतगुरु कबीर साहेब के रागबद्ध अलौकिक आध्यात्मिक पद एवं भजन',
    pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੇ ਰਾਗਬੱਧ ਅਧਿਆਤਮਕ ਸ਼ਬਦ ਤੇ ਭਜਨ',
    en: 'Musical and Spiritual Hymns of Satguru Kabir Saheb',
  },
  category: 'shabda',
  iconName: 'Music',
  bannerColor: 'from-amber-700 to-indigo-900',
  accentColor: 'text-amber-700',
  totalChapters: 4,
  estimatedHours: {
    hi: '१५ घण्टे स्वाध्याय',
    pb: '੧੫ ਘੰਟੇ ਅਧਿਐਨ',
    en: '15 Hours Study',
  },
  description: {
    hi: 'सतगुरु कबीर साहेब की पावन रागबद्ध शब्दावली व पदों का अलौकिक संग्रह।',
    pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਪਾਵਨ ਰਾਗਬੱਧ ਸ਼ਬਦਾਵਲੀ ਤੇ ਪਦਾਂ ਦਾ ਦੈਵੀ ਸੰਗ੍ਰਹਿ।',
    en: 'Sacred compilation of spiritual musical hymns and verses by Satguru Kabir Saheb.',
  },
  chapters: [
    {
      id: 'shabdawali-ch-1',
      chapterNumber: 1,
      title: {
        hi: 'राग गौड़ी एवं चेतावनी पद',
        pb: 'ਰਾਗ ਗੌੜੀ ਤੇ ਚੇਤਾਵਨੀ ਪਦ',
        en: 'Raag Gaudi & Awakening Verses',
      },
      subtitle: {
        hi: 'संसार की नश्वरता एवं आत्मा का बोध',
        pb: 'ਸੰਸਾਰ ਦੀ ਨਾਸ਼ਵਾਨਤਾ ਤੇ ਆਤਮਾ ਦਾ ਬੋਧ',
        en: 'Transience of World and Awakening of Soul',
      },
      description: {
        hi: 'जीव को मोह-निद्रा से जगाने वाले पावन पद।',
        pb: 'ਜੀਵ ਨੂੰ ਮੋਹ ਦੀ ਨੀਂਦ ਤੋਂ ਜਗਾਉਣ ਵਾਲੇ ਪਾਵਨ ਸ਼ਬਦ।',
        en: 'Sacred verses awakening the soul from the slumber of delusion.',
      },
      verses: [
        {
          id: 'shabdawali-v-1',
          type: 'shabad',
          lines: {
            hi: [
              'माया महा ठगनी हम जानी।',
              'तिरगुन फांस लिए कर डोलै, बोलै मधुरी बानी।।'
            ],
            pb: [
              'ਮਾਇਆ ਮਹਾ ਠਗਨੀ ਹਮ ਜਾਨੀ।',
              'ਤਿਰਗੁਨ ਫਾਂਸ ਲਿਏ ਕਰ ਡੋਲੈ, ਬੋਲੈ ਮਧੁਰੀ ਬਾਨੀ।।'
            ],
            en: [
              'Maya maha thagani hum jaani.',
              'Tiragun phaans liye kar dolai, bolai madhuri baani..'
            ]
          },
          bhavarth: {
            hi: 'सतगुरु कबीर साहेब बताते हैं कि यह सांसारिक माया महाठगनी है। यह तीनों गुणों (सत्व, रज, तम) का फंदा हाथ में लिए घूमती है और अत्यंत मधुर वचनों से जीव को फंसा लेती है।',
            pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ ਕਿ ਮਾਇਆ ਬਹੁਤ ਵੱਡੀ ਠੱਗਣੀ ਹੈ ਜੋ ਮਿੱਠੇ ਬਚਨ ਬੋਲ ਕੇ ਜੀਵ ਨੂੰ ਤਿੰਨਾਂ ਗੁਣਾਂ ਦੇ ਜਾਲ ਵਿੱਚ ਫਸਾ ਲੈਂਦੀ ਹੈ।',
            en: 'Satguru Kabir Saheb warns: Maya is a master illusionist. Holding the trap of the three gunas, she speaks sweet words to entrap worldly minds.'
          },
          contemplation: {
            hi: 'माया के बाह्य आकर्षण से सावधान रहकर अंतर में सत्यनाम का सुमिरन करना ही मुक्ति का मार्ग है।',
            pb: 'ਮਾਇਆ ਦੇ ਮੋਹ ਤੋਂ ਬਚ ਕੇ ਨਾਮ ਸਿਮਰਨ ਕਰੋ।',
            en: 'Stay vigilant against the lures of illusion; anchor yourself in the inner Divine Name.'
          }
        }
      ]
    }
  ]
};
