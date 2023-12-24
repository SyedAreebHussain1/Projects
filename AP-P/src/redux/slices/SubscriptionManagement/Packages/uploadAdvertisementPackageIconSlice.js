import { createSlice } from '@reduxjs/toolkit'

export const uploadAdvertisementPackageIconSlice = createSlice({
    name: 'uploadAdvertisementPackageIconSlice', //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        uploadAdvertisementPackageIcon: (state) => {
            state.loading = true
        },
        uploadAdvertisementPackageIconSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        uploadAdvertisementPackageIconFailure: (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.payload
        },
        clearUploadAdvertisementPackageIcon: (state, action) => {
            state.loading = false
            state.data = null
            state.error = null
        },
    },
})

export const {
    uploadAdvertisementPackageIcon,
    uploadAdvertisementPackageIconSuccess,
    uploadAdvertisementPackageIconFailure,
    clearUploadAdvertisementPackageIcon
} = uploadAdvertisementPackageIconSlice.actions

export default uploadAdvertisementPackageIconSlice.reducer
