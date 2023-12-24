import { Button, Col, Divider, Form, Modal, Row } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import InputLabel from '../../../../utils/components/InputFields/InputLabel'
import { SelectField } from '../../../../utils/components/InputFields/SelectField'

const DeleteModal = ({ visible, toggle }) => {
    const dispatch = useDispatch()
    function onCancel() {
        toggle()
    }
    function onSuccess() {
        toggle()
    }
    function onFinish(values) { }
    return (
        <Modal
            title={<h3 className="text-[18px] font-semibold">Delete Package</h3>}
            open={visible}
            onCancel={onCancel}
            footer={null}
            centered={true}
            width={462}
        >
            <Divider />

            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <div>
                    <Row gutter={16}>
                        <Col lg={24} sm={24}>
                            <div>
                                <InputLabel>Do you want to refund Package Amount</InputLabel>
                                <SelectField
                                    name="package"
                                    options={[
                                        {
                                            label: 'Yes',
                                            value: 'YEs',
                                        },
                                        {
                                            label: 'No',
                                            value: 'No',
                                        },
                                    ]}
                                />
                            </div>
                        </Col>
                    </Row>
                    <div className="flex justify-end ">
                        <Button
                            size="middle"
                            key="1"
                            type="primary"
                            className="btn-primary py-[11px] px-[33px] flex items-center bg-white text-black h-[40px]"
                            onClick={onCancel}
                        >
                            Close
                        </Button>
                        <Button
                            size="middle"
                            key="2"
                            className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
                            htmlType="submit"
                        >
                            Delete Now
                        </Button>
                    </div>
                </div>
            </Form>
        </Modal>
    )
}

export default DeleteModal