// import React, { useContext } from 'react';
import HomePage from './pages/HomePage';
import Login from './pages/LoginPage';
import Auth from './pages/AuthPage';
import {Routes, Route} from 'react-router-dom';
// import { UserLoginStatusContext } from './Context/userLoginStatus';
import Error from './pages/PageError';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
/*   const {isLogin} = useContext(UserLoginStatusContext);
  const isLogedStorage = localStorage.getItem('isLogin');

  if ((isLogin===false) && (isLogedStorage !== 'true')) {
    return (
      <>
        <Login/>
        <Auth/>
      </>
    )
  } */


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
