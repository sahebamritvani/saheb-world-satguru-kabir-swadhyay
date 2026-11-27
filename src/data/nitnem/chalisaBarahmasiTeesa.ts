import { NitnemSection } from '../../types';
import { KABIR_CHALISA_VERSES } from './kabirChalisaVerses';
import { BARAHMASI_VERSES } from './barahmasiVerses';
import { TEESA_YANTRA_VERSES } from './teesaYantraVerses';

export const CHALISA_BARAHMASI_TEESA_SECTIONS: NitnemSection[] = [
  {
    "id": "chalisa-vandana",
    "majorCategoryId": "chalisa",
    "majorCategoryTitle": {
      "hi": "५. सतगुरु कबीर चालीसा पाठ",
      "pb": "੫. ਸਤਿਗੁਰੂ ਕਬੀਰ ਚਾਲੀਸਾ ਪਾਠ",
      "en": "5. Satguru Kabir Chalisa Path"
    },
    "subGroup": "चालीसा पाठ",
    "title": {
      "hi": "वंदना",
      "pb": "ਵੰਦਨਾ",
      "en": "Vandana"
    },
    "subtitle": {
      "hi": "सतगुरु पद वंदना एवं धर्मदास-उग्रनाम आचार्य स्मरण",
      "pb": "ਸਤਿਗੁਰੂ ਪਦ ਵੰਦਨਾ ਅਤੇ ਧਰਮਦਾਸ-ਉਗ੍ਰਨਾਮ ਆਚਾਰਯ ਸਿਮਰਨ",
      "en": "Opening Salutation to Satguru Kabir & Dharmadas Ji"
    },
    "iconName": "Sparkles",
    "estimatedMinutes": 2,
    "totalVerses": 1,
    "verses": [KABIR_CHALISA_VERSES[0]]
  },
  {
    "id": "chalisa-path",
    "majorCategoryId": "chalisa",
    "majorCategoryTitle": {
      "hi": "५. सतगुरु कबीर चालीसा पाठ",
      "pb": "੫. ਸਤਿਗੁਰੂ ਕਬੀਰ ਚਾਲੀਸਾ ਪਾਠ",
      "en": "5. Satguru Kabir Chalisa Path"
    },
    "subGroup": "चालीसा पाठ",
    "title": {
      "hi": "सतगुरु कबीर चालीसा पाठ",
      "pb": "ਸਤਿਗੁਰੂ ਕਬੀਰ ਚਾਲੀਸਾ ਪਾਠ",
      "en": "Satguru Kabir Chalisa Path"
    },
    "subtitle": {
      "hi": "४० चौपाइयों में सतगुरु कबीर साहेब की संपूर्ण स्तुति एवं संकट हरण",
      "pb": "ਸਤਿਗੁਰੂ ਕਬੀਰ ਸਾਹੇਬ ਦੀ ਚਾਲੀਸਾ",
      "en": "Forty Hymns in Glory and Protection of Satguru Kabir"
    },
    "iconName": "Sparkles",
    "estimatedMinutes": 15,
    "totalVerses": KABIR_CHALISA_VERSES.length - 1,
    "verses": KABIR_CHALISA_VERSES.slice(1)
  },
  {
    "id": "barahmasi-path",
    "majorCategoryId": "barahmasi",
    "majorCategoryTitle": {
      "hi": "६. बारहमासी पाठ",
      "pb": "੬. ਬਾਰਹਮਾਸੀ ਪਾਠ",
      "en": "6. Barahmasi (Twelve Months Spiritual Journey)"
    },
    "subGroup": "बारहमासी",
    "title": {
      "hi": "बारहमासी पाठ (असाड़ ते जेठ)",
      "pb": "ਬਾਰਹਮਾਸੀ ਪਾਠ (ਅਸਾੜ ਤੋਂ ਜੇਠ)",
      "en": "Barahmasi Path (Asaad to Jeth)"
    },
    "subtitle": {
      "hi": "बारह महीनों में विरह, भक्ति, नाम-साधना एवं आत्म-मिलन",
      "pb": "ਬਾਰਾਂ ਮਹੀਨਿਆਂ ਦੀ ਆਤਮਿਕ ਭਗਤੀ",
      "en": "The Year-Round Cycle of Devotion & Divine Union"
    },
    "iconName": "Calendar",
    "estimatedMinutes": 10,
    "totalVerses": 15,
    "verses": [
      ...BARAHMASI_VERSES
    ]
  },
  {
    "id": "teesa-yantra-path",
    "majorCategoryId": "teesa-yantra",
    "majorCategoryTitle": {
      "hi": "७. तीसा यंत्र",
      "pb": "੭. ਤੀਸਾ ਯੰਤ੍ਰ",
      "en": "7. Teesa Yantra (Thirty Sacred Letters & Mystic Grid)"
    },
    "subGroup": "तीसा यंत्र",
    "title": {
      "hi": "तीसा यंत्र (अथ श्री तीसा यंत्र पाठ)",
      "pb": "ਤੀਸਾ ਯੰਤ੍ਰ (ਅਥ ਸ਼੍ਰੀ ਤੀਸਾ ਯੰਤ੍ਰ ਪਾਠ)",
      "en": "Teesa Yantra (Thirty Sacred Letters)"
    },
    "subtitle": {
      "hi": "तीस अक्षरों का आध्यात्मिक रहस्य, सुरति चक्र एवं रक्षा स्तोत्र",
      "pb": "ਤੀਹ ਅੱਖਰਾਂ ਦਾ ਰਹੱਸ ਅਤੇ ਰੱਖਿਆ ਯੰਤਰ",
      "en": "Esoteric Thirty-Letter Grid & Spiritual Shield"
    },
    "iconName": "Shield",
    "estimatedMinutes": 10,
    "totalVerses": 32,
    "verses": [
      ...TEESA_YANTRA_VERSES
    ]
  }
];
