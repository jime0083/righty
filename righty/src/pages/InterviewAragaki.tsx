import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { ScrollReveal } from '../components/ScrollReveal'
import { Footer } from '../components/Footer'
import { SideNav } from '../components/SideNav'
import '../Interview.css'

const BASE_URL = import.meta.env.BASE_URL

const interviewData = {
  eyebrow: 'Interview',
  catchTitle: ['データから', 'ユーザーの声を読み解く'],
  lead: '数字の向こう側にある、\nユーザーの本音を見つけたい。',
  person: {
    nameJp: '新垣 悟',
    nameEn: 'Satoru Aragaki',
    role: 'マーケティング',
    year: '2020年入社',
    bio: 'マーケティング専攻で大学院を修了。\n広告代理店でのデジタルマーケティング経験を経て、\n事業会社側でサービス成長に携わりたいと考え転職。\n現在はグロースマーケティングチームのリーダーを務める。'
  },
  heroImage: `${BASE_URL}assets/images/新垣悟1.png`,
  qaImage: `${BASE_URL}assets/images/新垣悟2.png`,
  qaList: [
    {
      question: 'ライティに入社した理由',
      answer: '前職では代理店として様々なクライアントのマーケティングを支援していましたが、一つのサービスに深く関わりたいという思いがありました。ライティは自社プロダクトを持ちながら、マーケティングに力を入れている会社だと感じました。面接で「データドリブンだけでなく、ユーザーインサイトも大切にしている」という話を聞いて、ここで働きたいと思いました。'
    },
    {
      question: '現在の仕事内容',
      answer: 'グロースマーケティングチームのリーダーとして、ユーザー獲得から継続利用までのファネル全体を担当しています。広告運用、SEO、コンテンツマーケティング、CRM施策など幅広く手がけています。データ分析をもとに仮説を立て、施策を実行し、効果検証を行うサイクルを回しています。チームメンバーの育成も重要な役割です。'
    },
    {
      question: 'やりがいを感じる瞬間',
      answer: '仮説が当たって数字が大きく改善したときはテンションが上がります。でも一番嬉しいのは、データの向こう側にいるユーザーの行動変化を感じられたとき。「このコンテンツがきっかけでサービスを使い始めた」という声を聞くと、マーケティングの意義を実感します。'
    }
  ],
  summary: [
    {
      title: '成長を実感したこと',
      text: '入社当初は広告運用がメインでしたが、今ではファネル全体を設計し、チームをリードする立場になりました。また、数字を追うだけでなく、ユーザーインサイトを深掘りする力がついたと感じています。'
    },
    {
      title: 'ライティの好きなところ',
      text: 'マーケティングがコストセンターではなく、事業成長のエンジンとして認められている点が好きです。施策の提案がスピーディに実行でき、結果もすぐにフィードバックされる。攻めのマーケティングができる環境です。'
    },
    {
      title: '大切にしていること',
      text: '「数字の向こう側を想像する」ことを常に意識しています。CVRが上がった、離脱率が下がったという数字だけでなく、その背景にあるユーザーの気持ちや行動を理解することで、より本質的な施策が打てると考えています。'
    },
    {
      title: '未来の仲間へメッセージ',
      text: 'マーケティングは、データとクリエイティビティの両方が求められる面白い仕事です。仮説を立てて検証し、サービスを成長させる手触り感を味わいたい方にはぴったりの環境だと思います。一緒にサービスを育てていきましょう！'
    }
  ]
}

function InterviewAragaki() {
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

export default InterviewAragaki
