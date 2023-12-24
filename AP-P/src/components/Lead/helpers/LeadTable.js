import React, { useState, useEffect, useRef } from "react"
import { Button, Col, Input, Popover, Row, Table } from 'antd'
import { debounce } from 'lodash'
import { SearchOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'



import TablePagination from '../../../utils/components/TablePagination'
import leadsColumns from '../../../tableColumns/leadsColumns.json'
import TableFilter from "../../../utils/components/TableFilter"
import { useModal } from '../../../utils/hooks/useModal'
import { getAllLeadsForAdminApi } from "../../../redux/api/Lead"

// icon
import filterIcon from '../../assest/icon/filter.png'
import DescriptionModal from "./DescriptionModal"
import eyeview from '../../assest/icon/eyeview.png'



const LeadTable = () => {
    const dispatch = useDispatch()
    const [isViewModalVisible, toggleView] = useModal()
    const [dataSource, setDataSource] = useState([])
    const [selectedFilter, setSelectedFilter] = useState('Lead Name')
    const [updateData, setUpdateData] = useState()
    const [search, setSearch] = useState('')
    const [selectedData, setSelectedData] = useState()
    const [pageLimit, setPageLimit] = useState({
        page: 1,
        limit: 10,
    })
    const getAllLeadsForAdmin = useSelector((state) => state?.getAllLeadsForAdmin)
    const debouncedGetAllLeadsForAdminApi = useRef(
        debounce((dispatch, pageLimit, search, selectedFilter) => {
            getAllLeadsForAdminApi(dispatch, pageLimit, search, selectedFilter)
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
        debouncedGetAllLeadsForAdminApi(dispatch, pageLimit, search, selectedFilter)
    }, [dispatch, pageLimit])


    function handleClick(data) {
        toggleView()
        setSelectedData(data)
    }

    useEffect(() => {
        if (getAllLeadsForAdmin?.data) {
            const data = getAllLeadsForAdmin?.data?.data?.items?.map((item) => {
                return {
                    agency: item?.createdByUser?.profile?.agency?.agencyName,
                    leadName: item?.client?.name,
                    phoneNo: item?.client?.phone,
                    projectName: item?.leadInventoryOne?.propertyWalletInventoryPlot?.propertyWalletInventory?.propertyWalletProject?.projectName || '-',
                    addedBy: item?.createdByUser?.profile?.fullName,
                    cnic: '-',
                    product: item?.leadInventoryOne?.propertyWalletProduct?.title || "-",
                    action: (
                        <Button
                            onClick={(e) => handleClick(item?.description)}
                            className="flex items-center font-medium text-[12px] gap-2 text-[#3D4350] rounded-[41px] h-[38px] w-max"
                        >
                            <img src={eyeview} alt="" />
                            <span>View Description</span>
                        </Button>
                    )

                }
            })
            setDataSource(data)
        }
    }, [getAllLeadsForAdmin?.data])

    return (
        <>
            {<DescriptionModal
                modal={{ isViewModalVisible, toggleView }}
                selectedData={selectedData}
            />}
            <Row className="bg-white">
                <Col lg={24} xs={24}>
                    <div className="py-[20px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
                        <div>
                            <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                                All Leads
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
                            <Popover
                                placement="bottomRight"
                                content={
                                    <TableFilter
                                        setSelectedFilter={setSelectedFilter}
                                        selectedFilter={selectedFilter}
                                        filterTitle={['Agency', 'Lead Name', 'Project Name']}
                                    />
                                }
                                trigger="click"
                            >
                                <Button className="btn-primary flex items-center text-[14px] gap-2 bg-[#3D4350] text-[#FFFFFF] rounded-[] h-[41px] flex-shrink-0">
                                    <img
                                        src={filterIcon}
                                        style={{ filter: 'brightness(4)' }}
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
                        columns={leadsColumns}
                        loading={getAllLeadsForAdmin?.loading}
                        scroll={{ x: true }}
                        pagination={{
                            total: getAllLeadsForAdmin?.data?.data?.meta?.totalPages * getAllLeadsForAdmin?.data?.data?.meta?.itemsPerPage,
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

export default LeadTable