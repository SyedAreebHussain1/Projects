import { createSlice } from '@reduxjs/toolkit'

export const investorAuthSlice = createSlice({
    name: 'investorAuthSlice', //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        investorAuth: (state) => {
            state.loading = true
        },
        investorAuthSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        investorAuthFailure: (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.payload
        },
        clearInvestorAuth: (state, action) => {
            state.loading = false
            state.data = null
            state.error = null
        },
    },
})

export const {
    investorAuth,
    investorAuthSuccess,
    investorAuthFailure,
    clearInvestorAuth
} = investorAuthSlice.actions

export default investorAuthSlice.reducer