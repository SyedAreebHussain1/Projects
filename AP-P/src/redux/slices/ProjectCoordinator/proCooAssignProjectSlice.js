import { createSlice } from '@reduxjs/toolkit'

export const proCooAssignProjectSlice = createSlice({
    name: 'proCooAssignProjectSlice', //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        proCooAssignProject: (state) => {
            state.loading = true
        },
        proCooAssignProjectSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        proCooAssignProjectFailure: (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.payload
        },
        clearProCooAssignProject: (state, action) => {
            state.loading = false
            state.data = null
            state.error = null
        },
    },
})

export const {
    proCooAssignProject,
    proCooAssignProjectSuccess,
    proCooAssignProjectFailure,
    clearProCooAssignProject
} = proCooAssignProjectSlice.actions

export default proCooAssignProjectSlice.reducer
