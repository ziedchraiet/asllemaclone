import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import Slider from 'react-slick';
import img1 from '../assets/marque1.png';
import img2 from '../assets/marque2.png';
import img3 from '../assets/marque3.webp';

const Marques = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, 
  };

  return (
    <Box sx={{ backgroundColor: '#8B0000', padding: '40px 20px', color: 'white' }}>
      <Stack direction="row" spacing={4} justifyContent="center" alignItems="center">
        <Box sx={{ flex: 1, maxWidth: '50%', textAlign: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
            NOS MARQUES
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            Découvrez nos marques tunisiennes et laissez-vous séduire par leur authenticité et leur savoir-faire unique.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 3 }}>
            Des produits authentiques, réalisés avec passion par des Tunisiens talentueux, vous sont proposés pour égayer votre quotidien et promouvoir l’excellence de notre savoir-faire tunisien.
          </Typography>
          <Button variant="outlined" sx={{ borderColor: 'white', color: 'white', '&:hover': { borderColor: 'red', backgroundColor: 'white', color: 'red' } }}>
            Découvrir
          </Button>
        </Box>
        <Box sx={{ flex: 1, maxWidth: '50%' }}>
          <Slider {...settings}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <img src={img1} alt="Image 1" style={{ borderRadius: '50%', width: '200px', height: '200px', objectFit: 'cover' }} />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <img src={img2} alt="Image 2" style={{ borderRadius: '50%', width: '200px', height: '200px', objectFit: 'cover' }} />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <img src={img3} alt="Image 3" style={{ borderRadius: '50%', width: '200px', height: '200px', objectFit: 'cover' }} />
            </Box>
          </Slider>
        </Box>
      </Stack>
    </Box>
  );
};

export default Marques;
