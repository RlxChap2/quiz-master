import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { TestView } from './components/TestView';
import { LectureSelector } from './components/LectureSelector';
import { CoursesPage } from './components/CoursesPage';
import { SourcesPage } from './components/SourcesPage';
import { QuizPage } from './components/QuizPage';
import { EasterEgg } from './components/EasterEgg';
import type { Section, Lecture, ActivePage } from './types';

function App() {
    const [isDark, setIsDark] = useState(false);
    const [selectedSection, setSelectedSection] = useState<Section | null>(null);
    const [selectedLecture, setSelectedLecture] = useState<Lecture | null>(null);
    const [activePage, setActivePage] = useState<ActivePage>('home');
    const [showEasterEgg, setShowEasterEgg] = useState(false);

    const [showArrowEasterEgg, setShowArrowEasterEgg] = useState(false);
    const [, setInputSequence] = useState<string[]>([]);

    const secretCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown'];

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            setInputSequence((prev) => {
                const newSequence = [...prev, e.key].slice(-secretCode.length);
                if (JSON.stringify(newSequence) === JSON.stringify(secretCode)) {
                    setShowArrowEasterEgg(true);
                }
                return newSequence;
            });
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const toggleTheme = () => {
        setIsDark(!isDark);
        document.documentElement.classList.toggle('dark');
    };

    const renderContent = () => {
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

        switch (activePage) {
            case 'quiz':
                return <QuizPage />;
            case 'courses':
                return <CoursesPage />;
            case 'sources':
                return <SourcesPage />;
            default:
                return (
                    <div className="text-center mt-12">
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Welcome to QuizMaster</h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">Your comprehensive learning platform</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            <FeatureCard
                                title="Interactive Quizzes"
                                description="Test your knowledge with our comprehensive quiz collection"
                                onClick={() => setActivePage('quiz')}
                            />
                            <FeatureCard
                                title="Video Courses"
                                description="Learn from expert instructors through video lessons"
                                onClick={() => setActivePage('courses')}
                            />
                            <FeatureCard
                                title="Study Resources"
                                description="Access a wide range of learning materials"
                                onClick={() => setActivePage('sources')}
                            />
                        </div>
                        {/* Hidden Easter Egg Button */}
                        <button
                            onClick={() => setShowEasterEgg(true)}
                            className="fixed bottom-0 right-0 w-4 h-4 opacity-0 hover:opacity-100 transition-opacity duration-300"
                            aria-label="Easter Egg"
                        />
                    </div>
                );
        }
    };

    return (
        <>
            <Navbar isDark={isDark} toggleTheme={toggleTheme} activePage={activePage} onNavigate={setActivePage} />
            <div className="min-h-screen pt-20 p-6 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto">{renderContent()}</div>
            </div>

            {/* Easter Eggs */}
            <EasterEgg show={showEasterEgg} onClose={() => setShowEasterEgg(false)} videoSrc="./easteregg.mp4" />
            <EasterEgg show={showArrowEasterEgg} onClose={() => setShowArrowEasterEgg(false)} videoSrc="./easteregg2.mp4" />
        </>
    );
}

interface FeatureCardProps {
    title: string;
    description: string;
    onClick: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, onClick }) => {
    return (
        <button onClick={onClick} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-left">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{description}</p>
        </button>
    );
};

export default App;
