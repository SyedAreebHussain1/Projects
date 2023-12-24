import { API } from "../../../config/apiEndPoints";
import { getError, postRequest } from "../../../utils/baseApi";
import { successMessage } from "../../../utils/message"
import { setInStorage } from "../../../utils/storage"
import { signin, signinSuccess, signinFailure } from '../../slices/Auth/signinSlice'

export async function signinApi(dispatch, body, navigate) {
    dispatch(signin())
    try {
        let { data } = await postRequest(API.auth.signin, body)
        let userData = {
            id: data?.data?.staff?.id,
            role: data?.data?.role,
            fullName: data.data?.staffProfile?.fullName,
            profilePictureUrl: data.data?.staffProfile?.profilePictureUrl,
        }
        dispatch(signinSuccess())
        setInStorage('userObject', userData)
        setInStorage('token', data?.data?.token)
        successMessage(data?.message)
        dispatch(signinSuccess(userData))
        navigate('/dashboard')
    } catch (error) {
        getError(error)
        dispatch(signinFailure(error.response?.data))
    }
}