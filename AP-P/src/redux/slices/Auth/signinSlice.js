import { createSlice } from '@reduxjs/toolkit'

export const signinSlice = createSlice({
    name: 'signinSlice', //it doen't matter which name you are defining here
    initialState: {
        userData: null,
        isAuth: false,
        loading: false,
        error: null,
    },
    reducers: {
        signin: (state) => {
            state.loading = true
        },
        signinSuccess: (state, action) => {
            state.isAuth = true
            state.userData = action.payload
            state.loading = false
        },
        signinFailure: (state, action) => {
            state.loading = false
            state.isAuth = false
            state.userData = null
            state.error = action.payload
        },
    },
})

export const { signin, signinSuccess, signinFailure } = signinSlice.actions

export default signinSlice.reducer
