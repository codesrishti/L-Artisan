import React, { useState } from 'react';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const posts = [
    {
      id: 1,
      title: 'The Art of Seasonal Foraging: Bringing the Wild to the Table',
      category: 'Kitchen Heritage',
      date: 'October 12, 2023',
      desc: 'Discover how our executive chef sources rare ingredients from local woodlands to create dishes that capture the ephemeral beauty of the current season. Our journey from the forest floor to the artisan plate...',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkLR4aSxPOnG0lh74ye5Ive1qytGJGl5hbRGufhEbkTj-H4KDOWkpKoryoJCSYF46-4_xqlLOmCrJiQAWvkbFwOYQc9d0fHchwfMffoxxrqyToS0Ve2uRiIQ_3-8qdQaEyWMXQ-zNO9WT-cARQjCZ2ShtWRLUnM8-V-xo-_1OkzUiCSpWcRW5i1tukdClTe9zCkw33exyEYMJG2nGAhPL6YCNQgOfutVacWed_DEcT7ZbU-Z0vAzzmBcARRYciAVyTfeLHegvqDw4',
      featured: true
    },
    {
      id: 2,
      title: 'The Alchemy of Vintage Cocktails',
      category: 'Spirits & Cellar',
      date: 'September 28, 2023',
      desc: 'A close-up exploration of a sophisticated crystal glass filled with a deep amber vintage cocktail, structured bar elements, and historical recipes.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXzO73Uvuq5P1cKCQpqDasLzJnVV9c94VOL9W5rMIVS7s0ZwQ8PoZsavfoFjLOluG09BLb74wP0HsAreRfbiWrA_a97O2e9Sy3MHceP_V9sntQyUbgX-chbsVaTUh0E32SEL1qKR1Pz5iVzWRi617FJm0-dbXTaafm4VkAPQ-enbKW0PEakQirjC_efxhVwqYuaUwEhOEXA0at_iAMtc0I9qOXoO46MAu1YPpYIn6KlvExLkUgjZp3rUkZKyY_rCwU_u2eawadOHQ',
      featured: false
    },
    {
      id: 3,
      title: 'The Precision of Pastry: Behind the Scenes',
      category: 'Culinary Mastery',
      date: 'September 15, 2023',
      desc: 'A look at how our pastry chefs assemble delicate desserts with surgical precision, incorporating textures of cream, gold leaf, and high-quality chocolate.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZ-dSXQNEhHxlLtHBNYCXQUEmgXXQ_HUay-Hp72JomPESZVhEnH7837MYhruDJnoRXLb2OzW-5RQ2oe1_mxiw2I0BBy7XdZzcmEx2OTHiCttDj-GXBr9OROvz6Wa3ifolUN6Tv2SS8HoBibj31uWLbzxdpzCcBAcxpO5nXrafD97uIuLhGekxPS8ylm8ieE4pAN8ZncMXwJFeaimqi_Btqm7uGyK1jORTwt2ADoRpXNyW8RtmZP5E2GwKiQJn3PRgprLpEGYHJEpw',
      featured: false
    }
  ];

  const popular = [
    {
      id: 'p1',
      title: 'The Science of Dry-Aging Heritage Beef',
      reads: '1.2k Reads',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFjBVPX9TZZaRju9Q87-elLSOpt0KvMbYiUswjsBeg3NnmjQlcCG9MDS67__32ciiPu4e1NHcvk6MMXdR03A_jKXE-sipp3-GfGNyabnZ0hanHEVY2iP-kN5BOChZfajUkx2er8S3ABcEIsF9TBE7aPHS14d0ZoN8J_AxyXz9p8xZEE5zNj-UiLWo2k21usJvmrhuZuvXTBaCET0eBo_sBmUzDKfBod-s-EW2fIWGvgMBl3vWncp2wPznTqczH96WoDrt-m26U5kc'
    },
    {
      id: 'p2',
      title: 'Salt: The Invisible Hero of Modern Cuisine',
      reads: '980 Reads',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPz221p1RcgQJEbFGgzB8f8vwAzAacIYuvR8uHCzkmpWzdHDliaY8KnKoVFIPdkmqnafQ5qwlXLPpoDOFh_KaebR1TeUPE-7LRIjoha-J9lGcMn07B7uTNOOAeDnnhICNOgk3bkXEZwjtT0eHbb8IZvZD_F8wGl4XsWDOY2sSGg_-FoIcGWDAHzXaGo0VQ_9Vi_ITbSozoOu9f9OtZS13gQtZ-3rVcu5pf2GCjxBpCAqMpvrZaKIZ7lOMK4zWIxFb8VlXSSvnD0sk'
    },
    {
      id: 'p3',
      title: "The Farm-to-Table Ethics of L'Artisan",
      reads: '850 Reads',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpegt6aioN-B1PEEzmfsvW15ErGMf25KClr1y7hxjOlOoAv_3UEqkqW51281bQPbgAicS8MpcnmtoR9_InzP2Jr7WXmt1HKCe_CfbeSwhS-bFIl13AjHkTDOfmEXbPuRAF0WSI5kV_62ECESCz1ZdM8GBkflSJvfz9xqLv42XgLfFzBtPQw-PwQW007o1AbRlO_P-NV45KqDftKBhNWVLZouDMkmen2roPQO6uqoMlbOJTLtplfbep4gehQIx_VTmhoSHKC2NzIgU'
    }
  ];

  const categories = [
    { label: 'Behind the Scenes', count: 12 },
    { label: 'Culinary Techniques', count: 8 },
    { label: 'Seasonal Ingredients', count: 15 },
    { label: 'Wine & Spirits', count: 6 }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 3000);
  };

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const featuredPost = filteredPosts.find(p => p.featured);
  const regularPosts = filteredPosts.filter(p => !p.featured);

  return (
    <div className="pt-24 pb-16">
      
      {/* Editorial Header */}
      <header className="py-16 md:py-24 px-margin-mobile md:px-margin-desktop max-w-3xl mx-auto text-center">
        <span className="font-label-sm text-xs text-on-tertiary-container uppercase tracking-widest block mb-4 font-bold">
          The Culinary Journal
        </span>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">
          Epicurean Musings
        </h1>
        <p className="font-body-lg text-sm md:text-base text-on-surface-variant leading-relaxed">
          Exploring the intersection of heritage, seasonal harvests, and the art of fine dining. A collection of stories from our kitchen to your table.
        </p>
      </header>

      {/* Main Grid */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-gutter">
        
        {/* Left Side: Blog posts list */}
        <section className="lg:col-span-8 space-y-16">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20 border border-outline-variant/10 bg-surface-container-low rounded">
              <span className="material-symbols-outlined text-4xl text-outline-variant">find_in_page</span>
              <p className="font-body-md text-sm text-on-surface-variant mt-4">No stories match your query.</p>
            </div>
          ) : (
            <>
              {/* Featured Post Card */}
              {featuredPost && (
                <article className="group">
                  <div className="overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-500 mb-8 aspect-[16/9] rounded relative bg-surface-container-low">
                    <img 
                      alt={featuredPost.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none" 
                      src={featuredPost.img}
                    />
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-label-sm text-xs text-on-tertiary-container uppercase font-bold">{featuredPost.category}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-outline-variant/50"></span>
                    <time className="font-label-sm text-xs text-on-surface-variant">{featuredPost.date}</time>
                  </div>
                  <h2 className="font-display-lg text-2xl md:text-3xl text-primary mb-4 group-hover:text-on-tertiary-container transition-colors duration-300 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="font-body-md text-sm text-on-surface-variant mb-6 leading-relaxed">
                    {featuredPost.desc}
                  </p>
                  <button className="inline-flex items-center font-label-sm text-xs text-primary uppercase border-b border-primary-fixed-dim pb-1 hover:border-primary transition-all duration-300 font-semibold">
                    Read Story
                    <span className="material-symbols-outlined ml-2 text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </article>
              )}

              {/* Grid Articles */}
              {regularPosts.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {regularPosts.map((post) => (
                    <article key={post.id} className="group flex flex-col justify-between">
                      <div>
                        <div className="overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-500 mb-6 aspect-[4/5] rounded bg-surface-container-low">
                          <img 
                            alt={post.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none" 
                            src={post.img}
                          />
                        </div>
                        <span className="font-label-sm text-[10px] text-on-tertiary-container uppercase mb-3 block font-bold">{post.category}</span>
                        <h3 className="font-display-lg text-xl text-primary mb-3 group-hover:text-on-tertiary-container transition-colors">
                          {post.title}
                        </h3>
                        <time className="font-label-sm text-xs text-on-surface-variant block mb-4">{post.date}</time>
                      </div>
                      <button className="inline-flex items-center font-label-sm text-xs text-primary uppercase border-b border-primary-fixed-dim pb-1 hover:border-primary transition-all duration-300 font-semibold self-start">
                        Read Story
                        <span className="material-symbols-outlined ml-2 text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                      </button>
                    </article>
                  ))}
                </div>
              )}

              {/* Pagination Controls */}
              <div className="flex justify-center items-center gap-4 pt-10 border-t border-outline-variant/20">
                <button className="w-10 h-10 flex items-center justify-center border border-outline-variant/30 text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors duration-300">
                  <span className="material-symbols-outlined text-lg">chevron_left</span>
                </button>
                <span className="font-label-sm text-xs text-primary font-bold">1 / 1</span>
                <button className="w-10 h-10 flex items-center justify-center border border-outline-variant/30 text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors duration-300">
                  <span className="material-symbols-outlined text-lg">chevron_right</span>
                </button>
              </div>
            </>
          )}
        </section>

        {/* Right Side: Sidebar */}
        <aside className="lg:col-span-4 space-y-12 lg:pl-6 border-t lg:border-t-0 lg:border-l border-outline-variant/20 pt-12 lg:pt-0">
          
          {/* Search box */}
          <div className="relative group">
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-b border-outline-variant/40 py-3 pr-10 focus:outline-none focus:border-primary transition-colors font-body-md text-sm text-on-surface focus:ring-0 placeholder:text-surface-dim" 
              placeholder="Search the Journal..."
            />
            <span className="material-symbols-outlined absolute right-0 top-3 text-on-surface-variant">search</span>
          </div>

          {/* Popular articles */}
          <div className="space-y-6">
            <h4 className="font-display-lg text-lg text-primary border-b border-outline-variant/20 pb-3">Most Read</h4>
            <div className="space-y-6">
              {popular.map((item, idx) => (
                <div key={idx} className="flex gap-4 group cursor-pointer">
                  <div className="flex-shrink-0 w-16 h-16 overflow-hidden bg-surface-container-low border border-outline-variant/10 rounded-sm">
                    <img 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none" 
                      src={item.img}
                    />
                  </div>
                  <div className="min-w-0">
                    <h5 className="font-display-lg text-sm text-primary group-hover:text-on-tertiary-container transition-colors leading-snug line-clamp-2">
                      {item.title}
                    </h5>
                    <span className="font-label-sm text-[9px] text-on-tertiary-container/60 uppercase font-semibold">{item.reads}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mini Newsletter Subscribe Card */}
          <div className="bg-primary-container p-8 text-on-primary-container rounded shadow-sm">
            <h4 className="font-display-lg text-lg text-white mb-2">The Reserve Letter</h4>
            <p className="font-body-md text-xs text-primary-fixed/80 mb-6 leading-relaxed">
              Join our inner circle for exclusive recipes, early event access, and stories from the kitchen.
            </p>
            {subscribed ? (
              <p className="font-body-md text-xs text-on-tertiary-container font-semibold animate-pulse text-center">
                Subscribed Successfully! Thank you.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border-b border-white/20 py-2.5 px-3 text-sm text-white focus:outline-none focus:border-white focus:ring-0 transition-colors placeholder:text-white/30 font-body-md" 
                  placeholder="Your Email Address"
                  required
                />
                <button 
                  type="submit"
                  className="w-full bg-on-tertiary-container text-white py-3 font-label-sm text-xs uppercase tracking-widest hover:bg-tertiary-fixed transition-colors font-bold shadow"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          {/* Categories list */}
          <div className="space-y-6">
            <h4 className="font-display-lg text-lg text-primary border-b border-outline-variant/20 pb-3">Categories</h4>
            <ul className="space-y-4 font-body-md text-sm text-on-surface-variant">
              {categories.map((cat, idx) => (
                <li 
                  key={idx} 
                  onClick={() => setSearchQuery(cat.label)}
                  className="flex justify-between items-center group cursor-pointer hover:text-primary transition-colors"
                >
                  <span>{cat.label}</span>
                  <span className="text-on-tertiary-container font-label-sm text-xs bg-secondary-container px-2 py-0.5 rounded-full">
                    {cat.count}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </aside>
      </div>

    </div>
  );
}
