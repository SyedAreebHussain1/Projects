import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSignInWithGoogleSlice from "./slice/auth/createSignInWithGoogleSlice";
import getRandomContentSlice from "./slice/random/getRandomContentSlice";
import signOutWithGoogleSlice from "./slice/auth/signOutWithGoogleSlice";
const rootSlices = combineReducers({
    getRandomContentSlice: getRandomContentSlice,
    createSignInWithGoogleSlice: createSignInWithGoogleSlice,
    signOutWithGoogleSlice: signOutWithGoogleSlice,
});

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