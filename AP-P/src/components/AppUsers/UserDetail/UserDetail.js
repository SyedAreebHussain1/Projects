import React, { useEffect } from 'react'
import { Spin } from 'antd'
import backimg from '../../assest/icon/back.png'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getAuthUserApi } from '../../../redux/api/AppUsers'
import { clearGetAuthUser } from '../../../redux/slices/AppUsers/getAuthUserSlice'
import PageContainer from '../../../utils/components/PageContainer'
import PageHeader from '../../../utils/components/PageHeader'
import ClientDetail from './helpers/ClientDetail'
import AgenciesAndInventoryDetails from './helpers/AgenciesAndInventoryDetails'
import Activities from './helpers/Activities'

const UserDetail = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const getAuthUser = useSelector((state) => state?.getAuthUser)

    useEffect(() => {
        if (params.id) {
            getAuthUserApi(dispatch, params.id)
        }
    }, [params])
    useEffect(() => {
        return () => {
            dispatch(clearGetAuthUser())
        }
    }, [])
    return (
        <PageContainer>
            <PageHeader
                route={-1}
                titleHeadBtn={backimg}
                title={'User Profile'}
                subTitle={'Details and activities of the user'}
            />
            <Spin spinning={getAuthUser?.loading}>
                <div className="grid grid-cols-1 lg:grid-cols-[30%_minmax(70%,_1fr)] gap-5">
                    <ClientDetail data={getAuthUser} />
                    <AgenciesAndInventoryDetails data={getAuthUser} />
                    <Activities data={getAuthUser} />
                </div>
            </Spin>
        </PageContainer>

    )
}

export default UserDetail