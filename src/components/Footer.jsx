import React from 'react';
import { Box, Typography, Button, TextField, Stack, Link } from '@mui/material';
import logo from '../assets/logo.webp';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#EBECF0', padding: '40px 20px', color: 'black' }}>
      <Stack spacing={4}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h5" sx={{ marginBottom: 2 }}>
            Abonnez-vous à notre newsletter
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            Entrez votre e-mail *
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <TextField
              variant="outlined"
              label="Votre e-mail"
              size="small"
              sx={{ width: '300px' }}
            />
            <Button variant="contained" sx={{ backgroundColor: '#ff4c4c', color: 'white' }}>
              S'abonner
            </Button>
          </Stack>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginTop: 4 }}>
          <Box sx={{ flex: 1, textAlign: 'center', maxWidth: '33%' }}>
            <img src={logo} alt="Asllema Logo" style={{ width: '150px', marginBottom: '20px' }} />
            <Typography variant="body2" sx={{ marginBottom: 2 }}>
              Asllema.com se distingue en tant que plateforme de vente en ligne dédiée à l'offre de produits alimentaires, artisanaux et du terroir d'une qualité exceptionnelle, tous d'origine 100% tunisienne et proposés à des tarifs compétitifs. عيش تونسي.
            </Typography>
            <Box sx={{ textAlign: 'center', marginTop: 2 }}>
              <img 
                src="https://asllema.com/wp-content/uploads/2023/11/Ajouter_un_sous-titre__1_-removebg-jj.png" 
                alt="Asllema Image" 
                style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }} 
              />
            </Box>
          </Box>
          <Box sx={{ flex: 2, maxWidth: '50%', textAlign: 'center' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
              <Box sx={{ flex: 1 }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    marginBottom: 2, 
                    fontWeight: 'bold', 
                    color: 'red' 
                  }}>
                  POLITIQUE
                </Typography>
                <Stack spacing={1}>
                  <Link href="#" underline="none" sx={{ color: 'black' }}>Qui Somme Nous</Link>
                  <Link href="#" underline="none" sx={{ color: 'black' }}>Expédition & Livraison</Link>
                  <Link href="#" underline="none" sx={{ color: 'black' }}>Suivi de Commande</Link>
                  <Link href="#" underline="none" sx={{ color: 'black' }}>Conditions générales</Link>
                  <Link href="#" underline="none" sx={{ color: 'black' }}>Politique de confidentialité</Link>
                </Stack>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    marginTop: 3, 
                    marginBottom: 2, 
                    fontWeight: 'bold', 
                    color: 'red' 
                  }}>
                  PRODUITS
                </Typography>
                <Stack spacing={1}>
                  <Link href="#" underline="none" sx={{ color: 'black' }}>Nouveautés</Link>
                  <Link href="#" underline="none" sx={{ color: 'black' }}>Promotion</Link>
                  <Link href="#" underline="none" sx={{ color: 'black' }}>Boutique</Link>
                </Stack>
              </Box>
            </Box>
          </Box>
          <Box sx={{ flex: 1, textAlign: 'center', maxWidth: '33%' }}>
            <Typography 
              variant="h6" 
              sx={{ 
                marginBottom: 2, 
                fontWeight: 'bold', 
                color: 'red' 
              }}>
              CONTACT :
            </Typography>
            <Stack spacing={1}>
              <Link href="mailto:Contact@asllema.com" underline="none" sx={{ color: 'black' }}>Service client : Contact@asllema.com</Link>
              <Link href="mailto:Business@asllema.com" underline="none" sx={{ color: 'black' }}>Service commercial : Business@asllema.com</Link>
              <Link href="tel:+21699334446" underline="none" sx={{ color: 'black' }}>WhatsApp : 99 334 446</Link>
            </Stack>
          </Box>
        </Box>
        <Box sx={{ textAlign: 'center', marginTop: 4 }}>
          <Typography variant="body2" sx={{ marginBottom: 2 }}>
            SUIVEZ-NOUS
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: 2 }}>
            fr Français▼
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
