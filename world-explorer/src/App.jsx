import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import CountryPage from './pages/CountryPage';
import Favorites from './pages/Favorites';
import Header from './components/Header';
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:code" element={<CountryPage />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;