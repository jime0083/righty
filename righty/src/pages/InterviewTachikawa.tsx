import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { ScrollReveal } from '../components/ScrollReveal'
import { Footer } from '../components/Footer'
import { SideNav } from '../components/SideNav'
import '../Interview.css'

const BASE_URL = import.meta.env.BASE_URL

const interviewData = {
  eyebrow: 'Interview',
  catchTitle: ['施策の成果が', '数字で見える面白さ'],
  lead: 'アイデアを形にして、\nサービスの成長に貢献したい。',
  person: {
    nameJp: '立川 春香',
    nameEn: 'Haruka Tachikawa',
    role: 'マーケティング',
    year: '2022年入社',
    bio: '文学部卒業後、EC企業でWebマーケティングを経験。\nコンテンツ制作からSNS運用まで幅広く担当。\nより戦略的なマーケティングに挑戦したいと考え転職。\n現在はコンテンツマーケティングを中心に活躍。'
  },
  heroImage: `${BASE_URL}assets/images/立川春香1.png`,
  qaImage: `${BASE_URL}assets/images/立川春香2.png`,
  qaList: [
    {
      question: 'ライティに入社した理由',
      answer: '前職ではECサイトの運用がメインで、施策の幅が限られていました。ライティでは、コンテンツマーケティングから広告運用、CRMまで幅広い施策に携われると聞いて興味を持ちました。また、デザインやテクノロジーに強いチームと一緒に働けることも魅力でした。実際に入社してみて、想像以上に裁量があって毎日が刺激的です。'
    },
    {
      question: '現在の仕事内容',
      answer: 'コンテンツマーケティングを中心に、オウンドメディアの企画・運営、SNS運用、メールマーケティングなどを担当しています。ユーザーのカスタマージャーニーを意識しながら、各タッチポイントで最適なコンテンツを届けることを心がけています。最近はSEO施策にも力を入れていて、検索流入が着実に伸びているのが嬉しいです。'
    },
    {
      question: 'やりがいを感じる瞬間',
      answer: '自分が企画したコンテンツがSNSでシェアされたり、「この記事を読んでサービスを使い始めました」というユーザーの声を聞いたときに大きなやりがいを感じます。また、A/Bテストの結果が仮説通りだったときは、データに基づいた意思決定ができている実感があって嬉しくなります。'
    }
  ],
  summary: [
    {
      title: '成長を実感したこと',
      text: '入社当初はコンテンツ制作がメインでしたが、今では戦略の立案から効果測定まで一貫して担当できるようになりました。また、データ分析スキルが向上し、数字をもとに施策を提案できるようになったことが大きな成長だと感じています。'
    },
    {
      title: 'ライティの好きなところ',
      text: '挑戦を応援してくれる文化が好きです。「やってみたい」と言えば、経験が浅くても任せてもらえる環境があります。失敗しても責められることはなく、次にどう活かすかを一緒に考えてくれる。だから安心して挑戦できます。'
    },
    {
      title: '大切にしていること',
      text: '「ユーザーにとって価値のあるコンテンツか」を常に問いかけています。PVや流入を増やすことだけが目的ではなく、読んだ人の役に立つコンテンツを作ることで、結果的にサービスへの信頼につながると考えています。'
    },
    {
      title: '未来の仲間へメッセージ',
      text: 'マーケティングは、クリエイティブとロジックの両方が求められる面白い仕事です。アイデアを形にして、その成果が数字で見える瞬間は本当にワクワクします。一緒にサービスを成長させていきましょう！'
    }
  ]
}

function InterviewTachikawa() {
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
          <Link className="back-link" to="/jobs/marketing">
            <span className="ar">←</span>
            マーケティングのページに戻る
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default InterviewTachikawa
