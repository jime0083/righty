import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { ScrollReveal } from '../components/ScrollReveal'
import { Footer } from '../components/Footer'
import { SideNav } from '../components/SideNav'
import '../Interview.css'

const BASE_URL = import.meta.env.BASE_URL

const interviewData = {
  eyebrow: 'Interview',
  catchTitle: ['クライアントの成功が', '自分の喜びになる'],
  lead: '信頼関係を築き、\nビジネスの成長に貢献したい。',
  person: {
    nameJp: '新井 忠弘',
    nameEn: 'Tadahiro Arai',
    role: 'セールス',
    year: '2020年入社',
    bio: '経済学部卒業後、IT企業で法人営業を経験。\nより深くクライアントに寄り添える環境を求めて転職。\n現在は大手クライアントを中心に担当し、\n長期的なパートナーシップを構築している。'
  },
  heroImage: `${BASE_URL}assets/images/新井忠弘1.png`,
  qaImage: `${BASE_URL}assets/images/新井忠弘2.png`,
  qaList: [
    {
      question: 'ライティに入社した理由',
      answer: '前職でもIT企業の法人営業をしていましたが、プロダクトを売って終わりという営業スタイルに物足りなさを感じていました。ライティは、クライアントの課題を深く理解し、オーダーメイドの提案ができる点に惹かれました。デザインやテクノロジーの力でビジネスを変えていく、その最前線に立てることにワクワクしました。'
    },
    {
      question: '現在の仕事内容',
      answer: '大手企業を中心としたクライアントを担当し、新規案件の獲得から既存クライアントとのリレーション構築まで幅広く行っています。ヒアリングを通じて課題を深掘りし、社内のデザイナーやエンジニアと連携して最適な提案を作成します。プロジェクト開始後も定期的にフォローし、長期的なパートナーシップを築いています。'
    },
    {
      question: 'やりがいを感じる瞬間',
      answer: '提案が通り、プロジェクトが成功したときはもちろん嬉しいですが、それ以上にクライアントから「新井さんに相談してよかった」と言っていただけたときに最もやりがいを感じます。単なる取引先ではなく、ビジネスパートナーとして信頼していただけることが、この仕事の醍醐味だと思っています。'
    }
  ],
  summary: [
    {
      title: '成長を実感したこと',
      text: '入社当初は製品の説明に終始していましたが、今ではクライアントの経営課題から考え、本質的な提案ができるようになりました。デザインやテクノロジーの知識も深まり、より説得力のある提案ができるようになったと感じています。'
    },
    {
      title: 'ライティの好きなところ',
      text: 'セールスだけでなく、デザイナーやエンジニアと密に連携できる環境が好きです。提案の段階から専門家の意見を取り入れられるので、クライアントに対してより価値のある提案ができます。チーム全体でクライアントの成功を目指す文化があります。'
    },
    {
      title: '大切にしていること',
      text: '「クライアントの成功が自分の成功」という考えを常に持っています。短期的な売上よりも、長期的な信頼関係を築くことを優先しています。そのためには、時にはNoと言う勇気も必要。本当にクライアントのためになる提案を心がけています。'
    },
    {
      title: '未来の仲間へメッセージ',
      text: 'セールスは、クライアントとチームをつなぐ重要な役割です。人の話を聞くのが好きな人、課題解決にやりがいを感じる人には最高の環境だと思います。一緒にクライアントのビジネスを成功に導きましょう！'
    }
  ]
}

function InterviewArai() {
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

export default InterviewArai
