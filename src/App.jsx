import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Achievements from './pages/Achievements';
import Admissions from './pages/Admissions';
import Events from './pages/Events';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="events" element={<Events />} />
          <Route path="admissions" element={<Admissions />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;