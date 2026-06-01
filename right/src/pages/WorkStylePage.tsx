import { Link } from 'react-router-dom';
import { Header, Footer, BlobBackground } from '../components/common';
import styles from './WorkStylePage.module.css';

// 数字で見るライティ データ
interface StatItemProps {
  id: string;
  label: string;
  value: string;
  unit?: string;
  subLabel?: string;
  breakdown?: { label: string; value: string }[];
}

const statItems: StatItemProps[] = [
  {
    id: 'employees',
    label: '従業員数',
    value: '329',
    unit: '人',
    subLabel: '2025年11月時点',
  },
  {
    id: 'gender-ratio',
    label: '男女比率',
    value: '',
    breakdown: [
      { label: '男性', value: '55%' },
      { label: '女性', value: '45%' },
    ],
  },
  {
    id: 'average-age',
    label: '平均年齢',
    value: '34.17',
    unit: '歳',
    breakdown: [
      { label: '20代', value: '26.7%' },
      { label: '30代', value: '51.4%' },
      { label: '40代', value: '21.9%' },
    ],
  },
  {
    id: 'job-ratio',
    label: '職種比率',
    value: '',
    breakdown: [
      { label: 'ビジネス', value: '43%' },
      { label: 'エンジニア', value: '25%' },
      { label: 'コーポレート', value: '18%' },
      { label: 'プロダクト', value: '11%' },
      { label: 'デザイン', value: '3%' },
    ],
  },
  {
    id: 'overtime',
    label: '月平均残業',
    value: '16.9',
    unit: '時間',
  },
  {
    id: 'paid-leave',
    label: '有給休暇取得率',
    value: '77.35',
    unit: '%',
  },
  {
    id: 'parental-leave',
    label: '育休取得率',
    value: '',
    breakdown: [
      { label: '男性', value: '82%' },
      { label: '女性', value: '100%' },
    ],
  },
  {
    id: 'parental-return',
    label: '育休復帰率',
    value: '100',
    unit: '%',
    subLabel: '男女ともに',
  },
  {
    id: 'parents',
    label: '子育て社員割合',
    value: '33',
    unit: '%',
  },
  {
    id: 'group-companies',
    label: 'グループ会社',
    value: '',
    breakdown: [
      { label: '国内', value: '3社' },
      { label: '海外', value: '5社' },
    ],
  },
];

// 働き方の基本情報 データ
interface WorkInfoItemProps {
  id: string;
  title: string;
  content: string;
}

const workInfoItems: WorkInfoItemProps[] = [
  {
    id: 'flextime',
    title: '勤務時間',
    content: 'フレックスタイム制（コアタイム11:00〜16:00）、標準労働時間8時間',
  },
  {
    id: 'remote',
    title: 'リモートワーク',
    content: 'リモートワーク可（週2回出社）',
  },
  {
    id: 'holidays',
    title: '休日',
    content: '完全週休2日制（土日祝）、年間休日120日以上',
  },
  {
    id: 'vacation',
    title: '休暇制度',
    content: '有給休暇、夏季休暇、年末年始休暇、慶弔休暇、育児・介護休業制度',
  },
];

// 福利厚生 データ
interface BenefitItemProps {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const benefitItems: BenefitItemProps[] = [
  {
    id: 'commute',
    icon: '🚃',
    title: '通勤費全額支給',
    description: '公共交通機関の通勤費を全額支給します。',
  },
  {
    id: 'insurance',
    icon: '🏥',
    title: '社会保険完備',
    description: '健康保険、厚生年金、雇用保険、労災保険を完備しています。',
  },
  {
    id: 'stock',
    icon: '📈',
    title: '従業員持株会',
    description: '自社株を優遇価格で購入できる持株会制度があります。',
  },
  {
    id: 'option',
    icon: '🎯',
    title: 'ストックオプション',
    description: '業績に応じてストックオプションを付与しています。',
  },
  {
    id: 'benefit',
    icon: '🎁',
    title: 'ライティ Benefit',
    description: '自社サービスを割引価格で購入できます。',
  },
  {
    id: 'birthday',
    icon: '🎂',
    title: '誕生日ギフト',
    description: '誕生日には会社からギフトをお届けします。',
  },
  {
    id: 'bread',
    icon: '🥐',
    title: 'パン無料提供',
    description: 'オフィスで焼きたてパンを無料で提供しています。',
  },
  {
    id: 'beer',
    icon: '🍺',
    title: 'クラフトビール割引',
    description: '提携店でクラフトビールを割引価格で楽しめます。',
  },
  {
    id: 'drink',
    icon: '☕',
    title: 'ドリンク無料提供',
    description: 'コーヒー、お茶、ソフトドリンクを無料で提供しています。',
  },
];

// オフィス画像
const officeImages = [
  { id: 1, src: '/images/meeting1.png', alt: 'オフィス風景1' },
  { id: 2, src: '/images/meeting2.png', alt: 'オフィス風景2' },
  { id: 3, src: '/images/meeting3.png', alt: 'オフィス風景3' },
  { id: 4, src: '/images/meeting4.png', alt: 'オフィス風景4' },
  { id: 5, src: '/images/desk1.png', alt: 'オフィス風景5' },
];

// 統計カードコンポーネント
const StatCard = ({ label, value, unit, subLabel, breakdown }: StatItemProps) => {
  return (
    <div className={styles.statCard}>
      <h3 className={styles.statLabel}>{label}</h3>
      {value && (
        <div className={styles.statValue}>
          <span className={styles.statNumber}>{value}</span>
          {unit && <span className={styles.statUnit}>{unit}</span>}
        </div>
      )}
      {subLabel && <p className={styles.statSubLabel}>{subLabel}</p>}
      {breakdown && (
        <div className={styles.statBreakdown}>
          {breakdown.map((item, index) => (
            <div key={index} className={styles.breakdownItem}>
              <span className={styles.breakdownLabel}>{item.label}</span>
              <span className={styles.breakdownValue}>{item.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const WorkStylePage = () => {
  return (
    <div className={styles.page}>
      <BlobBackground />
      <Header />
      <main className={styles.main}>
        {/* ヒーローセクション */}
        <section className={styles.heroSection}>
          <div className={styles.heroBackground}>
            <img
              src="/images/desk1.png"
              alt="働く環境"
              className={styles.heroImage}
            />
            <div className={styles.heroOverlay}></div>
          </div>
          <div className={styles.heroContent}>
            <nav className={styles.breadcrumb}>
              <Link to="/" className={styles.breadcrumbLink}>
                トップ
              </Link>
              <span className={styles.breadcrumbSeparator}>&gt;</span>
              <span className={styles.breadcrumbCurrent}>働く環境</span>
            </nav>
            <h1 className={styles.heroTitle}>働く環境</h1>
            <p className={styles.heroDescription}>
              ライティで働く人々の環境や制度、
              <br className={styles.brDesktop} />
              福利厚生についてご紹介します。
            </p>
          </div>
        </section>

        {/* 数字で見るライティ セクション */}
        <section className={styles.statsSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>数字で見るライティ</h2>
              <p className={styles.sectionSubtitle}>
                組織の現況と働く環境をデータでご紹介します。
              </p>
            </div>
            <div className={styles.statsGrid}>
              {statItems.map((stat) => (
                <StatCard key={stat.id} {...stat} />
              ))}
            </div>
          </div>
        </section>

        {/* 働き方の基本情報 セクション */}
        <section className={styles.workInfoSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>働き方の基本情報</h2>
            </div>
            <div className={styles.workInfoGrid}>
              {workInfoItems.map((item) => (
                <div key={item.id} className={styles.workInfoCard}>
                  <h3 className={styles.workInfoTitle}>{item.title}</h3>
                  <p className={styles.workInfoContent}>{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 福利厚生・手当 セクション */}
        <section className={styles.benefitsSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>福利厚生・手当</h2>
              <p className={styles.sectionSubtitle}>
                ライフスタイルに合わせた多様な制度をご用意しています。
              </p>
            </div>
            <div className={styles.benefitsGrid}>
              {benefitItems.map((item) => (
                <div key={item.id} className={styles.benefitCard}>
                  <span className={styles.benefitIcon}>{item.icon}</span>
                  <h3 className={styles.benefitTitle}>{item.title}</h3>
                  <p className={styles.benefitDescription}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* オフィス環境 セクション */}
        <section className={styles.officeSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>オフィス環境</h2>
              <p className={styles.sectionSubtitle}>
                社会にキモチを循環させる人たちが働く場所をご紹介します。
              </p>
            </div>
          </div>
          {/* オフィス画像カルーセル */}
          <div className={styles.officeCarousel}>
            <div className={styles.officeCarouselTrack}>
              {[...officeImages, ...officeImages].map((image, index) => (
                <div key={`${image.id}-${index}`} className={styles.officeCarouselItem}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={styles.officeCarouselImage}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.officeInfo}>
              <div className={styles.officeInfoItem}>
                <h3 className={styles.officeInfoTitle}>所在地</h3>
                <p className={styles.officeInfoContent}>
                  〒141-0031<br />
                  東京都品川区西五反田1-18-9<br />
                  五反田NTビル 6F
                </p>
              </div>
              <div className={styles.officeInfoItem}>
                <h3 className={styles.officeInfoTitle}>アクセス</h3>
                <p className={styles.officeInfoContent}>
                  JR山手線「五反田駅」西口より徒歩3分<br />
                  都営浅草線「五反田駅」A1出口より徒歩2分<br />
                  東急池上線「五反田駅」より徒歩4分
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WorkStylePage;
