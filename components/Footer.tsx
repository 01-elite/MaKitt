
import React from 'react';
import { Link } from 'react-router-dom';

const InstagramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const PinterestIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M21.28 7.37a8.5 8.5 0 1 0-11.83 11.83 8.5 8.5 0 0 0 11.83-11.83zM12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"></path><path d="M12 12a4 4 0 0 1 4-4c1.1 0 2 .9 2 2 0 1.1-.9 2-2 2h-1.5a2.5 2.5 0 0 0 0 5H14"></path></svg>;
const FacebookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;

const VisaIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor"><title>Visa</title><path d="M8.452 6.132l-2.91.43-1.61 7.42h2.52l1.3-6.002H10.1l-1.648 6.001zm6.545 0L12.01 13.98l-1.37-7.85h-2.5l2.42 11.33h2.33l4.03-11.33zM24 6.132l-2.02 9.07h-2.2l1.19-5.385-2.27 4.195h-1.8l-3.09-9.07h2.5l1.83 6.94 3.03-6.94z"/></svg>;
const MastercardIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor"><title>Mastercard</title><path d="M12 12a5.5 5.5 0 100-11 5.5 5.5 0 100 11zM19.5 12a7.5 7.5 0 10-15 0 7.5 7.5 0 1015 0zm0 0a7.5 7.5 0 10-15 0 7.5 7.5 0 1015 0zM4.5 12a7.5 7.5 0 1015 0 7.5 7.5 0 10-15 0z"/><path d="M12 6.5a5.5 5.5 0 100 11 5.5 5.5 0 100-11z"/></svg>;
const PaypalIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor"><title>PayPal</title><path d="m3.372 13.447.003.007c.074.317.18.616.314.895.137.284.298.54.48.764.18.22.38.406.597.556.217.143.444.246.68.31l.004.001c.288.077.58.117.87.117h.37c.83 0 1.6-.33 2.16-1.07l.003-.003c.59-.78.7-1.9.27-2.95l-.006-.014c-.08-.18-.18-.35-.29-.5l-.003-.007-2.12-3.87-.005-.01c-.13-.24-.3-.47-.49-.67l-.004-.006c-.19-.21-.4-.39-.63-.55l-.003-.002c-.2-.14-.42-.25-.64-.33-.2-.07-.4-.12-.6-.15l-.01-.002c-.22-.03-.45-.05-.68-.05H3.82c-.63 0-1.18.22-1.58.6l-.002.003c-.42.38-.63.9-.58 1.48l.002.04 1.16 6.9c.02.15.07.3.13.43zm6.54-6.427h2.81c2.7 0 4.21 1.25 3.61 3.9-.38 1.68-1.67 2.52-3.46 2.52h-1.28l-.5-3.03c-.1-.6-.5-1.1-1.18-1.39zM19.72 8.447h-3.3c-.3 0-.5.25-.46.54l.43 2.62c.08.52.5.9 1.03.9h.42c.6 0 1.05-.37.93-1.15-.06-.4-.2-.67-.5-.87-.3-.2-.6-.3-.9-.3h-.1z"/></svg>;


export const Footer: React.FC = () => {
    
    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for subscribing!');
        (e.target as HTMLFormElement).reset();
    };

    return (
        <footer className="bg-[#3a1e1c] text-makitt-paper">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
                    {/* Column 1: Brand & Social */}
                    <div className="lg:col-span-4">
                        <h3 className="font-serif text-4xl text-white">Makitt</h3>
                        <p className="mt-2 text-gray-300 font-script text-lg">Make it with Makitt</p>
                        <div className="flex space-x-4 mt-6">
                            <a href="#" className="text-gray-300 hover:text-white transition-transform hover:scale-110" aria-label="Instagram"><InstagramIcon /></a>
                            <a href="#" className="text-gray-300 hover:text-white transition-transform hover:scale-110" aria-label="Pinterest"><PinterestIcon /></a>
                            <a href="#" className="text-gray-300 hover:text-white transition-transform hover:scale-110" aria-label="Facebook"><FacebookIcon /></a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="lg:col-span-2">
                        <h4 className="font-semibold tracking-wider uppercase text-gray-200">Explore</h4>
                        <ul className="mt-4 space-y-3">
                            <li><Link to="/shop" className="text-gray-300 hover:text-white transition-colors">All Kits</Link></li>
                            <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">Our Story</Link></li>
                            <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Support Links */}
                    <div className="lg:col-span-2">
                        <h4 className="font-semibold tracking-wider uppercase text-gray-200">Support</h4>
                        <ul className="mt-4 space-y-3">
                            <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">FAQs</Link></li>
                            <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Shipping</Link></li>
                            <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Returns</Link></li>
                        </ul>
                    </div>
                    
                    {/* Column 4: Newsletter */}
                    <div className="lg:col-span-4">
                        <h4 className="font-semibold tracking-wider uppercase text-gray-200">Stay Inspired</h4>
                        <p className="mt-4 text-gray-300">Join our newsletter for new kits, special offers, and creative tips.</p>
                        <form onSubmit={handleNewsletterSubmit} className="mt-4 flex flex-col sm:flex-row gap-2">
                            <input
                                type="email"
                                placeholder="Your email address"
                                required
                                className="w-full flex-grow px-4 py-3 bg-white/10 text-white border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-makitt-red transition-all placeholder-gray-400"
                            />
                            <button
                                type="submit"
                                className="bg-makitt-red text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition-transform hover:scale-105 active:scale-95 flex-shrink-0"
                            >
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            
            <div className="border-t border-white/10">
                 <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p className="order-2 md:order-1 mt-4 md:mt-0">&copy; {new Date().getFullYear()} Makitt. All Rights Reserved.</p>
                    <div className="flex items-center space-x-4 order-1 md:order-2">
                        <VisaIcon />
                        <MastercardIcon />
                        <PaypalIcon />
                    </div>
                </div>
            </div>
        </footer>
    );
};