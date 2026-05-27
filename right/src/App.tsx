import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* 今後追加予定のページ */}
        {/* <Route path="/about" element={<AboutPage />} /> */}
        {/* <Route path="/culture" element={<CulturePage />} /> */}
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
