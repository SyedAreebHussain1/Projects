import { createSlice } from '@reduxjs/toolkit'

export const getUserManagementListSlice = createSlice({
    name: 'getUserManagementListSlice', //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        getUserManagementList: (state) => {
            state.loading = true
        },
        getUserManagementListSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        getUserManagementListFailure: (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.payload
        },
    },
})

export const {
    getUserManagementList,
    getUserManagementListSuccess,
    getUserManagementListFailure
} = getUserManagementListSlice.actions

export default getUserManagementListSlice.reducer