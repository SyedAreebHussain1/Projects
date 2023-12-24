import React from 'react'

const UserContentLink = ({ icon, handleClick, children }) => {
    return (
        <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={handleClick}
        >
            <span>
                <img src={icon} alt="" />
            </span>
            <span className="text-[#3D4350] font-medium">{children}</span>
        </div>
    )
}

export default UserContentLink