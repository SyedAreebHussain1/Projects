import { createSlice } from '@reduxjs/toolkit'
export const getPWPAdminPaymentAssistanceRequestSlice = createSlice({
    name: 'getPWPAdminPaymentAssistanceRequestSlice', //it doen't matter which name you are defining here
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        getPWPAdminPaymentAssistanceRequest: (state) => {
            state.loading = true
        },
        getPWPAdminPaymentAssistanceRequestSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
            state.error = null
        },
        getPWPAdminPaymentAssistanceRequestFailure: (state, action) => {
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
    getPWPAdminPaymentAssistanceRequest,
    getPWPAdminPaymentAssistanceRequestSuccess,
    getPWPAdminPaymentAssistanceRequestFailure,
} = getPWPAdminPaymentAssistanceRequestSlice.actions

export default getPWPAdminPaymentAssistanceRequestSlice.reducer
