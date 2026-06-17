const Testimonials = () => {
  const testimonials = [
    {
      text: '"Jay Govind Medical has always been our go-to pharmacy. The pharmacists are highly knowledgeable and always take the time to explain medication dosages. True professionals!"',
      avatar: 'R',
      name: 'Rajesh Kumar',
      role: 'Local Resident',
      delay: '0.1s',
      stars: 5,
    },
    {
      text: '"I rely on their home delivery service for my mother\'s regular prescriptions. They are incredibly fast, and the medicines are always 100% genuine. Highly recommended."',
      avatar: 'A',
      name: 'Anita Sharma',
      role: 'Regular Customer',
      delay: '0.2s',
      stars: 5,
    },
    {
      text: '"A beautifully maintained and clean pharmacy. They stock almost everything, from rare medicines to quality medical equipment. The staff is polite and very helpful."',
      avatar: 'V',
      name: 'Vikram Singh',
      role: 'Verified Buyer',
      delay: '0.3s',
      stars: 4.5,
    },
  ];

  return (
    <section id="testimonials" className="testimonials section-padding">
      <div className="container mx-auto px-5 max-w-7xl">
        <div className="section-heading text-center animate-on-scroll fade-in mb-12">
          <span className="subheading">Testimonials</span>
          <h2 className="text-3xl md:text-[2.5rem] font-bold">What Our Patients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <div
              key={idx}
              className="testimonial-card bg-white p-10 rounded-xl shadow-md border border-[var(--color-border)] animate-on-scroll slide-up"
              style={{ transitionDelay: test.delay }}
            >
              <div className="rating text-[#ffc107] mb-4 text-[1.1rem]">
                {[...Array(Math.floor(test.stars))].map((_, i) => (
                  <i key={`full-${i}`} className="fa-solid fa-star"></i>
                ))}
                {test.stars % 1 !== 0 && <i className="fa-solid fa-star-half-stroke"></i>}
              </div>
              <p className="review-text italic mb-6 text-[1.05rem] text-[var(--color-text-main)]">
                {test.text}
              </p>
              <div className="reviewer flex items-center gap-4 border-t border-[var(--color-border)] pt-6">
                <div className="avatar w-[50px] h-[50px] rounded-full bg-[var(--color-primary-light)] text-white flex items-center justify-center font-bold text-[1.2rem]">
                  {test.avatar}
                </div>
                <div>
                  <h4 className="mb-0 text-base font-bold">{test.name}</h4>
                  <span className="text-[0.85rem] text-[var(--color-text-muted)]">{test.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
