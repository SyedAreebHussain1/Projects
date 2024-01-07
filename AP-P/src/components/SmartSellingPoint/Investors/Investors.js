import React from 'react'
import PageContainer from '../../../utils/components/PageContainer'
import PageHeader from '../../../utils/components/PageHeader'
import InvestorsTable from './helpers/InvestorsTable'
import { Button } from 'antd'
import { useModal } from '../../../utils/hooks/useModal'
import addIcon from "../../assest/icon/addicon.png"


const Investors = () => {
    const [visible, toggle] = useModal()

    const extra = (
        <div>
            <Button
                className=" py-[10px] px-[30px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[15px] font-medium gap-2"
                onClick={() => {
                    toggle()
                }}
            >
                <img src={addIcon} alt="" />
                <span>Add new investor</span>
            </Button>
        </div>
    )
    return (
        <PageContainer>
            <PageHeader
                title="Investors Requests"
                subTitle="Find all of your investors"
                extra={extra}
            />
            <InvestorsTable visible={visible} toggle={toggle} />
        </PageContainer>
    )
}

export default Investors