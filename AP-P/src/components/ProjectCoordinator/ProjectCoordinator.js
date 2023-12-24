import React from 'react'
import PageContainer from '../../utils/components/PageContainer'
import PageHeader from '../../utils/components/PageHeader'
import ProjectCoordinatorTable from './helpers/ProjectCoordinatorTable'
import { useModal } from '../../utils/hooks/useModal'
import { Button } from 'antd'
import addIcon from "../assest/icon/addicon.png"

const ProjectCoordinator = () => {
    const [isNewUserModalVisible, newUsertoggle] = useModal()

    const newUser = (
        <Button
            className=" py-[10px] px-[30px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[15px] font-medium gap-2"
            onClick={newUsertoggle}
        >
            <img src={addIcon} alt='' />
            <span>New User</span>
        </Button>
    )
    return (
        <PageContainer>
            <PageHeader
                title="Project Co-Ordinator"
                subTitle="Manage all your Co-Ordinator"
                extra={newUser}
            />
            <ProjectCoordinatorTable isNewUserModalVisible={isNewUserModalVisible} newUsertoggle={newUsertoggle} />
        </PageContainer>
    )
}

export default ProjectCoordinator