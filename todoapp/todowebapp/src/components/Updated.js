import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import DataBase from '../utilies/data';
const Updated = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [editBody, setEditBody] = useState({
        id: '',
        title: '',
        discriptaion: ''
    })
    useEffect(() => {
        setEditBody(location?.state?.data)
    }, [])
    const objIndex = DataBase.findIndex((indexFind) => indexFind.id == location?.state?.data.id);
    const handleEditSubmit = (e) => {
        e.preventDefault()
        if (DataBase[objIndex].id == location.state.data.id) {
            if (editBody.discriptaion !== '' && editBody.title !== '') {
                DataBase[objIndex] = editBody
                navigate('/')
            }
        }
    }
    return (
        <form>
            < div style={{ border: '2px solid red' }
            }>
                <div>
                    <input type='text' name='title' value={editBody.title} onChange={(e) => setEditBody({ ...editBody, title: e.target.value })} style={{ border: '1px solid black' }} />
                </div>
                <br />
                <div >
                    <input type='text' name='discriptaion' value={editBody.discriptaion} onChange={(e) => setEditBody({ ...editBody, discriptaion: e.target.value })} style={{ border: '1px solid black' }} />
                </div>
                <br />
            </div >
            <button type='' onClick={handleEditSubmit}>Submit</button>
        </form >
    )
}

export default Updated