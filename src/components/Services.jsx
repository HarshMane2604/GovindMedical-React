const Services = () => {
  const services = [
    {
      icon: 'fa-solid fa-prescription-bottle-medical',
      title: 'Prescription Medicines',
      desc: '100% genuine and verified prescription medicines sourced directly from authorized distributors.',
      delay: '0.1s'
    },
    {
      icon: 'fa-solid fa-capsules',
      title: 'OTC Medicines',
      desc: 'A comprehensive selection of over-the-counter medications for everyday health concerns.',
      delay: '0.2s'
    },
    {
      icon: 'fa-solid fa-leaf',
      title: 'Healthcare Products',
      desc: 'Premium wellness, hygiene, and personal care products for your daily lifestyle needs.',
      delay: '0.3s'
    },
    {
      icon: 'fa-solid fa-stethoscope',
      title: 'Medical Equipment',
      desc: 'High-quality diagnostic and medical devices for home health monitoring.',
      delay: '0.4s'
    },
    {
      icon: 'fa-solid fa-motorcycle',
      title: 'Home Delivery',
      desc: 'Fast, reliable, and secure doorstep delivery of your medicines and health products.',
      delay: '0.5s'
    },
    {
      icon: 'fa-solid fa-user-nurse',
      title: 'Health Consultation',
      desc: 'Expert pharmaceutical guidance and health consultation support from qualified professionals.',
      delay: '0.6s'
    }
  ];

  return (
    <section id="services" className="services section-padding bg-[var(--color-bg-light)]">
      <div className="container mx-auto px-5 max-w-7xl">
        <div className="section-heading text-center animate-on-scroll fade-in mb-12">
          <span className="subheading">Our Services</span>
          <h2 className="text-3xl md:text-[2.5rem] font-bold">Comprehensive Healthcare Solutions</h2>
          <p className="text-[var(--color-text-muted)] mt-4">
            We offer a wide range of services to cater to all your medical and health-related needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group bg-white p-10 rounded-xl shadow-sm transition-all duration-300 border border-transparent hover:-translate-y-1 hover:shadow-lg hover:border-[rgba(11,95,181,0.1)] animate-on-scroll slide-up"
              style={{ transitionDelay: service.delay }}
            >
              <div className="service-icon w-[60px] h-[60px] rounded-xl bg-[rgba(11,95,181,0.1)] text-[var(--color-primary)] flex items-center justify-center text-[1.75rem] mb-6 transition-all duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-white">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-[var(--color-text-muted)] mb-0">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
