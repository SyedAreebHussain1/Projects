import { createSlice } from "@reduxjs/toolkit";
export const signOutSlice = createSlice({
    name: "signOutSlice", //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        signOutFunc: (state) => {
            state.loading = true;
        },
        signOutSuccess: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        signOutFailure: (state, action) => {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
        },
        clearSignOut: (state) => {
            state.data = null;
            state.loading = false;
            state.error = null;
        },
    },
});

export const {
    signOutFunc, signOutSuccess, signOutFailure, clearSignOut
} = signOutSlice.actions;

export default signOutSlice.reducer;
