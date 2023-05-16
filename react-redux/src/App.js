import './App.css';

import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Memo from './pages/Memo';
import Like from './pages/Like';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='/memo' element={<Memo/>}/>
          <Route path='/like' element={<Like/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
