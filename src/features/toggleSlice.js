import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sideBar: true,
  addTask: false,
  deleteTask: false,
  editTask: false,
  taskToDelete: {
    title: '',
    todo_id: '',
  },
  taskToEdit: {
    title: '',
    description: '',
    date_created: '',
    todo_id: '',
  },
  syncTodo: false,
};

const toggleSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    sideBarToggle: (state) => {
      return (state = { ...state, sideBar: !state.sideBar });
    },
    addTaskToggle: (state) => {
      return (state = { ...state, addTask: !state.addTask });
    },
    deleteTaskToggle: (state) => {
      return (state = { ...state, deleteTask: !state.deleteTask });
    },
    editTaskToggle: (state) => {
      return (state = { ...state, editTask: !state.editTask });
    },
    setTaskToDelete: (state, action) => {
      return (state = { ...state, taskToDelete: action.payload });
    },
    setTaskToEdit: (state, action) => {
      return (state = { ...state, taskToEdit: action.payload });
    },
    setSyncTodo: (state) => {
      return (state = { ...state, syncTodo: !state.syncTodo });
    },
  },
});

export const {
  sideBarToggle,
  addTaskToggle,
  deleteTaskToggle,
  editTaskToggle,
  setTaskToDelete,
  setTaskToEdit,
  setSyncTodo,
} = toggleSlice.actions;

export const toggleReducer = toggleSlice.reducer;
