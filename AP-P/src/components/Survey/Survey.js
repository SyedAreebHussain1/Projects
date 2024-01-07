import React, { useState } from 'react'
import { Button, Tabs } from 'antd'
import PageHeader from '../../utils/components/PageHeader'
import PageContainer from '../../utils/components/PageContainer'
import Surveys from './Surveys/Surveys'
import SurveysLogs from './SurveysLogs/SurveysLogs'
import addIcon from "../assest/icon/addicon.png"
import { useModal } from '../../utils/hooks/useModal'

const Survey = () => {
    const [addSurvey, setAddSurvey] = useState(1)
    const [isVisible, toggle] = useModal()

    const items = [{
        label: 'Survey',
        key: 1,
        children: <Surveys visible={isVisible} toggle={toggle} />,
    },
    {
        label: 'Surveys Logs',
        key: 2,
        children: <SurveysLogs />,
    },]
    const addSurveyBtn = (
        <Button
            className=" py-[10px] px-[30px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[15px] font-medium gap-2"
            onClick={toggle}
        >
            <img src={addIcon} alt='' />
            <span>Add Survey</span>
        </Button>
    )
    return (
        <PageContainer>
            <PageHeader
                title="Survey"
                subTitle="Manage all Survey"
                extra={addSurvey === 1 && addSurveyBtn}
            />
            <Tabs size="large" defaultActiveKey={1} items={items} onChange={(e) => setAddSurvey(e)} />
        </PageContainer>

    )
}

export default Survey