import { Link } from 'react-router-dom'
import { ScrollReveal } from '../components/ScrollReveal'
import '../Work.css'

const BASE_URL = import.meta.env.BASE_URL

function Work() {
  const stats = [
    {
      label: '男女比',
      icon: (
        <svg viewBox="0 0 24 24">
          <circle cx="8" cy="7" r="2.6" />
          <path d="M3.6 19c0-2.7 2-4.6 4.4-4.6s4.4 1.9 4.4 4.6" />
          <circle cx="16.4" cy="7" r="2.6" />
          <path d="M12.8 19c.2-2.5 1.9-4.2 3.6-4.2s3.4 1.7 3.6 4.2" />
        </svg>
      ),
      value: '5:5',
      unit: ''
    },
    {
      label: '平均残業時間',
      icon: (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3.5 2" />
        </svg>
      ),
      value: '10.2',
      prefix: '月',
      suffix: '時間'
    },
    {
      label: '有給休暇取得率',
      icon: (
        <svg viewBox="0 0 24 24">
          <rect x="3.5" y="5" width="17" height="15" rx="2" />
          <path d="M3.5 9.5h17M8 3v4M16 3v4" />
          <path d="M8 14l2.5 2.5L16 12" />
        </svg>
      ),
      value: '72.3',
      suffix: '%'
    },
    {
      label: 'リモートワーク率',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M4 11l8-6.5L20 11" />
          <path d="M6 9.6V19h12V9.6" />
          <path d="M10 19v-4.5h4V19" />
        </svg>
      ),
      value: '65',
      suffix: '%'
    },
    {
      label: '育休取得率',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M5 16a7 7 0 0114 0z" />
          <path d="M5 16h14M12 9V4.5a4 4 0 014 4" />
          <circle cx="7" cy="20" r="1.6" />
          <circle cx="17" cy="20" r="1.6" />
        </svg>
      ),
      value: '100',
      suffix: '%'
    },
    {
      label: '平均勤続年数',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M4 20V11M9 20V6M14 20v-7M19 20V8" />
          <path d="M3 20h18" />
        </svg>
      ),
      value: '4.2',
      suffix: '年'
    }
  ]

  const basicFeatures = [
    {
      icon: (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3.5 2" />
        </svg>
      ),
      title: 'フレックスタイム制',
      description: 'コアタイムなしのフレックス制度で、自分らしい働き方を支えます。'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24">
          <rect x="3.5" y="5" width="17" height="15" rx="2" />
          <path d="M3.5 9.5h17M8 3v4M16 3v4" />
        </svg>
      ),
      title: '休暇・休日制度',
      description: '完全週休2日制、祝日、年末年始休暇のほか、特別休暇や慶弔休暇も整えています。'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M4 11l8-6.5L20 11" />
          <path d="M6 9.6V19h12V9.6" />
          <path d="M10 19v-4.5h4V19" />
        </svg>
      ),
      title: 'リモートワーク制度',
      description: '業務やライフスタイルに合わせて、リモートワークが可能です。'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M4 5.5A2 2 0 016 4h6v15H6a2 2 0 00-2 1.2z" />
          <path d="M20 5.5A2 2 0 0018 4h-6v15h6a2 2 0 012 1.2z" />
        </svg>
      ),
      title: '学習支援制度',
      description: '書籍購入補助や外部セミナー参加補助など、スキルアップを支援します。'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
          <path d="M9 12l2 2 4-4.5" />
        </svg>
      ),
      title: '社会保険完備',
      description: '健康保険・厚生年金・雇用保険・労災保険など各種社会保険を完備しています。'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 20S4 14.5 4 9.2A4.2 4.2 0 0112 6a4.2 4.2 0 018 3.2C20 14.5 12 20 12 20z" />
        </svg>
      ),
      title: '健康サポート',
      description: '定期健康診断やメンタルヘルス相談など、心身の健康をサポートします。'
    }
  ]

  const officeCards = [
    {
      image: `${BASE_URL}assets/images/cult_yoshinani.png`,
      title: '開放的な空間設計',
      description: '大きな窓から自然光が差し込み、明るく開放的なオフィスです。'
    },
    {
      image: `${BASE_URL}assets/images/cult_connect.png`,
      title: 'リフレッシュスペース',
      description: 'ソファやグリーンに囲まれたスペースで、リフレッシュや気軽な会話が生まれます。'
    },
    {
      image: `${BASE_URL}assets/images/about_cafe.png`,
      title: '集中できる会議室',
      description: '用途に合わせた会議室を完備。オンライン会議も快適に行えます。'
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
            <Link className="head-btn head-btn--dark" to="/jobs">募集職種一覧<span className="ar">→</span></Link>
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
            <Link to="/culture"><span className="dot"></span>カルチャー</Link>
            <Link to="/jobs"><span className="dot"></span>職種紹介</Link>
            <Link className="active" to="/work"><span className="dot"></span>働く環境</Link>
            <Link to="/#recruit"><span className="dot"></span>採用</Link>
          </nav>
          <div className="hero-head">
            <img className="hero-dots" src={`${BASE_URL}assets/images/deco_dots_scatter.png`} alt="" />
            <ScrollReveal animation="fadeUp">
              <h1>働く環境</h1>
            </ScrollReveal>
            <ScrollReveal animation="fadeUp" delay={0.1}>
              <p>ライティで働く人が、<br />自分らしく力を発揮できるために。</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Data Section */}
      <section className="data-sec">
        <div className="wrap">
          <div className="data-head">
            <div>
              <ScrollReveal animation="fadeUp">
                <div className="f-eyebrow">Data</div>
                <h2>数字で見るライティ</h2>
                <p>ライティで働くメンバーや、事業の特徴を数字でご紹介します。データから、私たちの組織や働き方のリアルを感じてください。</p>
              </ScrollReveal>
            </div>
            <ScrollReveal animation="fadeUp" delay={0.1}>
              <div className="chart-card">
                <h3>年齢構成</h3>
                <div className="donut-wrap">
                  <div className="donut"></div>
                  <div className="donut-center">
                    <span className="lab">平均年齢</span>
                    <span className="big">34.17<small>歳</small></span>
                  </div>
                  <span className="donut-leg" style={{ top: '6px', right: '6px' }}><b>20代</b>26.7%</span>
                  <span className="donut-leg" style={{ bottom: '0', right: '4px' }}><b>30代</b>51.4%</span>
                  <span className="donut-leg" style={{ top: '30px', left: '-26px' }}><b>40代以上</b>21.9%</span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fadeUp" delay={0.2}>
              <div className="chart-card">
                <h3>職種構成</h3>
                <div className="bubble-area">
                  <div className="bubble" style={{ width: '130px', height: '130px', background: '#ee6c3a', left: '6px', top: '54px' }}>
                    <span className="pct" style={{ fontSize: '34px' }}>43<small>%</small></span>
                  </div>
                  <span className="bubble-lab" style={{ left: '42px', top: '190px' }}>ビジネス</span>
                  <div className="bubble" style={{ width: '88px', height: '88px', background: '#f08b5a', left: '158px', top: '14px' }}>
                    <span className="pct" style={{ fontSize: '24px' }}>25<small>%</small></span>
                  </div>
                  <span className="bubble-lab" style={{ left: '170px', top: '-2px' }}>エンジニア</span>
                  <div className="bubble" style={{ width: '64px', height: '64px', background: '#f3a276', left: '148px', top: '128px' }}>
                    <span className="pct" style={{ fontSize: '17px' }}>11<small>%</small></span>
                  </div>
                  <span className="bubble-lab" style={{ left: '142px', top: '196px' }}>プロダクト</span>
                  <div className="bubble" style={{ width: '80px', height: '80px', background: '#f08b5a', right: '2px', top: '66px' }}>
                    <span className="pct" style={{ fontSize: '21px' }}>18<small>%</small></span>
                  </div>
                  <span className="bubble-lab" style={{ right: '24px', top: '38px' }}>コーポレート</span>
                  <div className="bubble" style={{ width: '44px', height: '44px', background: '#f6bd97', right: '18px', top: '152px' }}>
                    <span className="pct" style={{ fontSize: '12px' }}>3<small>%</small></span>
                  </div>
                  <span className="bubble-lab" style={{ right: '18px', top: '200px' }}>デザイン</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="stat-grid">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} animation="fadeUp" delay={index * 0.05}>
                <div className="stat">
                  <div className="lab">{stat.label}</div>
                  <div className="ic">{stat.icon}</div>
                  <div className="val">
                    {stat.prefix && <span className="u">{stat.prefix}</span>}
                    {stat.value}
                    {stat.suffix && <small>{stat.suffix}</small>}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <p className="data-note">※ 2024年4月時点のデータです</p>
        </div>
      </section>

      {/* Basics Section */}
      <section className="basics">
        <div className="wrap basics-grid">
          <div className="basics-left">
            <ScrollReveal animation="fadeRight">
              <div className="f-eyebrow">Basics</div>
              <h2>働き方の基本情報</h2>
              <p>安心して長く働けるように、ライティでは制度やサポート体制を整えています。</p>
            </ScrollReveal>
          </div>
          <div className="basics-feats">
            {basicFeatures.map((feat, index) => (
              <ScrollReveal key={index} animation="fadeUp" delay={index * 0.05}>
                <div className="bfeat">
                  <div className="ic">{feat.icon}</div>
                  <div>
                    <h4>{feat.title}</h4>
                    <p>{feat.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Office Section */}
      <section className="office">
        <div className="wrap office-grid">
          <div className="office-left">
            <ScrollReveal animation="fadeRight">
              <div className="f-eyebrow">Office</div>
              <h2>オフィス環境</h2>
              <p>心地よく、集中して働けるオフィスづくりを大切にしています。<br />自然光が差し込む開放的な空間で、チームのつながりも生まれます。</p>
            </ScrollReveal>
          </div>
          <div className="office-cards">
            {officeCards.map((card, index) => (
              <ScrollReveal key={index} animation="fadeUp" delay={index * 0.1}>
                <article className="ocard">
                  <div className="img"><img src={card.image} alt={card.title} /></div>
                  <div className="body">
                    <h4>{card.title}</h4>
                    <p>{card.description}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Work CTA Section */}
      <section className="workcta">
        <div className="wrap workcta-inner">
          <ScrollReveal animation="fadeRight">
            <img className="workcta-photo" src={`${BASE_URL}assets/images/cta_team.png`} alt="ライティで働く人" />
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" delay={0.1}>
            <div className="workcta-text">
              <h2>ライティの働く環境について、もっと詳しく知りたい方へ</h2>
              <p>社員インタビューや一日のスケジュールなど、リアルな働き方をご紹介しています。</p>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" delay={0.2}>
            <Link className="workcta-btn" to="/culture">働く環境をもっと見る<span className="ar">→</span></Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="foot work-foot">
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
                <Link to="/jobs">デザイナー</Link>
                <Link to="/jobs">エンジニア</Link>
                <Link to="/jobs">その他職種</Link>
              </div>
              <div className="foot-col">
                <h5>働く環境</h5>
                <Link to="/work">制度・福利厚生</Link>
                <Link to="/work">チーム・文化</Link>
                <Link to="/work">メンバーインタビュー</Link>
              </div>
              <div className="foot-col">
                <h5>採用</h5>
                <Link to="/jobs">募集職種一覧</Link>
                <Link to="/#recruit">選考フロー</Link>
                <a href="#">よくある質問</a>
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

export default Work
