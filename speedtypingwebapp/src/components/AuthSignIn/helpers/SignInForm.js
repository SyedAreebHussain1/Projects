import React from 'react'
import AuthGoogle from '../../AuthGoogle/AuthGoogle'

const SignInForm = ({setIsAuth}) => {
    return (
        <>
            <div className='login-container-main'>
                <div className="login-container">
                    <h2><span style={{ fontSize: "30px", fontWeight: "bold" }}>Sign In</span></h2>
                    <form>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" autoComplete="off" name="username"  />

                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" autoComplete="off" onPaste={(e) => {
                            e.preventDefault()
                        }} name="password"  />

                        <input type="submit" value="Login" />
                        <div style={{ padding: '10px' }}>
                            <AuthGoogle setIsAuth={setIsAuth} />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignInForm