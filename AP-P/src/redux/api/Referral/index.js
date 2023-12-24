import {
    getReferral,
    getReferralSuccess,
    getReferralFailure,
} from '../../slices/Referral/getReferralSlice'
import { getError, getRequest } from '../../../utils/baseApi'
import { API } from '../../../config/apiEndPoints'

export async function getReferralApi(dispatch,
    referralCode,
    pageLimit,
    onSuccess) {
    dispatch(getReferral())
    try {
        let { data } = await getRequest(
            `${API.referral.getReferral}/${referralCode}?page=${pageLimit.page}&limit=${pageLimit.limit}`
        )
        dispatch(getReferralSuccess(data))
        onSuccess()
    } catch (error) {
        getError(error)
        dispatch(getReferralFailure(error.response.data))
    }
}