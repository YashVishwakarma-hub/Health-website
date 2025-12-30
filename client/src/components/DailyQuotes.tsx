import React, { useEffect, useState } from "react";
import { Quote, RefreshCw } from "lucide-react";
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const DailyQuotes = () => {
  const [quoteData, setQuoteData] = useState<{ q: string; a: string } | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  const fetchQuote = async () => {
    setLoading(true)

    try {
      const response = await axios.get('http://localhost:3000/api/quotes');
      setQuoteData(response.data);
      console.log("Fetched quotes", response.data)

    } catch (error) {
      console.error("Unable to fetch a quotes...", error)
      
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <section className="py-20 bg-white border-y border-gray-100/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="flex justify-center mb-8">
          <div className="bg-accent/10 p-4 rounded-full">
            <Quote size={32} className="text-accent transform rotate-180" />
          </div>
        </div>

        <div className="min-h-[180px] flex flex-col justify-center items-center">
          {loading ? (
            <div className="animate-pulse space-y-4 w-full max-w-lg flex flex-col items-center">
              <div className="h-6 bg-gray-100 rounded w-full"></div>
              <div className="h-6 bg-gray-100 rounded w-5/6"></div>
              <div className="h-4 bg-gray-100 rounded w-1/4 mt-6"></div>
            </div>
          ) : (
            <blockquote className="animate-fade-in-up">
              <p className="text-3xl md:text-4xl font-serif text-dark mb-8 leading-tight">
                "{quoteData?.quote}"
              </p>
              <footer className="text-gray-500 font-medium tracking-widest uppercase text-sm">
                — {quoteData?.author}
              </footer>
            </blockquote>
          )}
        </div>

        <div className="mt-12">
          <button
            onClick={fetchQuote}
            disabled={loading}
            className="group inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-accent transition-colors disabled:opacity-50"
          >
            <RefreshCw
              size={16}
              className={`group-hover:rotate-180 transition-transform duration-500 ${
                loading ? "animate-spin" : ""
              }`}
            />
            New Inspiration
          </button>
        </div>
      </div>
    </section>
  );
};

export default DailyQuotes;
