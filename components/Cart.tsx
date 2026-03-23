import React from 'react';
import { motion } from 'motion/react';
import { Trash2, ShoppingBag, ArrowRight, ArrowLeft, ShieldCheck } from 'lucide-react';
import { Produce } from '../types';

interface CartProps {
  items: Produce[];
  onRemove: (id: string) => void;
  onCheckout: () => void;
  onBack: () => void;
}

export const Cart: React.FC<CartProps> = ({ items, onRemove, onCheckout, onBack }) => {
  const subtotal = items.reduce((acc, item) => acc + item.price, 0);
  const deliveryFee = items.length > 0 ? 40 : 0;
  const total = subtotal + deliveryFee;

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h1 className="text-4xl font-serif text-farm-earth mb-2">Your Basket</h1>
          <p className="text-farm-earth/60">Review your fresh produce before placing the order.</p>
        </div>
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-farm-green font-bold hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Market
        </button>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-24 bg-white rounded-[2.5rem] border border-farm-earth/5 shadow-sm">
          <div className="bg-farm-cream w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-8 h-8 text-farm-earth/20" />
          </div>
          <h3 className="text-xl font-serif font-bold mb-2">Your basket is empty</h3>
          <p className="text-farm-earth/60 mb-8">Looks like you haven't added any fresh produce yet.</p>
          <button 
            onClick={onBack}
            className="bg-farm-green text-farm-cream px-8 py-4 rounded-2xl font-bold inline-flex items-center gap-2 hover:bg-farm-green/90 transition-all"
          >
            Start Shopping
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      ) : (
        <div className="grid lg:grid-cols-[1fr_350px] gap-12">
          <div className="space-y-4">
            {items.map((item, idx) => (
              <motion.div 
                key={`${item.id}-${idx}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white p-4 rounded-3xl border border-farm-earth/5 shadow-sm flex items-center gap-6"
              >
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-24 h-24 rounded-2xl object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="flex-grow">
                  <h3 className="font-serif text-lg font-bold text-farm-earth">{item.name}</h3>
                  <p className="text-xs text-farm-earth/40 uppercase tracking-widest font-bold mb-2">From {item.farmerName}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-farm-green">₹{item.price}</span>
                    <button 
                      onClick={() => onRemove(item.id)}
                      className="p-2 text-red-400 hover:bg-red-50 rounded-xl transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <aside className="space-y-6">
            <div className="bg-white p-8 rounded-[2.5rem] border border-farm-earth/5 shadow-sm">
              <h3 className="font-serif text-xl font-bold mb-6">Order Summary</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-farm-earth/60">Subtotal</span>
                  <span className="font-bold text-farm-earth">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-farm-earth/60">Delivery Fee</span>
                  <span className="font-bold text-farm-earth">₹{deliveryFee}</span>
                </div>
                <div className="pt-4 border-t border-farm-earth/5 flex justify-between items-center">
                  <span className="font-serif font-bold text-lg">Total</span>
                  <span className="text-2xl font-bold text-farm-green">₹{total}</span>
                </div>
              </div>

              <button 
                onClick={onCheckout}
                className="w-full bg-farm-accent text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-farm-accent/90 transition-all shadow-lg shadow-farm-accent/20 mb-4"
              >
                Place Order
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-2 justify-center text-[10px] text-farm-earth/40 uppercase tracking-widest font-bold">
                <ShieldCheck className="w-3 h-3" />
                Secure Checkout
              </div>
            </div>

            <div className="bg-farm-green/5 p-6 rounded-3xl border border-farm-green/10">
              <p className="text-xs text-farm-green/70 leading-relaxed">
                By placing this order, you are directly supporting local farmers and ensuring they receive fair compensation for their hard work.
              </p>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
};
