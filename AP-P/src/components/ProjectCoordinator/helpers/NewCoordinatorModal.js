import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Modal, Row, Divider, Checkbox, Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import CountryPhoneInput, { ConfigProvider } from 'antd-country-phone-input'
import { useForm } from 'antd/es/form/Form'
import en from 'world_countries_lists/data/countries/en/world.json'
import InputLabel from '../../../utils/components/InputFields/InputLabel'
import { SelectField } from '../../../utils/components/InputFields/SelectField'
import { getProCooRoleListApi, pcSignUpApi } from '../../../redux/api/ProjectCoordinator'


const NewCoordinatorModal = ({ visible, toggle }) => {
    const dispatch = useDispatch()
    const [form] = useForm()
    const [state, setState] = useState({
        isCheck: false,
        phone: {
            code: '+92',
            short: 'PK',
            phone: '',
        },
        whatsapp: {
            code: '+92',
            short: 'PK',
            phone: '',
        },
    })
    let { data } = useSelector((state) => state?.getProCooRoleList)
    let { loading } = useSelector((state) => state?.pcSignUp)

    useEffect(() => {
        visible && getProCooRoleListApi(dispatch)
    }, [visible])
    const onChangeCheck = (e) => {
        if (e.target.checked === true && state.phone !== '') {
            setState({
                ...state,
                whatsapp: {
                    code: state.phone.code,
                    short: state.phone.short,
                    phone: state.phone.phone,
                },
                isCheck: true,
            })
        } else {
            setState({
                ...state,
                whatsapp: {
                    code: '+92',
                    short: 'PK',
                    phone: '',
                },
                isCheck: false,
            })
        }
    }

    function onFinish(values) {
        const body = {
            fullName: values?.name,
            email: values?.email,
            phone: state.phone.code.toString().includes('+')
                ? `${state.phone.code}${state.phone.phone}`
                : `+${state.phone.code}${state.phone.phone}`,
            whatsappNo: state.whatsapp.code.toString().includes('+')
                ? `${state.phone.code}${state.phone.phone}`
                : `+${state.phone.code}${state.phone.phone}`,
            projectCoordinatorRoleId: values?.loungeOwnerId,
        }
        pcSignUpApi(dispatch, body, onSuccess)
    }
    const onChange = (value, name) => {
        setState({
            ...state,
            [name]: value,
        })
    }
    function onCancel() {
        toggle()
        form.resetFields()
    }
    function onSuccess() {
        toggle()
        form.resetFields()
    }
    return (
        <Modal
            title={<h3 className="text-[18px] font-semibold">Add Users Details</h3>}
            open={visible}
            onCancel={onCancel}
            footer={null}
            centered={true}
            width={713}
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
                            <Row gutter={16}>
                                <Col lg={12} sm={24}>
                                    <h4
                                        style={{ textAlign: 'start' }}
                                        className="text-[14px] pb-1"
                                    >
                                        Name <span style={{ color: 'red' }}>*</span>
                                    </h4>
                                    <Form.Item
                                        name="name"
                                        rules={[{ required: true, message: 'Name is required' }]}
                                    >
                                        <Input
                                            value={state.name}
                                            className="py-2"
                                            onChange={(e) => onChange(e.target.value, 'name')}
                                            onKeyPress={(event) => {
                                                if (!/[a-z | A-Z,.]/.test(event.key)) {
                                                    event.preventDefault()
                                                }
                                            }}
                                            onPasteCapture={(e) => {
                                                const pastedText = e.clipboardData.getData('text')
                                                if (/[0-9]/g.test(pastedText)) {
                                                    e.preventDefault()
                                                }
                                            }}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col lg={12} sm={24}>
                                    <h4
                                        style={{ textAlign: 'start' }}
                                        className="text-[14px] pb-1"
                                    >
                                        Email <span style={{ color: 'red' }}>*</span>
                                    </h4>
                                    <Form.Item
                                        name="email"
                                        rules={[{ required: true, message: 'Email is required' }]}
                                    >
                                        <Input
                                            value={state.email}
                                            className="py-2"
                                            onChange={(e) => onChange(e.target.value, 'email')}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col lg={12} sm={24}>
                                    <h4
                                        style={{ textAlign: 'start' }}
                                        className="text-[14px] pb-1"
                                    >
                                        Mobile No <span style={{ color: 'red' }}>*</span>
                                    </h4>
                                    <Form.Item
                                        name="phone"
                                        rules={[
                                            {
                                                validator: () => {
                                                    if (state?.phone?.phone?.trim().length > 0) {
                                                        return Promise.resolve()
                                                    } else {
                                                        return Promise.reject(
                                                            <span
                                                                style={{
                                                                    display: 'flex',
                                                                    justifyContent: 'flex-start',
                                                                }}
                                                            >
                                                                phone is required
                                                            </span>
                                                        )
                                                    }
                                                },
                                            },
                                        ]}
                                    >
                                        <ConfigProvider locale={en}>
                                            <CountryPhoneInput
                                                disabled={state?.isCheck}
                                                inline
                                                onKeyPress={(event) => {
                                                    if (!/[0-9,.]/.test(event.key)) {
                                                        event.preventDefault()
                                                    }
                                                }}
                                                maxLength={15}
                                                value={state.phone}
                                                onChange={(e) => onChange(e, 'phone')}
                                                defaultValue={{
                                                    short: 'PK',
                                                }}
                                            />
                                        </ConfigProvider>
                                    </Form.Item>
                                </Col>
                                <Col lg={12} sm={24}>
                                    <h4
                                        style={{ textAlign: 'start' }}
                                        className="text-[14px] pb-1"
                                    >
                                        Whatsapp No <span style={{ color: 'red' }}>*</span>
                                    </h4>
                                    <Form.Item
                                        name="whatsapp"
                                        rules={[
                                            {
                                                validator: () => {
                                                    if (state?.whatsapp?.phone?.trim().length > 0) {
                                                        return Promise.resolve()
                                                    } else {
                                                        return Promise.reject(
                                                            <span
                                                                style={{
                                                                    display: 'flex',
                                                                    justifyContent: 'flex-start',
                                                                }}
                                                            >
                                                                whatsapp is required
                                                            </span>
                                                        )
                                                    }
                                                },
                                            },
                                        ]}
                                    >
                                        <ConfigProvider locale={en}>
                                            <CountryPhoneInput
                                                inline
                                                disabled={state?.isCheck}
                                                onKeyPress={(event) => {
                                                    if (!/[0-9,.]/.test(event.key)) {
                                                        event.preventDefault()
                                                    }
                                                }}
                                                maxLength={15}
                                                value={state.whatsapp}
                                                onChange={(e) => onChange(e, 'whatsapp')}
                                                defaultValue={{
                                                    short: 'PK',
                                                }}
                                            />
                                        </ConfigProvider>
                                        <div
                                            style={{ display: 'flex', justifyContent: 'flex-end' }}
                                        >
                                            <Checkbox
                                                checked={state.isCheck}
                                                onChange={onChangeCheck}
                                            />{' '}
                                            &nbsp;
                                            <span>Same as phone</span>
                                        </div>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <div>
                                <Row gutter={10}>
                                    <Col lg={12} sm={24}>
                                        <InputLabel>Select Role</InputLabel>
                                        <SelectField
                                            name="loungeOwnerId"
                                            required={true}
                                            allowClear
                                            options={data?.data?.map((val) => ({
                                                label: val?.title,
                                                value: val?.id,
                                            }))}
                                        />
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <div className="flex justify-end mt-[55px]">
                        <Button
                            size="middle"
                            key="2"
                            className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
                            loading={loading}
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

export default NewCoordinatorModal