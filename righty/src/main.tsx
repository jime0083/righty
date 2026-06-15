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
import Shinsotsu from './pages/Shinsotsu.tsx'
import JobUiux from './pages/JobUiux.tsx'
import JobFrontend from './pages/JobFrontend.tsx'
import JobBackend from './pages/JobBackend.tsx'
import JobSales from './pages/JobSales.tsx'
import JobMarketing from './pages/JobMarketing.tsx'
import JobPlanner from './pages/JobPlanner.tsx'
import InterviewTakahashi from './pages/InterviewTakahashi.tsx'
import InterviewFujiwara from './pages/InterviewFujiwara.tsx'
import { ScrollToTop } from './components/ScrollToTop.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/work" element={<Work />} />
        <Route path="/recruit" element={<Recruit />} />
        <Route path="/message" element={<Message />} />
        <Route path="/shinsotsu" element={<Shinsotsu />} />
        <Route path="/jobs/uiux" element={<JobUiux />} />
        <Route path="/jobs/frontend" element={<JobFrontend />} />
        <Route path="/jobs/backend" element={<JobBackend />} />
        <Route path="/jobs/sales" element={<JobSales />} />
        <Route path="/jobs/marketing" element={<JobMarketing />} />
        <Route path="/jobs/planner" element={<JobPlanner />} />
        <Route path="/interview/takahashi-ayumi" element={<InterviewTakahashi />} />
        <Route path="/interview/fujiwara-koki" element={<InterviewFujiwara />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
