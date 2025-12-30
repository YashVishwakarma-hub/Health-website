import React from "react";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import DailyQuotes from "./components/DailyQuotes";
import Resource from "./components/Resource";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="min-h-screen bg-cream selection:bg-accent selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Resource />
        <DailyQuotes />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
