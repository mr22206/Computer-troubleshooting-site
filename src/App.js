import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import Home from './pages/Home';
import Distance from './pages/Distance';
import Domicile from './pages/Domicile';
import Tarifs from './pages/Tarifs';
import Support from './pages/Support';
import Services from './pages/Services';

function App() {
  const basePath = process.env.REACT_APP_BASE_PATH || '';
  
  return (
    <Router basename={basePath}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/distance" element={<Distance />} />
          <Route path="/domicile" element={<Domicile />} />
          <Route path="/tarifs" element={<Tarifs />} />
          <Route path="/support" element={<Support />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;