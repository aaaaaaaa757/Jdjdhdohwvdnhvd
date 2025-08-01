import React from 'react';
import { Eye, EyeOff, TrendingUp } from 'lucide-react';

const BalanceCard: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(true);

  return (
    <div className="bg-gradient-neon rounded-2xl p-6 border border-dark-600 shadow-card">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-sm text-gray-400 mb-1">Total Balance</p>
          <div className="flex items-center space-x-3">
            <h2 className="text-3xl font-bold text-white">
              {isVisible ? '$24,567.89' : '••••••••'}
            </h2>
            <button
              onClick={() => setIsVisible(!isVisible)}
              className="p-1 hover:bg-dark-700 rounded-lg transition-colors"
            >
              {isVisible ? (
                <EyeOff className="w-5 h-5 text-gray-400" />
              ) : (
                <Eye className="w-5 h-5 text-gray-400" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-1">
          <TrendingUp className="w-4 h-4 text-neon-green" />
          <span className="text-sm text-neon-green">+2.4%</span>
        </div>
        <span className="text-sm text-gray-400">from last month</span>
      </div>
    </div>
  );
};

export default BalanceCard;