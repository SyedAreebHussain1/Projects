import { createSlice } from '@reduxjs/toolkit'

export const getAgencyReviewByIdSlice = createSlice({
    name: 'getAgencyReviewByIdSlice', //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        getAgencyReviewById: (state) => {
            state.loading = true
        },
        getAgencyReviewByIdSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        getAgencyReviewByIdFailure: (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.payload
        },
    },
})

export const {
    getAgencyReviewById, getAgencyReviewByIdSuccess, getAgencyReviewByIdFailure
} = getAgencyReviewByIdSlice.actions

export default getAgencyReviewByIdSlice.reducer
