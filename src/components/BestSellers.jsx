import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useCart } from './CartContext';
import { useWishlist } from './WishlistContext';
import best1 from '../assets/product1.jpg'; 
import best2 from '../assets/product2.png';
import best3 from '../assets/product3.webp';
import best4 from '../assets/product4.webp';
import best5 from '../assets/product5.jpg';
import best6 from '../assets/product6.jpg';


function BestSellers() {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const bestProducts = [
    { image: best1, name: "Huile d'olive", price: '55.00 TND', status: 'Top' },
    { image: best2, name: 'Chachia', price: '60.00 TND', status: 'Top' },
    { image: best3, name: 'Datte Ghonja 1kg', price: '45.00 TND', status: 'Top' },
    { image: best4, name: 'Couscous Diari', price: '70.00 TND', status: 'Top' },
    { image: best5, name: 'Ben Yedder Café', price: '35.00 TND', status: 'Top' },
    { image: best6, name: "Sucre d'épilation", price: '50.00 TND', status: 'Top' },
  ];

  return (
    <Box sx={{ backgroundColor: 'white', padding: '2rem 0' }}>
      <Box sx={{ borderBottom: '2px solid #ddd', marginBottom: '2rem' }} />
      <Typography variant="h4" sx={{ textAlign: 'center', color: 'black', marginBottom: '2rem', fontWeight: 'bold' }}>
        MEILLEURES VENTES
      </Typography>
      <Box sx={{ maxWidth: '90%', margin: '0 auto' }}>
        <Slider {...settings}>
          {bestProducts.map((product, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                '&:hover .product-hover-buttons': {
                  opacity: 1,
                  transform: 'scale(1)',
                  transition: 'opacity 0.3s ease, transform 0.3s ease',
                },
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '300px',
                  overflow: 'hidden',
                  backgroundColor: '#f5f5f5',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    backgroundColor: 'gold',
                    color: 'black',
                    padding: '5px 10px',
                    fontWeight: 'bold',
                    fontSize: '14px',
                    borderRadius: '50px',
                  }}
                >
                  {product.status.toUpperCase()}
                </Box>
              </Box>
              <Typography variant="h6" sx={{ marginTop: '1rem', fontWeight: 'bold', color: 'black' }}>
                {product.name}
              </Typography>
              <Typography variant="body1" sx={{ color: 'red', marginBottom: '2rem' }}>
                {product.price}
              </Typography>
              <Box className="product-hover-buttons" sx={{
                display: 'flex',
                gap: '20px',
                opacity: 0,
                transform: 'scale(0.5)',
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                transition: 'opacity 0.3s ease, transform 0.3s ease',
              }}>
                <Button
                  onClick={() => addToCart(product)}
                  sx={{
                    backgroundColor: 'white',
                    color: 'black',
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '50%',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    '&:hover': {
                      backgroundColor: 'red',
                      color: 'white',
                      boxShadow: '0 8px 12px rgba(0, 0, 0, 0.2)',
                      transform: 'scale(1.1)',
                    },
                  }}
                >
                  <ShoppingCartIcon />
                </Button>
                <Button
                
                  onClick={() => addToWishlist(product)}
                  sx={{
                    backgroundColor: 'white',
                    color: 'black',
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '50%',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    '&:hover': {
                      backgroundColor: 'red',
                      color: 'white',
                      boxShadow: '0 8px 12px rgba(0, 0, 0, 0.2)',
                      transform: 'scale(1.1)',
                    },
                  }}
                >
                  <FavoriteIcon />
                </Button>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}

export default BestSellers;
