import React from 'react'
import Key from '../../utils/Key';
const Keyboard = () => {
    const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];
    return (
        <div className='keyboard'>
            <div className='line1'>{keys1.map(keyVal => <Key keyVal={keyVal} />)}</div>
            <div className='line2'>{keys2.map(keyVal => <Key keyVal={keyVal} />)}</div>
            <div className='line3'><Key keyVal="Enter" bigKey />{keys3.map(keyVal => <Key keyVal={keyVal} />)}<Key keyVal="Delete" bigKey /></div>
        </div>
    )
}

export default Keyboard