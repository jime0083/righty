import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

interface NavItem {
  label: string;
  href: string;
}

interface SocialItem {
  label: string;
  href: string;
  icon: 'x' | 'facebook';
}

const mainNavItems: NavItem[] = [
  { label: 'ライティについて', href: '/about' },
  { label: 'カルチャー', href: '/culture' },
  { label: '働く環境', href: '/environment' },
  { label: '職種紹介', href: '/positions' },
  { label: 'よくあるご質問', href: '/faq' },
];

const subNavItems: NavItem[] = [
  { label: '組織づくり', href: '/organization' },
  { label: '採用広報', href: '/pr' },
  { label: 'Tech Blog', href: '/tech-blog' },
];

const policyItems: NavItem[] = [
  { label: 'プライバシーポリシー', href: '/privacy' },
  { label: 'セキュリティポリシー', href: '/security' },
];

const socialItems: SocialItem[] = [
  { label: 'X', href: 'https://twitter.com/', icon: 'x' },
  { label: 'Facebook', href: 'https://facebook.com/', icon: 'facebook' },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* メインナビゲーション */}
        <nav className={styles.mainNav}>
          {mainNavItems.map((item) => (
            <Link key={item.href} to={item.href} className={styles.mainNavLink}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* サブナビゲーション */}
        <div className={styles.subSection}>
          <nav className={styles.subNav}>
            {subNavItems.map((item) => (
              <Link key={item.href} to={item.href} className={styles.subNavLink}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* ボトムセクション */}
        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>
            <Link to="/" className={styles.logo}>
              <span className={styles.logoText}>RIGHTY</span>
              <span className={styles.logoSub}>CAREERS</span>
            </Link>
          </div>

          <div className={styles.bottomCenter}>
            <nav className={styles.policyNav}>
              {policyItems.map((item) => (
                <Link key={item.href} to={item.href} className={styles.policyLink}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <p className={styles.copyright}>
              &copy; 2024 RIGHTY Inc. All rights reserved.
            </p>
          </div>

          <div className={styles.bottomRight}>
            <div className={styles.socialLinks}>
              {socialItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                >
                  {item.icon === 'x' ? (
                    <svg viewBox="0 0 24 24" fill="currentColor" className={styles.socialIcon}>
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="currentColor" className={styles.socialIcon}>
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
