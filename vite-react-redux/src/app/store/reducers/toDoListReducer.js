import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  list: [],
  isLoading: false,
  error: false,
};

const sliceName = "todo";
const API_URL = "http://localhost:3000/to-do";

export const fetchToDoList = createAsyncThunk(`${sliceName}/getToDoList`, async () => {
  return fetch(API_URL)
    .then((res) => res.json())
    .catch((err) => console.log(err));
});

export const todoReducer = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    addTodo: (state = initialState, action = {}) => {
      const { list = [] } = state;
      const { payload = {} } = action;

      const newId = uuidv4();
      state.list = [
        ...list,
        {
          id: newId,
          label: `new element (ID:${newId})`,
          finished: false,
          ...payload,
        },
      ];
    },
    deleteTodo: (state = initialState, action = {}) => {
      const { list = [] } = state;
      const { payload = {} } = action;
      const { id, index } = payload;
      const deleteIndex =
        index || list.findIndex(({ id: todoId }) => todoId === id);
      if (typeof deleteIndex === "number" && deleteIndex >= 0) {
        state.list = [
          ...list.slice(0, deleteIndex),
          ...list.slice(deleteIndex + 1),
        ];
      } else {
        state.list = [...list];
      }
    },
    handleToDoFinished: (state = initialState, action = {}) => {
      const { list = [] } = state;
      const { payload = {} } = action;
      const { id, index } = payload;
      const editIndex =
        index || list.findIndex(({ id: todoId }) => todoId === id);

      if (typeof editIndex === "number" && editIndex >= 0) {
        state.list = [
          ...list.slice(0, editIndex),
          {
            ...list[editIndex],
            finished: !list[editIndex]?.finished,
          },
          ...list.slice(editIndex + 1),
        ];
      } else {
        state.list = { list: [...list] };
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchToDoList.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    }),
    builder.addCase(fetchToDoList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.list = action.payload?.data || [];
    }),
    builder.addCase(fetchToDoList.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    })
  },
});

export const { addTodo, deleteTodo, handleToDoFinished } = todoReducer.actions;

export const getToDoList = (state) => state?.todo?.list;
export const getToDoListLoading = (state) => state?.todo?.isLoading;
export const getToDoListError = (state) => state?.todo?.error;

export default todoReducer.reducer;
