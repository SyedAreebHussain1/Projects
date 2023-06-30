import {
    postRequest,
} from "../../../utils/baseApi";
import axios from 'axios'

import {
    contactUs, contactUsSuccess, contactUsFailure
} from "../../slices/contactus/contactUsSlice";
import { API } from "../../../config/apiEndPoint";

export async function contactUsApi(dispatch, data, onSuccess, onFailure) {
    dispatch(contactUs());
    try {
        let res = await axios.post(API.Support.conatctUs, data);
        dispatch(contactUsSuccess(res));
        onSuccess();
    } catch (error) {
        dispatch(contactUsFailure(error));
        onFailure(error?.message);
    }
}
