import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import type { Question, TestResult, Language } from '../types';
import { CodeBlock } from './CodeBlock';
import { MathFormula } from './MathFormula';

interface AnswerReviewProps {
  questions: Question[];
  testResult: TestResult;
  language: Language;
  onBack: () => void;
}

export const AnswerReview: React.FC<AnswerReviewProps> = ({
  questions,
  testResult,
  language,
  onBack
}) => {
  const renderContent = (content: string) => {
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

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        {language === 'en' ? 'Answer Review' : 'مراجعة الإجابات'}
      </h2>
      <div className="space-y-8 mb-8">
        {questions.map((question, index) => {
          const userAnswer = testResult.answers[question.id];
          const isCorrect = userAnswer === question.correctAnswer;

          return (
            <div
              key={question.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {language === 'en' ? `Question ${index + 1}` : `السؤال ${index + 1}`}
                </h3>
                {isCorrect ? (
                  <CheckCircle className="w-6 h-6 text-green-500" />
                ) : (
                  <XCircle className="w-6 h-6 text-red-500" />
                )}
              </div>
              <div className="mb-4">
                {renderContent(question.question[language])}
              </div>
              <div className="space-y-2">
                {question.options[language].map((option, optionIndex) => (
                  <div
                    key={optionIndex}
                    className={`p-3 rounded-lg ${
                      optionIndex === question.correctAnswer
                        ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300'
                        : optionIndex === userAnswer
                        ? 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300'
                        : 'bg-gray-50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {renderContent(option)}
                  </div>
                ))}
              </div>
              {question.explanation && (
                <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-blue-700 dark:text-blue-300">
                    {language === 'en' ? 'Explanation: ' : 'الشرح: '}
                    {question.explanation[language]}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="flex justify-between items-center">
        <button
          onClick={onBack}
          className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          {language === 'en' ? 'Back to Results' : 'العودة إلى النتائج'}
        </button>
      </div>
    </div>
  );
};