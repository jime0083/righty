import { Link } from 'react-router-dom'
import { ScrollReveal } from './ScrollReveal'

interface FooterProps {
  className?: string
}

export function Footer({ className = '' }: FooterProps) {
  return (
    <footer className={`foot ${className}`}>
      <div className="wrap">
        <ScrollReveal animation="fadeUp">
          <div className="foot-top">
            <div className="foot-brand">
              <div>
                <span className="mark">RIGHTY<sup>®</sup></span>
                <span className="sub">Careers</span>
              </div>
              <div className="tag">More value.<br />Better together.</div>
            </div>
            <div className="foot-col">
              <h5>ライティについて</h5>
              <Link to="/about">私たちの想い</Link>
              <Link to="/about">事業内容</Link>
              <Link to="/about">プロジェクト</Link>
            </div>
            <div className="foot-col">
              <h5>職種紹介</h5>
              <Link to="/jobs">デザイナー</Link>
              <Link to="/jobs">エンジニア</Link>
              <Link to="/jobs">その他職種</Link>
            </div>
            <div className="foot-col">
              <h5>働く環境</h5>
              <Link to="/work">制度・福利厚生</Link>
              <Link to="/work">チーム・文化</Link>
              <Link to="/work">メンバーインタビュー</Link>
            </div>
            <div className="foot-col">
              <h5>採用</h5>
              <Link to="/jobs">募集職種一覧</Link>
              <Link to="/recruit">選考フロー</Link>
              <Link to="/recruit">よくある質問</Link>
            </div>
            <div className="foot-cta">
              <Link className="fc-fill" to="/shinsotsu">新卒採用はこちら →</Link>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal animation="fadeIn" delay={0.2}>
          <div className="foot-bottom">
            <span>© RIGHTY Inc. All Rights Reserved.</span>
            <div className="links">
              <a href="#">プライバシーポリシー</a>
              <span>|</span>
              <a href="#">サイトポリシー</a>
              <div className="socials">
                <a href="#" aria-label="Instagram">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.2 15.58 2.2 15.2 2.2 12s0-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.2 8.8 2.2 12 2.2zm0 3.65A6.15 6.15 0 1018.15 12 6.15 6.15 0 0012 5.85zm0 10.15A4 4 0 1116 12a4 4 0 01-4 4zm6.4-10.4a1.44 1.44 0 11-1.44-1.44 1.44 1.44 0 011.44 1.44z" />
                  </svg>
                </a>
                <a href="#" aria-label="X">
                  <svg viewBox="0 0 24 24">
                    <path d="M18.9 2H22l-7.3 8.3L23 22h-6.8l-5.3-6.9L4.8 22H1.7l7.8-8.9L1 2h6.9l4.8 6.3L18.9 2zm-2.4 18h1.9L7.6 4H5.6l10.9 16z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  )
}
