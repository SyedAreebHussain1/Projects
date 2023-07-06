import { createSlice } from "@reduxjs/toolkit";
export const getReadListSlice = createSlice({
    name: "getReadListSlice", //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        getReadList: (state) => {
            state.loading = true;
        },
        getReadListSuccess: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        getReadListFailure: (state, action) => {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
        },
        clearGetReadListFailure: (state) => {
            state.data = null;
            state.loading = false;
            state.error = null;
        },
    },
});

export const {
    getReadList,
    getReadListSuccess,
    getReadListFailure,
    clearGetReadListFailure,
} = getReadListSlice.actions;

export default getReadListSlice.reducer;
