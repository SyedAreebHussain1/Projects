import React, { useState } from 'react'
import moment from 'moment'
import { DatePicker } from 'antd'
import PropertyOverview from './PropertyOverview'
import Chart from './Chart'

const DashboardHead = () => {
    const [placement, SetPlacement] = useState('bottomLeft')
    const placementChange = (e) => {
        SetPlacement(e.target.value)
    }

    const [yearCustomerAppCount, setyearCustomerAppCount] = useState(
        moment().year()
    )

    return (
        <>
            <div>
                <div className="r_d_m">
                    <div className="c_d_m" style={{ backgroundColor: '' }}>
                        <div className="border hg" style={{ height: '', padding: '10px' }}>
                            <div>
                                <div className="font-semibold text-[18.75px] text-textcolor2">
                                    Property Overview
                                </div>
                                <div className=" font-medium text-[15px]  text-textColor">
                                    {' '}
                                    Check overview of all your property details.
                                </div>
                            </div>
                            <br />
                            <PropertyOverview />
                        </div>
                    </div>
                    <div className="c_d_m" style={{ backgroundColor: '' }}>
                        <div className="border hg" style={{ height: '', padding: '10px' }}>
                            <div className="flex justify-between">
                                <div>
                                    <div className="font-semibold text-[18.75px] text-textcolor2">
                                        No of Verified & Unverified Users
                                    </div>
                                    <div className="font-medium text-[15px]  text-textColor">
                                        Check overview of all your users.
                                    </div>
                                </div>
                                <div className="mt-[]">
                                    <DatePicker
                                        onChange={(val, year) => {
                                            setyearCustomerAppCount(year)
                                        }}
                                        placement={placement}
                                        picker="year"
                                    />
                                </div>
                            </div>
                            <div>
                                <Chart yearCustomerAppCount={yearCustomerAppCount} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DashboardHead
