import { Link } from 'react-router-dom'
import { ScrollReveal } from '../components/ScrollReveal'
import { Footer } from '../components/Footer'
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
            <Link to="/recruit"><span className="dot"></span>採用</Link>
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

      <Footer />
    </>
  )
}

export default About
