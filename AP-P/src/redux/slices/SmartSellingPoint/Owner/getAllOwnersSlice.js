import { createSlice } from '@reduxjs/toolkit'

export const getAllOwnersSlice = createSlice({
    name: 'getAllOwnersSlice', //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        getAllOwners: (state) => {
            state.loading = true
        },
        getAllOwnersSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        getAllOwnersFailure: (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.payload
        },
        clearGetAllOwners: (state, action) => {
            state.loading = false
            state.data = null
            state.error = null
        },
    },
})

export const {
    getAllOwners,
    getAllOwnersSuccess,
    getAllOwnersFailure,
    clearGetAllOwners
} = getAllOwnersSlice.actions

export default getAllOwnersSlice.reducer