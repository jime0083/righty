import { Link } from 'react-router-dom'
import { ScrollReveal } from '../components/ScrollReveal'
import { Footer } from '../components/Footer'
import '../JobDetail.css'

const BASE_URL = import.meta.env.BASE_URL

// Job data - can be extracted to a shared config for other job pages
const jobData = {
  eyebrow: 'Job',
  title: 'UI/UXデザイナー',
  lead: 'ユーザー体験の設計からUIデザインまで、\nプロダクトの価値を最大化します。',
  about: {
    description: 'ユーザーリサーチや情報設計をもとに、プロダクトの体験価値を設計・デザインします。ワイヤーフレームやプロトタイプの作成、UIデザイン、ユーザビリティテストの実施まで一貫して担当し、使いやすく魅力的なプロダクトづくりをリードします。',
    image: 'jd_desk.png'
  },
  manager: {
    message: 'UI/UXデザイナーは、ユーザーとプロダクトの最初の接点をつくる重要なポジションです。ライティでは、クライアントの課題に寄り添い、ユーザー視点で本質的な体験をデザインすることを大切にしています。リサーチからデザイン、検証まで一貫して関われる環境で、あなたのアイデアとスキルを発揮し、プロダクトの価値を一緒に高めていきましょう。',
    role: 'UI/UXデザインチーム マネージャー',
    name: '佐藤 大輔',
    image: 'intv_sato_hero.png',
    illustration: 'jd_illust.png'
  },
  interviews: [
    {
      image: 'jd_intv_woman.png',
      role: 'UI/UXデザイナー',
      name: '鈴木 美咲',
      year: '2022年入社',
      quote: 'ユーザーの心を動かす\nデザインを追求したい'
    },
    {
      image: 'jd_intv_man.png',
      role: 'UI/UXデザイナー',
      name: '田中 健太',
      year: '2021年入社',
      quote: 'デザインでビジネスの\n未来をつくりたい'
    }
  ]
}

function JobUiux() {
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
      <section className="page-hero jd-hero">
        <span className="jhero-blob"></span>
        <div className="wrap hero-grid">
          <nav className="side-nav">
            <Link to="/about"><span className="dot"></span>ライティについて</Link>
            <Link className="active" to="/jobs"><span className="dot"></span>職種紹介</Link>
            <Link to="/work"><span className="dot"></span>働く環境</Link>
            <Link to="/recruit"><span className="dot"></span>採用</Link>
          </nav>
          <div className="jhero">
            <ScrollReveal animation="fadeUp">
              <div className="f-eyebrow">{jobData.eyebrow}</div>
              <h1>{jobData.title}</h1>
            </ScrollReveal>
            <ScrollReveal animation="fadeUp" delay={0.1}>
              <p className="lead">{jobData.lead.split('\n').map((line, i) => (
                <span key={i}>{line}{i < jobData.lead.split('\n').length - 1 && <br />}</span>
              ))}</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="jabout">
        <div className="wrap jabout-grid">
          <div className="jabout-left">
            <ScrollReveal animation="fadeUp">
              <div className="f-eyebrow">About</div>
              <h2>職種紹介</h2>
            </ScrollReveal>
            <ScrollReveal animation="fadeUp" delay={0.1}>
              <p>{jobData.about.description}</p>
              <Link className="jbtn" to="/shinsotsu#youkou">募集要項を見る<span className="ar">→</span></Link>
            </ScrollReveal>
          </div>
          <div className="jabout-media">
            <ScrollReveal animation="scale">
              <span className="b-circle"></span>
              <span className="b-dots"></span>
              <img className="photo" src={`${BASE_URL}assets/images/${jobData.about.image}`} alt={`${jobData.title}の作業環境`} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* MANAGER MESSAGE */}
      <section className="jmsg">
        <div className="wrap">
          <ScrollReveal animation="fadeUp">
            <div className="jmsg-panel">
              <div className="jmsg-left">
                <div className="f-eyebrow">Message</div>
                <h2>マネージャーからのメッセージ</h2>
                <p>{jobData.manager.message}</p>
                <div className="jmsg-sign">
                  <img src={`${BASE_URL}assets/images/${jobData.manager.image}`} alt={jobData.manager.name} />
                  <div>
                    <div className="role">{jobData.manager.role}</div>
                    <div className="nm">{jobData.manager.name}</div>
                  </div>
                </div>
              </div>
              <div className="jmsg-illust">
                <img src={`${BASE_URL}assets/images/${jobData.manager.illustration}`} alt="" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* INTERVIEW */}
      <section className="jintv">
        <div className="wrap">
          <div className="jintv-head">
            <div>
              <ScrollReveal animation="fadeUp">
                <div className="f-eyebrow">Interview</div>
                <h2>社員の声</h2>
                <p className="sub">実際に働くメンバーのインタビューをご紹介します。</p>
              </ScrollReveal>
            </div>
            <a className="link-pill" href="#">すべてのインタビューを見る<span className="ar">→</span></a>
          </div>
          <div className="jintv-grid">
            {jobData.interviews.map((interview, i) => (
              <ScrollReveal key={i} animation="fadeUp" delay={i * 0.1}>
                <article className="jintv-card">
                  <div className="pic">
                    <img src={`${BASE_URL}assets/images/${interview.image}`} alt={interview.name} />
                  </div>
                  <div className="info">
                    <div className="role">{interview.role}</div>
                    <div className="who">{interview.name}</div>
                    <div className="yr">{interview.year}</div>
                    <p className="quote">{interview.quote.split('\n').map((line, j) => (
                      <span key={j}>{line}{j < interview.quote.split('\n').length - 1 && <br />}</span>
                    ))}</p>
                    <a className="more" href="#">詳しく見る<span className="ar">→</span></a>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default JobUiux
