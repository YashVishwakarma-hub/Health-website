import React, { useState } from "react";
import { Send, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate network request
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-dark mb-4">Get in touch</h2>
          <p className="text-gray-600 text-lg">
            We are here to listen. Reach out for support, volunteering, or just
            to say hello.
          </p>
        </div>

        <div className="bg-cream rounded-3xl p-8 md:p-12 shadow-soft border border-gray-100">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in-up">
              <div className="bg-green-100 p-4 rounded-full text-green-600 mb-6">
                <CheckCircle size={48} />
              </div>
              <h3 className="text-3xl font-serif text-dark mb-2">Thank you!</h3>
              <p className="text-gray-600 mb-8 max-w-md">
                Your message has been received. A member of our team will be in
                touch with you shortly.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-dark font-medium hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-dark uppercase tracking-wide"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-dark focus:outline-none focus:ring-2 focus:ring-dark focus:border-transparent transition-shadow"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-dark uppercase tracking-wide"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-dark focus:outline-none focus:ring-2 focus:ring-dark focus:border-transparent transition-shadow"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-dark uppercase tracking-wide"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-dark focus:outline-none focus:ring-2 focus:ring-dark focus:border-transparent transition-shadow resize-none"
                  placeholder="How can we help you today?"
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full md:w-auto bg-dark text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
