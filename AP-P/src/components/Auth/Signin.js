import React from 'react'
import SigninFields from './helpers/SigninFields'
import SigninPageContainer from '../../utils/components/SigninPageContainer'
import SigninContent from './helpers/SigninContent'

const Signin = () => {
    return <SigninPageContainer>
        <SigninContent heading="Effortlessly Management Your Properties with Our Real Estate Management System Portal." paragraphAboveHeading="Let's Get Started" paragraph="Welcome back please enter your credentials." />
        <SigninFields />
    </SigninPageContainer>
}

export default Signin 