import { createSlice } from '@reduxjs/toolkit'

export const pcSignUpSlice = createSlice({
    name: 'pcSignUpSlice', //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        pcSignUp: (state) => {
            state.loading = true
        },
        pcSignUpSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        pcSignUpFailure: (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.payload
        },
        clearPcSignUp: (state, action) => {
            state.loading = false
            state.data = null
            state.error = null
        },
    },
})

export const {
    pcSignUp,
    pcSignUpSuccess,
    pcSignUpFailure,
    clearPcSignUp
} = pcSignUpSlice.actions

export default pcSignUpSlice.reducer
