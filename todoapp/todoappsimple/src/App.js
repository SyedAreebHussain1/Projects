import React, { useState } from 'react';
//Components
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import UpdateTodo from './components/UpdateTodo/UpdateTodo';
// DataBase
import dataBase from './utils/dataBase';
// Css
import './App.css';
function App() {
  const [stateRun, setStateRun] = useState({})
  const [updateValue, setUpdateValue] = useState({})
  const handleUpdate = (item, id) => {
    setUpdateValue({ item: item, key: id })
  }
  return (
    <div className="App">
      <div className='flex justify-center'>
        <div> 
          <AddTodo data={dataBase} setStateRun={setStateRun} />
          <TodoList data={dataBase} stateRun={stateRun} setStateRun={setStateRun} handleUpdate={handleUpdate} updateValue={updateValue} />
          {updateValue?.key ? <UpdateTodo setStateRun={setStateRun} updateValue={updateValue} setUpdateValue={setUpdateValue} /> : ''}
        </div>
      </div>
    </div>
  );
}

export default App;
