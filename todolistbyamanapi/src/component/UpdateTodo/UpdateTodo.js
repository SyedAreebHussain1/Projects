import React from 'react'
import EditModal from './helpers/EditModal'

const UpdateTodo = ({ show, onHide, data }) => {
    return <EditModal show={show} onHide={onHide} data={data} />
}

export default UpdateTodo