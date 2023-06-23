import React, { useContext } from 'react'
import { AppContext } from '../App'

const Key = ({ keyVal, bigKey }) => {
    const { board, setBoard, currAttempt, setCurrAttempt } = useContext(AppContext)
    const selectLetter = () => {
        const newBoard = [...board]
        newBoard[currAttempt?.attempt][currAttempt?.letterPos] = keyVal
        setBoard(newBoard)
        console.log(currAttempt);
        setCurrAttempt({ ...currAttempt, letterPos: currAttempt?.letterPos + 1 })
    }
    return <div className='key' id={bigKey && "big"} onClick={selectLetter}>{keyVal}</div>
}

export default Key