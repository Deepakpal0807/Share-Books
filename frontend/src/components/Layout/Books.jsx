import React from 'react';
import booksData from '../../dummy';
import { Typography, Box, Stack } from '@mui/material';
import SingleBooks from './SingleBooks';

const Books = () => {
    console.log(booksData.bookTypes);

    return (
        <Box className="container" sx={{ margin: "40px", overflow:"hidden"}}>
            {booksData.bookTypes.map((bookType, index) => (
                <Box
                    key={index}
                    sx={{
                        marginBottom: '20px',
                        display: "flex",
                        flexDirection: "column",
                        // alignItems: "flex-start",
                        justifyContent:"flex-end", // Align items to the start (left) horizontally
                        padding: '16px',
                        border: "2px solid black",
                        borderRadius: '8px',
                        backgroundColor: '#f5f5f5',
                    }}
                >
                    <Stack direction="column" spacing={1} justifyContent={"start"}>
                        <Typography
                            variant="h6"
                            sx={{
                                color: '#2c3e50', // Dark color for text
                                fontFamily: 'Arial, sans-serif', // Change font family
                                fontSize: '24px', // Increase font size
                                fontWeight: 'bold', // Make text bold
                                margin: 0, // Remove any default margin
                            }}
                        >
                            {bookType.type}
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            {bookType.books.map((book, idx) => (
                                // <Typography key={idx}>{book}</Typography>
                                <SingleBooks author={book} title={book}/>
                            ))}
                        </Stack>
                    </Stack>
                </Box>
            ))}
        </Box>
    );
}

export default Books;
