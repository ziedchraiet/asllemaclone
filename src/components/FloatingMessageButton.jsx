import React from 'react';
import { IconButton } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';

const FloatingMessageButton = () => {
  const handleClick = () => {
    alert("Messaging Feature Coming Soon!");
  };

  return (
    <IconButton
      onClick={handleClick}
      sx={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        backgroundColor: 'red',
        color: 'white',
        borderRadius: '50%',
        padding: '16px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
        '&:hover': {
          backgroundColor: 'darkred',
        },
        animation: 'bounce 1s infinite alternate',
      }}
    >
      <MessageIcon />
    </IconButton>
  );
};

export default FloatingMessageButton;
