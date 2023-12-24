import { API } from "../../../config/apiEndPoints"
import { getError, getRequest, patchRequest, postRequest } from "../../../utils/baseApi"
import { successMessage } from "../../../utils/message"
import {
    getAllCoordinator,
    getAllCoordinatorSuccess,
    getAllCoordinatorFailure,
} from "../../slices/ProjectCoordinator/getAllCoordinatorSlice"
import {
    getProjects,
    getProjectsSuccess,
    getProjectsFailure,
} from "../../slices/ProjectCoordinator/getProjectsSlice"
import {
    getLogsByProjectIdForAdmin,
    getLogsByProjectIdForAdminSuccess,
    getLogsByProjectIdForAdminFailure,
} from "../../slices/ProjectCoordinator/getLogsByProjectIdForAdminSlice"
import {
    suspendCoordinator,
    suspendCoordinatorSuccess,
    suspendCoordinatorFailure,
} from "../../slices/ProjectCoordinator/suspendCoordinatorSlice"
import {
    getProjectsForAssign,
    getProjectsForAssignSuccess,
    getProjectsForAssignFailure,
} from "../../slices/ProjectCoordinator/getProjectsForAssignSlice"
import {
    proCooAssignProject,
    proCooAssignProjectSuccess,
    proCooAssignProjectFailure,
} from "../../slices/ProjectCoordinator/proCooAssignProjectSlice"
import {
    getProCooRoleList,
    getProCooRoleListSuccess,
    getProCooRoleListFailure,
} from "../../slices/ProjectCoordinator/getProCooRoleListSlice.js"
import {
    pcSignUp,
    pcSignUpSuccess,
    pcSignUpFailure,
} from "../../slices/ProjectCoordinator/pcSignUpSlice.js"

export async function getAllCoordinatorApi(dispatch, pageLimit, search, selectedFilter) {
    dispatch(getAllCoordinator())
    try {
        const query = {
            Name: 'fullName',
        }
        let url = `${API.projectCoordinator.getAllCoordinator}?page=${pageLimit.page}&limit=${pageLimit.limit}${selectedFilter && search ? `&${query[selectedFilter]}=${search}` : ''}`
        let { data } = await getRequest(url)
        dispatch(getAllCoordinatorSuccess(data))
    } catch (error) {
        getError(error)
        dispatch(getAllCoordinatorFailure(error.response.data))
    }
}
export async function getProjectsApi(dispatch, pageLimit, search, selectedFilter, id) {
    dispatch(getProjects())
    try {
        const query = {
            Name: 'projectName',
        }
        let url = `${API.projectCoordinator.getProjects}/${id}?page=${pageLimit.page}&limit=${pageLimit.limit}${selectedFilter && search ? `&${query[selectedFilter]}=${search}` : ''}`
        let { data } = await getRequest(url)
        dispatch(getProjectsSuccess(data))
    } catch (error) {
        getError(error)
        dispatch(getProjectsFailure(error.response.data))
    }
}
export async function getLogsByProjectIdForAdminApi(dispatch, pageLimit, search, selectedFilter, id) {
    dispatch(getLogsByProjectIdForAdmin())
    try {
        const query = {
            Name: 'clientName',
        }
        let url = `${API.projectCoordinator.getLogsByProjectIdForAdmin}/${id}?page=${pageLimit.page}&limit=${pageLimit.limit}${selectedFilter && search ? `&${query[selectedFilter]}=${search}` : ''}`
        let { data } = await getRequest(url)
        dispatch(getLogsByProjectIdForAdminSuccess(data))
    } catch (error) {
        getError(error)
        dispatch(getLogsByProjectIdForAdminFailure(error.response.data))
    }
}
export async function getProjectsForAssignApi(dispatch, pageLimit, id) {
    dispatch(getProjectsForAssign())
    try {
        let url = `${API.projectCoordinator.getProjectsForAssign}/${id}?page=${pageLimit.page}&limit=${pageLimit.limit}`
        let { data } = await getRequest(url)
        dispatch(getProjectsForAssignSuccess(data))
    } catch (error) {
        getError(error)
        dispatch(getProjectsForAssignFailure(error.response.data))
    }
}
export async function getProCooRoleListApi(dispatch) {
    dispatch(getProCooRoleList())
    try {
        let url = `${API.projectCoordinator.getProCooRoleList}`
        let { data } = await getRequest(url)
        dispatch(getProCooRoleListSuccess(data))
    } catch (error) {
        getError(error)
        dispatch(getProCooRoleListFailure(error.response.data))
    }
}
export async function suspendCoordinatorApi(dispatch, body, id) {
    dispatch(suspendCoordinator())
    try {
        let url = `${API.projectCoordinator.suspendCoordinator}/${id}`
        let { data } = await patchRequest(url, body)
        dispatch(suspendCoordinatorSuccess(data))
    } catch (error) {
        getError(error)
        dispatch(suspendCoordinatorFailure(error.response.data))
    }
}
export async function proCooAssignProjectApi(dispatch, body, onSuccess) {
    dispatch(proCooAssignProject())
    try {
        let url = `${API.projectCoordinator.proCooAssignProject}`
        let { data } = await postRequest(url, body)
        dispatch(proCooAssignProjectSuccess(data))
        successMessage(data?.message)
        onSuccess()
    } catch (error) {
        getError(error)
        dispatch(proCooAssignProjectFailure(error.response.data))
    }
}
export async function pcSignUpApi(dispatch, body, onSuccess) {
    dispatch(pcSignUp())
    try {
        let url = `${API.projectCoordinator.pcSignUp}`
        let { data } = await postRequest(url, body)
        dispatch(pcSignUpSuccess(data))
        successMessage(data?.message)
        onSuccess()
    } catch (error) {
        getError(error)
        dispatch(pcSignUpFailure(error.response.data))
    }
}
