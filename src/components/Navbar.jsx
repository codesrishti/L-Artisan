import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';

export default function Navbar({ cart, setCartOpen }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/menu', label: 'Menu' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/events', label: 'Events' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact Us' }
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'h-20 bg-surface/95 backdrop-blur-md shadow-sm border-b border-outline-variant/10' 
          : 'h-24 bg-surface/90 backdrop-blur-md border-b border-outline-variant/5'
      }`}
    >
      <nav className="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-full max-w-container-max mx-auto">
        {/* Logo */}
        <Link 
          to="/"
          className="font-display-lg text-2xl md:text-3xl text-primary cursor-pointer select-none tracking-tight"
        >
          L'Artisan
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `font-body-md text-sm uppercase tracking-widest pb-1 transition-all duration-300 ${
                  isActive
                    ? 'text-primary font-bold border-b border-primary'
                    : 'text-on-surface-variant hover:text-primary'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Cart Trigger */}
          <button 
            onClick={() => setCartOpen(true)}
            className="relative p-2 text-primary hover:text-tertiary-container transition-colors duration-300 flex items-center justify-center"
            aria-label="Open shopping cart"
          >
            <span className="material-symbols-outlined text-2xl md:text-3xl">shopping_bag</span>
            {totalCartItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-on-tertiary-container text-white text-[10px] md:text-[11px] font-bold rounded-full w-5 h-5 flex items-center justify-center animate-bounce shadow-sm">
                {totalCartItems}
              </span>
            )}
          </button>

          {/* Book Table Button */}
          <button 
            onClick={() => navigate('/reservations')}
            className={`hidden md:block px-6 py-2.5 font-label-sm text-xs uppercase tracking-widest border transition-all duration-300 ${
              location.pathname === '/reservations'
                ? 'bg-primary text-on-primary border-primary'
                : 'bg-primary text-on-primary border-primary hover:bg-transparent hover:text-primary'
            }`}
          >
            Book Table
          </button>

          {/* Mobile Menu Icon */}
          <button 
            onClick={() => navigate('/reservations')}
            className="lg:hidden p-2 text-primary flex items-center justify-center"
            aria-label="Book reservation"
          >
            <span className="material-symbols-outlined text-2xl">event_available</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
