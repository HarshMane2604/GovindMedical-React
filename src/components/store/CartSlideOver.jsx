import { useCart } from '../../context/CartContext';

const CartSlideOver = () => {
  const { 
    cartItems, 
    isCartOpen, 
    closeCart, 
    removeFromCart, 
    updateQuantity, 
    totalItems,
    subtotal,
    discount,
    deliveryCharge,
    finalTotal,
    toggleCheckout
  } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[1002] transition-opacity duration-300 ${isCartOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={closeCart}
      ></div>

      {/* Slide Over Panel */}
      <div className={`fixed inset-y-0 right-0 z-[1003] w-full max-w-md bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out transform ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-border)]">
          <h2 className="text-xl font-bold text-[var(--color-text-main)] flex items-center gap-2">
            <i className="fa-solid fa-cart-shopping text-[var(--color-primary)]"></i> 
            Your Cart
            <span className="bg-[var(--color-primary-light)] text-white text-xs px-2 py-0.5 rounded-full ml-2">
              {totalItems} Items
            </span>
          </h2>
          <button 
            onClick={closeCart}
            className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors"
          >
            <i className="fa-solid fa-times"></i>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar bg-slate-50/50">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-slate-400">
              <i className="fa-solid fa-cart-arrow-down text-6xl mb-4 opacity-50"></i>
              <h3 className="text-xl font-bold text-slate-700 mb-2">Your cart is empty</h3>
              <p className="text-center mb-6 max-w-[250px]">Looks like you haven't added any medicines or products yet.</p>
              <button 
                onClick={closeCart}
                className="px-6 py-3 rounded-full bg-[var(--color-primary)] text-white font-bold hover:bg-[var(--color-primary-dark)] transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {cartItems.map(item => (
                <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex gap-4 relative group">
                  <div className="w-20 h-20 bg-slate-50 rounded-lg overflow-hidden shrink-0 flex items-center justify-center border border-slate-100">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start pr-6">
                      <h4 className="font-bold text-slate-800 text-sm line-clamp-2 leading-tight mb-1">{item.name}</h4>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="absolute top-4 right-4 text-slate-300 hover:text-red-500 transition-colors"
                        title="Remove item"
                      >
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                    </div>
                    
                    <div className="text-sm text-slate-500 mb-2">{item.category}</div>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <div className="font-bold text-[var(--color-primary)]">
                        ₹{item.price}
                      </div>
                      
                      <div className="flex items-center border border-slate-200 rounded-md h-8 bg-white">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-full flex items-center justify-center text-slate-500 hover:bg-slate-100 rounded-l-md"
                        >
                          <i className="fa-solid fa-minus text-[10px]"></i>
                        </button>
                        <div className="w-8 h-full flex items-center justify-center text-xs font-bold border-x border-slate-200">
                          {item.quantity}
                        </div>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-full flex items-center justify-center text-slate-500 hover:bg-slate-100 rounded-r-md"
                        >
                          <i className="fa-solid fa-plus text-[10px]"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer / Order Summary */}
        {cartItems.length > 0 && (
          <div className="border-t border-[var(--color-border)] bg-white p-6 shadow-[0_-4px_15px_rgba(0,0,0,0.05)]">
            <h3 className="font-bold text-slate-800 mb-4">Order Summary</h3>
            
            <div className="space-y-2 mb-4 text-sm">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal ({totalItems} items)</span>
                <span className="font-medium">₹{subtotal + discount}</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Discount</span>
                <span className="font-medium">-₹{discount}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Delivery Charges</span>
                <span className="font-medium">{deliveryCharge === 0 ? <span className="text-green-600">Free</span> : `₹${deliveryCharge}`}</span>
              </div>
            </div>
            
            <div className="border-t border-slate-100 pt-4 mb-6 flex justify-between items-center">
              <span className="font-bold text-lg text-slate-800">Final Total</span>
              <span className="font-extrabold text-xl text-[var(--color-primary)]">₹{finalTotal}</span>
            </div>
            
            <button 
              onClick={toggleCheckout}
              className="w-full py-4 rounded-xl bg-[var(--color-primary)] text-white font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_4px_15px_rgba(11,95,181,0.3)] hover:bg-[var(--color-primary-dark)] hover:-translate-y-[2px] hover:shadow-[0_6px_20px_rgba(11,95,181,0.4)]"
            >
              Proceed to Checkout <i className="fa-solid fa-arrow-right ml-1"></i>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSlideOver;
