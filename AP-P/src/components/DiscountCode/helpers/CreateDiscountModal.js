import React, { useEffect, useState } from 'react'
import { Button, Col, DatePicker, Divider, Form, Modal, Row } from 'antd'
import moment from 'moment'
import { useForm } from 'antd/es/form/Form'
import { useSelector, useDispatch } from 'react-redux'
import TextField from '../../../utils/components/InputFields/TextField'
import InputLabel from '../../../utils/components/InputFields/InputLabel'
import NumberField from '../../../utils/components/InputFields/NumberField'
import { SelectField } from '../../../utils/components/InputFields/SelectField'

import Upload from '../../../utils/components/Upload/Upload'
import { useUpload } from '../../../utils/hooks/useUpload'
import SingleFilePreviewer from '../../../utils/components/Upload/SingleFilePreviewer'
import { clearUploadAdvertisementDiscount } from '../../../redux/slices/Discount/uploadAdvertisementDiscountSlice'
import { uploadAdvertisementDiscountApi, addDiscountApi } from '../../../redux/api/Discount'

const CreateDiscountModal = ({ visible, toggle }) => {
    const [
        backgroundImage,
        setBackgroundImage,
        backgroundImagePreview,
        deleteBackgroundImage,
    ] = useUpload()
    const dispatch = useDispatch()
    const [form] = useForm()
    const [range, setRange] = useState(null)
    const [startDate, setStartDate] = useState(null)
    const { RangePicker } = DatePicker

    const uploadAdvertisementDiscount = useSelector((state) => state?.uploadAdvertisementDiscount)
    const addDiscount = useSelector((state) => state?.addDiscount)
    function onCancel() {
        clearUploadAdvertisementDiscount()
        toggle()
    }
    function onSuccess() {
        dispatch(clearUploadAdvertisementDiscount())
        toggle()
    }
    function onFinish(value) {
        if (value) {
            const body = {
                discountCode: value?.discountCode,
                discountPercentage: value?.discountPer,
                noOfUsage: value?.noOfUsage,
                startDate: range?.[0],
                expireOn: range?.[1],
                backgroundImage: uploadAdvertisementDiscount?.data?.data,
                discountType: value.discountType
            }
            addDiscountApi(dispatch, body, onSuccess)
        }
    }
    useEffect(() => {
        if (backgroundImage.length > 0) {
            const formData = new FormData()
            formData.append('advertisement', backgroundImage[0])
            uploadAdvertisementDiscountApi(dispatch, formData)
        }
    }, [backgroundImage])
    return <Modal
        title={<h3 className="text-[18px] font-semibold">Add Discount Codes</h3>}
        open={visible}
        onCancel={onCancel}
        footer={null}
        centered={true}
        width={600}
    >
        <Divider />
        <Form
            name='normal_login'
            className='login-form'
            onFinish={onFinish}
            form={form}
        >
            <div>
                <Row gutter={16}>
                    <Col lg={24} sm={24}>
                        <div>
                            <InputLabel children="Discount Code" />
                            <TextField name="discountCode" />
                        </div>
                        <div>
                            <InputLabel children="Discount Percentage" />
                            <NumberField name="discountPer" onChange={(e) => {
                                if (e.target.value > 100) {
                                    form.setFieldValue('discountPer', 100)
                                }
                            }} />
                        </div>
                        <div>
                            <InputLabel children="No of Usage" />
                            <NumberField name="noOfUsage" />
                        </div>
                        <div>
                            <InputLabel children="Date" />
                            <Form.Item
                                name="date"
                                rules={[{ required: true, message: 'Date is required' }]}
                            >
                                <RangePicker
                                    className="w-full h-[45px]"
                                    separator={false}
                                    onChange={(value, dateString) => {
                                        if (value === null) {
                                            setStartDate(null)
                                        }
                                        setRange(dateString)
                                    }}
                                    disabledDate={(current) => {
                                        let customDate = moment().format('YYYY-MM-DD')
                                        return (
                                            current && current < moment(customDate, 'YYYY-MM-DD')
                                        )
                                    }}
                                    onCalendarChange={(value, dateString) => {
                                        if (value && value[0] === null && value[1] === null) {
                                            return
                                        }
                                        setStartDate(value && value[0])
                                    }}
                                />
                            </Form.Item>
                        </div>
                        <div>
                            <InputLabel children="Discount Type" />
                            <SelectField name="discountType" options={[
                                { label: 'Regular', value: 'Regular' },
                                {
                                    label: 'Cancel Subscription',
                                    value: 'CancelSubscription',
                                },
                            ]} />
                        </div>
                        <div>
                            <Row gutter={10}>
                                <Col lg={12} xs={24}>
                                    <Upload
                                        name="backgroundImage"
                                        files={backgroundImage}
                                        setFiles={setBackgroundImage}
                                        supportedFileTypes={['png', 'jpg', 'jpeg', 'mp4']}
                                        supportedText={'Files Supported  JPG,JPEG,MP4'}
                                    />
                                </Col>
                                <Col lg={12} xs={24}>
                                    <div className="" style={{ alignItems: '' }}>
                                        {backgroundImagePreview.length > 0 && (
                                            <div className="relative">
                                                <SingleFilePreviewer
                                                    imagePreviews={backgroundImagePreview}
                                                    uploadAdvertisement={
                                                        uploadAdvertisementDiscount?.data?.data
                                                    }
                                                    width={241}
                                                    height={197}
                                                    deleteMasterFile={deleteBackgroundImage}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <div className="flex justify-end mt-[55px]">
                    <Button
                        size="middle"
                        key="1"
                        className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
                        htmlType="submit"
                        loading={addDiscount?.loading}
                    >
                        Add Now
                    </Button>
                </div>
            </div>
        </Form>
    </Modal>
}
export default CreateDiscountModal