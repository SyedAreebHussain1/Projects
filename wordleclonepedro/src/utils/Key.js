import React, { useContext } from 'react'
import { AppContext } from '../App'

const Key = ({ keyVal, bigKey }) => {
    const { onSelectLetter, onDelete, onEnter } = useContext(AppContext)
    const selectLetter = () => {
        if (keyVal === "Enter") {
            onEnter()
            // if (currAttempt.letterPos !== 5) return;
            // setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 })

        } else if (keyVal === "Delete") {
            onDelete()
            // if (currAttempt.letterPos === 0) return;
            // const newBoard = [...board]
            // newBoard[currAttempt?.attempt][currAttempt?.letterPos - 1] = ""
            // setBoard(newBoard)
            // setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 })
        } else {
            onSelectLetter(keyVal)
            // if (currAttempt.letterPos > 4) return;
            // const newBoard = [...board]
            // onSelectLetter(keyVal)
            // newBoard[currAttempt?.attempt][currAttempt?.letterPos] = keyVal
            // setBoard(newBoard)
            // setCurrAttempt({ ...currAttempt, letterPos: currAttempt?.letterPos + 1 })
        }
    }
    return <div className='key' id={bigKey && "big"} onClick={selectLetter}>{keyVal}</div>
}

export default Key