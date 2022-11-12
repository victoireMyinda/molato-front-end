import HomePage from './pages/HomePage';
import Login from './pages/LoginPage'
import './App.css';
import Auth from './pages/AuthPage';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
