import { useState, useEffect, useRef, useCallback } from 'react';
import { Language } from '../types';
import { sacredHaptics } from './haptics';

// Web Speech API interface declarations
interface IWindow extends Window {
  SpeechRecognition?: any;
  webkitSpeechRecognition?: any;
}

export interface UseVoiceInputOptions {
  language: Language;
  onTranscript?: (text: string, isFinal: boolean) => void;
  continuous?: boolean;
}

export function getSpeechRecognitionLanguage(lang: Language): string {
  switch (lang) {
    case 'pb':
      return 'pa-IN'; // Punjabi (India)
    case 'en':
      return 'en-IN'; // English (India)
    case 'hi':
    default:
      return 'hi-IN'; // Hindi (India)
  }
}

export function isSpeechRecognitionSupported(): boolean {
  if (typeof window === 'undefined') return false;
  const win = window as unknown as IWindow;
  return !!(win.SpeechRecognition || win.webkitSpeechRecognition);
}

export function useVoiceInput({
  language,
  onTranscript,
  continuous = false,
}: UseVoiceInputOptions) {
  const [isListening, setIsListening] = useState(false);
  const [interimText, setInterimText] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSupported, setIsSupported] = useState(false);

  const recognitionRef = useRef<any>(null);
  const onTranscriptRef = useRef(onTranscript);
  onTranscriptRef.current = onTranscript;

  useEffect(() => {
    setIsSupported(isSpeechRecognitionSupported());
  }, []);

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {}
      recognitionRef.current = null;
    }
    setIsListening(false);
    setInterimText('');
    sacredHaptics.lightTap();
  }, []);

  const startListening = useCallback(() => {
    setError(null);
    setInterimText('');

    if (typeof window === 'undefined') return;
    const win = window as unknown as IWindow;
    const SpeechRecognitionClass = win.SpeechRecognition || win.webkitSpeechRecognition;

    if (!SpeechRecognitionClass) {
      setError(
        language === 'pb'
          ? 'ਤੁਹਾਡਾ ਬ੍ਰਾਊਜ਼ਰ ਵੌਇਸ ਸਪੀਚ ਨੂੰ ਸਪੋਰਟ ਨਹੀਂ ਕਰਦਾ।'
          : language === 'en'
          ? 'Web Speech API is not supported in this browser.'
          : 'आपका ब्राउज़र वॉइस इनपुट का समर्थन नहीं करता है।'
      );
      return;
    }

    try {
      // Abort any existing recognition
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch {}
      }

      const recognition = new SpeechRecognitionClass();
      recognitionRef.current = recognition;

      recognition.continuous = continuous;
      recognition.interimResults = true;
      recognition.maxAlternatives = 1;
      recognition.lang = getSpeechRecognitionLanguage(language);

      recognition.onstart = () => {
        setIsListening(true);
        sacredHaptics.lightTap();
      };

      recognition.onresult = (event: any) => {
        let finalStr = '';
        let interimStr = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          const result = event.results[i];
          const transcript = result[0]?.transcript || '';
          if (result.isFinal) {
            finalStr += transcript;
          } else {
            interimStr += transcript;
          }
        }

        if (interimStr) {
          setInterimText(interimStr);
          if (onTranscriptRef.current) {
            onTranscriptRef.current(interimStr, false);
          }
        }

        if (finalStr) {
          setInterimText('');
          if (onTranscriptRef.current) {
            onTranscriptRef.current(finalStr, true);
          }
          sacredHaptics.lightTap();
        }
      };

      recognition.onerror = (event: any) => {
        console.warn('Speech recognition error:', event.error);
        if (event.error === 'not-allowed') {
          setError(
            language === 'pb'
              ? 'ਕਿਰਪਾ ਕਰਕੇ ਮਾਈਕ੍ਰੋਫ਼ੋਨ ਦੀ ਇਜਾਜ਼ਤ ਦਿਓ।'
              : language === 'en'
              ? 'Microphone access was denied. Please allow mic permissions.'
              : 'कृपया माइक्रोफ़ोन की अनुमति दें।'
          );
        } else if (event.error === 'no-speech') {
          // No speech detected, graceful
        } else {
          setError(event.error);
        }
        setIsListening(false);
        setInterimText('');
      };

      recognition.onend = () => {
        setIsListening(false);
        setInterimText('');
      };

      recognition.start();
    } catch (err: any) {
      console.error('Failed to start speech recognition:', err);
      setError(err?.message || 'Error starting speech input');
      setIsListening(false);
    }
  }, [language, continuous]);

  const toggleListening = useCallback(() => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  }, [isListening, startListening, stopListening]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch {}
      }
    };
  }, []);

  return {
    isListening,
    interimText,
    error,
    isSupported,
    startListening,
    stopListening,
    toggleListening,
  };
}
