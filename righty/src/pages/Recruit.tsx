import { Link } from 'react-router-dom'
import { ScrollReveal } from '../components/ScrollReveal'
import { Footer } from '../components/Footer'
import '../Recruit.css'

const BASE_URL = import.meta.env.BASE_URL

function Recruit() {
  const interviews = [
    {
      role: 'UI/UXデザイナー',
      title: 'ユーザーの心を動かす体験を\nデザインしたい',
      description: 'ユーザーの声に向き合い、課題を解決するプロセスにやりがいを感じています。',
      image: `${BASE_URL}assets/images/job_uiux_crop.png`,
      imagePosition: '72% center'
    },
    {
      role: 'フロントエンドエンジニア',
      title: '技術でサービスの価値を\n最大化する',
      description: '新しい挑戦を学び合うから、チームでより良いプロダクトをつくっています。',
      image: `${BASE_URL}assets/images/job_frontend_crop.png`,
      imagePosition: '60% center'
    },
    {
      role: 'プロジェクトマネージャー',
      title: 'チームの力を引き出し、\n最高の成果へ',
      description: 'メンバーの強みを活かし、クライアントの成功に繋げることが喜びです。',
      image: `${BASE_URL}assets/images/job_pm_crop.png`,
      imagePosition: 'center 28%'
    }
  ]

  const jobs = [
    {
      slug: 'uiux',
      title: 'UI/UXデザイナー',
      description: 'ユーザー体験の設計からUIデザインまで、プロダクトの価値を最大化します。',
      image: `${BASE_URL}assets/images/job_uiux_crop.png`,
      imagePosition: '72% center'
    },
    {
      slug: 'frontend',
      title: 'フロントエンドエンジニア',
      description: 'Webサイトやサービスのフロントエンド開発で、魅力的な体験をつくります。',
      image: `${BASE_URL}assets/images/job_frontend_crop.png`,
      imagePosition: '62% center'
    },
    {
      slug: 'backend',
      title: 'バックエンドエンジニア',
      description: '安定したシステム基盤を構築し、サービスの成長を支えます。',
      image: `${BASE_URL}assets/images/job_backend_crop.png`,
      imagePosition: 'center center'
    },
    {
      slug: 'brand',
      title: 'ブランドデザイナー',
      description: 'ブランドの想いや価値を可視化し、心を動かすデザインをつくります。',
      image: `${BASE_URL}assets/images/job_brand_crop.png`,
      imagePosition: 'center 35%'
    },
    {
      slug: 'pm',
      title: 'プロジェクトマネージャー',
      description: 'プロジェクト全体をリードし、チームの力を最大限に引き出します。',
      image: `${BASE_URL}assets/images/job_pm_crop.png`,
      imagePosition: 'center 30%'
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
            <Link className="head-btn head-btn--dark" to="/jobs">募集職種一覧<span className="ar">→</span></Link>
            <Link className="head-btn head-btn--out" to="/shinsotsu">新卒採用<span className="ar">→</span></Link>
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
            <Link to="/about"><span className="dot"></span>ライティについて</Link>
            <Link to="/culture"><span className="dot"></span>カルチャー</Link>
            <Link to="/jobs"><span className="dot"></span>職種紹介</Link>
            <Link to="/work"><span className="dot"></span>働く環境</Link>
            <Link className="active" to="/recruit"><span className="dot"></span>採用</Link>
          </nav>
          <div className="hero-head">
            <img className="hero-dots" src={`${BASE_URL}assets/images/deco_dots_scatter.png`} alt="" />
            <ScrollReveal animation="fadeUp">
              <div className="f-eyebrow" style={{ marginBottom: '14px' }}>Recruit</div>
              <h1>採用</h1>
            </ScrollReveal>
            <ScrollReveal animation="fadeUp" delay={0.1}>
              <p>ライティの想いや目指す未来、<br />働く環境や仲間についてご紹介します。</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="message">
        <div className="wrap message-grid">
          <div className="message-left">
            <ScrollReveal animation="fadeUp">
              <div className="f-eyebrow">Message</div>
              <h2>デザインとテクノロジーで、<br />心を動かし、未来をつくる。</h2>
            </ScrollReveal>
            <ScrollReveal animation="fadeUp" delay={0.1}>
              <p>ライティは、デザインとテクノロジーの力で、人と企業の想いをカタチにする会社です。本質を見つめ、価値を生み、未来につながる体験をつくること。それが、私たちの使命であり、喜びです。</p>
              <p>変化の速い時代だからこそ、信じるのは「人の力」。個性を尊重し、挑戦を後押しし、チームで最高の未来をつくっていく。そんな仲間と出会えることを、楽しみにしています。</p>
              <div className="msg-sign">
                <span className="role">代表取締役<b>太田 健一</b></span>
                <span className="name">Kenichi Ota</span>
              </div>
              <Link className="msg-btn" to="/message">採用メッセージを読む<span className="ar">→</span></Link>
            </ScrollReveal>
          </div>
          <div className="message-photo">
            <ScrollReveal animation="scale">
              <img src={`${BASE_URL}assets/images/ceo_blob.png`} alt="代表取締役 太田健一" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="jobs-sec">
        <div className="wrap">
          <div className="intv-head">
            <div>
              <ScrollReveal animation="fadeUp">
                <div className="f-eyebrow">Jobs</div>
                <h2>職種紹介</h2>
                <p>デザインとテクノロジーを軸に、<br />多様な専門性を持つプロフェッショナルが集まっています。</p>
              </ScrollReveal>
            </div>
            <ScrollReveal animation="fadeUp" delay={0.1}>
              <Link className="link-pill" to="/jobs">すべての職種を見る<span className="ar">→</span></Link>
            </ScrollReveal>
          </div>
          <div className="job-grid">
            {jobs.map((job, index) => (
              <ScrollReveal key={index} animation="fadeUp" delay={index * 0.08}>
                <article className="job-card">
                  <div className="job-img">
                    <img src={job.image} alt={job.title} style={{ objectPosition: job.imagePosition }} />
                  </div>
                  <div className="job-body">
                    <h3>{job.title}</h3>
                    <p className="desc">{job.description}</p>
                    <Link className="job-more" to={`/jobs/${job.slug}`}>詳しく見る<span className="ar">→</span></Link>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interview Section */}
      <section className="interview">
        <div className="wrap">
          <div className="intv-head">
            <div>
              <ScrollReveal animation="fadeUp">
                <div className="f-eyebrow">Interview</div>
                <h2>インタビュー</h2>
                <p>ライティで働くメンバーに、<br />仕事のやりがいやチームの雰囲気について聞きました。</p>
              </ScrollReveal>
            </div>
            <ScrollReveal animation="fadeUp" delay={0.1}>
              <a className="link-pill" href="#">すべてのインタビューを見る<span className="ar">→</span></a>
            </ScrollReveal>
          </div>
          <div className="intv-grid">
            {interviews.map((interview, index) => (
              <ScrollReveal key={index} animation="fadeUp" delay={index * 0.1}>
                <article className="icard">
                  <div className="img">
                    <img src={interview.image} alt={interview.role} style={{ objectPosition: interview.imagePosition }} />
                  </div>
                  <div className="body">
                    <div className="role">{interview.role}</div>
                    <h3>{interview.title.split('\n').map((line, i) => (
                      <span key={i}>{line}{i === 0 && <br />}</span>
                    ))}</h3>
                    <p className="desc">{interview.description}</p>
                    <a className="more" href="#">詳しく見る<span className="ar">→</span></a>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
          <div className="intv-dots">
            <span className="on"></span><span></span><span></span><span></span><span></span>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Recruit
