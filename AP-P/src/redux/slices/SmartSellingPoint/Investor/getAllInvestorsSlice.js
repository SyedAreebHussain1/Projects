import { createSlice } from '@reduxjs/toolkit'

export const getAllInvestorsSlice = createSlice({
    name: 'getAllInvestorsSlice', //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        getAllInvestors: (state) => {
            state.loading = true
        },
        getAllInvestorsSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        getAllInvestorsFailure: (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.payload
        },
        clearGetAllInvestors: (state, action) => {
            state.loading = false
            state.data = null
            state.error = null
        },
    },
})

export const {
    getAllInvestors,
    getAllInvestorsSuccess,
    getAllInvestorsFailure,
    clearGetAllInvestors
} = getAllInvestorsSlice.actions

export default getAllInvestorsSlice.reducer