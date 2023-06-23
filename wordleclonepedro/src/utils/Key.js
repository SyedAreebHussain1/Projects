import React, { useContext } from 'react'
import { AppContext } from '../App'

const Key = ({ keyVal, bigKey }) => {
    const { board, setBoard, currAttempt, setCurrAttempt } = useContext(AppContext)

    const selectLetter = () => {
        const newBoard = [...board]
        console.log(newBoard,currAttempt,);
        
        newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal
        setBoard(newBoard)
        setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 })
        // console.log(currAttempt)
    }
    return <div className='key' id={bigKey && "big"} onClick={selectLetter}>{keyVal}</div>
}

export default Key