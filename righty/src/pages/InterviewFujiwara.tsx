import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { ScrollReveal } from '../components/ScrollReveal'
import { Footer } from '../components/Footer'
import { SideNav } from '../components/SideNav'
import '../Interview.css'

const BASE_URL = import.meta.env.BASE_URL

const interviewData = {
  eyebrow: 'Interview',
  catchTitle: ['チームで学び合いながら', '成長できる環境'],
  lead: '技術を磨きながら、仲間と一緒に\nより良いプロダクトをつくりたい。',
  person: {
    nameJp: '藤原 幸樹',
    nameEn: 'Koki Fujiwara',
    role: 'フロントエンドエンジニア',
    year: '2021年入社',
    bio: '大学では情報科学を専攻し、\nWeb開発のインターンを経験。\nライティに中途入社後、\nフロントエンドチームで複数のプロジェクトに参画。'
  },
  heroImage: `${BASE_URL}assets/images/藤原幸樹3.png`,
  qaImage: `${BASE_URL}assets/images/藤原幸樹2.png`,
  qaList: [
    {
      question: 'ライティに入社した理由',
      answer: '前職ではフロントエンド開発を担当していましたが、より技術的に挑戦できる環境を求めていました。ライティは最新の技術スタックを積極的に採用していて、かつチーム全体で学び合う文化があると聞き、自分の成長にぴったりだと感じました。面接で話したエンジニアの方々の技術への熱意にも惹かれ、入社を決めました。'
    },
    {
      question: '現在の仕事内容',
      answer: 'フロントエンドエンジニアとして、React・TypeScriptを用いたWebアプリケーション開発を担当しています。UIコンポーネントの設計・実装から、パフォーマンスチューニング、テストの整備まで幅広く関わっています。最近はチーム内の技術共有会の運営も担当し、メンバー同士で知見を共有する場づくりにも力を入れています。'
    },
    {
      question: 'やりがいを感じる瞬間',
      answer: 'チームで議論しながら技術的な課題を解決できたときに、大きなやりがいを感じます。一人では思いつかなかったアイデアが、チームの力で形になる瞬間は本当に楽しいです。また、自分が書いたコードが本番環境でスムーズに動き、ユーザーに価値を届けられていると実感できたときも嬉しいですね。'
    }
  ],
  summary: [
    {
      title: '成長を実感したこと',
      text: '入社当初はReactの経験が浅かったのですが、先輩エンジニアのコードレビューや技術共有会を通じて、設計の考え方やベストプラクティスを学ぶことができました。今では後輩にアドバイスできるようになり、自分の成長を実感しています。'
    },
    {
      title: 'ライティの好きなところ',
      text: '技術に対して真剣に向き合う文化があるところです。新しい技術を試したいと提案すれば、チームで検証する機会をもらえます。また、失敗を責めるのではなく、そこから学びを得ようとする姿勢がチーム全体にあるのも魅力です。'
    },
    {
      title: '大切にしていること',
      text: 'コードの読みやすさと保守性を大切にしています。自分だけでなく、チームメンバーや将来の自分が見ても理解しやすいコードを書くことを心がけています。また、分からないことは素直に聞く姿勢も大事にしています。'
    },
    {
      title: '未来の仲間へメッセージ',
      text: '技術が好きで、チームで働くことを楽しめる人にはぴったりの環境だと思います。経験が浅くても、学ぶ意欲があれば必ず成長できます。一緒に技術を磨きながら、良いプロダクトをつくりましょう！'
    }
  ]
}

function InterviewFujiwara() {
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

export default InterviewFujiwara
