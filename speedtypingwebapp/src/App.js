import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// components
// import SpeedTyping from './components/SpeedTyping/SpeedTyping';
import AppRoutes from './routes/AppRoutes';
import AuthSignIn from './components/AuthSignIn/AuthSignIn';
import Navbar from './components/Navbar/Navbar';
import './App.css';


function App() {
  let [isAuth, setIsAuth] = useState(localStorage.getItem("token"))
  const { data, loading } = useSelector((state) => state?.createSignInWithGoogleSlice)
  // const token = localStorage.getItem("token");
  useEffect(() => {
    console.log(isAuth)
  }, [isAuth, data?.user])
  if (!isAuth) {
    return <AuthSignIn setIsAuth={setIsAuth} />
  } else {
    return <>
      <Navbar setIsAuth={setIsAuth}/>
      <AppRoutes  />
    </>
  }
}
export default App;