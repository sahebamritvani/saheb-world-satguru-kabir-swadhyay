import { MasterGranth, GranthVerse } from './granthTypes';
import { KABIR_SAGAR_GRANTH } from './kabirSagar';
import { BIJAK_GRANTH } from './bijakGranth';
import { SHABDAWALI_GRANTH } from './shabdawali';
import { ULATBAASI_GRANTH } from './ulatbaasi';
import { NITNEM_SECTIONS } from '../nitnemData';
import { SAKHI_SANGRAH_ANG_1_VERSES } from './sakhiSangrahAng1';
import { SAKHI_SANGRAH_ANG_2_VERSES } from './sakhiSangrahAng2';
import { SAKHI_SANGRAH_ANG_3_VERSES } from './sakhiSangrahAng3';
import { SAKHI_SANGRAH_ANG_4_VERSES } from './sakhiSangrahAng4';
import { SAKHI_SANGRAH_ANG_5_VERSES } from './sakhiSangrahAng5';
import { SAKHI_SANGRAH_ANG_6_VERSES } from './sakhiSangrahAng6';
import { SAKHI_SANGRAH_ANG_7_VERSES } from './sakhiSangrahAng7';
import { SAKHI_SANGRAH_ANG_8_VERSES } from './sakhiSangrahAng8';
import { SAKHI_SANGRAH_ANG_9_VERSES } from './sakhiSangrahAng9';
import { SAKHI_SANGRAH_ANG_10_VERSES } from './sakhiSangrahAng10';
import { SAKHI_SANGRAH_ANG_11_VERSES } from './sakhiSangrahAng11';
import { SAKHI_SANGRAH_ANG_12_VERSES } from './sakhiSangrahAng12';
import { SAKHI_SANGRAH_ANG_13_VERSES } from './sakhiSangrahAng13';
import { SAKHI_SANGRAH_ANG_14_VERSES } from './sakhiSangrahAng14';
import { SAKHI_SANGRAH_ANG_15_VERSES } from './sakhiSangrahAng15';
import { SAKHIS_UPDESH_KO_ANG } from '../sakhisUpdeshKoAng';
import { SAKHIS_SHABD_KO_ANG } from '../sakhisShabdKoAng';
import { SAKHIS_JEEVAT_MRITAK_KO_ANG } from '../sakhisJeevatMritakKoAng';
import { SAKHIS_KAAL_KO_ANG } from '../sakhisKaalKoAng';
import { SAKHIS_SWAARATH_KO_ANG } from '../sakhisSwaarathKoAng';
import { SAKHIS_PARMAARTH_KO_ANG } from '../sakhisParmaarthKoAng';
import { SAKHIS_MAN_KO_ANG } from '../sakhisManKoAng';
import { SAKHIS_MAYA_KO_ANG } from '../sakhisMayaKoAng';
import { SAKHIS_MOH_KO_ANG } from '../sakhisMohKoAng';
import { SAKHIS_KAAM_KO_ANG } from '../sakhisKaamKoAng';
import { SAKHIS_KRODH_KO_ANG } from '../sakhisKrodhKoAng';
import { SAKHIS_LOBH_KO_ANG } from '../sakhisLobhKoAng';
import { SAKHIS_MAD_KO_ANG } from '../sakhisMadKoAng';
import { SAKHIS_MAAN_KO_ANG } from '../sakhisMaanKoAng';
import { SAKHIS_NINDA_KO_ANG } from '../sakhisNindaKoAng';
import { SAKHIS_KATHANI_KO_ANG } from '../sakhisKathaniKoAng';
import { SAKHIS_KARANI_KO_ANG } from '../sakhisKaraniKoAng';
import { SAKHIS_KRAM_KO_ANG } from '../sakhisKramKoAng';
import { SAKHIS_BHRAM_VIDHVANS_KO_ANG } from '../sakhisBhramVidhvansKoAng';
import { SAKHIS_DAYA_KO_ANG } from '../sakhisDayaKoAng';
import { SAKHIS_DEENTA_KO_ANG } from '../sakhisDeentaKoAng';
import { SAKHIS_SAANCH_KO_ANG } from '../sakhisSaanchKoAng';
import { Sakhi } from '../../types';
import { enrichVerseWith5Steps } from '../../utils/verseEnricher';
import { devanagariToGurmukhi } from '../../services/transliteration';

function sakhiToGranthVerse(s: Sakhi): GranthVerse {
  return {
    id: s.id,
    type: 'sakhi' as const,
    lines: {
      hi: s.text.hi ? s.text.hi.split('\n') : [''],
      pb: s.text.pb ? s.text.pb.split('\n') : [devanagariToGurmukhi(s.text.hi || '')],
      en: s.text.en ? s.text.en.split('\n') : [s.transliteration || ''],
    },
    shabdarth: s.wordMeanings ? {
      hi: s.wordMeanings.hi,
      pb: s.wordMeanings.pb,
      en: s.wordMeanings.en,
    } : undefined,
    bhavarth: s.bhavarth ? {
      hi: s.bhavarth.hi || '',
      pb: s.bhavarth.pb || devanagariToGurmukhi(s.bhavarth.hi || ''),
      en: s.bhavarth.en || '',
    } : undefined,
    contemplation: s.contemplation ? {
      hi: s.contemplation.hi || '',
      pb: s.contemplation.pb || devanagariToGurmukhi(s.contemplation.hi || ''),
      en: s.contemplation.en || '',
    } : undefined,
    practicalApplication: s.practicalApplication ? {
      hi: s.practicalApplication.hi || '',
      pb: s.practicalApplication.pb || devanagariToGurmukhi(s.practicalApplication.hi || ''),
      en: s.practicalApplication.en || '',
    } : undefined,
    samarpanPrayer: s.samarpanPrayer ? {
      hi: s.samarpanPrayer.hi || '',
      pb: s.samarpanPrayer.pb || devanagariToGurmukhi(s.samarpanPrayer.hi || ''),
      en: s.samarpanPrayer.en || '',
    } : undefined,
  };
}

// Nitnem Gutka Saheb Master Structure
export const NITNEM_GUTKA_MASTER_GRANTH: MasterGranth = {
  id: 'nitnem-gutka',
  slug: 'nitnem-gutka',
  title: {
    hi: 'नितनेम गुटका साहेब',
    pb: 'ਨਿਤਨੇਮ ਗੁਟਕਾ ਸਾਹੇਬ',
    en: 'Nitnem Gutka Saheb',
  },
  shortTitle: {
    hi: 'नितनेम गुटका',
    pb: 'ਨਿਤਨੇਮ ਗੁਟਕਾ',
    en: 'Nitnem Gutka',
  },
  subtitle: {
    hi: 'प्रभात पाठ, मूल संध्या, गायत्री पाठ, पूनम माहात्म्य, चालीसा, बारहमासी एवं तीसा यंत्र',
    pb: 'ਪ੍ਰਭਾਤ ਪਾਠ, ਮੂਲ ਸੰਧਿਆ, ਗਾਇਤਰੀ ਪਾਠ, ਪੂਨਮ ਮਹਾਤਮ ਤੇ ਚਾਲੀਸਾ',
    en: 'Daily Recitations, Morning/Evening Prayers, Gayatri & Chanted Hymns',
  },
  category: 'nitnem',
  iconName: 'Scroll',
  bannerColor: 'from-amber-600 to-orange-700',
  accentColor: 'text-amber-600',
  totalChapters: 7,
  estimatedHours: {
    hi: '२ घण्टे नित्य पाठ',
    pb: '੨ ਘੰਟੇ ਨਿਤਨੇਮ ਪਾਠ',
    en: '2 Hours Daily Recitation',
  },
  description: {
    hi: 'नितनेम गुटका साहेब कबीर पंथ का नित्य पठनीय परम पावन गुटका है। इसमें प्रभात स्मरण, मूल संध्या, गायत्री पाठ, पूनम माहात्म्य, कबीर चालीसा, बारहमासी और तीसा यंत्र पाठ समाहित हैं।',
    pb: 'ਨਿਤਨੇਮ ਗੁਟਕਾ ਸਾਹੇਬ ਰੋਜ਼ਾਨਾ ਪੜ੍ਹੀ ਜਾਣ ਵਾਲੀ ਪਾਵਨ ਬਾਣੀ ਦਾ ਸੰਗ੍ਰਹਿ ਹੈ।',
    en: 'Daily devotional guide containing morning and evening prayers, praises, Gayatri, Chalisa, and traditional sanctified verses.',
  },
  chapters: NITNEM_SECTIONS.map((sec, idx) => ({
    id: sec.id,
    chapterNumber: idx + 1,
    title: {
      hi: sec.title.hi,
      pb: sec.title.pb,
      en: sec.title.en,
    },
    subtitle: {
      hi: sec.subtitle?.hi || '',
      pb: sec.subtitle?.pb || '',
      en: sec.subtitle?.en || '',
    },
    description: {
      hi: sec.subtitle?.hi || '',
      pb: sec.subtitle?.pb || '',
      en: sec.subtitle?.en || '',
    },
    verses: (sec.verses || []).map((it) => ({
      id: it.id,
      type: (it.type || 'doha') as GranthVerse['type'],
      lines: {
        hi: it.lines?.hi || [],
        pb: it.lines?.pb || it.lines?.hi || [],
        en: it.lines?.en || it.lines?.hi || [],
      },
      shabdarth: it.shabdarth,
      bhavarth: {
        hi: it.bhavarth?.hi || '',
        pb: it.bhavarth?.pb || '',
        en: it.bhavarth?.en || '',
      },
      spiritualEssence: {
        hi: it.spiritualEssence?.hi || it.marmNote?.hi || '',
        pb: it.spiritualEssence?.pb || it.marmNote?.pb || '',
        en: it.spiritualEssence?.en || it.marmNote?.en || '',
      },
    })),
  })),
};

// Master Sakhi Sangrah Granth Structure
export const SAKHI_SANGRAH_MASTER_GRANTH: MasterGranth = {
  id: 'sakhi-sangrah',
  slug: 'sakhi-sangrah',
  title: {
    hi: 'सतगुरु कबीर साखी संग्रह',
    pb: 'ਸਤਗੁਰੂ ਕਬੀਰ ਸਾਖੀ ਸੰਗ੍ਰਹਿ',
    en: 'Satguru Kabir Sakhi Sangrah',
  },
  shortTitle: {
    hi: 'साखी संग्रह',
    pb: 'ਸਾਖੀ ਸੰਗ੍ਰਹਿ',
    en: 'Sakhi Sangrah',
  },
  subtitle: {
    hi: 'गुरु महिमा, सुमिरन, प्रेम, चितावनी एवं वैराग्य के ३७ अंगों का पावन संग्रह',
    pb: 'ਗੁਰੂ ਮਹਿਮਾ, ਸਿਮਰਨ ਅਤੇ ਵੈਰਾਗ ਦੇ ੩੭ ਅੰਗਾਂ ਦਾ ਸੰਗ੍ਰਹਿ',
    en: 'Sacred Collection of 37 Angs (Limbs) of Wisdom & Devotion',
  },
  category: 'sakhi',
  iconName: 'Library',
  bannerColor: 'from-amber-700 to-yellow-800',
  accentColor: 'text-amber-600',
  totalChapters: 37,
  estimatedHours: {
    hi: '४० घण्टे स्वाध्याय',
    pb: '੪੦ ਘੰਟੇ ਅਧਿਐਨ',
    en: '40 Hours Study',
  },
  description: {
    hi: 'सतगुरु कबीर साहेब की अमर साखियों का ३७ अंगों में वर्गीकृत संपूर्ण संग्रह। इसमें १०३२ साखियाँ संकलित हैं जो जीवन के प्रत्येक पक्ष पर प्रकाश डालती हैं।',
    pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੀਆਂ ਅਮਰ ਸਾਖੀਆਂ ਦਾ ੩੭ ਅੰਗਾਂ ਵਿੱਚ ਵਰਗੀਕ੍ਰਿਤ ਸੰਗ੍ਰਹਿ।',
    en: 'A comprehensive collection of Satguru Kabir\'s immortal Sakhis classified into 37 thematic limbs (Angs), containing a total of 1032 couplets.',
  },
  chapters: [
    { id: 'ang-1', count: 36, title: { hi: 'गुरु को अंग', pb: 'ਗੁਰੂ ਕੋ ਅੰਗ', en: 'Guru Ko Ang (The Divine Master)' } },
    { id: 'ang-2', count: 22, title: { hi: 'सतगुरु को अंग', pb: 'ਸਤਿਗੁਰੂ ਕੋ ਅੰਗ', en: 'Satguru Ko Ang (The True Master)' } },
    { id: 'ang-3', count: 22, title: { hi: 'गुरु पारख को अंग', pb: 'ਗੁਰੂ ਪਰਖ ਕੋ ਅੰਗ', en: 'Guru Parakh Ko Ang (Recognizing the Master)' } },
    { id: 'ang-4', count: 12, title: { hi: 'गुरु शिष्य हेरा को अंग', pb: 'ਗੁਰੂ ਸਿੱਖ ਹੇਰਾ ਕੋ ਅੰਗ', en: 'Guru Shishya Hera Ko Ang (Disciple Bond)' } },
    { id: 'ang-5', count: 22, title: { hi: 'निगुरा को अंग', pb: 'ਨਿਗੁਰਾ ਕੋ ਅੰਗ', en: 'Nigura Ko Ang (The Masterless)' } },
    { id: 'ang-6', count: 99, title: { hi: 'साधु को अंग', pb: 'ਸਾਧੂ ਕੋ ਅੰਗ', en: 'Sadhu Ko Ang (The Holy Saints)' } },
    { id: 'ang-7', count: 13, title: { hi: 'भेष को अंग', pb: 'ਭੇਖ ਕੋ ਅੰਗ', en: 'Bhesh Ko Ang (Outer Guises)' } },
    { id: 'ang-8', count: 8, title: { hi: 'भीख को अंग', pb: 'ਭੀਖ ਕੋ ਅੰਗ', en: 'Bheekh Ko Ang (Alms & Begging)' } },
    { id: 'ang-9', count: 20, title: { hi: 'संगति को अंग', pb: 'ਸੰਗਤਿ ਕੋ ਅੰਗ', en: 'Sangati Ko Ang (Holy Fellowship)' } },
    { id: 'ang-10', count: 17, title: { hi: 'सेवक को अंग', pb: 'ਸੇਵਕ ਕੋ ਅੰਗ', en: 'Sevak Ko Ang (The Devout Servant)' } },
    { id: 'ang-11', count: 12, title: { hi: 'दासातन को अंग', pb: 'ਦਾਸਾਤਨ ਕੋ ਅੰਗ', en: 'Dasatan Ko Ang (Humility & Servitude)' } },
    { id: 'ang-12', count: 32, title: { hi: 'भक्ति को अंग', pb: 'ਭਗਤੀ ਕੋ ਅੰਗ', en: 'Bhakti Ko Ang (Sacred Devotion)' } },
    { id: 'ang-13', count: 73, title: { hi: 'सुमिरन को अंग', pb: 'ਸਿਮਰਨ ਕੋ ਅੰਗ', en: 'Sumiran Ko Ang (Remembrance of Truth)' } },
    { id: 'ang-14', count: 44, title: { hi: 'प्रेम को अंग', pb: 'ਪ੍ਰੇਮ ਕੋ ਅੰਗ', en: 'Prem Ko Ang (Divine Love)' } },
    { id: 'ang-15', count: 105, title: { hi: 'चितावनी को अंग', pb: 'ਚਿਤਾਵਨੀ ਕੋ ਅੰਗ', en: 'Chitawani Ko Ang (Awakening & Counsel)' } },
    { id: 'ang-16', count: 53, title: { hi: 'उपदेश को अंग', pb: 'ਉਪਦੇਸ਼ ਕੋ ਅੰਗ', en: 'Upadesh Ko Ang (Spiritual Teachings)' } },
    { id: 'ang-17', count: 40, title: { hi: 'शब्द को अंग', pb: 'ਸ਼ਬਦ ਕੋ ਅੰਗ', en: 'Shabad Ko Ang (The Primordial Sound)' } },
    { id: 'ang-18', count: 12, title: { hi: 'जीवत मृतक को अंग', pb: 'ਜੀਵਤ ਮ੍ਰਿਤਕ ਕੋ ਅੰਗ', en: 'Jeevat Mritak Ko Ang (Dying to Self)' } },
    { id: 'ang-19', count: 52, title: { hi: 'काल को अंग', pb: 'ਕਾਲ ਕੋ ਅੰਗ', en: 'Kaal Ko Ang (Time, Karma & Death)' } },
    { id: 'ang-20', count: 5, title: { hi: 'स्वार्थ को अंग', pb: 'ਸੁਆਰਥ ਕੋ ਅੰਗ', en: 'Swarth Ko Ang (Selfish Illusion)' } },
    { id: 'ang-21', count: 8, title: { hi: 'परमार्थ को अंग', pb: 'ਪਰਮਾਰਥ ਕੋ ਅੰਗ', en: 'Parmarth Ko Ang (Altruism & Highest Good)' } },
    { id: 'ang-22', count: 59, title: { hi: 'मन को अंग', pb: 'ਮਨ ਕੋ ਅੰਗ', en: 'Man Ko Ang (Conquering the Mind)' } },
    { id: 'ang-23', count: 51, title: { hi: 'माया को अंग', pb: 'ਮਾਇਆ ਕੋ ਅੰਗ', en: 'Maya Ko Ang (The Cosmic Illusion)' } },
    { id: 'ang-24', count: 12, title: { hi: 'मोह को अंग', pb: 'ਮੋਹ ਕੋ ਅੰਗ', en: 'Moh Ko Ang (Worldly Attachments)' } },
    { id: 'ang-25', count: 17, title: { hi: 'काम को अंग', pb: 'ਕਾਮ ਕੋ ਅੰਗ', en: 'Kaam Ko Ang (Desire & Passion)' } },
    { id: 'ang-26', count: 6, title: { hi: 'क्रोध को अंग', pb: 'ਕ੍ਰੋਧ ਕੋ ਅੰਗ', en: 'Krodh Ko Ang (Overcoming Anger)' } },
    { id: 'ang-27', count: 5, title: { hi: 'लोभ को अंग', pb: 'ਲੋਭ ਕੋ ਅੰਗ', en: 'Lobh Ko Ang (Eradicating Greed)' } },
    { id: 'ang-28', count: 7, title: { hi: 'मद को अंग', pb: 'ਮਦ ਕੋ ਅੰਗ', en: 'Mad Ko Ang (Arrogance & Delusion)' } },
    { id: 'ang-29', count: 27, title: { hi: 'मान को अंग', pb: 'ਮਾਨ ਕੋ ਅੰਗ', en: 'Maan Ko Ang (Pride & Ego)' } },
    { id: 'ang-30', count: 19, title: { hi: 'निन्दा को अंग', pb: 'ਨਿੰਦਾ ਕੋ ਅੰਗ', en: 'Ninda Ko Ang (Slander & Defamation)' } },
    { id: 'ang-31', count: 14, title: { hi: 'कथनी को अंग', pb: 'ਕਥਨੀ ਕੋ ਅੰਗ', en: 'Kathani Ko Ang (Mere Words)' } },
    { id: 'ang-32', count: 16, title: { hi: 'करनी को अंग', pb: 'ਕਰਨੀ ਕੋ ਅੰਗ', en: 'Karani Ko Ang (Right Action)' } },
    { id: 'ang-33', count: 16, title: { hi: 'क्रम को अंग', pb: 'ਕ੍ਰਮ ਕੋ ਅੰਗ', en: 'Kram Ko Ang (Disciplined Order)' } },
    { id: 'ang-34', count: 39, title: { hi: 'भ्रम-विध्वंस को अंग', pb: 'ਭਰਮ-ਬਿਧਵੰਸ ਕੋ ਅੰਗ', en: 'Bhram-Vidhvans Ko Ang (Dispelling Doubt)' } },
    { id: 'ang-35', count: 10, title: { hi: 'दया को अंग', pb: 'ਦਇਆ ਕੋ ਅੰਗ', en: 'Daya Ko Ang (Universal Compassion)' } },
    { id: 'ang-36', count: 13, title: { hi: 'दीनता को अंग', pb: 'ਦੀਨਤਾ ਕੋ ਅੰਗ', en: 'Deenta Ko Ang (Meek Devotion)' } },
    { id: 'ang-37', count: 14, title: { hi: 'सांच को अंग', pb: 'ਸਾਚ ਕੋ ਅੰਗ', en: 'Saanch Ko Ang (Absolute Truth)' } },
  ].map((ang, idx) => ({
    id: ang.id,
    chapterNumber: idx + 1,
    title: {
      hi: `${idx + 1}. ${ang.title.hi}`,
      pb: `${idx + 1}. ${ang.title.pb}`,
      en: `${idx + 1}. ${ang.title.en}`,
    },
    subtitle: {
      hi: `${ang.title.hi} की पवित्र साखियाँ (${ang.count} पद्य)`,
      pb: `${ang.title.pb} ਦੀਆਂ ਪਾਵਨ ਸਾਖੀਆਂ (${ang.count} ਪਦ)`,
      en: `Sacred verses of ${ang.title.en} (${ang.count} Verses)`,
    },
    description: {
      hi: `इस अंग में ${ang.title.hi} से संबंधित ${ang.count} साखियाँ संकलित हैं।`,
      pb: `ਇਸ ਅੰਗ ਵਿੱਚ ${ang.title.pb} ਨਾਲ ਸਬੰਧਤ ${ang.count} ਪਾਵਨ ਸਾਖੀਆਂ ਹਨ।`,
      en: `This chapter contains ${ang.count} couplets exploring ${ang.title.en}.`,
    },
    verses: (
      ang.id === 'ang-1'
        ? SAKHI_SANGRAH_ANG_1_VERSES
        : ang.id === 'ang-2'
        ? SAKHI_SANGRAH_ANG_2_VERSES
        : ang.id === 'ang-3'
        ? SAKHI_SANGRAH_ANG_3_VERSES
        : ang.id === 'ang-4'
        ? SAKHI_SANGRAH_ANG_4_VERSES
        : ang.id === 'ang-5'
        ? SAKHI_SANGRAH_ANG_5_VERSES
        : ang.id === 'ang-6'
        ? SAKHI_SANGRAH_ANG_6_VERSES
        : ang.id === 'ang-7'
        ? SAKHI_SANGRAH_ANG_7_VERSES
        : ang.id === 'ang-8'
        ? SAKHI_SANGRAH_ANG_8_VERSES
        : ang.id === 'ang-9'
        ? SAKHI_SANGRAH_ANG_9_VERSES
        : ang.id === 'ang-10'
        ? SAKHI_SANGRAH_ANG_10_VERSES
        : ang.id === 'ang-11'
        ? SAKHI_SANGRAH_ANG_11_VERSES
        : ang.id === 'ang-12'
        ? SAKHI_SANGRAH_ANG_12_VERSES
        : ang.id === 'ang-13'
        ? SAKHI_SANGRAH_ANG_13_VERSES
        : ang.id === 'ang-14'
        ? SAKHI_SANGRAH_ANG_14_VERSES
        : ang.id === 'ang-15'
        ? SAKHI_SANGRAH_ANG_15_VERSES
        : ang.id === 'ang-16'
        ? SAKHIS_UPDESH_KO_ANG.map(sakhiToGranthVerse)
        : ang.id === 'ang-17'
        ? SAKHIS_SHABD_KO_ANG.map(sakhiToGranthVerse)
        : ang.id === 'ang-18'
        ? SAKHIS_JEEVAT_MRITAK_KO_ANG.map(sakhiToGranthVerse)
        : ang.id === 'ang-19'
        ? SAKHIS_KAAL_KO_ANG.map(sakhiToGranthVerse)
        : ang.id === 'ang-20'
        ? SAKHIS_SWAARATH_KO_ANG.map(sakhiToGranthVerse)
        : ang.id === 'ang-21'
        ? SAKHIS_PARMAARTH_KO_ANG.map(sakhiToGranthVerse)
        : ang.id === 'ang-22'
        ? SAKHIS_MAN_KO_ANG.map(sakhiToGranthVerse)
        : ang.id === 'ang-23'
        ? SAKHIS_MAYA_KO_ANG.map(sakhiToGranthVerse)
        : ang.id === 'ang-24'
        ? SAKHIS_MOH_KO_ANG.map(sakhiToGranthVerse)
        : ang.id === 'ang-25'
        ? SAKHIS_KAAM_KO_ANG.map(sakhiToGranthVerse)
        : ang.id === 'ang-26'
        ? SAKHIS_KRODH_KO_ANG.map(sakhiToGranthVerse)
        : ang.id === 'ang-27'
        ? SAKHIS_LOBH_KO_ANG.map(sakhiToGranthVerse)
        : ang.id === 'ang-28'
        ? SAKHIS_MAD_KO_ANG.map(sakhiToGranthVerse)
        : ang.id === 'ang-29'
        ? SAKHIS_MAAN_KO_ANG.map(sakhiToGranthVerse)
        : ang.id === 'ang-30'
        ? SAKHIS_NINDA_KO_ANG.map(sakhiToGranthVerse)
        : ang.id === 'ang-31'
        ? SAKHIS_KATHANI_KO_ANG.map(sakhiToGranthVerse)
        : ang.id === 'ang-32'
        ? SAKHIS_KARANI_KO_ANG.map(sakhiToGranthVerse)
        : ang.id === 'ang-33'
        ? SAKHIS_KRAM_KO_ANG.map(sakhiToGranthVerse)
        : ang.id === 'ang-34'
        ? SAKHIS_BHRAM_VIDHVANS_KO_ANG.map(sakhiToGranthVerse)
        : ang.id === 'ang-35'
        ? SAKHIS_DAYA_KO_ANG.map(sakhiToGranthVerse)
        : ang.id === 'ang-36'
        ? SAKHIS_DEENTA_KO_ANG.map(sakhiToGranthVerse)
        : ang.id === 'ang-37'
        ? SAKHIS_SAANCH_KO_ANG.map(sakhiToGranthVerse)
        : Array.from({ length: ang.count }).map((_, vIdx) => ({
            id: `${ang.id}-v${vIdx + 1}`,
            type: 'sakhi' as const,
            lines: { hi: [`साखी ${vIdx + 1}: सतगुरु साहेब वाणी`], pb: [devanagariToGurmukhi(`साखी ${vIdx + 1}: सतगुरु साहेब वाणी`)], en: [`Sakhi ${vIdx + 1}: Divine wisdom of Satguru Kabir`] },
            bhavarth: { hi: 'सतगुरु कबीर साहेब जी की अमर साखी का पावन स्वाध्याय एवं मनन करें।', pb: 'ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੀ ਅਮਰ ਸਾਖੀ ਦਾ ਪਾਵਨ ਅਧਿਐਨ ਕਰੋ।', en: 'Contemplate and meditate upon the divine Sakhi of Satguru Kabir Saheb.' },
          }))
    ).map((v) => enrichVerseWith5Steps(v, ang.title.hi)),
  })),
};

// Master Sakhi Sangrah Granth Structure (Reader View)
export const SAKHI_SANGRAH_READER_MASTER_GRANTH: MasterGranth = {
  id: 'sakhi-sangrah-reader',
  slug: 'sakhi-sangrah',
  title: {
    hi: 'सतगुरु कबीर साखी संग्रह',
    pb: 'ਸਤਗੁਰੂ ਕਬੀਰ ਸਾਖੀ ਸੰਗ੍ਰਹਿ',
    en: 'Satguru Kabir Sakhi Sangrah',
  },
  shortTitle: {
    hi: 'साखी संग्रह',
    pb: 'ਸਾਖੀ ਸੰਗ੍ਰਹਿ',
    en: 'Sakhi Sangrah',
  },
  subtitle: {
    hi: 'साखी, पद, सवैया एवं रमैनी का प्रामाणिक ऐतिहासिक संकलन',
    pb: 'ਸਾਖੀ, ਪਦ ਤੇ ਰਮੈਣੀ ਦਾ ਪ੍ਰਮਾਣਿਕ ਸੰਗ੍ਰਹਿ',
    en: 'Authentic Historical Anthology of Sakhis, Padas & Ramainis',
  },
  category: 'sakhi',
  iconName: 'BookOpen',
  bannerColor: 'from-amber-800 to-yellow-900',
  accentColor: 'text-amber-700',
  totalChapters: 37,
  estimatedHours: {
    hi: '४५ घण्टे स्वाध्याय',
    pb: '੪੫ ਘੰਟੇ ਅਧਿਐਨ',
    en: '45 Hours Study',
  },
  description: {
    hi: 'साखी संग्रह सतगुरु कबीर साहेब की वाणी का सर्वाधिक प्रामाणिक शोध संकलन है। इसमें ज्ञान, विवेक, गुरु-भक्ति, नीति और आत्म-साक्षात्कार के पदों का अद्भुत संगम है।',
    pb: 'ਸਾਖੀ ਸੰਗ੍ਰਹਿ ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਜੀ ਦੀ ਬਾਣੀ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਤੇ ਪ੍ਰਮਾਣਿਕ ਗ੍ਰੰਥ ਹੈ।',
    en: 'Sakhi Sangrah is the premier spiritual anthology preserving the saint\'s verses, couplets, and songs across thematic Angs.',
  },
  chapters: SAKHI_SANGRAH_MASTER_GRANTH.chapters,
};

// All Master Granths Registry (The 5 Primary Holy Texts of Kabir Panth)
export const ALL_MASTER_GRANTHS: MasterGranth[] = [
  KABIR_SAGAR_GRANTH,
  BIJAK_GRANTH,
  ULATBAASI_GRANTH,
  SHABDAWALI_GRANTH,
  SAKHI_SANGRAH_READER_MASTER_GRANTH,
];

