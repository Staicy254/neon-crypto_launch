
import React from 'react';
import { Circle } from 'lucide-react';

const CryptoLogo = () => {
  return (
    <div className="fixed top-6 left-6 z-50">
      <div className="relative group cursor-pointer">
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-crypto-mint opacity-20 blur-xl animate-glow"></div>
        
        {/* Logo container */}
        <div className="relative bg-crypto-mint/10 backdrop-blur-sm border border-crypto-mint/30 rounded-full p-3 hover:scale-110 transition-all duration-300">
          <div className="animate-rotate">
            <Circle className="w-8 h-8 text-crypto-mint" fill="currentColor" />
          </div>
        </div>
        
        {/* Logo text */}
        <div className="absolute left-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white font-bold text-lg whitespace-nowrap">CryptoVault</span>
        </div>
      </div>
    </div>
  );
};

export default CryptoLogo;
