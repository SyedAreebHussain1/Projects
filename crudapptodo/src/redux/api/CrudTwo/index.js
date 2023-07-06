import { API } from "../../../config/apiEndPoints";
import { getError, getRequest, postRequest } from "../../../utils/baseApi";
import { successMessage } from "../../../utils/message";
import { setInStorage } from "../../../utils/storage";
import {
    createCrudTwo,
    createCrudTwoSuccess,
    createCrudTwoFailure,
    // clearCreateCrudTwo,
} from "../../slice/CrudTwo/createCrudTwoSlice";

export async function createCrudTwoApi(dispatch, formData, onSuccess, onFailure) {
    dispatch(createCrudTwo());
    try {
        // program to generate random strings
        const token = Math.random().toString(36).substring(2, 7);
        let res = await postRequest(API.crudTwo.crudTwo, formData);
        const userData = {
            firstName: res?.data?.firstName,
            lastName: res?.data?.lastName,
            id: res?.data?.id,
        };
        dispatch(createCrudTwoSuccess(res.data));
        setInStorage("userData", userData);
        setInStorage("token", token);
        successMessage(res.data.message);
        onSuccess(res?.statusText);
    } catch (error) {
        getError(error);
        onFailure(error)
        dispatch(createCrudTwoFailure(error.response.data));
    }
}

