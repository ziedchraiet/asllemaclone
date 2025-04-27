import React from 'react';
import { Box, Typography, Button, IconButton, CircularProgress } from '@mui/material';
import { useCart } from './CartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, subtotal, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const handlePayment = () => {
    setLoading(true);
    setTimeout(() => {
      navigate('/checkout');
    }, 2000);
  };

  return (
    <Box sx={{ padding: '20px', marginTop: '80px' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px', textAlign: 'center', fontWeight: 'bold' }}>
        Votre Panier
      </Typography>
      {cartItems.length === 0 ? (
        <Typography sx={{ color: 'gray', textAlign: 'center', fontSize: '18px' }}>
          Votre panier est vide
        </Typography>
      ) : (
        <Box>
          {cartItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '15px',
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  boxShadow: 2,
                  marginBottom: '20px',
                  '&:hover': {
                    boxShadow: 6,
                  },
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '80px',
                    height: '80px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginRight: '20px',
                  }}
                />

                <Box sx={{ flexGrow: 1 }}>
                  <Typography sx={{ fontWeight: 'bold' }}>{item.name}</Typography>
                  <Typography sx={{ color: 'red' }}>
                    {parseFloat(item.price).toFixed(2)} TND
                  </Typography>
                </Box>

                <Box sx={{ textAlign: 'center' }}>
                  <Button
                    onClick={() => decreaseQuantity(item.name)}
                    sx={{
                      backgroundColor: '#f0f0f0',
                      margin: '0 5px',
                      '&:hover': {
                        backgroundColor: '#e0e0e0',
                      },
                    }}
                  >
                    -
                  </Button>
                  <Typography>{item.quantity}</Typography>
                  <Button
                    onClick={() => increaseQuantity(item.name)}
                    sx={{
                      backgroundColor: '#f0f0f0',
                      margin: '0 5px',
                      '&:hover': {
                        backgroundColor: '#e0e0e0',
                      },
                    }}
                  >
                    +
                  </Button>
                </Box>
                <IconButton
                  onClick={() => removeFromCart(item.name)}
                  sx={{ color: 'red', marginLeft: '10px' }}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            </motion.div>
          ))}
          <Box
            sx={{
              padding: '15px',
              backgroundColor: '#f5f5f5',
              borderRadius: '8px',
              boxShadow: 2,
              marginTop: '30px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Sous total</Typography>
            <Typography sx={{ fontWeight: 'bold', color: 'red', fontSize: '1.2rem' }}>
              {subtotal ? Number(subtotal).toFixed(2) : '0.00'} TND
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center', marginTop: '30px' }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'red',
                color: 'white',
                padding: '12px 30px',
                fontSize: '16px',
                '&:hover': {
                  backgroundColor: 'darkred',
                },
              }}
              onClick={handlePayment}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Procéder au paiement'}
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Cart;
