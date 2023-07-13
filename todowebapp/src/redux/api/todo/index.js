import { API } from "../../../config/apiEndpoint";
import axios from "axios"
import { createTodoList, createTodoListSuccess, createTodoListFailure } from "../../slice/todo/createTodoListSlice";
import {
    getTodoList,
    getTodoListSuccess,
    getTodoListFailure,
    clearGetTodoList,
} from '../../slice/todo/getTodoListSlice'
import DataBase from "../../../utilies/data";
// export async function createTodoListApi(dispatch, data, onSuccess, onFailure) {
//     console.log(data)
//     dispatch(createTodoList())
//     try {
//         let res = await axios.post(`http://localhost:5000/${API.todoApi.todoList}`, 
//             data)
//         dispatch(createTodoListSuccess(res))
//         onSuccess(res)
//     } catch (error) {
//         dispatch(createTodoListFailure(error.response));
//         onFailure(error)
//     }
// }

export async function createTodoListFun(dispatch, data, onSuccess, onFailure) {
    dispatch(createTodoList())
    try {
        let res = await DataBase.push(data)
        createTodoListSuccess(res)
        onSuccess(res)
    } catch (error) {
        createTodoListFailure(error.response)
        onFailure(error)
    }
}

export async function getTodoListFun(dispatch, onSuccess, onFailure) {
    dispatch(getTodoList())
    try {
        let res = await DataBase
        getTodoListSuccess(res)
        onSuccess(res)
    } catch (error) {
        getTodoListFailure(error.response)
        onFailure(error)
    }
}
