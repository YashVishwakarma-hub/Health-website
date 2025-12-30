import React, { useState } from "react";
import { Heart, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="bg-dark text-white p-1.5 rounded-lg">
              <Heart size={24} fill="white" />
            </div>
            <span className="font-serif text-2xl tracking-tight text-dark">
              Together
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#resources"
              className="text-gray-600 hover:text-dark font-medium transition-colors"
            >
              Resources
            </a>
            <a
              href="#stories"
              className="text-gray-600 hover:text-dark font-medium transition-colors"
            >
              Stories
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-dark font-medium transition-colors"
            >
              About Us
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#login"
              className="text-dark font-medium hover:text-accent transition-colors"
            >
              Log in
            </a>
            <button className="bg-dark text-white px-5 py-2.5 rounded-md hover:bg-gray-800 transition-colors font-medium border border-transparent">
              Get Support
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark hover:text-gray-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a
              href="#resources"
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-dark hover:bg-gray-50 rounded-md"
            >
              Resources
            </a>
            <a
              href="#stories"
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-dark hover:bg-gray-50 rounded-md"
            >
              Stories
            </a>
            <a
              href="#about"
              className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-dark hover:bg-gray-50 rounded-md"
            >
              About Us
            </a>
            <div className="pt-4 flex flex-col gap-3">
              <button className="w-full text-center text-dark font-medium py-2 border border-gray-200 rounded-md">
                Log in
              </button>
              <button className="w-full text-center bg-dark text-white font-medium py-3 rounded-md">
                Get Support
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
