import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import SingleCrudDetail from '../components/SingleCrudDetail/SingleCrudDetail'
import CrudForm from '../components/CrudForm/CrudForm'
import { getFromStorage } from '../utils/storage';
const AppRoutes = () => {

    let getUserName = getFromStorage("userData");
    let token = getFromStorage("token");
    // console.log('getUserName', getUserName)
    // console.log('token', token)
    return (
        <BrowserRouter>
            <Routes>
                {!token ?
                    <Route exact path='/' element={<CrudForm />} /> :
                    <Route exact path='/read-crud' element={<CrudForm />} /> 
                }
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes