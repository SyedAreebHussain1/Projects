import React, { useCallback, useContext, useEffect } from 'react'
import { AppContext } from '../../App';
import Key from '../../utils/Key';
const Keyboard = () => {
    const { onSelectLetter, onDelete, onEnter } = useContext(AppContext)

    const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];
    const handleKeyboard = useCallback((event) => {
        if (event.key === "Enter") {
            onEnter()
        } else if (event.key === "Backspace") {
            onDelete()
        } else {
            keys1.forEach((key) => {
                if (event.key.toLowerCase() === key.toLowerCase()) {
                    onSelectLetter(key)
                }
            })
            keys2.forEach((key) => {
                if (event.key.toLowerCase() === key.toLowerCase()) {
                    onSelectLetter(key)
                }
            })
            keys3.forEach((key) => {
                if (event.key.toLowerCase() === key.toLowerCase()) {
                    onSelectLetter(key)
                }
            })
        }
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