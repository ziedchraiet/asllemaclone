import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useWishlist } from './WishlistContext';
import DeleteIcon from '@mui/icons-material/Delete';

function Wishlist() {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();

  return (
    <Box sx={{ marginTop: '100px', padding: '2rem' }}>
      <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold', mb: 4 }}>
        Your Wishlist
      </Typography>

      {wishlistItems.length === 0 ? (
        <Typography variant="h6" sx={{ textAlign: 'center' }}>
          Your wishlist is empty!
        </Typography>
      ) : (
        <>
          <Button 
            variant="contained" 
            color="error" 
            onClick={clearWishlist}
            sx={{ marginBottom: '2rem' }}
          >
            Clear Wishlist
          </Button>

          <Box sx={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}>
            {wishlistItems.map((product, index) => (
              <Box 
                key={index} 
                sx={{ 
                  border: '1px solid #ccc', 
                  borderRadius: '8px', 
                  padding: '1rem', 
                  textAlign: 'center',
                  position: 'relative'
                }}
              >
                <img 
                  src={product.image} 
                  alt={product.name} 
                  style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
                />
                <Typography variant="h6" sx={{ mt: 2 }}>{product.name}</Typography>
                <Typography sx={{ color: 'red' }}>{product.price}</Typography>
                <Button 
                  onClick={() => removeFromWishlist(product.name)}
                  variant="outlined" 
                  color="error" 
                  startIcon={<DeleteIcon />}
                  sx={{ marginTop: '1rem' }}
                >
                  Remove
                </Button>
              </Box>
            ))}
          </Box>
        </>
      )}
    </Box>
  );
}

export default Wishlist;
