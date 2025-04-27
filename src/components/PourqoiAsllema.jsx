import React from 'react';
import { Box, Typography, Stack, IconButton } from '@mui/material';
import { LocalShipping, VerifiedUser, Lock, HeadsetMic } from '@mui/icons-material';

const PourqoiAsllema = () => {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', padding: '40px 20px' }}>
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 4 }}>
        Pourquoi Asllema ?
      </Typography>
      <Stack direction="row" spacing={4} justifyContent="center" alignItems="center">
        <Box sx={{ textAlign: 'center' }}>
          <IconButton sx={{ fontSize: 40, color: 'red' }}>
            <LocalShipping />
          </IconButton>
          <Typography variant="h6">Livraison</Typography>
          <Typography variant="body2">
            Nos meilleurs produits tunisiens peuvent être expédiés dans le monde entier
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <IconButton sx={{ fontSize: 40, color: 'red' }}>
            <VerifiedUser />
          </IconButton>
          <Typography variant="h6">Qualité</Typography>
          <Typography variant="body2">
            Découvrez notre sélection de produits offrant le meilleur rapport qualité / prix
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <IconButton sx={{ fontSize: 40, color: 'red' }}>
            <Lock />
          </IconButton>
          <Typography variant="h6">Sécurité et confidentialité</Typography>
          <Typography variant="body2">
            Profitez d’une plateforme sécurisée et d’une protection renforcée de vos données.
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <IconButton sx={{ fontSize: 40, color: 'red' }}>
            <HeadsetMic />
          </IconButton>
          <Typography variant="h6">Assistance</Typography>
          <Typography variant="body2">
            Assistance disponible 24/7. Notre équipe dédiée est là pour répondre à vos questions
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default PourqoiAsllema;
