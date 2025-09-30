import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { Product } from '../types';

const CheckIcon = () => (
    <svg className="w-5 h-5 text-makitt-red mr-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
);

const useOnScreen = <T extends HTMLElement>(options: IntersectionObserverInit): [React.RefObject<T>, boolean] => {
    const ref = useRef<T>(null);
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

const JourneyStep: React.FC<{ img: string; index: number; title: string; }> = ({ img, index, title }) => {
    const [ref, isVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.3 });
    return (
        <div ref={ref} className={`snap-center shrink-0 w-[80%] md:w-1/2 lg:w-1/3 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
           <div className="bg-white/50 p-6 rounded-lg shadow-xl group">
            <div className="overflow-hidden rounded-md mb-6">
                <img src={img} alt={`Step ${index + 1}`} className="w-full h-auto object-cover rounded-md aspect-[4/3] transition-transform duration-500 group-hover:scale-110"/>
            </div>
             <div>
                <span className="font-script text-makitt-gold text-3xl">Step {index + 1}</span>
                <h3 className="font-serif text-3xl mt-1">{title}</h3>
             </div>
           </div>
         </div>
    );
};


export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);
  const { addToCart } = useCart();
  const [highlightedItem, setHighlightedItem] = useState<string | null>(null);
  const [inTheBoxRef, isInTheBoxVisible] = useOnScreen<HTMLUListElement>({ threshold: 0.2 });

  if (!product) {
    return <div className="text-center py-40 font-serif text-2xl">Product not found!</div>;
  }
  
  const { name, price, tagline, images, flatLayImage, journeyImages, detailedDescription, inTheBox, whatYoullLearn } = product;

  return (
    <div className="animate-fade-in">
        {/* Hero Section */}
        <section className="relative h-screen bg-black flex items-center justify-center">
            <div className="absolute inset-0">
                <img src={images[0]} alt={name} className="w-full h-full object-cover opacity-50 animate-zoom-out"/>
            </div>
            <div className="relative z-10 text-center text-white p-6">
                <p className="font-script text-4xl text-makitt-gold animate-fade-in-up">{tagline}</p>
                <h1 className="font-serif text-6xl md:text-8xl font-bold my-4 animate-fade-in-up" style={{animationDelay: '0.2s'}}>{name}</h1>
                 <button 
                    onClick={() => addToCart(product)}
                    className="bg-makitt-red text-white font-bold py-4 px-10 rounded-md hover:bg-opacity-90 transition-all text-xl shadow-lg animate-fade-in-up active:scale-95"
                    style={{animationDelay: '0.4s'}}
                 >
                    Add to Cart for ₹{price.toFixed(2)}
                </button>
            </div>
        </section>
        
        {/* What's In The Box? */}
        <section className="py-20 md:py-32 bg-white/50">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div className="relative md:order-2">
                    <img src={flatLayImage} alt="Kit contents flat lay" className="rounded-lg shadow-xl w-full"/>
                    {inTheBox.map((item) => (
                         <div key={item} className={`absolute inset-0 bg-white/70 transition-opacity duration-300 rounded-lg ${highlightedItem === item ? 'opacity-100' : 'opacity-0'}`} />
                    ))}
                </div>
                <div className="md:order-1">
                    <h2 className="font-serif text-5xl font-bold mb-6">What's in the Box?</h2>
                    <p className="text-gray-700 leading-relaxed mb-8">{detailedDescription}</p>
                    <ul ref={inTheBoxRef} className="space-y-3 text-gray-800 text-lg">
                        {inTheBox.map((item, index) => (
                            <li 
                                key={index} 
                                className={`flex items-center transition-all duration-500 ease-out p-2 rounded -ml-2 ${isInTheBoxVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                                style={{transitionDelay: `${index * 100}ms`}}
                                onMouseEnter={() => setHighlightedItem(item)}
                                onMouseLeave={() => setHighlightedItem(null)}
                            >
                                <CheckIcon />
                                <span className="font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>

        {/* The Creative Journey */}
        <section className="py-20 md:py-32 bg-makitt-paper overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                     <h2 className="font-serif text-5xl font-bold">The Creative Journey</h2>
                     <p className="font-script text-3xl text-makitt-red mt-2">A story in four steps</p>
                </div>
            </div>
            <div className="flex space-x-8 overflow-x-auto snap-x snap-mandatory py-4 scrollbar-hide px-6 md:px-24">
                {journeyImages.map((img, index) => (
                    <JourneyStep 
                        key={index}
                        img={img}
                        index={index}
                        title={whatYoullLearn[index] || 'Creating Magic'}
                    />
                ))}
            </div>
        </section>

        {/* You may also like */}
         <section className="py-20 md:py-32">
            <div className="container mx-auto px-6">
                 <div className="text-center mb-12">
                     <h2 className="font-serif text-5xl font-bold">You Might Also Like</h2>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     {PRODUCTS.filter(p => p.id !== id).slice(0,3).map(p => (
                         <div key={p.id} className="bg-white/50 p-6 rounded-lg shadow-lg text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                            <Link to={`/product/${p.id}`} className="active:scale-95 inline-block">
                               <img src={p.images[0]} alt={p.name} className="w-full h-48 object-cover rounded-md mb-4"/>
                               <h3 className="font-serif text-2xl">{p.name}</h3>
                               <span className="mt-4 inline-block text-makitt-red font-semibold">View Kit &rarr;</span>
                            </Link>
                         </div>
                     ))}
                 </div>
            </div>
        </section>
    </div>
  );
};