import React, { useState, useEffect, useRef } from "react"
import { Button, Col, Input, Popover, Row, Table } from 'antd'
import { debounce } from 'lodash'
import { SearchOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import eyeviewIcon from '../../../assest/icon/eyeview.png'

import TablePagination from '../../../../utils/components/TablePagination'
import queriesColumns from '../../../../tableColumns/queriesColumns.json'
import TableFilter from "../../../../utils/components/TableFilter"

import filterIcon from '../../../assest/icon/filter.png'
import { getSupportFormApi } from "../../../../redux/api/Support/Queries"
import { useModal } from "../../../../utils/hooks/useModal"
import moment from "moment"
import ViewDetailModal from "./ViewDetailModal"

const QueriesTable = () => {
    const dispatch = useDispatch()
    const [isViewModalVisible, toggle] = useModal()
    const [dataSource, setDataSource] = useState([])
    const [selectedFilter, setSelectedFilter] = useState('Full Name')
    const [veiwData, setVeiwData] = useState({})
    const [search, setSearch] = useState('')
    const [pageLimit, setPageLimit] = useState({
        page: 1,
        limit: 10,
    })
    const getSupportForm = useSelector((state) => state?.getSupportForm)

    const debouncedGetSupportFormApi = useRef(
        debounce((dispatch, pageLimit, search, selectedFilter) => {
            getSupportFormApi(dispatch, pageLimit, search, selectedFilter)
        }, 500)
    ).current
    useEffect(() => {
        debouncedGetSupportFormApi(dispatch, pageLimit, search, selectedFilter)
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
        if (getSupportForm?.data) {
            const data = getSupportForm?.data?.data?.items?.map((item, i) => {
                return {
                    key: i,
                    name: (
                        <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
                            {item.name}
                        </span>
                    ),
                    phoneNo: (
                        <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
                            {item.phoneNo}
                        </span>
                    ),
                    email: (
                        <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
                            {item.email}
                        </span>
                    ),
                    subject: (
                        <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
                            {item.subject}
                        </span>
                    ),
                    message: (
                        <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
                            {item.message.length >= 30
                                ? `${item.message.substring(0, 30)}...`
                                : item.message}
                        </span>
                    ),
                    date: (
                        <span className="text-[12px] font-medium text-[#444B54]">
                            {moment(item.createdAt).format('DD-MM-YYYY')}
                        </span>
                    ),
                    time: (
                        <span className="text-[12px] font-medium text-[#444B54]">
                            {moment(item.createdAt).format('h:mm A')}
                        </span>
                    ),
                    action: (
                        <Button
                            onClick={(e) => {
                                toggle()
                                setVeiwData(item)
                            }}
                            className="flex items-center font-medium text-[12px] gap-2 text-[#3D4350] rounded-[41px] h-[38px] w-max"
                        >
                            <img src={eyeviewIcon} alt="" />
                            <span>View Details</span>
                        </Button>
                    ),
                }
            })
            setDataSource(data)
        } else {
            setDataSource([])
        }
    }, [getSupportForm?.data])
    return (
        <>
            {isViewModalVisible && <ViewDetailModal
                visible={isViewModalVisible} toggle={toggle} veiwData={veiwData}
            />}
            <Row className="bg-white">
                <Col lg={24} xs={24}>
                    <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
                        <div>
                            <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                                All Queries
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
                                        filterTitle={['Email', 'Phone', 'Full Name']}
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
                        columns={queriesColumns}
                        loading={getSupportForm?.loading}
                        scroll={{ x: true }}
                        pagination={{
                            total: getSupportForm?.data?.data?.meta?.totalPages * getSupportForm?.data?.data?.meta?.itemsPerPage,
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

export default QueriesTable