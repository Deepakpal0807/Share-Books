import React from 'react';
import logo from './logo192.png';
import { Box, Typography } from '@mui/material';

const SingleBooks = ({ img = logo, author, title }) => {
  return (
    <Box
      className="container"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid black',
        borderRadius: '8px',
        padding: '16px',
        width: '200px',
        height: '300px',
        margin: '20px auto',
        backgroundColor: '#f5f5f5',
        minWidth:"186px"
      }}
    >
      <Box
        component="img"
        src={img}
        alt="Book Cover"
        sx={{
          width: '150px',
          height: '200px',
          objectFit: 'cover',
          marginBottom: '10px',
        }}
      />
      <Typography
        variant="h6"
        sx={{
          fontWeight: 'bold',
          textAlign: 'center',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          width: '100%',
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: '#757575',
          textAlign: 'center',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          width: '100%',
        }}
      >
        {author}
      </Typography>
    </Box>
  );
};

export default SingleBooks;
