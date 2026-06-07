import React, { useState } from 'react';

export default function Menu({ addToCart }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Dishes' },
    { id: 'Starters', label: 'Starters' },
    { id: 'Main Course', label: 'Main Course' },
    { id: 'Pizza', label: 'Pizza' },
    { id: 'Burgers', label: 'Burgers' },
    { id: 'Pasta', label: 'Pasta' },
    { id: 'Desserts', label: 'Desserts' },
    { id: 'Beverages', label: 'Beverages' }
  ];

  const menuItems = [
    {
      id: 'm1',
      name: 'Heritage Sourdough',
      category: 'Starters',
      price: 14,
      desc: '36-hour fermented sourdough served with smoked bone marrow butter and volcanic salt.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9pIDuNtrGRdZlJhggnAWj0n9ps-lbO_GVbFCiOoZOYOgKkVchB7-PQIqjxTaUSe_yyAkLE4H-d1NziaL-ARjPxxdF68BrG71iS4od0SPLQ6fsDOZEG_cjjeTYm5-dxG-g1y3-_-LhyoNGOUWv_7WrdqZeJengRSLvZqBea7SGV49ucbi3uvKWSMP1KAYZf_VDcKPOu0W2r7Fhi443-5tyXDRhuz0nc72ZLjAgvSTm9vx3Z5ze1PEwAyP0SBJ84uv4wA7pYZERb8c'
    },
    {
      id: 'm2',
      name: 'Velvet Lobster Bisque',
      category: 'Starters',
      price: 24,
      desc: 'Slow-simmered Atlantic lobster, infused with cognac and fresh thyme.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCvUgjxo8BN0mZJ-DzBXZzPi_jvZMa6LBdARw3qbR9cg7Zy1DXv2UCjCOfkW5H2s3SiH69NgKuLjYXhG6XtRB6UntvdtktjQA6WC0g1JssUCNIfu38va0zeJdYn3osxuEvt0o3TOkYDUcOQdpSlU67ZAG-Qe_MZFYoQpb14rqHEWF4kZ-wlhWTIhzxb-i8IsxNlT0YcwfhpgcqFCMg6tI9wLQXxtWDcZUcAS-ILZDV5oDZkIOqvcEDcJQaNKcTVuHec02G1xL-zjY'
    },
    {
      id: 'm3',
      name: 'Ocean Embers (Scallops)',
      category: 'Starters',
      price: 32,
      desc: 'Hokkaido scallops, sweet green pea purée, and citrus reduction emulsion.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3yI6i9VHnMhXL_AS9wKbFlbs5-iL9Hdjk6nr7dbISH3Sbiu3MPEUHdWejzVGS4qTyUW44p5KqIVgN_Xf64ymQHDI1tGXxpTxNQHrAGnuBfDmK911BzP7AEFIsLUvUu9XbTzIwJXVBfypyc4WPjFazTKhSuw9chO2Z_Hy4PQkiGZJk0SFMSGSLN-rxWZMQtjhkqzxjVHWv5r_7PBUvQV4945oZFpN6EMeXdVfY6b2lzkyDapNqHnBrgeXJ06Tk3dSCZSJ7rz0Fpxg'
    },
    {
      id: 'm4',
      name: 'Highland Lamb Rack',
      category: 'Main Course',
      price: 42,
      desc: 'Herb-crusted lamb rack, parsnip puree, glazed heirloom carrots, and rosemary jus.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDewEXo0ffDxEnev8mGXypUmwrM_LG7huBmK0zeUSeK2Gz5hWgbNn52w0Fsp75G8kR9cQexM7K7U6ptiqn5RKtpffgixDat_i3VafgGwnvO11kQe3_kWcpkrOMSuP4-EFDLwa4nYM2FkTYTKGL4HLnUHM--claWbD3MnpHHl-eiFksIwQ0jusFUxWqvA59lIvT_ANHMTrdzHL6WTDigWuTGt4A-khegM0nqZmdPu4sTbSlIkunky-vf_8AP-yV3_BxlHqDdQMyQn4A'
    },
    {
      id: 'm5',
      name: 'A5 Wagyu Reserve',
      category: 'Main Course',
      price: 85,
      desc: 'Hand-selected wagyu served with wild mushroom ragout and port reduction.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBk9y_ptr5J0dEkiHC2zgonr6uD4lUfcCz2HEWCFF44TPekfPZuUoAtizBCdIhyNXI-FsrGoPltQa0zvaUUybFP3uLE1EL5mX1QZYWRJbLCz6U8Ia7baJ3AO4rvXBp7rCtyeJ962EIT0DICqeOM4hs2-axxYt--5P6C0OIqTC7-YEkVtPC0hHsdoHbPy1KTbz1e6JuN4JR5GqawBuHfgOzklzsgxPYzqJcmo8KzT0Qc9-GoYylFTDvow5Vne81Tw1Sz-1mgbgX4ttQ'
    },
    {
      id: 'm6',
      name: 'Nordic Essence (Salmon)',
      category: 'Main Course',
      price: 38,
      desc: 'Wild-caught salmon, charred asparagus, and citrus beurre blanc sauce.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbV9UUPt4yCA8U7qriurISN1ZiYy2iIHnBx5mLy_KYwQfBMsg44mb6y7MG7j4LJgwe3HhQtmmZp4cZ7uJGt6ehOEKq1D0xagMw80ZKHm_BcqaT_SHyls4Jk2MhIICx31dAMT06zMexCxbmWlFFDsW2FzcIo3HEf4sOJENdt9OxNIzEMhYtBEx7nsfRW30rZLf_9DzOYOcAXC9XvmHrIGoS8GgRwJzX5B8RejhGci9YyWj1HaqkLnrtyXkNryDeDtWF0pR4Lo7iODc'
    },
    {
      id: 'm7',
      name: 'Truffle & Burrata Pizza',
      category: 'Pizza',
      price: 24,
      desc: 'Black truffle cream, fresh burrata, wild mushrooms, and 24-month aged parmesan.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuIxeG303kfpFSaEqzTalhUmDvftUbjesp6f1bexCCOccDRiidtSrDpyU-loTeNZ3VtKdRl-Cs1HI5ujhUjCtvSKpsJRvWCyze50175QFLyeQ6WWAv9a9OpZuiF35FLw7DrTIaa8uG5bhD1qUZLxUgfJ2d3YWeRV81S81mMPGt6iXQVBUIynvhGyqTLFRinkLbpGkWEbKBPE_minST0aQm_84Tr5GB7gVHIoC07tr3fuSbI_depuE2TghDX8sn7EJWZu0lgxdvuAs'
    },
    {
      id: 'm8',
      name: 'The L\'Artisan Reserve Burger',
      category: 'Burgers',
      price: 28,
      desc: 'Dry-aged Wagyu beef, gold-leafed brioche, aged Gruyère, and black garlic aioli.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVcpWGlR4bp3GOEsO0OlDe9jnoldHoA-nt2dpKhx0thDcf0dFdctsMTkQVhGQdRv98OVj13MdrBk6sAo6nl8QpzO6joryH--B_5vBwWc6Stzx-8y5vdIoo8yS--q2rLXu2iGWI_5uJAnp3FoIyLrbLBxl2Pzi7q3uFl3uNyKyqJ_7lAd56mIE3qiBv1SsxyFMckTYhHPsluHDqoFQcL7WauZpcOv5PF2-FnrHO6PFNKUq_TWZ4HbI4tH_PpLCiLhoHB_uv-QeWxhE'
    },
    {
      id: 'm9',
      name: 'Wild Lobster Linguine',
      category: 'Pasta',
      price: 32,
      desc: 'Hand-cut linguine, butter-poached lobster tail, cherry tomatoes, and saffron emulsion.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADN-JnZUl-rObRUhe0RH-CSjbw7c7I6sdfjJEJW2NiIt_sdIwP-w0nHgx0K2fhW3fpwOjFFhKDsY3XlXnoPtCfGJaBcEC5I1SW42XaxFjhnJGGKT1YwhPNawNA9e_NdqTjuD83pkGBljJGl58pCYbdJf4jZJkMlAOH3o8AUZaKV3v1VFEhEhqQwRVHX2JXt4diFmJiMVTQByTSuluS0XNrgDbwzzafO4SX_P8e7Ds1NM4QjTvCq1zEqikUsaVbhGeBIGDG7d6xQGc'
    },
    {
      id: 'm10',
      name: 'Black Truffle Tagliatelle',
      category: 'Pasta',
      price: 45,
      desc: 'House-made pasta with Périgord black truffles and emulsified aged parmesan sauce.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEqo023_xepJdYzFzV0gh0_oFzBm7fzX_M_cBUIZe7ygMjUU7jz79XG5v6dgTyo_TsEIZFcVT3JRYusWb1zWJ3mXZAIvprCCEyLYT2K3erkNCNeuPUnOh0aSjET44r3zTVsVgbfuWMTFJoamE6fU2XVzBQLiEEz7jVkT7yyL2_BqMa3it8V8OJLnDOY6dFmg-JHET8BmEErmXzrg3B7f1-RXxAD8FtrWFmuh8RYqj8P9fIs_PjLLK0twHHCdqqP8HJrcioTrG9FD0'
    },
    {
      id: 'm11',
      name: 'Midnight Ganache',
      category: 'Desserts',
      price: 18,
      desc: '70% Valrhona dark chocolate, salted caramel center, and honey-infused cream.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhmrhdvLIIsWzNKQDs2uyvQ0HaIRQwoFb-XVeZ-jAqjRTpPB7Nn7yot8I1ra95fmHC_ROrW2gGZMgsPsNz2oq0C4O2X9nZkVJemFvwnVkVk1NO32bFUEeMVVBer7rPlbPWPlPlOUorBAzH0ZJ2chZrhQqSK4D1cPAd4BInYdlFTN21XnLYrqrvTbXYl_19mr-VGvEJgEniYI0k7SX7nzbWt9flVdYcrvBFmxO0h7efbLY8L_odC12BKQeeFiiX5TjTee4RIYB5fb4'
    },
    {
      id: 'm12',
      name: 'Gilded Forest Tart',
      category: 'Desserts',
      price: 18,
      desc: 'Hand-crafted pastry shell topped with wild forest berries and edible 24k gold leaf.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJO0wCJkxGvBR10OY8mJZAzNCWy2lzcsZHOrcI5bU-HhcoAk6uLeE3jp5PrrdKZwjCmKtqNv8PIBFGcHyHvEyep2-q26ulaAGyp1ZRP8QdT6eqyvnbbM1btvvsZ46Gmj3TSm6hZvGW4kFmUJvzGM5dD6jpkZXWdJUqNlONLuwTcoGKT5wzPUX4rAFCy61eJ3JDPYFrnvYTQKPnV8o0u1zX358AhjazbrMlGQ1Q2LJDe2WdiN0yDux9dbQhNZaNQY0LYvrg94CSzVw'
    },
    {
      id: 'm13',
      name: 'Grand Reserve Cabernet',
      category: 'Beverages',
      price: 22,
      desc: 'A full-bodied red wine offering rich dark cherry aromas with hints of french oak.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-15rRYGGjKFBkQgrwgU9P9Fx535W1O0sfv2UKuEkT7cfHW6QBPtPVO55ldcWbvD5ZfwztKI0JZGWLJ21UO7a18UgTV1DDI9o5R_kO2_VzElYSwQ8Px97UeT-7hXLf5mUqERPzbsytH60k0htRF1MqNtPHEqlg0b_RbLj-HSHNeR46yAZFT1NEGCZrzyBM2Yq8EeUYR-W-OW6o44lqKshC-z2muklkoWmz95OXA_O2sbcIaM-fsnim8CJQXQUKT7YAJZoOQJiYEpc'
    },
    {
      id: 'm14',
      name: 'Smoked Rosemary Old Fashioned',
      category: 'Beverages',
      price: 16,
      desc: 'Reserve bourbon, orange bitters, smoked rosemary syrup, expressed orange peel.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbvFXpKQS3s_jqatW9QNdhTqkiaKInh2lzJAejN_xWWzDGyWW7z-Z0dzvKyyCyTIqNwXog262hvh7et8l7VgQX1jiHOnR6Q7VsxCVP-NbhCKEQqA6ZMWtXpjgjYm4OdkA-0QpZ6aLGP-hFpBbcKuPH-G2t7dHGWxqgQDpp8dhvXaj0Y3kHkMNJqD_x79NNxLzccg7D8vnHTS0olfE901Q1pbeGRgIQIg-gHPem17EK23R3SydrfBWERr-8OYC0epR7jOcMGqRtHQE'
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div>
      {/* Hero Header Section */}
      <header className="relative h-[45vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/40 z-10"></div>
        <img 
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNATBx4GX1Z2PxjlZwtojU_0dU2Q6RuD7s9IgPwpYj1Nod37mszckwQ74tb4lp77tG_10JPhIxSoqOFS0bceaHu6HoIONz2m53lsh9iCB-FKW-PHr7_cskdHeSo4FU5e7LhPhAUWHGZR1cDn-u-BfvoJyHOzEj786Qo3QPynrOFjHOdLgDNXRx86H4ZEmozaec_7a8UrFyMlKVpYdiK-Y5Hur3nGCr84HtDUXgeUyl8O-54HEDYe_AgrZi3ej0JaB-Snv1cOY7BhA" 
          alt="Curated table arrangement of gourmet ingredients"
        />
        <div className="relative z-20 text-center px-margin-mobile">
          <p className="font-label-sm text-xs uppercase tracking-[0.3em] text-primary-fixed mb-4">The Culinary Collection</p>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-6">Nourishing Artistry</h1>
          <div className="w-16 h-0.5 bg-on-tertiary-container mx-auto"></div>
        </div>
      </header>

      {/* Category Tab Bar (Sticky filter navigation) */}
      <section className="sticky top-20 z-40 bg-surface/95 backdrop-blur-md py-6 border-b border-outline-variant/10 shadow-sm">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop overflow-x-auto hide-scrollbar">
          <div className="flex md:justify-center items-center gap-6 md:gap-10 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`pb-2 font-label-sm text-xs uppercase tracking-widest border-b-2 transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'border-primary text-primary font-bold'
                    : 'border-transparent text-on-surface-variant hover:text-primary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Culinary Grid */}
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16">
        {filteredItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-on-surface-variant font-body-md">No items found in this selection.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-gutter">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="group flex flex-col justify-between bg-surface border border-outline-variant/5 hover:border-transparent transition-all duration-500 hover:shadow-2xl p-4 rounded"
              >
                <div>
                  {/* Photo */}
                  <div className="relative overflow-hidden mb-6 aspect-[4/5] bg-surface-container-low rounded-sm">
                    <img 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none" 
                      src={item.img} 
                      alt={item.name}
                    />
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-3.5 py-1.5 font-label-sm text-xs text-primary font-bold shadow-sm">
                      ${item.price}
                    </div>
                  </div>
                  
                  {/* Copy */}
                  <h3 className="font-display-lg text-xl md:text-2xl text-primary mb-3 truncate pr-2">{item.name}</h3>
                  <p className="font-body-md text-sm text-on-surface-variant mb-6 leading-relaxed line-clamp-3">{item.desc}</p>
                </div>

                {/* Add to order action */}
                <button 
                  onClick={() => addToCart(item)}
                  className="w-full border border-primary/20 py-3.5 font-label-sm text-xs uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Testimonial Quote */}
      <section className="bg-primary-container text-white py-section-gap">
        <div className="max-w-3xl mx-auto text-center px-margin-mobile">
          <span className="font-label-sm text-xs text-on-tertiary-container uppercase tracking-[0.3em] block mb-6">The Experience</span>
          <p className="font-display-lg italic text-xl md:text-2xl mb-8 leading-relaxed text-primary-fixed-dim">
            "An orchestrated masterpiece of flavors that respects tradition while daring to innovate. Simply the finest culinary journey in the city."
          </p>
          <div className="w-12 h-px bg-on-tertiary-container mx-auto mb-4"></div>
          <p className="font-label-sm text-xs text-on-tertiary-container uppercase tracking-widest font-semibold">Julian Thorne — Food Critic</p>
        </div>
      </section>
    </div>
  );
}
