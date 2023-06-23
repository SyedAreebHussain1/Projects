import React, { useState, useEffect } from "react";
import { addDoc, collection, serverTimestamp, onSnapshot, query, where, doc, orderBy } from "firebase/firestore";
import { auth, db } from "../../config/firabseConfig";
import '../../styles/Chat.css'
export const Chat = ({ room }) => {
    const [newMessage, setNewMessage] = useState('')
    const [messages, setMessages] = useState('')
    const messagesRef = collection(db, "messages")
    useEffect(() => {
        const queryMessages = query(messagesRef, where("room", "==", room), orderBy("createdAt"))
        const unsuscribe = onSnapshot(queryMessages, (snapShot) => {
            let messages = []
            snapShot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id })
            })
            setMessages(messages)
        })
        return () => unsuscribe()
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (newMessage === "") return;
        await addDoc(messagesRef, {
            text: newMessage,
            createdAt: serverTimestamp(),
            user: auth.currentUser.displayName,
            room,
        })
        setNewMessage('')
    }
    return <div className="chat-app">
        <div className="header">
            <h1>Welcome to: {room.toUpperCase()}</h1>
        </div>
        {messages ? <div className="messages">{messages?.map((msg, i) => <div key={msg?.id} className="message" ><span className="user">{msg?.user}</span>{msg?.text} </div>)}</div> : ''}
        <form onSubmit={handleSubmit} className="new-message-form">
            <input value={newMessage} className="new-message-input" onChange={(event) => setNewMessage(event.target.value)} placeholder="type your message here" />
            <button type="submit" className="send-button">Send</button>
        </form>
    </div>
}