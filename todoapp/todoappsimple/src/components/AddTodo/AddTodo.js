import React, { useState, useRef } from 'react'

const AddTodo = ({ data, setStateRun }) => {
    const id = "id" + Math.random().toString(16).slice(2)
    const form = useRef()
    const [state, setState] = useState({
        id: id,
        title: "",
        typeSelect: "",
        subject: ""
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        if (state.subject !== "" && state.title !== "" && state.typeSelect !== "" && state.id !== "") {
            data.push(state)
            setStateRun(state)
            form.current.reset();
            // setState({
            //     // id: "",
            //     // title: "",
            //     // typeSelect: "",
            //     // subject: ""
            // })
        } else {
            alert('All Fields are Req')
        }
    }
    function handleChange(event) {
        // setState({ ...state, [event.target.name]: event.target.value })
        const { name, value } = event.target
        setState((prevFormData) => ({
            ...prevFormData,
            [name]: value,
            id: id,
        }));
    }
    return (
        <>
            <h3>Add Todo</h3>
            <div className="container">
                <form ref={form} onSubmit={handleSubmit} action="">
                    <div style={{ display: "flex" }}>
                        <div>
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" name="title" required onChange={handleChange} placeholder="Title" />
                        </div>
                        <div>
                            <label htmlFor="typeSelect">Select</label>
                            <select required onChange={handleChange} id="typeSelect" name="typeSelect">
                                <option value='' > -- select an option -- </option>
                                <option value="gym">Gym</option>
                                <option value="eating">Eating</option>
                                <option value="study">Study</option>
                                <option value="game">Game</option>
                                <option value="work">Work</option>
                            </select>
                        </div>
                    </div>
                    <textarea id="subject" required name="subject" onChange={handleChange} placeholder="Write something.." style={{ height: '70px' }}></textarea>
                    <input type="submit" value="Add Todo" />
                </form>
            </div>
        </>
    )
}

export default AddTodo