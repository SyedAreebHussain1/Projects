import { createSlice } from "@reduxjs/toolkit";
export const updatedSingleDataSlice = createSlice({
    name: "updatedSingleDataSlice", //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        updatedSingleData: (state) => {
            state.loading = true;
        },
        updatedSingleDataSuccess: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        updatedSingleDataFailure: (state, action) => {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
        },
        clearUpdatedSingleData: (state) => {
            state.data = null;
            state.loading = false;
            state.error = null;
        },
    },
});

export const {
    updatedSingleData,
    updatedSingleDataSuccess,
    updatedSingleDataFailure,
    clearUpdatedSingleData,
} = updatedSingleDataSlice.actions;

export default updatedSingleDataSlice.reducer;
