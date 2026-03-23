import React from 'react';
import { motion } from 'motion/react';
import { Package, MapPin, Calendar, ChevronRight, Heart, ShoppingBag, Star, LogOut } from 'lucide-react';

interface ConsumerDashboardProps {
  onLogout: () => void;
}

export const ConsumerDashboard: React.FC<ConsumerDashboardProps> = ({ onLogout }) => {
  const recentOrders = [
    { id: 'FL-827391', date: 'March 15, 2026', status: 'In Transit', total: '₹1,280', items: 3 },
    { id: 'FL-716254', date: 'March 10, 2026', status: 'Delivered', total: '₹850', items: 2 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid lg:grid-cols-[300px_1fr] gap-12">
        {/* Profile Sidebar */}
        <aside className="space-y-8">
          <div className="bg-white p-8 rounded-[2.5rem] border border-farm-earth/5 shadow-sm text-center">
            <div className="relative inline-block mb-4">
              <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200" 
                alt="User"
                className="w-24 h-24 rounded-full object-cover border-4 border-farm-cream"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 right-0 bg-farm-green p-1.5 rounded-full border-2 border-white">
                <Star className="w-3 h-3 text-white fill-current" />
              </div>
            </div>
            <h3 className="font-serif text-2xl font-bold text-farm-earth">Alex Johnson</h3>
            <p className="text-xs text-farm-earth/40 uppercase tracking-widest font-bold mb-6">Premium Member</p>
            
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-farm-earth/5">
              <div>
                <p className="text-xl font-bold text-farm-green">12</p>
                <p className="text-[10px] text-farm-earth/40 uppercase font-bold">Orders</p>
              </div>
              <div>
                <p className="text-xl font-bold text-farm-accent">4</p>
                <p className="text-[10px] text-farm-earth/40 uppercase font-bold">Farms</p>
              </div>
            </div>
          </div>

          <nav className="bg-white p-4 rounded-[2rem] border border-farm-earth/5 shadow-sm space-y-1">
            {[
              { icon: <ShoppingBag className="w-4 h-4" />, label: 'My Orders', active: true },
              { icon: <Heart className="w-4 h-4" />, label: 'Favorite Farms', active: false },
              { icon: <MapPin className="w-4 h-4" />, label: 'Addresses', active: false },
              { icon: <Package className="w-4 h-4" />, label: 'Subscriptions', active: false },
            ].map((item, idx) => (
              <button 
                key={idx}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  item.active ? "bg-farm-green text-farm-cream shadow-md" : "text-farm-earth/60 hover:bg-farm-earth/5"
                }`}
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  {item.label}
                </div>
                <ChevronRight className="w-4 h-4 opacity-40" />
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
        </aside>

        {/* Main Content */}
        <div className="space-y-8">
          <header>
            <h1 className="text-4xl font-serif text-farm-earth mb-2">My Dashboard</h1>
            <p className="text-farm-earth/60">Manage your orders and track your impact on local farming.</p>
          </header>

          {/* Impact Banner */}
          <div className="bg-farm-green p-8 rounded-[2.5rem] text-farm-cream relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="max-w-md">
                <h2 className="text-3xl font-serif mb-2">You're making a difference!</h2>
                <p className="text-farm-cream/70 text-sm">Your purchases have directly supported 4 local farming families this month. That's ₹12,400 going directly to rural communities.</p>
              </div>
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i+10}`} 
                    className="w-12 h-12 rounded-full border-2 border-farm-green object-cover"
                    alt="Farmer"
                  />
                ))}
                <div className="w-12 h-12 rounded-full bg-farm-accent flex items-center justify-center text-xs font-bold border-2 border-farm-green">
                  +2
                </div>
              </div>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-2xl font-bold">Recent Orders</h3>
              <button className="text-farm-green text-sm font-bold hover:underline">View All</button>
            </div>

            <div className="grid gap-4">
              {recentOrders.map((order) => (
                <motion.div 
                  key={order.id}
                  whileHover={{ x: 5 }}
                  className="bg-white p-6 rounded-3xl border border-farm-earth/5 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="flex items-center gap-6">
                    <div className="bg-farm-cream p-4 rounded-2xl text-farm-green">
                      <Package className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-farm-earth">{order.id}</p>
                      <div className="flex items-center gap-4 text-xs text-farm-earth/40 mt-1">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {order.date}</span>
                        <span>{order.items} Items</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-8">
                    <div className="text-right">
                      <p className="text-lg font-bold text-farm-green">{order.total}</p>
                      <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full ${
                        order.status === 'In Transit' ? "bg-farm-accent/10 text-farm-accent" : "bg-green-100 text-green-600"
                      }`}>
                        {order.status}
                      </span>
                    </div>
                    <button className="p-2 bg-farm-earth/5 rounded-full hover:bg-farm-earth/10 transition-all">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
