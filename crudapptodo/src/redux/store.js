import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createCrudTwoSlice from "./slice/CrudTwo/createCrudTwoSlice";
import getReadListSlice from "./slice/CrudTwo/getReadListSlice";
import deleteSingleDataSlice from "./slice/CrudTwo/deleteSingleDataSlice";
const rootSlices = combineReducers({
    todoSlice: createCrudTwoSlice,
    getReadListSlice: getReadListSlice,
    deleteSingleDataSlice: deleteSingleDataSlice,
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
