import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './page/LandingPage/LandingPage';
import TodoPage from './page/TodoPage/TodoPage';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/todo' element={<TodoPage />} /> {/* :/target -> capturing URL param */}
        {/* add 404 here later */}
      </Routes>    
    </BrowserRouter>

  )
}

export default App;
