import React, { useState } from 'react';
import { PlusCircle, BookOpen, Code, Calculator, AtomIcon, Globe, CircleDollarSign, MessageSquareMore } from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';
import { SectionCard } from './components/SectionCard';
import { TestView } from './components/TestView';
import { LectureSelector } from './components/LectureSelector';
import type { Section, Lecture } from './types';
import {
  programmingQuestions,
  mathQuestions,
  scienceQuestions,
  generalKnowledgeQuestions,
  economicsQuestions,
  personalCommunication,
} from './data/sampleQuestions';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState<Section | null>(null);
  const [selectedLecture, setSelectedLecture] = useState<Lecture | null>(null);
  const [sections, setSections] = useState<Section[]>([
    {
      id: '1',
      title: 'Programming',
      description: 'Test your knowledge in various programming languages and concepts',
      icon: 'Code',
      questions: programmingQuestions,
      lectures: [
        {
          id: 'prog-lec1',
          title: 'Lecture 1: Introduction to Programming',
          questions: programmingQuestions.slice(0, 4)
        },
        {
          id: 'prog-lec2',
          title: 'Lecture 2: Basics of C# Programming',
          questions: programmingQuestions.slice(4, 15)
        },
        {
          id: 'prog-lec3',
          title: 'Lecture 3: Primitive Types and Variables',
          questions: programmingQuestions.slice(15, 21)
        },
        {
          id: 'prog-lec4',
          title: 'Lecture 4: Operators and Expressions',
          questions: programmingQuestions.slice(21, 29)
        },
        {
          id: 'prog-lec5',
          title: 'Lecture 5: Conditional Statements',
          questions: programmingQuestions.slice(29, 35)
        },
        {
          id: 'prog-lec6',
          title: 'Lecture 6: Control Structures (Repetition)',
          questions: programmingQuestions.slice(35, 40)
        },
      ]
    },
    {
      id: '2',
      title: 'السياق الاجتماعي',
      description: 'اختبر معرفتك في السياق الاجتماعي',
      icon: 'Globe',
      questions: generalKnowledgeQuestions,
      lectures: [
        {
          id: 'gk-lec1',
          title: 'محاضرة 1: مصطلحات عامة في السياق الاجتماعي للحوسبة',
          questions: generalKnowledgeQuestions.slice(0, 9)
        },
        {
          id: 'gk-lec3',
          title: 'محاضرة 3: الفجوة الرقمية',
          questions: generalKnowledgeQuestions.slice(9, 22)
        }
      ]
    },
    {
      id: '3',
      title: 'التواصل الشخصي',
      description: 'اختبر معرفتك في التواصل الشخصي',
      icon: 'MessageSquareMore',
      questions: personalCommunication,
      lectures: [
        {
          id: 'pc-lec1',
          title: 'محاضرة 1: مقدمة في التسويق الشخصي',
          questions: personalCommunication.slice(0, 10)
        },
        {
          id: 'pc-lec2',
          title: 'محاضرة 2: تحديد الذات و تحديد الاهداف',
          questions: personalCommunication.slice(10, 19)
        },
        {
          id: 'pc-lec3',
          title: 'محاضرة 3: بناءالعلامة الشخصية',
          questions: personalCommunication.slice(19, 29)
        },
        {
          id: 'pc-lec4',
          title: 'محاضرة 4: استخدام وسائل التواصل الاجتماعي في التسويق الشخصي',
          questions: personalCommunication.slice(29, 36)
        },
        {
          id: 'pc-lec5',
          title: 'محاضرة 5: الشبكات المهنية و بناء العلاقات',
          questions: personalCommunication.slice(36, 44)
        },
      ]
    },
    // {
    //   id: '3',
    //   title: 'Mathematics',
    //   description: 'Practice mathematical problems from basic to advanced levels',
    //   icon: 'Calculator',
    //   questions: mathQuestions,
    //   lectures: [
    //     {
    //       id: 'math-lec1',
    //       title: 'Lecture 1: Geometry & Algebra',
    //       questions: mathQuestions.slice(0, 2)
    //     },
    //     {
    //       id: 'math-lec2',
    //       title: 'Lecture 2: Calculus & Linear Algebra',
    //       questions: mathQuestions.slice(2)
    //     }
    //   ]
    // },
    // {
    //   id: '4',
    //   title: 'Physics',
    //   description: 'Explore questions in physics',
    //   icon: 'AtomIcon',
    //   questions: scienceQuestions,
    //   lectures: [
    //     {
    //       id: 'sci-lec1',
    //       title: 'Lecture 1: Classical Physics',
    //       questions: scienceQuestions.slice(0, 2)
    //     },
    //     {
    //       id: 'sci-lec2',
    //       title: 'Lecture 2: Modern Physics & Chemistry',
    //       questions: scienceQuestions.slice(2)
    //     }
    //   ]
    // },
  ]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const getIconComponent = (iconName: string) => {
    const icons: { [key: string]: React.FC } = {
      Code,
      Calculator,
      AtomIcon,
      Globe,
      BookOpen,
      MessageSquareMore,
    };
    return icons[iconName] || BookOpen;
  };

  if (selectedSection && selectedLecture) {
    return (
      <div className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <TestView
            sectionTitle={selectedSection.title}
            questions={selectedLecture.questions}
            onBack={() => setSelectedLecture(null)}
            lecture={selectedLecture}
          />
        </div>
      </div>
    );
  }

  if (selectedSection) {
    return (
      <div className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <LectureSelector
            lectures={selectedSection.lectures}
            onSelect={setSelectedLecture}
            onBack={() => setSelectedSection(null)}
            language="en"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              QuizMaster
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Master your knowledge through interactive quizzes
            </p>
          </div>
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => (
            <SectionCard
              key={section.id}
              section={{ ...section, icon: getIconComponent(section.icon) }}
              onClick={() => setSelectedSection(section)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;