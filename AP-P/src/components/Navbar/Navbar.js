import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import admin_img from '../assest/img/admin-img.png'
import setting from '../assest/icon/setting.png'
import notification from '../assest/icon/notification.png'
import Search from '../assest/icon/search.png'
import { Popover } from 'antd'
import OnClickUserContent from './helpers/OnClickUserContent'
import { getFromStorage } from '../../utils/storage'
import './helpers/navbar.css'

const Navbar = () => {
    const [switches, setSwitches] = useState({
        sell: true,
        rent: false,
    })
    let getUserName = getFromStorage('userObject')
    return (
        <>
            <div>
                <div>
                    <div>
                        <div>
                            <div
                                className="row_main_nav"
                                style={{
                                    border: '1px solid rgba(102, 112, 133, 0.09)',
                                }}
                            >
                                <div
                                    className="column_main_nav"
                                    style={{ backgroundColor: '' }}
                                >
                                    <div className="flex-block lg:flex-row flex-col">
                                        <div className="flex justify-center items-center ">
                                            <div className="text-headingsColor font-semibold text-[1.3rem] ">
                                                Welcome Back
                                            </div>
                                        </div>
                                        <div className="m-l-5 ">
                                            <div
                                                className="md:w-full lg:w-[120%] xl:w-[150%] "
                                                id="input-nav"
                                            >
                                                <input
                                                    type="text"
                                                    placeholder="Search"
                                                    className="no-outline"
                                                />{' '}
                                                <div>
                                                    {' '}
                                                    <img
                                                        src={Search}
                                                        style={{
                                                            cursor: 'pointer',
                                                        }}
                                                        alt=""
                                                    />{' '}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="column_main_nav align-items-end flex md:justify-end justify-center"
                                    style={{ backgroundColor: '' }}
                                >
                                    <div
                                        className="flex-block sm:flex-row flex-col"
                                        style={{
                                            paddin: '',
                                            justifyContent: 'end',
                                            border: '',
                                        }}
                                    >
                                        <div className="">
                                            <div className=" flex border-2 items-center rounded-[76px] p-[6px] w-fit">
                                                <div className={`relative flex before:content-[''] `}>
                                                    <div
                                                        style={
                                                            switches.rent
                                                                ? {
                                                                    transform: 'translateX(100%)',
                                                                }
                                                                : { transform: 'translateX(0)' }
                                                        }
                                                        className={`bg-[#27a3a3] absolute w-[50%] h-[100%] rounded-[76px] z-0 top-0 transition-all`}
                                                    ></div>
                                                    <span
                                                        className="relative py-[8px] px-[28px] text-[15px] z-10 font-medium font-['Poppins'] cursor-pointer  transition-all"
                                                        onClick={() =>
                                                            setSwitches({
                                                                sell: true,
                                                                rent: false,
                                                            })
                                                        }
                                                        style={{
                                                            color: switches.sell ? '#F9FAFB' : '#667085',
                                                        }}
                                                    >
                                                        Sell
                                                    </span>
                                                    <span
                                                        className="relative py-[8px] px-[28px] text-[15px] z-10 font-medium font-['Poppins'] cursor-pointer text-center transition-all"
                                                        onClick={() =>
                                                            setSwitches({
                                                                sell: false,
                                                                rent: true,
                                                            })
                                                        }
                                                        style={{
                                                            color: switches.rent ? '#F9FAFB' : '#667085',
                                                        }}
                                                    >
                                                        Rent
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <div className="icon-div ">
                                                <img src={setting} alt="setting" />
                                            </div>
                                            &nbsp;&nbsp;
                                            <div className="icon-div ">
                                                <img src={notification} alt="setting" />
                                            </div>
                                            &nbsp;&nbsp;
                                            <Popover
                                                placement="bottomRight"
                                                content={<OnClickUserContent />}
                                                trigger="click"
                                            >
                                                <div
                                                    className="icon-div-admin text-center justify-center"
                                                    style={{ marginTop: '' }}
                                                >
                                                    <p>
                                                        {getUserName?.fullName?.split(' ')?.length > 1
                                                            ? `${getUserName?.fullName
                                                                ?.split(' ')[0][0]
                                                                ?.toUpperCase()} ${getUserName?.fullName?.split(' ')[1][0]
                                                                    ? getUserName?.fullName
                                                                        ?.split(' ')[1][0]
                                                                        ?.toUpperCase()
                                                                    : ''
                                                            }`
                                                            : getUserName?.fullName
                                                                ?.split(' ')[0][0]
                                                                ?.toUpperCase()}
                                                    </p>
                                                </div>
                                            </Popover>
                                            &nbsp;&nbsp;
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
