import { createSlice } from '@reduxjs/toolkit'

export const updateAddOnSlice = createSlice({
    name: 'updateAddOnSlice', //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        updateAddOn: (state) => {
            state.loading = true
        },
        updateAddOnSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        updateAddOnFailure: (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.payload
        },
        clearUpdateAddOn: (state, action) => {
            state.loading = false
            state.data = null
            state.error = null
        },
    },
})

export const {
    updateAddOn,
    updateAddOnSuccess,
    updateAddOnFailure,
    clearUpdateAddOn
} = updateAddOnSlice.actions

export default updateAddOnSlice.reducer