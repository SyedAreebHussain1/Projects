import { API } from "../../../config/apiEndPoints";
import { deleteRequest, getError, getRequest, patchRequest, postRequest, putRequest, } from "../../../utils/baseApi";
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
} from "../../slice/CrudTwo/deleteSingleDataSlice";
import {
    updatedSingleData,
    updatedSingleDataSuccess,
    updatedSingleDataFailure,
} from "../../slice/CrudTwo/updatedSingleDataSlice"
import axios from "axios";

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
        let res = await getRequest(API.crudTwo.crudTwo);
        dispatch(getReadListSuccess(res.data));
        successMessage(res.data.message);
    } catch (error) {
        getError(error);
        dispatch(getReadListFailure(error.response.data));
    }
}

export async function updatedSingleDataApi(dispatch, id, body, onSuccess, onFailure) {
    dispatch(updatedSingleData());
    try {
        let res = await axios.put(`${API.crudTwo.crudTwo}/${id}`, body);
        dispatch(updatedSingleDataSuccess(res.data));
        successMessage(res.data.message);
        onSuccess(res.data)
    } catch (error) {
        getError(error);
        onFailure(error)
        dispatch(updatedSingleDataFailure(error?.response));
    }
}


export async function deleteSingleDataApi(dispatch, id, onSuccess) {
    dispatch(deleteSingleData());
    try {
        let res = await deleteRequest(`${API.crudTwo.crudTwo}/${id}`);
        dispatch(deleteSingleDataSuccess(res.data));
        successMessage(res.data.message);
        onSuccess()
    } catch (error) {
        getError(error);
        dispatch(deleteSingleDataFailure(error.response.data));
    }
}

