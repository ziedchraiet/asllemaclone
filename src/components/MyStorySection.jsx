import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import yourImage from '../assets/imagestory.jpg';

const RedBackgroundContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(to right, #8B0000, #FF6347)',
  padding: '2rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: '12px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
}));

const ImageBox = styled(Box)({
  width: '40%',
  height: 'auto',
  overflow: 'hidden',
  borderRadius: '12px',
});

const TextSection = styled(Box)({
  width: '55%',
  color: 'white',
  textAlign: 'left',
});

const BuyButton = styled(Button)({
  backgroundColor: 'white',
  color: '#FF6347',
  padding: '10px 20px',
  textTransform: 'none',
  borderRadius: '8px',
  marginTop: '16px',
  '&:hover': {
    backgroundColor: '#FF6347',
    color: 'white',
  },
});

function MyStorySection() {
  return (
    <RedBackgroundContainer>
      <ImageBox>
        <img
          src={yourImage}
          alt="My Story Cosmetics"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
          }}
        />
      </ImageBox>
      <TextSection>
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
          My Story Cosmetics est là ✨
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '2rem' }}>
          My Story Cosmetics est une marque reconnue en Tunisie qui crée des parfums envoûtants,
          des brumes délicates et des soins pour le corps. Chaque produit est conçu avec soin, en
          utilisant des ingrédients bénéfiques qui éveillent les sens.
        </Typography>
        <BuyButton variant="contained">
          Acheter
        </BuyButton>
      </TextSection>
    </RedBackgroundContainer>
  );
}

export default MyStorySection;
