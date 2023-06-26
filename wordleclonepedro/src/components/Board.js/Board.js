import React, { useState, useEffect } from 'react'
import Letter from '../Letter/Letter'
const Board = () => {
    // const [letterPos, setLetterPos] = useState([])
    // useEffect(() => {
    //     let array = []
    //     for (let i = 0; i < 5; i++) {
    //         array[i] = i
    //     }
    //     setLetterPos(...letterPos, array)
    // }, [])
    return (
        // <div className='board'>
        //     <div className='row'>
        //         {letterPos.map(items => <Letter letterPos={items} attemptVal={0} />)}
        //     </div>
        //     <div className='row'>
        //         {letterPos.map(items => <Letter letterPos={items} attemptVal={1} />)}
        //     </div>
        //     <div className='row'>
        //         {letterPos.map(items => <Letter letterPos={items} attemptVal={2} />)}
        //     </div>
        //     <div className='row'>
        //         {letterPos.map(items => <Letter letterPos={items} attemptVal={3} />)}
        //     </div>
        //     <div className='row'>
        //         {letterPos.map(items => <Letter letterPos={items} attemptVal={4} />)}
        //     </div>
        //     <div className='row'>
        //         {letterPos.map(items => <Letter letterPos={items} attemptVal={5} />)}
        //     </div>
        // </div>
        <div className="board">
            <div className="row">
                <Letter letterPos={0} attemptVal={0} />
                <Letter letterPos={1} attemptVal={0} />
                <Letter letterPos={2} attemptVal={0} />
                <Letter letterPos={3} attemptVal={0} />
                <Letter letterPos={4} attemptVal={0} />
            </div>
            <div className="row">
                <Letter letterPos={0} attemptVal={1} />
                <Letter letterPos={1} attemptVal={1} />
                <Letter letterPos={2} attemptVal={1} />
                <Letter letterPos={3} attemptVal={1} />
                <Letter letterPos={4} attemptVal={1} />
            </div>
            <div className="row">
                <Letter letterPos={0} attemptVal={2} />
                <Letter letterPos={1} attemptVal={2} />
                <Letter letterPos={2} attemptVal={2} />
                <Letter letterPos={3} attemptVal={2} />
                <Letter letterPos={4} attemptVal={2} />
            </div>
            <div className="row">
                <Letter letterPos={0} attemptVal={3} />
                <Letter letterPos={1} attemptVal={3} />
                <Letter letterPos={2} attemptVal={3} />
                <Letter letterPos={3} attemptVal={3} />
                <Letter letterPos={4} attemptVal={3} />
            </div>
            <div className="row">
                <Letter letterPos={0} attemptVal={4} />
                <Letter letterPos={1} attemptVal={4} />
                <Letter letterPos={2} attemptVal={4} />
                <Letter letterPos={3} attemptVal={4} />
                <Letter letterPos={4} attemptVal={4} />
            </div>
            <div className="row">
                <Letter letterPos={0} attemptVal={5} />
                <Letter letterPos={1} attemptVal={5} />
                <Letter letterPos={2} attemptVal={5} />
                <Letter letterPos={3} attemptVal={5} />
                <Letter letterPos={4} attemptVal={5} />
            </div>
        </div>
    )
}

export default Board