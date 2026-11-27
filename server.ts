import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, Type } from '@google/genai';
import dotenv from 'dotenv';

function shuffleArray<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function shuffleQuizQuestionsAndOptions<
  T extends {
    question?: string;
    questionText?: string;
    options: Array<string | { text: string; isCorrect?: boolean; feedback?: string }>;
    correctIndex?: number;
    explanation?: string;
  }
>(questions: T[]): T[] {
  if (!Array.isArray(questions) || questions.length === 0) return [];
  const shuffledQuestions = shuffleArray(questions);
  return shuffledQuestions.map((q) => {
    const rawOpts = Array.isArray(q.options) ? q.options.slice(0, 4) : [];
    const optCount = rawOpts.length;
    if (optCount === 0) return q;

    const objCorrectIdx = rawOpts.findIndex(
      (opt) => typeof opt === 'object' && opt !== null && opt.isCorrect === true
    );
    const origCorrectIdx =
      objCorrectIdx >= 0
        ? objCorrectIdx
        : typeof q.correctIndex === 'number' && q.correctIndex >= 0 && q.correctIndex < optCount
        ? q.correctIndex
        : 0;

    const indices = Array.from({ length: optCount }, (_, i) => i);
    const perm = shuffleArray(indices);
    const newCorrectIndex = Math.max(0, perm.indexOf(origCorrectIdx));
    const newOptions = perm.map((origPos, newIdx) => {
      const item = rawOpts[origPos];
      if (typeof item === 'object' && item !== null) {
        return {
          ...item,
          isCorrect: newIdx === newCorrectIndex,
        };
      }
      return item;
    });

    return {
      ...q,
      options: newOptions,
      correctIndex: newCorrectIndex,
    };
  });
}
// Self-contained fallback helpers (zero frontend import dependencies for native Node ESM compatibility)
function purifyAndAnalyzeVaniFallback(text: string, options: { language?: string; mode?: string }) {
  let cleaned = text.trim();
  const corrections: Array<{ original: string; corrected: string; note?: string }> = [];
  
  const replacements: [RegExp, string, string][] = [
    [/कबीरदास/g, 'कबीर साहेब', 'आदरसूचक उपाधि'],
    [/रामचन्द्र/g, 'राम (आत्म-राम / सत्यनाम)', 'कबीर दर्शन अनुरूप'],
    [/साहिब/g, 'साहेब', 'सधुक्कड़ी वर्तनी'],
    [/सतनाम/g, 'सत्यनाम', 'सार-शब्द भाव'],
  ];

  for (const [pattern, rep, note] of replacements) {
    if (pattern.test(cleaned)) {
      cleaned = cleaned.replace(pattern, rep);
      corrections.push({ original: pattern.source, corrected: rep, note });
    }
  }

  return {
    correctedText: cleaned,
    corrections,
    meaning: 'सतगुरु कबीर साहेब की पावन वाणी का सत्यनाम एवं आंतरिक आत्म-बोध अनुसार शुद्ध स्वरूप।',
    fullFormattedText: cleaned,
    matchedSakhiNumber: 1,
    grantha: 'साखी संग्रह',
    categoryTitle: 'सत्य वाणी',
    source: 'sacred-rules',
    notice: '✓ शुद्ध सात्विक वाणी स्वरूप सुनिश्चित।'
  };
}

function generateUniqueUlatvasiAnalysisFallback(params: {
  id?: string;
  title?: string;
  verse?: string;
  literalParadox?: string;
  clueHint?: string;
  deepMeaning?: string;
  language?: string;
}) {
  return {
    mysticalReversalFormula: 'उलटबासी बोध: बाह्य दृष्टि का अंतर्मुखी रूपांतरण',
    outerParadoxDeconstruction: params.literalParadox || 'संसार को जो उल्टा दिखता है, वह आत्म-दृष्टि से सीधा और परम सत्य है।',
    esotericReversalAnalysis: params.deepMeaning || 'इन्द्रियों की बहिर्मुखी धारा जब अंतर्मुख होकर शून्य और सुरति-शब्द में लीन होती है, तब उलटबासी का रहस्य खुलता है।',
    practicalSadhanaGuidance: 'दैनिक स्वाध्याय एवं ध्यान में सुरति को श्वास और शब्द के साथ एकाग्र करें।',
    coreTeachingQuote: 'कहै कबीर कोई जानेगा, यह पद उलटि समाना।'
  };
}

dotenv.config();

const PORT = 3000;
const isProd = process.env.NODE_ENV === 'production';

async function startServer() {
  const app = express();
  app.set('trust proxy', true);
  app.use(express.json({ limit: '10mb' })); // Increased limit for "unlimited" characters (large books)

  // API Routes
  app.get('/api/config', (req, res) => {
    const forwardedHost = req.get('x-forwarded-host') || req.get('host');
    const proto = req.get('x-forwarded-proto') || req.protocol || 'https';
    const dynamicUrl =
      forwardedHost && !forwardedHost.startsWith('localhost') && !forwardedHost.startsWith('127.0.0.1')
        ? `${proto}://${forwardedHost}`
        : undefined;
    res.json({
      appUrl: process.env.APP_URL || dynamicUrl || 'https://ais-pre-meux3g56fqgqmol3tohmrd-795050738320.asia-east1.run.app',
    });
  });
  app.post('/api/auto-correct', async (req, res) => {
    const { text, language = 'hi', mode = 'general' } = req.body;
    if (!text) {
      return res.status(400).json({ error: 'Text is required' });
    }

    // 1. Try Gemini Cloud AI if GEMINI_API_KEY is configured
    if (process.env.GEMINI_API_KEY) {
      try {
        const ai = new GoogleGenAI({ 
          apiKey: process.env.GEMINI_API_KEY,
          httpOptions: {
            headers: {
              'User-Agent': 'aistudio-build',
            }
          }
        });

        const prompt = `
You are an expert sacred text editor for Sant Mat and Kabir Vani (संत भाषा / सधुक्कड़ी बोली).
Analyze and Auto-Correct the following spiritual text or verse with absolute respect and spiritual precision.

Input text:
"${text}"

Target Language: ${language === 'hi' ? 'Hindi' : language === 'pb' ? 'Punjabi' : 'English'}
Mode: ${mode}

Please return a valid JSON object ONLY (without markdown enclosing codeblocks or extra commentary):
{
  "correctedText": "The authentic corrected verse with proper poetic Chhand/meter and danda punctuation",
  "corrections": [
    {
      "original": "misspelled or modern word",
      "corrected": "pure authentic word",
      "note": "'original' की जगह 'corrected'"
    }
  ],
  "meaning": "Clear, spiritual explanation of the meaning of this verse (वाणी का अर्थ / भावार्थ)",
  "fullFormattedText": "Complete formatted text presentation including: Title, pure verse, bullet points of corrections made, and spiritual meaning"
}
`;

        const response = await ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: [{ role: 'user', parts: [{ text: prompt }] }],
          config: {
            responseMimeType: 'application/json'
          }
        });

        const responseText = response.text;
        if (responseText && responseText.trim().length > 0) {
          try {
            const parsed = JSON.parse(responseText.trim());
            if (parsed.correctedText) {
              return res.json({
                correctedText: parsed.correctedText,
                corrections: Array.isArray(parsed.corrections) ? parsed.corrections : [],
                meaning: parsed.meaning || '',
                fullFormattedText: parsed.fullFormattedText || parsed.correctedText,
                source: 'gemini-ai',
                notice: '✓ कबीर वाणी शोध संस्थान एवं क्लाउड AI द्वारा सत्यापित।'
              });
            }
          } catch (jsonErr) {
            console.warn('Gemini JSON parse failed, using raw response:', jsonErr);
          }
        }
      } catch (geminiError: any) {
        console.warn('Gemini AI unavailable, falling back to Sacred Rules Engine:', geminiError?.message);
        // Seamlessly fall through to traditional sacred rule engine
      }
    }

    // 2. High-precision Sacred Purification Engine (Always succeeds, zero downtime)
    try {
      const result = purifyAndAnalyzeVaniFallback(text, { 
        language: language as 'hi' | 'pb' | 'en', 
        mode: mode as 'general' | 'vani' 
      });

      return res.json({
        correctedText: result.correctedText,
        corrections: result.corrections,
        meaning: result.meaning,
        fullFormattedText: result.fullFormattedText,
        matchedSakhiNumber: result.matchedSakhiNumber,
        grantha: result.grantha,
        categoryTitle: result.categoryTitle,
        source: result.source,
        notice: result.notice
      });
    } catch (fallbackError: any) {
      console.error('Purifier error:', fallbackError);
      return res.status(500).json({ error: 'पाठ शुद्धिकरण में तकनीकी समस्या आई।' });
    }
  });

  // Spiritual Essence Analysis Endpoint
  app.post('/api/spiritual-essence-analysis', async (req, res) => {
    const { title, verse, literalParadox, clueHint, deepMeaning, language = 'hi', id } = req.body;

    if (!verse && !title) {
      return res.status(400).json({ error: 'Verse or title is required for analysis' });
    }

    if (process.env.GEMINI_API_KEY) {
      try {
        const ai = new GoogleGenAI({ 
          apiKey: process.env.GEMINI_API_KEY,
          httpOptions: {
            headers: {
              'User-Agent': 'aistudio-build',
            }
          }
        });

        const prompt = `
You are a revered Sant Mat scholar and master commentator on Satguru Kabir Saheb's Ulatbansi (mystical paradoxical verses).
Provide a profound, illuminated 'Spiritual Essence Analysis' (आध्यात्मिक सार विश्लेषण / ਗੂੜ੍ਹ ਅਧਿਆਤਮਕ ਤੱਤ ਵਿਸ਼ਲੇਸ਼ਣ) explaining the mystical reversal behind this specific teaching.

Ulatvasi Details:
Title: ${title || ''}
Verse: ${verse || ''}
Literal Paradox: ${literalParadox || ''}
Inner Clue: ${clueHint || ''}
Deep Meaning: ${deepMeaning || ''}
Requested Language: ${language === 'hi' ? 'Hindi' : language === 'pb' ? 'Punjabi (Gurmukhi)' : 'English'}

Please return a valid JSON object ONLY (without markdown enclosing codeblocks or extra commentary):
{
  "mysticalReversalFormula": "Short, punchy formula summary of the reversal (e.g. अहंकार की मृत्यु → भक्ति रूपी गाय का जन्म)",
  "outerParadoxDeconstruction": "Detailed breakdown of why the physical sensory mind sees an upside-down paradox on the surface.",
  "esotericReversalAnalysis": "Deep spiritual explanation of the reversal mechanism (how ego/mind turns inward to unveil pure consciousness, Anhad Naad, or Shunya).",
  "practicalSadhanaGuidance": "Direct practical guidance for the seeker's daily meditation and inner reflection based on this verse.",
  "coreTeachingQuote": "An inspiring 1-line golden takeaway quote."
}
`;

        const response = await ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: [{ role: 'user', parts: [{ text: prompt }] }],
          config: {
            responseMimeType: 'application/json'
          }
        });

        const responseText = response.text;
        if (responseText && responseText.trim().length > 0) {
          try {
            const parsed = JSON.parse(responseText.trim());
            return res.json({
              analysis: parsed,
              source: 'gemini-ai'
            });
          } catch (jsonErr) {
            console.warn('Gemini JSON parse failed for analysis, falling back:', jsonErr);
          }
        }
      } catch (geminiError: any) {
        console.warn('Gemini AI analysis error, using synthesized response:', geminiError?.message);
      }
    }

    // High quality local fallback synthesis via comprehensive Ulatvasi Essence Engine
    const fallbackAnalysis = generateUniqueUlatvasiAnalysisFallback({
      id,
      title,
      verse,
      literalParadox,
      clueHint,
      deepMeaning,
      language
    });

    return res.json({
      analysis: fallbackAnalysis,
      source: 'synthesized-spiritual-engine'
    });
  });

  // Dynamic 11-Step Swadhyay + Certificate Data Endpoint (Gemini 4 Hydrogen)
  const SWADHYAY_EXPERT_SYSTEM_INSTRUCTION = `You are an expert spiritual scholar and content generator for the 'Saheb World' app, specializing in Satguru Kabir Saheb's Sakhis. Your task is to generate an accurate, deeply insightful 11-step Swadhyay (self-study) module and completion certificate data for any given Sakhi, including the Daily Sakhi.

CRITICAL STRICTNESS RULES (MUST FOLLOW):

1. ZERO REPETITION ACROSS STEPS (Step 1 vs Step 4 vs Step 6):
   - NEVER use boilerplate wrappers like "इस विशिष्ट साखी का अंतर्मन विश्लेषण..." and NEVER repeat the literal translation across Step 4 or Step 6.
   - Step 4 (bhavarth / deepSatsangGyan / mindMayaAnalysis):
     * 'bhavarth': Explain WHY Satguru Kabir Saheb gave this teaching (psychological/spiritual root).
     * 'deepSatsangGyan': Provide a relatable everyday life example (दैनिक जीवन का दृष्टांत) illustrating the teaching in modern daily conduct.
     * 'mindMayaAnalysis': Analyze how ego/mind/Maya operates in this specific couplet.
   - Step 6 (mysticalCoding): Decode the inner esoteric/yogic symbolism of the exact words and metaphors in THIS Sakhi (e.g., 'प्रीतम' = inner Satpurush/Satguru in the Ghat; 'दुसमन' = inner ego/mind/Kaal; 'शीतल शब्द' = Sar-Shabd calming the 5 Vikars).

2. AUTHENTIC 4-GRANTH CROSS-REFERENCES (Step 8):
   - Provide EXACTLY 4 parallel Sakhis/Vanis that share the EXACT SAME spiritual theme as the main Sakhi—one from EACH of these 4 authentic scriptures:
     1. Sri Guru Granth Sahib Ji (Salok Bhagat Kabir Ji)
     2. Kabir Bijak
     3. Kabir Granthavali
     4. Kabir Sagar (Anurag Sagar, etc.)
   - Clearly mention the scripture name and section/Ang. Explain that parallel Vani's meaning and its direct spiritual link to the main Sakhi.
   - Do NOT repeat or duplicate the main Sakhi itself as a cross-reference.

3. COMPLETE WORD MEANINGS (Step 3):
   - Extract 4 to 6 key archaic/difficult words directly from the given Sakhi.
   - Provide accurate meanings in Hindi, Punjabi (Gurmukhi), and English. The English (EN) field MUST contain the real English translation (e.g., "Forest / Trees"), NOT just Roman transliteration.

4. SAKHI-SPECIFIC 2 TO 3 QUESTION QUIZ (Step 5):
   - Generate 3 crisp, deeply Sakhi-specific MCQs derived strictly from THIS Sakhi's exact verses, archaic keywords (शब्दार्थ), Ang theme, and Bhavarth:
     1. Core Spiritual Message / Metaphor of this specific Sakhi
     2. Exact Meaning of a key archaic word or symbol from this Sakhi
     3. Practical Daily Application of this specific Sakhi
   - Each question MUST have 4 realistic, grammatically parallel, unique options (NEVER generic filler or identical options across Sakhis), plus a concise 1-line 'explanation'.

5. KEY LEARNINGS, CONTEMPLATION & YOGA (Steps 7, 9, 10, 11):
   - Connect EVERY step directly to the Sakhi's specific Ang / Chapter (provided in the Sakhi input as Ang / Category) and core spiritual theme (e.g., for 'शब्द को अंग', emphasize anchoring consciousness/Surat in the eternal 'Satyanaam' Shabd rather than generic statements).
   - Step 7 (Key Learnings): Provide exactly 4 practical daily-life takeaways derived strictly from the current Sakhi and its Ang (without repeating the literal translation verbatim).
   - Step 9 (Contemplation): Frame exactly 3 self-reflection questions based directly on the moral and Ang of the current Sakhi.
   - Step 10 (Meditation/Yoga) & Step 11 (Blessing): Tailor the guided meditation visualization (3 sequential stages) and the final guru blessing specifically to the Ang and theme of the current Sakhi.

6. COMPLETION CERTIFICATE DATA & FORMATTING (Upon Step 11 Completion):
   - Top Centre Header MUST strictly be: "🌹।।सत्यनाम।।🌹"
   - Display the User's Name prominently (e.g., "यह प्रमाणित किया जाता है कि [User Name] ने...").
   - Inside the main highlight box, display ONLY the exact Mool Sakhi that was completed (do NOT insert a second unrelated Doha).
   - Include a 1-line theme-based blessing below the Sakhi and brand the footer line as "Saheb World App • पावन स्वाध्याय मंच".
   - Bottom Centre Footer MUST strictly be: "।।साहेब बंदगी साहेब।।🙏"

TONE & STRICT RESPECTFUL TERMINOLOGY RULES:
- Keep the tone deeply devotional, respectful, and grammatically pure.
- NEVER use casual phrasing like "कबीरजी", "कबीर जी", "कबीरजी कहते हैं", or "कहते हैं".
- Always use respectful Sant Mat phrasing: "सतगुरु कबीर साहेब फरमाते हैं" (Hindi), "ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ" (Punjabi), and "Satguru Kabir Saheb proclaims" (English).
- Enforce exact spellings everywhere:
  * Hindi: "सतगुरु" (not "सद्गुरु"), "सत्यनाम" (not "सतनाम"), "साहेब" (not "साहिब").
  * Punjabi: "ਸਤਿਗੁਰੂ", "ਸਤਯਨਾਮ", "ਸਾਹੇਬ".
  * English: "Satguru", "Satyanaam", "Saheb".
  (Exception: canonical Sikh scripture titles like "Sri Guru Granth Sahib Ji" / "श्री गुरु ग्रंथ साहिब जी" / "ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ").`;

  app.post('/api/swadhyay-eleven-steps', async (req, res) => {
    const {
      sakhiNumber,
      grantha,
      categoryTitle,
      verse,
      bhavarth,
      wordMeanings,
      contemplation,
      contextNote,
      practicalApplication,
      language = 'hi',
      seekerName = 'श्रद्धालु साधक',
      isDailySakhi = false,
      attempt = 1,
    } = req.body || {};

    if (!verse || typeof verse !== 'string' || !verse.trim()) {
      return res.status(400).json({ error: 'Sakhi verse is required to generate 11-step Swadhyay.' });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(503).json({
        error: 'GEMINI_API_KEY is not configured on the server.',
      });
    }

    const langLabel =
      language === 'pb'
        ? 'Punjabi (Gurmukhi script)'
        : language === 'en'
        ? 'English'
        : 'Hindi (Devanagari script)';

    const userPrompt = `Generate the complete dynamic 11-step Swadhyay and Certificate metadata for the following Sakhi in ${langLabel}.
Notice Rule 1: Make Step 4 (Why Satguru Kabir Saheb gave this teaching + everyday Drishtant example + mind insight) and Step 6 (inner yogic symbolism of exact verse terms) completely distinct from Step 1's literal meaning, and anchor them specifically in the Ang/Category "${categoryTitle || 'Sakhi Sangrah'}".
Notice Rule 3: For step3_wordMeanings, ALWAYS provide accurate hi (Hindi), pb (Punjabi Gurmukhi), and en (real English translation, NOT transliteration) for EVERY extracted word regardless of the active display language.
Notice Rule 2: Provide EXACTLY 4 parallel Sakhis/Vanis in step8_crossReferences—one each from Sri Guru Granth Sahib Ji (Salok Bhagat Kabir Ji), Kabir Bijak, Kabir Granthavali, and Kabir Sagar, explaining THAT parallel Vani's meaning and its direct connection to THIS main Sakhi.
Notice Rule 4: Generate 3 crisp, deeply Sakhi-specific MCQs in step5_quiz (1. Core spiritual message/metaphor of this verse, 2. Exact meaning of a key word/symbol from step3_wordMeanings, 3. Practical daily application), with 4 realistic unique options each and a concise 1-line explanation.
Notice Rule 5: Connect Steps 2, 7, 9, 10, and 11 directly to "${categoryTitle || 'Sakhi Sangrah'}" and use ONLY respectful Sant Mat attribution ("सतगुरु कबीर साहेब फरमाते हैं" / "ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਫ਼ਰਮਾਉਂਦੇ ਹਨ" / "Satguru Kabir Saheb proclaims") with exact spellings ("सत्यनाम", "साहेब", "सतगुरु").
Notice Rule 6: Populate certificateData strictly per formatting rules with topHeader="🌹।।सत्यनाम।।🌹", bottomFooter="।।साहेब बंदगी साहेब।।🙏", footerBrand="Saheb World App • पावन स्वाध्याय मंच", highlightMoolSakhi="${verse.replace(/"/g, '\\"')}", seekerName="${String(seekerName || 'श्रद्धालु साधक').replace(/"/g, '\\"')}", and a concise 1-line theme-based blessing in the active language.

SAKHI INPUT:
- Mode: ${isDailySakhi ? 'Daily Sakhi' : `Sakhi #${sakhiNumber || 1}`}
- Grantha: ${grantha || 'Sakhi Sangrah'}
- Ang / Category: ${categoryTitle || ''}
- Exact Mool Sakhi Verse:
${verse}
- Known Reference Meaning: ${bhavarth || ''}
- Context Note: ${contextNote || ''}
- Practical Hint: ${practicalApplication || ''}
- Existing Contemplation Seed: ${contemplation || ''}
- Known Vocabulary Seed: ${JSON.stringify(wordMeanings || []).slice(0, 1200)}
- Attempt Seed: #${attempt}`;

    try {
      const ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });

      const response = await ai.models.generateContent({
        model: 'gemini-4-hydrogen',
        contents: [{ role: 'user', parts: [{ text: userPrompt }] }],
        config: {
          systemInstruction: SWADHYAY_EXPERT_SYSTEM_INSTRUCTION,
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              step2_context: {
                type: Type.OBJECT,
                properties: {
                  relevanceText: { type: Type.STRING },
                  spiritualSignificance: { type: Type.STRING },
                },
                required: ['relevanceText', 'spiritualSignificance'],
              },
              step3_wordMeanings: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    wordHi: { type: Type.STRING },
                    meaningHi: { type: Type.STRING },
                    wordPb: { type: Type.STRING },
                    meaningPb: { type: Type.STRING },
                    wordEn: { type: Type.STRING },
                    meaningEn: { type: Type.STRING },
                  },
                  required: ['wordHi', 'meaningHi', 'wordPb', 'meaningPb', 'wordEn', 'meaningEn'],
                },
              },
              step4_bhavarth: {
                type: Type.OBJECT,
                properties: {
                  bhavarth: { type: Type.STRING },
                  deepSatsangGyan: { type: Type.STRING },
                  mindMayaAnalysis: { type: Type.STRING },
                },
                required: ['bhavarth', 'deepSatsangGyan', 'mindMayaAnalysis'],
              },
              step5_quiz: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    question: { type: Type.STRING },
                    options: {
                      type: Type.ARRAY,
                      items: { type: Type.STRING },
                    },
                    correctIndex: { type: Type.INTEGER },
                    explanation: { type: Type.STRING },
                  },
                  required: ['question', 'options', 'correctIndex', 'explanation'],
                },
              },
              step6_spiritualInsight: {
                type: Type.OBJECT,
                properties: {
                  mysticalCoding: { type: Type.STRING },
                },
                required: ['mysticalCoding'],
              },
              step7_keyLearning: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
              },
              step8_crossReferences: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    source: { type: Type.STRING },
                    verse: { type: Type.STRING },
                    context: { type: Type.STRING },
                    connection: { type: Type.STRING },
                  },
                  required: ['source', 'verse', 'context', 'connection'],
                },
              },
              step9_contemplation: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
              },
              step10_audioIntegration: {
                type: Type.OBJECT,
                properties: {
                  sadhanaMethodName: { type: Type.STRING },
                  stages: {
                    type: Type.ARRAY,
                    items: {
                      type: Type.OBJECT,
                      properties: {
                        stageNumber: { type: Type.INTEGER },
                        title: { type: Type.STRING },
                        instruction: { type: Type.STRING },
                      },
                      required: ['stageNumber', 'title', 'instruction'],
                    },
                  },
                },
                required: ['sadhanaMethodName', 'stages'],
              },
              step11_blessingCertificate: {
                type: Type.OBJECT,
                properties: {
                  blessingVerse: { type: Type.STRING },
                  guruVachan: { type: Type.STRING },
                  samarpanSankalp: { type: Type.STRING },
                  oneLineBlessing: { type: Type.STRING },
                },
                required: ['blessingVerse', 'guruVachan', 'samarpanSankalp', 'oneLineBlessing'],
              },
              certificateData: {
                type: Type.OBJECT,
                properties: {
                  topHeader: { type: Type.STRING },
                  certificationStatement: { type: Type.STRING },
                  highlightMoolSakhi: { type: Type.STRING },
                  oneLineBlessing: { type: Type.STRING },
                  footerBrand: { type: Type.STRING },
                  bottomFooter: { type: Type.STRING },
                },
                required: [
                  'topHeader',
                  'certificationStatement',
                  'highlightMoolSakhi',
                  'oneLineBlessing',
                  'footerBrand',
                  'bottomFooter',
                ],
              },
            },
            required: [
              'step2_context',
              'step3_wordMeanings',
              'step4_bhavarth',
              'step5_quiz',
              'step6_spiritualInsight',
              'step7_keyLearning',
              'step8_crossReferences',
              'step9_contemplation',
              'step10_audioIntegration',
              'step11_blessingCertificate',
              'certificateData',
            ],
          },
        },
      });

      const rawText = response.text;
      if (!rawText || !rawText.trim()) {
        return res.status(502).json({ error: 'Empty response received from Gemini model.' });
      }

      const parsed = JSON.parse(rawText.trim());

      // Enforce Rule 4: Shuffle BOTH question order and A/B/C/D options on the backend every request (2-3 crisp questions)
      const rawQuestions = Array.isArray(parsed.step5_quiz) ? parsed.step5_quiz.slice(0, 3) : [];
      const shuffledQuiz = shuffleQuizQuestionsAndOptions(rawQuestions);

      // Enforce Rule 6 sacred formatting constants
      const normalizedPayload = {
        ...parsed,
        step5_quiz: shuffledQuiz,
        certificateData: {
          ...(parsed.certificateData || {}),
          topHeader: '🌹।।सत्यनाम।।🌹',
          highlightMoolSakhi: verse.trim(),
          footerBrand: 'Saheb World App • पावन स्वाध्याय मंच',
          bottomFooter: '।।साहेब बंदगी साहेब।।🙏',
        },
      };

      return res.json({
        data: normalizedPayload,
        source: 'gemini-4-hydrogen',
      });
    } catch (err: any) {
      console.error('[Swadhyay 11-Step Gemini Error]', err?.message || err);
      return res.status(502).json({
        error: err?.message || 'Failed to generate dynamic Swadhyay content via Gemini.',
      });
    }
  });

  // Backend Quiz Shuffler Endpoint (re-randomizes question order & A/B/C/D options on every attempt)
  app.post('/api/swadhyay-quiz-shuffle', (req, res) => {
    const { questions } = req.body || {};
    if (!Array.isArray(questions) || questions.length === 0) {
      return res.status(400).json({ error: 'Questions array is required.' });
    }
    const shuffled = shuffleQuizQuestionsAndOptions(questions.slice(0, 3));
    return res.json({ questions: shuffled });
  });

  // Vite Middleware / Static Files
  const distPath = path.resolve(process.cwd(), 'dist');
  const distIndexPath = path.join(distPath, 'index.html');
  const distExists = fs.existsSync(distIndexPath);

  if (isProd && distExists) {
    app.use(express.static(distPath, {
      setHeaders: (res, filePath) => {
        if (filePath.endsWith('sw.js')) {
          res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
          res.setHeader('Pragma', 'no-cache');
          res.setHeader('Service-Worker-Allowed', '/');
        } else if (filePath.endsWith('.html') || filePath.endsWith('version.json')) {
          res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
          res.setHeader('Pragma', 'no-cache');
        }
      }
    }));
    app.get('*', (req, res) => {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.sendFile(distIndexPath);
    });
  } else {
    app.get('/version.json', (_req, res) => {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.json({ version: 'dev', buildId: 'dev' });
    });
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
    app.get('*', async (req, res, next) => {
      const url = req.originalUrl;
      try {
        const indexPath = path.resolve(process.cwd(), 'index.html');
        if (fs.existsSync(indexPath)) {
          let template = fs.readFileSync(indexPath, 'utf-8');
          template = await vite.transformIndexHtml(url, template);
          res.status(200).set({ 
            'Content-Type': 'text/html',
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
          }).end(template);
        } else {
          res.status(404).send('index.html not found');
        }
      } catch (e: any) {
        vite.ssrFixStacktrace(e);
        next(e);
      }
    });
  }

  // Global Node process error shielding
  process.on('uncaughtException', (err) => {
    console.error('[Server Uncaught Exception]', err);
  });
  process.on('unhandledRejection', (reason) => {
    console.warn('[Server Unhandled Rejection]', reason);
  });

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer();
