import { createSlice } from '@reduxjs/toolkit'

export const getReferralSlice = createSlice({
    name: 'getReferralSlice', //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        getReferral: (state) => {
            state.loading = true
        },
        getReferralSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        getReferralFailure: (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.payload
        },
        clearGetReferral: (state, action) => {
            state.loading = false
            state.data = null
            state.error = null
        },
    },
})

export const {
    getReferral,
    getReferralSuccess,
    getReferralFailure,
    clearGetReferral
} = getReferralSlice.actions

export default getReferralSlice.reducer