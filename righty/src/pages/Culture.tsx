import { Link } from 'react-router-dom'
import { ScrollReveal } from '../components/ScrollReveal'
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
            <a className="head-btn head-btn--out" href="#">新卒採用<span className="ar">→</span></a>
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
          <nav className="side-nav">
            <Link to="/about"><span className="dot"></span>ライティについて</Link>
            <Link className="active" to="/culture"><span className="dot"></span>カルチャー</Link>
            <Link to="/jobs"><span className="dot"></span>職種紹介</Link>
            <Link to="/#work"><span className="dot"></span>働く環境</Link>
            <Link to="/#recruit"><span className="dot"></span>採用</Link>
          </nav>
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

      {/* Footer */}
      <footer className="foot culture-foot">
        <div className="wrap">
          <ScrollReveal animation="fadeUp">
            <div className="foot-top">
              <div className="foot-brand">
                <div>
                  <span className="mark">RIGHTY<sup>®</sup></span>
                  <span className="sub">Careers</span>
                </div>
                <div className="tag">More value.<br />Better together.</div>
              </div>
              <div className="foot-col">
                <h5>ライティについて</h5>
                <Link to="/about">私たちの想い</Link>
                <Link to="/about">事業内容</Link>
                <Link to="/about">プロジェクト</Link>
              </div>
              <div className="foot-col">
                <h5>職種紹介</h5>
                <Link to="/#jobs">デザイナー</Link>
                <Link to="/#jobs">エンジニア</Link>
                <Link to="/#jobs">その他職種</Link>
              </div>
              <div className="foot-col">
                <h5>働く環境</h5>
                <Link to="/#work">制度・福利厚生</Link>
                <Link to="/#work">チーム・文化</Link>
                <Link to="/#work">メンバーインタビュー</Link>
              </div>
              <div className="foot-col">
                <h5>採用</h5>
                <Link to="/#jobs">募集職種一覧</Link>
                <Link to="/#recruit">選考フロー</Link>
                <Link to="/#recruit">よくある質問</Link>
              </div>
              <div className="foot-cta">
                <a className="fc-fill" href="#">エントリーする →</a>
                <a className="fc-out" href="#">採用に関するお問い合わせ</a>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fadeIn" delay={0.2}>
            <div className="foot-bottom">
              <span>© RIGHTY Inc. All Rights Reserved.</span>
              <div className="links">
                <a href="#">プライバシーポリシー</a>
                <span>|</span>
                <a href="#">サイトポリシー</a>
                <div className="socials">
                  <a href="#" aria-label="Instagram">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.2 15.58 2.2 15.2 2.2 12s0-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.2 8.8 2.2 12 2.2zm0 3.65A6.15 6.15 0 1018.15 12 6.15 6.15 0 0012 5.85zm0 10.15A4 4 0 1116 12a4 4 0 01-4 4zm6.4-10.4a1.44 1.44 0 11-1.44-1.44 1.44 1.44 0 011.44 1.44z" />
                    </svg>
                  </a>
                  <a href="#" aria-label="X">
                    <svg viewBox="0 0 24 24">
                      <path d="M18.9 2H22l-7.3 8.3L23 22h-6.8l-5.3-6.9L4.8 22H1.7l7.8-8.9L1 2h6.9l4.8 6.3L18.9 2zm-2.4 18h1.9L7.6 4H5.6l10.9 16z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </footer>
    </>
  )
}

export default Culture
