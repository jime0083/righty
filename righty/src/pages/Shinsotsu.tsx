import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ScrollReveal } from '../components/ScrollReveal'
import { Footer } from '../components/Footer'
import '../Shinsotsu.css'

const BASE_URL = import.meta.env.BASE_URL

interface FaqItem {
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    question: '応募資格を教えてください。',
    answer: '2026年3月までに四年制大学・大学院・高等専門学校・専門学校を卒業（修了）見込みの方を対象としています。学部・学科は問いません。ポテンシャルと意欲を重視した選考を行っています。'
  },
  {
    question: '選考の流れを教えてください。',
    answer: 'エントリー → 書類選考 → 一次面接 → 二次面接 → 最終面接 → 内定、という流れが基本です。職種によっては課題やワークサンプルの提出をお願いする場合があります。'
  },
  {
    question: '配属はどのように決まりますか？',
    answer: 'ご本人の希望・適性・選考過程での対話をもとに決定します。入社後の研修やOJTを通じて、最適なチームへ配属します。'
  },
  {
    question: '研修制度について教えてください。',
    answer: '入社後にビジネス研修・職種別研修を実施し、その後はメンターによるOJTでサポートします。書籍購入補助や外部セミナー参加補助など、学びを支える制度も整えています。'
  },
  {
    question: 'リモートワークは可能ですか？',
    answer: 'ハイブリッド勤務を導入しており、原則週2回の出社を基本に、リモートワークと組み合わせた柔軟な働き方が可能です。'
  }
]

const interviewCards = [
  {
    img: 'job_frontend_crop.png',
    imgPosition: '60% center',
    role: 'フロントエンドエンジニア',
    name: '佐藤 大輝',
    year: '2023年入社',
    title: '挑戦する文化が、成長を加速させる',
    desc: '学生時代の制作経験を活かし、より高度な領域に挑戦したいという想いでライティを選びました。'
  },
  {
    img: 'job_uiux_crop.png',
    imgPosition: '72% center',
    role: 'UI/UXデザイナー',
    name: '鈴木 美咲',
    year: '2023年入社',
    title: 'ユーザーの心を動かすデザインを',
    desc: '実際のプロジェクトでユーザーの反応を知るたびに、デザインの面白さを実感しています。'
  },
  {
    img: 'job_pm_crop.png',
    imgPosition: 'center 28%',
    role: 'バックエンドエンジニア',
    name: '髙橋 健太',
    year: '2023年入社',
    title: '技術で事業の成長を支えたい',
    desc: '安定したシステムをつくることで、サービスの成長に貢献できることにやりがいを感じています。'
  }
]

const jobCards = [
  {
    slug: 'uiux',
    icon: <svg viewBox="0 0 24 24"><path d="M5 19l1-4L17 4l3 3L9 18l-4 1z"/><path d="M14.5 6.5l3 3"/></svg>,
    title: 'UI/UXデザイナー',
    desc: 'ユーザー体験の設計からUIデザインまで、プロダクトの価値を最大化します。'
  },
  {
    slug: 'frontend',
    icon: <svg viewBox="0 0 24 24"><path d="M9 8l-5 4 5 4M15 8l5 4-5 4"/></svg>,
    title: 'フロントエンドエンジニア',
    desc: 'Webサイトやサービスのフロントエンド開発で、快適で魅力的な体験をつくります。'
  },
  {
    slug: 'backend',
    icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18"/></svg>,
    title: 'バックエンドエンジニア',
    desc: '安定したシステム基盤を構築し、サービスの成長を支えます。'
  },
  {
    slug: 'pm',
    icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4"/></svg>,
    title: 'プロジェクトマネージャー',
    desc: 'プロジェクト全体をリードし、チームの力を最大限に引き出します。'
  }
]

function Shinsotsu() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

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
            <Link className="head-btn head-btn--out active" to="/shinsotsu">新卒採用<span className="ar">→</span></Link>
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
          <nav className="side-nav shin-nav">
            <a href="#message"><span className="dot"></span>代表メッセージ</a>
            <a href="#interview"><span className="dot"></span>インタビュー</a>
            <a href="#jobs"><span className="dot"></span>職種紹介</a>
            <a href="#youkou"><span className="dot"></span>募集要項</a>
            <a href="#faq"><span className="dot"></span>よくあるご質問</a>
          </nav>
          <div className="hero-head">
            <img className="hero-dots" src={`${BASE_URL}assets/images/deco_dots_scatter.png`} alt="" />
            <ScrollReveal animation="fadeUp">
              <div className="f-eyebrow" style={{ marginBottom: '14px' }}>Recruit</div>
              <h1>新卒採用</h1>
            </ScrollReveal>
            <ScrollReveal animation="fadeUp" delay={0.1}>
              <p>未来のライティを担う、<br />新しい仲間を募集しています。</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* MESSAGE */}
      <section className="shin-message" id="message">
        <div className="wrap message-grid">
          <div className="message-left">
            <ScrollReveal animation="fadeUp">
              <div className="f-eyebrow">Message</div>
              <h2>未来をつくるのは、<br />いつだって"人"です。</h2>
            </ScrollReveal>
            <ScrollReveal animation="fadeUp" delay={0.1}>
              <p>あなたの好奇心と行動力が、ライティの未来をつくります。<br />一緒に、ワクワクする未来を描きましょう。</p>
              <Link className="msg-btn" to="/message">メッセージを読む<span className="ar">→</span></Link>
            </ScrollReveal>
          </div>
          <div className="message-photo">
            <ScrollReveal animation="scale">
              <img src={`${BASE_URL}assets/images/ceo_blob.png`} alt="代表取締役" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* INTERVIEW */}
      <section className="shin-interview" id="interview">
        <div className="wrap">
          <div className="intv-head">
            <div>
              <ScrollReveal animation="fadeUp">
                <div className="f-eyebrow">Interview</div>
                <h2>新入社員インタビュー</h2>
                <p>ライティで働く新入社員に、<br />入社の決め手や成長を感じた瞬間について聞きました。</p>
              </ScrollReveal>
            </div>
            <a className="link-pill" href="#">すべてのインタビューを見る<span className="ar">→</span></a>
          </div>
          <div className="intv-grid">
            {interviewCards.map((card, i) => (
              <ScrollReveal key={i} animation="fadeUp" delay={i * 0.1}>
                <article className="icard">
                  <div className="img">
                    <img src={`${BASE_URL}assets/images/${card.img}`} alt={card.role} style={{ objectPosition: card.imgPosition }} />
                  </div>
                  <div className="body">
                    <div className="role">{card.role}</div>
                    <div className="who">{card.name} <span>{card.year}</span></div>
                    <h3>{card.title}</h3>
                    <p className="desc">{card.desc}</p>
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

      {/* JOBS */}
      <section className="shin-jobs" id="jobs">
        <div className="wrap">
          <div className="intv-head">
            <div>
              <ScrollReveal animation="fadeUp">
                <div className="f-eyebrow">Jobs</div>
                <h2>職種紹介</h2>
                <p>デザインとテクノロジーを軸に、<br />多様な専門性を持つプロフェッショナルが集まっています。</p>
              </ScrollReveal>
            </div>
            <Link className="link-pill" to="/jobs">すべての職種を見る<span className="ar">→</span></Link>
          </div>
          <div className="jobs4-grid">
            {jobCards.map((card, i) => (
              <ScrollReveal key={i} animation="fadeUp" delay={i * 0.1}>
                <article className="jcard">
                  <span className="ic">{card.icon}</span>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                  <Link className="more" to={`/jobs/${card.slug}`}>詳しく見る<span className="ar">→</span></Link>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 募集要項 */}
      <section className="youkou" id="youkou">
        <div className="wrap">
          <ScrollReveal animation="fadeUp">
            <div className="f-eyebrow">Recruit</div>
            <h2>募集要項</h2>
          </ScrollReveal>
          <div className="youkou-grid">
            <ScrollReveal animation="scale">
              <img className="youkou-photo" src={`${BASE_URL}assets/images/cult_yoshinani.png`} alt="オフィス" />
            </ScrollReveal>
            <ScrollReveal animation="fadeUp" delay={0.1}>
              <dl className="spec">
                <div className="spec-row">
                  <dt>雇用形態</dt>
                  <dd>正社員</dd>
                </div>
                <div className="spec-row">
                  <dt>試用期間</dt>
                  <dd>あり（3ヶ月）</dd>
                </div>
                <div className="spec-row">
                  <dt>給与</dt>
                  <dd>
                    年収：4,329,000円〜<br />
                    月給：333,000円〜（基本給：258,336円〜／固定残業代：74,664円〜）
                    <span className="sub">※固定残業代は40時間相当分、それを超える時間外労働分についての割増賃金は追加で支給</span>
                  </dd>
                </div>
                <div className="spec-row">
                  <dt>賞与（基本報酬）</dt>
                  <dd>
                    月給1ヶ月分
                    <span className="sub">※会社業績・業績への貢献度、勤怠状況等を勘案し、プラスで支給される場合あり</span>
                  </dd>
                </div>
                <div className="spec-row">
                  <dt>福利厚生</dt>
                  <dd>
                    標準労働時間：1日8時間（休憩時間：1時間）
                    <span className="sub">
                      ・フレックスタイム制（コアタイム11:00〜16:00を除き、5:00〜11:00／16:00〜22:00の出退勤可能な時間帯）<br />
                      ・リモートワーク可（原則週2回出社）
                    </span>
                  </dd>
                </div>
                <div className="spec-row">
                  <dt>勤務地</dt>
                  <dd>東京本社（東京都品川区東五反田2-10-2 東五反田スクエア）</dd>
                </div>
              </dl>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="wrap">
          <ScrollReveal animation="fadeUp">
            <div className="f-eyebrow">FAQ</div>
            <h2>よくあるご質問</h2>
          </ScrollReveal>
          <div className="faq-list">
            {faqItems.map((item, i) => (
              <ScrollReveal key={i} animation="fadeUp" delay={i * 0.05}>
                <div className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                  <button className="faq-q" onClick={() => toggleFaq(i)}>
                    {item.question}
                    <span className="pm"></span>
                  </button>
                  <div
                    className="faq-a"
                    style={{ maxHeight: openFaq === i ? '200px' : '0' }}
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

export default Shinsotsu
