import { Button, Card } from '../common';
import styles from './Jobs.module.css';

const jobCategories = [
  {
    id: 1,
    shoulder: 'ENGINEERING',
    title: 'エンジニア',
    description:
      'サービスの根幹を支えるシステム開発から、新規プロダクトの立ち上げまで幅広く携わります。',
    tags: ['バックエンド', 'フロントエンド', 'インフラ', 'QA'],
    to: '/positions/engineer',
  },
  {
    id: 2,
    shoulder: 'PRODUCT',
    title: 'プロダクト',
    description:
      'ユーザー体験を設計し、プロダクトの成長をリードするポジションです。',
    tags: ['プロダクトマネージャー', 'デザイナー', 'リサーチャー'],
    to: '/positions/product',
  },
  {
    id: 3,
    shoulder: 'BUSINESS',
    title: 'ビジネス',
    description:
      '事業成長の最前線で、顧客との関係構築やマーケティング戦略を担います。',
    tags: ['セールス', 'マーケティング', 'CS'],
    to: '/positions/business',
  },
  {
    id: 4,
    shoulder: 'CORPORATE',
    title: 'コーポレート',
    description:
      '組織の土台を支え、メンバーが最高のパフォーマンスを発揮できる環境を作ります。',
    tags: ['人事', '経理', '法務', '総務'],
    to: '/positions/corporate',
  },
  {
    id: 5,
    shoulder: 'DATA',
    title: 'データ',
    description:
      'データを活用した意思決定の支援や、機械学習による価値創造を行います。',
    tags: ['データサイエンティスト', 'アナリスト', 'ML'],
    to: '/positions/data',
  },
];

const Jobs = () => {
  return (
    <section className={styles.jobs}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>POSITIONS</span>
          <h2 className={styles.title}>職種紹介</h2>
          <p className={styles.description}>
            ライティでは、様々な職種のプロフェッショナルが
            協力しながらサービスを作り上げています。
            あなたの強みを活かせるポジションを見つけてください。
          </p>
        </div>

        <div className={styles.grid}>
          {jobCategories.map((job) => (
            <Card key={job.id} variant="outlined" to={job.to} className={styles.card}>
              <Card.Content>
                <Card.Shoulder>{job.shoulder}</Card.Shoulder>
                <Card.Title>{job.title}</Card.Title>
                <Card.Description>{job.description}</Card.Description>
                <Card.Tags tags={job.tags} />
              </Card.Content>
            </Card>
          ))}
        </div>

        <div className={styles.action}>
          <Button to="/jobs" variant="primary" size="lg">
            募集職種一覧を見る
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
