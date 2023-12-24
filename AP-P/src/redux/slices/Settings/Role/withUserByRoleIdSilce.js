import { createSlice } from '@reduxjs/toolkit'

export const withUserByRoleIdSilce = createSlice({
    name: 'withUserByRoleIdSilce', //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        withUserByRoleId: (state) => {
            state.loading = true
        },
        withUserByRoleIdSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        withUserByRoleIdFailure: (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.payload
        },
    },
})

export const {
    withUserByRoleId,
    withUserByRoleIdSuccess,
    withUserByRoleIdFailure
} = withUserByRoleIdSilce.actions

export default withUserByRoleIdSilce.reducer