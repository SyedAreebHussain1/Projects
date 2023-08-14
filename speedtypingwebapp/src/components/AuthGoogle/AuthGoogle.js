import React from 'react'
import SignInWithGoogle from './heplers/SignInWithGoogle'

const AuthGoogle = ({ setIsAuth }) => {
    return <SignInWithGoogle setIsAuth={setIsAuth} />
}

export default AuthGoogle