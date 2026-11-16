import { GranthVerse } from './granthTypes';
import { devanagariToGurmukhi } from '../../services/transliteration';

export const SAKHI_SANGRAH_ANG_6_VERSES: GranthVerse[] = [
  {
    id: 'ang-6-v1',
    type: 'sakhi',
    lines: {
      hi: ['कबीर दर्शन साधु का, बड़े भाग दरशाय।', 'जो होवै सूली सजा, कांटे ई टरि जाय।।'],
      pb: [devanagariToGurmukhi('कबीर दर्शन साधु का, बड़े भाग दरशाय।'), devanagariToGurmukhi('जो होवै सूली सजा, कांटे ई टरि जाय।।')],
      en: ['Kabir darshan saadhu ka, bade bhaag darshaay.', 'Jo hovai soolee saja, kaante ee tari jaay.']
    },
    bhavarth: {
      hi: 'कबीरजी कहते हैं कि साधु का दर्शन बड़े ही सौभाग्य से प्राप्त होता है। उस समय अगर सूली पर टांगने की सजा भी मिले, तो वह भी एक छोटे से कांटे की चुभन का आभास मात्र देकर टल जाती है, अर्थात साधु दर्शनों से बड़े-से-बड़ा संकट भी टल जाता है।',
      pb: devanagariToGurmukhi('साधु का दर्शन बड़े सौभाग्य से मिलता है। इससे सूली की सजा भी एक कांटे की चुभन बनकर टल जाती है।'),
      en: 'Beholding a saint is a rare good fortune. By their grace, even a severe punishment like impalement is reduced to a minor thorn prick.'
    }
  },
  {
    id: 'ang-6-v2',
    type: 'sakhi',
    lines: {
      hi: ['कबीर सोई दिन भला, जा दिन साधु मिलाय।', 'अंक भरे भरि भेटिये, पाप शरीरा जाय।।'],
      pb: [devanagariToGurmukhi('कबीर सोई दिन भला, जा दिन साधु मिलाय।'), devanagariToGurmukhi('अंक भरे भरि भेटिये, पाप शरीरा जाय।।')],
      en: ['Kabir soee din bhala, ja din saadhu milaay.', 'Ank bhare bhari bhetiye, paap shareera jaay.']
    },
    bhavarth: {
      hi: 'कबीरजी कहते हैं कि वही दिन अच्छा होता है जिस दिन साधु मिल जाए, भले ही वह कोई भी दिन हो। संकोच त्यागकर उनसे भरपूर भक्ति-भाव से मिलना चाहिए तथा उनकी सेवा-पूजा करनी चाहिए। ऐसा करने से तन-मन के पाप (दोष) दूर हो जाते हैं।',
      pb: devanagariToGurmukhi('वही दिन श्रेष्ठ है जिस दिन साधु का मिलन हो। भक्ति-भाव से मिलने से शरीर व मन के पाप नष्ट होते हैं।'),
      en: 'Blessed is the day when one meets a true saint. Meeting them with pure love and devotion cleanses all bodily and mental sins.'
    }
  },
  {
    id: 'ang-6-v3',
    type: 'sakhi',
    lines: {
      hi: ['तीरथ न्हाये एक फल, साधु मिले फल चार।', 'सतगुरु मिले अनेक फल, कहें कबीर विचार।।'],
      pb: [devanagariToGurmukhi('तीरथ न्हाये एक फल, साधु मिले फल चार।'), devanagariToGurmukhi('सतगुरु मिले अनेक फल, कहें कबीर विचार।।')],
      en: ['Teerath nhaaye ek phal, saadhu mile phal chaar.', 'Satguru mile anek phal, kahain kabir vichaar.']
    },
    bhavarth: {
      hi: 'तीरथ में नहाने से केवल एक ही फल की प्राप्ति होती है, अर्थात शरीर शुद्ध होता है। साधु-संतों के मिलने से चारों फलों अर्थात धर्म, अर्थ, काम, मोक्ष की प्राप्ति होती है।',
      pb: devanagariToGurmukhi('तीर्थ स्नान से एक फल मिलता है, साधु मिलन से चार फल (धर्म, अर्थ, काम, मोक्ष) मिलते हैं और सतगुरु से अनगिनत फल मिलते हैं।'),
      en: 'Bathing in pilgrimages grants one benefit (physical purity), meeting a saint yields four fruits (righteousness, wealth, fulfillment, and liberation), while encountering the Satguru brings infinite blessings.'
    }
  },
  {
    id: 'ang-6-v4',
    type: 'sakhi',
    lines: {
      hi: ['साधु दरशन महाफल, कोटि यज्ञ फल लेह।', 'इन मन्दिर को का पड़ी, नगर शुद्ध करि लेह ।।'],
      pb: [devanagariToGurmukhi('साधु दरशन महाफल, कोटि यज्ञ फल लेह।'), devanagariToGurmukhi('इन मन्दिर को का पड़ी, नगर शुद्ध करि लेह ।।')],
      en: ['Saadhu darashan mahaaphal, koti yagya phal leh.', 'In mandir ko ka padee, nagar shuddh kari leh.']
    },
    bhavarth: {
      hi: 'साधु-संतों के दर्शनों का महान फल है। इससे करोड़ों यज्ञों का फल (पुण्य) प्राप्त होता है। संतों के दर्शन के प्रभाव से एक मंदिर की तो बात ही क्या है, पूरा नगर ही शुद्ध हो जाता है, अर्थात संतों के सत्संग-ज्ञान-विचार से सभी मलिनताएं दूर हो जाती हैं।',
      pb: devanagariToGurmukhi('साधु दर्शन करोड़ों यज्ञों का फल देता है। संतों के प्रभाव से पूरा नगर पवित्र हो जाता है।'),
      en: 'Beholding saints yields supreme rewards equal to millions of sacred rituals. Their holy presence purifies not just a temple, but the entire town.'
    }
  },
  {
    id: 'ang-6-v5',
    type: 'sakhi',
    lines: {
      hi: ['कबीर दर्शन साधु के, करत न कीजै कानि।', 'ज्यों उद्यम से लक्ष्मी, आलस मन से हानि।।'],
      pb: [devanagariToGurmukhi('कबीर दर्शन साधु के, करत न कीजै कानि।'), devanagariToGurmukhi('ज्यों उद्यम से लक्ष्मी, आलस मन से हानि।।')],
      en: ['Kabir darshan saadhu ke, karat na keejai kaani.', 'Jyon udyam se lakshmee, aalas man se haani.']
    },
    bhavarth: {
      hi: 'कबीरजी कहते हैं कि साधु के दर्शन करने में कोई भी बहाना नहीं बनाना चाहिए। अपने अभिमान को त्यागकर अविलंब साधु के दर्शन करने जाना चाहिए। जिस प्रकार परिश्रम से लक्ष्मी (दौलत) मिलती है और मन में आलस लाने से हानि होती है, ठीक उसी प्रकार साधु-दर्शन से लाभ प्राप्त होता है।',
      pb: devanagariToGurmukhi('साधु के दर्शन में कोई बहाना न बनाएं। जैसे परिश्रम से धन मिलता है और आलस्य से हानि होती है, वैसे ही साधु दर्शन से आत्म-लाभ होता है।'),
      en: 'Never hesitate or make excuses to seek the sight of a saint. Just as effort brings wealth and laziness brings loss, seeking saints yields immense spiritual treasure.'
    }
  },
  {
    id: 'ang-6-v6',
    type: 'sakhi',
    lines: {
      hi: ['साधु दरश को जाइये, जेता धरिये पांव।', 'डग डग पै असमेध जग, कहैं कबीर समुझाय।।'],
      pb: [devanagariToGurmukhi('साधु दरश को जाइये, जेता धरिये पांव।'), devanagariToGurmukhi('डग डग पै असमेध जग, कहैं कबीर समुझाय।।')],
      en: ['Saadhu darash ko jaaiye, jeta dhariye paanv.', 'Dag dag pai asamadh jag, kahain kabir samujhaay.']
    },
    bhavarth: {
      hi: 'कबीरजी समझाकर कहते हैं कि साधु दर्शन के लिए चले जाइए, ऐसे में जितने भी कदम आगे धरते जाओगे, उनका पुण्य-लाभ अश्वमेध यज्ञ के फल के बराबर मिलेगा, अर्थात साधु-दर्शनों के लिए लगन के साथ जितने भी कदम उठते जाएंगे, वे उतने ही आनंद प्रदान करने वाले होंगे।',
      pb: devanagariToGurmukhi('साधु दर्शन के लिए जितने कदम चलते हैं, हर कदम पर अश्वमेध यज्ञ का पुण्य-लाभ मिलता है।'),
      en: 'With every step you take towards visiting a saint, you earn the merit equal to performing sacred Ashvamedha rituals.'
    }
  },
  {
    id: 'ang-6-v7',
    type: 'sakhi',
    lines: {
      hi: ['दरशन कीजै साधु का, दिन में कई कई बार।', 'असोजा का मेह ज्यों, बहुत करे उपकार।।'],
      pb: [devanagariToGurmukhi('दरशन कीजै साधु का, दिन में कई कई बार।'), devanagariToGurmukhi('असोजा का मेह ज्यों, बहुत करे उपकार।।')],
      en: ['Darashan keejai saadhu ka, din mein kaee kaee baar.', 'Asoja ka meh jyon, bahut kare upakaar.']
    },
    bhavarth: {
      hi: 'साधु-संतों के दर्शन बहुत ही सुखदायी होते हैं, अतः दिन में कई-कई बार दर्शन करने चाहिए। जितनी बार भी दर्शन करोगे, उतना ही पुण्य प्राप्त होगा। जिस प्रकार अश्विन (क्वार) के महीने की वर्षा खेती के लिए बहुत लाभदायक होती है और उससे सभी को खुशी मिलती है उसी प्रकार साधु-दर्शन से भी प्रसन्नता प्राप्त होती है।',
      pb: devanagariToGurmukhi('दिन में कई बार साधु का दर्शन करें। जैसे आश्विन माह की वर्षा फसल के लिए परम हितकारी होती है, वैसे ही साधु दर्शन कल्याणकारी है।'),
      en: 'Seek the company of saints multiple times a day. Like the timely autumn rains that revitalize crops, saints bestow deep benevolence upon all.'
    }
  },
  {
    id: 'ang-6-v8',
    type: 'sakhi',
    lines: {
      hi: ['कई बार नहिं कर सके, दोय बख्त करि लेय।', 'कबीर साधु दरश ते, काल दगा नहिं देय।।'],
      pb: [devanagariToGurmukhi('कई बार नहिं कर सके, दोय बख्त करि लेय।'), devanagariToGurmukhi('कबीर साधु दरश ते, काल दगा नहिं देय।।')],
      en: ['Kaee baar nahin kar sake, doy bakht kari ley.', 'Kabir saadhu darash te, kaal daga nahin dey.']
    },
    bhavarth: {
      hi: 'कुछ लोगों के पास इतना समय नहीं होता कि वे साधु-दर्शन दिन में कई-कई वार कर सकें। यदि वे कई बार न कर सकें, तो दो बार ही कर लें। कबीरजी कहते हैं कि साधु के दर्शन से तो इस जीव को काल भी धोखा नहीं दे सकता, अर्थात मृत्यु के रूप में जो अज्ञान-संताप आदि सताते हैं, वे सब नष्ट हो जाते हैं।',
      pb: devanagariToGurmukhi('यदि दिन में कई बार दर्शन न हो सकें तो दो बार करें। साधु के दर्शन से काल भी भयभीत होकर दूर रहता है।'),
      en: 'If you cannot visit a saint many times, visit them at least twice a day. By doing so, even time and death cannot deceive your soul.'
    }
  },
  {
    id: 'ang-6-v9',
    type: 'sakhi',
    lines: {
      hi: ['दोय बखत नहिं करि सके, दिन में करु इक बार।', 'कबीर साधु दरश ते, उतरे भौजल पार।।'],
      pb: [devanagariToGurmukhi('दोय बखत नहिं करि सके, दिन में करु इक बार।'), devanagariToGurmukhi('कबीर साधु दरश ते, उतरे भौजल पार।।')],
      en: ['Doy bakhat nahin kari sake, din mein karu ik baar.', 'Kabir saadhu darash te, utare bhaujal paar.']
    },
    bhavarth: {
      hi: 'संसार में बहुत से ऐसे भी सज्जन हैं, जो दो समय भी साधु-दर्शन नहीं कर पाते। ऐसे में वे दिन में एक बार ही दर्शन करें। कबीरजी कहते हैं कि साधु-दर्शन से यह जीव भव-सागर से पार हो जाता है। जीवन का परम उद्देश्य यानी सांसारिक दुःखों से छूटने के लिए एकमात्र उपाय साधु-दर्शन ही है।',
      pb: devanagariToGurmukhi('यदि दो समय संभव न हो तो दिन में एक बार दर्शन करें। साधु दर्शन से जीव भवसागर से तर जाता है।'),
      en: 'If twice a day is impossible, visit a saint at least once daily. Seeing a holy saint enables one to cross the treacherous worldly ocean.'
    }
  },
  {
    id: 'ang-6-v10',
    type: 'sakhi',
    lines: {
      hi: ['एक दिना नहिं करि सके, दूजे दिन कर लेह।', 'कबीर साधु दरश ते, पावै उत्तम देह।।'],
      pb: [devanagariToGurmukhi('एक दिना नहिं करि सके, दूजे दिन कर लेह।'), devanagariToGurmukhi('कबीर साधु दरश ते, पावै उत्तम देह।।')],
      en: ['Ek dina nahin kari sake, dooje din kar leh.', 'Kabir saadhu darash te, paavai uttam deh.']
    },
    bhavarth: {
      hi: 'यदि दिन में एक बार भी साधु का दर्शन न किया जा सके तो दूसरे दिन दर्शन अवश्य करना चाहिए। कबीरजी कहते हैं कि साधु-दर्शन से उत्तम तन-मन की प्राप्ति होती है, जिससे जिज्ञासु जनों को भक्ति-साधना करने में सरलता होती है।',
      pb: devanagariToGurmukhi('यदि प्रतिदिन न हो सके तो दूसरे दिन दर्शन करें। साधु दर्शन से उत्तम शरीर व मन प्राप्त होता है।'),
      en: 'If daily visits are not feasible, meet a saint every second day. The sight of a holy man grants a pure body and clear mind for spiritual practice.'
    }
  },
  {
    id: 'ang-6-v11',
    type: 'sakhi',
    lines: {
      hi: ['दूजे दिन नहिं करि सके, तीजे दिन करु जाय।', 'कबीर साधु दरश ते, मोक्ष मुक्ति फल पाय।।'],
      pb: [devanagariToGurmukhi('दूजे दिन नहिं करि सके, तीजे दिन करु जाय।'), devanagariToGurmukhi('कबीर साधु दरश ते, मोक्ष मुक्ति फल पाय।।')],
      en: ['Dooje din nahin kari sake, teeje din karu jaay.', 'Kabir saadhu darash te, moksh mukti phal paay.']
    },
    bhavarth: {
      hi: 'अगर दूसरे दिन भी साधु के दर्शन न हो सके, तो तीसरे दिन जाकर अवश्य ही दर्शन करने चाहिए। कबीरजी साधु-दर्शन का महत्त्व समझाते हुए कहते हैं। कि इससे जीव को सभी बंधनों से मुक्ति मिल जाती है और मोक्ष यानी सुख-शांति के फल की प्राप्ति होती है।',
      pb: devanagariToGurmukhi('यदि दूसरे दिन भी न हो सके तो तीसरे दिन दर्शन करें। साधु दर्शन से मोक्ष व मुक्ति फल मिलता है।'),
      en: 'If second-day visits fail, go on the third day. Seeing saints releases the seeker from worldly entanglements and bestows liberation.'
    }
  },
  {
    id: 'ang-6-v12',
    type: 'sakhi',
    lines: {
      hi: ['तीजे चौथे नहिं करे, बार-बार करु जाय।', 'यामें विलंब न कीजिये, कहैं कबीर समुझाय।।'],
      pb: [devanagariToGurmukhi('तीजे चौथे नहिं करे, बार-बार करु जाय।'), devanagariToGurmukhi('यामें विलंब न कीजिये, कहैं कबीर समुझाय।।')],
      en: ['Teeje chauthe nahin kare, baar-baar karu jaay.', 'Yaamein vilamb na keejiye, kahain kabir samujhaay.']
    },
    bhavarth: {
      hi: 'यदि तीसरे और चौथे दिन भी साधु के दर्शन करना संभव न हो तो उसके लिए प्रयत्न करो और बार-बार प्रयत्न करो। कबीरजी समझाते हुए कहते हैं कि साधु का दर्शन करने में तनिक भी देर न लगाओ, क्योंकि साधु-दर्शन का फल जीव के लिए कल्याणकारी होता है।',
      pb: devanagariToGurmukhi('तीसरे चौथे दिन न कर सकें तो बार-बार प्रयास करके दर्शन करें। इसमें तनिक भी विलंब न करें।'),
      en: 'Even if several days pass, strive repeatedly to behold a saint. Do not delay, for their holy sight is the ultimate blessing for the soul.'
    }
  },
  {
    id: 'ang-6-v13',
    type: 'sakhi',
    lines: {
      hi: ['बार-बार नहिं करि सके, पाख-पाख करि लेय।', 'कहैं कबीर सो भक्त जन, जन्म सुफल करि लेय।।'],
      pb: [devanagariToGurmukhi('बार-बार नहिं करि सके, पाख-पाख करि लेय।'), devanagariToGurmukhi('कहैं कबीर सो भक्त जन, जन्म सुफल करि लेय।।')],
      en: ['Baar-baar nahin kari sake, paakh-paakh kari ley.', 'Kahain kabir so bhakt jan, janam suphal kari ley.']
    },
    bhavarth: {
      hi: 'यदि सप्ताह में भी दर्शन नहीं कर सकते, तो पंद्रह दिन में ही कर लेने चाहिए। कबीरजी कहते हैं कि ऐसे भक्त जन्म को सफल कर लेते हैं, परंतु जिन्हें साधु-दर्शन में आलस या अन्य व्यस्तताएं घेरे रहती हैं, उनका जीवन ही निष्फल है।',
      pb: devanagariToGurmukhi('यदि बार-बार न हो सके तो हर १५ दिन (पखवाड़े) में दर्शन करें। ऐसे भक्त अपना जन्म सफल करते हैं।'),
      en: 'If frequent visits are impossible, visit every fortnight. Devotees who do so make their human birth fruitful.'
    }
  },
  {
    id: 'ang-6-v14',
    type: 'sakhi',
    lines: {
      hi: ['पाख पाख नहिं करि सकै, मास मास करु जाय।', 'यामें देर न लाइये, कहैं कबीर समुझाय।।'],
      pb: [devanagariToGurmukhi('पाख पाख नहिं करि सकै, मास मास करु जाय।'), devanagariToGurmukhi('यामें देर न लाइये, कहैं कबीर समुझाय।।')],
      en: ['Paakh paakh nahin kari sakai, maas maas karu jaay.', 'Yaamein der na laaiye, kahain kabir samujhaay.']
    },
    bhavarth: {
      hi: 'यदि पंद्रह दिन में भी साधु-दर्शन नहीं कर सकते, तो महीने-महीने ही करो। कबीरजी समझाते हुए कहते हैं कि इसमें देर नहीं लगानी चाहिए, जो समय बीत जाएगा, वह व्यर्थ मूल्यहीन ही जाएगा, अर्थात अवसर को खोना नहीं चाहिए, साधु-दर्शन अवश्य ही करने चाहिए।',
      pb: devanagariToGurmukhi('यदि १५ दिन में भी संभव न हो तो महीने में एक बार अवश्य जाएं। इसमें कोई देर न करें।'),
      en: 'If fortnightly visits cannot happen, go at least once a month. Do not lose precious time without seeing holy saints.'
    }
  },
  {
    id: 'ang-6-v15',
    type: 'sakhi',
    lines: {
      hi: ['मास-मास नहिं करि सकै, छठे मास अलबत्त।', 'यामें ढील न कीजिए, कहैं कबीर अविगत्त।।'],
      pb: [devanagariToGurmukhi('मास-मास नहिं करि सकै, छठे मास अलबत्त।'), devanagariToGurmukhi('यामें ढील न कीजिए, कहैं कबीर अविगत्त।।')],
      en: ['Maas-maas nahin kari sakai, chhathe maas alabatt.', 'Yaamein dheel na keejiye, kahain kabir avigatt.']
    },
    bhavarth: {
      hi: 'यदि महीने-महीने भी साधु दर्शन नहीं कर सकते, तो छठे महीने अवश्य ही करने चाहिए। अविनाशी-ज्ञानदाता सद्गुरु कबीरजी बार-बार सभी को सचेत करते हुए कहते हैं कि इसमें ढील न करो, अर्थात यदि कहीं भी कोई दुर्बलता बाधक हो, तो उसे तुरंत दूर करो।',
      pb: devanagariToGurmukhi('यदि महीने में भी न हो सके तो छह महीने में अवश्य जाएं। इसमें तनिक भी ढील न बरतें।'),
      en: 'If monthly visits fail due to circumstances, visit at least every six months. Do not slacken in seeking holy fellowship.'
    }
  },
  {
    id: 'ang-6-v16',
    type: 'sakhi',
    lines: {
      hi: ['छठे मास नहिं करि सकै, बरस दिना करि लेय।', 'कहैं कबीर सो भक्तजन, जमहिं चुनौती देय।।'],
      pb: [devanagariToGurmukhi('छठे मास नहिं करि सकै, बरस दिना करि लेय।'), devanagariToGurmukhi('कहैं कबीर सो भक्तजन, जमहिं चुनौती देय।।')],
      en: ['Chhathe maas nahin kari sakai, baras dina kari ley.', 'Kahain kabir so bhaktajan, jamahin chunaoetee dey.']
    },
    bhavarth: {
      hi: 'बहुत से कारण समस्याओं के रूप में ऐसे सामने आ जाते हैं कि श्रद्धावान छह महीने में भी साधु के दर्शन नहीं कर पाते। ऐसे में वे वर्ष-भर में अवश्य ही दर्शन करें। कबीरजी कहते हैं कि ऐसे जिज्ञासु भक्त लोग भी मृत्यु का सामना कर लेते हैं, अर्थात विषय-वासनाओं जैसी अपनी सभी बुराइयों को दूर करके, अपने जीवन का कल्याण कर लेते हैं।',
      pb: devanagariToGurmukhi('यदि छह महीने में भी न हो तो वर्ष में एक बार अवश्य दर्शन करें। ऐसे भक्त यमराज (काल) को चुनौती देते हैं।'),
      en: 'If six months pass without a visit, go at least once a year. Such seekers overcome all vices and challenge death itself.'
    }
  },
  {
    id: 'ang-6-v17',
    type: 'sakhi',
    lines: {
      hi: ['बरस बरस नहिं करि सकै, ताको लागे दोष।', 'कहैं कबीर वा जीव सो, कबहु न पावै मोष।।'],
      pb: [devanagariToGurmukhi('बरस बरस नहिं करि सकै, ताको लागे दोष।'), devanagariToGurmukhi('कहैं कबीर वा जीव सो, कबहु न पावै मोष।।')],
      en: ['Baras baras nahin kari sakai, taako laage dosh.', 'Kahain kabir va jeev so, kabahu na paavai mosh.']
    },
    bhavarth: {
      hi: 'यदि एक-एक बरस में भी साधु-दर्शन नहीं कर सकते, तो फिर दोष (पाप) अवश्य ही लगेगा। कबीरजी कहते हैं कि ऐसे जीव के लिए फिर कोई उपाय नहीं है। उसे फिर कभी भी मोक्ष की प्राप्ति नहीं हो सकती। वह सदैव ही जन्म-मरण के दुखों में विचरता रहेगा।',
      pb: devanagariToGurmukhi('यदि एक वर्ष में भी साधु का दर्शन न करे तो उसे दोष लगता है। ऐसा जीव कभी मोक्ष नहीं पाता।'),
      en: 'If even a year passes without seeking saintly company, spiritual defect incurs. Such a soul remains bound to the wheel of births.'
    }
  },
  {
    id: 'ang-6-v18',
    type: 'sakhi',
    lines: {
      hi: ['सन्त मिले सुख उपजै, दुष्ट मिले दुख होय।', 'सेवा कीजै सन्त की, जनम कृतारथ होय ।।'],
      pb: [devanagariToGurmukhi('सन्त मिले सुख उपजै, दुष्ट मिले दुख होय।'), devanagariToGurmukhi('सेवा कीजै सन्त की, जनम कृतारथ होय ।।')],
      en: ['Sant mile sukh upajai, dusht mile dukh hoy.', 'Seva keejai sant kee, janam kritaarath hoy.']
    },
    bhavarth: {
      hi: 'संतों के दर्शन-मिलने से सुख प्राप्त होता है और दुष्टों (दुर्जनों) के मिलने से दु:ख मिलता है, अतः सदा संतों की सेवा करनी चाहिए, इससे जन्म कृतार्थ (सफल) हो जाएगा।',
      pb: devanagariToGurmukhi('संतों के मिलने से सुख और दुष्टों के मिलने से दुःख मिलता है। अतः संतों की सेवा कर जन्म सफल बनाएं।'),
      en: 'Meeting saints brings inner bliss, while associating with evil brings sorrow. Serve saints faithfully to fulfill your human existence.'
    }
  },
  {
    id: 'ang-6-v19',
    type: 'sakhi',
    lines: {
      hi: ['मात पिता सुत इस्तरी, आलस बन्धू कानि।', 'साधु दरश को जब चलै, ये अटकावै आनि।।'],
      pb: [devanagariToGurmukhi('मात पिता सुत इस्तरी, आलस बन्धू कानि।'), devanagariToGurmukhi('साधु दरश को जब चलै, ये अटकावै आनि।।')],
      en: ['Maat pita sut istaree, aalas bandhoo kaani.', 'Saadhu darash ko jab chalai, ye atakaavai aani.']
    },
    bhavarth: {
      hi: 'माता-पिता, पुत्र-स्त्री, भाई, आलस और मान-मर्यादा ये सभी साधु-दर्शन में बाधक होते हैं। माया-मोह में डूबे हुए नाते-संबधों को भय होता है कि साधु-दर्शन में जाने से कहीं हमारा त्याग न हो जाए, अतः जब साधु-दर्शन को चलते हैं तो ये रुकावटें डालते हैं।',
      pb: devanagariToGurmukhi('माता, पिता, पुत्र, स्त्री, आलस्य व लोक-लज्जा - ये सब साधु दर्शन के मार्ग में बाधा डालते हैं।'),
      en: 'Worldly attachments like parents, spouse, children, laziness, and social inhibitions create obstacles when heading to see a saint.'
    }
  },
  {
    id: 'ang-6-v20',
    type: 'sakhi',
    lines: {
      hi: ['इन अटकाया न रुके, साधु दरश को जाय।', 'कबीर सोई संत जन, मोक्ष मुक्ति फल पाय।।'],
      pb: [devanagariToGurmukhi('इन अटकाया न रुके, साधु दरश को जाय।'), devanagariToGurmukhi('कबीर सोई संत जन, मोक्ष मुक्ति फल पाय।।')],
      en: ['In atakaaya na ruke, saadhu darash ko jaay.', 'Kabir soee sant jan, moksh mukti phal paay.']
    },
    bhavarth: {
      hi: 'सांसारिक माया-मोह में डूबकर भटकना नहीं चाहिए। साधु-दर्शन के लिए इन सभी बाधाओं को पार करके जाना चाहिए। कबीरजी कहते हैं कि वही सच्चे संत-जन हैं और उन्हें मोक्ष यानी मुक्ति का फल अवश्य मिलेगा, अर्थात वह संसार के आवागमन के चक्र से मुक्त हो जाएंगे।',
      pb: devanagariToGurmukhi('जो इन रुकावटों के बाद भी साधु दर्शन को जाता है, वही सच्चा संत-जन है और मोक्ष प्राप्त करता है।'),
      en: 'One who overcomes all family and worldly hurdles to visit saints achieves liberation and true peace.'
    }
  },
  {
    id: 'ang-6-v21',
    type: 'sakhi',
    lines: {
      hi: ['संगत कीजै साधु की, कभी न निष्फल होय।', 'लोहा पारस परस ते, सो भी कंचन होय।।'],
      pb: [devanagariToGurmukhi('संगत कीजै साधु की, कभी न निष्फल होय।'), devanagariToGurmukhi('लोहा पारस परस ते, सो भी कंचन होय।।')],
      en: ['Sangat keejai saadhu kee, kabhee na nishphal hoy.', 'Loha paaras paras te, so bhee kanchan hoy.']
    },
    bhavarth: {
      hi: 'साधु-संतों की संगत करो, वह कभी भी निष्फल नहीं हो सकती। जिस प्रकार पारसमणि के स्पर्श से लोहा स्वर्ण में बदल जाता है, उसी प्रकार संतों की सत्संगति से दुष्ट-दुर्जन भी सज्जन बन जाते हैं।',
      pb: devanagariToGurmukhi('साधु की संगत कभी निष्फल नहीं होती। जैसे पारसमणि के स्पर्श से लोहा सोना बन जाता है।'),
      en: 'Association with holy saints never goes in vain. Just as touching the philosopher’s stone turns iron into gold, saintly company transforms souls.'
    }
  },
  {
    id: 'ang-6-v22',
    type: 'sakhi',
    lines: {
      hi: ['साधु मिले यह सब टलै, काल-जाल जम चोट।', 'शीश नवावत ढहि परै, अघ पापन के पोट।।'],
      pb: [devanagariToGurmukhi('साधु मिले यह सब टलै, काल-जाल जम चोट।'), devanagariToGurmukhi('शीश नवावत ढहि परै, अघ पापन के पोट।।')],
      en: ['Saadhu mile yah sab talai, kaal-jaal jam chot.', 'Sheesh navaavat dhahi parai, agh paapan ke pot.']
    },
    bhavarth: {
      hi: 'साधु के मिलने पर काल-जाल क्लेश, वासना तथा मृत्यु जैसे संकटों की चोट, यह सब टल जाते हैं और उनके सम्मुख शीश झुकाने से पाप के गट्ठर भी ढह जाते हैं, अर्थात अपने पुण्य प्रकट हो जाते हैं।',
      pb: devanagariToGurmukhi('साधु के मिलने से काल-जाल व दुख दूर होते हैं। उनके सामने सिर झुकाने से पाप के गट्ठर ढह जाते हैं।'),
      en: 'Encountering a saint dispels the web of time, death, and worldly pain. Bowing humbly at their feet crumbles bundles of accumulated sins.'
    }
  },
  {
    id: 'ang-6-v23',
    type: 'sakhi',
    lines: {
      hi: ['साधु बिरछ सतज्ञान फल, शीतल शब्द विचार।', 'जग में होते साधु नहिं, जर मरता संसार।।'],
      pb: [devanagariToGurmukhi('साधु बिरछ सतज्ञान फल, शीतल शब्द विचार।'), devanagariToGurmukhi('जग में होते साधु नहिं, जर मरता संसार।।')],
      en: ['Saadhu birachh satagyaan phal, sheetal shabad vichaar.', 'Jag mein hote saadhu nahin, jar marata sansaar.']
    },
    bhavarth: {
      hi: 'साधु सुखदायी वृक्ष के समान हैं, उनका सत्य-ज्ञान ही फल-रूप है और उनके शीतल शब्द सबके ऊपर छाया के समान हैं। यदि संसार में साधु न होते तो यह संसार अज्ञानता की आग में जलकर स्वाहा हो जाता।',
      pb: devanagariToGurmukhi('साधु वृक्ष के समान हैं, सत्य ज्ञान फल है। यदि संसार में साधु न होते तो जगत अज्ञान की आग में जल मरता।'),
      en: 'Saints are like wish-fulfilling trees whose fruit is divine truth and whose cool words offer shade. Without saints, the world would burn in ignorance.'
    }
  },
  {
    id: 'ang-6-v24',
    type: 'sakhi',
    lines: {
      hi: ['साधु शब्द समुद्र है, जामें रतन भराय।', 'मन्द भाग मुट्ठी भरै, कंकर हाथ लगाय।।'],
      pb: [devanagariToGurmukhi('साधु शब्द समुद्र है, जामें रतन भराय।'), devanagariToGurmukhi('मन्द भाग मुट्ठी भरै, कंकर हाथ लगाय।।')],
      en: ['Saadhu shabad samudra hai, jaatein ratan bharaay.', 'Mand bhaag mutthee bharai, kankar haath lagaay.']
    },
    bhavarth: {
      hi: 'साधु सार-शब्द ज्ञान के समुद्र के समान है, जिसमें बहुत से सद्गुणों के रत्न भरे हुए हैं, परंतु भाग्यहीन (अज्ञानी) लोग ऐसे संतों के मिलने पर भी मुट्ठी भर कंकर ही ले पाते हैं, अर्थात उन्हें नगण्य ज्ञान ही प्राप्त हो पाता है क्योंकि वे संतों में दोष ही खोजते रहते हैं।',
      pb: devanagariToGurmukhi('साधु शब्द का समुद्र है जिसमें ज्ञान के रत्न भरे हैं। अभागी जीव केवल कंकर ही ले पाता है।'),
      en: 'A saint is an ocean of divine Word filled with gems of virtue. The unfortunate seeker merely gathers pebbles due to fault-finding.'
    }
  },
  {
    id: 'ang-6-v25',
    type: 'sakhi',
    lines: {
      hi: ['दया गरीबी बन्दगी, समता शील सुभाव।', 'ये ते लक्षण साधु के, कहैं कबीर सद्भाव ।।'],
      pb: [devanagariToGurmukhi('दया गरीबी बन्दगी, समता शील सुभाव।'), devanagariToGurmukhi('ये ते लक्षण साधु के, कहैं कबीर सद्भाव ।।')],
      en: ['Daya gareebee bandagee, samata sheel subhaav.', 'Ye te lakshan saadhu ke, kahain kabir sadbhaav.']
    },
    bhavarth: {
      hi: 'गुरु कबीरजी सद्भावपूर्वक कहते हैं कि दया, विनम्रता, सेवा, समता, शील एवं सत्य भाव ये सब संतों के लक्षण हैं। इन्हीं सद्गुणों से संत सबको सुखदायी होते हैं, जिससे वे सर्वत्र पूजनीय होते हैं।',
      pb: devanagariToGurmukhi('दया, गरीबी (नम्रता), भक्ति, समता व शील स्वभाव - ये साधु के लक्षण हैं।'),
      en: 'Compassion, humility, devotion, equanimity, and pure nature are the hallmarks of a true saint.'
    }
  },
  {
    id: 'ang-6-v26',
    type: 'sakhi',
    lines: {
      hi: ['दुख सुख एक समान है, हरष शोक नहिं व्याप।', 'उपकारी निकामता, उपजै छोह न ताप ।।'],
      pb: [devanagariToGurmukhi('दुख सुख एक समान है, हरष शोक नहिं व्याप।'), devanagariToGurmukhi('उपकारी निकामता, उपजै छोह न ताप ।।')],
      en: ['Dukh sukh ek samaan hai, harash shok nahin vyaap.', 'Upakaaree nikaamata, upajai chhoh na taap.']
    },
    bhavarth: {
      hi: 'साधु-संत न तो दुःख से दुखी और न सुख से सुखी होते हैं, अर्थात साधु-संत तो दुःख और सुख को एक समान समझते हैं। उन्हें कभी भी दु:ख और शोक व्याकुल नहीं करते। वे सदैव ही दूसरों का उपकार करने में लगे होते है तथा स्वयं में निष्काम होते हैं। उनके मन में कभी भी क्रोध-कुंठा या ईष्र्या की भावना उत्पन्न नहीं होती, अर्थात वे शांत हृदय और निर्मल मन वाले होते हैं।',
      pb: devanagariToGurmukhi('साधु के लिए सुख व दुख एक समान हैं। वे निष्काम होकर दूसरों का उपकार करते हैं।'),
      en: 'Saints view joy and sorrow with equal composure, untouched by grief or pride. They selflessly serve others with calm hearts.'
    }
  },
  {
    id: 'ang-6-v27',
    type: 'sakhi',
    lines: {
      hi: ['साधु बड़े परमारथी, घन ज्यों बरसे आय।', 'तपन बुझावैं और की, अपनो पारस लाय।।'],
      pb: [devanagariToGurmukhi('साधु बड़े परमारथी, घन ज्यों बरसे आय।'), devanagariToGurmukhi('तपन बुझावैं और की, अपनो पारस लाय।।')],
      en: ['Saadhu bade paramaarathee, ghan jyon barase aay.', 'Tapan bujhaavain aur kee, apano paaras laay.']
    },
    bhavarth: {
      hi: 'साधु बड़े परोपकारी होते हैं। जिस प्रकार बादल उमड़-घुमड़कर वर्षा करते हैं, दूसरों की प्यास बुझाते हैं, ठीक उसी प्रकार साधु भी अपनी ज्ञान-वृष्टि से सबके हृदय की प्यास बुझाते हैं तथा अपने कोमल स्पर्श से सबको सुख-शांति प्रदान करते हैं।',
      pb: devanagariToGurmukhi('साधु परोपकारी होते हैं, जो बादलों की भांति ज्ञान वर्षा कर सबके ताप को बुझाते हैं।'),
      en: 'Saints are supreme altruists who shower divine wisdom like rain clouds, quenching the spiritual thirst of all.'
    }
  },
  {
    id: 'ang-6-v28',
    type: 'sakhi',
    lines: {
      hi: ['साधु कहावन कठिन है, ज्यों खांड़े की धार।', 'डगमगाय तो गिर पड़े, निहचल उतरे पार।।'],
      pb: [devanagariToGurmukhi('साधु कहावन कठिन है, ज्यों खांड़े की धार।'), devanagariToGurmukhi('डगमगाय तो गिर पड़े, निहचल उतरे पार।।')],
      en: ['Saadhu kahaavan kathin hai, jyon khaande kee dhaar.', 'Dagamagaay to gir pade, nihachal utare paar.']
    },
    bhavarth: {
      hi: 'इस संसार में कुछ भी बनना अथवा अपने आपको किसी पद की योग्यतानुसार कहलाना सरल हो सकता है, परंतु साधु कहलाना अत्यंत ही कठिन है। साधु का होना इस प्रकार है, जैसे तलवार की धार पर चलना। इस पर यदि जरा भी डगमगा गए तो वह साधुता के पद से गिर पड़ेगा और जो निश्चल अर्थात अपने मत का सुदृढ़ रूप से पालन करेगा, वह भव-सागर से पार हो जाएगा।',
      pb: devanagariToGurmukhi('साधु कहलाना तलवार की धार पर चलने के समान कठिन है। जो निश्चल रहता है, वही पार होता है।'),
      en: 'To live as a true saint is as challenging as walking on the edge of a sword. Only those who remain steadfast cross the world ocean.'
    }
  },
  {
    id: 'ang-6-v29',
    type: 'sakhi',
    lines: {
      hi: ['साधु कहावन कठिन है, लम्बा पेड़ खजूर।', 'चढे तो चाखे प्रेम रस, गिरे तो चकनाचूर।।'],
      pb: [devanagariToGurmukhi('साधु कहावन कठिन है, लम्बा पेड़ खजूर।'), devanagariToGurmukhi('चढे तो चाखे प्रेम रस, गिरे तो चकनाचूर।।')],
      en: ['Saadhu kahaavan kathin hai, lamba ped khajoor.', 'Chadhe to chaakhe prem ras, gire to chakanaachoor.']
    },
    bhavarth: {
      hi: 'साधु कहलाना वास्तव में बहुत कठिन है। वह ऐसे ही है, जैसे लंबा खजूर का पेड़ । यदि इस पर चढ़ गए, अर्थात साधुता की साधना में सफल हो गए, तो चखने को प्रेम रस मिलेगा, किंतु यदि डगमगाकर गिर पड़े तो पूरी तरह चूर-चूर (नष्ट) हो जाओगे। इस प्रकार न तो साधु समाज के रहोगे और न ही सामान्य समाज के।',
      pb: devanagariToGurmukhi('साधु कहलाना खजूर के पेड़ पर चढ़ने जैसा है। चढ़े तो प्रेम रस, गिरे तो चकनाचूर।'),
      en: 'Embracing sainthood is like climbing a tall palm tree; if successful, one tastes divine nectar; if one slips, downfall is severe.'
    }
  },
  {
    id: 'ang-6-v30',
    type: 'sakhi',
    lines: {
      hi: ['साधु भौंरा जग कली, निश दिन फिरै उदास।', 'टुक टुक तहां बिलंबिया, जहं शीतल शब्द निवास।।'],
      pb: [devanagariToGurmukhi('साधु भौंरा जग कली, निश दिन फिरै उदास।'), devanagariToGurmukhi('टुक टुक तहां बिलंबिया, जहं शीतल शब्द निवास।।')],
      en: ['Saadhu bhaunra jag kalee, nish din phirai udaas.', 'Tuk tuk tahaan bilambiya, jahan sheetal shabad nivaas.']
    },
    bhavarth: {
      hi: 'साधु भंवरे का रूप बनाकर, संसार रूपी कली-फूलों में, दिन-रात उदास हुए डोलते-फिरते हैं, अर्थात उन्हें किसी से भी मोह-आसक्ति नहीं होती। वे थोड़ा-थोड़ा वहीं पर ठहरते हैं, प्रेम करते हैं, जहां सत्संग-ज्ञान चर्चा का सुंदर वातावरण होता है।',
      pb: devanagariToGurmukhi('साधु भंवरे के समान संसार में विचरते हैं। वे केवल वहीं ठहरते हैं जहाँ सत्संग व शीतल शब्द का वास होता है।'),
      en: 'A saint wanders detached like a bumblebee, tarrying only where cool, soothing discourses of spiritual Truth resonate.'
    }
  },
  {
    id: 'ang-6-v31',
    type: 'sakhi',
    lines: {
      hi: ['मानपमान न चित्त धरै, औरन को सनमान।', 'जो कोई आशा करै,उपदेशै तेहि ज्ञान।।'],
      pb: [devanagariToGurmukhi('मानपमान न चित्त धरै, औरन को सनमान।'), devanagariToGurmukhi('जो कोई आशा करै,उपदेशै तेहि ज्ञान।।')],
      en: ['Maanapamaan na chitt dharai, auran ko sanmaan.', 'Jo koi aasha karai, upadeshai tehi gyaan.']
    },
    bhavarth: {
      hi: 'साधु-संतों को चाहे कहीं सम्मान मिले अथवा अपमान, परंतु इसे वे अपने चित्त में नहीं ठहरने देते, अर्थात सम-रूप रहते हैं और दूसरों का आदर करते हैं। यदि कोई सच्ची जिज्ञासा दिखाए तो वे उसे ज्ञान का उपदेश देते हैं।',
      pb: devanagariToGurmukhi('साधु मान-अपमान से परे रहते हैं। जो ज्ञान की आशा करता है, उसे उपदेश देते हैं।'),
      en: 'Saints care neither for honor nor dishonor, respecting all equally. They generously impart wisdom to anyone seeking Truth.'
    }
  },
  {
    id: 'ang-6-v32',
    type: 'sakhi',
    lines: {
      hi: ['साधु जन सब में रमैं, दुख न काहू देहि।', 'अपने मत गाढ़ा रहै, साधुन का मत येहि।।'],
      pb: [devanagariToGurmukhi('साधु जन सब में रमैं, दुख न काहू देहि।'), devanagariToGurmukhi('अपने मत गाढ़ा रहै, साधुन का मत येहि।।')],
      en: ['Saadhu jan sab mein ramain, dukh na kaahoo dehi.', 'Apane mat gaadha rahai, saadhun ka mat yehi.']
    },
    bhavarth: {
      hi: 'साधु-संत हर प्रकार के जन-साधारण में निवास करते हैं। कोई किसी भी प्रकार का व्यक्ति हो, परंतु वे किसी को दुःख नहीं देते। अपने मत-सिद्धांत में वे सदा सुदृढ रहते हैं, अर्थात किसी भी अवस्था में तनिक भी विचलित नहीं होते। यही सच्चे साधुओं का मत है।',
      pb: devanagariToGurmukhi('साधु सब में रमते हैं, किसी को दुख नहीं देते और अपने सत्य मार्ग पर दृढ़ रहते हैं।'),
      en: 'Saints dwell harmoniously among all people without causing hurt, remaining firm in their commitment to spiritual principles.'
    }
  },
  {
    id: 'ang-6-v33',
    type: 'sakhi',
    lines: {
      hi: ['जा सुख को मुनिवर रटैं, सुर नर करैं विलाप।', 'सो सुख सहजै पाइया, सन्तों संगति आप।।'],
      pb: [devanagariToGurmukhi('जा सुख को मुनिवर रटैं, सुर नर करैं विलाप।'), devanagariToGurmukhi('सो सुख सहजै पाइया, सन्तों संगति आप।।')],
      en: ['Ja sukh ko munivar ratain, sur nar karain vilaap.', 'So sukh sahajai paaiya, santon sangati aap.']
    },
    bhavarth: {
      hi: 'जिस सुख-शांति को पाने के लिए मुनि-जन रात-दिन नाम रटते हैं और देवता-मनुष्य आदि रोते हैं तथा अशांत रहते हैं। वह परम-सुख आप संतों की संगत में बहुत ही सहज-रूप से पा सकते हैं, अर्थात आपको बहुत अधिक भटकने की आवश्यकता नहीं है।',
      pb: devanagariToGurmukhi('जिस सुख को मुनि रटते हैं, वह सुख संतों की संगति से सहज ही मिल जाता है।'),
      en: 'The sublime peace sought endlessly by sages and desired by gods is effortlessly attained in the holy fellowship of saints.'
    }
  },
  {
    id: 'ang-6-v34',
    type: 'sakhi',
    lines: {
      hi: ['कबीर शीतल जल नहीं, हिम ना शीतल होय।', 'कबीर शीतल सन्त जन, राम सनेही सोय।।'],
      pb: [devanagariToGurmukhi('कबीर शीतल जल नहीं, हिम ना शीतल होय।'), devanagariToGurmukhi('कबीर शीतल सन्त जन, राम सनेही सोय।।')],
      en: ['Kabir sheetal jal nahin, him na sheetal hoy.', 'Kabir sheetal sant jan, ram sanehee soy.']
    },
    bhavarth: {
      hi: 'कबीरजी कहते हैं कि उस प्रकार का तो जल भी शीतल नहीं होता और बर्फ भी वैसा शीतल नहीं होता। जिस प्रकार का संतों का स्वाभाविक-जीवन शांत और शीतल होता है, क्योंकि वे परमात्मा के प्रेमी होते हैं, अतः वे स्वतः ही शीतल और निर्मल हो जाते हैं।',
      pb: devanagariToGurmukhi('कबीरजी कहते हैं कि जल व बर्फ भी उतने शीतल नहीं जितने प्रभु-प्रेमी संत शीतल होते हैं।'),
      en: 'Neither cold water nor ice can equal the serene, comforting coolness of a saint devoted to God.'
    }
  },
  {
    id: 'ang-6-v35',
    type: 'sakhi',
    lines: {
      hi: ['साधु भूखा भाव का, धन का भूखा नाहिं।', 'धन का भूखा जो फिरै, सो तो साधु नाहिं।।'],
      pb: [devanagariToGurmukhi('साधु भूखा भाव का, धन का भूखा नाहिं।'), devanagariToGurmukhi('धन का भूखा जो फिरै, सो तो साधु नाहिं।।')],
      en: ['Saadhu bhookha bhaav ka, dhan ka bhookha naahin.', 'Dhan ka bhookha jo phirai, so to saadhu naahin.']
    },
    bhavarth: {
      hi: 'साधु-संत भाव (प्रेम) के भूखे होते हैं, धन के भूखे नहीं होते, लेकिन जो धन के भूखे डोलते फिरते हैं, वे साधु ही नहीं हैं, अर्थात धन-माया की भूख संसार के अज्ञानी लोगों को होती है, विवेकी संतों को नहीं।',
      pb: devanagariToGurmukhi('साधु भाव (प्रेम) के भूखे होते हैं, धन के नहीं। जो धन का भूखा हो, वह साधु नहीं।'),
      en: 'A true saint hungers for pure devotion and love, not money. Anyone who roams greedy for wealth is no saint at all.'
    }
  },
  {
    id: 'ang-6-v36',
    type: 'sakhi',
    lines: {
      hi: ['कबीर लौंग, इलायची, दातुन माटी पानि।', 'कहैं कबीर संतन को, देत न कीजै कानि।।'],
      pb: [devanagariToGurmukhi('कबीर लौंग, इलायची, दातुन माटी पानि।'), devanagariToGurmukhi('कहैं कबीर संतन को, देत न कीजै कानि।।')],
      en: ['Kabir laung, ilaayachee, daatun maatee paani.', 'Kahain kabir santan ko, det na keejai kaani.']
    },
    bhavarth: {
      hi: 'कबीरजी कहते हैं कि जिज्ञासु जनो! तुम लौंग, इलायची, दातुन, मिट्टी तथा पानी संतों को दो। संतों की सेवा में इन वस्तुओं को देने में आना-कानी अथवा लज्जा मत करो, अर्थात समयानुसार आवश्यक सामग्री से संतों को प्रसन्न रखो ।',
      pb: devanagariToGurmukhi('संतों को लौंग, इलायची, दातुन व जल देने में कभी संकोच न करें। उनकी सेवा करें।'),
      en: 'Never hesitate to serve saints with simple essentials like water, herbs, and devotion.'
    }
  },
  {
    id: 'ang-6-v37',
    type: 'sakhi',
    lines: {
      hi: ['साधु आया पाहुना, मांगै चार रतन।', 'धुनी पानी साथरा, सरधा सेती अन्न।।'],
      pb: [devanagariToGurmukhi('साधु आया पाहुना, मांगै चार रतन।'), devanagariToGurmukhi('धुनी पानी साथरा, सरधा सेती अन्न।।')],
      en: ['Saadhu aaya paahuna, maangai chaar ratan.', 'Dhunees paanee saathara, saradha setee ann.']
    },
    bhavarth: {
      hi: 'साधु अतिथि की तरह आते हैं और वे भक्तों से चार रत्न की मांग करते हैं। धुनी अर्थात धूप-दीप, जल, आसन और श्रद्धा-भाव से भोजन (ये उनके नित्य निर्वाह की आवश्यक वस्तुएं हैं। सेवक-भक्तों को चाहिए कि श्रद्धा-भाव से उन्हें अर्पित करें)।',
      pb: devanagariToGurmukhi('साधु अतिथि बनकर आते हैं और चार वस्तुएं (धूप, जल, आसन, श्रद्धा का अन्न) चाहते हैं।'),
      en: 'When a saint arrives as a guest, offer them four precious gifts: fire/incense, clean water, a resting seat, and food served with love.'
    }
  },
  {
    id: 'ang-6-v38',
    type: 'sakhi',
    lines: {
      hi: ['कंचन दीया करन ने, द्रौपदी दीया चीर।', 'जो दीया सो पाइया, ऐसे कहैं कबीर।।'],
      pb: [devanagariToGurmukhi('कंचन दीया करन ने, द्रौपदी दीया चीर।'), devanagariToGurmukhi('जो दीया सो पाइया, ऐसे कहैं कबीर।।')],
      en: ['Kanchan deeya karan ne, draupadee deeya cheer.', 'Jo deeya so paaiya, aise kahain kabir.']
    },
    bhavarth: {
      hi: 'कबीरजी कहते हैं कि दिया हुआ दान कभी व्यर्थ नहीं जाता, बल्कि साधु को जो जैसा दान करता है, वैसा ही उसका फल भी उसे प्राप्त होता है। जिस प्रकार कुंती के पुत्र कर्ण ने स्वर्ण दान दिया और द्रोपदी ने चीर का दान दिया (समय आने पर द्रोपदी को अनंत चीर की प्राप्ति हुई, जिससे उसकी लाज की रक्षा हो सकी), अतः समयानुसार सुपात्र (साधु) को दान अवश्य देना चाहिए।',
      pb: devanagariToGurmukhi('कबीरजी कहते हैं कि दान कभी व्यर्थ नहीं जाता, जैसे कर्ण ने स्वर्ण व द्रौपदी ने चीर दान किया।'),
      en: 'Charity offered to worthy saints returns manifold; as Karna gave gold and Draupadi offered cloth, whatever is offered with devotion is received back in times of need.'
    }
  },
  {
    id: 'ang-6-v39',
    type: 'sakhi',
    lines: {
      hi: ['टूका माही टूक दे, चीर माहि सो चीर।', 'साधु देत न सकुचिये, यों कथि कहहिं कबीर।।'],
      pb: [devanagariToGurmukhi('टूका माही टूक दे, चीर माहि सो चीर।'), devanagariToGurmukhi('साधु देत न सकुचिये, यों कथि कहहिं कबीर।।')],
      en: ['Tooka maahee took dey, cheer maahi so cheer.', 'Saadhu det na sakuchiye, yon kathi kahahin kabir.']
    },
    bhavarth: {
      hi: 'यदि पूरी रोटी नहीं है, तो रोटी के टुकड़े में से टुकड़ा और अपने कपड़े में से कपड़ा फाड़कर साधु-संतों को देना चाहिए। कबीरजी इस बात को सोच-विचारकर समझाते हुए कहते हैं कि संतों को देने में कभी भी संकोच नहीं करना चाहिए, अर्थात उन्हें मुक्त-रूप से अपने भाग में से निकालकर देना चाहिए।',
      pb: devanagariToGurmukhi('अपने भोजन व वस्त्र में से थोड़ा भाग भी संतों को देने में संकोच न करें।'),
      en: 'Share whatever little food or clothing you possess with holy saints without hesitation.'
    }
  },
  {
    id: 'ang-6-v40',
    type: 'sakhi',
    lines: {
      hi: ['सुनिये पार जो पाइया, छाजन भोजन आनि।', 'कहैं कबीर संतन को, देत न कीजै कानि।।'],
      pb: [devanagariToGurmukhi('सुनिये पार जो पाइया, छाजन भोजन आनि।'), devanagariToGurmukhi('कहैं कबीर संतन को, देत न कीजै कानि।।')],
      en: ['Suniye paar jo paaiya, chhaajan bhojan aani.', 'Kahain kabir santan ko, det na keejai kaani.']
    },
    bhavarth: {
      hi: 'यदि भव-सागर से पार उतरना चाहते हो, तो साधु-संतों को भोजन और वस्त्र देने में कोई आना-कानी मत करो। कबीरजी कहते हैं कि अपने अहंकार को त्यागकर, सहज-भाव से संतों को जो समय पर सुलभ हो, दो, अर्थात स्वयं को समर्पित कर समयानुसार संतों की सेवा करो।',
      pb: devanagariToGurmukhi('यदि भवसागर से तरना है तो संतों को वस्त्र व भोजन देने में कतराएं नहीं।'),
      en: 'If you desire liberation, serve saints cheerfully with shelter and nourishment without pride.'
    }
  },
  {
    id: 'ang-6-v41',
    type: 'sakhi',
    lines: {
      hi: ['छाजन भोजन प्रीति सों, दीजै साधु बुलाय।', 'जीवत जस है जगत में, अन्त परम पद पाय ।।'],
      pb: [devanagariToGurmukhi('छाजन भोजन प्रीति सों, दीजै साधु बुलाय।'), devanagariToGurmukhi('जीवत जस है जगत में, अन्त परम पद पाय ।।')],
      en: ['Chhaajan bhojan preeti son, deejai saadhu bulaay.', 'Jeevat jas hai jagat mein, ant param pad paay.']
    },
    bhavarth: {
      hi: 'साधु संतों को सादर बुलाकर, उन्हें प्रेमपूर्वक भोजन-वस्त्र तथा उनकी आवश्यकता की वस्तुएं देनी चाहिए। ऐसा करने से जब तक तुम जीओगे, सुयश की प्राप्ति होगी और अंत में पूर्ण पद की भी प्राप्ति होगी, अर्थात मानव-जीवन सार्थक हो जाएगा।',
      pb: devanagariToGurmukhi('संतों को प्रेमपूर्वक बुलाकर भोजन-वस्त्र दें। इससे संसार में यश और अंत में परम पद मिलता है।'),
      en: 'Respectfully invite saints and serve them food and clothes with love. This brings honor in life and liberation in the end.'
    }
  },
  {
    id: 'ang-6-v42',
    type: 'sakhi',
    lines: {
      hi: ['साधु ऐसा चाहिए, जाके ज्ञान विवेक।', 'बाहर मिलते सों मिलें, अन्तर सबसों एक ।।'],
      pb: [devanagariToGurmukhi('साधु ऐसा चाहिए, जाके ज्ञान विवेक।'), devanagariToGurmukhi('बाहर मिलते सों मिलें, अन्तर सबसों एक ।।')],
      en: ['Saadhu aisa chaahiye, jaake gyaan vivek.', 'Baahar milate son milen, antar sabason ek.']
    },
    bhavarth: {
      hi: 'साधु को ज्ञान-विवेक से युक्त रहना चाहिए। इसी के अनुसार उसका आचरण तथा व्यवहार होना चाहिए। उनके द्वारा बाहर से सेवक-भक्तों को भाव तथा योग्यता के अनुसार मिलना चाहिए तथा भीतर से सबके प्रति समान दया-प्रेम होना चाहिए।',
      pb: devanagariToGurmukhi('साधु ज्ञान-विवेक से पूर्ण हो, बाहर सबसे व्यवहार करे परंतु भीतर से सबको एक समान देखे।'),
      en: 'A true saint possesses divine wisdom; while interacting politely with all externally, they see the divine Oneness in everyone internally.'
    }
  },
  {
    id: 'ang-6-v43',
    type: 'sakhi',
    lines: {
      hi: ['साधु ऐसा चाहिए, जाका पूरा मंग।', 'विपत्ति पड़ै छाड़ै नहीं, चढ़ै चौगुना रंग ।।'],
      pb: [devanagariToGurmukhi('साधु ऐसा चाहिए, जाका पूरा मंग।'), devanagariToGurmukhi('विपत्ति पड़ै छाड़ै नहीं, चढ़ै चौगुना रंग ।।')],
      en: ['Saadhu aisa chaahiye, jaaka poora mang.', 'Vipatti padai chhaadai nahin, chadhai chauguna rang.']
    },
    bhavarth: {
      hi: 'साधु ऐसा होना चाहिए, जिसका मन पूर्ण रूप से संतुष्ट हो, अर्थात चंचल या दुर्बल न हो। कैसी भी कठिनाइयां, बाधाएं अथवा परिस्थितियां क्यों न आ जाएं, परंतु वह अपने मत-धर्म का त्याग न करे, अपितु उस पर चौगुना सत्य-संकल्प का रंग चढ़ जाए।',
      pb: devanagariToGurmukhi('साधु का मन पूर्ण संतुष्ट हो, जो विपत्ति आने पर भी धर्म न छोड़े और चार गुना निखर उठे।'),
      en: 'A saint should possess an unshakable mind. In times of adversity, they do not abandon their spiritual path, but shine fourfold in faith.'
    }
  },
  {
    id: 'ang-6-v44',
    type: 'sakhi',
    lines: {
      hi: ['साधु ऐसा चाहिए, दुखै दुखावै नाहिं।', 'पान फूल छेड़े नहीं, बसै बगीचा माहिं।।'],
      pb: [devanagariToGurmukhi('साधु ऐसा चाहिए, दुखै दुखावै नाहिं।'), devanagariToGurmukhi('पान फूल छेड़े नहीं, बसै बगीचा माहिं।।')],
      en: ['Saadhu aisa chaahiye, dukhai dukhaavai naahin.', 'Paan phool chhede nahin, basai bageecha maahin.']
    },
    bhavarth: {
      hi: 'साधु को इस प्रकार रहना चाहिए, जिससे वह दूसरों के क्रियाकलाप अथवा व्यवहार से न तो स्वयं दुखी हो और न ही उससे दूसरे दुखी हों। जिस प्रकार माली बाग में रहते हुए उसके फूल-पत्तों को नहीं तोड़ता, ठीक उसी प्रकार साधु को भी किसी के पास रहते हुए, उससे अनावश्यक व्यवहार नहीं रखना चाहिए।',
      pb: devanagariToGurmukhi('साधु ऐसा हो जो न दुखी हो और न किसी को दुखाए, जैसे माली बगीचे में फूल-पत्तों को हानि नहीं पहुँचाता।'),
      en: 'A saint should neither suffer hurt nor cause pain to anyone, dwelling gently in the world like a gardener living peacefully in a garden.'
    }
  },
  {
    id: 'ang-6-v45',
    type: 'sakhi',
    lines: {
      hi: ['साधु सोई जानिये, चलै साधु की चाल।', 'परमारथ करता रहै, बोलै बचन रसाल।।'],
      pb: [devanagariToGurmukhi('साधु सोई जानिये, चलै साधु की चाल।'), devanagariToGurmukhi('परमारथ करता रहै, बोलै बचन रसाल।।')],
      en: ['Saadhu soee jaaniye, chalai saadhu kee chaal.', 'Paramaarath karata rahai, bolai bachan rasaal.']
    },
    bhavarth: {
      hi: 'साधु तो उसी को समझना चाहिए, जो साधु की चाल चलता हो, अर्थात साधु के समान पवित्र आचरण तथा व्यवहार करता हो, जो सदा ही परोपकारी के सत्कर्म करता रहता हो और अपने मुख से मधुर वचन बोलता हो। साधु जीवन की यही मर्यादा है।',
      pb: devanagariToGurmukhi('साधु वही है जो पवित्र आचरण करे, सदा परोपकार करे और मधुर वचन बोले।'),
      en: 'Know him to be a saint who lives purely, continuously engages in selfless service, and speaks sweet, uplifting words.'
    }
  },
  {
    id: 'ang-6-v46',
    type: 'sakhi',
    lines: {
      hi: ['साधु आवत देखि कर, हंसी हमारी देह।', 'माथा का ग्रह ऊतरा, नैनन बढ़ा स्नेह ।।'],
      pb: [devanagariToGurmukhi('साधु आवत देखि कर, हंसी हमारी देह।'), devanagariToGurmukhi('माथा का ग्रह ऊतरा, नैनन बढ़ा स्नेह ।।')],
      en: ['Saadhu aavat dekhi kar, hansee hamaaree deh.', 'Maatha ka grah ootara, nainan badha sneh.']
    },
    bhavarth: {
      hi: 'यदि संतों को आते हुए देखकर हमारा शरीर प्रफुल्लित तथा मन प्रसन्न हो जाए तो समझो माथे के कुग्रह (कुलक्षण) नष्ट हो गए, अर्थात सौभाग्य की प्राप्ति हो गई और नेत्रों में स्नेह बढ़ गया यानी अत्यंत खुशी हुई।',
      pb: devanagariToGurmukhi('साधु को आता देखकर मन-शरीर प्रसन्न हो जाए तो समझो माथे के कुग्रह दूर हो गए।'),
      en: 'When seeing a saint fills the heart with joy, know that evil planetary afflictions have vanished and divine grace has awakened.'
    }
  },
  {
    id: 'ang-6-v47',
    type: 'sakhi',
    lines: {
      hi: ['संत मिले जनि बीछरो, बिछरो यह मम प्रान।', 'शब्द सनेही ना मिले, प्राण देह में आन।।'],
      pb: [devanagariToGurmukhi('संत मिले जनि बीछरो, बिछरो यह मम प्रान।'), devanagariToGurmukhi('शब्द सनेही ना मिले, प्राण देह में आन।।')],
      en: ['Sant mile jani beechharo, bichharo yah mam praan.', 'Shabad sanehee na mile, praan deh mein aan.']
    },
    bhavarth: {
      hi: 'साधु-संतों का मिलन अवश्य होना चाहिए, चाहे और सब कुछ बिछड़ जाए। यहां तक कि चाहे मेरे प्राण भी बिछुड़ जाएं, क्योंकि सार-शब्द, अर्थात सत्य-ज्ञान के प्रेमी संतों का बहुत ही कठिनाई से मिलन होता है और प्राण निकल जाने पर, वह तो पुनः दूसरी देह (पुनर्जन्म) धारण करने पर स्वतः ही मिल जाता है, अतः उसकी कोई बात नहीं।',
      pb: devanagariToGurmukhi('संतों का संग कभी न छूटे, चाहे प्राण भी छूट जाएं, क्योंकि ज्ञान के प्रेमी संत बड़ी कठिनाई से मिलते हैं।'),
      en: 'Never part from holy saints even if life itself must be given up, for lovers of the divine Word are rarest of all treasures.'
    }
  },
  {
    id: 'ang-6-v48',
    type: 'sakhi',
    lines: {
      hi: ['खाली साधु न बिदा करु, सुन लीजै सब कोय।', 'कहैं कबीर कछु भेंट धरु, जो तेरे घर होय।।'],
      pb: [devanagariToGurmukhi('खाली साधु न बिदा करु, सुन लीजै सब कोय।'), devanagariToGurmukhi('कहैं कबीर कछु भेंट धरु, जो तेरे घर होय।।')],
      en: ['Khaalee saadhu na bida karu, sun leejai sab koy.', 'Kahain kabir kachhu bhent dharu, jo tere ghar hoy.']
    },
    bhavarth: {
      hi: 'सभी इस बात को ध्यान से सुनें कि साधु को कभी भी खाली हाथ विदा नहीं करना चाहिए। कबीरजी कहते हैं कि कुछ-न-कुछ भेंट उन्हें अवश्य ही देनी चाहिए, जो भी तुम्हारे घर में हो, अर्थात संकोच करने की कोई आवश्यकता नहीं, वहीं भक्ति भाव से दो।',
      pb: devanagariToGurmukhi('साधु को कभी खाली हाथ विदा न करें। घर में जो भी हो, भक्ति-भाव से अर्पित करें।'),
      en: 'Never bid farewell to a visiting saint empty-handed. Offer whatever simple offerings you have with love.'
    }
  },
  {
    id: 'ang-6-v49',
    type: 'sakhi',
    lines: {
      hi: ['साधु चलत रो दीजिए, कीजै अति सनमान।', 'कहैं कबीर कछु भेंट धरु, अपने बित्त अनुमान।।'],
      pb: [devanagariToGurmukhi('साधु चलत रो दीजिए, कीजै अति सनमान।'), devanagariToGurmukhi('कहैं कबीर कछु भेंट धरु, अपने बित्त अनुमान।।')],
      en: ['Saadhu chalat ro deejiye, keejai ati sanmaan.', 'Kahain kabir kachhu bhent dharu, apane bitt anumaan.']
    },
    bhavarth: {
      hi: 'साधु जब चलने लगें तो आंखों से प्रेम के आंसू निकलने चाहिए, अर्थात प्रेमाश्रुओं से उस समय उनका अत्यधिक सम्मान करना चाहिए। कबीरजी कहते हैं कि अपनी श्रद्धा तथा सामर्थ्य के अनुसार उन्हें कुछ धन भी भेंटस्वरूप देना चाहिए।',
      pb: devanagariToGurmukhi('साधु के प्रस्थान समय प्रेम से विदा करें और अपनी सामर्थ्य अनुसार भेंट अर्पित करें।'),
      en: 'When a saint departs, bid them farewell with tears of devotion in your eyes and offer gifts according to your capacity.'
    }
  },
  {
    id: 'ang-6-v50',
    type: 'sakhi',
    lines: {
      hi: ['साधु आवत देखि के, मन में करै मरोर।', 'सो तो होसी चूहरा, बसै गांव की खोर।।'],
      pb: [devanagariToGurmukhi('साधु आवत देखि के, मन में करै मरोर।'), devanagariToGurmukhi('सो तो होसी चूहरा, बसै गांव की खोर।।')],
      en: ['Saadhu aavat dekhi ke, man mein karai maror.', 'So to hosee choohara, basai gaanv kee khor.']
    },
    bhavarth: {
      hi: 'साधु को आते हए देखकर जो मन में मरोड़ करता है, अर्थात उन्हें भार-स्वरूप जानकर अभिमान या संकोच करता है। वह अगले जन्म में चाण्डाल-चूहरा बने और गांव के एक किनारे जाकर रहेगा, जहां उसे साधु संत नहीं मिलेंगे।',
      pb: devanagariToGurmukhi('साधु को देखकर जो मन में घृणा या संकोच करता है, वह नीच योनि में जाकर भटकता है।'),
      en: 'One who feels resentment upon seeing a holy saint loses the chance of spiritual elevation and wanders in low births.'
    }
  },
  {
    id: 'ang-6-v51',
    type: 'sakhi',
    lines: {
      hi: ['सरवर तरवर संत जन, और चौथा बरसे मेह।', 'परमारथ के कारने, चारों धारी देह।।'],
      pb: [devanagariToGurmukhi('सरवर तरवर संत जन, और चौथा बरसे मेह।'), devanagariToGurmukhi('परमारथ के कारने, चारों धारी देह।।')],
      en: ['Saravar taravar sant jan, aur chautha barase meh.', 'Paramaarath ke kaarane, chaaron dhaaree deh.']
    },
    bhavarth: {
      hi: 'सरोवर, वृक्ष, साधु-संत और चौथा बरसता हुआ मेह-ये चारों परोपकार के लिए उत्पन्न होते हैं। जैसे सरोवर के जल से दूसरों की प्यास बुझती है, वृक्ष से छाया, फल-फूल, लकड़ी की प्राप्ति होती है, वैसे ही संतों के ज्ञानोपदेश से कल्याण होता है।',
      pb: devanagariToGurmukhi('सरोवर, वृक्ष, संत जन और वर्षा - ये चारों केवल परोपकार के लिए ही अवतरित होते हैं।'),
      en: 'The lake, trees, holy saints, and rain clouds exist solely for the benevolent service of others.'
    }
  },
  {
    id: 'ang-6-v52',
    type: 'sakhi',
    lines: {
      hi: ['कोई आवै भाव लै, कोई अभाव ले आव।', 'साधु दोऊ को पोषते, भाव न गिनै अभाव ।।'],
      pb: [devanagariToGurmukhi('कोई आवै भाव लै, कोई अभाव ले आव।'), devanagariToGurmukhi('साधु दोऊ को पोषते, भाव न गिनै अभाव ।।')],
      en: ['Koi aavai bhaav lai, koi abhaav le aav.', 'Saadhu dooo ko poshate, bhaav na ginai abhaav.']
    },
    bhavarth: {
      hi: 'साधु-संतों के पास कोई तो श्रद्धा और प्रेम के साथ आता है और कोई खाली हाथ बिना प्रेम के जाने-अनजाने चला आता है, परंतु इससे संतों की दृष्टि में कोई अंतर नहीं पड़ता, वे दोनों का ही पोषण करते हैं। वे निष्पक्ष होकर समान दया-दृष्टि रखते हैं।',
      pb: devanagariToGurmukhi('कोई प्रेम भाव से आए या बिना भाव के, साधु निष्पक्ष होकर दोनों का समान भाव से पोषण करते हैं।'),
      en: 'Whether one comes with love or without faith, saints nurture everyone equally with boundless compassion.'
    }
  },
  {
    id: 'ang-6-v53',
    type: 'sakhi',
    lines: {
      hi: ['यह कलियुग आयो अबै, साधु न मानै कोय।', 'कामी क्रोधी मसखरा, तिनकी पूजा होय।।'],
      pb: [devanagariToGurmukhi('यह कलियुग आयो अबै, साधु न मानै कोय।'), devanagariToGurmukhi('कामी क्रोधी मसखरा, तिनकी पूजा होय।।')],
      en: ['Yah kaliyug aayo abai, saadhu na maanai koy.', 'Kaamee krodhee masakhara, tinakee pooja hoy.']
    },
    bhavarth: {
      hi: 'अब ऐसा कलियुग आ गया है कि पाप और पाखंड का ही अधिक बोलबाला है। सच्चे साधु-संतों को कोई नहीं मानता। कामुक, क्रोधी तथा चंचल-मन के ढोंगी लोगों की सेवा-पूजा हो रही है।',
      pb: devanagariToGurmukhi('कलियुग में सच्चे साधुओं को कोई नहीं मानता, जबकि कामी व क्रोधी ढोंगियों की पूजा हो रही है।'),
      en: 'In Kali Yuga, true saints are ignored, while pretenders driven by lust and anger receive undeserved worship.'
    }
  },
  {
    id: 'ang-6-v54',
    type: 'sakhi',
    lines: {
      hi: ['आज काल दिन पांच में, बरस पांच जुग पंच।', 'जब तब साधु तारसी, और सकल परपंच।।'],
      pb: [devanagariToGurmukhi('आज काल दिन पांच में, बरस पांच जुग पंच।'), devanagariToGurmukhi('जब तब साधु तारसी, और सकल परपंच।।')],
      en: ['Aaj kaal din paanch mein, baras paanch jug panch.', 'Jab tab saadhu taarasee, aur sakal parapanch.']
    },
    bhavarth: {
      hi: 'आज या कल में, पांच बरस में या पांच युगों में जब भी, इस संसार-सागर से साधु ही पार उतारेंगे। बाकी सब कल्पित मान्यताएं एवं मिथ्या प्रपंच हैं, अर्थात जीवन उद्धार का एकमात्र उपाय केवल साधु-संत ही हैं।',
      pb: devanagariToGurmukhi('चाहे आज हो या युगों बाद, केवल साधु ही संसार से पार उतारेंगे, बाकी सब प्रपंच है।'),
      en: 'Whether today, tomorrow, or in five ages, true saints alone liberate the soul from this world; all else is mere illusion.'
    }
  },
  {
    id: 'ang-6-v55',
    type: 'sakhi',
    lines: {
      hi: ['बिरछा कबहुं न फल भखै, नदी न संचवै नीर।', 'परमारथ के कारने, साधु धरा शरीर।।'],
      pb: [devanagariToGurmukhi('बिरछा कबहुं न फल भखै, नदी न संचवै नीर।'), devanagariToGurmukhi('परमारथ के कारने, साधु धरा शरीर।।')],
      en: ['Birachha kabahun na phal bhakhai, nadeen na sanchavai neer.', 'Paramaarath ke kaarane, saadhu dhara shareer.']
    },
    bhavarth: {
      hi: 'वृक्ष कभी भी फल नहीं खाते और नदी कभी जल नहीं पीती, अर्थात वृक्ष फल देता है तो दूसरों के लिए और नदी बहती है तो दूसरों के लिए। इसी प्रकार साधु-संतों का शरीर दूसरों का परोपकार करने के लिए ही है।',
      pb: devanagariToGurmukhi('वृक्ष कभी स्वयं फल नहीं खाता, नदी स्वयं पानी नहीं पीती। इसी प्रकार साधु परोपकार के लिए शरीर धारण करते हैं।'),
      en: 'Trees never eat their own fruit, nor do rivers drink their own water. Likewise, saints embody themselves solely for the welfare of others.'
    }
  },
  {
    id: 'ang-6-v56',
    type: 'sakhi',
    lines: {
      hi: ['सुख देवै दुख को हरै, दूर करै अपराध ।', 'कहैं कबीर वह कब मिलै, परम स्नेही साध।।'],
      pb: [devanagariToGurmukhi('सुख देवै दुख को हरै, दूर करै अपराध ।'), devanagariToGurmukhi('कहैं कबीर वह कब मिलै, परम स्नेही साध।।')],
      en: ['Sukh devai dukh ko harai, door karai aparaadh.', 'Kahain kabir vah kab milai, param snehee saadh.']
    },
    bhavarth: {
      hi: 'जो दूसरों को सुख देते हैं, उनके दु:ख का हरण कर लेते हैं तथा दूसरों के दुर्गुण-अपराधों को दूर कर देते हैं। कबीरजी कहते हैं कि ऐसे परम प्रेमी साधु-संत दुर्लभ हैं।',
      pb: devanagariToGurmukhi('जो सुख देते हैं, दुख हरते हैं और अपराधों को दूर करते हैं, ऐसे परम स्नेही साधु दुर्लभ हैं।'),
      en: 'How blessed is the encounter with a loving saint who bestows joy, removes suffering, and forgives all shortcomings.'
    }
  },
  {
    id: 'ang-6-v57',
    type: 'sakhi',
    lines: {
      hi: ['सन्त मता गजराज का, चाले बन्धन छोड़।', 'जग कुत्ता पीछे फिरै, सुनै न वाका सोर।।'],
      pb: [devanagariToGurmukhi('सन्त मता गजराज का, चाले बन्धन छोड़।'), devanagariToGurmukhi('जग कुत्ता पीछे फिरै, सुनै न वाका सोर।।')],
      en: ['Sant mata gajaraaj ka, chaale bandhan chhod.', 'Jag kutta peechhe phirai, sunai na vaaka sor.']
    },
    bhavarth: {
      hi: 'संतों का सिद्धांत गजराज (हाथी) के समान है, जो सभी बंधनों को छोड़ मस्त होकर विचरता है। जिस प्रकार कुत्ते भौंकते रहते हैं और हाथी उनके शोर की परवाह नहीं करता, उसी प्रकार साधु-संत जगत की परवाह किए बिना अपने मार्ग पर स्थिर रहते हैं।',
      pb: devanagariToGurmukhi('संत हाथी के समान मस्त चाल चलते हैं। संसार रूपी कुत्ते पीछे भौंकते रहें, वे उनके शोर की परवाह नहीं करते।'),
      en: 'Saints walk fearlessly like a royal elephant, unbothered by the barking of worldly critics.'
    }
  },
  {
    id: 'ang-6-v58',
    type: 'sakhi',
    lines: {
      hi: ['इन्द्रिय मन निग्रह करन, हिरदै कोमल होय।', 'सदा शुद्ध आचार में,  रह विचार में सोय।।'],
      pb: [devanagariToGurmukhi('इन्द्रिय मन निग्रह करन, हिरदै कोमल होय।'), devanagariToGurmukhi('सदा शुद्ध आचार में, रह विचार में सोय।।')],
      en: ['Indriya man nigrah karan, hiradai komal hoy.', 'Sada shuddh aachaar mein, rah vichaar mein soy.']
    },
    bhavarth: {
      hi: 'साधुजन इंद्रियों और मन को वश में रखते हैं। उनका हृदय बहुत कोमल और आचरण सदा ही शुद्ध होता है। वे पूर्णतः मन, वाणी व कर्म से पवित्र होते हैं।',
      pb: devanagariToGurmukhi('साधु मन व इंद्रियों पर नियंत्रण रखते हैं, उनका हृदय कोमल और आचरण सदा शुद्ध होता है।'),
      en: 'Saints master their mind and senses, possessing a tender heart, pure conduct, and divine thoughts.'
    }
  },
  {
    id: 'ang-6-v59',
    type: 'sakhi',
    lines: {
      hi: ['कोटि-कोटि तीरथ करै, कोटि-कोटि करु धाम।', 'जब लग साधु न सेवई, तब लग काचा काम।।'],
      pb: [devanagariToGurmukhi('कोटि-कोटि तीरथ करै, कोटि-कोटि करु धाम।'), devanagariToGurmukhi('जब लग साधु न सेवई, तब लग काचा काम।।')],
      en: ['Koti-koti teerath karai, koti-koti karu dhaam.', 'Jab lag saadhu na sevai, tab lag kaacha kaam.']
    },
    bhavarth: {
      hi: 'चाहे करोडों तीर्थों में जाकर नहाओ और करोड़ों धाम जाकर दर्शन करो, परंतु जब तक साधु-संतों की सेवा नहीं करोगे, तब तक आत्म-कल्याण अधूरा ही है।',
      pb: devanagariToGurmukhi('करोड़ों तीर्थ व धाम की यात्रा कर लो, परंतु जब तक साधु सेवा नहीं होगी, तब तक कल्याण अधूरा है।'),
      en: 'Visiting millions of pilgrimages is incomplete without serving holy saints with a sincere heart.'
    }
  },
  {
    id: 'ang-6-v60',
    type: 'sakhi',
    lines: {
      hi: ['साधुन की झुपड़ी भली, न साकट को गांव।', 'चन्दन की कुटकी भली, ना बबूल बनराव ।।'],
      pb: [devanagariToGurmukhi('साधुन की झुपड़ी भली, न साकट को गांव।'), devanagariToGurmukhi('चन्दन की कुटकी भली, ना बबूल बनराव ।।')],
      en: ['Saadhun kee jhupadee bhalee, na saakat ko gaanv.', 'Chandan kee kutakee bhalee, na babool banaraav.']
    },
    bhavarth: {
      hi: 'साधु की झोंपड़ी ही अच्छी है, परंतु साकट (निगुरा) का गांव अच्छा नहीं होता। चंदन का छोटा टुकड़ा अच्छा है, परंतु बबूल का बहुत बड़ा जंगल भी अच्छा नहीं।',
      pb: devanagariToGurmukhi('साधु की झोंपड़ी उत्तम है पर निगुरे का गाँव बुरा है। चंदन की छोटी लकड़ी बबूल के बड़े जंगल से बेहतर है।'),
      en: 'A humble hut of a saint is far better than a prosperous village of the unguided; a small piece of sandalwood excels a forest of thorns.'
    }
  },
  {
    id: 'ang-6-v61',
    type: 'sakhi',
    lines: {
      hi: ['कुलवंता कोटिक मिले, पंडित कोटि पचीस।', 'सुपच भक्त की पनहि में, तुलै न काहू शीश।।'],
      pb: [devanagariToGurmukhi('कुलवंता कोटिक मिले, पंडित कोटि पचीस।'), devanagariToGurmukhi('सुपच भक्त की पनहि में, तुलै न काहू शीश।।')],
      en: ['Kulavanta kotik mile, pandit koti pachees.', 'Supach bhakt kee panahi mein, tulai na kaahoo sheesh.']
    },
    bhavarth: {
      hi: 'चाहे उत्तम कुल वाले करोड़ों मिलें और शास्त्रों के ज्ञाता विद्वान-पंडित भी चाहे पच्चीस करोड़ मिलें, परंतु निष्काम हरि-भक्त की जूती के सामने किसी का सिर नहीं तूल सकता।',
      pb: devanagariToGurmukhi('करोड़ों उच्च कुलीन या पंडित मिलें, पर सच्चे हरि-भक्त की चरण-धूलि का कोई मुकाबला नहीं।'),
      en: 'Neither high lineage nor vast scholarly learning equals the exalted stature of a humble devotee of the Lord.'
    }
  },
  {
    id: 'ang-6-v62',
    type: 'sakhi',
    lines: {
      hi: ['कमल पत्र हैं साधु जन, बसै जगत के माहिं।', 'बालक केरि धाय ज्यों, अपना जानत नाहिं ।।'],
      pb: [devanagariToGurmukhi('कमल पत्र हैं साधु जन, बसै जगत के माहिं।'), devanagariToGurmukhi('बालक केरि धाय ज्यों, अपना जानत नाहिं ।।')],
      en: ['Kamal patr hain saadhu jan, basai jagat ke maahin.', 'Baalak keri dhaay jyon, apana jaanat naahin.']
    },
    bhavarth: {
      hi: 'साधुजन कमल-पत्र के समान इस संसार में रहते हैं। जैसे कमल पानी में रहकर भी भीगता नहीं और दाई बालक का पालन करते हुए भी उसे अपना नहीं मानती, वैसे ही साधु अनासक्त रहते हैं।',
      pb: devanagariToGurmukhi('साधु कमल-पत्र के समान जग में अनासक्त रहते हैं, जैसे दाई बच्चे का पालन करते हुए भी मोह नहीं करती।'),
      en: 'Saints live in the world like lotus leaves on water—unattached and pure—serving like a foster mother without selfish attachment.'
    }
  },
  {
    id: 'ang-6-v63',
    type: 'sakhi',
    lines: {
      hi: ['आशा तजि माया तजै, मोह तजै अरु मान।', 'हरष शोक निंदा तजै, कहैं कबीर संत जान ।।'],
      pb: [devanagariToGurmukhi('आशा तजि माया तजै, मोह तजै अरु मान।'), devanagariToGurmukhi('हरष शोक निंदा तजै, कहैं कबीर संत जान ।।')],
      en: ['Aasha taji maaya tajai, moh tajai aru maan.', 'Harash shok ninda tajai, kahain kabir sant jaan.']
    },
    bhavarth: {
      hi: 'कबीरजी कहते हैं कि संत उन्हीं को जानो जिन्होंने आशा, माया, मोह, मान-अपमान, हर्ष-शोक और निंदा का पूर्ण रूप से त्याग कर दिया हो।',
      pb: devanagariToGurmukhi('कबीरजी कहते हैं कि संत वही है जो आशा, माया, मोह, मान, हर्ष, शोक व निंदा का त्याग कर दे।'),
      en: 'Know him as a saint who renounces worldly expectations, pride, attachment, praise, slander, joy, and sorrow.'
    }
  },
  {
    id: 'ang-6-v64',
    type: 'sakhi',
    lines: {
      hi: ['हरि दरबारी साधु हैं, इन ते सब कुछ होय।', 'बेगि मिलावें राम को, इन्हें मिले जु कोय।।'],
      pb: [devanagariToGurmukhi('हरि दरबारी साधु हैं, इन ते सब कुछ होय।'), devanagariToGurmukhi('बेगि मिलावें राम को, इन्हें मिले जु कोय।।')],
      en: ['Hari darabaaree saadhu hain, in te sab kuch hoy.', 'Begi milaaven ram ko, inhein mile ju koy.']
    },
    bhavarth: {
      hi: 'साधु-संत परमात्मा के दरबारी हैं। जो कोई इनसे प्रेमपूर्वक मिलता है, ये उसे शीघ्र ही परमात्मा से मिला देते हैं।',
      pb: devanagariToGurmukhi('साधु प्रभु के दरबारी हैं। जो इनसे श्रद्धा से मिलता है, उसे ये परमात्मा से मिला देते हैं।'),
      en: 'Saints are courtiers of the Divine Court; whoever meets them with devotion is swiftly united with God.'
    }
  },
  {
    id: 'ang-6-v65',
    type: 'sakhi',
    lines: {
      hi: ['जौन चाल संसार की, तौन साधु को नाहिं।', 'डिंभ चाल करनी करै, साधु कहो मत ताहि ।।'],
      pb: [devanagariToGurmukhi('जौन चाल संसार की, तौन साधु को नाहिं।'), devanagariToGurmukhi('डिंभ चाल करनी करै, साधु कहो मत ताहि ।।')],
      en: ['Jaun chaal sansaar kee, taun saadhu ko naahin.', 'Dimbh chaal karanee karai, saadhu kaho mat taahi.']
    },
    bhavarth: {
      hi: 'जो चाल संसार के सामान्य लोगों की है, वैसी साधु की नहीं होती। जो आचरण में दंभी (कपटी) हैं, उन्हें साधु मत कहो।',
      pb: devanagariToGurmukhi('संसारी लोगों जैसी चाल साधु की नहीं होती। जो पाखंडी हैं, उन्हें साधु न कहें।'),
      en: 'A saint does not follow worldly hypocrisy. Never address a pretender as a saint.'
    }
  },
  {
    id: 'ang-6-v66',
    type: 'sakhi',
    lines: {
      hi: ['शीलवन्त दृढ़ ज्ञान मत, अति उदार चित होय।', 'लज्जावान अति निछलता, कोमल हिरदा सोय।।'],
      pb: [devanagariToGurmukhi('शीलवन्त दृढ़ ज्ञान मत, अति उदार चित होय।'), devanagariToGurmukhi('लज्जावान अति निछलता, कोमल हिरदा सोय।।')],
      en: ['Sheelavant dridh gyaan mat, ati udaar chit hoy.', 'Lajjaavaan ati nichhalata, komal hirada soy.']
    },
    bhavarth: {
      hi: 'संत-जन शील स्वभाव वाले, ज्ञान में सुदृढ़, उदार चित्त, निष्कपट और कोमल हृदय वाले होते हैं।',
      pb: devanagariToGurmukhi('संत विनम्र, दृढ़ ज्ञानी, उदार, निष्कपट और कोमल हृदय वाले होते हैं।'),
      en: 'Saints are gentle, firm in wisdom, generous, guileless, and compassionate at heart.'
    }
  },
  {
    id: 'ang-6-v67',
    type: 'sakhi',
    lines: {
      hi: ['सदा रहै संतोष में, धरम आप दृढ़ धार।', 'आश एक गुरुदेव की, और न चित विचार।।'],
      pb: [devanagariToGurmukhi('सदा रहै संतोष में, धरम आप दृढ़ धार।'), devanagariToGurmukhi('आश एक गुरुदेव की, और न चित विचार।।')],
      en: ['Sada rahai santosh mein, dharam aap dridh dhaar.', 'Aash ek gurudev kee, aur na chit vichaar.']
    },
    bhavarth: {
      hi: 'संतजन सदा संतोष में रहते हैं, अपने धर्म को दृढ़ता से धारण करते हैं और केवल गुरुदेव का ही आश्रय रखते हैं।',
      pb: devanagariToGurmukhi('संत सदा संतोष में रहते हैं, धर्म पर दृढ़ रहते हैं और केवल गुरुदेव का आश्रय रखते हैं।'),
      en: 'Saints remain contented, steadfast in righteousness, relying solely upon their Gurudev.'
    }
  },
  {
    id: 'ang-6-v68',
    type: 'sakhi',
    lines: {
      hi: ['सावधान औ शीलता, सदा प्रफुल्लित गात।', 'निर्विकार गंभीर मत, धीरज दया बरसात।।'],
      pb: [devanagariToGurmukhi('सावधान औ शीलता, सदा प्रफुल्लित गात।'), devanagariToGurmukhi('निर्विकार गंभीर मत, धीरज दया बरसात।।')],
      en: ['Saavadhaan au sheelata, sada praphullit gaat.', 'Nirvikaar gambheer mat, dheeraj daya barasaat.']
    },
    bhavarth: {
      hi: 'साधु-संत सदा सचेत, विनम्र और प्रफुल्लित रहते हैं। वे निर्विकार, गंभीर, धैर्यवान और दयालु होते हैं।',
      pb: devanagariToGurmukhi('साधु सदा सचेत, विनम्र, प्रसन्न, निर्विकार, गंभीर और दयालु होते हैं।'),
      en: 'Saints are ever alert, humble, joyful, serene, patient, and overflowing with mercy.'
    }
  },
  {
    id: 'ang-6-v69',
    type: 'sakhi',
    lines: {
      hi: ['आसन तो एकान्त करैं, कामिनी संगत दूर।', 'शीतल संत शिरोमनी, उनका ऐसा नूर।।'],
      pb: [devanagariToGurmukhi('आसन तो एकान्त करैं, कामिनी संगत दूर।'), devanagariToGurmukhi('शीतल संत शिरोमनी, उनका ऐसा नूर।।')],
      en: ['Aasan to ekaant karain, kaaminee sangat door.', 'Sheetal sant shiromanee, unaka aisa noor.']
    },
    bhavarth: {
      hi: 'संतजन एकांत में साधना करते हैं और विषय-वासना से दूर रहते हैं। उनके मुख पर दिव्य शांति का नूर होता है।',
      pb: devanagariToGurmukhi('संत एकांत में साधना करते हैं, विषय-वासना से दूर रहते हैं और उनके चेहरे पर दिव्य नूर होता है।'),
      en: 'Saints meditate in solitude, free from lust, radiating divine calm and spiritual light.'
    }
  },
  {
    id: 'ang-6-v70',
    type: 'sakhi',
    lines: {
      hi: ['रक्त छाड़ि पय को गहै, ज्यौरे गऊ का बच्छ।', 'औगुण छांड़े गुण गहै, ऐसा साधु लच्छ ।।'],
      pb: [devanagariToGurmukhi('रक्त छाड़ि पय को गहै, ज्यौरे गऊ का बच्छ।'), devanagariToGurmukhi('औगुण छांड़े गुण गहै, ऐसा साधु लच्छ ।।')],
      en: ['Rakt chhaadi pay ko gahai, jyaure gaoo ka bachchh.', 'Ogun chhaande gun gahai, aisa saadhu lachchh.']
    },
    bhavarth: {
      hi: 'जैसे बछड़ा केवल दूध ग्रहण करता है, वैसे ही साधु पुरुष अवगुणों को छोड़कर केवल सद्गुणों को ही ग्रहण करते हैं।',
      pb: devanagariToGurmukhi('जैसे बछड़ा दूध ही पीता है, वैसे ही साधु दूसरों के अवगुण छोड़कर केवल गुण ग्रहण करते हैं।'),
      en: 'Like a calf drinking pure milk, a saint ignores defects and absorbs only virtues.'
    }
  },
  {
    id: 'ang-6-v71',
    type: 'sakhi',
    lines: {
      hi: ['तूटै बरत अकास सों, कौन सकत है झेल।', 'साधु सती और सूर का, अनी ऊपर का खेल ।।'],
      pb: [devanagariToGurmukhi('तूटै बरत अकास सों, कौन सकत है झेल।'), devanagariToGurmukhi('साधु सती और सूर का, अनी ऊपर का खेल ।।')],
      en: ['Tootai barat akaas son, kaun sakat hai jhel.', 'Saadhu satee aur soor ka, anee oopar ka khel.']
    },
    bhavarth: {
      hi: 'साधु, सती और शूरवीर का खेल तलवार व भाले की नोंक पर होता है, अर्थात इनका संकल्प अत्यंत कठिन और अडिग होता है।',
      pb: devanagariToGurmukhi('साधु, सती और शूरवीर का मार्ग अत्यंत कठिन व अडिग संकल्प का होता है।'),
      en: 'The path of a saint, a devoted wife, and a warrior is played on the razor’s edge of supreme resolve.'
    }
  },
  {
    id: 'ang-6-v72',
    type: 'sakhi',
    lines: {
      hi: ['उड़गण और सुधाकरा, बसत नीर के संग।', 'यों साधु संसार में, कबीर पड़त न फंद ।।'],
      pb: [devanagariToGurmukhi('उड़गण और सुधाकरा, बसत नीर के संग।'), devanagariToGurmukhi('यों साधु संसार में, कबीर पड़त न फंद ।।')],
      en: ['Udagan aur sudhaakara, basat neer ke sang.', 'Yon saadhu sansaar mein, kabir padat na phand.']
    },
    bhavarth: {
      hi: 'तारे और चंद्रमा का प्रतिबिंब जल में पड़ता है पर वे जल में नहीं फंसते, वैसे ही साधु संसार में रहते हुए मोह के फंदे में नहीं फंसते।',
      pb: devanagariToGurmukhi('तारे व चंद्रमा जल में झलकते हुए भी उसमें नहीं फंसते, वैसे ही साधु संसार में अनासक्त रहते हैं।'),
      en: 'Just as stars reflected in water remain untouched by it, saints live in the world without getting entangled.'
    }
  },
  {
    id: 'ang-6-v73',
    type: 'sakhi',
    lines: {
      hi: ['सदा कृपालु दुख परिहरन, बैर भाव नहिं दोय।', 'छिमा ज्ञान सत भारवही, हिंसा रहित जु होय।।'],
      pb: [devanagariToGurmukhi('सदा कृपालु दुख परिहरन, बैर भाव नहिं दोय।'), devanagariToGurmukhi('छिमा ज्ञान सत भारवही, हिंसा रहित जु होय।।')],
      en: ['Sada kripaalu dukh pariharan, bair bhaav nahin doy.', 'Chhima gyaan sat bhaaravahee, hinsa rahit ju hoy.']
    },
    bhavarth: {
      hi: 'साधु सदैव कृपालु, दुख हरने वाले, शत्रुता से रहित, क्षमाशील, ज्ञानस्वरूप, सत्यवादी और अहिंसक होते हैं।',
      pb: devanagariToGurmukhi('साधु सदा कृपालु, दुख दूर करने वाले, निर्वैर, क्षमाशील, ज्ञानी और अहिंसक होते हैं।'),
      en: 'Saints are merciful, disarming sorrow, free from malice, forgiving, truthful, and non-violent.'
    }
  },
  {
    id: 'ang-6-v74',
    type: 'sakhi',
    lines: {
      hi: ['जौन भाव ऊपर रहै, भितर बसावै सोय।', 'भीतर और न बसावई, ऊपर और न होय ।।'],
      pb: [devanagariToGurmukhi('जौन भाव ऊपर रहै, भितर बसावै सोय।'), devanagariToGurmukhi('भीतर और न बसावई, ऊपर और न होय ।।')],
      en: ['Jaun bhaav oopar rahai, bhitar basaavai soy.', 'Bheetar aur na basaavee, oopar aur na hoy.']
    },
    bhavarth: {
      hi: 'साधु-संतों को बाहर और भीतर से एक समान होना चाहिए। मुख से कुछ और तथा हृदय में कुछ और नहीं होना चाहिए।',
      pb: devanagariToGurmukhi('साधु बाहर-भीतर से एक समान होते हैं, उनके मन व वाणी में अंतर नहीं होता।'),
      en: 'A true saint is pure and unified within and without, free from hypocrisy.'
    }
  },
  {
    id: 'ang-6-v75',
    type: 'sakhi',
    lines: {
      hi: ['साधु सती और सिंह को, ज्यों लंछन त्यों शोभ।', 'सिंह न मारे मेंढ़का, साधु न बांधे लोभ ।।'],
      pb: [devanagariToGurmukhi('साधु सती और सिंह को, ज्यों लंछन त्यों शोभ।'), devanagariToGurmukhi('सिंह न मारे मेंढ़का, साधु न बांधे लोभ ।।')],
      en: ['Saadhu satee aur singh ko, jyon lanchhan tyon shobh.', 'Singh na maare mendhaka, saadhu na baandhe lobh.']
    },
    bhavarth: {
      hi: 'सिंह कभी मेंढक का शिकार नहीं करता और साधु कभी लोभ के वश में होकर धन संग्रह नहीं करता। वे अपने नियम के धनी होते हैं।',
      pb: devanagariToGurmukhi('शेर मेंढक को नहीं मारता और साधु लोभ के कारण धन संग्रह नहीं करता।'),
      en: 'A lion never preys on a frog, and a saint never hoards out of greed.'
    }
  },
  {
    id: 'ang-6-v76',
    type: 'sakhi',
    lines: {
      hi: ['साधु सती और सूरमा, राखा रहै न ओट।', 'माथा बांधि पताक सों, नेजा घालैं चोट।।'],
      pb: [devanagariToGurmukhi('साधु सती और सूरमा, राखा रहै न ओट।'), devanagariToGurmukhi('माथा बांधि पताक सों, नेजा घालैं चोट।।')],
      en: ['Saadhu satee aur soorama, raakha rahai na ot.', 'Maatha baandhi pataak son, neja ghaalain chot.']
    },
    bhavarth: {
      hi: 'साधु, सती और शूरवीर को परदे में नहीं रखा जा सकता। वे विपत्ति आने पर भी अपने सत्य-धर्म से पीछे नहीं हटते।',
      pb: devanagariToGurmukhi('साधु, सती व शूरवीर को छिपाया नहीं जा सकता, वे विपत्ति में भी धर्म पर अडिग रहते हैं।'),
      en: 'Saints, devoted souls, and brave warriors cannot be hidden; they stand courageous in all trials.'
    }
  },
  {
    id: 'ang-6-v77',
    type: 'sakhi',
    lines: {
      hi: ['और देव नहिं चित्त बसै, मन गुरु चरण बसाय।', 'स्वल्पाहार भोजन करु, तृष्णा दूर पराय ।।'],
      pb: [devanagariToGurmukhi('और देव नहिं चित्त बसै, मन गुरु चरण बसाय।'), devanagariToGurmukhi('स्वल्पाहार भोजन करु, तृष्णा दूर पराय ।।')],
      en: ['Aur dev nahin chitt basai, man guru charan basaay.', 'Svalpaahaar bhojan karu, trishna door paraay.']
    },
    bhavarth: {
      hi: 'साधु का मन केवल गुरु चरणों में रहता है। वे मिताहारी (कम भोजन करने वाले) होते हैं और तृष्णाओं से दूर रहते हैं।',
      pb: devanagariToGurmukhi('साधु का मन केवल गुरु चरणों में रहता है, वे स्वल्पाहारी व तृष्णा-रहित होते हैं।'),
      en: 'A saint’s heart abides solely in Gurudev’s feet, living simply and free from worldly thirst.'
    }
  },
  {
    id: 'ang-6-v78',
    type: 'sakhi',
    lines: {
      hi: ['जूआ चोरी मुखबिरी, ब्याज बिरानी नारि।', 'जो चाहे दीदार को, इतनी वस्तु निवारि ।।'],
      pb: [devanagariToGurmukhi('जूआ चोरी मुखबिरी, ब्याज बिरानी नारि।'), devanagariToGurmukhi('जो चाहे दीदार को, इतनी वस्तु निवारि ।।')],
      en: ['Jooa choree mukhabiree, byaaj biraanee naari.', 'Jo chaahe deedaar ko, itanee vastu nivaari.']
    },
    bhavarth: {
      hi: 'जुआ, चोरी, चुगली, ब्याजखोरी और पराई स्त्री - इन दुर्गुणों का तुरंत त्याग करने से ही ईश्वरीय साक्षात्कार संभव है।',
      pb: devanagariToGurmukhi('जुआ, चोरी, चुगली, ब्याज व पराई स्त्री का त्याग करने से ही प्रभु दीदार संभव है।'),
      en: 'Renounce gambling, theft, slander, usury, and unrighteous passions to behold the Supreme divine.'
    }
  },
  {
    id: 'ang-6-v79',
    type: 'sakhi',
    lines: {
      hi: ['बहता पानी निरमला, बंधा गन्दा होय ।', 'साधु जन रमता भला, दाग न लागै कोय ।।'],
      pb: [devanagariToGurmukhi('बहता पानी निरमला, बंधा गन्दा होय ।'), devanagariToGurmukhi('साधु जन रमता भला, दाग न लागै कोय ।।')],
      en: ['Bahata paanee niramala, bandha ganda hoy.', 'Saadhu jan ramata bhala, daag na laagai koy.']
    },
    bhavarth: {
      hi: 'बहता पानी निर्मल रहता है और बंधा पानी गंदा होता है। इसी प्रकार साधु-संतों का निरंतर ज्ञान-प्रचार हेतु विचरते रहना ही शुभ है।',
      pb: devanagariToGurmukhi('बहता पानी स्वच्छ रहता है। वैसे ही साधु का विचरते रहना निर्मल रखता है।'),
      en: 'Flowing water stays pure; likewise, a wandering saint stays untainted by worldly attachment.'
    }
  },
  {
    id: 'ang-6-v80',
    type: 'sakhi',
    lines: {
      hi: ['बंधा पानी निरमला, जो टुक गहिरा होय।', 'साधु जन बैठा भला, जो कुछ साधन होय ।।'],
      pb: [devanagariToGurmukhi('बंधा पानी निरमला, जो टुक गहिरा होय।'), devanagariToGurmukhi('साधु जन बैठा भला, जो कुछ साधन होय ।।')],
      en: ['Bandha paanee niramala, jo tuk gahira hoy.', 'Saadhu jan baitha bhala, jo kuch saadhan hoy.']
    },
    bhavarth: {
      hi: 'गहरा ठहरा हुआ पानी भी निर्मल होता है। उसी प्रकार एक स्थान पर स्थित साधु भी यदि साधना की गहराई में डूबा हो, तो वह भी निर्मल है।',
      pb: devanagariToGurmukhi('गहरा ठहरा जल निर्मल होता है, वैसे ही गहरी साधना में स्थित साधु भी पूजनीय है।'),
      en: 'Deep still water remains pristine; similarly, a saint seated in deep meditation stays pure.'
    }
  },
  {
    id: 'ang-6-v81',
    type: 'sakhi',
    lines: {
      hi: ['निर्बेरी निहकामता, स्वामी सेती नेह।', 'विषया सो न्यारा रहे, साधुन का मत येह।।'],
      pb: [devanagariToGurmukhi('निर्बेरी निहकामता, स्वामी सेती नेह।'), devanagariToGurmukhi('विषया सो न्यारा रहे, साधुन का मत येह।।')],
      en: ['Nirberee nihkaamata, svaamee setee neh.', 'Vishaya so nyaara rahe, saadhun ka mat yeh.']
    },
    bhavarth: {
      hi: 'निर्वैर भाव, निष्कामता, सद्गुरु स्वामी से अनन्य प्रेम और पांचों विषयों से दूरी - यही साधुओं का सर्वोपरि मत है।',
      pb: devanagariToGurmukhi('निर्वैरता, निष्कामता, प्रभु से प्रेम और विषयों से दूरी ही साधु का धर्म है।'),
      en: 'Freedom from enmity, desirelessness, devotion to Master, and detachment from sensual pleasures form the saint’s doctrine.'
    }
  },
  {
    id: 'ang-6-v82',
    type: 'sakhi',
    lines: {
      hi: ['षड़ विकार यह देह के, तिनको चित्त न लाय।', 'शोक मोह प्यासीह छुधा, जरा मृत्यु नशि जाय ।।'],
      pb: [devanagariToGurmukhi('षड़ विकार यह देह के, तिनको चित्त न लाय।'), devanagariToGurmukhi('शोक मोह प्यासीह छुधा, जरा मृत्यु नशि जाय ।।')],
      en: ['Shad vikaar yah deh ke, tinako chitt na laay.', 'Shok moh pyaaseeh chhudha, jara mrityu nashi jaay.']
    },
    bhavarth: {
      hi: 'शरीर के ६ विकारों (शोक, मोह, भूख, प्यास, बुढ़ापा, मृत्यु) से साधु-संत विचलित नहीं होते और आत्म-स्वरूप में स्थित रहते हैं।',
      pb: devanagariToGurmukhi('साधु शरीर के छः विकारों (शोक, मोह, भूख, प्यास, बुढ़ापा, मृत्यु) से विचलित नहीं होते।'),
      en: 'Saints transcend the six physical afflictions (grief, delusion, hunger, thirst, aging, and death).'
    }
  },
  {
    id: 'ang-6-v83',
    type: 'sakhi',
    lines: {
      hi: ['सन्त न छाड़ै सन्तता, कोटिक मिलै असन्त।', 'मलय भुवंगम बेधिया, शीतलता न तजन्त ।।'],
      pb: [devanagariToGurmukhi('सन्त न छाड़ै सन्तता, कोटिक मिलै असन्त।'), devanagariToGurmukhi('मलय भुवंगम बेधिया, शीतलता न तजन्त ।।')],
      en: ['Sant na chhaadai santata, kotik milai asant.', 'Malay bhuvangam bedhiya, sheetalata na tajant.']
    },
    bhavarth: {
      hi: 'चाहे करोड़ों दुष्ट मिल जाएं, पर संत अपनी सज्जनता नहीं त्यागते; जैसे सर्पों के लिपटने पर भी चंदन वृक्ष अपनी शीतलता नहीं छोड़ता।',
      pb: devanagariToGurmukhi('करोड़ों असंत मिलने पर भी संत अपनी सज्जनता नहीं त्यागते, जैसे चंदन सांपों के लिपटने पर भी शीतलता नहीं छोड़ता।'),
      en: 'Saints never abandon saintliness even among millions of evildoers, just as sandalwood retains cool fragrance despite snakes.'
    }
  },
  {
    id: 'ang-6-v84',
    type: 'sakhi',
    lines: {
      hi: ['जाति न पूछो साधु की, पूछि लीजिये ज्ञान।', 'मोल करो तरवार का, पड़ा रहन दो म्यान।।'],
      pb: [devanagariToGurmukhi('जाति न पूछो साधु की, पूछि लीजिये ज्ञान।'), devanagariToGurmukhi('मोल करो तरवार का, पड़ा रहन दो म्यान।।')],
      en: ['Jaati na poochho saadhu kee, poochhi leejiye gyaan.', 'Mol karo taravaar ka, pada rahan do myaan.']
    },
    bhavarth: {
      hi: 'साधु की शारीरिक जाति न पूछो, केवल उनके आत्म-ज्ञान को ग्रहण करो। जैसे तलवार का मोल होता है, म्यान का नहीं।',
      pb: devanagariToGurmukhi('साधु की जाति न पूछें, उनका ज्ञान ग्रहण करें। मोल तलवार का होता है, म्यान का नहीं।'),
      en: 'Inquire not the caste of a saint, but absorb their divine knowledge. Value the sword, not the sheath.'
    }
  },
  {
    id: 'ang-6-v85',
    type: 'sakhi',
    lines: {
      hi: ['साधु तो हीरा भया, न फूटै घन खाय।', 'न वह बिनसै कुम्भ ज्यों, ना वह आवै जाय।।'],
      pb: [devanagariToGurmukhi('साधु तो हीरा भया, न फूटै घन खाय।'), devanagariToGurmukhi('न वह बिनसै कुम्भ ज्यों, ना वह आवै जाय।।')],
      en: ['Saadhu to heera bhaya, na phootai ghan khaay.', 'Na vah binasai kumbh jyon, na vah aavai jaay.']
    },
    bhavarth: {
      hi: 'साधु हीरे के समान हैं जो घन की चोट से भी नहीं टूटता। वे जन्म-मरण के बंधन से मुक्त अचल हो जाते हैं।',
      pb: devanagariToGurmukhi('साधु हीरे के समान अविनाशी हैं जो चोट से नहीं टूटते। वे आवागमन से मुक्त होते हैं।'),
      en: 'A saint is like a diamond that withstands heavy hammers, remaining intact and free from birth and death.'
    }
  },
  {
    id: 'ang-6-v86',
    type: 'sakhi',
    lines: {
      hi: ['साधु साधु सब एक हैं, जस पुस्ते का खेत।', 'कोई विवेकी लाल हैं, और सेत का सेत।।'],
      pb: [devanagariToGurmukhi('साधु साधु सब एक हैं, जस पुस्ते का खेत।'), devanagariToGurmukhi('कोई विवेकी लाल हैं, और सेत का सेत।।')],
      en: ['Saadhu saadhu sab ek hain, jas puste ka khet.', 'Koi vivekee laal hain, aur set ka set.']
    },
    bhavarth: {
      hi: 'वेश से सभी साधु समान दिखते हैं, परंतु आत्म-ज्ञानी विवेकी साधु अनमोल लाल/रत्न के समान अति दुर्लभ होते हैं।',
      pb: devanagariToGurmukhi('वेशधारी साधु तो सब समान हैं, पर तत्वज्ञानी विवेकी साधु अनमोल रत्न की भांति दुर्लभ हैं।'),
      en: 'Outwardly all mendicants appear similar, but a truly wise, discerning saint is a rare ruby.'
    }
  },
  {
    id: 'ang-6-v87',
    type: 'sakhi',
    lines: {
      hi: ['सब वन तो चन्दन नहीं, शूरा के दल नाहिं।', 'सब समुद्र मोती नहीं, यों साधु जग माहिं।।'],
      pb: [devanagariToGurmukhi('सब वन तो चन्दन नहीं, शूरा के दल नाहिं।'), devanagariToGurmukhi('सब समुद्र मोती नहीं, यों साधु जग माहिं।।')],
      en: ['Sab van to chandan nahin, shoora ke dal naahin.', 'Sab samudra motee nahin, yon saadhu jag maahin.']
    },
    bhavarth: {
      hi: 'जैसे सब वन चंदन नहीं होते और सब समुद्र मोतियों से भरे नहीं होते, वैसे ही सच्चे तत्वदर्शी साधु भी जगत में कम होते हैं।',
      pb: devanagariToGurmukhi('जैसे हर वन चंदन नहीं और हर समुद्र में मोती नहीं होते, वैसे ही सच्चे साधु दुर्लभ हैं।'),
      en: 'Not every forest is sandalwood, nor every sea filled with pearls; likewise, genuine saints are exceedingly rare.'
    }
  },
  {
    id: 'ang-6-v88',
    type: 'sakhi',
    lines: {
      hi: ['साधु साधु सबहीं बड़े, अपनी अपनी ठौर।', 'शब्द विवेकी पारखी, सो माथे के मौर।।'],
      pb: [devanagariToGurmukhi('साधु साधु सबहीं बड़े, अपनी अपनी ठौर।'), devanagariToGurmukhi('शब्द विवेकी पारखी, सो माथे के मौर।।')],
      en: ['Saadhu saadhu sabheen bade, apanee apanee thaur.', 'Shabad vivekee paarakhee, so maathe ke maur.']
    },
    bhavarth: {
      hi: 'सभी साधु आदरणीय हैं, परंतु जो शब्द के पारखी व आत्म-ज्ञानी विवेकी संत हैं, वे सबके मुकुट-शिरोमणि हैं।',
      pb: devanagariToGurmukhi('सभी साधु बड़े हैं, परंतु शब्द-विवेकी आत्मज्ञानी संत सबके सिर के मुकुट हैं।'),
      en: 'All sadhus deserve respect, but the Master who knows the spiritual Word is the crown jewel of all.'
    }
  },
  {
    id: 'ang-6-v89',
    type: 'sakhi',
    lines: {
      hi: ['संत समागम परम सुख, जान अल्प सुख और।', 'मान सरोवर हंस है, बगुला ठौरे ठौर ।।'],
      pb: [devanagariToGurmukhi('संत समागम परम सुख, जान अल्प सुख और।'), devanagariToGurmukhi('मान सरोवर हंस है, बगुला ठौरे ठौर ।।')],
      en: ['Sant samaagam param sukh, jaan alp sukh aur.', 'Maan sarovar hans hai, bagula thaure thaur.']
    },
    bhavarth: {
      hi: 'संतों का संग ही परम सुख है, अन्य सब सुख क्षुद्र हैं। हंस मानसरोवर में रहता है, जबकि बगुले सर्वत्र भटकते हैं।',
      pb: devanagariToGurmukhi('संतों का संग ही परम सुख है। हंस मानसरोवर में मिलता है, बगुले तो हर जगह भटकते हैं।'),
      en: 'Fellowship with saints brings supreme bliss; swans dwell in Mansarovar while herons wander everywhere.'
    }
  },
  {
    id: 'ang-6-v90',
    type: 'sakhi',
    lines: {
      hi: ['साधु चाल जु चालई, साधु कहावै सोय।', 'बिन साधन तो सुधि नहीं, साधु कहां ते होय।।'],
      pb: [devanagariToGurmukhi('साधु चाल जु चालई, साधु कहावै सोय।'), devanagariToGurmukhi('बिन साधन तो सुधि नहीं, साधु कहां ते होय।।')],
      en: ['Saadhu chaal ju chaalai, saadhu kahaavai soy.', 'Bin saadhan to sudhi nahin, saadhu kahaan te hoy.']
    },
    bhavarth: {
      hi: 'जो साधु के समान पवित्र आचरण चलता है, वही साधु है। बिना भक्ति-साधन व संयम के कोई साधु नहीं हो सकता।',
      pb: devanagariToGurmukhi('जो साधु का आचरण करे वही साधु है। बिना साधना व संयम के साधु नहीं हुआ जा सकता।'),
      en: 'One who walks in pure conduct is a saint; without self-discipline and meditation, sainthood is impossible.'
    }
  },
  {
    id: 'ang-6-v91',
    type: 'sakhi',
    lines: {
      hi: ['हांसी खेल हराम है, जो जन रमते राम।', 'माया मन्दिर इस्तरी, नहिं साधु का काम।।'],
      pb: [devanagariToGurmukhi('हांसी खेल हराम है, जो जन रमते राम।'), devanagariToGurmukhi('माया मन्दिर इस्तरी, नहिं साधु का काम।।')],
      en: ['Haansee khel haraam hai, jo jan ramate ram.', 'Maaya mandir istaree, nahin saadhu ka kaam.']
    },
    bhavarth: {
      hi: 'जो परमात्मा के भजन में लीन हैं, उनके लिए संसार के चंचल खेल, माया-महल व विषय-भोग व्यर्थ हैं।',
      pb: devanagariToGurmukhi('राम में लीन संतों के लिए सांसारिक चंचलता, माया-महल व भोग-विलास व्यर्थ हैं।'),
      en: 'Those absorbed in God avoid frivolous worldly pursuits, material palaces, and sensual desires.'
    }
  },
  {
    id: 'ang-6-v92',
    type: 'sakhi',
    lines: {
      hi: ['कह अकाश को फेर है, कह धरती को तोल।', 'कहा साधु की जाति है, कह पारस को मोल ।।'],
      pb: [devanagariToGurmukhi('कह अकाश को फेर है, कह धरती को तोल।'), devanagariToGurmukhi('कहा साधु की जाति है, कह पारस को मोल ।।')],
      en: ['Kah akaash ko pher hai, kah dharatee ko tol.', 'Kaha saadhu kee jaati hai, kah paaras ko mol.']
    },
    bhavarth: {
      hi: 'आकाश का घेरा, धरती का भार, साधु की जाति और पारस का मोल - इनका अनुमान नहीं लगाया जा सकता।',
      pb: devanagariToGurmukhi('आकाश का घेरा, पृथ्वी का भार, साधु की जाति व पारस का मोल - इनका अंदाजा नहीं लगाया जा सकता।'),
      en: 'Immense as the sky and weight of the earth, the lineage of a saint and value of the philosopher’s stone are beyond measurement.'
    }
  },
  {
    id: 'ang-6-v93',
    type: 'sakhi',
    lines: {
      hi: ['हयबर गयबर सघन घन, छत्रपति की नारि।', 'तासु पटतरे ना तुले, हरिजन की पनिहारि ।।'],
      pb: [devanagariToGurmukhi('हयबर गयबर सघन घन, छत्रपति की नारि।'), devanagariToGurmukhi('तासु पटतरे ना तुले, हरिजन की पनिहारि ।।')],
      en: ['Hayabar gayabar saghan ghan, chhatrapati kee naari.', 'Taasu patatare na tule, harijan kee panihaari.']
    },
    bhavarth: {
      hi: 'राजा-महाराजा की धन-संपन्न रानी भी निष्काम हरि-भक्त की सेवा करने वाली दासी/पनिहारिन के बराबर भी नहीं तूल सकती।',
      pb: devanagariToGurmukhi('राजा की रानी भी निष्काम हरि-भक्त की सेवा करने वाली दासी के समतुल्य नहीं हो सकती।'),
      en: 'Even a queen in a royal palace does not equal the spiritual worth of a humble water-carrier serving devotees.'
    }
  },
  {
    id: 'ang-6-v94',
    type: 'sakhi',
    lines: {
      hi: ['क्यों नृपनारी निन्दिये, पनिहारी को मान।', 'वह मांग संवारे पीवहित, नित वह सुमिरे राम ।।'],
      pb: [devanagariToGurmukhi('क्यों नृपनारी निन्दिये, पनिहारी को मान।'), devanagariToGurmukhi('वह मांग संवारे पीवहित, नित वह सुमिरे राम ।।')],
      en: ['Kyon nripanaaree nindiye, panihaaree ko maan.', 'Vah maang sanvaare peevahit, nit vah sumire ram.']
    },
    bhavarth: {
      hi: 'रानी केवल पति के रिझाने में लगी रहती है, जबकि हरि-भक्तिन नित्य परमात्मा का सुमिरण करती है, इसलिए भक्तिन पूजनीय है।',
      pb: devanagariToGurmukhi('रानी सांसारिक पति के श्रृंगार में लगी है, जबकि भक्तिन परमात्मा का स्मरण करती है।'),
      en: 'The queen adorns herself for her earthly king, while the humble devotee contemplates the eternal Lord.'
    }
  },
  {
    id: 'ang-6-v95',
    type: 'sakhi',
    lines: {
      hi: ['सो दिन गया अकाज में, संगत भई न संत।', 'प्रेम बिना पशु जीवना, भाव बिना भटकंत ।।'],
      pb: [devanagariToGurmukhi('सो दिन गया अकाज में, संगत भई न संत।'), devanagariToGurmukhi('प्रेम बिना पशु जीवना, भाव बिना भटकंत ।।')],
      en: ['So din gaya akaaj mein, sangat bhee na sant.', 'Prem bina pashu jeevana, bhaav bina bhatakant.']
    },
    bhavarth: {
      hi: 'जिस दिन संतों का सत्संग नहीं हुआ, वह दिन व्यर्थ गया। प्रेम बिना जीवन पशु जैसा है और भक्ति-भाव बिना भटकना ही है।',
      pb: devanagariToGurmukhi('जिस दिन संतों की संगत न हुई, वह व्यर्थ गया। प्रेम बिना जीवन पशु समान है।'),
      en: 'A day spent without saintly fellowship is wasted. Life without divine love is like that of a stray animal.'
    }
  },
  {
    id: 'ang-6-v96',
    type: 'sakhi',
    lines: {
      hi: ['साधु बिहंगम सुरसरी, चले बिहंगम चाल।', 'जो जो गलियां नीकसे, सो सो करे निहाल ।।'],
      pb: [devanagariToGurmukhi('साधु बिहंगम सुरसरी, चले बिहंगम चाल।'), devanagariToGurmukhi('जो जो गलियां नीकसे, सो सो करे निहाल ।।')],
      en: ['Saadhu bihangam surasaree, chale bihangam chaal.', 'Jo jo galiyaan neekase, so so kare nihaal.']
    },
    bhavarth: {
      hi: 'साधु-संत गंगा नदी के समान हैं, जो जिन-जिन गलियों से होकर निकलते हैं, वहाँ-वहाँ सबको ज्ञानोपदेश से निहाल कर देते हैं।',
      pb: devanagariToGurmukhi('साधु गंगा नदी के समान हैं, जो जिन गलियों से निकलते हैं, वहाँ सबको निहाल कर देते हैं।'),
      en: 'Saints flow like the holy Ganges, purifying and liberating every path through which they travel.'
    }
  },
  {
    id: 'ang-6-v97',
    type: 'sakhi',
    lines: {
      hi: ['आजकल के लोग हैं, मिलिके बिछुरी जांहि।', 'लाहा कारण आपने, सोगंद रामकि खांहि ।।'],
      pb: [devanagariToGurmukhi('आजकल के लोग हैं, मिलिके बिछुरी जांहि।'), devanagariToGurmukhi('लाहा कारण आपने, सोगंद रामकि खांहि ।।')],
      en: ['Aajakal ke log hain, milike bichhuree jaani.', 'Laaha kaaran aapane, sogand ramaki khaanhi.']
    },
    bhavarth: {
      hi: 'आजकल के संसारी लोग स्वार्थ के कारण आपस में मिलते और बिछुड़ते हैं तथा लाभ के लिए झूठी कसमें खाते हैं।',
      pb: devanagariToGurmukhi('आजकल के लोग केवल स्वार्थ के लिए मिलते हैं और लाभ के लिए झूठी सौगंध खाते हैं।'),
      en: 'Worldly people gather solely out of selfish motives, making false promises for personal gain.'
    }
  },
  {
    id: 'ang-6-v98',
    type: 'sakhi',
    lines: {
      hi: ['कबीर हमारा कोई नहिं, हम काहू के नाहिं।', 'पारै पहुंची नाव ज्यौं, मिलिके बिछुरी जाहिं ।।'],
      pb: [devanagariToGurmukhi('कबीर हमारा कोई नहिं, हम काहू के नाहिं।'), devanagariToGurmukhi('पारै पहुंची नाव ज्यौं, मिलिके बिछुरी जाहिं ।।')],
      en: ['Kabir hamaara koi nahin, ham kaahoo ke naahin.', 'Paarai pahoonchee naav jyon, milike bichhuree jaahin.']
    },
    bhavarth: {
      hi: 'कबीरजी कहते हैं कि इस संसार में हमारा कोई नहीं है और हम किसी के नहीं हैं, जैसे नाव पार लगने पर यात्री बिछुड़ जाते हैं।',
      pb: devanagariToGurmukhi('कबीरजी कहते हैं कि संसार में हमारा कोई नहीं, जैसे नदी पार करने पर नाव के यात्री बिछुड़ जाते हैं।'),
      en: 'Kabir says none belongs to us in this world; like passengers stepping off a boat at the shore, all separate in the end.'
    }
  },
  {
    id: 'ang-6-v99',
    type: 'sakhi',
    lines: {
      hi: ['ढोल दमामा गड़फड़ी, सहनाई औ तूर।', 'तीनों निकसि न बाहरैं, साधु सती औ शूर ।।'],
      pb: [devanagariToGurmukhi('ढोल दमामा गड़फड़ी, सहनाई औ तूर।'), devanagariToGurmukhi('तीनों निकसि न बाहरैं, साधु सती औ शूर ।।')],
      en: ['Dhol damaama gadapadee, sahanaee au toor.', 'Teenon nikasi na baaharain, saadhu satee au shoor.']
    },
    bhavarth: {
      hi: 'जैसे ढोल और शहनाई की आवाज वापस नहीं खिंचती, वैसे ही साधु, सती और शूरवीर अपने सत्य-संकल्प से पीछे नहीं हटते।',
      pb: devanagariToGurmukhi('जैसे ढोल-शहनाई की ध्वनि वापस नहीं आती, वैसे ही साधु, सती और शूरवीर अपने संकल्प से पीछे नहीं हटते।'),
      en: 'Just as sound emitted from drums and trumpets cannot be recalled, a saint, devoted soul, and hero never retreat from their sacred pledge.'
    }
  }
];

