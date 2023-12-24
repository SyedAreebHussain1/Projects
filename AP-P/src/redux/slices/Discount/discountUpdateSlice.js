import { createSlice } from '@reduxjs/toolkit'

export const discountUpdateSlice = createSlice({
    name: 'discountUpdateSlice', //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        discountUpdate: (state) => {
            state.loading = true
        },
        discountUpdateSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        discountUpdateFailure: (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.payload
        },
        clearDiscountUpdate: (state, action) => {
            state.loading = false
            state.data = null
            state.error = null
        },
    },
})

export const {
    discountUpdate,
    discountUpdateSuccess,
    discountUpdateFailure,
    clearDiscountUpdate
} = discountUpdateSlice.actions

export default discountUpdateSlice.reducer