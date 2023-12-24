import { createSlice } from '@reduxjs/toolkit'

export const uploadAdvertisementDiscountSlice = createSlice({
    name: 'uploadAdvertisementDiscountSlice', //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        uploadAdvertisementDiscount: (state) => {
            state.loading = true
        },
        uploadAdvertisementDiscountSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        uploadAdvertisementDiscountFailure: (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.payload
        },
        clearUploadAdvertisementDiscount: (state, action) => {
            state.loading = false
            state.data = null
            state.error = null
        },
    },
})

export const {
    uploadAdvertisementDiscount,
    uploadAdvertisementDiscountSuccess,
    uploadAdvertisementDiscountFailure,
    clearUploadAdvertisementDiscount
} = uploadAdvertisementDiscountSlice.actions

export default uploadAdvertisementDiscountSlice.reducer
