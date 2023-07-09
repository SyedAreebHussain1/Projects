import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { getFromStorage } from '../utils/storage';
import CrudForm from '../components/CrudForm/CrudForm'
import Read from '../components/Read/Read';
const AppRoutes = () => {
    // const [showRoute, setShowRoute] = useState(true)
    let getUserName = getFromStorage("userData");
    let token = getFromStorage("token");

    return (
        <Routes>
            <Route exact path='/' element={<CrudForm />} />
            <Route path='/read-crud' element={<Read />} />
            {/* <Route
                exact
                path="/"
                element={!token ? <CrudForm /> : <Navigate to={"/read-crud"} />}
            />
            <Route
                path="/*"
                element={token ? <Read /> : <Navigate to={"/"} />}
            /> */}
        </Routes>
    )
}

export default AppRoutes