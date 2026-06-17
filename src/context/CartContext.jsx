import { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Load from local storage if needed (optional for demo, but good practice)
  useEffect(() => {
    const savedCart = localStorage.getItem('govind_cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart");
      }
    }
  }, []);

  // Save to local storage
  useEffect(() => {
    localStorage.setItem('govind_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
    setIsCartOpen(true); // Auto open cart when adding
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev => 
      prev.map(item => 
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => setCartItems([]);

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const closeCart = () => setIsCartOpen(false);

  const toggleCheckout = () => {
    setIsCheckoutOpen(!isCheckoutOpen);
    if (!isCheckoutOpen) {
      setIsCartOpen(false); // Close cart when opening checkout
    }
  };
  const closeCheckout = () => setIsCheckoutOpen(false);

  // Derived state
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalMRP = cartItems.reduce((sum, item) => sum + (item.mrp * item.quantity), 0);
  
  const discount = totalMRP - subtotal;
  const deliveryCharge = (subtotal > 0 && subtotal < 500) ? 50 : 0;
  const finalTotal = subtotal + deliveryCharge;

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      
      isCartOpen,
      toggleCart,
      closeCart,
      
      isCheckoutOpen,
      toggleCheckout,
      closeCheckout,
      
      totalItems,
      subtotal,
      totalMRP,
      discount,
      deliveryCharge,
      finalTotal
    }}>
      {children}
    </CartContext.Provider>
  );
};
