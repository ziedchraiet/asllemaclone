import React from 'react';
import { Box, Typography, Button, Grid, Typography as MuiTypography } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import category1 from '../assets/category1.jpg';
import category2 from '../assets/category2.jpg'; 
import category3 from '../assets/category3.jpg'; 
import category4 from '../assets/category4.jpg'; 
import category5 from '../assets/category5.jpg'; 
import category6 from '../assets/category6.jpg'; 
import category7 from '../assets/category7.jpg';
import category8 from '../assets/category8.jpg';
import category9 from '../assets/category9.jpg'; 
import category10 from '../assets/category10.jpg'; 

function Categories() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const categories = [
    { image: category1, label: 'Artisanat' },
    { image: category2, label: 'Diari' },
    { image: category3, label: 'Épicerie' },
    { image: category4, label: 'Soins & Hygiène' },
    { image: category5, label: 'Divers' },
    { image: category6, label: 'Nos Marque' },
    { image: category7, label: 'Nouveaux Produits' }
  ];

  return (
    <Box sx={{ backgroundColor: 'white', padding: '2rem 0' }}>
      <Typography variant="h4" sx={{ textAlign: 'center', color: 'black', marginBottom: '2rem', fontWeight: 'bold' }}>
        Acheter par catégorie
      </Typography>
      <Box sx={{ maxWidth: '80%', margin: '0 auto' }}>
        <Slider {...settings}>
          {categories.map((category, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                padding: '0 10px',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <Box
                sx={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '4px solid red',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.1)',
                  },
                }}
              >
                <img
                  src={category.image}
                  alt={`Category ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
              <MuiTypography
                variant="body2"
                sx={{
                  marginTop: '8px',
                  color: 'black',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  width: '100%',
                }}
              >
                {category.label}
              </MuiTypography>
            </Box>
          ))}
        </Slider>
      </Box>
      <Box sx={{ maxWidth: '80%', margin: '3rem auto' }}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={6} sm={4} md={3}>
            <Box
              sx={{
                borderRadius: '12px',
                overflow: 'hidden',
                border: '2px solid #ddd',
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'transform 0.3s ease-in-out',
                },
              }}
            >
              <img
                src={category8}
                alt="Category 8"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Box
              sx={{
                borderRadius: '12px',
                overflow: 'hidden',
                border: '2px solid #ddd',
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'transform 0.3s ease-in-out',
                },
              }}
            >
              <img
                src={category9}
                alt="Category 9"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={6}>
            <Box
              sx={{
                borderRadius: '12px',
                overflow: 'hidden',
                border: '2px solid #ddd',
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'transform 0.3s ease-in-out',
                },
              }}
            >
              <img
                src={category10}
                alt="Category 10"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: 'red',
            color: 'white',
            padding: '12px 30px',
            fontSize: '18px',
            fontWeight: 'bold',
            borderRadius: '8px',
            transition: 'transform 0.3s ease, background-color 0.3s ease',
            '&:hover': {
              transform: 'scale(1.1)',
              backgroundColor: 'darkred',
            },
          }}
          onClick={() => alert('Voir Plus clicked!')}
        >
          Voir Plus
        </Button>
      </Box>
    </Box>
  );
}

export default Categories;
