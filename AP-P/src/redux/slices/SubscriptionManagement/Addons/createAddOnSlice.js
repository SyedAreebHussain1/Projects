import { createSlice } from '@reduxjs/toolkit'

export const createAddOnSlice = createSlice({
    name: 'createAddOnSlice', //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        createAddOn: (state) => {
            state.loading = true
        },
        createAddOnSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        createAddOnFailure: (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.payload
        },
        clearCreateAddOn: (state, action) => {
            state.loading = false
            state.data = null
            state.error = null
        },
    },
})

export const {
    createAddOn,
    createAddOnSuccess,
    createAddOnFailure,
    clearCreateAddOn
} = createAddOnSlice.actions

export default createAddOnSlice.reducer