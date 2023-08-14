import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SpeedTyping from '../components/SpeedTyping/SpeedTyping'
const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path='/' element={<SpeedTyping />} />
    </Routes>
  )
}
export default AppRoutes