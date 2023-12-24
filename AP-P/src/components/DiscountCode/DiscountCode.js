import React from 'react'
import { Button } from 'antd'
import PageHeader from '../../utils/components/PageHeader'
import PageContainer from '../../utils/components/PageContainer'
import { useModal } from '../../utils/hooks/useModal'
import addIcon from "../assest/icon/addicon.png"
import DiscountCodeTable from './helpers/DiscountCodeTable'


const DiscountCode = () => {
    const [isAddModalVisible, toggle] = useModal()
    const addDiscountCode = (
        <Button
            className=" py-[10px] px-[30px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[15px] font-medium gap-2"
            onClick={toggle}
        >
            <img src={addIcon} alt='' />
            <span>Add Discount Code</span>
        </Button>
    )
    return (
        <PageContainer>
            <PageHeader
                title="Discount"
                subTitle="Manage all your discount codes"
                extra={addDiscountCode}
            />
            <DiscountCodeTable isAddModalVisible={isAddModalVisible} toggle={toggle} />
        </PageContainer>
    )
}

export default DiscountCode