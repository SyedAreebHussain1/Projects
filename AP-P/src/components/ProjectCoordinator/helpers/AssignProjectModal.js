import React, { useEffect, useState } from 'react'
import { Button, Divider, Form, Modal, Select } from 'antd'
import { useForm } from 'antd/es/form/Form'
import { getProjectsForAssignApi, proCooAssignProjectApi } from '../../../redux/api/ProjectCoordinator'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { clearGetProjectsForAssign } from '../../../redux/slices/ProjectCoordinator/getProjectsForAssignSlice'


const AssignProjectModal = ({ visible, toggle, id }) => {
    const [form] = useForm()
    const dispatch = useDispatch()
    const { data, loading } = useSelector((state) => state?.getProjectsForAssign)
    const proCooAssignProject = useSelector((state) => state?.proCooAssignProject)
    const [pageLimit, setPageLimit] = useState({
        page: 1,
        limit: 10,
    })
    useEffect(() => {
        if (id && visible) {
            getProjectsForAssignApi(dispatch, pageLimit, id)
        }
    }, [id, pageLimit, visible])
    function onCancel() {
        toggle()
        form.resetFields()
    }

    function onFinish(e) {
        if (id && e) {
            const body = {
                projectCoordinatorUserId: id,
                propertyWalletProjectId: e.project
            }
            proCooAssignProjectApi(dispatch, body, onSuccess)
        }
    }
    function onSuccess() {
        toggle()
        form.resetFields()
    }
    useEffect(() => {
        return () => {
            dispatch(clearGetProjectsForAssign())
        }
    }, [])
    function handleLoadMore(e) {
        e.preventDefault()
        e.stopPropagation()
        setPageLimit((prev) => {
            return {
                ...prev,
                page: prev.page + 1,
            }
        })
    }
    return <Modal
        title={<h3 className="text-[18px] font-semibold">Assign Project</h3>}
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
                <Form.Item
                    rules={[{ required: true, message: 'Project is required' }]}
                    name="project"
                >
                    <Select
                        mode="multiple"
                        placeholder="Select Project"
                        className='w-full'
                        showSearch={false}

                        dropdownRender={(menu) => {
                            return (
                                <>
                                    {menu}
                                    <div className="flex justify-center items-center">
                                        <Button
                                            className="custom-btn mt-2 mb-2"
                                            loading={loading}
                                            onClick={handleLoadMore}
                                        >
                                            Load More
                                        </Button>
                                    </div>
                                </>
                            )
                        }}
                        options={data?.data?.items?.map((item) => ({
                            value: item?.id,
                            label: item?.projectName,
                        }))}
                    />
                </Form.Item>
                <div className="flex justify-end mt-[55px]">
                    <Button
                        size="middle"
                        key="1"
                        className="btn-primary py-[11px] px-[33px] flex items-center bg-textColorGreen text-white h-[40px]"
                        htmlType="submit"
                        loading={proCooAssignProject?.loading}
                    >
                        Assign Now
                    </Button>
                </div>
            </div>
        </Form>
    </Modal>
}

export default AssignProjectModal