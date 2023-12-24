import React from 'react'
import { useDispatch } from 'react-redux'
import UserContentLink from './UserContentLink'
import { signinFailure } from '../../../redux/slices/Auth/signinSlice'
import LogoutIcon from '../../assest/icon/logout-icon.png'
import ProfileIcon from '../../assest/icon/profile-icon.png'
import IntegrationIcon from '../../assest/icon/integration-icon.png'
import HelpCenterIcon from '../../assest/icon/helpcenter-icon.png'

const OnClickUserContent = () => {
    const dispatch = useDispatch()
    function logout() {
        localStorage.clear()
        dispatch(signinFailure())
    }
    return (
        <div>
            <div className="flex flex-col gap-[20px]">
                <UserContentLink icon={ProfileIcon}>Profile</UserContentLink>
                <UserContentLink icon={IntegrationIcon}>Integration</UserContentLink>
                <UserContentLink icon={HelpCenterIcon}>Help Center</UserContentLink>
                <UserContentLink icon={LogoutIcon} handleClick={logout}>
                    Log Out
                </UserContentLink>
            </div>
        </div>
    )
}

export default OnClickUserContent