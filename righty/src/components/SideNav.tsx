import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'ライティについて', path: '/about' },
  { label: '職種紹介', path: '/jobs' },
  { label: '働く環境', path: '/work' },
  { label: '採用', path: '/recruit' }
]

export function SideNav() {
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <nav className="side-nav">
      {navItems.map((item) => (
        <Link
          key={item.path}
          className={currentPath === item.path ? 'active' : ''}
          to={item.path}
        >
          <span className="dot"></span>
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
