import { useState } from 'react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API Call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      e.target.reset();

      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact section-padding bg-[var(--color-bg-light)]">
      <div className="container mx-auto px-5 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div className="contact-info animate-on-scroll slide-right">
            <div className="section-heading mb-12">
              <span className="subheading">Contact Us</span>
              <h2 className="text-3xl md:text-[2.5rem] font-bold">Get in Touch with Jay Govind Medical</h2>
              <p className="text-[var(--color-text-muted)] mt-4">
                Have a query about medicines or need consultation? Reach out to us, and our team will be happy to assist you.
              </p>
            </div>

            <div className="info-list mt-8">
              <div className="info-item flex gap-6 mb-8">
                <div className="info-icon w-[50px] h-[50px] rounded-full bg-[rgba(11,95,181,0.1)] text-[var(--color-primary)] flex items-center justify-center text-[1.25rem] shrink-0">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <h4 className="mb-2 font-bold text-[1.1rem]">Store Address</h4>
                  <p className="text-[var(--color-text-muted)] mb-0">Asok Chowk, near Police Station, Solapur</p>
                </div>
              </div>
              
              <div className="info-item flex gap-6 mb-8">
                <div className="info-icon w-[50px] h-[50px] rounded-full bg-[rgba(11,95,181,0.1)] text-[var(--color-primary)] flex items-center justify-center text-[1.25rem] shrink-0">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <h4 className="mb-2 font-bold text-[1.1rem]">Phone Number</h4>
                  <p className="text-[var(--color-text-muted)] mb-0 flex flex-col">
                    <a href="tel:+919665467043" className="hover:text-[var(--color-primary)]">+91-9665467043</a>
                    <a href="tel:+919665467043" className="hover:text-[var(--color-primary)]">+91-9665467043</a>
                  </p>
                </div>
              </div>
              
              <div className="info-item flex gap-6 mb-8">
                <div className="info-icon w-[50px] h-[50px] rounded-full bg-[rgba(11,95,181,0.1)] text-[var(--color-primary)] flex items-center justify-center text-[1.25rem] shrink-0">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <h4 className="mb-2 font-bold text-[1.1rem]">Email Address</h4>
                  <p className="text-[var(--color-text-muted)] mb-0 flex flex-col">
                    <a href="mailto:info@govindmedical.com" className="hover:text-[var(--color-primary)]">info@govindmedical.com</a>
                    <a href="mailto:support@govindmedical.com" className="hover:text-[var(--color-primary)]">support@govindmedical.com</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="social-links mt-6 flex gap-4">
              {['facebook-f', 'twitter', 'instagram', 'linkedin-in'].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="social-icon w-[40px] h-[40px] rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-main)] transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)]"
                >
                  <i className={`fa-brands fa-${social}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-container animate-on-scroll slide-left relative">
            <form onSubmit={handleSubmit} className="contact-form glassmorphism shadow-lg bg-white p-8 md:p-12 rounded-[20px]">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              
              <div className="form-group mb-6">
                <label htmlFor="name" className="block mb-2 font-medium text-[var(--color-text-main)]">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-control w-full py-3 px-4 border border-[var(--color-border)] rounded-lg font-sans text-base transition-colors bg-[#f8fafc] focus:outline-none focus:border-[var(--color-primary)] focus:bg-white focus:shadow-[0_0_0_3px_rgba(11,95,181,0.1)]"
                  placeholder="Vijay Igave"
                  required
                />
              </div>
              
              <div className="form-group mb-6">
                <label htmlFor="email" className="block mb-2 font-medium text-[var(--color-text-main)]">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="form-control w-full py-3 px-4 border border-[var(--color-border)] rounded-lg font-sans text-base transition-colors bg-[#f8fafc] focus:outline-none focus:border-[var(--color-primary)] focus:bg-white focus:shadow-[0_0_0_3px_rgba(11,95,181,0.1)]"
                  placeholder="govind@gmail.com"
                  required
                />
              </div>
              
              <div className="form-group mb-6">
                <label htmlFor="phone" className="block mb-2 font-medium text-[var(--color-text-main)]">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="form-control w-full py-3 px-4 border border-[var(--color-border)] rounded-lg font-sans text-base transition-colors bg-[#f8fafc] focus:outline-none focus:border-[var(--color-primary)] focus:bg-white focus:shadow-[0_0_0_3px_rgba(11,95,181,0.1)]"
                  placeholder="+91-9665467043"
                  required
                />
              </div>
              
              <div className="form-group mb-6">
                <label htmlFor="message" className="block mb-2 font-medium text-[var(--color-text-main)]">Message / Prescription Details</label>
                <textarea
                  id="message"
                  className="form-control w-full py-3 px-4 border border-[var(--color-border)] rounded-lg font-sans text-base transition-colors bg-[#f8fafc] focus:outline-none focus:border-[var(--color-primary)] focus:bg-white focus:shadow-[0_0_0_3px_rgba(11,95,181,0.1)]"
                  rows="4"
                  placeholder="How can we help you today?"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-full cursor-pointer transition-all duration-300 border-none text-base bg-[var(--color-primary)] text-white shadow-[0_4px_15px_rgba(11,95,181,0.3)] hover:bg-[var(--color-primary-dark)] hover:-translate-y-[2px] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin"></i> Sending...
                  </>
                ) : (
                  <>
                    Send Message <i className="fa-solid fa-paper-plane"></i>
                  </>
                )}
              </button>
              
              {showSuccess && (
                <div className="form-success mt-4 p-4 bg-[#0db5821a] text-[var(--color-secondary)] rounded-lg text-center font-medium">
                  Message sent successfully! We will contact you soon.
                </div>
              )}
            </form>
          </div>
          
        </div>

        <div className="map-container animate-on-scroll fade-in mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.064560734065!2d-122.41941558468222!3d37.77492957975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050f14!2sCivic%20Center%2C%20San%20Francisco%2C%20CA%2094102!5e0!3m2!1sen!2sus!4v1682348576912!5m2!1sen!2sus"
            width="100%"
            height="400"
            className="border-0 rounded-xl shadow-md w-full"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
