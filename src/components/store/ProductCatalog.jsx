import { useState, useMemo } from 'react';
import { products, categories } from '../../data/products';
import ProductCard from './ProductCard';
import ProductDetailsModal from './ProductDetailsModal';

const ProductCatalog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filter and Sort Logic
  const filteredProducts = useMemo(() => {
    let result = products;

    // Filter by Category
    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }

    // Filter by Search Query
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.shortDescription.toLowerCase().includes(query)
      );
    }

    // Sort
    result = [...result].sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      // Default / Popular (just keeping original order for mock)
      return 0; 
    });

    return result;
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <section id="store" className="py-20 bg-white">
      <div className="container mx-auto px-5 max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center mb-12 animate-on-scroll fade-in">
          <span className="subheading">Online Pharmacy</span>
          <h2 className="text-3xl md:text-[2.5rem] font-bold">Featured Healthcare Products</h2>
          <p className="text-[var(--color-text-muted)] mt-4 max-w-2xl mx-auto">
            Browse our wide selection of genuine medicines, daily vitamins, and essential healthcare devices. Authentic products delivered to your door.
          </p>
        </div>

        {/* Filters & Search Bar */}
        <div className="bg-slate-50 p-6 rounded-2xl mb-12 shadow-sm border border-slate-100 flex flex-col lg:flex-row gap-6 animate-on-scroll slide-up">
          
          {/* Search */}
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <i className="fa-solid fa-search"></i>
            </div>
            <input 
              type="text" 
              placeholder="Search for medicines, devices..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
            />
          </div>

          {/* Categories Horizontal Scroll */}
          <div className="flex-1 overflow-x-auto custom-scrollbar pb-2 lg:pb-0 flex items-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-[var(--color-primary)] text-white shadow-md' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="w-full lg:w-48 shrink-0 relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full appearance-none pl-4 pr-10 py-3.5 rounded-xl border border-slate-200 bg-white text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all cursor-pointer"
            >
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400">
              <i className="fa-solid fa-chevron-down text-sm"></i>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onViewDetails={setSelectedProduct}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
            <div className="text-5xl text-slate-300 mb-4">
              <i className="fa-solid fa-box-open"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-700 mb-2">No products found</h3>
            <p className="text-slate-500">We couldn't find any products matching your search criteria.</p>
            <button 
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
              className="mt-6 px-6 py-2 bg-white border border-slate-300 rounded-full font-medium text-slate-700 hover:bg-slate-100 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

      </div>

      {/* Product Details Modal */}
      <ProductDetailsModal 
        isOpen={!!selectedProduct} 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </section>
  );
};

export default ProductCatalog;
