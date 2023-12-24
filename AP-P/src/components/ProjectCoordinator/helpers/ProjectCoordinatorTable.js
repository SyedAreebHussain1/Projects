import React, { useEffect, useRef, useState } from 'react'
import { Button, Col, Input, Row, Table } from 'antd'
import { debounce } from 'lodash'
import { SearchOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { useModal } from '../../../utils/hooks/useModal'
import TablePagination from '../../../utils/components/TablePagination'
import projectCoordinatorColumns from "../../../tableColumns/projectCoordinatorColumns.json"
import eyeview from '../../assest/icon/eyeview.png'
import { getAllCoordinatorApi, suspendCoordinatorApi } from '../../../redux/api/ProjectCoordinator'
import { useNavigate } from 'react-router-dom'
import AssignProjectModal from './AssignProjectModal'
import NewCoordinatorModal from './NewCoordinatorModal'

const ProjectCoordinatorTable = ({ isNewUserModalVisible, newUsertoggle }) => {
    const dispatch = useDispatch()
    const [isAddModalVisible, toggle] = useModal()
    const navigate = useNavigate()
    const [dataSource, setDataSource] = useState([])
    const [selectedFilter, setSelectedFilter] = useState('Name')
    const [id, setId] = useState(0)
    const [search, setSearch] = useState('')
    const [pageLimit, setPageLimit] = useState({
        page: 1,
        limit: 10,
    })
    const { data, loading } = useSelector((state) => state?.getAllCoordinator)
    const suspendCoordinator = useSelector((state) => state?.suspendCoordinator)
    const proCooAssignProject = useSelector((state) => state?.proCooAssignProject)
    const pcSignUp = useSelector((state) => state?.pcSignUp)

    const debouncedGetAllCoordinatorApi = useRef(
        debounce((dispatch, pageLimit, search, selectedFilter) => {
            getAllCoordinatorApi(dispatch, pageLimit, search, selectedFilter)
        }, 500)
    ).current

    useEffect(() => {
        setPageLimit({
            page: 1,
            limit: 10,
        })
    }, [search])
    useEffect(() => {
        setSearch('')
    }, [selectedFilter])

    useEffect(() => {
        debouncedGetAllCoordinatorApi(dispatch, pageLimit, search, selectedFilter)
    }, [dispatch, pageLimit, suspendCoordinator?.data, proCooAssignProject?.data, pcSignUp?.data])

    useEffect(() => {
        if (data?.data?.items) {
            const dataSet = data?.data?.items?.map((item, i) => {
                return {
                    key: i,
                    name: item?.fullName,
                    phone: item?.phone,
                    email: item?.email || '-',
                    date: item?.updatedAt.split('T')[0],
                    role: item?.projectCoordinatorRole?.title,
                    product: item?.leadInventoryOne?.propertyWalletProduct?.title || "-",
                    status: item?.isActive ? "Active" : "UnActive",
                    project: (
                        <Button
                            onClick={() => item?.id && navigate(`project-detail/${item?.id}`, {
                                state: item?.fullName
                            })}
                            className="flex items-center font-medium text-[12px] gap-2 text-[#3D4350] rounded-[41px] h-[38px] w-max"
                        >
                            <img src={eyeview} alt="" />
                            <span>View Project</span>
                        </Button>
                    ),
                    action: (
                        <div className='flex gap-3'>
                            {item?.isActive ? <Button
                                onClick={() => suspendCoordinatorApi(dispatch, { isActive: false }, item?.id)}
                                className="flex items-center font-medium text-[12px] gap-2 text-[white] rounded-[41px] h-[38px] w-max bg-red-500"
                            >
                                <span>Suspend</span>
                            </Button> :
                                <Button
                                    onClick={() => suspendCoordinatorApi(dispatch, { isActive: true }, item?.id)}
                                    className="flex items-center font-medium text-[12px] gap-2 text-[white] rounded-[41px] h-[38px] w-max bg-green-500"
                                >
                                    <span>Active</span>
                                </Button>
                            }
                            <Button
                                onClick={() => [toggle(), setId(item?.id)]}
                                className="flex items-center font-medium text-[12px] gap-2 text-[#3D4350] rounded-[41px] h-[38px] w-max"
                            >
                                <span>Assign Project</span>
                            </Button>
                        </div>
                    )

                }
            })
            setDataSource(dataSet)
        }
    }, [data?.data])

    return (
        <>
            {id !== 0 && <AssignProjectModal
                visible={isAddModalVisible} toggle={toggle}
                id={id}
            />}
            {isNewUserModalVisible && <NewCoordinatorModal
                visible={isNewUserModalVisible} toggle={newUsertoggle}
            />}
            <Row className="bg-white">
                <Col lg={24} xs={24}>
                    <div className="py-[20px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
                        <div>
                            <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                                All Cordinators
                            </h3>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 items-center  sm:items-stretch w-full sm:w-auto">
                            {selectedFilter === 'Location' ? (
                                <Input
                                    placeholder={`Search ${selectedFilter}`}
                                    prefix={<SearchOutlined />}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-full lg:w-[268px] h-[43px]"
                                    value={search}
                                />
                            ) : (
                                <Input
                                    placeholder={`Search ${selectedFilter}`}
                                    prefix={<SearchOutlined />}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-full lg:w-[268px] h-[43px]"
                                    value={search}
                                />
                            )}

                        </div>
                    </div>
                    <Table
                        dataSource={dataSource}
                        columns={projectCoordinatorColumns}
                        loading={loading}
                        scroll={{ x: true }}
                        pagination={{
                            total: data?.data?.meta?.totalPages * data?.data?.meta?.itemsPerPage,
                            showTotal: (total, range) => (
                                <TablePagination
                                    total={total}
                                    range={range}
                                    setPageLimit={setPageLimit}
                                    pageLimit={pageLimit}
                                />
                            ),
                        }}
                    />
                </Col>
            </Row>
        </>
    )
}

export default ProjectCoordinatorTable