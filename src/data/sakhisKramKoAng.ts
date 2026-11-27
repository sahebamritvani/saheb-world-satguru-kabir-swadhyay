import { Sakhi } from '../types';
import { devanagariToGurmukhi } from '../services/transliteration';

export const SAKHIS_KRAM_KO_ANG: Sakhi[] = [
  {
    id: 'kram-1',
    number: 1615,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'कर्म को अंग - १',
      pb: 'ਕਰਮ ਕੋ ਅੰਗ - ੧',
      en: 'Kram Ko Ang - 1',
    },
    text: {
      hi: 'काया खेत किसान मन, पाप पुन्न दो बीव।\nबोया लूनै आपना, काया कसकै जीव।।',
      pb: 'ਕਾਇਆ ਖੇਤ ਕਿਸਾਨ ਮਨ, ਪਾਪ ਪੁੰਨ ਦੋ ਬੀਵ।\nਬੋਇਆ ਲੂਨੈ ਆਪਣਾ, ਕਾਇਆ ਕਸਕੈ ਜੀਵ।।',
      en: 'Kaaya khet kisaan man, paap punn do beev. Boya loonai aapana, kaaya kasakai jeev..',
    },
    transliteration: 'Kaaya khet kisaan man, paap punn do beev. Boya loonai aapana, kaaya kasakai jeev.',
    bhavarth: {
      hi: 'शरीर और मन क्रमशः खेत व किसान की भांति होते हैं। इनके पास बोने के लिए पाप और पुण्य नाम के दो बीज हैं। अब जो बीज इसमें बोया जाएगा, वही काटने को मिलेगा। मोहवश किए गए पाप-कर्मों से जीव को पीड़ा ही पहुंचती है।',
      pb: 'ਸਰੀਰ ਅਤੇ ਮਨ ਕ੍ਰਮਵਾਰ ਖੇਤ ਅਤੇ ਕਿਸਾਨ ਵਰਗੇ ਹਨ। ਇਹਨਾਂ ਕੋਲ ਬੀਜਣ ਲਈ ਪਾਪ ਅਤੇ ਪੁੰਨ ਨਾਮ ਦੇ ਦੋ ਬੀਜ ਹਨ। ਜੋ ਬੀਜਿਆ ਜਾਵੇਗਾ, ਉਹੀ ਵੱਢਣਾ ਪਵੇਗਾ। ਪਾਪ ਕਰਮਾਂ ਨਾਲ ਜੀਵ ਨੂੰ ਪੀੜਾ ਹੀ ਮਿਲਦੀ ਹੈ।',
      en: 'The body is the field and the mind is the farmer, holding two seeds: vice (sin) and virtue. Whatever seed is sown in this field, the same crop shall be harvested. Selfish actions yield only pain to the soul.',
    },
    wordMeanings: {
      hi: [
        { word: 'काया (Kaaya)', meaning: 'शरीर / भौतिक देह' },
        { word: 'बीव (Beev)', meaning: 'बीज / कर्म के मूल तत्व' },
        { word: 'लूनै (Loonai)', meaning: 'काटना / फसल काटना' },
        { word: 'कसकै (Kasakai)', meaning: 'पीड़ा होना / दर्द महसूस होना' }
      ],
      pb: [
        { word: 'ਕਾਇਆ (Kaaya)', meaning: 'ਸਰੀਰ' },
        { word: 'ਬੀਵ (Beev)', meaning: 'ਬੀਜ' },
        { word: 'ਲੂਨੈ (Loonai)', meaning: 'ਵੱਢਣਾ' },
        { word: 'ਕਸਕੈ (Kasakai)', meaning: 'ਪੀੜਾ ਹੋਣਾ' }
      ],
      en: [
        { word: 'Kaaya', meaning: 'Body / Physical field' },
        { word: 'Beev', meaning: 'Seeds' },
        { word: 'Loonai', meaning: 'To reap / Harvest' },
        { word: 'Kasakai', meaning: 'Aches / Suffers pain' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं अपने मन और शरीर रूपी खेत में प्रतिदिन अच्छे कर्मों के बीज बो रहा हूँ या कड़वाहट के?',
      pb: 'ਕੀ ਮੈਂ ਆਪਣੇ ਜੀਵਨ ਵਿੱਚ ਪੁੰਨ ਦੇ ਬੀਜ ਬੀਜ ਰਿਹਾ ਹਾਂ ਜਾਂ ਪਾਪ ਦੇ?',
      en: 'Am I sowing seeds of virtue and peace in my daily conduct, or am I planting seeds of vanity and regret?'
    },
    practicalApplication: {
      hi: 'मन में सदा शुभ विचार और दूसरों के प्रति परोपकार की भावना रखें, जिससे भविष्य में आनंद का फल प्राप्त हो।',
      pb: 'ਮਨ ਵਿੱਚ ਹਮੇਸ਼ਾ ਚੰਗੇ ਵਿਚਾਰ ਰੱਖੋ ਅਤੇ ਸੇਵਾ ਕਰੋ।',
      en: 'Cultivate pure thoughts and selfless service so that you reap the harvest of joy and inner peace.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु कबीर साहेब! मेरे मन रूपी किसान को पवित्र ज्ञान प्रदान करें ताकि मैं सदा सत्कर्मों के बीज बोऊँ। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ ਕਬੀਰ! ਮੇਰੇ ਮਨ ਨੂੰ ਸੁਮੱਤ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Satguru Kabir! Guide my mind to sow only the seeds of truth and kindness. Saheb Bandgi Saheb!'
    },
    quiz: []
  },
  {
    id: 'kram-2',
    number: 1616,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'कर्म को अंग - २',
      pb: 'ਕਰਮ ਕੋ ਅੰਗ - ੨',
      en: 'Kram Ko Ang - 2',
    },
    text: {
      hi: 'काला मुंह करूं करम का, आदर लावूं आग।\nलोभ बड़ाई छांड़ि के, रांचू गुरु के राग।।',
      pb: 'ਕਾਲਾ ਮੁਂਹ ਕਰੂੰ ਕਰਮ ਕਾ, ਆਦਰ ਲਾਵੂੰ ਆਗ।\nਲੋਭ ਬੜਾਈ ਛਾਂੜਿ ਕੇ, ਰਾਂਚੂ ਗੁਰੂ ਕੇ ਰਾਗ।।',
      en: 'Kaala munh karoon karam ka, aadar laavoon aag. Lobh badaace chhaandi ke, raanchon guru ke raag..',
    },
    transliteration: 'Kaala munh karoon karam ka, aadar laavoon aag. Lobh badaace chhaandi ke, raanchon guru ke raag.',
    bhavarth: {
      hi: 'सांसारिक मोह के कर्म का मुहं काला करके आदर-मान को भी आग लगा देनी चाहिए। व्यर्थ की लोभ-बड़ाई को छोड़कर, सतगुरु के ज्ञानोपदेश का ही राग प्रेम से अलापना चाहिए। इसी से जीवन का कल्याण होगा।',
      pb: 'ਸੰਸਾਰਿਕ ਮੋਹ ਦੇ ਕਰਮ ਦਾ ਮੂੰਹ ਕਾਲਾ ਕਰਕੇ ਆਦਰ-ਮਾਣ ਨੂੰ ਵੀ ਅੱਗ ਲਗਾ ਦੇਣੀ ਚਾਹੀਦੀ ਹੈ। ਫ਼ਜ਼ੂਲ ਦੇ ਲੋਭ ਤੇ ਵਡਿਆਈ ਨੂੰ ਛੱਡ ਕੇ ਸਤਿਗੁਰੂ ਦੇ ਉਪਦੇਸ਼ ਦੇ ਪ੍ਰੇਮ ਵਿੱਚ ਲੀਨ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ।',
      en: 'Blacken the face of worldly desire and set fire to false pride and social prestige. Cast away greed and self-glorification, and tune your heart entirely to the holy teachings of the Guru.',
    },
    wordMeanings: {
      hi: [
        { word: 'काला मुंह (Kaala munh)', meaning: 'तिरस्कार करना / त्याग करना' },
        { word: 'रांचू (Raanchon)', meaning: 'रंग जाना / पूर्णतः मग्न होना' },
        { word: 'राग (Raag)', meaning: 'प्रेम का गीत / भक्ति संगीत' }
      ],
      pb: [
        { word: 'ਕਾਲਾ ਮੁਂਹ (Kaala munh)', meaning: 'ਤਿਆਗ ਕਰਨਾ' },
        { word: 'ਰਾਂਚੂ (Raanchon)', meaning: 'ਲੀਨ ਹੋਣਾ / ਰੰਗੇ ਜਾਣਾ' },
        { word: 'ਰਾਗ (Raag)', meaning: 'ਪ੍ਰੇਮ / ਭਗਤੀ' }
      ],
      en: [
        { word: 'Kaala munh', meaning: 'To blacken face / Reject utterly' },
        { word: 'Raanchon', meaning: 'To be deeply absorbed / Dyed in' },
        { word: 'Raag', meaning: 'Melody of love / Divine tune' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं सामाजिक बड़ाई और मान-प्रतिष्ठा के पीछे भाग रहा हूँ, या सतगुरु के पवित्र वचनों में सच्चा आनंद पा रहा हूँ?',
      pb: 'ਕੀ ਮੈਂ ਦੁਨਿਆਵੀ ਵਡਿਆਈ ਪਿੱਛੇ ਭੱਜ ਰਿਹਾ ਹਾਂ?',
      en: 'Am I chasing public applause and vanity, or am I finding real solace in the quiet instructions of the Guru?'
    },
    practicalApplication: {
      hi: 'झूठी बड़ाई और प्रशंसा की लालसा को त्यागकर शांत और निरहंकारी जीवन व्यतीत करें।',
      pb: 'ਹੰਕਾਰ ਤੇ ਲੋਭ ਛੱਡ ਕੇ ਨਿਮਰਤਾ ਨਾਲ ਰਹੋ।',
      en: 'Abandon the thirst for flattery and hollow fame; live a simple, humble life focused on self-realization.'
    },
    samarpanPrayer: {
      hi: 'हे परम दयालु सतगुरु देव! मुझे लोक-प्रतिष्ठा के जाल से बचाकर अपनी निर्मल भक्ति के रंग में रंग दीजिए। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਆਪਣੇ ਨਾਮ ਦੇ ਰੰਗ ਵਿੱਚ ਰੰਗੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Merciful Master! Deliver me from the snare of worldly status and dye my soul in Your pure devotion. Saheb Bandgi Saheb!'
    },
    quiz: []
  },
  {
    id: 'kram-3',
    number: 1617,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'कर्म को अंग - ३',
      pb: 'ਕਰਮ ਕੋ ਅੰਗ - ੩',
      en: 'Kram Ko Ang - 3',
    },
    text: {
      hi: 'कबीर सजड़े ही जड़ा, झूठा मोह अपार।\nअनेक लुहारे पचि मुये, उझड़त नहीं लगार।।',
      pb: 'ਕਬੀਰ ਸਜੜੇ ਹੀ ਜੜਾ, ਝੂਠਾ ਮੋਹ ਅਪਾਰ।\nਅਨੇਕ ਲੁਹਾਰੇ ਪਚਿ ਮੁਏ, ਉਝੜਤ ਨਹੀਂ ਲਗਾਰ।।',
      en: 'Kabir sajade hee jada, jhootha moh apaar. Anek luhaare pachi muye, ujhadat naheen lagaar..',
    },
    transliteration: 'Kabir sajade hee jada, jhootha moh apaar. Anek luhaare pachi muye, ujhadat naheen lagaar.',
    bhavarth: {
      hi: 'सतगुरु कबीर साहेब फरमाते हैं कि यह अज्ञानी जीव मिथ्या विषय पदार्थों के मोह-रूपी लोह-बंधन में ऐसा जकड़ा हुआ है कि अनेक उपदेशक रूपी लोहार उपदेश देकर थक गए, परंतु माया-मोह की लोह-फांसी से मुक्ति नहीं मिली।',
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ ਕਿ ਇਹ ਅਗਿਆਨੀ ਜੀਵ ਸੰਸਾਰਿਕ ਮੋਹ ਦੇ ਲੋਹੇ ਵਰਗੇ ਬੰਧਨਾਂ ਵਿੱਚ ਅਜਿਹਾ ਜਕੜਿਆ ਹੋਇਆ ਹੈ ਕਿ ਕਿੰਨੇ ਹੀ ਉਪਦੇਸ਼ਕ ਰੂਪੀ ਲੁਹਾਰ ਉਪਦੇਸ਼ ਦੇ-ਦੇ ਕੇ ਥੱਕ ਗਏ, ਪਰ ਇਹ ਬੰਧਨ ਨਹੀਂ ਟੁੱਟਿਆ।',
      en: 'The ignorant soul is so heavily bound by the iron fetters of false attachment that many spiritual teachers (acting like blacksmiths) exhausted themselves giving advice, yet the stubborn cage of illusion remains unbroken.',
    },
    wordMeanings: {
      hi: [
        { word: 'सजड़े (Sajade)', meaning: 'लोहे की बेड़ियाँ / जंजीरें' },
        { word: 'लुहारे (Luhaare)', meaning: 'उपदेशक / संतजन' },
        { word: 'पचि मुये (Pachi muye)', meaning: 'श्रम करके हार गए / थक गए' },
        { word: 'उझड़त (Ujhadat)', meaning: 'खुलना / टूटना' }
      ],
      pb: [
        { word: 'ਸਜੜੇ (Sajade)', meaning: 'ਲੋਹੇ ਦੇ ਬੰਧਨ' },
        { word: 'ਲੁਹਾਰੇ (Luhaare)', meaning: 'ਉਪਦੇਸ਼ਕ' },
        { word: 'ਪਚਿ ਮੁਏ (Pachi muye)', meaning: 'ਥੱਕ ਗਏ' },
        { word: 'ਉਝੜਤ (Ujhadat)', meaning: 'ਟੁੱਟਣਾ' }
      ],
      en: [
        { word: 'Sajade', meaning: 'Iron shackles / Chains' },
        { word: 'Luhaare', meaning: 'Blacksmiths / Wise teachers' },
        { word: 'Pachi muye', meaning: 'Worn out with hard toil / Died striving' },
        { word: 'Ujhadat', meaning: 'Unlocking / Breaking free' }
      ]
    },
    contemplation: {
      hi: 'क्या मेरा मन गुरु के उपदेशों को सुनकर भी पुनः उसी सांसारिक मोह-माया के चक्रव्यूह में तो नहीं फंस जाता?',
      pb: 'ਕੀ ਮੈਂ ਉਪਦੇਸ਼ ਸੁਣ ਕੇ ਵੀ ਮੋਹ ਵਿੱਚ ਫਸਿਆ ਹੋਇਆ ਹਾਂ?',
      en: 'Do I listen to spiritual wisdom only to return to the same exhausting habits of attachment and desire?'
    },
    practicalApplication: {
      hi: 'संसार को केवल एक सराय समझें; यहाँ की वस्तुओं से अति-आसक्ति न रखकर सत्यनाम का ध्यान धरें।',
      pb: 'ਸੰਸਾਰ ਨੂੰ ਨਾਸ਼ਵਾਨ ਸਮਝ ਕੇ ਨਾਮ ਸਿਮਰਨ ਕਰੋ।',
      en: 'Regard the world as a temporary inn; avoid deep emotional hooks to material possessions and focus on the Timeless.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु कबीर देव! मेरी इस अज्ञान रूपी बेड़ी को काट दीजिए ताकि मैं इस भव-बंधन से मुक्त हो सकूँ। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੀ ਮੋਹ ਦੀ ਬੇੜੀ ਕੱਟੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Satguru Kabir! Shatter the heavy iron chains of my ignorance so that my soul may fly free. Saheb Bandgi Saheb!'
    },
    quiz: []
  },
  {
    id: 'kram-4',
    number: 1618,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'कर्म को अंग - ४',
      pb: 'ਕਰਮ ਕੋ ਅੰਗ - ੪',
      en: 'Kram Ko Ang - 4',
    },
    text: {
      hi: 'बखत कहो या करम कहु, नसिब कहो निरधार।\nसहस नाम हैं करम के, मन ही सिरजनहार।।',
      pb: 'ਬਖਤ ਕਹੋ ਯਾ ਕਰਮ ਕਹੁ, ਨਸਿਬ ਕਹੋ ਨਿਰਧਾਰ।\nਸਹਸ ਨਾਮ ਹੈਂ ਕਰਮ ਕੇ, ਮਨ ਹੀ ਸਿਰਜਨਹਾਰ।।',
      en: 'Bakhata kaho ya karam kahu, nasiba kaho niradhaar. Sahas naam hain karam ke, man hee sirajanahaar..',
    },
    transliteration: 'Bakhata kaho ya karam kahu, nasiba kaho niradhaar. Sahas naam hain karam ke, man hee sirajanahaar.',
    bhavarth: {
      hi: 'प्रारब्ध को चाहे समय कहो या कर्म और चाहे भाग्य कहो, अर्थात चाहे जिस नाम से उसे पुकार लो। कर्म के सहस्त्रों नाम हैं और इन सबका बनाने वाला मन ही है।',
      pb: 'ਪ੍ਰਾਰਬਧ ਨੂੰ ਚਾਹੇ ਸਮਾਂ ਕਹੋ, ਚਾਹੇ ਕਰਮ ਕਹੋ, ਚਾਹੇ ਕਿਸਮਤ ਕਹੋ। ਕਰਮ ਦੇ ਹਜ਼ਾਰਾਂ ਨਾਮ ਹਨ ਅਤੇ ਇਹਨਾਂ ਸਭ ਦਾ ਸਿਰਜਣਹਾਰ ਮਨ ਹੀ ਹੈ।',
      en: 'Whether you call destiny "time", "action", "fate" or "luck"—it is all the same. Karma has thousands of names, but the sole architect of all karma is the mind itself.',
    },
    wordMeanings: {
      hi: [
        { word: 'बखत (Bakhata)', meaning: 'समय / काल' },
        { word: 'नसिब (Nasiba)', meaning: 'भाग्य / प्रारब्ध' },
        { word: 'सहस (Sahas)', meaning: 'हजारों / अनगिनत' },
        { word: 'सिरजनहार (Sirajanahaar)', meaning: 'बनाने वाला / रचयिता' }
      ],
      pb: [
        { word: 'ਬਖਤ (Bakhata)', meaning: 'ਸਮਾਂ / ਵਕਤ' },
        { word: 'ਨਸਿਬ (Nasiba)', meaning: 'ਕਿਸਮਤ' },
        { word: 'ਸਹਸ (Sahas)', meaning: 'ਹਜ਼ਾਰਾਂ' },
        { word: 'ਸਿਰਜਨਹਾਰ (Sirajanahaar)', meaning: 'ਬਣਾਉਣ ਵਾਲਾ' }
      ],
      en: [
        { word: 'Bakhata', meaning: 'Time / Circumstance' },
        { word: 'Nasiba', meaning: 'Fate / Destiny' },
        { word: 'Sahas', meaning: 'Thousands' },
        { word: 'Sirajanahaar', meaning: 'Creator / Originator' }
      ]
    },
    contemplation: {
      hi: 'जब मेरा मन ही मेरे भाग्य और कर्मों का रचयिता है, तो मैं अपने मन को पवित्र विचारों की ओर क्यों नहीं मोड़ता?',
      pb: 'ਕੀ ਮੈਂ ਆਪਣੇ ਮਨ ਦੇ ਵਿਚਾਰਾਂ ਨੂੰ ਕਾਬੂ ਵਿੱਚ ਰੱਖਦਾ ਹਾਂ?',
      en: 'If my own mind is the author of my fate, why do I not steer it away from dark desires toward light?'
    },
    practicalApplication: {
      hi: 'भाग्य को कोसना बंद करें; अपने विचारों को शुद्ध और नियंत्रित करके सुंदर प्रारब्ध का निर्माण करें।',
      pb: 'ਕਿਸਮਤ ਨੂੰ ਕੋਸਣਾ ਛੱਡੋ, ਮਨ ਨੂੰ ਸ਼ੁੱਧ ਕਰੋ।',
      en: 'Stop blaming fate; purify and discipline your mind, for it is the master weaver of your destiny.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरुदेव! मेरे मन को वासनाओं से मुक्त कर अपने सत्य उपदेशों में लगा दीजिए। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਗੁਰੂਦੇਵ! ਮੇਰੇ ਮਨ ਨੂੰ ਸੱਚੇ ਮਾਰਗ \'ਤੇ ਲਗਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Divine Master! Guide my mind away from illusion and anchor it in Your sacred truth. Saheb Bandgi Saheb!'
    },
    quiz: []
  },
  {
    id: 'kram-5',
    number: 1619,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'कर्म को अंग - ५',
      pb: 'ਕਰਮ ਕੋ ਅੰਗ - ੫',
      en: 'Kram Ko Ang - 5',
    },
    text: {
      hi: 'दुख लेने जावै नहीं, आवै आचा बूच।\nसुख का पहरा होयगा, दुख करेगा कूच।।',
      pb: 'ਦੁਖ ਲੇਨੇ ਜਾਵੈ ਨਹੀਂ, ਆਵੈ ਆਚਾ ਬੂਚ।\nਸੁਖ ਕਾ ਪਹਰਾ ਹੋਯਗਾ, ਦੁਖ ਕਰੇਗਾ ਕੂਚ।।',
      en: 'Dukh lene jaavai naheen, aavai aacha booch. Sukh ka pahara hoyaga, dukh karega kooch..',
    },
    transliteration: 'Dukh lene jaavai naheen, aavai aacha booch. Sukh ka pahara hoyaga, dukh karega kooch.',
    bhavarth: {
      hi: 'दुःख का नाम लेते ही सब दुःख से व्याकुल होने लगते हैं, इसलिए दुःख लेने के लिए कोई नहीं जाता है, वह तो अचानक ही आ पड़ता है, परंतु जब कुछ समय के लिए सुख का पहरा आएगा, तब वह दुःख स्वयं ही चला जाएगा। जीवन में कर्मानुसार सुख-दुःख का आना-जाना लगा ही रहता है।',
      pb: 'ਦੁੱਖ ਲੈਣ ਕੋਈ ਨਹੀਂ ਜਾਂਦਾ, ਉਹ ਤਾਂ ਅਚਾਨਕ ਹੀ ਆ ਪੈਂਦਾ ਹੈ। ਪਰ ਜਦੋਂ ਸੁੱਖ ਦਾ ਸਮਾਂ ਆਵੇਗਾ, ਤਾਂ ਦੁੱਖ ਆਪਣੇ ਆਪ ਚਲਾ ਜਾਵੇਗਾ। ਜੀਵਨ ਵਿੱਚ ਸੁੱਖ-ਦੁੱਖ ਆਉਂਦੇ-ਜਾਂਦੇ ਰਹਿੰਦੇ ਹਨ।',
      en: 'Nobody goes looking for suffering; it arrives unexpected and uninvited. But when the season of joy takes its watch, grief will surely pack up and depart. Happiness and sorrow alternate endlessly by the laws of karma.',
    },
    wordMeanings: {
      hi: [
        { word: 'आचा बूच (Aacha booch)', meaning: 'अचानक / बिना बताए' },
        { word: 'पहरा (Pahara)', meaning: 'समय / पहरेदारी / शासन' },
        { word: 'कूच (Kooch)', meaning: 'प्रस्थान करना / चले जाना' }
      ],
      pb: [
        { word: 'ਆਚਾ ਬੂਚ (Aacha booch)', meaning: 'ਅਚਾਨਕ ਹੀ' },
        { word: 'ਪਹਰਾ (Pahara)', meaning: 'ਸਮਾਂ / ਰਾਜ' },
        { word: 'ਕੂਚ (Kooch)', meaning: 'ਚਲੇ ਜਾਣਾ' }
      ],
      en: [
        { word: 'Aacha booch', meaning: 'Suddenly / Unawares / Uninvited' },
        { word: 'Pahara', meaning: 'Guard / Watch / Reign' },
        { word: 'Kooch', meaning: 'To depart / March away' }
      ]
    },
    contemplation: {
      hi: 'जब सुख और दुःख दोनों ही अस्थाई हैं और कर्मानुसार आते-जाते हैं, तो फिर मैं दुःख से इतना घबराता क्यों हूँ?',
      pb: 'ਕੀ ਮੈਂ ਸੁੱਖ-ਦੁੱਖ ਵਿੱਚ ਸਬਰ ਰੱਖਦਾ ਹਾਂ?',
      en: 'If joy and sorrow are both fleeting visitors, why do I let them disrupt my inner composure so easily?'
    },
    practicalApplication: {
      hi: 'दुःख के समय हताश न हों और सुख के समय अहंकारी न बनें; दोनों ही अवस्थाओं में समता और धैर्य बनाए रखें।',
      pb: 'ਸੁੱਖ-ਦੁੱਖ ਦੋਹਾਂ ਵਿੱਚ ਇੱਕ ਸਮਾਨ ਰਹੋ।',
      en: 'Remain peaceful in sorrow and humble in joy; let both pass with unshakeable calm and patience.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरुदेव! मुझे सुख-दुःख से ऊपर उठकर सदा स्थिर और शांत मन से रहने की शक्ति प्रदान करें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਸੁੱਖ-ਦੁੱਖ ਤੋਂ ਉੱਪਰ ਉੱਠ ਕੇ ਸ਼ਾਂਤ ਰਹਿਣ ਦਾ ਬਲ ਦਿਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Satguru! Bless me with the equanimity to rise above pleasure and pain, remaining centered in Your peace. Saheb Bandgi Saheb!'
    },
    quiz: []
  },
  {
    id: 'kram-6',
    number: 1620,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'कर्म को अंग - ६',
      pb: 'ਕਰਮ ਕੋ ਅੰਗ - ੬',
      en: 'Kram Ko Ang - 6',
    },
    text: {
      hi: 'तेरा बैरी कोइ नहीं, तेरा बैरी फैल।\nअपने फैल मिटाय ले, गली-गली कर सैल।।',
      pb: 'ਤੇਰਾ ਬੈਰੀ ਕੋਇ ਨਹੀਂ, ਤੇਰਾ ਬੈਰੀ ਫੈਲ।\nਅਪਣੇ ਫੈਲ ਮਿਟਾਯ ਲੇ, ਗਲੀ-ਗਲੀ ਕਰ ਸੈਲ।।',
      en: 'Tera bairy koi naheen, tera bairy phail. Apane phail mitaay le, galee-galee kar sail..',
    },
    transliteration: 'Tera bairy koi naheen, tera bairy phail. Apane phail mitaay le, galee-galee kar sail.',
    bhavarth: {
      hi: 'इस जगत में तेरी अपनी बुराइयों के अतिरिक्त अन्य कोई भी तेरा शत्रु नहीं है तू अपनी इन सभी बुराइयों को मिटा दे, तो फिर गली-गली में कहीं भी मुक्त रूप से विचरण कर, तुझे कोई नहीं रोकेगा। फिर तेरी अच्छाइयां ही तेरी मित्र होंगी।',
      pb: 'ਸੰਸਾਰ ਵਿੱਚ ਤੇਰੀ ਆਪਣੀ ਬੁਰਾਈ (ਔਗੁਣ) ਤੋਂ ਬਿਨਾਂ ਕੋਈ ਹੋਰ ਵੈਰੀ ਨਹੀਂ ਹੈ। ਤੂੰ ਆਪਣੇ ਔਗੁਣ ਮਿਟਾ ਲਵੇਂ, ਫਿਰ ਤੂੰ ਬਿਨਾਂ ਕਿਸੇ ਡਰ ਦੇ ਆਜ਼ਾਦ ਹੋ ਕੇ ਵਿਚਰ ਸਕਦਾ ਹੈਂ।',
      en: 'In this entire world, you have no enemy other than your own vices and misdeeds. Eradicate your own errors, and then you may walk freely through any street without fear; your own goodness will protect you.',
    },
    wordMeanings: {
      hi: [
        { word: 'बैरी (Bairy)', meaning: 'शत्रु / दुश्मन' },
        { word: 'फैल (Phail)', meaning: 'बुरा आचरण / अवगुण / पाप कर्म' },
        { word: 'सैल (Sail)', meaning: 'सैर करना / निर्भय घूमना' }
      ],
      pb: [
        { word: 'ਬੈਰੀ (Bairy)', meaning: 'ਦੁਸ਼ਮਣ' },
        { word: 'ਫੈਲ (Phail)', meaning: 'ਔਗੁਣ / ਬੁਰੇ ਕਰਮ' },
        { word: 'ਸੈਲ (Sail)', meaning: 'ਸੈਰ ਕਰਨਾ / ਘੁੰਮਣਾ' }
      ],
      en: [
        { word: 'Bairy', meaning: 'Enemy / Adversary' },
        { word: 'Phail', meaning: 'Vices / Defilements / Bad actions' },
        { word: 'Sail', meaning: 'To wander freely / Stroll in peace' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं बाहर शत्रुओं को ढूंढ रहा हूँ, जबकि मेरे असली शत्रु—काम, क्रोध, लोभ, मोह, अहंकार—मेरे अपने ही भीतर हैं?',
      pb: 'ਕੀ ਮੈਂ ਬਾਹਰੀ ਲੋਕਾਂ ਨੂੰ ਆਪਣਾ ਦੁਸ਼ਮਣ ਸਮਝਦਾ ਹਾਂ?',
      en: 'Am I searching for enemies in the outside world, ignoring the real adversaries (anger, greed, ego) lurking inside my own heart?'
    },
    practicalApplication: {
      hi: 'दूसरों पर दोषारोपण करना बंद करें; अपने भीतर के दोषों और दुर्गुणों को खोजकर उन्हें नष्ट करें।',
      pb: 'ਆਪਣੇ ਅੰਦਰ ਦੇ ਔਗੁਣਾਂ ਨੂੰ ਲੱਭ ਕੇ ਦੂਰ ਕਰੋ।',
      en: 'Cease pointing fingers at others; search out your own inner defilements and dissolve them through self-discipline.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरुदेव! मुझे अपने भीतर के विकारों को पराजित करने का सामर्थ्य और पावन विवेक प्रदान करें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਆਪਣੇ ਮਨ ਦੇ ਵਿਕਾਰਾਂ ਨੂੰ ਜਿੱਤਣ ਦਾ ਬਲ ਦਿਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Master! Bless me with the courage and clarity to defeat the demons within my own mind. Saheb Bandgi Saheb!'
    },
    quiz: []
  },
  {
    id: 'kram-7',
    number: 1621,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'कर्म को अंग - ७',
      pb: 'ਕਰਮ ਕੋ ਅੰਗ - ੭',
      en: 'Kram Ko Ang - 7',
    },
    text: {
      hi: 'कबीर कमाई आपनी, कबहु न निष्फल जाय।\nसात समुद्र आड़ा पड़े, मिलै अगाड़ी आय।।',
      pb: 'ਕਬੀਰ ਕਮਾਈ ਆਪਣੀ, ਕਬਹੂ ਨ ਨਿਸ਼ਫਲ ਜਾਏ।\nਸਾਤ ਸਮੁਦ੍ਰ ਆੜਾ ਪੜੇ, ਮਿਲੈ ਅਗਾੜੀ ਆਏ।।',
      en: 'Kabir kamaace aapanee, kabahu na nishphal jaay. Saat samudr aada padai, milai agaadee aay..',
    },
    transliteration: 'Kabir kamaace aapanee, kabahu na nishphal jaay. Saat samudr aada padai, milai agaadee aay.',
    bhavarth: {
      hi: 'सतगुरु कबीर साहेब फरमाते हैं कि अपने किए हुए कर्मों की कमाई कभी भी व्यर्थ नहीं जाती। चाहे उसके सम्मुख सात समुद्र भी पड़ जाएं, फिर भी वह सम्मुख आकर मिलती है, इसलिए जीव को प्रयास करके सतगुरु के बताये नाम ज्ञान अनुसार आचरण करना चाहिए।',
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ ਕਿ ਆਪਣੇ ਕੀਤੇ ਕਰਮਾਂ ਦਾ ਫਲ ਕਦੇ ਵਿਅਰਥ ਨਹੀਂ ਜਾਂਦਾ। ਚਾਹੇ ਵਿਚਕਾਰ ਸੱਤ ਸਮੁੰਦਰ ਵੀ ਆ ਜਾਣ, ਫਿਰ ਵੀ ਕਰਮਾਂ ਦਾ ਫਲ ਸਾਹਮਣੇ ਆ ਕੇ ਹੀ ਮਿਲਦਾ ਹੈ।',
      en: 'Satguru Kabir Saheb proclaims that the harvest of one’s own actions (karma) can never be lost. Even if seven oceans lie in the way as barriers, it will travel to find you. Therefore, let the seeker strive to perform noble deeds in the light of truth.',
    },
    wordMeanings: {
      hi: [
        { word: 'आड़ा (Aada)', meaning: 'रुकावट / बाधा' },
        { word: 'अगाड़ी (Agaadee)', meaning: 'सामने / आगे आकर' },
        { word: 'निष्फल (Nishphal)', meaning: 'व्यर्थ / बिना फल के' }
      ],
      pb: [
        { word: 'ਆੜਾ (Aada)', meaning: 'ਰੁਕਾਵਟ' },
        { word: 'ਅਗਾੜੀ (Agaadee)', meaning: 'ਸਾਹਮਣੇ' },
        { word: 'ਨਿਸ਼ਫਲ (Nishphal)', meaning: 'ਵਿਅਰਥ' }
      ],
      en: [
        { word: 'Aada', meaning: 'Obstruction / In between / Barrier' },
        { word: 'Agaadee', meaning: 'Directly in front / Future arrival' },
        { word: 'Nishphal', meaning: 'Fruitless / In vain' }
      ]
    },
    contemplation: {
      hi: 'जब मेरे द्वारा किया गया छोटा से छोटा कर्म भी ब्रह्मांड के नियम अनुसार सुरक्षित रहता है और लौटकर आता है, तो मैं सत्कर्मों के प्रति आलस क्यों करता हूँ?',
      pb: 'ਕੀ ਮੈਂ ਆਪਣੇ ਹਰ ਕਰਮ ਪ੍ਰਤੀ ਜਾਗਰੂਕ ਹਾਂ?',
      en: 'Since even my smallest action is preserved and eventually returns to me, why do I delay doing good?'
    },
    practicalApplication: {
      hi: 'सदा परोपकार, सत्यभाषण और सुमिरन की पवित्र कमाई जमा करें, यह कभी नष्ट नहीं होगी।',
      pb: 'ਹਮੇਸ਼ਾ ਭਗਤੀ ਤੇ ਚੰਗੇ ਕਰਮਾਂ ਦੀ ਕਮਾਈ ਇਕੱਠੀ ਕਰੋ।',
      en: 'Sow only thoughts of kindness and practice chanting; this spiritual treasure is never lost.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु कबीर साहेब! मुझे निष्काम भाव से सत्कर्म और सुमिरन करने की प्रेरणा प्रदान करें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਨਿਰਸਵਾਰਥ ਸੇਵਾ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Satguru Kabir! Guide me to perform selfless deeds and deep meditation, trusting in Your divine law. Saheb Bandgi Saheb!'
    },
    quiz: []
  },
  {
    id: 'kram-8',
    number: 1622,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'कर्म को अंग - ८',
      pb: 'ਕਰਮ ਕੋ ਅੰਗ - ੮',
      en: 'Kram Ko Ang - 8',
    },
    text: {
      hi: 'परारब्ध पहिले बना, पीछे बना सरीर।\nकबीर अचम्भा है यही, मन नहिं बांधे धीर।।',
      pb: 'ਪਰਾਰਬਧ ਪਹਿਲੇ ਬਨਾ, ਪੀਛੇ ਬਨਾ ਸਰੀਰ।\nਕਬੀਰ ਅਚੰਭਾ ਹੈ ਯਹੀ, ਮਨ ਨਹਿਂ ਬਾਂਧੇ ਧੀਰ।।',
      en: 'Paraarabdh pahile bana, peechhe bana sareer. Kabir achambha hai yahee, man nahin baandhe dheer..',
    },
    transliteration: 'Paraarabdh pahile bana, peechhe bana sareer. Kabir achambha hai yahee, man nahin baandhe dheer.',
    bhavarth: {
      hi: 'जिसे प्राणी को निश्चित रूप से भोगना ही पड़ता है, उस प्रारब्ध की रचना उसके अपने शरीर-निर्माण से पहले ही हुई है। सतगुरु कबीर साहेब फरमाते हैं कि यही आश्चर्य है कि यह सब जानकर भी मन का धैर्य नहीं बंधता, अर्थात वह कर्म फल से आशंकित रहता है।',
      pb: 'ਪ੍ਰਾਰਬਧ (ਕਿਸਮਤ) ਪਹਿਲਾਂ ਬਣੀ ਹੈ ਅਤੇ ਸਰੀਰ ਬਾਅਦ ਵਿੱਚ ਬਣਿਆ ਹੈ। ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ ਕਿ ਇਹੀ ਹੈਰਾਨੀ ਦੀ ਗੱਲ ਹੈ ਕਿ ਸਭ ਜਾਣਦੇ ਹੋਏ ਵੀ ਮਨ ਧੀਰਜ ਨਹੀਂ ਰੱਖਦਾ।',
      en: 'Destiny (the blueprint of past actions) is created before the physical body is ever formed. Satguru Kabir Saheb proclaims: The great wonder is that even knowing this, the anxious mind refuses to hold onto patience.',
    },
    wordMeanings: {
      hi: [
        { word: 'परारब्ध (Paraarabdh)', meaning: 'पूर्व संचित कर्मों का फल / भाग्य' },
        { word: 'अचम्भा (Achambha)', meaning: 'आश्चर्य / हैरत' },
        { word: 'धीर (Dheer)', meaning: 'धैर्य / धीरज / शांति' }
      ],
      pb: [
        { word: 'ਪਰਾਰਬਧ (Paraarabdh)', meaning: 'ਕਿਸਮਤ / ਕਰਮਾਂ ਦਾ ਲੇਖਾ' },
        { word: 'ਅਚੰਭਾ (Achambha)', meaning: 'ਹੈਰਾਨੀ' },
        { word: 'ਧੀਰ (Dheer)', meaning: 'ਧੀਰਜ / ਸਬਰ' }
      ],
      en: [
        { word: 'Paraarabdh', meaning: 'Accumulated destiny / Karma' },
        { word: 'Achambha', meaning: 'Wonder / Surprise' },
        { word: 'Dheer', meaning: 'Patience / Composure' }
      ]
    },
    contemplation: {
      hi: 'जब इस देह के मिलने से पहले ही मेरा प्रारब्ध तय था, तो मैं आने वाले कल को लेकर इतना चिंतित और अशांत क्यों रहता हूँ?',
      pb: 'ਕੀ ਮੇਰਾ ਮਨ ਆਉਣ ਵਾਲੇ ਕੱਲ੍ਹ ਦੀ ਚਿੰਤਾ ਵਿੱਚ ਰਹਿੰਦਾ ਹੈ?',
      en: 'Since my basic destiny was outlined before this body appeared, why do I spend my nights in anxious dread of tomorrow?'
    },
    practicalApplication: {
      hi: 'भविष्य की चिंताओं को त्यागकर आज के वर्तमान क्षण में जिएँ और केवल सतगुरु के सुमिरन में मन लगाएं।',
      pb: 'ਚਿੰਤਾ ਛੱਡ ਕੇ ਅੱਜ ਦੇ ਸਮੇਂ ਵਿੱਚ ਜੀਓ।',
      en: 'Relinquish anxiety; focus your energy on the present moment and rest your mind in absolute remembrance.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरुदेव! मेरे मन को धीरज और गहरे संतोष की प्राप्ति करवाएँ ताकि मैं सदा शांत रहूँ। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੇ ਮਨ ਨੂੰ ਸਬਰ ਤੇ ਸੰਤੋਖ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Satguru! Anchor my mind in quiet contentment and deep patience, free of fear. Saheb Bandgi Saheb!'
    },
    quiz: []
  },
  {
    id: 'kram-9',
    number: 1623,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'कर्म को अंग - ९',
      pb: 'ਕਰਮ ਕੋ ਅੰਗ - ੯',
      en: 'Kram Ko Ang - 9',
    },
    text: {
      hi: 'रे मन भाग्यहि भूल मत, जो आया मन भाग।\nसो तेरा टलता नहीं, निश्चय संसै त्याग।।',
      pb: 'ਰੇ ਮਨ ਭਾਗ੍ਯਹਿ ਭੂਲ ਮਤ, ਜੋ ਆਯਾ ਮਨ ਭਾਗ।\nਸੋ ਤੇਰਾ ਟਲਤਾ ਨਹੀਂ, ਨਿਸ਼੍ਚਯ ਸੰਸੈ ਤ੍ਯਾਗ।।',
      en: 'Re man bhaagyahi bhool mat, jo aaya man bhaag. So tera talata naheen, nishchay sansai tyaag..',
    },
    transliteration: 'Re man bhaagyahi bhool mat, jo aaya man bhaag. So tera talata naheen, nishchay sansai tyaag.',
    bhavarth: {
      hi: 'अरे मन! तू अपने भाग्य को मत भूल । जो तुझे प्राप्त हो, उसे अपना भाग्य समझ ले, जो तेरे भाग्य का भोग (सुख-दुःख) है, वह टल नहीं सकता। अतः निश्चय ही संशय का त्याग कर दे।',
      pb: 'ਹੇ ਮਨ! ਆਪਣੀ ਕਿਸਮਤ ਨੂੰ ਨਾ ਭੁੱਲ। ਜੋ ਮਿਲਿਆ ਹੈ, ਉਸਨੂੰ ਸਵੀਕਾਰ ਕਰ। ਜੋ ਲਿਖਿਆ ਹੈ, ਉਹ ਟਲ ਨਹੀਂ ਸਕਦਾ; ਇਸ ਲਈ ਸਾਰੇ ਸ਼ੰਕੇ ਛੱਡ ਦੇ।',
      en: 'O mind, do not forget the cosmic balance. Whatever has come to you, accept it as your portion; what is ordained cannot be bypassed. Therefore, abandon all doubts and rest in peace.',
    },
    wordMeanings: {
      hi: [
        { word: 'भाग्यहि (Bhaagyahi)', meaning: 'भाग्य / प्रारब्ध' },
        { word: 'भाग (Bhaag)', meaning: 'हिस्सा / जो प्राप्त हुआ हो' },
        { word: 'संसै (Sansai)', meaning: 'संदेह / शंका / संशय' }
      ],
      pb: [
        { word: 'ਭਾਗ੍ਯਹਿ (Bhaagyahi)', meaning: 'ਕਿਸਮਤ' },
        { word: 'ਭਾਗ (Bhaag)', meaning: 'ਹਿੱਸਾ' },
        { word: 'ਸੰਸੈ (Sansai)', meaning: 'ਸ਼ੰਕਾ / ਭਰਮ' }
      ],
      en: [
        { word: 'Bhaagyahi', meaning: 'Fate / Ordained share' },
        { word: 'Bhaag', meaning: 'Portion / Share / Allotment' },
        { word: 'Sansai', meaning: 'Doubt / Worry / Confusion' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं अप्राप्य के लिए रो रहा हूँ, या जो मुझे मिला है उसे ईश्वर का प्रसाद मानकर संतुष्ट हूँ?',
      pb: 'ਕੀ ਮੈਂ ਮਿਲੇ ਹੋਏ ਸੁੱਖਾਂ ਵਿੱਚ ਸੰਤੁਸ਼ਟ ਹਾਂ?',
      en: 'Am I constantly grieving over what I lack, or am I able to accept my current situation as my learning portion?'
    },
    practicalApplication: {
      hi: 'तृष्णा और लालच को छोड़कर, संतोष भाव अपनाएं और हर हाल में सतगुरु की दया का अनुभव करें।',
      pb: 'ਲਾਲਚ ਛੱਡ ਕੇ ਜੋ ਮਿਲਿਆ ਹੈ ਉਸ ਵਿੱਚ ਸੰਤੋਖ ਰੱਖੋ।',
      en: 'Subdue greed and insatiable desires; embrace contentment and recognize the grace hidden in all circumstances.'
    },
    samarpanPrayer: {
      hi: 'हे समर्थ सतगुरुदेव! मुझे संतोष रूपी धन प्रदान करें ताकि मेरा मन सदा संशय रहित रहे। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਸੰਤੋਖ ਦੀ ਦਾਤ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Almighty Master! Bestow upon me the treasure of contentment, freeing my heart from doubt. Saheb Bandgi Saheb!'
    },
    quiz: []
  },
  {
    id: 'kram-10',
    number: 1624,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'कर्म को अंग - १०',
      pb: 'ਕਰਮ ਕੋ ਅੰਗ - ੧੦',
      en: 'Kram Ko Ang - 10',
    },
    text: {
      hi: 'लिखा मिटै नहीं करम का, गुरु कर भज हरिनाम।\nसीधे मारग नित चलै, दया धर्म विसराम।।',
      pb: 'ਲਿਖਾ ਮਿਟੈ ਨਹੀਂ ਕਰਮ ਕਾ, ਗੁਰੂ ਕਰ ਭਜ ਹਰਿਨਾਮ।\nਸੀਧੇ ਮਾਰਗ ਨਿਤ ਚਲੈ, ਦਯਾ ਧਰਮ ਵਿਸਰਾਮ।।',
      en: 'Likha mitai naheen karam ka, guru kar bhaj harinaam. Seedhe maarag nit chalai, daya dharam visaraam..',
    },
    transliteration: 'Likha mitai naheen karam ka, guru kar bhaj harinaam. Seedhe maarag nit chalai, daya dharam visaraam.',
    bhavarth: {
      hi: 'कर्मानुसार जैसा अपना भाग्य बना है, वह मिट नहीं सकता, अतः इससे निश्चित रहना चाहिए। सतगुरु की शरण में जाकर, परमात्मा के नाम-ज्ञान का ध्यान-भजन कर, नित्य ही दया-धर्म के सन्मार्ग पर चलना चाहिए, इसी से जीवन में विश्राम प्राप्त होगा, अर्थात जीवन का कल्याण होगा।',
      pb: 'ਕਰਮਾਂ ਦਾ ਲਿਖਿਆ ਲੇਖ ਮਿਟ ਨਹੀਂ ਸਕਦਾ, ਇਸ ਲਈ ਚਿੰਤਾ ਛੱਡ ਕੇ ਗੁਰੂ ਧਾਰਨ ਕਰਕੇ ਨਾਮ ਜਪੋ। ਦਇਆ ਤੇ ਧਰਮ ਦੇ ਸਿੱਧੇ ਰਸਤੇ ਚੱਲੋ, ਇਸ ਨਾਲ ਹੀ ਆਤਮਿਕ ਸੁੱਖ ਮਿਲੇਗਾ।',
      en: 'The decree of karma cannot be erased; therefore, surrender to the Satguru and meditate upon the Holy Name. Walk steadfastly on the path of compassion and righteousness; therein lies the soul’s ultimate rest.',
    },
    wordMeanings: {
      hi: [
        { word: 'लिखा (Likha)', meaning: 'भाग्य का लेख / प्रारब्ध' },
        { word: 'हरिनाम (Harinaam)', meaning: 'सत्यनाम / परमात्मा का स्मरण' },
        { word: 'सीधे मारग (Seedhe maarag)', meaning: 'सत्य का मार्ग / सत्पथ' },
        { word: 'विसराम (Visaraam)', meaning: 'विश्राम / परम शांति / मोक्ष' }
      ],
      pb: [
        { word: 'ਲਿਖਾ (Likha)', meaning: 'ਲਿਖਿਆ ਹੋਇਆ ਲੇਖ' },
        { word: 'ਹਰਿਨਾਮ (Harinaam)', meaning: 'ਸਤਯਨਾਮ' },
        { word: 'ਸੀਧੇ ਮਾਰਗ (Seedhe maarag)', meaning: 'ਸੱਚਾ ਰਸਤਾ' },
        { word: 'ਵਿਸਰਾਮ (Visaraam)', meaning: 'ਆਤਮਿਕ ਸੁੱਖ / ਸ਼ਾਂਤੀ' }
      ],
      en: [
        { word: 'Likha', meaning: 'The written decree of fate' },
        { word: 'Harinaam', meaning: 'The Divine Name of Truth' },
        { word: 'Seedhe maarag', meaning: 'Direct upright path' },
        { word: 'Visaraam', meaning: 'Rest / Ultimate peace / Liberation' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं कड़े प्रारब्ध को बदलने की चिंता में अपना समय व्यर्थ कर रहा हूँ, या दया और धर्म के सीधे मार्ग पर चलकर परम शांति पा रहा हूँ?',
      pb: 'ਕੀ ਮੈਂ ਦਇਆ ਅਤੇ ਧਰਮ ਦੇ ਮਾਰਗ \'ਤੇ ਚੱਲਦਾ ਹਾਂ?',
      en: 'Am I wasting time trying to negotiate my past fate, rather than quietly walking the straight path of mercy and devotion?'
    },
    practicalApplication: {
      hi: 'अतीत के लेख की चिंता छोड़कर वर्तमान में सतगुरु की शरण लें और दीन-दुखियों पर दया करते हुए धर्म का पालन करें।',
      pb: 'ਗੁਰੂ ਦੀ ਸ਼ਰਨ ਲੈ ਕੇ ਦਇਆ ਤੇ ਧਰਮ ਦਾ ਪਾਲਣ ਕਰੋ।',
      en: 'Seek refuge in the Satguru; practice daily compassion and let your actions reflect pure righteousness.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरु कबीर साहेब! मुझे वह पावन भक्ति दीजिए जिससे मैं सीधे मार्ग पर चलकर परम विश्राम प्राप्त कर सकूँ। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਆਪਣੇ ਸੱਚੇ ਮਾਰਗ \'ਤੇ ਚੱਲਣ ਦੀ ਬੁੱਧੀ ਦਿਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Satguru Kabir! Guide me to walk the straight road of compassion and rest in Your eternal peace. Saheb Bandgi Saheb!'
    },
    quiz: []
  },
  {
    id: 'kram-11',
    number: 1625,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'कर्म को अंग - ११',
      pb: 'ਕਰਮ ਕੋ ਅੰਗ - ੧੧',
      en: 'Kram Ko Ang - 11',
    },
    text: {
      hi: 'कबीर चंदन पर जला, तीतर बैठा मांहि।\nहम तो दाझत पंख बिन, तुम दाजत हो काहि ।।',
      pb: 'ਕਬੀਰ ਚੰਦਨ ਪਰ ਜਲਾ, ਤੀਤਰ ਬੈਠਾ ਮਾਂਹਿ।\nਹਮ ਤੋ ਦਾਝਤ ਪੰਖ ਬਿਨ, ਤੁਮ ਦਾਜਤ ਹੋ ਕਾਹਿ ।।',
      en: 'Kabir chandan par jala, teetar baitha maanhi. Ham to daajhat pankh bin, tum daajat ho kaahi..',
    },
    transliteration: 'Kabir chandan par jala, teetar baitha maanhi. Ham to daajhat pankh bin, tum daajat ho kaahi.',
    bhavarth: {
      hi: 'सतगुरु कबीर साहेब फरमाते हैं कि चंदन के वृक्ष में आग लग गई। उस पर एक तीतर आकर बैठ गया, तब वृक्ष ने कहा कि हम तो इसलिए जलते हैं कि हमारे पास पंख नहीं हैं, परंतु तुम्हारे पास तो पंख हैं। तुम तो उड़ सकते हो, फिर भला यहां बैठे हुए क्यों जलते हो? अर्थात जीव माया मोह के वशीभूत होकर मुक्तिमार्ग से अनभिज्ञ होकर भवसागर के जंजाल में फंसा हुआ है।',
      pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ ਕਿ ਚੰਦਨ ਦੇ ਰੁੱਖ ਨੂੰ ਅੱਗ ਲੱਗ ਗਈ, ਉਸ \'ਤੇ ਇੱਕ ਤੀਤਰ ਬੈਠਾ ਸੀ। ਰੁੱਖ ਨੇ ਕਿਹਾ: ਮੈਂ ਤਾਂ ਬਿਨਾਂ ਖੰਭਾਂ ਦੇ ਹੋਣ ਕਰਕੇ ਸੜ ਰਿਹਾ ਹਾਂ, ਪਰ ਤੇਰੇ ਕੋਲ ਤਾਂ ਖੰਭ ਹਨ, ਤੂੰ ਕਿਉਂ ਇੱਥੇ ਬੈਠ ਕੇ ਸੜ ਰਿਹਾ ਹੈਂ? ਭਾਵ, ਜੀਵ ਕੋਲ ਵਿਵੇਕ ਹੁੰਦੇ ਹੋਏ ਵੀ ਮੋਹ ਵਿੱਚ ਫਸ ਕੇ ਸੜ ਰਿਹਾ ਹੈ।',
      en: 'The sandalwood tree caught fire, and a partridge sat amidst the flames. The tree spoke: "I burn because I have no wings to fly; but you have wings and can soar away, so why do you sit here and burn?" Similarly, the human soul, blessed with discrimination, foolishly chooses to burn in the fire of worldly attachment.',
    },
    wordMeanings: {
      hi: [
        { word: 'दाझत (Daajhat)', meaning: 'जल रहे हैं / तड़प रहे हैं' },
        { word: 'काहि (Kaahi)', meaning: 'किसलिए / क्यों' },
        { word: 'चंदन (Chandan)', meaning: 'चंदन का वृक्ष / सांसारिक देह' },
        { word: 'तीतर (Teetar)', meaning: 'तीतर पक्षी / जीवात्मा' }
      ],
      pb: [
        { word: 'ਦਾਝਤ (Daajhat)', meaning: 'ਸੜ ਰਹੇ ਹਾਂ' },
        { word: 'ਕਾਹਿ (Kaahi)', meaning: 'ਕਿਉਂ / ਕਿਸ ਲਈ' },
        { word: 'ਤੀਤਰ (Teetar)', meaning: 'ਪੰਛੀ / ਜੀਵਾਤਮਾ' }
      ],
      en: [
        { word: 'Daajhat', meaning: 'Burning / Singeing' },
        { word: 'Kaahi', meaning: 'Why / For what reason' },
        { word: 'Teetar', meaning: 'Partridge / Individual soul' }
      ]
    },
    contemplation: {
      hi: 'जब मुझे सतगुरु द्वारा ज्ञान और विवेक रूपी पंख मिले हैं, तो फिर मैं इस माया-जगत की चिंताओं और वासनाओं की अग्नि में बैठकर क्यों जल रहा हूँ?',
      pb: 'ਕੀ ਮੈਂ ਗਿਆਨ ਹੁੰਦੇ ਹੋਏ ਵੀ ਮੋਹ ਵਿੱਚ ਸੜ ਰਿਹਾ ਹਾਂ?',
      en: 'Blessed with intellect and the Guru’s wisdom to rise above, why do I choose to sit in the burning furnace of worldly attachments?'
    },
    practicalApplication: {
      hi: 'विवेक का उपयोग करें; संसार की क्षणभंगुरता को पहचानकर अपनी सूरत को सत्य शब्द के साथ ऊपर आकाश में उठाएँ।',
      pb: 'ਆਪਣੇ ਗਿਆਨ ਦਾ ਇਸਤੇਮਾਲ ਕਰਕੇ ਬੰਧਨਾਂ ਤੋਂ ਮੁਕਤ ਹੋਵੋ।',
      en: 'Spread the wings of your spiritual discrimination (Surat); fly high above material worries and rest in the Word.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरुदेव! मुझे इस संसार की आसक्ति रूपी दावानल से बचाकर अपने पावन ज्ञान लोक में स्थान प्रदान करें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਸੰਸਾਰ ਦੇ ਜੰਜਾਲਾਂ ਤੋਂ ਮੁਕਤ ਕਰੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Satguru! Rescue me from the blazing forest fire of attachment; let my soul soar into Your tranquil sky. Saheb Bandgi Saheb!'
    },
    quiz: []
  },
  {
    id: 'kram-12',
    number: 1626,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'कर्म को अंग - १२',
      pb: 'ਕਰਮ ਕੋ ਅੰਗ - ੧੨',
      en: 'Kram Ko Ang - 12',
    },
    text: {
      hi: 'चहै अकास पताल जा, फोड़ि जाहु ब्रह्मण्ड ।\nकहैं कबीर मिटिहै नहीं, देह धरे का दण्ड।।',
      pb: 'ਚਹੈ ਅਕਾਸ ਪਤਾਲ ਜਾ, ਫੋੜਿ ਜਾਹੁ ਬ੍ਰਹ੍ਮਣ੍ਡ ।\nਕਹੈਂ ਕਬੀਰ ਮਿਟਿਹੈ ਨਹੀਂ, ਦੇਹ ਧਰੇ ਕਾ ਦਣ੍ਡ।।',
      en: 'Chahai akaas pataal ja, phodi jaahu brahmand. Kahain kabir mitihai naheen, deh dhare ka dand..',
    },
    transliteration: 'Chahai akaas pataal ja, phodi jaahu brahmand. Kahain kabir mitihai naheen, deh dhare ka dand.',
    bhavarth: {
      hi: 'सतगुरु कबीर साहेब फरमाते हैं कि चाहे आकाश-पाताल में चले जाओ, ब्रह्मांड फोड़कर ही क्यों न निकल जाओ, शरीर धारण करने का दंड तो अवश्य ही भोगना पड़ेगा। चाहे कोई उपाय करो, परंतु यह बिना भोगे मिट नहीं सकता।',
      pb: 'ਚਾਹੇ ਆਕਾਸ਼ ਚਲੇ ਜਾਓ, ਚਾਹੇ ਪਾਤਾਲ, ਚਾਹੇ ਬ੍ਰਹਿਮੰਡ ਪਾੜ ਕੇ ਬਾਹਰ ਨਿਕਲ ਜਾਓ; ਸਰੀਰ ਧਾਰਨ ਕਰਨ ਦਾ ਲੇਖਾ (ਕਰਮ ਫਲ) ਤਾਂ ਭੁਗਤਣਾ ਹੀ ਪਵੇਗਾ। ਇਹ ਬਿਨਾਂ ਭੋਗੇ ਮਿਟ ਨਹੀਂ ਸਕਦਾ।',
      en: 'Even if you travel to the heavens or the netherworld, or break through the cosmic egg itself, the penalty of occupying a physical body must be paid. No physical escape is possible from the laws of karma.',
    },
    wordMeanings: {
      hi: [
        { word: 'अकास (Akaas)', meaning: 'आकाश / स्वर्ग' },
        { word: 'फोड़ि (Phodi)', meaning: 'तोड़कर / भेदकर' },
        { word: 'दण्ड (Dand)', meaning: 'सजा / प्रारब्ध भोग' }
      ],
      pb: [
        { word: 'ਅਕਾਸ (Akaas)', meaning: 'ਆਕਾਸ਼' },
        { word: 'ਫੋੜਿ (Phodi)', meaning: 'ਪਾੜ ਕੇ / ਤੋੜ ਕੇ' },
        { word: 'ਦਣ੍ਡ (Dand)', meaning: 'ਕਰਮਾਂ ਦਾ ਫਲ / ਸਜ਼ਾ' }
      ],
      en: [
        { word: 'Akaas', meaning: 'Heavens / Sky' },
        { word: 'Phodi', meaning: 'Piercing / Breaking open' },
        { word: 'Dand', meaning: 'Penalty / Retribution / Karma-dues' }
      ]
    },
    contemplation: {
      hi: 'जब देह धारण करने का सुख-दुःख रूपी करम भोग अटल है, तो फिर मैं व्यर्थ की शारीरिक पीड़ा और परिस्थितियों से इतना विचलित क्यों होता हूँ?',
      pb: 'ਕੀ ਮੈਂ ਕਰਮਾਂ ਦੇ ਨੇਮ ਨੂੰ ਸਵੀਕਾਰ ਕਰਦਾ ਹਾਂ?',
      en: 'Since physical pains and earthly situations are the inevitable tax of having a body, why do I let them steal my spiritual joy?'
    },
    practicalApplication: {
      hi: 'शारीरिक व्याधियों और कठिनाइयों को प्रारब्ध का दंड मानकर धीरज से सहन करें और आत्मा को सत्यनाम में लीन रखें।',
      pb: 'ਸਰੀਰਕ ਕਸ਼ਟਾਂ ਨੂੰ ਧੀਰਜ ਨਾਲ ਸਹਿਣ ਕਰੋ ਤੇ ਨਾਮ ਜਪੋ।',
      en: 'Endure bodily and earthly changes with serene patience; keep your core identity anchored in the timeless soul.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरुदेव! मुझे प्रारब्ध के भोगों को हंसते-हंसते सहन करने और आपके चरणों का ध्यान बनाए रखने की शक्ति दें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਭਾਣਾ ਮੰਨਣ ਦਾ ਬਲ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Satguru! Grant me the spiritual stamina to pay my bodily dues with a smile, never losing sight of Your feet. Saheb Bandgi Saheb!'
    },
    quiz: []
  },
  {
    id: 'kram-13',
    number: 1627,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'कर्म को अंग - १३',
      pb: 'ਕਰਮ ਕੋ ਅੰਗ - ੧੩',
      en: 'Kram Ko Ang - 13',
    },
    text: {
      hi: 'जहं यह जियरा पगु धरे, बखत बराबर साथ।\nजो है लिखा नसीब में, चलै न अविचल बात।।',
      pb: 'ਜਹਂ ਯਹ ਜਿਯਰਾ ਪਗੁ ਧਰੇ, ਬਖਤ ਬਰਾਬਰ ਸਾਥ।\nਜੋ ਹੈ ਲਿਖਾ ਨਸੀਬ ਮੇਂ, ਚਲੈ ਨ ਅਵਿਚਲ ਬਾਤ।।',
      en: 'Jahan yeh jiyara pagu dhare, bakhat baraabar saath. Jo hai likha naseeb mein, chalai na avichal baat..',
    },
    transliteration: 'Jahan yeh jiyara pagu dhare, bakhat baraabar saath. Jo hai likha naseeb mein, chalai na avichal baat.',
    bhavarth: {
      hi: 'यह जीव जहां-जहां भी पैर रखता जाता है, समयानुसार उसके कर्म बराबर उसके साथ ही आगे बढ़ते रहते हैं। जैसा उसके भाग्य में लिखा है, वैसा ही निश्चित रूप से उसे भोगना पड़ता है। वह तो टालने से भी नहीं टल सकता।',
      pb: 'ਇਹ ਜੀਵ ਜਿੱਥੇ ਵੀ ਕਦਮ ਰੱਖਦਾ ਹੈ, ਸਮਾਂ (ਕਰਮ ਫਲ) ਉਸਦੇ ਨਾਲ-ਨਾਲ ਚੱਲਦਾ ਹੈ। ਜੋ ਕਿਸਮਤ ਵਿੱਚ ਲਿਖਿਆ ਹੈ, ਉਹ ਕਦੇ ਟਲ ਨਹੀਂ ਸਕਦਾ।',
      en: 'Wherever this living soul places its foot, its past karma (represented as time) walks alongside step-for-step. What is etched in your destiny will surely transpire; it is an unalterable decree.',
    },
    wordMeanings: {
      hi: [
        { word: 'जियरा (Jiyara)', meaning: 'जीवात्मा / जीव' },
        { word: 'पगु (Pagu)', meaning: 'पैर / कदम' },
        { word: 'बखत (Bakhat)', meaning: 'समय / कर्म का फल' },
        { word: 'अविचल (Avichal)', meaning: 'अटल / जो बदला न जा सके' }
      ],
      pb: [
        { word: 'ਜਿਯਰਾ (Jiyara)', meaning: 'ਜੀਵ / ਆਤਮਾ' },
        { word: 'ਪਗੁ (Pagu)', meaning: 'ਕਦਮ' },
        { word: 'ਬਖਤ (Bakhat)', meaning: 'ਸਮਾਂ' },
        { word: 'ਅਵਿਚਲ (Avichal)', meaning: 'ਅਟੱਲ' }
      ],
      en: [
        { word: 'Jiyara', meaning: 'Living soul / Individual' },
        { word: 'Pagu', meaning: 'Foot / Step' },
        { word: 'Bakhat', meaning: 'Time / Karma’s timing' },
        { word: 'Avichal', meaning: 'Unshakable / Immutable' }
      ]
    },
    contemplation: {
      hi: 'जब मेरा प्रारब्ध साए की तरह मेरे साथ चलता है, तो फिर मैं बाहर भागने और पलायन करने की चेष्टा क्यों करता हूँ?',
      pb: 'ਕੀ ਮੈਂ ਆਪਣੇ ਹਾਲਾਤਾਂ ਤੋਂ ਭੱਜਣ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰਦਾ ਹਾਂ?',
      en: 'Since my karma shadows me wherever I go, why do I dream of running away to find external escapes?'
    },
    practicalApplication: {
      hi: 'स्थान बदलने के बजाय मन की दशा बदलें; जहाँ भी रहें, शांत मन से सतगुरु का सुमिरन करें।',
      pb: 'ਬਾਹਰੀ ਸਥਾਨ ਬਦਲਣ ਦੀ ਬਜਾਏ ਮਨ ਦੀ ਹਾਲਤ ਬਦਲੋ।',
      en: 'Instead of seeking geographic escapes, change your state of mind; meditate quietly wherever you are placed.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरुदेव! मुझे जहाँ भी रखें, बस अपने चरणों की पवित्र भक्ति और अखंड सुमिरन प्रदान करें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਆਪਣੇ ਚਰਨਾਂ ਦੀ ਪ੍ਰੀਤ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Guru! Wherever I am stationed, let my heart remain glued to Your holy feet. Saheb Bandgi Saheb!'
    },
    quiz: []
  },
  {
    id: 'kram-14',
    number: 1628,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'कर्म को अंग - १४',
      pb: 'ਕਰਮ ਕੋ ਅੰਗ - ੧੪',
      en: 'Kram Ko Ang - 14',
    },
    text: {
      hi: 'बाहिर सुख दुख देन को, हुकुम करै मन मांय।\nजब उठे मन बखत को, बाहिर रूप धरि आय।।',
      pb: 'ਬਾਹਿਰ ਸੁਖ ਦੁਖ ਦੇਨ ਕੋ, ਹੁਕੁਮ ਕਰੈ ਮਨ ਮਾਂਯ।\nਜਬ ਉਠੇ ਮਨ ਬਖਤ ਕੋ, ਬਾਹਿਰ ਰੂਪ ਧਰਿ ਆਯ।।',
      en: 'Baahir sukh dukh den ko, hukum karai man maany. Jab uthe man bakhat ko, baahir roop dhari aay..',
    },
    transliteration: 'Baahir sukh dukh den ko, hukum karai man maany. Jab uthe man bakhat ko, baahir roop dhari aay.',
    bhavarth: {
      hi: 'प्रारब्ध के रूप में यह मन भीतर से ही शरीर को सुख-दुःख देने की आज्ञा देता है और जब भोगने का समय आता है, तो यही मन प्रारब्ध का रूप धरकर बाहर आता है।',
      pb: 'ਸਰੀਰ ਨੂੰ ਸੁੱਖ-ਦੁੱਖ ਦੇਣ ਦਾ ਹੁਕਮ ਮਨ ਅੰਦਰੋਂ ਹੀ ਦਿੰਦਾ ਹੈ। ਜਦੋਂ ਭੋਗਣ ਦਾ ਸਮਾਂ ਆਉਂਦਾ ਹੈ, ਤਾਂ ਇਹੀ ਮਨ ਬਾਹਰੀ ਹਾਲਾਤਾਂ ਦਾ ਰੂਪ ਧਾਰਨ ਕਰ ਲੈਂਦਾ ਹੈ।',
      en: 'It is the mind within that issues the decree to dispense pleasure or pain to the body. When the appointed hour arrives, this very mind projects itself outward as external destiny.',
    },
    wordMeanings: {
      hi: [
        { word: 'मांय (Maany)', meaning: 'भीतर / मन के अंदर' },
        { word: 'हुकुम (Hukum)', meaning: 'आज्ञा / आदेश' },
        { word: 'बखत (Bakhat)', meaning: 'समय / प्रारब्ध' }
      ],
      pb: [
        { word: 'ਮਾਂਯ (Maany)', meaning: 'ਅੰਦਰ / ਮਨ ਵਿੱਚ' },
        { word: 'ਹੁਕੁਮ (Hukum)', meaning: 'ਆਗਿਆ / ਹੁਕਮ' },
        { word: 'ਬਖਤ (Bakhat)', meaning: 'ਸਮਾਂ / ਵਕਤ' }
      ],
      en: [
        { word: 'Maany', meaning: 'Within / Inside the mind' },
        { word: 'Hukum', meaning: 'Order / Decree / Mandate' },
        { word: 'Bakhat', meaning: 'Appointed time / Fate' }
      ]
    },
    contemplation: {
      hi: 'जब सुख और दुःख की उत्पत्ति और उनका अनुभव पूरी तरह मेरे अपने ही मन के भीतर है, तो फिर मैं बाहर की दुनिया को दोष क्यों देता हूँ?',
      pb: 'ਕੀ ਮੈਂ ਆਪਣੀ ਅਸ਼ਾਂਤੀ ਲਈ ਬਾਹਰੀ ਚੀਜ਼ਾਂ ਨੂੰ ਜ਼ਿੰਮੇਵਾਰ ਮੰਨਦਾ ਹਾਂ?',
      en: 'Since both grief and joy are internally manufactured and projected by my own mind, why do I blame external events for my state?'
    },
    practicalApplication: {
      hi: 'मन को सुमिरन और विवेक द्वारा शांत करें; जब मन भीतर से शांत होगा, तो बाहर की परिस्थितियाँ स्वतः सुखद लगेंगी।',
      pb: 'ਨਾਮ ਜਪ ਕੇ ਮਨ ਨੂੰ ਸ਼ਾਂਤ ਕਰੋ, ਸਭ ਠੀਕ ਹੋਵੇਗਾ।',
      en: 'Quiet your mind through meditation; when the projector within is peaceful, the outer movie of life ceases to trouble you.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरुदेव! मेरे चंचल मन को शांत कर दीजिए ताकि यह केवल आपके पावन सत्यनाम का ही हुकुम माने। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੇ ਚੰਚਲ ਮਨ ਨੂੰ ਆਪਣੇ ਸਤਯਨਾਮ ਵਿੱਚ ਲਗਾਓ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Satguru! Tame my wandering mind so that it obeys only the command of Your holy Word. Saheb Bandgi Saheb!'
    },
    quiz: []
  },
  {
    id: 'kram-15',
    number: 1629,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'कर्म को अंग - १५',
      pb: 'ਕਰਮ ਕੋ ਅੰਗ - ੧੫',
      en: 'Kram Ko Ang - 15',
    },
    text: {
      hi: 'कीन्हे बिना उपाय कछु, देव कबहु नहिं देत।\nखेत बीज बोवै नहीं, तो क्यौं जामैं खेत।।',
      pb: 'ਕੀਨ੍ਹੇ ਬਿਨਾ ਉਪਾਯ ਕਛੁ, ਦੇਵ ਕਬਹੂ ਨਹਿਂ ਦੇਤ।\nਖੇਤ ਬੀਜ ਬੋਵੈ ਨਹੀਂ, ਤੋ ਕ੍ਯੋਂ ਜਾਮੈ ਖੇਤ।।',
      en: 'Keenhe bina upaay kachu, dev kabahu nahin det. Khet beej bovai naheen, to kyoun jaamai khet..',
    },
    transliteration: 'Keenhe bina upaay kachu, dev kabahu nahin det. Khet beej bovai naheen, to kyoun jaamai khet.',
    bhavarth: {
      hi: 'स्वयं कुछ उपाय किए बिना देवता भी कभी कुछ नहीं देता, अर्थात अपने द्वारा किए गए श्रम-उद्योग से ही फल प्राप्त होता है। यदि खेत में बीज ही न बोया गया हो तो उस खेत में भला क्या उगेगा।',
      pb: 'ਆਪ ਮਿਹਨਤ ਕੀਤੇ ਬਿਨਾਂ ਪ੍ਰਮਾਤਮਾ ਵੀ ਫਲ ਨਹੀਂ ਦਿੰਦਾ। ਜੇ ਖੇਤ ਵਿੱਚ ਬੀਜ ਹੀ ਨਾ ਬੀਜਿਆ ਜਾਵੇ, ਤਾਂ ਖੇਤ ਵਿੱਚ ਫ਼ਸਲ ਕਿਵੇਂ ਉੱਗੇਗੀ?',
      en: 'Without taking action and puting in effort, even the gods do not bestow anything. Only self-industry yields fruit. If you do not plant seeds in your field, how can you expect anything to grow?',
    },
    wordMeanings: {
      hi: [
        { word: 'उपाय (Upaay)', meaning: 'प्रयास / पुरुषार्थ / मेहनत' },
        { word: 'देव (Dev)', meaning: 'भाग्य / देवता / दैवीय शक्ति' },
        { word: 'जामै (Jaamai)', meaning: 'उगना / अंकुरित होना' }
      ],
      pb: [
        { word: 'ਉਪਾਯ (Upaay)', meaning: 'ਯਤਨ / ਮਿਹਨਤ' },
        { word: 'ਦੇਵ (Dev)', meaning: 'ਪ੍ਰਮਾਤਮਾ / ਦੇਵਤਾ' },
        { word: 'ਜਾਮੈ (Jaamai)', meaning: 'ਉੱਗਣਾ' }
      ],
      en: [
        { word: 'Upaay', meaning: 'Effort / Resolve / Spiritual industry' },
        { word: 'Dev', meaning: 'Providence / Gods' },
        { word: 'Jaamai', meaning: 'Sprouts / Grows / Germinates' }
      ]
    },
    contemplation: {
      hi: 'क्या मैं बिना किसी पुरुषार्थ या सुमिरन का बीज बोए केवल कृपा और मुक्ति की आशा लगाए बैठा हूँ?',
      pb: 'ਕੀ ਮੈਂ ਬਿਨਾਂ ਮਿਹਨਤ ਕੀਤੇ ਸਫਲਤਾ ਦੀ ਆਸ ਰੱਖਦਾ ਹਾਂ?',
      en: 'Am I expecting absolute liberation and peace without sowing the seeds of active meditation and selfless service?'
    },
    practicalApplication: {
      hi: 'आलस्य का त्याग कर प्रतिदिन सुमिरन और सेवा का पुरुषार्थ करें, तभी आत्म-कल्याण का फल प्राप्त होगा।',
      pb: 'ਆਲਸ ਛੱਡ ਕੇ ਸੇਵਾ ਤੇ ਸਿਮਰਨ ਦਾ ਯਤਨ ਕਰੋ।',
      en: 'Discard spiritual laziness; diligently plant the seeds of daily meditation and experience the sweet harvest of grace.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरुदेव! मेरे भीतर पुरुषार्थ और अथक सेवा-साधना का अखंड उत्साह जगाए रखें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੇਰੇ ਅੰਦਰ ਸੇਵਾ ਦਾ ਉਤਸ਼ਾਹ ਬਣਾਈ ਰੱਖੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Lord! Ignite in my soul an unquenchable zeal for active spiritual effort and noble work. Saheb Bandgi Saheb!'
    },
    quiz: []
  },
  {
    id: 'kram-16',
    number: 1630,
    grantha: 'Sakhi Sangrah',
    category: 'chetavani',
    categoryTitle: {
      hi: 'कर्म को अंग - १६',
      pb: 'ਕਰਮ ਕੋ ਅੰਗ - ੧੬',
      en: 'Kram Ko Ang - 16',
    },
    text: {
      hi: 'करे बुराई सुख चहै, कैसे पावै कोय।\nरोपै पेड़ बबूल का, आम कहां ते होय।।',
      pb: 'ਕਰੇ ਬੁਰਾਈ ਸੁਖ ਚਹੈ, ਕੈਸੇ ਪਾਵੈ ਕੋਇ।\nਰੋਪੈ ਪੇੜ ਬਬੂਲ ਕਾ, ਆਮ ਕਹਾਂ ਤੇ ਹੋਇ।।',
      en: 'Kre buraace sukh chahai, kaise paavai koy. Ropai ped babool ka, aam kahaan te hoy..',
    },
    transliteration: 'Kre buraace sukh chahai, kaise paavai koy. Ropai ped babool ka, aam kahaan te hoy.',
    bhavarth: {
      hi: 'बुरा काम करके सुख की चाह करना, बिल्कुल निरर्थक है। बबूल का वृक्ष लगाकर, उस पर आम जैसा मीठा फल कैसे मिल सकता है?',
      pb: 'ਮਾੜਾ ਕੰਮ ਕਰਕੇ ਸੁੱਖ ਦੀ ਆਸ ਰੱਖਣੀ ਬਿਲਕੁਲ ਵਿਅਰਥ ਹੈ। ਬਬੂਲ ਦਾ ਕੰਡਿਆਂ ਵਾਲਾ ਰੁੱਖ ਲਗਾ ਕੇ, ਉਸਤੋਂ ਮਿੱਠਾ ਅੰਬ ਕਿਵੇਂ ਮਿਲ ਸਕਦਾ ਹੈ?',
      en: 'Hoping for happiness while continuing to do bad deeds is entirely futile. If you plant a thorny acacia (babul) tree, how can you ever expect to harvest sweet mangoes?',
    },
    wordMeanings: {
      hi: [
        { word: 'बुराई (Buraace)', meaning: 'पाप कर्म / दूसरों का अहित करना' },
        { word: 'बबूल (Babool)', meaning: 'काँटेदार बबूल का पेड़ / बुरा कर्म' },
        { word: 'रोपै (Ropai)', meaning: 'बोना / लगाना' }
      ],
      pb: [
        { word: 'ਬੁਰਾਈ (Buraace)', meaning: 'ਪਾਪ / ਮਾੜੇ ਕੰਮ' },
        { word: 'ਬਬੂਲ (Babool)', meaning: 'ਕੰਡਿਆਂ ਵਾਲਾ ਕਿੱਕਰ' },
        { word: 'ਰੋਪੈ (Ropai)', meaning: 'ਬੀਜਣਾ' }
      ],
      en: [
        { word: 'Buraace', meaning: 'Vices / Harmful acts / Sins' },
        { word: 'Babool', meaning: 'Thorny acacia tree' },
        { word: 'Ropai', meaning: 'To plant / Set roots' }
      ]
    },
    contemplation: {
      hi: 'जब मैं जानता हूँ कि कड़वे कर्मों का फल कड़वा ही होता है, तो मैं जाने-अनजाने भी दूसरों का अहित क्यों करता हूँ?',
      pb: 'ਕੀ ਮੈਂ ਆਪਣੇ ਕਰਮਾਂ ਦੇ ਅੰਜਾਮ ਤੋਂ ਡਰਦਾ ਹਾਂ?',
      en: 'Knowing that bitter actions harvest bitter results, why do I allow myself to speak or act unkindly to others?'
    },
    practicalApplication: {
      hi: 'मन, वचन और कर्म से किसी को भी दुःख न पहुँचाएँ; सदा मीठे वचन बोलें और परोपकार करें।',
      pb: 'ਕਿਸੇ ਨੂੰ ਦੁੱਖ ਨਾ ਦਿਓ, ਹਮੇਸ਼ਾ ਭਲਾ ਕਰੋ।',
      en: 'Harm nobody through mind, speech, or deed; plant only the sweet seeds of kind words and compassionate service.'
    },
    samarpanPrayer: {
      hi: 'हे सतगुरुदेव! मुझे सदा शुद्ध कर्म और परोपकारी स्वभाव रखने का पावन वरदान प्रदान करें। साहेब बंदगी साहेब!',
      pb: 'ਹੇ ਸਤਿਗੁਰੂ! ਮੈਨੂੰ ਹਮੇਸ਼ਾ ਭਲਾ ਕਰਨ ਦੀ ਦਾਤ ਬਖਸ਼ੋ। ਸਾਹੇਬ ਬੰਦਗੀ ਸਾਹੇਬ!',
      en: 'O Satguru! Grace my soul with a compassionate heart that sows only sweet fruits of goodness. Saheb Bandgi Saheb!'
    },
    quiz: []
  }
];
