import { Link } from 'react-router-dom'
import { ScrollReveal } from '../components/ScrollReveal'
import { Footer } from '../components/Footer'
import { SideNav } from '../components/SideNav'
import '../Interview.css'

const BASE_URL = import.meta.env.BASE_URL

const interviewData = {
  eyebrow: 'Interview',
  catchTitle: ['アイデアを形にする', 'プロセスが面白い'],
  lead: 'クライアントの想いを理解し、\n最高のアウトプットを届けたい。',
  person: {
    nameJp: '野原 千夏',
    nameEn: 'Chinatsu Nohara',
    role: 'プランナー',
    year: '2021年入社',
    bio: '社会学部卒業後、広告代理店で営業を経験。\nクリエイティブにより深く関わりたいと考え転職。\n現在は中規模〜大規模プロジェクトの\n企画・進行管理を担当。'
  },
  heroImage: `${BASE_URL}assets/images/野原千夏1.png`,
  qaImage: `${BASE_URL}assets/images/野原千夏2.png`,
  qaList: [
    {
      question: 'ライティに入社した理由',
      answer: '前職では広告営業として様々なクリエイティブに関わっていましたが、企画の上流から関わりたいという思いがありました。ライティは、クライアントの課題発見から企画、制作まで一貫して携われる点に魅力を感じました。面接で「プランナーは翻訳者」という話を聞いて、まさに自分がやりたいことだと確信しました。'
    },
    {
      question: '現在の仕事内容',
      answer: 'プランナーとして、クライアントへのヒアリングから要件定義、企画提案、プロジェクト進行管理まで幅広く担当しています。デザイナーやエンジニアと連携しながら、クライアントの想いを形にしていきます。最近は複数のプロジェクトを同時に進行することも増え、タスク管理やチームマネジメントのスキルも磨いています。'
    },
    {
      question: 'やりがいを感じる瞬間',
      answer: 'クライアントが抱えていたモヤモヤを整理し、「そう、これがやりたかったんです！」と言っていただけたときに大きなやりがいを感じます。また、チームで議論を重ねてアイデアがブラッシュアップされていく過程も楽しいです。プロジェクトが無事にローンチしたときの達成感は格別です。'
    }
  ],
  summary: [
    {
      title: '成長を実感したこと',
      text: '入社当初は先輩のサポートがメインでしたが、今では自分がプロジェクトをリードする立場になりました。クライアントの課題を構造化して整理する力や、チームをまとめるコミュニケーション力が身についたと感じています。'
    },
    {
      title: 'ライティの好きなところ',
      text: 'プランナーの意見がしっかり尊重される文化が好きです。デザイナーやエンジニアと対等に議論でき、より良いアウトプットのために建設的な意見交換ができます。また、プロジェクトの裁量が大きく、自分の考えを反映しやすい環境です。'
    },
    {
      title: '大切にしていること',
      text: '「クライアントの言葉の裏にある本当のニーズを理解する」ことを大切にしています。表面的な要望だけでなく、なぜそれを求めているのか、本質的な課題は何かを深掘りすることで、より価値のある提案ができると考えています。'
    },
    {
      title: '未来の仲間へメッセージ',
      text: 'プランナーは、クライアントとチームの架け橋となる存在です。コミュニケーションが好きな人、課題解決にワクワクする人にはぴったりの仕事だと思います。一緒にクライアントの想いを形にしていきましょう！'
    }
  ]
}

function InterviewNohara() {
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
            <Link className="head-btn head-btn--out" to="/shinsotsu">新卒採用<span className="ar">→</span></Link>
            <div className="head-menu" role="button" aria-label="メニュー">
              <img src={`${BASE_URL}assets/images/三点リーダー.png`} alt="メニュー" />
            </div>
          </div>
        </div>
      </header>

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
          <Link className="back-link" to="/jobs/planner">
            <span className="ar">←</span>
            プランナーのページに戻る
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default InterviewNohara
