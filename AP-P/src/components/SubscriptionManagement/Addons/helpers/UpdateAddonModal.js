import { Button, Divider, Form, Modal } from 'antd'
import React, { useEffect } from 'react'
import InputLabel from '../../../../utils/components/InputFields/InputLabel'
import { SelectField } from '../../../../utils/components/InputFields/SelectField'
import NumberField from '../../../../utils/components/InputFields/NumberField'
import CheckboxField from '../../../../utils/components/InputFields/CheckboxField'
import TextAreaField from '../../../../utils/components/InputFields/TextAreaField'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'antd/es/form/Form'
import { updateAddOnApi } from '../../../../redux/api/SubscriptionManagement/Addons'


const UpdateAddonModal = ({ visible, toggle, editData }) => {
    const updateAddOn = useSelector((state) => state?.updateAddOn)
    const dispatch = useDispatch()
    const [form] = useForm()
    useEffect(() => {
        if (editData) {
            form.setFieldsValue({
                title: editData?.title,
                shortDescription: editData?.shortDescription,
                price: editData?.price,
                isPublic: editData?.isPublic ? ['isPublic'] : []
            })
        }
    }, [editData])
    function onCancel() {
        toggle()
    }
    function onSuccess() {
        toggle()
    }
    function onFinish(e) {
        const body = {
            ...e,
            price: Number(e.price),
            isPublic: e.isPublic?.length > 0,
        }
        if (body) {
            updateAddOnApi(dispatch, body, editData?.id, onSuccess)
        }

    }
    return (
        <Modal
            title={<h3 className="text-[18px] font-semibold">Edit Add-Ons</h3>}
            open={visible}
            onCancel={onCancel}
            footer={null}
            centered={true}
            width={499}
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
                    <InputLabel>Select Add-Ons</InputLabel>
                    <SelectField
                        name='title'
                        options={[
                            'Refreshes',
                            'Hot Listing',
                            'General Listing',
                            'User Limits',
                        ].map((item) => ({ label: item, value: item }))}
                    />
                </div>
                <div>
                    <InputLabel>Price</InputLabel>
                    <NumberField name='price' />
                </div>
                <div>
                    <InputLabel>Short Description</InputLabel>
                    <TextAreaField name='shortDescription' />
                </div>
                <CheckboxField
                    name="isPublic"
                    options={[{ label: 'Public', value: 'isPublic' }]}
                    className="mt-[10px]"
                />
                <div className="flex justify-end mt-[55px]">
                    <Button
                        size="middle"
                        key="2"
                        className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
                        loading={updateAddOn.loading}
                        htmlType="submit"
                    >
                        Update Now
                    </Button>
                </div>
            </Form>
        </Modal>
    )
}
export default UpdateAddonModal