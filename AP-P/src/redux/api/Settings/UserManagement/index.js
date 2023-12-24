import { API } from "../../../../config/apiEndPoints"
import { getError, getRequest, patchRequest } from "../../../../utils/baseApi"
import { successMessage } from "../../../../utils/message"
import {
    editAdminUsersRole,
    editAdminUsersRoleSuccess,
    editAdminUsersRoleFailure
} from "../../../slices/Settings/UserManagement/editAdminUsersRoleSlice"
import {
    getUserManagementList,
    getUserManagementListSuccess,
    getUserManagementListFailure
} from "../../../slices/Settings/UserManagement/getUserManagementListSlice"

export async function getUserManagementListApi(dispatch, pageLimit, search, selectedFilter) {
    dispatch(getUserManagementList())
    try {
        const query = {
            'Full Name': 'fullName',
            Email: 'email',
            Phone: 'phone',
            Role: 'roleTitle',
        }
        let { data } = await getRequest(
            `${API.userMangement.getUserManagementList}?page=${pageLimit.page
            }&limit=${pageLimit.limit}${selectedFilter && search ? `&${query[selectedFilter]}=${search}` : ''
            }`
        )
        dispatch(getUserManagementListSuccess(data))
    } catch (error) {
        getError(error)
        dispatch(getUserManagementListFailure(error.response.data))
    }
}

export async function editAdminUsersRoleApi(dispatch, body, id, onSuccess) {
    dispatch(editAdminUsersRole())
    try {
        let { data } = await patchRequest(`${API.userMangement.editAdminUsersRole}/${id}`, body)
        dispatch(editAdminUsersRoleSuccess(data))
        successMessage(data?.message)
        onSuccess()
    } catch (error) {
        getError(error)
        dispatch(editAdminUsersRoleFailure(error.response.data))
    }
}