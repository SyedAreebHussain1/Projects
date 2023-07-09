import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createCrudTwoSlice from "./slice/CrudTwo/createCrudTwoSlice";
import getReadListSlice from "./slice/CrudTwo/getReadListSlice";
import deleteSingleDataSlice from "./slice/CrudTwo/deleteSingleDataSlice";
import updatedSingleDataSlice from "./slice/CrudTwo/updatedSingleDataSlice";
const rootSlices = combineReducers({
    todoSlice: createCrudTwoSlice,
    getReadListSlice: getReadListSlice,
    deleteSingleDataSlice: deleteSingleDataSlice,
    updatedSingleDataSlice: updatedSingleDataSlice,
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
