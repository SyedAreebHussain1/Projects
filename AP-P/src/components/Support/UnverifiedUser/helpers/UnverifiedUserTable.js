import React, { useState, useEffect, useRef } from "react"
import { Button, Col, Input, Popover, Row, Table } from 'antd'
import { debounce } from 'lodash'
import { SearchOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import TablePagination from '../../../../utils/components/TablePagination'
import unverifiedColumns from '../../../../tableColumns/unverifiedColumns.json'
import TableFilter from "../../../../utils/components/TableFilter"
import filterIcon from '../../../assest/icon/filter.png'
import { getUnverifiedUsersApi } from "../../../../redux/api/Support/UnverifiedUser/index"
import moment from "moment"

const UnverifiedUserTable = () => {
    const dispatch = useDispatch()
    const [dataSource, setDataSource] = useState([])
    const [selectedFilter, setSelectedFilter] = useState('Full Name')
    const [search, setSearch] = useState('')
    const [pageLimit, setPageLimit] = useState({
        page: 1,
        limit: 10,
    })
    const getUnverifiedUsers = useSelector((state) => state?.getUnverifiedUsers)

    const debouncedGetUnverifiedUsersApi = useRef(
        debounce((dispatch, pageLimit, search, selectedFilter) => {
            getUnverifiedUsersApi(dispatch, pageLimit, search, selectedFilter)
        }, 500)
    ).current
    useEffect(() => {
        debouncedGetUnverifiedUsersApi(dispatch, pageLimit, search, selectedFilter)
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
        if (getUnverifiedUsers?.data) {
            const data = getUnverifiedUsers?.data?.data?.items?.map((item, i) => {
                return {
                    key: i,
                    name: (
                        <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
                            {item?.profile?.fullName}
                        </span>
                    ),
                    phoneNo: (
                        <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
                            {item?.phone}
                        </span>
                    ),
                    email: (
                        <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
                            {item?.email}
                        </span>
                    ),
                    verificationCode: (
                        <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
                            {item?.verificationCode || '-'}
                        </span>
                    ),
                    agency: (
                        <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
                            {item?.profile?.agency?.agencyName ? item?.profile?.agency?.agencyName : "-"}
                        </span>
                    ),
                    joiningDate: (
                        <span className="text-[12px] font-medium text-[#444B54]">
                            {moment(item.createdAt).format('DD-MM-YYYY')}
                        </span>
                    ),
                    joiningTime: (
                        <span className="text-[12px] font-medium text-[#444B54]">
                            {moment(item.createdAt).format('h:mm A')}
                        </span>
                    )
                }
            })
            setDataSource(data)
        } else {
            setDataSource([])
        }
    }, [getUnverifiedUsers?.data])
    return (
        <>
            <Row className="bg-white">
                <Col lg={24} xs={24}>
                    <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
                        <div>
                            <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                                All Unverified Users
                            </h3>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 items-center  sm:items-stretch w-full sm:w-auto">
                            {selectedFilter === 'Phone' ? (
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
                                        filterTitle={['Email', 'Phone', 'Full Name', 'Agency Name']}
                                    />
                                }
                                trigger="click"
                            >
                                <Button
                                    className="btn-primary flex items-center justify-center text-[14px] gap-2 bg-[#3D4350] text-[#FFFFFF] rounded-[] h-[41px]"
                                >
                                    <img
                                        src={filterIcon}
                                        className="brightness-4"
                                        alt=""
                                    />
                                    <span>Filter</span>
                                </Button>
                            </Popover>
                        </div>
                    </div>
                    <Table
                        dataSource={dataSource}
                        columns={unverifiedColumns}
                        loading={getUnverifiedUsers?.loading}
                        scroll={{ x: true }}
                        pagination={{
                            total: getUnverifiedUsers?.data?.data?.meta?.totalPages * getUnverifiedUsers?.data?.data?.meta?.itemsPerPage,
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

export default UnverifiedUserTable