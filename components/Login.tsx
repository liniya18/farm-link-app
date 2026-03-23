import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, ArrowRight, Sprout, Github, Chrome } from 'lucide-react';

interface LoginProps {
  onLogin: (role: 'farmer' | 'consumer') => void;
  onBack: () => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin, onBack }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState<'farmer' | 'consumer'>('consumer');

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl shadow-farm-earth/5 border border-farm-earth/5"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center bg-farm-green p-3 rounded-2xl mb-4">
            <Sprout className="text-farm-cream w-8 h-8" />
          </div>
          <h1 className="text-3xl font-serif text-farm-earth mb-2">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className="text-farm-earth/60 text-sm">
            {isLogin ? 'Sign in to continue your harvest journey' : 'Join the movement for fairer farming'}
          </p>
        </div>

        {/* Role Selector */}
        <div className="flex p-1 bg-farm-cream rounded-2xl mb-8">
          <button 
            onClick={() => setRole('consumer')}
            className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${
              role === 'consumer' ? "bg-white text-farm-green shadow-sm" : "text-farm-earth/40"
            }`}
          >
            Consumer
          </button>
          <button 
            onClick={() => setRole('farmer')}
            className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${
              role === 'farmer' ? "bg-farm-green text-farm-cream shadow-sm" : "text-farm-earth/40"
            }`}
          >
            Farmer
          </button>
        </div>

        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onLogin(role); }}>
          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-farm-earth/40 ml-4">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-farm-earth/30" />
              <input 
                type="email" 
                placeholder="name@example.com"
                className="w-full pl-12 pr-4 py-3.5 bg-farm-cream/50 border border-farm-earth/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-farm-green/20 transition-all"
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-farm-earth/40 ml-4">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-farm-earth/30" />
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full pl-12 pr-4 py-3.5 bg-farm-cream/50 border border-farm-earth/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-farm-green/20 transition-all"
                required
              />
            </div>
          </div>

          {isLogin && (
            <div className="text-right">
              <button type="button" className="text-xs font-bold text-farm-green hover:underline">Forgot Password?</button>
            </div>
          )}

          <button 
            type="submit"
            className="w-full bg-farm-green text-farm-cream py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-farm-green/90 transition-all shadow-lg shadow-farm-green/10 mt-4"
          >
            {isLogin ? 'Sign In' : 'Create Account'}
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-farm-earth/5"></div></div>
          <div className="relative flex justify-center text-xs uppercase tracking-widest font-bold"><span className="bg-white px-4 text-farm-earth/20">Or continue with</span></div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <button 
            type="button"
            onClick={() => onLogin(role)}
            className="flex items-center justify-center gap-3 py-3.5 border border-farm-earth/10 rounded-2xl hover:bg-farm-earth/5 transition-all group"
          >
            <div className="bg-white p-1 rounded-full shadow-sm border border-farm-earth/5">
              <Chrome className="w-4 h-4 text-[#4285F4]" />
            </div>
            <span className="text-sm font-bold text-farm-earth">Continue with Google</span>
          </button>
        </div>

        <p className="text-center mt-8 text-sm text-farm-earth/60">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="ml-1 font-bold text-farm-green hover:underline"
          >
            {isLogin ? 'Sign Up' : 'Sign In'}
          </button>
        </p>

        <button 
          onClick={onBack}
          className="w-full mt-4 text-xs font-bold text-farm-earth/40 hover:text-farm-earth/60 transition-colors"
        >
          Back to Home
        </button>
      </motion.div>
    </div>
  );
};
