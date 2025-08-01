import React from 'react';
import Header from './components/Header';
import BalanceCard from './components/BalanceCard';
import CreditCard from './components/CreditCard';
import TransactionList from './components/TransactionList';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <div className="max-w-md mx-auto bg-dark-900 min-h-screen">
        <Header />
        <div className="px-6 pb-6 space-y-6">
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <BalanceCard />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CreditCard />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <TransactionList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
