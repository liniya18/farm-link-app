import React, { useState } from 'react';
import { MOCK_PRODUCE } from '../constants';
import { ProductCard } from './ProductCard';
import { Search, Filter, SlidersHorizontal, ShoppingBasket, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Produce } from '../types';

interface MarketplaceProps {
  onAddToCart: (product: Produce) => void;
  onCheckout?: () => void;
  cartCount: number;
}

export const Marketplace: React.FC<MarketplaceProps> = ({ onAddToCart, onCheckout, cartCount }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showToast, setShowToast] = useState(false);
  const categories = ['All', 'Vegetables', 'Fruits', 'Grains', 'Dairy'];

  const handleAdd = (product: Produce) => {
    onAddToCart(product);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const filteredProducts = activeCategory === 'All' 
    ? MOCK_PRODUCE 
    : MOCK_PRODUCE.filter(p => p.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div>
          <h1 className="text-5xl font-serif text-farm-earth mb-2">The Marketplace</h1>
          <p className="text-farm-earth/60">Discover fresh produce directly from local farms.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          {onCheckout && cartCount > 0 && (
            <motion.button 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={onCheckout}
              className="bg-farm-accent text-white px-6 py-3 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-farm-accent/90 transition-all shadow-lg shadow-farm-accent/20"
            >
              <ShoppingBasket className="w-5 h-5" />
              Go to Basket ({cartCount})
            </motion.button>
          )}
          <div className="relative flex-grow md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-farm-earth/40" />
            <input 
              type="text" 
              placeholder="Search for tomatoes, mangoes..."
              className="w-full pl-12 pr-4 py-3 bg-white border border-farm-earth/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-farm-green/20 transition-all"
            />
          </div>
          <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-farm-earth/10 rounded-2xl font-medium hover:bg-farm-earth/5 transition-all">
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-3 overflow-x-auto pb-4 mb-8 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
              activeCategory === cat 
                ? "bg-farm-green text-farm-cream shadow-md" 
                : "bg-white text-farm-earth/60 border border-farm-earth/10 hover:border-farm-green/30"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={handleAdd} 
          />
        ))}
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] bg-farm-green text-farm-cream px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/20"
          >
            <CheckCircle2 className="w-5 h-5" />
            <span className="font-bold text-sm">Added to your basket!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {filteredProducts.length === 0 && (
        <div className="text-center py-24">
          <div className="bg-farm-cream w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Filter className="w-8 h-8 text-farm-earth/20" />
          </div>
          <h3 className="text-xl font-serif font-bold mb-2">No produce found</h3>
          <p className="text-farm-earth/60">Try adjusting your filters or search terms.</p>
        </div>
      )}
    </div>
  );
};
