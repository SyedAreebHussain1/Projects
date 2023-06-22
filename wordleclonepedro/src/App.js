import React, { useState, createContext } from 'react';
import Board from './components/Board.js/Board';
import Keyboard from './components/Keyboard/Keyboard';
import { boardDefault } from './utils/Words'
import './App.css';


export const AppContext = createContext()

function App() {
  const [board, setBoard] = useState(boardDefault)
  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider value={{ board, setBoard }}>
        <Board />
        <Keyboard />
      </AppContext.Provider>
    </div>
  );
}

export default App;
