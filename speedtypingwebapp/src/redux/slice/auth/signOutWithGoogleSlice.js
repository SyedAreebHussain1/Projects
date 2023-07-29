import { createSlice } from "@reduxjs/toolkit";
export const signOutWithGoogleSlice = createSlice({
    name: "signOutWithGoogleSlice", //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        signOutWithGoogle: (state) => {
            state.loading = true;
        },
        signOutWithGoogleSuccess: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        signOutWithGoogleFailure: (state, action) => {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
        },
        clearSignOutWithGoogle: (state) => {
            state.data = null;
            state.loading = false;
            state.error = null;
        },
    },
});
export const {
    signOutWithGoogle,
    signOutWithGoogleSuccess,
    signOutWithGoogleFailure,
    clearSignOutWithGoogle,
} = signOutWithGoogleSlice.actions;

export default signOutWithGoogleSlice.reducer;