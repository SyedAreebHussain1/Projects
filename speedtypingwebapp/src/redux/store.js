import { combineReducers, configureStore } from "@reduxjs/toolkit";
import getRandomContentSlice from "./slice/random/getRandomContentSlice";
const rootSlices = combineReducers({
    getRandomContentSlice: getRandomContentSlice,
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