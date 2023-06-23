import React, { useContext } from 'react'
import { AppContext } from '../../App.js'
const Letter = ({ letterPos, attemptVal }) => {
    const { board } = useContext(AppContext)
    const letter = board?.[attemptVal]?.[letterPos]
    return <div className='letter'>{letter ? letter : ''}</div>
}
export default Letter