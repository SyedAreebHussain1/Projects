import React, { useCallback, useEffect, useRef, useState } from 'react'

const ProjectOption = ({ title, icon, id, checked, onChange }) => {
    return (
        <label htmlFor={id}>
            <div
                className="flex flex-col justify-center items-center py-[24px] w-[150px] border cursor-pointer relative"
                style={{ borderColor: checked ? '#147AD6' : '#E0E2E7' }}
            >
                <svg
                    width="29"
                    height="27"
                    viewBox="0 0 29 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d={icon} fill={checked ? '#147AD6' : '#858D9D'} />
                </svg>
                <h3 className="text-[858D9D] text-[15px] font-medium">{title}</h3>
                <span className="absolute right-2 top-2">
                    <input
                        type="checkbox"
                        className="cursor-pointer checkbox-custom"
                        id={id}
                        checked={checked}
                        onChange={onChange}
                        name="type"
                        style={{ display: checked ? 'block' : 'none' }}
                    />
                </span>
            </div>
        </label>
    )
}

export default ProjectOption