import React, { useState } from 'react'
import PageHead from '../../utiles/PageHead'
import TodoList from './helpers/TodoList'
import AddTodo from './helpers/AddTodo'

const Todo = () => {
    let [data, setData] = useState([
        {
            id: "",
            detail: {
                title: "",
                description: "",
                time: "",
            }
        }
    ])
    return <>
        <PageHead mainHeading="Todo" />
        <AddTodo setData={setData} />
        <TodoList setData={setData} data={data} />
    </>
}

export default Todo