import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createCrudTwoSlice from "./slice/CrudTwo/createCrudTwoSlice";
const rootSlices = combineReducers({
    todoSlice: createCrudTwoSlice,
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
