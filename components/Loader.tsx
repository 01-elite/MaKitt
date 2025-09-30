
import React from 'react';

export const Loader: React.FC = () => {
    return (
        <div className="fixed inset-0 z-50 bg-makitt-red flex items-center justify-center">
            <div className="text-center text-white animate-fade-in">
                <div className="flex justify-center items-baseline">
                    <div className="font-serif text-6xl font-bold animate-spin-subtle">
                        M
                    </div>
                    <h1 className="font-serif text-6xl font-bold">akitt</h1>
                </div>
                <p className="font-script text-2xl mt-4">Make it with Makitt</p>
            </div>
        </div>
    );
};