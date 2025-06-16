
import React from 'react';
import { Circle } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Product: ['Features', 'Security', 'API', 'Pricing'],
    Company: ['About', 'Careers', 'Press', 'News'],
    Resources: ['Blog', 'Newsletter', 'Events', 'Help Center'],
    Legal: ['Privacy', 'Terms', 'Cookie Policy', 'Licenses'],
  };

  return (
    <footer className="bg-crypto-footer-bg border-t border-gray-800">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-crypto-mint/10 border border-crypto-mint/30 rounded-full p-2">
                <Circle className="w-6 h-6 text-crypto-mint" fill="currentColor" />
              </div>
              <span className="text-white font-bold text-xl font-poppins">CryptoVault</span>
            </div>
            <p className="text-crypto-muted leading-relaxed mb-6">
              Powering the future of finance with secure, fast, and affordable cryptocurrency trading solutions.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-800 hover:bg-crypto-electric/20 rounded-lg flex items-center justify-center cursor-pointer transition-colors duration-300">
                <span className="text-crypto-muted hover:text-crypto-electric text-sm font-bold">X</span>
              </div>
              <div className="w-8 h-8 bg-gray-800 hover:bg-crypto-electric/20 rounded-lg flex items-center justify-center cursor-pointer transition-colors duration-300">
                <span className="text-crypto-muted hover:text-crypto-electric text-sm font-bold">in</span>
              </div>
              <div className="w-8 h-8 bg-gray-800 hover:bg-crypto-electric/20 rounded-lg flex items-center justify-center cursor-pointer transition-colors duration-300">
                <span className="text-crypto-muted hover:text-crypto-electric text-sm font-bold">TG</span>
              </div>
            </div>
          </div>
          
          {/* Footer links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4 font-poppins">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-crypto-muted hover:text-crypto-electric transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-crypto-muted text-sm">
              © 2024 CryptoVault. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-crypto-muted hover:text-crypto-electric transition-colors duration-300">
                Status
              </a>
              <a href="#" className="text-crypto-muted hover:text-crypto-electric transition-colors duration-300">
                Support
              </a>
              <a href="#" className="text-crypto-muted hover:text-crypto-electric transition-colors duration-300">
                Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
