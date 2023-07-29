import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import SpeedTyping from '../components/SpeedTyping/SpeedTyping'
// import AuthGoogle from '../components/AuthGoogle/AuthGoogle'
const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path='/' element={<SpeedTyping  />} />
      {/* <Route path='/edit' element={<Updated />} /> */}
    </Routes>
  )
}
export default AppRoutes