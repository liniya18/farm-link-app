import React from 'react';
import { Produce } from '../types';
import { ShoppingCart, MapPin, Star } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Produce;
  onAddToCart: (product: Produce) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-farm-earth/5 group"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 backdrop-blur-sm text-farm-green text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-serif text-lg font-bold text-farm-earth leading-tight">{product.name}</h3>
          <div className="flex items-center gap-1 text-farm-accent">
            <Star className="w-3 h-3 fill-current" />
            <span className="text-xs font-bold">4.8</span>
          </div>
        </div>
        
        <div className="flex items-center gap-1 text-farm-earth/60 text-xs mb-3">
          <MapPin className="w-3 h-3" />
          <span>{product.location}</span>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div>
            <span className="text-xl font-bold text-farm-green">₹{product.price}</span>
            <span className="text-farm-earth/60 text-xs ml-1">/ {product.unit}</span>
          </div>
          
          <button 
            onClick={() => onAddToCart(product)}
            className="bg-farm-green text-farm-cream p-2.5 rounded-xl hover:bg-farm-green/90 transition-all shadow-sm active:scale-95"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
        
        <div className="mt-3 pt-3 border-t border-farm-earth/5">
          <p className="text-[10px] text-farm-earth/40 uppercase tracking-widest font-bold">Sold by</p>
          <p className="text-xs font-medium text-farm-earth/80">{product.farmerName}</p>
        </div>
      </div>
    </motion.div>
  );
};
