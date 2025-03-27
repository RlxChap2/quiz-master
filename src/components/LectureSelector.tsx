import React from 'react';
import type { Lecture } from '../types';

interface LectureSelectorProps {
  lectures: Lecture[];
  onSelect: (lecture: Lecture) => void;
  onBack: () => void;
  language: 'en' | 'ar';
}

export const LectureSelector: React.FC<LectureSelectorProps> = ({
  lectures,
  onSelect,
  onBack,
  language
}) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {language === 'en' ? 'Select a Lecture' : 'اختر المحاضرة'}
        </h2>
        <div className="grid gap-4">
          {lectures.map((lecture) => (
            <button
              key={lecture.id}
              onClick={() => onSelect(lecture)}
              className="w-full text-left p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {lecture.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {language === 'en' 
                  ? `${lecture.questions.length} questions`
                  : `${lecture.questions.length} سؤال`}
              </p>
            </button>
          ))}
        </div>
      </div>
      <button
        onClick={onBack}
        className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
      >
        {language === 'en' ? 'Back to Sections' : 'العودة إلى الأقسام'}
      </button>
    </div>
  );
};