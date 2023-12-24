import React, { useState, useEffect, useRef } from "react"
import { Col, Row, Table } from 'antd'
import { debounce } from 'lodash'
import { useDispatch, useSelector } from 'react-redux'

import TablePagination from '../../../../utils/components/TablePagination'
import subscriptionPackagesColumns from '../../../../tableColumns/subscriptionPackagesColumns.json'
import { useModal } from '../../../../utils/hooks/useModal'
import { getPwPackagesApi } from "../../../../redux/api/SubscriptionManagement/Packages"
import editIcon from '../../../assest/icon/ViewDetailEditIcon.png'
import CreatePackageModal from "./CreatePackageModal"
import UpdatePackagesModal from "./UpdatePackagesModal"

const PackagesTable = ({ isAddModalVisible, toggleAdd }) => {
    const dispatch = useDispatch()
    const [updateData, setUpdateData] = useState()
    const [isUpdateModalVisible, toggleUpdate] = useModal()
    const [dataSource, setDataSource] = useState([])
    const [pageLimit, setPageLimit] = useState({
        page: 1,
        limit: 10,
    })
    const getPwPackages = useSelector((state) => state?.getPwPackages)

    const debouncedGetPwPackagesApi = useRef(
        debounce((dispatch, pageLimit) => {
            getPwPackagesApi(dispatch, pageLimit)
        }, 500)
    ).current
    useEffect(() => {
        debouncedGetPwPackagesApi(dispatch, pageLimit)
    }, [dispatch, pageLimit])
    useEffect(() => {
        if (getPwPackages?.data) {
            const data = getPwPackages?.data?.data?.items.map((item, i) => {
                return {
                    key: i,
                    packageName: item?.pwPackage?.title,
                    charges: item?.charges,
                    userLimits: item?.agency?.agencyName,
                    noOfListings: item?.noOfUserLimit,
                    hotListings: item?.hotListing,
                    recurringCommission: item?.rentalCommission,
                    firstMonthCommission: item?.regCommission,
                    noOfMonthsForRC: item?.noCommissionCount,
                    action: (
                        <div className="flex flex-wrap  gap-2">
                            <div
                                className="cursor-pointer"
                                onClick={() => {
                                    setUpdateData(item)
                                    toggleUpdate()
                                }}
                            >
                                <img src={editIcon} alt="" />
                            </div>
                        </div>
                    )
                }
            })
            setDataSource(data)
        }
    }, [getPwPackages?.data])
    return (
        <>
            {isAddModalVisible && <CreatePackageModal visible={isAddModalVisible} toggle={toggleAdd} />}
            {isUpdateModalVisible && <UpdatePackagesModal visible={isUpdateModalVisible} toggle={toggleUpdate} data={updateData} />}
            <Row className="bg-white">
                <Col lg={24} xs={24}>
                    <div className="py-[20px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
                        <div>
                            <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                                All Subscription Packages

                            </h3>
                        </div>
                    </div>
                    <Table
                        dataSource={dataSource}
                        columns={subscriptionPackagesColumns}
                        loading={getPwPackages?.loading}
                        scroll={{ x: true }}
                        pagination={{
                            total: getPwPackages?.data?.data?.meta?.totalPages * getPwPackages?.data?.data?.meta?.itemsPerPage,
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

export default PackagesTable