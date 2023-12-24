import { API } from "../../../config/apiEndPoints"
import { getError, getRequest } from "../../../utils/baseApi"
import {
    getAllAuthUser, getAllAuthUserSuccess, getAllAuthUserFailure
} from "../../slices/AppUsers/getAllAuthUserSlice"
import { getAllAuthUserNoPagination, getAllAuthUserNoPaginationSuccess, getAllAuthUserNoPaginationFailure } from "../../slices/AppUsers/getAllAuthUserNoPaginationSlice"
import { getAuthUser, getAuthUserSuccess, getAuthUserFailure } from "../../slices/AppUsers/getAuthUserSlice"



export async function getAllAuthUserApi(dispatch, pageLimit, search, selectedFilter, range,
    isVerified) {
    dispatch(getAllAuthUser())
    try {
        const query = {
            Email: 'email',
            Phone: 'phone',
            'Full Name': 'fullName',
            Role: 'roleTitle',
            'Agency Name': 'agencyName',
            'User Code': 'userCode',
        }
        let { data } = await getRequest(`${API.appUsers.getAllAuthUser}?page=${pageLimit.page}&limit=${pageLimit.limit
            }${selectedFilter && search
                ? `&${query[selectedFilter]}=${search}`
                : range &&
                    Array.isArray(range) &&
                    range.length > 0 &&
                    range[0] !== '' &&
                    range[1] !== ''
                    ? `&startDate=${range[0]}&endDate=${range[1]}`
                    : isVerified
                        ? `&isVerified=${isVerified === 'Verified' ? 'true' : 'false'}`
                        : ''
            }`)
        dispatch(getAllAuthUserSuccess(data))
    } catch (error) {
        getError(error)
        dispatch(getAllAuthUserFailure(error.response.data))
    }
}
export async function getAllAuthUserNoPaginationApi(dispatch,
    onSuccessExcel,
    search,
    selectedFilter,
    range,
    isVerified) {
    dispatch(getAllAuthUserNoPagination())
    try {
        const query = {
            Email: 'email',
            Phone: 'phone',
            'Full Name': 'fullName',
            Role: 'roleTitle',
            'Agency Name': 'agencyName',
            'User Code': 'userCode',
        }
        let { data } = await getRequest(`${API.appUsers.getAllAuthUserNoPagination}${selectedFilter && search
            ? `?${query[selectedFilter]}=${search}`
            : range &&
                Array.isArray(range) &&
                range.length > 0 &&
                range[0] !== '' &&
                range[1] !== ''
                ? `?startDate=${range[0]}&endDate=${range[1]}`
                : isVerified
                    ? `?isVerified=${isVerified === 'Verified' ? 'true' : 'false'}`
                    : ''
            }`)
        dispatch(getAllAuthUserNoPaginationSuccess(data))
        onSuccessExcel(data)
    } catch (error) {
        getError(error)
        dispatch(getAllAuthUserNoPaginationFailure(error.response.data))
    }
}
export async function getAuthUserApi(dispatch, id) {
    dispatch(getAuthUser())
    try {
        let { data } = await getRequest(`${API.appUsers.getAuthUser}/${id}`)
        dispatch(getAuthUserSuccess(data))
    } catch (error) {
        getError(error)
        dispatch(getAuthUserFailure(error.response.data))
    }
}