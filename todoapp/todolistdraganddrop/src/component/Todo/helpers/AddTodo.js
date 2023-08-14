import React, { useState } from 'react'

const AddTodo = ({ setData }) => {
    const uniqueId = (performance.now() + '').replace('.', '');
    const [dataItem, setDataItem] = useState({
        detail: {
            title: "",
            description: "",
            time: ""
        }
    })
    function handleInputChange(event) {
        event.preventDefault()
        const { name, value } = event.target;
        setDataItem((prevData) => ({
            ...prevData,
            id: uniqueId,
            detail: {
                ...prevData.detail,
                [name]: value
            }
        }))
    }
    function handleAdd(e) {
        e.preventDefault()
        if (dataItem.detail.title && dataItem.detail.description && dataItem.detail.time && uniqueId) {
            setData((prev) => [...prev, dataItem])
            setDataItem({
                id: "",
                detail: {
                    title: "",
                    description: "",
                    time: ""
                }
            })
        }
    }
    return (
        <div className='input-group'>
            <input type='text' name='title'
                value={dataItem?.detail?.title}
                onChange={handleInputChange} placeholder='Tilte' />
            <input type='text' name='description'
                value={dataItem?.detail?.description}
                onChange={handleInputChange} placeholder='Des' />
            <input type='text' name='time'
                value={dataItem?.detail?.time}
                onChange={handleInputChange} placeholder='Date' />
            <button className='btn' onClick={handleAdd}>Add Item</button>
        </div>
    )
}

export default AddTodo