import { Button, Col, Divider, Form, Modal, Row } from 'antd'
import { useForm } from 'antd/es/form/Form'
import React, { useEffect, useState } from 'react'
import InputLabel from '../../../../utils/components/InputFields/InputLabel'
import TextField from '../../../../utils/components/InputFields/TextField'
import { useSelector } from 'react-redux'
import TextAreaField from '../../../../utils/components/InputFields/TextAreaField'
import { editdSurveyFormApi } from '../../../../redux/api/Survey'
import MapLocation from './MapLocation'
import { useDispatch } from 'react-redux'
import { errorMessage } from '../../../../utils/message'
const AddSurveyModal = ({ visible, toggle, editData }) => {
    const [form] = useForm()
    const dispatch = useDispatch()
    const [markers, setMarkers] = useState([
        {
            lat: Number(editData.let),
            lng: Number(editData.long),
        },
    ])
    const [selectedPlace, setSelectedPlace] = useState({})
    const { loading } = useSelector((state) => state?.editdSurveyForm)
    function onFinish(value) {
        if (!markers[0]?.lat && !markers[0]?.lng) {
            errorMessage("Please select location from map")
        }
        const body = {
            buildersAndDeveloperProfile: value?.buildersAndDeveloperProfile,
            constructionAndDevelopmentRating: value?.constructionAndDevelopmentRating,
            location: selectedPlace?.address,
            "let": markers[0]?.lat,
            "long": markers[0]?.lng,
            nearestLandMark: value?.nearestLandMark,
            paymentSchedule: value?.paymentSchedule,
            plotAndBuiltUpUnitSizes: value?.plotAndBuiltUpUnitSizes,
            producttCategory: value?.producttCategory,
            projectCategory: value?.projectCategory,
            projectCompleteTime: value?.projectCompleteTime,
            projectDescription: value?.projectDescription,
            projectSize: value?.projectSize,
            projectTitle: value?.projectTitle,
        }
        Object.keys(body).length > 13 && editdSurveyFormApi(dispatch, body, editData?.id, onSuccess)
    }
    useEffect(() => {
        if (selectedPlace?.address && selectedPlace?.city) {
            form.setFieldsValue({
                location: selectedPlace?.address,
            })
        }
    }, [selectedPlace])
    useEffect(() => {
        form.setFieldsValue(editData)
    }, [editData])
    function onSuccess() {
        toggle()
        form.resetFields()
    }
    function onCancel() {
        toggle()
        form.resetFields()
    }
    return (
        <Modal
            title={<h3 className="text-[18px] font-semibold">Edit Survey</h3>}
            open={visible}
            onCancel={onCancel}
            footer={null}
            centered={true}
            width={1000}
        >
            <Form
                name='normal_login'
                className='login-form'
                onFinish={onFinish}
                form={form}
            >
                <div>
                    <Row gutter={16}>
                        <Col lg={24} sm={24}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <div>
                                        <InputLabel children="Project Title" />
                                        <TextField name="projectTitle" autoComplete="off" />
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div>
                                        <InputLabel children="Project Size" />
                                        <TextField name="projectSize" />
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div>
                                        <InputLabel children="Project Category" />
                                        <TextField name="projectCategory" />
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div>
                                        <InputLabel children="Plot And Built Up Unit Sizes" />
                                        <TextField name="plotAndBuiltUpUnitSizes" />
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div>
                                        <InputLabel children="Project Complete Time" />
                                        <TextField name="projectCompleteTime" />
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div>
                                        <InputLabel children="Nearest Land Mark" />
                                        <TextField name="nearestLandMark" />
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div>
                                        <InputLabel children="Product Category" />
                                        <TextField name="producttCategory" />
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div>
                                        <InputLabel children="Construction And Development Rating" />
                                        <TextField name="constructionAndDevelopmentRating" />
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div>
                                        <InputLabel children="Payment Schedule" />
                                        <TextField name="paymentSchedule" />
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div>
                                        <InputLabel children="Builders And Developer Profile" />
                                        <TextField name="buildersAndDeveloperProfile" />
                                    </div>
                                </Col>
                                <Col span={24}>
                                    <div>
                                        <InputLabel children="Description" />
                                        <TextAreaField name="projectDescription" />
                                    </div>
                                </Col>
                                <Divider />
                                <Col span={12}>
                                    <div>
                                        <InputLabel children="Location" />
                                        <TextField name="location" />
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div>
                                        <MapLocation
                                            markers={markers}
                                            setMarkers={setMarkers}
                                            setSelectedPlace={setSelectedPlace}
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <div className="flex justify-end mt-[55px]">
                        <Button
                            size="middle"
                            key="2"
                            className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
                            htmlType="submit"
                            loading={loading}
                        >
                            Edit Now
                        </Button>
                    </div>
                </div>
            </Form>
        </Modal>
    )
}

export default AddSurveyModal