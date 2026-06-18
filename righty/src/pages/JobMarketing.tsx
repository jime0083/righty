import { Link } from 'react-router-dom'
import { ScrollReveal } from '../components/ScrollReveal'
import { Footer } from '../components/Footer'
import { SideNav } from '../components/SideNav'
import { Header } from '../components/Header'
import '../JobDetail.css'

const BASE_URL = import.meta.env.BASE_URL

const jobData = {
  eyebrow: 'Job',
  title: 'マーケティング',
  lead: 'データと創造性を駆使し、\nサービスの成長を加速させます。',
  about: {
    description: 'デジタルマーケティング戦略の立案から実行まで一貫して担当します。市場分析やユーザーインサイトをもとに、効果的なプロモーション施策を企画・運用し、サービスの認知拡大とユーザー獲得に貢献します。データ分析に基づいたPDCAサイクルを回し、マーケティングROIの最大化を目指します。',
    image: 'cult_change.png'
  },
  manager: {
    message: 'マーケティングは、サービスの成長エンジンとなる重要なポジションです。ライティでは、データドリブンな意思決定と、クリエイティブな発想の両方を大切にしています。様々なチャネルを活用した施策を試行錯誤しながら、サービスの成長に直接貢献できる環境で、あなたのマーケティングスキルを発揮してください。',
    role: 'マーケティングチーム マネージャー',
    name: '佐々木 美穂',
    image: 'intv_sato_hero.png',
    illustration: 'jd_illust.png'
  },
  interviews: [
    {
      image: '新垣悟1.png',
      role: 'マーケティング',
      name: '新垣 悟',
      year: '2020年入社',
      quote: 'データから\nユーザーの声を読み解く',
      link: '/interview/aragaki-satoru'
    },
    {
      image: '立川春香1.png',
      role: 'マーケティング',
      name: '立川 春香',
      year: '2022年入社',
      quote: '施策の成果が\n数字で見える面白さ',
      link: '/interview/tachikawa-haruka'
    }
  ]
}

function JobMarketing() {
  return (
    <>
      <Header />

      {/* Page Hero */}
      <section className="page-hero jd-hero">
        <span className="jhero-blob"></span>
        <div className="wrap hero-grid">
          <SideNav />
          <div className="jhero">
            <ScrollReveal animation="fadeUp">
              <div className="f-eyebrow">{jobData.eyebrow}</div>
              <h1>{jobData.title}</h1>
            </ScrollReveal>
            <ScrollReveal animation="fadeUp" delay={0.1}>
              <p className="lead">{jobData.lead.split('\n').map((line, i) => (
                <span key={i}>{line}{i < jobData.lead.split('\n').length - 1 && <br />}</span>
              ))}</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="jabout">
        <div className="wrap jabout-grid">
          <div className="jabout-left">
            <ScrollReveal animation="fadeUp">
              <div className="f-eyebrow">About</div>
              <h2>職種紹介</h2>
            </ScrollReveal>
            <ScrollReveal animation="fadeUp" delay={0.1}>
              <p>{jobData.about.description}</p>
              <Link className="jbtn" to="/shinsotsu#youkou">募集要項を見る<span className="ar">→</span></Link>
            </ScrollReveal>
          </div>
          <div className="jabout-media">
            <ScrollReveal animation="scale">
              <span className="b-circle"></span>
              <span className="b-dots"></span>
              <img className="photo" src={`${BASE_URL}assets/images/${jobData.about.image}`} alt={`${jobData.title}の作業環境`} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* MANAGER MESSAGE */}
      <section className="jmsg">
        <div className="wrap">
          <ScrollReveal animation="fadeUp">
            <div className="jmsg-panel">
              <div className="jmsg-left">
                <div className="f-eyebrow">Message</div>
                <h2>マネージャーからのメッセージ</h2>
                <p>{jobData.manager.message}</p>
                <div className="jmsg-sign">
                  <img src={`${BASE_URL}assets/images/${jobData.manager.image}`} alt={jobData.manager.name} />
                  <div>
                    <div className="role">{jobData.manager.role}</div>
                    <div className="nm">{jobData.manager.name}</div>
                  </div>
                </div>
              </div>
              <div className="jmsg-illust">
                <img src={`${BASE_URL}assets/images/${jobData.manager.illustration}`} alt="" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* INTERVIEW */}
      <section className="jintv">
        <div className="wrap">
          <div className="jintv-head">
            <div>
              <ScrollReveal animation="fadeUp">
                <div className="f-eyebrow">Interview</div>
                <h2>社員の声</h2>
                <p className="sub">実際に働くメンバーのインタビューをご紹介します。</p>
              </ScrollReveal>
            </div>
            <a className="link-pill" href="#">すべてのインタビューを見る<span className="ar">→</span></a>
          </div>
          <div className="jintv-grid">
            {jobData.interviews.map((interview, i) => (
              <ScrollReveal key={i} animation="fadeUp" delay={i * 0.1}>
                {interview.link ? (
                  <Link to={interview.link} className="jintv-card jintv-card--link">
                    <div className="pic">
                      <img src={`${BASE_URL}assets/images/${interview.image}`} alt={interview.name} />
                    </div>
                    <div className="info">
                      <div className="role">{interview.role}</div>
                      <div className="who">{interview.name}</div>
                      <div className="yr">{interview.year}</div>
                      <p className="quote">{interview.quote.split('\n').map((line, j) => (
                        <span key={j}>{line}{j < interview.quote.split('\n').length - 1 && <br />}</span>
                      ))}</p>
                      <span className="more">詳しく見る<span className="ar">→</span></span>
                    </div>
                  </Link>
                ) : (
                  <article className="jintv-card">
                    <div className="pic">
                      <img src={`${BASE_URL}assets/images/${interview.image}`} alt={interview.name} />
                    </div>
                    <div className="info">
                      <div className="role">{interview.role}</div>
                      <div className="who">{interview.name}</div>
                      <div className="yr">{interview.year}</div>
                      <p className="quote">{interview.quote.split('\n').map((line, j) => (
                        <span key={j}>{line}{j < interview.quote.split('\n').length - 1 && <br />}</span>
                      ))}</p>
                    </div>
                  </article>
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default JobMarketing
