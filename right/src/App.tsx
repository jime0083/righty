import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CulturePage from './pages/CulturePage';
import './styles/global.css';

function App() {
  return (
    <Router basename="/right">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/culture" element={<CulturePage />} />
        {/* <Route path="/environment" element={<EnvironmentPage />} /> */}
        {/* <Route path="/positions" element={<PositionsPage />} /> */}
        {/* <Route path="/jobs" element={<JobsPage />} /> */}
        {/* <Route path="/new-graduate" element={<NewGraduatePage />} /> */}
        {/* <Route path="/faq" element={<FAQPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
