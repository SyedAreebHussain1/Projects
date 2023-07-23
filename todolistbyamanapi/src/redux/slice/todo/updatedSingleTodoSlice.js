import { createSlice } from "@reduxjs/toolkit";
export const updatedSingleTodoSlice = createSlice({
    name: "updatedSingleTodoSlice", //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        updatedSingleTodo: (state) => {
            state.loading = true;
        },
        updatedSingleTodoSuccess: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        updatedSingleTodoFailure: (state, action) => {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
        },
        clearUpdatedSingleTodo: (state) => {
            state.data = null;
            state.loading = false;
            state.error = null;
        },
    },
});

export const {
    updatedSingleTodo,
    updatedSingleTodoSuccess,
    updatedSingleTodoFailure,
    clearUpdatedSingleTodo,
} = updatedSingleTodoSlice.actions;

export default updatedSingleTodoSlice.reducer;