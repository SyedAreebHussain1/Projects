import { Button, Col, Divider, Form, Modal, Row } from 'antd'
import React, { useState } from 'react'
import InputLabel from '../../../../utils/components/InputFields/InputLabel'
import NumberField from '../../../../utils/components/InputFields/NumberField'
import { useForm } from 'antd/es/form/Form'
import { useSelector } from 'react-redux'
import en from 'world_countries_lists/data/countries/en/world.json'
import CountryPhoneInput, { ConfigProvider } from 'antd-country-phone-input'
import { useDispatch } from 'react-redux'
import TextField from '../../../../utils/components/InputFields/TextField'
import { investorAuthApi } from '../../../../redux/api/SmartSellingPoint/Investor'

const AddNewInvestor = ({ visible, toggle }) => {
    const dispatch = useDispatch()
    const [form] = useForm()
    const [phone, setPhone] = useState("")
    const { loading } = useSelector((state) => state?.investorAuth)

    function onCancel() {
        toggle()
        setPhone("")
        form.resetFields()
    }
    function onSuccess() {
        toggle()
        setPhone("")
        form.resetFields()
    }
    function onFinish(values) {
        if (phone) {
            const body = {
                ...values,
                phone: phone.phone.substr(1, phone?.code?.toString().length) === phone?.code?.toString() ?
                    `+${phone?.code?.toString()}${phone.phone.substr(phone?.code?.toString().length + 1, phone.phone.length)}` :
                    `+${phone?.code?.toString()}${phone.phone}`
            }
            investorAuthApi(dispatch, body, onSuccess)
        }
    }
    return (
        <Modal
            title={<h3 className="text-[18px] font-semibold">Add New Investor</h3>}
            open={visible}
            onCancel={onCancel}
            footer={null}
            centered={true}
            width={700}
        >
            <Divider />
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Row gutter={16}>
                    <Col lg={24} sm={24}>
                        <Row gutter={16}>
                            <Col span={12}>
                                <div>
                                    <InputLabel children="Name" />
                                    <TextField name="fullName" autoComplete="off" />
                                </div>
                            </Col>
                            <Col span={12}>
                                <div>
                                    <InputLabel children="CNIC" />
                                    <NumberField name="cnic" />
                                </div>
                            </Col>
                            <Col span={12}>
                                <div>
                                    <InputLabel children="Mobile no" />
                                    <br />
                                    <ConfigProvider locale={en}>
                                        <CountryPhoneInput
                                            name="phone"
                                            inline
                                            onKeyPress={(event) => {
                                                if (!/[0-9,.]/.test(event.key)) {
                                                    event.preventDefault()
                                                }
                                            }}
                                            onChange={setPhone}
                                            maxLength={11}
                                            defaultValue={{
                                                short: 'PK',
                                            }}
                                        />
                                    </ConfigProvider>
                                </div>
                            </Col>
                            <Col span={12}>
                                <div>
                                    <InputLabel children="Email" />
                                    <TextField name="email" />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div className="flex justify-end mt-[55px]">
                    <Button
                        size="middle"
                        key="1"
                        className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
                        loading={loading}
                        htmlType="submit"
                    >
                        Add Now
                    </Button>
                </div>
            </Form>
        </Modal>
    )
}

export default AddNewInvestor