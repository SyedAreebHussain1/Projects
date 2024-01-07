import { API } from "../../../../config/apiEndPoints"
import { getError, getRequest, postRequest } from "../../../../utils/baseApi"
import { successMessage } from "../../../../utils/message"
import {
    getAllInvestors,
    getAllInvestorsSuccess,
    getAllInvestorsFailure,
} from "../../../slices/SmartSellingPoint/Investor/getAllInvestorsSlice"
import {
    investorAuth,
    investorAuthSuccess,
    investorAuthFailure,
} from "../../../slices/SmartSellingPoint/Investor/investorAuthSlice"

export async function getAllInvestorsApi(dispatch, pageLimit, search, selectedFilter) {
    dispatch(getAllInvestors())
    try {
        const query = {
            Name: "search"
        }
        let url = `${API.smartSellingPoint.getAllInvestors}?page=${pageLimit.page}&limit=${pageLimit.limit}${search ? `&${query[selectedFilter]}=${search}` : ''}`
        let { data } = await getRequest(url)
        dispatch(getAllInvestorsSuccess(data))
    } catch (error) {
        getError(error)
        dispatch(getAllInvestorsFailure(error.response.data))
    }
}
export async function investorAuthApi(dispatch, body, onSuccess) {
    dispatch(investorAuth())
    try {
        let url = `${API.smartSellingPoint.investorAuth}`
        let { data } = await postRequest(url, body)
        dispatch(investorAuthSuccess(data))
        successMessage(data?.message)
        onSuccess()
    } catch (error) {
        getError(error)
        dispatch(investorAuthFailure(error.response.data))
    }
}
