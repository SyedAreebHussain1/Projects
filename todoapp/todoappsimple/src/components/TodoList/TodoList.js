import React, { useEffect, useState } from 'react'

const TodoList = ({ data, stateRun, setStateRun, handleUpdate }) => {
    let [dataSource, setDataSource] = useState()
    let [deleteRun, setDeleteRun] = useState()
    useEffect(() => {
        if (stateRun) {
            setDataSource(data)
        }
    }, [stateRun, deleteRun])
    function hanldeDelete(item, id) {
        if (id) {
            data.splice(id, 1)
            setDeleteRun(item)
        }
    }
    return <>
        <section>
            <div className="list">
                <ul>{dataSource && dataSource.map((item, i) => {
                    return <li key={i}>
                        {item?.title ? <ul style={{ border: "1px solid red" }}>
                            {item?.title ? <li>Title: {item?.title}  <button onClick={() => hanldeDelete(item, i)}>Delete</button> <button onClick={() => handleUpdate(item, i)}>Update</button> </li> : ''}
                            {item?.subject ? <li>Subject:  {item?.subject}</li> : ''}
                            {item?.typeSelect ? <li>Option: {item?.typeSelect}</li> : ''}
                        </ul> : ''}
                    </li>
                })
                }</ul>
            </div>
            <div className="animation"></div>
        </section>
    </>
}

export default TodoList