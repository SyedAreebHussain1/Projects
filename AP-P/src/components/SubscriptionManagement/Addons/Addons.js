import React from 'react'
import PageContainer from '../../../utils/components/PageContainer'
import PageHeader from '../../../utils/components/PageHeader'
import addIcon from "../../assest/icon/addicon.png"
import { useModal } from '../../../utils/hooks/useModal'
import { Button } from 'antd'
import AddonMain from './helpers/AddonMain'
const Addons = () => {
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
                <span>Add new Add-on</span>
            </Button>
        </div>
    )
    return (
        <PageContainer>
            <PageHeader
                title="Add- ons"
                subTitle="Manage your mobile app Add-Ons"
                extra={extra}
            />
            <AddonMain visible={isAddModalVisible} toggle={toggleAdd} />
        </PageContainer>
    )
}

export default Addons