/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Marketplace } from './components/Marketplace';
import { FarmerDashboard } from './components/FarmerDashboard';
import { ConsumerDashboard } from './components/ConsumerDashboard';
import { OrderConfirmation } from './components/OrderConfirmation';
import { OrderTracking } from './components/OrderTracking';
import { Login } from './components/Login';
import { Cart } from './components/Cart';
import { AIAssistant } from './components/AIAssistant';
import { Footer } from './components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { Produce } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState<Produce[]>([]);
  const [user, setUser] = useState<{ role: 'farmer' | 'consumer', email: string } | null>(null);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleAddToCart = (product: Produce) => {
    setCart(prev => [...prev, product]);
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const handleLogin = (role: 'farmer' | 'consumer') => {
    setUser({ role, email: 'liniyacrishelsaldanha@gmail.com' });
    setCurrentPage(role === 'farmer' ? 'farmer-dashboard' : 'consumer-dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('home');
  };

  const handlePlaceOrder = () => {
    setCart([]);
    setCurrentPage('confirmation');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onStartShopping={() => setCurrentPage('marketplace')} />;
      case 'marketplace':
        return <Marketplace onAddToCart={handleAddToCart} onCheckout={() => setCurrentPage('cart')} cartCount={cart.length} />;
      case 'farmer-dashboard':
        return <FarmerDashboard onLogout={handleLogout} />;
      case 'consumer-dashboard':
        return <ConsumerDashboard onLogout={handleLogout} />;
      case 'cart':
        return (
          <Cart 
            items={cart} 
            onRemove={handleRemoveFromCart} 
            onCheckout={handlePlaceOrder}
            onBack={() => setCurrentPage('marketplace')}
          />
        );
      case 'confirmation':
        return (
          <OrderConfirmation 
            onContinueShopping={() => setCurrentPage('marketplace')} 
            onTrackOrder={() => setCurrentPage('tracking')}
          />
        );
      case 'tracking':
        return <OrderTracking onBack={() => setCurrentPage('marketplace')} />;
      case 'login':
        return <Login onLogin={handleLogin} onBack={() => setCurrentPage('home')} />;
      default:
        return <Home onStartShopping={() => setCurrentPage('marketplace')} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-farm-green/20 selection:text-farm-green">
      <Navbar 
        currentPage={currentPage} 
        onNavigate={setCurrentPage} 
        cartCount={cart.length}
        user={user}
        onLogout={handleLogout}
      />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <AIAssistant />
      <Footer />
    </div>
  );
}

