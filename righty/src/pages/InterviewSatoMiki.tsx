import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { ScrollReveal } from '../components/ScrollReveal'
import { Footer } from '../components/Footer'
import { SideNav } from '../components/SideNav'
import '../Interview.css'

const BASE_URL = import.meta.env.BASE_URL

const interviewData = {
  eyebrow: 'Interview',
  catchTitle: ['挑戦と学びが', '日々の成長につながる'],
  lead: '新しい技術を学び続けることで、\nエンジニアとしての可能性を広げたい。',
  person: {
    nameJp: '佐藤 美紀',
    nameEn: 'Miki Sato',
    role: 'バックエンドエンジニア',
    year: '2021年入社',
    bio: '情報系大学院でデータベースを研究。\n新卒でWeb系ベンチャーに入社後、\nよりスキルアップできる環境を求めてライティへ転職。\n現在はAPI開発とデータ基盤の構築を担当。'
  },
  heroImage: `${BASE_URL}assets/images/佐藤美紀1.png`,
  qaImage: `${BASE_URL}assets/images/佐藤美紀2.png`,
  qaList: [
    {
      question: 'ライティに入社した理由',
      answer: '前職でも楽しく働いていましたが、技術的な幅を広げたいという思いがありました。ライティは新しい技術への挑戦を歓迎する文化があり、実際に面接でもモダンな技術スタックについて熱く語ってくれたのが印象的でした。また、女性エンジニアが活躍している環境も魅力で、長く働けるイメージが湧きました。'
    },
    {
      question: '現在の仕事内容',
      answer: 'バックエンドエンジニアとして、主にPythonを使ったAPI開発とデータパイプラインの構築を担当しています。最近はBigQueryを活用したデータ基盤の設計にも携わっており、データエンジニアリングの領域にも幅を広げています。チームでのコードレビューを通じて、日々学びを深めています。'
    },
    {
      question: 'やりがいを感じる瞬間',
      answer: '自分が作ったAPIが実際にユーザーに使われて、「使いやすくなった」というフィードバックをもらえたときは本当に嬉しいです。また、難しい技術課題を解決したときや、チームメンバーと一緒に議論して良いアーキテクチャを設計できたときにもやりがいを感じます。日々の小さな成長の積み重ねが大きな自信につながっています。'
    }
  ],
  summary: [
    {
      title: '成長を実感したこと',
      text: '入社時はPythonの経験が浅かったのですが、今では自信を持ってコードを書けるようになりました。また、インフラやデータ基盤の知識も身につき、システム全体を見渡せる視野が広がったと感じています。'
    },
    {
      title: 'ライティの好きなところ',
      text: '学ぶことに対してポジティブな雰囲気があるところです。分からないことを素直に聞ける環境で、先輩エンジニアも親身に教えてくれます。勉強会も活発で、新しい技術情報をキャッチアップしやすい環境が整っています。'
    },
    {
      title: '大切にしていること',
      text: '「分からないことは分からないと言う」ことを大切にしています。背伸びせず、でも挑戦は恐れない。そのバランスを保ちながら、着実にスキルを積み上げていきたいと思っています。チームのためにできることを常に考えています。'
    },
    {
      title: '未来の仲間へメッセージ',
      text: '経験やスキルに自信がなくても大丈夫です。大切なのは学ぶ意欲と、チームで協力する姿勢。ライティには成長をサポートしてくれる環境と仲間がいます。一緒に学びながら、エンジニアとして成長していきましょう！'
    }
  ]
}

function InterviewSatoMiki() {
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
          <Link className="back-link" to="/jobs/backend">
            <span className="ar">←</span>
            バックエンドエンジニアのページに戻る
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default InterviewSatoMiki
