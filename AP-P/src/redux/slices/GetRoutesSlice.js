import { createSlice } from '@reduxjs/toolkit'

export const GetRoutesSlice = createSlice({
    name: 'GetRoutesSlice', //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        getRoutes: (state) => {
            state.loading = true
        },
        getRoutesSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        getRoutesFailure: (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.payload
        },
    },
})

export const { getRoutes, getRoutesSuccess, getRoutesFailure } =
    GetRoutesSlice.actions

export default GetRoutesSlice.reducer