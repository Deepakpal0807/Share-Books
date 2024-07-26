import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Smallbook from "./Smallbook"; // Ensure this matches the filename

const BookSmall = ({ data }) => {
  // console.log(data.books);
  return (
    <Box
      sx={{
        padding: "16px",
        borderRadius: "8px",
        marginBottom: "16px",
        overflow: "hidden",
        height: "auto", // Adjust height to fit content
        backgroundColor: "#f9f9f9" // Optional: for a better visual appearance
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: "8px", fontWeight: 'bold',alignItems:"flex-start", display:"flex" }}>
        {data.type}
      </Typography>
      <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', alignItems: 'flex-start' }}>
        {data.books.map((el, index) => (
          <Smallbook key={index} title={el.title} author={el.author} />
        ))}
      </Stack>
    </Box>
  );
}

export default BookSmall;
