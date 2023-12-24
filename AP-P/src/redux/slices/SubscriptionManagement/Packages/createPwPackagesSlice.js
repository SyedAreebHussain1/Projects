import { createSlice } from '@reduxjs/toolkit'

export const createPwPackagesSlice = createSlice({
    name: 'createPwPackagesSlice', //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        createPwPackages: (state) => {
            state.loading = true
        },
        createPwPackagesSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        createPwPackagesFailure: (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.payload
        },
        clearCreatePwPackages: (state, action) => {
            state.loading = false
            state.data = null
            state.error = null
        },
    },
})

export const {
    createPwPackages,
    createPwPackagesSuccess,
    createPwPackagesFailure,
    clearCreatePwPackages
} = createPwPackagesSlice.actions

export default createPwPackagesSlice.reducer