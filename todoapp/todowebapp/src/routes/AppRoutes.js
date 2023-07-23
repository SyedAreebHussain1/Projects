import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Updated from '../components/Updated'
import App from '../App'
const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path='/' element={<App />} />
      <Route path='/edit' element={<Updated />} />
    </Routes>
  )
}
export default AppRoutes