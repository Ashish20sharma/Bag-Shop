import './App.css';
import Home from './pages/Home';
import Shop from './pages/Shop';
import { Route, Routes } from "react-router-dom"
function App() {
  return (
    <div className='App'>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/shop' element={<Shop/>}/>
    </Routes>
    </div>
  );
}

export default App;
