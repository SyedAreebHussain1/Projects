import React from 'react'
import PageHeader from '../../../utils/components/PageHeader'
import PageContainer from '../../../utils/components/PageContainer'
import UserManagementTable from './helpers/UserManagementTable'

const UserManagement = () => {
    return (
        <PageContainer>
            <PageHeader
                title="User Management"
                subTitle="Find all of your company’s administrator account and their associated roles."
            />
            <UserManagementTable />
        </PageContainer>
    )
}

export default UserManagement