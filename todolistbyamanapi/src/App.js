import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// components
import AddTodo from './component/AddTodo/AddTodo';
import TodoList from './component/TodoList/TodoList';

import './App.css';

function App() {
  return <div className='App'>
    <AddTodo />
    <TodoList />
  </div>
}
export default App;