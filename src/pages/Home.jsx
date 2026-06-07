import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
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

  const whyChooseUs = [
    { icon: 'eco', title: 'Fresh Ingredients', desc: 'Sourced daily from local organic farmers and sustainable fisheries.' },
    { icon: 'restaurant_menu', title: 'Master Chefs', desc: 'Led by world-renowned culinary artists with decades of expertise.' },
    { icon: 'bolt', title: 'Attentive Service', desc: 'Precision and excellence delivered with attentive care and efficiency.' },
    { icon: 'chair', title: 'Cozy Atmosphere', desc: 'Designed for intimacy, comfort, and meaningful conversation.' }
  ];

  const signatureDishes = [
    {
      name: 'Velvet Lobster Bisque',
      price: '$24',
      desc: 'Slow-simmered Atlantic lobster, infused with cognac and fresh thyme.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCvUgjxo8BN0mZJ-DzBXZzPi_jvZMa6LBdARw3qbR9cg7Zy1DXv2UCjCOfkW5H2s3SiH69NgKuLjYXhG6XtRB6UntvdtktjQA6WC0g1JssUCNIfu38va0zeJdYn3osxuEvt0o3TOkYDUcOQdpSlU67ZAG-Qe_MZFYoQpb14rqHEWF4kZ-wlhWTIhzxb-i8IsxNlT0YcwfhpgcqFCMg6tI9wLQXxtWDcZUcAS-ILZDV5oDZkIOqvcEDcJQaNKcTVuHec02G1xL-zjY'
    },
    {
      name: 'A5 Wagyu Reserve',
      price: '$85',
      desc: 'Hand-selected wagyu served with wild mushroom ragout and port reduction.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBk9y_ptr5J0dEkiHC2zgonr6uD4lUfcCz2HEWCFF44TPekfPZuUoAtizBCdIhyNXI-FsrGoPltQa0zvaUUybFP3uLE1EL5mX1QZYWRJbLCz6U8Ia7baJ3AO4rvXBp7rCtyeJ962EIT0DICqeOM4hs2-axxYt--5P6C0OIqTC7-YEkVtPC0hHsdoHbPy1KTbz1e6JuN4JR5GqawBuHfgOzklzsgxPYzqJcmo8KzT0Qc9-GoYylFTDvow5Vne81Tw1Sz-1mgbgX4ttQ'
    },
    {
      name: 'Gilded Forest Tart',
      price: '$18',
      desc: 'Hand-crafted pastry with seasonal berries and edible 24k gold leaf.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJO0wCJkxGvBR10OY8mJZAzNCWy2lzcsZHOrcI5bU-HhcoAk6uLeE3jp5PrrdKZwjCmKtqNv8PIBFGcHyHvEyep2-q26ulaAGyp1ZRP8QdT6eqyvnbbM1btvvsZ46Gmj3TSm6hZvGW4kFmUJvzGM5dD6jpkZXWdJUqNlONLuwTcoGKT5wzPUX4rAFCy61eJ3JDPYFrnvYTQKPnV8o0u1zX358AhjazbrMlGQ1Q2LJDe2WdiN0yDux9dbQhNZaNQY0LYvrg94CSzVw'
    }
  ];

  const galleryPreview = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD-15rRYGGjKFBkQgrwgU9P9Fx535W1O0sfv2UKuEkT7cfHW6QBPtPVO55ldcWbvD5ZfwztKI0JZGWLJ21UO7a18UgTV1DDI9o5R_kO2_VzElYSwQ8Px97UeT-7hXLf5mUqERPzbsytH60k0htRF1MqNtPHEqlg0b_RbLj-HSHNeR46yAZFT1NEGCZrzyBM2Yq8EeUYR-W-OW6o44lqKshC-z2muklkoWmz95OXA_O2sbcIaM-fsnim8CJQXQUKT7YAJZoOQJiYEpc',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC8DsEBPvd0XuAa31eFTgXc3mrX4MxzGt199FUgWxJXYyv3bdW-54yYZE17rdfqlLgWMkBuegQs_P47-l0YAOfcLdVc5c1Uyu3PGBTD_L71VkkMjfx3U1wlvFqWTjMpL3bv2XeSpfyLGHWRNJufwR22KrXeRzlEAR_CyrIz58e67GaJxmEXbp0AbH0L9ssV2JuPrCW86o2gyF1UfOi3jwDjEdAzt8Awgur6RKk2X7tegHv7js9CS9eZugwiS1QxvyQDv86jTDZHELs',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCbvFXpKQS3s_jqatW9QNdhTqkiaKInh2lzJAejN_xWWzDGyWW7z-Z0dzvKyyCyTIqNwXog262hvh7et8l7VgQX1jiHOnR6Q7VsxCVP-NbhCKEQqA6ZMWtXpjgjYm4OdkA-0QpZ6aLGP-hFpBbcKuPH-G2t7dHGWxqgQDpp8dhvXaj0Y3kHkMNJqD_x79NNxLzccg7D8vnHTS0olfE901Q1pbeGRgIQIg-gHPem17EK23R3SydrfBWERr-8OYC0epR7jOcMGqRtHQE',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAxyYE5c09DfO-C-6ajADuGRQi_OS-SPp_HqczL4ucoD3n9C78eVg8A-dTqvDfsPTVARDqdoJGLaRhosc7mwXWKrYjVG0FvVyiAqAeI0E9o7u0eWvi21iolHHO-bxD4hv1Ge76sd8InquunlLPCNym73A8sXmACcCASLCbW6jN-Kf6qmVON0i71E-62ZBfsPikyUKZdlzTgIst4phjyvpVOmnfOYV73G91InSXDYdboCQZ7EjLZsL4kfQeB9dOMIMiMVeW1YbuB3qI'
  ];

  const testimonials = [
    {
      quote: "An exceptional evening. The Wagyu Reserve was quite literally the best steak I have ever experienced in my travels across Europe.",
      author: "Jonathan Reed",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPEWfrAMuheg90QCoEJOf7vwJW9EXODxTttbJ4aAGRftnTiakCDXqBKNoF7MdIHnJI1ke-7xjEUfXQHVHGcGXG7F9bUgyIwPPREKFP7dd5GEPHp9Myu2IIB5Jz-9tBx7a4ICqdpUxZZXrteQpyzLp1aCvPc5FXmhQjqNIq4hij1XGG2l_141P7Cg6zq_W8T4TyhI8BwkolB34Uivzm6h-i_6YKJsHux8gs-ngnZb6XZn34yxoAMQsnMKwgaQR5ph72sMi8VIkN4uE"
    },
    {
      quote: "L'Artisan provides an atmosphere of quiet luxury that is rare to find. Every detail, from the acoustics to the plating, is perfect.",
      author: "Eleanor Vance",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwBPZgImyQbS-72LYKVgjFa3OJrcDMDqTBbiVTKtNS0IHH80CrRzy5MQARaJ-QHP4ZPpVebKxXwslz-DkgAO0nGA7i7xH6AhdgDlpNs2KQD-tFJTd_G5jpiGzfYZa30dYAz_PRAwRVRU1yemNu-AeBQVx4znUxtv6BJaPlHKXlZZDg41n8rbmSa02Nb_-8Fc4L5pQvS0fppfzjApVZTR_WOGZVh1oXXiif-s_Irk1R11atRQgMtZwMo99eSU4-2r9rZdhw8wFiN1E"
    },
    {
      quote: "The seasonal tasting menu was a masterpiece. Sourcing the freshest ingredients truly makes a world of difference in the flavors.",
      author: "Marcus Thorne",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvipz-cOfNolaM0WCNp0oajb2ldKPrj_jYQw9mlnzrenahFgXGHxUfzUDLGibW5H5FbmDci5iLT8n1n-pPrQR6GobN2TPpPqv9N9ctJFpVrvxAWvPSqBJbJ_Vfe3hbEW4bGgfHKhnDn9zWwkpalCYkgdl0iqgQjSu6oEpXqvoZ1VjlLUyDp192UCOOfpio0dhCWPb9thww6hK79fTT66Z4jZP9PASZwbTlquVFXSIIrjTl8KDTrE-LuT18maAeREv7v8cmU0aoAbU"
    }
  ];

  return (
    <div className="overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <img 
          alt="Luxury restaurant dining area with elegant crystal chandeliers" 
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAmiiQa1CIzCndYty0tUCDex3zMvpq1OcXTUiQFvBiw_4OXoE6rx_Dc8r6zl9Gv4II3YWuzZioJQplOgFu5DJn5vHgCQ6-Fv_RIcHYIgIS4BxRtY1-355j-6UexADcpYUuttf7LfnpXkCkEqtvKQ6WfQGZDc91Jq3PVMZf7XCsMW45XVmy3AkUsMvxgFueTKTUwE-Cbk5SSkXGY2RN5IXttcvfbvVAgAghHoiBlkSLDlBczzZARKQzvWnfJSKn6blihEFfgtZoUWY"
        />
        <div className="absolute inset-0 scrim-overlay"></div>
        <div className="relative z-10 text-center px-margin-mobile max-w-4xl mx-auto">
          <h1 className="font-display-lg text-white mb-6 text-display-lg-mobile md:text-display-lg select-none leading-tight">
            Experience Fine Dining Like Never Before
          </h1>
          <p className="font-body-lg text-primary-fixed/90 mb-10 tracking-wide max-w-2xl mx-auto text-sm md:text-base">
            Fresh Ingredients • Authentic Flavors • Unforgettable Moments
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => navigate('/reservations')}
              className="w-full sm:w-auto bg-on-tertiary-container text-white px-10 py-4 font-label-sm uppercase tracking-widest hover:scale-105 transition-all duration-300"
            >
              Reserve a Table
            </button>
            <button 
              onClick={() => navigate('/menu')}
              className="w-full sm:w-auto border border-white/40 text-white backdrop-blur-sm px-10 py-4 font-label-sm uppercase tracking-widest hover:bg-white/10 transition-all duration-300"
            >
              View Menu
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section 
        ref={addToRefs}
        className="fade-in-section py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter text-center">
          {whyChooseUs.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center group p-6 hover:bg-surface-container-low transition-colors duration-500 rounded">
              <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center mb-6 group-hover:bg-tertiary-fixed transition-colors duration-300">
                <span className="material-symbols-outlined text-primary text-3xl select-none">{item.icon}</span>
              </div>
              <h3 className="font-headline-md text-xl mb-3 text-primary">{item.title}</h3>
              <p className="text-on-surface-variant font-body-md text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section 
        ref={addToRefs}
        className="fade-in-section bg-surface-container-low py-section-gap px-margin-mobile md:px-margin-desktop"
      >
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <span className="font-label-sm text-on-tertiary-container uppercase tracking-[0.3em] text-xs">Signature Selection</span>
            <h2 className="font-headline-lg text-primary text-3xl md:text-4xl mt-4">Featured Culinary Art</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {signatureDishes.map((dish, idx) => (
              <div 
                key={idx} 
                onClick={() => navigate('/menu')}
                className="group cursor-pointer bg-surface p-4 border border-outline-variant/10 hover:border-transparent transition-all duration-500 hover:shadow-xl rounded"
              >
                <div className="overflow-hidden mb-6 aspect-[4/5] relative bg-surface-container-low">
                  <img 
                    alt={dish.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 select-none" 
                    src={dish.img}
                  />
                </div>
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="font-display-lg text-xl text-primary truncate pr-2">{dish.name}</h4>
                  <span className="font-label-sm text-on-tertiary-container font-semibold">{dish.price}</span>
                </div>
                <p className="text-on-surface-variant font-body-md text-xs leading-relaxed">{dish.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button 
              onClick={() => navigate('/menu')}
              className="inline-block border-b-2 border-on-tertiary-container pb-2 font-label-sm text-primary uppercase tracking-widest hover:text-on-tertiary-container transition-colors font-semibold"
            >
              Explore Full Menu
            </button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section 
        ref={addToRefs}
        className="fade-in-section py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden bg-surface-container-low border border-outline-variant/10 shadow-lg">
              <img 
                alt="Chef placing final garnishes with tweezers" 
                className="w-full h-full object-cover select-none" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGj3MAG83fxI9eIYlow_6F5iS5xLwwY9b2AlffsyaCycVCGfM-qphCuAcpp7Umcyy3RCMt5xK2X0SvdqyPK4wINv5baasz926T-P8tg0EiDXHDBJYbrN6swTXSIoleVfQsFK77RHkXwijuVK7FvOPJivS7VTntJpFJsKo-FB-tPlI4RR87Y3zjr2nEsGciwHVqoPBSWKQp-vQjCx8TIMtGtmNI4ha6Tm_CfDcis6lnAJy_vNgsZQDpLPMlBHX0E0EdRxB3HxUpd1A"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block w-48 h-48 border-4 border-tertiary-fixed -z-10 translate-x-2 translate-y-2"></div>
          </div>
          <div className="space-y-6 lg:space-y-8">
            <span className="font-label-sm text-on-tertiary-container uppercase tracking-[0.3em] text-xs">Our Story</span>
            <h2 className="font-headline-lg text-primary text-3xl md:text-4xl leading-tight">Culinary Mastery Since 1994</h2>
            <p className="text-on-surface-variant font-body-lg text-sm md:text-base leading-relaxed">
              At L'Artisan, we believe that food is more than just sustenance—it is an art form. Our journey began three decades ago in a small coastal village, where our founder learned the secrets of traditional cooking.
            </p>
            <p className="text-on-surface-variant font-body-lg text-sm md:text-base leading-relaxed">
              Today, we maintain those traditions while embracing modern innovation, creating an experience that resonates with both the heart and the palate. Every ingredient is chosen with purpose; every dish is plated with soul.
            </p>
            <button 
              onClick={() => navigate('/about')}
              className="inline-block border-b-2 border-on-tertiary-container pb-2 font-label-sm text-primary uppercase tracking-widest hover:text-on-tertiary-container transition-colors font-semibold"
            >
              Learn More About Us
            </button>
          </div>
        </div>
      </section>

      {/* Guest Reviews / Testimonials */}
      <section 
        ref={addToRefs}
        className="fade-in-section bg-primary text-on-primary py-section-gap px-margin-mobile md:px-margin-desktop"
      >
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <span className="font-label-sm text-tertiary-fixed uppercase tracking-[0.3em] text-xs">Guest Experiences</span>
            <h2 className="font-headline-lg text-white text-3xl md:text-4xl mt-4">Voices of Appreciation</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {testimonials.map((t, idx) => (
              <div key={idx} className="p-8 md:p-10 border border-white/10 flex flex-col items-center text-center bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 rounded">
                <div className="flex gap-1 mb-6 text-tertiary-fixed select-none">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="font-display-lg italic text-lg mb-8 leading-relaxed text-primary-fixed-dim">
                  "{t.quote}"
                </p>
                <div className="w-12 h-12 rounded-full overflow-hidden mb-4 border border-white/20 bg-surface-container">
                  <img alt={t.author} className="w-full h-full object-cover select-none" src={t.img} />
                </div>
                <span className="font-label-sm text-tertiary-fixed uppercase text-xs tracking-wider font-semibold">{t.author}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambience Gallery Preview */}
      <section 
        ref={addToRefs}
        className="fade-in-section py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
      >
        <div className="text-center mb-16">
          <span className="font-label-sm text-on-tertiary-container uppercase tracking-[0.3em] text-xs">The Ambience</span>
          <h2 className="font-headline-lg text-primary text-3xl md:text-4xl mt-4">A Glimpse Into Our World</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {galleryPreview.map((url, idx) => {
            const hClass = idx === 0 ? 'h-80' : idx === 1 ? 'h-96 md:h-[32rem] md:translate-y-8' : idx === 2 ? 'h-96' : 'h-80 md:translate-y-12';
            return (
              <div 
                key={idx} 
                onClick={() => navigate('/gallery')}
                className={`overflow-hidden shadow cursor-pointer group rounded ${hClass}`}
              >
                <img 
                  alt={`Dining ambience preview ${idx + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none" 
                  src={url}
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* Reservations CTA Section */}
      <section 
        ref={addToRefs}
        className="fade-in-section py-section-gap px-margin-mobile md:px-margin-desktop"
      >
        <div className="max-w-4xl mx-auto bg-primary-container text-on-primary p-10 md:p-20 relative overflow-hidden shadow-2xl ambient-shadow rounded-lg">
          <div className="relative z-10 text-center space-y-6">
            <span className="font-label-sm text-tertiary-fixed uppercase tracking-[0.3em] text-xs">Reservations</span>
            <h2 className="font-headline-lg text-white text-3xl md:text-4xl leading-tight">Secure Your Table</h2>
            <p className="text-primary-fixed/80 font-body-lg text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Whether it's a romantic evening or a corporate gathering, we provide the perfect setting for your next unforgettable moment.
            </p>
            <div className="pt-4">
              <button 
                onClick={() => navigate('/reservations')}
                className="bg-tertiary-fixed text-primary font-label-sm uppercase tracking-[0.2em] px-10 py-5 hover:bg-white hover:scale-105 transition-all duration-300 font-semibold"
              >
                Book Your Table
              </button>
            </div>
          </div>
          {/* Atmospheric ambient circles */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-tertiary-fixed/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        </div>
      </section>

    </div>
  );
}
