import { Link } from 'react-router-dom'
import { ScrollReveal } from '../components/ScrollReveal'
import '../About.css'

const BASE_URL = import.meta.env.BASE_URL

function About() {
  const features = [
    {
      eyebrow: 'Message',
      title: '採用メッセージ',
      description: '代表取締役：太田睦／鈴木達哉から、\n求職者の皆様にお伝えしたいメッセージ。',
      image: `${BASE_URL}assets/images/汎用7.png`,
      buttonType: 'fill',
      reverse: false,
      variant: ''
    },
    {
      eyebrow: 'Vision',
      title: '私たちが目指すこと',
      description: 'ギフティの事業の原点と現在地、\n私たちがつくっていきたい社会のあり方と\nこれからの展望。',
      image: `${BASE_URL}assets/images/righty画像.png`,
      buttonType: 'out',
      reverse: true,
      variant: ''
    },
    {
      eyebrow: 'Business',
      title: 'ライティの事業',
      description: 'デザインとテクノロジーの力で、\n人とビジネスの可能性を広げる\n私たちの事業について。',
      image: `${BASE_URL}assets/images/汎用9.png`,
      buttonType: 'fill',
      reverse: false,
      variant: 'biz'
    }
  ]

  return (
    <>
      {/* Header */}
      <header className="site-head">
        <div className="wrap head-row">
          <Link className="logo" to="/">
            <span className="mark">RIGHTY<sup>®</sup></span>
            <span className="sub">Careers</span>
          </Link>
          <div className="head-actions">
            <Link className="head-btn head-btn--dark" to="/#jobs">募集職種一覧<span className="ar">→</span></Link>
            <a className="head-btn head-btn--out" href="#">新卒採用<span className="ar">→</span></a>
            <div className="head-menu" role="button" aria-label="メニュー">
              <img src={`${BASE_URL}assets/images/三点リーダー.png`} alt="メニュー" />
            </div>
          </div>
        </div>
      </header>

      {/* Page Hero */}
      <section className="page-hero">
        <span className="hero-blob"></span>
        <div className="wrap hero-grid">
          <nav className="side-nav">
            <Link className="active" to="/about"><span className="dot"></span>ライティについて</Link>
            <Link to="/culture"><span className="dot"></span>カルチャー</Link>
            <Link to="/jobs"><span className="dot"></span>職種紹介</Link>
            <Link to="/work"><span className="dot"></span>働く環境</Link>
            <Link to="/#recruit"><span className="dot"></span>採用</Link>
          </nav>
          <div className="hero-head">
            <span className="hero-dots"></span>
            <ScrollReveal animation="fadeUp">
              <h1>ライティについて</h1>
            </ScrollReveal>
            <ScrollReveal animation="fadeUp" delay={0.1}>
              <p>ライティの想いや目指す未来、<br/>事業のことをお伝えします。</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features */}
      <div className="features">
        <div className="wrap">
          {features.map((feature, index) => (
            <ScrollReveal key={index} animation={feature.reverse ? 'fadeLeft' : 'fadeRight'} delay={0.1}>
              <section className={`feature-row ${feature.reverse ? 'reverse' : ''} ${feature.variant}`}>
                <div className="media">
                  {!feature.reverse && <span className="deco circ-sm" style={{ left: '-34px', top: '40%' }}></span>}
                  {feature.reverse && (
                    <>
                      <span className="deco circ-lg" style={{ right: '-30px', top: '8%' }}></span>
                      <span className="deco circ-sm" style={{ right: '6%', bottom: '-14px' }}></span>
                      <span className="deco dots" style={{ right: '-46px', bottom: '30px', width: '120px', height: '120px' }}></span>
                    </>
                  )}
                  {feature.variant === 'biz' && (
                    <>
                      <span className="deco circ-sm" style={{ left: '-30px', bottom: '14%' }}></span>
                      <span className="deco dots" style={{ left: '-40px', top: '10px', width: '96px', height: '96px' }}></span>
                    </>
                  )}
                  <img className="photo" src={feature.image} alt={feature.title} />
                </div>
                <div className="copy">
                  <div className="f-eyebrow">{feature.eyebrow}</div>
                  <h2 className="f-title">{feature.title}</h2>
                  <p className="f-body">{feature.description.split('\n').map((line, i) => (
                    <span key={i}>{line}{i < feature.description.split('\n').length - 1 && <br />}</span>
                  ))}</p>
                  <a className={`circ-btn circ-${feature.buttonType}`} href="#" aria-label={`${feature.title}を見る`}>
                    <span className="ar">→</span>
                  </a>
                </div>
              </section>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="foot about-foot">
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
                <Link to="/#jobs">デザイナー</Link>
                <Link to="/#jobs">エンジニア</Link>
                <Link to="/#jobs">その他職種</Link>
              </div>
              <div className="foot-col">
                <h5>働く環境</h5>
                <Link to="/work">制度・福利厚生</Link>
                <Link to="/work">チーム・文化</Link>
                <Link to="/work">メンバーインタビュー</Link>
              </div>
              <div className="foot-col">
                <h5>採用</h5>
                <Link to="/#jobs">募集職種一覧</Link>
                <Link to="/#recruit">選考フロー</Link>
                <Link to="/#recruit">よくある質問</Link>
              </div>
              <div className="foot-cta">
                <a className="fc-fill" href="#">エントリーする →</a>
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
    </>
  )
}

export default About
