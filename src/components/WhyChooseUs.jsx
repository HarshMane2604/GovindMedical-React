const WhyChooseUs = () => {
  const features = [
    {
      icon: 'fa-solid fa-check-double',
      title: '100% Genuine Medicines',
      desc: 'We guarantee the authenticity of every product we sell.',
    },
    {
      icon: 'fa-solid fa-user-graduate',
      title: 'Experienced Pharmacists',
      desc: 'Our highly trained staff ensures safe and accurate dispensing.',
    },
    {
      icon: 'fa-solid fa-tags',
      title: 'Affordable Prices',
      desc: 'Fair pricing with regular discounts to make healthcare accessible.',
    },
    {
      icon: 'fa-solid fa-headset',
      title: 'Excellent Customer Support',
      desc: 'Dedicated assistance for all your queries and requirements.',
    },
  ];

  const stats = [
    { icon: 'fa-solid fa-box-open', count: '50k+', label: 'Products Delivered' },
    { icon: 'fa-solid fa-users', count: 'Trusted', label: 'by Local Community' },
    { icon: 'fa-solid fa-clock', count: 'Fast', label: 'Express Delivery' },
    { icon: 'fa-solid fa-star', count: '4.9/5', label: 'Customer Rating' },
  ];

  return (
    <section className="why-choose-us section-padding">
      <div className="container mx-auto px-5 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="text-content animate-on-scroll slide-right">
            <div className="section-heading mb-12">
              <span className="subheading">Why Choose Jay Govind Medical</span>
              <h2 className="text-3xl md:text-[2.5rem] font-bold">The Preferred Choice for Healthcare Excellence</h2>
              <p className="text-[var(--color-text-muted)] mt-4">
                We stand out through our unwavering commitment to quality, accessibility, and customer-centric care.
              </p>
            </div>

            <div className="features-list grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="feature-item flex gap-4">
                  <div className="feature-icon text-2xl text-[var(--color-secondary)]">
                    <i className={feature.icon}></i>
                  </div>
                  <div className="feature-text">
                    <h4 className="text-[1.1rem] font-bold mb-1">{feature.title}</h4>
                    <p className="text-[0.9rem] text-[var(--color-text-muted)] mb-0">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="visual-content animate-on-scroll slide-left">
            <div className="stats-grid grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-card bg-[var(--color-bg-light)] p-8 rounded-xl text-center transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-white hover:-translate-y-1 group">
                  <i className={`${stat.icon} text-[2.5rem] text-[var(--color-secondary)] mb-4 transition-colors group-hover:text-white`}></i>
                  <h3 className="text-[2rem] font-bold mb-2 group-hover:text-white">{stat.count}</h3>
                  <p className="text-[var(--color-text-muted)] mb-0 group-hover:text-white">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
