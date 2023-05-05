import React, { Fragment } from 'react';

import './App.css';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import NavBar from './components/navbar/navbar';

import Curriculum from './components/curriculum/curriculum';
import Contact from './components/contact/contact';
import Portfolio from './components/portfolio/portfolio';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
  <Fragment>
    <Header></Header>

    <BrowserRouter>
      
      <NavBar></NavBar>

      <Routes>
        <Route index element={<Curriculum />}/> 
        <Route path='portfolio' element={<Portfolio />}/>
        <Route path='contact' element={<Contact />}/>
      </Routes>
    </BrowserRouter>

    <Footer></Footer>

  </Fragment>

  )
}

export default App;
