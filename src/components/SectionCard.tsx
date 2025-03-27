import React from 'react';
import { ChevronRight } from 'lucide-react';
import type { Section } from '../types';

interface SectionCardProps {
  section: Section;
  onClick: (sectionId: string) => void;
}

export const SectionCard: React.FC<SectionCardProps> = ({ section, onClick }) => {
  const IconComponent = section.icon;
  
  return (
    <div
      onClick={() => onClick(section.id)}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer border border-gray-200 dark:border-gray-700"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {section.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {section.description}
          </p>
          <div className="mt-4 flex items-center text-indigo-600 dark:text-indigo-400">
            <span className="text-sm font-medium">Start Practice</span>
            <ChevronRight className="w-4 h-4 ml-1" />
          </div>
        </div>
        <div className="text-indigo-600 dark:text-indigo-400">
          <IconComponent className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
};