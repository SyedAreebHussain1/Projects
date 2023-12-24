import React from 'react'
import PageHeader from '../../../utils/components/PageHeader'
import PageContainer from '../../../utils/components/PageContainer'
import ActiveSubscriptionTable from './helpers/ActiveSubscriptionTable'

const ActiveSubscription = () => {
    return (
        <PageContainer>
            <PageHeader
                title="Subscribers"
                subTitle="Details and activities of the Subscribers"
            />
            <ActiveSubscriptionTable />
        </PageContainer>
    )
}

export default ActiveSubscription