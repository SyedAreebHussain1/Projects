import React from 'react'
import { useLocation } from 'react-router-dom'
import PageContainer from '../../../../utils/components/PageContainer'
import PageHeader from '../../../../utils/components/PageHeader'
import CoViewProjectTable from './helpers/CoViewProjectTable'
import backIcon from "../../../assest/icon/back.png"

const CoViewProject = () => {
    const { state } = useLocation();
    return <PageContainer>
        <PageHeader
            title={state}
            route={-1}
            subTitle="Manage Project List"
            titleHeadBtn={backIcon}
        />
        <CoViewProjectTable />
    </PageContainer >
}

export default CoViewProject