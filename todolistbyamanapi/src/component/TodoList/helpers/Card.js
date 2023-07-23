import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import Moment from 'react-moment';
import moment from 'moment'
import { deleteSingleTodoApi, getTodoListApi } from '../../../redux/api/todo'
import UpdateTodo from '../../UpdateTodo/UpdateTodo'

const Card = () => {
    const dispatch = useDispatch()
    const [modalShowUpdate, setModalShowUpdate] = useState(false);
    const [dataUpdate, setDataUpdate] = useState();
    const { data, loading } = useSelector((state) => state.getTodoListSlice)
    const todoListSlice = useSelector((state) => state.todoListSlice)
    useEffect(() => {
        getTodoListApi(dispatch)
    }, [todoListSlice.data])



    function handleDelete(id) {
        if (id) {
            deleteSingleTodoApi(dispatch, id, onSuccess, onFailure)
        }
    }
    function handleUpdate() {

    }

    function onSuccess(msg) {
        if (msg?.data) {
            getTodoListApi(dispatch)
        }
    }
    function onFailure(msg) { }
    if (loading) {
        return <h3>Loading...</h3>
    }
    return <div style={{ display: 'flex', justifyContent: "center", marginTop: "12px" }}> <div className="card">
        <UpdateTodo
            show={modalShowUpdate}
            onHide={() => setModalShowUpdate(false)}
            data={dataUpdate}
        />
        {data?.message && data?.todoLists?.map((item, i) => {
            // console.log(item)
            return <> <div key={i} className="container p-[10px]" >
                <div className='flex' style={{ justifyContent: "space-between" }}><h4><b>{item?.title}</b> </h4>  <b>{moment(item?.createdBy).format('MMM/DD/YYYY h:mmA')}</b><div onClick={() => [setModalShowUpdate(true), setDataUpdate(item)]} className='cursor-pointer'>Update</div> <div onClick={() => handleDelete(item?._id)} className='cursor-pointer'>X</div> </div>
                <p>{item?.description}</p>
            </div>
                <hr />
                <hr />
            </>
        })
        }
    </div>
    </div>
}

export default Card