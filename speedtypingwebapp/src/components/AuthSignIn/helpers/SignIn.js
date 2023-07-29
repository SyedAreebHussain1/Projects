import React from 'react'
import signInViewImg from '../../../assest/images/SignInViewImg/signin.png'
import images from '../../../assest/images/SignInViewImg/images.jpg'
import SignInForm from './SignInForm'

const SignIn = ({setIsAuth}) => {
    return (
        <>
            <div style={{  height: "100vh" }}>
                <div className='flex' style={{ height: "100%" }}>
                    <div style={{ width: "100%" }}>
                        <img src={images} style={{ height: "100%", width: "100%" }} />
                    </div>
                    <div className='flex justify-center w-full' >
                        <SignInForm setIsAuth={setIsAuth}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn