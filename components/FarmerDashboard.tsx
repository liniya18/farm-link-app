import React from 'react';
import { motion } from 'motion/react';
import { Plus, Package, TrendingUp, Users, Settings, LogOut, ChevronRight } from 'lucide-react';
import { FarmerAIInsights } from './FarmerAIInsights';
import { MOCK_PRODUCE } from '../constants';

interface FarmerDashboardProps {
  onLogout: () => void;
}

export const FarmerDashboard: React.FC<FarmerDashboardProps> = ({ onLogout }) => {
  const farmerProduce = MOCK_PRODUCE.filter(p => p.farmerId === 'f1');

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid lg:grid-cols-[280px_1fr] gap-12">
        {/* Sidebar */}
        <aside className="space-y-8">
          <div className="bg-white p-6 rounded-3xl border border-farm-earth/5 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-farm-green/10 flex items-center justify-center">
                <span className="text-farm-green font-bold">RK</span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg">Rajesh Kumar</h3>
                <p className="text-xs text-farm-earth/40 uppercase tracking-widest font-bold">Verified Farmer</p>
              </div>
            </div>

            <nav className="space-y-2">
              {[
                { icon: <TrendingUp className="w-4 h-4" />, label: 'Overview', active: true },
                { icon: <Package className="w-4 h-4" />, label: 'My Produce', active: false },
                { icon: <Users className="w-4 h-4" />, label: 'Customers', active: false },
                { icon: <Settings className="w-4 h-4" />, label: 'Settings', active: false },
              ].map((item, idx) => (
                <button 
                  key={idx}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    item.active 
                      ? "bg-farm-green text-farm-cream shadow-md" 
                      : "text-farm-earth/60 hover:bg-farm-earth/5"
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
              <div className="pt-4 mt-4 border-t border-farm-earth/5">
                <button 
                  onClick={onLogout}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-all"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            </nav>
          </div>

          <div className="bg-farm-green p-6 rounded-3xl text-farm-cream relative overflow-hidden">
            <div className="relative z-10">
              <h4 className="font-serif text-xl mb-2">Need help?</h4>
              <p className="text-xs opacity-70 mb-4">Our support team is here to help you grow your business.</p>
              <button className="bg-white text-farm-green px-4 py-2 rounded-lg text-xs font-bold">Contact Support</button>
            </div>
            <Sprout className="absolute -bottom-4 -right-4 w-24 h-24 opacity-10 rotate-12" />
          </div>
        </aside>

        {/* Main Content */}
        <div className="space-y-8">
          <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl font-serif text-farm-earth">Farmer Dashboard</h1>
              <p className="text-farm-earth/60">Welcome back, Rajesh. Here's what's happening today.</p>
            </div>
            <button className="bg-farm-accent text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-farm-accent/90 transition-all shadow-lg shadow-farm-accent/20">
              <Plus className="w-5 h-5" />
              Add New Produce
            </button>
          </header>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: 'Total Sales', value: '₹45,200', change: '+12%', icon: <TrendingUp className="text-farm-green" /> },
              { label: 'Active Orders', value: '18', change: '5 new', icon: <Package className="text-farm-accent" /> },
              { label: 'Avg. Rating', value: '4.9', change: '240 reviews', icon: <Users className="text-blue-500" /> },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-farm-earth/5 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-farm-cream rounded-2xl">
                    {stat.icon}
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${
                    idx === 0 ? "bg-green-100 text-green-600" : "bg-farm-cream text-farm-earth/40"
                  }`}>
                    {stat.change}
                  </span>
                </div>
                <p className="text-xs text-farm-earth/40 uppercase tracking-widest font-bold mb-1">{stat.label}</p>
                <h4 className="text-2xl font-bold text-farm-earth">{stat.value}</h4>
              </div>
            ))}
          </div>

          {/* AI Insights Section */}
          <FarmerAIInsights />

          {/* Inventory Table */}
          <div className="bg-white rounded-3xl border border-farm-earth/5 shadow-sm overflow-hidden">
            <div className="px-8 py-6 border-b border-farm-earth/5 flex items-center justify-between">
              <h3 className="font-serif text-xl font-bold">Current Inventory</h3>
              <button className="text-farm-green text-sm font-bold flex items-center gap-1 hover:underline">
                View All <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-farm-cream/30 text-[10px] uppercase tracking-widest font-bold text-farm-earth/40">
                    <th className="px-8 py-4">Produce</th>
                    <th className="px-8 py-4">Category</th>
                    <th className="px-8 py-4">Price</th>
                    <th className="px-8 py-4">Stock</th>
                    <th className="px-8 py-4">Status</th>
                    <th className="px-8 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-farm-earth/5">
                  {farmerProduce.map((item) => (
                    <tr key={item.id} className="group hover:bg-farm-cream/20 transition-colors">
                      <td className="px-8 py-4">
                        <div className="flex items-center gap-3">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-10 h-10 rounded-lg object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <span className="font-medium text-sm">{item.name}</span>
                        </div>
                      </td>
                      <td className="px-8 py-4">
                        <span className="text-xs text-farm-earth/60">{item.category}</span>
                      </td>
                      <td className="px-8 py-4">
                        <span className="text-sm font-bold">₹{item.price}/{item.unit}</span>
                      </td>
                      <td className="px-8 py-4">
                        <span className="text-sm">{item.stock} {item.unit}s</span>
                      </td>
                      <td className="px-8 py-4">
                        <span className="bg-green-100 text-green-600 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                          In Stock
                        </span>
                      </td>
                      <td className="px-8 py-4 text-right">
                        <button className="text-farm-earth/40 hover:text-farm-green transition-colors">
                          <Settings className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Sprout = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M7 20h10" /><path d="M10 20c5.5-2.5 8-6.4 8-10 0-4.4-3.6-8-8-8s-8 3.6-8 8c0 3.6 2.5 7.5 8 10Z" /><path d="M12 20v-4" /><path d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z" />
  </svg>
);
