import { Routes, Route } from 'react-router-dom';
import '../style/App.css';
import Home from '../assets/pages/Home';
import About from '../assets/pages/About';
import FicheLogement from '../assets/pages/FicheLogement';
import Page404 from '../assets/pages/Page404';

function RoutesReact() {
  return (
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/fiche/:id' element={<FicheLogement />} />
          <Route path='/page404' element={<Page404 />} />
          <Route path='/*' element={<Page404 />} />
      </Routes>
  );
}

export default RoutesReact;