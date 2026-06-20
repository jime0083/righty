import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ScrollReveal } from '../components/ScrollReveal'
import { Footer } from '../components/Footer'
import { JobSlider } from '../components/JobSlider'
import { type JobCardData } from '../components/JobCard'
import { InterviewSlider } from '../components/InterviewSlider'
import { type InterviewCardData } from '../components/InterviewCard'
import { SideNav } from '../components/SideNav'
import { Header } from '../components/Header'
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

const newGradInterviews: InterviewCardData[] = [
  {
    image: `${BASE_URL}assets/images/高橋歩美1.png`,
    role: 'フロントエンドエンジニア',
    name: '高橋 歩美',
    year: '2022年入社',
    quote: '「思いを、かたちにできる」\nプロダクトをつくる',
    link: '/interview/takahashi-ayumi'
  },
  {
    image: `${BASE_URL}assets/images/木村正弘1.png`,
    role: 'UI/UXデザイナー',
    name: '木村 正弘',
    year: '2019年入社',
    quote: 'ユーザーの本質的な\n課題に向き合う',
    link: '/interview/kimura-masahiro'
  },
  {
    image: `${BASE_URL}assets/images/藤原幸樹3.png`,
    role: 'フロントエンドエンジニア',
    name: '藤原 幸樹',
    year: '2021年入社',
    quote: 'チームで学び合いながら\n成長できる環境',
    link: '/interview/fujiwara-koki'
  },
  {
    image: `${BASE_URL}assets/images/森真琴1.png`,
    role: 'UI/UXデザイナー',
    name: '森 真琴',
    year: '2022年入社',
    quote: 'デザインで\nビジネスの未来をつくる',
    link: '/interview/mori-makoto'
  }
]

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

function Shinsotsu() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <>
      <Header />

      {/* Page Hero */}
      <section className="page-hero">
        <span className="hero-blob"></span>
        <div className="wrap hero-grid">
          <SideNav />
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
      <section className="interview" id="interview">
        <div className="wrap">
          <div className="intv-head">
            <div>
              <ScrollReveal animation="fadeUp">
                <div className="f-eyebrow">Voice</div>
                <h2>新入社員の声</h2>
                <p>ライティで働く若手社員に、<br />入社の決め手や成長を感じた瞬間について聞きました。</p>
              </ScrollReveal>
            </div>
          </div>
          <ScrollReveal animation="fadeUp" delay={0.1}>
            <InterviewSlider interviews={newGradInterviews} />
          </ScrollReveal>
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
          <ScrollReveal animation="fadeUp" delay={0.1}>
            <JobSlider jobs={jobCards} />
          </ScrollReveal>
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
