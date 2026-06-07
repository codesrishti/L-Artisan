import React, { useState, useEffect } from 'react';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxData, setLightboxData] = useState(null); // { img, caption } or null

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setLightboxData(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filters = [
    { id: 'all', label: 'All Works' },
    { id: 'culinary', label: 'Culinary Arts' },
    { id: 'ambience', label: 'Ambience' },
    { id: 'events', label: 'Private Events' }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'culinary',
      title: 'Signature Scallops',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8euyR9Le5n1upvLCwq5WZ9surl-n41Ci2L7iBuemg-swT2yDPFw_qbGIGCdm42ii-fPZvdPxK2CvRraJwSvg8lP_2bOTRjUNuTEnmkP9JnYXD8NNQ-oePI6sm9zAo4h56dsRY9P6YqwHAsACCnDNfhebCpcJHeDD-ICyffgN52EuDZiwhWxlG2bj_2imffb5CxCmsSfRzmg94Cey-Fh2m3kr36jQ6-1UyYPv-BOtG2DZaD1XHCekCBEuyf8gv6gfKXQrZNB2JEy4',
      size: 'tall'
    },
    {
      id: 2,
      category: 'ambience',
      title: 'The Grand Hall',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkMMfQ5gdWRJSghnvNXmoRnaZDyvrXiFRH4sX5MLsRWhrGEdjrwUH9238UZi-z4bRqs6umUfmLS8mNO_C9h0o6FxPAYpGLHmQnW2ml6-co-Cl67xkVbqUMPHeECO7fVnGJnAkeX2hByc3I0v82SymYlurL_J9Ep2JDjvrq30ikJ8uTMV-W801UAt_nujSzmMExHEofx6KO8gYxFJtASYZUVXqTc_kAN8qQrlVW_j5dMgkeoem_It6p9oO1ncahOXuM_qSkGpLudHA',
      size: 'normal'
    },
    {
      id: 3,
      category: 'events',
      title: 'Corporate Gala',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAjVtGKEMAvWu6vilk2NucTFjWEn8O07Dewiq6CZp5ERG3MiSQoYLStqteftZ7tS_46hXSACkDGZ0D56bbAqaecInxJetU4CU8FBR6tJXKCit8LBDRhBrQf30WjernrJBRw4xxDFDW0tmppKu2lPpULnjlOGSUFatpQbHqq1ZiLaiLrKf0XzqmkDoBzGzl8VVzzucygOqNqkznn7EA8z9YWkyTdEeNmbB-3GXfaGu3gaX3knPS71-_aVYHGiJr4e8amGguJZYC6Bo',
      size: 'normal'
    },
    {
      id: 4,
      category: 'culinary',
      title: 'Artisanal Bake',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCx5jyu9cO1haJavhCF6JMcb1CSPSMs62uczs0td84qrytvFR2tWpW_Tm73jzyyEFDXueHY7_aNHfKuSvM59okRYmCEZF9VZ26L7DpycEUZqlYmntpP1yqTWE6h8Hgjxi-LG_tdlMVOzLHbtFBqu5x_2xu2UEK0cnvtVYot67LaGuRG29cdR6-yxtVdoMTtv_cneFNijw55MnKcfPLr0sQ3oeO0UYW1DLUnGcZQo2YKqXWW_aM4eyJ7FXmdDQw8RgWvL8fbCs5Rwac',
      size: 'wide'
    },
    {
      id: 5,
      category: 'ambience',
      title: 'The Ateliers',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRpykyJs4QNvOUHvkCs3EDuhSc2rY8J3tR0YVZHNySnIC-uYGoR8VqFK7LITc0uqACvnNZsTtP_131qxj46qfLwklZmZxRMoi5XWTsd0PCb9HAQemeiGP8nEixTWlIi_kMDYTUAuOOmutpylDzkSkwTkefGQJVapTF7OBiJS5dAGZ6ijmFHUy4w4V34AB9AEE3_EyZ2RdgAV7g2JXIlr9qM2vIAO_MXudA81k-hdgrYrfOvgfnFHy7SevL-_9_OERUgWGwUMosYJ4',
      size: 'tall'
    },
    {
      id: 6,
      category: 'events',
      title: 'Private Soirée',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDk49lBiIb2_IjzN3EiEqgLYt3jhAKpTi7_B7w2C-VrYP_kD2Vkt50rLF5nni3htZ1PdF466oEpDbBHBD6xqeqse3ErM3GWOVSSB7wjqRPOUYrwQIrWeXva1pnGwtcKVU14deBIFeMPlbYXpgPVvr1wYHHERMaD6GqKz592GkKXncyvActtM_B3wqQgqE0hxKKAEmT3u36H0dycoCfaXVF8dZiWCd7eJ8houb8JHNhHHMlbF6sLRR9LyrpIkSUejCkAg7OKrVaIMl0',
      size: 'normal'
    },
    {
      id: 7,
      category: 'culinary',
      title: 'The Spring Palette',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJE1b7ioWv21ZQ5ldF0soyWN9UQP8RKIme4C0msnGJImAgqYedNYjUyhL2qO-GU5dsq3cZd6vbLk8gM5ZrP7pGrUnv1BBhqx8XgYf4NbbResheWgQDxqDWNnqTWjeyvjOqHvrb_8c_LGb0AiqZtuezYw6BnjoB4O8AA5YDilxnCvteSjnyJOiKLHPXjZvllAKm1M8TcfKdv-fg-7YVaQeK74nCq1DVPQ60FuFjFBfVb61Re6Xpz4SqWmFCxsYLcAFUN4xpwn87Fo8',
      size: 'normal'
    }
  ];

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="pt-24 pb-16">
      
      {/* Page Header */}
      <header className="py-16 md:py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
        <span className="font-label-sm text-xs text-tertiary-container block mb-4 uppercase tracking-[0.3em] font-bold">
          Curation of Excellence
        </span>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-8 select-none">
          The Visual Narrative
        </h1>
        
        {/* Navigation Category Tabs */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 border-y border-outline-variant/20 py-6">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`font-label-sm text-xs tracking-widest uppercase pb-1 transition-all duration-300 ${
                activeFilter === f.id
                  ? 'text-primary font-bold border-b-2 border-primary'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </header>

      {/* Masonry Grid Section */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-20">
        <div className="masonry-grid">
          {filteredItems.map((item) => {
            let sizeClass = '';
            if (item.size === 'tall') sizeClass = 'masonry-tall';
            else if (item.size === 'wide') sizeClass = 'masonry-wide';

            return (
              <div
                key={item.id}
                onClick={() => setLightboxData({ img: item.img, caption: item.title })}
                className={`gallery-card relative overflow-hidden group cursor-pointer bg-surface-container-low border border-outline-variant/10 rounded ${sizeClass}`}
              >
                <img
                  className="w-full h-full object-cover transition-transform duration-700 ease-out select-none"
                  src={item.img}
                  alt={item.title}
                />
                
                {/* Hover overlay */}
                <div className="image-overlay absolute inset-0 bg-primary/45 flex flex-col items-center justify-center backdrop-blur-[2px]">
                  <span className="text-white font-display-lg italic text-2xl md:text-3xl text-center px-4">
                    {item.title}
                  </span>
                  <span className="text-tertiary-fixed text-[10px] uppercase tracking-widest mt-2">
                    View Image
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Guest Outro Section */}
      <section className="bg-primary text-on-primary py-section-gap px-margin-mobile">
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-label-sm text-xs text-tertiary-fixed block mb-6 uppercase tracking-[0.4em] font-bold">
            The Guest Experience
          </span>
          <p className="font-display-lg italic text-xl md:text-2xl mb-8 leading-relaxed text-primary-fixed-dim">
            "An environment that breathes with intentionality. Every corner of L'Artisan is a testament to the mastery of culinary and architectural harmony."
          </p>
          <p className="font-label-sm text-xs text-tertiary-fixed uppercase tracking-widest font-semibold">
            Julian Vane — Architectural Digest
          </p>
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      {lightboxData && (
        <div 
          onClick={() => setLightboxData(null)}
          className="fixed inset-0 z-[100] bg-primary/95 flex flex-col items-center justify-center p-6 backdrop-blur-md animate-fade-in"
        >
          {/* Close button */}
          <button 
            onClick={() => setLightboxData(null)}
            className="absolute top-8 right-8 text-white hover:text-tertiary-fixed transition-colors duration-200"
            aria-label="Close image lightbox"
          >
            <span className="material-symbols-outlined text-4xl">close</span>
          </button>
          
          {/* Interactive Modal Content */}
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="max-w-5xl w-full flex flex-col items-center select-none"
          >
            <img 
              alt={lightboxData.caption} 
              className="max-h-[75vh] md:max-h-[80vh] w-auto object-contain shadow-2xl border border-white/10" 
              src={lightboxData.img}
            />
            <p className="text-white mt-6 font-display-lg italic text-lg md:text-2xl">
              {lightboxData.caption}
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
