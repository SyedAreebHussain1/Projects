import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, Divider, Form, Modal, Select } from 'antd'
import { useForm } from 'antd/es/form/Form'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

import { editAdminUsersRoleApi } from '../../../../redux/api/Settings/UserManagement'
import { withUserByRoleIdApi } from '../../../../redux/api/Settings/Role'

dayjs.extend(customParseFormat)

const UserManagementModal = ({ visible, toggle, updateData }) => {
    const dispatch = useDispatch()
    const withUserByRoleId = useSelector((state) => state?.withUserByRoleId)

    const [form] = useForm()

    const onFinish = (e) => {
        const body = {
            roleId: Number(e.role),
        }
        if (body.roleId) {
            editAdminUsersRoleApi(dispatch, body, updateData.id, onSuccess)
        }
    }
    function onSuccess() {
        toggle()
        form.resetFields()
    }
    useEffect(() => {
        if (visible) {
            withUserByRoleIdApi(dispatch, { page: 1, limit: 1111 })
        }
    }, [visible])

    function onCancel() {
        toggle()
        form.resetFields()
    }
    return (
        <Modal
            width={'541px'}
            title={<h3 className="text-[18px] font-semibold">Edit User</h3>}
            open={visible}
            onCancel={onCancel}
            footer={null}
            centered={true}
        >
            <Divider />

            <div className="flex justify-center">
                <Card className="w-full" bordered={false}>
                    <Form
                        name="normal_login"
                        form={form}
                        className="login-form"
                        initialValues={{ remember: true }}
                        style={{
                            marginTop: -40,
                        }}
                        onFinish={onFinish}
                    >
                        <div className="flex" style={{ gap: '10px' }}>
                            <div>
                                <h3 className="text-[#444B54] text-[15px] font-medium">
                                    {updateData?.profile?.fullName}
                                </h3>
                                <h3 className="text-[#858D9D] text-[12px] font-medium">
                                    {updateData?.email}
                                </h3>
                            </div>
                        </div>
                        <h4
                            style={{ textAlign: 'start' }}
                            className="text-[14px] text-[#3D4350] font-medium mt-[5%]"
                        >
                            User
                        </h4>
                        <Form.Item
                            name="role"
                            rules={[{ required: true, message: 'Role is required' }]}
                        >
                            <Select className="h-[40px]" allowClear>
                                {withUserByRoleId?.data?.data?.items?.map((item, i) => {
                                    return (
                                        <Select.Option value={item?.id} key={item?.id}>
                                            {item?.title}
                                        </Select.Option>
                                    )
                                })}
                            </Select>
                        </Form.Item>

                        <div className="flex justify-end">
                            <Button
                                size="middle"
                                key="1"
                                className="py-[11px] px-[33px] flex items-center  h-[40px] border-none bg-transparent"
                                onClick={onCancel}
                            >
                                Close
                            </Button>
                            <Button
                                size="middle"
                                key="2"
                                className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
                                loading={withUserByRoleId.loading}
                                htmlType="submit"
                            >
                                Save Changes
                            </Button>
                        </div>
                    </Form>
                </Card>
            </div>
        </Modal>
    )
}

export default UserManagementModal