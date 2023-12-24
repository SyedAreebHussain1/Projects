import { createSlice } from '@reduxjs/toolkit'

export const getAllAuthUserNoPaginationSlice = createSlice({
    name: 'getAllAuthUserNoPaginationSlice', //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        getAllAuthUserNoPagination: (state) => {
            state.loading = true
        },
        getAllAuthUserNoPaginationSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        getAllAuthUserNoPaginationFailure: (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.payload
        },
    },
})

export const {
    getAllAuthUserNoPagination, getAllAuthUserNoPaginationSuccess, getAllAuthUserNoPaginationFailure
} = getAllAuthUserNoPaginationSlice.actions

export default getAllAuthUserNoPaginationSlice.reducer
