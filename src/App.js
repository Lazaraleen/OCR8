// import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
import './style/App.css';
import Home from './assets/pages/Home';
import About from './assets/pages/About';
import FicheLogement from './assets/pages/FicheLogement';
import Page404 from './assets/pages/Page404';
import Header from './components/Header';
import Footer from './components/Footer';
// import Logement from '../../logements.json';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/fiche/:id' element={<FicheLogement />} />
          <Route path='/page404' element={<Page404 />} />

          {/* <Route 
            path='/fiche/:id' 
            {Logement.find((lieu) => lieu.id === id) ? useState(true) : console.log(falseId)}
            element={falseId ? <Navigate to="/page404" /> : <Navigate to="/" /> } 
          /> */}

          <Route path='/*' element={<Page404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;