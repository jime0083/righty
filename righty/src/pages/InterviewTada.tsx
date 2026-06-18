import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { ScrollReveal } from '../components/ScrollReveal'
import { Footer } from '../components/Footer'
import { SideNav } from '../components/SideNav'
import '../Interview.css'

const BASE_URL = import.meta.env.BASE_URL

const interviewData = {
  eyebrow: 'Interview',
  catchTitle: ['提案を通じて', 'ビジネスを動かす'],
  lead: '課題の本質を見極め、\n最適なソリューションを届けたい。',
  person: {
    nameJp: '多田 勉',
    nameEn: 'Tsutomu Tada',
    role: 'セールス',
    year: '2021年入社',
    bio: '商学部卒業後、人材系企業で法人営業を経験。\n課題解決型の提案に興味を持ち、\nよりクリエイティブな領域で力を発揮したいと考え転職。\n現在は中小企業から大手まで幅広く担当。'
  },
  heroImage: `${BASE_URL}assets/images/多田勉1.png`,
  qaImage: `${BASE_URL}assets/images/多田勉2.png`,
  qaList: [
    {
      question: 'ライティに入社した理由',
      answer: '前職では人材サービスの提案をしていましたが、もっとクリエイティブな価値を届ける仕事がしたいと思っていました。ライティは、デザインとテクノロジーを組み合わせて企業の課題を解決している点に魅力を感じました。また、若手にも大きな裁量を与えてくれる社風も決め手になりました。'
    },
    {
      question: '現在の仕事内容',
      answer: '中小企業から大手企業まで、幅広いクライアントを担当しています。初回のヒアリングから課題を整理し、社内のクリエイティブチームと連携しながら提案書を作成。受注後はプロジェクトマネージャーと協力して進行管理も行います。最近は新規開拓にも力を入れていて、展示会やセミナーでの登壇も経験しました。'
    },
    {
      question: 'やりがいを感じる瞬間',
      answer: '難しい案件を受注できたときはもちろん嬉しいですが、それ以上にプロジェクトが完了した後、クライアントのビジネスが実際に成長している姿を見たときに大きなやりがいを感じます。「多田さんのおかげで売上が伸びた」と言っていただけることが、この仕事を続けるモチベーションになっています。'
    }
  ],
  summary: [
    {
      title: '成長を実感したこと',
      text: '入社当初は製品説明が中心でしたが、今ではクライアントの業界動向や競合分析まで踏まえた提案ができるようになりました。また、デザインやテクノロジーの知識が身につき、より専門的な会話ができるようになったと感じています。'
    },
    {
      title: 'ライティの好きなところ',
      text: 'チーム全体でクライアントの成功を追求する文化が好きです。セールスだけでなく、デザイナーやエンジニアも一緒にクライアントのことを考えてくれる。だからこそ、自信を持って提案できますし、クライアントにも本当の価値を届けられると思っています。'
    },
    {
      title: '大切にしていること',
      text: '「聞く力」を大切にしています。クライアントが本当に困っていることは、表面的な会話では見えてきません。深くヒアリングし、言葉にならない課題を見つけ出すことで、本質的な提案ができると考えています。'
    },
    {
      title: '未来の仲間へメッセージ',
      text: 'セールスというと数字のプレッシャーを想像するかもしれませんが、ライティでは「売る」より「解決する」ことを重視しています。人の話を聞くのが好きな人、課題解決にワクワクする人には最高の環境です。一緒に成長しましょう！'
    }
  ]
}

function InterviewTada() {
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
          <Link className="back-link" to="/jobs/sales">
            <span className="ar">←</span>
            セールスのページに戻る
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default InterviewTada
