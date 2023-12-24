import { API } from "../../../../config/apiEndPoints"
import { fileRequest, getError, getRequest, postRequest } from "../../../../utils/baseApi"
import { successMessage } from "../../../../utils/message"

import {
    getPwPackages,
    getPwPackagesSuccess,
    getPwPackagesFailure,
} from "../../../slices/SubscriptionManagement/Packages/getPwPackagesSlice"
import {
    uploadAdvertisementPackage,
    uploadAdvertisementPackageSuccess,
    uploadAdvertisementPackageFailure
} from "../../../slices/SubscriptionManagement/Packages/uploadAdvertisementPackageSlice"
import {
    uploadAdvertisementPackageIcon,
    uploadAdvertisementPackageIconSuccess,
    uploadAdvertisementPackageIconFailure,
} from "../../../slices/SubscriptionManagement/Packages/uploadAdvertisementPackageIconSlice"

import {
    createPwPackages,
    createPwPackagesSuccess,
    createPwPackagesFailure,
} from "../../../slices/SubscriptionManagement/Packages/createPwPackagesSlice"

export async function getPwPackagesApi(dispatch, pageLimit, search, selectedFilter) {
    dispatch(getPwPackages())
    try {
        const query = {
            Name: 'search',
            Package: 'search',
            Billing: 'search',
        }
        let { data } = await getRequest(
            `${API.subscriptionManagement.getPwPackages}?page=${pageLimit.page
            }&limit=${pageLimit.limit}${selectedFilter && search ? `&${query[selectedFilter]}=${search}` : ''
            }`
        )
        dispatch(getPwPackagesSuccess(data))
    } catch (error) {
        getError(error)
        dispatch(getPwPackagesFailure(error.response.data))
    }
}
export async function uploadAdvertisementPackageApi(dispatch, body, onSuccess) {
    dispatch(uploadAdvertisementPackage())
    try {
        let { data } = await fileRequest(`${API.generateImgUrl.uploadAdvertisement}`, body)
        dispatch(uploadAdvertisementPackageSuccess(data))
        if (onSuccess) {
            onSuccess()
        }
    } catch (error) {
        getError(error)
        dispatch(uploadAdvertisementPackageFailure(error.response.data))
    }
}
export async function uploadAdvertisementPackageIconApi(dispatch, body, onSuccess) {
    dispatch(uploadAdvertisementPackageIcon())
    try {
        let { data } = await fileRequest(`${API.generateImgUrl.uploadAdvertisement}`, body)
        dispatch(uploadAdvertisementPackageIconSuccess(data))
        if (onSuccess) {
            onSuccess()
        }
    } catch (error) {
        getError(error)
        dispatch(uploadAdvertisementPackageIconFailure(error.response.data))
    }
}


export async function createPwPackagesApi(dispatch, body, onSuccess) {
    dispatch(createPwPackages())
    try {
        let { data } = await postRequest(`${API.subscriptionManagement.createPwPackages}`, body)
        dispatch(createPwPackagesSuccess(data))
        successMessage(data?.message)
        onSuccess()
    } catch (error) {
        getError(error)
        dispatch(createPwPackagesFailure(error.response.data))
    }
}