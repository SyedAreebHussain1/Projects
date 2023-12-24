import React from 'react'
import UserInfoField from './UserInfoField'
import AgencyName from '../../../assest/icon/agencyName.png'
import AgencyLocation from '../../../assest/icon/agencyLocation.png'
import NoOfStaff from '../../../assest/icon/noOfStaff.png'
import NoOfInventories from '../../../assest/icon/noOfInventories.png'
import NoOfSold from '../../../assest/icon/noOfSold.png'
import TotalCommision from '../../../assest/icon/totalCommison.png'
import { internationSystem } from '../../../../utils/utils'

const AgenciesAndInventoryDetails = ({ data }) => {
    return (
        <div className="bg-white rounded-lg">
            <div className="pt-[20px] px-[24px] pb-[58px]">
                <div className="flex justify-between items-center pb-[40px]">
                    <h4 className="text-[15px] text-[#3D4350]">
                        Agency & Inventory Details
                    </h4>
                </div>
                <div className="grid grid-cols-2 2xl:grid-cols-3 gap-[37px]">
                    <UserInfoField
                        title="Agency"
                        value={data?.data?.data?.profile?.agency?.agencyName || '-'}
                        img={AgencyName}
                    />
                    <UserInfoField
                        title="No of Inventories Assigned"
                        value={data?.data?.data?.noOfInventories || '-'}
                        img={NoOfInventories}
                    />
                    <UserInfoField
                        title="Agency Location"
                        value={data?.data?.data?.profile?.agency?.address || '-'}
                        img={AgencyLocation}
                    />
                    <UserInfoField
                        title="No of Sold Inventories"
                        value={data?.data?.data?.noOfSoldInventories || '-'}
                        img={NoOfSold}
                    />
                    <UserInfoField title="No of Staff" value="-" img={NoOfStaff} />
                    <UserInfoField
                        title="Total Commission Earned"
                        value={`PKR ${data?.data?.data?.totalcommisionEarned
                            ? internationSystem(
                                data?.data?.data?.totalcommisionEarned
                            )
                            : '0'
                            }`}
                        img={TotalCommision}
                    />
                </div>
            </div>
        </div>
    )
}

export default AgenciesAndInventoryDetails
