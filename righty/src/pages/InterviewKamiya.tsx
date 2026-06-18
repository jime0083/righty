import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { ScrollReveal } from '../components/ScrollReveal'
import { Footer } from '../components/Footer'
import { SideNav } from '../components/SideNav'
import '../Interview.css'

const BASE_URL = import.meta.env.BASE_URL

const interviewData = {
  eyebrow: 'Interview',
  catchTitle: ['堅牢なシステムで', 'サービスの成長を支える'],
  lead: '技術的な課題を解決し、\n安定したプロダクト基盤をつくりたい。',
  person: {
    nameJp: '神谷 翔',
    nameEn: 'Sho Kamiya',
    role: 'バックエンドエンジニア',
    year: '2020年入社',
    bio: '大学院で分散システムを研究。\n大手SIerでの経験を経て、\nより技術的にチャレンジできる環境を求めてライティに入社。\n現在はバックエンドチームのテックリードを務める。'
  },
  heroImage: `${BASE_URL}assets/images/神谷翔1.png`,
  qaImage: `${BASE_URL}assets/images/神谷翔2.png`,
  qaList: [
    {
      question: 'ライティに入社した理由',
      answer: '前職では大規模システムの保守・運用が中心でしたが、より新しい技術に触れながら、ゼロからシステムを設計・構築できる環境を求めていました。ライティは技術選定の自由度が高く、エンジニア一人ひとりが責任を持ってアーキテクチャを考えられる点に魅力を感じました。面接での技術的な議論も深く、ここでなら成長できると確信しました。'
    },
    {
      question: '現在の仕事内容',
      answer: 'バックエンドエンジニアとして、APIの設計・開発、データベース設計、インフラ構築を担当しています。Go言語を中心に、パフォーマンスとスケーラビリティを意識した開発を心がけています。最近はテックリードとして、チーム全体の技術方針の策定やコードレビュー、後輩エンジニアの育成にも力を入れています。'
    },
    {
      question: 'やりがいを感じる瞬間',
      answer: '自分が設計したシステムが、大量のトラフィックを安定して捌いているのを見たときに大きなやりがいを感じます。また、技術的に難しい課題を解決したときや、チームメンバーが成長して自走できるようになったときも嬉しいですね。裏側から確実にサービスを支えているという実感があります。'
    }
  ],
  summary: [
    {
      title: '成長を実感したこと',
      text: '入社当初は目の前の実装に集中していましたが、今ではシステム全体を俯瞰して設計できるようになりました。また、技術的な意思決定を行う機会が増え、その決定がプロダクトに与える影響を常に考えるようになりました。'
    },
    {
      title: 'ライティの好きなところ',
      text: '技術に対して妥協しない文化があるところです。「動けばいい」ではなく、「なぜこの技術を選ぶのか」「将来のスケールを考えたときにどうか」を常に議論できる環境があります。また、エンジニアの意見が尊重される風土も魅力です。'
    },
    {
      title: '大切にしていること',
      text: 'シンプルで保守性の高いコードを書くことを大切にしています。複雑な問題をシンプルに解決することこそがエンジニアの腕の見せ所だと思っています。また、ドキュメントを残すことや、チームへの知識共有も重視しています。'
    },
    {
      title: '未来の仲間へメッセージ',
      text: 'バックエンドは目立たない存在かもしれませんが、サービスの根幹を支える重要なポジションです。技術的な深さを追求したい人、システム設計が好きな人にはぴったりの環境です。一緒に堅牢なシステムをつくりましょう！'
    }
  ]
}

function InterviewKamiya() {
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

export default InterviewKamiya
