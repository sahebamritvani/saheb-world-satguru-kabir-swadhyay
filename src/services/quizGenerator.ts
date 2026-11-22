import { Sakhi, Language, QuizQuestion } from '../types';
import { ensureSatguruKabirSaheb } from '../utils/textSanitizer';

export interface QuizOption {
  text: string;
  isCorrect: boolean;
  feedback: string;
}

export interface GeneratedQuizQuestion {
  id: string;
  dimension:
    | 'core-message'
    | 'symbolic-meaning'
    | 'real-life-scenario'
    | 'cause-effect'
    | 'tattva-gyan';
  angle: string;
  question: string;
  options: QuizOption[];
  correctIndex: number;
  explanation: string;
}

function fisherYatesShuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Shuffles BOTH the order of questions AND the order of A/B/C/D options cleanly,
 * keeping option-level feedback and isCorrect flags tied to each option.
 */
export function shuffleGeneratedQuiz<T extends { options: QuizOption[] }>(
  questions: T[]
): T[] {
  if (!Array.isArray(questions) || questions.length === 0) return [];
  const reorderedQuestions = fisherYatesShuffle(questions);
  return reorderedQuestions.map((q) => {
    const rawOpts = Array.isArray(q.options) ? q.options.slice(0, 4) : [];
    const shuffledOpts = fisherYatesShuffle(rawOpts);
    return {
      ...q,
      options: shuffledOpts,
    };
  });
}

/**
 * Curated, benchmark-quality 5-question trilingual quizzes for signature Sakhis
 * (featuring Sakhi #1106 exact benchmark question + 4 other authentic dimensions).
 */
export const CURATED_SAKHI_QUIZZES: Record<number, any[]> = {
  1106: [
    {
      id: 'q-1106-1-core',
      angle: {
        hi: 'केंद्रीय जीवन संदेश',
        pb: 'ਮੁੱਖ ਜੀਵਨ ਸੰਦੇਸ਼',
        en: 'Core Practical Message',
      },
      question: {
        hi: 'साखी #११०६ ("शीतल शब्द उचारिये, अहं आनिये नाहिं") का केंद्रीय जीवन संदेश क्या है?',
        pb: 'ਸਾਖੀ #੧੧੦੬ ("ਸ਼ੀਤਲ ਸ਼ਬਦ ਉਚਾਰੀਏ, ਅਹੰ ਆਨੀਏ ਨਾਹਿਂ") ਦਾ ਮੁੱਖ ਜੀਵਨ ਸੰਦੇਸ਼ ਕੀ ਹੈ?',
        en: 'What is the core practical life message of Sakhi #1106 ("Shital shabd uchariye, aham aniye nahi")?',
      },
      optionObjects: {
        hi: [
          { text: 'सदा विनम्र और शीतल वाणी बोलना तथा मन में अहंकार का प्रवेश न होने देना', isCorrect: true, feedback: '✓ सही उत्तर! सतगुरु कबीर साहेब स्पष्ट करते हैं कि मीठी, शीतल वाणी और निरहंकार भाव ही मनुष्य के अंतःकरण को शांति और प्रीतम की अनुभूति के योग्य बनाते हैं।' },
          { text: 'केवल एकांत में मौन व्रत धारण कर दूसरों से संवाद पूरी तरह बंद कर देना', isCorrect: false, feedback: '✗ यह विकल्प सही नहीं है। कबीर साहेब समाज से कटकर मौन रहने की बजाय दूसरों से व्यवहार करते हुए भी वाणी में शीतलता रखने का उपदेश देते हैं।' },
          { text: 'अपने सम्मान की रक्षा के लिए विरोधियों को कठोर शब्दों से उत्तर देना', isCorrect: false, feedback: '✗ यह विकल्प सही नहीं है। कठोर शब्दों से उत्तर देने पर विवाद और अहंकार दोनों भड़कते हैं; शीतल शब्द ही अग्नि को शांत करते हैं।' },
          { text: 'केवल बाहरी ग्रंथों के कठिन शब्दों को कंठस्थ करके शास्त्रार्थ करना', isCorrect: false, feedback: '✗ यह विकल्प सही नहीं है। केवल शास्त्रार्थ जीतने से अहंकार पुष्ट होता है, जबकि साहेब वाणी में निरहंकारिता की बात करते हैं।' },
        ],
        pb: [
          { text: 'ਸਦਾ ਨਿਮਰ ਤੇ ਸ਼ੀਤਲ ਬੋਲੀ ਬੋਲਣੀ ਅਤੇ ਮਨ ਵਿੱਚ ਹੰਕਾਰ ਨਾ ਆਉਣ ਦੇਣਾ', isCorrect: true, feedback: '✓ ਸਹੀ ਉੱਤਰ! ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫਰਮਾਉਂਦੇ ਹਨ ਕਿ ਮਿੱਠੀ, ਸ਼ੀਤਲ ਬੋਲੀ ਅਤੇ ਨਿਮਰਤਾ ਹੀ ਮਨ ਨੂੰ ਸ਼ਾਂਤ ਕਰਕੇ ਪ੍ਰਭੂ-ਮਿਲਾਪ ਦੇ ਯੋਗ ਬਣਾਉਂਦੇ ਹਨ।' },
          { text: 'ਕੇਵਲ ਇਕਾਂਤ ਵਿੱਚ ਮੌਨ ਵਰਤ ਰੱਖ ਕੇ ਸਭ ਨਾਲ ਗੱਲਬਾਤ ਬੰਦ ਕਰ ਦੇਣੀ', isCorrect: false, feedback: '✗ ਇਹ ਵਿਕਲਪ ਸਹੀ ਨਹੀਂ ਹੈ। ਕਬੀਰ ਸਾਹੇਬ ਸਮਾਜ ਤੋਂ ਭੱਜ ਕੇ ਚੁੱਪ ਰਹਿਣ ਦੀ ਬਜਾਏ ਗੱਲਬਾਤ ਵਿੱਚ ਸ਼ੀਤਲਤਾ ਰੱਖਣ ਦੀ ਸਿੱਖਿਆ ਦਿੰਦੇ ਹਨ।' },
          { text: 'ਆਪਣੀ ਸ਼ਾਨ ਬਚਾਉਣ ਲਈ ਵਿਰੋਧੀਆਂ ਨੂੰ ਤਿੱਖੇ ਬੋਲਾਂ ਵਿੱਚ ਜਵਾਬ ਦੇਣਾ', isCorrect: false, feedback: '✗ ਇਹ ਵਿਕਲਪ ਸਹੀ ਨਹੀਂ ਹੈ। ਕੌੜੇ ਬੋਲ ਬੋਲਣ ਨਾਲ ਝਗੜਾ ਅਤੇ ਹੰਕਾਰ ਵਧਦਾ ਹੈ; ਸ਼ੀਤਲ ਬਚਨ ਹੀ ਸ਼ਾਂਤੀ ਲਿਆਉਂਦੇ ਹਨ।' },
          { text: 'ਬਾਹਰੀ ਪੁਸਤਕਾਂ ਦੇ ਔਖੇ ਸ਼ਬਦ ਯਾਦ ਕਰਕੇ ਬਹਿਸਾਂ ਵਿੱਚ ਜਿੱਤ ਪ੍ਰਾਪਤ ਕਰਨੀ', isCorrect: false, feedback: '✗ ਇਹ ਵਿਕਲਪ ਸਹੀ ਨਹੀਂ ਹੈ। ਬਹਿਸਾਂ ਜਿੱਤਣ ਨਾਲ ਹੰਕਾਰ ਵਧਦਾ ਹੈ, ਜਦਕਿ ਸਾਹੇਬ ਬੋਲੀ ਵਿੱਚ ਨਿਮਰਤਾ ਸਿਖਾਉਂਦੇ ਹਨ।' },
        ],
        en: [
          { text: 'Speak calmly and humbly at all times while keeping arrogance out of the heart', isCorrect: true, feedback: '✓ Correct! Satguru Kabir Saheb teaches that cooling, gentle speech paired with freedom from ego prepares the heart for inner peace and Divine realization.' },
          { text: 'Stop speaking to others altogether by taking a vow of total silence in isolation', isCorrect: false, feedback: '✗ Incorrect option. Kabir Saheb does not advocate antisocial withdrawal, but practicing coolness and patience in daily relationships.' },
          { text: 'Respond firmly with sharp words whenever someone challenges your dignity', isCorrect: false, feedback: '✗ Incorrect option. Answering with harsh retaliation fans the flames of anger; gentle speech quenches conflict.' },
          { text: 'Memorize complex verses merely to win philosophical debates with others', isCorrect: false, feedback: '✗ Incorrect option. Memorizing verses for dry debate inflates ego, which directly contradicts this verse.' },
        ],
      },
    },
    {
      id: 'q-1106-2-symbolic',
      angle: {
        hi: 'आध्यात्मिक एवं प्रतीकात्मक अर्थ',
        pb: 'ਆਤਮਿਕ ਤੇ ਪ੍ਰਤੀਕਾਤਮਕ ਅਰਥ',
        en: 'Symbolic & Esoteric Meaning',
      },
      question: {
        hi: 'सतगुरु कबीर साहेब के अनुसार मनुष्य का सबसे बड़ा शत्रु ("दुसमन") और सबसे प्यारा मित्र ("प्रीतम") कहाँ निवास करते हैं?',
        pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਅਨੁਸਾਰ ਮਨੁੱਖ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਦੁਸ਼ਮਣ ਅਤੇ ਸਭ ਤੋਂ ਪਿਆਰਾ ਮਿੱਤਰ ("ਪ੍ਰੀਤਮ") ਕਿੱਥੇ ਵਸਦੇ ਹਨ?',
        en: 'According to Satguru Kabir Saheb, where do one’s greatest enemy ("Dusman") and dearest Beloved ("Pritam") reside?',
      },
      optionObjects: {
        hi: [
          { text: 'स्वयं मनुष्य के अपने ही अंतःकरण (घट) के भीतर', isCorrect: true, feedback: '✓ सही उत्तर! "तेरा प्रीतम तुझहि में, दुसमन भी तुझ माहिं" — साहेब समझाते हैं कि परमात्मा रूपी प्रीतम और अहंकार/कटुता रूपी शत्रु, दोनों बाहर नहीं बल्कि हमारे अपने भीतर विद्यमान हैं।' },
          { text: 'बाहर के समाज और पड़ोसियों के बीच', isCorrect: false, feedback: '✗ यह विकल्प सही नहीं है। बाहर के लोग केवल निमित्त हैं; वास्तविक शत्रु हमारा अपना ही भड़का हुआ अहंकार है।' },
          { text: 'केवल दूरस्थ तीर्थ स्थलों और प्राचीन खंडहरों में', isCorrect: false, feedback: '✗ यह विकल्प सही नहीं है। प्रीतम घट-मंदिर में विराजमान हैं, उन्हें बाहर तीर्थों में ढूँढना भूल है।' },
          { text: 'भाग्य, नक्षत्रों और ग्रहों की चाल में', isCorrect: false, feedback: '✗ यह विकल्प सही नहीं है। आध्यात्मिक उन्नति या अवनति बाह्य ग्रहों से नहीं, आंतरिक चित्तवृत्ति से होती है।' },
        ],
        pb: [
          { text: 'ਮਨੁੱਖ ਦੇ ਆਪਣੇ ਹੀ ਅੰਦਰਲੇ ਹਿਰਦੇ (ਘਟ) ਦੇ ਅੰਦਰ', isCorrect: true, feedback: '✓ ਸਹੀ ਉੱਤਰ! "ਤੇਰਾ ਪ੍ਰੀਤਮ ਤੁਝਹਿ ਮੇਂ, ਦੁਸਮਨ ਭੀ ਤੁਝ ਮਾਹਿਂ" — ਸਤਿਗੁਰੂ ਸਮਝਾਉਂਦੇ ਹਨ ਕਿ ਪ੍ਰੀਤਮ (ਪਰਮਾਤਮਾ) ਅਤੇ ਦੁਸ਼ਮਣ (ਹੰਕਾਰ/ਕੌੜਾ ਮਨ) ਦੋਵੇਂ ਸਾਡੇ ਆਪਣੇ ਅੰਦਰ ਹੀ ਹਨ।' },
          { text: 'ਬਾਹਰਲੇ ਸਮਾਜ ਅਤੇ ਗੁਆਂਢੀਆਂ ਦੇ ਵਿਚਕਾਰ', isCorrect: false, feedback: '✗ ਇਹ ਵਿਕਲਪ ਸਹੀ ਨਹੀਂ ਹੈ। ਬਾਹਰਲੇ ਲੋਕ ਕੇਵਲ ਵਸੀਲਾ ਹਨ; ਅਸਲ ਦੁਸ਼ਮਣ ਸਾਡਾ ਆਪਣਾ ਹੰਕਾਰ ਹੈ।' },
          { text: 'ਕੇਵਲ ਦੂਰ-ਦੁਰਾਡੇ ਤੀਰਥ ਅਸਥਾਨਾਂ ਵਿੱਚ', isCorrect: false, feedback: '✗ ਇਹ ਵਿਕਲਪ ਸਹੀ ਨਹੀਂ ਹੈ। ਪ੍ਰੀਤਮ ਹਿਰਦੇ-ਮੰਦਰ ਵਿੱਚ ਵਸਦੇ ਹਨ, ਬਾਹਰ ਭਟਕਣਾ ਵਿਅਰਥ ਹੈ।' },
          { text: 'ਕਿਸਮਤ ਅਤੇ ਗ੍ਰਹਿਆਂ ਦੀ ਚਾਲ ਦੇ ਅੰਦਰ', isCorrect: false, feedback: '✗ ਇਹ ਵਿਕਲਪ ਸਹੀ ਨਹੀਂ ਹੈ। ਰੂਹਾਨੀ ਵਿਕਾਸ ਕਿਸਮਤ ਜਾਂ ਗ੍ਰਹਿਆਂ ਤੇ ਨਹੀਂ, ਅੰਦਰਲੇ ਮਨ ਤੇ ਨਿਰਭਰ ਕਰਦਾ ਹੈ।' },
        ],
        en: [
          { text: 'Within one’s very own inner heart and consciousness (Ghat)', isCorrect: true, feedback: '✓ Correct! "Your Beloved is within you, and your enemy too is inside you"—both the Divine Friend and destructive ego live within our own consciousness.' },
          { text: 'Outwardly among society, neighbors, and social circles', isCorrect: false, feedback: '✗ Incorrect option. Outsiders are merely triggers; the true adversary is our own agitated ego.' },
          { text: 'Solely inside distant pilgrimage shrines and temples', isCorrect: false, feedback: '✗ Incorrect option. The Beloved dwells in the heart sanctuary, not in distant stone monuments.' },
          { text: 'In external destiny and the movement of planets', isCorrect: false, feedback: '✗ Incorrect option. Spiritual awakening depends upon inward purification, not planetary constellations.' },
        ],
      },
    },
    {
      id: 'q-1106-3-scenario',
      angle: {
        hi: 'दैनिक व्यवहार एवं अनुशासन',
        pb: 'ਰੋਜ਼ਾਨਾ ਵਿਹਾਰ ਤੇ ਅਨੁਸ਼ਾਸਨ',
        en: 'Real-Life Application',
      },
      question: {
        hi: 'दैनिक व्यवहार: यदि कोई सहकर्मी या परिजन बिना कारण क्रोध में कड़वी बात कह दे, तो इस साखी के अनुसार साधक को कैसा आचरण करना चाहिए?',
        pb: 'ਰੋਜ਼ਾਨਾ ਵਿਹਾਰ: ਜੇ ਕੋਈ ਸਾਥੀ ਜਾਂ ਪਰਿਵਾਰਕ ਮੈਂਬਰ ਗੁੱਸੇ ਵਿੱਚ ਕੌੜੀ ਗੱਲ ਕਹਿ ਦੇਵੇ, ਤਾਂ ਇਸ ਸਾਖੀ ਅਨੁਸਾਰ ਸਾਧਕ ਨੂੰ ਕੀ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ?',
        en: 'Daily Scenario: If a colleague or relative speaks angrily and harshly without reason, how should a seeker respond according to this Sakhi?',
      },
      optionObjects: {
        hi: [
          { text: 'मन के आवेश और अहं को रोककर शांत व शीतल वाणी से संवाद संभालना चाहिए', isCorrect: true, feedback: '✓ सही उत्तर! कटुता का उत्तर कटुता से देने पर भीतर का शत्रु (अहंकार) जीत जाता है; शीतल शब्द बोलने से विवाद शांत होता है और साधक की आध्यात्मिक गरिमा सुरक्षित रहती है।' },
          { text: 'तुरंत उतनी ही कठोर भाषा में प्रतिउत्तर देकर अपना पक्ष साबित करना चाहिए', isCorrect: false, feedback: '✗ यह विकल्प सही नहीं है। कड़वी वाणी का उत्तर कड़वी वाणी से देने पर भीतर का "दुसमन" जीत जाता है।' },
          { text: 'उस व्यक्ति से आजीवन के लिए मन में वैर और बदला रखने का निश्चय करना चाहिए', isCorrect: false, feedback: '✗ यह विकल्प सही नहीं है। मन में गाँठ बाँधने से अंतःकरण अशांत होता है और साधना नष्ट होती है।' },
          { text: 'सबके सामने उस व्यक्ति की पिछली गलतियाँ गिनाकर उसे लज्जित करना चाहिए', isCorrect: false, feedback: '✗ यह विकल्प सही नहीं है। दूसरों को नीचा दिखाना अहंकार का पोषण है, जो साहेब के मार्ग के विपरीत है।' },
        ],
        pb: [
          { text: 'ਮਨ ਦੇ ਜੋਸ਼ ਤੇ ਹੰਕਾਰ ਨੂੰ ਰੋਕ ਕੇ ਸ਼ਾਂਤ ਅਤੇ ਸ਼ੀਤਲ ਬੋਲਾਂ ਨਾਲ ਗੱਲ ਸੰਭਾਲਣੀ ਚਾਹੀਦੀ ਹੈ', isCorrect: true, feedback: '✓ ਸਹੀ ਉੱਤਰ! ਕੌੜੇ ਬੋਲ ਦਾ ਜਵਾਬ ਕੌੜੇ ਬੋਲ ਨਾਲ ਦੇਣ ਤੇ ਅੰਦਰਲਾ ਦੁਸ਼ਮਣ (ਹੰਕਾਰ) ਜਿੱਤ ਜਾਂਦਾ ਹੈ; ਸ਼ੀਤਲ ਬੋਲ ਵਿਵਾਦ ਨੂੰ ਸ਼ਾਂਤ ਕਰਦੇ ਹਨ।' },
          { text: 'ਤੁਰੰਤ ਉਹੀ ਕੌੜੀ ਬੋਲੀ ਵਿੱਚ ਜਵਾਬ ਦੇ ਕੇ ਆਪਣਾ ਪੱਖ ਸਹੀ ਸਾਬਤ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ', isCorrect: false, feedback: '✗ ਇਹ ਵਿਕਲਪ ਸਹੀ ਨਹੀਂ ਹੈ। ਕੌੜੇ ਬੋਲ ਬੋਲਣ ਨਾਲ ਅੰਦਰਲਾ ਦੁਸ਼ਮਣ ਭੜਕਦਾ ਹੈ।' },
          { text: 'ਉਸ ਵਿਅਕਤੀ ਨਾਲ ਸਾਰੀ ਉਮਰ ਲਈ ਮਨ ਵਿੱਚ ਵੈਰ ਅਤੇ ਬਦਲਾ ਰੱਖ ਲੈਣਾ ਚਾਹੀਦਾ ਹੈ', isCorrect: false, feedback: '✗ ਇਹ ਵਿਕਲਪ ਸਹੀ ਨਹੀਂ ਹੈ। ਵੈਰ ਰੱਖਣ ਨਾਲ ਮਨ ਦਾ ਰੂਹਾਨੀ ਚਾਨਣ ਬੁੱਝ ਜਾਂਦਾ ਹੈ।' },
          { text: 'ਸਭ ਦੇ ਸਾਹਮਣੇ ਉਸ ਦੀਆਂ ਪੁਰਾਣੀਆਂ ਗਲਤੀਆਂ ਗਿਣਾ ਕੇ ਉਸ ਨੂੰ ਸ਼ਰਮਿੰਦਾ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ', isCorrect: false, feedback: '✗ ਇਹ ਵਿਕਲਪ ਸਹੀ ਨਹੀਂ ਹੈ। ਦੂਜਿਆਂ ਨੂੰ ਲੱਜਿਤ ਕਰਨਾ ਹੰਕਾਰ ਦਾ ਵਿਖਾਵਾ ਹੈ।' },
        ],
        en: [
          { text: 'Restrain inner ego and reply with calm, cooling words that defuse tension', isCorrect: true, feedback: '✓ Correct! Answering bitterness with bitterness lets inner ego win; cooling speech calms conflict and preserves inner stillness.' },
          { text: 'Immediately fire back in equally sharp words to prove your superiority', isCorrect: false, feedback: '✗ Incorrect option. Firing back with harsh words surrenders power to the inner enemy.' },
          { text: 'Hold silent resentment forever while planning subtle retaliation later', isCorrect: false, feedback: '✗ Incorrect option. Nursing a grudge poisons your own peace of mind.' },
          { text: 'Publicly list all of their past mistakes so everyone sees they are wrong', isCorrect: false, feedback: '✗ Incorrect option. Humiliating others inflates self-righteous pride.' },
        ],
      },
    },
    {
      id: 'q-1106-4-cause-effect',
      angle: {
        hi: 'कारण और परिणाम',
        pb: 'ਕਾਰਨ ਤੇ ਨਤੀਜਾ',
        en: 'Cause & Spiritual Effect',
      },
      question: {
        hi: 'कारण और परिणाम: वाणी में कटुता और हृदय में "अहं" (अहंकार) को पोषित करने का आध्यात्मिक परिणाम क्या होता है?',
        pb: 'ਕਾਰਨ ਤੇ ਨਤੀਜਾ: ਬੋਲੀ ਵਿੱਚ ਕੜਵਾਹਟ ਅਤੇ ਹਿਰਦੇ ਵਿੱਚ "ਅਹੰ" (ਹੰਕਾਰ) ਪਾਲਣ ਦਾ ਅਧਿਆਤਮਕ ਨਤੀਜਾ ਕੀ ਹੁੰਦਾ ਹੈ?',
        en: 'Cause & Effect: What is the spiritual consequence of nourishing harsh speech and inner ego ("Aham")?',
      },
      optionObjects: {
        hi: [
          { text: 'भीतर विराजमान प्रीतम (परमात्मा) से दूरी बढ़ती है और अंतर्मन अशांत हो जाता है', isCorrect: true, feedback: '✓ सही उत्तर! जहाँ अहंकार और कड़वाहट पनपती है, वहाँ हृदय का द्वार संकीर्ण हो जाता है; अहं ही वह आवरण है जो घट में बसे साहेब की अनुभूति को रोक देता है।' },
          { text: 'बाहरी समाज में व्यक्ति सदैव बहुत लोकप्रिय और सम्मानित बन जाता है', isCorrect: false, feedback: '✗ यह विकल्प सही नहीं है। कटु और अहंकारी व्यक्ति से लोग केवल भयभीत होते हैं, प्रेम या सम्मान नहीं करते।' },
          { text: 'आत्म-चिंतन और ध्यान की गहराई अपने आप तीव्र हो जाती है', isCorrect: false, feedback: '✗ यह विकल्प सही नहीं है। क्रोध और अहंकार ध्यान को खंड-खंड कर देते हैं।' },
          { text: 'मनुष्य को किसी भी सत्संग या आत्म-निरीक्षण की आवश्यकता नहीं रहती', isCorrect: false, feedback: '✗ यह विकल्प सही नहीं है। अहंकारी मन सत्संग से दूर होकर अज्ञान में ही भटकता रहता है।' },
        ],
        pb: [
          { text: 'ਅੰਦਰ ਵਸਦੇ ਪ੍ਰੀਤਮ (ਪਰਮਾਤਮਾ) ਨਾਲੋਂ ਦੂਰੀ ਵਧਦੀ ਹੈ ਤੇ ਮਨ ਅਸ਼ਾਂਤ ਹੁੰਦਾ ਹੈ', isCorrect: true, feedback: '✓ ਸਹੀ ਉੱਤਰ! ਜਿੱਥੇ ਹੰਕਾਰ ਤੇ ਕੜਵਾਹਟ ਵਧਦੇ ਹਨ, ਉੱਥੇ ਦਿਲ ਤੰਗ ਹੋ ਜਾਂਦਾ ਹੈ; ਹੰਕਾਰ ਹੀ ਉਹ ਪਰਦਾ ਹੈ ਜੋ ਅੰਦਰ ਵਸਦੇ ਸਾਹੇਬ ਦੇ ਦਰਸ਼ਨ ਰੋਕਦਾ ਹੈ।' },
          { text: 'ਬਾਹਰਲੇ ਸਮਾਜ ਵਿੱਚ ਮਨੁੱਖ ਹਮੇਸ਼ਾ ਹਰਮਨਪਿਆਰਾ ਅਤੇ ਸਨਮਾਨਿਤ ਬਣ ਜਾਂਦਾ ਹੈ', isCorrect: false, feedback: '✗ ਇਹ ਵਿਕਲਪ ਸਹੀ ਨਹੀਂ ਹੈ। ਕੌੜੇ ਸੁਭਾਅ ਵਾਲੇ ਮਨੁੱਖ ਤੋਂ ਲੋਕ ਦੂਰ ਭੱਜਦੇ ਹਨ।' },
          { text: 'ਆਤਮ-ਚਿੰਤਨ ਅਤੇ ਧਿਆਨ ਦੀ ਡੂੰਘਾਈ ਆਪਣੇ ਆਪ ਤੇਜ਼ ਹੋ ਜਾਂਦੀ ਹੈ', isCorrect: false, feedback: '✗ ਇਹ ਵਿਕਲਪ ਸਹੀ ਨਹੀਂ ਹੈ। ਹੰਕਾਰ ਧਿਆਨ ਦੀ ਇਕਾਗਰਤਾ ਨੂੰ ਤੋੜ ਦਿੰਦਾ ਹੈ।' },
          { text: 'ਮਨੁੱਖ ਨੂੰ ਕਿਸੇ ਸਤਿਸੰਗ ਜਾਂ ਆਤਮ-ਪੜਚੋਲ ਦੀ ਲੋੜ ਨਹੀਂ ਰਹਿੰਦੀ', isCorrect: false, feedback: '✗ ਇਹ ਵਿਕਲਪ ਸਹੀ ਨਹੀਂ ਹੈ। ਅਹੰਕਾਰੀ ਜੀਵ ਭਟਕਣਾ ਵਿੱਚ ਹੀ ਫਸਿਆ ਰਹਿੰਦਾ ਹੈ।' },
        ],
        en: [
          { text: 'It creates inner restlessness and veils awareness of the Indwelling Beloved', isCorrect: true, feedback: '✓ Correct! Where pride and bitterness grow, the heart narrows; ego acts as the very veil blocking awareness of the Divine inside.' },
          { text: 'One automatically earns deep trust and lasting harmony with everyone', isCorrect: false, feedback: '✗ Incorrect option. Arrogance repels genuine trust and destroys peace in relationships.' },
          { text: 'Concentration in meditation effortlessly deepens on its own', isCorrect: false, feedback: '✗ Incorrect option. Mental agitation from angry words shatters meditative stillness.' },
          { text: 'The seeker no longer needs Satsang or self-discipline', isCorrect: false, feedback: '✗ Incorrect option. Blind pride tricks the soul into believing guidance is unnecessary.' },
        ],
      },
    },
    {
      id: 'q-1106-5-tattva',
      angle: {
        hi: 'तत्व ज्ञान एवं आत्म-बोध',
        pb: 'ਤੱਤ ਗਿਆਨ ਤੇ ਆਤਮ-ਬੋਧ',
        en: 'Deeper Kabir Panth Philosophy',
      },
      question: {
        hi: '"शब्द को अंग" के तत्व ज्ञान के अनुसार "शीतल शब्द" की साधना घट-मंदिर में किस प्रकार आत्म-बोध कराती है?',
        pb: '"ਸ਼ਬਦ ਕੋ ਅੰਗ" ਦੇ ਤੱਤ-ਗਿਆਨ ਅਨੁਸਾਰ "ਸ਼ੀਤਲ ਸ਼ਬਦ" ਦੀ ਸਾਧਨਾ ਘਟ-ਮੰਦਿਰ ਵਿੱਚ ਕਿਸ ਤਰ੍ਹਾਂ ਆਤਮ-ਬੋਧ ਕਰਵਾਉਂਦੀ ਹੈ?',
        en: 'In the deeper philosophy of "Shabd Ko Ang," how does practicing "Shital Shabd" awaken realization inside the Ghat-Mandir?',
      },
      optionObjects: {
        hi: [
          { text: 'यह पंचाग्नि (काम, क्रोध आदि) को शांत कर सुरति को अहंकार-मुक्त करके प्रीतम से मिलाती है', isCorrect: true, feedback: '✓ सही उत्तर! कबीर पंथ में "शीतल शब्द" वाणी के संयम से आरंभ होकर अनहद सार-शब्द में सुरति के लीन होने तक जाता है—जिससे भीतर का शत्रु (अहं) मिटता है और घट में प्रीतम प्रकट होता है।' },
          { text: 'यह बाहरी मंत्रों की संख्या गिनकर स्वर्ग में स्थान आरक्षित कराती है', isCorrect: false, feedback: '✗ यह विकल्प सही नहीं है। कबीर पंथ में बाह्य माला-गिनती नहीं, सुरति का शब्द में लीन होना सार है।' },
          { text: 'यह केवल सांसारिक वाद-विवाद में तर्क जीतने की कला सिखाती है', isCorrect: false, feedback: '✗ यह विकल्प सही नहीं है। बौद्धिक तर्क जीतने का आत्म-बोध से कोई संबंध नहीं है।' },
          { text: 'यह दूसरों के दोष खोजकर उनकी आलोचना करने की प्रेरणा देती है', isCorrect: false, feedback: '✗ यह विकल्प सही नहीं है। दूसरों की निंदा करना साधना का पतन कराता है।' },
        ],
        pb: [
          { text: 'ਇਹ ਪੰਜ ਵਿਕਾਰਾਂ ਦੀ ਅੱਗ ਨੂੰ ਠੰਢਾ ਕਰਕੇ ਸੁਰਤ ਨੂੰ ਹੰਕਾਰ-ਮੁਕਤ ਕਰਕੇ ਪ੍ਰੀਤਮ ਨਾਲ ਮਿਲਾਉਂਦੀ ਹੈ', isCorrect: true, feedback: '✓ ਸਹੀ ਉੱਤਰ! ਕਬੀਰ ਪੰਥ ਵਿੱਚ "ਸ਼ੀਤਲ ਸ਼ਬਦ" ਬੋਲੀ ਦੇ ਸੰਜਮ ਤੋਂ ਸ਼ੁਰੂ ਹੋ ਕੇ ਅਨਹਦ ਸਾਰ-ਸ਼ਬਦ ਵਿੱਚ ਸੁਰਤ ਦੇ ਸਮਾਉਣ ਤੱਕ ਜਾਂਦਾ ਹੈ, ਜਿਸ ਨਾਲ ਹੰਕਾਰ ਮਿਟਦਾ ਹੈ।' },
          { text: 'ਇਹ ਬਾਹਰੀ ਗਿਣਤੀ ਦੇ ਜਾਪ ਨਾਲ ਸਵਰਗ ਵਿੱਚ ਥਾਂ ਪੱਕੀ ਕਰਵਾਉਂਦੀ ਹੈ', isCorrect: false, feedback: '✗ ਇਹ ਵਿਕਲਪ ਸਹੀ ਨਹੀਂ ਹੈ। ਬਾਹਰੀ ਗਿਣਤੀ ਦੇ ਜਾਪ ਨਾਲ ਅੰਦਰੂਨੀ ਮੁਕਤੀ ਨਹੀਂ ਮਿਲਦੀ।' },
          { text: 'ਇਹ ਕੇਵਲ ਦੁਨਿਆਵੀ ਬਹਿਸ ਵਿੱਚ ਤਰਕ ਜਿੱਤਣ ਦੀ ਕਲਾ ਸਿਖਾਉਂਦੀ ਹੈ', isCorrect: false, feedback: '✗ ਇਹ ਵਿਕਲਪ ਸਹੀ ਨਹੀਂ ਹੈ। ਬਹਿਸਬਾਜ਼ੀ ਆਤਮ-ਗਿਆਨ ਦਾ ਮਾਰਗ ਨਹੀਂ ਹੈ।' },
          { text: 'ਇਹ ਦੂਜਿਆਂ ਦੇ ਔਗੁਣ ਲੱਭ ਕੇ ਉਨ੍ਹਾਂ ਦੀ ਆਲੋਚਨਾ ਕਰਨ ਦੀ ਪ੍ਰੇਰਨਾ ਦਿੰਦੀ ਹੈ', isCorrect: false, feedback: '✗ ਇਹ ਵਿਕਲਪ ਸਹੀ ਨਹੀਂ ਹੈ। ਦੂਜਿਆਂ ਦੀ ਨਿੰਦਾ ਕਰਨਾ ਸੁਰਤ ਨੂੰ ਮੈਲਾ ਕਰਦਾ ਹੈ।' },
        ],
        en: [
          { text: 'By cooling the five inner passions and freeing Surat from ego to meet the Beloved within', isCorrect: true, feedback: '✓ Correct! In Kabir Panth philosophy, "Shital Shabd" begins with gentle speech and culminates in Surat merging into the cooling inner Word, dissolving ego to reveal the Beloved.' },
          { text: 'By accumulating counted external chants to reserve a place in heaven', isCorrect: false, feedback: '✗ Incorrect option. Outer mechanical counting cannot substitute for inner conscious absorption.' },
          { text: 'By sharpening clever arguments to prevail in intellectual debates', isCorrect: false, feedback: '✗ Incorrect option. Intellectual debate cannot bridge the gap to spiritual self-realization.' },
          { text: 'By training the eye to point out flaws in others’ spiritual practice', isCorrect: false, feedback: '✗ Incorrect option. Fault-finding scatters the mind instead of purifying the inner sanctuary.' },
        ],
      },
    },
  ],
  1108: [
    {
      id: 'q-1108-1-core',
      angle: {
        hi: 'केंद्रीय जीवन संदेश',
        pb: 'ਮੁੱਖ ਜੀਵਨ ਸੰਦੇਸ਼',
        en: 'Core Practical Message',
      },
      question: {
        hi: 'साखी #११०८ ("खोजी हुआ शब्द का, धन्य सन्त जन सोय...") का केंद्रीय जीवन संदेश क्या है?',
        pb: 'ਸਾਖੀ #੧੧੦੮ ("ਖੋਜੀ ਹੂਆ ਸ਼ਬਦ ਕਾ, ਧੰਨ ਸੰਤ ਜਨ ਸੋਇ...") ਦਾ ਮੁੱਖ ਜੀਵਨ ਸੰਦੇਸ਼ ਕੀ ਹੈ?',
        en: 'What is the central practical life message of Sakhi #1108 ("Khoji hua shabd ka, dhanya sant jan soy...")?',
      },
      optionObjects: {
        hi: [
          { text: 'केवल बाहरी आडंबर त्यागकर अंतरंग में सार-शब्द का सच्चा खोजी बनकर उसे जीवन में धारण करना', isCorrect: true, feedback: '✓ सही उत्तर! सतगुरु कबीर साहेब स्पष्ट करते हैं कि जो साधक अंतरंग में सत्य-शब्द को खोजकर दृढ़ता से पकड़ लेता है, उसका जीवन कभी व्यर्थ नहीं जाता।' },
          { text: 'केवल तीर्थों और मंदिरों में जाकर भारी दान-पुण्य और बाह्य कर्मकांड करना', isCorrect: false, feedback: '✗ यह विकल्प सही नहीं है। कबीर साहेब बाहरी कर्मकांडों की बजाय अंतरंग में सार-शब्द की खोज को सच्चा साधन बताते हैं।' },
          { text: 'कठिन धार्मिक ग्रंथों को कंठस्थ करके सभाओं में दूसरों से शास्त्रार्थ जीतना', isCorrect: false, feedback: '✗ यह विकल्प सही नहीं है। केवल बौद्धिक वाद-विवाद से अहंकार बढ़ता है; साहेब जीवित शब्द को अंतःकरण में धारण करने का उपदेश देते हैं।' },
          { text: 'संसार के सभी कर्तव्यों को छोड़कर एकांत जंगल में हठयोग साधना करना', isCorrect: false, feedback: '✗ यह विकल्प सही नहीं है। कबीर पंथ सहज साधना सिखाता है जहाँ गृहस्थ में रहते हुए भी सुरति को शब्द में लीन रखा जाता है।' },
        ],
        pb: [
          { text: 'ਬਾਹਰੀ ਦਿਖਾਵੇ ਛੱਡ ਕੇ ਅੰਦਰ ਸਾਰ-ਸ਼ਬਦ ਦਾ ਸੱਚਾ ਖੋਜੀ ਬਣ ਕੇ ਉਸ ਨੂੰ ਧਾਰਨ ਕਰਨਾ', isCorrect: true, feedback: '✓ ਸਹੀ ਉੱਤਰ! ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫਰਮਾਉਂਦੇ ਹਨ ਕਿ ਜੋ ਸਾਧਕ ਅੰਦਰੂਨੀ ਸਤਯ-ਸ਼ਬਦ ਨੂੰ ਦ੍ਰਿੜ੍ਹਤਾ ਨਾਲ ਫੜਦਾ ਹੈ, ਉਸਦਾ ਜੀਵਨ ਕਦੇ ਵਿਅਰਥ ਨਹੀਂ ਹੁੰਦਾ।' },
          { text: 'ਕੇਵਲ ਤੀਰਥਾਂ ਤੇ ਮੰਦਰਾਂ ਵਿੱਚ ਜਾ ਕੇ ਬਾਹਰੀ ਦਾਨ-ਪੁੰਨ ਅਤੇ ਕਰਮਕਾਂਡ ਕਰਨਾ', isCorrect: false, feedback: '✗ ਇਹ ਵਿਕਲਪ ਸਹੀ ਨਹੀਂ ਹੈ। ਕਬੀਰ ਸਾਹੇਬ ਬਾਹਰੀ ਕਰਮਕਾਂਡਾਂ ਦੀ ਥਾਂ ਅੰਦਰੂਨੀ ਸ਼ਬਦ ਦੀ ਖੋਜ ਨੂੰ ਸੱਚਾ ਸਾਧਨ ਮੰਨਦੇ ਹਨ।' },
          { text: 'ਧਾਰਮਿਕ ਪੁਸਤਕਾਂ ਯਾਦ ਕਰਕੇ ਸਭਾਵਾਂ ਵਿੱਚ ਦੂਜਿਆਂ ਨਾਲ ਬਹਿਸ ਜਿੱਤਣੀ', isCorrect: false, feedback: '✗ ਇਹ ਵਿਕਲਪ ਸਹੀ ਨਹੀਂ ਹੈ। ਕੇਵਲ ਬੌਧਿਕ ਬਹਿਸ ਨਾਲ ਹੰਕਾਰ ਵਧਦਾ ਹੈ; ਸਾਹੇਬ ਸ਼ਬਦ ਨੂੰ ਅਮਲ ਵਿੱਚ ਲਿਆਉਣ ਲਈ ਕਹਿੰਦੇ ਹਨ।' },
          { text: 'ਸੰਸਾਰ ਦੀਆਂ ਜ਼ਿੰਮੇਵਾਰੀਆਂ ਛੱਡ ਕੇ ਜੰਗਲਾਂ ਵਿੱਚ ਹਠ-ਯੋਗ ਕਰਨਾ', isCorrect: false, feedback: '✗ ਇਹ ਵਿਕਲਪ ਸਹੀ ਨਹੀਂ ਹੈ। ਕਬੀਰ ਸਾਹੇਬ ਸਹਿਜ ਸਾਧਨਾ ਸਿਖਾਉਂਦੇ ਹਨ ਜਿੱਥੇ ਕੰਮਕਾਜ ਕਰਦਿਆਂ ਵੀ ਸੁਰਤ ਸ਼ਬਦ ਨਾਲ ਜੁੜੀ ਰਹਿੰਦੀ ਹੈ।' },
        ],
        en: [
          { text: 'Renounce outer pretenses and become an earnest seeker who anchors the living Word within', isCorrect: true, feedback: '✓ Correct! Satguru Kabir Saheb affirms that seeking and holding firmly to the living Word preserves one’s life from spiritual ruin.' },
          { text: 'Performing elaborate rituals and donating at holy pilgrimage sites', isCorrect: false, feedback: '✗ Incorrect option. Kabir Saheb emphasizes internal discovery of the living Word rather than external ritualism.' },
          { text: 'Memorizing scriptures purely to defeat others in public intellectual debates', isCorrect: false, feedback: '✗ Incorrect option. Mere intellectual debate feeds ego; the Sakhi directs us to embody the living Word inwardly.' },
          { text: 'Abandoning all worldly responsibilities to practice severe physical austerities in the wilderness', isCorrect: false, feedback: '✗ Incorrect option. Kabir Panth teaches Sahaj Sadhana—anchoring Surat in the Word while living responsibly.' },
        ],
      },
    },
    {
      id: 'q-1108-2-symbolic',
      angle: {
        hi: 'आध्यात्मिक एवं प्रतीकात्मक अर्थ',
        pb: 'ਆਤਮਿਕ ਤੇ ਪ੍ਰਤੀਕਾਤਮਕ ਅਰਥ',
        en: 'Symbolic & Esoteric Meaning',
      },
      question: {
        hi: 'इस साखी में "गहि शब्द" और "कबहु न जाय बिगोय" का गहरा आध्यात्मिक भाव क्या है?',
        pb: 'ਇਸ ਸਾਖੀ ਵਿੱਚ "ਗਹਿ ਸ਼ਬਦ" ਅਤੇ "ਕਬਹੂ ਨ ਜਾਇ ਬਿਗੋਇ" ਦਾ ਰੂਹਾਨੀ ਭਾਵ ਕੀ ਹੈ?',
        en: 'What is the inner esoteric meaning of "Gahi Shabd" and "Kabahu na jaay bigoy" in this verse?',
      },
      optionObjects: {
        hi: [
          { text: 'सुरति को अंतरंग सार-शब्द में लीन करना ताकि जीव काल व माया के भटकाव में नष्ट न हो', isCorrect: true, feedback: '✓ सही उत्तर! "गहि शब्द" का अर्थ है सुरति को दसम द्वार के चेतन नाद में जोड़ना, जिससे जीव जन्म-मरण और काल के चक्र से पार हो जाता है।' },
          { text: 'किसी पुस्तक के पृष्ठों को भौतिक रूप से दोनों हाथों से कसकर पकड़े रहना', isCorrect: false, feedback: '✗ यह विकल्प सही नहीं है। यहाँ "गहि" का अर्थ शारीरिक पकड़ नहीं, बल्कि चेतना द्वारा सत्य को आत्मसात करना है।' },
          { text: 'सांसारिक मधुर वचनों का प्रयोग करके लोगों से अपना स्वार्थ सिद्ध करना', isCorrect: false, feedback: '✗ यह विकल्प सही नहीं है। यह साखी मीठी वाणी के प्रसंग की नहीं, बल्कि परम तत्व सार-शब्द के अन्वेषण की है।' },
          { text: 'अपनी धन-संपत्ति और भौतिक प्रतिष्ठा को नष्ट होने से बचाना', isCorrect: false, feedback: '✗ यह विकल्प सही नहीं है। "बिगोय" का संबंध आध्यात्मिक जीवन और अमूल्य श्वासों को व्यर्थ गँवाने से बचाने से है।' },
        ],
        pb: [
          { text: 'ਸੁਰਤ ਨੂੰ ਅੰਦਰੂਨੀ ਸਾਰ-ਸ਼ਬਦ ਵਿੱਚ ਟਿਕਾਉਣਾ ਤਾਂ ਜੋ ਜੀਵ ਕਾਲ-ਮਾਇਆ ਦੇ ਭਟਕਾਅ ਤੋਂ ਬਚ ਸਕੇ', isCorrect: true, feedback: '✓ ਸਹੀ ਉੱਤਰ! "ਗਹਿ ਸ਼ਬਦ" ਦਾ ਭਾਵ ਹੈ ਸੁਰਤ ਨੂੰ ਅੰਦਰਲੇ ਅਨਹਦ ਸ਼ਬਦ ਨਾਲ ਜੋੜਨਾ, ਜਿਸ ਨਾਲ ਜੀਵ ਕਾਲ ਦੇ ਚੱਕਰ ਤੋਂ ਮੁਕਤ ਹੋ ਜਾਂਦਾ ਹੈ।' },
          { text: 'ਕਿਸੇ ਪੁਸਤਕ ਦੇ ਪੰਨਿਆਂ ਨੂੰ ਹੱਥਾਂ ਨਾਲ ਜ਼ੋਰ ਨਾਲ ਫੜ ਕੇ ਰੱਖਣਾ', isCorrect: false, feedback: '✗ ਇਹ ਵਿਕਲਪ ਸਹੀ ਨਹੀਂ ਹੈ। ਇੱਥੇ "ਗਹਿ" ਦਾ ਅਰਥ ਸਰੀਰਕ ਪਕੜ ਨਹੀਂ, ਸਗੋਂ ਸੁਰਤ ਦਾ ਸੱਚ ਵਿੱਚ ਟਿਕਣਾ ਹੈ।' },
          { text: 'ਦੁਨਿਆਵੀ ਮਿੱਠੇ ਬੋਲਾਂ ਨਾਲ ਲੋਕਾਂ ਤੋਂ ਆਪਣਾ ਮਤਲਬ ਕੱਢਣਾ', isCorrect: false, feedback: '✗ ਇਹ ਵਿਕਲਪ ਸਹੀ ਨਹੀਂ ਹੈ। ਇਹ ਸਾਖੀ ਮਿੱਠੀ ਬੋਲੀ ਦੀ ਨਹੀਂ, ਸਗੋਂ ਪਰਮ ਸੱਚ ਸਾਰ-ਸ਼ਬਦ ਦੀ ਖੋਜ ਦੀ ਹੈ।' },
          { text: 'ਆਪਣੀ ਧਨ-ਦੌਲਤ ਅਤੇ ਦੁਨਿਆਵੀ ਸ਼ਾਨ ਨੂੰ ਨੁਕਸਾਨ ਤੋਂ ਬਚਾਉਣਾ', isCorrect: false, feedback: '✗ ਇਹ ਵਿਕਲਪ ਸਹੀ ਨਹੀਂ ਹੈ। "ਬਿਗੋਇ" ਦਾ ਸਬੰਧ ਅਧਿਆਤਮਕ ਪਤਨ ਅਤੇ ਸਾਹਾਂ ਨੂੰ ਵਿਅਰਥ ਗੁਆਉਣ ਤੋਂ ਬਚਾਉਣ ਨਾਲ ਹੈ।' },
        ],
        en: [
          { text: 'Merging Surat into the inner Sar-Shabd so the soul is never lost to Kaal and Maya', isCorrect: true, feedback: '✓ Correct! "Gahi Shabd" means anchoring inner awareness in the uncreated divine sound, overcoming death and spiritual ruin.' },
          { text: 'Physically gripping a printed holy book tightly with one’s hands', isCorrect: false, feedback: '✗ Incorrect option. "Gahi" refers to conscious inner absorption, not a physical grip on paper.' },
          { text: 'Using pleasing flattering words to achieve selfish worldly gains', isCorrect: false, feedback: '✗ Incorrect option. This Sakhi is about the transcendent Saar-Shabd, not sweet social flattery.' },
          { text: 'Safeguarding one’s financial wealth and material social status from loss', isCorrect: false, feedback: '✗ Incorrect option. "Bigoy" addresses spiritual degeneration and wasted human life, not financial assets.' },
        ],
      },
    },
    {
      id: 'q-1108-3-scenario',
      angle: {
        hi: 'दैनिक व्यवहार एवं अनुशासन',
        pb: 'ਰੋਜ਼ਾਨਾ ਵਿਹਾਰ ਤੇ ਅਨੁਸ਼ਾਸਨ',
        en: 'Real-Life Application',
      },
      question: {
        hi: 'दैनिक परिस्थिति: जब समाज में विभिन्न मत-मतांतर और भ्रामक बातें चल रही हों, तो इस साखी के अनुसार साधक को क्या करना चाहिए?',
        pb: 'ਰੋਜ਼ਾਨਾ ਸਥਿਤੀ: ਜਦੋਂ ਸਮਾਜ ਵਿੱਚ ਵੱਖ-ਵੱਖ ਭਰਮ ਅਤੇ ਵਿਵਾਦ ਚੱਲ ਰਹੇ ਹੋਣ, ਤਾਂ ਇਸ ਸਾਖੀ ਅਨੁਸਾਰ ਸਾਧਕ ਨੂੰ ਕੀ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ?',
        en: 'Daily Scenario: Amidst misleading claims and conflicting societal opinions, how should a seeker act according to this Sakhi?',
      },
      optionObjects: {
        hi: [
          { text: 'व्यर्थ के विवादों से बचकर सतगुरु के वचनों और सत्यनाम के अभ्यास में चित्त को स्थिर रखना', isCorrect: true, feedback: '✓ सही उत्तर! सच्चा "खोजी" अफवाहों और मतभेदों में ऊर्जा नष्ट नहीं करता, बल्कि सत्य-शब्द की कसौटी पर स्थिर रहता है।' },
          { text: 'हर नए मत और अंधविश्वास के पीछे बिना सोचे-समझे भागना', isCorrect: false, feedback: '✗ यह विकल्प सही नहीं है। बिना विवेक के हर मत के पीछे भागने से साधक का समय और जीवन नष्ट होता है।' },
          { text: 'सोशल मीडिया और सभाओं में दूसरों की मान्यताओं का उपहास उड़ाना', isCorrect: false, feedback: '✗ यह विकल्प सही नहीं है। दूसरों का उपहास करना मन के अहंकार को बढ़ाता है, जो शब्द-साधना का विरोधी है।' },
          { text: 'यह मान लेना कि बिना किसी साधना या संयम के सब कुछ अपने आप ठीक हो जाएगा', isCorrect: false, feedback: '✗ यह विकल्प सही नहीं है। साहेब "गहि शब्द" (सक्रिय निष्ठा और पुरुषार्थ) पर बल देते हैं, प्रमाद पर नहीं।' },
        ],
        pb: [
          { text: 'ਫ਼ਜ਼ੂਲ ਦੇ ਝਗੜਿਆਂ ਤੋਂ ਬਚ ਕੇ ਸਤਿਗੁਰੂ ਦੇ ਬਚਨਾਂ ਤੇ ਸਤਯਨਾਮ ਦੇ ਅਭਿਆਸ ਵਿੱਚ ਮਨ ਟਿਕਾਉਣਾ', isCorrect: true, feedback: '✓ ਸਹੀ ਉੱਤਰ! ਸੱਚਾ "ਖੋਜੀ" ਬੇਅਰਥ ਬਹਿਸਾਂ ਵਿੱਚ ਸਮਾਂ ਬਰਬਾਦ ਨਹੀਂ ਕਰਦਾ, ਸਗੋਂ ਸਤਯ-ਸ਼ਬਦ ਉੱਤੇ ਦ੍ਰਿੜ੍ਹ ਰਹਿੰਦਾ ਹੈ।' },
          { text: 'ਹਰ ਨਵੇਂ ਭਰਮ ਤੇ ਅੰਧਵਿਸ਼ਵਾਸ ਪਿੱਛੇ ਬਿਨਾਂ ਸੋਚੇ ਦੌੜਨਾ', isCorrect: false, feedback: '✗ ਇਹ ਵਿਕਲਪ ਸਹੀ ਨਹੀਂ ਹੈ। ਬਿਨਾਂ ਵਿਵੇਕ ਦੇ ਭਟਕਣ ਨਾਲ ਜੀਵਨ ਨਸ਼ਟ ਹੁੰਦਾ ਹੈ।' },
          { text: 'ਸੋਸ਼ਲ ਮੀਡੀਆ ਜਾਂ ਸਭਾਵਾਂ ਵਿੱਚ ਦੂਜਿਆਂ ਦੇ ਵਿਸ਼ਵਾਸਾਂ ਦਾ ਮਜ਼ਾਕ ਉਡਾਉਣਾ', isCorrect: false, feedback: '✗ ਇਹ ਵਿਕਲਪ ਸਹੀ ਨਹੀਂ ਹੈ। ਦੂਜਿਆਂ ਦਾ ਮਜ਼ਾਕ ਉਡਾਉਣਾ ਹੰਕਾਰ ਵਧਾਉਂਦਾ ਹੈ ਜੋ ਸਾਧਨਾ ਦੇ ਉਲਟ ਹੈ।' },
          { text: 'ਇਹ ਸੋਚ ਕੇ ਬੈਠ ਜਾਣਾ ਕਿ ਬਿਨਾਂ ਕਿਸੇ ਸਾਧਨਾ ਦੇ ਸਭ ਕੁਝ ਆਪੇ ਠੀਕ ਹੋ ਜਾਵੇਗਾ', isCorrect: false, feedback: '✗ ਇਹ ਵਿਕਲਪ ਸਹੀ ਨਹੀਂ ਹੈ। ਸਾਹੇਬ "ਗਹਿ ਸ਼ਬਦ" (ਦ੍ਰਿੜ੍ਹ ਉੱਦਮ) ਤੇ ਜ਼ੋਰ ਦਿੰਦੇ ਹਨ, ਆਲਸ ਤੇ ਨਹੀਂ।' },
        ],
        en: [
          { text: 'Avoid futile arguments and keep the mind anchored in the Satguru’s wisdom and Satyanaam', isCorrect: true, feedback: '✓ Correct! A genuine "Khoji" does not dissipate energy in gossip, remaining anchored in the touchstone of Truth.' },
          { text: 'Blindly chase after every new rumor or superstitious trend', isCorrect: false, feedback: '✗ Incorrect option. Running aimlessly after trends causes spiritual distraction and ruin.' },
          { text: 'Ridicule and attack other people’s personal beliefs on social media', isCorrect: false, feedback: '✗ Incorrect option. Mocking others feeds arrogance, which directly opposes inner devotion.' },
          { text: 'Assume passively that spiritual growth happens automatically without any effort or discipline', isCorrect: false, feedback: '✗ Incorrect option. Satguru Kabir Saheb emphasizes active adherence ("Gahi"), not passive lethargy.' },
        ],
      },
    },
    {
      id: 'q-1108-4-cause-effect',
      angle: {
        hi: 'कारण और परिणाम',
        pb: 'ਕਾਰਨ ਤੇ ਨਤੀਜਾ',
        en: 'Cause & Spiritual Effect',
      },
      question: {
        hi: 'कारण और परिणाम: जो मनुष्य जीवनभर सत्य-शब्द (सार-शब्द) को धारण नहीं करता, उसका क्या परिणाम होता है?',
        pb: 'ਕਾਰਨ ਤੇ ਨਤੀਜਾ: ਜਿਹੜਾ ਮਨੁੱਖ ਸਾਰੀ ਉਮਰ ਸੱਚੇ ਸ਼ਬਦ ਨੂੰ ਧਾਰਨ ਨਹੀਂ ਕਰਦਾ, ਉਸਦਾ ਕੀ ਅੰਜਾਮ ਹੁੰਦਾ ਹੈ?',
        en: 'Cause & Effect: What is the spiritual consequence for someone who fails to hold onto the living Word?',
      },
      optionObjects: {
        hi: [
          { text: 'उसका अमूल्य मानव जीवन विषय-विकारों और भ्रमों में व्यर्थ नष्ट (बिगोय) हो जाता है', isCorrect: true, feedback: '✓ सही उत्तर! "कबहु न जाय बिगोय" का अर्थ है कि शब्द को पकड़ने वाला बच जाता है, किंतु शब्दहीन मनुष्य भवसागर में भटककर जीवन गँवा देता है।' },
          { text: 'वह संसार का सबसे बड़ा ज्ञानी और प्रतिष्ठित व्यक्ति बन जाता है', isCorrect: false, feedback: '✗ यह विकल्प सही नहीं है। सांसारिक प्रतिष्ठा आत्मा को काल और पुनर्जन्म के भय से मुक्त नहीं कर सकती।' },
          { text: 'उसे कभी किसी आध्यात्मिक साधना या आत्म-निरीक्षण की आवश्यकता नहीं पड़ती', isCorrect: false, feedback: '✗ यह विकल्प सही नहीं है। शब्द के बिना जीव भ्रम में ही पड़ा रहता है, आत्म-बोध नहीं पा सकता।' },
          { text: 'उसकी सभी सांसारिक धन-दौलत तुरंत दोगुनी हो जाती है', isCorrect: false, feedback: '✗ यह विकल्प सही नहीं है। साखी का संबंध भौतिक समृद्धि से नहीं, बल्कि आत्म-कल्याण और अमर पद से है।' },
        ],
        pb: [
          { text: 'ਉਸਦਾ ਅਮੋਲਕ ਮਨੁੱਖਾ ਜੀਵਨ ਵਿਕਾਰਾਂ ਅਤੇ ਭਰਮਾਂ ਵਿੱਚ ਵਿਅਰਥ ਨਸ਼ਟ ਹੋ ਜਾਂਦਾ ਹੈ', isCorrect: true, feedback: '✓ ਸਹੀ ਉੱਤਰ! ਸ਼ਬਦ ਤੋਂ ਬਿਨਾਂ ਮਨੁੱਖ ਵਿਕਾਰਾਂ ਵਿੱਚ ਫਸ ਕੇ ਆਪਣਾ ਦੁਰਲੱਭ ਮਨੁੱਖਾ ਜਨਮ ਬਰਬਾਦ ਕਰ ਲੈਂਦਾ ਹੈ।' },
          { text: 'ਉਹ ਸੰਸਾਰ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਵਿਦਵਾਨ ਤੇ ਸਨਮਾਨਿਤ ਮਨੁੱਖ ਬਣ ਜਾਂਦਾ ਹੈ', isCorrect: false, feedback: '✗ ਇਹ ਵਿਕਲਪ ਸਹੀ ਨਹੀਂ ਹੈ। ਦੁਨਿਆਵੀ ਵਡਿਆਈ ਆਤਮਾ ਨੂੰ ਕਾਲ ਦੇ ਬੰਧਨਾਂ ਤੋਂ ਮੁਕਤ ਨਹੀਂ ਕਰ ਸਕਦੀ।' },
          { text: 'ਉਸ ਨੂੰ ਕਦੇ ਕਿਸੇ ਸਾਧਨਾ ਜਾਂ ਆਤਮ-ਪੜਚੋਲ ਦੀ ਲੋੜ ਹੀ ਨਹੀਂ ਪੈਂਦੀ', isCorrect: false, feedback: '✗ ਇਹ ਵਿਕਲਪ ਸਹੀ ਨਹੀਂ ਹੈ। ਸ਼ਬਦ ਤੋਂ ਬਿਨਾਂ ਜੀਵ ਭਰਮ ਵਿੱਚ ਫਸਿਆ ਰਹਿੰਦਾ ਹੈ।' },
          { text: 'ਉਸਦੀ ਸਾਰੀ ਧਨ-ਦੌਲਤ ਤੁਰੰਤ ਦੁੱਗਣੀ ਹੋ ਜਾਂਦੀ ਹੈ', isCorrect: false, feedback: '✗ ਇਹ ਵਿਕਲਪ ਸਹੀ ਨਹੀਂ ਹੈ। ਇਹ ਬਾਣੀ ਪਦਾਰਥਕ ਦੌਲਤ ਦੀ ਨਹੀਂ, ਸਗੋਂ ਰੂਹਾਨੀ ਕਲਿਆਣ ਦੀ ਗੱਲ ਕਰਦੀ ਹੈ।' },
        ],
        en: [
          { text: 'Their precious human birth is squandered and ruined in delusions and sensory cravings', isCorrect: true, feedback: '✓ Correct! Without holding firmly to the Word, life is squandered ("Bigoy") in transient worldly distractions.' },
          { text: 'They automatically become the most revered and respected scholar in society', isCorrect: false, feedback: '✗ Incorrect option. Worldly applause cannot liberate the soul from spiritual degeneration.' },
          { text: 'They no longer need any spiritual discipline or self-examination', isCorrect: false, feedback: '✗ Incorrect option. Neglecting the Word leads to spiritual stagnation, not effortless liberation.' },
          { text: 'Their material possessions and financial assets instantly multiply', isCorrect: false, feedback: '✗ Incorrect option. The Sakhi pertains to spiritual salvation, not financial multiplication.' },
        ],
      },
    },
    {
      id: 'q-1108-5-tattva',
      angle: {
        hi: 'तत्व ज्ञान एवं आत्म-बोध',
        pb: 'ਤੱਤ ਗਿਆਨ ਤੇ ਆਤਮ-ਬੋਧ',
        en: 'Deeper Kabir Panth Philosophy',
      },
      question: {
        hi: 'कबीर पंथ के तत्व ज्ञान के अनुसार सच्चा "संत" और "खोजी" किसे कहा गया है?',
        pb: 'ਕਬੀਰ ਪੰਥ ਦੇ ਤੱਤ-ਗਿਆਨ ਅਨੁਸਾਰ ਸੱਚਾ "ਸੰਤ" ਅਤੇ "ਖੋਜੀ" ਕਿਸ ਨੂੰ ਕਿਹਾ ਗਿਆ ਹੈ?',
        en: 'In Kabir Panth philosophy, who is truly deemed a genuine "Sant" and "Khoji"?',
      },
      optionObjects: {
        hi: [
          { text: 'जो अंतर्मुख होकर घट में गूँजने वाले सार-शब्द की पहचान कर उसमें सुरति को स्थिर करता है', isCorrect: true, feedback: '✓ सही उत्तर! कबीर दर्शन में सच्चा संत वेशधारी नहीं, बल्कि वह पारखी हंस है जिसने सार-शब्द को पहचानकर अपने घट को पावन कर लिया है।' },
          { text: 'जो केवल विशेष रंग के वस्त्र पहनकर लोक-लाज और दिखावे का जीवन जीता है', isCorrect: false, feedback: '✗ यह विकल्प सही नहीं है। कबीर साहेब ने बाह्य वेशभूषा का सदैव खंडन किया और अंतःकरण की शुद्धता को सर्वोपरि माना।' },
          { text: 'जो केवल भविष्यवाणियाँ करके लोगों में भय और कौतूहल पैदा करता है', isCorrect: false, feedback: '✗ यह विकल्प सही नहीं है। चमत्कार और भविष्यवाणियों का कबीर पंथ के आत्म-ज्ञान से कोई संबंध नहीं है।' },
          { text: 'जो सांसारिक इच्छाओं की पूर्ति के लिए देवताओं को प्रसन्न करने के तंत्र-मंत्र करता है', isCorrect: false, feedback: '✗ यह विकल्प सही नहीं है। कबीर साहेब एक अविनाशी सत्यपुरुष और सत्यनाम की उपासना का मार्ग दिखाते हैं।' },
        ],
        pb: [
          { text: 'ਜੋ ਅੰਤਰਮੁਖ ਹੋ ਕੇ ਘਟ ਵਿੱਚ ਗੂੰਜਦੇ ਸਾਰ-ਸ਼ਬਦ ਨੂੰ ਪਛਾਣ ਕੇ ਉਸ ਵਿੱਚ ਸੁਰਤ ਟਿਕਾਉਂਦਾ ਹੈ', isCorrect: true, feedback: '✓ ਸਹੀ ਉੱਤਰ! ਕਬੀਰ ਪੰਥ ਅਨੁਸਾਰ ਸੱਚਾ ਸੰਤ ਉਹ ਹੈ ਜੋ ਅੰਦਰੂਨੀ ਸਾਰ-ਸ਼ਬਦ ਨੂੰ ਪਛਾਣ ਕੇ ਪ੍ਰਭੂ ਨਾਲ ਜੁੜਦਾ ਹੈ।' },
          { text: 'ਜੋ ਕੇਵਲ ਖ਼ਾਸ ਰੰਗ ਦੇ ਕੱਪੜੇ ਪਾ ਕੇ ਲੋਕ-ਦਿਖਾਵੇ ਦਾ ਜੀਵਨ ਜਿਊਂਦਾ ਹੈ', isCorrect: false, feedback: '✗ ਇਹ ਵਿਕਲਪ ਸਹੀ ਨਹੀਂ ਹੈ। ਕਬੀਰ ਸਾਹੇਬ ਬਾਹਰੀ ਭੇਖ ਦੀ ਥਾਂ ਦਿਲ ਦੀ ਪਵਿੱਤਰਤਾ ਨੂੰ ਮੁੱਖ ਮੰਨਦੇ ਹਨ।' },
          { text: 'ਜੋ ਭਵਿੱਖਬਾਣੀਆਂ ਕਰਕੇ ਲੋਕਾਂ ਵਿੱਚ ਡਰ ਅਤੇ ਭਰਮ ਪੈਦਾ ਕਰਦਾ ਹੈ', isCorrect: false, feedback: '✗ ਇਹ ਵਿਕਲਪ ਸਹੀ ਨਹੀਂ ਹੈ। ਚਮਤਕਾਰਾਂ ਦਾ ਕਬੀਰ ਪੰਥ ਦੇ ਆਤਮ-ਗਿਆਨ ਨਾਲ ਕੋਈ ਵਾਸਤਾ ਨਹੀਂ।' },
          { text: 'ਜੋ ਦੁਨਿਆਵੀ ਲਾਲਸਾਵਾਂ ਲਈ ਦੇਵੀ-ਦੇਵਤਿਆਂ ਦੇ ਤੰਤਰ-ਮੰਤਰ ਕਰਦਾ ਹੈ', isCorrect: false, feedback: '✗ ਇਹ ਵਿਕਲਪ ਸਹੀ ਨਹੀਂ ਹੈ। ਕਬੀਰ ਸਾਹੇਬ ਕੇਵਲ ਇੱਕ ਅਵਿਨਾਸ਼ੀ ਸਤਪੁਰੁਸ਼ ਦੇ ਸਤਯਨਾਮ ਦੀ ਗੱਲ ਕਰਦੇ ਹਨ।' },
        ],
        en: [
          { text: 'One who turns inward, discerns the living Saar-Shabd in the heart, and centers Surat in it', isCorrect: true, feedback: '✓ Correct! In Kabir philosophy, a true saint is not marked by robes, but by recognizing and abiding in the inner living Word.' },
          { text: 'One who merely wears ascetic robes and maintains an outward display of piety', isCorrect: false, feedback: '✗ Incorrect option. Kabir Saheb consistently critiqued outer costumes in favor of inner authenticity.' },
          { text: 'One who performs predictions and stokes superstitious fear in public', isCorrect: false, feedback: '✗ Incorrect option. Superstitious miracles have no place in Kabir Panth self-realization.' },
          { text: 'One who practices occult incantations to fulfill worldly desires', isCorrect: false, feedback: '✗ Incorrect option. Kabir Saheb teaches devotion exclusively to the Imperishable Truth (Satyanaam).' },
        ],
      },
    },
  ],
};

type ArchetypeKey =
  | 'speech'
  | 'ego'
  | 'guru'
  | 'naam'
  | 'maya'
  | 'chetavani'
  | 'satya'
  | 'satsang'
  | 'prem'
  | 'compassion'
  | 'yoga'
  | 'mind';

function classifySakhiArchetype(sakhi: Sakhi): ArchetypeKey {
  const blob = [
    sakhi.text?.hi || '',
    sakhi.bhavarth?.hi || '',
    sakhi.categoryTitle?.hi || '',
    sakhi.category || '',
  ]
    .join(' ')
    .toLowerCase();

  if (/खोजी|सार शब्द|सत्य शब्द|शब्द को अंग|गहि शब्द/.test(blob)) return 'naam';
  if (/शीतल|कुटिल|बचन|वचन|वाणी|बानी|रसना|मीठा|मधुर/.test(blob)) return 'speech';
  if (/प्रीतम तुझहि|दुसमन|अहं|अहंकार|आपा|अभिमान|रोड़ा|बुरा जो/.test(blob)) return 'ego';
  if (/सतगुरु|सतिगुर|गुरु|गोविन्द|गोविंद|चेला|निगुरा|चुम्बक/.test(blob)) return 'guru';
  if (/सुमिरन|सिमरन|सत्यनाम|सार शब्द|नाम|श्वास|स्वांस|अजपा/.test(blob)) return 'naam';
  if (/कस्तूरी|मृग|घट|सुरति|अनहद|दसम|मानसरोवर|हंस|गगन/.test(blob)) return 'yoga';
  if (/माया|तृष्णा|लोभ|लालच|कंचन|दाम|ठगिनी|मोह/.test(blob)) return 'maya';
  if (/माटी|कुम्हार|काया|हाड़|हड्डी|काल|मरण|मरना|बुलबुला|मानुस/.test(blob)) return 'chetavani';
  if (/साँच|सांच|सत्य|झूठ|पाखंड|पोथी|तीरथ|कथनी|करनी/.test(blob)) return 'satya';
  if (/साधु|संत|सत्संग|संगति|कुसंग|चंदन|सूप/.test(blob)) return 'satsang';
  if (/प्रेम|प्रीत|विरह|बिरह|भक्ति|सूरा|शीश|ढाई/.test(blob)) return 'prem';
  if (/दया|करुणा|अहिंसा|परोपकार|तरुवर|सरवर|जीव/.test(blob)) return 'compassion';
  return 'mind';
}

interface ArchetypeQuestionPack {
  coreCorrect: { hi: string; pb: string; en: string };
  coreDistractors: { hi: [string, string, string]; pb: [string, string, string]; en: [string, string, string] };
  scenarioQuestion: { hi: string; pb: string; en: string };
  scenarioOptions: { hi: [string, string, string, string]; pb: [string, string, string, string]; en: [string, string, string, string] };
  causeQuestion: { hi: string; pb: string; en: string };
  causeOptions: { hi: [string, string, string, string]; pb: [string, string, string, string]; en: [string, string, string, string] };
  tattvaQuestion: { hi: string; pb: string; en: string };
  tattvaOptions: { hi: [string, string, string, string]; pb: [string, string, string, string]; en: [string, string, string, string] };
}

const ARCHETYPE_PACKS: Record<ArchetypeKey, ArchetypeQuestionPack> = {
  speech: {
    coreCorrect: {
      hi: 'कठोर और अहंकारपूर्ण वचनों को त्यागकर शीतल, विनम्र एवं हितकारी वाणी का अभ्यास करना',
      pb: 'ਕੌੜੇ ਅਤੇ ਹੰਕਾਰ ਭਰੇ ਬੋਲ ਛੱਡ ਕੇ ਸ਼ੀਤਲ, ਨਿਮਰ ਤੇ ਭਲਾਈ ਵਾਲੀ ਬੋਲੀ ਅਪਣਾਉਣਾ',
      en: 'Abandoning harsh, ego-driven words in favor of calm, humble, healing speech',
    },
    coreDistractors: {
      hi: [
        'विवाद से बचने के लिए जीवनभर किसी से कोई बात ही न करना',
        'दूसरों पर प्रभाव जमाने के लिए ऊँचे और तीखे स्वर में बोलना',
        'केवल बाहर से मधुर बोलना भले ही मन में द्वेष और ईर्ष्या बनी रहे',
      ],
      pb: [
        'ਝਗੜੇ ਤੋਂ ਬਚਣ ਲਈ ਸਾਰੀ ਉਮਰ ਕਿਸੇ ਨਾਲ ਕੋਈ ਗੱਲ ਹੀ ਨਾ ਕਰਨੀ',
        'ਦੂਜਿਆਂ ਤੇ ਰੋਹਬ ਪਾਉਣ ਲਈ ਉੱਚੀ ਅਤੇ ਤਿੱਖੀ ਆਵਾਜ਼ ਵਿੱਚ ਬੋਲਣਾ',
        'ਕੇਵਲ ਬਾਹਰੋਂ ਮਿੱਠਾ ਬੋਲਣਾ ਭਾਵੇਂ ਮਨ ਵਿੱਚ ਈਰਖਾ ਅਤੇ ਵੈਰ ਭਰਿਆ ਰਹੇ',
      ],
      en: [
        'Refusing to speak to anyone at all in order to avoid disagreements',
        'Speaking loudly and forcefully so others feel intimidated into agreeing',
        'Using polite surface flattery while secretly harboring resentment inside',
      ],
    },
    scenarioQuestion: {
      hi: 'दैनिक परिस्थिति: यदि कोई व्यक्ति क्रोध में आपकी आलोचना कर दे, तो इस साखी की शिक्षा के अनुसार सर्वोत्तम प्रतिक्रिया क्या होगी?',
      pb: 'ਰੋਜ਼ਾਨਾ ਸਥਿਤੀ: ਜੇ ਕੋਈ ਗੁੱਸੇ ਵਿੱਚ ਤੁਹਾਡੀ ਨਿੰਦਾ ਕਰ ਦੇਵੇ, ਤਾਂ ਇਸ ਸਾਖੀ ਅਨੁਸਾਰ ਸਭ ਤੋਂ ਸਹੀ ਪ੍ਰਤੀਕਿਰਿਆ ਕੀ ਹੋਵੇਗੀ?',
      en: 'Real-Life Scenario: If someone criticizes you harshly in anger, what is the wisest response based on this Sakhi?',
    },
    scenarioOptions: {
      hi: [
        'क्षणभर शांत रहकर धैर्य और शीतल वाणी से उत्तर देना या मौन धारण करना',
        'तुरंत उसकी पुरानी कमियाँ गिनाकर उससे बड़ा कड़वा जवाब लौटाना',
        'अन्य लोगों के सामने जाकर उसकी निंदा करना ताकि आपका पक्ष भारी रहे',
        'तत्काल संबंध तोड़कर मन में सदा के लिए क्रोध गाँठ बाँध लेना',
      ],
      pb: [
        'ਪਲ ਭਰ ਰੁਕ ਕੇ ਧੀਰਜ ਅਤੇ ਸ਼ੀਤਲ ਬੋਲਾਂ ਨਾਲ ਜਵਾਬ ਦੇਣਾ ਜਾਂ ਸ਼ਾਂਤ ਰਹਿਣਾ',
        'ਤੁਰੰਤ ਉਸ ਦੀਆਂ ਪੁਰਾਣੀਆਂ ਕਮੀਆਂ ਗਿਣਾ ਕੇ ਹੋਰ ਕੌੜਾ ਜਵਾਬ ਦੇਣਾ',
        'ਬਾਕੀ ਲੋਕਾਂ ਸਾਹਮਣੇ ਉਸ ਦੀ ਬੁਰਾਈ ਕਰਕੇ ਆਪਣਾ ਪੱਖ ਉੱਚਾ ਦਿਖਾਉਣਾ',
        'ਉਸੇ ਵੇਲੇ ਰਿਸ਼ਤਾ ਤੋੜ ਕੇ ਮਨ ਵਿੱਚ ਸਦਾ ਲਈ ਗੁੱਸਾ ਪਾਲ ਲੈਣਾ',
      ],
      en: [
        'Pause calmly and reply with gentle restraint or composed silence',
        'Immediately counterattack by listing their past mistakes even more sharply',
        'Complain about them behind their back to win sympathy from others',
        'Cut off all communication while nursing lingering resentment inside',
      ],
    },
    causeQuestion: {
      hi: 'कारण और परिणाम: साधक के निरंतर कटु एवं कर्कश बोलने से उसके अंतःकरण पर क्या प्रभाव पड़ता है?',
      pb: 'ਕਾਰਨ ਤੇ ਨਤੀਜਾ: ਲਗਾਤਾਰ ਕੌੜੇ ਤੇ ਕਠੋਰ ਬੋਲ ਬੋਲਣ ਨਾਲ ਸਾਧਕ ਦੇ ਮਨ ਉੱਤੇ ਕੀ ਪ੍ਰਭਾਵ ਪੈਂਦਾ ਹੈ?',
      en: 'Cause & Effect: What inward effect does habitual harsh, cutting speech have on a seeker?',
    },
    causeOptions: {
      hi: [
        'चित्त की शांति नष्ट होती है, वैर बढ़ता है और भीतर का आध्यात्मिक रस सूख जाता है',
        'दूसरे लोग डरकर सहज ही आत्म-ज्ञान प्राप्त कर लेते हैं',
        'मनुष्य की स्मरण शक्ति और ध्यान में तुरंत स्थिरता आ जाती है',
        'बिना किसी प्रयास के सभी पारिवारिक विवाद सुलझ जाते हैं',
      ],
      pb: [
        'ਮਨ ਦੀ ਸ਼ਾਂਤੀ ਭੰਗ ਹੁੰਦੀ ਹੈ, ਵੈਰ ਵਧਦਾ ਹੈ ਅਤੇ ਅੰਦਰਲਾ ਰੂਹਾਨੀ ਰਸ ਸੁੱਕ ਜਾਂਦਾ ਹੈ',
        'ਦੂਜੇ ਲੋਕ ਡਰ ਦੇ ਮਾਰੇ ਆਪਣੇ ਆਪ ਆਤਮ-ਗਿਆਨ ਪ੍ਰਾਪਤ ਕਰ ਲੈਂਦੇ ਹਨ',
        'ਮਨੁੱਖ ਦੇ ਧਿਆਨ ਅਤੇ ਸਿਮਰਨ ਵਿੱਚ ਤੁਰੰਤ ਸਥਿਰਤਾ ਆ ਜਾਂਦੀ ਹੈ',
        'ਬਿਨਾਂ ਕਿਸੇ ਕੋਸ਼ਿਸ਼ ਦੇ ਸਾਰੇ ਪਰਿਵਾਰਕ ਮਸਲੇ ਆਪੇ ਹੱਲ ਹੋ ਜਾਂਦੇ ਹਨ',
      ],
      en: [
        'Inner peace dissolves, hostility deepens, and spiritual sensitivity dries up',
        'Others become frightened into instantly awakening spiritually',
        'Meditation and concentration become deeper without any effort',
        'Relationships automatically grow stronger through blunt dominance',
      ],
    },
    tattvaQuestion: {
      hi: 'कबीर पंथ तत्व ज्ञान: वाणी की मधुरता और "शब्द" की साधना के बीच गहरा संबंध क्या है?',
      pb: 'ਕਬੀਰ ਪੰਥ ਤੱਤ-ਗਿਆਨ: ਬੋਲੀ ਦੀ ਮਿਠਾਸ ਅਤੇ "ਸ਼ਬਦ" ਦੀ ਸਾਧਨਾ ਵਿਚਕਾਰ ਕੀ ਡੂੰਘਾ ਸਬੰਧ ਹੈ?',
      en: 'Kabir Panth Philosophy: What is the deeper connection between gentle speech and Shabd-Sadhana?',
    },
    tattvaOptions: {
      hi: [
        'संयमित और शीतल वाणी मन के विकारों को शांत कर घट में सार-शब्द की अनुभूति के लिए भूमि तैयार करती है',
        'कबीर पंथ में केवल संस्कृत श्लोकों का शुद्ध उच्चारण ही शब्द साधना कहलाता है',
        'वाणी का अंतःकरण से कोई संबंध नहीं, केवल बाहरी दान ही पर्याप्त है',
        'कठोर उपदेश देना ही गुरु-शिष्य परंपरा का एकमात्र लक्षण है',
      ],
      pb: [
        'ਸੰਜਮ ਅਤੇ ਸ਼ੀਤਲ ਬੋਲੀ ਮਨ ਦੇ ਵਿਕਾਰਾਂ ਨੂੰ ਸ਼ਾਂਤ ਕਰਕੇ ਹਿਰਦੇ ਵਿੱਚ ਸਾਰ-ਸ਼ਬਦ ਦੇ ਅਨੁਭਵ ਲਈ ਰਾਹ ਤਿਆਰ ਕਰਦੀ ਹੈ',
        'ਕਬੀਰ ਪੰਥ ਵਿੱਚ ਕੇਵਲ ਔਖੇ ਸਲੋਕ ਪੜ੍ਹਨਾ ਹੀ ਸ਼ਬਦ ਸਾਧਨਾ ਅਖਵਾਉਂਦਾ ਹੈ',
        'ਬੋਲੀ ਦਾ ਅੰਦਰਲੇ ਮਨ ਨਾਲ ਕੋਈ ਸਬੰਧ ਨਹੀਂ, ਕੇਵਲ ਬਾਹਰੀ ਦਾਨ ਹੀ ਕਾਫ਼ੀ ਹੈ',
        'ਸਖ਼ਤ ਬੋਲ ਬੋਲਣਾ ਹੀ ਅਧਿਆਤਮਕ ਅਨੁਸ਼ਾਸਨ ਦੀ ਇਕਲੌਤੀ ਨਿਸ਼ਾਨੀ ਹੈ',
      ],
      en: [
        'Disciplined, cooling speech quiets inner agitation, preparing the heart to perceive the subtle Sar-Shabd',
        'Shabd-Sadhana consists strictly of chanting complex verses aloud in public',
        'Speech has no link to inner consciousness as long as rituals are performed',
        'Using severe language is the primary hallmark of spiritual authority',
      ],
    },
  },
  ego: {
    coreCorrect: {
      hi: 'बाहरी दोष खोजने की बजाय अपने भीतर छिपे "मैं-पन" और अहंकार का विसर्जन करना',
      pb: 'ਬਾਹਰਲੇ ਦੋਸ਼ ਲੱਭਣ ਦੀ ਥਾਂ ਆਪਣੇ ਅੰਦਰ ਲੁਕੇ "ਮੈਂ-ਪੁਣੇ" ਅਤੇ ਹੰਕਾਰ ਨੂੰ ਮਿਟਾਉਣਾ',
      en: 'Dissolving hidden inner pride and self-centeredness instead of judging others',
    },
    coreDistractors: {
      hi: [
        'अपने ज्ञान और तप का प्रदर्शन करके समाज में श्रेष्ठ पद प्राप्त करना',
        'दूसरों की त्रुटियों की सूची बनाकर उन्हें बार-बार सुधारने का प्रयास करना',
        'आत्मविश्वास को पूरी तरह त्यागकर स्वयं को निराश और असहाय मान लेना',
      ],
      pb: [
        'ਆਪਣੇ ਗਿਆਨ ਅਤੇ ਤਪ ਦਾ ਵਿਖਾਵਾ ਕਰਕੇ ਸਮਾਜ ਵਿੱਚ ਵੱਡਾ ਰੁਤਬਾ ਹਾਸਲ ਕਰਨਾ',
        'ਦੂਜਿਆਂ ਦੀਆਂ ਗਲਤੀਆਂ ਦੀ ਸੂਚੀ ਬਣਾ ਕੇ ਉਨ੍ਹਾਂ ਨੂੰ ਟੋਕਦੇ ਰਹਿਣਾ',
        'ਆਤਮ-ਵਿਸ਼ਵਾਸ ਛੱਡ ਕੇ ਆਪਣੇ ਆਪ ਨੂੰ ਪੂਰੀ ਤਰ੍ਹਾਂ ਕਮਜ਼ੋਰ ਤੇ ਨਿਰਾਸ਼ ਸਮਝਣਾ',
      ],
      en: [
        'Displaying your spiritual discipline publicly to earn status and praise',
        'Keeping a careful record of other people’s faults so you can correct them',
        'Abandoning healthy self-respect and sinking into passive helplessness',
      ],
    },
    scenarioQuestion: {
      hi: 'दैनिक व्यवहार: यदि कार्यस्थल या परिवार में किसी सफलता का श्रेय आपको न मिले, तो निरहंकारी साधक कैसे कार्य करेगा?',
      pb: 'ਰੋਜ਼ਾਨਾ ਵਿਹਾਰ: ਜੇ ਘਰ ਜਾਂ ਕੰਮਕਾਜ ਵਿੱਚ ਕਿਸੇ ਚੰਗੇ ਕੰਮ ਦਾ ਸਿਹਰਾ ਤੁਹਾਨੂੰ ਨਾ ਮਿਲੇ, ਤਾਂ ਨਿਮਰ ਸਾਧਕ ਕਿਵੇਂ ਵਿਹਾਰ ਕਰੇਗਾ?',
      en: 'Real-Life Scenario: When your honest effort at home or work goes uncredited, how does an egoless seeker respond?',
    },
    scenarioOptions: {
      hi: [
        'सहज भाव से कार्य की सार्थकता पर प्रसन्न रहेगा और प्रशंसा की लालसा नहीं पालेगा',
        'सबके सामने बार-बार अपना योगदान गिनाकर प्रशंसा वसूल करेगा',
        'मन में अपमान मानकर भविष्य में सहयोग करना बंद कर देगा',
        'दूसरों के काम में कमियाँ निकालकर उन्हें नीचा दिखाने का अवसर खोजेगा',
      ],
      pb: [
        'ਸਹਿਜ ਭਾਵ ਨਾਲ ਕੰਮ ਸਫਲ ਹੋਣ ਤੇ ਖੁਸ਼ ਰਹੇਗਾ ਅਤੇ ਵਾਹ-ਵਾਹ ਦੀ ਭੁੱਖ ਨਹੀਂ ਰੱਖੇਗਾ',
        'ਸਭ ਦੇ ਸਾਹਮਣੇ ਵਾਰ-ਵਾਰ ਆਪਣਾ ਯੋਗਦਾਨ ਗਿਣਾ ਕੇ ਤਾਰੀਫ਼ ਦੀ ਮੰਗ ਕਰੇਗਾ',
        'ਅਪਮਾਨ ਮਹਿਸੂਸ ਕਰਕੇ ਅੱਗੇ ਤੋਂ ਸਹਿਯੋਗ ਕਰਨਾ ਬੰਦ ਕਰ ਦੇਵੇਗਾ',
        'ਦੂਜਿਆਂ ਦੇ ਕੰਮ ਵਿੱਚ ਨੁਕਸ ਕੱਢ ਕੇ ਉਨ੍ਹਾਂ ਨੂੰ ਨੀਵਾਂ ਦਿਖਾਉਣ ਦਾ ਮੌਕਾ ਲੱਭੇਗਾ',
      ],
      en: [
        'Rejoice quietly that the good work succeeded, free from craving applause',
        'Repeatedly remind everyone of your contribution until they praise you',
        'Feel insulted and refuse to help the team in the future',
        'Look for flaws in others’ work to prove your own importance',
      ],
    },
    causeQuestion: {
      hi: 'कारण और परिणाम: हृदय में सूक्ष्म "अहं" (अभिमान) के बने रहने का सीधा परिणाम क्या होता है?',
      pb: 'ਕਾਰਨ ਤੇ ਨਤੀਜਾ: ਹਿਰਦੇ ਵਿੱਚ ਸੂਖਮ "ਹੰਕਾਰ" ਬਣੇ ਰਹਿਣ ਦਾ ਸਿੱਧਾ ਨਤੀਜਾ ਕੀ ਹੁੰਦਾ ਹੈ?',
      en: 'Cause & Effect: What is the direct consequence when subtle ego remains rooted in the heart?',
    },
    causeOptions: {
      hi: [
        'सत्य और प्रीतम के लिए हृदय का द्वार बंद रहता है तथा मन छोटी बातों से आहत होता रहता है',
        'साधक को स्वतः ही सभी शास्त्रों का अखंड बोध प्राप्त हो जाता है',
        'व्यक्ति को निंदकों के साथ और भी गहरा प्रेम उत्पन्न हो जाता है',
        'सारी सांसारिक जिम्मेदारियाँ बिना प्रयास के समाप्त हो जाती हैं',
      ],
      pb: [
        'ਸੱਚ ਅਤੇ ਪ੍ਰੀਤਮ ਲਈ ਦਿਲ ਦਾ ਦਰਵਾਜ਼ਾ ਬੰਦ ਰਹਿੰਦਾ ਹੈ ਤੇ ਮਨ ਨਿੱਕੀ ਗੱਲ ਤੇ ਦੁਖੀ ਹੁੰਦਾ ਹੈ',
        'ਸਾਧਕ ਨੂੰ ਆਪਣੇ ਆਪ ਹੀ ਸਾਰੇ ਗ੍ਰੰਥਾਂ ਦਾ ਗਿਆਨ ਪ੍ਰਾਪਤ ਹੋ ਜਾਂਦਾ ਹੈ',
        'ਮਨੁੱਖ ਨੂੰ ਨਿੰਦਕਾਂ ਨਾਲ ਆਪਣੇ ਆਪ ਗਹਿਰਾ ਪ੍ਰੇਮ ਹੋ ਜਾਂਦਾ ਹੈ',
        'ਸਾਰੀਆਂ ਦੁਨਿਆਵੀ ਜ਼ਿੰਮੇਵਾਰੀਆਂ ਬਿਨਾਂ ਕੋਸ਼ਿਸ਼ ਮੁੱਕ ਜਾਂਦੀਆਂ ਹਨ',
      ],
      en: [
        'The heart stays closed to Truth and remains easily bruised by petty slights',
        'Scriptural wisdom awakens effortlessly without self-examination',
        'One naturally develops deep affection for critics',
        'Worldly anxieties disappear automatically without inner work',
      ],
    },
    tattvaQuestion: {
      hi: 'तत्व ज्ञान: कबीर साहेब के अनुसार "मैं" और "हरि/प्रीतम" एक साथ क्यों नहीं समा सकते?',
      pb: 'ਤੱਤ-ਗਿਆਨ: ਕਬੀਰ ਸਾਹੇਬ ਅਨੁਸਾਰ "ਮੈਂ" (ਹੰਕਾਰ) ਅਤੇ "ਪ੍ਰੀਤਮ" ਇੱਕੋ ਥਾਂ ਇਕੱਠੇ ਕਿਉਂ ਨਹੀਂ ਸਮਾ ਸਕਦੇ?',
      en: 'Tattva Gyan: Why do Satguru Kabir Saheb’s teachings state that "I-ness" (ego) and the Beloved cannot occupy the same heart?',
    },
    tattvaOptions: {
      hi: [
        'क्योंकि "अहं" द्वैत और अलगाव पैदा करता है, जबकि परमात्मा केवल विनम्र, समर्पित और निर्मल घट में प्रकट होते हैं',
        'क्योंकि परमात्मा केवल जंगल की गुफाओं में रहने वाले तपस्वियों के पास रहते हैं',
        'क्योंकि अहंकार रखने से बाहरी पूजा-पाठ के नियम भंग हो जाते हैं',
        'क्योंकि केवल पठन-पाठन करने से ही अद्वैत ज्ञान सिद्ध हो जाता है',
      ],
      pb: [
        'ਕਿਉਂਕਿ ਹੰਕਾਰ ਦਵੈਤ ਤੇ ਦੂਰੀ ਪੈਦਾ ਕਰਦਾ ਹੈ, ਜਦਕਿ ਪ੍ਰਮਾਤਮਾ ਨਿਮਰ ਅਤੇ ਨਿਰਮਲ ਹਿਰਦੇ ਵਿੱਚ ਹੀ ਪ੍ਰਗਟ ਹੁੰਦੇ ਹਨ',
        'ਕਿਉਂਕਿ ਪ੍ਰਮਾਤਮਾ ਕੇਵਲ ਜੰਗਲਾਂ ਦੀਆਂ ਗੁਫ਼ਾਵਾਂ ਵਿੱਚ ਰਹਿਣ ਵਾਲਿਆਂ ਨੂੰ ਹੀ ਮਿਲਦੇ ਹਨ',
        'ਕਿਉਂਕਿ ਹੰਕਾਰ ਕਰਨ ਨਾਲ ਬਾਹਰੀ ਪੂਜਾ-ਪਾਠ ਦੀ ਵਿਧੀ ਟੁੱਟ ਜਾਂਦੀ ਹੈ',
        'ਕਿਉਂਕਿ ਕੇਵਲ ਕਿਤਾਬਾਂ ਪੜ੍ਹਨ ਨਾਲ ਹੀ ਅਦਵੈਤ ਗਿਆਨ ਮਿਲ ਜਾਂਦਾ ਹੈ',
      ],
      en: [
        'Because ego creates separation and duality, while the Divine shines only in a humble, transparent heart',
        'Because the Divine dwells strictly in forest caves away from human society',
        'Because pride breaks outward ritual sequences during formal ceremonies',
        'Because reading books alone accomplishes non-dual realization',
      ],
    },
  },
  guru: {
    coreCorrect: {
      hi: 'अहंकार त्यागकर सच्चे, तत्वदर्शी सतगुरु की शरण एवं उनके सत्य वचनों को जीवन में धारण करना',
      pb: 'ਹੰਕਾਰ ਛੱਡ ਕੇ ਸੱਚੇ ਤੱਤ-ਦਰਸ਼ੀ ਸਤਿਗੁਰੂ ਦੀ ਸ਼ਰਨ ਅਤੇ ਉਨ੍ਹਾਂ ਦੇ ਸੱਚੇ ਬਚਨਾਂ ਨੂੰ ਜੀਵਨ ਵਿੱਚ ਧਾਰਨ ਕਰਨਾ',
      en: 'Setting aside pride to recognize an authentic Satguru and live by His liberating counsel',
    },
    coreDistractors: {
      hi: [
        'चमत्कार और बाहरी वैभव दिखाने वाले किसी भी गुरु का बिना परखे अनुसरण करना',
        'केवल गुरु का चित्र लगाकर उनके वचनों के विपरीत आचरण करते रहना',
        'स्वयं को इतना ज्ञानी मान लेना कि किसी मार्गदर्शन की आवश्यकता ही न समझना',
      ],
      pb: [
        'ਚਮਤਕਾਰ ਤੇ ਬਾਹਰੀ ਠਾਠ-ਬਾਠ ਦਿਖਾਉਣ ਵਾਲੇ ਕਿਸੇ ਵੀ ਗੁਰੂ ਦੇ ਪਿੱਛੇ ਬਿਨਾਂ ਪਰਖੇ ਲੱਗ ਤੁਰਨਾ',
        'ਕੇਵਲ ਗੁਰੂ ਦੀ ਤਸਵੀਰ ਸਜਾ ਕੇ ਉਨ੍ਹਾਂ ਦੇ ਉਪਦੇਸ਼ ਦੇ ਉਲਟ ਚੱਲਦੇ ਰਹਿਣਾ',
        'ਆਪਣੇ ਆਪ ਨੂੰ ਇੰਨਾ ਗਿਆਨੀ ਸਮਝ ਲੈਣਾ ਕਿ ਕਿਸੇ ਮਾਰਗਦਰਸ਼ਨ ਦੀ ਲੋੜ ਹੀ ਨਾ ਮੰਨਣੀ',
      ],
      en: [
        'Blindly following anyone who displays miracles or worldly grandeur without discernment',
        'Honoring a teacher’s portrait externally while ignoring their ethical guidance',
        'Assuming you already know everything and need zero inner mentorship',
      ],
    },
    scenarioQuestion: {
      hi: 'दैनिक व्यवहार: यदि कोई धर्मोपदेशक धन या दिखावे का लोभ दिखाकर शॉर्टकट मुक्ति का दावा करे, तो साधक को क्या करना चाहिए?',
      pb: 'ਰੋਜ਼ਾਨਾ ਵਿਹਾਰ: ਜੇ ਕੋਈ ਉਪਦੇਸ਼ਕ ਧਨ ਜਾਂ ਦਿਖਾਵੇ ਦਾ ਲਾਲਚ ਦੇ ਕੇ ਸੌਖੀ ਮੁਕਤੀ ਦਾ ਦਾਅਵਾ ਕਰੇ, ਤਾਂ ਸਾਧਕ ਨੂੰ ਕੀ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ?',
      en: 'Real-Life Scenario: If a self-proclaimed teacher promises instant liberation in exchange for wealth or spectacle, how should a seeker act?',
    },
    scenarioOptions: {
      hi: [
        'विवेक की कसौटी पर उनके आचरण को परखना और केवल सादा, सत्य व निर्लोभी मार्ग अपनाना',
        'भीड़ का अनुसरण करते हुए बिना विचार किए उनकी हर बात मान लेना',
        'केवल ऊँचे मंच और आकर्षक वाणी से प्रभावित होकर समर्पण कर देना',
        'सभी सच्चे संतों पर भी संदेह करके आध्यात्मिक जीवन ही छोड़ देना',
      ],
      pb: [
        'ਵਿਵੇਕ ਦੀ ਕਸੌਟੀ ਤੇ ਉਨ੍ਹਾਂ ਦੇ ਆਚਰਨ ਨੂੰ ਪਰਖਣਾ ਅਤੇ ਕੇਵਲ ਸੱਚਾ ਤੇ ਨਿਰਲੋਭ ਮਾਰਗ ਅਪਣਾਉਣਾ',
        'ਭੀੜ ਦੇ ਮਗਰ ਲੱਗ ਕੇ ਬਿਨਾਂ ਸੋਚੇ-ਸਮਝੇ ਉਨ੍ਹਾਂ ਦੀ ਹਰ ਗੱਲ ਮੰਨ ਲੈਣੀ',
        'ਕੇਵਲ ਵੱਡੇ ਮੰਚ ਅਤੇ ਲੱਛੇਦਾਰ ਭਾਸ਼ਣ ਤੋਂ ਪ੍ਰਭਾਵਿਤ ਹੋ ਕੇ ਵਿਸ਼ਵਾਸ ਕਰ ਲੈਣਾ',
        'ਸਾਰੇ ਸੱਚੇ ਸੰਤਾਂ ਤੇ ਵੀ ਸ਼ੱਕ ਕਰਕੇ ਅਧਿਆਤਮਕ ਮਾਰਗ ਹੀ ਛੱਡ ਦੇਣਾ',
      ],
      en: [
        'Test their conduct with discernment and hold strictly to humble, selfless truth',
        'Follow the crowd and accept every claim without questioning',
        'Judge credibility purely by stage size and charismatic speech',
        'Reject all spirituality out of cynicism toward one fraudulent teacher',
      ],
    },
    causeQuestion: {
      hi: 'कारण और परिणाम: गुरु-ज्ञान की अनुपस्थिति में केवल अपनी मनमुख बुद्धि से साधना करने पर क्या जोखिम रहता है?',
      pb: 'ਕਾਰਨ ਤੇ ਨਤੀਜਾ: ਸਤਿਗੁਰੂ ਦੇ ਮਾਰਗਦਰਸ਼ਨ ਤੋਂ ਬਿਨਾਂ ਕੇਵਲ ਆਪਣੀ ਮਨਮੁਖ ਬੁੱਧੀ ਨਾਲ ਸਾਧਨਾ ਕਰਨ ਦਾ ਕੀ ਖ਼ਤਰਾ ਰਹਿੰਦਾ ਹੈ?',
      en: 'Cause & Effect: What happens when a seeker follows unguided whims ("Manmukh") instead of authentic Satguru wisdom?',
    },
    causeOptions: {
      hi: [
        'साधक माया के सूक्ष्म भ्रमों को ही सिद्धि मानकर मूल लक्ष्य से भटक सकता है',
        'व्यक्ति बिना किसी गलती के सीधे अमरलोक की यात्रा पूरी कर लेता है',
        'मन की चंचलता स्वतः ही शांत होकर अकर्ता भाव में बदल जाती है',
        'अहंकार नष्ट होकर दूसरों के प्रति पूर्ण समभाव आ जाता है',
      ],
      pb: [
        'ਸਾਧਕ ਮਾਇਆ ਦੇ ਸੂਖਮ ਭਰਮਾਂ ਨੂੰ ਹੀ ਸਿੱਧੀ ਸਮਝ ਕੇ ਅਸਲੀ ਮੰਜ਼ਿਲ ਤੋਂ ਭਟਕ ਸਕਦਾ ਹੈ',
        'ਮਨੁੱਖ ਬਿਨਾਂ ਕਿਸੇ ਗਲਤੀ ਦੇ ਸਿੱਧਾ ਅਮਰਲੋਕ ਪਹੁੰਚ ਜਾਂਦਾ ਹੈ',
        'ਮਨ ਦੀ ਭਟਕਣਾ ਆਪੇ ਸ਼ਾਂਤ ਹੋ ਕੇ ਸਥਿਰ ਹੋ ਜਾਂਦੀ ਹੈ',
        'ਹੰਕਾਰ ਮਿਟ ਕੇ ਸਭ ਪ੍ਰਤੀ ਸਮਭਾਵ ਪ੍ਰਗਟ ਹੋ ਜਾਂਦਾ ਹੈ',
      ],
      en: [
        'The seeker easily mistakes subtle mental illusions for realization and loses the path',
        'Liberation is reached effortlessly without ever encountering blind spots',
        'Restless desires dissolve spontaneously without guidance',
        'Pride vanishes automatically the moment one avoids teachers',
      ],
    },
    tattvaQuestion: {
      hi: 'कबीर पंथ तत्व ज्ञान: सतगुरु कबीर साहेब गुरु को गोविंद से भी पहले वंदनीय क्यों बताते हैं?',
      pb: 'ਕਬੀਰ ਪੰਥ ਤੱਤ-ਗਿਆਨ: ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਗੁਰੂ ਨੂੰ ਗੋਬਿੰਦ ਤੋਂ ਵੀ ਪਹਿਲਾਂ ਵੰਦਨੀਕ ਕਿਉਂ ਦੱਸਦੇ ਹਨ?',
      en: 'Kabir Panth Philosophy: Why does Satguru Kabir Saheb honor the Satguru even before bowing to Govind?',
    },
    tattvaOptions: {
      hi: [
        'क्योंकि सतगुरु ही अज्ञान का पर्दा हटाकर घट के भीतर स्थित परमात्मा की प्रत्यक्ष पहचान कराते हैं',
        'क्योंकि गुरु मनुष्य के भौतिक व्यापार और धन-संपत्ति को बढ़ाते हैं',
        'क्योंकि बाहरी प्रथा के अनुसार बड़े व्यक्ति का सम्मान पहले किया जाता है',
        'क्योंकि केवल गुरु-मंत्र रटने से ही समस्त कर्म समाप्त हो जाते हैं',
      ],
      pb: [
        'ਕਿਉਂਕਿ ਸਤਿਗੁਰੂ ਹੀ ਅਗਿਆਨ ਦਾ ਪਰਦਾ ਹਟਾ ਕੇ ਅੰਦਰ ਵਸਦੇ ਪਰਮਾਤਮਾ ਦੀ ਪਛਾਣ ਕਰਵਾਉਂਦੇ ਹਨ',
        'ਕਿਉਂਕਿ ਗੁਰੂ ਮਨੁੱਖ ਦੇ ਦੁਨਿਆਵੀ ਕਾਰੋਬਾਰ ਅਤੇ ਧਨ ਨੂੰ ਵਧਾਉਂਦੇ ਹਨ',
        'ਕਿਉਂਕਿ ਸਮਾਜਿਕ ਰੀਤ ਅਨੁਸਾਰ ਵੱਡਿਆਂ ਦਾ ਆਦਰ ਪਹਿਲਾਂ ਕੀਤਾ ਜਾਂਦਾ ਹੈ',
        'ਕਿਉਂਕਿ ਕੇਵਲ ਬਾਹਰੀ ਮੰਤਰ ਰਟਣ ਨਾਲ ਹੀ ਸਾਰੇ ਕਰਮ ਮੁੱਕ ਜਾਂਦੇ ਹਨ',
      ],
      en: [
        'Because the Satguru removes the veil of ignorance and reveals the Indwelling Divine within the heart',
        'Because the Guru guarantees worldly wealth and business prosperity',
        'Purely as an outward social custom of greeting elders before deities',
        'Because repeating a name mechanically erases ethical responsibility',
      ],
    },
  },
  naam: {
    coreCorrect: {
      hi: 'प्रत्येक श्वास के साथ सत्यनाम का शांत, निरंतर आंतरिक सुमिरन बनाए रखना',
      pb: 'ਹਰ ਸੁਆਸ ਦੇ ਨਾਲ ਸਤਯਨਾਮ ਦਾ ਸ਼ਾਂਤ ਅਤੇ ਨਿਰੰਤਰ ਅੰਦਰੂਨੀ ਸਿਮਰਨ ਬਣਾਈ ਰੱਖਣਾ',
      en: 'Maintaining quiet, steady inner remembrance of Satyanaam woven into every breath',
    },
    coreDistractors: {
      hi: [
        'माला के दाने गिनते हुए मन को संसार की चिंताओं में भटकने देना',
        'साल में एक बार किसी बड़े उत्सव पर जोर-जोर से नाम का उच्चारण कर लेना',
        'संसार के अपने कर्तव्यों को छोड़कर केवल निष्क्रिय बैठे रहना',
      ],
      pb: [
        'ਮਾਲਾ ਦੇ ਮਣਕੇ ਫੇਰਦਿਆਂ ਹੋਇਆਂ ਮਨ ਨੂੰ ਦੁਨਿਆਵੀ ਚਿੰਤਾਵਾਂ ਵਿੱਚ ਭਟਕਣ ਦੇਣਾ',
        'ਸਾਲ ਵਿੱਚ ਇੱਕ ਵਾਰ ਕਿਸੇ ਵੱਡੇ ਸਮਾਗਮ ਵਿੱਚ ਉੱਚੀ-ਉੱਚੀ ਨਾਮ ਬੋਲ ਲੈਣਾ',
        'ਆਪਣੇ ਸਾਰੇ ਜ਼ਿੰਮੇਵਾਰ ਕਰਤੱਵਾਂ ਨੂੰ ਛੱਡ ਕੇ ਵਿਹਲੇ ਬੈਠੇ ਰਹਿਣਾ',
      ],
      en: [
        'Spinning prayer beads mechanically while the mind worries about worldly gossip',
        'Chanting loudly only once a year during a major public festival',
        'Abandoning family and work duties in order to sit idly',
      ],
    },
    scenarioQuestion: {
      hi: 'दैनिक परिस्थिति: अत्यधिक व्यस्त दिनचर्या और कामकाज के बीच एक गृहस्थ साधक इस साखी के सुमिरन को कैसे निभाए?',
      pb: 'ਰੋਜ਼ਾਨਾ ਸਥਿਤੀ: ਬਹੁਤ ਰੁੱਝੇ ਹੋਏ ਦਿਨ ਅਤੇ ਕੰਮਕਾਜ ਦੌਰਾਨ ਇੱਕ ਗ੍ਰਹਿਸਥੀ ਸਾਧਕ ਇਸ ਸਿਮਰਨ ਨੂੰ ਕਿਵੇਂ ਨਿਭਾਏ?',
      en: 'Real-Life Scenario: Amid a busy workday and family responsibilities, how can a householder practice this teaching?',
    },
    scenarioOptions: {
      hi: [
        'ईमानदारी से कर्म करते हुए श्वासों की लय में शांत मानसिक सुमिरन और साक्षी भाव जोड़े रखे',
        'काम छोड़कर केवल एकांत जंगल में जाने की प्रतीक्षा करता रहे',
        'पूजा के समय तेज संगीत बजाकर बाहरी आडंबर को बढ़ाए',
        'सेवानिवृत्ति या बुढ़ापे तक भक्ति व सुमिरन को टाल दे',
      ],
      pb: [
        'ਇਮਾਨਦਾਰੀ ਨਾਲ ਕੰਮ ਕਰਦਿਆਂ ਸੁਆਸਾਂ ਦੀ ਲਹਿਰ ਵਿੱਚ ਸ਼ਾਂਤ ਮਾਨਸਿਕ ਸਿਮਰਨ ਜੋੜੀ ਰੱਖੇ',
        'ਕੰਮਕਾਜ ਛੱਡ ਕੇ ਕੇਵਲ ਜੰਗਲ ਜਾਣ ਦੀ ਉਡੀਕ ਕਰਦਾ ਰਹੇ',
        'ਭਗਤੀ ਦੇ ਨਾਂ ਤੇ ਉੱਚਾ ਸ਼ੋਰ ਤੇ ਬਾਹਰੀ ਦਿਖਾਵਾ ਵਧਾਵੇ',
        'ਬੁਢਾਪੇ ਤੱਕ ਨਾਮ ਸਿਮਰਨ ਅਤੇ ਧਿਆਨ ਨੂੰ ਟਾਲਦਾ ਰਹੇ',
      ],
      en: [
        'Perform duties honestly while keeping quiet breath-anchored awareness within',
        'Postpone all practice until retiring to a solitary forest retreat',
        'Focus solely on noisy external rituals during weekends',
        'Delay inner remembrance until old age arrives',
      ],
    },
    causeQuestion: {
      hi: 'कारण और परिणाम: यदि मुख केवल नाम रटता रहे और मन लोभ-क्रोध में डूबा रहे, तो उसका क्या परिणाम होता है?',
      pb: 'ਕਾਰਨ ਤੇ ਨਤੀਜਾ: ਜੇਕਰ ਜ਼ੁਬਾਨ ਤਾਂ ਨਾਮ ਰਟਦੀ ਰਹੇ ਪਰ ਮਨ ਲੋਭ-ਕ੍ਰੋਧ ਵਿੱਚ ਡੁੱਬਿਆ ਰਹੇ, ਤਾਂ ਉਸ ਦਾ ਕੀ ਨਤੀਜਾ ਹੁੰਦਾ ਹੈ?',
      en: 'Cause & Effect: What happens when the tongue repeats sacred names while the mind remains steeped in greed and anger?',
    },
    causeOptions: {
      hi: [
        'सुमिरन केवल यांत्रिक अभ्यास बनकर रह जाता है और हृदय की मैल नहीं धुलती',
        'केवल जिह्वा के उच्चारण से ही तुरंत अनहद नाद प्रकट हो जाता है',
        'मन बिना आत्म-संयम के ही पूरी तरह शुद्ध हो जाता है',
        'दूसरे लोग साधक के बाहरी जप से स्वतः ही मोक्ष पा लेते हैं',
      ],
      pb: [
        'ਸਿਮਰਨ ਕੇਵਲ ਰਟਣ-ਅਭਿਆਸ ਬਣ ਕੇ ਰਹਿ ਜਾਂਦਾ ਹੈ ਤੇ ਮਨ ਦੀ ਮੈਲ ਨਹੀਂ ਧੁਲਦੀ',
        'ਕੇਵਲ ਜ਼ੁਬਾਨ ਨਾਲ ਬੋਲਣ ਨਾਲ ਹੀ ਤੁਰੰਤ ਅਨਹਦ ਨਾਦ ਪ੍ਰਗਟ ਹੋ ਜਾਂਦਾ ਹੈ',
        'ਬਿਨਾਂ ਆਤਮ-ਸੰਜਮ ਦੇ ਹੀ ਮਨ ਪੂਰੀ ਤਰ੍ਹਾਂ ਪਵਿੱਤਰ ਹੋ ਜਾਂਦਾ ਹੈ',
        'ਦੂਜੇ ਲੋਕ ਸਾਧਕ ਦੇ ਬਾਹਰੀ ਜਾਪ ਨਾਲ ਆਪਣੇ ਆਪ ਮੁਕਤ ਹੋ ਜਾਂਦੇ ਹਨ',
      ],
      en: [
        'Remembrance remains mechanical lip-service that fails to cleanse inner vices',
        'Vocal repetition alone instantly awakens deep Unstruck Sound',
        'The mind purifies automatically without any change in character',
        'Spectators gain liberation merely by hearing the sound',
      ],
    },
    tattvaQuestion: {
      hi: 'तत्व ज्ञान: कबीर साहेब किस "सार-शब्द" या "सत्यनाम" को सच्चा मुक्तिदाता मानते हैं?',
      pb: 'ਤੱਤ-ਗਿਆਨ: ਕਬੀਰ ਸਾਹੇਬ ਕਿਸ "ਸਾਰ-ਸ਼ਬਦ" ਜਾਂ "ਸਤਯਨਾਮ" ਨੂੰ ਸੱਚਾ ਮੁਕਤੀਦਾਤਾ ਮੰਨਦੇ ਹਨ?',
      en: 'Tattva Gyan: Which "Sar-Shabd" or "Satyanaam" does Satguru Kabir Saheb declare truly liberating?',
    },
    tattvaOptions: {
      hi: [
        'वह अजपा, निह-अक्षर चेतन ध्वनि जो सुरति को काल-माया के पार ले जाकर घट में स्थिर करती है',
        'कागज पर स्याही से लिखा कोई साधारण ऐतिहासिक मंत्र',
        'किसी एक संप्रदाय की वेशभूषा और बाहरी तिलक-मुद्रा',
        'अनेक देवी-देवताओं के अलग-अलग कर्मकांडी अनुष्ठान',
      ],
      pb: [
        'ਉਹ ਅਜਪਾ, ਨਿਹ-ਅੱਖਰ ਚੇਤਨ ਧੁਨ ਜੋ ਸੁਰਤ ਨੂੰ ਕਾਲ-ਮਾਇਆ ਤੋਂ ਪਾਰ ਲਿਜਾ ਕੇ ਘਟ ਵਿੱਚ ਟਿਕਾਉਂਦੀ ਹੈ',
        'ਕਾਗਜ਼ ਉੱਤੇ ਸਿਆਹੀ ਨਾਲ ਲਿਖਿਆ ਕੋਈ ਆਮ ਅੱਖਰੀ ਮੰਤਰ',
        'ਕਿਸੇ ਖ਼ਾਸ ਫ਼ਿਰਕੇ ਦਾ ਪਹਿਰਾਵਾ ਅਤੇ ਬਾਹਰੀ ਚਿੰਨ੍ਹ',
        'ਅਨੇਕਾਂ ਕਰਮਕਾਂਡੀ ਪੂਜਾ-ਪਾਠ ਦੀਆਂ ਵਿਧੀਆਂ',
      ],
      en: [
        'The unspoken, imperishable (Nih-Akshar) resonance that lifts Surat beyond illusion into stillness',
        'A conventional formula memorized strictly from ink and paper',
        'Sectarian emblems, robes, or external badges of piety',
        'Complex seasonal rituals seeking material favors',
      ],
    },
  },
  maya: {
    coreCorrect: {
      hi: 'तृष्णा और आसक्ति का विवेक द्वारा त्याग कर संतोषपूर्ण व जागृत जीवन जीना',
      pb: 'ਤ੍ਰਿਸ਼ਨਾ ਅਤੇ ਮੋਹ ਦਾ ਵਿਵੇਕ ਨਾਲ ਤਿਆਗ ਕਰਕੇ ਸੰਤੋਖ ਭਰਿਆ ਜਾਗ੍ਰਿਤ ਜੀਵਨ ਜਿਊਣਾ',
      en: 'Overcoming restless greed and attachment through discernment and inner contentment',
    },
    coreDistractors: {
      hi: [
        'धन कमाने से डरकर समाज में बिल्कुल दरिद्र और आलसी हो जाना',
        'भौतिक वैभव के संग्रह को ही भगवान की कृपा का एकमात्र प्रमाण मानना',
        'मोह मिटाने के लिए परिवार के प्रति अपने कर्तव्यों की उपेक्षा करना',
      ],
      pb: [
        'ਕਿਰਤ ਕਰਨ ਤੋਂ ਡਰ ਕੇ ਸਮਾਜ ਵਿੱਚ ਬਿਲਕੁਲ ਆਲਸੀ ਤੇ ਬੇਕਾਰ ਹੋ ਜਾਣਾ',
        'ਦੁਨਿਆਵੀ ਦੌਲਤ ਇਕੱਠੀ ਕਰਨ ਨੂੰ ਹੀ ਪ੍ਰਭੂ ਦੀ ਕਿਰਪਾ ਦਾ ਇਕਲੌਤਾ ਸਬੂਤ ਮੰਨਣਾ',
        'ਮੋਹ ਮਿਟਾਉਣ ਦੇ ਨਾਂ ਤੇ ਪਰਿਵਾਰ ਪ੍ਰਤੀ ਆਪਣੀਆਂ ਜ਼ਿੰਮੇਵਾਰੀਆਂ ਛੱਡ ਦੇਣੀਆਂ',
      ],
      en: [
        'Fleeing honest labor out of fear of money and falling into laziness',
        'Measuring divine grace strictly by the size of one’s bank balance',
        'Neglecting family duties under the excuse of spiritual detachment',
      ],
    },
    scenarioQuestion: {
      hi: 'दैनिक परिस्थिति: लगातार दूसरों की सुख-सुविधा देख मन में "और अधिक पाने" की ईर्ष्या व बेचैनी उठे, तो साधक क्या करे?',
      pb: 'ਰੋਜ਼ਾਨਾ ਸਥਿਤੀ: ਦੂਜਿਆਂ ਦੀ ਦੌਲਤ ਦੇਖ ਕੇ ਮਨ ਵਿੱਚ "ਹੋਰ ਚਾਹੀਦਾ" ਦੀ ਬੇਚੈਨੀ ਉੱਠੇ, ਤਾਂ ਸਾਧਕ ਕੀ ਕਰੇ?',
      en: 'Real-Life Scenario: When comparing yourself with wealthier peers stirs envy and restless craving, what should a seeker practice?',
    },
    scenarioOptions: {
      hi: [
        'संतोष रूपी धन को स्मरण कर ईमानदारी की कमाई के प्रति कृतज्ञता (शुकराना) भाव अपनाए',
        'दिखावे की होड़ में कर्ज लेकर भी बड़ा प्रदर्शन करे',
        'धनी व्यक्तियों की आलोचना कर अपनी तुलना को सही ठहराए',
        'रातोरात अमीर बनने के लिए अनैतिक उपायों का सहारा ले',
      ],
      pb: [
        'ਸੰਤੋਖ ਰੂਪੀ ਧਨ ਨੂੰ ਯਾਦ ਕਰਕੇ ਆਪਣੀ ਇਮਾਨਦਾਰ ਕਿਰਤ ਲਈ ਸ਼ੁਕਰਾਨਾ ਕਰੇ',
        'ਦਿਖਾਵੇ ਦੀ ਦੌੜ ਵਿੱਚ ਕਰਜ਼ਾ ਚੁੱਕ ਕੇ ਵੀ ਵੱਡਾ ਵਿਖਾਵਾ ਕਰੇ',
        'ਅਮੀਰ ਲੋਕਾਂ ਦੀ ਨਿੰਦਾ ਕਰਕੇ ਆਪਣੀ ਤੁਲਨਾ ਨੂੰ ਸਹੀ ਠਹਿਰਾਏ',
        'ਰਾਤੋ-ਰਾਤ ਅਮੀਰ ਬਣਨ ਲਈ ਗਲਤ ਰਸਤੇ ਅਪਣਾ ਲਵੇ',
      ],
      en: [
        'Cultivate gratitude for honest sufficiency and remember the wealth of contentment',
        'Borrow recklessly just to match external appearances',
        'Criticize others bitterly to soothe your own jealousy',
        'Compromise ethical integrity for faster material gain',
      ],
    },
    causeQuestion: {
      hi: 'कारण और परिणाम: असीमित तृष्णा और भौतिक मोह में मन के बँधे रहने का क्या परिणाम होता है?',
      pb: 'ਕਾਰਨ ਤੇ ਨਤੀਜਾ: ਬੇਅੰਤ ਤ੍ਰਿਸ਼ਨਾ ਤੇ ਮੋਹ ਵਿੱਚ ਮਨ ਦੇ ਬੱਝੇ ਰਹਿਣ ਦਾ ਕੀ ਨਤੀਜਾ ਹੁੰਦਾ ਹੈ?',
      en: 'Cause & Effect: What results when consciousness remains bound to endless craving ("Trishna")?',
    },
    causeOptions: {
      hi: [
        'जीवन भर असंतोष, चिंता और आंतरिक दरिद्रता बनी रहती है तथा आत्मा सत्य से विमुख रहती है',
        'संसार की सारी वस्तुएँ प्राप्त होते ही मन सदा के लिए तृप्त हो जाता है',
        'अहंकार अपने आप कम होकर विनम्रता में बदल जाता है',
        'अंतिम समय में सारा संचित वैभव आत्मा के साथ सतलोक जाता है',
      ],
      pb: [
        'ਸਾਰੀ ਉਮਰ ਬੇਚੈਨੀ, ਚਿੰਤਾ ਤੇ ਅੰਦਰੂਨੀ ਗਰੀਬੀ ਬਣੀ ਰਹਿੰਦੀ ਹੈ ਅਤੇ ਸੁਰਤ ਸੱਚ ਤੋਂ ਦੂਰ ਰਹਿੰਦੀ ਹੈ',
        'ਦੁਨੀਆ ਦੀਆਂ ਚੀਜ਼ਾਂ ਮਿਲਦੇ ਹੀ ਮਨ ਸਦਾ ਲਈ ਰੱਜ ਜਾਂਦਾ ਹੈ',
        'ਹੰਕਾਰ ਆਪਣੇ ਆਪ ਘਟ ਕੇ ਨਿਮਰਤਾ ਵਿੱਚ ਬਦਲ ਜਾਂਦਾ ਹੈ',
        'ਅੰਤ ਸਮੇਂ ਸਾਰੀ ਇਕੱਠੀ ਕੀਤੀ ਦੌਲਤ ਆਤਮਾ ਦੇ ਨਾਲ ਜਾਂਦੀ ਹੈ',
      ],
      en: [
        'Perpetual anxiety and inner poverty persist while awareness stays veiled from Truth',
        'Acquiring a few more possessions satisfies craving forever',
        'Ego naturally shrinks as possessions multiply',
        'Accumulated wealth accompanies the soul after bodily death',
      ],
    },
    tattvaQuestion: {
      hi: 'कबीर पंथ तत्व ज्ञान: कबीर साहेब के अनुसार "माया" का वास्तविक निवास कहाँ है?',
      pb: 'ਕਬੀਰ ਪੰਥ ਤੱਤ-ਗਿਆਨ: ਕਬੀਰ ਸਾਹੇਬ ਅਨੁਸਾਰ "ਮਾਇਆ" ਦਾ ਅਸਲੀ ਟਿਕਾਣਾ ਕਿੱਥੇ ਹੈ?',
      en: 'Kabir Panth Philosophy: According to Satguru Kabir Saheb, where does "Maya" actually reside?',
    },
    tattvaOptions: {
      hi: [
        'धन या वस्तुओं में नहीं, बल्कि हमारे अपने मन की आसक्ति, मान-बड़ाई और वासना में',
        'केवल बड़े नगरों, बाजारों और सोने-चाँदी की खदानों में',
        'केवल पारिवारिक जीवन और गृहस्थ आश्रम के भीतर',
        'अन्य धर्मों की पुस्तकों और बाहरी वस्तुओं में',
      ],
      pb: [
        'ਧਨ ਜਾਂ ਚੀਜ਼ਾਂ ਵਿੱਚ ਨਹੀਂ, ਸਗੋਂ ਸਾਡੇ ਆਪਣੇ ਮਨ ਦੇ ਮੋਹ, ਮਾਣ-ਵਡਿਆਈ ਅਤੇ ਵਾਸਨਾ ਵਿੱਚ',
        'ਕੇਵਲ ਵੱਡੇ ਸ਼ਹਿਰਾਂ, ਬਾਜ਼ਾਰਾਂ ਅਤੇ ਸੋਨੇ-ਚਾਂਦੀ ਦੀਆਂ ਖਾਣਾਂ ਵਿੱਚ',
        'ਕੇਵਲ ਪਰਿਵਾਰਕ ਜੀਵਨ ਅਤੇ ਗ੍ਰਹਿਸਥ ਦੇ ਅੰਦਰ',
        'ਕੇਵਲ ਬਾਹਰੀ ਵਸਤਾਂ ਅਤੇ ਇਮਾਰਤਾਂ ਦੇ ਅੰਦਰ',
      ],
      en: [
        'Not in physical wealth itself, but in inner clinging, craving, and desire for prestige',
        'Exclusively inside bustling cities, marketplaces, and gold mines',
        'Solely within married family life as opposed to renunciation',
        'Only inside material objects rather than mental attachment',
      ],
    },
  },
  chetavani: {
    coreCorrect: {
      hi: 'शरीर व समय की क्षणभंगुरता समझकर आज ही सत्य, भक्ति और विनम्रता का सदुपयोग करना',
      pb: 'ਸਰੀਰ ਤੇ ਸਮੇਂ ਦੀ ਨਾਸ਼ਵਾਨਤਾ ਸਮਝ ਕੇ ਅੱਜ ਹੀ ਸੱਚ, ਭਗਤੀ ਅਤੇ ਨਿਮਰਤਾ ਦਾ ਸਦਉਪਯੋਗ ਕਰਨਾ',
      en: 'Recognizing the fleeting nature of body and time so we awaken into truth and devotion today',
    },
    coreDistractors: {
      hi: [
        'मृत्यु के भय से घबराकर जीवन के सभी शुभ कार्यों से निराश हो जाना',
        'अस्थायी यौवन व बल पर घमंड करते हुए आत्म-सुधार को बुढ़ापे तक टालना',
        'क्षणिक संसार मानकर दूसरों की पीड़ा के प्रति उदासीन हो जाना',
      ],
      pb: [
        'ਮੌਤ ਦੇ ਡਰ ਤੋਂ ਘਬਰਾ ਕੇ ਜੀਵਨ ਦੇ ਸਾਰੇ ਚੰਗੇ ਕੰਮਾਂ ਤੋਂ ਨਿਰਾਸ਼ ਹੋ ਜਾਣਾ',
        'ਅਸਥਾਈ ਜਵਾਨੀ ਤੇ ਤਾਕਤ ਤੇ ਹੰਕਾਰ ਕਰਦਿਆਂ ਸੁਧਾਰ ਨੂੰ ਬੁਢਾਪੇ ਤੱਕ ਟਾਲਣਾ',
        'ਦੁਨੀਆ ਨੂੰ ਨਾਸ਼ਵਾਨ ਕਹਿ ਕੇ ਦੂਜਿਆਂ ਦੇ ਦੁੱਖ ਪ੍ਰਤੀ ਬੇਪਰਵਾਹ ਹੋ ਜਾਣਾ',
      ],
      en: [
        'Becoming paralyzed by fear of death and abandoning meaningful effort',
        'Taking pride in youth and postponing inner reflection until old age',
        'Using impermanence as an excuse for indifference toward others’ suffering',
      ],
    },
    scenarioQuestion: {
      hi: 'दैनिक परिस्थिति: जब मन कहे "अभी उम्र बहुत पड़ी है, भक्ति व क्रोध सुधारने का काम कल करेंगे", तब साधक क्या निर्णय ले?',
      pb: 'ਰੋਜ਼ਾਨਾ ਸਥਿਤੀ: ਜਦੋਂ ਮਨ ਕਹੇ "ਅਜੇ ਉਮਰ ਪਈ ਹੈ, ਭਗਤੀ ਤੇ ਸੁਭਾਅ ਸੁਧਾਰਨ ਦਾ ਕੰਮ ਕੱਲ੍ਹ ਕਰਾਂਗੇ", ਤਦ ਸਾਧਕ ਕੀ ਫ਼ੈਸਲਾ ਲਵੇ?',
      en: 'Real-Life Scenario: When your mind whispers, "There is plenty of time—start meditating and fixing your temper next year," what should you do?',
    },
    scenarioOptions: {
      hi: [
        'इसी श्वास को अनमोल अवसर जानकर आज ही क्षमा, सुमिरन और सद्कर्म आरंभ करे',
        'मन की बात मानकर बुढ़ापे में सेवानिवृत्ति का इंतजार करे',
        'केवल जन्मदिन या किसी विशेष पर्व पर ही एक दिन साधना करे',
        'जीवन की योजनाएँ केवल भौतिक संचय पर केंद्रित रखे',
      ],
      pb: [
        'ਇਸੇ ਸੁਆਸ ਨੂੰ ਅਨਮੋਲ ਮੌਕਾ ਸਮਝ ਕੇ ਅੱਜ ਹੀ ਖਿਮਾ, ਸਿਮਰਨ ਤੇ ਸੇਵਾ ਸ਼ੁਰੂ ਕਰੇ',
        'ਮਨ ਦੀ ਗੱਲ ਮੰਨ ਕੇ ਬੁਢਾਪੇ ਤੱਕ ਉਡੀਕ ਕਰਦਾ ਰਹੇ',
        'ਕੇਵਲ ਸਾਲ ਵਿੱਚ ਇੱਕ-ਦੋ ਖ਼ਾਸ ਦਿਨਾਂ ਤੇ ਹੀ ਪਾਠ-ਪੂਜਾ ਕਰੇ',
        'ਜੀਵਨ ਦਾ ਸਾਰਾ ਧਿਆਨ ਕੇਵਲ ਧਨ ਜੋੜਨ ਤੇ ਰੱਖੇ',
      ],
      en: [
        'Treat the present breath as priceless and begin Simran, forgiveness, and right action right now',
        'Agree with the mind and postpone spiritual practice until retirement',
        'Observe spiritual habits strictly on annual holidays',
        'Focus exclusively on material expansion while ignoring inner growth',
      ],
    },
    causeQuestion: {
      hi: 'कारण और परिणाम: नश्वर शरीर और क्षणिक वैभव पर अभिमान करते हुए समय गँवाने का परिणाम क्या होता है?',
      pb: 'ਕਾਰਨ ਤੇ ਨਤੀਜਾ: ਨਾਸ਼ਵਾਨ ਸਰੀਰ ਤੇ ਅਸਥਾਈ ਦੌਲਤ ਤੇ ਹੰਕਾਰ ਕਰਦਿਆਂ ਸਮਾਂ ਗੁਆਉਣ ਦਾ ਨਤੀਜਾ ਕੀ ਹੁੰਦਾ ਹੈ?',
      en: 'Cause & Effect: What is the outcome of wasting life in pride over a transient body and temporary wealth?',
    },
    causeOptions: {
      hi: [
        'अमूल्य मनुष्य जन्म बिना आत्म-बोध के बीत जाता है और अंत में केवल पश्चाताप शेष रहता है',
        'शरीर की आयु अपने आप बढ़ती जाती है और मृत्यु कभी निकट नहीं आती',
        'संसारिक मान-सम्मान मृत्यु के बाद भी आत्मा की रक्षा करता है',
        'काल और माया साधक की देह को अमर बना देते हैं',
      ],
      pb: [
        'ਅਨਮੋਲ ਮਨੁੱਖਾ ਜਨਮ ਆਤਮ-ਬੋਧ ਤੋਂ ਬਿਨਾਂ ਬੀਤ ਜਾਂਦਾ ਹੈ ਤੇ ਅੰਤ ਵਿੱਚ ਪਛਤਾਵਾ ਰਹਿ ਜਾਂਦਾ ਹੈ',
        'ਸਰੀਰ ਦੀ ਉਮਰ ਆਪਣੇ ਆਪ ਵਧਦੀ ਜਾਂਦੀ ਹੈ ਤੇ ਮੌਤ ਨੇੜੇ ਨਹੀਂ ਆਉਂਦੀ',
        'ਦੁਨਿਆਵੀ ਮਾਣ-ਸਨਮਾਨ ਮੌਤ ਤੋਂ ਬਾਅਦ ਵੀ ਆਤਮਾ ਦੀ ਰੱਖਿਆ ਕਰਦਾ ਹੈ',
        'ਕਾਲ ਤੇ ਮਾਇਆ ਸਾਧਕ ਦੀ ਦੇਹ ਨੂੰ ਅਮਰ ਕਰ ਦਿੰਦੇ ਹਨ',
      ],
      en: [
        'Precious human birth slips away without awakening, leaving deep regret at the end',
        'Physical youth extends indefinitely and mortality never arrives',
        'Worldly titles defend the soul after death',
        'Body and wealth transform automatically into immortal spirit',
      ],
    },
    tattvaQuestion: {
      hi: 'कबीर पंथ तत्व ज्ञान: चेतावनी की साखियों में देह की नश्वरता के बीच "अविनाशी" क्या बताया गया है?',
      pb: 'ਕਬੀਰ ਪੰਥ ਤੱਤ-ਗਿਆਨ: ਚੇਤਾਵਨੀ ਦੀਆਂ ਸਾਖੀਆਂ ਵਿੱਚ ਦੇਹ ਦੀ ਨਾਸ਼ਵਾਨਤਾ ਵਿਚਕਾਰ "ਅਵਿਨਾਸ਼ੀ" ਕੀ ਦੱਸਿਆ ਗਿਆ ਹੈ?',
      en: 'Kabir Panth Philosophy: Amid warnings about bodily impermanence, what alone is declared Imperishable?',
    },
    tattvaOptions: {
      hi: [
        'सत्यनाम के शबद में जागी हुई आत्मा (सुरति) और निस्वार्थ सत्य-भक्ति',
        'बनाए गए विशाल महल और संतानों के लिए जोड़ी गई संपत्ति',
        'विद्वानों द्वारा लिखे गए वाद-विवाद के ग्रंथ',
        'तीर्थों पर स्थापित किए गए पत्थर के स्मारक',
      ],
      pb: [
        'ਸਤਯਨਾਮ ਦੇ ਸ਼ਬਦ ਵਿੱਚ ਜਾਗੀ ਹੋਈ ਆਤਮਾ (ਸੁਰਤ) ਅਤੇ ਨਿਸ਼ਕਾਮ ਭਗਤੀ',
        'ਬਣਾਏ ਗਏ ਵੱਡੇ ਮਹਿਲ ਅਤੇ ਜੋੜੀ ਹੋਈ ਦੌਲਤ',
        'ਬਹਿਸਬਾਜ਼ੀ ਲਈ ਲਿਖੇ ਗਏ ਕਿਤਾਬੀ ਤਰਕ',
        'ਤੀਰਥਾਂ ਤੇ ਬਣਾਏ ਗਏ ਪੱਥਰ ਦੇ ਸਮਾਰਕ',
      ],
      en: [
        'The soul (Surat) awakened in the True Name (Satyanaam) and selfless devotion',
        'Grand monuments and inherited fortunes left behind',
        'Intellectual arguments recorded in books of debate',
        'External shrines built from brick and stone',
      ],
    },
  },
  satya: {
    coreCorrect: {
      hi: 'बाह्य पाखंड व खोखले दिखावे को त्यागकर कथनी और करनी में एकरूप सत्य आचरण अपनाना',
      pb: 'ਬਾਹਰੀ ਪਾਖੰਡ ਤੇ ਖੋਖਲਾ ਵਿਖਾਵਾ ਛੱਡ ਕੇ ਕਹਿਣੀ ਅਤੇ ਕਰਨੀ ਵਿੱਚ ਇੱਕੋ ਜਿਹਾ ਸੱਚਾ ਆਚਰਨ ਅਪਣਾਉਣਾ',
      en: 'Rejecting hollow hypocrisy so outward speech and inner conduct align with lived Truth',
    },
    coreDistractors: {
      hi: [
        'शास्त्रों के उद्धरण सुनाकर दूसरों को अपनी विद्वत्ता से प्रभावित करना',
        'समाज की परंपरा मानकर बिना भाव के समस्त रीतियाँ निभाते रहना',
        'स्वयं की सुविधा के अनुसार सत्य और असत्य की परिभाषा बदलते रहना',
      ],
      pb: [
        'ਗ੍ਰੰਥਾਂ ਦੇ ਹਵਾਲੇ ਸੁਣਾ ਕੇ ਦੂਜਿਆਂ ਨੂੰ ਆਪਣੀ ਵਿਦਵਤਾ ਨਾਲ ਪ੍ਰਭਾਵਿਤ ਕਰਨਾ',
        'ਸਮਾਜਿਕ ਰੀਤ ਸਮਝ ਕੇ ਬਿਨਾਂ ਭਾਵਨਾ ਦੇ ਸਾਰੀਆਂ ਰਸਮਾਂ ਨਿਭਾਉਂਦੇ ਰਹਿਣਾ',
        'ਆਪਣੀ ਸਹੂਲਤ ਅਨੁਸਾਰ ਸੱਚ ਤੇ ਝੂਠ ਦੀ ਪਰਿਭਾਸ਼ਾ ਬਦਲਦੇ ਰਹਿਣਾ',
      ],
      en: [
        'Quoting verses impressively to earn a reputation for scholarship',
        'Performing mechanical customs out of social habit without sincerity',
        'Adjusting your definition of honesty whenever convenience demands it',
      ],
    },
    scenarioQuestion: {
      hi: 'दैनिक परिस्थिति: यदि कोई कार्य झूठ बोलने पर तुरंत लाभ देता हो और सत्य बोलने पर थोड़ी कठिनाई हो, तो साधक क्या चुने?',
      pb: 'ਰੋਜ਼ਾਨਾ ਸਥਿਤੀ: ਜੇ ਕਿਸੇ ਕੰਮ ਵਿੱਚ ਝੂਠ ਬੋਲਣ ਨਾਲ ਤੁਰੰਤ ਫ਼ਾਇਦਾ ਦਿਸੇ ਤੇ ਸੱਚ ਬੋਲਣ ਵਿੱਚ ਥੋੜ੍ਹੀ ਮੁਸ਼ਕਲ ਹੋਵੇ, ਤਾਂ ਸਾਧਕ ਕੀ ਚੁਣੇ?',
      en: 'Real-Life Scenario: When a small lie offers quick profit while honesty involves temporary inconvenience, what choice aligns with this Sakhi?',
    },
    scenarioOptions: {
      hi: [
        'क्षणिक लाभ की परवाह किए बिना सत्य व ईमानदारी का मार्ग चुने',
        'मन में ईश्वर का नाम लेकर अपना काम निकालने हेतु झूठ बोल दे',
        'बाद में कुछ दान-पुण्य करके असत्य की भरपाई करने की सोचे',
        'दूसरों के व्यवहार का बहाना बनाकर स्वयं भी छल अपना ले',
      ],
      pb: [
        'ਥੋੜ੍ਹ-ਚਿਰੇ ਫ਼ਾਇਦੇ ਦੀ ਪ੍ਰਵਾਹ ਕੀਤੇ ਬਿਨਾਂ ਸੱਚ ਅਤੇ ਇਮਾਨਦਾਰੀ ਦਾ ਰਾਹ ਚੁਣੇ',
        'ਮਨ ਵਿੱਚ ਪ੍ਰਭੂ ਦਾ ਨਾਮ ਲੈ ਕੇ ਆਪਣਾ ਮਤਲਬ ਕੱਢਣ ਲਈ ਝੂਠ ਬੋਲ ਦੇਵੇ',
        'ਬਾਅਦ ਵਿੱਚ ਥੋੜ੍ਹਾ ਦਾਨ-ਪੁੰਨ ਕਰਕੇ ਝੂਠ ਦਾ ਬਦਲਾ ਚੁਕਾਉਣ ਦੀ ਸੋਚੇ',
        'ਦੂਜਿਆਂ ਦੀ ਮਿਸਾਲ ਦੇ ਕੇ ਆਪ ਵੀ ਛਲ-ਕਪਟ ਕਰ ਲਵੇ',
      ],
      en: [
        'Stand firmly by honesty and integrity regardless of temporary inconvenience',
        'Speak the lie while silently asking forgiveness afterward',
        'Rationalize dishonesty by planning to donate a portion later',
        'Imitate dishonest competitors so as not to fall behind',
      ],
    },
    causeQuestion: {
      hi: 'कारण और परिणाम: कथनी (अच्छे उपदेश) और करनी (दैनिक आचरण) में अंतर होने का क्या परिणाम होता है?',
      pb: 'ਕਾਰਨ ਤੇ ਨਤੀਜਾ: ਕਹਿਣੀ (ਚੰਗੀਆਂ ਗੱਲਾਂ) ਅਤੇ ਕਰਨੀ (ਅਸਲੀ ਵਿਹਾਰ) ਵਿੱਚ ਫ਼ਰਕ ਹੋਣ ਦਾ ਕੀ ਨਤੀਜਾ ਹੁੰਦਾ ਹੈ?',
      en: 'Cause & Effect: What is the consequence when someone’s pious words ("Kathani") contradict their daily deeds ("Karani")?',
    },
    causeOptions: {
      hi: [
        'भक्ति केवल बाहरी आडंबर रह जाती है और अंतःकरण में साहेब का सच्चा प्रकाश नहीं ठहरता',
        'दूसरों को उपदेश देने मात्र से साधक का अपना कल्याण स्वतः सिद्ध हो जाता है',
        'दुनिया को धोखा देने से परमात्मा भी प्रसन्न हो जाते हैं',
        'विद्वत्ता बढ़ने से हृदय के सभी विकार अपने आप मिट जाते हैं',
      ],
      pb: [
        'ਭਗਤੀ ਕੇਵਲ ਬਾਹਰੀ ਦਿਖਾਵਾ ਰਹਿ ਜਾਂਦੀ ਹੈ ਤੇ ਹਿਰਦੇ ਵਿੱਚ ਸੱਚਾ ਪ੍ਰਕਾਸ਼ ਨਹੀਂ ਟਿਕਦਾ',
        'ਦੂਜਿਆਂ ਨੂੰ ਉਪਦੇਸ਼ ਦੇਣ ਨਾਲ ਹੀ ਸਾਧਕ ਦਾ ਆਪਣਾ ਕਲਿਆਣ ਹੋ ਜਾਂਦਾ ਹੈ',
        'ਦੁਨੀਆ ਨੂੰ ਧੋਖਾ ਦੇਣ ਨਾਲ ਪ੍ਰਮਾਤਮਾ ਵੀ ਖੁਸ਼ ਹੋ ਜਾਂਦੇ ਹਨ',
        'ਗਿਆਨ ਦੇ ਸ਼ਬਦ ਰਟਣ ਨਾਲ ਹੀ ਸਾਰੇ ਵਿਕਾਰ ਮੁੱਕ ਜਾਂਦੇ ਹਨ',
      ],
      en: [
        'Devotion collapses into empty show, preventing genuine inner illumination',
        'Lecturing others is sufficient to achieve personal liberation',
        'Clever outward appearances conceal inner deceit from conscience',
        'Memorizing doctrine automatically purifies daily behavior',
      ],
    },
    tattvaQuestion: {
      hi: 'तत्व ज्ञान: कबीर साहेब "साँच बराबर तप नहीं" कहकर किस सत्य की ओर संकेत करते हैं?',
      pb: 'ਤੱਤ-ਗਿਆਨ: ਕਬੀਰ ਸਾਹੇਬ "ਸੱਚ ਬਰਾਬਰ ਤਪ ਨਹੀਂ" ਕਹਿ ਕੇ ਕਿਸ ਸੱਚ ਵੱਲ ਇਸ਼ਾਰਾ ਕਰਦੇ ਹਨ?',
      en: 'Tattva Gyan: When Satguru Kabir Saheb declares "No austerity equals Truth," what Truth is meant?',
    },
    tattvaOptions: {
      hi: [
        'विचार, वाणी और कर्म की निष्कपट पारदर्शिता तथा अविनाशी सत्यनाम से एकरूपता',
        'केवल सामाजिक नियमों के अनुसार कठोर उपवास और मौन व्रत रखना',
        'किसी एक पुस्तक के शब्दों को बिना समझे दोहराते रहना',
        'संसार के प्रत्येक व्यक्ति के सामने अपने निजी विचार उजागर कर देना',
      ],
      pb: [
        'ਵਿਚਾਰ, ਬੋਲੀ ਤੇ ਕਰਮ ਦੀ ਨਿਰਛਲ ਸੱਚਾਈ ਅਤੇ ਅਵਿਨਾਸ਼ੀ ਸਤਯਨਾਮ ਨਾਲ ਇਕਸੁਰਤਾ',
        'ਕੇਵਲ ਬਾਹਰੀ ਰਸਮਾਂ ਵਜੋਂ ਵਰਤ ਅਤੇ ਤਪੱਸਿਆ ਕਰਨੀ',
        'ਕਿਸੇ ਪੁਸਤਕ ਦੇ ਸ਼ਬਦਾਂ ਨੂੰ ਬਿਨਾਂ ਸਮਝੇ ਦੁਹਰਾਉਂਦੇ ਰਹਿਣਾ',
        'ਬਿਨਾਂ ਵਿਵੇਕ ਦੇ ਹਰ ਕਿਸੇ ਅੱਗੇ ਆਪਣੇ ਭੇਦ ਖੋਲ੍ਹ ਦੇਣੇ',
      ],
      en: [
        'Undivided integrity of thought, word, and action aligned with Eternal Truth',
        'Severe physical fasting performed purely for social recognition',
        'Repeating inherited formulas without testing them in daily life',
        'Sharing private affairs indiscriminately without discernment',
      ],
    },
  },
  satsang: {
    coreCorrect: {
      hi: 'कुसंग का त्याग कर सज्जनों, संतों और आत्म-विवेक की संगति को जीवन में प्राथमिकता देना',
      pb: 'ਕੁਸੰਗਤ ਛੱਡ ਕੇ ਸੱਜਣਾਂ, ਸੰਤਾਂ ਅਤੇ ਆਤਮ-ਵਿਵੇਕ ਦੀ ਸੰਗਤ ਨੂੰ ਜੀਵਨ ਵਿੱਚ ਪਹਿਲ ਦੇਣੀ',
      en: 'Avoiding harmful associations and cultivating saintly company and discerning reflection',
    },
    coreDistractors: {
      hi: [
        'संसार के सभी लोगों को हीन समझकर किसी से मित्रता न रखना',
        'केवल बड़े समारोहों में भीड़ बढ़ाने के लिए उपस्थित होना',
        'सबकी हाँ में हाँ मिलाकर लोकप्रिय बने रहना चाहे आचरण कुछ भी हो',
      ],
      pb: [
        'ਦੁਨੀਆ ਦੇ ਸਾਰੇ ਲੋਕਾਂ ਨੂੰ ਮਾੜਾ ਸਮਝ ਕੇ ਕਿਸੇ ਨਾਲ ਮਿੱਤਰਤਾ ਨਾ ਰੱਖਣੀ',
        'ਕੇਵਲ ਵੱਡੇ ਇਕੱਠਾਂ ਵਿੱਚ ਗਿਣਤੀ ਵਧਾਉਣ ਲਈ ਸ਼ਾਮਲ ਹੋਣਾ',
        'ਸਭ ਦੀ ਹਾਂ ਵਿੱਚ ਹਾਂ ਮਿਲਾ ਕੇ ਲੋਕਪ੍ਰਿਯ ਬਣੇ ਰਹਿਣਾ ਭਾਵੇਂ ਆਚਰਨ ਕਿਹੋ ਜਿਹਾ ਵੀ ਹੋਵੇ',
      ],
      en: [
        'Looking down on everyone in society and rejecting all human friendship',
        'Attending crowded gatherings solely for socializing or status',
        'Agreeing with unwholesome habits just to stay popular in a group',
      ],
    },
    scenarioQuestion: {
      hi: 'दैनिक परिस्थिति: यदि मित्रों की मंडली में दूसरों की निंदा, ईर्ष्या या व्यसन की चर्चा होने लगे, तो साधक क्या करे?',
      pb: 'ਰੋਜ਼ਾਨਾ ਸਥਿਤੀ: ਜੇ ਦੋਸਤਾਂ ਦੀ ਮਹਿਫ਼ਿਲ ਵਿੱਚ ਦੂਜਿਆਂ ਦੀ ਨਿੰਦਾ ਜਾਂ ਨਸ਼ਿਆਂ-ਵਿਕਾਰਾਂ ਦੀ ਗੱਲ ਚੱਲ ਪਵੇ, ਤਾਂ ਸਾਧਕ ਕੀ ਕਰੇ?',
      en: 'Real-Life Scenario: When a social circle turns toward backbiting, cynicism, or harmful habits, what should a seeker do?',
    },
    scenarioOptions: {
      hi: [
        'विनम्रता से विषय को सार्थक दिशा दे या शांतिपूर्वक उस कुसंग से स्वयं को अलग कर ले',
        'मित्रता बचाने के लिए स्वयं भी निंदा और हास्य-व्यंग्य में शामिल हो जाए',
        'क्रोध में सबको फटकार लगाकर वहाँ झगड़ा खड़ा कर दे',
        'मन में निंदा का आनंद लेते हुए बाहर से चुपचाप बैठा रहे',
      ],
      pb: [
        'ਨਿਮਰਤਾ ਨਾਲ ਗੱਲ ਨੂੰ ਸਹੀ ਪਾਸੇ ਮੋੜੇ ਜਾਂ ਸ਼ਾਂਤੀ ਨਾਲ ਉਸ ਕੁਸੰਗਤ ਤੋਂ ਦੂਰ ਹੋ ਜਾਵੇ',
        'ਦੋਸਤੀ ਨਿਭਾਉਣ ਲਈ ਆਪ ਵੀ ਨਿੰਦਾ-ਚੁਗਲੀ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋ ਜਾਵੇ',
        'ਗੁੱਸੇ ਵਿੱਚ ਸਭ ਨੂੰ ਝਿੜਕ ਕੇ ਉੱਥੇ ਲੜਾਈ ਖੜ੍ਹੀ ਕਰ ਦੇਵੇ',
        'ਅੰਦਰੋਂ ਨਿੰਦਾ ਦਾ ਸੁਆਦ ਲੈਂਦਿਆਂ ਬਾਹਰੋਂ ਚੁੱਪ ਬੈਠਾ ਰਹੇ',
      ],
      en: [
        'Gently steer the conversation toward something wholesome or quietly step away',
        'Join in the gossip so your friends do not think you are aloof',
        'Lecture everyone harshly and pick an angry quarrel on the spot',
        'Sit silently while secretly enjoying the malicious rumors',
      ],
    },
    causeQuestion: {
      hi: 'कारण और परिणाम: संतों के सत्संग तथा सूप-वृत्ति (सार ग्रहण करने) का साधक के जीवन पर क्या प्रभाव पड़ता है?',
      pb: 'ਕਾਰਨ ਤੇ ਨਤੀਜਾ: ਸੰਤਾਂ ਦੇ ਸਤਿਸੰਗ ਅਤੇ ਛੱਜ-ਬਿਰਤੀ (ਸਾਰ ਗ੍ਰਹਿਣ ਕਰਨ) ਦਾ ਸਾਧਕ ਦੇ ਜੀਵਨ ਤੇ ਕੀ ਅਸਰ ਹੁੰਦਾ ਹੈ?',
      en: 'Cause & Effect: What happens when a seeker keeps Satsang and practices discerning "winnowing-fan" wisdom?',
    },
    causeOptions: {
      hi: [
        'व्यर्थ विकार व संदेह उड़ जाते हैं तथा हृदय में केवल सार-तत्त्व और शांति शेष रहती है',
        'मनुष्य को दुनिया की सारी आलोचनाएँ करने का अधिकार मिल जाता है',
        'संसार के सारे कष्ट चमत्कारिक रूप से तुरंत गायब हो जाते हैं',
        'व्यक्ति केवल बाहरी नियमों पर दूसरों को परखने लगता है',
      ],
      pb: [
        'ਬੇਅਰਥ ਵਿਕਾਰ ਤੇ ਸ਼ੱਕ ਦੂਰ ਹੋ ਜਾਂਦੇ ਹਨ ਅਤੇ ਹਿਰਦੇ ਵਿੱਚ ਕੇਵਲ ਸਾਰ-ਤੱਤ ਤੇ ਸ਼ਾਂਤੀ ਬਚਦੀ ਹੈ',
        'ਮਨੁੱਖ ਨੂੰ ਸਭ ਦੀਆਂ ਕਮੀਆਂ ਕੱਢਣ ਦਾ ਹੱਕ ਮਿਲ ਜਾਂਦਾ ਹੈ',
        'ਦੁਨੀਆ ਦੇ ਸਾਰੇ ਦੁੱਖ ਚਮਤਕਾਰ ਨਾਲ ਤੁਰੰਤ ਗਾਇਬ ਹੋ ਜਾਂਦੇ ਹਨ',
        'ਮਨੁੱਖ ਕੇਵਲ ਬਾਹਰੀ ਰੀਤਾਂ ਨਾਲ ਦੂਜਿਆਂ ਨੂੰ ਤੋਲਣ ਲੱਗਦਾ ਹੈ',
      ],
      en: [
        'Empty chaff of doubt and vice blows away, leaving nourishing Truth and calm',
        'One gains license to judge outsiders harshly',
        'All external challenges magically vanish overnight',
        'One focuses exclusively on policing others’ minor habits',
      ],
    },
    tattvaQuestion: {
      hi: 'तत्व ज्ञान: कबीर साहेब ने सच्चे "साधु" की पहचान वेश से नहीं बल्कि किस आंतरिक गुण से बताई है?',
      pb: 'ਤੱਤ-ਗਿਆਨ: ਕਬੀਰ ਸਾਹੇਬ ਨੇ ਸੱਚੇ "ਸਾਧੂ" ਦੀ ਪਛਾਣ ਭੇਖ ਤੋਂ ਨਹੀਂ ਸਗੋਂ ਕਿਸ ਅੰਦਰੂਨੀ ਗੁਣ ਤੋਂ ਦੱਸੀ ਹੈ?',
      en: 'Tattva Gyan: Not by robes, but by which inner quality does Satguru Kabir Saheb identify a true "Sadhu"?',
    },
    tattvaOptions: {
      hi: [
        'विवेकशील स्वभाव जो सार (सत्य) को धारण करे और निंदा-क्रोध में भी अपनी शीतलता न छोड़े',
        'विशेष रंग के वस्त्र, जटाएँ और मठ-मंदिरों का विशाल स्वामित्व',
        'तीव्र शास्त्रार्थ में किसी भी प्रतिद्वंद्वी को पराजित करने की क्षमता',
        'समाज से दूर रहकर किसी की कोई सहायता न करना',
      ],
      pb: [
        'ਵਿਵੇਕਸ਼ੀਲ ਸੁਭਾਅ ਜੋ ਸਾਰ (ਸੱਚ) ਨੂੰ ਗ੍ਰਹਿਣ ਕਰੇ ਤੇ ਵਿਰੋਧ ਵਿੱਚ ਵੀ ਸ਼ੀਤਲਤਾ ਨਾ ਛੱਡੇ',
        'ਖ਼ਾਸ ਰੰਗ ਦੇ ਕੱਪੜੇ ਅਤੇ ਵੱਡੇ ਡੇਰਿਆਂ ਦੀ ਮਾਲਕੀ',
        'ਬਹਿਸਬਾਜ਼ੀ ਵਿੱਚ ਹਰ ਕਿਸੇ ਨੂੰ ਹਰਾਉਣ ਦੀ ਤਾਕਤ',
        'ਸਮਾਜ ਤੋਂ ਕੱਟ ਕੇ ਕਿਸੇ ਦੇ ਕੰਮ ਨਾ ਆਉਣਾ',
      ],
      en: [
        'Discerning wisdom that retains Truth while keeping cool equanimity amid hostility',
        'Wearing distinctive robes or owning grand monastic estates',
        'Defeating rivals in public theological debates',
        'Withdrawing so completely as to avoid helping anyone in need',
      ],
    },
  },
  prem: {
    coreCorrect: {
      hi: 'अहंकार और स्वार्थ का समर्पण कर निश्छल, एकनिष्ठ प्रेम-भक्ति को हृदय में बसाना',
      pb: 'ਹੰਕਾਰ ਤੇ ਸਵਾਰਥ ਨੂੰ ਸਮਰਪਿਤ ਕਰਕੇ ਨਿਰਛਲ, ਅਨੰਨ ਪ੍ਰੇਮ-ਭਗਤੀ ਨੂੰ ਹਿਰਦੇ ਵਿੱਚ ਵਸਾਉਣਾ',
      en: 'Surrendering ego and self-interest to cultivate sincere, wholehearted love and devotion',
    },
    coreDistractors: {
      hi: [
        'भौतिक इच्छाएँ पूरी कराने के लिए ईश्वर से सौदेबाजी की प्रार्थना करना',
        'केवल भावुकता में बहकर जीवन के कर्तव्यों की उपेक्षा करना',
        'बड़ी-बड़ी धार्मिक पुस्तकें पढ़कर केवल बौद्धिक बहस करना',
      ],
      pb: [
        'ਦੁਨਿਆਵੀ ਇੱਛਾਵਾਂ ਪੂਰੀਆਂ ਕਰਵਾਉਣ ਲਈ ਪ੍ਰਭੂ ਨਾਲ ਸੌਦੇਬਾਜ਼ੀ ਕਰਨੀ',
        'ਕੇਵਲ ਭਾਵੁਕਤਾ ਵਿੱਚ ਵਹਿ ਕੇ ਜੀਵਨ ਦੇ ਕਰਤੱਵਾਂ ਨੂੰ ਭੁੱਲ ਜਾਣਾ',
        'ਵੱਡੀਆਂ ਧਾਰਮਿਕ ਕਿਤਾਬਾਂ ਪੜ੍ਹ ਕੇ ਕੇਵਲ ਦਿਮਾਗੀ ਬਹਿਸ ਕਰਨੀ',
      ],
      en: [
        'Bargaining in prayer purely to fulfill material ambitions',
        'Getting swept into sentimentality while neglecting daily duties',
        'Reducing devotion to abstract academic reading and debate',
      ],
    },
    scenarioQuestion: {
      hi: 'दैनिक परिस्थिति: कोई व्यक्ति यदि भक्ति करता हो पर घर के सदस्यों से रूखा व स्वार्थी व्यवहार रखे, तो इस साखी की रोशनी में क्या कमी है?',
      pb: 'ਰੋਜ਼ਾਨਾ ਸਥਿਤੀ: ਜੇ ਕੋਈ ਪਾਠ-ਪੂਜਾ ਤਾਂ ਕਰੇ ਪਰ ਪਰਿਵਾਰ ਨਾਲ ਰੁੱਖਾ ਤੇ ਸਵਾਰਥੀ ਵਿਹਾਰ ਰੱਖੇ, ਤਾਂ ਇਸ ਸਾਖੀ ਅਨੁਸਾਰ ਕੀ ਕਮੀ ਹੈ?',
      en: 'Real-Life Scenario: If someone observes daily prayers yet treats household members coldly and selfishly, what is missing according to this Sakhi?',
    },
    scenarioOptions: {
      hi: [
        'उसकी साधना में "प्रेम के ढाई आखर" और अहं-त्याग की वास्तविक जीवंतता का अभाव है',
        'उसने संभवतः किसी बड़े तीर्थ की यात्रा अभी तक नहीं की है',
        'उसकी पूजा में सामग्री और घंटा-नाद की संख्या कम पड़ रही है',
        'उसे और अधिक कठिन भाषा की पुस्तकें पढ़ने की आवश्यकता है',
      ],
      pb: [
        'ਉਸ ਦੀ ਸਾਧਨਾ ਵਿੱਚ "ਪ੍ਰੇਮ ਦੇ ਢਾਈ ਅੱਖਰ" ਅਤੇ ਹੰਕਾਰ-ਤਿਆਗ ਦੀ ਅਸਲੀ ਸੱਚਾਈ ਦੀ ਕਮੀ ਹੈ',
        'ਉਸ ਨੇ ਸ਼ਾਇਦ ਅਜੇ ਤੱਕ ਕਿਸੇ ਵੱਡੇ ਤੀਰਥ ਦੀ ਯਾਤਰਾ ਨਹੀਂ ਕੀਤੀ',
        'ਉਸ ਦੀ ਪੂਜਾ ਵਿੱਚ ਰਸਮੀ ਸਮੱਗਰੀ ਦੀ ਗਿਣਤੀ ਘੱਟ ਹੈ',
        'ਉਸ ਨੂੰ ਹੋਰ ਔਖੀਆਂ ਕਿਤਾਬਾਂ ਪੜ੍ਹਨ ਦੀ ਲੋੜ ਹੈ',
      ],
      en: [
        'Their practice lacks the living essence of selfless love and humility',
        'They simply have not completed enough distant pilgrimages yet',
        'Their formal ritual lacked enough lamps or chanting volume',
        'They need to memorize more philosophical commentaries',
      ],
    },
    causeQuestion: {
      hi: 'कारण और परिणाम: सच्ची विरह-भक्ति और अहंकार के समर्पण का साधक पर क्या परिणाम होता है?',
      pb: 'ਕਾਰਨ ਤੇ ਨਤੀਜਾ: ਸੱਚੀ ਬਿਰਹਾ-ਭਗਤੀ ਅਤੇ ਹੰਕਾਰ ਦੇ ਸਮਰਪਣ ਦਾ ਸਾਧਕ ਉੱਤੇ ਕੀ ਅਸਰ ਹੁੰਦਾ ਹੈ?',
      en: 'Cause & Effect: What transforms inside a seeker when sincere longing and surrender replace ego?',
    },
    causeOptions: {
      hi: [
        'द्वैत और भय मिटते हैं तथा मन स्वाभाविक रूप से सबके प्रति प्रेममय व शांत हो जाता है',
        'व्यक्ति संसार के लोगों से स्वयं को श्रेष्ठ मानकर अलग रहने लगता है',
        'बुद्धि तर्क करने में और भी अधिक कुशल व विवादप्रिय हो जाती है',
        'साधक को केवल बाहरी प्रशंसा और यश की प्राप्ति होती है',
      ],
      pb: [
        'ਦਵੈਤ ਤੇ ਡਰ ਮਿਟਦੇ ਹਨ ਅਤੇ ਮਨ ਸੁਭਾਵਿਕ ਤੌਰ ਤੇ ਸਭ ਪ੍ਰਤੀ ਪ੍ਰੇਮਮਈ ਤੇ ਸ਼ਾਂਤ ਹੋ ਜਾਂਦਾ ਹੈ',
        'ਮਨੁੱਖ ਆਪਣੇ ਆਪ ਨੂੰ ਬਾਕੀਆਂ ਤੋਂ ਵੱਡਾ ਮੰਨ ਕੇ ਵੱਖਰਾ ਰਹਿਣ ਲੱਗਦਾ ਹੈ',
        'ਬੁੱਧੀ ਬਹਿਸ ਕਰਨ ਵਿੱਚ ਹੋਰ ਜ਼ਿਆਦਾ ਤੇਜ਼ ਹੋ ਜਾਂਦੀ ਹੈ',
        'ਸਾਧਕ ਨੂੰ ਕੇਵਲ ਬਾਹਰੀ ਵਾਹ-ਵਾਹ ਦੀ ਪ੍ਰਾਪਤੀ ਹੁੰਦੀ ਹੈ',
      ],
      en: [
        'Fear and separation dissolve, leaving spontaneous peace and compassion for all',
        'One feels superior to ordinary people and withdraws judgmentally',
        'The intellect grows sharper at winning arguments',
        'One earns greater social fame and public recognition',
      ],
    },
    tattvaQuestion: {
      hi: 'कबीर पंथ तत्व ज्ञान: सतगुरु कबीर साहेब ने "सीस उतारे भुईं धरै" या प्रेम की संकरी गली से क्या तात्पर्य बताया है?',
      pb: 'ਕਬੀਰ ਪੰਥ ਤੱਤ-ਗਿਆਨ: ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਨੇ "ਸੀਸ ਉਤਾਰੇ ਭੁਇੰ ਧਰੈ" ਜਾਂ ਪ੍ਰੇਮ ਦੀ ਭੀੜੀ ਗਲੀ ਤੋਂ ਕੀ ਭਾਵ ਦੱਸਿਆ ਹੈ?',
      en: 'Kabir Panth Philosophy: What does Satguru Kabir Saheb symbolize by "laying down one’s head on the ground" on the narrow path of Love?',
    },
    tattvaOptions: {
      hi: [
        'अपने अहंकार, अभिमान और स्वार्थपूर्ण "मैं-पन" को पूर्णतः त्यागकर समर्पण करना',
        'शरीर को किसी प्रकार का शारीरिक कष्ट या हिंसा पहुँचाना',
        'समाज के हर अन्याय को बिना कुछ कहे स्वीकार करते रहना',
        'बुद्धि और विवेक का प्रयोग पूरी तरह बंद कर देना',
      ],
      pb: [
        'ਆਪਣੇ ਹੰਕਾਰ, ਅਭਿਮਾਨ ਅਤੇ ਸਵਾਰਥੀ "ਮੈਂ-ਪੁਣੇ" ਨੂੰ ਪੂਰੀ ਤਰ੍ਹਾਂ ਤਿਆਗ ਕੇ ਸਮਰਪਣ ਕਰਨਾ',
        'ਸਰੀਰ ਨੂੰ ਕਿਸੇ ਤਰ੍ਹਾਂ ਦਾ ਸਰੀਰਕ ਕਸ਼ਟ ਦੇਣਾ',
        'ਸਮਾਜ ਦੇ ਹਰ ਅਨਿਆਂ ਅੱਗੇ ਝੁਕ ਕੇ ਬੇਵੱਸ ਹੋ ਜਾਣਾ',
        'ਬੁੱਧੀ ਅਤੇ ਵਿਵੇਕ ਦੀ ਵਰਤੋਂ ਬਿਲਕੁਲ ਬੰਦ ਕਰ ਦੇਣੀ',
      ],
      en: [
        'Totally surrendering personal pride, stubborn ego, and selfish "I-ness"',
        'Inflicting literal physical harm or extreme bodily mortification',
        'Passively tolerating injustice out of timidity',
        'Switching off rational discernment and ethical judgment',
      ],
    },
  },
  compassion: {
    coreCorrect: {
      hi: 'समस्त जीवों के प्रति दया, अहिंसा, समभाव और निस्वार्थ परोपकार को धर्म का मूल मानना',
      pb: 'ਸਾਰੇ ਜੀਵਾਂ ਪ੍ਰਤੀ ਦਇਆ, ਅਹਿੰਸਾ, ਸਮਭਾਵ ਅਤੇ ਨਿਸ਼ਕਾਮ ਪਰਉਪਕਾਰ ਨੂੰ ਧਰਮ ਦੀ ਜੜ੍ਹ ਮੰਨਣਾ',
      en: 'Practicing universal compassion, non-violence, equality, and selfless service as the root of dharma',
    },
    coreDistractors: {
      hi: [
        'केवल अपने परिवार और संप्रदाय के लोगों के प्रति ही भलाई का भाव रखना',
        'परोपकार के बदले सदा समाज से सम्मान और धन्यवाद की अपेक्षा रखना',
        'केवल मंदिरों में दान देकर गरीब व असहाय जीवों की अनदेखी करना',
      ],
      pb: [
        'ਕੇਵਲ ਆਪਣੇ ਪਰਿਵਾਰ ਤੇ ਆਪਣੇ ਹੀ ਫ਼ਿਰਕੇ ਦੇ ਲੋਕਾਂ ਪ੍ਰਤੀ ਭਲਾਈ ਰੱਖਣੀ',
        'ਪਰਉਪਕਾਰ ਦੇ ਬਦਲੇ ਹਮੇਸ਼ਾ ਸਮਾਜ ਤੋਂ ਵਾਹ-ਵਾਹ ਤੇ ਸਨਮਾਨ ਦੀ ਉਮੀਦ ਰੱਖਣੀ',
        'ਕੇਵਲ ਬਾਹਰੀ ਥਾਵਾਂ ਤੇ ਦਾਨ ਕਰਕੇ ਗਰੀਬ ਤੇ ਬੇਸਹਾਰਾ ਜੀਵਾਂ ਨੂੰ ਅਣਦੇਖਿਆ ਕਰਨਾ',
      ],
      en: [
        'Restricting kindness solely to members of your own family or sect',
        'Helping others only when public recognition and gratitude are assured',
        'Giving ceremonial offerings while ignoring struggling neighbors',
      ],
    },
    scenarioQuestion: {
      hi: 'दैनिक परिस्थिति: यदि कोई असहाय या कठिन समय से गुजरता व्यक्ति आपसे सहायता की अपेक्षा रखे और आपके पास सामर्थ्य हो, तो साधक क्या करे?',
      pb: 'ਰੋਜ਼ਾਨਾ ਸਥਿਤੀ: ਜੇ ਕੋਈ ਬੇਸਹਾਰਾ ਜਾਂ ਔਖੇ ਸਮੇਂ ਵਿੱਚੋਂ ਲੰਘ ਰਿਹਾ ਵਿਅਕਤੀ ਤੁਹਾਡੇ ਤੋਂ ਮਦਦ ਦੀ ਆਸ ਰੱਖੇ, ਤਾਂ ਸਾਧਕ ਕੀ ਕਰੇ?',
      en: 'Real-Life Scenario: When someone in genuine distress seeks help within your capacity, what does this Sakhi guide you to do?',
    },
    scenarioOptions: {
      hi: [
        'बिना अभिमान और बिना भेदभाव के यथासंभव सेवा, सहानुभूति और सहयोग प्रदान करे',
        'उसके कर्मों का फल बताकर मदद करने से हाथ खींच ले',
        'पहले फोटो खींचकर या प्रचार सुनिश्चित करके ही सहायता आगे बढ़ाए',
        'सलाह दे दे कि धार्मिक ग्रंथ पढ़ने से सब ठीक हो जाएगा, और कोई कर्म न करे',
      ],
      pb: [
        'ਬਿਨਾਂ ਕਿਸੇ ਹੰਕਾਰ ਅਤੇ ਭੇਦਭਾਵ ਦੇ ਆਪਣੇ ਸਮਰੱਥ ਅਨੁਸਾਰ ਸੇਵਾ ਤੇ ਸਹਿਯੋਗ ਦੇਵੇ',
        'ਉਸ ਦੇ ਪਿਛਲੇ ਕਰਮਾਂ ਦਾ ਫ਼ਲ ਦੱਸ ਕੇ ਮਦਦ ਕਰਨ ਤੋਂ ਨਾਂਹ ਕਰ ਦੇਵੇ',
        'ਪਹਿਲਾਂ ਦਿਖਾਵੇ ਤੇ ਪ੍ਰਚਾਰ ਦਾ ਪ੍ਰਬੰਧ ਕਰਕੇ ਹੀ ਸਹਾਇਤਾ ਕਰੇ',
        'ਕੇਵਲ ਜ਼ੁਬਾਨੀ ਉਪਦੇਸ਼ ਦੇ ਕੇ ਅਮਲੀ ਮਦਦ ਤੋਂ ਪਿੱਛੇ ਹਟ ਜਾਵੇ',
      ],
      en: [
        'Offer practical support and kindness humbly without expectation or bias',
        'Dismiss their hardship as past karma and walk away',
        'Help only if publicity and praise are guaranteed',
        'Offer empty advice while refusing tangible assistance',
      ],
    },
    causeQuestion: {
      hi: 'कारण और परिणाम: जहाँ जीव-दया, अहिंसा और समभाव का अभाव हो, वहाँ समस्त बाहरी धर्म-कर्म का क्या परिणाम होता है?',
      pb: 'ਕਾਰਨ ਤੇ ਨਤੀਜਾ: ਜਿੱਥੇ ਜੀਵ-ਦਇਆ, ਅਹਿੰਸਾ ਅਤੇ ਸਮਭਾਵ ਦੀ ਕਮੀ ਹੋਵੇ, ਉੱਥੇ ਬਾਹਰੀ ਧਰਮ-ਕਰਮ ਦਾ ਕੀ ਨਤੀਜਾ ਹੁੰਦਾ ਹੈ?',
      en: 'Cause & Effect: What becomes of outward religious observance when compassion and non-violence are absent?',
    },
    causeOptions: {
      hi: [
        'कठोर हृदय में किया गया हर जप-तप निष्फल और पाखंड मात्र रह जाता है',
        'नियमित अनुष्ठान करने से कठोरता अपने आप पुण्य में बदल जाती है',
        'हिंसा करने पर भी बाहरी नियमों से मोक्ष की प्राप्ति निश्चित हो जाती है',
        'समाज में भय पैदा कर के अधिक धर्म का प्रचार होता है',
      ],
      pb: [
        'ਕਠੋਰ ਹਿਰਦੇ ਨਾਲ ਕੀਤਾ ਹਰ ਜਪ-ਤਪ ਬੇਅਰਥ ਤੇ ਦਿਖਾਵਾ ਮਾਤਰ ਰਹਿ ਜਾਂਦਾ ਹੈ',
        'ਨਿਯਮਿਤ ਰਸਮਾਂ ਕਰਨ ਨਾਲ ਕਠੋਰਤਾ ਆਪਣੇ ਆਪ ਪੁੰਨ ਵਿੱਚ ਬਦਲ ਜਾਂਦੀ ਹੈ',
        'ਹਿੰਸਾ ਕਰਨ ਤੇ ਵੀ ਬਾਹਰੀ ਨਿਯਮਾਂ ਨਾਲ ਮੁਕਤੀ ਪੱਕੀ ਹੋ ਜਾਂਦੀ ਹੈ',
        'ਡਰ ਪੈਦਾ ਕਰਕੇ ਧਰਮ ਦਾ ਪ੍ਰਚਾਰ ਹੋਰ ਵਧਦਾ ਹੈ',
      ],
      en: [
        'Rituals performed with an unfeeling heart remain hollow and fruitless',
        'Strict ceremony automatically turns cruelty into merit',
        'Outer orthodoxy guarantees grace regardless of harm to living beings',
        'Fear and harshness help establish spiritual harmony',
      ],
    },
    tattvaQuestion: {
      hi: 'कबीर पंथ तत्व ज्ञान: "एक नूर ते सब जग उपजा" की दृष्टि से जीव-दया केवल नैतिकता नहीं बल्कि क्या है?',
      pb: 'ਕਬੀਰ ਪੰਥ ਤੱਤ-ਗਿਆਨ: "ਏਕ ਨੂਰ ਤੇ ਸਭ ਜਗ ਉਪਜਿਆ" ਦੀ ਦ੍ਰਿਸ਼ਟੀ ਤੋਂ ਜੀਵ-ਦਇਆ ਕੇਵਲ ਨੈਤਿਕਤਾ ਨਹੀਂ ਸਗੋਂ ਕੀ ਹੈ?',
      en: 'Kabir Panth Philosophy: From the vision "From One Light the whole universe arose," what is universal compassion really?',
    },
    tattvaOptions: {
      hi: [
        'प्रत्येक प्राणी में विराजमान एक ही परमात्मा साहेब की प्रत्यक्ष आराधना',
        'केवल सामाजिक प्रतिष्ठा बढ़ाने का एक अच्छा व्यावहारिक उपाय',
        'स्वर्ग में भौतिक सुख पाने के लिए किया गया लेन-देन',
        'अपने मन की कमजोरी और भावुकता का प्रदर्शन',
      ],
      pb: [
        'ਹਰ ਜੀਵ ਵਿੱਚ ਵਸਦੇ ਇੱਕੋ ਪਰਮਾਤਮਾ ਸਾਹੇਬ ਦੀ ਪ੍ਰਤੱਖ ਅਰਾਧਨਾ',
        'ਕੇਵਲ ਸਮਾਜ ਵਿੱਚ ਇੱਜ਼ਤ ਵਧਾਉਣ ਦਾ ਇੱਕ ਤਰੀਕਾ',
        'ਸਵਰਗ ਦੇ ਸੁੱਖ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ਕੀਤਾ ਗਿਆ ਲੈਣ-ਦੇਣ',
        'ਆਪਣੇ ਮਨ ਦੀ ਕਮਜ਼ੋਰੀ ਦਾ ਪ੍ਰਦਰਸ਼ਨ',
      ],
      en: [
        'Direct worship of the One Indwelling Divine present inside every being',
        'Merely a polite civic habit for improving public image',
        'A transaction aimed at buying future heavenly comforts',
        'A sign of emotional weakness rather than spiritual strength',
      ],
    },
  },
  yoga: {
    coreCorrect: {
      hi: 'बाहर भटकना बंद कर अंतर्मुखी होकर अपने ही घट के भीतर सत्य और अनहद शबद की खोज करना',
      pb: 'ਬਾਹਰ ਭਟਕਣਾ ਬੰਦ ਕਰਕੇ ਅੰਤਰਮੁਖੀ ਹੋ ਕੇ ਆਪਣੇ ਹੀ ਘਟ ਦੇ ਅੰਦਰ ਸੱਚ ਅਤੇ ਅਨਹਦ ਸ਼ਬਦ ਦੀ ਖੋਜ ਕਰਨੀ',
      en: 'Turning away from external wandering to discover Truth and the Unstruck Word within one’s own heart',
    },
    coreDistractors: {
      hi: [
        'केवल पहाड़ों, जंगलों और दूरस्थ स्मारकों की यात्रा करते रहने से ही बोध मान लेना',
        'सांसारिक भोगों को बढ़ाकर इंद्रियों की संतुष्टि को योग समझना',
        'बाह्य चमत्कारों और सिद्धियों के प्रदर्शन से लोगों को चकित करना',
      ],
      pb: [
        'ਕੇਵਲ ਪਹਾੜਾਂ, ਜੰਗਲਾਂ ਤੇ ਦੂਰ ਦੀਆਂ ਯਾਤਰਾਵਾਂ ਕਰਨ ਨੂੰ ਹੀ ਅਧਿਆਤਮਕ ਬੋਧ ਸਮਝ ਲੈਣਾ',
        'ਇੰਦਰੀਆਂ ਦੇ ਭੋਗਾਂ ਨੂੰ ਵਧਾ ਕੇ ਸਰੀਰਕ ਸੁੱਖ ਨੂੰ ਹੀ ਯੋਗ ਮੰਨ ਲੈਣਾ',
        'ਬਾਹਰੀ ਕਰਾਮਾਤਾਂ ਦਿਖਾ ਕੇ ਲੋਕਾਂ ਨੂੰ ਹੈਰਾਨ ਕਰਨਾ',
      ],
      en: [
        'Assuming enlightenment comes strictly from touring distant mountains and shrines',
        'Confusing sensory indulgence with effortless spiritual bliss',
        'Seeking occult powers solely to astonish spectators',
      ],
    },
    scenarioQuestion: {
      hi: 'दैनिक परिस्थिति: मन जब बाहरी शोर, मोबाइल या चिंता से अत्यधिक बिखरा महसूस हो, तो इस साखी के अनुसार शांत होने का सही अभ्यास क्या है?',
      pb: 'ਰੋਜ਼ਾਨਾ ਸਥਿਤੀ: ਜਦੋਂ ਮਨ ਬਾਹਰਲੇ ਸ਼ੋਰ ਤੇ ਚਿੰਤਾਵਾਂ ਵਿੱਚ ਬਹੁਤ ਖਿੰਡਿਆ ਮਹਿਸੂਸ ਹੋਵੇ, ਤਾਂ ਇਸ ਸਾਖੀ ਅਨੁਸਾਰ ਸ਼ਾਂਤ ਹੋਣ ਦਾ ਸਹੀ ਤਰੀਕਾ ਕੀ ਹੈ?',
      en: 'Real-Life Scenario: When your attention feels scattered across outer noise, screens, and worry, what practice applies this Sakhi?',
    },
    scenarioOptions: {
      hi: [
        'कुछ मिनट नेत्र बंद कर श्वास व ध्यान को अंतर्मुखी कर भीतर की निश्चल शांति में टिकना',
        'और अधिक उत्तेजक मनोरंजन देखकर मन का ध्यान दूसरी ओर मोड़ना',
        'किसी तीर्थ यात्रा की प्रतीक्षा करते हुए वर्तमान बेचैनी को बढ़ने देना',
        'केवल दर्शनशास्त्र की मोटी पुस्तकें पढ़कर बुद्धि को और व्यस्त करना',
      ],
      pb: [
        'ਕੁਝ ਮਿੰਟ ਅੱਖਾਂ ਬੰਦ ਕਰਕੇ ਸੁਆਸ ਤੇ ਸੁਰਤ ਨੂੰ ਅੰਦਰੂਨੀ ਸ਼ਾਂਤੀ ਵਿੱਚ ਟਿਕਾਉਣਾ',
        'ਹੋਰ ਜ਼ਿਆਦਾ ਮਨੋਰੰਜਨ ਤੇ ਸ਼ੋਰ ਵਿੱਚ ਮਨ ਨੂੰ ਉਲਝਾ ਲੈਣਾ',
        'ਕਿਸੇ ਲੰਬੀ ਯਾਤਰਾ ਦੀ ਉਡੀਕ ਕਰਦਿਆਂ ਬੇਚੈਨੀ ਵਧਣ ਦੇਣਾ',
        'ਕੇਵਲ ਤਰਕ-ਵਿਤਕਰ ਦੀਆਂ ਕਿਤਾਬਾਂ ਪੜ੍ਹ ਕੇ ਦਿਮਾਗ਼ ਹੋਰ ਭਾਰੀ ਕਰਨਾ',
      ],
      en: [
        'Sit quietly for a few minutes, gather breath and Surat inward, and rest in inner stillness',
        'Seek louder entertainment and distractions to drown out the anxiety',
        'Wait passively for a future holiday before caring about inner peace',
        'Overload the intellect with complex debates until exhausted',
      ],
    },
    causeQuestion: {
      hi: 'कारण और परिणाम: मृग के कस्तूरी को बाहर जंगल में खोजने की तरह मनुष्य जब ईश्वर को केवल बाहर ढूँढता है, तो क्या होता है?',
      pb: 'ਕਾਰਨ ਤੇ ਨਤੀਜਾ: ਕਸਤੂਰੀ ਨੂੰ ਬਾਹਰ ਜੰਗਲ ਵਿੱਚ ਲੱਭਦੇ ਹਿਰਨ ਵਾਂਗ ਜਦੋਂ ਮਨੁੱਖ ਪ੍ਰਭੂ ਨੂੰ ਕੇਵਲ ਬਾਹਰ ਲੱਭਦਾ ਹੈ, ਤਾਂ ਕੀ ਹੁੰਦਾ ਹੈ?',
      en: 'Cause & Effect: Like the musk-deer searching the forest outwardly, what happens when seekers look for Truth only externally?',
    },
    causeOptions: {
      hi: [
        'जीवन भर थकान और भटकाव बना रहता है जबकि अनमोल खजाना अपने ही घट में अनदेखा रह जाता है',
        'बाहरी स्थानों की गिनती पूरी होते ही स्वतः ही मोक्ष प्राप्त हो जाता है',
        'अंतःकरण की जाँच किए बिना ही मन सहज समाधि में चला जाता है',
        'इंद्रियों के बहिर्मुखी होने से सुरति अपने आप मजबूत हो जाती है',
      ],
      pb: [
        'ਸਾਰੀ ਉਮਰ ਥਕਾਵਟ ਤੇ ਭਟਕਣਾ ਬਣੀ ਰਹਿੰਦੀ ਹੈ ਜਦਕਿ ਅਨਮੋਲ ਖ਼ਜ਼ਾਨਾ ਆਪਣੇ ਅੰਦਰ ਹੀ ਅਣਦੇਖਿਆ ਰਹਿੰਦਾ ਹੈ',
        'ਬਾਹਰੀ ਥਾਵਾਂ ਦੀ ਗਿਣਤੀ ਪੂਰੀ ਹੁੰਦਿਆਂ ਹੀ ਮੁਕਤੀ ਮਿਲ ਜਾਂਦੀ ਹੈ',
        'ਅੰਦਰੂਨੀ ਪੜਚੋਲ ਤੋਂ ਬਿਨਾਂ ਹੀ ਸਹਿਜ ਸਮਾਧੀ ਲੱਗ ਜਾਂਦੀ ਹੈ',
        'ਬਾਹਰ ਭਟਕਣ ਨਾਲ ਸੁਰਤ ਆਪਣੇ ਆਪ ਮਜ਼ਬੂਤ ਹੋ ਜਾਂਦੀ ਹੈ',
      ],
      en: [
        'Endless exhaustion and wandering continue while the real treasure inside remains unseen',
        'Visiting a fixed number of places guarantees awakening automatically',
        'Meditation deepens effortlessly without turning inward',
        'Outward distraction strengthens spiritual focus on its own',
      ],
    },
    tattvaQuestion: {
      hi: 'कबीर पंथ तत्व ज्ञान: "सुरति-शब्द योग" में "हंस" या "मानसरोवर" किन आंतरिक वास्तविकताओं के प्रतीक हैं?',
      pb: 'ਕਬੀਰ ਪੰਥ ਤੱਤ-ਗਿਆਨ: "ਸੁਰਤ-ਸ਼ਬਦ ਯੋਗ" ਵਿੱਚ "ਹੰਸ" ਜਾਂ "ਮਾਨਸਰੋਵਰ" ਕਿਹੜੀਆਂ ਅੰਦਰੂਨੀ ਸੱਚਾਈਆਂ ਦੇ ਪ੍ਰਤੀਕ ਹਨ?',
      en: 'Kabir Panth Philosophy: In Surat-Shabad Yoga, what inner realities do "Hans" (swan) and "Mansarovar" represent?',
    },
    tattvaOptions: {
      hi: [
        'विवेकी जीवात्मा (हंस) जो नीर-क्षीर विवेक से घट के दसवें द्वार स्थित अमृत-सरोवर में शब्द-मोती चुगती है',
        'हिमालय पर्वत पर स्थित एक भौतिक झील और वहाँ के पक्षी मात्र',
        'केवल श्वास रोकने के कठिन शारीरिक व्यायाम की मुद्राएँ',
        'समाज से दूर बने हुए धार्मिक आश्रमों के भवन',
      ],
      pb: [
        'ਵਿਵੇਕੀ ਜੀਵਾਤਮਾ (ਹੰਸ) ਜੋ ਸੱਚ-ਝੂਠ ਦੇ ਵਿਵੇਕ ਨਾਲ ਅੰਦਰੂਨੀ ਦਸਵੇਂ ਦੁਆਰ ਦੇ ਅੰਮ੍ਰਿਤ-ਸਰੋਵਰ ਵਿੱਚ ਸ਼ਬਦ-ਮੋਤੀ ਚੁਗਦੀ ਹੈ',
        'ਕੇਵਲ ਪਹਾੜਾਂ ਵਿੱਚ ਸਥਿਤ ਕੋਈ ਭੌਤਿਕ ਝੀਲ ਅਤੇ ਪੰਛੀ',
        'ਕੇਵਲ ਸਰੀਰਕ ਕਸਰਤ ਅਤੇ ਪ੍ਰਾਣਾਯਾਮ ਦੇ ਆਸਣ',
        'ਬਾਹਰੀ ਆਸ਼ਰਮਾਂ ਦੀਆਂ ਇਮਾਰਤਾਂ',
      ],
      en: [
        'The discerning soul (Hans) nourished by inner Truth-nectar within the Tenth Door',
        'Strictly a geographical lake and literal migratory birds in the mountains',
        'Competitive breath-holding postures aimed at physical stamina',
        'External retreat buildings constructed far from towns',
      ],
    },
  },
  mind: {
    coreCorrect: {
      hi: 'चंचल और विकारी मन को साक्षी-भाव एवं विवेक से अनुशासित कर आंतरिक स्थिरता साधना',
      pb: 'ਚੰਚਲ ਤੇ ਵਿਕਾਰੀ ਮਨ ਨੂੰ ਸਾਖੀ-ਭਾਵ ਤੇ ਵਿਵੇਕ ਨਾਲ ਅਨੁਸ਼ਾਸਿਤ ਕਰਕੇ ਅੰਦਰੂਨੀ ਸਥਿਰਤਾ ਪ੍ਰਾਪਤ ਕਰਨੀ',
      en: 'Observing and disciplining the restless mind with discernment to establish inner steadiness',
    },
    coreDistractors: {
      hi: [
        'मन की हर चंचल इच्छा को बिना विचार किए तुरंत पूरा करते रहना',
        'मन पर नियंत्रण के लिए स्वयं को कठोर दंड और क्रोध से दबाना',
        'विवेक का त्याग कर केवल भाग्य भरोसे निष्क्रिय बैठे रहना',
      ],
      pb: [
        'ਮਨ ਦੀ ਹਰ ਚੰਚਲ ਇੱਛਾ ਨੂੰ ਬਿਨਾਂ ਸੋਚੇ-ਸਮਝੇ ਪੂਰਾ ਕਰਦੇ ਰਹਿਣਾ',
        'ਮਨ ਨੂੰ ਕਾਬੂ ਕਰਨ ਲਈ ਆਪਣੇ ਆਪ ਨੂੰ ਗੁੱਸੇ ਤੇ ਸਜ਼ਾ ਨਾਲ ਦਬਾਉਣਾ',
        'ਵਿਵੇਕ ਛੱਡ ਕੇ ਕੇਵਲ ਕਿਸਮਤ ਦੇ ਭਰੋਸੇ ਬੈਠੇ ਰਹਿਣਾ',
      ],
      en: [
        'Indulging every restless impulse of the mind without discernment',
        'Repressing every thought harshly through anger and self-punishment',
        'Giving up self-effort and blaming fate for mental habits',
      ],
    },
    scenarioQuestion: {
      hi: 'दैनिक परिस्थिति: किसी प्रतिकूल घटना पर मन में अचानक भय, ईर्ष्या या आवेश उठे, तो साधक को तुरंत क्या करना चाहिए?',
      pb: 'ਰੋਜ਼ਾਨਾ ਸਥਿਤੀ: ਕਿਸੇ ਉਲਟ ਹਾਲਾਤ ਵਿੱਚ ਮਨ ਅੰਦਰ ਅਚਾਨਕ ਡਰ, ਈਰਖਾ ਜਾਂ ਗੁੱਸਾ ਉੱਠੇ, ਤਾਂ ਸਾਧਕ ਨੂੰ ਤੁਰੰਤ ਕੀ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ?',
      en: 'Real-Life Scenario: When an unexpected setback sparks sudden anxiety, jealousy, or anger in the mind, what should the seeker do first?',
    },
    scenarioOptions: {
      hi: [
        'तत्काल प्रतिक्रिया देने से रुककर साक्षी भाव से उठती हुई वृत्ति को देखें और श्वास शांत करें',
        'आवेश के साथ उसी क्षण कठोर निर्णय लेकर बात को आगे बढ़ा दें',
        'अपनी गलती मानने के बजाय सारी दोषारोपण दूसरों पर मढ़ दें',
        'मन को बहलाने के लिए अनियंत्रित भोग या व्यर्थ विवाद में उलझ जाएँ',
      ],
      pb: [
        'ਤੁਰੰਤ ਪ੍ਰਤੀਕਿਰਿਆ ਦੇਣ ਤੋਂ ਰੁਕ ਕੇ ਸਾਖੀ-ਭਾਵ ਨਾਲ ਮਨ ਦੀ ਲਹਿਰ ਨੂੰ ਵੇਖੇ ਤੇ ਸੁਆਸ ਸ਼ਾਂਤ ਕਰੇ',
        'ਗੁੱਸੇ ਵਿੱਚ ਉਸੇ ਵੇਲੇ ਸਖ਼ਤ ਫ਼ੈਸਲਾ ਸੁਣਾ ਕੇ ਗੱਲ ਵਧਾ ਦੇਵੇ',
        'ਆਪਣੀ ਭੁੱਲ ਦੇਖਣ ਦੀ ਥਾਂ ਸਾਰਾ ਦੋਸ਼ ਦੂਜਿਆਂ ਤੇ ਮੜ੍ਹ ਦੇਵੇ',
        'ਮਨ ਬਹਿਲਾਉਣ ਲਈ ਗਲਤ ਆਦਤਾਂ ਜਾਂ ਬੇਅਰਥ ਬਹਿਸ ਵਿੱਚ ਪੈ ਜਾਵੇ',
      ],
      en: [
        'Pause before reacting, witness the mental wave calmly, and steady the breath',
        'Act immediately on impulse before the feeling passes',
        'Blame everyone around you rather than examining your own reaction',
        'Seek unhealthy distractions or arguments to mask the discomfort',
      ],
    },
    causeQuestion: {
      hi: 'कारण और परिणाम: अनियंत्रित मन को सुधारने के बजाय केवल बाहरी वेश व नियम बदलने का क्या परिणाम होता है?',
      pb: 'ਕਾਰਨ ਤੇ ਨਤੀਜਾ: ਬੇਲਗਾਮ ਮਨ ਨੂੰ ਸੁਧਾਰਨ ਦੀ ਥਾਂ ਕੇਵਲ ਬਾਹਰੀ ਪਹਿਰਾਵਾ ਤੇ ਨਿਯਮ ਬਦਲਣ ਦਾ ਕੀ ਨਤੀਜਾ ਹੁੰਦਾ ਹੈ?',
      en: 'Cause & Effect: What happens when someone changes outer robes or routines while leaving the restless mind untrained?',
    },
    causeOptions: {
      hi: [
        'मन भीतर से उन्हीं पुराने राग-द्वेष में फँसा रहता है और वास्तविक शांति नहीं मिलती',
        'केवल वस्त्र बदलने मात्र से मन के समस्त विकार समाप्त हो जाते हैं',
        'संसार की सारी चुनौतियाँ अपने आप अनुकूल हो जाती हैं',
        'दूसरों पर शासन करने की शक्ति प्राप्त हो जाती है',
      ],
      pb: [
        'ਮਨ ਅੰਦਰੋਂ ਉਨ੍ਹਾਂ ਹੀ ਪੁਰਾਣੇ ਰਾਗ-ਦਵੈਸ਼ ਵਿੱਚ ਫਸਿਆ ਰਹਿੰਦਾ ਹੈ ਤੇ ਸੱਚੀ ਸ਼ਾਂਤੀ ਨਹੀਂ ਮਿਲਦੀ',
        'ਕੇਵਲ ਕੱਪੜੇ ਬਦਲਣ ਨਾਲ ਹੀ ਮਨ ਦੇ ਸਾਰੇ ਵਿਕਾਰ ਮੁੱਕ ਜਾਂਦੇ ਹਨ',
        'ਸੰਸਾਰ ਦੀਆਂ ਸਾਰੀਆਂ ਮੁਸ਼ਕਲਾਂ ਆਪਣੇ ਆਪ ਦੂਰ ਹੋ ਜਾਂਦੀਆਂ ਹਨ',
        'ਦੂਜਿਆਂ ਉੱਤੇ ਰੋਹਬ ਜਮਾਉਣ ਦੀ ਸ਼ਕਤੀ ਮਿਲ ਜਾਂਦੀ ਹੈ',
      ],
      en: [
        'Inner habits of craving and resentment stay intact, blocking genuine peace',
        'Changing external attire automatically eliminates mental turbulence',
        'All life difficulties become effortless immediately',
        'One gains spiritual authority over other people automatically',
      ],
    },
    tattvaQuestion: {
      hi: 'कबीर पंथ तत्व ज्ञान: कबीर साहेब ने "मन के मते न चालिये" कहकर किस आंतरिक रूपांतरण का मार्ग बताया है?',
      pb: 'ਕਬੀਰ ਪੰਥ ਤੱਤ-ਗਿਆਨ: ਕਬੀਰ ਸਾਹੇਬ ਨੇ "ਮਨ ਕੇ ਮਤੇ ਨ ਚਾਲੀਏ" ਕਹਿ ਕੇ ਕਿਸ ਅੰਦਰੂਨੀ ਬਦਲਾਅ ਦਾ ਮਾਰਗ ਦੱਸਿਆ ਹੈ?',
      en: 'Kabir Panth Philosophy: By warning "Do not follow the whims of the mind," what inner transformation does Satguru Kabir Saheb teach?',
    },
    tattvaOptions: {
      hi: [
        'मन की चंचलता को पार कर विवेकपूर्ण सूरत (सद्गुरु के शब्द-प्रकाश) के मार्गदर्शन में चलना',
        'जीवन के किसी भी निर्णय में सोच-विचार करना पूरी तरह बंद कर देना',
        'केवल शारीरिक परिश्रम करके बौद्धिक चिंतन से दूर भागना',
        'इच्छाओं को दबाते हुए समाज से शत्रुता कर लेना',
      ],
      pb: [
        'ਮਨ ਦੀ ਚੰਚਲਤਾ ਤੋਂ ਉੱਪਰ ਉੱਠ ਕੇ ਵਿਵੇਕ ਅਤੇ ਸਤਿਗੁਰੂ ਦੇ ਸ਼ਬਦ-ਪ੍ਰਕਾਸ਼ ਅਨੁਸਾਰ ਚੱਲਣਾ',
        'ਜੀਵਨ ਦੇ ਕਿਸੇ ਵੀ ਫ਼ੈਸਲੇ ਵਿੱਚ ਸੋਚਣਾ-ਸਮਝਣਾ ਬਿਲਕੁਲ ਬੰਦ ਕਰ ਦੇਣਾ',
        'ਕੇਵਲ ਸਰੀਰਕ ਮਿਹਨਤ ਕਰਕੇ ਆਤਮ-ਚਿੰਤਨ ਤੋਂ ਭੱਜਣਾ',
        'ਇੱਛਾਵਾਂ ਨੂੰ ਦਬਾ ਕੇ ਸਮਾਜ ਨਾਲ ਨਫ਼ਰਤ ਕਰ ਲੈਣੀ',
      ],
      en: [
        'Rising above impulsive mental conditioning to walk by awakened discernment and the Satguru’s Word',
        'Stopping all thoughtful reflection when making life decisions',
        'Avoiding mental inquiry altogether in favor of mechanical routine',
        'Developing bitterness toward society while suppressing feelings',
      ],
    },
  },
};

function cleanSentence(raw: string): string {
  return (raw || '')
    .replace(/\s+/g, ' ')
    .replace(/[।.]\s*$/, '')
    .trim();
}

function generateDistractorFeedback(text: string, language: Language): string {
  const t = text.toLowerCase();
  if (/तीर्थ|तीरथ|मंदिर|कर्मकांड|यज्ञ|रस्म|पूजा|विधी|pilgrimage|ritual|temple|ceremon/.test(t)) {
    if (language === 'pb') return '✗ ਇਹ ਵਿਕਲਪ ਸਹੀ ਨਹੀਂ ਹੈ। ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਬਾਹਰੀ ਕਰਮਕਾਂਡਾਂ ਦੀ ਥਾਂ ਅੰਦਰੂਨੀ ਪਵਿੱਤਰਤਾ ਅਤੇ ਸਤਯ-ਸ਼ਬਦ ਦੀ ਸਾਧਨਾ ਉੱਤੇ ਜ਼ੋਰ ਦਿੰਦੇ ਹਨ।';
    if (language === 'en') return '✗ This option is incorrect. Satguru Kabir Saheb teaches that outer ceremonies cannot replace inner purification and the living Word.';
    return '✗ यह विकल्प सही नहीं है। सतगुरु कबीर साहेब बाह्य कर्मकांडों की बजाय अंतःकरण की शुद्धि और सत्य-शब्द की साधना पर बल देते हैं।';
  }
  if (/बहस|तर्क|शास्त्रार्थ|विवाद|कंठस्थ|वाद-विवाद|debate|intellectual|dispute|memoriz/.test(t)) {
    if (language === 'pb') return '✗ ਇਹ ਵਿਕਲਪ ਸਹੀ ਨਹੀਂ ਹੈ। ਕੇਵਲ ਕਿਤਾਬੀ ਬਹਿਸਬਾਜ਼ੀ ਹੰਕਾਰ ਵਧਾਉਂਦੀ ਹੈ, ਜਦਕਿ ਸੱਚ ਦੀ ਪ੍ਰਾਪਤੀ ਅਮਲ ਅਤੇ ਨਿਮਰਤਾ ਨਾਲ ਹੁੰਦੀ ਹੈ।';
    if (language === 'en') return '✗ This option is incorrect. Dry intellectual debate inflates the ego; spiritual realization is rooted in lived practice and humility.';
    return '✗ यह विकल्प सही नहीं है। कोरी किताबी बहस और तर्क से केवल अहंकार बढ़ता है; आत्म-कल्याण आचरण और मौन में सत्य को जीने से होता है।';
  }
  if (/कठोर|कड़वा|क्रोध|बदला|तीखा|लज्जित|निंदा|ਵੈਰ|ਕੌੜਾ|ਗੁੱਸਾ|harsh|retaliat|bitter|anger|revenge/.test(t)) {
    if (language === 'pb') return '✗ ਇਹ ਵਿਕਲਪ ਸਹੀ ਨਹੀਂ ਹੈ। ਕੌੜੇ ਬੋਲ ਜਾਂ ਬਦਲੇ ਦੀ ਭਾਵਨਾ ਅੰਦਰਲੇ ਹੰਕਾਰ ਨੂੰ ਜਗਾਉਂਦੀ ਹੈ; ਸਾਹੇਬ ਧੀਰਜ ਅਤੇ ਖਿਮਾ ਦਾ ਰਾਹ ਦੱਸਦੇ ਹਨ।';
    if (language === 'en') return '✗ This option is incorrect. Reacting with sharpness or malice feeds the inner adversary; Kabir Saheb counsels patience and forgiveness.';
    return '✗ यह विकल्प सही नहीं है। कटुता या बदले की भावना भीतर के अहंकार (शत्रु) को भड़काती है; कबीर साहेब धैर्य और क्षमा का मार्ग सिखाते हैं।';
  }
  if (/हठयोग|जंगल|एकांत|मौन व्रत|पलायन|ਭੱਜਣ|ਜੰਗਲ|austerit|retreat|silence|escapism/.test(t)) {
    if (language === 'pb') return '✗ ਇਹ ਵਿਕਲਪ ਸਹੀ ਨਹੀਂ ਹੈ। ਕਬੀਰ ਪੰਥ ਹਠ-ਯੋਗ ਜਾਂ ਭੱਜਣ ਦਾ ਸਮਰਥਨ ਨਹੀਂ ਕਰਦਾ, ਸਗੋਂ ਸਮਾਜ ਵਿੱਚ ਰਹਿੰਦਿਆਂ ਸਹਿਜ-ਸਾਧਨਾ ਸਿਖਾਉਂਦਾ ਹੈ।';
    if (language === 'en') return '✗ This option is incorrect. Kabir Panth does not advocate escapism or harsh bodily austerities, but Sahaj Sadhana in daily life.';
    return '✗ यह विकल्प सही नहीं है। कबीर पंथ हठयोग या पलायनवाद का समर्थन नहीं करता, बल्कि समाज और गृहस्थ में रहते हुए सहज-साधना सिखाता है।';
  }
  if (/धन|दौलत|संपत्ति|प्रतिष्ठा|मान-बड़ाई|ਸੰਪਤੀ|ਰੁਤਬਾ|wealth|material|possessions|reputation/.test(t)) {
    if (language === 'pb') return '✗ ਇਹ ਵਿਕਲਪ ਸਹੀ ਨਹੀਂ ਹੈ। ਨਾਸ਼ਵਾਨ ਧਨ-ਦੌਲਤ ਅਤੇ ਦੁਨਿਆਵੀ ਵਡਿਆਈ ਆਤਮਾ ਨੂੰ ਬੰਧਨਾਂ ਵਿੱਚ ਰੱਖਦੀ ਹੈ, ਮੁਕਤੀ ਨਹੀਂ ਦਿੰਦੀ।';
    if (language === 'en') return '✗ This option is incorrect. Fleeting wealth and social status anchor consciousness to worldly bondage rather than spiritual liberation.';
    return '✗ यह विकल्प सही नहीं है। नश्वर भौतिक संग्रह और मान-बड़ाई आत्मा को जन्म-मरण के बंधनों में ही बाँधते हैं, मुक्ति नहीं देते।';
  }
  if (/दोष|कमियाँ|गलतियाँ|ਟੋਕਦੇ|ਆਲੋਚਨਾ|fault|criticiz|flaw/.test(t)) {
    if (language === 'pb') return '✗ ਇਹ ਵਿਕਲਪ ਸਹੀ ਨਹੀਂ ਹੈ। ਦੂਜਿਆਂ ਦੇ ਨੁਕਸ ਕੱਢਣ ਨਾਲ ਆਪਣੀ ਸੁਰਤ ਵਿਗੜਦੀ ਹੈ; ਸਾਹੇਬ ਆਪਣੇ ਔਗੁਣ ਵੇਖਣ ਦੀ ਪ੍ਰੇਰਨਾ ਦਿੰਦੇ ਹਨ।';
    if (language === 'en') return '✗ This option is incorrect. Pointing out others\' flaws scatters spiritual focus; Kabir Saheb urges honest self-examination instead.';
    return '✗ यह विकल्प सही नहीं है। दूसरों के छिद्रान्वेषण से अपनी साधना खंडित होती है; साहेब स्वयं के दोष देखकर सुधारने की प्रेरणा देते हैं।';
  }
  if (language === 'pb') {
    return '✗ ਇਹ ਵਿਕਲਪ ਸਹੀ ਨਹੀਂ ਹੈ। ਇਹ ਸਾਖੀ ਦੇ ਮੂਲ ਭਾਵ ਅਤੇ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੇ ਸਿਧਾਂਤ ਦੇ ਉਲਟ ਹੈ।';
  } else if (language === 'en') {
    return '✗ This option is incorrect. It diverges from the core spiritual teaching and insight of this Sakhi.';
  } else {
    return '✗ यह विकल्प सही नहीं है। यह इस साखी के केंद्रीय आध्यात्मिक मर्म और सतगुरु के उपदेश के विपरीत है।';
  }
}

function wrapOptionsWithFeedback(
  optTexts: string[],
  correctIdx: number,
  explanation: string,
  language: Language
): { options: QuizOption[]; correctIndex: number; explanation: string } {
  const options = optTexts.map((text, idx) => {
    const isCorrect = idx === correctIdx;
    let feedback = '';
    if (isCorrect) {
      const correctPrefix =
        language === 'pb' ? '✓ ਸਹੀ ਉੱਤਰ! ' : language === 'en' ? '✓ Correct! ' : '✓ सही उत्तर! ';
      feedback = explanation.startsWith('✓') ? explanation : `${correctPrefix}${explanation}`;
    } else {
      feedback = generateDistractorFeedback(text, language);
    }
    return { text, isCorrect, feedback };
  });
  return { options, correctIndex: correctIdx, explanation };
}

/**
 * Builds 5 distinct, thoughtful, verse-specific MCQs covering all 5 dimensions:
 * 1. केंद्रीय जीवन संदेश (Core Practical Message)
 * 2. आध्यात्मिक एवं प्रतीकात्मक अर्थ (Symbolic / Inner Meaning)
 * 3. दैनिक व्यवहार एवं अनुशासन (Real-Life Application Scenario)
 * 4. कारण और परिणाम (Cause & Spiritual Effect)
 * 5. तत्व ज्ञान एवं आत्म-बोध (Deeper Kabir Panth Philosophy connected to the Anga)
 */
export function buildFiveDimensionQuiz(sakhi: Sakhi, language: Language): GeneratedQuizQuestion[] {
  const curated = CURATED_SAKHI_QUIZZES[sakhi.number];
  if (curated && curated.length >= 5) {
    const mapped: GeneratedQuizQuestion[] = curated.slice(0, 5).map((q: any, idx: number) => {
      const dims: GeneratedQuizQuestion['dimension'][] = [
        'core-message',
        'symbolic-meaning',
        'real-life-scenario',
        'cause-effect',
        'tattva-gyan',
      ];
      if (q.optionObjects && q.optionObjects[language]) {
        const opts: QuizOption[] = q.optionObjects[language];
        const correctIdx = opts.findIndex((o) => o.isCorrect);
        const resolvedCorrectIdx = correctIdx >= 0 ? correctIdx : 0;
        return {
          id: q.id,
          dimension: dims[idx] || 'core-message',
          angle: q.angle?.[language] || q.angle?.hi || dims[idx],
          question: q.question[language] || q.question.hi,
          options: opts,
          correctIndex: resolvedCorrectIdx,
          explanation: opts[resolvedCorrectIdx]?.feedback || '',
        };
      }
      const rawOpts = q.options[language] || q.options.hi;
      const expl = ensureSatguruKabirSaheb(q.explanation[language] || q.explanation.hi);
      const res = wrapOptionsWithFeedback(rawOpts, q.correctIndex ?? 0, expl, language);
      return {
        id: q.id,
        dimension: dims[idx] || 'core-message',
        angle: q.angle?.[language] || q.angle?.hi || dims[idx],
        question: q.question[language] || q.question.hi,
        options: res.options,
        correctIndex: res.correctIndex,
        explanation: res.explanation,
      };
    });
    return shuffleGeneratedQuiz(mapped);
  }

  const archetype = classifySakhiArchetype(sakhi);
  const pack = ARCHETYPE_PACKS[archetype];
  const verse = sakhi.text?.[language] || sakhi.text?.hi || '';
  const firstLine = verse.split('\n')[0]?.trim() || verse;
  const bhavarth = ensureSatguruKabirSaheb(sakhi.bhavarth?.[language] || sakhi.bhavarth?.hi || '');
  const category = sakhi.categoryTitle?.[language] || sakhi.categoryTitle?.hi || '';
  const words = sakhi.wordMeanings?.[language] || sakhi.wordMeanings?.hi || [];

  // Dimension 1: Core Practical Message (केंद्रीय जीवन संदेश)
  const coreOpt0 = pack.coreCorrect[language] || pack.coreCorrect.hi;
  const coreDistractors = pack.coreDistractors[language] || pack.coreDistractors.hi;
  const res1 = wrapOptionsWithFeedback(
    [coreOpt0, coreDistractors[0], coreDistractors[1], coreDistractors[2]],
    0,
    bhavarth || coreOpt0,
    language
  );
  const q1: GeneratedQuizQuestion = {
    id: `q-${sakhi.id || sakhi.number}-core`,
    dimension: 'core-message',
    angle: language === 'pb' ? 'ਮੁੱਖ ਸੰਦੇਸ਼' : language === 'en' ? 'Core Message' : 'केंद्रीय जीवन संदेश',
    question:
      language === 'pb'
        ? `ਸਾਖੀ #${sakhi.number} ("${firstLine}") ਦਾ ਮੁੱਖ ਵਿਵਹਾਰਕ ਜੀਵਨ ਸੰਦੇਸ਼ ਕੀ ਹੈ?`
        : language === 'en'
        ? `What is the central practical life message of Sakhi #${sakhi.number} ("${firstLine}")?`
        : `साखी #${sakhi.number} ("${firstLine}") का केंद्रीय जीवन संदेश क्या है?`,
    options: res1.options,
    correctIndex: res1.correctIndex,
    explanation: res1.explanation,
  };

  // Dimension 2: Symbolic / Inner Meaning (आध्यात्मिक एवं प्रतीकात्मक अर्थ)
  let res2: { options: QuizOption[]; correctIndex: number; explanation: string };
  let q2Text: string;
  const primaryWord = words[0];
  if (primaryWord && primaryWord.word && primaryWord.meaning) {
    const siblingMeanings = words
      .slice(1)
      .map((w) => cleanSentence(w.meaning))
      .filter((m) => m && m !== cleanSentence(primaryWord.meaning));

    const symbolicDistractorPool =
      language === 'pb'
        ? [
            'ਕੇਵਲ ਬਾਹਰੀ ਦਿਖਾਵੇ ਦੀ ਰਸਮ ਜੋ ਅਸਲ ਅਰਥ ਤੋਂ ਸੱਖਣੀ ਹੋਵੇ',
            'ਸੰਸਾਰਿਕ ਸੁੱਖ-ਸਹੂਲਤਾਂ ਅਤੇ ਪਦਾਰਥ ਇਕੱਠੇ ਕਰਨ ਦੀ ਲਾਲਸਾ',
            'ਅਨੁਭਵ ਤੋਂ ਬਿਨਾਂ ਕੀਤੀ ਗਈ ਸੁੱਕੀ ਕਿਤਾਬੀ ਬਹਿਸਬਾਜ਼ੀ',
          ]
        : language === 'en'
        ? [
            'A purely outward ceremony devoid of inner contemplation',
            'Worldly ambition focused on status and possessions',
            'Dry intellectual debate lacking lived humility',
          ]
        : [
            'केवल बाहरी रस्म जो अंतर्मन की जागृति से रहित हो',
            'संसारिक मान-प्रतिष्ठा एवं भौतिक संग्रह की लालसा',
            'स्व-अनुभव से हीन केवल कोरी किताबी बहस',
          ];

    const rawOpts2 = [cleanSentence(primaryWord.meaning)];
    for (const sm of siblingMeanings) {
      if (rawOpts2.length < 4 && !rawOpts2.includes(sm)) rawOpts2.push(sm);
    }
    for (const d of symbolicDistractorPool) {
      if (rawOpts2.length < 4 && !rawOpts2.includes(d)) rawOpts2.push(d);
    }
    const finalRaw2 = rawOpts2.slice(0, 4);
    const expl2 =
      language === 'pb'
        ? `ਇਸ ਪਾਵਨ ਸਾਖੀ ਵਿੱਚ "${primaryWord.word}" ਦਾ ਭਾਵ "${primaryWord.meaning}" ਹੈ। ${bhavarth}`
        : language === 'en'
        ? `In this verse, "${primaryWord.word}" signifies "${primaryWord.meaning}". ${bhavarth}`
        : `इस साखी में "${primaryWord.word}" से तात्पर्य "${primaryWord.meaning}" है। ${bhavarth}`;
    res2 = wrapOptionsWithFeedback(finalRaw2, 0, expl2, language);
    q2Text =
      language === 'pb'
        ? `ਸਾਖੀ #${sakhi.number} ਦੇ ਪ੍ਰਸੰਗ ਵਿੱਚ "${primaryWord.word}" ਦਾ ਆਤਮਿਕ ਤੇ ਸਟੀਕ ਭਾਵ ਕੀ ਹੈ?`
        : language === 'en'
        ? `Within the spiritual context of Sakhi #${sakhi.number}, what does "${primaryWord.word}" signify?`
        : `साखी #${sakhi.number} के आध्यात्मिक संदर्भ में "${primaryWord.word}" का सटीक एवं प्रतीकात्मक अर्थ क्या है?`;
  } else {
    const contextHint = cleanSentence(sakhi.contextNote?.[language] || sakhi.contextNote?.hi || '');
    const rightSymbolic =
      contextHint && contextHint.length >= 24 && contextHint !== cleanSentence(coreOpt0)
        ? contextHint
        : cleanSentence(bhavarth) || cleanSentence(pack.causeOptions[language][0]);
    const symDistractors =
      language === 'pb'
        ? [
            'ਕੇਵਲ ਬਾਹਰਲੇ ਤੀਰਥਾਂ ਜਾਂ ਰਸਮਾਂ ਰਾਹੀਂ ਮਨ ਨੂੰ ਪਰਚਾਉਣਾ',
            'ਸੰਸਾਰਿਕ ਵਿਖਾਵੇ ਲਈ ਕਠੋਰ ਤੇ ਤਿੱਖੇ ਬੋਲ ਵਰਤਣੇ',
            'ਆਪਣੇ ਅੰਦਰ ਝਾਕਣ ਦੀ ਥਾਂ ਦੂਜਿਆਂ ਵਿੱਚ ਕਮੀਆਂ ਲੱਭਣੀਆਂ',
          ]
        : language === 'en'
        ? [
            'Pacifying the restless mind solely through outer ceremonies',
            'Asserting superiority over others through harsh speech',
            'Searching externally for faults while neglecting inner stillness',
          ]
        : [
            'केवल बाहरी कर्मकांडों से मन को क्षणिक संतुष्टि देना',
            'दूसरों पर अधिकार जताने हेतु कठोर वाणी का प्रयोग करना',
            'अपने अंतर्मन को सुधारने की बजाय बाहर दोष खोजते रहना',
          ];
    res2 = wrapOptionsWithFeedback(
      [rightSymbolic, symDistractors[0], symDistractors[1], symDistractors[2]],
      0,
      bhavarth || rightSymbolic,
      language
    );
    q2Text =
      language === 'pb'
        ? `"${firstLine}" — ਇਸ ਪੰਕਤੀ ਦੇ ਪ੍ਰਤੀਕਾਂ ਦਾ ਅੰਦਰੂਨੀ ਭੇਦ ਕੀ ਦਰਸਾਉਂਦਾ ਹੈ?`
        : language === 'en'
        ? `What inner symbolic meaning is revealed through "${firstLine}"?`
        : `"${firstLine}" — इस पंक्ति के प्रतीकों का आंतरिक रहस्य क्या दर्शाता है?`;
  }
  const q2: GeneratedQuizQuestion = {
    id: `q-${sakhi.id || sakhi.number}-symbolic`,
    dimension: 'symbolic-meaning',
    angle: language === 'pb' ? 'ਪ੍ਰਤੀਕਾਤਮਕ ਅਰਥ' : language === 'en' ? 'Symbolic Meaning' : 'प्रतीकात्मक अर्थ',
    question: q2Text,
    options: res2.options,
    correctIndex: res2.correctIndex,
    explanation: res2.explanation,
  };

  // Dimension 3: Real-Life Application Scenario (दैनिक व्यवहार एवं अनुशासन)
  const scOpts = pack.scenarioOptions[language] || pack.scenarioOptions.hi;
  const res3 = wrapOptionsWithFeedback(
    [scOpts[0], scOpts[1], scOpts[2], scOpts[3]],
    0,
    sakhi.practicalApplication?.[language] || sakhi.practicalApplication?.hi || bhavarth || scOpts[0],
    language
  );
  const q3: GeneratedQuizQuestion = {
    id: `q-${sakhi.id || sakhi.number}-scenario`,
    dimension: 'real-life-scenario',
    angle: language === 'pb' ? 'ਵਿਹਾਰਕ ਆਚਰਣ' : language === 'en' ? 'Real-Life Application' : 'दैनिक व्यवहार',
    question: pack.scenarioQuestion[language] || pack.scenarioQuestion.hi,
    options: res3.options,
    correctIndex: res3.correctIndex,
    explanation: res3.explanation,
  };

  // Dimension 4: Cause & Spiritual Effect (कारण और परिणाम)
  const ceOpts = pack.causeOptions[language] || pack.causeOptions.hi;
  const res4 = wrapOptionsWithFeedback(
    [ceOpts[0], ceOpts[1], ceOpts[2], ceOpts[3]],
    0,
    bhavarth || ceOpts[0],
    language
  );
  const q4: GeneratedQuizQuestion = {
    id: `q-${sakhi.id || sakhi.number}-cause`,
    dimension: 'cause-effect',
    angle: language === 'pb' ? 'ਕਾਰਨ ਤੇ ਨਤੀਜਾ' : language === 'en' ? 'Cause & Consequence' : 'कारण और परिणाम',
    question: pack.causeQuestion[language] || pack.causeQuestion.hi,
    options: res4.options,
    correctIndex: res4.correctIndex,
    explanation: res4.explanation,
  };

  // Dimension 5: Deeper Kabir Panth Philosophy connected to Anga (तत्व ज्ञान एवं आत्म-बोध)
  const tvOpts = pack.tattvaOptions[language] || pack.tattvaOptions.hi;
  const res5 = wrapOptionsWithFeedback(
    [tvOpts[0], tvOpts[1], tvOpts[2], tvOpts[3]],
    0,
    sakhi.contemplation?.[language] || sakhi.contemplation?.hi || bhavarth || tvOpts[0],
    language
  );
  const q5: GeneratedQuizQuestion = {
    id: `q-${sakhi.id || sakhi.number}-tattva`,
    dimension: 'tattva-gyan',
    angle: language === 'pb' ? 'ਤੱਤ ਗਿਆਨ' : language === 'en' ? 'Tattva Gyan' : 'तत्व ज्ञान',
    question:
      category
        ? language === 'pb'
          ? `'${category}' ਦੇ ਤੱਤ-ਗਿਆਨ ਅਨੁਸਾਰ: ${pack.tattvaQuestion.pb}`
          : language === 'en'
          ? `Connected to '${category}': ${pack.tattvaQuestion.en}`
          : `'${category}' के तत्व-ज्ञान के संदर्भ में: ${pack.tattvaQuestion.hi}`
        : pack.tattvaQuestion[language] || pack.tattvaQuestion.hi,
    options: res5.options,
    correctIndex: res5.correctIndex,
    explanation: res5.explanation,
  };

  return shuffleGeneratedQuiz([q1, q2, q3, q4, q5]);
}
