import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// api
import { getRandomContentApi } from '../../../redux/api/random'

const Content = ({ startTimer, setCountDown }) => {
    const dispatch = useDispatch()
    const classRef = useRef()
    let [content, setContent] = useState('')
    let [quoteInput, setQuoteInput] = useState('')
    const { data, loading } = useSelector((state) => state?.getRandomContentSlice)

    function renderHandle(bool) {
        if (bool) {
            getRandomContentApi(dispatch, onSuccess)
            setCountDown(0)
        }
    }
    function onSuccess(msg) { }
    useEffect(() => {
        if (data?.content) {
            setContent(data?.content)
            startTimer()
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
            renderHandle(quoteInput === content)
            setCountDown(0)
            setQuoteInput('')
        }
    }, [quoteInput, content])

    return (
        <div className="container">
            <div className="quote-display " id="quoteDisplay" ref={classRef}>{content && content.split('').map((character, i) => {
                return <span className='' key={i}>
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
        </div>
    )
}

export default Content