import { createSlice } from "@reduxjs/toolkit";
export const getTodoListSlice = createSlice({
    name: "getTodoListSlice", //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        getTodoList: (state) => {
            state.loading = true;
        },
        getTodoListSuccess: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        getTodoListFailure: (state, action) => {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
        },
        clearGetTodoList: (state) => {
            state.data = null;
            state.loading = false;
            state.error = null;
        },
    },
});

export const {
    getTodoList,
    getTodoListSuccess,
    getTodoListFailure,
    clearGetTodoList,
} = getTodoListSlice.actions;

export default getTodoListSlice.reducer;