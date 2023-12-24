import { createSlice } from '@reduxjs/toolkit'

export const deleteDiscountDataByIdSlice = createSlice({
    name: 'deleteDiscountDataByIdSlice', //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        deleteDiscountDataById: (state) => {
            state.loading = true
        },
        deleteDiscountDataByIdSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        deleteDiscountDataByIdFailure: (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.payload
        },
    },
})

export const {
    deleteDiscountDataById,
    deleteDiscountDataByIdSuccess,
    deleteDiscountDataByIdFailure,
} = deleteDiscountDataByIdSlice.actions

export default deleteDiscountDataByIdSlice.reducer
