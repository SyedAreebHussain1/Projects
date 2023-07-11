import { API } from "../../../config/apiEndpoint";
import axios from "axios"
import { createTodoList, createTodoListSuccess, createTodoListFailure } from "../../slice/todo/createTodoListSlice";

export async function createTodoListApi(dispatch, data, onSuccess, onFailure) {
    console.log(data)
    dispatch(createTodoList())
    try {
        let res = await axios.post(`http://localhost:5000/${API.todoApi.todoList}`, 
            data)
        dispatch(createTodoListSuccess(res))
        onSuccess(res)
    } catch (error) {
        dispatch(createTodoListFailure(error.response));
        onFailure(error)
    }
}