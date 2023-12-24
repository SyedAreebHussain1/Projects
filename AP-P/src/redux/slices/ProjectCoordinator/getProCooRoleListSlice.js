import { createSlice } from '@reduxjs/toolkit'

export const getProCooRoleListSlice = createSlice({
    name: 'getProCooRoleListSlice', //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        getProCooRoleList: (state) => {
            state.loading = true
        },
        getProCooRoleListSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        getProCooRoleListFailure: (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.payload
        },
        clearGetProCooRoleList: (state, action) => {
            state.loading = false
            state.data = null
            state.error = null
        },
    },
})

export const {
    getProCooRoleList,
    getProCooRoleListSuccess,
    getProCooRoleListFailure,
    clearGetProCooRoleList
} = getProCooRoleListSlice.actions

export default getProCooRoleListSlice.reducer