import { Button, Divider, Modal, Form } from 'antd'
import React, { useEffect } from 'react'
import InputLabel from '../../../../utils/components/InputFields/InputLabel'
import { useDispatch } from 'react-redux'

const ViewDetailModal = ({ visible, toggle, veiwData }) => {
    const dispatch = useDispatch()
    function onSuccess() {
        toggle()
    }
    function onFinish(values) {
        toggle()
    }

    return (
        <Modal
            width={'462px'}
            title={<h3 className="text-[15px]">Complaint Details</h3>}
            open={visible}
            onCancel={() => toggle()}
            footer={null}
            centered={true}
        >
            <Form
                name="crm-requests-modal"
                className="projects-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Divider />
                <div className="flex justify-center">
                    <div style={{ width: '100%' }} bordered={false}>
                        <div>
                            <div>
                                <InputLabel>Subject</InputLabel>
                                <div className="border border-#D0D5DD-600 p-[10px]">
                                    <p className="font-medium text-[#667085] text-[14px]">
                                        {veiwData && veiwData?.subject}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <InputLabel>Message</InputLabel>
                                <div className="border border-#D0D5DD-600 p-[10px] text-[14px]">
                                    <p className="font-medium text-[#667085]">
                                        {veiwData && veiwData.message}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end mt-[55px]">
                    <Button
                        size="middle"
                        key="1"
                        className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
                        htmlType="submit"
                    >
                        Done
                    </Button>
                </div>
            </Form>
        </Modal>
    )
}

export default ViewDetailModal
