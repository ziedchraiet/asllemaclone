import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import giftImage from '../assets/giftImage.png';

const SectionContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '3rem',
}));

const LeftSection = styled(Box)({
  width: '55%',
  color: 'black',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const RightSection = styled(Box)({
  width: '35%',
  height: 'auto',
});

const GiftButton = styled(Button)(({ theme }) => ({
  border: '2px solid red',
  color: 'red',
  padding: '14px 28px',
  textTransform: 'none',
  borderRadius: '8px',
  marginTop: '20px',
  '&:hover': {
    backgroundColor: 'red',
    color: 'white',
    transition: 'background-color 0.3s, color 0.3s',
  },
  transition: 'background-color 0.3s, color 0.3s',
}));

const HeadingText = styled(Typography)({
  fontSize: '3rem',
  fontWeight: 'bold',
  color: 'red',
  textDecoration: 'underline',
  marginBottom: '1rem',
});

const NormalText = styled(Typography)({
  fontSize: '1.5rem',
  marginBottom: '1rem',
});

const BoldText = styled(Typography)({
  fontSize: '1.5rem',
  fontWeight: 'bold',
});

const HorizontalLine = styled(Box)({
  width: '100%',
  borderBottom: '2px solid #ccc',
  margin: '2rem 0',
});

const PromoImage = styled('img')({
  width: '100%',
  height: 'auto',
  display: 'block',
  margin: '0 auto',
});

function GiftSection() {
  return (
    <Box>
      <SectionContainer>
        <LeftSection>
          <HeadingText>
            Cart Cadeaux Asllema
          </HeadingText>
          <NormalText>
            Vous êtes à l’étranger ou en Tunisie et voulez offrir un cadeau tunisien ? Et souhaitez surprendre un proche à l’étranger ?
          </NormalText>
          <NormalText>
            Les cartes cadeaux <BoldText>Asllema</BoldText> sont la solution idéale !
          </NormalText>
          <GiftButton variant="outlined">
            Offrir du bonheur
          </GiftButton>
        </LeftSection>
        <RightSection>
          <img
            src={giftImage}
            alt="Gift Image"
            style={{
              width: '80%',
              height: 'auto',
              objectFit: 'cover',
              marginTop: '1rem',
            }}
          />
        </RightSection>
      </SectionContainer>
      <HorizontalLine />
      <PromoImage src="https://asllema.com/wp-content/uploads/2023/12/Explorez-vite-nos.gif" alt="Promo" />
      <HorizontalLine />
    </Box>
  );
}

export default GiftSection;
