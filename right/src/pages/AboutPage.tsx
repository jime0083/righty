import { Link } from 'react-router-dom';
import { Header, Footer, BlobBackground } from '../components/common';
import styles from './AboutPage.module.css';

interface AboutCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  to: string;
}

const aboutCards: AboutCardProps[] = [
  {
    id: 'message',
    title: '採用メッセージ',
    description:
      '代表取締役からのメッセージ。求職者の皆様にお伝えしたい、私たちの想いと期待について。',
    image: '/images/about-message.jpg',
    to: '/about/message',
  },
  {
    id: 'vision',
    title: '私たちが目指すこと',
    description:
      'ライティの事業の原点と現在地、私たちがつくっていきたい社会のあり方とこれからの展望。',
    image: '/images/about-vision.jpg',
    to: '/about/vision',
  },
  {
    id: 'business',
    title: 'ライティの事業',
    description:
      'eギフトプラットフォーム事業を中心に、法人向けサービスから個人向けサービスまで幅広く展開しています。',
    image: '/images/about-business.jpg',
    to: '/about/services',
  },
];

const AboutCard = ({ title, description, image, to }: AboutCardProps) => {
  return (
    <Link to={to} className={styles.card}>
      <div className={styles.cardImageWrapper}>
        <img src={image} alt={title} className={styles.cardImage} />
      </div>
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>
          {title}
          <span className={styles.cardArrow}>→</span>
        </h2>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </Link>
  );
};

const AboutPage = () => {
  return (
    <div className={styles.page}>
      <BlobBackground />
      <Header />
      <main className={styles.main}>
        {/* パンくずリスト */}
        <nav className={styles.breadcrumb}>
          <Link to="/" className={styles.breadcrumbLink}>
            トップ
          </Link>
          <span className={styles.breadcrumbSeparator}>&gt;</span>
          <span className={styles.breadcrumbCurrent}>ライティについて</span>
        </nav>

        {/* ページタイトル */}
        <div className={styles.titleSection}>
          <h1 className={styles.pageTitle}>ライティについて</h1>
        </div>

        {/* カードセクション */}
        <div className={styles.cardsSection}>
          {aboutCards.map((card) => (
            <AboutCard key={card.id} {...card} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
