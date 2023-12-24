import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProjectsApi } from '../../../../../redux/api/ProjectCoordinator'
import { useDispatch } from 'react-redux'
import { Button, Col, Input, Row, Table } from 'antd'
import TablePagination from '../../../../../utils/components/TablePagination'
import coViewProjectColumns from "../../../../../tableColumns/coViewProjectColumns.json"
import { useSelector } from 'react-redux'
import { SearchOutlined } from '@ant-design/icons'
import { debounce } from 'lodash'
import eyeview from '../../../../assest/icon/eyeview.png'


const CoViewProjectTable = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const [selectedFilter, setSelectedFilter] = useState('Name')
    const [search, setSearch] = useState('')
    const [dataSource, setDataSource] = useState([])
    const { data, loading } = useSelector((state) => state?.getProjectsCO)
    const navigate = useNavigate()

    const [pageLimit, setPageLimit] = useState({
        page: 1,
        limit: 10,
    })
    const debouncedGetProjectsApi = useRef(
        debounce((dispatch, pageLimit, search, selectedFilter, id) => {
            getProjectsApi(dispatch, pageLimit, search, selectedFilter, id)
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
        debouncedGetProjectsApi(dispatch, pageLimit, search, selectedFilter, id)
    }, [id, dispatch, pageLimit, selectedFilter])
    useEffect(() => {
        if (data?.data?.items) {
            const dataSet = data?.data?.items?.map((item, i) => {
                return {
                    key: i,
                    projectName: item?.projectName || '-',
                    description: item?.description || "-",
                    address: item?.address || '-',
                    city: item?.city || '-',
                    builderName: item?.builderName || "-",
                    action: (
                        <Button
                            onClick={() => item?.id && navigate(`logs/${item?.id}`)}
                            className="flex items-center font-medium text-[12px] gap-2 text-[#3D4350] rounded-[41px] h-[38px] w-max"
                        >
                            <img src={eyeview} alt="" />
                            <span>View Logs</span>
                        </Button>
                    )
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
                        columns={coViewProjectColumns}
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

export default CoViewProjectTable