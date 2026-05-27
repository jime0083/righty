import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

interface NavItem {
  label: string;
  href: string;
}

const primaryNavItems: NavItem[] = [
  { label: '募集職種', href: '/jobs' },
  { label: '新卒採用', href: '/new-graduate' },
];

const menuNavItems: NavItem[] = [
  { label: 'ライティについて', href: '/about' },
  { label: 'カルチャー', href: '/culture' },
  { label: '働く環境', href: '/environment' },
  { label: '職種紹介', href: '/positions' },
  { label: 'よくあるご質問', href: '/faq' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // メニューが開いている時はスクロールを無効化
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          <Link to="/" className={styles.logo} onClick={closeMenu}>
            <span className={styles.logoText}>RIGHTY</span>
            <span className={styles.logoSub}>CAREERS</span>
          </Link>

          <nav className={styles.primaryNav}>
            {primaryNavItems.map((item) => (
              <Link key={item.href} to={item.href} className={styles.primaryNavLink}>
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            className={`${styles.menuToggle} ${isMenuOpen ? styles.active : ''}`}
            onClick={toggleMenu}
            aria-label="メニューを開く"
            aria-expanded={isMenuOpen}
          >
            <span className={styles.menuToggleLine}></span>
            <span className={styles.menuToggleLine}></span>
            <span className={styles.menuToggleLine}></span>
          </button>
        </div>
      </header>

      {/* フルスクリーンメニュー */}
      <div className={`${styles.fullscreenMenu} ${isMenuOpen ? styles.open : ''}`}>
        <div className={styles.menuContent}>
          <nav className={styles.menuNav}>
            {menuNavItems.map((item, index) => (
              <Link
                key={item.href}
                to={item.href}
                className={styles.menuNavLink}
                onClick={closeMenu}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className={styles.menuFooter}>
            {primaryNavItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={styles.menuFooterLink}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
