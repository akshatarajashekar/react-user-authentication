import React, {useEffect}from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
const App = () => {
  useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, []);
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  </div>
}

export default App;