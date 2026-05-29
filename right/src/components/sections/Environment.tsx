import { Link } from 'react-router-dom';
import styles from './Environment.module.css';

const environmentLinks = [
  {
    id: 1,
    title: '数字で見るライティ',
    description: '組織の現況と働く環境をデータでご紹介します。',
    to: '/workstyle/data',
  },
  {
    id: 2,
    title: '福利厚生',
    description: 'ライフスタイルに合わせた多様な制度をご用意しています。',
    to: '/workstyle/benefits',
  },
  {
    id: 3,
    title: 'オフィス環境',
    description: '社会にキモチを循環させる人たちが働く場所をご紹介します。',
    to: '/workstyle/office',
  },
];

const Environment = () => {
  return (
    <section className={styles.environment}>
      <div className={styles.container}>
        {/* 画像エリア */}
        <div className={styles.imageArea}>
          <div className={styles.imageWrapper}>
            <img
              src="/images/desk1.png"
              alt="働く環境"
              className={styles.image}
            />
          </div>
        </div>

        {/* コンテンツエリア */}
        <div className={styles.contentArea}>
          <h2 className={styles.sectionTitle}>働く環境</h2>

          <div className={styles.linkList}>
            {environmentLinks.map((link) => (
              <Link key={link.id} to={link.to} className={styles.linkCard}>
                <div className={styles.linkContent}>
                  <h3 className={styles.linkTitle}>
                    {link.title}
                    <span className={styles.linkArrow}>→</span>
                  </h3>
                  <p className={styles.linkDescription}>{link.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className={styles.moreLink}>
            <Link to="/workstyle" className={styles.moreButton}>
              <span>働く環境を見る</span>
              <span className={styles.moreArrow}>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Environment;
