import { Link } from 'react-router-dom';
import { Header, Footer } from '../components/common';
import styles from './CulturePage.module.css';

// Culture Codeデータ
interface CultureCodeProps {
  id: string;
  number: string;
  title: string;
  titleEn?: string;
  description: string[];
  image: string;
  isReversed?: boolean;
}

const cultureCodes: CultureCodeProps[] = [
  {
    id: 'make-meaning',
    number: '01',
    title: 'make meaning',
    description: [
      '私たちが追い求めているのは、社会を新しくより良くしていく文化をつくること。だからこそ、"本質的な価値をつくる"ことが重要です。',
      '「ギフト」というものは、世の中の多くの「モノ」とは異なり、"価値"の「捉え直し」をしています。モノそれ自体の価値とは異なるレイヤーの価値、つまり人と人との関係性から生まれるもうひとつの価値を引き出し高めていく。そんな捉え直しをビジネスにしています。',
      '私たちの事業の本質的な価値とは何か。それを常に問い、言語化し、実践していくことが、私たちの一丁目一番地です。',
    ],
    image: '/images/culture-code-1.jpg',
    isReversed: false,
  },
  {
    id: 'confident-humble',
    number: '02',
    title: '自信はあるけど謙虚',
    description: [
      '私たちは、自分たちの事業や仕事に対して強い矜持を持っています。一方で、その矜持は自己顕示のためではなく、社会にインパクトを与えるためのものです。',
      '自信があるからこそ謙虚でいられる。謙虚だからこそ成長できる。そのバランスを大切にしています。',
      '言葉で主張するのではなく、姿勢と結果で示す。そのシンプルな原理が、私たちの「佇まい」をつくっています。',
    ],
    image: '/images/culture-code-2.jpg',
    isReversed: true,
  },
  {
    id: 'yoshinani',
    number: '03',
    title: 'よしなに進める',
    description: [
      '「よしなに」という言葉には、広い解釈の幅があります。自立した仲間のやりたいことを尊重し、その人が最も良いと判断した方法で進めていくこと。',
      'それは放任ではなく、プロフェッショナルとしての責任を持った自律です。組織にとって「最も良い」と判断したことを、責任を持って実行する。',
      'そんな文化が、私たちのスピード感と柔軟性を支えています。',
    ],
    image: '/images/culture-code-3.jpg',
    isReversed: false,
  },
  {
    id: 'un-en-kan',
    number: '04',
    title: '運・縁・勘',
    description: [
      '私たちは、利益だけでなく巡り合わせも大切にしています。「運」「縁」「勘」という、一見ビジネスとは無縁に見える3つの要素。',
      '「運」は、日々の行動によって引き寄せるもの。「縁」は、出会いに対する感度を研ぎすますこと。「勘」は、言語化できないけれど大切なセンス。',
      'オープンでいること、前のめりな姿勢でいること。そうした意識が、予期せぬ良い出会いや発見をもたらしてくれると信じています。',
    ],
    image: '/images/culture-code-4.jpg',
    isReversed: true,
  },
];

// 関連セクションデータ
interface RelatedSectionProps {
  id: string;
  title: string;
  description: string;
  image: string;
  to: string;
  isExternal?: boolean;
}

const relatedSections: RelatedSectionProps[] = [
  {
    id: 'organization',
    title: '組織づくり',
    description:
      '経営陣が未来の組織構想を本音で語ります。ライティがどのような組織を目指しているのか、その想いをお伝えします。',
    image: '/images/culture-organization.jpg',
    to: '/organization',
    isExternal: false,
  },
  {
    id: 'media',
    title: 'オウンドメディア',
    description:
      '「awahi magazine」は、人・企業・街の間に縁を育むサービスビジョンの下で、"間"を探求するコンテンツを提供しています。',
    image: '/images/culture-media.jpg',
    to: 'https://example.com/awahi-magazine',
    isExternal: true,
  },
];

// Culture Codeコンポーネント
const CultureCodeCard = ({
  number,
  title,
  description,
  image,
  isReversed,
}: CultureCodeProps) => {
  return (
    <div
      className={`${styles.codeCard} ${isReversed ? styles.codeCardReversed : ''}`}
    >
      <div className={styles.codeImageWrapper}>
        <img src={image} alt={title} className={styles.codeImage} />
      </div>
      <div className={styles.codeContent}>
        <div className={styles.codeNumber}>{number}</div>
        <h3 className={styles.codeTitle}>{title}</h3>
        <div className={styles.codeDescription}>
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

// 関連セクションカードコンポーネント
const RelatedCard = ({
  title,
  description,
  image,
  to,
  isExternal,
}: RelatedSectionProps) => {
  const cardContent = (
    <>
      <div className={styles.relatedImageWrapper}>
        <img src={image} alt={title} className={styles.relatedImage} />
      </div>
      <div className={styles.relatedContent}>
        <h3 className={styles.relatedTitle}>
          {title}
          <span className={styles.relatedArrow}>→</span>
        </h3>
        <p className={styles.relatedDescription}>{description}</p>
      </div>
    </>
  );

  if (isExternal) {
    return (
      <a
        href={to}
        className={styles.relatedCard}
        target="_blank"
        rel="noopener noreferrer"
      >
        {cardContent}
      </a>
    );
  }

  return (
    <Link to={to} className={styles.relatedCard}>
      {cardContent}
    </Link>
  );
};

const CulturePage = () => {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        {/* ヒーローセクション */}
        <section className={styles.heroSection}>
          <div className={styles.heroBackground}>
            <img
              src="/images/culture-hero.jpg"
              alt="カルチャー"
              className={styles.heroImage}
            />
            <div className={styles.heroOverlay}></div>
          </div>
          <div className={styles.heroContent}>
            {/* パンくずリスト */}
            <nav className={styles.breadcrumb}>
              <Link to="/" className={styles.breadcrumbLink}>
                トップ
              </Link>
              <span className={styles.breadcrumbSeparator}>&gt;</span>
              <span className={styles.breadcrumbCurrent}>カルチャー</span>
            </nav>
            <h1 className={styles.heroTitle}>カルチャー</h1>
            <p className={styles.heroDescription}>
              ライティという会社をカタチづくるうえで
              <br className={styles.brDesktop} />
              大切にしている価値観をご紹介します。
            </p>
          </div>
        </section>

        {/* Culture Codeセクション */}
        <section className={styles.codeSection}>
          <div className={styles.codeSectionHeader}>
            <h2 className={styles.codeSectionTitle}>Culture Code</h2>
            <p className={styles.codeSectionSubtitle}>
              私たちが大切にしている4つの価値観
            </p>
          </div>
          <div className={styles.codeList}>
            {cultureCodes.map((code) => (
              <CultureCodeCard key={code.id} {...code} />
            ))}
          </div>
        </section>

        {/* 関連セクション */}
        <section className={styles.relatedSection}>
          <div className={styles.relatedContainer}>
            <h2 className={styles.relatedSectionTitle}>カルチャーをより深く知る</h2>
            <div className={styles.relatedGrid}>
              {relatedSections.map((section) => (
                <RelatedCard key={section.id} {...section} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CulturePage;
