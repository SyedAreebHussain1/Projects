import { createSlice } from '@reduxjs/toolkit'

export const getProjectsSlice = createSlice({
    name: 'getProjectsSlice', //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        getProjects: (state) => {
            state.loading = true
        },
        getProjectsSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        getProjectsFailure: (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.payload
        },
        clearGetProjects: (state, action) => {
            state.loading = false
            state.data = null
            state.error = null
        },
    },
})

export const {
    getProjects,
    getProjectsSuccess,
    getProjectsFailure,
    clearGetProjects
} = getProjectsSlice.actions

export default getProjectsSlice.reducer