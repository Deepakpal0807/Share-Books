import React, { useState } from 'react';
import { TextField, Typography, Select, MenuItem, FormControl, InputLabel, Box, Button, Input } from '@mui/material';
import { useInputValidation } from "6pp";
import axios from 'axios';

const Addbooks = () => {
  const title = useInputValidation();
  const author = useInputValidation();
  const type = useInputValidation();
  const description = useInputValidation();
  const [selectedImage, setSelectedImage] = useState("");

  // const convertBase64 = (file) => {
  //   return new Promise ((resolve, reject) => {
  //   const fileReader = new FileReader();
  //   fileReader.readAsDataURL (file);
  //   fileReader.onload = () => {
  //   resolve(fileReader.result);
  //   }
  //   fileReader.onerror = (error) => {
  //   reject(error);
  //   }
  //   })}

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    if (image) {
      // const imageUrl = URL.createObjectURL(image);
      setSelectedImage(image);
    }
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    const bookData = {
      title: title.value,
      author: author.value,
      genre: type.value,
      description: description.value,
      bookImage: selectedImage
    };
    console.log(bookData);

    // const bookData = new FormData()
    
    // Add logic to handle the submission, such as sending data to the backend
    try {
      const response = await axios.post(`http://localhost:5173/api/books/add-book`,bookData);
      console.log(response)
      alert(`Book Added: 
        Title: ${bookData.title}
        Author: ${bookData.author}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box className="container" sx={{ marginTop: '20px', fontFamily: 'cursive' }}>
      <Typography variant="h5" sx={{ marginBottom: '20px', fontFamily: 'cursive' }}>Add New Book</Typography>
      <form action='http://localhost:5173/api/books/add-book' method="post" enctype="multipart/form-data">
        <TextField
          type="text"
          name='title'
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
          name='author'
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
          name='description'
          required
          label="Description"
          margin="normal"
          variant="outlined"
          sx={{ width: '80%', marginBottom: '20px' }}
          value={description.value}
          onChange={description.changeHandler}
        />
        <FormControl variant="outlined" sx={{ width: '30%', marginBottom: '20px' }} onSubmit={handleSubmit}>
          <InputLabel id="book-type-label">Genre</InputLabel>
          <Select
            labelId="book-type-label"
            id="book-type"
            name='genre'
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
          <Input type="file" accept="image/" name="image" onChange={handleImageChange} hidden />
        </Button>
        <Button type="submit" variant="contained" color="primary" sx={{ width: '80%', marginBottom: '20px' }}>
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default Addbooks;