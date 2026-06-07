import React, { useState } from 'react';

export default function Reservations() {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', guests: '2', date: '', time: '19:00', requests: '' });
  const [submitStatus, setSubmitStatus] = useState('idle'); // idle, loading, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus('loading');
    setTimeout(() => {
      setSubmitStatus('success');
    }, 1800);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormState({ name: '', email: '', phone: '', guests: '2', date: '', time: '19:00', requests: '' });
    setSubmitStatus('idle');
  };

  return (
    <div className="pt-24 pb-16">
      
      {/* Hero Section */}
      <section className="relative h-[45vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/40 z-10"></div>
        <img 
          alt="Elegant restaurant dining room prepared for service" 
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnskLNKPjuatj-5ynbRQhJ2aUfmmyh1vs2qLKe44-t_SnFknmKzv5gKGc8x4d8RMO8vsiucDGyOztsRN3XSZqDuuW61tVwr8mwk5iU5_6C2SSRvqjm5dvdldnNMD_47F0xUXy9kxu-Uls0VdyUReWiOGcZokm6_d4JWxtl7XUVRyrgj7QfJPm_47xzYAgel2mbM8cx1A4myFXNKyyc0_MDiqVLJM2X2PcjI1usy7USRfCsFUOIvs5roIf699B1M6Dc7wLU-xhHL3E"
        />
        <div className="relative z-20 text-center px-margin-mobile">
          <span className="font-label-sm text-xs text-primary-fixed uppercase tracking-[0.3em] mb-4 block font-bold">
            Securing Your Experience
          </span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-6">
            Reservations
          </h1>
        </div>
      </section>

      {/* Main Form & Info Grid */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-gutter">
        
        {/* Reservation Form Column */}
        <div className="lg:col-span-7 bg-surface-container-lowest p-8 md:p-12 shadow border border-outline-variant/10 rounded">
          <div className="max-w-xl">
            <h2 className="font-display-lg text-2xl md:text-3xl text-primary mb-4 font-bold">Book Your Table</h2>
            <p className="font-body-md text-sm text-on-surface-variant mb-10 leading-relaxed">
              Join us for an evening of artisanal culinary mastery. Please complete the form below to request your preferred seating.
            </p>
            
            {submitStatus === 'success' ? (
              <div className="text-center py-12 space-y-6">
                <span className="material-symbols-outlined text-6xl text-on-tertiary-container animate-bounce">check_circle</span>
                <h3 className="font-display-lg text-2xl text-primary font-bold">Booking Request Sent</h3>
                
                <div className="bg-surface-container-low p-6 rounded text-left font-body-md text-sm space-y-3 max-w-sm mx-auto border border-outline-variant/10">
                  <p className="flex justify-between">
                    <span className="text-on-surface-variant">Name:</span>
                    <span className="text-primary font-bold">{formState.name}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-on-surface-variant">Guests:</span>
                    <span className="text-primary font-bold">{formState.guests} People</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-on-surface-variant">Date:</span>
                    <span className="text-primary font-bold">{formState.date}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-on-surface-variant">Time:</span>
                    <span className="text-primary font-bold">{formState.time.replace(':', ' : ')}</span>
                  </p>
                </div>

                <p className="font-body-md text-xs text-on-surface-variant max-w-xs mx-auto">
                  A confirmation email has been dispatched to <span className="font-semibold text-primary">{formState.email}</span>.
                </p>
                <button 
                  onClick={resetForm}
                  className="bg-primary text-on-primary px-8 py-3.5 font-label-sm text-xs uppercase tracking-widest hover:bg-tertiary-container hover:text-tertiary-fixed transition-all shadow"
                >
                  Book Another Table
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative">
                    <label className="font-label-sm text-[10px] uppercase tracking-widest text-outline mb-2 block font-semibold" htmlFor="name">Full Name</label>
                    <input 
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      disabled={submitStatus === 'loading'}
                      className="w-full form-input-border py-2 px-0 text-sm md:text-base focus:ring-0 placeholder:text-surface-dim"
                      placeholder="E.g. Julian Vaudreuil"
                      required
                    />
                  </div>
                  <div className="relative">
                    <label className="font-label-sm text-[10px] uppercase tracking-widest text-outline mb-2 block font-semibold" htmlFor="email">Email Address</label>
                    <input 
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      disabled={submitStatus === 'loading'}
                      className="w-full form-input-border py-2 px-0 text-sm md:text-base focus:ring-0 placeholder:text-surface-dim"
                      placeholder="julian@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative">
                    <label className="font-label-sm text-[10px] uppercase tracking-widest text-outline mb-2 block font-semibold" htmlFor="phone">Phone Number</label>
                    <input 
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleInputChange}
                      disabled={submitStatus === 'loading'}
                      className="w-full form-input-border py-2 px-0 text-sm md:text-base focus:ring-0 placeholder:text-surface-dim"
                      placeholder="+1 (555) 000-0000"
                      required
                    />
                  </div>
                  <div className="relative">
                    <label className="font-label-sm text-[10px] uppercase tracking-widest text-outline mb-2 block font-semibold" htmlFor="guests">Number of Guests</label>
                    <select 
                      id="guests"
                      name="guests"
                      value={formState.guests}
                      onChange={handleInputChange}
                      disabled={submitStatus === 'loading'}
                      className="w-full form-input-border py-2 px-0 text-sm md:text-base focus:ring-0 cursor-pointer appearance-none"
                      required
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5">5 People</option>
                      <option value="6+">6+ (Large Party)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative">
                    <label className="font-label-sm text-[10px] uppercase tracking-widest text-outline mb-2 block font-semibold" htmlFor="date">Date</label>
                    <input 
                      type="date"
                      id="date"
                      name="date"
                      value={formState.date}
                      onChange={handleInputChange}
                      disabled={submitStatus === 'loading'}
                      className="w-full form-input-border py-2 px-0 text-sm md:text-base focus:ring-0 cursor-pointer"
                      required
                    />
                  </div>
                  <div className="relative">
                    <label className="font-label-sm text-[10px] uppercase tracking-widest text-outline mb-2 block font-semibold" htmlFor="time">Time</label>
                    <select 
                      id="time"
                      name="time"
                      value={formState.time}
                      onChange={handleInputChange}
                      disabled={submitStatus === 'loading'}
                      className="w-full form-input-border py-2 px-0 text-sm md:text-base focus:ring-0 cursor-pointer appearance-none"
                      required
                    >
                      <option value="18:00">6:00 PM</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="relative">
                  <label className="font-label-sm text-[10px] uppercase tracking-widest text-outline mb-2 block font-semibold" htmlFor="requests">Special Requests</label>
                  <textarea 
                    id="requests"
                    name="requests"
                    value={formState.requests}
                    onChange={handleInputChange}
                    disabled={submitStatus === 'loading'}
                    rows="3"
                    className="w-full form-input-border py-2 px-0 text-sm md:text-base placeholder:text-surface-dim resize-none focus:ring-0"
                    placeholder="Dietary restrictions, anniversaries, or seating preferences..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={submitStatus === 'loading'}
                  className="w-full md:w-auto bg-primary text-on-primary px-12 py-5 font-label-sm text-xs uppercase tracking-widest hover:bg-tertiary-container hover:text-tertiary-fixed transition-all duration-300 ease-in-out group flex items-center justify-center gap-3 shadow"
                >
                  {submitStatus === 'loading' ? (
                    <>
                      <span className="material-symbols-outlined text-sm animate-spin">progress_activity</span>
                      Processing Reservation...
                    </>
                  ) : (
                    <>
                      Reserve a Table
                      <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Restaurant Info Column */}
        <div className="lg:col-span-5 space-y-12">
          
          {/* Info panel */}
          <div className="bg-surface-container-low p-8 md:p-10 shadow border border-outline-variant/10 rounded">
            <h3 className="font-display-lg text-headline-md text-primary mb-8 font-bold">Visit Us</h3>
            <div className="space-y-8 font-body-md text-sm md:text-base">
              
              {/* Address */}
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-on-tertiary-container select-none">location_on</span>
                <div>
                  <p className="font-label-sm text-[10px] uppercase tracking-wider text-outline font-semibold mb-1">Address</p>
                  <p className="text-primary leading-relaxed">
                    124 Rue de la Gastronomie,<br />
                    75001 Paris, France
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-on-tertiary-container select-none">schedule</span>
                <div>
                  <p className="font-label-sm text-[10px] uppercase tracking-wider text-outline font-semibold mb-1">Opening Hours</p>
                  <ul className="text-primary space-y-1">
                    <li className="flex justify-between w-48"><span>Mon – Thu</span> <span>18:00 – 23:00</span></li>
                    <li className="flex justify-between w-48"><span>Fri – Sat</span> <span>18:00 – 00:00</span></li>
                    <li className="flex justify-between w-48 font-bold text-tertiary-fixed-dim"><span>Sunday</span> <span>Closed</span></li>
                  </ul>
                </div>
              </div>

              {/* Contacts */}
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-on-tertiary-container select-none">call</span>
                <div>
                  <p className="font-label-sm text-[10px] uppercase tracking-wider text-outline font-semibold mb-1">Contact</p>
                  <p className="text-primary">+33 (0) 1 23 45 67 89</p>
                  <p className="text-primary">maitre@lartisan.fr</p>
                </div>
              </div>

            </div>
          </div>

          {/* Map view */}
          <div className="w-full aspect-square md:aspect-video lg:aspect-square bg-surface-container-highest overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700 cursor-crosshair rounded shadow border border-outline-variant/10 group">
            <img 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz3iF5yrg8PFFIPnrpGF8YG7GVHCGjW7a9AGWzmKJpAYYb1qJecF1n-dVoa2oqfEmEai1lGowl3WX5bN_75_aNAJu8Jq8TRGBaKCW5i8RQIT5EMQT0BeQozz5sbCoz9np2cNyN6G_Cv_XBPz54FtrgKixFd0mMJWgCakocp2SL-zaDXgRFAHeCg33h2IbWxTtnn3tIuhGpQmddEHLsJHSLnCM4f8BJPO78iMt53DmZathpgp2H--NC6-7EeNHnBfKRhilsurdIYRo" 
              alt="Bespoke location marker pin on Paris map"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-transparent transition-colors duration-300">
              <div className="bg-white/95 backdrop-blur-sm px-6 py-4 shadow flex items-center gap-3 rounded">
                <span className="material-symbols-outlined text-tertiary-container select-none">location_on</span>
                <span className="font-label-sm text-xs text-primary uppercase font-bold">Find Our Location</span>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* Quote Outro Section */}
      <section className="bg-secondary-container py-section-gap border-t border-outline-variant/10">
        <div className="max-w-3xl mx-auto text-center px-margin-mobile">
          <span className="material-symbols-outlined text-4xl text-on-tertiary-container mb-6 select-none">format_quote</span>
          <blockquote className="font-display-lg text-2xl md:text-3xl italic text-primary leading-relaxed mb-6">
            "An experience that transcends mere dining. L'Artisan is a temple to the senses, where every detail is curated with surgical precision and immense heart."
          </blockquote>
          <cite className="not-italic font-label-sm text-xs text-on-tertiary-fixed-variant uppercase tracking-[0.2em] block font-bold">
            — Madeline Dubois, Culinary Critic
          </cite>
        </div>
      </section>

    </div>
  );
}
