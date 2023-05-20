import { BrowserRouter } from 'react-router-dom';
import './style/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import RoutesReact from './Routes/Routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RoutesReact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;