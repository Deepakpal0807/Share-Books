import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial state
const initialState = {
  name: '',
  email: '',
  user: false,
  username: '',
  joinedDate: '',
  booksShared: '0',
  image: null,
  status: 'idle', // For tracking async state
  error: null, // For tracking errors
  city: '',
  pincode: '',
};

// Async thunk for user login
export const loginUser = createAsyncThunk('user/loginUser', async (credentials) => {
  const response = await axios.post('/api/auth/login', credentials);
  return response.data;
});

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
      state.image = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setPincode: (state, action) => {
      state.pincode = action.payload;
    },
    clearUser: (state) => {
      state.name = '';
      state.email = '';
      state.user = false;
      state.username = '';
      state.joinedDate = '';
      state.booksShared = 0;
      state.image = null;
      state.city = '';
      state.pincode = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Assuming the API returns user data including city and pincode
        state.user = true;
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.username = action.payload.username;
        state.joinedDate = action.payload.joinedDate;
        state.booksShared = action.payload.booksShared;
        state.city = action.payload.city;
        state.pincode = action.payload.pincode;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const {
  setName,
  setEmail,
  setUser,
  setUsername,
  setJoinedDate,
  setBooksShared,
  setImage,
  setCity,
  setPincode,
  clearUser,
} = userSlice.actions;

export default userSlice.reducer;
