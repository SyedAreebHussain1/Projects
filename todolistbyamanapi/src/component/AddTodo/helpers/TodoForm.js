import React, { useRef, useState, useEffect } from 'react'
import { createTodoListApi } from '../../../redux/api/todo'
import { useDispatch } from 'react-redux'

const TodoForm = () => {
    const form = useRef()
    const dispatch = useDispatch()
    const [state, setState] = useState({
        title: '',
        description: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        if (state.title !== '' && state.description !== '') {
            createTodoListApi(dispatch, state, onSuccess, onFailure)
        } else {
            alert('All Fields Are Requried')
        }
    }
    function onSuccess(msg) {
        if (msg) {
            form.current.reset()
        }
    }
    function onFailure(msg) {
        // console.log('onFailure', msg)
    }
    function handleChange(event) {
        const { name, value } = event.target
        setState((pre) => ({
            ...pre,
            [name]: value
        }))
    }
    return (
        <div className='flex justify-center	' >
            <div>
                <h3>Add Todo</h3>
                <div className="container">
                    <form ref={form} onSubmit={handleSubmit} action="">
                        <div className='flex' >
                            <div>
                                <label htmlFor="title">Title</label>
                                <input type="text" id="title" name="title" required onChange={handleChange} placeholder="Title" />
                            </div>
                            {/* <div>
                                <label htmlFor="title">Title</label>
                                <input type="text" id="title" name="title" required onChange={handleChange} placeholder="Title" />
                            </div> */}
                        </div>
                        <textarea id="description" required name="description" onChange={handleChange} placeholder="Write description.." style={{ height: '70px' }}></textarea>
                        <input type="submit" value="Add Todo" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TodoForm