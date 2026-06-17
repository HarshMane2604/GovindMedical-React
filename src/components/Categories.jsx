const Categories = () => {
  const categories = [
    { icon: 'fa-solid fa-pills', title: 'Medicines', desc: 'Allopathy & Homeopathy', delay: '0.1s' },
    { icon: 'fa-solid fa-jar', title: 'Vitamins & Supplements', desc: 'Boost your immunity', delay: '0.2s' },
    { icon: 'fa-solid fa-pump-soap', title: 'Personal Care', desc: 'Hygiene & Grooming', delay: '0.3s' },
    { icon: 'fa-solid fa-baby', title: 'Baby Care', desc: 'Gentle products for kids', delay: '0.4s' },
    { icon: 'fa-solid fa-heart-monitor', title: 'Health Devices', desc: 'BP, Sugar monitors & more', delay: '0.5s' },
    { icon: 'fa-solid fa-kit-medical', title: 'First Aid Essentials', desc: 'Bandages, Antiseptics', delay: '0.6s' },
    { icon: 'fa-solid fa-mortar-pestle', title: 'Ayurvedic Products', desc: 'Natural & herbal remedies', delay: '0.7s' },
    { icon: 'fa-solid fa-droplet', title: 'Diabetic Care', desc: 'Monitors & supplements', delay: '0.8s' },
  ];

  return (
    <section id="categories" className="categories section-padding bg-[var(--color-bg-light)]">
      <div className="container mx-auto px-5 max-w-7xl">
        <div className="section-heading text-center animate-on-scroll fade-in mb-12">
          <span className="subheading">Shop by Category</span>
          <h2 className="text-3xl md:text-[2.5rem] font-bold">Our Featured Categories</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <a
              href="#"
              key={idx}
              className="category-card group bg-white p-8 rounded-xl text-center shadow-md transition-all duration-300 relative overflow-hidden animate-on-scroll slide-up hover:-translate-y-1 hover:shadow-lg before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-[var(--color-secondary)] before:scale-x-0 before:origin-left before:transition-transform hover:before:scale-x-100"
              style={{ transitionDelay: cat.delay }}
            >
              <div className="cat-icon text-[2.5rem] text-[var(--color-primary)] mb-4">
                <i className={cat.icon}></i>
              </div>
              <h3 className="text-xl font-bold mb-2">{cat.title}</h3>
              <p className="text-[var(--color-text-muted)] mb-0">{cat.desc}</p>
              <span className="explore-link inline-block mt-4 font-semibold text-[var(--color-primary)] text-sm group-hover:text-[var(--color-primary-dark)]">
                Explore <i className="fa-solid fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
