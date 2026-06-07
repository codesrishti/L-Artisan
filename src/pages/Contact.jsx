import React, { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState('idle'); // idle, loading, success
  const [emailSub, setEmailSub] = useState('');
  const [subStatus, setSubStatus] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus('loading');
    setTimeout(() => {
      setSubmitStatus('success');
      setTimeout(() => {
        setFormState({ name: '', email: '', subject: '', message: '' });
        setSubmitStatus('idle');
      }, 3000);
    }, 1500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubSubmit = (e) => {
    e.preventDefault();
    if (!emailSub) return;
    setSubStatus(true);
    setTimeout(() => {
      setEmailSub('');
      setSubStatus(false);
    }, 3000);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[55vh] md:h-[65vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/40 z-10"></div>
        <img 
          alt="Refined table setup with crystal glassware and shadows" 
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwbKJCKV1ymxCqgQz00fRpfGUlloBOMi7cBLEQiig3vwo7X4oFb85TpuDvOAtzmNSTe4J1TfnnMTFTyz2qv9il2D05C4tCF6z6yulDaTjX5szx9FTmj63vZzAUJTLJbk0Zn8VPRPik6_T8kgujJTp93GS2vqbRiOzGfxZBbbKwFCoKvq0uNLgnQkZw_7hiO6AqjKVCiDSG9rmFfu66pxHy4H63iLZxuN36WnaIq_nf0H4FnT8Xw6PyibN6WLmrO_bLZARiT9uF3qw"
        />
        <div className="relative z-20 text-center text-white px-margin-mobile">
          <span className="font-label-sm text-xs text-tertiary-fixed uppercase tracking-[0.3em] mb-6 block font-bold">
            Get in Touch
          </span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg italic leading-tight">
            The Art of Connection
          </h1>
        </div>
      </section>

      {/* Bento Grid Info & Form Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          
          {/* Info Panels Bento Column */}
          <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            
            {/* Address */}
            <div className="p-10 bg-surface-container-low hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded border border-outline-variant/10">
              <span className="material-symbols-outlined text-on-tertiary-container mb-6 text-3xl select-none">location_on</span>
              <h3 className="font-headline-md text-xl md:text-2xl text-primary mb-4">Location</h3>
              <p className="font-body-md text-sm md:text-base text-on-surface-variant leading-relaxed">
                124 Rue de la Gastronomie<br />
                75001 Paris, France
              </p>
            </div>

            {/* Contacts details */}
            <div className="p-10 bg-surface-container-low hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded border border-outline-variant/10">
              <span className="material-symbols-outlined text-on-tertiary-container mb-6 text-3xl select-none">call</span>
              <h3 className="font-headline-md text-xl md:text-2xl text-primary mb-4">Contact</h3>
              <div className="space-y-4 text-sm md:text-base font-body-md">
                <p className="text-on-surface-variant flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="font-label-sm text-[10px] text-tertiary-fixed-dim uppercase tracking-wider font-bold">Phone:</span> 
                  <span>+33 (0) 1 23 45 67 89</span>
                </p>
                <p className="text-on-surface-variant flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="font-label-sm text-[10px] text-tertiary-fixed-dim uppercase tracking-wider font-bold">Email:</span> 
                  <span>maitre@lartisan.fr</span>
                </p>
              </div>
            </div>

            {/* Social channels */}
            <div className="p-10 bg-primary text-primary-fixed hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded">
              <h3 className="font-headline-md text-xl mb-6 text-white">Follow Our Journey</h3>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full border border-primary-fixed/30 flex items-center justify-center hover:bg-primary-fixed hover:text-primary transition-all duration-300"
                  aria-label="Share page link"
                >
                  <span className="material-symbols-outlined text-lg">share</span>
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full border border-primary-fixed/30 flex items-center justify-center hover:bg-primary-fixed hover:text-primary transition-all duration-300"
                  aria-label="Instagram camera"
                >
                  <span className="material-symbols-outlined text-lg font-bold">photo_camera</span>
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full border border-primary-fixed/30 flex items-center justify-center hover:bg-primary-fixed hover:text-primary transition-all duration-300"
                  aria-label="Video logs library"
                >
                  <span className="material-symbols-outlined text-lg font-bold">video_library</span>
                </a>
              </div>
            </div>

          </div>

          {/* Contact Inquiry form */}
          <div className="lg:col-span-7 bg-surface-container-lowest p-8 md:p-16 shadow-lg ambient-shadow border border-outline-variant/10 rounded">
            <div className="mb-12 space-y-4">
              <h2 className="font-display-lg text-headline-lg text-primary text-3xl">Send an Inquiry</h2>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                Whether you are planning a private event or simply wish to inquire about our seasonal menu, our team is at your disposal.
              </p>
            </div>
            
            {submitStatus === 'success' ? (
              <div className="text-center py-10 space-y-4">
                <span className="material-symbols-outlined text-5xl text-on-tertiary-container">done_all</span>
                <h3 className="font-display-lg text-xl text-primary font-bold">Message Transmitted</h3>
                <p className="font-body-md text-sm text-on-surface-variant max-w-sm mx-auto leading-relaxed">
                  Thank you. Your message has been sent to our concierge desk. We will reach back shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative">
                    <label className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 block font-bold">Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formState.name}
                      onChange={handleInputChange}
                      disabled={submitStatus === 'loading'}
                      className="w-full form-input-border py-2 px-0 text-sm md:text-base focus:ring-0 placeholder:text-surface-dim" 
                      placeholder="Your Full Name"
                      required
                    />
                  </div>
                  <div className="relative">
                    <label className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 block font-bold">Email Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formState.email}
                      onChange={handleInputChange}
                      disabled={submitStatus === 'loading'}
                      className="w-full form-input-border py-2 px-0 text-sm md:text-base focus:ring-0 placeholder:text-surface-dim" 
                      placeholder="yourname@domain.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <label className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 block font-bold">Subject</label>
                  <input 
                    type="text" 
                    name="subject" 
                    value={formState.subject}
                    onChange={handleInputChange}
                    disabled={submitStatus === 'loading'}
                    className="w-full form-input-border py-2 px-0 text-sm md:text-base focus:ring-0 placeholder:text-surface-dim" 
                    placeholder="E.g. Group dinner inquiry or menu question"
                    required
                  />
                </div>

                <div className="relative">
                  <label className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 block font-bold">Your Message</label>
                  <textarea 
                    name="message" 
                    value={formState.message}
                    onChange={handleInputChange}
                    disabled={submitStatus === 'loading'}
                    rows="4"
                    className="w-full form-input-border py-2 px-0 text-sm md:text-base resize-none focus:ring-0 placeholder:text-surface-dim"
                    placeholder="Enter your message details here..."
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={submitStatus === 'loading'}
                  className="w-full bg-primary text-on-primary py-4 font-label-sm text-xs uppercase tracking-[0.2em] hover:bg-tertiary-container hover:text-tertiary-fixed transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                >
                  {submitStatus === 'loading' ? (
                    <>
                      <span className="material-symbols-outlined text-lg animate-spin">progress_activity</span>
                      Transmitting Message...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[600px] relative overflow-hidden bg-surface-container-high border-y border-outline-variant/10">
        <div className="absolute inset-0 bg-neutral-200">
          <img 
            alt="Minimalist map representation showing L'Artisan location in Paris" 
            className="w-full h-full object-cover grayscale opacity-60 select-none pointer-events-none" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrN36H6_HpqS_ZMmiD7lQ7tbMgrDSo-PmEKYzIVnU6kyDDvsyzxLdAbOv6JcxeLDlcCdEs6T-Avu7ZEYQEToTaKP6acHqZvwahsuy1JpVe6GdQEjgxQJzpQwFgo-NjAyRCOIoyNi4Y-gWU6ymWatJqDXiM92ETIiglJrR483-obQUBC3tSQImMaTmhs14Srgk9a_8_flaImv1uCLKNgpLdrBNb4EMHVgD1R-b_3qiXIpyUZM2POQ_xMQEhtnDfqa4awRa4mY3EGJc"
          />
          <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
        </div>

        {/* Map Float Details Card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:left-margin-desktop md:translate-x-0 w-[calc(100%-48px)] md:w-96 bg-surface p-10 md:p-12 shadow-2xl border border-outline-variant/10 rounded">
          <h4 className="font-headline-md text-xl md:text-2xl text-primary mb-4">Find Your Way</h4>
          <p className="font-body-md text-sm text-on-surface-variant mb-8 leading-relaxed">
            Located in the heart of the 1st Arrondissement, L'Artisan is easily accessible via the Palais Royal - Musée du Louvre metro station.
          </p>
          <a 
            className="font-label-sm text-xs text-tertiary-fixed-dim uppercase tracking-widest border-b border-tertiary-fixed-dim pb-1 hover:text-primary hover:border-primary transition-all font-semibold" 
            href="https://maps.google.com" 
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Google Maps
          </a>
        </div>
      </section>

      {/* Outro Newsletter Signup */}
      <section className="bg-primary-container py-section-gap px-margin-mobile text-center">
        <div className="max-w-3xl mx-auto text-primary-fixed space-y-6">
          <h2 className="font-display-lg text-3xl md:text-4xl text-white italic leading-tight">Join the Inner Circle</h2>
          <p className="font-body-lg text-sm md:text-base text-primary-fixed/80 max-w-xl mx-auto leading-relaxed">
            Subscribe to receive exclusive invitations to our seasonal tasting events and private chef dinners.
          </p>
          {subStatus ? (
            <p className="font-body-md text-sm text-on-tertiary-container font-semibold animate-pulse pt-4">
              Thank you for subscribing!
            </p>
          ) : (
            <form onSubmit={handleSubSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto pt-4">
              <input 
                type="email" 
                value={emailSub}
                onChange={(e) => setEmailSub(e.target.value)}
                className="flex-1 bg-white/5 text-white border border-outline-variant/30 focus:ring-tertiary-fixed focus:border-tertiary-fixed px-6 py-4 rounded font-body-md text-sm" 
                placeholder="Enter email address"
                required
              />
              <button 
                type="submit"
                className="bg-tertiary-fixed text-primary px-10 py-4 font-label-sm text-xs uppercase tracking-widest hover:bg-tertiary-fixed-dim transition-colors font-bold shadow"
              >
                Join
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
}
