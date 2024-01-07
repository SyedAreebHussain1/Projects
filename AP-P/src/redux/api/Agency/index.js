import { API } from "../../../config/apiEndPoints"
import { getError, getRequest } from "../../../utils/baseApi"
import {
    getAllAgencies,
    getAllAgenciesSuccess,
    getAllAgenciesFailure
} from "../../slices/Agency/getAllAgenciesSlice"
import {
    getAgencyReviewById, getAgencyReviewByIdSuccess, getAgencyReviewByIdFailure
} from "../../slices/Agency/getAgencyReviewByIdSlice"

export async function getAllAgenciesApi(dispatch, pageLimit, search, selectedFilter) {
    dispatch(getAllAgencies())
    try {
        const query = {
            'Agency Name': 'agencyName',
            'Agency Code': 'agencyCode',
        }
        let { data } = await getRequest(`${API.agency.getAllAgencies}?page=${pageLimit.page}&limit=${pageLimit.limit
            }${selectedFilter && search
                ? `&${query[selectedFilter]}=${search}` : ""}`)
        dispatch(getAllAgenciesSuccess(data))
    } catch (error) {
        getError(error)
        dispatch(getAllAgenciesFailure(error.response.data))
    }
}
export async function getAgencyReviewByIdApi(dispatch, pageLimit, id) {
    dispatch(getAgencyReviewById())
    try {
        let { data } = await getRequest(`${API.agency.getAgencyReviewById}/${id}?page=${pageLimit.page}&limit=${pageLimit.limit}`)
        dispatch(getAgencyReviewByIdSuccess(data))
    } catch (error) {
        getError(error)
        dispatch(getAgencyReviewByIdFailure(error.response.data))
    }
}