import React from 'react'

const SigninContent = ({ paragraphAboveHeading, heading, paragraph }) => {
    return (
        <div className=''>
            <h5 className='font-semibold text-[1.5rem]'>
                {heading}
            </h5>
            <div className='mt-4 mb-4'>
                <h6 className='font-medium text-[24px]'>
                    {paragraphAboveHeading}
                </h6>
                <p className='font-medium text-[1rem] text-[#3D4350]'>{paragraph}</p>
            </div>
        </div>
    )
}

export default SigninContent