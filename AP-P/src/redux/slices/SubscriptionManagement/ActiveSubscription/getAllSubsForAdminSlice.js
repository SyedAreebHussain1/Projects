import { createSlice } from '@reduxjs/toolkit'

export const getAllSubsForAdminSlice = createSlice({
    name: 'getAllSubsForAdminSlice', //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        getAllSubsForAdmin: (state) => {
            state.loading = true
        },
        getAllSubsForAdminSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        getAllSubsForAdminFailure: (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.payload
        },
        clearGetAllSubsForAdmin: (state, action) => {
            state.loading = false
            state.data = null
            state.error = null
        },
    },
})

export const {
    getAllSubsForAdmin,
    getAllSubsForAdminSuccess,
    getAllSubsForAdminFailure,
    clearGetAllSubsForAdmin
} = getAllSubsForAdminSlice.actions

export default getAllSubsForAdminSlice.reducer