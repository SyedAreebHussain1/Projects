import { createSlice } from '@reduxjs/toolkit'

export const getPwPackagesSlice = createSlice({
    name: 'getPwPackagesSlice', //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        getPwPackages: (state) => {
            state.loading = true
        },
        getPwPackagesSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        getPwPackagesFailure: (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.payload
        },
        clearGetPwPackages: (state, action) => {
            state.loading = false
            state.data = null
            state.error = null
        },
    },
})

export const {
    getPwPackages,
    getPwPackagesSuccess,
    getPwPackagesFailure,
    clearGetPwPackages
} = getPwPackagesSlice.actions

export default getPwPackagesSlice.reducer