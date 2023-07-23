import React from 'react'
import './App.css'
import Header from './components/common/header/Header'
import { Routes, Route } from "react-router-dom";
import About from './components/about/About';
import Home from './components/home/Home';
import CourseHome from './components/allcourses/CourseHome';
import Team from './components/team/Team';
import Blog from './components/blog/Blog';
import Footer from './components/common/footer/Footer';
import Pricing from './components/pricing/Pricing';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/about" exact Component={About} /> 
        <Route path="/courses" exact Component={CourseHome} />
        <Route path="/team" exact Component={Team} /> 
        <Route path="/pricing" exact Component={Pricing} />
        <Route path="/journal" exact Component={Blog} /> 
        <Route path="/contact" exact Component={Contact} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
