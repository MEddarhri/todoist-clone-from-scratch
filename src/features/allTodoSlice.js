import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allTodo: [],
  allCompletedTodo: [],
};

const allTodoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setAllTodo: (state, action) => {
      return (state = { ...state, allTodo: action.payload });
    },
    setAllCompletedTodo: (state, action) => {
      return (state = { ...state, allCompletedTodo: action.payload });
    },
  },
});

export const { setAllTodo, setAllCompletedTodo } = allTodoSlice.actions;

export const allTodoReducer = allTodoSlice.reducer;
