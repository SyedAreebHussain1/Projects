import React from 'react'
import { Button } from 'antd'
import PageContainer from '../../../utils/components/PageContainer'
import PageHeader from '../../../utils/components/PageHeader'
import PackagesTable from './helpers/PackagesTable'
import addIcon from "../../assest/icon/addicon.png"
import { useModal } from '../../../utils/hooks/useModal'

const Packages = () => {
    const [isAddModalVisible, toggleAdd] = useModal()

    const extra = (
        <div>
            <Button
                className=" py-[10px] px-[30px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[15px] font-medium gap-2"
                onClick={() => {
                    toggleAdd()
                }}
            >
                <img src={addIcon} alt="" />
                <span>Add new Package</span>
            </Button>
        </div>
    )
    return (
        <PageContainer>
            <PageHeader
                title="Subscription Packages"
                subTitle="Manage all your subscription packages"
                extra={extra}

            />
            <PackagesTable
                isAddModalVisible={isAddModalVisible} toggleAdd={toggleAdd} />
        </PageContainer>
    )
}

export default Packages