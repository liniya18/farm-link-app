import React from 'react';
import { ShoppingBasket, User, Menu, Search, Sprout } from 'lucide-react';
import { cn } from '../lib/utils';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
  cartCount: number;
  user: { role: 'farmer' | 'consumer' } | null;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage, cartCount, user, onLogout }) => {
  return (
    <nav className="sticky top-0 z-50 bg-farm-cream/80 backdrop-blur-md border-b border-farm-earth/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => onNavigate('home')}
        >
          <div className="bg-farm-green p-2 rounded-lg">
            <Sprout className="text-farm-cream w-6 h-6" />
          </div>
          <span className="text-2xl font-serif font-bold text-farm-green tracking-tight">FarmLink</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {[
            { id: 'home', label: 'Home' },
            { id: 'marketplace', label: 'Marketplace' },
            { id: user?.role === 'farmer' ? 'farmer-dashboard' : 'consumer-dashboard', label: 'Dashboard', hide: !user },
            { id: 'about', label: 'About Us' },
          ].filter(item => !item.hide).map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-farm-green",
                currentPage === item.id ? "text-farm-green" : "text-farm-earth/70"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-farm-earth/5 rounded-full transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button 
            className="p-2 hover:bg-farm-earth/5 rounded-full transition-colors relative"
            onClick={() => onNavigate('marketplace')}
          >
            <ShoppingBasket className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-farm-accent text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </button>
          
          {user ? (
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-[10px] font-bold text-farm-earth/40 uppercase tracking-widest leading-none mb-1">Logged in as</p>
                <p className="text-xs font-bold text-farm-green leading-none">{user.email}</p>
              </div>
              <button 
                onClick={() => onNavigate(user.role === 'farmer' ? 'farmer-dashboard' : 'consumer-dashboard')}
                className="w-10 h-10 rounded-full bg-farm-green/10 flex items-center justify-center text-farm-green font-bold text-sm border border-farm-green/20"
              >
                {user.role === 'farmer' ? 'RK' : 'AJ'}
              </button>
              <button 
                onClick={onLogout}
                className="text-xs font-bold text-farm-earth/40 hover:text-farm-earth/60 transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <button 
              className="flex items-center gap-2 bg-farm-green text-farm-cream px-4 py-2 rounded-full text-sm font-medium hover:bg-farm-green/90 transition-all shadow-sm"
              onClick={() => onNavigate('login')}
            >
              <User className="w-4 h-4" />
              <span>Login</span>
            </button>
          )}
          
          <button className="md:hidden p-2 hover:bg-farm-earth/5 rounded-full transition-colors">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
};
