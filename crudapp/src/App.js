import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar';
import Create from './components/Create';
import Read from "./components/Read";
import Update from "./components/Update";

import './App.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Create />} />
          <Route path='/read' element={<Read />} />
          <Route path='/update/:id' element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
