import React from 'react'

const CountDown = ({ countDown }) => {
    return <div className="timer" id="timer">{`Time: ${countDown}`}</div>
}

export default CountDown