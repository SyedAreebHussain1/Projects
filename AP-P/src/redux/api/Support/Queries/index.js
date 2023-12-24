import { API } from "../../../../config/apiEndPoints"
import { getError, getRequest } from "../../../../utils/baseApi"
import {
    getSupportForm,
    getSupportFormSuccess,
    getSupportFormFailure,
} from "../../../slices/Support/Queries/getSupportFormSilce"


export async function getSupportFormApi(dispatch, pageLimit, search, selectedFilter) {
    dispatch(getSupportForm())
    try {
        const query = {
            Email: 'email',
            Phone: 'phoneNo',
            'Full Name': 'name',
        }
        let { data } = await getRequest(
            `${API.queries.getSupportForm}?page=${pageLimit.page
            }&limit=${pageLimit.limit}${selectedFilter && search ? `&${query[selectedFilter]}=${search}` : ''
            }`
        )
        dispatch(getSupportFormSuccess(data))
    } catch (error) {
        getError(error)
        dispatch(getSupportFormFailure(error.response.data))
    }
}