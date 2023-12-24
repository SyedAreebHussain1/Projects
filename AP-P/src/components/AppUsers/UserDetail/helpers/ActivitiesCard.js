import { Col } from 'antd'
import React from 'react'

const ActivitiesCard = ({ title, img, count, lastDayCount, percentage }) => {
    return (
        <Col
            lg={12}
            md={24}
            xs={24}
            className="p-[5px] gap-2"
        >
            <div className="p-[3px] border w-full">
                <div className="p-[5px]">
                    <div className="">
                        <img src={img} alt="" />
                    </div>
                    <div className="p-[2px] gap-1">
                        <div className="font-semibold text-[14px]  text-[#444B54] text-textColor">
                            {title}
                        </div>
                        <div className="flex-block">
                            <div className="font-semibold text-[24px] text-texColorDarkGreen">
                                <span className="">PKR 300</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default ActivitiesCard
