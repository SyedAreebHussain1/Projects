import React, { useState, useEffect, useRef } from "react"
import { Button, Col, Input, Popover, Row, Table } from 'antd'
import { debounce } from 'lodash'
import { SearchOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'

import TablePagination from '../../../../utils/components/TablePagination'
import activeSubscriptionColumns from '../../../../tableColumns/activeSubscriptionColumns.json'
import TableFilter from "../../../../utils/components/TableFilter"
import { useModal } from '../../../../utils/hooks/useModal'
import { getAllSubsForAdminApi } from "../../../../redux/api/SubscriptionManagement/ActiveSubscription"
import deleteIcon from '../../../assest/icon/ViewDetailDeleteIcon.png'

import filterIcon from '../../../assest/icon/filter.png'
import moment from "moment/moment"
import DeleteModal from "./DeleteModal"

const ActiveSubscriptionTable = () => {
    const dispatch = useDispatch()
    const [isModalVisible, toggle] = useModal()
    const [dataSource, setDataSource] = useState([])
    const [selectedFilter, setSelectedFilter] = useState('Name')
    const [updateData, setUpdateData] = useState()
    const [search, setSearch] = useState('')
    const [pageLimit, setPageLimit] = useState({
        page: 1,
        limit: 10,
    })
    const getAllSubsForAdmin = useSelector((state) => state?.getAllSubsForAdmin)

    const debouncedGetAllSubsForAdmin = useRef(
        debounce((dispatch, pageLimit, search, selectedFilter) => {
            getAllSubsForAdminApi(dispatch, pageLimit, search, selectedFilter)
        }, 500)
    ).current
    useEffect(() => {
        debouncedGetAllSubsForAdmin(dispatch, pageLimit, search, selectedFilter)
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
        if (getAllSubsForAdmin?.data) {
            const data = getAllSubsForAdmin?.data?.data?.items.map((item, i) => {
                return {
                    key: i,
                    name: item?.agency?.createdByUser?.profile?.fullName,
                    location: item?.agency?.address,
                    agencyName: item?.agency?.agencyName,
                    packages: item?.pwSubPackage?.pwPackage?.title,
                    billings: item?.pwSubPackage?.title,
                    subscriberDate: moment(item?.subscribeDate).format('DD MMMM, YYYY'),
                    action: (
                        <div className="flex flex-wrap  gap-2">
                            <div
                                className="cursor-pointer"
                                onClick={() => {
                                    toggle()
                                }}
                            >
                                <img src={deleteIcon} alt="" />
                            </div>
                        </div>
                    )
                }
            })
            setDataSource(data)
        }
    }, [getAllSubsForAdmin?.data])
    return (
        <>
            {isModalVisible && <DeleteModal visible={isModalVisible} toggle={toggle} />}
            <Row className="bg-white">
                <Col lg={24} xs={24}>
                    <div className="py-[20px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
                        <div>
                            <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                                All Subscribers
                            </h3>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 items-center  sm:items-stretch w-full sm:w-auto">
                            {selectedFilter && (
                                <Input
                                    placeholder={`Search ${selectedFilter}`}
                                    prefix={<SearchOutlined />}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-full lg:w-[268px] h-[43px]"
                                    value={search}
                                />)
                            }
                            <Popover
                                placement="bottomRight"
                                content={
                                    <TableFilter
                                        setSelectedFilter={setSelectedFilter}
                                        selectedFilter={selectedFilter}
                                        filterTitle={['Name', "Billing", "Package"]}
                                    />
                                }
                                trigger="click"
                            >
                                <Button className="btn-primary flex items-center text-[14px] gap-2 bg-[#3D4350] text-[#FFFFFF] rounded-[] h-[40px]">
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
                        columns={activeSubscriptionColumns}
                        loading={getAllSubsForAdmin?.loading}
                        scroll={{ x: true }}
                        pagination={{
                            total: getAllSubsForAdmin?.data?.data?.meta?.totalPages * getAllSubsForAdmin?.data?.data?.meta?.itemsPerPage,
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

export default ActiveSubscriptionTable