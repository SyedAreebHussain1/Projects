import { API } from "../../../../config/apiEndPoints"
import { getError, getRequest } from "../../../../utils/baseApi"
import {
    getAllOwners,
    getAllOwnersSuccess,
    getAllOwnersFailure,
} from "../../../slices/SmartSellingPoint/Owner/getAllOwnersSlice"

export async function getAllOwnersApi(dispatch, pageLimit, search, selectedFilter) {
    dispatch(getAllOwners())
    try {
        const query = {
            Name: "search"
        }
        let url = `${API.smartSellingPoint.getAllOwners}?page=${pageLimit.page}&limit=${pageLimit.limit}${search ? `&${query[selectedFilter]}=${search}` : ''}`
        let { data } = await getRequest(url)
        dispatch(getAllOwnersSuccess(data))
    } catch (error) {
        getError(error)
        dispatch(getAllOwnersFailure(error.response.data))
    }
}
