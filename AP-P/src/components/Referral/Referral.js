import React from 'react'
import ReferralTable from './helpers/ReferralTable'
import PageContainer from '../../utils/components/PageContainer'
import PageHeader from '../../utils/components/PageHeader'

const Referral = () => {
    return (
        <PageContainer>
            <PageHeader
                title="Referral"
                subTitle="Find all of your projects"
            />
            <ReferralTable />
        </PageContainer>
    )
}

export default Referral