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

export type Language = "en" | "ar";

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  videoType: string;
  instructor: string;
  duration: string;
  videoUrl?: string;
  localFile?: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: "pdf" | "image" | "testBank" | "solution" | "sheet";
  url: string;
  fileType: string;
  size: string;
  subject: "Mathematics" | "Programming" | "Physics" | "اقتصاديات الحوسبة" | "التواصل الشخصي";
}

export interface QuizCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  count: number;
  type: "testBank" | "sheet" | "public";
  questions: Question[];
  lectures: Lecture[];
}

export type ActivePage = "home" | "quiz" | "courses" | "sources";
