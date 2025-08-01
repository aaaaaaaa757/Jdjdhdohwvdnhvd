import React from 'react';
import { Wifi, CreditCard as CreditCardIcon } from 'lucide-react';

const CreditCard: React.FC = () => {
  return (
    <div className="relative">
      <div className="bg-gradient-to-br from-dark-800 to-dark-700 rounded-2xl p-6 border border-dark-600 shadow-neon-green overflow-hidden relative">
        {/* Neon glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-neon-green/10 to-transparent rounded-2xl"></div>
        
        {/* Card content */}
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <CreditCardIcon className="w-6 h-6 text-neon-green" />
              <span className="text-sm font-medium text-white">Primary Card</span>
            </div>
            <Wifi className="w-6 h-6 text-neon-green" />
          </div>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-400 mb-1">Card Number</p>
              <p className="text-lg font-mono text-white tracking-wider">
                •••• •••• •••• 3426
              </p>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400 mb-1">CARDHOLDER</p>
                <p className="text-sm font-medium text-white">JOHN DOE</p>
              </div>
              
              <div>
                <p className="text-xs text-gray-400 mb-1">EXPIRES</p>
                <p className="text-sm font-medium text-white">12/27</p>
              </div>
              
              <div className="text-right">
                <p className="text-xs text-gray-400 mb-1">CVV</p>
                <p className="text-sm font-medium text-white">•••</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-16 h-16 bg-neon-green/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-4 left-4 w-12 h-12 bg-neon-blue/20 rounded-full blur-lg"></div>
      </div>
    </div>
  );
};

export default CreditCard;