import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Container, Snackbar, CircularProgress } from '@mui/material';
import { useCart } from './CartContext';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import { motion } from 'framer-motion';

const Checkout = () => {
  const { cartItems, subtotal } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
  });
  const [isFormValid, setIsFormValid] = useState(true);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.address || !formData.phone) {
      setIsFormValid(false);
      return;
    }
    setOrderConfirmed(true);
    setOpenSnackbar(true);
  };
  const handlePayment = () => {
    if (!formData.name || !formData.email || !formData.address || !formData.phone) {
      setIsFormValid(false);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpenSnackbar(true);
      setOrderConfirmed(true);
    }, 2000);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        paddingTop: '40px',
        backgroundColor: '#f9f9f9',
        borderRadius: '12px',
        padding: '30px',
        marginTop: '100px',
      }}
    >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <Typography variant="h4" sx={{ marginBottom: '20px', textAlign: 'center', fontWeight: 'bold' }}>
          Checkout
        </Typography>
        <Box sx={{ marginBottom: '20px', backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: '600' }}>Your Cart</Typography>
          {cartItems.map((item, idx) => {
            const price = Number(item.price);
            const quantity = Number(item.quantity);

            return (
              <Box key={idx} sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <Typography>{item.name} x {item.quantity}</Typography>
                <Typography>{parseFloat(item.price).toFixed(2)} TND</Typography>
              </Box>
            );
          })}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
            <Typography>Total:</Typography>
            <Typography>{subtotal ? Number(subtotal).toFixed(2) : '0.00'} TND</Typography>
          </Box>
        </Box>
        <motion.form initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} onSubmit={handleSubmit}>
          <TextField
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            fullWidth
            sx={{ marginBottom: '15px', backgroundColor: '#fff', borderRadius: '8px' }}
            required
            variant="outlined"
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            fullWidth
            sx={{ marginBottom: '15px', backgroundColor: '#fff', borderRadius: '8px' }}
            required
            type="email"
            variant="outlined"
          />
          <TextField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            fullWidth
            sx={{ marginBottom: '15px', backgroundColor: '#fff', borderRadius: '8px' }}
            required
            variant="outlined"
          />
          <TextField
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            fullWidth
            sx={{ marginBottom: '20px', backgroundColor: '#fff', borderRadius: '8px' }}
            required
            type="tel"
            variant="outlined"
          />

          {!isFormValid && (
            <Typography sx={{ color: 'red', marginBottom: '15px' }}>
              Please fill out all fields.
            </Typography>
          )}
          <Button
            variant="contained"
            color="primary"
            onClick={handlePayment}
            fullWidth
            sx={{
              padding: '12px',
              fontSize: '16px',
              marginTop: '20px',
              backgroundColor: '#00796b',
              '&:hover': { backgroundColor: '#004d40' },
            }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Procéder au paiement'}
          </Button>
        </motion.form>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={4000}
          onClose={() => setOpenSnackbar(false)}
          message={
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {orderConfirmed ? (
                <CheckCircleIcon sx={{ color: 'green', marginRight: '10px' }} />
              ) : (
                <ErrorIcon sx={{ color: 'red', marginRight: '10px' }} />
              )}
              <Typography>
                {orderConfirmed ? 'Order placed successfully! 🎉' : 'Error placing the order.'}
              </Typography>
            </Box>
          }
        />
      </motion.div>
    </Container>
  );
};

export default Checkout;
