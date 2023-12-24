import React from 'react'
import PageContainer from '../../../../../../utils/components/PageContainer'
import PageHeader from '../../../../../../utils/components/PageHeader'
import LogsTable from './helpers/LogsTable'
import backIcon from "../../../../../assest/icon/back.png"


const Logs = () => {
    return <PageContainer>
        <PageHeader
            title="Logs"
            route={-1}
            subTitle="Manage All Logs"
            titleHeadBtn={backIcon}
        />
        <LogsTable />
    </PageContainer>
}

export default Logs