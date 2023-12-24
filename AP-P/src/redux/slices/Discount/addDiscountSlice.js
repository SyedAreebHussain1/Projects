import { createSlice } from '@reduxjs/toolkit'

export const addDiscountSlice = createSlice({
    name: 'addDiscountSlice', //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        addDiscount: (state) => {
            state.loading = true
        },
        addDiscountSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        addDiscountFailure: (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.payload
        },
    },
})

export const {
    addDiscount,
    addDiscountSuccess,
    addDiscountFailure
} = addDiscountSlice.actions

export default addDiscountSlice.reducer
