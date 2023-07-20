import React from 'react'
import './App.css'
import Header from './components/common/header/Header'
import { Routes, Route } from "react-router-dom";
import About from './components/about/About';
import Home from './components/home/Home';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/about" exact Component={About} />  
      </Routes>
    </div>
  )
}

export default App
