import { Button } from '../common';
import styles from './Environment.module.css';

const stats = [
  { id: 1, number: '85', unit: '%', label: 'リモートワーク利用率' },
  { id: 2, number: '28', unit: '歳', label: '平均年齢' },
  { id: 3, number: '45', unit: '%', label: '女性比率' },
  { id: 4, number: '120', unit: '時間', label: '月間残業時間上限' },
];

const benefits = [
  {
    id: 1,
    icon: '🏠',
    title: 'リモートワーク',
    description: '週3日以上のリモートワークが可能。柔軟な働き方を支援します。',
  },
  {
    id: 2,
    icon: '📚',
    title: '学習支援',
    description: '書籍購入補助、カンファレンス参加支援など、成長を後押しします。',
  },
  {
    id: 3,
    icon: '🏥',
    title: '健康サポート',
    description: '定期健康診断、メンタルヘルスケア、各種保険を完備。',
  },
  {
    id: 4,
    icon: '🎉',
    title: '社内イベント',
    description: '部門を超えた交流イベントや、チームビルディングを実施。',
  },
];

const Environment = () => {
  return (
    <section className={styles.environment}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>ENVIRONMENT</span>
          <h2 className={styles.title}>働く環境</h2>
          <p className={styles.description}>
            メンバーが最高のパフォーマンスを発揮できるよう、
            働きやすい環境づくりに力を入れています。
          </p>
        </div>

        {/* 数字で見るライティ */}
        <div className={styles.stats}>
          {stats.map((stat) => (
            <div key={stat.id} className={styles.statItem}>
              <div className={styles.statNumber}>
                <span className={styles.statValue}>{stat.number}</span>
                <span className={styles.statUnit}>{stat.unit}</span>
              </div>
              <p className={styles.statLabel}>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* 福利厚生 */}
        <div className={styles.benefits}>
          {benefits.map((benefit) => (
            <div key={benefit.id} className={styles.benefitItem}>
              <div className={styles.benefitIcon}>{benefit.icon}</div>
              <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              <p className={styles.benefitDescription}>{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* オフィス画像 */}
        <div className={styles.office}>
          <div className={styles.officeImageWrapper}>
            <img
              src="/images/office-main.jpg"
              alt="オフィスの様子"
              className={styles.officeImage}
            />
          </div>
          <div className={styles.officeContent}>
            <h3 className={styles.officeTitle}>快適なオフィス環境</h3>
            <p className={styles.officeDescription}>
              東京・渋谷に位置するオフィスは、
              フリーアドレス制を採用した開放的な空間です。
              集中ブース、ミーティングスペース、
              リフレッシュエリアなど、
              様々なワークスタイルに対応しています。
            </p>
          </div>
        </div>

        <div className={styles.action}>
          <Button to="/environment" variant="outline">
            働く環境をもっと見る
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Environment;
