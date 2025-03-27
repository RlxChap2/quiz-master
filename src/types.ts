import { FC } from 'react';

export interface Question {
  id: string;
  question: {
    en: string;
    ar: string;
  };
  options: {
    en: string[];
    ar: string[];
  };
  correctAnswer: number;
  explanation?: {
    en: string;
    ar: string;
  };
}

export interface Section {
  id: string;
  title: string;
  description: string;
  icon: string;
  questions: Question[];
  lectures: Lecture[];
}

export interface Lecture {
  id: string;
  title: string;
  questions: Question[];
}

export interface TestResult {
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  score: number;
  answers: { [key: string]: number };
}

export type Language = 'en' | 'ar';