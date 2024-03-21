import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Bases from './pages/Bases';
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/bases" element={<Bases/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
