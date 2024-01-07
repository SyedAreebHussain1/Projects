import { Form } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React from 'react'

const TextAreaField = ({ name, required = true }) => {
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
            <TextArea
                className="rounded-[8px]"
                placeholder=""
                autoSize={{ minRows: 3, maxRows: 5 }}
                style={{ padding: '10px, 14px, 10px, 14px' }}
            />
        </Form.Item>
    )
}

export default TextAreaField
