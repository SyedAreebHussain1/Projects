import React from 'react'
import PageContainer from '../../../../utils/components/PageContainer'
import PageHeader from '../../../../utils/components/PageHeader'
import AgencyReviewTable from './helpers/AgencyReviewTable'

const AgencyReview = () => {
    return (
        <PageContainer>
            <PageHeader
                title="Agency Review"
                subTitle="All Agency Review"
            />
            <AgencyReviewTable />
        </PageContainer>
    )
}

export default AgencyReview