import { createSlice } from '@reduxjs/toolkit'

export const getUsersInfoMonthlySlice = createSlice({
    name: 'getUsersInfoMonthlySlice', //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        getUsersInfoMonthly: (state) => {
            state.loading = true
        },
        getUsersInfoMonthlySuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        getUsersInfoMonthlyFailure: (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.payload
        },
    },
})

export const {
    getUsersInfoMonthly,
    getUsersInfoMonthlySuccess,
    getUsersInfoMonthlyFailure,
} = getUsersInfoMonthlySlice.actions

export default getUsersInfoMonthlySlice.reducer
