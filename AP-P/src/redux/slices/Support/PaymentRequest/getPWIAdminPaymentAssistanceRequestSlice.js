import { createSlice } from '@reduxjs/toolkit'
export const getPWIAdminPaymentAssistanceRequestSlice = createSlice({
    name: 'getPWIAdminPaymentAssistanceRequestSlice', //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        getPWIAdminPaymentAssistanceRequest: (state) => {
            state.loading = true
        },
        getPWIAdminPaymentAssistanceRequestSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        getPWIAdminPaymentAssistanceRequestFailure: (state, action) => {
            state.loading = false
            state.data = null
            state.error = action.payload
        },
        // clearGetPWPAdminPaymentAssistanceRequest: (state) => {
        //   state.data = null;
        //   state.loading = false;
        //   state.error = null;
        // },
    },
})

export const {
    getPWIAdminPaymentAssistanceRequest,
    getPWIAdminPaymentAssistanceRequestSuccess,
    getPWIAdminPaymentAssistanceRequestFailure,
} = getPWIAdminPaymentAssistanceRequestSlice.actions

export default getPWIAdminPaymentAssistanceRequestSlice.reducer
