import React from "react";
import { Col } from "antd";
import upSaleIcon from '../../assest/icon/upsale-green.png'
import { findPercentage, internationSystem } from '../../../utils/utils'

const PropertyOverviewCard = ({ title,
    img,
    count,
    lastDayCount,
    percentage, }) => {
    return <Col
        lg={12}
        md={24}
        xs={24}
        className="p-[15px]"
    >
        <div className="p-[10px] border w-full">
            <div className="p-[10px]">
                <div className="four_icon_h">
                    <img src={img} alt="" />
                </div>
                <div className="">
                    <div className="font-medium text-[15px]  text-textColor">
                        {title}
                    </div>
                    <div className="flex-block">
                        <div className="font-semibold text-[28px] text-texColorDarkGreen">
                            {percentage && 'PKR '}
                            {count ? (percentage ? internationSystem(count) : count) : 0}
                            &nbsp;
                        </div>
                        {percentage ? (
                            <div className="mintext !bg-[#0bbc640d]">
                                <div className="font-medium text-[12px] flex items-center gap-1">
                                    <span>
                                        <img src={upSaleIcon} alt="" />
                                    </span>
                                    <span className="text-[#0BBC64]">
                                        {findPercentage(count, lastDayCount)
                                            ? findPercentage(count, lastDayCount)
                                            : 0}
                                        %
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <div className="mintext">
                                <div className="mintexttex b_p">
                                    {lastDayCount}+ new added
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </Col>
}

export default PropertyOverviewCard