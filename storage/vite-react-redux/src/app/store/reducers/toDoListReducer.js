import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  list: [],
  isLoading: false,
  error: false,
};

const sliceName = "todo";
const API_URL = "http://localhost:3000/to-do";

export const fetchToDoList = createAsyncThunk(
  `${sliceName}/getToDoList`,
  async () => {
    return fetch(API_URL)
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }
);

export const fetchCreateToDo = createAsyncThunk(
  `${sliceName}/createToDo`,
  async ({ data = {} }) => {
    console.log("POST DATA", data);
    return fetch(API_URL, {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }
);

export const fetchUpdateToDo = createAsyncThunk(
  `${sliceName}/updateToDd`,
  async ({ id, data = {} }) => {
    return fetch(`${API_URL}/${id}`, {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }
);

export const fetchDeleteToDo = createAsyncThunk(
  `${sliceName}/deleteToDo`,
  async ({ id }) => {
    return fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }
);

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
    //GET LIST
    builder.addCase(fetchToDoList.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(fetchToDoList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.list = action.payload?.data || [];
    });
    builder.addCase(fetchToDoList.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
    //POST NEW TODO
    builder.addCase(fetchCreateToDo.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(fetchCreateToDo.fulfilled, (state, action) => {
      const { list = [] } = state;
      const { payload: { data = {} } = {} } = action;
      state.isLoading = false;
      state.error = false;
      state.list = [
        ...list,
        {
          ...data,
        },
      ];
    });
    builder.addCase(fetchCreateToDo.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
    //UPDATE TODO
    builder.addCase(fetchUpdateToDo.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(fetchUpdateToDo.fulfilled, (state, action) => {
      const { list = [] } = state;
      const { payload = {} } = action;
      const { id, data = {} } = payload;

      const editIndex = [...list].findIndex(({ _id: todoId }) => {
        return todoId === (id || data?.id || data?._id);
      });

      state.isLoading = false;
      state.error = false;

      if (typeof editIndex === "number" && editIndex >= 0) {
        state.list = [
          ...list.slice(0, editIndex),
          {
            ...list[editIndex],
            ...data,
          },
          ...list.slice(editIndex + 1),
        ];
      } else {
        state.list = [...list];
      }
    });
    builder.addCase(fetchUpdateToDo.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
    //DELETE TODO
    builder.addCase(fetchDeleteToDo.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(fetchDeleteToDo.fulfilled, (state, action) => {
      const { list = [] } = state;
      const { payload = {} } = action;
      const { id } = payload;
      const deleteIndex = list.findIndex(({ id: todoId }) => todoId === id);

      state.isLoading = false;
      state.error = false;

      if (typeof deleteIndex === "number" && deleteIndex >= 0) {
        state.list = [
          ...list.slice(0, deleteIndex),
          ...list.slice(deleteIndex + 1),
        ];
      } else {
        state.list = [...list];
      }
    });
    builder.addCase(fetchDeleteToDo.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
  },
});

export const { addTodo, deleteTodo, handleToDoFinished } = todoReducer.actions;

export const getToDoList = (state) => state?.todo?.list;
export const getToDoListLoading = (state) => state?.todo?.isLoading;
export const getToDoListError = (state) => state?.todo?.error;

export default todoReducer.reducer;
