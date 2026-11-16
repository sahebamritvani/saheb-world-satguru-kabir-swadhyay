import { db } from '../lib/firebase';
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';

export interface Sakhi {
  id?: string;
  title: string;
  content: string;
  category?: string;
}

export interface QuizQuestion {
  id?: string;
  question: string;
  options: string[];
  correctAnswer: string;
}

// Sakhi Services
export const getSakhis = async (): Promise<Sakhi[]> => {
  const querySnapshot = await getDocs(collection(db, 'sakhis'));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Sakhi));
};

export const addSakhi = async (sakhi: Sakhi) => {
  return await addDoc(collection(db, 'sakhis'), sakhi);
};

// Quiz Services
export const getQuizQuestions = async (): Promise<QuizQuestion[]> => {
  const querySnapshot = await getDocs(collection(db, 'quizQuestions'));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as QuizQuestion));
};

export const addQuizQuestion = async (question: QuizQuestion) => {
  return await addDoc(collection(db, 'quizQuestions'), question);
};
