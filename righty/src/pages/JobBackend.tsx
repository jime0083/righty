import { Link } from 'react-router-dom'
import { ScrollReveal } from '../components/ScrollReveal'
import { Footer } from '../components/Footer'
import { SideNav } from '../components/SideNav'
import '../JobDetail.css'

const BASE_URL = import.meta.env.BASE_URL

const jobData = {
  eyebrow: 'Job',
  title: 'バックエンドエンジニア',
  lead: '安定したシステム基盤を構築し、\nサービスの成長を支えます。',
  about: {
    description: 'サーバーサイドの設計・開発からデータベース設計、インフラ構築まで幅広く担当します。スケーラブルで信頼性の高いシステムを構築し、サービスの安定運用と成長を技術面から支えます。セキュリティやパフォーマンスを意識した実装で、ユーザーに安心して使っていただけるプロダクトをつくります。',
    image: 'job_backend_crop.png'
  },
  manager: {
    message: 'バックエンドエンジニアは、サービスの根幹を支える重要なポジションです。ライティでは、技術的な挑戦を楽しみながら、ビジネスの成長に直結する開発に携わることができます。チームで議論しながらアーキテクチャを設計し、品質の高いコードを書くことを大切にしています。一緒に堅牢で拡張性のあるシステムをつくりましょう。',
    role: 'バックエンドチーム マネージャー',
    name: '高橋 健太',
    image: 'intv_sato_hero.png',
    illustration: 'jd_illust.png'
  },
  interviews: [
    {
      image: 'jd_intv_man.png',
      role: 'バックエンドエンジニア',
      name: '中村 翔太',
      year: '2022年入社',
      quote: '技術で事業の成長を\n支えていきたい'
    },
    {
      image: 'jd_intv_woman.png',
      role: 'バックエンドエンジニア',
      name: '伊藤 真由',
      year: '2021年入社',
      quote: '挑戦と学びが\n日々の成長につながる'
    }
  ]
}

function JobBackend() {
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
          <SideNav />
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

export default JobBackend
