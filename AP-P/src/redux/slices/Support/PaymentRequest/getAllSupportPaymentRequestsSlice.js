import { createSlice } from '@reduxjs/toolkit'
export const getAllSupportPaymentRequestsSlice = createSlice({
    name: 'getAllSupportPaymentRequestsSlice', //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        getAllSupportPaymentRequests: (state) => {
            state.loading = true
        },
        getAllSupportPaymentRequestsSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        getAllSupportPaymentRequestsFailure: (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.payload
        },
        // clearGetAllSupportPaymentRequests: (state) => {
        //     state.data = null;
        //     state.loading = false;
        //     state.error = null;
        // },
    },
})

export const {
    getAllSupportPaymentRequests,
    getAllSupportPaymentRequestsSuccess,
    getAllSupportPaymentRequestsFailure,
} = getAllSupportPaymentRequestsSlice.actions

export default getAllSupportPaymentRequestsSlice.reducer
