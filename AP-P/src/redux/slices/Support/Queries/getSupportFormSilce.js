import { createSlice } from '@reduxjs/toolkit'

export const getSupportFormSilce = createSlice({
    name: 'getSupportFormSilce', //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        getSupportForm: (state) => {
            state.loading = true
        },
        getSupportFormSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        getSupportFormFailure: (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.payload
        },
        clearGetSupportForm: (state, action) => {
            state.loading = false
            state.data = null
            state.error = null
        },
    },
})

export const {
    getSupportForm,
    getSupportFormSuccess,
    getSupportFormFailure,
    clearGetSupportForm
} = getSupportFormSilce.actions

export default getSupportFormSilce.reducer