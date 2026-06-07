import React, { useState } from 'react';

export default function CartDrawer({ isOpen, setOpen, cart, updateCartQuantity, removeFromCart, clearCart }) {
  const [checkoutState, setCheckoutState] = useState('idle'); // idle, processing, complete

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    setCheckoutState('processing');
    setTimeout(() => {
      setCheckoutState('complete');
      setTimeout(() => {
        clearCart();
        setCheckoutState('idle');
        setOpen(false);
      }, 2500);
    }, 1800);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div 
        onClick={() => checkoutState !== 'processing' && setOpen(false)}
        className="fixed inset-0 bg-primary/45 backdrop-blur-sm transition-opacity duration-300"
      ></div>

      {/* Drawer Body */}
      <div className="relative w-full max-w-md bg-surface h-full shadow-2xl flex flex-col z-10 transition-transform duration-500 animate-slide-in">
        
        {/* Header */}
        <div className="px-6 py-6 border-b border-outline-variant/20 flex justify-between items-center bg-surface-container-low">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-2xl">shopping_bag</span>
            <h2 className="font-display-lg text-xl font-bold text-primary">Your Order</h2>
          </div>
          <button 
            onClick={() => setOpen(false)}
            disabled={checkoutState === 'processing'}
            className="text-primary hover:text-on-tertiary-container transition-colors duration-200"
            aria-label="Close cart"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
          {checkoutState === 'complete' ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <span className="material-symbols-outlined text-7xl text-on-tertiary-container animate-pulse">check_circle</span>
              <h3 className="font-display-lg text-2xl text-primary">Order Confirmed</h3>
              <p className="font-body-md text-sm text-on-surface-variant max-w-xs">
                Your culinary request has been received by our head chef. Bon appétit!
              </p>
            </div>
          ) : checkoutState === 'processing' ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <span className="material-symbols-outlined text-5xl text-primary animate-spin">progress_activity</span>
              <h3 className="font-display-lg text-lg text-primary">Transmitting culinary order...</h3>
              <p className="font-body-md text-xs text-on-surface-variant">Securing connection with L'Artisan Kitchen...</p>
            </div>
          ) : cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <span className="material-symbols-outlined text-5xl text-outline-variant">restaurant</span>
              <h3 className="font-display-lg text-lg text-primary">Your cart is empty</h3>
              <p className="font-body-md text-xs text-on-surface-variant max-w-xs">
                Browse our curated menu and add signature dishes to your artisan collection.
              </p>
            </div>
          ) : (
            cart.map((item) => (
              <div 
                key={item.id} 
                className="flex items-start gap-4 pb-6 border-b border-outline-variant/10 group"
              >
                {/* Image */}
                <div className="w-20 h-24 overflow-hidden bg-surface-container-low border border-outline-variant/10 flex-shrink-0">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-display-lg text-base text-primary truncate">{item.name}</h4>
                  <p className="text-xs text-on-tertiary-container font-semibold mt-1">${item.price}</p>
                  
                  {/* Quantity Actions */}
                  <div className="flex items-center gap-3 mt-4">
                    <button 
                      onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-full border border-outline-variant/30 flex items-center justify-center text-primary hover:bg-secondary-container transition-all"
                      aria-label="Decrease quantity"
                    >
                      <span className="material-symbols-outlined text-sm">remove</span>
                    </button>
                    <span className="font-body-md text-sm text-primary select-none">{item.quantity}</span>
                    <button 
                      onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-full border border-outline-variant/30 flex items-center justify-center text-primary hover:bg-secondary-container transition-all"
                      aria-label="Increase quantity"
                    >
                      <span className="material-symbols-outlined text-sm">add</span>
                    </button>
                  </div>
                </div>

                {/* Remove Button */}
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-outline hover:text-error transition-colors p-1"
                  aria-label="Remove item"
                >
                  <span className="material-symbols-outlined text-lg">delete</span>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer Area */}
        {cart.length > 0 && checkoutState === 'idle' && (
          <div className="px-6 py-6 border-t border-outline-variant/20 bg-surface-container-low space-y-4">
            <div className="flex justify-between items-baseline">
              <span className="font-label-sm text-xs uppercase tracking-widest text-outline">Subtotal</span>
              <span className="font-display-lg text-2xl text-primary font-bold">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-body-md text-[11px] text-on-surface-variant italic">
              Taxes and service charge calculated at checkout.
            </p>
            <button 
              onClick={handleCheckout}
              className="w-full bg-primary text-on-primary py-4 font-label-sm text-xs uppercase tracking-[0.2em] hover:bg-tertiary-container hover:text-tertiary-fixed transition-all duration-300 shadow-md flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">shopping_cart_checkout</span>
              Confirm & Book Order
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
