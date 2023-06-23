import React, { useState, useRef, useEffect } from 'react';
import Cookies from 'universal-cookie';
import { useDispatch, useSelector } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast';
import { Chat } from './components/Chat/Chat';
import Auth from './components/Auth/Auth'
import { signOutApi } from './redux/api/Auth';
import './App.css';

import { auth } from './config/firabseConfig';

const cookies = new Cookies()
const notify = () => toast('Sign Out');
function App() {
  const dispatch = useDispatch()
  const [isAuth, setIsAuth] = useState(cookies.get("authToken"))
  const googleAuthS = useSelector((state) => state?.googleAuthS);
  const signOutS = useSelector((state) => state?.signOutS);
  const [room, setRoom] = useState(null)
  const roomInputRef = useRef(null)
  const signUserOut = () => {
    if (auth) {
      signOutApi(dispatch, onSuccess)
    }
  }
  function onSuccess() {
    setIsAuth(false)
    cookies.remove("authToken")
    setRoom(null)
    notify()
  }
  if (!isAuth) {
    return <div> <Auth setIsAuth={setIsAuth} /> </div>
  }
  return <>
    {room ? <Chat room={room} /> : <div className='room'>
      <Toaster />
      <label>Enter Room Name:</label>
      <input ref={roomInputRef} />
      <button onClick={() => setRoom(roomInputRef.current.value)}>Enter Chat</button>
    </div>}
    <div className='sign-out'>
      <button onClick={signUserOut}>Sign Out</button>
    </div>
  </ >
}

export default App
