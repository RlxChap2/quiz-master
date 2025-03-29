import React, { useState } from 'react';
import { Home, BookOpen, GraduationCap, Library, Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import type { ActivePage } from '../types';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme, activePage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (page: ActivePage) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button 
              onClick={() => handleNavigation('home')}
              className="flex items-center space-x-2 text-2xl font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
            >
              <BookOpen className="w-8 h-8" />
              <span>QuizMaster</span>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink 
              icon={<Home className="w-5 h-5" />} 
              text="Home" 
              isActive={activePage === 'home'}
              onClick={() => handleNavigation('home')}
            />
            <NavLink 
              icon={<BookOpen className="w-5 h-5" />} 
              text="Quiz" 
              isActive={activePage === 'quiz'}
              onClick={() => handleNavigation('quiz')}
            />
            <NavLink 
              icon={<GraduationCap className="w-5 h-5" />} 
              text="Courses" 
              isActive={activePage === 'courses'}
              onClick={() => handleNavigation('courses')}
            />
            <NavLink 
              icon={<Library className="w-5 h-5" />} 
              text="Sources" 
              isActive={activePage === 'sources'}
              onClick={() => handleNavigation('sources')}
            />
            <div className="ml-4">
              <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-4">
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
            <button
              onClick={toggleMobileMenu}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'max-h-96 opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-800 shadow-lg">
          <MobileNavLink 
            icon={<Home className="w-5 h-5" />}
            text="Home" 
            isActive={activePage === 'home'}
            onClick={() => handleNavigation('home')}
          />
          <MobileNavLink 
            icon={<BookOpen className="w-5 h-5" />}
            text="Quiz" 
            isActive={activePage === 'quiz'}
            onClick={() => handleNavigation('quiz')}
          />
          <MobileNavLink 
            icon={<GraduationCap className="w-5 h-5" />}
            text="Courses" 
            isActive={activePage === 'courses'}
            onClick={() => handleNavigation('courses')}
          />
          <MobileNavLink 
            icon={<Library className="w-5 h-5" />}
            text="Sources" 
            isActive={activePage === 'sources'}
            onClick={() => handleNavigation('sources')}
          />
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  icon: React.ReactNode;
  text: string;
  isActive?: boolean;
  onClick: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ icon, text, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out
        ${
          isActive
            ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20'
            : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20'
        }`}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
};

interface MobileNavLinkProps {
  icon: React.ReactNode;
  text: string;
  isActive?: boolean;
  onClick: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ icon, text, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 w-full px-4 py-3 rounded-md text-base font-medium transition-colors duration-150 ease-in-out
        ${
          isActive
            ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20'
            : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20'
        }`}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
};