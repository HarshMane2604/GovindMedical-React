import { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';

const ProductDetailsModal = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  // Reset quantity when new product is opened
  useEffect(() => {
    if (isOpen) {
      setQuantity(1);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen, product]);

  if (!isOpen || !product) return null;

  const discountPercent = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[1002] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row animate-[fadeIn_0.3s_ease-out]">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors z-10"
        >
          <i className="fa-solid fa-times text-xl"></i>
        </button>

        {/* Image Section */}
        <div className="w-full md:w-1/2 bg-slate-50 flex items-center justify-center p-8 relative">
          {discountPercent > 0 && (
            <div className="absolute top-6 left-6 bg-[var(--color-accent)] text-white font-bold px-3 py-1.5 rounded-lg shadow-sm">
              {discountPercent}% OFF
            </div>
          )}
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-auto max-h-[400px] object-contain drop-shadow-xl"
          />
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col">
          <span className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider mb-2">
            {product.category}
          </span>
          <h2 className="text-3xl font-extrabold text-[var(--color-text-main)] mb-2 leading-tight">
            {product.name}
          </h2>
          
          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[var(--color-border)]">
            <div className="flex items-end gap-2">
              <span className="text-3xl font-extrabold text-[var(--color-text-main)]">₹{product.price}</span>
              {product.mrp > product.price && (
                <span className="text-lg text-[var(--color-text-muted)] line-through mb-1">MRP ₹{product.mrp}</span>
              )}
            </div>
            <div className={`px-3 py-1 rounded-full text-xs font-bold ${product.stock > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
            <div className="mb-6">
              <h4 className="text-lg font-bold mb-2 text-[var(--color-text-main)]">Description</h4>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                {product.description}
              </p>
            </div>

            {product.benefits && product.benefits.length > 0 && (
              <div className="mb-6">
                <h4 className="text-lg font-bold mb-3 text-[var(--color-text-main)]">Key Benefits</h4>
                <ul className="flex flex-col gap-2">
                  {product.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[var(--color-text-muted)]">
                      <i className="fa-solid fa-check text-[var(--color-secondary)] mt-1 shrink-0"></i>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.usage && (
              <div className="mb-6">
                <h4 className="text-lg font-bold mb-2 text-[var(--color-text-main)]">Usage Instructions</h4>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <p className="text-[var(--color-text-muted)] mb-0 text-sm">
                    {product.usage}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Action Section */}
          <div className="pt-6 mt-4 border-t border-[var(--color-border)] flex flex-col sm:flex-row gap-4 items-center">
            <div className="flex items-center border border-[var(--color-border)] rounded-lg h-12 w-full sm:w-auto">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-12 h-full flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors rounded-l-lg"
              >
                <i className="fa-solid fa-minus"></i>
              </button>
              <div className="w-12 h-full flex items-center justify-center font-bold text-lg border-x border-[var(--color-border)]">
                {quantity}
              </div>
              <button 
                onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                className="w-12 h-full flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors rounded-r-lg"
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>

            <button 
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className="flex-1 h-12 rounded-lg bg-[var(--color-primary)] text-white font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_4px_15px_rgba(11,95,181,0.3)] hover:bg-[var(--color-primary-dark)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(11,95,181,0.4)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
            >
              <i className="fa-solid fa-cart-shopping"></i> Add to Cart (₹{product.price * quantity})
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal;
