import React, { useState } from 'react';

const ChevronDownIcon = ({ open }: { open: boolean }) => <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transition-transform duration-300 ${open ? 'transform rotate-180 text-makitt-red' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>;

const faqs = [
  { q: "What comes in a Makitt kit?", a: "Everything you need! Each kit includes all the materials, tools, and step-by-step instructions for the specific project. No need to run to the craft store for anything." },
  { q: "How long does shipping take?", a: "Standard shipping typically takes 3-5 business days within the country. You'll receive a tracking number as soon as your order is on its way!" },
  { q: "Are your kits beginner-friendly?", a: "Absolutely! Most of our kits are designed with beginners in mind. We provide detailed, easy-to-follow instructions and often include video tutorials to guide you. Check the product page for a difficulty rating." },
  { q: "What's your return policy?", a: "We want you to love your creative experience. If your kit arrives damaged or you're not satisfied, please contact us within 14 days of receiving your order, and we'll be happy to help." },
];

export const ContactPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you shortly.");
    (e.target as HTMLFormElement).reset();
  };
  
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  }

  return (
    <div className="bg-white/50 animate-fade-in">
        <div className="pt-32 pb-16 text-center">
          <p className="font-script text-3xl text-makitt-red">We're here to help</p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mt-2">Get In Touch</h1>
        </div>

      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column: Form */}
            <div className="bg-makitt-paper p-8 rounded-lg shadow-lg border border-black/5">
              <h2 className="font-serif text-3xl font-semibold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" id="name" required className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-makitt-red focus:border-transparent bg-white transition" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="email" required className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-makitt-red focus:border-transparent bg-white transition" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" rows={5} required className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-makitt-red focus:border-transparent bg-white transition"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full bg-makitt-red text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition-all shadow-lg text-lg hover:scale-105">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            
            {/* Right Column: FAQ Section */}
            <div>
                 <h2 className="font-serif text-3xl font-semibold mb-6">Quick Questions</h2>
                 <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-200">
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full flex justify-between items-center py-4 text-left font-semibold text-lg"
                                aria-expanded={openFaq === index}
                            >
                                <span>{faq.q}</span>
                                <ChevronDownIcon open={openFaq === index} />
                            </button>
                            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaq === index ? 'max-h-96' : 'max-h-0'}`}>
                               <div className="pb-4 text-gray-600 leading-relaxed">
                                    {faq.a}
                               </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
