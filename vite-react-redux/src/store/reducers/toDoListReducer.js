import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  list: [],
};

export const todoReducer = createSlice({
  name: "todo",
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
});

export const { addTodo, deleteTodo, handleToDoFinished } = todoReducer.actions;

export const getToDoList = (state) => state?.todo?.list;

export default todoReducer.reducer;
