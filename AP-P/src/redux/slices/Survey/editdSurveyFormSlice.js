import { createSlice } from '@reduxjs/toolkit'

export const editdSurveyFormSlice = createSlice({
    name: 'editdSurveyFormSlice', //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        editdSurveyForm: (state) => {
            state.loading = true
        },
        editdSurveyFormSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        editdSurveyFormFailure: (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.payload
        },
        clearEditdSurveyForm: (state, action) => {
            state.loading = false
            state.data = null
            state.error = null
        },
    },
})

export const {
    editdSurveyForm,
    editdSurveyFormSuccess,
    editdSurveyFormFailure,
    clearEditdSurveyForm
} = editdSurveyFormSlice.actions

export default editdSurveyFormSlice.reducer