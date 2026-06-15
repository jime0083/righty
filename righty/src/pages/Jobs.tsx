import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ScrollReveal } from '../components/ScrollReveal'
import { Footer } from '../components/Footer'
import { JobCard, type JobCardData } from '../components/JobCard'
import { SideNav } from '../components/SideNav'
import '../Jobs.css'

const BASE_URL = import.meta.env.BASE_URL

function Jobs() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const jobCards: JobCardData[] = [
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
      description: 'Webサイトやサービスのフロントエンド開発で、快適で魅力的な体験をつくります。',
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
      slug: 'sales',
      title: 'セールス',
      description: 'クライアントの課題を深く理解し、最適なソリューションを提案します。',
      image: `${BASE_URL}assets/images/cult_connect.png`,
      imagePosition: 'center center'
    },
    {
      slug: 'marketing',
      title: 'マーケティング',
      description: 'データと創造性を駆使し、サービスの成長を加速させます。',
      image: `${BASE_URL}assets/images/cult_change.png`,
      imagePosition: 'center center'
    },
    {
      slug: 'planner',
      title: 'プランナー',
      description: 'クライアントの課題を紐解き、最適なソリューションを設計します。',
      image: `${BASE_URL}assets/images/cult_confident.png`,
      imagePosition: 'center center'
    }
  ]

  const faqItems = [
    {
      question: '未経験でも応募できますか？',
      answer: 'ポテンシャルを重視した採用も行っています。これまでのご経験やスキルに加え、学ぶ意欲やカルチャーへの共感を大切にしていますので、未経験の方もお気軽にご応募ください。'
    },
    {
      question: '選考の流れを教えてください。',
      answer: '書類選考 → 一次面接 → 二次面接 → 最終面接 → 内定、という流れが基本です。職種によって課題やワークサンプルの提出をお願いする場合があります。'
    },
    {
      question: 'リモートワークは可能ですか？',
      answer: 'ハイブリッド勤務を導入しており、リモートワークと出社を組み合わせた柔軟な働き方が可能です。チームやプロジェクトの状況に応じて調整しています。'
    },
    {
      question: '評価制度について教えてください。',
      answer: '半期ごとの目標設定と振り返りを行い、成果とプロセスの両面から評価します。定期的な1on1を通じて、成長を継続的にサポートします。'
    },
    {
      question: '副業は可能ですか？',
      answer: '申請のうえ、本業に支障のない範囲で副業を認めています。社外での経験が本人の成長やチームへの還元につながることを歓迎しています。'
    }
  ]

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

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
          <SideNav />
          <div className="hero-head">
            <img className="hero-dots" src={`${BASE_URL}assets/images/deco_dots_scatter.png`} alt="" />
            <ScrollReveal animation="fadeUp">
              <div className="f-eyebrow" style={{ marginBottom: '14px' }}>Jobs</div>
              <h1>職種紹介</h1>
            </ScrollReveal>
            <ScrollReveal animation="fadeUp" delay={0.1}>
              <p>ライティには、デザインとテクノロジーを軸に<br />多様な専門性を持つプロフェッショナルが集まっています。<br />あなたの得意を活かせるフィールドが、きっと見つかります。</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Jobs Intro */}
      <section className="jobs-intro">
        <div className="wrap">
          <ScrollReveal animation="fadeUp">
            <h2>私たちの仕事と役割</h2>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" delay={0.1}>
            <p>クライアントの課題を深く理解し、アイデアを形にする。<br />企画から設計、実装、運用まで、チームで価値をつくり、届けています。</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Job Cards */}
      <section className="jobs-sec">
        <div className="wrap">
          <div className="job-grid">
            {jobCards.map((job, index) => (
              <ScrollReveal key={index} animation="fadeUp" delay={index * 0.1}>
                <JobCard job={job} />
              </ScrollReveal>
            ))}
          </div>
          <div className="jobs-cta">
            <ScrollReveal animation="fadeUp">
              <a href="#">すべての募集職種を見る<span className="ar">→</span></a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="wrap">
          <ScrollReveal animation="fadeUp">
            <div className="f-eyebrow">FAQ</div>
            <h2>よくあるご質問</h2>
          </ScrollReveal>
          <div className="faq-list">
            {faqItems.map((item, index) => (
              <ScrollReveal key={index} animation="fadeUp" delay={index * 0.05}>
                <div className={`faq-item ${openFaq === index ? 'open' : ''}`}>
                  <button className="faq-q" onClick={() => toggleFaq(index)}>
                    {item.question}
                    <span className="pm"></span>
                  </button>
                  <div
                    className="faq-a"
                    style={{ maxHeight: openFaq === index ? '200px' : '0' }}
                  >
                    <div className="faq-a-inner">{item.answer}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Jobs
