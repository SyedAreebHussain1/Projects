import { createSlice } from '@reduxjs/toolkit'

export const getPropertiesOverviewSlice = createSlice({
    name: 'getPropertiesOverviewSlice', //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        getPropertiesOverview: (state) => {
            state.loading = true
        },
        getPropertiesOverviewSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        getPropertiesOverviewFailure: (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.payload
        },
    },
})

export const {
    getPropertiesOverview,
    getPropertiesOverviewSuccess,
    getPropertiesOverviewFailure,
} = getPropertiesOverviewSlice.actions

export default getPropertiesOverviewSlice.reducer
