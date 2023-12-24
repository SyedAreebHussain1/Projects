import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { Col, Input, Row, Table } from 'antd'

import { useSelector, useDispatch } from 'react-redux'
import { SearchOutlined } from '@ant-design/icons'
import { debounce } from 'lodash'
import logsColumns from "../../../../../../../tableColumns/logsColumns.json"
import TablePagination from '../../../../../../../utils/components/TablePagination'
import { getLogsByProjectIdForAdminApi } from '../../../../../../../redux/api/ProjectCoordinator'

const LogsTable = () => {
    const { logId } = useParams()
    const dispatch = useDispatch()
    const [selectedFilter, setSelectedFilter] = useState('Name')
    const [search, setSearch] = useState('')
    const [dataSource, setDataSource] = useState([])
    const { data, loading } = useSelector((state) => state?.getLogsByProjectIdForAdmin)

    const [pageLimit, setPageLimit] = useState({
        page: 1,
        limit: 10,
    })
    const debouncedGetLogsByProjectIdForAdminApi = useRef(
        debounce((dispatch, pageLimit, search, selectedFilter, id) => {
            getLogsByProjectIdForAdminApi(dispatch, pageLimit, search, selectedFilter, id)
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
        debouncedGetLogsByProjectIdForAdminApi(dispatch, pageLimit, search, selectedFilter, logId)
    }, [logId, dispatch, pageLimit])
    useEffect(() => {
        if (data?.data?.items) {
            const dataSet = data?.data?.items?.map((item, i) => {
                return {
                    key: i,
                    attendantName: item?.attendantName || '-',
                    clientName: item?.clientName || "-",
                    projectName: item?.propertyWalletProject?.projectName || '-',
                    agentName: item?.agency?.createdByUser?.profile?.fullName || '-',
                    date: item?.createdAt.split("T")[0] || "-",
                }
            })
            setDataSource(dataSet)
        }
    }, [data?.data])
    return (
        <>
            <Row className="bg-white">
                <Col lg={24} xs={24}>
                    <div className="py-[20px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
                        <div>
                            <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                                All Cordinators
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
                                />
                            )}

                        </div>
                    </div>
                    <Table
                        dataSource={dataSource}
                        columns={logsColumns}
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

export default LogsTable