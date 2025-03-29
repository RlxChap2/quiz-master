import React, { useState } from 'react';
import { Search, Filter, FileText, Image, BookOpen, FileCheck } from 'lucide-react';
import { resources } from "../data/SourcesPage";

const categories = ['All', 'PDF', 'Images', 'Test Banks', 'Solutions'];
const subjectCategories = ['All', 'Mathematics', 'Programming', 'Physics', 'اقتصاديات الحوسبة', 'التواصل الشخصي'];

const getCategoryIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case 'pdf':
      return <FileText className="w-6 h-6 text-red-500" />;
    case 'image':
      return <Image className="w-6 h-6 text-blue-500" />;
    case 'testbank':
      return <BookOpen className="w-6 h-6 text-indigo-500" />;
    case 'solution':
      return <FileCheck className="w-6 h-6 text-purple-500" />;
    case 'sheet':
      return <FileText className="w-6 h-6 text-green-500" />;
    default:
      return <FileText className="w-6 h-6 text-gray-500" />;
  }
};

export const SourcesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'All' || resource.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSubject = selectedSubject === 'All' || resource.subject.toLowerCase() === selectedSubject.toLowerCase();
    return matchesCategory && matchesSearch && matchesSubject;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Resources</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Access study materials, test banks, and solutions</p>
        </div>
        
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:flex-none">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search resources..."
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

            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500 appearance-none ml-3"
            >
              {subjectCategories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map(resource => (
          <div key={resource.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start justify-between mb-4">
              {getCategoryIcon(resource.category)}
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-md">
                {resource.fileType} • {resource.size}
              </span>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{resource.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{resource.description}</p>
            
            <button 
              onClick={() => window.open(resource.url, '_blank')}
              className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
            >
              <FileText className="w-5 h-5" />
              Download Resource
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};