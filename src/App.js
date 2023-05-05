import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/App.css';
import Home from './assets/pages/Home';
import About from './assets/pages/About';
import FicheLogement from './assets/pages/FicheLogement';
import Page404 from './assets/pages/Page404';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/fiche' element={<FicheLogement />} />
            {/* path "*" fonctionne si l'url ne correspond à rien de déclaré au-dessus */}
            <Route path='*' element={<Page404 />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;