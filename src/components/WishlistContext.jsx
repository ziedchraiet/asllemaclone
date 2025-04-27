import React, { createContext, useContext, useState } from 'react';
const WishlistContext = createContext();
export const useWishlist = () => {
  return useContext(WishlistContext);
};
export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  });
  const saveWishlist = (items) => {
    setWishlistItems(items);
    localStorage.setItem('wishlist', JSON.stringify(items));
  };

  const addToWishlist = (product) => {
    setWishlistItems(prev => {
      const alreadyInWishlist = prev.some(item => item.name === product.name);
      if (!alreadyInWishlist) {
        const updatedWishlist = [...prev, product];
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
        return updatedWishlist;
      }
      return prev;
    });
  };

  const removeFromWishlist = (productName) => {
    setWishlistItems(prev => {
      const updatedWishlist = prev.filter(item => item.name !== productName);
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };

  const clearWishlist = () => {
    setWishlistItems([]);
    localStorage.removeItem('wishlist');
  };

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist, clearWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
