import React, { useState } from 'react'
import PageContainer from '../../utils/components/PageContainer'
import PageHeader from '../../utils/components/PageHeader'
import AppUsersTable from './helpers/AppUsersTable'
import { useDispatch } from 'react-redux'
import { Button } from 'antd'
import couldIcon from '../assest/icon/cloud.png'
const AppUsers = () => {
    const dispatch = useDispatch()
    const [exportExcel, setExportExcel] = useState(false)
    const exportCould = (
        <div>
            <Button
                className=" py-[10px] px-[30px] flex items-center justify-center border-[#27A3A3] text-[#27A3A3] text-[15px] font-medium gap-2 "
                onClick={() => setExportExcel(true)}
            >
                <img src={couldIcon} alt="" />
                <span>Export</span>
            </Button>
        </div>
    )
    return (
        <PageContainer>
            <PageHeader
                title="All Users"
                subTitle="Details of All Mobile Users"
                extra={exportCould}
            />
            <AppUsersTable exportExcel={exportExcel} setExportExcel={setExportExcel} />
        </PageContainer>
    )
}

export default AppUsers