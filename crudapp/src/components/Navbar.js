import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchUser } from '../features/userDetailSlice'

const Navbar = () => {
    const dispatch = useDispatch()
    const allUsers = useSelector((state) => state?.app?.users)
    const [searchData, setSearchData] = useState("")
    const [radioData, setRadioData] = useState("");

    useEffect(() => {
        dispatch(searchUser(searchData))
    }, [searchData])

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <h4 className="navbar-brand" >Logo</h4>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to='/'>Cretae Post</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/read' className="nav-link" >All Post ({allUsers?.length})</Link>
                        </li>

                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearchData(e.target.value)} />
                       
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar