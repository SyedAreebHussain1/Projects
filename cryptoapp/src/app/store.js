import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from '../services/cryptoApi'
import { cryptoNewsApi } from '../services/cryptoNewsApi'
// console.log(cryptoNewsApi.reducer)
export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cryptoNewsApi.middleware, cryptoApi.middleware),
    // console.log(reducer)
})
