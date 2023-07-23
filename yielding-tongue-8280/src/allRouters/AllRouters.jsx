import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../components/home/Home';
import About from '../components/about/About';
import CourseHome from '../components/allcourses/CourseHome';
import Team from '../components/team/Team';
import Pricing from '../components/pricing/Pricing';
import Blog from '../components/blog/Blog';
import Contact from '../components/contact/Contact';


const AllRouters = () => {
  return (
    <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/about" exact Component={About} /> 
        <Route path="/courses" exact Component={CourseHome} />
        <Route path="/team" exact Component={Team} /> 
        <Route path="/pricing" exact Component={Pricing} />
        <Route path="/journal" exact Component={Blog} /> 
        <Route path="/contact" exact Component={Contact} />
    </Routes>
  )
}

export default AllRouters;




