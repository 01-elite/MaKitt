import React, { useState, useEffect, useRef } from 'react';
import Logo from '../images/LogoMakitt.png';

const ChatbotBubble = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    
    const chatContainerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (chatContainerRef.current && !chatContainerRef.current.contains(event.target)) {
                setIsChatOpen(false);
            }
        };

        if (isChatOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isChatOpen]);

    const handleBubbleClick = () => {
        setIsChatOpen(!isChatOpen);
    };

    return (
        <div 
            ref={chatContainerRef} 
            className="fixed bottom-4 right-4 z-[10000]"
        >
            {/* The Chat Window (now responsive) */}
            {isChatOpen && (
                <div 
                    className="
                        bg-white rounded-xl shadow-lg 
                        w-64 sm:w-80 h-96 mb-2
                        overflow-hidden flex flex-col
                    "
                >
                    <iframe
                        src="https://www.chatbase.co/chatbot-iframe/mpbrWYTvQBLefV24kaaQb"
                        width="100%"
                        style={{ height: '100%' }}
                        frameBorder="0"
                    ></iframe>
                </div>
            )}

            {/* The Chat Bubble and Label */}
            <div className="flex items-center space-x-2">
                <span className={`
                    bg-gray-600 text-white text-base px-4 py-2 rounded-lg
                `}>
                    Hi! What can I help you with?
                </span>

                <button 
                    onClick={handleBubbleClick}
                    className="
                        rounded-full 
                        w-20 h-20 flex items-center justify-center 
                        shadow-lg transition-colors 
                        duration-200 focus:outline-none focus:ring-makitt-red
                        overflow-hidden
                    "
                >
                    <img 
                        src={Logo}
                        alt="Makitt Logo"
                        className=" w-full h-full object-cover rounded-full"
                    />
                </button>
            </div>
        </div>
    );
};

export default ChatbotBubble;