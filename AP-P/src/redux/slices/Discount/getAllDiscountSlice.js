import { createSlice } from '@reduxjs/toolkit'

export const getAllDiscountSlice = createSlice({
    name: 'getAllDiscountSlice', //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        getAllDiscount: (state) => {
            state.loading = true
        },
        getAllDiscountSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        getAllDiscountFailure: (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.payload
        },
    },
})

export const {
    getAllDiscount,
    getAllDiscountSuccess,
    getAllDiscountFailure
} = getAllDiscountSlice.actions

export default getAllDiscountSlice.reducer
