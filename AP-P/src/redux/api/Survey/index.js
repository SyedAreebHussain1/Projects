import { API } from "../../../config/apiEndPoints"
import { getError, getRequest, patchRequest, postRequest } from "../../../utils/baseApi"
import {
    findAllSurvey,
    findAllSurveySuccess,
    findAllSurveyFailure,
} from "../../slices/Survey/findAllSurveySlice"
import {
    findAllSurveyLogs,
    findAllSurveyLogsSuccess,
    findAllSurveyLogsFailure,
} from "../../slices/Survey/findAllSurveyLogsSlice.js"
import {
    AddSurveyForm,
    AddSurveyFormSuccess,
    AddSurveyFormFailure,
} from "../../slices/Survey/AddSurveyFormSlice.js"
import {
    editdSurveyForm,
    editdSurveyFormSuccess,
    editdSurveyFormFailure,
} from "../../slices/Survey/editdSurveyFormSlice.js"
import { successMessage } from "../../../utils/message.js"


export async function findAllSurveyApi(dispatch, pageLimit) {
    dispatch(findAllSurvey())
    try {
        let url = `${API.survey.findAllSurvey}?page=${pageLimit.page}&limit=${pageLimit.limit}`
        let { data } = await getRequest(url)
        dispatch(findAllSurveySuccess(data))
    } catch (error) {
        getError(error)
        dispatch(findAllSurveyFailure(error.response.data))
    }
}

export async function findAllSurveyLogsApi(dispatch, pageLimit) {
    dispatch(findAllSurveyLogs())
    try {
        let url = `${API.survey.findAllSurveyLogs}?page=${pageLimit.page}&limit=${pageLimit.limit}`
        let { data } = await getRequest(url)
        dispatch(findAllSurveyLogsSuccess(data))
    } catch (error) {
        getError(error)
        dispatch(findAllSurveyLogsFailure(error.response.data))
    }
}

export async function addSurveyFormApi(dispatch, body, onSuccess) {
    dispatch(AddSurveyForm())
    try {
        let url = `${API.survey.AddSurveyForm}`
        let { data } = await postRequest(url, body)
        dispatch(AddSurveyFormSuccess(data))
        successMessage(data?.message)
        onSuccess()
    } catch (error) {
        getError(error)
        dispatch(AddSurveyFormFailure(error.response.data))
    }
}
export async function editdSurveyFormApi(dispatch, body, id, onSuccess) {
    dispatch(editdSurveyForm())
    try {
        let res = await patchRequest(`${API.survey.editdSurveyForm}/${id}`, body)
        dispatch(editdSurveyFormSuccess(res.data))
        successMessage(res.data.message)
        onSuccess()
    } catch (error) {
        getError(error)
        dispatch(editdSurveyFormFailure(error.response.data))
    }
}
