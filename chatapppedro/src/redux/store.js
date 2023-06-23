import { combineReducers, configureStore } from "@reduxjs/toolkit";
import googleAuthSlice from "./slices/Auth/googleAuthSlice";
import signOutSlice from "./slices/Auth/signOutSlice";
const rootSlices = combineReducers({
    googleAuthS: googleAuthSlice,
    signOutS: signOutSlice,
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