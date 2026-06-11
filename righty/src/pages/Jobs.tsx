import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ScrollReveal } from '../components/ScrollReveal'
import '../Jobs.css'

const BASE_URL = import.meta.env.BASE_URL

function Jobs() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const jobCards = [
    {
      title: 'UI/UXデザイナー',
      description: 'ユーザー体験の設計からUIデザインまで、プロダクトの価値を最大化します。',
      image: `${BASE_URL}assets/images/job_uiux_crop.png`,
      imagePosition: '72% center',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M5 19l1-4L17 4l3 3L9 18l-4 1z" />
          <path d="M14.5 6.5l3 3" />
        </svg>
      ),
      tags: [
        { icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.5" /><path d="M5.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" /></svg>, label: 'ユーザーリサーチ' },
        { icon: <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M3 9h18" /></svg>, label: 'UI設計・デザイン' },
        { icon: <svg viewBox="0 0 24 24"><path d="M9 7l-5 5 5 5M15 7l5 5-5 5" /></svg>, label: 'プロトタイピング' }
      ]
    },
    {
      title: 'フロントエンドエンジニア',
      description: 'Webサイトやサービスのフロントエンド開発で、快適で魅力的な体験をつくります。',
      image: `${BASE_URL}assets/images/job_frontend_crop.png`,
      imagePosition: '62% center',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M9 8l-5 4 5 4M15 8l5 4-5 4" />
        </svg>
      ),
      tags: [
        { icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" /></svg>, label: 'Webアプリ開発' },
        { icon: <svg viewBox="0 0 24 24"><path d="M4 18l4-12M10 18l4-12M3 10h12M2 14h12" /></svg>, label: 'UI実装・パフォーマンス改善' },
        { icon: <svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="8" cy="10" r="1.6" /><path d="M5 17l4-4 3 2.5L16 11l3 3" /></svg>, label: 'デザインとの連携' }
      ]
    },
    {
      title: 'バックエンドエンジニア',
      description: '安定したシステム基盤を構築し、サービスの成長を支えます。',
      image: `${BASE_URL}assets/images/job_backend_crop.png`,
      imagePosition: 'center center',
      icon: (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 4v2M12 18v2M4 12h2M18 12h2M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M17.7 6.3l-1.4 1.4M7.7 16.3l-1.4 1.4" />
        </svg>
      ),
      tags: [
        { icon: <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="5" rx="1.5" /><rect x="3" y="11" width="18" height="5" rx="1.5" /><path d="M7 6.5h.01M7 13.5h.01" /></svg>, label: 'API・サーバー開発' },
        { icon: <svg viewBox="0 0 24 24"><ellipse cx="12" cy="6" rx="7" ry="3" /><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" /></svg>, label: 'データベース設計・運用' },
        { icon: <svg viewBox="0 0 24 24"><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" /></svg>, label: 'インフラ・セキュリティ' }
      ]
    },
    {
      title: 'ブランドデザイナー',
      description: 'ブランドの想いや価値を可視化し、心を動かすデザインをつくります。',
      image: `${BASE_URL}assets/images/job_brand_crop.png`,
      imagePosition: 'center 35%',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M4 20s1-4 4-7l8-8 3 3-8 8c-3 3-7 4-7 4z" />
          <path d="M14 6l4 4" />
        </svg>
      ),
      tags: [
        { icon: <svg viewBox="0 0 24 24"><path d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5z" /></svg>, label: 'ブランド戦略・設計' },
        { icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3.5" /></svg>, label: 'ロゴ・VI・グラフィック制作' },
        { icon: <svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h10M4 17h13" /></svg>, label: 'トーン&マナー開発' }
      ]
    },
    {
      title: 'プロジェクトマネージャー',
      description: 'プロジェクト全体をリードし、チームの力を最大限に引き出します。',
      image: `${BASE_URL}assets/images/job_pm_crop.png`,
      imagePosition: 'center 30%',
      icon: (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.4" />
        </svg>
      ),
      tags: [
        { icon: <svg viewBox="0 0 24 24"><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h5" /></svg>, label: '要件定義・スケジュール管理' },
        { icon: <svg viewBox="0 0 24 24"><path d="M4 5h12v9H8l-4 3z" /><path d="M9 18h7l4 3v-9h-3" /></svg>, label: 'チームコミュニケーション' },
        { icon: <svg viewBox="0 0 24 24"><path d="M9 12l2 2 4-5" /><circle cx="12" cy="12" r="9" /></svg>, label: '品質管理・課題解決' }
      ]
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
            <Link to="/about"><span className="dot"></span>ライティについて</Link>
            <Link to="/culture"><span className="dot"></span>カルチャー</Link>
            <Link className="active" to="/jobs"><span className="dot"></span>職種紹介</Link>
            <Link to="/work"><span className="dot"></span>働く環境</Link>
            <Link to="/#recruit"><span className="dot"></span>採用</Link>
          </nav>
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
                <article className="job-card">
                  <div className="job-img">
                    <img src={job.image} alt={job.title} style={{ objectPosition: job.imagePosition }} />
                    <span className="job-ic">{job.icon}</span>
                  </div>
                  <div className="job-body">
                    <h3>{job.title}</h3>
                    <p className="desc">{job.description}</p>
                    <div className="job-tags">
                      {job.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="job-tag">
                          {tag.icon}
                          {tag.label}
                        </span>
                      ))}
                    </div>
                    <a className="job-more" href="#">詳しく見る<span className="ar">→</span></a>
                  </div>
                </article>
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

      {/* Footer */}
      <footer className="foot jobs-foot">
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
                <Link to="/#recruit">選考フロー</Link>
                <a href="#">よくある質問</a>
              </div>
              <div className="foot-cta">
                <a className="fc-fill" href="#">エントリーする →</a>
                <a className="fc-out" href="#">採用に関するお問い合わせ</a>
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

export default Jobs
