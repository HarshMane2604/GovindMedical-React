const About = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="container mx-auto px-5 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div className="about-image animate-on-scroll slide-right relative md:order-none order-last">
            <img
              src="/assets/about_us_pharmacy.png"
              alt="Inside Jay Govind Medical Pharmacy"
              className="rounded-[20px] w-full shadow-lg"
            />
            <div className="experience-badge glassmorphism absolute bottom-[-10px] right-[-10px] md:bottom-[30px] md:-right-[30px] p-6 rounded-xl shadow-xl flex items-center gap-4">
              <span className="years text-[2.5rem] font-extrabold text-[var(--color-primary)]">15+</span>
              <span className="text font-semibold leading-tight">Years of<br />Excellence</span>
            </div>
          </div>
          
          <div className="about-text animate-on-scroll slide-left">
            <div className="section-heading mb-12">
              <span className="subheading">About Us</span>
              <h2 className="text-3xl md:text-[2.5rem] font-bold leading-tight">Dedicated to Your Health and Wellness</h2>
            </div>
            
            <p className="lead text-xl font-medium text-[var(--color-text-main)] mb-4">
              Jay Govind Medical is more than just a pharmacy; we are your dedicated community healthcare partner.
            </p>
            
            <p className="text-[var(--color-text-muted)] mb-4">
              With a commitment to uncompromising quality and patient care, we have been serving the community with genuine medicines, expert advice, and comprehensive healthcare products. Our state-of-the-art facility ensures medicines are stored under optimal conditions.
            </p>

            <ul className="check-list mt-8 mb-8 flex flex-col gap-4">
              <li className="flex items-center gap-3 font-medium text-[var(--color-text-main)]">
                <i className="fa-solid fa-circle-check text-xl text-[var(--color-secondary)]"></i> Certified & Experienced Pharmacists
              </li>
              <li className="flex items-center gap-3 font-medium text-[var(--color-text-main)]">
                <i className="fa-solid fa-circle-check text-xl text-[var(--color-secondary)]"></i> Government Approved & Licensed
              </li>
              <li className="flex items-center gap-3 font-medium text-[var(--color-text-main)]">
                <i className="fa-solid fa-circle-check text-xl text-[var(--color-secondary)]"></i> Stringent Quality Control
              </li>
              <li className="flex items-center gap-3 font-medium text-[var(--color-text-main)]">
                <i className="fa-solid fa-circle-check text-xl text-[var(--color-secondary)]"></i> Comprehensive Healthcare Solutions
              </li>
            </ul>

            <div className="certifications flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-8 border-t border-[var(--color-border)]">
              <span className="font-semibold text-[var(--color-text-muted)]">Trusted & Certified by:</span>
              <div className="cert-icons flex gap-4 text-3xl text-[var(--color-primary)] opacity-70">
                <i className="fa-solid fa-shield-halved"></i>
                <i className="fa-solid fa-award"></i>
                <i className="fa-solid fa-certificate"></i>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
