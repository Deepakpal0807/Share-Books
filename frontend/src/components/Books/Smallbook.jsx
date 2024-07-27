import { Backdrop, Card, CardMedia } from '@mui/material';
import React, { lazy, Suspense, useState } from 'react';
import logo192 from './logo192.png'; // Adjust the path as needed
const Details=lazy(()=> import("./Details"))  // Adjust import as necessary

const BookCard = ({ image = logo192, title, author }) => {
  const [click, setClick] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const clickHandler = () => {
    if (disabled) return; // Ignore click if disabled

    setClick(!click);
    setDisabled(true);

    // Re-enable clicks after 3 seconds
    setTimeout(() => {
      setClick(false); // Re-enable clicking after 3 seconds
      setDisabled(false);
    }, 3000);
  };

  return (
    <Card
      sx={{ 
        maxWidth: "180px", 
        maxHeight: "200px", 
        display: 'flex', 
        flexDirection: 'column', 
        borderRadius: '8px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        margin:'20px 10px' // Change cursor if disabled
      }}
      onClick={clickHandler}
    >
      <CardMedia
        component="img"
        height="70"
        width="70"
        image={image}
        alt={title}
        sx={{ objectFit: 'cover' }}
      />
      {click && (
        <Suspense fallback={
          <Backdrop open />}>
          <Details  title={title} author={author}/>
        </Suspense>
      )}
    </Card>
  );
};

export default BookCard;
