import { API } from "../../../../config/apiEndPoints"
import { getError, getRequest } from "../../../../utils/baseApi"
import { successMessage } from "../../../../utils/message"

import {
    getAllSubsForAdmin,
    getAllSubsForAdminSuccess,
    getAllSubsForAdminFailure,
} from "../../../slices/SubscriptionManagement/ActiveSubscription/getAllSubsForAdminSlice"


export async function getAllSubsForAdminApi(dispatch, pageLimit, search, selectedFilter) {
    dispatch(getAllSubsForAdmin())
    try {
        const query = {
            Name: 'search',
            Package: 'search',
            Billing: 'search',
        }
        let { data } = await getRequest(
            `${API.subscriptionManagement.getAllSubsForAdmin}?page=${pageLimit.page
            }&limit=${pageLimit.limit}${selectedFilter && search ? `&${query[selectedFilter]}=${search}` : ''
            }`
        )
        dispatch(getAllSubsForAdminSuccess(data))
    } catch (error) {
        getError(error)
        dispatch(getAllSubsForAdminFailure(error.response.data))
    }
}