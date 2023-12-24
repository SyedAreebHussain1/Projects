import { API } from "../../../../config/apiEndPoints"
import { getError, getRequest } from "../../../../utils/baseApi"
import { successMessage } from "../../../../utils/message"
import {
    withUserByRoleId,
    withUserByRoleIdSuccess,
    withUserByRoleIdFailure
} from "../../../slices/Settings/Role/withUserByRoleIdSilce"
export async function withUserByRoleIdApi(dispatch,
    pageLimit,
    search) {
    dispatch(withUserByRoleId())
    try {
        const query = {
            Role: 'title',
        }
        let { data } = await getRequest(
            `${API.roles.withUserByRoleId}?page=${pageLimit.page}&limit=${pageLimit.limit
            }${search ? `&${query.Role}=${search}` : ''}`
        )
        dispatch(withUserByRoleIdSuccess(data))
    } catch (error) {
        getError(error)
        dispatch(withUserByRoleIdFailure(error.response.data))
    }
}