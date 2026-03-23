import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Leaf, ShieldCheck, Zap } from 'lucide-react';

interface HomeProps {
  onStartShopping: () => void;
}

export const Home: React.FC<HomeProps> = ({ onStartShopping }) => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000" 
            alt="Farm background"
            className="w-full h-full object-cover brightness-75"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-farm-earth/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-farm-accent font-bold tracking-widest uppercase text-sm mb-4 block">Direct from the roots</span>
            <h1 className="text-6xl md:text-8xl font-serif text-farm-cream leading-[0.9] mb-6">
              Freshness <br /> 
              <span className="italic">Without</span> <br />
              Middlemen.
            </h1>
            <p className="text-farm-cream/80 text-lg mb-8 max-w-lg">
              Empowering farmers by connecting them directly with you. Get the freshest produce while ensuring farmers get the profit they deserve.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={onStartShopping}
                className="bg-farm-accent text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-farm-accent/90 transition-all shadow-lg group"
              >
                Shop Fresh Produce
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
                Are you a Farmer?
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-farm-earth mb-4">Why FarmLink?</h2>
            <p className="text-farm-earth/60 max-w-xl mx-auto">We're rebuilding the supply chain to be fairer, fresher, and more sustainable for everyone involved.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Leaf className="w-8 h-8 text-farm-green" />,
                title: "100% Fresh",
                description: "Produce is harvested only after you order, ensuring maximum nutrient density and flavor."
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-farm-green" />,
                title: "Fair Pricing",
                description: "By removing middlemen, farmers earn up to 40% more, while you pay competitive market prices."
              },
              {
                icon: <Zap className="w-8 h-8 text-farm-green" />,
                title: "Direct Delivery",
                description: "Fast logistics connecting rural farms to urban kitchens in less than 24 hours."
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flex flex-col items-center text-center p-8 rounded-3xl bg-farm-cream/30 border border-farm-earth/5"
              >
                <div className="bg-white p-4 rounded-2xl shadow-sm mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">{feature.title}</h3>
                <p className="text-farm-earth/60 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-farm-green text-farm-cream overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <Sprout className="w-full h-full rotate-12" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">Supporting our <br /><span className="italic text-farm-accent">Local Heroes</span></h2>
              <p className="text-farm-cream/70 text-lg mb-12">
                Every purchase on FarmLink goes directly to supporting a farming family. We provide them with the tools, market access, and fair compensation they've been denied for decades.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-4xl font-bold text-farm-accent mb-1">500+</p>
                  <p className="text-sm uppercase tracking-widest opacity-60">Verified Farmers</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-farm-accent mb-1">12k+</p>
                  <p className="text-sm uppercase tracking-widest opacity-60">Happy Families</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl rotate-3">
                <img 
                  src="https://images.unsplash.com/photo-1595273670150-db0a3d39074f?auto=format&fit=crop&q=80&w=1000" 
                  alt="Farmer smiling"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-farm-accent p-8 rounded-2xl shadow-xl -rotate-3">
                <p className="text-2xl font-serif italic">"FarmLink changed my life. I finally get what my hard work is worth."</p>
                <p className="mt-4 font-bold uppercase tracking-widest text-xs">— Ramesh, Tomato Farmer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Sprout = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M7 20h10" /><path d="M10 20c5.5-2.5 8-6.4 8-10 0-4.4-3.6-8-8-8s-8 3.6-8 8c0 3.6 2.5 7.5 8 10Z" /><path d="M12 20v-4" /><path d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z" />
  </svg>
);
