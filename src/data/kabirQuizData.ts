import { QuizQuestion } from '../types';

export const KABIR_LIFE_QUIZ: QuizQuestion[] = [
  {
    id: 'kq-placeholder',
    question: {
      hi: 'जीवन परिचय प्रश्नोत्तरी (स्थान सुरक्षित - मूल प्रश्न हेतु)',
      pb: 'ਜੀਵਨ ਪਰਿਚਯ ਪ੍ਰਸ਼ਨੋਤਰੀ (ਸਥਾਨ ਸੁਰੱਖਿਅਤ - ਮੂਲ ਪ੍ਰਸ਼ਨ ਲਈ)',
      en: 'Life Biography Quiz (Reserved Space for Authentic Questions)'
    },
    options: {
      hi: ['स्थान सुरक्षित 1', 'स्थान सुरक्षित 2', 'स्थान सुरक्षित 3', 'स्थान सुरक्षित 4'],
      pb: ['ਸਥਾਨ ਸੁਰੱਖਿਅਤ 1', 'ਸਥਾਨ ਸੁਰੱਖਿਅਤ 2', 'ਸਥਾਨ ਸੁਰੱਖਿਅਤ 3', 'ਸਥਾਨ ਸੁਰੱਖਿਅਤ 4'],
      en: ['Reserved Space 1', 'Reserved Space 2', 'Reserved Space 3', 'Reserved Space 4']
    },
    correctIndex: 0,
    explanation: {
      hi: 'यहाँ आपके द्वारा दी जाने वाली प्रामाणिक जीवन परिचय प्रश्नोत्तरी जोड़ी जाएगी।',
      pb: 'ਇੱਥੇ ਤੁਹਾਡੇ ਵੱਲੋਂ ਦਿੱਤੀ ਜਾਣ ਵਾਲੀ ਪ੍ਰਮਾਣਿਕ ਜੀਵਨ ਪਰਿਚਯ ਪ੍ਰਸ਼ਨੋਤਰੀ ਸ਼ਾਮਲ ਕੀਤੀ ਜਾਵੇਗੀ।',
      en: 'Authentic biography questions provided by you will be added here.'
    }
  }
];
