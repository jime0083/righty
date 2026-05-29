import { Link } from 'react-router-dom';
import styles from './Jobs.module.css';

const jobCategories = [
  {
    id: 1,
    title: 'ビジネス',
    roles: ['事業企画・開発', 'M&A', 'セールス', 'マーケティング', 'プランナー'],
    to: '/jobs/business',
  },
  {
    id: 2,
    title: 'プロダクト',
    roles: ['プロダクトマネージャー', 'プロジェクトマネージャー', 'プロダクトオペレーション'],
    to: '/jobs/product',
  },
  {
    id: 3,
    title: 'エンジニア',
    roles: ['エンジニア'],
    to: '/jobs/engineer',
  },
  {
    id: 4,
    title: 'デザイン',
    roles: ['コミュニケーションデザイン', 'プロダクトデザイン'],
    to: '/jobs/design',
  },
  {
    id: 5,
    title: 'コーポレート',
    roles: ['経営企画', '内部監査', '財務・経理', 'IR', '人事', '法務', 'PR'],
    to: '/jobs/corporate',
  },
];

const Jobs = () => {
  return (
    <section className={styles.jobs}>
      <div className={styles.container}>
        {/* セクションヘッダー */}
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>職種紹介</h2>
          <p className={styles.sectionDescription}>
            多様なバックグラウンドを持つメンバーが、
            <br className={styles.brDesktop} />
            それぞれの専門性を活かしながら協働しています。
          </p>
        </div>

        {/* 職種カードグリッド */}
        <div className={styles.grid}>
          {jobCategories.map((job) => (
            <Link key={job.id} to={job.to} className={styles.jobCard}>
              <div className={styles.jobContent}>
                <h3 className={styles.jobTitle}>
                  {job.title}
                  <span className={styles.jobArrow}>→</span>
                </h3>
                <div className={styles.jobRoles}>
                  {job.roles.map((role, index) => (
                    <span key={index} className={styles.jobRole}>
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* もっと見るリンク */}
        <div className={styles.moreLink}>
          <Link to="/jobs" className={styles.moreButton}>
            <span>職種紹介を見る</span>
            <span className={styles.moreArrow}>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
