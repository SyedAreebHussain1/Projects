import { signInWithPopup } from "firebase/auth"
import { signOut } from 'firebase/auth';
import { auth, provider } from '../../../config/firabseConfig'
import {
    createSignInWithGoogle,
    createSignInWithGoogleSuccess,
    createSignInWithGoogleFailure,
} from "../../slice/auth/createSignInWithGoogleSlice";
import {
    signOutWithGoogle,
    signOutWithGoogleSuccess,
    signOutWithGoogleFailure,
} from "../../slice/auth/signOutWithGoogleSlice"

export async function signInWithGoogleApi(dispatch, onSuccess, onFailure) {
    dispatch(createSignInWithGoogle());
    try {
        let res = await signInWithPopup(auth, provider);
        const userData = {
            fullName: res?.user?.displayName,
            email: res?.user?.email,
            profilePictureUrl: res?.user?.photoURL,
        };
        dispatch(createSignInWithGoogleSuccess(res));
        localStorage.setItem('userObject', JSON.stringify(userData))
        localStorage.setItem('token', JSON.stringify(res?.user?.accessToken))
        // cookies.set("authToken", res.user.refreshToken)
        // setInStorage("userObject", userData);
        // setInStorage("authToken", res.user.accessToken);
        onSuccess(res);
    } catch (error) {
        dispatch(createSignInWithGoogleFailure(error));
        onFailure(error)
    }
}
export async function signOutWithGoogleApi(dispatch, onSuccessSignOut,onFailureSignOut) {
    dispatch(signOutWithGoogle());
    try {
        let res = await signOut(auth);
        dispatch(signOutWithGoogleSuccess(res));
        onSuccessSignOut(res);
    } catch (error) {
        dispatch(signOutWithGoogleFailure(error));
        onFailureSignOut(error)
    }
}