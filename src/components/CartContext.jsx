import { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const savedCartItems = localStorage.getItem('cartItems');
  const savedWishlistCount = localStorage.getItem('wishlistCount');

  const [cartItems, setCartItems] = useState(savedCartItems ? JSON.parse(savedCartItems) : []);
  const [wishlistCount, setWishlistCount] = useState(savedWishlistCount ? parseInt(savedWishlistCount) : 0);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('wishlistCount', wishlistCount);
  }, [cartItems, wishlistCount]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.name === product.name);
      if (existingItem) {
        return prevItems.map(item =>
          item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productName) => {
    setCartItems(prevItems => prevItems.filter(item => item.name !== productName));
  };

  const increaseQuantity = (productName) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.name === productName ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productName) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.name === productName && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const addToWishlist = () => setWishlistCount(prev => prev + 1);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const subtotal = cartItems
    .reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0)
    .toFixed(2);

  return (
    <CartContext.Provider value={{
      cartItems,
      cartCount,
      wishlistCount,
      subtotal,
      addToCart,
      removeFromCart,
      increaseQuantity,
      decreaseQuantity,
      addToWishlist
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
