
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { ShippingInfo } from '../types';

const PlusIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>;
const MinusIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" /></svg>;
const TrashIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>;


export const CartPage: React.FC = () => {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
      name: '',
      address: '',
      phone: ''
  });
  
  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setShippingInfo(prev => ({...prev, [name]: value}));
  };

  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    const total = getCartTotal();
    const orderId = `MK${Date.now()}`;
    const order = {
        orderId,
        items: cartItems,
        total,
        shippingInfo
    };

    navigate('/confirmation', { state: { order } });
    clearCart();
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto text-center py-20">
        <h1 className="font-poppins text-3xl font-bold">Your Cart is Empty</h1>
        <p className="text-lg text-gray-600 mt-4">Looks like you haven't added any kits yet.</p>
        <Link to="/shop" className="mt-8 inline-block bg-makitt-coral text-white font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-all text-lg shadow-md">
          Start Crafting!
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-makitt-neutral min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <h1 className="font-poppins text-4xl font-bold text-center mb-10">Your Shopping Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left: Cart Items */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="font-poppins text-2xl font-semibold mb-4 border-b pb-4">Order Items ({cartItems.length})</h2>
            <div className="space-y-6">
              {cartItems.map(item => (
                <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between">
                  <div className="flex items-center mb-4 sm:mb-0">
                    <img src={item.images[0]} alt={item.name} className="w-24 h-24 object-cover rounded-md mr-4" />
                    <div>
                      <h3 className="font-poppins font-semibold">{item.name}</h3>
                      <p className="text-gray-600">${item.price.toFixed(2)}</p>
                       <button onClick={() => removeFromCart(item.id)} className="text-sm text-red-500 hover:underline flex items-center gap-1 mt-1">
                        <TrashIcon /> Remove
                       </button>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-gray-300 rounded-md">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 hover:bg-gray-100 disabled:opacity-50" disabled={item.quantity <= 1}><MinusIcon /></button>
                        <span className="px-4 font-semibold">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 hover:bg-gray-100"><PlusIcon /></button>
                    </div>
                    <p className="font-semibold w-24 text-right text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right: Summary & Shipping */}
          <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-lg">
              <h2 className="font-poppins text-2xl font-semibold mb-4 border-b pb-4">Order Summary</h2>
              <form onSubmit={handleProceedToPayment} className="space-y-4">
                  <div className="space-y-2 font-medium">
                      <div className="flex justify-between">
                          <span className="text-gray-600">Subtotal</span>
                          <span>${getCartTotal().toFixed(2)}</span>
                      </div>
                       <div className="flex justify-between">
                          <span className="text-gray-600">Shipping</span>
                          <span>FREE</span>
                      </div>
                      <div className="flex justify-between font-bold text-xl pt-2 border-t mt-2">
                          <span>Total</span>
                          <span>${getCartTotal().toFixed(2)}</span>
                      </div>
                    </div>
                  
                  <div className="pt-4 border-t">
                    <h3 className="font-poppins text-xl font-semibold mb-3">Shipping Details</h3>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input type="text" name="name" id="name" value={shippingInfo.name} onChange={handleShippingChange} required className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-makitt-coral focus:border-makitt-coral" />
                    </div>
                     <div className="mt-4">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Full Address</label>
                        <input type="text" name="address" id="address" value={shippingInfo.address} onChange={handleShippingChange} required className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-makitt-coral focus:border-makitt-coral" />
                    </div>
                     <div className="mt-4">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input type="tel" name="phone" id="phone" value={shippingInfo.phone} onChange={handleShippingChange} required className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-makitt-coral focus:border-makitt-coral" />
                    </div>
                  </div>
                  <button type="submit" className="w-full mt-4 bg-makitt-coral text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors shadow-lg text-lg">
                      Proceed to Payment
                  </button>
              </form>
          </div>
        </div>
      </div>
    </div>
  );
};