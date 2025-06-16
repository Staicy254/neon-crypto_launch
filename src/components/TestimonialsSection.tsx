
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Portfolio Manager',
      content: 'CryptoVault has revolutionized how I manage my crypto investments. The security features and user experience are unmatched.',
      rating: 5,
      avatar: 'SC',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Day Trader',
      content: 'The lightning-fast transactions and low fees have significantly improved my trading profitability. Outstanding platform!',
      rating: 5,
      avatar: 'MR',
    },
    {
      name: 'Emily Johnson',
      role: 'Crypto Enthusiast',
      content: 'Finally, a platform that combines institutional-grade security with an intuitive interface. Highly recommended!',
      rating: 5,
      avatar: 'EJ',
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-xl ${i < rating ? 'text-crypto-gold' : 'text-gray-600'}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="py-20 bg-crypto-trust-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-poppins">
            Trusted by <span className="gradient-text">Thousands</span>
          </h2>
          <p className="text-gray-400 text-lg">
            See what our community says about their experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="bg-crypto-dark-card/60 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 hover:border-crypto-electric/30 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                {renderStars(testimonial.rating)}
              </div>
              
              <blockquote className="text-gray-300 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-crypto-electric/20 rounded-full flex items-center justify-center">
                  <span className="text-crypto-electric font-semibold">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-6 bg-crypto-dark-card/40 backdrop-blur-sm rounded-2xl px-8 py-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">50K+</div>
              <div className="text-gray-400 text-sm">Active Users</div>
            </div>
            <div className="w-px h-12 bg-gray-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">$2B+</div>
              <div className="text-gray-400 text-sm">Assets Secured</div>
            </div>
            <div className="w-px h-12 bg-gray-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">99.9%</div>
              <div className="text-gray-400 text-sm">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
