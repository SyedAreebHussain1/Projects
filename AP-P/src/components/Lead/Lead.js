import React from 'react'
import PageContainer from '../../utils/components/PageContainer'
import PageHeader from '../../utils/components/PageHeader'
import LeadTable from './helpers/LeadTable'

const Lead = () => {
    return (
        <PageContainer>
            <PageHeader
                title="Leads"
                subTitle="Manage all your Leads"
            // extra={addDiscountCode}
            />
            <LeadTable />
        </PageContainer>
    )
}

export default Lead