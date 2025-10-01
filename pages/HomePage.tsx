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
      img: 'https://c8.alamy.com/comp/D52468/maharashtrian-man-holding-an-idol-of-lord-ganesha-during-ganesh-chaturthi-D52468.jpg', // Clay hands
      handle: '@clay_creations',
      caption: 'My first Ganpati idol!'
    },
    {
      img: 'data:image/jpeg;base64,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', // Jewelry
      handle: '@jess_jewels',
      caption: 'Made a necklace for my sister.'
    },
    {
      img: 'https://media.gettyimages.com/id/1461035539/photo/indian-woman-in-a-sari-making-rangoli-on-floor.jpg?s=612x612&w=gi&k=20&c=32M94NLGDQW67lbV8_7FDDLXs4_B7MESGfC0zL6FXV0=' ,     handle: '@rangoli_mends',
      caption: 'Rangoli Making with MaKitt.'
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyX8U14EZ8WFJJ-ZaBtyY5WSRIFyvizkTt6w&s', // Terrarium
      handle: '@tiny_worlds',
      caption: 'My customized Fridge magnet.'
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
