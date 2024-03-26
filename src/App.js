import { BrowserRouter, Routes, Route } from 'react-router-dom'
import History from './pages/History';
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/history" element={<History/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
