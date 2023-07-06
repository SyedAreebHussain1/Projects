import React from 'react'

const CustomModal = ({ data, showPopup, setShowPopup }) => {
    console.log(data)
    return (
        <div onClick={() => setShowPopup(false)} className='fixed bg-black bottom-0 left-0 top-0 right-0 flex justify-center items-center opacity-80 z-50' >
            <div className='bg-white p-[10px] shadow-[0px 0px 0px #888] h-[300px] w-[300px] rounded-lg'>
                <button onClick={() => setShowPopup(false)} >close</button>
                <h2>{data.firstName}</h2>
                <h3>{data.email}</h3>
                <h4>{data.age}</h4>
                <p>{data?.gender}</p>
            </div>
        </div>
    )
}

export default CustomModal