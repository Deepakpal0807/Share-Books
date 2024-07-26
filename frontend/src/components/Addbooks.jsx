import React, { useState } from 'react';
import { TextField, Typography, Select, MenuItem, FormControl, InputLabel, Box, Button, Input } from '@mui/material';
import { useInputValidation } from "6pp";

const Addbooks = () => {
  const title = useInputValidation();
  const author = useInputValidation();
  const type = useInputValidation();
  const description=useInputValidation();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <Box className="container" sx={{ marginTop: '20px', fontFamily: 'cursive' }}>
      <Typography variant="h5" sx={{ marginBottom: '20px', fontFamily: 'cursive' }}>Add New Book</Typography>
      <form>
        <TextField
          type="text"
          required
          label="Title"
          margin="normal"
          variant="outlined"
          sx={{ width: '80%', marginBottom: '20px' }}
          value={title.value}
          onChange={title.changeHandler}
        />
        <TextField
          type="text"
          required
          label="Author"
          margin="normal"
          variant="outlined"
          sx={{ width: '80%', marginBottom: '20px' }}
          value={author.value}
          onChange={author.changeHandler}
        />
        <TextField
          type="text"
          required
          label="Description"
          margin="normal"
          variant="outlined"
          sx={{ width: '80%', marginBottom: '20px' }}
          value={description.value}
          onChange={description.changeHandler}
        />
        <FormControl variant="outlined" sx={{ width: '30%', marginBottom: '20px' }}>
          <InputLabel id="book-type-label">Genre</InputLabel>
          <Select
            labelId="book-type-label"
            id="book-type"
            required
            value={type.value}
            onChange={type.changeHandler}
            label="Book Type"
          >
            <MenuItem value="fantasy">Fantasy</MenuItem>
            <MenuItem value="adventure">Adventure</MenuItem>
            <MenuItem value="comic">Comic</MenuItem>
            <MenuItem value="mystery">Mystery</MenuItem>
            <MenuItem value="sci-fi">Sci-Fi</MenuItem>
            <MenuItem value="non-fiction">Non-Fiction</MenuItem>
          </Select>
        </FormControl>
        {selectedImage && (
          <Box sx={{ marginBottom: '20px' }}>
            <Typography variant="subtitle1" sx={{ marginBottom: '10px' }}>Selected Image:</Typography>
            <img src={selectedImage} alt="Selected Book" style={{ maxWidth: '30%', height: 'auto' }} />
          </Box>
        )}
        <Button variant="contained" component="label" sx={{ display: 'block', marginBottom: '20px' }}>
          Upload Book Image
          <Input type="file" accept="image/*" onChange={handleImageChange} hidden />
        </Button>
      </form>
    </Box>
  );
}

export default Addbooks;
