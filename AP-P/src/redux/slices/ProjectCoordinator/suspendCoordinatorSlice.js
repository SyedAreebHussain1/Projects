import { createSlice } from '@reduxjs/toolkit'

export const suspendCoordinatorSlice = createSlice({
    name: 'suspendCoordinatorSlice', //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        suspendCoordinator: (state) => {
            state.loading = true
        },
        suspendCoordinatorSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        suspendCoordinatorFailure: (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.payload
        },
        clearSuspendCoordinator: (state, action) => {
            state.loading = false
            state.data = null
            state.error = null
        },
    },
})

export const {
    suspendCoordinator,
    suspendCoordinatorSuccess,
    suspendCoordinatorFailure,
    clearSuspendCoordinator
} = suspendCoordinatorSlice.actions

export default suspendCoordinatorSlice.reducer