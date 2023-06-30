import React, { useState, createContext, useEffect } from 'react';
import Board from './components/Board.js/Board';
import Keyboard from './components/Keyboard/Keyboard';
import { boardDefault, generateWordSet } from './utils/Words'
import './App.css';
import GameOver from './components/Gameover/GameOver';

export const AppContext = createContext()
function App() {
  const [board, setBoard] = useState(boardDefault)
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 })
  const [wordSet, setWordSet] = useState(new Set())
  const [disabledLetters, setDisabledLetters] = useState([])
  const [correctWord, setCorrectWord] = useState("")
  const [gameOver, setGameOver] = useState({ gameOver: false, guessedWord: false })

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet)
      setCorrectWord(words.todaysWord)
      // for (const fruit of words.wordSet.values()) {
      //   console.log(fruit);
      // }
    })
  }, [])

  
  const onEnter = () => {
    if (currAttempt.letterPos !== 5) return;
    let currWord = ""
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i]
    }
    if (wordSet.has(currWord.toLowerCase())) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 })
      console.log("Word found")
    } else {
      console.log("Word not found")
    }
    if (currWord === correctWord) {
      setGameOver({ gameOver: true, guessedWord: true })
      return;
    }
    if (currAttempt.attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false })
    }
  }
  const onDelete = () => {
    if (currAttempt.letterPos === 0) return;
    const newBoard = [...board]
    newBoard[currAttempt?.attempt][currAttempt?.letterPos - 1] = ""
    setBoard(newBoard)
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 })
  }
  const onSelectLetter = (keyVal) => {
    if (currAttempt.letterPos > 4) return;
    const newBoard = [...board]
    newBoard[currAttempt?.attempt][currAttempt?.letterPos] = keyVal
    setBoard(newBoard)
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt?.letterPos + 1 })
  }
  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider value={{ board, setBoard, currAttempt, setCurrAttempt, onSelectLetter, onDelete, onEnter, correctWord, disabledLetters, setDisabledLetters, gameOver, setGameOver }}>
        <div className='game'>
          <Board />
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}
        </div>
      </AppContext.Provider>
    </div >
  );
}

export default App;
