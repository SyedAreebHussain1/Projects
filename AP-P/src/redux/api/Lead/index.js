import { API } from "../../../config/apiEndPoints"
import { getError, getRequest } from "../../../utils/baseApi"
import {
    getAllLeadsForAdmin,
    getAllLeadsForAdminSuccess,
    getAllLeadsForAdminFailure
} from "../../slices/Lead/getAllLeadsForAdminSlice"

export async function getAllLeadsForAdminApi(dispatch, pageLimit, search, selectedFilter) {
    dispatch(getAllLeadsForAdmin())
    try {
        const query = {
            Agency: 'agencyName',
            'Lead Name': 'name',
            'Project Name': 'projectName',
        }
        let url = `${API.leads.getAllLeadsForAdmin}?page=${pageLimit.page}&limit=${pageLimit.limit}${selectedFilter && search ? `&${query[selectedFilter]}=${search}` : ''}`
        let { data } = await getRequest(url)
        dispatch(getAllLeadsForAdminSuccess(data))
    } catch (error) {
        getError(error)
        dispatch(getAllLeadsForAdminFailure(error.response.data))
    }
}
