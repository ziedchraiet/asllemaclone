import React from 'react';
import { Box, Typography } from '@mui/material';
import { Star } from '@mui/icons-material';

const reviews = [
  {
    name: 'John Doe',
    location: 'Tunisia',
    rating: 5,
    review: 'This is an amazing product! I highly recommend it to everyone.',
  },
  {
    name: 'Jane Smith',
    location: 'France',
    rating: 4,
    review: 'Great quality! Will definitely buy again.',
  },
  {
    name: 'Sami Ali',
    location: 'USA',
    rating: 5,
    review: 'Excellent customer service and fantastic products!',
  },
  {
    name: 'Ahmed Zied',
    location: 'Germany',
    rating: 4,
    review: 'Good product, but the delivery was a bit slow.',
  },
  {
    name: 'Sarah Lou',
    location: 'UK',
    rating: 5,
    review: 'Perfect gift idea! My friend loved it.',
  },
];

const ReviewsSection = () => {
  return (
    <Box sx={{ padding: '3rem', textAlign: 'center' }}>
      <Typography variant="h4" sx={{ color: 'red', fontWeight: 'bold', marginBottom: '2rem' }}>
        Ils nous recommandent
      </Typography>
      <hr style={{ marginBottom: '2rem', border: '1px solid #ccc' }} />
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        {reviews.slice(0, 3).map((review, index) => (
          <Box
            key={index}
            sx={{
              width: '300px', 
              height: '400px',
              backgroundColor: '#f9f9f9',
              borderRadius: '8px',
              padding: '1rem',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
              {review.name} - {review.location}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} sx={{ color: i < review.rating ? 'gold' : 'gray' }} />
              ))}
            </Box>
            <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
              {review.review}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ReviewsSection;
