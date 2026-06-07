import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Reservations from './pages/Reservations';

export default function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [toasts, setToasts] = useState([]);
  const location = useLocation();

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  // Toast System
  const triggerToast = (message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  // Cart Handlers
  const addToCart = (dish) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === dish.id);
      if (existing) {
        triggerToast(`Increased quantity of ${dish.name}`);
        return prevCart.map((item) => 
          item.id === dish.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        triggerToast(`Added ${dish.name} to order`);
        return [...prevCart, { ...dish, quantity: 1 }];
      }
    });
  };

  const updateCartQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((prevCart) => 
      prevCart.map((item) => 
        item.id === id 
          ? { ...item, quantity }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const item = prevCart.find((i) => i.id === id);
      if (item) {
        triggerToast(`Removed ${item.name} from order`);
      }
      return prevCart.filter((item) => item.id !== id);
    });
  };

  const clearCart = () => {
    setCart([]);
    triggerToast("Order placed successfully!");
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col justify-between selection:bg-on-tertiary-container selection:text-white">
      
      {/* Navigation Header */}
      <Navbar 
        cart={cart}
        setCartOpen={setCartOpen}
      />

      {/* Main Content Viewport */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu addToCart={addToCart} />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reservations" element={<Reservations />} />
        </Routes>
      </main>

      {/* Footer Navigation */}
      <Footer />

      {/* Sidebar Shopping Cart Panel */}
      <CartDrawer 
        isOpen={cartOpen} 
        setOpen={setCartOpen} 
        cart={cart} 
        updateCartQuantity={updateCartQuantity} 
        removeFromCart={removeFromCart} 
        clearCart={clearCart}
      />

      {/* Floating Toast Notification Stack */}
      <div className="fixed bottom-8 left-8 z-[150] flex flex-col gap-3 max-w-sm w-full">
        {toasts.map((toast) => (
          <div 
            key={toast.id} 
            className="bg-primary text-white border border-white/10 px-6 py-4 shadow-2xl rounded flex items-center gap-3 animate-slide-in"
          >
            <span className="material-symbols-outlined text-tertiary-fixed text-lg select-none">info</span>
            <span className="font-body-md text-xs tracking-wide uppercase font-semibold">{toast.message}</span>
          </div>
        ))}
      </div>

    </div>
  );
}
