import { createSlice } from '@reduxjs/toolkit'

export const uploadAdvertisementPackageSlice = createSlice({
    name: 'uploadAdvertisementPackageSlice', //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        uploadAdvertisementPackage: (state) => {
            state.loading = true
        },
        uploadAdvertisementPackageSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        uploadAdvertisementPackageFailure: (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.payload
        },
        clearUploadAdvertisementPackage: (state, action) => {
            state.loading = false
            state.data = null
            state.error = null
        },
    },
})

export const {
    uploadAdvertisementPackage,
    uploadAdvertisementPackageSuccess,
    uploadAdvertisementPackageFailure,
    clearUploadAdvertisementPackage
} = uploadAdvertisementPackageSlice.actions

export default uploadAdvertisementPackageSlice.reducer
