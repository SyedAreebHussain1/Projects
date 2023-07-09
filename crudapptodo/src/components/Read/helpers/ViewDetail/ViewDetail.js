import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { MdDelete } from 'react-icons/md';
import CloseButton from 'react-bootstrap/CloseButton';
import { FaUserEdit } from 'react-icons/fa';
import { deleteSingleDataApi, getReadListApi } from '../../../../redux/api/CrudTwo';
import Updated from '../UpdateDetail/Updated';

const ViewDetail = (props) => {
    const { data, onHide, handleEditModal } = props
    const dispatch = useDispatch()
    const updatedSingleData = useSelector((state) => state.updatedSingleDataSlice)
    const [modalShowUpdate, setModalShowUpdate] = useState(false);
    const [dataInUpdate, setDataInUpdate] = useState()
    const iconStyle = {
        fontSize: '1rem',
        marginTop: '5px'
    };
    const handleDelete = (id) => {
        if (id) {
            deleteSingleDataApi(dispatch, id, onSuccess)
        }
    }
    function onSuccess() {
        onHide()
        getReadListApi(dispatch)
    }
    useEffect(() => {
        if (updatedSingleData.data) {
            onHide()
        } else {
            return
        }
    }, [updatedSingleData.data])
    console.log('updatedSingleData', updatedSingleData);
    return (
        <>
            <Updated
                show={modalShowUpdate}
                onHide={() => setModalShowUpdate(false)}
                data={dataInUpdate}
            />
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <div className='flex'><span>Detail id: {data?.id}</span>  <span></span></div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul>
                        <li>Full Name: {`${data?.firstName} ${data?.lastName}`}</li>
                        <li>Email: {data?.email}</li>
                        <li>Phone no: {data?.phoneNo}</li>
                        <li>Age: {data?.age}</li>
                        <li>Gender: {data?.gender}</li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>

                    <button className='flex gap-0' onClick={() => handleDelete(data?.id)}> <span>Delete</span> <span><MdDelete style={iconStyle} /></span>  </button>
                    <button className='flex gap-0' onClick={() => [setModalShowUpdate(true), setDataInUpdate(data)]}><span>Edit</span>  <span><FaUserEdit style={iconStyle} /></span> </button>
                    <button onClick={onHide}>Close</button>

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ViewDetail


