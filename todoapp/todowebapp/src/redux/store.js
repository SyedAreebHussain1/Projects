import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createTodoListSlice from "./slice/todo/createTodoListSlice";
// import getTodoListSlice from "./slice/todo/getTodoListSlice";
const rootSlices = combineReducers({
    todoListSlice: createTodoListSlice,
    // getTodoListSlice: getTodoListSlice,
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