import React, { useEffect, useRef, useState } from 'react'
import { Col, Input, Row, Table } from 'antd'
import investorsColumns from "../../../../tableColumns/investorsColumns.json"
import TablePagination from '../../../../utils/components/TablePagination'
import { useDispatch, useSelector } from 'react-redux'
import { debounce } from 'lodash'
import { getAllInvestorsApi } from '../../../../redux/api/SmartSellingPoint/Investor'
import { SearchOutlined } from '@ant-design/icons'
import AddNewInvestor from './AddNewInvestor'


const InvestorsTable = ({ visible, toggle }) => {
    const dispatch = useDispatch()
    const [dataSource, setDataSource] = useState([])
    const investorAuth = useSelector((state) => state?.investorAuth)

    const [selectedFilter, setSelectedFilter] = useState('Name')
    const [search, setSearch] = useState('')
    const [pageLimit, setPageLimit] = useState({
        page: 1,
        limit: 10,
    })
    const { data, loading } = useSelector((state) => state?.getAllInvestors)
    const debouncedGetAllInvestorsApi = useRef(
        debounce((dispatch, pageLimit, search, selectedFilter) => {
            getAllInvestorsApi(dispatch, pageLimit, search, selectedFilter)
        }, 500)
    ).current

    useEffect(() => {
        setPageLimit({
            page: 1,
            limit: 10,
        })
    }, [])
    useEffect(() => {
        setSearch('')
    }, [selectedFilter])
    useEffect(() => {
        debouncedGetAllInvestorsApi(dispatch, pageLimit, search, selectedFilter)
    }, [dispatch, pageLimit, search, investorAuth?.data])

    useEffect(() => {
        if (data?.data?.items) {
            const dataSet = data?.data?.items?.map((item, i) => {
                return {
                    key: i,
                    name: item?.fullName || "-",
                    cnic: item?.cnic || "-",
                    email: item?.email || '-',
                    phoneNo: item?.phone,
                }
            })
            setDataSource(dataSet)
        }
    }, [data?.data])
    return (
        <>
            {visible && <AddNewInvestor visible={visible} toggle={toggle} />}
            <Row className="bg-white">
                <Col lg={24} xs={24}>
                    <div className="py-[20px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
                        <div>
                            <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                                Investors List
                            </h3>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 items-center  sm:items-stretch w-full sm:w-auto">
                            <Input
                                placeholder={`Search ${selectedFilter}`}
                                prefix={<SearchOutlined />}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full lg:w-[268px] h-[43px]"
                                value={search}
                            />
                        </div>
                    </div>
                    <Table
                        dataSource={dataSource}
                        columns={investorsColumns}
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

export default InvestorsTable