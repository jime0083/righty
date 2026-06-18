import { Link } from 'react-router-dom'
import { ScrollReveal } from '../components/ScrollReveal'
import { Footer } from '../components/Footer'
import { SideNav } from '../components/SideNav'
import { Header } from '../components/Header'
import '../Message.css'

const BASE_URL = import.meta.env.BASE_URL

function Message() {
  return (
    <>
      <Header />

      {/* Page Hero */}
      <section className="page-hero">
        <span className="hero-blob"></span>
        <div className="wrap hero-grid">
          <SideNav />
          <div className="hero-head">
            <img className="hero-dots" src={`${BASE_URL}assets/images/deco_dots_scatter.png`} alt="" />
            <ScrollReveal animation="fadeUp">
              <div className="f-eyebrow" style={{ marginBottom: '14px' }}>Message</div>
              <h1>採用メッセージ</h1>
            </ScrollReveal>
            <ScrollReveal animation="fadeUp" delay={0.1}>
              <p>ライティの想いや目指す未来、<br />代表とCTOのメッセージをお届けします。</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="msg-block ceo">
        <div className="wrap msg-grid">
          <div className="msg-media">
            <ScrollReveal animation="scale">
              <span className="msg-deco c1"></span>
              <span className="msg-deco dots" style={{ top: '-26px', right: '-10px' }}></span>
              <div className="photo blob-rect">
                <img src={`${BASE_URL}assets/images/ceo2_left.png`} alt="代表取締役 太田憲一" />
              </div>
              <div className="msg-caption">
                <div className="role">CEO</div>
                <div className="jp">太田 憲一</div>
                <div className="sign">Kenichi Ota</div>
              </div>
            </ScrollReveal>
          </div>
          <div className="msg-body">
            <ScrollReveal animation="fadeUp">
              <h2>新しい価値を<br />社会に実装していく</h2>
              <div className="msg-rule"></div>
            </ScrollReveal>
            <ScrollReveal animation="fadeUp" delay={0.1}>
              <p>ギフティは、「日頃の小さなありがとうを、もっと手軽に届けられるようにしたい」という想いからスタートしました。CtoCのカジュアルギフトサービス「giftee」から始まり、十数年が経った今、事業も組織も大きく成長しましたが、会社を立ち上げた当初から大切にしてきた芯の部分は変わっていません。</p>
              <p>「気持ちを贈る」という行為には、まだ十分に開拓されていない可能性があります。個人から個人へ、企業から従業員へ、自治体から住民へと、贈る主体やシーンが変わる中で、ギフトに求められる役割も進化しています。その変化の一つひとつに向き合う中で、この領域にはまだ探求すべき余白が大きく残されていると、強く実感しています。</p>
              <p>実際、私たちの事業は、最初から明確な完成形を描いて進んできたわけでありません。お客様の声に向き合い続ける中で、少しずつ事業の輪郭が広がってきました。例えば、企業が従業員を表彰する際に「自分たちらしさ」を大切にしたいという要望は、私たちの想像以上に多く、そこからeギフトの法人活用に特化した「giftee for Business」が誕生しました。</p>
              <p>変化に柔軟であること、そして本質的な価値を見極めること。その姿勢こそが、これからのギフトのあり方をつくっていくと信じています。私たちと一緒に、未来の"あたりまえ"をデザインしていきましょう。</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTO Message */}
      <section className="msg-block cto">
        <div className="wrap msg-grid flip">
          <div className="msg-media">
            <ScrollReveal animation="scale">
              <span className="msg-deco c2" style={{ left: '-20px', top: '14%' }}></span>
              <span className="msg-deco dots" style={{ bottom: '30px', left: '-30px' }}></span>
              <div className="photo blob-rect">
                <img src={`${BASE_URL}assets/images/cto_rect.png`} alt="CTO 鈴木達哉" />
              </div>
              <div className="msg-caption" style={{ textAlign: 'right' }}>
                <div className="role">CTO</div>
                <div className="jp">鈴木 達哉</div>
                <div className="sign">Tatsuya Suzuki</div>
              </div>
            </ScrollReveal>
          </div>
          <div className="msg-body">
            <ScrollReveal animation="fadeUp">
              <h2>テクノロジーの力で、<br />心を動かす体験をつくる</h2>
              <div className="msg-rule"></div>
            </ScrollReveal>
            <ScrollReveal animation="fadeUp" delay={0.1}>
              <p>ライティのプロダクトは、デザインとテクノロジーの力で「気持ちを贈る」という体験をより良いものにすることを目指しています。ユーザーにとっては、直感的で使いやすく、心が動く体験を。事業にとっては、成長を支える強くしなやかなシステムを。</p>
              <p>その実現のために、私たちは常に技術の可能性を探求し、変化を楽しみながらチャレンジしています。新しい技術を取り入れるときには、目的を見失わず、本質的な価値につながるかを大切に判断する。スピードと品質のバランスを意識し、持続的に価値を届けられる仕組みをつくることが、エンジニアリングの役割だと考えています。</p>
              <p>また、技術は一人ではなく、チームで生み出すもの。デザイナーやビジネスサイドと対話を重ねながら、互いの専門性を尊重し、より良い未来を一緒に描いていくことが何よりも大切です。</p>
              <p>ギフトの体験を進化させることは、人のつながりや社会の未来をより良くすることにつながると信じています。テクノロジーの力で、心を動かす体験を一緒につくっていきましょう。</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="msgcta">
        <div className="wrap">
          <ScrollReveal animation="fadeUp">
            <div className="msgcta-inner">
              <span className="msgcta-ic">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="8" r="3.4" />
                  <path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" />
                  <path d="M18 3.5l.8 1.7 1.7.3-1.2 1.2.3 1.7-1.6-.8-1.6.8.3-1.7-1.2-1.2 1.7-.3z" />
                </svg>
              </span>
              <div className="msgcta-text">
                <h2>ライティで、あなたの価値を社会に届けませんか？</h2>
                <p>私たちと一緒に、未来の「あたりまえ」をつくりましょう。</p>
              </div>
              <div className="msgcta-btns">
                <Link className="fill" to="/jobs">募集職種一覧を見る<span className="ar">→</span></Link>
                <Link className="out" to="/shinsotsu">新卒採用はこちら<span className="ar">→</span></Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Message
