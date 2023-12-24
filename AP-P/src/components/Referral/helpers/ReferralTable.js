import React, { useState, useEffect, useRef } from "react"
import { Button, Col, Input, Row, Table, Form } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'antd/es/form/Form'
import moment from "moment"
import TablePagination from '../../../utils/components/TablePagination'
import refeeralsColums from '../../../tableColumns/leadsColumns.json'
import { getReferralApi } from "../../../redux/api/Referral"
import { useNavigate, useLocation } from "react-router-dom"
import { scrollToTop } from "../../../utils/utils"

const ReferralTable = () => {
    const { search } = useLocation()
    const dispatch = useDispatch()
    const query = React.useMemo(() => new URLSearchParams(search), [search])
    const navigate = useNavigate()
    const [dataSource, setDataSource] = useState([])
    const [referralCode, setReferralCode] = useState("")
    const [form] = useForm()
    const [pageLimit, setPageLimit] = useState({
        page: 1,
        limit: 10,
    })
    const getReferral = useSelector((state) => state?.getReferral)
    function onFinish() {
        if (referralCode !== null) {
            navigate(`/referrals?refCode=${referralCode}`)
        }
    }
    useEffect(() => {
        scrollToTop()
        if (query.get('refCode')) {
            setReferralCode(query.get('refCode'))
            form.setFieldValue('referralCode', query.get('refCode'))
            getReferralApi(dispatch, query.get('refCode'), pageLimit, onSuccess)
        }
    }, [query])
    function onSuccess() { }
    useEffect(() => {
        if (getReferral?.data) {
            const data = getReferral?.data?.data?.items?.map((val, i) => {
                return {
                    key: i,
                    name: (
                        <span className="text-[12px] font-medium text-[#3D4350]">
                            {val?.fullName}
                        </span>
                    ),
                    cnic: (
                        <span className="text-[12px] font-medium text-[#3D4350]">
                            {val?.user?.cnic}
                        </span>
                    ),
                    referralName: (
                        <span className="text-[12px] font-medium text-[#3D4350]">
                            {getReferral?.data?.data?.referralName}
                        </span>
                    ),
                    phoneNo: (
                        <span className="text-[12px] font-medium text-[#3D4350]">
                            {val?.user?.phone}
                        </span>
                    ),
                    location: (
                        <span className="text-[12px] font-medium text-[#3D4350]">
                            {val?.agency?.address}
                        </span>
                    ),
                    agencyName: (
                        <span className="text-[12px] font-medium text-[#444B54]">
                            {val?.agency?.agencyName}
                        </span>
                    ),
                    date: (
                        <span className="text-[12px] font-medium text-[#444B54]">
                            {moment(val?.createdAt).format('DD/MM/YYYY')}
                        </span>
                    ),
                }
            })
            setDataSource(data)
        } else {
            setDataSource([])
        }
    }, [getReferral?.data])

    return (
        <>
            <Row>
                <Form
                    name="normal_login"
                    form={form}
                    onFinish={onFinish}
                    initialValues={{ remember: true }}
                >
                    <div className="flex flex-col sm:flex-row gap-2 items-center  sm:items-stretch w-full sm:w-auto mb-[2%]">
                        <Form.Item
                            rules={[
                                {
                                    required: true,
                                    message: 'Refeeral is required',
                                },
                            ]}
                            name="referralCode"
                        >
                            <Input
                                name="referralCode"
                                onChange={(e) => setReferralCode(e.target.value)}
                                placeholder="Search Referral"
                                prefix={<SearchOutlined />}
                                required
                                className="w-full lg:w-[300px] h-[41px]"
                            />
                        </Form.Item>
                        <Button
                            className="btn-primary flex items-center text-[14px] gap-2 bg-[#3D4350] text-[#FFFFFF] rounded-[] h-[41px]"
                            htmlType="submit"
                        >
                            <span>Search</span>
                        </Button>
                    </div>
                </Form>
            </Row>
            <Row className="bg-white">
                <Col lg={24} xs={24}>
                    <div className="py-[33px] px-[24px] flex items-center justify-between flex-col lg:flex-row">
                        <div className="flex gap-2">
                            <div>
                                <h3 className="text-[18px] font-semibold">All Referrals</h3>
                            </div>{' '}
                            <div className="h-[23px] w-[23px] bg-[#147ad60d] rounded-[50%] inline-block ">
                                {' '}
                                <span className="text-[#147AD6] bg-[#F0F1F3] py-[3px] px-[8px] rounded-[32px]">
                                    {getReferral?.data?.data?.items?.length || 0}
                                </span>
                            </div>
                        </div>
                    </div>
                    <Table
                        dataSource={dataSource}
                        columns={refeeralsColums}
                        loading={getReferral?.loading}
                        scroll={{ x: true }}
                        pagination={{
                            total: getReferral?.data?.data?.meta?.totalPages * getReferral?.data?.data?.meta?.itemsPerPage,
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

export default ReferralTable