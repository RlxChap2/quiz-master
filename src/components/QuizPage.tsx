import React, { useState } from 'react';
import { Search, Filter, BookOpen, FileText, Users, ArrowRight, Globe, MessageSquareMore } from 'lucide-react';
import type { QuizCategory, Section, Lecture } from '../types';
import { TestView } from './TestView';
import { LectureSelector } from './LectureSelector';
import {
  programmingQuestions,
  mathQuestions,
  scienceQuestions,
  generalKnowledgeQuestions,
  personalCommunication
} from '../data/sampleQuestions';

const quizCategories: QuizCategory[] = [
  {
    id: '1',
    title: 'Programming Test Bank',
    description: 'Official test bank questions for programming courses',
    icon: 'BookOpen',
    count: 0,
    type: 'testBank',
    questions: [],
    lectures: []
  },
  {
    id: '2',
    title: 'Mathematics Sheets',
    description: 'Practice sheets for various math topics',
    icon: 'FileText',
    count: 0,
    type: 'sheet',
    questions: [],
    lectures: []
  },
  {
    id: '3',
    title: 'Lectures Programming Questions',
    description: 'Community-contributed programming challenges',
    icon: 'Users',
    count: 40,
    type: 'public',
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
          },]
  },
  {
    id: '4',
    title: 'السياق الاجتماعي',
    description: 'اختبر معرفتك في السياق الاجتماعي',
    icon: 'Globe',
    count: 22,
    type: 'public',
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
    id: '5',
    title: 'التواصل الشخصي',
    description: 'اسئلة عامة للمحاضرات عن التواصل الشخصي',
    icon: 'MessageSquareMore',
    questions: personalCommunication,
    count: 44,
    type: 'public',
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
];

const categories = ['All', 'Test Banks', 'Practice Sheets', 'Public Questions'];

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'BookOpen':
      return <BookOpen className="w-8 h-8 text-indigo-500" />;
    case 'FileText':
      return <FileText className="w-8 h-8 text-green-500" />;
    case 'Users':
      return <Users className="w-8 h-8 text-blue-500" />;
    case 'Globe':
      return <Globe className="w-8 h-8 text-blue-500" />;
    case 'MessageSquareMore':
      return <MessageSquareMore className="w-8 h-8 text-green-500" />;
    default:
      return <BookOpen className="w-8 h-8 text-gray-500" />;
  }
};

export const QuizPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSection, setSelectedSection] = useState<Section | null>(null);
  const [selectedLecture, setSelectedLecture] = useState<Lecture | null>(null);

  const getCategoryType = (category: string): string => {
    switch (category) {
      case 'Test Banks':
        return 'testBank';
      case 'Practice Sheets':
        return 'sheet';
      case 'Public Questions':
        return 'public';
      default:
        return '';
    }
  };

  const filteredCategories = quizCategories.filter(category => {
    const matchesCategory = selectedCategory === 'All' || 
                          category.type === getCategoryType(selectedCategory).toLowerCase();
    const matchesSearch = category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         category.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (selectedSection && selectedLecture) {
    return (
      <TestView
        sectionTitle={selectedSection.title}
        questions={selectedLecture.questions}
        onBack={() => setSelectedLecture(null)}
        lecture={selectedLecture}
      />
    );
  }

  if (selectedSection) {
    return (
      <LectureSelector
        lectures={selectedSection.lectures}
        onSelect={setSelectedLecture}
        onBack={() => setSelectedSection(null)}
        language="en"
      />
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Quiz Categories</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Choose from our collection of quizzes and practice materials
          </p>
        </div>
        
        <div className="flex items-center gap-4 w-full md:w-auto flex-wrap">
          <div className="relative flex-1 md:flex-none">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search quizzes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full md:w-64 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500 appearance-none"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map(category => (
          <button
            key={category.id}
            onClick={() => {
              const section = quizCategories.find(section => section.id === category.id);
              if (section) {
                setSelectedSection(section);
              }
            }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer group text-left w-full"
          >
            <div className="flex items-start justify-between mb-4">
              {getIconComponent(category.icon)}
              <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 text-sm rounded-full">
                {category.count} questions
              </span>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {category.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {category.description}
            </p>
            
            <div className="flex items-center justify-between mt-4">
              <span className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                {category.type === 'testBank' ? 'Test Bank' : 
                 category.type === 'sheet' ? 'Practice Sheet' : 'Public Questions'}
              </span>
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform">
                <span>Start Quiz</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};