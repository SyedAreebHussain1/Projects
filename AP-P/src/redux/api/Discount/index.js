import { API } from "../../../config/apiEndPoints.js"
import {
    deleteRequest,
    fileRequest,
    getError,
    getRequest,
    patchRequest,
    postRequest,
} from "../../../utils/baseApi"
import { successMessage } from "../../../utils/message.js"
import {
    getAllDiscount,
    getAllDiscountSuccess,
    getAllDiscountFailure
} from "../../slices/Discount/getAllDiscountSlice.js"
import {
    deleteDiscountDataById,
    deleteDiscountDataByIdSuccess,
    deleteDiscountDataByIdFailure,
} from "../../slices/Discount/deleteDiscountDataByIdSlice.js"
import {
    addDiscount,
    addDiscountSuccess,
    addDiscountFailure
} from "../../slices/Discount/addDiscountSlice.js"
import {
    uploadAdvertisementDiscount,
    uploadAdvertisementDiscountSuccess,
    uploadAdvertisementDiscountFailure
} from "../../slices/Discount/uploadAdvertisementDiscountSlice.js"
import {
    discountUpdate,
    discountUpdateSuccess,
    discountUpdateFailure,
} from "../../slices/Discount/discountUpdateSlice.js"

export async function getAllDiscountApi(dispatch, pageLimit, search, selectedFilter) {
    dispatch(getAllDiscount())
    try {
        const query = {
            "Discount Code": "search"
        }
        let url = `${API.discount.getAllDiscount}?page=${pageLimit.page}&limit=${pageLimit.limit}${selectedFilter && search ? `&${query[selectedFilter]}=${search}` : ''}`
        let { data } = await getRequest(url)
        dispatch(getAllDiscountSuccess(data))
    } catch (error) {
        getError(error)
        dispatch(getAllDiscountFailure(error.response.data))
    }
}
export async function deleteDiscountDataByIdApi(dispatch, id) {
    dispatch(deleteDiscountDataById())
    try {
        let { data } = await deleteRequest(`${API.discount.deleteDiscountDataById}/${id}`)
        dispatch(deleteDiscountDataByIdSuccess(data))
    } catch (error) {
        getError(error)
        dispatch(deleteDiscountDataByIdFailure(error.response.data))
    }
}

export async function addDiscountApi(dispatch, body, onSuccess) {
    dispatch(addDiscount())
    try {
        let { data } = await postRequest(`${API.discount.addDiscount}`, body)
        dispatch(addDiscountSuccess(data))
        successMessage(data?.message)
        onSuccess()
    } catch (error) {
        getError(error)
        dispatch(addDiscountFailure(error.response.data))
    }
}
export async function uploadAdvertisementDiscountApi(dispatch, body, onSuccess) {
    dispatch(uploadAdvertisementDiscount())
    try {
        let { data } = await fileRequest(`${API.generateImgUrl.uploadAdvertisement}`, body)
        dispatch(uploadAdvertisementDiscountSuccess(data))
        if (onSuccess) {
            onSuccess()
        }
    } catch (error) {
        getError(error)
        dispatch(uploadAdvertisementDiscountFailure(error.response.data))
    }
}
export async function discountUpdateApi(dispatch, body, id, onSuccess) {
    dispatch(discountUpdate())
    try {
        let { data } = await patchRequest(`${API.discount.discountUpdate}/${id}`, body)
        dispatch(discountUpdateSuccess(data))
        successMessage(data?.message)
        onSuccess()
    } catch (error) {
        getError(error)
        dispatch(discountUpdateFailure(error.response.data))
    }
}

