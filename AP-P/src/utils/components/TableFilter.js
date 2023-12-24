import React from 'react'

const TableFilter = (props) => {
    return (
        <div>
            {props.filterTitle.map((val, i) => {
                return (
                    <div key={i} className="mt-[10px] mb-[10px] flex items-center gap-2">
                        <input
                            style={{ border: '1px solid #D0D5DD' }}
                            type="checkbox"
                            id={`checkbox${i}`}
                            className="input bg-[##FFFFFF] h-[18px] w-[18px] cursor-pointer"
                            onChange={() => props.setSelectedFilter(val)}
                            checked={props.selectedFilter === val}
                        />
                        <label
                            htmlFor={`checkbox${i}`}
                            className="cursor-pointer font-normal text-[16px] text-[#667085]"
                        >
                            {val}
                        </label>
                    </div>
                )
            })}
        </div>
    )
}

export default TableFilter