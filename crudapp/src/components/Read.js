import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser, userDelete } from '../features/userDetailSlice'
import CustomModal from './CustomModal'
import { showUser } from '../features/userDetailSlice'
import { Link, useNavigate } from 'react-router-dom'

const Read = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { users, loading } = useSelector((state) => state?.app)
    const [id, setId] = useState()
    const [showPopup, setShowPopup] = useState(false)

    // const handleEdit = (event) => { 
    //     console.log(event);
    //     navigate(`/update/${event.id}`);
    //     // dispatch(updateUser(event?.id))
    // }
    useEffect(() => {
        dispatch(showUser())
    }, [dispatch])

    if (loading) {
        return <h2>Loading...</h2>
    }
    return (
        <div>
            {showPopup && <CustomModal id={id} showPopup={showPopup} setShowPopup={setShowPopup} />}
            <h2>All Data</h2>
            <div style={{ width: '', height: '400px', overflow: 'auto' }}>{users && users?.map((item, i) => {
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
            })}
            </div>
        </div>
    )
}

export default Read