import React from 'react';
import { Menu, Bell, User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-6 pt-12">
      <button className="p-2 hover:bg-dark-700 rounded-lg transition-colors">
        <Menu className="w-6 h-6 text-white" />
      </button>
      
      <div className="text-center">
        <h1 className="text-lg font-semibold text-white">Good morning</h1>
        <p className="text-sm text-gray-400">John Doe</p>
      </div>
      
      <div className="flex items-center space-x-2">
        <button className="p-2 hover:bg-dark-700 rounded-lg transition-colors relative">
          <Bell className="w-6 h-6 text-white" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-neon-green rounded-full border-2 border-dark-900"></span>
        </button>
        <button className="p-2 hover:bg-dark-700 rounded-lg transition-colors">
          <User className="w-6 h-6 text-white" />
        </button>
      </div>
    </header>
  );
};

export default Header;