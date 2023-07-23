import React, { useEffect, useRef, useState } from 'react';
import { createTodoListFun } from './redux/api/todo';
import { useDispatch, useSelector } from 'react-redux';
import DataBase from './utilies/data';
import './App.css';
import { useNavigate } from 'react-router-dom';

function App() {
  const dispatch = useDispatch()
  const nagivate = useNavigate()
  const formRef = useRef(null);
  var id = "id" + Math.random().toString(16).slice(2)
  const todoListSlice = useSelector((state) => state.todoListSlice)
  const [dataSource, setDataSource] = useState()
  const [run, setRun] = useState()
  const [key12, setKey12] = useState()
  const [body, setBody] = useState({ id: id, title: '', discriptaion: '' })


  useEffect(() => {
    setDataSource(DataBase)
    setRun()
  }, [run])
  const handleSubmit = (e) => {
    e.preventDefault()
    if (body.title !== '' && body.discriptaion !== '') {
      createTodoListFun(dispatch, body, onSuccess, onFailure)
    }
  }
  function handleDelete(id, i) {
    if (id) {
      DataBase.splice(i, 1)
    }
    setRun(id)
  }
  function handleEdit(val, i) {
    // setEditBody(val)
    nagivate('/edit', { state: { data: val, key1: i } })
  }
  function onSuccess(msg) {
    formRef.current.reset()
    setBody({
      id: id,
      title: '',
      description: ''
    })
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
          <input type='text' name='discriptaion' onChange={(e) => setBody({ ...body, discriptaion: e.target.value })} style={{ border: '1px solid black' }} />
        </div>
        <br />
      </div>
      <button type='submit'>Submit</button>
    </form>
    <br />
    <br />
    <table id="customers">
      <tr>
        <th>#</th>
        <th>Id</th>
        <th>title</th>
        <th>Discriptaion</th>
        <th>Action</th>
      </tr>
      {dataSource ? dataSource?.map((val, i) => {
        return <tr key={i}>
          {val.id ? <td>{i}</td> : ''}
          {val.id ? <td>{val.id}</td> : ''}
          {val.title ? <td>{val.title}</td> : ''}
          {val.discriptaion ? <td>{val.discriptaion}</td> : ''}
          {val.title ? <td><button onClick={() => handleDelete(val.id, i)}>delete</button> <button onClick={(event) => handleEdit(val, i)}>Edit</button></td> : ''}
        </tr>
      }) : ''}
    </table>

  </div >
}
export default App;