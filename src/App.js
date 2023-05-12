import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/App.css';
import Home from './assets/pages/Home';
import About from './assets/pages/About';
import FicheLogement from './assets/pages/FicheLogement';
import Page404 from './assets/pages/Page404';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/fiche/:id' element={<FicheLogement />} />
          {/* <Route path='/fiche/*' element={<Page404 />} />     Un soucis pour cette route */}
          <Route path='/*' element={<Page404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;