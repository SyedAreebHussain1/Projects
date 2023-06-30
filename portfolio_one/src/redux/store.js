import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contactUsSlice from "./slices/contactus/contactUsSlice";
const rootSlices = combineReducers({
    contactUsSlice: contactUsSlice,
})
const store = configureStore({
    middleware: (serialData) =>
        serialData({
            serializableCheck: false,
        }),
    // non serial data issue fixed
    reducer: rootSlices,
});
export const resetState = () => {
    return rootSlices(undefined, {});
};

export default store;