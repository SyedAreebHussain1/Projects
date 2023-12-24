import { createSlice } from '@reduxjs/toolkit'

export const deleteAddOnSlice = createSlice({
    name: 'deleteAddOnSlice', //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        deleteAddOn: (state) => {
            state.loading = true
        },
        deleteAddOnSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        deleteAddOnFailure: (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.payload
        },
        clearDeleteAddOn: (state, action) => {
            state.loading = false
            state.data = null
            state.error = null
        },
    },
})

export const {
    deleteAddOn,
    deleteAddOnSuccess,
    deleteAddOnFailure,
    clearDeleteAddOn
} = deleteAddOnSlice.actions

export default deleteAddOnSlice.reducer