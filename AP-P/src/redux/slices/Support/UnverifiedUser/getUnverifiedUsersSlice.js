import { createSlice } from '@reduxjs/toolkit'

export const getUnverifiedUsersSlice = createSlice({
    name: 'getUnverifiedUsersSlice', //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        getUnverifiedUsers: (state) => {
            state.loading = true
        },
        getUnverifiedUsersSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        getUnverifiedUsersFailure: (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.payload
        },
        clearGetUnverifiedUsers: (state, action) => {
            state.loading = false
            state.data = null
            state.error = null
        },
    },
})

export const {
    getUnverifiedUsers,
    getUnverifiedUsersSuccess,
    getUnverifiedUsersFailure,
    clearGetUnverifiedUsers
} = getUnverifiedUsersSlice.actions

export default getUnverifiedUsersSlice.reducer