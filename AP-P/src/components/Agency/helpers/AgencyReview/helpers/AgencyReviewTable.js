import { Col, Row, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import agencyReviewColumns from "../../../../../tableColumns/agencyReviewColumns.json"
import TablePagination from '../../../../../utils/components/TablePagination'
import { useParams } from 'react-router-dom'
import { getAgencyReviewByIdApi } from '../../../../../redux/api/Agency'
const AgencyReviewTable = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const [dataSource, setDataSource] = useState([])
    const [pageLimit, setPageLimit] = useState({
        page: 1,
        limit: 10,
    })
    const getAgencyReviewById = useSelector((state) => state?.getAgencyReviewById)
    useEffect(() => {
        getAgencyReviewByIdApi(dispatch, pageLimit, params?.id)
    }, [dispatch, pageLimit])
    useEffect(() => {
        if (getAgencyReviewById?.data) {
            const data = getAgencyReviewById?.data?.data?.items?.map((item, i) => {
                return {
                    sno: i + 1,
                    name: item?.name,
                    comment: item?.comment,
                    phone: item?.phone,
                    email: item?.email || "-",
                    rate: item?.rateStar || "-",
                }
            })
            setDataSource(data)
        }
    }, [getAgencyReviewById?.data])
    return (
        <>
            <Row className="bg-white">
                <Col lg={24} xs={24}>
                    <div className="py-[20px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
                        <div>
                            <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                                All Agency Review
                            </h3>
                        </div>
                    </div>
                    <Table
                        dataSource={dataSource}
                        columns={agencyReviewColumns}
                        loading={getAgencyReviewById?.loading}
                        scroll={{ x: true }}
                        pagination={{
                            total: getAgencyReviewById?.data?.data?.meta?.totalPages * getAgencyReviewById?.data?.data?.meta?.itemsPerPage,
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

export default AgencyReviewTable