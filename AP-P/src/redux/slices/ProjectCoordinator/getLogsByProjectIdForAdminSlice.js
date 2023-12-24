import { createSlice } from '@reduxjs/toolkit'

export const getLogsByProjectIdForAdminSlice = createSlice({
    name: 'getLogsByProjectIdForAdminSlice', //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        getLogsByProjectIdForAdmin: (state) => {
            state.loading = true
        },
        getLogsByProjectIdForAdminSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        getLogsByProjectIdForAdminFailure: (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.payload
        },
        clearGetLogsByProjectIdForAdmin: (state, action) => {
            state.loading = false
            state.data = null
            state.error = null
        },
    },
})

export const {
    getLogsByProjectIdForAdmin,
    getLogsByProjectIdForAdminSuccess,
    getLogsByProjectIdForAdminFailure,
    clearGetLogsByProjectIdForAdmin
} = getLogsByProjectIdForAdminSlice.actions

export default getLogsByProjectIdForAdminSlice.reducer