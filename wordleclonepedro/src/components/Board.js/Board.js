import React, { useState, useEffect } from 'react'
import Letter from '../Letter/Letter'
const Board = () => {
    const [letterPos, setLetterPos] = useState([])
    useEffect(() => {
        let array = []
        for (let i = 0; i < 5; i++) {
            array[i] = i
        }
        setLetterPos(...letterPos, array)
    }, [])
    return (
        <div className='board'>
            <div className='row'>
                {letterPos.map(items => <Letter letterPos={items} attemptVal={0} />)}
            </div>
            <div className='row'>
                {letterPos.map(items => <Letter letterPos={items} attemptVal={1} />)}
            </div>
            <div className='row'>
                {letterPos.map(items => <Letter letterPos={items} attemptVal={2} />)}
            </div>
            <div className='row'>
                {letterPos.map(items => <Letter letterPos={items} attemptVal={3} />)}
            </div>
            <div className='row'>
                {letterPos.map(items => <Letter letterPos={items} attemptVal={4} />)}
            </div>
            <div className='row'>
                {letterPos.map(items => <Letter letterPos={items} attemptVal={5} />)}
            </div>
        </div>
    )
}

export default Board