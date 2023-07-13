import React, { useEffect, useRef, useState } from 'react';
import { createTodoListFun, getTodoListFun } from './redux/api/todo';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch()
  const formRef = useRef(null);
  var id = "id" + Math.random().toString(16).slice(2)
  const getTodoListSlice = useSelector((state) => state.getTodoListSlice)
  const [body, setBody] = useState(
    {
      id: id,
      title: '',
      description: ''

    }
  )

  useEffect(() => {
    getTodoListFun(dispatch, onSuccess, onFailure)
  }, [])
  console.log('getTodoListSlice', getTodoListSlice)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (body.title !== '' && body.description !== '') {
      createTodoListFun(dispatch, body, onSuccess, onFailure)
    }
  }

  function onSuccess(msg) {
    console.log('onSuccess', msg)
    setBody({
      id: null,
      title: '',
      description: ''
    })
    formRef.current.reset()
  }
  function onFailure(msg) {
    console.log('onFailure', msg)
  }
  return <div>
    <form ref={formRef} onSubmit={handleSubmit}>
      <div style={{ border: '2px solid red' }}>
        <div>
          <input type='text' name='title' onChange={(e) => setBody({ ...body, title: e.target.value })} style={{ border: '1px solid black' }} />
        </div>
        <br />
        <div >
          <input type='text' name='description' onChange={(e) => setBody({ ...body, description: e.target.value })} style={{ border: '1px solid black' }} />
        </div>
        <br />
      </div>
      <button type='submit'>Submit</button>
    </form>
    <ul>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
}
export default App;