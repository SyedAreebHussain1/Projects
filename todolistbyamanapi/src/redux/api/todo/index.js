import { API } from "../../../config/apiEndpoint";
import axios from "axios";
import { deleteRequest, getRequest, postRequest } from "../../../utils/baseApi";
import { createTodoList, createTodoListSuccess, createTodoListFailure } from "../../slice/todo/createTodoListSlice";
import { getTodoList, getTodoListSuccess, getTodoListFailure } from '../../slice/todo/getTodoListSlice'
import { deleteSingleTodo, deleteSingleTodoSuccess, deleteSingleTodoFailure } from "../../slice/todo/deleteSingleTodoSlice"
import {
    updatedSingleTodo,
    updatedSingleTodoSuccess,
    updatedSingleTodoFailure,
} from "../../slice/todo/updatedSingleTodoSlice"


// Post todo item
export async function createTodoListApi(dispatch, data, onSuccess, onFailure) {
    dispatch(createTodoList())
    try {
        let res = await postRequest(API.todoList, data);
        dispatch(createTodoListSuccess(res.data));
        onSuccess(res);
    } catch (error) {
        onFailure(error)
        dispatch(createTodoListFailure(error.response.data));
    }
}

// Get todo list
export async function getTodoListApi(dispatch) {
    dispatch(getTodoList())
    try {
        let res = await getRequest(API.todoList);
        dispatch(getTodoListSuccess(res.data));
    } catch (error) {
        dispatch(getTodoListFailure(error.response.data));
    }
}

// Edit single todo
export async function updatedSingleTodoApi(dispatch, id, body, onSuccess, onFailure) {
    dispatch(updatedSingleTodo());
    try {
        let res = await axios.put(`${API.todoList}/${id}`, body);
        dispatch(updatedSingleTodoSuccess(res.data));
        // successMessage(res.data.message);
        onSuccess(res.data)
    } catch (error) {
        // getError(error);
        onFailure(error)
        dispatch(updatedSingleTodoFailure(error?.response));
    }
}

// Delete single todo
export async function deleteSingleTodoApi(dispatch, id, onSuccess, onFailure) {
    dispatch(deleteSingleTodo())
    try {
        let res = await deleteRequest(`${API.todoList}/${id}`);
        dispatch(deleteSingleTodoSuccess(res.data));
        onSuccess(res);
    } catch (error) {
        onFailure(error)
        dispatch(deleteSingleTodoFailure(error.response.data));
    }
}

