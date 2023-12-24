import React, { useState, useEffect, useRef } from "react"
import { Button, Col, Input, Popover, Row, Table } from 'antd'
import { debounce } from 'lodash'
import { SearchOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'

import TablePagination from '../../../utils/components/TablePagination'
import discountColumns from '../../../tableColumns/discountColumns.json'
import TableFilter from "../../../utils/components/TableFilter"
import { useModal } from '../../../utils/hooks/useModal'
import { getAllDiscountApi, deleteDiscountDataByIdApi } from "../../../redux/api/Discount"

import filterIcon from '../../assest/icon/filter.png'
import editIcon from '../../assest/icon/ViewDetailEditIcon.png'
import deleteIcon from '../../assest/icon/ViewDetailDeleteIcon.png'
import CreateDiscountModal from "./CreateDiscountModal"
import UpdateDiscountModal from "./UpdateDiscountModal"

const DiscountCodeTable = ({ isAddModalVisible, toggle }) => {
    const dispatch = useDispatch()
    const [isUpdateModalVisible, toggleUpdate] = useModal()
    const [dataSource, setDataSource] = useState([])
    const [selectedFilter, setSelectedFilter] = useState('Discount Code')
    const [updateData, setUpdateData] = useState()
    const [search, setSearch] = useState('')
    const [pageLimit, setPageLimit] = useState({
        page: 1,
        limit: 10,
    })
    const getAllDiscount = useSelector((state) => state?.getAllDiscount)
    const deleteDiscountDataById = useSelector((state) => state?.deleteDiscountDataById)
    const addDiscount = useSelector((state) => state?.addDiscount)

    const debouncedGetAllDiscountApi = useRef(
        debounce((dispatch, pageLimit, search, selectedFilter) => {
            getAllDiscountApi(dispatch, pageLimit, search, selectedFilter)
        }, 500)
    ).current
    useEffect(() => {
        debouncedGetAllDiscountApi(dispatch, pageLimit, search, selectedFilter)
    }, [dispatch, pageLimit, deleteDiscountDataById?.data, addDiscount?.data])

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
        if (getAllDiscount?.data) {
            const data = getAllDiscount?.data?.data?.items.map((item, i) => {
                return {
                    key: i,
                    discountCode: item?.discountCode,
                    discountPercentage: item?.discountPercentage,
                    discountUsage: `${item?.usedCounter}/${item?.noOfUsage}`,
                    startDate: item?.startDate?.split('T')?.[0],
                    expiresDate: item?.expiresOn?.split('T')?.[0],
                    action: (
                        <div className="flex flex-wrap  gap-2">
                            <div className="cursor-pointer">
                                <img
                                    src={editIcon}
                                    alt=""
                                    onClick={() => {
                                        setUpdateData(item)
                                        toggleUpdate()
                                    }}
                                />{' '}
                            </div>
                            <div
                                className="cursor-pointer"
                                onClick={() => {
                                    deleteDiscountDataByIdApi(dispatch, item?.id)
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
    }, [getAllDiscount?.data])
    return (
        <>
            {isAddModalVisible && <CreateDiscountModal
                visible={isAddModalVisible} toggle={toggle}
            />}
            {isUpdateModalVisible && <UpdateDiscountModal
                visible={isUpdateModalVisible} toggle={toggleUpdate} updateData={updateData}
            />}
            <Row className="bg-white">
                <Col lg={24} xs={24}>
                    <div className="py-[20px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
                        <div>
                            <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                                All Discount Codes
                            </h3>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 items-center  sm:items-stretch w-full sm:w-auto">
                            {selectedFilter === 'Discount Code' ? (
                                <Input
                                    placeholder={`Search ${selectedFilter}`}
                                    prefix={<SearchOutlined />}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-full lg:w-[268px] h-[43px]"
                                    value={search}
                                />
                            ) : (
                                ''
                            )}
                            <Popover
                                placement="bottomRight"
                                content={
                                    <TableFilter
                                        setSelectedFilter={setSelectedFilter}
                                        selectedFilter={selectedFilter}
                                        filterTitle={['Discount Code']}
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
                        columns={discountColumns}
                        loading={getAllDiscount?.loading || deleteDiscountDataById?.loading}
                        scroll={{ x: true }}
                        pagination={{
                            total: getAllDiscount?.data?.data?.meta?.totalPages * getAllDiscount?.data?.data?.meta?.itemsPerPage,
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

export default DiscountCodeTable