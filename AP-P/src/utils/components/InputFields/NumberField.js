import { Form, Input } from 'antd'
import React from 'react'

const NumberField = ({ name, required = true, placeholder, ...rest }) => {
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
                placeholder={placeholder}
                className="w-full lg:w-[] h-[] rounded-[8px]"
                size="large"
                {...rest}
                onKeyPress={(event) => {
                    if (!/[0-9,.]/.test(event.key)) {
                        event.preventDefault()
                    }
                }}
                onPasteCapture={(e) => {
                    const pastedText = e.clipboardData.getData('text')
                    if (/[^0-9]/g.test(pastedText)) {
                        e.preventDefault()
                    }
                }}
            />
        </Form.Item>
    )
}

export default NumberField
