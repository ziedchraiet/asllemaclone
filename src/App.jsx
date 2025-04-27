import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext';
import { WishlistProvider } from './components/WishlistContext';
import Wishlist from './components/Wishlist';
import FloatingMessageButton from './components/FloatingMessageButton';

const Banner = lazy(() => import('./components/Banner'));
const Categories = lazy(() => import('./components/Categories'));
const MyStorySection = lazy(() => import('./components/MyStorySection'));
const NewProducts = lazy(() => import('./components/NewProducts'));
const BestSellers = lazy(() => import('./components/BestSellers'));
const GiftSection = lazy(() => import('./components/GiftSection'));
const FAQSection = lazy(() => import('./components/FAQSection'));
const ReviewsSection = lazy(() => import('./components/ReviewsSection'));
const Marques = lazy(() => import('./components/Marques'));
const PourqoiAsllema = lazy(() => import('./components/PourqoiAsllema'));
const Checkout = lazy(() => import('./components/Checkout'));

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <Router>
          <div>
            <Navbar />
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={
                  <>
                    <Banner />
                    <Categories />
                    <MyStorySection />
                    <NewProducts />
                    <BestSellers />
                    <GiftSection />
                    <FAQSection />
                    <ReviewsSection />
                    <Marques />
                    <PourqoiAsllema />
                    <Footer />
                  </>
                } />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/wishlist" element={<Wishlist />} />
              </Routes>
            </Suspense>
            <FloatingMessageButton />
          </div>
        </Router>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
