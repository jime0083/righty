import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { ScrollReveal } from '../components/ScrollReveal'
import { Footer } from '../components/Footer'
import { SideNav } from '../components/SideNav'
import '../Interview.css'

const BASE_URL = import.meta.env.BASE_URL

const interviewData = {
  eyebrow: 'Interview',
  catchTitle: ['「思いを、かたちにできる」', 'プロダクトをつくる'],
  lead: 'プロダクトを通して、ユーザーの人生に\n長く寄り添える価値をつくりたい。',
  person: {
    nameJp: '高橋 歩美',
    nameEn: 'Ayumi Takahashi',
    role: 'フロントエンドエンジニア',
    year: '2022年入社',
    bio: '学生時代は情報工学を専攻。\nWebサービスの開発に興味を持ち、\nライティに新卒入社。現在はフロントエンドエンジニアとして、\nユーザー体験を向上させるUI開発に携わる。'
  },
  heroImage: `${BASE_URL}assets/images/高橋歩美1.png`,
  qaImage: `${BASE_URL}assets/images/高橋歩美2.png`,
  qaList: [
    {
      question: 'ライティに入社した理由',
      answer: 'ライティのプロダクトは、デザインとテクノロジーの力で、ユーザーの課題を本質的に解決している点に魅力を感じました。単に「つくる」のではなく、ユーザーの体験に寄り添い、長く使い続けてもらえるプロダクトを生み出していることに強く惹かれました。また、年次に関係なく挑戦できる環境や、チームの雰囲気の良さも入社の決め手になりました。'
    },
    {
      question: '現在の仕事内容',
      answer: 'フロントエンドエンジニアとして、Webアプリケーションの設計・開発を担当しています。デザイナーやバックエンドエンジニアと連携しながら、ユーザーにとって直感的で心地よいUI/UXを実現することを意識しています。技術選定やパフォーマンス改善にも関わり、より良い体験を届けるための仕組みづくりにも取り組んでいます。'
    },
    {
      question: 'やりがいを感じる瞬間',
      answer: '自分が関わった機能がリリースされ、ユーザーから「使いやすい」「助かった」という声をいただいたときに、この仕事のやりがいを強く感じます。プロダクトが成長し、多くの人の役に立っている実感が、日々のモチベーションにつながっています。'
    }
  ],
  summary: [
    {
      title: '成長を実感したこと',
      text: '入社当初は、目の前の実装で精一杯でしたが、今ではプロダクト全体を見て、ユーザー体験やビジネスの課題を考えながら開発できるようになりました。技術力だけでなく、視野や考え方も広がったと感じています。'
    },
    {
      title: 'ライティの好きなところ',
      text: '挑戦を後押ししてくれる文化があるところです。「やってみたい」と手を挙げれば、年次に関係なくチャレンジできる環境が整っています。また、困ったときにすぐに相談できる雰囲気があり、チーム全体で成長していける会社だと思います。'
    },
    {
      title: '大切にしていること',
      text: 'ユーザー視点を忘れないことを大切にしています。技術的に正しい実装よりも、ユーザーにとって価値のある体験を提供できるかを常に考えています。チームでのコミュニケーションも重視し、信頼し合える関係を築くことを心がけています。'
    },
    {
      title: '未来の仲間へメッセージ',
      text: 'ライティは、プロダクトを通じて多くの人の人生にポジティブな影響を与えられる会社です。自分のアイデアや技術で、ユーザーの「うれしい」をつくりたい人と、ぜひ一緒に働きたいです！'
    }
  ]
}

function InterviewTakahashi() {
  return (
    <>
      <Header />

      {/* Page Hero */}
      <section className="page-hero intv-hero">
        <span className="hero-blob"></span>
        <div className="wrap hero-grid">
          <SideNav />
          <div className="ihero">
            <div className="ihero-left">
              <ScrollReveal animation="fadeUp">
                <div className="f-eyebrow">{interviewData.eyebrow}</div>
                <h1>
                  {interviewData.catchTitle.map((line, i) => (
                    <span key={i}>{line}</span>
                  ))}
                </h1>
              </ScrollReveal>
              <ScrollReveal animation="fadeUp" delay={0.1}>
                <p className="lead">
                  {interviewData.lead.split('\n').map((line, i) => (
                    <span key={i}>{line}{i < interviewData.lead.split('\n').length - 1 && <br />}</span>
                  ))}
                </p>
              </ScrollReveal>
              <ScrollReveal animation="fadeUp" delay={0.2}>
                <div className="person">
                  <div className="nm">
                    <span className="jp">{interviewData.person.nameJp}</span>
                    <span className="ro">{interviewData.person.nameEn}</span>
                  </div>
                  <div className="meta">
                    {interviewData.person.role}
                    <span className="yr">{interviewData.person.year}</span>
                  </div>
                  <p className="bio">
                    {interviewData.person.bio.split('\n').map((line, i) => (
                      <span key={i}>{line}{i < interviewData.person.bio.split('\n').length - 1 && <br />}</span>
                    ))}
                  </p>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal animation="scale" delay={0.15}>
              <div className="ihero-photo">
                <span className="blob"></span>
                <span className="blob2"></span>
                <span className="dots"></span>
                <div className="photo">
                  <img src={interviewData.heroImage} alt={interviewData.person.nameJp} />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* QA Section */}
      <section className="qa">
        <div className="wrap qa-grid">
          <ScrollReveal animation="scale">
            <div className="qa-photo">
              <span className="blob"></span>
              <span className="dots"></span>
              <div className="photo">
                <img src={interviewData.qaImage} alt={`作業中の${interviewData.person.nameJp}`} />
              </div>
            </div>
          </ScrollReveal>
          <div className="qa-list">
            {interviewData.qaList.map((item, i) => (
              <ScrollReveal key={i} animation="fadeUp" delay={i * 0.1}>
                <div className="qa-block">
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="summary">
        <div className="wrap">
          <div className="summary-panel">
            {interviewData.summary.map((item, i) => (
              <ScrollReveal key={i} animation="fadeUp" delay={i * 0.08}>
                <div className="sblock">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Job Page */}
      <section className="intv-back">
        <div className="wrap">
          <Link className="back-link" to="/jobs/frontend">
            <span className="ar">←</span>
            フロントエンドエンジニアのページに戻る
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default InterviewTakahashi
