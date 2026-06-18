import { Link } from 'react-router-dom'
import { ScrollReveal } from '../components/ScrollReveal'
import { Footer } from '../components/Footer'
import { JobSlider } from '../components/JobSlider'
import { type JobCardData } from '../components/JobCard'
import { InterviewSlider } from '../components/InterviewSlider'
import { type InterviewCardData } from '../components/InterviewCard'
import { SideNav } from '../components/SideNav'
import { Header } from '../components/Header'
import '../Recruit.css'

const BASE_URL = import.meta.env.BASE_URL

function Recruit() {
  const interviews: InterviewCardData[] = [
    // UI/UXデザイナー
    {
      image: `${BASE_URL}assets/images/木村正弘1.png`,
      role: 'UI/UXデザイナー',
      name: '木村 正弘',
      year: '2019年入社',
      quote: 'ユーザーの本質的な\n課題に向き合う',
      link: '/interview/kimura-masahiro'
    },
    {
      image: `${BASE_URL}assets/images/森真琴1.png`,
      role: 'UI/UXデザイナー',
      name: '森 真琴',
      year: '2022年入社',
      quote: 'デザインで\nビジネスの未来をつくる',
      link: '/interview/mori-makoto'
    },
    // フロントエンドエンジニア
    {
      image: `${BASE_URL}assets/images/高橋歩美1.png`,
      role: 'フロントエンドエンジニア',
      name: '高橋 歩美',
      year: '2022年入社',
      quote: '「思いを、かたちにできる」\nプロダクトをつくる',
      link: '/interview/takahashi-ayumi'
    },
    {
      image: `${BASE_URL}assets/images/藤原幸樹1.png`,
      role: 'フロントエンドエンジニア',
      name: '藤原 幸樹',
      year: '2021年入社',
      quote: 'チームで学び合いながら\n成長できる環境',
      link: '/interview/fujiwara-koki'
    },
    // バックエンドエンジニア
    {
      image: `${BASE_URL}assets/images/神谷翔1.png`,
      role: 'バックエンドエンジニア',
      name: '神谷 翔',
      year: '2020年入社',
      quote: '堅牢なシステムで\nサービスの成長を支える',
      link: '/interview/kamiya-sho'
    },
    {
      image: `${BASE_URL}assets/images/佐藤美紀1.png`,
      role: 'バックエンドエンジニア',
      name: '佐藤 美紀',
      year: '2021年入社',
      quote: '挑戦と学びが\n日々の成長につながる',
      link: '/interview/sato-miki'
    },
    // セールス
    {
      image: `${BASE_URL}assets/images/新井忠弘1.png`,
      role: 'セールス',
      name: '新井 忠弘',
      year: '2020年入社',
      quote: 'クライアントの成功が\n自分の喜びになる',
      link: '/interview/arai-tadahiro'
    },
    {
      image: `${BASE_URL}assets/images/多田勉1.png`,
      role: 'セールス',
      name: '多田 勉',
      year: '2021年入社',
      quote: '提案を通じて\nビジネスを動かす',
      link: '/interview/tada-tsutomu'
    },
    // マーケティング
    {
      image: `${BASE_URL}assets/images/新垣悟1.png`,
      role: 'マーケティング',
      name: '新垣 悟',
      year: '2020年入社',
      quote: 'データから\nユーザーの声を読み解く',
      link: '/interview/aragaki-satoru'
    },
    {
      image: `${BASE_URL}assets/images/立川春香1.png`,
      role: 'マーケティング',
      name: '立川 春香',
      year: '2022年入社',
      quote: '施策の成果が\n数字で見える面白さ',
      link: '/interview/tachikawa-haruka'
    },
    // プランナー
    {
      image: `${BASE_URL}assets/images/野原千夏1.png`,
      role: 'プランナー',
      name: '野原 千夏',
      year: '2021年入社',
      quote: 'アイデアを形にする\nプロセスが面白い',
      link: '/interview/nohara-chinatsu'
    },
    {
      image: `${BASE_URL}assets/images/大山夏姫1.png`,
      role: 'プランナー',
      name: '大山 夏姫',
      year: '2022年入社',
      quote: 'チームで価値を\n生み出す喜び',
      link: '/interview/oyama-natsuki'
    }
  ]

  const jobs: JobCardData[] = [
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
      description: 'Webサイトやサービスのフロントエンド開発で、魅力的な体験をつくります。',
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
          <ScrollReveal animation="fadeUp">
            <div className="f-eyebrow">Jobs</div>
            <h2>職種紹介</h2>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" delay={0.1}>
            <p className="jobs-sec-desc">デザインとテクノロジーを軸に、<br />多様な専門性を持つプロフェッショナルが集まっています。</p>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" delay={0.3}>
            <JobSlider jobs={jobs} />
          </ScrollReveal>
        </div>
      </section>

      {/* Interview Section */}
      <section className="interview">
        <div className="wrap">
          <div className="intv-head">
            <div>
              <ScrollReveal animation="fadeUp">
                <div className="f-eyebrow">Interview</div>
                <h2>社員の声</h2>
                <p>ライティで働くメンバーに、<br />仕事のやりがいやチームの雰囲気について聞きました。</p>
              </ScrollReveal>
            </div>
            <ScrollReveal animation="fadeUp" delay={0.1}>
              <a className="link-pill" href="#">すべてのインタビューを見る<span className="ar">→</span></a>
            </ScrollReveal>
          </div>
          <ScrollReveal animation="fadeUp" delay={0.2}>
            <InterviewSlider interviews={interviews} />
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Recruit
