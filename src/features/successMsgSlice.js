import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: null,
};

const successMsgSlice = createSlice({
  name: 'successMsg',
  initialState,
  reducers: {
    setSuccessMsg: (state, action) => {
      state.message = action.payload;
    },
  },
});
export const { setSuccessMsg } = successMsgSlice.actions;

export const successMsgReducer = successMsgSlice.reducer;
