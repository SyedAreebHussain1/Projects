import { Col, Row } from 'antd'
import React from 'react'

const SectionContainer = ({ title, subtitle, extras, children }) => {
    return (
        <Row gutter={24}>
            <Col lg={6} xs={24}>
                <p className="text-[#292D35] font-medium text-[15px] mb-1">{title}</p>
                <p className="text-[#667085] font-medium text-[12px]">{subtitle}</p>
                {extras}
            </Col>
            <Col lg={18} xs={24}>
                {children}
            </Col>
        </Row>
    )
}

export default SectionContainer