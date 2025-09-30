import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import ChatbotBubble from '../components/ChatbotBubble';


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

const QualityIcon = () => (
    <svg className="w-16 h-16 mx-auto text-makitt-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
);

const GuideIcon = () => (
    <svg className="w-16 h-16 mx-auto text-makitt-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
);

const CommunityIcon = () => (
    <svg className="w-16 h-16 mx-auto text-makitt-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
);


export const HomePage: React.FC = () => {
  const otherProducts = PRODUCTS.slice(1, 4);
  const [whyRef, isWhyVisible] = useOnScreen({ threshold: 0.2 });
  const [journeyRef, isJourneyVisible] = useOnScreen({ threshold: 0.1 });
  const [spotlightRef, isSpotlightVisible] = useOnScreen({ threshold: 0.1 });
  const [kitsRef, isKitsVisible] = useOnScreen({ threshold: 0.1 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const slides = [
    {
      title: "The Art of Making",
      subtitle: "Discover the joy of creation with our curated DIY kits.",
      buttonText: "Explore Kits",
      buttonLink: "/shop",
      bgImage: "https://images.pexels.com/photos/2162943/pexels-photo-2162943.jpeg" // Crafting table
    },
    {
      title: "Create Your Sacred Idol",
      subtitle: "Experience a spiritual journey with our Shadu Mati Ganpati Kit.",
      buttonText: "View Ganpati Kit",
      buttonLink: "/product/shadu-mati-ganpati",
      bgImage: "https://i.ytimg.com/vi/DIY99Nu6wns/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBSEl-2m5x52l_RhrKlv0Tqx52P2Q" // Ganpati idol
    },
    {
      title: "Mend with Gold, Beautifully",
      subtitle: "Embrace imperfection and create unique art with our Kintsugi Repair Kit.",
      buttonText: "View Kintsugi Kit",
      buttonLink: "/product/kintsugi-repair-kit",
      bgImage: "https://itokri.com/cdn/shop/articles/header6_1_bf61afaa-180c-4ea9-a2fb-be108b9ca401.jpg?v=1738050867" // Kintsugi pottery
    }
  ];

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    startSlider();
  };

  const startSlider = () => {
    intervalRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);
  };

  useEffect(() => {
    startSlider();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);


  const whyMakittFeatures = [
    { icon: <QualityIcon />, title: 'Premium Materials', description: 'We source only the finest, eco-friendly materials for an authentic crafting experience.' },
    { icon: <GuideIcon />, title: 'Guided Journeys', description: 'Our crystal-clear instructions and tutorials make creativity accessible to everyone, from beginner to expert.' },
    { icon: <CommunityIcon />, title: 'Join a Community', description: 'Share your creations and get inspired by fellow makers from around the world.' }
  ];

  const journeySteps = [
    {
      title: 'Inspiration',
      description: "It all starts with a spark. We dream up ideas that blend tradition with modern making, ensuring every kit is a unique adventure.",
      img: 'https://static.wixstatic.com/media/7f1440_1c052b63ddef4040900268e8e89cf898~mv2.jpg/v1/fill/w_568,h_568,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/7f1440_1c052b63ddef4040900268e8e89cf898~mv2.jpg' // Sketching
    },
      {
      title: 'Sourcing',
      description: "We travel far and wide, sourcing only the finest, eco-conscious materials that feel as good as they look.",
      img: 'https://plus.unsplash.com/premium_photo-1733328013343-e5ee77acaf05?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVzaW5lc3MlMjBuZXR3b3JrfGVufDB8fDB8fHww' // Materials
    },
    {
      title: 'Design',
      description: "Our experts craft crystal-clear guides. We test every step to make your creative process intuitive and joyful.",
      img: 'https://images.unsplash.com/photo-1587355760421-b9de3226a046?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXglMjBkZXNpZ258ZW58MHx8MHx8fDA%3D' // Guide design
    },
    {
      title: 'Packing',
      description: "With everything perfectly placed, we seal the box. It’s more than a kit; it’s an invitation to create, delivered to your door.",
      img: '/images/GK2.jpg' // Packing box
    }
  ];

  const spotlightCreations = [
    {
      img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop', // Clay hands
      handle: '@clay_creations',
      caption: 'My first Ganpati idol!'
    },
    {
      img: 'https://images.unsplash.com/photo-1506612957362-9599395f1950?q=80&w=800&auto=format&fit=crop', // Jewelry
      handle: '@jess_jewels',
      caption: 'Made a necklace for my sister.'
    },
    {
      img: 'https://images.unsplash.com/photo-1589257328282-271d5389a073?q=80&w=800&auto=format&fit=crop', // Kintsugi
      handle: '@golden_mends',
      caption: 'Breathing new life into old favorites.'
    },
    {
      img: 'https://images.unsplash.com/photo-1512428286944-c21d8b275b94?q=80&w=800&auto=format&fit=crop', // Terrarium
      handle: '@tiny_worlds',
      caption: 'My little desk jungle is thriving.'
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-screen text-white flex items-center justify-center text-center overflow-hidden">
        {/* Background Images & Overlay */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              <img
                src={slide.bgImage}
                alt={slide.title}
                key={index === currentSlide ? `bg-${index}` : `bg-inactive-${index}`}
                className="w-full h-full object-cover animate-ken-burns"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-6">
          <div key={currentSlide} className="animate-fade-in">
            <h1 className="font-serif text-6xl md:text-8xl font-bold animate-fade-in-up" style={{ animationDuration: '0.8s' }}>
              {slides[currentSlide].title}
            </h1>
            <p className="font-sans text-xl md:text-2xl mt-4 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms', animationDuration: '0.8s' }}>
              {slides[currentSlide].subtitle}
            </p>
            <div className="mt-8 animate-fade-in-up" style={{ animationDelay: '400ms', animationDuration: '0.8s' }}>
              <Link to={slides[currentSlide].buttonLink} className="inline-block border-2 border-white text-white font-bold py-3 px-10 rounded-md hover:bg-white hover:text-makitt-dark transition-all duration-300 text-lg active:scale-95">
                {slides[currentSlide].buttonText}
              </Link>
            </div>
          </div>
        </div>
        
        {/* Dots Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Why Choose Makitt Section */}
      <section ref={whyRef} className="py-24 md:py-32 bg-makitt-paper">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
            <h2 className="font-serif text-5xl font-bold">A Curated Creative Experience</h2>
            <p className="font-script text-3xl text-makitt-red mt-2">Designed with passion, for makers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto">
            {whyMakittFeatures.map((feature, index) => (
               <div key={index} className={`group transition-all duration-700 ease-out ${isWhyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{transitionDelay: `${index * 150}ms`}}>
                 <div className="transition-transform duration-300 group-hover:-translate-y-2">
                    {feature.icon}
                    <h3 className="font-serif text-2xl mt-4 font-bold">{feature.title}</h3>
                    <p className="text-gray-600 mt-2">{feature.description}</p>
                 </div>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Journey of a Kit Section */}
      <section ref={journeyRef} className="py-24 md:py-32 bg-[#3a1e1c] overflow-hidden">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="font-serif text-5xl font-bold text-makitt-paper">From Our Hands to Yours</h2>
                <p className="font-script text-3xl text-makitt-gold mt-2">The Journey of a Makitt Kit</p>
            </div>
        </div>
        <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory py-4 scrollbar-hide pl-6 md:pl-24 pr-6 md:pr-24">
            {journeySteps.map((step, index) => (
                <div 
                    key={index} 
                    className={`snap-center shrink-0 w-[90%] md:w-3/4 lg:w-1/2 transition-all duration-700 ease-out ${isJourneyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} 
                    style={{ transitionDelay: `${index * 150}ms` }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center bg-makitt-paper p-8 rounded-2xl shadow-xl h-full">
                        <div className="md:col-span-2 overflow-hidden rounded-lg h-full">
                            <img src={step.img} alt={step.title} className="w-full h-full object-cover aspect-[3/4] md:aspect-auto"/>
                        </div>
                        <div className="md:col-span-3 text-left">
                            <span className="font-script text-makitt-gold text-3xl">Chapter {index + 1}</span>
                            <h3 className="font-serif text-3xl mt-2 font-bold text-makitt-dark">{step.title}</h3>
                            <p className="mt-4 text-gray-700 leading-relaxed">{step.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* Creator's Spotlight Section */}
      <section ref={spotlightRef} className="py-24 md:py-32 bg-white/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl font-bold">Creator's Spotlight</h2>
            <p className="font-script text-3xl text-makitt-red mt-2">Made with Makitt, by you</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {spotlightCreations.map((creation, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-lg aspect-square cursor-pointer transition-all duration-700 ease-out ${isSpotlightVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <img src={creation.img} alt={creation.caption} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  <p className="text-white font-semibold">{creation.caption}</p>
                  <p className="text-white/80 text-sm">{creation.handle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Kits Section */}
      <section ref={kitsRef} className="py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl font-bold">More to Create</h2>
            <p className="font-script text-3xl text-makitt-red mt-2">Make it with Makitt</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {otherProducts.map((product, index) => (
               <div
                key={product.id}
                className={`transition-all duration-700 ease-out ${isKitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
           <div className="text-center mt-20">
              <Link to="/shop" className="bg-transparent border-2 border-makitt-red text-makitt-red font-bold py-3 px-10 rounded-md hover:bg-makitt-red hover:text-white transition-all text-lg active:scale-95">
                  View All Kits
              </Link>
          </div>
        </div>
      </section>

      <ChatbotBubble /> 
    </div>
  );
};
