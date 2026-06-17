import { useState } from 'react';
import { useCart } from '../../context/CartContext';

const CheckoutModal = () => {
  const { 
    cartItems, 
    isCheckoutOpen, 
    closeCheckout,
    totalItems,
    subtotal,
    discount,
    deliveryCharge,
    finalTotal,
    clearCart
  } = useCart();

  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCheckout = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment/order processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      
      // Clear cart and close after showing success
      setTimeout(() => {
        clearCart();
        setIsSuccess(false);
        closeCheckout();
      }, 3000);
    }, 2000);
  };

  if (!isCheckoutOpen) return null;

  return (
    <div className="fixed inset-0 z-[1005] flex items-center justify-center p-0 md:p-6 sm:p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity"
        onClick={!isProcessing ? closeCheckout : undefined}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-slate-50 w-full h-full md:h-auto md:max-h-[95vh] md:rounded-2xl shadow-2xl max-w-6xl overflow-hidden flex flex-col animate-[slideUp_0.3s_ease-out]">
        
        {/* Header */}
        <div className="bg-white px-6 py-4 border-b border-[var(--color-border)] flex justify-between items-center shrink-0">
          <div className="flex items-center gap-3">
            <i className="fa-solid fa-lock text-[var(--color-secondary)]"></i>
            <h2 className="text-xl font-bold text-slate-800 m-0">Secure Demo Checkout</h2>
          </div>
          {!isProcessing && !isSuccess && (
            <button 
              onClick={closeCheckout}
              className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors"
            >
              <i className="fa-solid fa-times"></i>
            </button>
          )}
        </div>

        {/* Demo Banner */}
        <div className="bg-[#ff6b6b1a] text-[var(--color-accent)] px-6 py-2 text-sm font-semibold text-center border-b border-[#ff6b6b33] shrink-0">
          <i className="fa-solid fa-circle-info mr-2"></i>
          This is a demonstration checkout page. No actual payments will be processed.
        </div>

        {/* Success State */}
        {isSuccess ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-white">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-500 text-5xl mb-6">
              <i className="fa-solid fa-check"></i>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-800 mb-2">Order Placed Successfully!</h2>
            <p className="text-slate-500 text-lg max-w-md mx-auto mb-8">
              Thank you for testing the Govind Medical demo store workflow.
            </p>
            <div className="text-sm text-slate-400 animate-pulse">
              Redirecting...
            </div>
          </div>
        ) : (
          /* Main Content */
          <div className="flex-1 overflow-y-auto flex flex-col lg:flex-row">
            
            {/* Left Col: Form */}
            <div className="w-full lg:w-3/5 p-6 md:p-8 bg-white border-r border-slate-200">
              <form id="checkoutForm" onSubmit={handleCheckout}>
                <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-xs">1</span>
                  Delivery Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div>
                    <label className="block mb-1.5 text-sm font-medium text-slate-700">Full Name</label>
                    <input type="text" required className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(11,95,181,0.1)] transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block mb-1.5 text-sm font-medium text-slate-700">Mobile Number</label>
                    <input type="tel" required className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(11,95,181,0.1)] transition-all" placeholder="+91 9876543210" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block mb-1.5 text-sm font-medium text-slate-700">Email Address</label>
                    <input type="email" required className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(11,95,181,0.1)] transition-all" placeholder="john@example.com" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block mb-1.5 text-sm font-medium text-slate-700">Delivery Address</label>
                    <textarea required rows="3" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[rgba(11,95,181,0.1)] transition-all resize-none" placeholder="123 Main Street, Appt 4B..."></textarea>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-xs">2</span>
                  Payment Method (Demo)
                </h3>

                <div className="space-y-3 mb-8">
                  <label className={`block p-4 rounded-xl border-2 cursor-pointer transition-all ${paymentMethod === 'cod' ? 'border-[var(--color-primary)] bg-[rgba(11,95,181,0.05)]' : 'border-slate-200 bg-white hover:border-slate-300'}`}>
                    <div className="flex items-center">
                      <input type="radio" name="payment" value="cod" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} className="w-4 h-4 text-[var(--color-primary)] focus:ring-[var(--color-primary)]" />
                      <div className="ml-3 flex-1 flex justify-between items-center">
                        <span className="font-semibold text-slate-800">Cash on Delivery (COD)</span>
                        <i className="fa-solid fa-money-bill-wave text-slate-400 text-xl"></i>
                      </div>
                    </div>
                  </label>
                  
                  <label className={`block p-4 rounded-xl border-2 cursor-pointer transition-all ${paymentMethod === 'upi' ? 'border-[var(--color-primary)] bg-[rgba(11,95,181,0.05)]' : 'border-slate-200 bg-white hover:border-slate-300'}`}>
                    <div className="flex items-center">
                      <input type="radio" name="payment" value="upi" checked={paymentMethod === 'upi'} onChange={() => setPaymentMethod('upi')} className="w-4 h-4 text-[var(--color-primary)] focus:ring-[var(--color-primary)]" />
                      <div className="ml-3 flex-1 flex justify-between items-center">
                        <span className="font-semibold text-slate-800">UPI (Google Pay, PhonePe)</span>
                        <i className="fa-brands fa-google-pay text-slate-400 text-2xl"></i>
                      </div>
                    </div>
                  </label>

                  <label className={`block p-4 rounded-xl border-2 cursor-pointer transition-all ${paymentMethod === 'card' ? 'border-[var(--color-primary)] bg-[rgba(11,95,181,0.05)]' : 'border-slate-200 bg-white hover:border-slate-300'}`}>
                    <div className="flex items-center">
                      <input type="radio" name="payment" value="card" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} className="w-4 h-4 text-[var(--color-primary)] focus:ring-[var(--color-primary)]" />
                      <div className="ml-3 flex-1 flex justify-between items-center">
                        <span className="font-semibold text-slate-800">Credit / Debit Card</span>
                        <div className="flex gap-2">
                          <i className="fa-brands fa-cc-visa text-slate-400 text-xl"></i>
                          <i className="fa-brands fa-cc-mastercard text-slate-400 text-xl"></i>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>

              </form>
            </div>

            {/* Right Col: Order Summary */}
            <div className="w-full lg:w-2/5 p-6 md:p-8 bg-slate-50 flex flex-col">
              <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center justify-between">
                Order Summary
                <span className="text-sm font-normal text-slate-500 bg-slate-200 px-2 py-0.5 rounded-full">{totalItems} items</span>
              </h3>

              <div className="flex-1 overflow-y-auto custom-scrollbar mb-6 pr-2">
                <div className="flex flex-col gap-4">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex gap-4 items-center">
                      <div className="relative w-16 h-16 bg-white rounded-lg border border-slate-200 flex items-center justify-center overflow-hidden shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-80" />
                        <span className="absolute -top-2 -right-2 w-5 h-5 bg-slate-500 text-white rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-white z-10">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-slate-800 line-clamp-1">{item.name}</h4>
                        <div className="text-xs text-slate-500 mt-0.5">Qty: {item.quantity} × ₹{item.price}</div>
                      </div>
                      <div className="font-bold text-slate-800 text-sm">
                        ₹{item.price * item.quantity}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <div className="space-y-3 mb-4 text-sm">
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal</span>
                    <span className="font-medium">₹{subtotal + discount}</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span className="font-medium">-₹{discount}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Delivery</span>
                    <span className="font-medium">{deliveryCharge === 0 ? <span className="text-green-600">Free</span> : `₹${deliveryCharge}`}</span>
                  </div>
                </div>
                
                <div className="border-t border-slate-100 pt-4 mb-6 flex justify-between items-center">
                  <span className="font-bold text-lg text-slate-800">Total to Pay</span>
                  <span className="font-extrabold text-2xl text-[var(--color-primary)]">₹{finalTotal}</span>
                </div>
                
                <button 
                  form="checkoutForm"
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-4 rounded-xl bg-[var(--color-primary)] text-white font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_4px_15px_rgba(11,95,181,0.3)] hover:bg-[var(--color-primary-dark)] hover:-translate-y-[2px] hover:shadow-[0_6px_20px_rgba(11,95,181,0.4)] disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    <><i className="fa-solid fa-spinner fa-spin"></i> Processing Demo...</>
                  ) : (
                    <><i className="fa-solid fa-lock"></i> Pay ₹{finalTotal} Now</>
                  )}
                </button>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default CheckoutModal;
