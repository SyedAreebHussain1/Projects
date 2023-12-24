import React, { useState, useEffect, useRef } from "react"
import { Button, Col, Input, Popover, Row, Table, Select } from 'antd'
import { debounce } from 'lodash'
import { SearchOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'

import TablePagination from '../../../../utils/components/TablePagination'
import userManagementColumns from '../../../../tableColumns/userManagementColumns.json'
import TableFilter from "../../../../utils/components/TableFilter"
import { useModal } from '../../../../utils/hooks/useModal'
import { getUserManagementListApi } from "../../../../redux/api/Settings/UserManagement/index"

import filterIcon from '../../../assest/icon/filter.png'
import editIcon from '../../../assest/icon/ViewDetailEditIcon.png'
import deleteIcon from '../../../assest/icon/ViewDetailDeleteIcon.png'
import { withUserByRoleIdApi } from "../../../../redux/api/Settings/Role"
import UserManagementModal from "./UserManagementModal"
// import CreateDiscountModal from "./CreateDiscountModal"
// import UpdateDiscountModal from "./UpdateDiscountModal"

const UserManagementTable = () => {
    const dispatch = useDispatch()
    const [isUpdateModalVisible, toggleUpdate] = useModal()
    const [dataSource, setDataSource] = useState([])
    const [selectedFilter, setSelectedFilter] = useState('Full Name')
    const [updateData, setUpdateData] = useState()
    const [search, setSearch] = useState('')
    const [pageLimit, setPageLimit] = useState({
        page: 1,
        limit: 10,
    })
    const getUserManagementList = useSelector((state) => state?.getUserManagementList)
    const withUserByRoleId = useSelector((state) => state?.withUserByRoleId)

    const debouncedGetUserManagementListApi = useRef(
        debounce((dispatch, pageLimit, search, selectedFilter) => {
            getUserManagementListApi(dispatch, pageLimit, search, selectedFilter)
        }, 500)
    ).current
    useEffect(() => {
        debouncedGetUserManagementListApi(dispatch, pageLimit, search, selectedFilter)
        withUserByRoleIdApi(dispatch, { page: 1, limit: 1000 })
    }, [dispatch, pageLimit])

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
        if (getUserManagementList?.data) {
            const data = getUserManagementList?.data?.data?.items?.map((item, i) => {
                return {
                    key: i,
                    name: (
                        <div className="flex items-center gap-2 justify-center">
                            <span>{item?.profile?.fullName}</span>
                        </div>
                    ),
                    phoneNo: item?.phone || '-',
                    email: item?.email || '-',
                    assignedRoles: (
                        <div className="flex gap-[12px] flex-wrap">
                            <span className="text-[#3D4350] bg-[#F0F1F3] py-[3px] px-[8px] rounded-[38px] font-medium">
                                {item?.adminRole?.title}
                            </span>
                        </div>
                    ),
                    action: (
                        <>
                            <div className="flex flex-wrap gap-2">
                                <div
                                    className="cursor-pointer"
                                    onClick={() => {
                                        setUpdateData(item)
                                        toggleUpdate()
                                    }}
                                >
                                    <img src={editIcon} alt="" />{' '}
                                </div>
                            </div>
                        </>
                    ),
                }
            })
            setDataSource(data)
        }
    }, [getUserManagementList?.data])
    return (
        <>
            {isUpdateModalVisible && <UserManagementModal
                visible={isUpdateModalVisible} toggle={toggleUpdate} updateData={updateData}
            />}
            <Row className="bg-white">
                <Col lg={24} xs={24}>
                    <div className="py-[25px] px-[18px] flex items-center justify-between flex-col lg:flex-row">
                        <div>
                            <h3 className="text-[18px] font-semibold text-[#101010]">
                                Users Management
                            </h3>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 items-center sm:items-stretch w-full sm:w-auto">
                            {selectedFilter === 'Role' ? (
                                <Select
                                    onChange={(e) => setSearch(e)}
                                    value={search}
                                    className="w-full lg:w-[268px] h-[43px]"
                                    allowClear
                                >
                                    {withUserByRoleId?.data?.data?.items?.map((item, i) => {
                                        return (
                                            <Select.Option value={item?.title} key={i}>
                                                {item?.title}
                                            </Select.Option>
                                        )
                                    })}
                                </Select>
                            ) : selectedFilter === 'Phone' ? (
                                <Input
                                    placeholder={`Search Phone`}
                                    prefix={<SearchOutlined />}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-full lg:w-[268px] h-[43px]"
                                    value={search}
                                    onKeyPress={(event) => {
                                        if (!/[0-9,.]/.test(event.key)) {
                                            event.preventDefault()
                                        }
                                    }}
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
                            <Popover
                                placement="bottomRight"
                                content={
                                    <TableFilter
                                        setSelectedFilter={setSelectedFilter}
                                        selectedFilter={selectedFilter}
                                        filterTitle={['Full Name', 'Email', 'Phone', 'Role']}
                                    />
                                }
                                trigger="click"
                            >
                                <Button
                                    className="btn-primary flex items-center text-[14px] gap-2 bg-[#3D4350] text-[#FFFFFF] rounded-[] h-[41px]"
                                >
                                    <img
                                        src={filterIcon}
                                        style={{ filter: 'brightness(4)' }}
                                        alt=""
                                    />
                                    <span>Filter</span>
                                </Button>
                            </Popover>
                        </div>
                    </div>
                    <Table
                        dataSource={dataSource}
                        columns={userManagementColumns}
                        loading={getUserManagementList?.loading}
                        scroll={{ x: true }}
                        pagination={{
                            total: getUserManagementList?.data?.data?.meta?.totalPages * getUserManagementList?.data?.data?.meta?.itemsPerPage,
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

export default UserManagementTable