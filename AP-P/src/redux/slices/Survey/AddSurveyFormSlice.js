import { createSlice } from '@reduxjs/toolkit'

export const AddSurveyFormSlice = createSlice({
    name: 'AddSurveyFormSlice', //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        AddSurveyForm: (state) => {
            state.loading = true
        },
        AddSurveyFormSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        AddSurveyFormFailure: (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.payload
        },
        clearAddSurveyForm: (state, action) => {
            state.loading = false
            state.data = null
            state.error = null
        },
    },
})

export const {
    AddSurveyForm,
    AddSurveyFormSuccess,
    AddSurveyFormFailure,
    clearAddSurveyForm
} = AddSurveyFormSlice.actions

export default AddSurveyFormSlice.reducer