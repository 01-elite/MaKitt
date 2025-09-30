import React, { useState, useEffect, useRef } from 'react';

const useOnScreen = (options: IntersectionObserverInit): [React.RefObject<HTMLDivElement>, boolean] => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, options);
        
        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref, options]);

    return [ref, isVisible];
};

export const AboutPage: React.FC = () => {
  const storyPoints = [
    {
      title: 'From a Spark to a Box',
      text: "Makitt was born from a simple idea: that everyone has a creative spark. In a world that's always rushing, we saw a need for moments of pause, focus, and pure, hands-on joy. Our founder, a lifelong crafter, was tired of hunting down materials and deciphering confusing instructions just to start a small project. What if, she wondered, everything you needed could arrive in one beautiful box?",
      img: 'images/GK1.jpg'
    },
    {
      title: 'An Experience Delivered',
      text: "That question sparked the creation of Makitt. We're not just selling kits; we're delivering experiences. We meticulously design each kit, source the finest materials, and write crystal-clear instructions so you can skip the prep and get straight to the best part: the making.",
      img: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?q=80&w=1200&auto=format&fit=crop'
    }
    
  ];

  return (
    <div className="bg-white/50 animate-fade-in">
      <div className="pt-32 pb-16 text-center">
          <p className="font-script text-3xl text-makitt-red">Our Story</p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mt-2">The Joy of Making</h1>
      </div>

      <div className="container mx-auto px-6 py-20">
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 top-0 h-full w-0.5 bg-makitt-red/20 -translate-x-1/2"></div>
            {storyPoints.map((point, index) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.5 });
  // Force second image to be on left side
  const isEven = index % 2 === 0 || index === 1;
  const imgOnLeft = index === 1;

  return (
    <div 
      ref={ref}
      key={index} 
      className={`relative mb-20 flex items-center ${imgOnLeft ? 'flex-row-reverse justify-start' : isEven ? 'justify-start' : 'justify-end'}`}
    >
      <div className={`w-1/2 ${imgOnLeft ? 'pl-8 text-left' : isEven ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
        <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'} ${imgOnLeft ? (isVisible ? 'translate-x-0' : 'translate-x-8') : isEven ? (isVisible ? 'translate-x-0' : '-translate-x-8') : (isVisible ? 'translate-x-0' : 'translate-x-8')}`}>
          <h2 className="font-serif text-3xl font-bold mb-4">{point.title}</h2>
          <p className="text-gray-700 leading-relaxed">{point.text}</p>
        </div>
      </div>
      <div className="w-1/2 flex justify-center">
        <img
          src={point.img}
          alt={point.title}
          className="rounded-xl shadow-lg max-h-64 object-cover"
        />
      </div>
      <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-makitt-red rounded-full -translate-x-1/2 -translate-y-1/2 border-4 border-white/80"></div>
    </div>
  );
})}
          </div>
      </div>

      <div className="bg-makitt-paper py-20">
        <div className="container mx-auto px-6 text-center">
            <h2 className="font-serif text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
                To empower people of all ages and skill levels to discover their creativity, learn new skills, and experience the profound satisfaction of making something beautiful with their own hands.
            </p>
        </div>
      </div>
    </div>
  );
};
