import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const PlusIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>;
const MinusIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" /></svg>;
const TrashIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>;
const XIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>

export const CartOverlay: React.FC = () => {
    const { cartItems, updateQuantity, removeFromCart, getCartTotal, isCartOpen, closeCart } = useCart();
    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate('/checkout');
        closeCart();
    }

    if (!isCartOpen) return null;

    return (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in" onClick={closeCart}></div>

            {/* Panel */}
            <div className="fixed top-0 right-0 h-full w-full max-w-md bg-makitt-paper flex flex-col shadow-2xl" style={{animation: 'slide-in 0.5s cubic-bezier(0.25, 1, 0.5, 1) forwards', transform: 'translateX(100%)'}}>
                 <div className="flex justify-between items-center p-6 border-b border-black/10">
                    <h2 className="font-serif text-3xl">Your Cart</h2>
                    <button onClick={closeCart} className="p-2 -mr-2 text-makitt-dark hover:text-makitt-red transition-colors" aria-label="Close cart">
                        <XIcon />
                    </button>
                 </div>

                {cartItems.length === 0 ? (
                    <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
                        <p className="text-lg text-gray-600">Your cart is empty.</p>
                        <Link to="/shop" onClick={closeCart} className="mt-4 text-makitt-red font-semibold hover:underline">
                            Start Crafting
                        </Link>
                    </div>
                ) : (
                    <>
                        <div className="flex-grow p-6 overflow-y-auto space-y-6">
                             {cartItems.map(item => (
                                <div key={item.id} className="flex items-center">
                                    <img src={item.images[0]} alt={item.name} className="w-24 h-24 object-cover rounded-md mr-4" />
                                    <div className="flex-grow">
                                        <h3 className="font-semibold text-lg">{item.name}</h3>
                                        <p className="text-gray-600">₹{item.price.toFixed(2)}</p>
                                        <div className="flex items-center border border-gray-300 rounded-md mt-2 w-fit">
                                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 hover:bg-gray-100 disabled:opacity-50" disabled={item.quantity <= 1}><MinusIcon /></button>
                                            <span className="px-3 font-semibold text-sm">{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 hover:bg-gray-100"><PlusIcon /></button>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold text-lg">₹{(item.price * item.quantity).toFixed(2)}</p>
                                        <button onClick={() => removeFromCart(item.id)} className="text-sm text-gray-500 hover:text-makitt-red transition-colors mt-2">
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="p-6 border-t border-black/10">
                            <div className="flex justify-between font-semibold text-xl">
                                <span>Subtotal</span>
                                <span>₹{getCartTotal().toFixed(2)}</span>
                            </div>
                            <p className="text-sm text-gray-500 mt-1">Shipping is calculated at checkout.</p>
                            <button onClick={handleCheckout} className="w-full mt-4 bg-makitt-red text-white font-bold py-4 px-6 rounded-md hover:bg-opacity-90 transition-transform shadow-lg text-lg active:scale-95">
                                Proceed to Checkout
                            </button>
                        </div>
                    </>
                )}
            </div>
             <style>{`
                @keyframes slide-in { to { transform: translateX(0); } }
            `}</style>
        </div>
    );
};