import { createSlice } from "@reduxjs/toolkit";
export const deleteSingleTodoSlice = createSlice({
    name: "deleteSingleTodoSlice", //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        deleteSingleTodo: (state) => {
            state.loading = true;
        },
        deleteSingleTodoSuccess: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        deleteSingleTodoFailure: (state, action) => {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
        },
        clearDeleteSingleTodo: (state) => {
            state.data = null;
            state.loading = false;
            state.error = null;
        },
    },
});

export const {
    deleteSingleTodo,
    deleteSingleTodoSuccess,
    deleteSingleTodoFailure,
    clearDeleteSingleTodo,
} = deleteSingleTodoSlice.actions;

export default deleteSingleTodoSlice.reducer;