import { API } from "../../../config/apiEndpoint";
import { deleteRequest, getRequest, postRequest } from "../../../utils/baseApi";
import {
    getRandomContent,
    getRandomContentSuccess,
    getRandomContentFailure,
} from '../../slice/random/getRandomContentSlice'


// Get random content
export async function getRandomContentApi(dispatch) {
    dispatch(getRandomContent())
    try {
        let res = await getRequest(API.random);
        dispatch(getRandomContentSuccess(res.data));
    } catch (error) {
        dispatch(getRandomContentFailure(error?.response?.data));
    }
}
