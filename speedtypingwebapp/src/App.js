import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// components
import AuthSignIn from './components/AuthSignIn/AuthSignIn';
import Navbar from './components/Navbar/Navbar';
import AppRoutes from './routes/AppRoutes';
import './App.css';


function App() {
  let [isAuth, setIsAuth] = useState(localStorage.getItem("token"))
  const { data, loading } = useSelector((state) => state?.createSignInWithGoogleSlice)
  useEffect(() => {
    console.log()
  }, [isAuth, data?.user])
  if (!isAuth) {
    return <AuthSignIn setIsAuth={setIsAuth} />
  } else {
    return <>
      <Navbar setIsAuth={setIsAuth} />
      <AppRoutes />
    </>
  }
}
export default App;