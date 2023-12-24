import React from 'react'

const InputLabel = ({ children, hidden }) => {
    return (
        <span
            style={{ visibility: hidden }}
            className="text-[#3D4350] font-medium text-[14px]"
        >
            {children}
        </span>
    )
}

export default InputLabel