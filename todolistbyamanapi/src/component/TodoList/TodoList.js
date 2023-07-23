import React, { useEffect } from 'react'
import Card from './helpers/Card'
import { getTodoListApi } from '../../redux/api/todo'
import { useDispatch, useSelector } from 'react-redux'

const TodoList = () => {
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     getTodoListApi(dispatch)
    // }, [dispatch])
    return <Card />
}

export default TodoList