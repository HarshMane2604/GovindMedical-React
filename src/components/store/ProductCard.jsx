import { useCart } from '../../context/CartContext';

const ProductCard = ({ product, onViewDetails }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product, 1);
  };

  const discountPercent = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  return (
    <div 
      className="bg-white rounded-2xl shadow-sm border border-[var(--color-border)] overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer flex flex-col h-full"
      onClick={() => onViewDetails(product)}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-gray-50 flex items-center justify-center">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {discountPercent > 0 && (
            <span className="bg-[var(--color-accent)] text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm">
              {discountPercent}% OFF
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <span className="text-[10px] font-bold text-[var(--color-primary)] uppercase tracking-wider mb-2">
          {product.category}
        </span>
        <h3 className="text-lg font-bold text-[var(--color-text-main)] mb-1 leading-tight line-clamp-2 group-hover:text-[var(--color-primary)] transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-[var(--color-text-muted)] mb-4 line-clamp-2 flex-1">
          {product.shortDescription}
        </p>

        {/* Price & Action */}
        <div className="mt-auto">
          <div className="flex items-end gap-2 mb-4">
            <span className="text-xl font-extrabold text-[var(--color-text-main)]">₹{product.price}</span>
            {product.mrp > product.price && (
              <span className="text-sm text-[var(--color-text-muted)] line-through mb-0.5">₹{product.mrp}</span>
            )}
          </div>
          
          <button 
            onClick={handleAddToCart}
            className="w-full py-2.5 rounded-lg border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-white"
          >
            <i className="fa-solid fa-cart-plus"></i> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
