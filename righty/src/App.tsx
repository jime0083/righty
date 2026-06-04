import './App.css'

function App() {
  const jobs = [
    {
      title: 'ブランドデザイナー',
      description: 'ブランドの価値を可視化し、ロゴやVIなどを通して一貫した体験を設計します。',
      image: '/assets/job_brand_crop.png',
      imagePosition: 'center 35%'
    },
    {
      title: 'UI/UXデザイナー',
      description: 'ユーザー起点で体験を設計し、使いやすく、美しいデジタル体験をつくります。',
      image: '/assets/job_uiux_crop.png',
      imagePosition: '72% center'
    },
    {
      title: 'フロントエンドエンジニア',
      description: 'デザインを正確に実装し、ユーザーにとって心地よいインターフェースを実現します。',
      image: '/assets/job_frontend_crop.png',
      imagePosition: '62% center'
    },
    {
      title: 'バックエンドエンジニア',
      description: 'システムの設計・開発を通して、安定性・拡張性の高い基盤をつくります。',
      image: '/assets/job_backend_crop.png',
      imagePosition: 'center center'
    },
    {
      title: 'プロジェクトマネージャー',
      description: 'チームとクライアントをつなぎ、プロジェクトを成功へと導く推進役を担います。',
      image: '/assets/office_meeting.png',
      imagePosition: 'center 45%'
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
        <span className="blob b-hero-1"></span>
        <span className="blob b-hero-2"></span>
        <span className="blob b-hero-3"></span>
        <span className="dots-hero"></span>
        <div className="wrap hero-grid">
          <nav className="side-nav">
            <a href="#about"><span className="dot"></span>ライティについて</a>
            <a href="#"><span className="dot"></span>カルチャー</a>
            <a href="#jobs"><span className="dot"></span>職種紹介</a>
            <a href="#work"><span className="dot"></span>働く環境</a>
            <a href="#recruit"><span className="dot"></span>採用</a>
          </nav>
          <div className="hero-photo-area">
            <div className="hero-copy">
              <span className="copy-circle"></span>
              <h1>つくりたいのは、<br/><span className="q">"つながり"</span>の先にある価値</h1>
              <p>ギフトは、社会のつながりを形づくる人間にとって根源的な営みです。<br/>
              時代とともに "おくりかた" や "受け取りかた" が変わっていく中で、<br/>
              この営みにはまだ大きな可能性が眠っていると信じています。<br/>
              だからこそ、私たちは新たな「問い」を立て続けていく必要があります。<br/>
              贈る人と受け取る人、その間に流れる気持ちのひとつひとつに目を向け、<br/>
              テクノロジーとデザインの力で、より豊かな体験へとかたちを変えていく。<br/>
              まだ誰も見たことのない価値を、私たちの手でつくり出していきたいと考えています。</p>
              <div className="btn-row">
                <a className="btn btn-fill" href="#jobs">募集職種を見る<span className="ar">→</span></a>
                <a className="btn btn-out" href="#about">ライティについて<span className="ar">→</span></a>
              </div>
            </div>
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
          <div className="about-text">
            <div className="eyebrow">About Righty</div>
            <h2>デザインとテクノロジーの力で、<br/>人とビジネスの可能性をひらく。</h2>
            <p>ライティは、ブランディングとUX設計を軸に、クライアントのビジネスの本質を捉え、価値ある体験をデザインする会社です。戦略から企画・デザイン・開発・グロースまでを一気通貫で行い、クライアントの伴走者として、共に未来をつくります。</p>
            <a className="link-out" href="#">ライティについて詳しく見る<span className="ar">→</span></a>
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section className="jobs" id="jobs">
        <div className="wrap">
          <div className="sec-title-c">Job Category</div>
          <div className="sec-jp">職種紹介</div>
          <div className="job-grid">
            {jobs.map((job, index) => (
              <article className="job-card" key={index}>
                <div className="job-img">
                  <img
                    src={job.image}
                    alt={job.title}
                    style={{ objectPosition: job.imagePosition }}
                  />
                </div>
                <div className="job-body">
                  <h3>{job.title}</h3>
                  <p>{job.description}</p>
                  <a className="job-more" href="#">詳しく見る<span className="ar">→</span></a>
                </div>
              </article>
            ))}
          </div>
          <div className="jobs-cta">
            <a className="link-out" href="#">すべての職種を見る<span className="ar">→</span></a>
          </div>
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
          <div className="work-left">
            <div className="eyebrow">Work Environment</div>
            <h2>人の可能性が、<br/>チームの力になる。</h2>
            <p>フラットでオープンな文化の中で、お互いを尊重し、挑戦を後押しし合う。ワークもライフも、あなたらしくデザインできる環境があります。</p>
            <a className="link-out" href="#">働く環境を見る<span className="ar">→</span></a>
          </div>
          <div className="feat-grid">
            {features.map((feat, index) => (
              <div className="feat" key={index}>
                <div className="ic">{feat.icon}</div>
                <div>
                  <h4>{feat.title}</h4>
                  <p>{feat.description}</p>
                </div>
              </div>
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
          <div className="recruit-text">
            <div className="eyebrow">Recruit</div>
            <h2>一緒に、未来の<br/>「<span className="q">あたりまえ</span>」をつくろう。</h2>
            <p>デザインの力で、社会にポジティブな変化を。<br/>あなたの挑戦を、ライティは待っています。</p>
            <a className="link-out" href="#">募集要項・エントリー<span className="ar">→</span></a>
          </div>
          <div className="recruit-visual">
            <span className="rv-circle"></span>
            <span className="rv-dots"></span>
            <div className="rv-photo">
              <img src="/assets/team.png" alt="チームメンバー" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="foot">
        <div className="wrap">
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
              <a href="#">私たちの想い</a>
              <a href="#">事業内容</a>
              <a href="#">プロジェクト</a>
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
              <a className="fc-out" href="#">採用に関するお問い合わせ</a>
            </div>
          </div>
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
        </div>
      </footer>
    </>
  )
}

export default App
