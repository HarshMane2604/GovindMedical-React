import { useState, useEffect } from 'react';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <footer className="footer bg-[#0f172a] text-[#cbd5e1] pt-20 pb-5">
        <div className="container mx-auto px-5 max-w-7xl">
          <div className="footer-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            
            <div className="footer-col brand-col lg:col-span-2">
              <div className="footer-logo flex items-center gap-2 text-2xl font-extrabold text-white mb-6">
                <i className="fa-solid fa-notes-medical text-[var(--color-secondary)]"></i>
                <span>Jay Jay Govind Medical</span>
              </div>
              <p className="text-[0.95rem] leading-relaxed">
                Your trusted healthcare partner providing genuine medicines, expert advice, and comprehensive healthcare products for your family's well-being.
              </p>
            </div>
            
            <div className="footer-col">
              <h4 className="text-white mb-6 text-[1.1rem] font-bold">Quick Links</h4>
              <ul className="flex flex-col gap-3">
                <li><a href="#home" className="hover:text-[var(--color-secondary)] hover:pl-[5px] transition-all duration-300">Home</a></li>
                <li><a href="#about" className="hover:text-[var(--color-secondary)] hover:pl-[5px] transition-all duration-300">About Us</a></li>
                <li><a href="#services" className="hover:text-[var(--color-secondary)] hover:pl-[5px] transition-all duration-300">Our Services</a></li>
                <li><a href="#categories" className="hover:text-[var(--color-secondary)] hover:pl-[5px] transition-all duration-300">Shop Categories</a></li>
                <li><a href="#contact" className="hover:text-[var(--color-secondary)] hover:pl-[5px] transition-all duration-300">Contact Us</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4 className="text-white mb-6 text-[1.1rem] font-bold">Business Hours</h4>
              <ul className="hours-list flex flex-col gap-3">
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Monday - Friday:</span> <span>8:00 AM - 10:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Saturday:</span> <span>8:00 AM - 10:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Sunday:</span> <span>9:00 AM - 8:00 PM</span>
                </li>
                <li className="emergency-hours flex justify-between pt-2 text-[var(--color-accent)] font-semibold">
                  <span>Emergency:</span> <span>24/7 Available</span>
                </li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4 className="text-white mb-6 text-[1.1rem] font-bold">Newsletter</h4>
              <p className="text-[0.95rem] mb-4">
                Subscribe to our newsletter for health tips and special offers.
              </p>
              <form className="newsletter-form flex mt-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your Email Address"
                  required
                  className="flex-1 py-3 px-4 border-none rounded-l-lg outline-none text-black font-sans"
                />
                <button
                  type="submit"
                  className="px-6 bg-[var(--color-primary)] text-white border-none rounded-r-lg cursor-pointer transition-colors duration-300 hover:bg-[var(--color-primary-dark)]"
                >
                  <i className="fa-solid fa-paper-plane"></i>
                </button>
              </form>
            </div>
            
          </div>
          
          <div className="footer-bottom flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-sm gap-4 md:gap-0">
            <p className="mb-0 text-center md:text-left">&copy; 2026 Jay Govind Medical. All Rights Reserved.</p>
            <div className="footer-bottom-links flex gap-6">
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Refund Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <a
        href="#top"
        id="backToTop"
        className={`back-to-top fixed bottom-[30px] right-[30px] w-[45px] h-[45px] bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center text-[1.2rem] shadow-lg transition-all duration-300 z-[99] hover:bg-[var(--color-secondary)] hover:-translate-y-1 ${
          showBackToTop ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <i className="fa-solid fa-arrow-up"></i>
      </a>
    </>
  );
};

export default Footer;
