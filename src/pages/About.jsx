import React, { useEffect, useRef } from 'react';

export default function About() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    const currentSections = sectionsRef.current;
    currentSections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      currentSections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const chefs = [
    {
      name: 'Jean-Pierre Beaumont',
      role: 'Executive Chef',
      desc: "With 25 years in Michelin-starred kitchens across Paris, Chef Jean-Pierre brings a philosophy of 'The Essential Element' to L'Artisan.",
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9F0VdRd8-Wb0WOi2bHkxQs0SHDh41XhKKHtQFUpJ6giZ_fj8soW9_DLMfmFTzP2P0RbyRVvXa8XP65v9foOihVfWzZWioINZ-hxrQo6OYpyZK0W7RrQZKbzoth00S8oYI3SsZHF1hKB3N9FGx7mnewpTvOk1fHSWLOIhW6pdN3mUBEJmLXxu4Vp4LloHM9VKTTHfUctHTdHxzaHnXllAwTMIXyi-sKJfhOCWcPXi22Iln3BOsThYMbFkiLw0ruT_FhCcaAKJqvYw'
    },
    {
      name: 'Elena Rossi',
      role: 'Head of Pastry',
      desc: 'A visionary in architectural desserts, Elena blends traditional Italian pastry techniques with modernist visual aesthetics.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEL3ZSJd5qzsNeSITJ1d8KcmKFQSut00XAFDvd7pzDc9PfRhFQkKH5UIikMxjZO3hXjZqfv4A4LryPdiSoUYReiaCEB-spcmAy80JMIml-m8wz2Z0og3lUUFOZO7wYqMcxTzCEpSr2WeE99NM__j0vQDOX_49Kv7ifj2wdnhYBXe7kVCMDS1Q6_Zp9kaeZay9l3vL-C3Yh6QZlK0mhcai0TaUEFldhF52qnGYzvrjG4hQE3NYfB0K_7lEM3HMAyoz90armYNS8l-c'
    },
    {
      name: 'Julian Thorne',
      role: 'Sous Chef & Forager',
      desc: 'Specializing in native flora, Julian bridges the gap between the wild forest and the refined plate through seasonal foraging.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAStIvSKsv8ELuDIkf2YXBBzFboeg7yOajR5yNf5xDLJEZAzV6M_Xem9ziMVlOFt3CqA7_w8-FfE58IQiVPSPxlMP0Kv3WGxQe1hBaYnEpTGxK6VDeJsuvvx2twbfVLrTLevyg8-7RV7H2aHw6xRNECPgWsR81KM2wqozDr-Uu6iieQVdhDtjtGn5kRHp07rBlmPVW3oGNzyrQTe6b-UDYeevNKTrhmaaNILQ_mDAIQsWc-gwZBrS8Bf95RaDFyKmorXhfdFt3NmWs'
    }
  ];

  const timeline = [
    { year: '1984', title: 'The First Hearth', desc: 'Opening our doors in a small corner of the historic district, with just four tables and a wood-fired oven.' },
    { year: '1998', title: 'National Acclaim', desc: "L'Artisan is recognized as the 'Culinary Beacon of the South,' marking our first step into the national spotlight." },
    { year: '2012', title: 'The Green Initiative', desc: 'Establishing our private organic farm, ensuring that 80% of our produce is harvested just hours before service.' }
  ];

  const awards = [
    { icon: 'workspace_premium', title: '3 Michelin Stars', desc: '2018 — Present' },
    { icon: 'star', title: "World's 50 Best", desc: 'Top 10 — 2022' },
    { icon: 'restaurant_menu', title: 'James Beard Award', desc: 'Best Service 2021' },
    { icon: 'eco', title: 'Green Emblem', desc: 'Sustainable Excellence' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[75vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/40 z-10"></div>
        <img 
          alt="L'Artisan Culinary House Luxury Interior" 
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtm1Lb_n7WJWe-qUMQjlHPxBynvqavNXnfgCAgpQjsXloprgL52MbutYyJygPvzJO7y4n8n_LWYY0wiWxb-Eln89TIHWKVs7LXI8hb-r5E-GmJfMcRTpk_KgZtna5R_XlJMHjMsQPWbMHFQbKF-g75h_dEwNl4AoP5MPnIiiNNUSnw8Vw9z6AhupOIolGty_pat876nIhu9tejBHXREFI00eqVKf9iDXRbf_hTWixKSw6aDD_7Mi-e-XfhF7oIrbVBnGASGb010CI"
        />
        <div className="relative z-20 text-center px-margin-mobile">
          <span className="font-label-sm text-xs uppercase tracking-[0.3em] text-primary-fixed mb-6 block">Our Legacy</span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-6 italic leading-tight">
            The Art of Quiet Luxury
          </h1>
          <p className="font-body-lg text-sm md:text-base text-white/90 max-w-xl mx-auto leading-relaxed">
            A sanctuary for the senses, where heritage meets innovation on every plate.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section 
        ref={addToRefs}
        className="fade-in-section py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center"
      >
        <div className="lg:col-span-5 space-y-6 lg:space-y-8">
          <h2 className="font-display-lg text-headline-lg text-primary text-3xl md:text-4xl leading-tight">
            Crafting Timeless Flavors Since 1984
          </h2>
          <div className="space-y-6 text-on-surface-variant font-body-md text-sm md:text-base leading-relaxed">
            <p>
              Founded on the principle of intentionality, L'Artisan was born from a desire to return to the roots of culinary mastery. Our history is a tapestry of generations-old techniques reimagined for the modern palate.
            </p>
            <p>
              Our mission is simple: to provide a curated culinary environment where every ingredient tells a story of quality and ethical sourcing. We believe that true luxury is found in the quiet moments of perfect balance.
            </p>
            <p>
              Looking forward, our vision is to remain a beacon of artisanal excellence, fostering a community that values the slow, beautiful process of creation over the ephemeral nature of trends.
            </p>
          </div>
          <div className="pt-4 border-t border-outline-variant/20">
            <div className="h-0.5 w-16 bg-tertiary-fixed mb-3"></div>
            <p className="font-label-sm text-xs uppercase text-tertiary-fixed-dim font-bold">
              Founder &amp; Visionary — Marcelle Dubois
            </p>
          </div>
        </div>

        {/* Double Image Preview Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 lg:pt-0">
          <div className="sm:pt-12">
            <img 
              alt="Artisan plating process in detail" 
              className="w-full aspect-[3/4] object-cover rounded shadow-lg select-none" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBS6ugIefTRHxyv17_0fIQixKQn6pTTHJhJ_R_JquEJP5EqgUbdZpLWMv8XK20uq6XJAF8dvnIADhcatv3NamoVKK41DqMC89P5alz53ZjWF_9TToijnEB9ikn-P0LP0KlAhrmZnH5zCb8LWbB8tXnjQrD60tFF_K4ZpLYqmwl--bA_NhlZHhm2PEhDZx4alj85auOzANyKL-uIvf8EYbAnAEeTAkzApxeMfXHyCA1o9bjpmlmgOZgmBj9UtsOeXxXCQweRjnacT_8"
            />
          </div>
          <div>
            <img 
              alt="Traditional oven and baking process at L'Artisan" 
              className="w-full aspect-[3/4] object-cover rounded shadow-lg select-none" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7jN0qsWYMEnKHOKN6wTqm2gMM1_g4NQ66_tuRdSu2rMHFOhGBo6C75VwoETLLSoD9qDvdYrAgouqoeMg75c66U66Q5ITvfdXPWUzyCYEdUPobxHw7wp68sHpMwo81q4NC0y0J61hJ049DRj3Qvp5vwXDjvSuvU0DebQ14aSSJ6lqc4jp9NBv78SWixbsjcGK2LVqPLC5MQNWw6JeIGyRRM7hqQtlqOaT6lVwpeInsMWAFC8Egkw0-HzVdk7jGutBosmkeAbltkMM"
            />
          </div>
        </div>
      </section>

      {/* Evolution Timeline Section */}
      <section 
        ref={addToRefs}
        className="fade-in-section bg-surface-container-low py-section-gap"
      >
        <div className="max-w-container-max mx-auto px-margin-mobile">
          <div className="text-center mb-20">
            <span className="font-label-sm text-xs uppercase tracking-widest text-on-surface-variant">Evolution</span>
            <h2 className="font-display-lg text-primary text-3xl md:text-4xl mt-4">A Journey Through Time</h2>
          </div>
          
          <div className="relative">
            {/* Timeline Center Line */}
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-outline-variant/30 hidden md:block"></div>
            
            <div className="space-y-16 md:space-y-24">
              {timeline.map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div 
                    key={idx} 
                    className={`flex flex-col md:flex-row items-center justify-between w-full ${
                      isEven ? '' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className={`w-full md:w-[45%] mb-6 md:mb-0 ${
                      isEven ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
                    }`}>
                      <span className="font-display-lg text-3xl md:text-4xl text-tertiary-fixed-dim">{item.year}</span>
                      <h3 className="font-headline-md text-xl md:text-2xl text-primary mt-2">{item.title}</h3>
                      <p className="mt-4 text-on-surface-variant font-body-md text-sm leading-relaxed">{item.desc}</p>
                    </div>
                    
                    {/* Circle Node */}
                    <div className="z-10 w-4 h-4 rounded-full bg-primary ring-8 ring-surface-container-low"></div>
                    
                    <div className="hidden md:block w-[45%]"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Chefs Section */}
      <section 
        ref={addToRefs}
        className="fade-in-section py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="font-label-sm text-xs uppercase tracking-widest text-on-surface-variant">The Masters</span>
            <h2 className="font-display-lg text-primary text-3xl md:text-4xl mt-4 leading-tight">The Hands Behind the Craft</h2>
          </div>
          <p className="font-body-lg text-sm md:text-base text-on-surface-variant md:max-w-xs border-l-2 border-tertiary-fixed pl-6 leading-relaxed">
            Our kitchen is a symphony led by maestros of global heritage and local passion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {chefs.map((chef, idx) => (
            <div key={idx} className="group bg-surface p-4 border border-outline-variant/10 rounded shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="overflow-hidden mb-6 aspect-[4/5] bg-surface-container-low">
                <img 
                  alt={chef.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 select-none" 
                  src={chef.img}
                />
              </div>
              <h3 className="font-display-lg text-2xl text-primary">{chef.name}</h3>
              <span className="font-label-sm text-xs uppercase text-tertiary-fixed-dim tracking-widest block mt-2 font-bold">{chef.role}</span>
              <p className="mt-4 text-on-surface-variant font-body-md text-sm leading-relaxed">{chef.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Awards & Recognition Section */}
      <section 
        ref={addToRefs}
        className="fade-in-section py-section-gap bg-primary text-on-primary overflow-hidden relative"
      >
        <div className="absolute -right-20 -top-20 w-80 h-80 border border-primary-fixed/5 rounded-full pointer-events-none"></div>
        <div className="max-w-container-max mx-auto px-margin-mobile relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-5 mb-12 lg:mb-0 space-y-4">
              <span className="font-label-sm text-xs uppercase tracking-[0.3em] text-tertiary-fixed font-bold">Accolades</span>
              <h2 className="font-display-lg text-white text-3xl md:text-4xl leading-tight">Excellence Acknowledged</h2>
              <p className="text-primary-fixed/80 font-body-lg text-sm md:text-base leading-relaxed max-w-md">
                While our greatest reward is the joy of our diners, we are honored to be recognized by the most prestigious institutions in the world.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-6">
              {awards.map((award, idx) => (
                <div key={idx} className="p-6 md:p-8 border border-primary-fixed/10 bg-white/[0.01] hover:bg-white/[0.04] transition-colors duration-300 flex flex-col items-center text-center rounded">
                  <span className="material-symbols-outlined text-tertiary-fixed text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {award.icon}
                  </span>
                  <h4 className="font-headline-md text-primary-fixed text-lg font-bold">{award.title}</h4>
                  <p className="text-xs mt-2 text-primary-fixed/60 font-semibold">{award.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Outro */}
      <section className="py-section-gap px-margin-mobile">
        <div className="max-w-3xl mx-auto text-center">
          <span className="material-symbols-outlined text-tertiary-fixed text-5xl mb-8 select-none">format_quote</span>
          <blockquote className="font-display-lg text-2xl md:text-3xl text-primary italic leading-relaxed mb-10">
            "L'Artisan is not just a meal; it is a profound exploration of what happens when tradition is treated with absolute reverence."
          </blockquote>
          <div className="flex flex-col items-center">
            <div className="h-px w-16 bg-outline-variant mb-4"></div>
            <p className="font-label-sm text-xs uppercase tracking-widest text-on-surface-variant font-bold">Gastronomy Weekly</p>
          </div>
        </div>
      </section>
    </div>
  );
}
