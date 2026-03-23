import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Package, Truck, Calendar, ArrowRight, Heart } from 'lucide-react';

interface OrderConfirmationProps {
  onContinueShopping: () => void;
  onTrackOrder?: () => void;
}

export const OrderConfirmation: React.FC<OrderConfirmationProps> = ({ onContinueShopping, onTrackOrder }) => {
  const orderNumber = "FL-" + Math.floor(100000 + Math.random() * 900000);
  const deliveryDate = new Array(3).fill(0).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + 2);
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
  })[0];

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-farm-earth/5 border border-farm-earth/5 text-center relative overflow-hidden"
      >
        {/* Decorative background element */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-farm-green/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-farm-accent/5 rounded-full blur-3xl pointer-events-none" />

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
          className="w-24 h-24 bg-farm-green rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-farm-green/20"
        >
          <CheckCircle2 className="w-12 h-12 text-farm-cream" />
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-serif text-farm-earth mb-4">Order Confirmed!</h1>
        <p className="text-farm-earth/60 mb-12 max-w-md mx-auto">
          Your support means the world to our farmers. We've received your order and are getting it ready for harvest.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left">
          <div className="bg-farm-cream/50 p-6 rounded-3xl border border-farm-earth/5">
            <div className="flex items-center gap-3 mb-4 text-farm-green">
              <Package className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-widest">Order Details</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-farm-earth/60">Order Number</span>
                <span className="font-bold text-farm-earth">{orderNumber}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-farm-earth/60">Payment Method</span>
                <span className="font-bold text-farm-earth">UPI / Digital</span>
              </div>
              <div className="flex justify-between text-sm pt-2 border-t border-farm-earth/10">
                <span className="text-farm-earth/60">Total Amount</span>
                <span className="font-bold text-farm-green">₹1,240.00</span>
              </div>
            </div>
          </div>

          <div className="bg-farm-cream/50 p-6 rounded-3xl border border-farm-earth/5">
            <div className="flex items-center gap-3 mb-4 text-farm-accent">
              <Truck className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-widest">Delivery Info</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-farm-earth/60">Estimated Delivery</span>
                <span className="font-bold text-farm-earth">{deliveryDate}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-farm-earth/60">Status</span>
                <span className="font-bold text-farm-accent">Preparing Harvest</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-farm-earth/40 mt-3">
                <Calendar className="w-3 h-3" />
                <span>Direct from Ratnagiri & Mysuru farms</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-farm-green/10 p-6 rounded-3xl mb-12 flex items-center gap-4 text-left border border-farm-green/10">
          <div className="bg-farm-green p-3 rounded-2xl">
            <Heart className="w-6 h-6 text-farm-cream" />
          </div>
          <div>
            <p className="text-sm font-serif font-bold text-farm-green">You've made an impact!</p>
            <p className="text-xs text-farm-green/70">This order directly supports 2 farming families in Karnataka and Maharashtra.</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={onContinueShopping}
            className="bg-farm-earth text-farm-cream px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-farm-earth/90 transition-all shadow-lg"
          >
            Continue Shopping
            <ArrowRight className="w-5 h-5" />
          </button>
          <button 
            onClick={onTrackOrder}
            className="bg-white border border-farm-earth/10 text-farm-earth px-8 py-4 rounded-2xl font-bold hover:bg-farm-earth/5 transition-all"
          >
            Track My Order
          </button>
        </div>
      </motion.div>

      <div className="mt-12 text-center">
        <p className="text-sm text-farm-earth/40 italic">
          "The food you eat is the result of a farmer's sweat. Thank you for choosing direct."
        </p>
      </div>
    </div>
  );
};
