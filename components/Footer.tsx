import React from 'react';
import { Sprout, Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-farm-earth text-farm-cream pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-farm-green p-2 rounded-lg">
                <Sprout className="text-farm-cream w-6 h-6" />
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight">FarmLink</span>
            </div>
            <p className="text-farm-cream/60 text-sm leading-relaxed">
              Connecting rural farmers directly with urban consumers for a fairer, fresher, and more sustainable food system.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-farm-green transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-farm-green transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-farm-green transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-farm-cream/60">
              <li><a href="#" className="hover:text-farm-accent transition-colors">Marketplace</a></li>
              <li><a href="#" className="hover:text-farm-accent transition-colors">Farmer Registration</a></li>
              <li><a href="#" className="hover:text-farm-accent transition-colors">Our Impact</a></li>
              <li><a href="#" className="hover:text-farm-accent transition-colors">Sustainability</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-farm-cream/60">
              <li><a href="#" className="hover:text-farm-accent transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-farm-accent transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-farm-accent transition-colors">Returns & Refunds</a></li>
              <li><a href="#" className="hover:text-farm-accent transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-farm-cream/60">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-farm-accent" />
                <span>hello@farmlink.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-farm-accent" />
                <span>+91 98765 43210</span>
              </li>
              <li className="mt-6">
                <p className="text-xs font-bold uppercase tracking-widest mb-3">Newsletter</p>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Your email"
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-xs w-full focus:outline-none focus:border-farm-accent"
                  />
                  <button className="bg-farm-accent text-white px-4 py-2 rounded-lg text-xs font-bold">Join</button>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-farm-cream/40">
          <p>© 2026 FarmLink Technologies. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-farm-cream transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-farm-cream transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
