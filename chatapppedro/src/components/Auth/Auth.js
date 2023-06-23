import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { auth, provider } from '../../config/firabseConfig'
// import { signInWithPopup } from "firebase/auth"
import { googleAuthApi } from '../../redux/api/Auth'
import { getFromStorage } from '../../utils/storage'
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Successfuly Signin with Google');

const Auth = ({ setIsAuth }) => {
    const dispatch = useDispatch()
    const googleAuthS = useSelector((state) => state.googleAuthS);
    // // const getData = JSON.parse(localStorage.getItem("userObject"))
    // const getUserObject = getFromStorage('userObject')
    const signInWithGoogle = () => {
        if (dispatch) {
            // await signInWithPopup(auth, provider)
            googleAuthApi(dispatch, onSuccess)
            notify()
        }
    }
    function onSuccess() {
        setIsAuth(true)
    }

    return (
        <div className='auth'>
            <p>Sign In With Google To Continue</p>
            <button onClick={signInWithGoogle}>Sign In with Google</button>
        </div>
    )
}
export default Auth