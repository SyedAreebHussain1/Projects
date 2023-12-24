import React, { useEffect } from 'react'
import { Row, Spin } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { getPropertiesOverviewApi } from '../../../redux/api/Dashboard'
import PropertyOverviewCard from './PropertyOverviewCard'
// icons
import allPropertiesIcon from '../../assest/icon/0.1.png'
import soldPropertiesIcon from '../../assest/icon/0.2.png'
import noOfAgenciesIcon from '../../assest/icon/0.3.png'
import revenueGeneratedIcon from '../../assest/icon/0.4.png'
const PropertyOverview = () => {
    const dispatch = useDispatch()
    const getPropertiesOverview = useSelector((state) => state?.getPropertiesOverview)
    useEffect(() => {
        getPropertiesOverviewApi(dispatch)
    }, [dispatch])
    return (
        <>
            <Spin spinning={getPropertiesOverview?.loading} delay={500}>
                <Row className='m-1 w-full'>
                    <PropertyOverviewCard
                        title="All Properties"
                        img={allPropertiesIcon}
                        count={getPropertiesOverview?.data ? getPropertiesOverview?.data?.data[0]?.inventoryCount : 0}
                        lastDayCount={getPropertiesOverview?.data
                            ? getPropertiesOverview?.data?.data[0]?.inventoryCountlast24
                            : 0}
                    />
                    <PropertyOverviewCard
                        title="Sold Properties"
                        img={soldPropertiesIcon}
                        count={getPropertiesOverview?.data ? getPropertiesOverview?.data?.data[1]?.soldInventoryCount : 0}
                        lastDayCount={getPropertiesOverview?.data
                            ? getPropertiesOverview?.data?.data[1]
                                ?.soldInventoryCountLast24hours
                            : 0}
                    />
                    <PropertyOverviewCard
                        title="No of Agencies"
                        img={noOfAgenciesIcon}
                        count={getPropertiesOverview?.data ? getPropertiesOverview?.data?.data[2]?.agenciesCount : 0}
                        lastDayCount={getPropertiesOverview?.data
                            ? getPropertiesOverview?.data?.data[2]?.agenciesCountLast24hours
                            : 0}
                    />
                    <PropertyOverviewCard
                        title="Revenue Generated"
                        img={revenueGeneratedIcon}
                        count={getPropertiesOverview?.data ? getPropertiesOverview?.data?.data[3]?.revenueCount?.sum : 0}
                        lastDayCount={getPropertiesOverview?.data
                            ? getPropertiesOverview?.data?.data[3]?.revenueCountLast24hours
                                ?.sum
                            : 0}
                    />
                </Row>
            </Spin>
        </>
    )
}

export default PropertyOverview