import React, { useEffect, useState } from 'react';
import { createTodoListApi } from './redux/api/todo';
import { useDispatch } from 'react-redux';

import './App.css';

function App() {
  const dispatch = useDispatch()
  var id = "id" + Math.random().toString(16).slice(2)
  const [body, setBody] = useState({
    // id: id,
    title: '',
    description: ''
  })

  function handleSubmit(e) {
    e.preventDefault()
    if (body.title !== '' && body.description) {
      createTodoListApi(dispatch, body, onSuccess, onFailure)
    }
  }
  console.log('body', body)

  function onSuccess(msg) {
    console.log('onSuccess', msg)
  }
  function onFailure(msg) {
    console.log('onFailure', msg)
  }

  // function handleChange(event) {
  //   // console.log(event)
  //   setBody({ ...body, [event.target.name]: event.target.value })
  // }

  return <div>
    <form onSubmit={handleSubmit}>
      <div style={{ border: '2px solid red' }}>
        <div >
          <input type='text' name='title' onChange={(e) => setBody({ ...body, title: e.target.value })} style={{ border: '1px solid black' }} />
        </div>
        <br />
        <div >
          <input type='text' name='description' onChange={(e) => setBody({ ...body, description: e.target.value })} style={{ border: '1px solid black' }} />
        </div>
        <br />

        {/* <div >
        <input type='text'  style={{border:'1px solid black'}} />
      </div> */}
      </div>
      <button type='submit'>Submit</button>
    </form>
  </div>
}
export default App;