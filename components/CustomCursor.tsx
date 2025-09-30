import React, { useState, useEffect } from 'react';

export const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            if (!isVisible) setIsVisible(true);
            setPosition({ x: e.clientX, y: e.clientY });
            const target = e.target as HTMLElement;
            if (target.closest('a, button, [role="button"], input')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };
        
        const onMouseLeave = () => {
            setIsVisible(false);
        }

        document.addEventListener('mousemove', onMouseMove);
        document.body.addEventListener('mouseleave', onMouseLeave);


        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.body.removeEventListener('mouseleave', onMouseLeave);
        };
    }, [isVisible]);

    const cursorSize = isHovering ? 28 : 12;

    return (
        <div
            className={`fixed pointer-events-none z-50 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                transform: 'translate(-50%, -50%)',
            }}
        >
            <div
                 className="rounded-full bg-makitt-red transition-all duration-200"
                 style={{
                    width: `${cursorSize}px`,
                    height: `${cursorSize}px`,
                    backgroundColor: isHovering ? 'rgba(185, 28, 28, 0.4)' : '#B91C1C',
                    border: isHovering ? 'none' : '2px solid #B91C1C',
                 }}
            />
        </div>
    );
};