import { db } from '../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { KABIR_LIFE_QUIZ } from './kabirQuizData';
import { SAKHIS_BATCH_1 } from './sakhisBatch1';

export const seedDatabase = async () => {
  try {
    // Seed Sakhis
    const sakhiCollection = collection(db, 'sakhis');
    for (const sakhi of SAKHIS_BATCH_1) {
      await addDoc(sakhiCollection, {
        title: sakhi.text?.hi || 'Untitled Sakhi',
        content: sakhi.bhavarth?.hi || '',
        category: sakhi.category || 'General'
      });
    }

    // Seed Quiz
    const quizCollection = collection(db, 'quizQuestions');
    for (const q of KABIR_LIFE_QUIZ) {
      await addDoc(quizCollection, {
        question: q.question.hi,
        options: q.options.hi,
        correctAnswer: q.options.hi[q.correctIndex]
      });
    }
    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};
