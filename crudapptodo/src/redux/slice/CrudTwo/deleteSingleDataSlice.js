import { createSlice } from "@reduxjs/toolkit";
export const deleteSingleDataSlice = createSlice({
    name: "deleteSingleDataSlice", //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        deleteSingleData: (state) => {
            state.loading = true;
        },
        deleteSingleDataSuccess: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        deleteSingleDataFailure: (state, action) => {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
        },
        clearDeleteSingleDataFailure: (state) => {
            state.data = null;
            state.loading = false;
            state.error = null;
        },
    },
});

export const {
    deleteSingleData,
    deleteSingleDataSuccess,
    deleteSingleDataFailure,
    clearDeleteSingleDataFailure,
} = deleteSingleDataSlice.actions;

export default deleteSingleDataSlice.reducer;
