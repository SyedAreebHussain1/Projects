import { createSlice } from '@reduxjs/toolkit'

export const editAdminUsersRoleSlice = createSlice({
    name: 'editAdminUsersRoleSlice', //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        editAdminUsersRole: (state) => {
            state.loading = true
        },
        editAdminUsersRoleSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        editAdminUsersRoleFailure: (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.payload
        },
    },
})

export const {
    editAdminUsersRole,
    editAdminUsersRoleSuccess,
    editAdminUsersRoleFailure
} = editAdminUsersRoleSlice.actions

export default editAdminUsersRoleSlice.reducer