import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

interface NavItem {
  label: string;
  href: string;
  hasArrow?: boolean;
  subItems?: { label: string; href: string }[];
}

const sideNavItems: NavItem[] = [
  { label: 'ライティについて', href: '/about' },
  { label: 'カルチャー', href: '/culture' },
  { label: '働く環境', href: '/workstyle' },
  { label: '職種紹介', href: '/jobs' },
  { label: 'よくあるご質問', href: '/faq' },
];

const menuColumn1: NavItem[] = [
  {
    label: 'ライティについて',
    href: '/about',
    hasArrow: true,
    subItems: [
      { label: '採用メッセージ', href: '/about#message' },
      { label: '私たちが目指すこと', href: '/about#vision' },
      { label: 'ライティの事業', href: '/about#business' },
    ],
  },
];

const menuColumn2: NavItem[] = [
  { label: 'カルチャー', href: '/culture', hasArrow: true },
  { label: '働く環境', href: '/workstyle', hasArrow: true },
];

const menuColumn3: NavItem[] = [
  {
    label: '職種紹介',
    href: '/jobs',
    hasArrow: true,
    subItems: [
      { label: 'ビジネス', href: '/jobs#business' },
      { label: 'プロダクト', href: '/jobs#product' },
      { label: 'エンジニア', href: '/jobs#engineer' },
      { label: 'デザイン', href: '/jobs#design' },
      { label: 'コーポレート', href: '/jobs#corporate' },
    ],
  },
  { label: 'よくあるご質問', href: '/faq', hasArrow: true },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      {/* サイドナビゲーション（トップ表示時のみ） */}
      <nav className={`${styles.sideNav} ${isScrolled ? styles.hidden : ''}`}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoAccent}>righty</span>
          <span className={styles.logoText}> Careers</span>
        </Link>
        <ul className={styles.sideNavList}>
          {sideNavItems.map((item) => (
            <li key={item.href}>
              <Link to={item.href} className={styles.sideNavLink}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* 固定ヘッダー（常に表示、スクロール時にスタイル変化） */}
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.headerRight}>
          <Link to="/recruit" className={styles.recruitButton}>
            募集職種
            <span className={styles.buttonArrow}>→</span>
          </Link>
          <Link to="/new-graduate" className={styles.newGradLink}>
            新卒採用
            <span className={styles.linkArrow}>→</span>
          </Link>
          <button
            className={`${styles.menuToggle} ${isMenuOpen ? styles.active : ''}`}
            onClick={toggleMenu}
            aria-label="メニューを開く"
            aria-expanded={isMenuOpen}
          >
            <span className={styles.menuToggleLine}></span>
            <span className={styles.menuToggleLine}></span>
          </button>
        </div>
      </header>

      {/* メニューポップアップ */}
      <div className={`${styles.menuOverlay} ${isMenuOpen ? styles.open : ''}`}>
        <div className={styles.menuHeader}>
          <Link to="/" className={styles.menuLogo} onClick={closeMenu}>
            <span className={styles.logoAccent}>righty</span>
            <span className={styles.logoText}> Careers</span>
          </Link>
          <div className={styles.menuHeaderRight}>
            <Link to="/new-graduate" className={styles.menuNewGradLink} onClick={closeMenu}>
              新卒採用
              <span className={styles.linkArrow}>→</span>
            </Link>
            <Link to="/recruit" className={styles.menuRecruitButton} onClick={closeMenu}>
              募集職種
              <span className={styles.buttonArrow}>→</span>
            </Link>
            <button
              className={styles.closeButton}
              onClick={closeMenu}
              aria-label="メニューを閉じる"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.menuContent}>
          <div className={styles.menuGrid}>
            {/* カラム1 */}
            <div className={styles.menuColumn}>
              {menuColumn1.map((item) => (
                <div key={item.href} className={styles.menuGroup}>
                  <Link
                    to={item.href}
                    className={styles.menuMainLink}
                    onClick={closeMenu}
                  >
                    {item.label}
                    {item.hasArrow && <span className={styles.menuArrow}>→</span>}
                  </Link>
                  {item.subItems && (
                    <ul className={styles.menuSubList}>
                      {item.subItems.map((subItem) => (
                        <li key={subItem.href}>
                          <Link
                            to={subItem.href}
                            className={styles.menuSubLink}
                            onClick={closeMenu}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* カラム2 */}
            <div className={styles.menuColumn}>
              {menuColumn2.map((item) => (
                <div key={item.href} className={styles.menuGroup}>
                  <Link
                    to={item.href}
                    className={styles.menuMainLink}
                    onClick={closeMenu}
                  >
                    {item.label}
                    {item.hasArrow && <span className={styles.menuArrow}>→</span>}
                  </Link>
                </div>
              ))}
            </div>

            {/* カラム3 */}
            <div className={styles.menuColumn}>
              {menuColumn3.map((item) => (
                <div key={item.href} className={styles.menuGroup}>
                  <Link
                    to={item.href}
                    className={styles.menuMainLink}
                    onClick={closeMenu}
                  >
                    {item.label}
                    {item.hasArrow && <span className={styles.menuArrow}>→</span>}
                  </Link>
                  {item.subItems && (
                    <ul className={styles.menuSubList}>
                      {item.subItems.map((subItem) => (
                        <li key={subItem.href}>
                          <Link
                            to={subItem.href}
                            className={styles.menuSubLink}
                            onClick={closeMenu}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
