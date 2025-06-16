
import React from 'react';
import { CircleCheck, CirclePlus, CircleDollarSign } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Secure Wallet',
      description: 'Military-grade encryption and multi-signature security to protect your digital assets with institutional-level protection.',
      icon: CircleCheck,
    },
    {
      title: 'Fast Transactions',
      description: 'Lightning-fast blockchain transactions with instant confirmations and real-time processing for seamless trading.',
      icon: CirclePlus,
    },
    {
      title: 'Low Fees',
      description: 'Industry-leading low trading fees with transparent pricing and no hidden costs for maximum profitability.',
      icon: CircleDollarSign,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black/50 to-crypto-trust-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-poppins">
            Why Choose <span className="gradient-text">CryptoVault</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience the next generation of cryptocurrency trading with our cutting-edge platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group bg-crypto-dark-card/80 backdrop-blur-sm border border-gray-700/50 hover:border-crypto-electric/50 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-crypto-electric/10"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6">
                <div className="inline-flex p-4 bg-crypto-electric/10 rounded-2xl group-hover:bg-crypto-electric/20 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-white group-hover:text-crypto-electric transition-colors duration-300" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 font-poppins">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Accent border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-crypto-electric/0 via-crypto-electric/5 to-crypto-electric/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
