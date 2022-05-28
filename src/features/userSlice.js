import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {
    details: null,
    appLoaded: false,
    isLogged: false,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { login } = userSlice.actions;

export const userReducer = userSlice.reducer;
