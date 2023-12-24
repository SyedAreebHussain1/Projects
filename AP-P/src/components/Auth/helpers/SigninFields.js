import React, { useState, useEffect, useRef } from 'react'
import { Button, Input, Form, } from 'antd'
import { useNavigate } from 'react-router-dom'
import InputLabel from '../../../utils/components/InputFields/InputLabel'
import TextField from '../../../utils/components/InputFields/TextField'
import { signinApi } from '../../../redux/api/Auth'
import '../../assest/css/login.css'
import { getDeviceToken } from '../../../config/firebaseConfig'
import { useDispatch, useSelector } from 'react-redux'
import PasswordField from '../../../utils/components/InputFields/PasswordField'

const SigninFields = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const auth = useSelector((state) => state?.auth)
    const [deviceToken, setDeviceToken] = useState('')
    const formReset = useRef(null)

    useEffect(() => {
        getDeviceToken()
            .then((currentToken) => {
                if (currentToken) {
                    // Send the token to your server and update the UI if necessary
                    setDeviceToken(currentToken)
                }
            })
            .catch((err) => {
                console.log('An error occurred while retrieving token. ', err)
            })
    }, [])

    const onFinish = (val) => {
        let state = {
            email: val.email,
            password: val.password,
            deviceToken: deviceToken
        }
        if (state.email !== "" && state.password !== "") {
            signinApi(dispatch, state, navigate)
        }
    }
    return (
        <Form
            name="project-step-one"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            ref={formReset}
        >
            <div>
                <InputLabel children="Email" />
                <TextField name="email"
                    placeholder="Email"
                    className="w-full lg:w-[] h-[] rounded-[8px]"
                />
                <InputLabel children="Password" />
                <PasswordField
                    name='password'
                    placeholder="Password"
                    className="w-full lg:w-[] h-[] rounded-[8px]"
                />
            </div>
            <div className="btn-signin-div w-full">
                <Button
                    htmlType="submit"
                    loading={auth?.loading}
                    className="w-full btn-primary btn-signin font-semibold text-[#FFFFFF] text-[18px] h-[60px]"
                >
                    Sign in
                </Button>
            </div>
        </Form >
    )
}

export default SigninFields