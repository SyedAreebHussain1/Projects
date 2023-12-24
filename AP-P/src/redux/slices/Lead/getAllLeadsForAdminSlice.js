import { createSlice } from '@reduxjs/toolkit'

export const getAllLeadsForAdminSlice = createSlice({
    name: 'getAllLeadsForAdminSlice', //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        getAllLeadsForAdmin: (state) => {
            state.loading = true
        },
        getAllLeadsForAdminSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        getAllLeadsForAdminFailure: (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.payload
        },
        clearGetAllLeadsForAdmin: (state, action) => {
            state.loading = false
            state.data = null
            state.error = null
        },
    },
})

export const {
    getAllLeadsForAdmin,
    getAllLeadsForAdminSuccess,
    getAllLeadsForAdminFailure,
    clearGetAllLeadsForAdmin
} = getAllLeadsForAdminSlice.actions

export default getAllLeadsForAdminSlice.reducer