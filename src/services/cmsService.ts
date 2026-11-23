import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { collection, getDocs, addDoc, doc, deleteDoc } from 'firebase/firestore';
import { isFirebaseAdminVerified } from './adminAuth';

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

// Sakhi Services (Public Read-Only, Admin Write)
export const getSakhis = async (): Promise<Sakhi[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, 'sakhis'));
    return querySnapshot.docs.map((d) => ({ id: d.id, ...d.data() } as Sakhi));
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, 'sakhis');
    return [];
  }
};

export const addSakhi = async (sakhi: Sakhi) => {
  if (!isFirebaseAdminVerified()) {
    throw new Error('केवल अधिकृत एडमिन ही नई साखी जोड़ सकते हैं।');
  }
  try {
    const payload: Record<string, string> = {
      title: String(sakhi.title || '').trim().slice(0, 200),
      content: String(sakhi.content || '').trim().slice(0, 50000),
    };
    if (sakhi.category?.trim()) {
      payload.category = sakhi.category.trim().slice(0, 100);
    }
    return await addDoc(collection(db, 'sakhis'), payload);
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, 'sakhis');
    throw error;
  }
};

export const deleteSakhi = async (sakhiId: string) => {
  if (!isFirebaseAdminVerified()) {
    throw new Error('केवल अधिकृत एडमिन ही साखी हटा सकते हैं।');
  }
  try {
    await deleteDoc(doc(db, 'sakhis', sakhiId));
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, `sakhis/${sakhiId}`);
    throw error;
  }
};

// Quiz Services (Public Read-Only, Admin Write)
export const getQuizQuestions = async (): Promise<QuizQuestion[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, 'quizQuestions'));
    return querySnapshot.docs.map((d) => ({ id: d.id, ...d.data() } as QuizQuestion));
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, 'quizQuestions');
    return [];
  }
};

export const addQuizQuestion = async (question: QuizQuestion) => {
  if (!isFirebaseAdminVerified()) {
    throw new Error('केवल अधिकृत एडमिन ही प्रश्नोत्तरी जोड़ सकते हैं।');
  }
  try {
    const payload = {
      question: String(question.question || '').trim().slice(0, 1000),
      options: (question.options || []).slice(0, 10).map((o) => String(o).trim().slice(0, 300)),
      correctAnswer: String(question.correctAnswer || '').trim().slice(0, 500),
    };
    return await addDoc(collection(db, 'quizQuestions'), payload);
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, 'quizQuestions');
    throw error;
  }
};
