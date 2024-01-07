import React, { useEffect, useRef, useState } from 'react'
import { Button, Col, Input, Rate, Row, Space, Table, Tooltip } from 'antd'
import surveyLogsColumns from "../../../../tableColumns/surveyLogsColumns.json"
import TablePagination from '../../../../utils/components/TablePagination'
import { SearchOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { debounce } from 'lodash'
import { findAllSurveyLogsApi } from '../../../../redux/api/Survey'

const SurveysLogsTable = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [dataSource, setDataSource] = useState([])
    const [search, setSearch] = useState('')
    const [pageLimit, setPageLimit] = useState({
        page: 1,
        limit: 10,
    })
    const { data, loading } = useSelector((state) => state?.findAllSurveyLogs)

    const debouncedFindAllSurveyLogsApi = useRef(
        debounce((dispatch, pageLimit) => {
            findAllSurveyLogsApi(dispatch, pageLimit)
        }, 500)
    ).current

    useEffect(() => {
        setPageLimit({
            page: 1,
            limit: 10,
        })
    }, [])

    useEffect(() => {
        debouncedFindAllSurveyLogsApi(dispatch, pageLimit)
    }, [dispatch, pageLimit])

    useEffect(() => {
        if (data?.data?.items) {
            const dataSet = data?.data?.items?.map((item, i) => {
                return {
                    key: i,
                    name: item?.user?.profile?.fullName || "-",
                    description: item?.comments,
                    status: "N/A",
                    projectName: item?.surveyForm?.projectTitle || '-',
                    projectSize: item?.surveyForm?.projectSize || '-',
                    rating: <Rate className='flex' disabled defaultValue={2} /> || '-',
                    projectCategory: item?.surveyForm?.projectCategory || '-',
                    projectCompleteTime: item?.surveyForm?.projectCompleteTime,
                    date: item?.createdAt.split("T")[0],
                    location: <span> {item?.surveyForm?.location.length > 29 ? <Space wrap> <Tooltip className='cursor-pointer' title={item?.surveyForm?.location}>
                        <span>
                            {`${item?.surveyForm?.location.substring(0, 19)}...`}
                        </span>

                    </Tooltip></Space> : item?.surveyForm?.location}</span>,
                }
            })
            setDataSource(dataSet)
        }
    }, [data?.data])
    return (
        <Row className="bg-white">
            <Col lg={24} xs={24}>
                <div className="py-[20px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
                    <div>
                        <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                            All Survey Logs
                        </h3>
                    </div>

                </div>
                <Table
                    dataSource={dataSource}
                    columns={surveyLogsColumns}
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
    )
}

export default SurveysLogsTable