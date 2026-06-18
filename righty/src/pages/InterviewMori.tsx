import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { ScrollReveal } from '../components/ScrollReveal'
import { Footer } from '../components/Footer'
import { SideNav } from '../components/SideNav'
import '../Interview.css'

const BASE_URL = import.meta.env.BASE_URL

const interviewData = {
  eyebrow: 'Interview',
  catchTitle: ['デザインで', 'ビジネスの未来をつくる'],
  lead: 'ユーザーの期待を超える体験を、\nチームで一緒につくりたい。',
  person: {
    nameJp: '森 真琴',
    nameEn: 'Makoto Mori',
    role: 'UI/UXデザイナー',
    year: '2022年入社',
    bio: 'デザイン専門学校でWebデザインを学ぶ。\n制作会社でのWebサイト制作経験を経て、\nUXデザインに興味を持ちライティへ転職。\n現在はtoB向けプロダクトのUI設計を担当。'
  },
  heroImage: `${BASE_URL}assets/images/森真琴1.png`,
  qaImage: `${BASE_URL}assets/images/森真琴2.png`,
  qaList: [
    {
      question: 'ライティに入社した理由',
      answer: '前職ではWebサイトの制作がメインで、納品したら終わりという仕事が多かったんです。でも、本当にユーザーの役に立っているのか、もっと深く関わりたいという思いがありました。ライティでは、リサーチから改善まで継続的にプロダクトに関われると聞いて、ここで成長したいと思いました。'
    },
    {
      question: '現在の仕事内容',
      answer: 'toB向けSaaSプロダクトのUI設計を担当しています。ユーザーインタビューで課題を発見し、ワイヤーフレームやプロトタイプを作成してチームで検討を重ねます。FigmaでUIを設計し、エンジニアと密に連携しながら実装を進めています。最近はアクセシビリティの向上にも力を入れています。'
    },
    {
      question: 'やりがいを感じる瞬間',
      answer: 'チームでアイデアを出し合って、より良いデザインが生まれたときにやりがいを感じます。一人では思いつかないアイデアが、議論の中で形になっていく過程が楽しいです。また、リリース後にユーザーからポジティブなフィードバックをいただけると、本当に嬉しくなります。'
    }
  ],
  summary: [
    {
      title: '成長を実感したこと',
      text: '入社前は見た目のデザインに意識が向いていましたが、今は「なぜこのデザインなのか」を常に考えるようになりました。ユーザーの行動や心理を理解した上で設計できるようになったことが、大きな成長だと感じています。'
    },
    {
      title: 'ライティの好きなところ',
      text: 'フラットに意見を言い合える雰囲気が好きです。経験年数に関係なく、良いアイデアは採用されますし、分からないことを素直に聞ける環境があります。また、デザイナー同士でのレビュー文化があり、お互いに高め合える関係性が魅力です。'
    },
    {
      title: '大切にしていること',
      text: '「ユーザーの気持ちになる」ことを常に意識しています。自分が使いやすいと思うデザインと、ユーザーにとって使いやすいデザインは違うことがある。だからこそ、リサーチやテストを大切にし、思い込みでデザインしないよう心がけています。'
    },
    {
      title: '未来の仲間へメッセージ',
      text: 'デザインは正解がない仕事ですが、だからこそ面白い。チームで議論しながら、より良い答えを探していく過程を楽しめる方にはぴったりの環境です。一緒にユーザーに愛されるプロダクトをつくりましょう！'
    }
  ]
}

function InterviewMori() {
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
          <Link className="back-link" to="/jobs/uiux">
            <span className="ar">←</span>
            UI/UXデザイナーのページに戻る
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default InterviewMori
