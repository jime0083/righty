import { Link } from 'react-router-dom'
import { ScrollReveal } from '../components/ScrollReveal'
import { Footer } from '../components/Footer'
import { SideNav } from '../components/SideNav'
import '../Culture.css'

const BASE_URL = import.meta.env.BASE_URL

function Culture() {
  const cultureValues = [
    {
      num: '01',
      title: '自信はあるけど謙虚',
      description: '自己顕示欲を満たすことより、社会にインパクトを与えることが私たちにとっては重要です。もちろん自分たちの仕事への矜持は持っているべきです。アピールすることが目的達成のために必要な手段であれば、その選択肢も否定されるべきものではありません。つまり、姿勢と結果で示していくというシンプルな原理です。それが私たちギフティの「行まい」をつくります。',
      image: `${BASE_URL}assets/images/cult_confident.png`,
      deco: 'dots'
    },
    {
      num: '02',
      title: 'よしなに進める',
      description: '「よしなに」という言葉には解釈の幅の広さがあります。ギフティにおいては、お互いがそれぞれ自立しているからこそ、あえて「よしなに」という言葉を使って、仲間のやりたいことを尊重します。その一方でプロフェッショナルとして責任を持つということが求められます。組織や事業にとって「離も良い」と思うことを、自らが判断して実行することが「よしなに進める」の意味することです。',
      image: `${BASE_URL}assets/images/cult_yoshinani.png`,
      deco: null
    },
    {
      num: '03',
      title: 'つながりを大切に',
      description: '定期的に1on1やチームイベントで、信頼関係を育みます。物理的な距離にとらわれず、フラットに意見を交わし、互いの強みを活かすことで、一人では生み出せない価値をつくります。つながりは、ギフティが社会に提供する価値の源泉です。',
      image: `${BASE_URL}assets/images/cult_connect.png`,
      deco: 'circ-top'
    },
    {
      num: '04',
      title: '変化を楽しむ',
      description: 'デザインもテクノロジーも、社会も、常に変化しています。私たちはその変化を恐れず、新しい知識やスキルを学び続け、柔軟にアップデートしていきます。変化を楽しむ姿勢が、未来の可能性を広げます。',
      image: `${BASE_URL}assets/images/cult_change.png`,
      deco: 'circ-bottom'
    }
  ]

  const moreCards = [
    {
      title: 'メンバーインタビュー',
      description: 'ギフティで働くメンバーの想いやキャリアを紹介します。',
      image: `${BASE_URL}assets/images/cult_yoshinani.png`
    },
    {
      title: 'チームの取り組み',
      description: 'プロジェクトやチームの取り組みをご紹介します。',
      image: `${BASE_URL}assets/images/cult_card_team.png`
    },
    {
      title: 'イベント・社内活動',
      description: '社内イベントやワークショップなど、文化を育む活動を紹介します。',
      image: `${BASE_URL}assets/images/cult_card_event.png`
    }
  ]

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
            <Link className="head-btn head-btn--dark" to="/#jobs">募集職種一覧<span className="ar">→</span></Link>
            <Link className="head-btn head-btn--out" to="/shinsotsu">新卒採用<span className="ar">→</span></Link>
            <div className="head-menu" role="button" aria-label="メニュー">
              <img src={`${BASE_URL}assets/images/三点リーダー.png`} alt="メニュー" />
            </div>
          </div>
        </div>
      </header>

      {/* Page Hero */}
      <section className="page-hero">
        <span className="hero-blob"></span>
        <div className="wrap hero-grid">
          <SideNav />
          <div className="hero-head">
            <img className="hero-dots" src={`${BASE_URL}assets/images/deco_dots_scatter.png`} alt="" />
            <ScrollReveal animation="fadeUp">
              <div className="f-eyebrow" style={{ marginBottom: '14px' }}>Culture</div>
              <h1>カルチャー</h1>
            </ScrollReveal>
            <ScrollReveal animation="fadeUp" delay={0.1}>
              <p>一人ひとりの個性を尊重し、<br />チームでより良い未来をつくるために。</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Culture Intro */}
      <section className="cult-intro">
        <div className="intro-blobs">
          <span className="ib1"></span>
          <span className="ib2"></span>
          <span className="ib3"></span>
        </div>
        <div className="wrap">
          <ScrollReveal animation="fadeUp">
            <div className="f-eyebrow">Culture</div>
            <h2>カルチャー</h2>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" delay={0.1}>
            <p>ギフティは「つくりたいのは、"つながり"の先にある価値」という想いのもと、人と人、想いと想いをつなぐデザインとテクノロジーで、社会に貢献していきます。<br />その実現のために、私たちは4つの価値観を大切にしています。</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Culture Code */}
      <section className="cult-code">
        <div className="wrap">
          <div className="cc-head">
            <ScrollReveal animation="fadeUp">
              <div className="f-eyebrow">Culture Code</div>
              <h2>私たちが大切にしていること</h2>
            </ScrollReveal>
          </div>
          <div className="cc-list">
            {cultureValues.map((value, index) => (
              <ScrollReveal key={index} animation="fadeUp" delay={index * 0.1}>
                <div className="cc-row">
                  <img className="cc-photo" src={value.image} alt={value.title} />
                  <div className="cc-copy">
                    {value.deco === 'dots' && (
                      <span className="cc-deco dots" style={{ right: 0, top: '-70px', width: '96px', height: '80px', opacity: 0.55 }}></span>
                    )}
                    {value.deco === 'circ-top' && (
                      <span className="cc-deco circ-sm" style={{ right: '8%', top: '-50px', width: '52px', height: '52px' }}></span>
                    )}
                    {value.deco === 'circ-bottom' && (
                      <span className="cc-deco circ-sm" style={{ left: '-46px', bottom: '-30px', width: '64px', height: '64px' }}></span>
                    )}
                    <div className="cc-num-row">
                      <span className="cc-num">{value.num}</span>
                      <h3>{value.title}</h3>
                    </div>
                    <p>{value.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* More Culture */}
      <section className="more-cult">
        <div className="wrap mc-grid">
          <div className="mc-left">
            <ScrollReveal animation="fadeRight">
              <div className="f-eyebrow">More Culture</div>
              <h2>ライティのカルチャーを<br />もっと知る</h2>
              <p>メンバーのインタビューや、チームの取り組み、イベントの様子など、ギフティのカルチャーをより深く知ることができます。</p>
              <a className="link-out" href="#">カルチャーページを見る<span className="ar">→</span></a>
            </ScrollReveal>
          </div>
          <div className="mc-cards">
            {moreCards.map((card, index) => (
              <ScrollReveal key={index} animation="fadeUp" delay={index * 0.1}>
                <article className="mc-card">
                  <div className="img"><img src={card.image} alt={card.title} /></div>
                  <div className="body">
                    <h4>{card.title}</h4>
                    <p>{card.description}</p>
                    <a className="more" href="#">詳しく見る<span className="ar">→</span></a>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Culture
