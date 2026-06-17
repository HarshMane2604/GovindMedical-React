const Hero = () => {
  return (
    <section id="home" className="hero relative pt-[180px] pb-[100px] overflow-hidden bg-gradient-to-br from-[#f0f7ff] to-[#ffffff]">
      <div className="hero-bg-shapes absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>
      
      <div className="container mx-auto px-5 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="hero-text animate-on-scroll slide-up text-center lg:text-left">
            <span className="inline-block px-4 py-2 bg-[#0db5821a] text-[var(--color-secondary)] font-semibold rounded-full mb-6 text-sm">
              Premium Healthcare
            </span>
            <h1 className="text-4xl md:text-[3.5rem] font-bold leading-tight mb-6">
              Your Trusted <span className="text-gradient">Healthcare</span> Partner
            </h1>
            <p className="text-lg text-[var(--color-text-muted)] mb-10 max-w-[90%] mx-auto lg:mx-0">
              Providing genuine medicines, healthcare products, and expert
              pharmaceutical guidance for your family's well-being.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-full cursor-pointer transition-all duration-300 text-lg bg-[var(--color-primary)] text-white shadow-[0_4px_15px_rgba(11,95,181,0.3)] hover:bg-[var(--color-primary-dark)] hover:-translate-y-[2px] hover:shadow-[0_6px_20px_rgba(11,95,181,0.4)]"
              >
                <i className="fa-solid fa-pills"></i> Order Medicines
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-full cursor-pointer transition-all duration-300 text-lg bg-transparent text-[var(--color-primary)] border-2 border-[var(--color-primary)] hover:bg-[rgba(11,95,181,0.05)] hover:-translate-y-[2px]"
              >
                <i className="fa-solid fa-phone"></i> Contact Us
              </a>
            </div>
            
            <div className="trust-metrics flex gap-8 pt-8 border-t border-[var(--color-border)] justify-center lg:justify-start">
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold text-[var(--color-text-main)]">10k+</span>
                <span className="text-sm text-[var(--color-text-muted)]">Happy Customers</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold text-[var(--color-text-main)]">100%</span>
                <span className="text-sm text-[var(--color-text-muted)]">Genuine Products</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold text-[var(--color-text-main)]">24/7</span>
                <span className="text-sm text-[var(--color-text-muted)]">Support Available</span>
              </div>
            </div>
          </div>
          
          <div className="hero-image animate-on-scroll fade-in relative mt-12 lg:mt-0">
            <div className="glassmorphism relative rounded-[20px] p-4 shadow-xl">
              <img
                src="/assets/hero_medical.png"
                alt="Jay Govind Medical Healthcare Professionals"
                className="rounded-[12px] w-full object-cover"
              />
              
              <div className="absolute bg-white p-4 rounded-xl shadow-lg flex items-center gap-4 animate-[float_4s_ease-in-out_infinite] -top-5 -right-7 [animation-delay:1s]">
                <div className="w-10 h-10 rounded-full bg-[var(--color-primary-light)] text-white flex items-center justify-center text-xl">
                  <i className="fa-solid fa-truck-fast"></i>
                </div>
                <div>
                  <strong className="block text-sm text-[var(--color-text-main)]">Fast Delivery</strong>
                  <span className="text-xs text-[var(--color-text-muted)]">Within 2 hours</span>
                </div>
              </div>
              
              <div className="absolute bg-white p-4 rounded-xl shadow-lg flex items-center gap-4 animate-[float_4s_ease-in-out_infinite] -bottom-5 -left-7">
                <div className="w-10 h-10 rounded-full bg-[var(--color-primary-light)] text-white flex items-center justify-center text-xl">
                  <i className="fa-solid fa-user-doctor"></i>
                </div>
                <div>
                  <strong className="block text-sm text-[var(--color-text-main)]">Expert Advice</strong>
                  <span className="text-xs text-[var(--color-text-muted)]">Certified Pharmacists</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
