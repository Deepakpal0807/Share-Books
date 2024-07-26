import { CardContent, Typography } from '@mui/material';
import React from 'react';
const Details = ({tittle,author}) => {
  return (
    <div className="container">
         <CardContent>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          {/* {tittle} */}
          Atomic Habits
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {/* {author} */}
          James Clear
        </Typography>
      </CardContent>
     
    </div>
  )
}

export default Details