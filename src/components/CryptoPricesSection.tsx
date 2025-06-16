import React from 'react';
import { Bitcoin, Coins, Circle, CircleArrowUp, CircleArrowDown } from 'lucide-react';

const CryptoPricesSection = () => {
  const cryptoData = [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      price: '$42,350.21',
      change: '+2.45%',
      isUp: true,
      icon: Bitcoin,
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      price: '$2,834.67',
      change: '+1.89%',
      isUp: true,
      icon: Coins, // Using Coins as placeholder for Ethereum
    },
    {
      name: 'Solana',
      symbol: 'SOL',
      price: '$98.43',
      change: '-0.76%',
      isUp: false,
      icon: Circle, // Using Circle as placeholder for Solana
    },
    {
      name: 'Cardano',
      symbol: 'ADA',
      price: '$0.52',
      change: '+3.21%',
      isUp: true,
      icon: Circle, // Using Circle as placeholder for Cardano
    },
  ];

  return (
    <section className="py-20 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-poppins">
            Live Crypto Prices
          </h2>
          <p className="text-gray-400 text-lg">
            Real-time market data for top cryptocurrencies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cryptoData.map((crypto, index) => (
            <div 
              key={crypto.symbol}
              className="bg-crypto-dark-card/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-crypto-electric/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-crypto-electric/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white/10 rounded-full">
                    <crypto.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{crypto.name}</h3>
                    <p className="text-gray-400 text-sm">{crypto.symbol}</p>
                  </div>
                </div>
                <div className={`flex items-center space-x-1 ${crypto.isUp ? 'text-crypto-price-up' : 'text-crypto-price-down'}`}>
                  {crypto.isUp ? (
                    <CircleArrowUp className="w-4 h-4" />
                  ) : (
                    <CircleArrowDown className="w-4 h-4" />
                  )}
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-2xl font-bold text-white">{crypto.price}</p>
                <p className={`text-sm font-medium ${crypto.isUp ? 'text-crypto-price-up' : 'text-crypto-price-down'}`}>
                  {crypto.change}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CryptoPricesSection;
