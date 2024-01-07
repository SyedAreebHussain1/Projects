import React, { useEffect, useRef, useState } from 'react'
import { Col, Row, Space, Table, Tooltip } from 'antd'
import surveyColumns from "../../../../tableColumns/surveyColumns.json"
import TablePagination from '../../../../utils/components/TablePagination'
import { useDispatch, useSelector } from 'react-redux'
import editPenIcon from '../../../assest/icon/ViewDetailEditIcon.png'
import { debounce } from 'lodash'
import { findAllSurveyApi } from '../../../../redux/api/Survey'
import AddSurveyModal from './AddSurveyModal'
import EditSurveyModal from './EditSurveyModal'
import { useModal } from '../../../../utils/hooks/useModal'


const SurveysTable = ({ visible, toggle }) => {
    const dispatch = useDispatch()
    const [isVisible, isToggle] = useModal()
    const [dataSource, setDataSource] = useState([])
    const [editData, setEditData] = useState({})
    const [pageLimit, setPageLimit] = useState({
        page: 1,
        limit: 10,
    })
    const { data, loading } = useSelector((state) => state?.findAllSurvey)
    const addSurveyForm = useSelector((state) => state?.AddSurveyForm)
    const editdSurveyForm = useSelector((state) => state?.editdSurveyForm)
    const debouncedFindAllSurveyApi = useRef(
        debounce((dispatch, pageLimit) => {
            findAllSurveyApi(dispatch, pageLimit)
        }, 500)
    ).current

    useEffect(() => {
        setPageLimit({
            page: 1,
            limit: 10,
        })
    }, [])

    useEffect(() => {
        debouncedFindAllSurveyApi(dispatch, pageLimit)
    }, [dispatch, pageLimit, addSurveyForm?.data, editdSurveyForm?.data])

    useEffect(() => {
        if (data?.data?.items) {
            const dataSet = data?.data?.items?.map((item, i) => {
                return {
                    key: i,
                    projectName: item?.projectTitle || "-",
                    projectSize: item?.projectSize,
                    projectCategory: item?.projectCategory || '-',
                    projectCompleteTime: item?.projectCompleteTime,
                    date: item?.createdAt.split("T")[0],
                    location: <span> {item?.location.length > 29 ? <Space wrap> <Tooltip className='cursor-pointer' title={item?.location} >
                        <span>
                            {`${item?.location.substring(0, 19)}...`}
                        </span>

                    </Tooltip></Space> : item?.location}</span>,
                    action: (
                        <div className='flex'>
                            <span className='cursor-pointer' onClick={() => [isToggle(), setEditData(item)]}>
                                <img src={editPenIcon} alt='' />
                            </span>
                        </div>
                    )
                }
            })
            setDataSource(dataSet)
        }
    }, [data?.data])
    return (
        <>
            {visible && <AddSurveyModal visible={visible} toggle={toggle} />}
            {isVisible && <EditSurveyModal visible={isVisible} toggle={isToggle} editData={editData} />}
            <Row className="bg-white">
                <Col lg={24} xs={24}>
                    <div className="py-[20px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
                        <div>
                            <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                                All Survey
                            </h3>
                        </div>

                    </div>
                    <Table
                        dataSource={dataSource}
                        columns={surveyColumns}
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

export default SurveysTable