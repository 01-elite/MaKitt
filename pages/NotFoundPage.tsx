import React from 'react';
import { Link } from 'react-router-dom';

const BrokenPotIcon = () => (
    <svg className="w-24 h-24 text-makitt-red/50 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l4.8 4.8" />
        <path d="M12 2v7.2" />
        <path d="M12 9.2l-4.8 4.8" />
        <path d="M12 9.2V2" />
        <path d="M16.8 6.8l-4.8 4.8" />
        <path d="M16.8 6.8v7.2" />
        <path d="M7.2 11.6l4.8 4.8" />
        <path d="M7.2 11.6V21" />
        <path d="M12 16.4l-4.8 4.8" />
        <path d="M12 16.4V9.2" />
        <path d="M4.8 14L2 16.8" />
        <path d="M19.2 14l2.8 2.8" />
        <path d="M4.8 9.2L2 12" />
        <path d="M19.2 9.2l2.8 2.8" />
    </svg>
);


export const NotFoundPage: React.FC = () => {
    return (
        <div className="container mx-auto px-6 py-20 min-h-[70vh] flex items-center justify-center">
            <div className="text-center">
                <BrokenPotIcon />
                <p className="font-script text-3xl text-makitt-red mt-4">Oops!</p>
                <h1 className="font-serif text-5xl font-bold mt-2">Page Not Found</h1>
                <p className="text-lg text-gray-600 mt-4 max-w-md mx-auto">
                    It seems this page got broken in the kiln. Let's get you back to something solid.
                </p>
                <div className="mt-8">
                    <Link
                        to="/"
                        className="bg-makitt-red text-white font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-all text-lg shadow-md"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};
