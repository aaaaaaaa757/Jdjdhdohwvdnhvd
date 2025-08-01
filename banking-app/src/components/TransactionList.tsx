import React from 'react';
import { 
  ShoppingBag, 
  Coffee, 
  Car, 
  Zap, 
  ArrowUpRight, 
  ArrowDownLeft,
  MoreHorizontal 
} from 'lucide-react';

interface Transaction {
  id: string;
  title: string;
  subtitle: string;
  amount: number;
  type: 'income' | 'expense';
  icon: React.ReactNode;
  time: string;
}

const TransactionList: React.FC = () => {
  const transactions: Transaction[] = [
    {
      id: '1',
      title: 'Salary Deposit',
      subtitle: 'Monthly salary',
      amount: 4500.00,
      type: 'income',
      icon: <ArrowDownLeft className="w-5 h-5 text-neon-green" />,
      time: '2h ago'
    },
    {
      id: '2',
      title: 'Grocery Store',
      subtitle: 'Whole Foods Market',
      amount: -156.89,
      type: 'expense',
      icon: <ShoppingBag className="w-5 h-5 text-red-400" />,
      time: '1d ago'
    },
    {
      id: '3',
      title: 'Coffee Shop',
      subtitle: 'Starbucks',
      amount: -12.50,
      type: 'expense',
      icon: <Coffee className="w-5 h-5 text-orange-400" />,
      time: '2d ago'
    },
    {
      id: '4',
      title: 'Gas Station',
      subtitle: 'Shell',
      amount: -65.00,
      type: 'expense',
      icon: <Car className="w-5 h-5 text-blue-400" />,
      time: '3d ago'
    },
    {
      id: '5',
      title: 'Electricity Bill',
      subtitle: 'ConEd',
      amount: -89.34,
      type: 'expense',
      icon: <Zap className="w-5 h-5 text-yellow-400" />,
      time: '5d ago'
    },
    {
      id: '6',
      title: 'Freelance Payment',
      subtitle: 'Web design project',
      amount: 1200.00,
      type: 'income',
      icon: <ArrowDownLeft className="w-5 h-5 text-neon-green" />,
      time: '1w ago'
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">Recent Transactions</h3>
        <button className="text-sm text-neon-green hover:text-neon-green/80 transition-colors">
          View All
        </button>
      </div>
      
      <div className="space-y-3">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-4 bg-dark-800/50 rounded-xl border border-dark-600 hover:border-neon-green/20 transition-all duration-200 hover:bg-dark-800/70"
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-dark-700 rounded-lg">
                {transaction.icon}
              </div>
              <div>
                <p className="text-sm font-medium text-white">{transaction.title}</p>
                <p className="text-xs text-gray-400">{transaction.subtitle}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="text-right">
                <p className={`text-sm font-semibold ${
                  transaction.type === 'income' ? 'text-neon-green' : 'text-red-400'
                }`}>
                  {transaction.type === 'income' ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                </p>
                <p className="text-xs text-gray-400">{transaction.time}</p>
              </div>
              
              <button className="p-1 hover:bg-dark-700 rounded-lg transition-colors">
                <MoreHorizontal className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionList;