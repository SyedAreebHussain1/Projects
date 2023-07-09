import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser, userDelete } from '../features/userDetailSlice'
import CustomModal from './CustomModal'
import { showUser } from '../features/userDetailSlice'
import { Link, useNavigate } from 'react-router-dom'

const Read = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { users, loading, searchData } = useSelector((state) => state?.app)
    const [id, setId] = useState()
    const [radioData, setRadioData] = useState("");
    const [showPopup, setShowPopup] = useState(false)
    // const handleEdit = (event) => { 
    //     console.log(event);
    //     navigate(`/update/${event.id}`);
    //     // dispatch(updateUser(event?.id))
    // }
    useEffect(() => {
        dispatch(showUser())
    }, [dispatch, radioData, searchData])


    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            {showPopup && <CustomModal id={id} showPopup={showPopup} setShowPopup={setShowPopup} />}
            <h2>All Data</h2>
            <div className="mb-3">
                <input className="form-check-input" type="radio" name='gender' checked={radioData === ""} value="" onChange={(e) => setRadioData(e.target.value)} />
                <label className="form-check-label" htmlFor="">
                    All
                </label>
            </div>
            <div className="mb-3">
                <input className="form-check-input" type="radio" name='gender' checked={radioData && radioData === "Male"} onChange={(e) => setRadioData(e.target.value)} value='Male' />
                <label className="form-check-label" htmlFor="">
                    Male
                </label>
            </div>
            <div className="mb-3">
                <input className="form-check-input" name='gender' type="radio" checked={radioData && radioData === "Female"} onChange={(e) => setRadioData(e.target.value)} value='Female' />
                <label className="form-check-label" htmlFor="">
                    Female
                </label>
            </div>
            <div style={{ height: '400px', overflow: 'auto' }}>{users && users
                .filter((ele) => {
                    if (searchData.length === 0) {
                        return ele;
                    } else {
                        return ele.name
                            .toLowerCase()
                            .includes(searchData.toLowerCase());
                    }
                }).filter((ele2) => {
                    if (radioData === 'Female') {
                        return ele2.gender === "Female"
                    } else if (radioData === 'Male') {
                        return ele2.gender === "Male"
                    } else {
                        return ele2
                    }
                })
                .map((item, i) => {
                    if (item) {
                        return <div className="card w-50 mx-auto my-2" key={item?.id}>
                            <div className="card-body">
                                <h5 className="card-title">{item?.name}</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">{item?.email}</h6>
                                <p className="card-text">{item?.gender}</p>
                                <Link className="card-link" onClick={() => [setId(item?.id), setShowPopup(true)]}>View</Link>
                                <Link className="card-link" to={`/update/${item.id}`} >Edit</Link>
                                <Link className="card-link" onClick={() => dispatch(userDelete(item?.id))}>Delete</Link>
                            </div>
                        </div>
                    }
                    else {
                        return 'No data found'
                    }
                })}
            </div>
        </div>
    )

}

export default Read