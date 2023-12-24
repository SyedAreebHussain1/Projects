import { Form, Input } from 'antd'
import React from 'react'

const TextField = ({ name, required = true, extraClasses = '', ...rest }) => {
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
            <Input
                className={`w-full lg:w-[] h-[] rounded-[8px] ${extraClasses}`}
                size="large"
                {...rest}
            />
        </Form.Item>
    )
}

export default TextField
