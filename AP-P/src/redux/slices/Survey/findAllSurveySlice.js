import { createSlice } from '@reduxjs/toolkit'

export const findAllSurveySlice = createSlice({
    name: 'findAllSurveySlice', //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        findAllSurvey: (state) => {
            state.loading = true
        },
        findAllSurveySuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        findAllSurveyFailure: (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.payload
        },
        clearFindAllSurvey: (state, action) => {
            state.loading = false
            state.data = null
            state.error = null
        },
    },
})

export const {
    findAllSurvey,
    findAllSurveySuccess,
    findAllSurveyFailure,
    clearFindAllSurvey
} = findAllSurveySlice.actions

export default findAllSurveySlice.reducer