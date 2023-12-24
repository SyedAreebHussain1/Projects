import React from 'react'
import UserInfoField from './UserInfoField'
import LeadGenerated from '../../../assest/icon/leadGeneration.png'
import TotalReferal from '../../../assest/icon/totalReferal.png'
import QuotationsCreated from '../../../assest/icon/noOfStaff.png'
import SaleOrderCreated from '../../../assest/icon/saleOrderCreated.png'
import BrochureCreated from '../../../assest/icon/brocherCreated.png'
import PostCreated from '../../../assest/icon/postCreated.png'
import BusinessCard from '../../../assest/icon/business.png'
import PaymentPlanCreated from '../../../assest/icon/paymentPlanCreated.png'

const Activities = ({ data }) => {
    return (
        <div className="bg-white rounded-lg">
            <div className="pt-[20px] px-[24px] pb-[58px]">
                <div className="flex justify-between items-center pb-[40px]">
                    <h4 className="text-[15px] text-[#3D4350]">All Activities</h4>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 grid-flow-dense gap-[37px]">
                    <UserInfoField
                        title="Leads Generated"
                        value="-"
                        img={LeadGenerated}
                    />
                    <UserInfoField
                        title="Payment plans Created"
                        value="-"
                        img={PaymentPlanCreated}
                    />
                    <UserInfoField
                        title="Total Referrals"
                        value={data?.data?.data?.totalReferrals || '-'}
                        img={TotalReferal}
                    />
                    <UserInfoField
                        title="Brochure Created"
                        value="-"
                        img={BrochureCreated}
                    />
                    <UserInfoField
                        title="Quotations Created"
                        value={data?.data?.data?.quotationCount || '-'}
                        img={QuotationsCreated}
                    />
                    <UserInfoField title="Post Created" value="125" img={PostCreated} />
                    <UserInfoField
                        title="Sale Order Created"
                        value={data?.data?.data?.saleOrderCreated || '-'}
                        img={SaleOrderCreated}
                    />
                    <UserInfoField title="Business Card" value="-" img={BusinessCard} />
                </div>
            </div>
        </div>
    )
}

export default Activities
