import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import { ScrollReveal } from './components/ScrollReveal'
import { SideNav } from './components/SideNav'
import { JobSlider } from './components/JobSlider'
import { type JobCardData } from './components/JobCard'

const BASE_URL = import.meta.env.BASE_URL

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      setMousePos({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  const jobCards: JobCardData[] = [
    {
      slug: 'uiux',
      title: 'UI/UXデザイナー',
      description: 'ユーザー体験の設計からUIデザインまで、プロダクトの価値を最大化します。',
      image: `${BASE_URL}assets/images/汎用5.png`,
      imagePosition: 'center center'
    },
    {
      slug: 'frontend',
      title: 'フロントエンドエンジニア',
      description: 'Webサイトやサービスのフロントエンド開発で、快適で魅力的な体験をつくります。',
      image: `${BASE_URL}assets/images/汎用2.png`,
      imagePosition: 'center center'
    },
    {
      slug: 'backend',
      title: 'バックエンドエンジニア',
      description: '安定したシステム基盤を構築し、サービスの成長を支えます。',
      image: `${BASE_URL}assets/images/汎用7.png`,
      imagePosition: 'center center'
    },
    {
      slug: 'sales',
      title: 'セールス',
      description: 'クライアントの課題を深く理解し、最適なソリューションを提案します。',
      image: `${BASE_URL}assets/images/汎用MT2.png`,
      imagePosition: 'center center'
    },
    {
      slug: 'marketing',
      title: 'マーケティング',
      description: 'データと創造性を駆使し、サービスの成長を加速させます。',
      image: `${BASE_URL}assets/images/汎用MT1.png`,
      imagePosition: 'center center'
    },
    {
      slug: 'planner',
      title: 'プランナー',
      description: 'クライアントの課題を紐解き、最適なソリューションを設計します。',
      image: `${BASE_URL}assets/images/汎用9.png`,
      imagePosition: 'center center'
    }
  ]

  const features = [
    {
      title: 'フレックスタイム制',
      description: 'コアタイムなしのフレックス制度で、自分らしい働き方を支えます。',
      icon: (
        <svg viewBox="0 0 24 24">
          <rect x="4" y="5" width="16" height="14" rx="2"/>
          <path d="M4 9h16M9 13l-2 2 2 2M15 13l2 2-2 2"/>
        </svg>
      )
    },
    {
      title: '成長を支える文化',
      description: '学びや挑戦を後押しする文化があり、キャリアの可能性を広げられます。',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5z"/>
        </svg>
      )
    },
    {
      title: 'つながりを大切に',
      description: '定期的に1on1やチームイベントで、信頼関係を育みます。',
      icon: (
        <svg viewBox="0 0 24 24">
          <circle cx="8" cy="8" r="3"/>
          <circle cx="16" cy="8" r="3"/>
          <path d="M3 20c0-3 2.5-5 5-5s5 2 5 5M13 20c.3-2.6 2.2-4 4-4s3.7 1.4 4 4"/>
        </svg>
      )
    },
    {
      title: '快適なオフィス環境',
      description: '自然光が差し込む開放的な空間で、クリエイティブな発想を支えます。',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M4 21V8l8-5 8 5v13M9 21v-6h6v6M4 12h16"/>
        </svg>
      )
    }
  ]

  return (
    <>
      {/* Header */}
      <header className="site-head">
        <div className="wrap head-row">
          <a className="logo" href="#">
            <span className="mark">RIGHTY<sup>®</sup></span>
            <span className="sub">Careers</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <span
          className="blob b-hero-1"
          style={{
            transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 10}px)`,
            borderRadius: `${50 + mousePos.x * 8}% ${50 - mousePos.x * 8}% ${50 + mousePos.y * 6}% ${50 - mousePos.y * 6}%`
          }}
        ></span>
        <span
          className="blob b-hero-2"
          style={{
            transform: `translate(${mousePos.x * -20}px, ${mousePos.y * 12}px)`,
            borderRadius: `${46 + mousePos.y * 10}% ${54 - mousePos.y * 10}% ${60 + mousePos.x * 8}% ${40 - mousePos.x * 8}% / ${55 + mousePos.x * 6}% ${45 - mousePos.x * 6}% ${60 + mousePos.y * 8}% ${40 - mousePos.y * 8}%`
          }}
        ></span>
        <span
          className="blob b-hero-3"
          style={{
            transform: `translate(${mousePos.x * 12}px, ${mousePos.y * -8}px)`,
            borderRadius: `${50 + mousePos.y * 10}% ${50 - mousePos.y * 10}% ${50 + mousePos.x * 8}% ${50 - mousePos.x * 8}%`
          }}
        ></span>
        <span className="dots-hero"></span>
        <span
          className="copy-circle"
          style={{
            transform: `translate(calc(-50% + ${mousePos.x * 50}px), calc(-50% + ${mousePos.y * 40}px))`,
            borderRadius: `${50 + mousePos.x * 20}% ${50 - mousePos.x * 20}% ${50 + mousePos.y * 18}% ${50 - mousePos.y * 18}% / ${50 - mousePos.y * 15}% ${50 + mousePos.y * 15}% ${50 - mousePos.x * 18}% ${50 + mousePos.x * 18}%`
          }}
        ></span>
        <div className="wrap hero-grid">
          <SideNav />
          <div className="hero-photo-area">
            <h1 className="vhead">
              <span className="vhead-line vhead-line-1">つくりたいのは</span>
              <span className="vhead-line vhead-line-2"><span className="accent">つながり</span></span>
              <span className="vhead-line vhead-line-3">の先の価値</span>
            </h1>
            {/* 映像挿入エリア - 後で実装 */}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <span className="blob" style={{
          position: 'absolute',
          top: '-70px',
          right: '-70px',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle at 40% 40%, #fce0cd, #f7bd99)',
          opacity: 0.5,
          borderRadius: '50%',
          zIndex: 1,
          pointerEvents: 'none'
        }}></span>
        <span className="blob" style={{
          position: 'absolute',
          bottom: '-50px',
          left: '-80px',
          width: '180px',
          height: '180px',
          background: 'radial-gradient(circle at 42% 40%, #fcdcc8, #f6bd9b)',
          opacity: 0.4,
          borderRadius: '50%',
          zIndex: 1,
          pointerEvents: 'none'
        }}></span>
        <div className="wrap about-grid about-grid--single">
          <ScrollReveal animation="fadeUp">
            <div className="about-text">
              <div className="eyebrow">About Righty</div>
              <h2>デザインとテクノロジーの力で、<br/>人とビジネスの可能性をひらく。</h2>
              <p>ライティは、ブランディングとUX設計を軸に、クライアントのビジネスの本質を捉え、価値ある体験をデザインする会社です。戦略から企画・デザイン・開発・グロースまでを一気通貫で行い、クライアントの伴走者として、共に未来をつくります。</p>
              <Link className="link-out" to="/about">ライティについて詳しく見る<span className="ar">→</span></Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Jobs */}
      <section className="jobs" id="jobs">
        <div className="wrap">
          <ScrollReveal animation="fadeUp">
            <div className="sec-title-c">Job Category</div>
            <div className="sec-jp">職種紹介</div>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp">
            <JobSlider jobs={jobCards} />
          </ScrollReveal>
        </div>
      </section>

      {/* Work Environment */}
      <section className="work" id="work">
        <span className="b-work" style={{
          top: '60px',
          right: '120px',
          width: '200px',
          height: '170px',
          opacity: 0.4,
          borderRadius: '46% 54% 60% 40% / 55% 45% 60% 40%'
        }}></span>
        <span className="b-work" style={{
          bottom: '-60px',
          right: '-60px',
          width: '240px',
          height: '200px',
          opacity: 0.55
        }}></span>
        <div className="wrap work-grid">
          <ScrollReveal animation="fadeLeft">
            <div className="work-left">
              <div className="eyebrow">Work Environment</div>
              <h2>人の可能性が、<br/>チームの力になる。</h2>
              <p>フラットでオープンな文化の中で、お互いを尊重し、挑戦を後押しし合う。ワークもライフも、あなたらしくデザインできる環境があります。</p>
              <a className="link-out" href="#">働く環境を見る<span className="ar">→</span></a>
            </div>
          </ScrollReveal>
          <div className="feat-grid">
            {features.map((feat, index) => (
              <ScrollReveal key={index} animation="fadeUp" delay={index * 0.1}>
                <div className="feat">
                  <div className="ic">{feat.icon}</div>
                  <div>
                    <h4>{feat.title}</h4>
                    <p>{feat.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recruit */}
      <section className="recruit" id="recruit">
        <span className="blob" style={{
          position: 'absolute',
          top: '-40px',
          left: '-60px',
          width: '160px',
          height: '160px',
          background: 'radial-gradient(circle at 40% 40%, #fce0cd, #f8c6a8)',
          opacity: 0.45
        }}></span>
        <div className="wrap recruit-grid">
          <ScrollReveal animation="fadeRight">
            <div className="recruit-text">
              <div className="eyebrow">Recruit</div>
              <h2>一緒に、未来の<br/>「<span className="q">あたりまえ</span>」をつくろう。</h2>
              <p>デザインの力で、社会にポジティブな変化を。<br/>あなたの挑戦を、ライティは待っています。</p>
              <a className="link-out" href="#">募集要項・エントリー<span className="ar">→</span></a>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="scale" delay={0.2}>
            <div className="recruit-visual">
              <span className="rv-circle"></span>
              <span className="rv-dots"></span>
              <div className="rv-photo">
                <img src={`${BASE_URL}assets/images/MT3.png`} alt="チームメンバー" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="foot">
        <div className="wrap">
          <ScrollReveal animation="fadeUp">
          <div className="foot-top">
            <div className="foot-brand">
              <div>
                <span className="mark">RIGHTY<sup>®</sup></span>
                <span className="sub">Careers</span>
              </div>
              <div className="tag">More value.<br/>Better together.</div>
            </div>
            <div className="foot-col">
              <h5>ライティについて</h5>
              <Link to="/about">私たちの想い</Link>
              <Link to="/about">事業内容</Link>
              <Link to="/about">プロジェクト</Link>
            </div>
            <div className="foot-col">
              <h5>職種紹介</h5>
              <a href="#">デザイナー</a>
              <a href="#">エンジニア</a>
              <a href="#">その他職種</a>
            </div>
            <div className="foot-col">
              <h5>働く環境</h5>
              <a href="#">制度・福利厚生</a>
              <a href="#">チーム・文化</a>
              <a href="#">メンバーインタビュー</a>
            </div>
            <div className="foot-col">
              <h5>採用</h5>
              <a href="#">募集職種一覧</a>
              <a href="#">選考フロー</a>
              <a href="#">よくある質問</a>
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
                      <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.2 15.58 2.2 15.2 2.2 12s0-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.2 8.8 2.2 12 2.2zm0 3.65A6.15 6.15 0 1018.15 12 6.15 6.15 0 0012 5.85zm0 10.15A4 4 0 1116 12a4 4 0 01-4 4zm6.4-10.4a1.44 1.44 0 11-1.44-1.44 1.44 1.44 0 011.44 1.44z"/>
                    </svg>
                  </a>
                  <a href="#" aria-label="X">
                    <svg viewBox="0 0 24 24">
                      <path d="M18.9 2H22l-7.3 8.3L23 22h-6.8l-5.3-6.9L4.8 22H1.7l7.8-8.9L1 2h6.9l4.8 6.3L18.9 2zm-2.4 18h1.9L7.6 4H5.6l10.9 16z"/>
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

export default App
