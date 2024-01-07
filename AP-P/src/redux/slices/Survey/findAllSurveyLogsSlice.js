
import { createSlice } from '@reduxjs/toolkit'

export const findAllSurveyLogsSlice = createSlice({
    name: 'findAllSurveyLogsSlice', //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        findAllSurveyLogs: (state) => {
            state.loading = true
        },
        findAllSurveyLogsSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        findAllSurveyLogsFailure: (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.payload
        },
        clearFindAllSurveyLogs: (state, action) => {
            state.loading = false
            state.data = null
            state.error = null
        },
    },
})

export const {
    findAllSurveyLogs,
    findAllSurveyLogsSuccess,
    findAllSurveyLogsFailure,
    clearFindAllSurveyLogs
} = findAllSurveyLogsSlice.actions

export default findAllSurveyLogsSlice.reducer