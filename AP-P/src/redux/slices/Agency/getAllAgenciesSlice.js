import { createSlice } from '@reduxjs/toolkit'

export const getAllAgenciesSlice = createSlice({
    name: 'getAllAgenciesSlice', //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        getAllAgencies: (state) => {
            state.loading = true
        },
        getAllAgenciesSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        getAllAgenciesFailure: (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.payload
        },
    },
})

export const {
    getAllAgencies, getAllAgenciesSuccess, getAllAgenciesFailure
} = getAllAgenciesSlice.actions

export default getAllAgenciesSlice.reducer
