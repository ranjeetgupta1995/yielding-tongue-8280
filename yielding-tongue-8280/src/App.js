import React from 'react'
import './App.css'
import Header from './components/common/header/Header'
import { Routes, Route } from "react-router-dom";
import About from './components/about/About';
import Home from './components/home/Home';
import CourseHome from './components/allcourses/CourseHome';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/about" exact Component={About} /> 
        <Route path="/courses" exact Component={CourseHome} /> 
      </Routes>
    </div>
  )
}

export default App
