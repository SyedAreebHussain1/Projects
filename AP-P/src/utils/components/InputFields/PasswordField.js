import React from 'react'
import { Form, Input } from 'antd'

const PasswordField = ({ name, required = true, extraClasses = '', ...rest }) => {
    return (
        <Form.Item
            name={name}
            className="mt-[10px]"
            rules={[
                {
                    required: required,
                    message: 'required',
                },
            ]}
        >
            <Input.Password
                className={`w-full lg:w-[] h-[] rounded-[8px] ${extraClasses}`}
                size="large"
                {...rest}
            />
        </Form.Item>
    )
}

export default PasswordField