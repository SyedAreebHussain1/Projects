import { createSlice } from "@reduxjs/toolkit";
export const createCrudTwoSlice = createSlice({
    name: "createCrudTwoSlice", //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        createCrudTwo: (state) => {
            state.loading = true;
        },
        createCrudTwoSuccess: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        createCrudTwoFailure: (state, action) => {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
        },
        clearCreateCrudTwo: (state) => {
            state.data = null;
            state.loading = false;
            state.error = null;
        },
    },
});

export const {
    createCrudTwo,
    createCrudTwoSuccess,
    createCrudTwoFailure,
    clearCreateCrudTwo,
} = createCrudTwoSlice.actions;

export default createCrudTwoSlice.reducer;
