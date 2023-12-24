import { createSlice } from '@reduxjs/toolkit'

export const getAllAuthUserSlice = createSlice({
    name: 'getAllAuthUserSlice', //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        getAllAuthUser: (state) => {
            state.loading = true
        },
        getAllAuthUserSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        getAllAuthUserFailure: (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.payload
        },
    },
})

export const {
    getAllAuthUser, getAllAuthUserSuccess, getAllAuthUserFailure
} = getAllAuthUserSlice.actions

export default getAllAuthUserSlice.reducer
