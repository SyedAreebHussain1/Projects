import React from 'react'
import PageContainer from '../../../utils/components/PageContainer'
import PageHeader from '../../../utils/components/PageHeader'
import OwnersTable from './helpers/OwnersTable'

const Owners = () => {
    return (
        <PageContainer>
            <PageHeader
                title="Investor's Owners"
                subTitle="Details of All Investor's Owners"
            />
            <OwnersTable />
        </PageContainer>
    )
}

export default Owners