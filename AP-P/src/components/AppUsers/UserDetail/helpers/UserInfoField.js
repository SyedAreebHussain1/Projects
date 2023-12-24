import React from 'react'
import { CheckCircleOutlined } from '@ant-design/icons'

const UserInfoField = ({
    title,
    value,
    img,
    handleCopy,
    textCopyIcon,
    copied,
}) => {
    return img ? (
        <div className="flex gap-2">
            <div className="border border-[#C2C6CE] w-[50px] h-[42px] overflow-hidden flex justify-center items-center">
                <img src={img} alt="" className="max-w-full object-contain" />
            </div>
            <UserInfoField title={title} value={value} />
        </div>
    ) : (
        <div>
            <span className="text-[#667085] text-xs font-medium">{title}</span>
            <div className="flex gap-1">
                <span>
                    {' '}
                    <h4 className="text-[#1F2228] break-words">{value}</h4>
                </span>{' '}
                {textCopyIcon ? (
                    <span className="cursor-pointer" onClick={() => handleCopy(value)}>
                        {' '}
                        {copied ? (
                            <div className="mt-[]">
                                {' '}
                                <CheckCircleOutlined />
                            </div>
                        ) : (
                            <img src={textCopyIcon} alt="" className="mt-[]" />
                        )}
                    </span>
                ) : (
                    ''
                )}
            </div>
        </div>
    )
}

export default UserInfoField
