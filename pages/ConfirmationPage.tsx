
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Order } from '../types';

export const ConfirmationPage: React.FC = () => {
    const location = useLocation();
    const state = location.state as { order: Order };
    
    if (!state || !state.order) {
        return (
            <div className="container mx-auto text-center py-20">
                <h1 className="font-poppins text-3xl font-bold">Oops! Something went wrong.</h1>
                <p className="text-lg mt-4">We couldn't find your order details.</p>
                <Link to="/" className="mt-6 inline-block bg-makitt-coral text-white font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-all">
                    Back to Home
                </Link>
            </div>
        );
    }
    
    const { order } = state;

    return (
        <div className="bg-makitt-neutral min-h-screen py-12">
            <div className="container mx-auto px-6 max-w-2xl">
                <div className="bg-white p-8 rounded-lg shadow-xl text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-green-500 mx-auto mb-4 animate-subtle-float" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h1 className="font-poppins text-3xl font-bold">Thank you for your order!</h1>
                    <p className="text-gray-600 mt-2">Your order has been placed successfully. Please complete the payment.</p>
                    
                    <div className="bg-gray-100 my-6 p-4 rounded-lg border border-gray-200">
                        <p className="text-sm text-gray-700">Your Unique Order ID is:</p>
                        <p className="font-poppins font-bold text-2xl text-makitt-coral tracking-wider select-all">{order.orderId}</p>
                    </div>
                    
                    <div className="my-6">
                        <p className="font-poppins font-semibold text-lg">Total Amount to be Paid:</p>
                        <p className="font-poppins font-bold text-4xl text-makitt-dark">${order.total.toFixed(2)}</p>
                    </div>

                    <div className="border-t my-6 pt-6">
                        <h2 className="font-poppins text-2xl font-bold mb-4">Complete Your Payment</h2>
                        <div className="flex flex-col items-center">
                            <img 
                                src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=example@upi&pn=Makitt&am=${order.total.toFixed(2)}&tn=Order%20${order.orderId}`}
                                alt="Payment QR Code"
                                className="w-64 h-64 rounded-lg shadow-md border-4 border-white"
                            />
                             <div className="text-left mt-6 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded-r-lg">
                                <h3 className="font-bold font-poppins text-lg flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                    CRITICAL INSTRUCTIONS
                                </h3>
                                <ol className="list-decimal list-inside mt-2 space-y-2 pl-2">
                                    <li>Scan the QR code with your payment app.</li>
                                    <li>Enter the exact amount: <strong className="font-bold">${order.total.toFixed(2)}</strong>.</li>
                                    <li className="font-bold">IMPORTANT: In the 'message' or 'notes' field of your payment app, you MUST enter your Order ID: <strong className="text-makitt-coral bg-white px-2 py-1 rounded">{order.orderId}</strong>.</li>
                                    <li>Failure to include the Order ID will result in significant delays in processing your order.</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                     <Link to="/" className="mt-8 inline-block text-makitt-teal hover:text-makitt-coral transition-colors font-medium">
                        &larr; Return to Store
                    </Link>
                </div>
            </div>
        </div>
    );
};