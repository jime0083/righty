import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { ScrollReveal } from '../components/ScrollReveal'
import { Footer } from '../components/Footer'
import { SideNav } from '../components/SideNav'
import '../Interview.css'

const BASE_URL = import.meta.env.BASE_URL

const interviewData = {
  eyebrow: 'Interview',
  catchTitle: ['ユーザーの本質的な', '課題に向き合う'],
  lead: 'デザインの力で、\n人々の生活をより良くしたい。',
  person: {
    nameJp: '木村 正弘',
    nameEn: 'Masahiro Kimura',
    role: 'UI/UXデザイナー',
    year: '2019年入社',
    bio: '美術大学でプロダクトデザインを専攻。\n広告代理店でのグラフィックデザイン経験を経て、\nデジタルプロダクトの体験設計に興味を持ちライティへ。\n現在はシニアデザイナーとしてチームを牽引。'
  },
  heroImage: `${BASE_URL}assets/images/木村正弘1.png`,
  qaImage: `${BASE_URL}assets/images/木村正弘2.png`,
  qaList: [
    {
      question: 'ライティに入社した理由',
      answer: '前職ではグラフィックデザインがメインでしたが、次第にユーザーの行動や体験を設計することに興味を持つようになりました。ライティはリサーチからデザイン、検証まで一貫して関われる環境があり、本質的なUXデザインができると感じました。面接でチームの雰囲気の良さを感じたことも決め手になりました。'
    },
    {
      question: '現在の仕事内容',
      answer: 'UI/UXデザイナーとして、ユーザーリサーチ、ペルソナ設計、ワイヤーフレーム作成、UIデザイン、プロトタイピングまで幅広く担当しています。最近はデザインシステムの構築にも携わり、プロダクト全体の一貫性を保つ仕組みづくりにも注力しています。後輩デザイナーのメンタリングも大切な役割です。'
    },
    {
      question: 'やりがいを感じる瞬間',
      answer: 'ユーザーテストで「使いやすい」「分かりやすい」という声を直接聞けたときは本当に嬉しいです。また、複雑な課題をシンプルなUIで解決できたときや、エンジニアと協力して理想の体験を実現できたときにやりがいを感じます。デザインがビジネス成果につながった報告を聞くと、この仕事を選んでよかったと思います。'
    }
  ],
  summary: [
    {
      title: '成長を実感したこと',
      text: '入社当初はUIの見た目を整えることに注力していましたが、今ではユーザーの課題発見から解決策の提案まで、上流工程から関われるようになりました。「なぜこのデザインなのか」を論理的に説明できる力がついたと感じています。'
    },
    {
      title: 'ライティの好きなところ',
      text: 'デザイナーの意見が尊重される文化があります。「見た目をきれいにして」ではなく「この課題を解決したい」という依頼が来るので、本質的な仕事ができます。また、エンジニアとの距離が近く、実装を意識したデザインができる環境も魅力です。'
    },
    {
      title: '大切にしていること',
      text: '「ユーザーの代弁者であること」を常に意識しています。チーム内でユーザー視点を忘れそうになったとき、立ち返る存在でありたい。また、美しさと使いやすさの両立を諦めず、妥協のないデザインを追求することを大切にしています。'
    },
    {
      title: '未来の仲間へメッセージ',
      text: 'UI/UXデザインは、見た目だけでなく人の行動や感情に寄り添う仕事です。ユーザーのことを深く考え、より良い体験を追求したい方にはぴったりの環境だと思います。一緒に、人々の生活を豊かにするプロダクトをつくりましょう！'
    }
  ]
}

function InterviewKimura() {
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

export default InterviewKimura
