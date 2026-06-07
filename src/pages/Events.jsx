import React, { useState } from 'react';

export default function Events() {
  const [formState, setFormState] = useState({ name: '', email: '', date: '', type: 'Wedding', details: '' });
  const [submitStatus, setSubmitStatus] = useState('idle'); // idle, loading, success

  const services = [
    {
      title: 'Wedding Catering',
      desc: 'Elevated culinary experiences tailored for your union, featuring seasonal ingredients and impeccable service.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqbh913XDBnEd4oXAyL1_TWArDMRUwF73MfrbHgOhO1dR3C_GTnOlyJ8pnCRFJyA8-cZ6Xk7FqdzmCxG5uftYjOb0Oq7c5kP5TStiQHFRi1h8duOJT_T9CdG-p4UhsMxAy7c8UMsYkIsryCykdcQLLPfyVF3OEtc2CTqZGpwKL4Q2YmhSNAfw_NXlWfs4y0aUWVv-lnkB-jU-4ybnP19DF0ePLzdwHn0l5-x0rGBvlPNxPSIRwD8W9PFAXlod3fStmO5lAmuZ2peI'
    },
    {
      title: 'Corporate Events',
      desc: 'Refined gastronomy for product launches, board meetings, and gala dinners that impress your most valued partners.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8tBbM2pmk9wtifMQcFRfjAkNNEutKWJcrVzjKgg-y5mHY8EESLTpNfG9gB0ekZU_xMwvm88H-U8vmIXW4mKhe_PrQowMIszP1hGtEVkdIvqDsOhwhK4pCqOz-UQK626ccY2Up1u6RImYL9XjTWWJyBSnKCk0uOUSICESe4RKr527XpL3htpj-7KJMZCwacwMTbQ0QQorJ1h-LA1YE8gdnBckM5TTZGclBjTbZz9WIwoXy_SrNh3oZOp0XytHd8j6o2v9wAAq4fSo'
    },
    {
      title: 'Private Parties',
      desc: 'Intimate gatherings and milestone celebrations brought to life with bespoke menus and creative flair.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1shwt8h4OuQsuVPVn-8U1SuysZ3jde9V7oMgFZXHFshYcmnSZW2ZT_oKZkNgqPUGAdTmsxxZLRQ0fIvzjSZ6kuVvo8xu0z5goPxnmKLckthdizLjl9B9WrUtrvw0ZfZoF5LeAuPmzjJbtR1ukrVh4OOZcI57xtSooxsVxBjjBJxpgeRlVoIiHP8DzmIWmEOtvW6nH9WD1GYYATxAUPrtvlfFalYnruquS1BW2GGoyUjCb15KPLwAo1Ggl4kMhKn7_Fr0MTiCU3Gc'
    }
  ];

  const packages = [
    {
      name: 'The Intimate',
      desc: 'Minimum 12 guests',
      price: '$145',
      features: ['Four-course seasonal tasting menu', 'Welcome artisanal cocktail', 'Dedicated table steward']
    },
    {
      name: 'The Signature',
      desc: 'Minimum 30 guests',
      price: '$210',
      featured: true,
      features: ['Six-course bespoke menu', 'Premium sommelier selection', 'Live culinary station', 'Bespoke table landscape design']
    },
    {
      name: 'The Grand',
      desc: 'Custom quotes for 100+',
      price: 'Custom',
      features: ['Unlimited tasting courses', 'Full bar & mixology service', 'Complete event planning integration']
    }
  ];

  const pastImages = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCLdafzptxCATTQw10e8xD5tpq0wCfCf_WzEk0ATYVxVC9YQHk_Y7--W9HnvKzBoAI6inxClM9glpWuF_J2U_CuWlyLJCUQGJB1odJmVG4EcP22vcOKr-pX_w6kR5SoCgW8H1R3cbS5bEUuHj54FnprHPc80JiV8HdC2Tn6aX7cuwLztbHv9zubLxymUL7D88Gr2fGvCkHIKc_7aNZJEXu1hRcZHjDRqi81F2hAaIdjQNxPryYE1AciqRx4GiO_FtLbGlOImi5DDh8',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCB4lIMjTG1yO0wtRyWACOXnRMeR1akYE4iTcfuhUJ1dQoPtNkzzJRMST20qBbDBPbpUhntMABIzJwr3S99TvPTLL5nDVKBQSPstcS7HlkWkBUf5i_xxfA1TdemMQj--7qkA7x-WkkC9k6uoRNgSg7jUwRO9AjtKgTbOghbEfJJfbiI0sGWDS9JTrjxZT5FsSUBre7PW9SoepINkbaoFOMJG_qTeBZMtNRfwffVXr1MNx4rtl_-MTp22AW0GTsDjiSvrXUm_AOaz8A',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAlbbSAn5SRXBgcEfIgUtKHz56XHgRRLkjQbm81pXDc61Hz8a5a5JRKG7_9HVYoquKpPR2qpf7nNny91Spu9DIZhMGuZM6GzcvdZ4xT_cPYbs3UCHbsTgEvZHJKoz2EDukUzLjSZWNbiOcEB-2a5VTBniItwpJ5_EZJlKEhaWfO4P6Hic_gpwQYnHxby1kcgxqRAUspdGJOf8aqDIbbxmfRodKZMwDZTka3laxzjoJJd47Hpl9OFTetH3SSkYBjBWFCWy-cJMc7mIg'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus('loading');
    setTimeout(() => {
      setSubmitStatus('success');
      setTimeout(() => {
        setFormState({ name: '', email: '', date: '', type: 'Wedding', details: '' });
        setSubmitStatus('idle');
      }, 3000);
    }, 1500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[75vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/45 z-10"></div>
        <img 
          alt="Opulent banquet layout in grand ballroom with candles" 
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4V5Cig_arlkPi9oYPyOnHDQTgdSDlLlvMcoom42DdcNGIIeypghKb1DB4PwXTGF_0irr5cOw_-97YzG0PoicdW7xZiAP5KU3MjtxOXB7QHfdbPGfny6jOg-GQzj5y9dtdlblE-U-tLymU2yFyuKl3doguK3U7wf2MaUGAe4pNZ1G0wFCu0YrmoTp-qWObTRJV-SXnqyDFRVjkXigAP6k4CCUSYHoTMlZF2xJbGJA7W0m2i_8YIjAjSQT0BeaTQwbU-ikyRs40qTs"
        />
        <div className="relative z-20 text-center px-margin-mobile max-w-4xl mx-auto">
          <span className="font-label-sm text-xs text-primary-fixed uppercase tracking-[0.2em] mb-4 block font-bold">
            Crafting Unforgettable Moments
          </span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-6 leading-tight">
            Artisanal Events &amp; Bespoke Catering
          </h1>
          <p className="font-body-lg text-sm md:text-base text-white/90 max-w-xl mx-auto leading-relaxed mb-8">
            From intimate soirées to grand celebrations, we bring the culinary mastery of L'Artisan to your most significant milestones.
          </p>
          <a 
            href="#inquiry" 
            className="inline-block border border-white text-white px-10 py-4 font-body-md text-xs uppercase tracking-widest hover:bg-white hover:text-primary transition-all duration-300 font-semibold"
          >
            Inquire Now
          </a>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-3xl md:text-4xl text-primary mb-6">Our Services</h2>
          <div className="w-12 h-0.5 bg-on-tertiary-container mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((svc, idx) => (
            <div key={idx} className="group">
              <div className="relative aspect-[3/4] overflow-hidden mb-6 rounded shadow-sm">
                <img 
                  alt={svc.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 select-none" 
                  src={svc.img}
                />
              </div>
              <h3 className="font-headline-md text-xl md:text-2xl text-primary mb-4">{svc.title}</h3>
              <p className="font-body-md text-sm text-on-surface-variant mb-6 leading-relaxed">{svc.desc}</p>
              <a href="#inquiry" className="font-label-sm text-xs text-on-tertiary-container uppercase tracking-widest border-b border-on-tertiary-container pb-1 font-semibold">
                Inquire Details
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-section-gap bg-secondary-container">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <span className="font-label-sm text-xs text-on-tertiary-container uppercase tracking-[0.2em] mb-4 block font-bold">Investment</span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-primary">Catering Packages</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div 
                key={idx} 
                className={`p-10 shadow-lg transition-transform duration-500 hover:-translate-y-2 border rounded flex flex-col justify-between ${
                  pkg.featured 
                    ? 'bg-primary text-on-primary border-transparent relative overflow-hidden' 
                    : 'bg-surface text-on-surface border-outline/10'
                }`}
              >
                {pkg.featured && (
                  <div className="absolute top-0 right-0 bg-on-tertiary-container text-white font-label-sm text-[10px] px-6 py-2 uppercase tracking-widest font-bold">
                    Most Preferred
                  </div>
                )}
                <div>
                  <h4 className={`font-display-lg text-xl md:text-2xl mb-2 ${pkg.featured ? 'text-primary-fixed' : 'text-primary'}`}>{pkg.name}</h4>
                  <p className={`font-body-md text-xs italic mb-8 ${pkg.featured ? 'text-primary-fixed/60' : 'text-on-surface-variant'}`}>{pkg.desc}</p>
                  
                  <div className="font-display-lg text-4xl text-on-tertiary-container mb-10 font-bold">
                    {pkg.price !== 'Custom' && <span className="text-xl">$</span>}
                    {pkg.price === 'Custom' ? 'Custom' : pkg.price.replace('$', '')}
                    {pkg.price !== 'Custom' && <span className="text-sm font-normal">/pp</span>}
                  </div>
                  
                  <ul className="space-y-4 mb-10 text-sm">
                    {pkg.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-on-tertiary-container text-lg select-none">check</span>
                        <span className={pkg.featured ? 'text-primary-fixed' : 'text-on-surface'}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a 
                  href="#inquiry" 
                  className={`w-full py-4 text-center font-body-md text-xs uppercase tracking-widest transition-all duration-300 font-semibold border ${
                    pkg.featured 
                      ? 'bg-on-tertiary-container text-white border-transparent hover:bg-white hover:text-primary' 
                      : 'border-primary text-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  {pkg.price === 'Custom' ? 'Contact Us' : 'Select Package'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Celebrations Showreel */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="mb-16 text-center">
          <span className="font-label-sm text-xs text-on-tertiary-container uppercase tracking-[0.2em] mb-4 block font-bold">Visual Journey</span>
          <h2 className="font-headline-lg text-3xl md:text-4xl text-primary">Past Celebrations</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pastImages.map((url, idx) => (
            <div key={idx} className="group overflow-hidden rounded shadow-sm aspect-[4/3] bg-surface-container-low">
              <img 
                alt={`Celebration record ${idx + 1}`} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 select-none" 
                src={url}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry Capture Form Section */}
      <section className="py-section-gap bg-primary text-primary-fixed" id="inquiry">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Text columns */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-display-lg text-white text-3xl md:text-4xl leading-tight">
              Let's Create Something Extraordinary
            </h2>
            <p className="font-body-lg text-sm md:text-base text-primary-fixed/80 leading-relaxed">
              Our events team is dedicated to bringing your vision to life. Share the details of your upcoming event, and we will craft a bespoke proposal tailored to your needs.
            </p>
            <div className="pt-6 space-y-6">
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-full border border-primary-fixed/20 flex items-center justify-center text-primary-fixed">
                  <span className="material-symbols-outlined text-lg">call</span>
                </span>
                <div>
                  <p className="font-label-sm text-[10px] uppercase tracking-widest text-on-tertiary-container font-semibold">Direct Line</p>
                  <p className="font-body-md text-sm">+1 (555) 012-3456</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-full border border-primary-fixed/20 flex items-center justify-center text-primary-fixed">
                  <span className="material-symbols-outlined text-lg">mail</span>
                </span>
                <div>
                  <p className="font-label-sm text-[10px] uppercase tracking-widest text-on-tertiary-container font-semibold">Inquiries</p>
                  <p className="font-body-md text-sm">events@lartisan.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form fields */}
          <div className="lg:col-span-7 bg-white/5 p-8 md:p-12 border border-white/10 rounded">
            {submitStatus === 'success' ? (
              <div className="text-center py-10 space-y-4">
                <span className="material-symbols-outlined text-5xl text-on-tertiary-container">done_all</span>
                <h3 className="font-display-lg text-xl text-white">Inquiry Received</h3>
                <p className="font-body-md text-sm text-primary-fixed/60 max-w-sm mx-auto">
                  Our event coordinator will review your request and get in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="font-label-sm text-[10px] uppercase tracking-widest text-primary-fixed/60 font-semibold block">Full Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formState.name} 
                      onChange={handleInputChange}
                      disabled={submitStatus === 'loading'}
                      className="w-full bg-transparent border-b border-primary-fixed/20 focus:border-on-tertiary-container outline-none py-2 font-body-md text-sm text-white focus:ring-0 placeholder-white/20" 
                      placeholder="E.g. Marcus Aurelius"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-sm text-[10px] uppercase tracking-widest text-primary-fixed/60 font-semibold block">Email Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formState.email} 
                      onChange={handleInputChange}
                      disabled={submitStatus === 'loading'}
                      className="w-full bg-transparent border-b border-primary-fixed/20 focus:border-on-tertiary-container outline-none py-2 font-body-md text-sm text-white focus:ring-0 placeholder-white/20" 
                      placeholder="marcus@emperor.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="font-label-sm text-[10px] uppercase tracking-widest text-primary-fixed/60 font-semibold block">Event Date</label>
                    <input 
                      type="date" 
                      name="date" 
                      value={formState.date} 
                      onChange={handleInputChange}
                      disabled={submitStatus === 'loading'}
                      className="w-full bg-transparent border-b border-primary-fixed/20 focus:border-on-tertiary-container outline-none py-2 font-body-md text-sm text-white focus:ring-0" 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-sm text-[10px] uppercase tracking-widest text-primary-fixed/60 font-semibold block">Event Type</label>
                    <select 
                      name="type" 
                      value={formState.type} 
                      onChange={handleInputChange}
                      disabled={submitStatus === 'loading'}
                      className="w-full bg-transparent border-b border-primary-fixed/20 focus:border-on-tertiary-container outline-none py-2 font-body-md text-sm text-white focus:ring-0 cursor-pointer appearance-none"
                    >
                      <option className="bg-primary text-white" value="Wedding">Wedding</option>
                      <option className="bg-primary text-white" value="Corporate">Corporate Gala</option>
                      <option className="bg-primary text-white" value="Private Party">Private Party</option>
                      <option className="bg-primary text-white" value="Other">Other Celebration</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-label-sm text-[10px] uppercase tracking-widest text-primary-fixed/60 font-semibold block">Message / Event Details</label>
                  <textarea 
                    name="details" 
                    value={formState.details} 
                    onChange={handleInputChange}
                    disabled={submitStatus === 'loading'}
                    rows="4" 
                    className="w-full bg-transparent border-b border-primary-fixed/20 focus:border-on-tertiary-container outline-none py-2 font-body-md text-sm text-white resize-none focus:ring-0 placeholder-white/20"
                    placeholder="Guest count, catering styling, or specific requests..."
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={submitStatus === 'loading'}
                  className="bg-on-tertiary-container text-white w-full py-4.5 font-body-md text-xs uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-primary transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                >
                  {submitStatus === 'loading' ? (
                    <>
                      <span className="material-symbols-outlined text-lg animate-spin">progress_activity</span>
                      Transmitting Inquiry...
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-lg">send</span>
                      Send Inquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
