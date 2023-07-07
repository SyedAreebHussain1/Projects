import { API } from "../../../config/apiEndPoints";
import { deleteRequest, getError, getRequest, postRequest } from "../../../utils/baseApi";
import { successMessage } from "../../../utils/message";
import { setInStorage } from "../../../utils/storage";
import {
    createCrudTwo,
    createCrudTwoSuccess,
    createCrudTwoFailure,
    // clearCreateCrudTwo,
} from "../../slice/CrudTwo/createCrudTwoSlice";
import {
    getReadList,
    getReadListSuccess,
    getReadListFailure,
} from "../../slice/CrudTwo/getReadListSlice";
import {
    deleteSingleData,
    deleteSingleDataSuccess,
    deleteSingleDataFailure,
} from "../../slice/CrudTwo/deleteSingleDataSlice"

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

export async function getReadListApi(dispatch) {
    dispatch(getReadList());
    try {
        // program to generate random strings
        let res = await getRequest(API.crudTwo.crudTwo);
        dispatch(getReadListSuccess(res.data));
        successMessage(res.data.message);
        // onSuccess(res?.statusText);
    } catch (error) {
        getError(error);
        // onFailure(error)
        dispatch(getReadListFailure(error.response.data));
    }
}
export async function deleteSingleDataApi(dispatch, id) {
    // console.log(id)
    dispatch(deleteSingleData());
    try {
        // program to generate random strings
        let res = await deleteRequest(`${API.crudTwo.crudTwo}/${id}`);
        dispatch(deleteSingleDataSuccess(res.data));
        successMessage(res.data.message);
        // onSuccess(res?.statusText);
    } catch (error) {
        getError(error);
        // onFailure(error)
        dispatch(deleteSingleDataFailure(error.response.data));
    }
}

