import { Button, Col, Divider, Form, Modal, Row } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'antd/es/form/Form'
import { useSelector } from 'react-redux'
import InputLabel from '../../../../utils/components/InputFields/InputLabel'
import TextField from '../../../../utils/components/InputFields/TextField'
import NumberField from '../../../../utils/components/InputFields/NumberField'
import { SelectField } from '../../../../utils/components/InputFields/SelectField'
import CheckboxField from '../../../../utils/components/InputFields/CheckboxField'
import { createPwPackagesApi, uploadAdvertisementPackageApi, uploadAdvertisementPackageIconApi } from '../../../../redux/api/SubscriptionManagement/Packages'

import { useUpload } from '../../../../utils/hooks/useUpload'
import Upload from '../../../../utils/components/Upload/Upload'


import SingleFilePreviewer from '../../../../utils/components/Upload/SingleFilePreviewer'
import { errorMessage } from '../../../../utils/message'
import { clearUploadAdvertisementPackage } from '../../../../redux/slices/SubscriptionManagement/Packages/uploadAdvertisementPackageSlice'
import { clearUploadAdvertisementPackageIcon } from '../../../../redux/slices/SubscriptionManagement/Packages/uploadAdvertisementPackageIconSlice'

const CreatePackageModal = ({ visible, toggle }) => {
    const dispatch = useDispatch()
    const [form] = useForm()
    const noOfMonths = {
        Monthly: 1,
        Quarterly: 3,
        Annually: 12,
        'Half Yearly': 6,
        'Annually but deducted monthly': 1,
    }
    const [
        backgroundImage,
        setBackgroundImage,
        backgroundImagePreview,
        deleteBackgroundImage,
    ] = useUpload()
    const [iconImage, setIconImage, iconPreview, deleteIconImage] = useUpload()
    const uploadAdvertisementPackage = useSelector((state) => state?.uploadAdvertisementPackage)
    const uploadAdvertisementPackageIcon = useSelector((state) => state?.uploadAdvertisementPackageIcon)
    const createPwPackages = useSelector((state) => state?.createPwPackages)


    function onFinish(values) {
        const body = {
            title: values.packageNmae,
            subtitle: values.plan,
            numberOfMonth: noOfMonths[values.plan],
            noListing: values.noOfListings,
            noOfUserLimit: values.userLimits,
            hotListing: values.hotListings,
            charges: values.charges,
            isPublic: values?.isPublic?.length > 0,
            rentalCommission: values.rentalCommission,
            regCommission: values.regCommission,
            noCommissionCount: values.noCommissionCount,
            iconUrl: uploadAdvertisementPackageIcon?.data && uploadAdvertisementPackageIcon?.data?.data,
            backgroundUrl: uploadAdvertisementPackage?.data && uploadAdvertisementPackage?.data?.data,
            noOfRefresh: values.noOfRefresh,
            fixCommission: Number(values?.fixCommission),
        }
        if (backgroundImagePreview?.[0]?.url && iconPreview?.[0]?.url) {
            createPwPackagesApi(dispatch, body, onSuccess)
        } else {
            if (iconPreview?.[0]?.url) {
                errorMessage("Background Image requried")
            } else {
                errorMessage("Icon are requried")
            }
        }
    }
    function onSuccess() {
        dispatch(clearUploadAdvertisementPackageIcon())
        dispatch(clearUploadAdvertisementPackage())
        toggle()
    }
    function onCancel() {
        dispatch(clearUploadAdvertisementPackageIcon())
        dispatch(clearUploadAdvertisementPackage())
        toggle()
    }
    useEffect(() => {
        if (backgroundImage.length > 0) {
            const formData = new FormData()
            formData.append('advertisement', backgroundImage[0])
            uploadAdvertisementPackageApi(dispatch, formData)
        }
    }, [backgroundImage])
    useEffect(() => {
        if (iconImage.length > 0) {
            const formData = new FormData()
            formData.append('advertisement', iconImage[0])
            uploadAdvertisementPackageIconApi(dispatch, formData)
        }
    }, [iconImage])
    return (
        <Modal
            title={<h3 className="text-[18px] font-semibold">Add Subscription</h3>}
            open={visible}
            onCancel={onCancel}
            footer={null}
            centered={true}
            width={719}
        >
            <Divider />

            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                form={form}
            >
                <div>
                    <Row gutter={16}>
                        <Col lg={24} sm={24}>
                            <div>
                                <InputLabel>Package Name</InputLabel>
                                <TextField name="packageNmae" />
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col lg={12} sm={24}>
                            <div>
                                <InputLabel>No of Listings</InputLabel>
                                <NumberField name="noOfListings" />
                            </div>
                            <div>
                                <InputLabel>User Limits</InputLabel>
                                <NumberField name="userLimits" />
                            </div>
                            <div>
                                <InputLabel>Charges</InputLabel>
                                <NumberField name="charges" prefix={'PKR'}
                                    onChange={(e) => {
                                        if (Number(e.target.value) > Number(form.getFieldValue("fixCommission"))) {
                                            form.setFieldValue('fixCommission', null)
                                        }
                                    }}
                                />
                            </div>
                            <div>
                                <InputLabel>Recurring Commission (%)</InputLabel>
                                <NumberField name="rentalCommission" />
                            </div>
                            <div>
                                <InputLabel>No of Refreshes</InputLabel>
                                <NumberField name="noOfRefresh" />
                            </div>
                        </Col>
                        <Col lg={12} sm={24}>
                            <div>
                                <InputLabel>Plan</InputLabel>
                                <SelectField
                                    name="plan"
                                    options={Object.keys(noOfMonths).map((month) => {
                                        return {
                                            label: month,
                                            value: month,
                                        }
                                    })}
                                />
                            </div>
                            <div>
                                <InputLabel>Hot Listings</InputLabel>
                                <NumberField name="hotListings" />
                            </div>
                            <div>
                                <InputLabel>First month Commission (%)</InputLabel>
                                <NumberField name="regCommission"

                                />
                            </div>

                            <div>
                                <InputLabel>No of months for RC</InputLabel>
                                <NumberField name="noCommissionCount" />
                            </div>
                            <div>
                                <InputLabel>Fix Commission (Amount)</InputLabel>
                                <NumberField
                                    name="fixCommission"
                                    onChange={(e) => {
                                        if (Number(e.target.value) > Number(form.getFieldValue("charges"))) {
                                            form.setFieldValue('fixCommission', Number(form.getFieldValue("charges")))
                                        }
                                    }}
                                />
                            </div>
                        </Col>
                    </Row>

                    <CheckboxField
                        name="isPublic"
                        options={[{ label: 'Public', value: 'isPublic' }]}
                        className="mt-[10px]"
                    />
                    <Row gutter={16}>
                        <Col lg={12} sm={24}>
                            <div className="flex flex-col gap-3 mb-4">
                                <InputLabel>Background Image</InputLabel>
                                <Upload
                                    name="backgroundImage"
                                    files={backgroundImage}
                                    setFiles={setBackgroundImage}
                                    supportedFileTypes={['png', 'jpg', 'jpeg']}
                                    supportedText={'Files Supported  JPG,JPEG,PNG'}
                                    fileName="BACKGROUNDIMAGE"
                                    disabled={backgroundImage.length > 0}
                                />
                            </div>
                            {backgroundImagePreview.length > 0 && (
                                <div className="relative">
                                    <SingleFilePreviewer
                                        imagePreviews={backgroundImagePreview}
                                        uploadAdvertisement={backgroundImagePreview[0].url}
                                        width={241}
                                        height={197}
                                        deleteMasterFile={deleteBackgroundImage}
                                    />
                                </div>
                            )}
                        </Col>
                        <Col lg={12} sm={24}>
                            <div className="flex flex-col gap-3 mb-4">
                                <InputLabel>Icon</InputLabel>
                                <Upload
                                    name="iconImage"
                                    files={iconImage}
                                    setFiles={setIconImage}
                                    supportedFileTypes={['png', 'jpg', 'jpeg']}
                                    supportedText={'Files Supported  JPG,JPEG,PNG'}
                                    fileName="ICONIMAGE"
                                    disabled={iconImage.length > 0}
                                />
                            </div>
                            {iconPreview.length > 0 && (
                                <div className="relative">
                                    <SingleFilePreviewer
                                        imagePreviews={iconPreview}
                                        uploadAdvertisement={iconPreview[0].url}
                                        width={241}
                                        height={197}
                                        deleteMasterFile={deleteIconImage}
                                    />
                                </div>
                            )}
                        </Col>
                    </Row>
                    <div className="flex justify-end mt-[55px]">
                        <Button
                            size="middle"
                            key="1"
                            className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
                            loading={createPwPackages.loading}
                            htmlType="submit"
                        >
                            Add Now
                        </Button>
                    </div>
                </div>
            </Form>
        </Modal>
    )

}
export default CreatePackageModal