import React, { useCallback, useEffect } from 'react'
import Key from '../../utils/Key';
const Keyboard = () => {
    const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];
    const handleKeyboard = useCallback((event) => {
        console.log(event)
        // if (event.key === "Enter") {

        // } else if (event.key === "Backspace") {

        // } else {
        // }
        // console.log(event.key)
    })
    keys1.forEach((arr) => {
        console.log(arr)
    })
    useEffect(() => {
        document.addEventListener('keydown', handleKeyboard)
        return () => {
            document.removeEventListener('keydown', handleKeyboard)
        }
    }, [handleKeyboard])
    return (
        <div className='keyboard' onKeyDown={handleKeyboard}>
            <div className='line1'>{keys1.map(keyVal => <Key keyVal={keyVal} />)}</div>
            <div className='line2'>{keys2.map(keyVal => <Key keyVal={keyVal} />)}</div>
            <div className='line3'><Key keyVal="Enter" bigKey />{keys3.map(keyVal => <Key keyVal={keyVal} />)}<Key keyVal="Delete" bigKey /></div>
        </div>
    )
}

export default Keyboard