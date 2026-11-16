import { Language } from '../types';

export type EventType = 'purnima' | 'amavasya' | 'sangrand' | 'jayanti' | 'nirvan' | 'festival';

export interface JantriEvent {
  date: string; // ISO string or YYYY-MM-DD
  type: EventType;
  title: Record<Language, string>;
  isMain?: boolean;
}

// 2026 Sacred Dates for Satguru Kabir Saheb Jantri
export const jantriEvents2026: JantriEvent[] = [
  { date: '2026-01-03', type: 'purnima', title: { hi: 'पौष पूर्णिमा', pb: 'ਪੋਹ ਪੂਰਨਮਾਸ਼ੀ', en: 'Paush Purnima' } },
  { date: '2026-01-14', type: 'sangrand', title: { hi: 'माघ संग्रांद', pb: 'ਮਾਘ ਸੰਗਰਾਂਦ', en: 'Magh Sangrand' } },
  { date: '2026-01-18', type: 'amavasya', title: { hi: 'माघ अमावस्या', pb: 'ਮਾਘ ਮੱਸਿਆ', en: 'Magh Amavasya' } },
  { date: '2026-02-01', type: 'purnima', title: { hi: 'माघ पूर्णिमा', pb: 'ਮਾਘ ਪੂਰਨਮਾਸ਼ੀ', en: 'Magh Purnima' } },
  { date: '2026-02-13', type: 'sangrand', title: { hi: 'फाल्गुन संग्रांद', pb: 'ਫੱਗਣ ਸੰਗਰਾਂਦ', en: 'Phalguna Sangrand' } },
  { date: '2026-02-17', type: 'amavasya', title: { hi: 'फाल्गुन अमावस्या', pb: 'ਫੱਗਣ ਮੱਸਿਆ', en: 'Phalguna Amavasya' } },
  { date: '2026-03-03', type: 'purnima', title: { hi: 'फाल्गुन पूर्णिमा (होली)', pb: 'ਫੱਗਣ ਪੂਰਨਮਾਸ਼ੀ (ਹੋਲੀ)', en: 'Phalguna Purnima (Holi)' } },
  { date: '2026-03-14', type: 'sangrand', title: { hi: 'चैत्र संग्रांद', pb: 'ਚੇਤ ਸੰਗਰਾਂਦ', en: 'Chaitra Sangrand' } },
  { date: '2026-03-18', type: 'amavasya', title: { hi: 'चैत्र अमावस्या', pb: 'ਚੇਤ ਮੱਸਿਆ', en: 'Chaitra Amavasya' } },
  { date: '2026-04-01', type: 'purnima', title: { hi: 'चैत्र पूर्णिमा', pb: 'ਚੇਤ ਪੂਰਨਮਾਸ਼ੀ', en: 'Chaitra Purnima' } },
  { date: '2026-04-14', type: 'sangrand', title: { hi: 'वैशाख संग्रांद (बैसाखी)', pb: 'ਵਿਸਾਖ ਸੰਗਰਾਂਦ (ਵਿਸਾਖੀ)', en: 'Vaisakh Sangrand (Baisakhi)' } },
  { date: '2026-04-17', type: 'amavasya', title: { hi: 'वैशाख अमावस्या', pb: 'ਵਿਸਾਖ ਮੱਸਿਆ', en: 'Vaisakh Amavasya' } },
  { date: '2026-05-01', type: 'purnima', title: { hi: 'वैशाख पूर्णिमा', pb: 'ਵਿਸਾਖ ਪੂਰਨਮਾਸ਼ੀ', en: 'Vaisakh Purnima' } },
  { date: '2026-05-14', type: 'sangrand', title: { hi: 'ज्येष्ठ संग्रांद', pb: 'ਜੇਠ ਸੰਗਰਾਂਦ', en: 'Jyeshtha Sangrand' } },
  { date: '2026-05-16', type: 'amavasya', title: { hi: 'ज्येष्ठ अमावस्या', pb: 'ਜੇਠ ਮੱਸਿਆ', en: 'Jyeshtha Amavasya' } },
  { date: '2026-05-30', type: 'jayanti', isMain: true, title: { hi: 'सतगुरु कबीर साहेब जयंती (ज्येष्ठ पूर्णिमा)', pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜਯੰਤੀ (ਜੇਠ ਪੂਰਨਮਾਸ਼ੀ)', en: 'Satguru Kabir Saheb Jayanti' } },
  { date: '2026-06-15', type: 'sangrand', title: { hi: 'आषाढ़ संग्रांद', pb: 'ਹਾੜ ਸੰਗਰਾਂਦ', en: 'Ashadha Sangrand' } },
  { date: '2026-06-15', type: 'amavasya', title: { hi: 'आषाढ़ अमावस्या', pb: 'ਹਾੜ ਮੱਸਿਆ', en: 'Ashadha Amavasya' } },
  { date: '2026-06-29', type: 'purnima', title: { hi: 'आषाढ़ पूर्णिमा', pb: 'ਹਾੜ ਪੂਰਨਮਾਸ਼ੀ', en: 'Ashadha Purnima' } },
  { date: '2026-07-14', type: 'amavasya', title: { hi: 'श्रावण अमावस्या', pb: 'ਸਾਵਣ ਮੱਸਿਆ', en: 'Shravana Amavasya' } },
  { date: '2026-07-16', type: 'sangrand', title: { hi: 'श्रावण संग्रांद', pb: 'ਸਾਵਣ ਸੰਗਰਾਂਦ', en: 'Shravana Sangrand' } },
  { date: '2026-07-29', type: 'purnima', title: { hi: 'श्रावण पूर्णिमा', pb: 'ਸਾਵਣ ਪੂਰਨਮਾਸ਼ੀ', en: 'Shravana Purnima' } },
  { date: '2026-08-12', type: 'amavasya', title: { hi: 'भाद्रपद अमावस्या', pb: 'ਭਾਦੋਂ ਮੱਸਿਆ', en: 'Bhadrapada Amavasya' } },
  { date: '2026-08-16', type: 'sangrand', title: { hi: 'भाद्रपद संग्रांद', pb: 'ਭਾਦੋਂ ਸੰਗਰਾਂਦ', en: 'Bhadrapada Sangrand' } },
  { date: '2026-08-28', type: 'purnima', title: { hi: 'भाद्रपद पूर्णिमा', pb: 'ਭਾਦੋਂ ਪੂਰਨਮਾਸ਼ੀ', en: 'Bhadrapada Purnima' } },
  { date: '2026-09-11', type: 'amavasya', title: { hi: 'आश्विन अमावस्या', pb: 'ਅੱਸੂ ਮੱਸਿਆ', en: 'Ashwin Amavasya' } },
  { date: '2026-09-17', type: 'sangrand', title: { hi: 'आश्विन संग्रांद', pb: 'ਅੱਸੂ ਸੰਗਰਾਂਦ', en: 'Ashwin Sangrand' } },
  { date: '2026-09-26', type: 'purnima', title: { hi: 'आश्विन पूर्णिमा', pb: 'ਅੱਸੂ ਪੂਰਨਮਾਸ਼ੀ', en: 'Ashwin Purnima' } },
  { date: '2026-10-10', type: 'amavasya', title: { hi: 'कार्तिक अमावस्या (दीपावली)', pb: 'ਕੱਤਕ ਮੱਸਿਆ (ਦੀਵਾਲੀ)', en: 'Kartik Amavasya (Deepavali)' } },
  { date: '2026-10-17', type: 'sangrand', title: { hi: 'कार्तिक संग्रांद', pb: 'ਕੱਤਕ ਸੰਗਰਾਂਦ', en: 'Kartik Sangrand' } },
  { date: '2026-10-25', type: 'purnima', title: { hi: 'कार्तिक पूर्णिमा', pb: 'ਕੱਤਕ ਪੂਰਨਮਾਸ਼ੀ', en: 'Kartik Purnima' } },
  { date: '2026-11-09', type: 'amavasya', title: { hi: 'मार्गशीर्ष अमावस्या', pb: 'ਮੱਘਰ ਮੱਸਿਆ', en: 'Margashirsha Amavasya' } },
  { date: '2026-11-16', type: 'sangrand', title: { hi: 'मार्गशीर्ष संग्रांद', pb: 'ਮੱਘਰ ਸੰਗਰਾਂਦ', en: 'Margashirsha Sangrand' } },
  { date: '2026-11-24', type: 'purnima', title: { hi: 'मार्गशीर्ष पूर्णिमा', pb: 'ਮੱਘਰ ਪੂਰਨਮਾਸ਼ੀ', en: 'Margashirsha Purnima' } },
  { date: '2026-12-09', type: 'amavasya', title: { hi: 'पौष अमावस्या', pb: 'ਪੋਹ ਮੱਸਿਆ', en: 'Paush Amavasya' } },
  { date: '2026-12-15', type: 'sangrand', title: { hi: 'पौष संग्रांद', pb: 'ਪੋਹ ਸੰਗਰਾਂਦ', en: 'Paush Sangrand' } },
  { date: '2026-12-24', type: 'purnima', title: { hi: 'पौष पूर्णिमा', pb: 'ਪੋਹ ਪੂਰਨਮਾਸ਼ੀ', en: 'Paush Purnima' } },
  { date: '2026-02-04', type: 'nirvan', isMain: true, title: { hi: 'सतगुरु कबीर साहेब निर्वाण दिवस (मघर उत्सव)', pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਨਿਰਵਾਣ ਦਿਵਸ (ਮਘਰ ਉਤਸਵ)', en: 'Satguru Kabir Saheb Nirvana Day' } },
];
