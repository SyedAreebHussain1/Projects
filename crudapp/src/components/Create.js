import React, { useState } from 'react'

const Create = () => {
    const [users, setUser] = useState({})
    const getUserData = (e) => {

        setUser({ ...users, [e.target.name]: e.target.value })
    }
    console.log(users);
    return (
        <div>
            <form className='w-50 mx-auto my-5' >
                <div className="mb-3 ">
                    <label htmlFor="" className="form-label">Name</label>
                    <input type="text" className="form-control" name='name'  onChange={getUserData} />
                </div>
                <div className="mb-3 ">
                    <label htmlFor="" className="form-label">Email address</label>
                    <input type="email" className="form-control" name='email' onChange={getUserData}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label" >Age</label>
                    <input className="form-control"  type='number' name="age" onChange={getUserData} />
                </div>
                <div className="mb-3">
                    <input className="form-check-input" type="radio" onChange={getUserData}  name='gender' value='Male' />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Male
                    </label>
                </div>
                <div className="mb-3">
                    <input className="form-check-input" name='gender' onChange={getUserData}  type="radio" value='Female' />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Female
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Create