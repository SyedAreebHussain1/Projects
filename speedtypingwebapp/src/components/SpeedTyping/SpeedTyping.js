import React, { useState } from 'react'

//components
import Content from './helpers/Content'
import CountDown from './helpers/CountDown'

const SpeedTyping = () => {
    let [countDown, setCountDown] = useState(0)
    let startTime = 0

    function startTimer() {
        countDown = 0
        startTime = new Date()
        setInterval(() => {
            setCountDown(getTimerTime())
        }, 1000)
    }
    function getTimerTime() {
        return Math.floor((new Date() - startTime) / 1000)
    }
    console.log(countDown)
    return <>
        <CountDown countDown={countDown} />
        <Content
            countDown={countDown}
            setCountDown={setCountDown}
            startTimer={startTimer}
        />
    </>
}

export default SpeedTyping