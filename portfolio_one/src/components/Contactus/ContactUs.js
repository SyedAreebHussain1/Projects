import React, { useState } from 'react'
import axios from 'axios'
import './Contactus.css'

const ContactUs = () => {
    var phoneno = /^\d{11}$/
    const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const [response, setResponse] = useState({
        msg: "",
        color: ""
    })
    const [loading, setLoading] = useState(false)
    const [state, setState] = useState({
        name: null,
        email: null,
        phoneNo: null,
        message: null
    })
    const onSubmit = async (e) => {
        e.preventDefault()
        const data = { data: state }
        if (state.name !== null && state.email !== null && state.phoneNo !== null && state.message) {
            if (state.phoneNo.match(phoneno) && emailValidation.test(state.email)) {
                setLoading(true)
                try {
                    const res = await axios.post('https://online-website-34c0c-default-rtdb.asia-southeast1.firebasedatabase.app/query.json', data)
                    if (res?.statusText) {
                        setLoading(false)
                        setResponse({
                            msg: "Successfully submit",
                            color: "green"
                        })
                    }
                    setState({
                        name: '',
                        email: '',
                        phoneNo: '',
                        message: ''
                    })

                } catch (e) {
                    // console.log('e', e)
                }
            } else {
                setResponse({
                    msg: !emailValidation.test(state.email) ? 'You have entered an invalid email address!' : '' ? phoneno.test(state.phoneNo) : 'Please Enter valid Phone Number',
                    color: "red"
                })
            }
        } else {
            setResponse({
                msg: "All fields are required!",
                color: "red"
            })
        }
        setLoading(false)
        // const { name, email, phoneNo, message } = state
        // const res = await fetch("https://online-website-34c0c-default-rtdb.asia-southeast1.firebasedatabase.app/query.json",
        //     {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({
        //             // name, email, phoneNo, message
        //             state
        //         })
        //     })
    }

    return (
        <div className="container">
            <div className="row">
                <h1>contact us</h1>
            </div>
            <div className="row">
                <h4 style={{ textAlign: 'center' }}>We'd love to hear from you!</h4>
            </div>
            <div className="row input-container">
                <div className="col-xs-12">
                    <div className="styled-input wide">
                        <input value={state.name} type="text" onChange={(event) => setState({ ...state, name: event.target.value })} name='name' required />
                        <label>Name</label>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="styled-input">
                        <input value={state.email} onChange={(event) => setState({ ...state, email: event.target.value })} type="text" name='email' required />
                        <label>Email</label>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="styled-input" style={{ float: "right" }}>
                        <input value={state.phoneNo} maxLength={13} onChange={(event) => setState({ ...state, phoneNo: event.target.value })} type="text" required name='phoneNo' />
                        <label>Phone Number</label>
                    </div>
                </div>
                <div className="col-xs-12">
                    <div className="styled-input wide">
                        <textarea value={state.message} onChange={(event) => setState({ ...state, message: event.target.value })} name='message' required></textarea>
                        {response?.msg ? < div style={{ background: "white", padding: "10px" }}>
                            <span style={{ color: response?.color, fontWeight: "normal", fontSize: "1rem" }}> {loading ? 'loading...' : response?.msg}</span>
                        </div> : ''}
                        <label>Message</label>
                    </div>
                </div>

                <div className="col-xs-12">
                    <div onClick={onSubmit} className="btn-lrg submit-btn" style={{ marginBottom: "10px" }}>Send Message</div>

                </div>

            </div>


        </div >











    )
}
export default ContactUs
