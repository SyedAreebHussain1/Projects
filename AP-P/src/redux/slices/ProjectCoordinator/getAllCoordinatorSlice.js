import { createSlice } from '@reduxjs/toolkit'

export const getAllCoordinatorSlice = createSlice({
    name: 'getAllCoordinatorSlice', //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        getAllCoordinator: (state) => {
            state.loading = true
        },
        getAllCoordinatorSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        getAllCoordinatorFailure: (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.payload
        },
        clearGetAllCoordinator: (state, action) => {
            state.loading = false
            state.data = null
            state.error = null
        },
    },
})

export const {
    getAllCoordinator,
    getAllCoordinatorSuccess,
    getAllCoordinatorFailure,
    clearGetAllCoordinator
} = getAllCoordinatorSlice.actions

export default getAllCoordinatorSlice.reducer