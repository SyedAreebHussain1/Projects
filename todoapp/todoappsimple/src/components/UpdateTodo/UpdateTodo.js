import React, { useState, useRef, useEffect } from 'react'
import dataBase from '../../utils/dataBase'

const UpdateTodo = ({ setStateRun, updateValue, setUpdateValue }) => {
    const form = useRef()
    const [state, setState] = useState({})
    useEffect(() => {
        setState(updateValue.item)
    }, [updateValue])
    let objIndex = dataBase.findIndex((obj => obj.id == updateValue?.item?.id))
    const handleEdit = (e) => {
        e.preventDefault()
        if (state.subject !== "" && state.title !== "" && state.typeSelect !== "") {
            dataBase[objIndex] = state
            setStateRun(state)
            setUpdateValue(false)
            form.current.reset();
            setState({
                title:"",
                subject:"",
                typeSelect:""
            })
            alert('Successfully Updated')
        } else {
            alert('All Fields are Req')
        }
    }
    function handleChange(event) {
        setState({ ...state, [event.target.name]: event.target.value })
    }
    return (
        <>
            <h3>Add Todo</h3>
            <div className="container">
                <form ref={form} onSubmit={handleEdit} action="">
                    <div style={{ display: "flex" }}>
                        <div>
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" name="title" value={state?.title} required onChange={handleChange} placeholder="Title" />
                        </div>
                        <div>
                            <label htmlFor="typeSelect">Select</label>
                            <select value={state?.typeSelect} required onChange={handleChange} id="typeSelect" name="typeSelect">
                                <option disabled selected defaultValue> -- select an option -- </option>
                                <option value="gym">Gym</option>
                                <option value="eating">Eating</option>
                                <option value="study">Study</option>
                                <option value="game">Game</option>
                                <option value="work">Work</option>
                            </select>
                        </div>
                    </div>
                    <textarea id="subject" value={state?.subject} required name="subject" onChange={handleChange} placeholder="Write something.." style={{ height: '70px' }}></textarea>
                    <input type="submit" value="Save" />
                </form>
            </div>
        </>
    )
}

export default UpdateTodo