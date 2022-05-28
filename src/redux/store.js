import { configureStore } from '@reduxjs/toolkit';
import { toggleReducer } from 'features/toggleSlice';
import { userReducer } from 'features/userSlice';
import { successMsgReducer } from 'features/successMsgSlice';
import { allTodoReducer } from 'features/allTodoSlice';

export const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    user: userReducer,
    successMsg: successMsgReducer,
    todos: allTodoReducer,
  },
});
