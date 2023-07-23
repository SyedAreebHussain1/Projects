import { createSlice } from "@reduxjs/toolkit";
export const createTodoListSlice = createSlice({
    name: "createTodoListSlice", //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        createTodoList: (state) => {
            state.loading = true;
        },
        createTodoListSuccess: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        createTodoListFailure: (state, action) => {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
        },
        clearCreateTodoList: (state) => {
            state.data = null;
            state.loading = false;
            state.error = null;
        },
    },
});

export const {
    createTodoList,
    createTodoListSuccess,
    createTodoListFailure,
    clearCreateTodoList,
} = createTodoListSlice.actions;

export default createTodoListSlice.reducer;