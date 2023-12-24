import { API } from "../../../../config/apiEndPoints"
import { getError, getRequest } from "../../../../utils/baseApi"
import {
    getUnverifiedUsers,
    getUnverifiedUsersSuccess,
    getUnverifiedUsersFailure,
} from "../../../slices/Support/UnverifiedUser/getUnverifiedUsersSlice"


export async function getUnverifiedUsersApi(dispatch, pageLimit, search, selectedFilter) {
    dispatch(getUnverifiedUsers())
    try {
        const query = {
            Email: 'email',
            Phone: 'phone',
            'Full Name': 'fullName',
            'Agency Name': 'agencyName',
        }
        let { data } = await getRequest(
            `${API.unverified.getUnverifiedUsers}?page=${pageLimit.page
            }&limit=${pageLimit.limit}${selectedFilter && search ? `&${query[selectedFilter]}=${search}` : ''
            }`
        )
        dispatch(getUnverifiedUsersSuccess(data))
    } catch (error) {
        getError(error)
        dispatch(getUnverifiedUsersFailure(error.response.data))
    }

}