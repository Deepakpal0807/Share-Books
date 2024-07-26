import React, { useState } from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem, Box, Typography, InputAdornment, IconButton, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  const [bookName, setBookName] = useState('');
  const [genre, setGenre] = useState('');

  const handleBookNameChange = (event) => {
    setBookName(event.target.value);
  };

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };

  const handleSearch = () => {
    // Implement search functionality here
    console.log(`Searching for ${bookName} in genre ${genre}`);
  };

  return (
    <Box className="container" sx={{ marginTop: '20px', fontFamily: 'cursive', width: '90vw', padding: '20px', margin: "auto", alignContent: "center" }}>
      <Typography variant="h5" sx={{ marginBottom: '15px', fontFamily: 'cursive' }}>Search Books</Typography>
      <Box sx={{ display: 'flex', gap: '20px' }}>
        <TextField
          type="text"
          label="Book Name"
          margin="normal"
          variant="outlined"
          sx={{ width: '60%' }}
          value={bookName}
          onChange={handleBookNameChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleSearch}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <FormControl variant="outlined" sx={{ width: '30%', marginTop: "2vh" }}>
          <InputLabel id="genre-label">Genre</InputLabel>
          <Select
            labelId="genre-label"
            id="genre"
            value={genre}
            onChange={handleGenreChange}
            label="Genre"
          >
            <MenuItem value="fantasy">Fantasy</MenuItem>
            <MenuItem value="adventure">Adventure</MenuItem>
            <MenuItem value="comic">Comic</MenuItem>
            <MenuItem value="mystery">Mystery</MenuItem>
            <MenuItem value="sci-fi">Sci-Fi</MenuItem>
            <MenuItem value="non-fiction">Non-Fiction</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: "2vh", height: '56px' }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
}

export default Search;
