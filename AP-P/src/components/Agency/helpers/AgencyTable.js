import { Button, Col, Input, Popover, Row, Table } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import TableFilter from '../../../utils/components/TableFilter'
import { SearchOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import filterIcon from '../../assest/icon/filter.png'
import agencyColumns from "../../../tableColumns/agencyColumns.json"
import { debounce } from 'lodash'
import TablePagination from '../../../utils/components/TablePagination'
import { getAllAgenciesApi } from '../../../redux/api/Agency'
import { useNavigate } from 'react-router-dom'
const AgencyTable = () => {
    const dispatch = useDispatch()
    const [dataSource, setDataSource] = useState([])
    const [selectedFilter, setSelectedFilter] = useState('Agency Name')
    const [search, setSearch] = useState('')
    const navigate = useNavigate();
    const [pageLimit, setPageLimit] = useState({
        page: 1,
        limit: 10,
    })
    const getAllAgencies = useSelector((state) => state?.getAllAgencies)

    const debouncedGetAllAgenciesApi = useRef(
        debounce((dispatch, pageLimit, search, selectedFilter) => {
            getAllAgenciesApi(dispatch, pageLimit, search, selectedFilter)
        }, 500)
    ).current
    useEffect(() => {
        debouncedGetAllAgenciesApi(dispatch, pageLimit, search, selectedFilter)
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
        if (getAllAgencies?.data) {
            const data = getAllAgencies?.data?.data?.items?.map((item, i) => {
                return {
                    sno: i + 1,
                    agencyName: item?.agencyName,
                    agencyCode: item?.agencyCode,
                    city: item?.city,
                    country: item?.country || "-",
                    address: item?.address?.length > 19 ? `${item?.address.substr(0, 19)}..` : item.address || "-",
                    action: (<span onClick={() => item?.id && navigate(`${item?.id}`)}>
                        Arrow
                    </span>)

                }
            })
            setDataSource(data)
        }
    }, [getAllAgencies?.data])
    return (
        <>
            <Row className="bg-white">
                <Col lg={24} xs={24}>
                    <div className="py-[20px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
                        <div>
                            <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                                All Agency
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
                            <Popover
                                placement="bottomRight"
                                content={
                                    <TableFilter
                                        setSelectedFilter={setSelectedFilter}
                                        selectedFilter={selectedFilter}
                                        filterTitle={['Agency Name', 'Agency Code']}
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
                        columns={agencyColumns}
                        loading={getAllAgencies?.loading}
                        scroll={{ x: true }}
                        pagination={{
                            total: getAllAgencies?.data?.data?.meta?.totalPages * getAllAgencies?.data?.data?.meta?.itemsPerPage,
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

export default AgencyTable