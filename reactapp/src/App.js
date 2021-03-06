import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MyNav from './pages/Navbar';
import Ideas from './pages/Ideas';
import AddIdeas from './pages/AddIdeas';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {

  return (
    <Router>
      <MyNav></MyNav>
      <Routes>
        <Route exact path="/" element={<Ideas/>} />
        <Route path="/add-ideas" element={<AddIdeas/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  );

  
}

export default App;
