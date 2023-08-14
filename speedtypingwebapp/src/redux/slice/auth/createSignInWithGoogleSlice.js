import { createSlice } from "@reduxjs/toolkit";
export const createSignInWithGoogleSlice = createSlice({
    name: "createSignInWithGoogleSlice", //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        createSignInWithGoogle: (state) => {
            state.loading = true;
        },
        createSignInWithGoogleSuccess: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        createSignInWithGoogleFailure: (state, action) => {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
        },
        clearCreateSignInWithGooglet: (state) => {
            state.data = null;
            state.loading = false;
            state.error = null;
        },
    },
});
export const {
    createSignInWithGoogle,
    createSignInWithGoogleSuccess,
    createSignInWithGoogleFailure,
    clearCreateSignInWithGooglet,
} = createSignInWithGoogleSlice.actions;

export default createSignInWithGoogleSlice.reducer;