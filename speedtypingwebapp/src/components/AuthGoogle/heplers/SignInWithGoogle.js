import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FcGoogle } from 'react-icons/fc'
import { signInWithGoogleApi } from '../../../redux/api/auths/index'

const SignInWithGoogle = ({ setIsAuth }) => {
    const dispatch = useDispatch()
    const { data, loading } = useSelector((state) => state?.createSignInWithGoogleSlice)
    const signInWithGoogle = (e) => {
        e.preventDefault()
        if (dispatch) {
            signInWithGoogleApi(dispatch, onSuccess, onFailure)
        }
    }
    function onSuccess(msg) {
        setIsAuth(true)
    }
    function onFailure(msg) {
    }
    return (
        <div className="">
            <button className="btn-google" onClick={signInWithGoogle}>
                <span className="icon">
                    <FcGoogle className="thumbs-up-icon" />
                </span>
                <span className="text">Sign in with Google</span>
            </button>
        </div>
    )
}
export default SignInWithGoogle