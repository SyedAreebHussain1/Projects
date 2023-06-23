import { createSlice } from "@reduxjs/toolkit";
export const googleAuthSlice = createSlice({
  name: "googleAuthSlice", //it doen't matter which name you are defining here
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    googleAuth: (state) => {
      state.loading = true;
    },
    googleAuthSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    googleAuthFailure: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    cleargoogleAuth: (state) => {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  googleAuth,
  googleAuthSuccess,
  googleAuthFailure,
  cleargoogleAuth,
} = googleAuthSlice.actions;

export default googleAuthSlice.reducer;
