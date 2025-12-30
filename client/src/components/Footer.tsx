import React from "react";
import { Heart, Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Heart size={24} className="text-white" fill="white" />
              <span className="font-serif text-2xl tracking-tight">
                Together
              </span>
            </div>
            <p className="text-gray-400 max-w-sm mb-6">
              Empowering patients, survivors, and families with resources,
              community, and hope. Join us in making a difference today.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Explore</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Events
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Together Cancer Support. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
