import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import moment from 'moment';
import { updatedSingleTodoApi ,getTodoListApi} from '../../../redux/api/todo';

const EditModal = (props) => {
    const { data, onHide } = props
    const form = useRef()
    const dispatch = useDispatch()
    const [state, setState] = useState({
        title: '',
        description: ''
    })
    useEffect(() => {
        if (data) {
            setState(data)
        }
    }, [data])
    const handleSubmit = (e) => {
        e.preventDefault()
        if (state.title !== '' && state.description !== '') {
            updatedSingleTodoApi(dispatch, data?._id, state, onSuccess, onFailure)
        } else {
            alert('All Fields Are Requried')
        }
    }
    function onSuccess(msg) {
        if (msg) {
            getTodoListApi(dispatch)
            onHide()
            form.current.reset()
        }
    }
    function onFailure(msg) {
        console.log('onFailure', msg)
    }
    function handleChange(event) {
        const { name, value } = event.target
        setState((pre) => ({
            ...pre,
            [name]: value
        }))
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <div className='flex gap-2' style={{ justifyContent: 'space-around' }}> <span> Date: {moment(data?.createdBy).format('MMM/DD/YYYY h:mmA')} </span></div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='' >
                    <div>
                        <h3>Update Todo</h3>
                        <div className="container">
                            <form ref={form} onSubmit={handleSubmit} action="">
                                <div className='flex' >
                                    <div>
                                        <label htmlFor="title">Title</label>
                                        <input type="text" id="title" name="title" value={state?.title} required onChange={handleChange} placeholder="Title" />
                                    </div>
                                    {/* <div>
                                <label htmlFor="title">Title</label>
                                <input type="text" id="title" name="title" required onChange={handleChange} placeholder="Title" />
                            </div> */}
                                </div>
                                <textarea id="description" required name="description" value={state?.description} onChange={handleChange} placeholder="Write description.." style={{ height: '70px' }}></textarea>
                                <input type="submit" value="Save" />
                            </form>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button onClick={onHide}>Close</button>
            </Modal.Footer>
        </Modal>
    )
}

export default EditModal