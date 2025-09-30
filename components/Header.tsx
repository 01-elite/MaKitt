import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const ShoppingCartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
);

export const Header: React.FC = () => {
  const { getCartItemCount, openCart } = useCart();
  const cartItemCount = getCartItemCount();

  const navLinkClasses = ({ isActive }: { isActive: boolean }): string =>
    `relative text-lg transition-colors duration-300 group ${isActive ? 'text-makitt-red' : 'text-makitt-dark hover:text-makitt-red'}`;
  
  const NavLinkUnderline = () => <span className="absolute bottom-0 left-0 w-full h-0.5 bg-makitt-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>;

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-makitt-paper shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div>
            <Link to="/" className="text-4xl font-serif font-bold text-makitt-dark transition-colors duration-300 hover:text-makitt-red">
              Makitt
            </Link>
            <p className="font-script text-makitt-red text-lg -mt-1">Make it with Makitt</p>
        </div>
        <nav className="hidden md:flex items-center space-x-10">
          <NavLink to="/" className={navLinkClasses} end>Home<NavLinkUnderline/></NavLink>
          <NavLink to="/shop" className={navLinkClasses}>Kits<NavLinkUnderline/></NavLink>
          <NavLink to="/about" className={navLinkClasses}>Our Story<NavLinkUnderline/></NavLink>
          <NavLink to="/contact" className={navLinkClasses}>Contact<NavLinkUnderline/></NavLink>
        </nav>
        <div className="flex items-center space-x-4">
          <button onClick={openCart} className="relative text-makitt-dark hover:text-makitt-red transition-all hover:scale-110 active:scale-100" aria-label="Open cart">
            <ShoppingCartIcon />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-makitt-red text-white text-xs font-sans font-semibold rounded-full h-5 w-5 flex items-center justify-center border-2 border-makitt-paper">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};