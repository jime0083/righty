import { Link } from 'react-router-dom'
import { ScrollReveal } from '../components/ScrollReveal'
import { Footer } from '../components/Footer'
import { SideNav } from '../components/SideNav'
import '../Interview.css'

const BASE_URL = import.meta.env.BASE_URL

const interviewData = {
  eyebrow: 'Interview',
  catchTitle: ['チームで価値を', '生み出す喜び'],
  lead: '多様な視点を集めて、\nより良いアウトプットを目指したい。',
  person: {
    nameJp: '大山 夏姫',
    nameEn: 'Natsuki Oyama',
    role: 'プランナー',
    year: '2022年入社',
    bio: '美術大学でプロダクトデザインを専攻。\nデザイン事務所でのアシスタント経験を経て、\nより上流から企画に関わりたいと考え転職。\n現在はスタートアップ向けの案件を中心に担当。'
  },
  heroImage: `${BASE_URL}assets/images/大山夏姫1.png`,
  qaImage: `${BASE_URL}assets/images/大山夏姫2.png`,
  qaList: [
    {
      question: 'ライティに入社した理由',
      answer: '前職ではデザイナーとして制作に携わっていましたが、「なぜこのデザインなのか」という上流の部分にもっと関わりたいと思うようになりました。ライティでは、プランナーとしてクライアントの課題発見から関われると聞いて興味を持ちました。デザインのバックグラウンドを活かしながら、より広い視野で仕事ができる点が魅力でした。'
    },
    {
      question: '現在の仕事内容',
      answer: 'スタートアップ企業を中心としたクライアントの案件を担当しています。サービスのコンセプト設計から、ワイヤーフレームの作成、要件定義まで幅広く行います。デザイナー出身なので、デザインチームとのコミュニケーションがスムーズにできることが強みです。最近はユーザーインタビューの設計や実施にも挑戦しています。'
    },
    {
      question: 'やりがいを感じる瞬間',
      answer: 'チームでブレストしているときに、自分だけでは思いつかなかったアイデアが生まれる瞬間が好きです。プランナー、デザイナー、エンジニアそれぞれの視点が合わさることで、より良いソリューションが見つかる。その過程を経て完成したプロダクトがユーザーに届いたときは、本当に嬉しくなります。'
    }
  ],
  summary: [
    {
      title: '成長を実感したこと',
      text: 'デザイナーからプランナーにキャリアチェンジして、視野が大きく広がりました。以前は「どう作るか」に集中していましたが、今は「なぜ作るか」「誰のために作るか」を常に考えるようになりました。ビジネス視点も身につき、提案の幅が広がったと感じています。'
    },
    {
      title: 'ライティの好きなところ',
      text: '多様なバックグラウンドを持つメンバーが集まっているところが好きです。デザイナー出身、エンジニア出身、営業出身など、様々な経験を持つプランナーがいて、お互いの強みを活かしながら協力できます。違う視点からの意見が、新しい発見につながることが多いです。'
    },
    {
      title: '大切にしていること',
      text: '「一人で抱え込まない」ことを大切にしています。分からないことはすぐに聞く、困ったときはチームに相談する。そうすることで、より良いアウトプットが生まれるし、自分も成長できると思っています。また、相談しやすい雰囲気をつくることも意識しています。'
    },
    {
      title: '未来の仲間へメッセージ',
      text: 'プランナーは、様々なスキルや経験が活きる仕事です。デザイン、エンジニアリング、営業など、どんなバックグラウンドでも強みになります。チームで協力しながら価値を生み出すことにやりがいを感じる方、ぜひ一緒に働きましょう！'
    }
  ]
}

function InterviewOyama() {
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

export default InterviewOyama
