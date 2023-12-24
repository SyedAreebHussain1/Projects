import React, { useLayoutEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
// import MainDashboardPage from './pages/MainDashboardPage/MainDashboardPage'
import MainDashboardPage from './Pages/MainDashboard/MainDashboardPage';
import SigninPage from './Pages/Auth/SigninPage';
import { getFromStorage } from './utils/storage'
import { signinSuccess, signinFailure } from './redux/slices/Auth/signinSlice'
import './App.css';
import './index.css';
function App() {
  const dispatch = useDispatch()
  const isAuth = useSelector((state) => state.auth.isAuth)
  useLayoutEffect(() => {
    if (getFromStorage('userObject')) {
      dispatch(signinSuccess())
    } else {
      dispatch(signinFailure())
    }
  }, [dispatch])
  return <div>
    <Routes>
      <Route
        exact
        path="/"
        element={!isAuth ? <SigninPage /> : <Navigate to={'/dashboard'} />}
      />
      <Route
        path="/*"
        element={isAuth ? <MainDashboardPage /> : <Navigate to={'/'} />}
      />
    </Routes>
  </div>
}

export default App;
