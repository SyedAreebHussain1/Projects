import React from 'react'
import PageContainer from '../../../utils/components/PageContainer'
import PageHeader from '../../../utils/components/PageHeader'
import QueriesTable from './helpers/QueriesTable'
const Queries = () => {
    return (
        <PageContainer>
            <PageHeader
                title="Queries"
                subTitle="Find all of Queries"
            />
            <QueriesTable />
        </PageContainer>
    )
}

export default Queries