import { API } from "../../../../config/apiEndPoints"
import { deleteRequest, getError, getRequest, patchRequest, postRequest } from "../../../../utils/baseApi"
import { successMessage } from "../../../../utils/message"


import {
    getAllAddOns,
    getAllAddOnsSuccess,
    getAllAddOnsFailure,
} from "../../../slices/SubscriptionManagement/Addons/getAllAddOnsSlice"
import {
    deleteAddOn,
    deleteAddOnSuccess,
    deleteAddOnFailure,
} from "../../../slices/SubscriptionManagement/Addons/deleteAddOnSlice"
import {
    createAddOn,
    createAddOnSuccess,
    createAddOnFailure
} from "../../../slices/SubscriptionManagement/Addons/createAddOnSlice"

import {
    updateAddOn,
    updateAddOnSuccess,
    updateAddOnFailure
} from "../../../slices/SubscriptionManagement/Addons/updateAddOnSlice"

export async function getAllAddOnsApi(dispatch, pageLimit) {
    dispatch(getAllAddOns())
    try {
        let { data } = await getRequest(
            `${API.subscriptionManagement.getAllAddOns}?page=${pageLimit.page
            }&limit=${pageLimit.limit}`
        )
        dispatch(getAllAddOnsSuccess(data))
    } catch (error) {
        getError(error)
        dispatch(getAllAddOnsFailure(error.response.data))
    }
}
export async function deleteAddOnApi(dispatch, id) {
    dispatch(deleteAddOn())
    try {
        let { data } = await deleteRequest(`${API.subscriptionManagement.deleteAddOn}/${id}`)
        dispatch(deleteAddOnSuccess(data))
    } catch (error) {
        getError(error)
        dispatch(deleteAddOnFailure(error.response.data))
    }
}
export async function createAddOnApi(dispatch, body, onSuccess) {
    dispatch(createAddOn())
    try {
        let { data } = await postRequest(`${API.subscriptionManagement.createAddOn}`, body)
        dispatch(createAddOnSuccess(data))
        successMessage(data?.message)
        onSuccess()
    } catch (error) {
        getError(error)
        dispatch(createAddOnFailure(error.response.data))
    }
}
export async function updateAddOnApi(dispatch, body, id, onSuccess) {
    dispatch(updateAddOn())
    try {
        let { data } = await patchRequest(`${API.subscriptionManagement.updateAddOn}/${id}`, body)
        dispatch(updateAddOnSuccess(data))
        successMessage(data?.message)
        onSuccess()
    } catch (error) {
        getError(error)
        dispatch(updateAddOnFailure(error.response.data))
    }
}
