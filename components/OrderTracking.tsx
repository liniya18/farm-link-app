import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Package, Truck, CheckCircle2, Clock, ArrowLeft, Phone, MessageSquare } from 'lucide-react';

interface OrderTrackingProps {
  onBack: () => void;
}

export const OrderTracking: React.FC<OrderTrackingProps> = ({ onBack }) => {
  const steps = [
    { title: 'Order Placed', time: '10:30 AM, Today', completed: true, current: false },
    { title: 'Harvesting', time: '12:45 PM, Today', completed: true, current: true },
    { title: 'Quality Check', time: 'Expected 4:00 PM', completed: false, current: false },
    { title: 'In Transit', time: 'Expected Tomorrow', completed: false, current: false },
    { title: 'Delivered', time: 'Expected March 17', completed: false, current: false },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-farm-earth/60 hover:text-farm-green mb-8 transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-medium">Back to Marketplace</span>
      </button>

      <div className="grid lg:grid-cols-[1fr_350px] gap-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-farm-earth/5 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h1 className="text-3xl font-serif text-farm-earth">Track Your Harvest</h1>
                <p className="text-farm-earth/60 text-sm">Order #FL-827391 • 5 Items</p>
              </div>
              <div className="bg-farm-green/10 px-4 py-2 rounded-xl">
                <span className="text-farm-green font-bold text-sm flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Arriving in 2 days
                </span>
              </div>
            </div>

            {/* Progress Stepper */}
            <div className="relative mt-12 pb-4">
              <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-farm-earth/10" />
              
              <div className="space-y-10 relative">
                {steps.map((step, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center z-10 shrink-0",
                      step.completed ? "bg-farm-green text-white" : "bg-white border-2 border-farm-earth/10 text-farm-earth/20",
                      step.current && "ring-4 ring-farm-green/20"
                    )}>
                      {step.completed ? <CheckCircle2 className="w-5 h-5" /> : <div className="w-2 h-2 rounded-full bg-current" />}
                    </div>
                    <div className="flex flex-col">
                      <span className={cn(
                        "font-bold text-sm",
                        step.completed ? "text-farm-earth" : "text-farm-earth/40"
                      )}>
                        {step.title}
                      </span>
                      <span className="text-xs text-farm-earth/40">{step.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map Visualization (Mock) */}
          <div className="bg-farm-cream rounded-[2.5rem] h-64 relative overflow-hidden border border-farm-earth/5">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[radial-gradient(#5A4033_1px,transparent_1px)] [background-size:20px_20px]" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Farmer Location */}
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute -top-12 -left-20 bg-farm-green p-2 rounded-full shadow-lg"
                >
                  <MapPin className="w-4 h-4 text-white" />
                </motion.div>
                
                {/* Path */}
                <svg className="w-40 h-20 text-farm-green/30" viewBox="0 0 100 50">
                  <path d="M0,50 Q50,0 100,50" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                </svg>

                {/* Delivery Truck */}
                <motion.div 
                  animate={{ x: [0, 40, 0], y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  className="absolute top-4 left-10 bg-farm-accent p-2 rounded-full shadow-lg"
                >
                  <Truck className="w-4 h-4 text-white" />
                </motion.div>

                {/* Consumer Location */}
                <div className="absolute -bottom-4 -right-20 bg-farm-earth p-2 rounded-full shadow-lg">
                  <Package className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-sm p-3 rounded-2xl border border-white/20 flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-widest text-farm-earth/60">Current Location</span>
              <span className="text-xs font-bold text-farm-earth">Sorting Center, Bengaluru</span>
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          {/* Farmer Info */}
          <div className="bg-white p-6 rounded-3xl border border-farm-earth/5 shadow-sm">
            <h4 className="font-serif text-lg font-bold mb-4">Your Farmer</h4>
            <div className="flex items-center gap-4 mb-6">
              <img 
                src="https://images.unsplash.com/photo-1595273670150-db0a3d39074f?auto=format&fit=crop&q=80&w=200" 
                alt="Farmer"
                className="w-14 h-14 rounded-2xl object-cover"
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="font-bold text-farm-earth">Rajesh Kumar</p>
                <p className="text-xs text-farm-earth/60">Mysuru, Karnataka</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 py-3 bg-farm-green/10 text-farm-green rounded-xl text-xs font-bold hover:bg-farm-green/20 transition-all">
                <Phone className="w-3 h-3" />
                Call
              </button>
              <button className="flex items-center justify-center gap-2 py-3 bg-farm-earth/5 text-farm-earth rounded-xl text-xs font-bold hover:bg-farm-earth/10 transition-all">
                <MessageSquare className="w-3 h-3" />
                Message
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-6 rounded-3xl border border-farm-earth/5 shadow-sm">
            <h4 className="font-serif text-lg font-bold mb-4">Order Summary</h4>
            <div className="space-y-4">
              {[
                { name: 'Organic Tomatoes', qty: '2 kg', price: '₹80' },
                { name: 'Alphonso Mangoes', qty: '1 dozen', price: '₹600' },
                { name: 'Basmati Rice', qty: '5 kg', price: '₹600' },
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-farm-earth">{item.name}</p>
                    <p className="text-[10px] text-farm-earth/40 uppercase font-bold">{item.qty}</p>
                  </div>
                  <span className="text-sm font-bold text-farm-green">{item.price}</span>
                </div>
              ))}
              <div className="pt-4 border-t border-farm-earth/5 flex justify-between items-center">
                <span className="font-serif font-bold">Total</span>
                <span className="text-lg font-bold text-farm-green">₹1,280</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import { cn } from '../lib/utils';
