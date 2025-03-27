import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, XCircle } from 'lucide-react';
import type { Question, TestResult, Language, Lecture } from '../types';
import { CodeBlock } from './CodeBlock';
import { MathFormula } from './MathFormula';
import { AnswerReview } from './AnswerReview';

interface TestViewProps {
  sectionTitle: string;
  questions: Question[];
  onBack: () => void;
  lecture?: Lecture;
}

export const TestView: React.FC<TestViewProps> = ({ sectionTitle, questions, onBack, lecture }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [testResult, setTestResult] = useState<TestResult | null>(null);
  const [language, setLanguage] = useState<Language>('en');

  const handleAnswerSelect = (questionId: string, answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const calculateResults = () => {
    let correct = 0;
    let wrong = 0;

    questions.forEach(question => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correct++;
      } else {
        wrong++;
      }
    });

    const result: TestResult = {
      totalQuestions: questions.length,
      correctAnswers: correct,
      wrongAnswers: wrong,
      score: (correct / questions.length) * 100,
      answers: selectedAnswers
    };

    setTestResult(result);
    setShowResults(true);
  };

  const renderQuestionContent = (content: string) => {
    if (content.includes('```')) {
      const parts = content.split('```');
      return parts.map((part, index) => {
        if (index % 2 === 1) {
          const [lang, ...code] = part.split('\n');
          return (
            <div key={index} className="my-4">
              <CodeBlock code={code.join('\n')} language={lang.trim()} />
            </div>
          );
        }
        if (part.includes('$')) {
          const mathParts = part.split('$');
          return mathParts.map((mathPart, mathIndex) => {
            if (mathIndex % 2 === 1) {
              return <MathFormula key={mathIndex} formula={mathPart} />;
            }
            return <span key={mathIndex}>{mathPart}</span>;
          });
        }
        return <span key={index}>{part}</span>;
      });
    }
    if (content.includes('$')) {
      const parts = content.split('$');
      return parts.map((part, index) => {
        if (index % 2 === 1) {
          return <MathFormula key={index} formula={part} />;
        }
        return <span key={index}>{part}</span>;
      });
    }
    return content;
  };

  const isLastQuestion = currentQuestion === questions.length - 1;
  const currentQuestionData = questions[currentQuestion];

  if (showReview && testResult) {
    return (
      <AnswerReview
        questions={questions}
        testResult={testResult}
        language={language}
        onBack={() => setShowReview(false)}
      />
    );
  }

  if (showResults && testResult) {
    return (
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {language === 'en' ? 'Test Results' : 'نتائج الاختبار'}
          </h2>
          {lecture && (
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {lecture.title}
            </p>
          )}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-green-700 dark:text-green-400">
                  {language === 'en' ? 'Correct Answers' : 'الإجابات الصحيحة'}
                </span>
              </div>
              <p className="text-2xl font-bold text-green-700 dark:text-green-400 mt-2">
                {testResult.correctAnswers}
              </p>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-500" />
                <span className="text-red-700 dark:text-red-400">
                  {language === 'en' ? 'Wrong Answers' : 'الإجابات الخاطئة'}
                </span>
              </div>
              <p className="text-2xl font-bold text-red-700 dark:text-red-400 mt-2">
                {testResult.wrongAnswers}
              </p>
            </div>
          </div>
          <div className="mt-6">
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-400">
                {language === 'en' ? 'Final Score' : 'النتيجة النهائية'}
              </h3>
              <p className="text-3xl font-bold text-indigo-700 dark:text-indigo-400 mt-2">
                {testResult.score.toFixed(1)}%
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {language === 'en' ? 'Back to Sections' : 'العودة إلى الأقسام'}
          </button>
          <button
            onClick={() => setShowReview(true)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            {language === 'en' ? 'Review Answers' : 'مراجعة الإجابات'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{sectionTitle}</h2>
          {lecture && (
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              {lecture.title}
            </p>
          )}
        </div>
        <div className="flex items-center gap-4">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as Language)}
            className="px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:text-white"
          >
            <option value="en">🇺🇸 English</option>
            <option value="ar">🇪🇬 العربية</option>
          </select>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {language === 'en' 
              ? `Question ${currentQuestion + 1} of ${questions.length}`
              : `السؤال ${currentQuestion + 1} من ${questions.length}`}
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg mb-6">
        <h3 className="text-xl text-gray-900 dark:text-white mb-4">
          {renderQuestionContent(currentQuestionData.question[language])}
        </h3>
        <div className="space-y-3">
          {currentQuestionData.options[language].map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(currentQuestionData.id, index)}
              className={`w-full text-left p-4 rounded-lg transition-colors ${
                selectedAnswers[currentQuestionData.id] === index
                  ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300'
                  : 'bg-gray-50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {renderQuestionContent(option)}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {language === 'en' ? 'Back' : 'رجوع'}
        </button>

        {/* Back Button for the Last Question */}
        {selectedAnswers[currentQuestionData.id] !== undefined && (
        <>
          {/* Previous Question Button */}
          {currentQuestion > 0 && (
            <button
              onClick={() => setCurrentQuestion(prev => prev - 1)}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              {language === 'en' ? 'Previous Question' : 'السؤال السابق'}
            </button>
          )}
        </>
      )}
        
        {selectedAnswers[currentQuestionData.id] !== undefined && (
          <button
            onClick={() => {
              if (isLastQuestion) {
                calculateResults();
              } else {
                setCurrentQuestion(prev => prev + 1);
              }
            }}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            {isLastQuestion 
              ? (language === 'en' ? 'Finish Test' : 'إنهاء الاختبار')
              : (language === 'en' ? 'Next Question' : 'السؤال التالي')}
          </button>
        )}
      </div>
    </div>
  );
};