// src/pages/NotFound.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const NotFound = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
        padding: '20px',
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
        404 - Page Not Found
      </Typography>
    </Box>
  );
};

export default NotFound;
