import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EmergencyBanner from './components/EmergencyBanner';
import About from './components/About';
import Services from './components/Services';
import ProductCatalog from './components/store/ProductCatalog';
import WhyChooseUs from './components/WhyChooseUs';
import Categories from './components/Categories';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Store Components
import { CartProvider } from './context/CartContext';
import CartSlideOver from './components/store/CartSlideOver';
import CheckoutModal from './components/store/CheckoutModal';

function App() {
  useEffect(() => {
    // Scroll Animations (Intersection Observer)
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    animatedElements.forEach((el) => {
      scrollObserver.observe(el);
    });

    return () => {
      scrollObserver.disconnect();
    };
  }, []);

  return (
    <CartProvider>
      <Header />
      <Hero />
      <EmergencyBanner />
      <About />
      <Services />
      
      {/* New Medical Store Demo Section */}
      <ProductCatalog />
      
      <WhyChooseUs />
      <Categories />
      <Testimonials />
      <Contact />
      <Footer />
      
      {/* Overlay Components */}
      <CartSlideOver />
      <CheckoutModal />
    </CartProvider>
  );
}

export default App;
