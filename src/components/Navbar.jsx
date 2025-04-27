import React, { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Button, IconButton, Box, Stack,
  Drawer, TextField, Divider, Typography, ButtonGroup, Checkbox, FormControlLabel
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart } from './CartContext';
import { useWishlist } from './WishlistContext';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.webp';


const NotificationBadge = ({ children }) => (
  <Box
    sx={{
      position: 'absolute', top: 8, right: 8,
      backgroundColor: 'red', color: 'white', borderRadius: '50%',
      width: 20, height: 20, display: 'flex', justifyContent: 'center',
      alignItems: 'center', fontSize: '12px',
    }}
  >
    {children}
  </Box>
);

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const navigate = useNavigate();

  const {
    cartItems, cartCount,
    increaseQuantity, decreaseQuantity, removeFromCart, subtotal
  } = useCart();

  const { wishlistItems } = useWishlist();
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={isScrolled ? 1 : 0}
        sx={{
          backgroundColor: isScrolled ? 'white' : 'transparent',
          transition: 'all 0.3s ease',
          boxShadow: isScrolled ? '0px 4px 10px rgba(0, 0, 0, 0.1)' : 'none',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ flexGrow: 1 }}>
            <img src={logo} alt="Logo" style={{ height: 40, cursor: 'pointer' }} onClick={() => navigate('/')} />
          </Box>
          <Stack direction="row" spacing={2} sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
            {["Artisanat", "Diari", "épicerie", "soins & hygiène", "divers", "Nos marque"].map((item, idx) => (
              <Button key={idx} sx={buttonStyles}>{item}</Button>
            ))}
          </Stack>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton sx={{ color: 'black' }} onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <SearchIcon />
            </IconButton>
            <IconButton sx={{ color: 'black' }} onClick={() => setIsLoginOpen(true)}>
              <PersonOutlineIcon />
            </IconButton>
            <IconButton
              sx={{ color: 'black', position: 'relative' }}
              onClick={() => navigate('/wishlist')}
            >
              <FavoriteBorderIcon />
              {wishlistItems.length > 0 && <NotificationBadge>{wishlistItems.length}</NotificationBadge>}
            </IconButton>
            <IconButton sx={{ color: 'black', position: 'relative' }} onClick={() => setIsCartOpen(!isCartOpen)}>
              <ShoppingBagOutlinedIcon />
              {cartCount > 0 && <NotificationBadge>{cartCount}</NotificationBadge>}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={isSearchOpen} onClose={() => setIsSearchOpen(false)} sx={drawerStyles}>
        <Typography variant="h6" sx={{ mb: 2 }}>Recherche des produits</Typography>
        <Divider sx={{ mb: 2 }} />
        <TextField fullWidth label="Rechercher des produits" variant="outlined" sx={{ mb: 2 }} />
      </Drawer>
      <Drawer anchor="right" open={isCartOpen} onClose={() => setIsCartOpen(false)} sx={drawerStyles}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Votre panier ({cartCount})
        </Typography>
        <Divider sx={{ mb: 2 }} />
        {cartItems.length === 0 ? (
          <Typography sx={{ mt: 4, textAlign: 'center', color: 'gray' }}>
            Votre panier est vide
          </Typography>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <Box key={index} sx={{ display: 'flex', mb: 2 }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: 60, height: 60, objectFit: 'cover', marginRight: 10, borderRadius: 8 }}
                />
                <Box sx={{ flexGrow: 1 }}>
                  <Typography sx={{ fontWeight: 'bold' }}>{item.name}</Typography>
                  <Typography sx={{ color: 'red', fontSize: 14 }}>
                    {parseFloat(item.price).toFixed(2)} TND
                  </Typography>
                  <ButtonGroup size="small" sx={{ mt: 1 }}>
                    <Button onClick={() => decreaseQuantity(item.name)}>-</Button>
                    <Button disabled>{item.quantity}</Button>
                    <Button onClick={() => increaseQuantity(item.name)}>+</Button>
                  </ButtonGroup>
                </Box>
                <IconButton onClick={() => removeFromCart(item.name)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            ))}
          </>
        )}
        {cartItems.length > 0 && (
          <Box sx={{ backgroundColor: '#f5f5f5', p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
            <Typography sx={{ fontWeight: 'bold' }}>Sous total</Typography>
            <Typography sx={{ fontWeight: 'bold', color: 'red' }}>
              {subtotal} TND
            </Typography>
          </Box>
        )}
        {cartItems.length > 0 && (
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'red', color: 'white',
              width: 'calc(100% - 32px)', margin: '16px', borderRadius: 0,
              '&:hover': { backgroundColor: 'darkred' }
            }}
            onClick={() => navigate('/cart')}
          >
            Voir le panier
          </Button>
        )}
      </Drawer>
      <Drawer anchor="right" open={isLoginOpen} onClose={() => setIsLoginOpen(false)} sx={drawerStyles}>
        <Typography variant="h6" sx={{ mb: 2, padding: '16px', color: 'black' }}>Signe dans</Typography>
        <Divider sx={{ mb: 2 }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: 4, flexGrow: 1 }}>
          <TextField label="Email" variant="outlined" fullWidth sx={{ mb: 2 }} />
          <TextField label="Mot de passe" type="password" variant="outlined" fullWidth sx={{ mb: 2 }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, width: '100%' }}>
            <FormControlLabel control={<Checkbox />} label="Se souvenir de moi" sx={{ color: 'black' }} />
            <Button sx={{ textTransform: 'none', color: 'black' }} variant="text">Mot de passe perdu?</Button>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', padding: '16px' }}>
          <Button variant="contained" sx={{ backgroundColor: 'red', color: 'white', width: '100%', mb: 2 }}>Signe dans</Button>
          <Button variant="outlined" sx={{ width: '100%' }} onClick={() => navigate('/signup')}>Créer un compte</Button>
        </Box>
      </Drawer>
    </>
  );
}

const buttonStyles = {
  color: 'black',
  fontWeight: 'bold',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '0%',
    height: '2px',
    backgroundColor: 'red',
    transition: 'width 0.3s ease',
  },
  '&:hover': {
    color: 'red',
    '&::after': { width: '100%' },
  },
};

const drawerStyles = {
  width: 300,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: 300,
    padding: 2,
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
  },
};

export default Navbar;
