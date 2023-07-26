import { createSlice } from "@reduxjs/toolkit";
export const getRandomContentSlice = createSlice({
    name: "getRandomContentSlice", //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        getRandomContent: (state) => {
            state.loading = true;
        },
        getRandomContentSuccess: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        getRandomContentFailure: (state, action) => {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
        },
        clearGetRandomContent: (state) => {
            state.data = null;
            state.loading = false;
            state.error = null;
        },
    },
});

export const {
    getRandomContent,
    getRandomContentSuccess,
    getRandomContentFailure,
    clearGetRandomContent,
} = getRandomContentSlice.actions;

export default getRandomContentSlice.reducer;