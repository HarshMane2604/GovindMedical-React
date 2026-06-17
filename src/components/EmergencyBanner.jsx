const EmergencyBanner = () => {
  return (
    <section className="emergency-banner bg-[var(--color-accent)] py-8 text-white relative overflow-hidden">
      <div className="container mx-auto px-5 max-w-7xl">
        <div className="banner-content flex flex-col md:flex-row justify-between items-center relative z-10 gap-6 md:gap-0">
          <div className="banner-text flex items-center gap-6 text-center md:text-left">
            <div className="pulse-icon text-4xl">
              <i className="fa-solid fa-heart-pulse"></i>
            </div>
            <div>
              <h3 className="text-white text-2xl font-bold mb-1">Need Urgent Healthcare Support?</h3>
              <p className="text-white/90 mb-0">
                Our emergency consultation and medicine delivery team is on standby.
              </p>
            </div>
          </div>
          <div className="banner-action">
            <a
              href="tel:+919665467043"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-full cursor-pointer transition-all duration-300 border-none text-lg bg-white text-[var(--color-accent)] shadow-md hover:bg-slate-50 hover:-translate-y-[2px] hover:shadow-lg"
            >
              <i className="fa-solid fa-phone-volume"></i> Quick Call: +91-9665467043
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyBanner;
