import React from 'react'
import { Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { useSelector } from 'react-redux'

import ProjectIcon from '../../../assest/icon/add-project-icon.png'

import logo from '../../../assest/img/mainlogoo.png'
import { useModal } from '../../../../utils/hooks/useModal'
import AddProjectModal from './helpers/AddProjectModal'
const SideBar = ({ getMenuEvent, getRoutes }) => {
    const [isVisible, toggle] = useModal()
    return (
        <>
            <AddProjectModal
                visible={isVisible}
                toggle={toggle}
                getRoutes={getRoutes}
            />
            <Sider
                breakpoint="md"
                collapsedWidth="40"
                style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(102, 112, 133, 0.09)',
                }}
                width={250}
            // collapsible={true}
            >
                <div
                    style={{
                        // height: 50,
                        // margin: 14,
                        marginTop: '7%',
                        marginBottom: '-6%',
                        marginLeft: '7%',
                        display: 'flex',
                        justifyContent: 'start',
                        // textAlign:"center",
                        // alignItems:"center"
                    }}
                    className="logo"
                >
                    <div>
                        <img
                            src={logo}
                            className="w-[25px] h-[25px] ml-[5px]  md:w-[37px] md:h-[37px] md:ml-0"
                            alt=""
                        />
                    </div>
                    <div className="pl-[3px]" style={{ border: '' }}>
                        <div className="font-medium text-[14.21px] text-[#000000] hidden md:block">
                            Property Wallet
                        </div>
                        <div
                            className="text-[#27A3A3] text-[9.24px] font-normal hidden md:block"
                            style={{ letterSpacing: ' 0.21em' }}
                        >
                            AGENT ORGANIZERS{' '}
                        </div>
                    </div>
                </div>
                <div className=" pt-11">
                    <h2
                        style={{ fontFamily: 'Poppins' }}
                        className="tracking-[0.13em] text-[12px] text-headingsColorLight font-medium pl-6 pb-1  hidden md:block"
                    >
                        DASHBOARD
                    </h2>
                    <Menu
                        theme="light"
                        style={{
                            color: '#3D4350',
                            fontWeight: '500',
                            fontSize: '0.8rem',
                            fontFamily: 'Poppins',
                        }}
                        defaultSelectedKeys={['1']}
                        mode="inline"
                        items={getRoutes?.data?.items}
                        onClick={(e) => getMenuEvent(e)}
                    />
                </div>
                <div className=" pt-11 ">
                    <h2
                        style={{ fontFamily: 'Poppins' }}
                        className="tracking-[0.13em] text-[12px] text-headingsColorLight font-medium pl-6 pb-1 hidden md:block"
                    >
                        SETTINGS
                    </h2>
                    <Menu
                        theme="light"
                        style={{
                            color: '#3D4350',
                            fontWeight: '500',
                            fontSize: '0.8rem',
                            fontFamily: 'Poppins',
                        }}
                        defaultSelectedKeys={['1']}
                        mode="inline"
                        items={getRoutes?.data?.items2}
                        onClick={(e) => getMenuEvent(e)}
                    />
                </div>
                {(getRoutes?.data?.routes
                    .map((val) => val.key)
                    .includes('property-wallet-inventory/project') ||
                    getRoutes?.data?.routes
                        .map((val) => val.key)
                        .includes('property-wallet-inventory/single-property')) && (
                        <div
                            style={{ marginTop: '40px' }}
                            className="bg-[#27a3a308] py-[35px] cursor-pointer"
                            onClick={toggle}
                        >
                            <div className=" flex justify-center items-center flex-col">
                                <img src={ProjectIcon} alt="" />
                                <h2 className="text-sm font-medium hidden md:block">
                                    New Project
                                </h2>
                                <p className="text-[#3D4350] font-medium text-[10px] hidden md:block">
                                    Upload your new inventory
                                </p>
                            </div>
                        </div>
                    )}
            </Sider>
        </>
    )
}

export default SideBar