import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 3000);
  };

  return (
    <footer className="bg-primary text-primary-fixed pt-20 pb-10">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-16">
        
        {/* Brand Column */}
        <div className="space-y-6">
          <Link 
            to="/"
            className="font-display-lg text-3xl md:text-4xl text-primary-fixed cursor-pointer select-none tracking-tight inline-block"
          >
            L'Artisan
          </Link>
          <p className="font-body-md text-sm text-primary-fixed/60 leading-relaxed max-w-xs">
            Crafting timeless culinary experiences since 1994. Quality, heritage, and intentionality in every bite.
          </p>
          <div className="flex gap-4">
            <a 
              href="mailto:maitre@lartisan.fr" 
              className="w-10 h-10 border border-primary-fixed/20 flex items-center justify-center hover:border-tertiary-fixed hover:text-tertiary-fixed transition-all duration-300"
              title="Email Us"
            >
              <span className="material-symbols-outlined text-lg">alternate_email</span>
            </a>
            <a 
              href="tel:+33123456789" 
              className="w-10 h-10 border border-primary-fixed/20 flex items-center justify-center hover:border-tertiary-fixed hover:text-tertiary-fixed transition-all duration-300"
              title="Call Us"
            >
              <span className="material-symbols-outlined text-lg">call</span>
            </a>
            <Link 
              to="/contact"
              className="w-10 h-10 border border-primary-fixed/20 flex items-center justify-center hover:border-tertiary-fixed hover:text-tertiary-fixed transition-all duration-300"
              title="Share Location"
            >
              <span className="material-symbols-outlined text-lg">share</span>
            </Link>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="font-label-sm uppercase tracking-widest text-white text-xs mb-6 border-b border-primary-fixed/10 pb-2">Quick Links</h4>
          <ul className="space-y-4 font-body-md text-sm text-primary-fixed/80 flex flex-col items-start">
            <li>
              <Link to="/reservations" className="hover:text-tertiary-fixed transition-colors duration-200">
                Reservations
              </Link>
            </li>
            <li>
              <Link to="/menu" className="hover:text-tertiary-fixed transition-colors duration-200">
                Opening Hours
              </Link>
            </li>
            <li>
              <Link to="/events" className="hover:text-tertiary-fixed transition-colors duration-200">
                Catering & Events
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-tertiary-fixed transition-colors duration-200">
                Contact & Find Us
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-tertiary-fixed transition-colors duration-200">
                Journal
              </Link>
            </li>
          </ul>
        </div>

        {/* Opening Hours Column */}
        <div>
          <h4 className="font-label-sm uppercase tracking-widest text-white text-xs mb-6 border-b border-primary-fixed/10 pb-2">Opening Hours</h4>
          <ul className="space-y-4 font-body-md text-sm text-primary-fixed/80">
            <li className="flex justify-between">
              <span>Mon – Thu</span>
              <span>18:00 – 23:00</span>
            </li>
            <li className="flex justify-between">
              <span>Fri – Sat</span>
              <span>18:00 – 00:00</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday</span>
              <span>12:00 – 21:00</span>
            </li>
            <li className="flex justify-between text-tertiary-fixed font-semibold">
              <span>Monday</span>
              <span>Closed</span>
            </li>
          </ul>
        </div>

        {/* Location Column */}
        <div className="space-y-6">
          <h4 className="font-label-sm uppercase tracking-widest text-white text-xs mb-6 border-b border-primary-fixed/10 pb-2">Location</h4>
          <p className="font-body-md text-sm text-primary-fixed/80">
            124 Rue de la Gastronomie,<br />
            75001 Paris, France
          </p>
          <Link 
            to="/contact"
            className="w-full h-32 bg-primary-container relative overflow-hidden group cursor-pointer border border-primary-fixed/10 block"
          >
            <img 
              alt="Paris street grid mapping" 
              className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsZ759oiOhAB78FCuIdiBUuV8vEwvQPWXdgHUbz-XWajxhNhtr_Eh4XRm9-pUDoouPvizCZwW20lE3zaEHCTrMelmGXmwjGzANF6VsIu_6ByK6Al-hEnC7h9BZydDPKxOJAna-07dZ3YJbv8xYiKIvkHvXzx9cNyXxldkj_SJ2BUy-89Tqn3lq4hp5zkp4I0BlfsoRMXYNF_N8IvGKewsGGH1JaTrgMUFMj5klDUneWF94JDsi_t2UaaLqeR5Zd5Oqu6RLdTQk6Tw" 
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors duration-300">
              <span className="bg-tertiary-fixed text-primary px-4 py-2 font-label-sm uppercase text-[10px] tracking-widest shadow-sm">
                Get Directions
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* Newsletter Signup Banner */}
      <div className="border-t border-primary-fixed/10 pt-10 pb-6 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-label-sm text-xs uppercase tracking-widest text-tertiary-fixed mb-1">Join the Culinary Inner Circle</p>
          <p className="font-body-md text-xs text-primary-fixed/60">Receive seasonal menu updates and exclusive event invitations.</p>
        </div>
        <form onSubmit={handleSubmit} className="flex border-b border-primary-fixed/30 pb-2 w-full max-w-md">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={subscribed}
            className="bg-transparent border-none outline-none focus:ring-0 text-sm text-primary-fixed placeholder:text-primary-fixed/40 w-full px-0 font-body-md" 
            placeholder={subscribed ? "Subscription Sent!" : "Your email address"}
            required
          />
          <button 
            type="submit" 
            disabled={subscribed}
            className="text-tertiary-fixed hover:translate-x-1 transition-transform p-1"
          >
            <span className="material-symbols-outlined text-xl">
              {subscribed ? 'done' : 'arrow_forward'}
            </span>
          </button>
        </form>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center mt-10 opacity-40">
        <p className="font-body-md text-xs text-primary-fixed">
          © 2026 L'Artisan Culinary House. All rights reserved. Built with passion.
        </p>
      </div>
    </footer>
  );
}
