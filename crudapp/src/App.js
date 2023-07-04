import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar';
import Create from './components/Create';
import Read from "./components/Read";
import './App.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Create />} />
          <Route exact path='/read' element={<Read />} />
          {/* <Create /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
