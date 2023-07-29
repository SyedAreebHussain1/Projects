import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../../../config/firabseConfig';

// api
import { getRandomContentApi } from '../../../redux/api/random'

const Content = ({ startTimer, setCountDown, countDown }) => {
    const dispatch = useDispatch()
    const classRef = useRef()
    const [count, setCount] = useState(0);
    const token = localStorage.getItem("token");
    let [content, setContent] = useState('')
    let [quoteInput, setQuoteInput] = useState('')
    const { data } = useSelector((state) => state?.getRandomContentSlice)
    const signOutWithGoogleSlice = useSelector((state) => state?.signOutWithGoogleSlice)
    function renderHandle(bool) {
        if (bool && dispatch) {
            getRandomContentApi(dispatch)
        }
    }
    useEffect(() => {
        if (data?.content) {
            setContent(data?.content)
            startTimer()
            setCount(count + 1)
        }
    }, [data?.content])
    useEffect(() => {
        if (quoteInput[quoteInput.length - 1] === content[quoteInput.length - 1]) {
            classRef?.current?.children[quoteInput.length - 1]?.classList?.remove("incorrect")
            classRef?.current?.children[quoteInput.length - 1]?.classList?.add("correct")
        } else {
            classRef?.current?.children[quoteInput.length - 1]?.classList?.remove("correct")
            classRef?.current?.children[quoteInput.length - 1]?.classList?.add("incorrect")
        }
        for (let i = content.length - 1; i > quoteInput.length - 1; i--) {
            classRef?.current?.children[i]?.classList?.remove("correct")
            classRef?.current?.children[i]?.classList?.remove("incorrect")
        }
        if (quoteInput === content) {
            renderHandle(quoteInput)
            setQuoteInput('')
        }
    }, [quoteInput, content])
    return (
        <div className="container bg-[#a79f6a] p-4 rounded-sm w-700 max-w-90">
            <div className='flex' style={{ justifyContent: "space-between" }}>
                <div>
                    <div><h1 className='font-bold '>{`Timer: ${countDown && countDown}`}</h1></div>
                </div>
                <div><h1 className='font-bold '>{`Round: ${count && count}`}</h1></div>
            </div>

            <div className="quote-display " id="quoteDisplay" ref={classRef}>{content && content.split('').map((character, i) => {
                return <span className='select-none' key={i}>
                    {character}
                </span>
            })}</div>
            <textarea id="quoteInput" value={quoteInput} maxLength={content?.length} className="quote-input" onChange={(e) => setQuoteInput(e.target.value)} autoFocus
                onPaste={(e) => {
                    e.preventDefault();
                }} onKeyDown={(e) => {
                    if (e.ctrlKey && e.key === 'z') {
                        e.preventDefault();
                    }
                }}
            ></textarea>

            {data?.content ? '' : <button onClick={renderHandle} className='button-23'>Start</button>}
        </div>
    )
}

export default Content