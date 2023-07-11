import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createTodoListSlice from "./slice/todo/createTodoListSlice";
const rootSlices = combineReducers({
    todoListSlice: createTodoListSlice,
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