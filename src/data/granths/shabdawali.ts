import { MasterGranth } from './granthTypes';
import { enrichVerseWith5Steps } from '../../utils/verseEnricher';

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
    pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੇ ਰਾਗਬੱਧ ਅਧਿਆਤਮਕ ਸ਼ਬਦ ਤੇ ਭਜਨ',
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
        hi: '१. राग गौड़ी एवं चेतावनी पद',
        pb: '੧. ਰਾਗ ਗੌੜੀ ਤੇ ਚੇਤਾਵਨੀ ਪਦ',
        en: '1. Raag Gaudi & Awakening Verses',
      },
      subtitle: {
        hi: 'संसार की नश्वरता एवं आत्मा का बोध',
        pb: 'ਸੰਸਾਰ ਦੀ ਨਾਸ਼ਵਾਨਤਾ ਤੇ ਆਤਮਾ ਦਾ ਬੋਧ',
        en: 'Transience of World and Awakening of Soul',
      },
      description: {
        hi: 'जीव को मोह-निद्रा से जगाने वाले पावन पद।',
        pb: 'ਜੀਵ ਨੂੰ ਮੋਹ ਦੀ ਨੀਂਦ ਤੋਂ ਜਗਾਉਣ ਵਾਲੇ ਪਾਵਨ ਸ਼ਬਦ।',
        en: 'Sacred verses awakening the soul from the slumber of delusion.',
      },
      verses: [
        enrichVerseWith5Steps(
          {
            id: 'shabdawali-v-1',
            type: 'shabad',
            lines: {
              hi: ['माया महा ठगनी हम जानी।', 'तिरगुन फांस लिए कर डोलै, बोलै मधुरी बानी॥'],
              pb: ['ਮਾਇਆ ਮਹਾ ਠਗਨੀ ਹਮ ਜਾਨੀ।', 'ਤਿਰਗੁਨ ਫਾਂਸ ਲਿਏ ਕਰ ਡੋਲੈ, ਬੋਲੈ ਮਧੁਰੀ ਬਾਣੀ॥'],
              en: ['I recognize Maya now as the master illusionist.', 'Holding the snare of the three gunas, she speaks sweet enticing words.'],
            },
            bhavarth: {
              hi: 'सतगुरु कबीर साहेब बताते हैं कि यह सांसारिक माया महाठगनी है। यह तीनों गुणों (सत्व, रज, तम) का फंदा हाथ में लिए घूमती है और अत्यंत मधुर वचनों से जीव को फंसा लेती है।',
              pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ ਕਿ ਮਾਇਆ ਬਹੁਤ ਵੱਡੀ ਠੱਗਣੀ ਹੈ ਜੋ ਮਿੱਠੇ ਬਚਨ ਬੋਲ ਕੇ ਜੀਵ ਨੂੰ ਤਿੰਨਾਂ ਗੁਣਾਂ ਦੇ ਜਾਲ ਵਿੱਚ ਫਸਾ ਲੈਂਦੀ ਹੈ।',
              en: 'Satguru Kabir Saheb warns that Maya lures worldly minds with sweet attractions to bind them in the three gunas.',
            },
            contemplation: {
              hi: 'माया के बाह्य आकर्षण से सावधान रहकर अंतर में सत्यनाम का सुमिरन करना ही मुक्ति का मार्ग है।',
              pb: 'ਮਾਇਆ ਦੇ ਮੋਹ ਤੋਂ ਬਚ ਕੇ ਸਤਯਨਾਮ ਸਿਮਰਨ ਕਰੋ।',
              en: 'Stay vigilant against worldly lures and anchor awareness in inner Satyanaam.',
            },
          },
          'राग गौड़ी एवं चेतावनी पद'
        ),
        enrichVerseWith5Steps(
          {
            id: 'shabdawali-v-2',
            type: 'shabad',
            lines: {
              hi: ['जागो रे नर सोवत काहै, बीती उमरिया सब बातन में।', 'सत्यनाम बिन मुकति न होई, पड़िहौ काल की घातन में॥'],
              pb: ['ਜਾਗੋ ਰੇ ਨਰ ਸੋਵਤ ਕਾਹੇ, ਬੀਤੀ ਉਮਰੀਆ ਸਭ ਬਾਤਨ ਮੇਂ।', 'ਸਤਯਨਾਮ ਬਿਨ ਮੁਕਤਿ ਨ ਹੋਈ, ਪੜਿਹੌ ਕਾਲ ਕੀ ਘਾਤਨ ਮੇਂ॥'],
              en: ['Awaken, O seeker! Why slumber while precious life slips away in idle chatter?', 'Without Satyanaam there is no liberation from the snare of time.'],
            },
            bhavarth: {
              hi: 'सतगुरु चेतना देते हैं कि व्यर्थ की चर्चा और मोह की नींद त्यागकर अभी से सत्यनाम के स्मरण में जाग जाना चाहिए।',
              pb: 'ਸਤਿਗੁਰੂ ਸੁਚੇਤ ਕਰਦੇ ਹਨ ਕਿ ਵਿਅਰਥ ਗੱਲਾਂ ਛੱਡ ਕੇ ਹੁਣੇ ਸਤਯਨਾਮ ਸਿਮਰਨ ਵਿੱਚ ਜਾਗ ਜਾਣਾ ਚਾਹੀਦਾ ਹੈ।',
              en: 'Satguru Kabir urges seekers to leave heedless sleep behind and awaken to Satyanaam right now.',
            },
          },
          'राग गौड़ी एवं चेतावनी पद'
        ),
      ],
    },
    {
      id: 'shabdawali-ch-2',
      chapterNumber: 2,
      title: {
        hi: '२. राग आसावरी एवं सतगुरु-महिमा पद',
        pb: '੨. ਰਾਗ ਆਸਾਵਰੀ ਤੇ ਸਤਿਗੁਰੂ-ਮਹਿਮਾ ਪਦ',
        en: '2. Raag Asawari & Glory of Satguru',
      },
      subtitle: {
        hi: 'सतगुरु चरणों की शरणागति एवं कृपा-वर्षा',
        pb: 'ਸਤਿਗੁਰੂ ਚਰਨਾਂ ਦੀ ਸ਼ਰਣਾਗਤੀ ਤੇ ਕਿਰਪਾ',
        en: 'Surrender & Grace of the True Master',
      },
      description: {
        hi: 'सतगुरु की महिमा एवं ज्ञान-दीपक प्रज्वलित करने वाले पद।',
        pb: 'ਸਤਿਗੁਰੂ ਦੀ ਮਹਿਮਾ ਅਤੇ ਗਿਆਨ ਦਾ ਦੀਵਾ ਜਗਾਉਣ ਵਾਲੇ ਸ਼ਬਦ।',
        en: 'Hymns praising the Satguru who lights the inner lamp of truth.',
      },
      verses: [
        enrichVerseWith5Steps(
          {
            id: 'shabdawali-v-3',
            type: 'shabad',
            lines: {
              hi: ['सतगुरु सवाँ कोई सगा न साईं, ता सम और न दाता।', 'सत्यनाम दे अटल अभय पद, काटे कर्म विधाता॥'],
              pb: ['ਸਤਿਗੁਰੂ ਸਵਾਂ ਕੋਈ ਸਗਾ ਨ ਸਾਈਂ, ਤਾ ਸਮ ਔਰ ਨ ਦਾਤਾ।', 'ਸਤਯਨਾਮ ਦੇ ਅਟੱਲ ਅਭੈ ਪਦ, ਕਾਟੇ ਕਰਮ ਬਿਧਾਤਾ॥'],
              en: ['None is as true a kin or benefactor as the Satguru;', 'Bestowing Satyanaam and the fearless state, He cuts away karmic bondage.'],
            },
            bhavarth: {
              hi: 'संसार में पूर्ण सतगुरु के समान कोई हितैषी नहीं है, क्योंकि वे बिना किसी स्वार्थ के जीव को सत्यनाम का दान देकर अभय कर देते हैं।',
              pb: 'ਸੰਸਾਰ ਵਿੱਚ ਪੂਰਨ ਸਤਿਗੁਰੂ ਵਰਗਾ ਕੋਈ ਹਿਤੈਸ਼ੀ ਨਹੀਂ, ਜੋ ਸਤਯਨਾਮ ਬਖਸ਼ ਕੇ ਜੀਵ ਨੂੰ ਨਿਰਭਉ ਕਰ ਦਿੰਦੇ ਹਨ।',
              en: 'No friend equals the True Guru, who freely bestows Satyanaam and eternal fearlessness.',
            },
          },
          'राग आसावरी एवं सतगुरु-महिमा पद'
        ),
      ],
    },
    {
      id: 'shabdawali-ch-3',
      chapterNumber: 3,
      title: {
        hi: '३. राग भैरवी एवं विरह-सुमिरन पद',
        pb: '੩. ਰਾਗ ਭੈਰਵੀ ਤੇ ਬਿਰਹਾ-ਸਿਮਰਨ ਪਦ',
        en: '3. Raag Bhairavi & Devotional Longing',
      },
      subtitle: {
        hi: 'प्रीतम मिलन की तड़प एवं शांत अंतःकरण',
        pb: 'ਪ੍ਰੀਤਮ ਮਿਲਾਪ ਦੀ ਤੜਪ ਤੇ ਸ਼ਾਂਤ ਹਿਰਦਾ',
        en: 'Heartfelt Longing & Peaceful Devotion',
      },
      description: {
        hi: 'प्रातः एवं संध्या बेला में गाये जाने वाले राग भैरवी के मधुर पद।',
        pb: 'ਅੰਮ੍ਰਿਤਵੇਲੇ ਤੇ ਸੰਧਿਆ ਸਮੇਂ ਗਾਏ ਜਾਣ ਵਾਲੇ ਰਾਗ ਭੈਰਵੀ ਦੇ ਮਧੁਰ ਸ਼ਬਦ।',
        en: 'Soulful Bhairavi hymns sung during dawn and twilight contemplation.',
      },
      verses: [
        enrichVerseWith5Steps(
          {
            id: 'shabdawali-v-4',
            type: 'shabad',
            lines: {
              hi: ['नैना अंतर आव तु, ज्यों हों नैन झँपेउ।', 'ना हौं देखौं और को, ना तुझ देखन देउ॥'],
              pb: ['ਨੈਨਾ ਅੰਤਰ ਆਵ ਤੂ, ਜਿਉਂ ਹੋਂ ਨੈਨ ਝੰਪੇਉ।', 'ਨਾ ਹੋਂ ਦੇਖੋਂ ਔਰ ਕੋ, ਨਾ ਤੁਝ ਦੇਖਨ ਦੇਉ॥'],
              en: ['Enter within my eyes the moment I close my eyelids in stillness;', 'Neither shall I gaze upon another, nor let my attention stray from You.'],
            },
            bhavarth: {
              hi: 'साधक अपने हृदय और नेत्रों को केवल साहेब के प्रेम में एकाग्र करने की प्रार्थना करता है, ताकि भीतर एकनिष्ठ प्रीति बनी रहे।',
              pb: 'ਸਾਧਕ ਆਪਣੇ ਹਿਰਦੇ ਅਤੇ ਨੈਣਾਂ ਨੂੰ ਕੇਵਲ ਸਾਹੇਬ ਦੇ ਪ੍ਰੇਮ ਵਿੱਚ ਇਕਾਗਰ ਕਰਨ ਦੀ ਅਰਦਾਸ ਕਰਦਾ ਹੈ।',
              en: 'The devotee invites the Beloved into silent inner vision with undivided love.',
            },
          },
          'राग भैरवी एवं विरह-सुमिरन पद'
        ),
      ],
    },
    {
      id: 'shabdawali-ch-4',
      chapterNumber: 4,
      title: {
        hi: '४. राग रामकली एवं सत्यनाम भजन पद',
        pb: '੪. ਰਾਗ ਰਾਮਕਲੀ ਤੇ ਸਤਯਨਾਮ ਭਜਨ ਪਦ',
        en: '4. Raag Ramkali & Satyanaam Hymns',
      },
      subtitle: {
        hi: 'निःअक्षर सत्यनाम और अमरलोक संदेश',
        pb: 'ਨਿਃਅੱਖਰ ਸਤਯਨਾਮ ਤੇ ਅਮਰਲੋਕ ਸੰਦੇਸ਼',
        en: 'Unstruck Satyanaam & Amar Lok Revelations',
      },
      description: {
        hi: 'सत्यनाम की अखंड महिमा और घट के भीतर दिव्य प्रकाश के पद।',
        pb: 'ਸਤਯਨਾਮ ਦੀ ਅਖੰਡ ਮਹਿਮਾ ਤੇ ਅੰਦਰਲੇ ਦਿਵਯ ਪ੍ਰਕਾਸ਼ ਦੇ ਸ਼ਬਦ।',
        en: 'Sacred hymns celebrating eternal Satyanaam and inner radiance.',
      },
      verses: [
        enrichVerseWith5Steps(
          {
            id: 'shabdawali-v-5',
            type: 'shabad',
            lines: {
              hi: ['सत्यनाम के सुमिरने, मिटि गई सकल बलाय।', 'घट भीतर दीपक जलै, अमर लोक को जाय॥'],
              pb: ['ਸਤਯਨਾਮ ਕੇ ਸਿਮਰਨੇ, ਮਿਟਿ ਗਈ ਸਕਲ ਬਲਾਇ।', 'ਘਟ ਭੀਤਰ ਦੀਪਕ ਜਲੈ, ਅਮਰ ਲੋਕ ਕੋ ਜਾਇ॥'],
              en: ['By remembering Satyanaam, every affliction and shadow dissolves;', 'The inner lamp ignites within the heart, guiding the soul to Amar Lok.'],
            },
            bhavarth: {
              hi: 'सत्यनाम का सुमिरन समस्त भय व विकारों को मिटाकर अंतःकरण में ज्ञान का प्रकाश फैलाता है और अमरलोक का मार्ग प्रशस्त करता है।',
              pb: 'ਸਤਯਨਾਮ ਦਾ ਸਿਮਰਨ ਸਾਰੇ ਭੈਅ ਮਿਟਾ ਕੇ ਹਿਰਦੇ ਵਿੱਚ ਗਿਆਨ ਦਾ ਦੀਵਾ ਜਗਾਉਂਦਾ ਹੈ ਅਤੇ ਅਮਰਲੋਕ ਦਾ ਰਾਹ ਖੋਲ੍ਹਦਾ ਹੈ।',
              en: 'Remembrance of Satyanaam clears inner shadows, kindles wisdom, and illuminates the path to Amar Lok.',
            },
          },
          'राग रामकली एवं सत्यनाम भजन पद'
        ),
      ],
    },
  ],
};
