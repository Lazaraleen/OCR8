import { Routes, Route } from 'react-router-dom';
import '../style/App.css';
import Home from '../pages/Home';
import About from '../pages/About';
import FicheLogement from '../pages/FicheLogement';
import Page404 from '../pages/Page404';

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