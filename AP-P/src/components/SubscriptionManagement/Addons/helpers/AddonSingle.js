import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteAddOnApi } from '../../../../redux/api/SubscriptionManagement/Addons'

const AddonSingle = ({ data, handleUpdate }) => {
    const dispatch = useDispatch()
    return (
        <div className="border-2 border-[#F0F1F3] flex flex-col relative">
            <span className="absolute bg-[#F0F1F3] text-[#3D4350] rounded-[67px] px-[8px] py-[3px] top-[-16px]">
                {data?.isPublic ? 'Public' : 'Private'}
            </span>
            <div className="flex justify-between p-4 border-b border-b-[#F0F1F3]">
                <span className="text-[#3D4350] text-[15px]">{data?.title}</span>
                <span className="text-[15px] font-medium">RS {data?.price}/-</span>
            </div>
            <div className="flex justify-between p-4 border-b border-b-[#F0F1F3]">
                <span
                    className="text-[#27A3A3] text-[15px] cursor-pointer"
                    onClick={() => handleUpdate(data)}
                >
                    Edit Addon
                </span>
                <span
                    className="text-[#E23442] text-[15px] cursor-pointer"
                    onClick={() => deleteAddOnApi(dispatch, data.id)}
                >
                    Remove
                </span>
            </div>
        </div>
    )
}

export default AddonSingle
