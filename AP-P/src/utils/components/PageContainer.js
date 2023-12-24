import React from 'react'

const PageContainer = ({ children }) => {
    return (
        <div className="px-[10px] py-[10px] md:py-[46px] md:px-[36px] bg-[#FAFBFF]">
            {children}
        </div>
    )
}

export default PageContainer