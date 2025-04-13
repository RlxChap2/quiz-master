import React from 'react';

interface EasterEggProps {
    show: boolean;
    onClose: () => void;
}

export const EasterEgg: React.FC<EasterEggProps> = ({ show, onClose }) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={onClose}>
            <div className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden">
                <video autoPlay controls className="w-full" onClick={(e) => e.stopPropagation()}>
                    <source src="./easteregg.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};
