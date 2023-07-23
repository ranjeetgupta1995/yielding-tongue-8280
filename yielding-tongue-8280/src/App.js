import React from 'react'
import './App.css';
import AllRouters from './allRouters/AllRouters';
import Header from './components/common/header/Header'
import Footer from './components/common/footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <AllRouters />
      <Footer />
    </>
  )
}

export default App;
