import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import image1 from '../assets/Banner1.jpg';
import image2 from '../assets/Banner2.jpg'; 
import image3 from '../assets/Banner3.jpg'; 


const bannerData = [
  {
    image: image1,
    title: "Qui sommes-nous?",
    buttonText: "Lire plus"
  },
  {
    image: image2,
    title: "Nous assurons la livraison partout dans le monde.",
    description: "Livraison gratuite à partir de 50€.",
    buttonText: "Savoir Plus"
  },
  {
    image: image3,
    title: "Découvrez nos promotions",
    description: "Pormotions jusqu'à -50% de remises",
    buttonText: "Voir plus"
  },
];

function Banner() {
  return (
    <Box
      sx={{
        position: 'relative',
        top: 0,
        left: 0,
        width: '100%',
        height: '75vh',
        zIndex: 1,
      }}
    >
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        transitionTime={500}
        interval={3000}
      >
        {bannerData.map((banner, index) => (
          <div key={index}>
            <img 
              src={banner.image} 
              alt={`Banner Image ${index + 1}`} 
              style={{ height: '75vh', width: '100%', objectFit: 'cover' }} 
            />
            
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '10%',
                transform: 'translateY(-50%)',
                color: 'white',
                zIndex: 2,
              }}
            >
              <Typography variant="h3" sx={{ fontWeight: 'bold', fontSize: '3rem' }}>
                {banner.title}
              </Typography>
              <Typography variant="h6" sx={{ color: 'white', marginTop: 1 }}>
                {banner.description}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'red',
                  color: 'white',
                  marginTop: 2,
                  padding: '10px 30px',
                  fontSize: '1.2rem',
                  '&:hover': {
                    backgroundColor: '#d32f2f',
                  },
                }}
              >
                {banner.buttonText}
              </Button>
            </Box>
          </div>
        ))}
      </Carousel>
    </Box>
  );
}

export default Banner;
