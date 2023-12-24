import React from 'react'
import { Tabs } from 'antd'
import PageContainer from '../../../utils/components/PageContainer'
import PageHeader from '../../../utils/components/PageHeader'
import Token from './Token/Token'
import Project from './Project/Project'
import Product from './Product/Product'

const PaymentRequest = () => {
    const items = [
        {
            label: 'Projects',
            key: '1',
            children: <Project />,
        },
        {
            label: 'Products',
            key: '2',
            children: <Product />,
        },
        {
            label: 'Token Payment',
            key: '3',
            children: <Token />,
        },
    ]
    return (
        <PageContainer>
            <PageHeader
                title="Payment Requests"
                subTitle="Find all payment Requests"
            />
            <Tabs size="large" defaultActiveKey="1" items={items} />
        </PageContainer>
    )
}

export default PaymentRequest