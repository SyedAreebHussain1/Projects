import { Checkbox, Form } from 'antd'
import React from 'react'

const CheckboxField = ({ name, options, required, gap = 30, ...rest }) => {
    return (
        <Form.Item name={name} required={required ? true : false}>
            <Checkbox.Group style={{ width: '100%' }}>
                <div
                    className="flex flex-wrap"
                    style={{
                        gap: gap,
                    }}
                >
                    {options.map((opt, i) => {
                        return (
                            <div className="relative">
                                <Checkbox
                                    key={opt.value}
                                    value={opt.value}
                                    {...rest}
                                    {...opt?.props}
                                    id={opt.value}
                                >
                                    {opt.label}
                                </Checkbox>

                                {opt?.props?.extras}
                            </div>
                        )
                    })}
                </div>
            </Checkbox.Group>
        </Form.Item>
    )
}

export default CheckboxField
