import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useCart } from '../contexts/CartContext';

const AddToCartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l.218-.219.932-.932a1 1 0 00.128-.215l4.23-6.345a1 1 0 00-.707-1.707H5.452L4.744 3H3z" />
        <path d="M15 16a2 2 0 100 4 2 2 0 000-4zM5 16a2 2 0 100 4 2 2 0 000-4z" />
    </svg>
);

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };
  
  return (
    <Link 
      to={`/product/${product.id}`} 
      className="block rounded-lg group"
      style={{ perspective: '1000px' }}
    >
      <div className="relative bg-white/50 rounded-lg transition-all duration-300 border border-transparent group-hover:border-black/10 group-hover:shadow-2xl group-hover:[transform:translateZ(30px)_rotateX(5deg)]" style={{ transformStyle: 'preserve-3d' }}>
        <div className="overflow-hidden rounded-t-lg aspect-[4/3] relative">
            <img 
                src={product.images[0]} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-5">
              <h3 className="font-serif text-2xl text-white [text-shadow:1px_1px_4px_rgba(0,0,0,0.5)]">{product.name}</h3>
              <p className="font-sans text-white/80 text-md mt-1 [text-shadow:1px_1px_2px_rgba(0,0,0,0.5)]">{product.tagline}</p>
            </div>
        </div>
        <div className="p-5 text-center bg-makitt-paper rounded-b-lg">
            <p className="font-sans text-makitt-red font-semibold text-xl">₹{product.price.toFixed(2)}</p>
             <div className="mt-4 flex flex-col sm:flex-row gap-2 justify-center">
                <span className="flex-grow text-center border-2 border-makitt-dark bg-transparent text-makitt-dark font-bold py-2 px-4 rounded-md group-hover:bg-makitt-dark group-hover:text-white transition-colors duration-300">
                  View Kit
                </span>
                <button
                  onClick={handleAddToCart}
                  className="flex-grow flex items-center justify-center bg-makitt-red text-white font-bold py-2 px-4 rounded-md hover:bg-opacity-90 active:scale-95 transition-all"
                >
                  <AddToCartIcon /> <span className="hidden sm:inline">Add to Cart</span>
                </button>
            </div>
        </div>
      </div>
    </Link>
  );
};
