import { createSlice } from '@reduxjs/toolkit'

export const getAllAddOnsSlice = createSlice({
    name: 'getAllAddOnsSlice', //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        getAllAddOns: (state) => {
            state.loading = true
        },
        getAllAddOnsSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        getAllAddOnsFailure: (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.payload
        },
        clearGetAllAddOns: (state, action) => {
            state.loading = false
            state.data = null
            state.error = null
        },
    },
})

export const {
    getAllAddOns,
    getAllAddOnsSuccess,
    getAllAddOnsFailure,
    clearGetAllAddOns
} = getAllAddOnsSlice.actions

export default getAllAddOnsSlice.reducer