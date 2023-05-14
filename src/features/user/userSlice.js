import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchUser } from './userAPI';

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    }
  },
  extraReducers: (builder) => { },
});

export const { login, logout } = userSlice.actions;
export const selectorUser = state => state.userReducer;
export default userSlice.reducer;
