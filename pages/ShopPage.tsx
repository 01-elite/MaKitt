import React from 'react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export const ShopPage: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      <div className="bg-white/50 pt-32 pb-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="font-serif text-5xl md:text-7xl font-bold">All Our Kits</h1>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Find your next creative project. Every kit is a complete experience, designed to bring you joy.</p>
          </div>
      </div>
      <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {PRODUCTS.map((product, index) => (
              <div
                key={product.id}
                className="transition-opacity duration-700 ease-out"
                style={{ animation: `fade-in-up 1s ${index * 100}ms both` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};
