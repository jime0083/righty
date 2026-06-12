import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import About from './pages/About.tsx'
import Culture from './pages/Culture.tsx'
import Jobs from './pages/Jobs.tsx'
import Work from './pages/Work.tsx'
import Recruit from './pages/Recruit.tsx'
import Message from './pages/Message.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/work" element={<Work />} />
        <Route path="/recruit" element={<Recruit />} />
        <Route path="/message" element={<Message />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
