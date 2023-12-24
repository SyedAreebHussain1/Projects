import { Button } from 'antd'
import React from 'react'
import filespromotions from '../../components/assest/img/filespromotions.png'
import addIcon from '../../components/assest/icon/addicon.png'

const NoTableData = ({ text, handleOnClick, buttonText }) => {
    return (
        <>
            <div
                className="flex justify-center items-center "
                style={{ padding: '50px' }}
            >
                <div>
                    <div
                        className="flex justify-center items-center mb-[30px]"
                        style={{ textAlign: 'center' }}
                    >
                        <img src={filespromotions} alt="" />
                    </div>
                    <div className="mb-[15px]">
                        <p className="font-medium text-[23.44px] text-[#14161B]">{text}</p>
                    </div>
                    <div
                        style={{
                            textAlign: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Button
                            className="btn-primary py-[20px] px-[35px] flex items-center justify-center text-[#FFFFFF] text-[12px] leading-[18px] bg-[#27A3A3] rounded-[8px]  gap-[10px]"
                            onClick={handleOnClick}
                        >
                            <img style={{ filter: 'brightness(10)' }} src={addIcon} alt="" />
                            <span>{buttonText}</span>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NoTableData
