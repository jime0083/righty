import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const BASE_URL = import.meta.env.BASE_URL

export function Header() {
  const location = useLocation()
  const isShinsotsu = location.pathname === '/shinsotsu'
  const isJobs = location.pathname === '/jobs' || location.pathname.startsWith('/jobs/')

  return (
    <header className="site-header">
      <div className="wrap header-row">
        <Link className="header-logo" to="/">
          <span className="mark">RIGHTY<sup>®</sup></span>
          <span className="sub">Careers</span>
        </Link>
        <div className="header-actions">
          <Link
            className={`header-btn header-btn--dark ${isJobs ? 'active' : ''}`}
            to="/jobs"
          >
            募集職種一覧<span className="ar">→</span>
          </Link>
          <Link
            className={`header-btn header-btn--out ${isShinsotsu ? 'active' : ''}`}
            to="/shinsotsu"
          >
            新卒採用<span className="ar">→</span>
          </Link>
          <div className="header-menu" role="button" aria-label="メニュー">
            <img src={`${BASE_URL}assets/images/三点リーダー.png`} alt="メニュー" />
          </div>
        </div>
      </div>
    </header>
  )
}
