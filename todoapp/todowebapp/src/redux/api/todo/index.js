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

export function createTodoListFun(dispatch, data, onSuccess, onFailure) {
    dispatch(createTodoList())

    let arr = DataBase.push(data)
    console.log(arr)
    try {
        let res = [...DataBase, data]
        dispatch(createTodoListSuccess(res))
        onSuccess(res)
    } catch (error) {
        dispatch(createTodoListFailure(error.response))
        onFailure(error)
    }
}

