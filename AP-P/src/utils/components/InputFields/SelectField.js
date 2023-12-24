import { Form, Select } from 'antd'
import React from 'react'

const SelectField = ({ name, required = true, options, ...rest }) => {
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
            <Select className="rounded-[8px]" size="large" {...rest}>
                {options?.map((opt, i) => (
                    <Select.Option key={opt.label} value={opt.value}>
                        {opt.label}
                    </Select.Option>
                ))}
            </Select>
        </Form.Item>
    )
}

export { SelectField }
