import { signInWithPopup } from "firebase/auth"
import { auth, provider } from '../../../config/firabseConfig'
import Cookies from "universal-cookie";
import { setInStorage } from "../../../utils/storage";
// import { auth } from '../../../config/firabseConfig';
import { signOut } from 'firebase/auth';

import {
    postRequest,
} from "../../../utils/baseApi";
import {
    googleAuth,
    googleAuthSuccess,
    googleAuthFailure,
} from "../../slices/Auth/googleAuthSlice";
import {
    signOutFunc, signOutSuccess, signOutFailure,
} from "../../slices/Auth/signOutSlice";

const cookies = new Cookies
export async function googleAuthApi(dispatch, onSuccess) {
    dispatch(googleAuth());
    try {
        let res = await signInWithPopup(auth, provider);
        // const userData = {
        //     fullName: res.user.displayName,
        //     email: res.user.email,
        //     profilePictureUrl: res.user.photoURL,
        // };
        cookies.set("authToken", res.user.refreshToken)
        // setInStorage("userObject", userData);
        // setInStorage("token", res.user.accessToken);
        dispatch(googleAuthSuccess(res));
        // localStorage.setItem('userObject',JSON.stringify(userData))
        // localStorage.setItem('token',JSON.stringify(res?.user?.accessToken))
        // SuccessAlert('Successfuly Signin with Google')
        onSuccess();
    } catch (error) {
        // getError(error);
        dispatch(googleAuthFailure(error));
    }
}
export async function signOutApi(dispatch, onSuccess) {
    dispatch(signOutFunc());
    try {
        let res = await signOut(auth);
        dispatch(signOutSuccess(res));
        onSuccess();
    } catch (error) {
        dispatch(signOutFailure(error));
    }
}
