import { createSlice } from "@reduxjs/toolkit";
export const contactUsSlice = createSlice({
    name: "contactUsSlice", //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        contactUs: (state) => {
            state.loading = true;
        },
        contactUsSuccess: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        contactUsFailure: (state, action) => {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
        },
        clearContactUs: (state) => {
            state.data = null;
            state.loading = false;
            state.error = null;
        },
    },
});

export const {
    contactUs, contactUsSuccess, contactUsFailure, clearContactUs
} = contactUsSlice.actions;

export default contactUsSlice.reducer;