import React from 'react'

const SigninPageContainer = ({ children }) => {
    return (
        <section>
            <div className='p-[4px] h-screen flex items-center justify-center  '>
                <div className='w-[30%]'>
                    {children}
                </div>
            </div>
        </section>
    )
}

export default SigninPageContainer