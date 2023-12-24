import { createSlice } from '@reduxjs/toolkit'

export const getProjectsForAssignSlice = createSlice({
    name: 'getProjectsForAssignSlice', //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        getProjectsForAssign: (state) => {
            state.loading = true
        },
        getProjectsForAssignSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        getProjectsForAssignFailure: (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.payload
        },
        clearGetProjectsForAssign: (state, action) => {
            state.loading = false
            state.data = null
            state.error = null
        },
    },
})

export const {
    getProjectsForAssign,
    getProjectsForAssignSuccess,
    getProjectsForAssignFailure,
    clearGetProjectsForAssign
} = getProjectsForAssignSlice.actions

export default getProjectsForAssignSlice.reducer