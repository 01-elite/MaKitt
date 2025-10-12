import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import {
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  SignInButton,
} from "@clerk/clerk-react";
import { ShoppingCart, LogIn, UserCircle } from "lucide-react";

export const Header: React.FC = () => {
  const { getCartItemCount, openCart } = useCart();
  const cartItemCount = getCartItemCount();
  const { user } = useUser();

  const navLinkClasses = ({ isActive }: { isActive: boolean }): string =>
    `relative text-lg transition-colors duration-300 group ${
      isActive ? "text-makitt-red" : "text-makitt-dark hover:text-makitt-red"
    }`;

  const NavLinkUnderline = () => (
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-makitt-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-makitt-paper shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link
            to="/"
            className="text-4xl font-serif font-bold text-makitt-dark transition-colors duration-300 hover:text-makitt-red"
          >
            Makitt
          </Link>
          <p className="font-script text-makitt-red text-lg -mt-1">
            Make it with Makitt
          </p>
        </div>

        {/* Navbar Links */}
        <nav className="hidden md:flex items-center space-x-10">
          <NavLink to="/" className={navLinkClasses} end>
            Home
            <NavLinkUnderline />
          </NavLink>
          <NavLink to="/shop" className={navLinkClasses}>
            Kits
            <NavLinkUnderline />
          </NavLink>
          <NavLink to="/about" className={navLinkClasses}>
            Our Story
            <NavLinkUnderline />
          </NavLink>
          <NavLink to="/contact" className={navLinkClasses}>
            Contact
            <NavLinkUnderline />
          </NavLink>
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Signed Out → Show Sign In Button */}
          <SignedOut>
            <SignInButton mode="modal">
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-makitt-red hover:bg-makitt-dark rounded-full transition-all duration-300 z-[10000]">
                <LogIn size={18} />
                Sign In
              </button>
            </SignInButton>
          </SignedOut>

          {/* Signed In → Show User Icon + Name */}
          <SignedIn>
            <div className="flex items-center gap-3">
              <UserButton afterSignOutUrl="/" />
              <div className="text-makitt-dark font-medium">
                <p className="text-sm">Hello,</p>
                <p className="font-semibold">{user?.firstName || "User"}</p>
              </div>
            </div>
          </SignedIn>

          {/* Cart Button */}
          <button
            onClick={openCart}
            className="relative text-makitt-dark hover:text-makitt-red transition-all hover:scale-110 active:scale-100"
            aria-label="Open cart"
          >
            <ShoppingCart size={28} />
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
