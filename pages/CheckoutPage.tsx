import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { SignedIn, SignedOut, RedirectToSignIn, useUser } from '@clerk/clerk-react';
import { useCart } from '../contexts/CartContext';
import { ShippingInfo, Order, CartItem } from '../types';

const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
      clipRule="evenodd"
    />
  </svg>
);

const CopyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

export const CheckoutPage: React.FC = () => {
  const { user } = useUser();
  const { cartItems, getCartTotal, clearCart } = useCart();

  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    name: '',
    address: '',
    phone: ''
  });
  const [order, setOrder] = useState<Order | null>(null);
  const [copySuccess, setCopySuccess] = useState('');

  useEffect(() => {
    if (user) {
      setShippingInfo(prev => ({
        ...prev,
        name: user.fullName || ''
      }));
    }
  }, [user]);

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingInfo(prev => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const total = getCartTotal();

    const newOrder: Order = {
      orderId: `MK${Date.now()}`,
      items: cartItems,
      total,
      shippingInfo,
      userId: user?.id,
      userEmail: user?.emailAddresses[0]?.emailAddress
    };

    setOrder(newOrder);
    clearCart();

    // Optional: Send to backend
    // fetch('/api/save-order', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(newOrder),
    // });
  };

  const copyToClipboard = () => {
    if (!order) return;
    navigator.clipboard.writeText(order.orderId).then(
      () => {
        setCopySuccess('Copied!');
        setTimeout(() => setCopySuccess(''), 2000);
      },
      () => {
        setCopySuccess('Failed');
      }
    );
  };

  if (cartItems.length === 0 && !order) {
    return <Navigate to="/shop" />;
  }

  return (
    <>
      <SignedIn>
        <div className="animate-fade-in">
          <div className="bg-white/50 pt-32 pb-12">
            <div className="container mx-auto px-6 text-center">
              <h1 className="font-serif text-5xl font-bold">
                {order ? 'Complete Your Creation' : 'Checkout'}
              </h1>
              <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
                {order ? 'Just one final step.' : 'Please provide your details below.'}
              </p>
            </div>
          </div>

          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column: Form / Order Details */}
              <div className="bg-makitt-paper p-8 rounded-lg shadow-lg border border-black/10">
                <h2 className="font-serif text-3xl mb-6 border-b border-black/10 pb-4">
                  {order ? 'Shipping To' : 'Shipping Details'}
                </h2>
                <form onSubmit={handlePlaceOrder} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={shippingInfo.name}
                      onChange={handleShippingChange}
                      required
                      disabled={!!order}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-makitt-red focus:border-makitt-red disabled:bg-gray-100 disabled:text-gray-500 transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      value={shippingInfo.address}
                      onChange={handleShippingChange}
                      required
                      disabled={!!order}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-makitt-red focus:border-makitt-red disabled:bg-gray-100 disabled:text-gray-500 transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={shippingInfo.phone}
                      onChange={handleShippingChange}
                      required
                      disabled={!!order}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-makitt-red focus:border-makitt-red disabled:bg-gray-100 disabled:text-gray-500 transition"
                    />
                  </div>
                  {!order && (
                    <button
                      type="submit"
                      className="w-full mt-4 bg-makitt-red text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition-transform shadow-lg text-lg flex items-center justify-center hover:scale-105 active:scale-95"
                    >
                      <LockIcon /> Place Order
                    </button>
                  )}
                </form>
              </div>

              {/* Right Column: Summary / Payment Hub */}
              <div className="bg-makitt-paper p-8 rounded-lg shadow-lg border border-black/10">
                <h2 className="font-serif text-3xl mb-6 border-b border-black/10 pb-4">Order Summary</h2>
                <div className="space-y-4">
                  {(order ? order.items : cartItems).map((item: CartItem) => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div className="flex items-center">
                        <img
                          src={item.images[0]}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-md mr-4"
                        />
                        <div>
                          <p className="font-semibold">{item.name}</p>
                          <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <p className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-black/20">
                  <div className="flex justify-between font-semibold text-xl">
                    <span>Total</span>
                    <span>₹{(order ? order.total : getCartTotal()).toFixed(2)}</span>
                  </div>
                </div>

                {order && (
                  <div className="mt-8 pt-8 border-t border-black/20 animate-fade-in">
                    <h3 className="font-serif text-3xl mb-4 text-center">Payment Hub</h3>
                    <div className="flex flex-col items-center text-center">
                      <p className="text-sm text-gray-700">Your Unique Order ID:</p>
                      <div className="flex items-center gap-2 my-2">
                        <p className="font-mono font-bold text-2xl text-makitt-red tracking-wider select-all">
                          {order.orderId}
                        </p>
                        <button
                          onClick={copyToClipboard}
                          className="p-2 rounded-md hover:bg-gray-200 transition-colors active:scale-90"
                          title="Copy Order ID"
                        >
                          {copySuccess ? (
                            <span className="text-sm text-green-600">{copySuccess}</span>
                          ) : (
                            <CopyIcon />
                          )}
                        </button>
                      </div>
                      <img
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=example@upi&pn=Makitt&am=${order.total.toFixed(
                          2
                        )}&tn=Order%20${order.orderId}`}
                        alt="Payment QR Code"
                        className="w-56 h-56 rounded-lg shadow-md border-4 border-white mt-4"
                      />
                      <div className="text-left mt-6 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded-r-lg text-sm">
                        <h3 className="font-bold text-base">CRITICAL INSTRUCTIONS</h3>
                        <ol className="list-decimal list-inside mt-2 space-y-1">
                          <li>Scan the QR code with your payment app.</li>
                          <li>
                            Enter the exact amount: <strong>₹{order.total.toFixed(2)}</strong>.
                          </li>
                          <li className="font-bold">
                            IMPORTANT: In the 'notes' field, you MUST enter your Order ID:{' '}
                            <strong className="text-makitt-red bg-white px-1.5 py-0.5 rounded">
                              {order.orderId}
                            </strong>.
                          </li>
                          <li>Failure to do so will delay your order.</li>
                        </ol>
                      </div>
                      <Link
                        to="/"
                        className="mt-8 inline-block text-makitt-red hover:underline transition-colors font-medium"
                      >
                        &larr; Return to Store
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};
