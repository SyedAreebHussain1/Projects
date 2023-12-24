import React from 'react'
import { Button, Divider, Modal, Form } from 'antd'
import InputLabel from '../../../utils/components/InputFields/InputLabel'

const DescriptionModal = ({ modal, selectedData }) => {
    function onFinish() {
        modal.toggleView()
    }
    return (
        <Modal
            width={'462px'}
            open={modal?.isViewModalVisible}
            onCancel={modal?.toggleView}
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
                                <InputLabel>Description</InputLabel>
                                <div className="border border-#D0D5DD-600 p-[10px] text-[14px]">
                                    <p className="font-medium text-[#667085]">
                                        {/* {selectedData?.leadInventoryOne?.propertyWalletInventoryPlot?.propertyWalletInventory?.description || selectedData?.leadInventoryOne?.propertyWalletProduct?.description} */}
                                        {selectedData || ''}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end mt-[55px]">
                    <Button
                        size="middle"
                        key="3"
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

export default DescriptionModal