import React from 'react'
import PageContainer from '../../utils/components/PageContainer'
import PageHeader from '../../utils/components/PageHeader'
import AgencyTable from './helpers/AgencyTable'

const Agency = () => {
    return (
        <PageContainer>
            <PageHeader
                title="Agency Review"
                subTitle="Search Agency Review"
            />
            <AgencyTable />
        </PageContainer>
    )
}

export default Agency