import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { showUser, updateUser } from '../features/userDetailSlice'

const Update = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const formRef = useRef(null);
    const { id } = useParams()
    const { users, loading } = useSelector((state) => state?.app)
    const [updateData, setUpdateData] = useState({})
    useEffect(() => {
        dispatch(showUser())
    }, [dispatch])

    useEffect(() => {
        if (id) {
            let singleUser = users.filter((ele) => ele?.id === id)
            // console.log(singleUser)
            // let obj = {
            //     name: singleUser?.[0]?.name,
            //     email: singleUser?.[0]?.email,
            //     gender: singleUser?.[0]?.gender,
            //     age: singleUser?.[0]?.age,
            // }
            setUpdateData(singleUser[0])
        }
    }, [users])
    const newData = (e) => {
        setUpdateData({ ...updateData, [e.target.name]: e.target.value })
    }
    const handleUpdate = (e) => {
        e.preventDefault()
        if (updateData.age !== "" && updateData.email !== "" && updateData.age !== "" && updateData.gender !== "") {
            dispatch(updateUser(updateData))
            navigate('/read');
            formRef.current.reset()
        }
    }

    return (
        <div>
            <h2 className='my-2'>Update the data</h2>
            <form className='w-50 mx-auto my-5' ref={formRef} onSubmit={handleUpdate}>
                <div className="mb-3 " >
                    <label htmlFor="" className="form-label">Name</label>
                    <input type="text" className="form-control" name='name' value={updateData && updateData?.name} onChange={newData} />
                </div>
                <div className="mb-3 ">
                    <label htmlFor="" className="form-label">Email address</label>
                    <input type="email" className="form-control" name='email' value={updateData && updateData?.email} onChange={newData} />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label" >Age</label>
                    <input className="form-control" type='number' name="age" value={updateData && updateData?.age} onChange={newData} />
                </div>
                <div className="mb-3">
                    <input className="form-check-input" type="radio" checked={updateData && updateData?.gender === "Male"} onChange={newData} name='gender' value='Male' />
                    <label className="form-check-label" htmlFor="">
                        Male
                    </label>
                </div>
                <div className="mb-3">
                    <input className="form-check-input" name='gender' checked={updateData && updateData?.gender === "Female"} onChange={newData} type="radio" value='Female' />
                    <label className="form-check-label" htmlFor="">
                        Female
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    )
}

export default Update