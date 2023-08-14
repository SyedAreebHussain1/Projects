import React from 'react'

const PageHead = ({ mainHeading }) => {
    return (
        <div className='flex justify-center mt-[20px] p-[10px]'>
            <div>
                <span className='font-bold text-[50px]'>{mainHeading}</span>
            </div>
        </div>
    )
}

export default PageHead