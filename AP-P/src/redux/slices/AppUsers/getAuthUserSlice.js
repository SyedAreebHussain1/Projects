import { createSlice } from '@reduxjs/toolkit'

export const getAuthUserSlice = createSlice({
    name: 'getAuthUserSlice', //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        getAuthUser: (state) => {
            state.loading = true
        },
        getAuthUserSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        getAuthUserFailure: (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.payload
        },
        clearGetAuthUser: (state, action) => {
            state.loading = false
            state.data = null
            state.error = null
        },
    },
})

export const {
    getAuthUser, getAuthUserSuccess, getAuthUserFailure, clearGetAuthUser
} = getAuthUserSlice.actions

export default getAuthUserSlice.reducer
