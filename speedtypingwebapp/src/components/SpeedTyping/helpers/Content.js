import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// api
import { getRandomContentApi } from '../../../redux/api/random'

const Content = ({ startTimer, setCountDown, countDown }) => {
    // console.log('startTimer', startTimer())
    const dispatch = useDispatch()
    const classRef = useRef()
    const [count, setCount] = useState(0);
    let [content, setContent] = useState('')
    let [quoteInput, setQuoteInput] = useState('')
    let [brithness, setBrithness] = useState()
    const { data } = useSelector((state) => state?.getRandomContentSlice)
    function renderHandle(bool) {
        if (bool) {
            getRandomContentApi(dispatch)
            startTimer()
        }
    }
    useEffect(() => {
        if (brithness) {
            document.body.style.backgroundColor = '#2c2626';
        } else {
            document.body.style.backgroundColor = '#bdbfbf';
        }
    }, [brithness])
    useEffect(() => {
        if (data?.content) {
            setContent(data?.content)
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
            countDown = 0
            setCountDown((prev) => {
                console.log('prev', prev)
            })
            setQuoteInput('')
        }
    }, [quoteInput, content])
    return (
        <div className="container bg-[#a79f6a] p-4 rounded-sm w-700 max-w-90">
            <div className='flex' style={{ justifyContent: "space-between" }}>
                <div>
                    <div><h4 className='text-[12px]'>White/Dark</h4></div>
                    <label className="switch">
                        <input type="checkbox" onClick={(e) =>
                            setBrithness(e.target.checked)} />
                        <span className="slider round"></span>
                    </label>
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

            {data?.content ? '' : <input type="button" onClick={renderHandle} className="bg-gray-600 border-none text-[white] px-10 py-15 text-center no-underline inline-block text-base my-4 mx-2 cursor-pointer" value="Start Typing"></input>}
        </div>
    )
}

export default Content