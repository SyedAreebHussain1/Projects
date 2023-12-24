import { API } from '../../../config/apiEndPoints'
import { getError, getRequest } from "../../../utils/baseApi";
import {
    getPropertiesOverview,
    getPropertiesOverviewSuccess,
    getPropertiesOverviewFailure,
} from '../../slices/Dashboard/getPropertiesOverviewSlice';
import {
    getUsersInfoMonthly,
    getUsersInfoMonthlySuccess,
    getUsersInfoMonthlyFailure,
} from '../../slices/Dashboard/getUsersInfoMonthlySlice'



export async function getPropertiesOverviewApi(dispatch) {
    dispatch(getPropertiesOverview())
    try {
        let res = await getRequest(API.dashboard.getPropertiesOverview)
        dispatch(getPropertiesOverviewSuccess(res.data))
    } catch (error) {
        getError(error)
        dispatch(getPropertiesOverviewFailure(error.response.data))
    }
}

export async function getUsersInfoMonthlyApi(dispatch) {
    dispatch(getUsersInfoMonthly())
    try {
        let { data } = await getRequest(API.dashboard.getUsersInfoMonthly)
        dispatch(getUsersInfoMonthlySuccess(data))
    } catch (error) {
        getError(error)
        dispatch(getUsersInfoMonthlyFailure(error.response.data))
    }
}