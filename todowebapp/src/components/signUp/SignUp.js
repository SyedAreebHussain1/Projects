import React from 'react'
import SignIn from '../signin/SignIn'
import FormSinUp from './helpers/FormSinUp'

const SignUp = () => {
    return (
        <>
            <SignIn />
            <div style={{border:'2px solid black'}} className='flex justify-between p-[10px]'>
                <div ></div>
                <div><FormSinUp /></div>
            </div>
        </>
    )
}

export default SignUp