import { MasterGranth, GranthVerse } from './granthTypes';
import { enrichVerseWith5Steps } from '../../utils/verseEnricher';

const BIJAK_SECTIONS = [
  { title: 'बीजक महिमा', pbTitle: 'ਬੀਜਕ ਮਹਿਮਾ', enTitle: 'Bijak Mahima', count: 1, type: 'mangal' as const },
  { title: 'रमैनी', pbTitle: 'ਰਮੈਨੀ', enTitle: 'Ramaini', count: 84, type: 'ramaini' as const },
  { title: 'सबद', pbTitle: 'ਸਬਦ', enTitle: 'Shabad', count: 144, type: 'shabad' as const },
  { title: 'ज्ञान चौंतीसा', pbTitle: 'ਗਿਆਨ ਚੌਂਤੀਸਾ', enTitle: 'Gyan Chautisa', count: 7, type: 'pada' as const },
  { title: 'विप्रमतिसी', pbTitle: 'ਵਿਪ੍ਰਮਤੀਸੀ', enTitle: 'Vipramatisi', count: 3, type: 'pada' as const },
  { title: 'कहरा', pbTitle: 'ਕਹਰਾ', enTitle: 'Kahara', count: 12, type: 'pada' as const },
  { title: 'बसन्त', pbTitle: 'ਬਸੰਤ', enTitle: 'Basant', count: 12, type: 'pada' as const },
  { title: 'चांचर', pbTitle: 'ਚਾਂਚਰ', enTitle: 'Chanchar', count: 2, type: 'pada' as const },
  { title: 'बेलि', pbTitle: 'ਬੇਲਿ', enTitle: 'Beli', count: 2, type: 'pada' as const },
  { title: 'बिरहुली', pbTitle: 'ਬਿਰਹੁਲੀ', enTitle: 'Birahuli', count: 1, type: 'pada' as const },
  { title: 'हिण्डौला', pbTitle: 'ਹਿੰਡੌਲਾ', enTitle: 'Hindola', count: 3, type: 'pada' as const },
  { title: 'साखी', pbTitle: 'ਸਾਖੀ', enTitle: 'Sakhi', count: 353, type: 'sakhi' as const },
];

const BIJAK_SECTION_VERSES: Record<string, GranthVerse[]> = {
  'बीजक महिमा': [
    {
      id: 'bijak-mahima-1',
      type: 'mangal',
      lines: {
        hi: [
          'बीजक बतावै वित्त को, जो बित्त गुप्त होय।',
          'ऐसो बचन कबीर को, बूझै बिरला कोय॥',
        ],
        pb: [
          'ਬੀਜਕ ਬਤਾਵੈ ਵਿੱਤ ਕੋ, ਜੋ ਵਿੱਤ ਗੁਪਤ ਹੋਇ।',
          'ਐਸੋ ਬਚਨ ਕਬੀਰ ਕੋ, ਬੂਝੈ ਬਿਰਲਾ ਕੋਇ॥',
        ],
        en: [
          'The Bijak points directly to the hidden spiritual treasure of the Self.',
          'Only a rare awakened seeker fathoms these living words of Satguru Kabir Saheb.',
        ],
      },
      bhavarth: {
        hi: 'जिस प्रकार गुप्त धन का संकेत-पत्र (बीजक) खजाने का पता बताता है, उसी प्रकार श्री कबीर बीजक ग्रंथ मनुष्य के अपने ही घट में छिपे सत्यनाम रूपी अमूल्य धन का मार्ग दिखाता है।',
        pb: 'ਜਿਵੇਂ ਗੁਪਤ ਖ਼ਜ਼ਾਨੇ ਦਾ ਨਕਸ਼ਾ (ਬੀਜਕ) ਧਨ ਦਾ ਪਤਾ ਦੱਸਦਾ ਹੈ, ਤਿਵੇਂ ਸ੍ਰੀ ਕਬੀਰ ਬੀਜਕ ਗ੍ਰੰਥ ਹਿਰਦੇ ਅੰਦਰ ਛੁਪੇ ਸਤਯਨਾਮ ਖ਼ਜ਼ਾਨੇ ਦਾ ਮਾਰਗ ਦਿਖਾਉਂਦਾ ਹੈ।',
        en: 'Like a treasure key revealing buried wealth, Bijak points directly to the eternal treasure of Satyanaam hidden inside the human heart.',
      },
    },
  ],
  'रमैनी': [
    {
      id: 'bijak-ramaini-1',
      type: 'ramaini',
      lines: {
        hi: [
          'आदि रमैनी आत्म बोध, बूझै कोई संत।',
          'बिन बुझे भटकत फिरे, पावै नहीं अंत॥',
        ],
        pb: [
          'ਆਦਿ ਰਮੈਨੀ ਆਤਮ ਬੋਧ, ਬੂਝੈ ਕੋਈ ਸੰਤ।',
          'ਬਿਨ ਬੁਝੇ ਭਟਕਤ ਫਿਰੇ, ਪਾਵੈ ਨਹੀਂ ਅੰਤ॥',
        ],
        en: [
          'The primordial Ramaini is Self-realization, fathomed by rare saints.',
          'Without inner understanding, souls wander endlessly without finding peace.',
        ],
      },
      bhavarth: {
        hi: 'रमैनी का अर्थ घट में रमे हुए आत्म-तत्त्व और सत्यनाम का ज्ञान है। जो इसे सतगुरु की शरण में नहीं समझता, वह संसार में भटकता रहता है।',
        pb: 'ਰਮੈਨੀ ਦਾ ਅਰਥ ਆਤਮ-ਗਿਆਨ ਅਤੇ ਸਤਯਨਾਮ ਦਾ ਬੋਧ ਹੈ। ਜੋ ਇਸਨੂੰ ਨਹੀਂ ਸਮਝਦਾ, ਉਹ ਸੰਸਾਰ ਵਿੱਚ ਭਟਕਦਾ ਰਹਿੰਦਾ ਹੈ।',
        en: 'Ramaini unveils the all-pervading Self and Satyanaam; without this realization one wanders in illusion.',
      },
    },
    {
      id: 'bijak-ramaini-2',
      type: 'ramaini',
      lines: {
        hi: [
          'गुरु कुम्हार सिष कुंभ है, गढ़ि गढ़ि काढ़ै खोट।',
          'अंतर हाथ सहार दै, बाहर बाहै चोट॥',
        ],
        pb: [
          'ਗੁਰੂ ਕੁਮ੍ਹਾਰ ਸਿਖ ਕੁੰਭ ਹੈ, ਗੜ੍ਹਿ ਗੜ੍ਹਿ ਕਾਢੈ ਖੋਟ।',
          'ਅੰਤਰ ਹਾਥ ਸਹਾਰ ਦੈ, ਬਾਹਰ ਬਾਹੈ ਚੋਟ॥',
        ],
        en: [
          'The Satguru is the master potter and the seeker is the earthen vessel being shaped;',
          'Supporting gently from within with one hand while tapping away flaws from outside.',
        ],
      },
      bhavarth: {
        hi: 'सतगुरु शिष्य के मन की खोट निकालने के लिए अनुशासन की चोट तो लगाते हैं, किंतु भीतर से अपनी करुणा का हाथ भी सदा संभाले रखते हैं।',
        pb: 'ਸਤਿਗੁਰੂ ਸਿੱਖ ਦੇ ਮਨ ਦੇ ਔਗੁਣ ਕੱਢਣ ਲਈ ਅਨੁਸ਼ਾਸਨ ਦੀ ਚੋਟ ਲਾਉਂਦੇ ਹਨ, ਪਰ ਅੰਦਰੋਂ ਕਿਰਪਾ ਦਾ ਹੱਥ ਸਦਾ ਸੰਭਾਲੀ ਰੱਖਦੇ ਹਨ।',
        en: 'Like a wise potter, the Satguru refines outer flaws firmly while supporting the seeker tenderly from within.',
      },
    },
  ],
  'सबद': [
    {
      id: 'bijak-shabad-1',
      type: 'shabad',
      lines: {
        hi: [
          'मोको कहाँ ढूँढे रे बन्दे, मैं तो तेरे पास में।',
          'ना मैं देवल ना मैं मसजिद, ना काबे कैलास में॥',
        ],
        pb: [
          'ਮੋਕੋ ਕਹਾਂ ਢੂੰਢੇ ਰੇ ਬੰਦੇ, ਮੈਂ ਤੋ ਤੇਰੇ ਪਾਸ ਮੇਂ।',
          'ਨਾ ਮੈਂ ਦੇਵਲ ਨਾ ਮੈਂ ਮਸਜਿਦ, ਨਾ ਕਾਬੇ ਕੈਲਾਸ ਮੇਂ॥',
        ],
        en: [
          'Where do you search for Me, O seeker? I am right beside you within.',
          'Neither in temple nor mosque, neither in Kaaba nor Kailash.',
        ],
      },
      bhavarth: {
        hi: 'परमात्मा किसी बाहरी पत्थर या तीर्थ तक सीमित नहीं, बल्कि प्रत्येक जीव के अपने ही अंतःकरण व श्वास-श्वास में विद्यमान है।',
        pb: 'ਪਰਮਾਤਮਾ ਬਾਹਰੀ ਥਾਵਾਂ ਤੱਕ ਸੀਮਿਤ ਨਹੀਂ, ਸਗੋਂ ਹਰ ਜੀਵ ਦੇ ਅੰਦਰ ਹੀ ਵਿਦਮਾਨ ਹੈ।',
        en: 'The Divine is not confined to outer monuments; Truth abides right inside your own breath and consciousness.',
      },
    },
    {
      id: 'bijak-shabad-2',
      type: 'shabad',
      lines: {
        hi: [
          'माया महा ठगिनी हम जानी।',
          'तिरगुन फाँस लिए कर डोलै, बोलै मधुरी बानी॥',
        ],
        pb: [
          'ਮਾਇਆ ਮਹਾ ਠਗਿਨੀ ਹਮ ਜਾਨੀ।',
          'ਤਿਰਗੁਨ ਫਾਂਸ ਲੀਏ ਕਰ ਡੋਲੈ, ਬੋਲੈ ਮਧੁਰੀ ਬਾਣੀ॥',
        ],
        en: [
          'Now I recognize Maya, the master deceiver of the world;',
          'Holding the snare of the three gunas, she speaks enticingly sweet words.',
        ],
      },
      bhavarth: {
        hi: 'तीनों गुणों (सत्व, रज, तम) के बंधन में बाँधने वाली माया के मीठे प्रलोभनों से केवल विवेक और सत्यनाम सुमिरन ही रक्षा करता है।',
        pb: 'ਤਿੰਨਾਂ ਗੁਣਾਂ ਦੇ ਜਾਲ ਵਿੱਚ ਫਸਾਉਣ ਵਾਲੀ ਮਾਇਆ ਤੋਂ ਕੇਵਲ ਵਿਵੇਕ ਤੇ ਸਤਯਨਾਮ ਸਿਮਰਨ ਹੀ ਬਚਾਉਂਦਾ ਹੈ।',
        en: 'Only spiritual discernment and Satyanaam shield the seeker from Maya’s subtle snares.',
      },
    },
  ],
  'ज्ञान चौंतीसा': [
    {
      id: 'bijak-chautisa-1',
      type: 'pada',
      lines: {
        hi: [
          'कक्का किरन कमल मँह पावै, खख्खा खोजि खोजि लय लावै।',
          'गग्गा गुरु की बानी चीन्है, घघ्घा घट भीतर रस भीनै॥',
        ],
        pb: [
          'ਕੱਕਾ ਕਿਰਨ ਕਮਲ ਮਹਿ ਪਾਵੈ, ਖੱਖਾ ਖੋਜਿ ਖੋਜਿ ਲਯ ਲਾਵੈ।',
          'ਗੱਗਾ ਗੁਰੂ ਕੀ ਬਾਣੀ ਚੀਨ੍ਹੈ, ਘੱਘਾ ਘਟ ਭੀਤਰ ਰਸ ਭੀਨੈ॥',
        ],
        en: [
          'Discover the radiant ray inside the heart-lotus and anchor focus through sincere search;',
          'Recognize the Satguru’s living Word and drink the nectar flowing within.',
        ],
      },
      bhavarth: {
        hi: 'चौंतीस अक्षरों के माध्यम से सतगुरु कबीर साहेब ने बाहरी कर्मकांड छोड़कर घट के भीतर आत्मज्ञान और सत्यनाम-रस के आस्वादन का उपदेश दिया है।',
        pb: 'ਚੌਂਤੀ ਅੱਖਰਾਂ ਰਾਹੀਂ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਬਾਹਰੀ ਕਰਮਕਾਂਡ ਛੱਡ ਕੇ ਅੰਦਰੂਨੀ ਆਤਮ-ਗਿਆਨ ਦਾ ਉਪਦੇਸ਼ ਦਿੱਤਾ ਹੈ।',
        en: 'Through each letter of the alphabet, Satguru Kabir guides the seeker from external ritual to direct inner realization.',
      },
    },
  ],
  'विप्रमतिसी': [
    {
      id: 'bijak-vipramatisi-1',
      type: 'pada',
      lines: {
        hi: [
          'पढ़ि पढ़ि पण्डित करै चतुराई, बिन सत्यनाम न सूझै भाई।',
          'दया, शील और सांच न होई, थोथी कथनी मुए सब लोई॥',
        ],
        pb: [
          'ਪੜ੍ਹਿ ਪੜ੍ਹਿ ਪੰਡਿਤ ਕਰੈ ਚਤੁਰਾਈ, ਬਿਨ ਸਤਯਨਾਮ ਨ ਸੂਝੈ ਭਾਈ।',
          'ਦਇਆ, ਸ਼ੀਲ ਅਰੁ ਸਾਂਚ ਨ ਹੋਈ, ਥੋਥੀ ਕਥਨੀ ਮੁਏ ਸਭ ਲੋਈ॥',
        ],
        en: [
          'Mere cleverness with books cannot awaken true wisdom without Satyanaam;',
          'Without compassion, humility, and truth, empty discourse leads nowhere.',
        ],
      },
      bhavarth: {
        hi: 'कोरे पांडित्य और अहंकार से सत्य नहीं मिलता; जब तक जीवन में दया, सत्य, विनम्रता और सत्यनाम का आचरण न हो, शास्त्र-चर्चा व्यर्थ है।',
        pb: 'ਕੋਰੀ ਵਿਦਵਤਾ ਨਾਲ ਸੱਚ ਨਹੀਂ ਮਿਲਦਾ; ਦਇਆ, ਸੱਚ ਤੇ ਨਿਮਰਤਾ ਤੋਂ ਬਿਨਾਂ ਕੇਵਲ ਬਹਿਸ ਵਿਅਰਥ ਹੈ।',
        en: 'Bookish pride never replaces lived compassion, truthfulness, and sincere Satyanaam practice.',
      },
    },
  ],
  'कहरा': [
    {
      id: 'bijak-kahara-1',
      type: 'pada',
      lines: {
        hi: [
          'काहे को रोवै बावरे, अपनो मन समुझाय।',
          'सतगुरु के उपदेश बिन, हीरा जनम बिलाय॥',
        ],
        pb: [
          'ਕਾਹੇ ਕੋ ਰੋਵੈ ਬਾਵਰੇ, ਅਪਨੋ ਮਨ ਸਮੁਝਾਇ।',
          'ਸਤਿਗੁਰੂ ਕੇ ਉਪਦੇਸ਼ ਬਿਨ, ਹੀਰਾ ਜਨਮ ਬਿਲਾਇ॥',
        ],
        en: [
          'Why grieve in delusion, O mind? Counsel and steady yourself;',
          'Without the Satguru’s guidance, this diamond of human birth slips away.',
        ],
      },
      bhavarth: {
        hi: 'लोक-गीत ‘कहरा’ की शैली में सतगुरु जीव को जगाते हैं कि संसार के व्यर्थ शोक छोड़कर सतगुरु के ज्ञान से इस अमूल्य जन्म को सार्थक करो।',
        pb: 'ਲੋਕ-ਧੁਨ ‘ਕਹਰਾ’ ਰਾਹੀਂ ਸਤਿਗੁਰੂ ਜੀਵ ਨੂੰ ਸਮਝਾਉਂਦੇ ਹਨ ਕਿ ਵਿਅਰਥ ਚਿੰਤਾ ਛੱਡ ਕੇ ਸਤਿਗੁਰੂ-ਗਿਆਨ ਨਾਲ ਜੀਵਨ ਸਫਲ ਕਰੋ।',
        en: 'Using traditional folk cadence, Satguru Kabir awakens the mind from worldly sorrow toward spiritual purpose.',
      },
    },
  ],
  'बसन्त': [
    {
      id: 'bijak-basant-1',
      type: 'pada',
      lines: {
        hi: [
          'मन मतिवारे भइले बसन्त, फूल्यो अम्बर गगन अनन्त।',
          'सत्यनाम रंग लागो भारी, खिली सुरति फुलवारी प्यारी॥',
        ],
        pb: [
          'ਮਨ ਮਤਿਵਾਰੇ ਭਇਲੇ ਬਸੰਤ, ਫੂਲ੍ਯੋ ਅੰਬਰ ਗਗਨ ਅਨੰਤ।',
          'ਸਤਯਨਾਮ ਰੰਗ ਲਾਗੋ ਭਾਰੀ, ਖਿਲੀ ਸੁਰਤਿ ਫੁਲਵਾਰੀ ਪਿਆਰੀ॥',
        ],
        en: [
          'Inner spring has blossomed in the awakened heart, filling the infinite sky with fragrance;',
          'Dyed deep in the hue of Satyanaam, the garden of consciousness blooms forever.',
        ],
      },
      bhavarth: {
        hi: 'आत्मज्ञान का वसंत जब हृदय में खिलता है, तब साधक की सुरति सत्यनाम के अविनाशी आनंद-रस से सराबोर हो उठती है।',
        pb: 'ਆਤਮ-ਗਿਆਨ ਦੀ ਬਸੰਤ ਜਦੋਂ ਹਿਰਦੇ ਵਿੱਚ ਖਿੜਦੀ ਹੈ ਤਾਂ ਸੁਰਤਿ ਸਤਯਨਾਮ ਦੇ ਅਨੰਦ ਨਾਲ ਭਰ ਜਾਂਦੀ ਹੈ।',
        en: 'When spiritual spring awakens inside, consciousness blossoms forever in the joy of Satyanaam.',
      },
    },
  ],
  'चांचर': [
    {
      id: 'bijak-chanchar-1',
      type: 'pada',
      lines: {
        hi: [
          'सतसंग खेलौ रंग भरी, मेटि सकल भ्रम जाल।',
          'सतगुरु शब्द पियारिया, बिनसै दुविधा काल॥',
        ],
        pb: [
          'ਸਤਿਸੰਗ ਖੇਲੌ ਰੰਗ ਭਰੀ, ਮੇਟਿ ਸਕਲ ਭ੍ਰਮ ਜਾਲ।',
          'ਸਤਿਗੁਰੂ ਸ਼ਬਦ ਪਿਆਰਿਆ, ਬਿਨਸੈ ਦੁਬਿਧਾ ਕਾਲ॥',
        ],
        en: [
          'Rejoice in holy Satsang, dissolving every net of illusion;',
          'Embracing the Satguru’s Word destroys all duality and fear.',
        ],
      },
      bhavarth: {
        hi: 'सत्संग और सतगुरु-शब्द के आनंद में ही सच्ची होली व उत्सव है, जहाँ मन की सारी दुविधा और भय समाप्त हो जाते हैं।',
        pb: 'ਸਤਿਸੰਗ ਅਤੇ ਸਤਿਗੁਰੂ-ਸ਼ਬਦ ਦੇ ਅਨੰਦ ਵਿੱਚ ਹੀ ਸੱਚਾ ਉਤਸਵ ਹੈ, ਜਿੱਥੇ ਮਨ ਦੀ ਦੁਬਿਧਾ ਮਿਟ ਜਾਂਦੀ ਹੈ।',
        en: 'True celebration lies in Satsang and the Satguru’s Word, where doubt and fear dissolve.',
      },
    },
  ],
  'बेलि': [
    {
      id: 'bijak-beli-1',
      type: 'pada',
      lines: {
        hi: [
          'भक्ति बेलि बड़ि अद्भुत भाँती, सींची प्रेम सरोवर पाँती।',
          'सत्यनाम फल लाग्यो अमापा, मिटि गए जन्म-मरण संतापा॥',
        ],
        pb: [
          'ਭਗਤੀ ਬੇਲਿ ਬੜਿ ਅਦਭੁਤ ਭਾਂਤੀ, ਸਿੰਚੀ ਪ੍ਰੇਮ ਸਰੋਵਰ ਪਾਂਤੀ।',
          'ਸਤਯਨਾਮ ਫਲ ਲਾਗ੍ਯੋ ਅਮਾਪਾ, ਮਿਟਿ ਗਏ ਜਨਮ-ਮਰਣ ਸੰਤਾਪਾ॥',
        ],
        en: [
          'Wondrous is the creeper of pure devotion, nourished by the waters of love;',
          'Bearing the limitless fruit of Satyanaam, it ends all sorrow of birth and death.',
        ],
      },
      bhavarth: {
        hi: 'प्रेम और विनम्रता से सींची गई भक्ति की बेलि जब सत्यनाम रूपी फल देती है, तब जीव के समस्त कष्ट नष्ट हो जाते हैं।',
        pb: 'ਪ੍ਰੇਮ ਤੇ ਨਿਮਰਤਾ ਨਾਲ ਸਿੰਜੀ ਗਈ ਭਗਤੀ ਦੀ ਵੇਲ ਸਤਯਨਾਮ ਦਾ ਫਲ ਦਿੰਦੀ ਹੈ ਅਤੇ ਸਾਰੇ ਦੁੱਖ ਮਿਟਾ ਦਿੰਦੀ ਹੈ।',
        en: 'Watered with humility and love, the vine of devotion yields the immortal fruit of Satyanaam.',
      },
    },
  ],
  'बिरहुली': [
    {
      id: 'bijak-birahuli-1',
      type: 'pada',
      lines: {
        hi: [
          'विरह भुवंगम पैसि के, कियो करेजे घाव।',
          'बिन सतगुरु के दरस बिन, जियत न कोई उपाव॥',
        ],
        pb: [
          'ਬਿਰਹੁ ਭੁਵੰਗਮ ਪੈਸਿ ਕੇ, ਕੀਓ ਕਰੇਜੇ ਘਾਵ।',
          'ਬਿਨ ਸਤਿਗੁਰੂ ਕੇ ਦਰਸ ਬਿਨ, ਜੀਅਤ ਨ ਕੋਈ ਉਪਾਵ॥',
        ],
        en: [
          'Sacred longing pierces the heart deeply for reunion with Truth;',
          'Without beholding the Satguru’s grace, nothing else can soothe the soul.',
        ],
      },
      bhavarth: {
        hi: 'सच्चे साधक के हृदय में परमात्म-मिलन की तीव्र विरह-वेदना जागती है, जो केवल सतगुरु-दर्शन और सत्यनाम से ही शांत होती है।',
        pb: 'ਸੱਚੇ ਸਾਧਕ ਦੇ ਹਿਰਦੇ ਵਿੱਚ ਪ੍ਰਭੂ-ਮਿਲਾਪ ਦੀ ਤੜਪ ਜਾਗਦੀ ਹੈ, ਜੋ ਕੇਵਲ ਸਤਿਗੁਰੂ-ਕਿਰਪਾ ਨਾਲ ਸ਼ਾਂਤ ਹੁੰਦੀ ਹੈ।',
        en: 'Pure spiritual longing burns away worldliness until the soul finds rest in Satguru’s grace.',
      },
    },
  ],
  'हिण्डौला': [
    {
      id: 'bijak-hindola-1',
      type: 'pada',
      lines: {
        hi: [
          'सुरति हिण्डोले झूलत हंसा, गगन मण्डल उजियारा।',
          'अमर लोक की पवन चलै तहँ, सत्यनाम अधारा॥',
        ],
        pb: [
          'ਸੁਰਤਿ ਹਿੰਡੋਲੇ ਝੂਲਤ ਹੰਸਾ, ਗਗਨ ਮੰਡਲ ਉਜਿਆਰਾ।',
          'ਅਮਰ ਲੋਕ ਕੀ ਪਵਨ ਚਲੈ ਤਹਾਂ, ਸਤਯਨਾਮ ਅਧਾਰਾ॥',
        ],
        en: [
          'The awakened soul swings in bliss upon the inner cradle of radiant light;',
          'Fanned by the gentle breeze of Amar Lok, anchored in Satyanaam.',
        ],
      },
      bhavarth: {
        hi: 'ध्यान की उच्च अवस्था में साधक की सुरति अंतर्जगत के अनहद आनंद रूपी हिण्डोले पर झूलती हुई परम विश्राम पाती है।',
        pb: 'ਧਿਆਨ ਦੀ ਉੱਚ ਅਵਸਥਾ ਵਿੱਚ ਸਾਧਕ ਦੀ ਸੁਰਤਿ ਅੰਦਰੂਨੀ ਅਨਹਦ ਅਨੰਦ ਦੇ ਝੂਲੇ ਤੇ ਝੂਲਦੀ ਹੈ।',
        en: 'In deep meditation, consciousness rests joyfully in the radiant inner swing anchored by Satyanaam.',
      },
    },
  ],
  'साखी': [
    {
      id: 'bijak-sakhi-1',
      type: 'sakhi',
      lines: {
        hi: ['साखी आँखि ज्ञान की, समुझि देखु मन माहिं।', 'बिन साखी संसार का, झगड़ा छूटत नाहिं॥'],
        pb: ['ਸਾਖੀ ਆਂਖਿ ਗਿਆਨ ਕੀ, ਸਮੁਝਿ ਦੇਖੁ ਮਨ ਮਾਹਿ।', 'ਬਿਨ ਸਾਖੀ ਸੰਸਾਰ ਕਾ, ਝਗੜਾ ਛੂਟਤ ਨਾਹਿ॥'],
        en: ['The Sakhi is the eye of wisdom; look and understand within your mind.', 'Without the Sakhi, the conflicts of this world never cease.'],
      },
      bhavarth: {
        hi: 'साखी ज्ञान की आँख है। इसके प्रत्यक्ष बोध के बिना संसार के भ्रम और क्लेश दूर नहीं हो सकते।',
        pb: 'ਸਾਖੀ ਗਿਆਨ ਦੀ ਅੱਖ ਹੈ; ਇਸ ਤੋਂ ਬਿਨਾਂ ਸੰਸਾਰ ਦੇ ਭਰਮ ਦੂਰ ਨਹੀਂ ਹੁੰਦੇ।',
        en: 'The Sakhi provides clear spiritual vision to rise above worldly conflict and illusion.',
      },
    },
    {
      id: 'bijak-sakhi-2',
      type: 'sakhi',
      lines: {
        hi: ['कबीर सुमिरन सार है, और सकल जंजाल।', 'आदि अंत सब सोधिया, दूजा देख्या काल॥'],
        pb: ['ਕਬੀਰ ਸਿਮਰਨ ਸਾਰ ਹੈ, ਔਰ ਸਕਲ ਜੰਜਾਲ।', 'ਆਦਿ ਅੰਤ ਸਭ ਸੋਧਿਆ, ਦੂਜਾ ਦੇਖਿਆ ਕਾਲ॥'],
        en: ['Satguru Kabir proclaims: Remembrance of Naam is the sole essence; all else is transient snare.', 'Examining beginning to end, everything apart from Truth belongs to passing time.'],
      },
      bhavarth: {
        hi: 'समस्त ग्रंथों और जीवन अनुभवों का निचोड़ यही है कि एकमात्र सत्यनाम का सुमिरन ही सार है; शेष सांसारिक प्रपंच समय के अधीन नष्ट हो जाने वाले हैं।',
        pb: 'ਸਾਰੇ ਗ੍ਰੰਥਾਂ ਦਾ ਨਿਚੋੜ ਇਹੀ ਹੈ ਕਿ ਕੇਵਲ ਸਤਯਨਾਮ ਦਾ ਸਿਮਰਨ ਹੀ ਸਾਰ ਹੈ।',
        en: 'Satyanaam remembrance stands as the sole enduring essence amid passing distractions.',
      },
    },
    {
      id: 'bijak-sakhi-3',
      type: 'sakhi',
      lines: {
        hi: ['चाह गई चिंता मिटी, मनवा बेपरवाह।', 'जिनको कछु नहिं चाहिये, वे साहन के साह॥'],
        pb: ['ਚਾਹ ਗਈ ਚਿੰਤਾ ਮਿਟੀ, ਮਨਵਾ ਬੇਪਰਵਾਹ।', 'ਜਿਨ ਕਉ ਕਛੁ ਨਹਿ ਚਾਹੀਐ, ਵੇ ਸਾਹਨ ਕੇ ਸਾਹ॥'],
        en: ['When craving departs, worry vanishes and the heart rests carefree;', 'Those who desire nothing selfishly are the true kings among emperors.'],
      },
      bhavarth: {
        hi: 'चिंता की जड़ केवल अनावश्यक कामना है; जिस साधक की लालसा शांत हो जाती है, वह भीतर से शहंशाहों का भी शहंशाह बन जाता है।',
        pb: 'ਚਿੰਤਾ ਦੀ ਜੜ੍ਹ ਕੇਵਲ ਬੇਲੋੜੀ ਕਾਮਨਾ ਹੈ; ਸੰਤੋਖੀ ਸਾਧਕ ਸ਼ਹਿਨਸ਼ਾਹਾਂ ਦਾ ਸ਼ਹਿਨਸ਼ਾਹ ਹੁੰਦਾ ਹੈ।',
        en: 'Releasing anxious greed grants sovereign inner peace.',
      },
    },
  ],
};

export const BIJAK_GRANTH: MasterGranth = {
  id: 'bijak-granth',
  slug: 'bijak',
  title: {
    hi: 'बीजक ग्रंथ (मूल वाणी)',
    pb: 'ਬੀਜਕ ਗ੍ਰੰਥ (ਮੂਲ ਬਾਣੀ)',
    en: 'Bijak Granth (Fundamental Verses)',
  },
  shortTitle: {
    hi: 'बीजक',
    pb: 'ਬੀਜਕ',
    en: 'Bijak',
  },
  subtitle: {
    hi: 'सतगुरु कबीर साहेब की प्रामाणिक एवं मूल विचारधारा का ग्रंथ',
    pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਪ੍ਰਮਾਣਿਕ ਬਾਣੀ',
    en: "The Authoritative Compilation of Satguru Kabir's Core Philosophy",
  },
  category: 'mool-granth',
  iconName: 'Book',
  bannerColor: 'from-orange-700 to-red-800',
  accentColor: 'text-orange-700',
  totalChapters: 12,
  estimatedHours: {
    hi: '३० घण्टे स्वाध्याय',
    pb: '੩੦ ਘੰਟੇ ਅਧਿਐਨ',
    en: '30 Hours Study',
  },
  description: {
    hi: 'बीजक सतगुरु कबीर साहेब की सबसे प्रामाणिक रचना मानी जाती है। इसमें रमैनी, सबद और साखी के माध्यम से पाखण्ड खंडन, आत्मज्ञान और सत्य मार्ग का निरूपण है।',
    pb: 'ਬੀਜਕ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਸਭ ਤੋਂ ਪ੍ਰਮਾਣਿਕ ਰਚਨਾ ਹੈ।',
    en: "Bijak is widely regarded as the most authoritative record of Kabir's teachings, containing Ramaini, Shabad, and Sakhi.",
  },
  chapters: BIJAK_SECTIONS.map((sec, idx) => {
    const rawVerses = BIJAK_SECTION_VERSES[sec.title] || [];
    const enrichedVerses = rawVerses.map((v) => enrichVerseWith5Steps(v, sec.title));
    return {
      id: `bijak-sec-${idx + 1}`,
      chapterNumber: idx + 1,
      title: {
        hi: `${idx + 1}. ${sec.title}`,
        pb: `${idx + 1}. ${sec.pbTitle}`,
        en: `${idx + 1}. ${sec.enTitle}`,
      },
      subtitle: {
        hi: `${sec.count} पारंपरिक पदों का प्रकरण`,
        pb: `${sec.count} ਪਰੰਪਰਾਗਤ ਪਦਾਂ ਦਾ ਪ੍ਰਕਰਣ`,
        en: `Traditional section (${sec.count} canonical verses)`,
      },
      description: {
        hi: `बीजक का यह भाग '${sec.title}' विषय पर आधारित है।`,
        pb: `ਬੀਜਕ ਦਾ ਇਹ ਭਾਗ '${sec.pbTitle}' ਬਾਰੇ ਦੱਸਦਾ ਹੈ।`,
        en: `This section of Bijak focuses on '${sec.enTitle}'.`,
      },
      verses: enrichedVerses,
    };
  }),
};
