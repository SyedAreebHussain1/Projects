import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { createUser } from '../features/userDetailSlice'

const Create = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const stateS = useSelector((state) => state.app)
    const formRef = useRef(null);
    const [users, setUser] = useState({
        name: "",
        email: "",
        age: "",
        gender: ""
    })
    const getUserData = (e) => {
        setUser({ ...users, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const objLength = Object.keys(users).length
        // if (objLength == 4) {
        //     dispatch(createUser(users))
        //     // formRef.current.reset()
        // }
        if (users.age !== "" && users.email !== "" && users.age !== "" && users.gender !== "") {
            dispatch(createUser(users))
            navigate('/read');
            formRef.current.reset()
        }
    }


    return (
        <div>
            <h2 className='my-2'>Fill the data</h2>
            <form className='w-50 mx-auto my-5' ref={formRef} onSubmit={handleSubmit} >
                <div className="mb-3 " >
                    <label htmlFor="" className="form-label">Name</label>
                    <input type="text" className="form-control" name='name' onChange={getUserData} />
                </div>
                <div className="mb-3 ">
                    <label htmlFor="" className="form-label">Email address</label>
                    <input type="email" className="form-control" name='email' onChange={getUserData} />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label" >Age</label>
                    <input className="form-control" type='number' name="age" onChange={getUserData} />
                </div>
                <div className="mb-3">
                    <input className="form-check-input" type="radio" onChange={getUserData} name='gender' value='Male' />
                    <label className="form-check-label" htmlFor="">
                        Male
                    </label>
                </div>
                <div className="mb-3">
                    <input className="form-check-input" name='gender' onChange={getUserData} type="radio" value='Female' />
                    <label className="form-check-label" htmlFor="">
                        Female
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Create