import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  user: false,  // This will be a boolean value to indicate user login status
  username: '',
  joinedDate: '',
  booksShared: 0,
  image: null // Use null initially for the image file
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setJoinedDate: (state, action) => {
      state.joinedDate = action.payload;
    },
    setBooksShared: (state, action) => {
      state.booksShared = action.payload;
    },
    setImage: (state, action) => {
      state.image = action.payload; // Expecting a File object here
    },
    clearUser: (state) => {
      state.name = '';
      state.email = '';
      state.user = false;
      state.username = '';
      state.joinedDate = '';
      state.booksShared = 0;
      state.image = null; // Clear the image file
    },
  },
});

export const {
  setName,
  setEmail,
  setUser,
  setUsername,
  setJoinedDate,
  setBooksShared,
  clearUser,
  setImage
} = userSlice.actions;

export default userSlice.reducer;
