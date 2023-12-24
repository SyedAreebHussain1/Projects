import React, { useEffect, useRef, useState } from 'react'
import { Button, Col, Input, Row, Table } from 'antd'
import moment from 'moment'
import { debounce } from 'lodash'
import { SearchOutlined } from '@ant-design/icons'
import productColums from '../../../../../tableColumns/productColums.json'
import TablePagination from '../../../../../utils/components/TablePagination'
import { useModal } from '../../../../../utils/hooks/useModal'
// import PayBillModal from './PayBillModal'
import { useDispatch, useSelector } from 'react-redux'
import { getPWIAdminPaymentAssistanceRequestApi } from '../../../../../redux/api/Support/PaymentRequest'
import { useReactToPrint } from 'react-to-print'

// icon
import payBillIcon from '../../../../assest/icon/pay.png'
import voucherIcon from '../../../../assest/icon/voucher.png'
// import Voucher from '../../Voucher/Voucher'
import { scrollToTop } from '../../../../../utils/utils'

const ProductTable = () => {
    let componentRef = useRef()
    const [dataSource, setDataSource] = useState([])
    const [isAddModalVisible, toggleAdd] = useModal()
    const [voucherData, setVoucherData] = useState(null)
    const getPWIAdminPaymentAssistanceRequest = useSelector(
        (state) => state.getPWIAdminPaymentAssistanceRequest
    )
    const [pageLimit, setPageLimit] = useState({
        page: 1,
        limit: 10,
    })
    const dispatch = useDispatch()
    const debouncedGetPWIAdminPaymentAssistanceRequestApi = useRef(
        debounce((dispatch, pageLimit) => {
            getPWIAdminPaymentAssistanceRequestApi(dispatch, pageLimit)
        }, 500)
    ).current
    useEffect(() => {
        scrollToTop()
        debouncedGetPWIAdminPaymentAssistanceRequestApi(dispatch, pageLimit)
    }, [pageLimit])
    // const handlePrint = useReactToPrint({
    //     content: () => componentRef.current,
    //     copyStyles: true,
    //     pageStyle: `
    //   @page
    //     {
    // size: a4 !important;
    // margin: 0px;

    //     }`,
    // })
    useEffect(() => {
        if (getPWIAdminPaymentAssistanceRequest?.data) {
            const data = getPWIAdminPaymentAssistanceRequest?.data?.data?.items?.map(
                (item, i) => {
                    return {
                        clientName: (
                            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
                                {
                                    item?.propertyWalletInventoryFinalizeSaleStage
                                        ?.propertyWalletInventoryFinalizeSale
                                        ?.propertyWalletInventorySaleQuotation?.clientName
                                }
                            </span>
                        ),
                        phoneNo: (
                            <span className="font-medium text-[12px] leading-[18px] text-[#444B54]">
                                {
                                    item?.propertyWalletInventoryFinalizeSaleStage
                                        ?.propertyWalletInventoryFinalizeSale
                                        ?.propertyWalletInventorySaleQuotation?.phone
                                }
                            </span>
                        ),
                        project: (
                            <span className="font-semibold text-[12px] leading-[18px] text-[#667085]">
                                {
                                    item?.propertyWalletInventoryFinalizeSaleStage
                                        ?.propertyWalletInventoryFinalizeSale
                                        ?.propertyWalletInventorySaleQuotation
                                        ?.propertyWalletInventoryPlot?.propertyWalletInventory
                                        ?.propertyWalletProject?.projectName
                                }
                            </span>
                        ),
                        plotNo: (
                            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
                                {
                                    item?.propertyWalletInventoryFinalizeSaleStage
                                        ?.propertyWalletInventoryFinalizeSale
                                        ?.propertyWalletInventorySaleQuotation
                                        ?.propertyWalletInventoryPlot?.plotNo
                                }
                            </span>
                        ),
                        dealType: (
                            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
                                {
                                    item?.propertyWalletInventoryFinalizeSaleStage
                                        ?.propertyWalletInventoryFinalizeSale
                                        ?.propertyWalletInventorySaleQuotation?.dealType
                                }
                            </span>
                        ),
                        payment: (
                            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
                                dummy
                            </span>
                        ),
                        date: (
                            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
                                {moment(item?.createdAt).format('MM/DD/YYYY')}
                            </span>
                        ),
                        amount: (
                            <span className="font-medium text-[12px] leading-[18px] text-[#3D4350]">
                                {item?.amount}
                            </span>
                        ),
                        action: (
                            <div className="flex gap-2 justify-center">
                                <Button
                                    onClick={() => {
                                        setVoucherData(item)
                                        // setTimeout(handlePrint, 500)
                                    }}
                                    className="ant-btnn flex items-center font-medium text-[12px] gap-1 text-[#3D4350] rounded-[41px] h-[30px] flex-shrink-0"
                                >
                                    <img src={voucherIcon} alt="" />
                                    <span>Genterate Voucher</span>
                                </Button>
                                <Button
                                    // onClick={(e) => handleAdd(project.id)}
                                    onClick={(e) => {
                                        // toggleAdd();

                                        window.open(item?.blinqInvoice?.ClickToPayUrl, '_blank')
                                    }}
                                    className="ant-btnn flex items-center font-medium text-[12px] gap-1 text-[#3D4350] rounded-[41px] h-[30px] flex-shrink-0"
                                >
                                    <img src={payBillIcon} alt="" />
                                    <span>Pay Now</span>
                                </Button>
                            </div>
                        ),
                    }
                }
            )
            setDataSource(data)
        } else {
            setDataSource([])
        }
    }, [getPWIAdminPaymentAssistanceRequest?.data])

    return (
        <>
            {/* <div ref={componentRef} className="hidden d-print-block">
                <Voucher voucherData={voucherData} />
            </div> */}

            {/* <PayBillModal visible={isAddModalVisible} toggleAdd={toggleAdd} /> */}
            <Row className="bg-white">
                <Col lg={24} xs={24}>
                    <div className="py-[15px] px-[15px] flex items-center justify-between flex-col lg:flex-row">
                        <div>
                            <h3 className="text-[15px] text-[#2B2B2B] font-medium ">
                                All Product Requests
                            </h3>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 items-center  sm:items-stretch w-full sm:w-auto">
                            <Input
                                placeholder={`Search Phone`}
                                prefix={<SearchOutlined />}
                                //   onChange={(e) => setSearch(e.target.value)}
                                className="w-full lg:w-[268px] h-[43px]"
                                //   value={search}
                                onKeyPress={(event) => {
                                    if (!/[0-9,.]/.test(event.key)) {
                                        event.preventDefault()
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <Table
                        dataSource={dataSource}
                        columns={productColums}
                        scroll={{ x: true }}
                        loading={getPWIAdminPaymentAssistanceRequest.loading}
                        pagination={{
                            total:
                                getPWIAdminPaymentAssistanceRequest?.data?.data?.meta
                                    ?.totalPages *
                                getPWIAdminPaymentAssistanceRequest?.data?.data?.meta
                                    ?.itemsPerPage,
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

export default ProductTable
