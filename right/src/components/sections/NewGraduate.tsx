import { Button } from '../common';
import styles from './NewGraduate.module.css';

const positions = [
  {
    id: 1,
    title: 'エンジニア職',
    description: 'Webサービスの開発を通じて、技術力を磨きながら成長できる環境です。',
  },
  {
    id: 2,
    title: 'ビジネス職',
    description: '企画、営業、マーケティングなど、幅広いフィールドで活躍できます。',
  },
  {
    id: 3,
    title: 'デザイナー職',
    description: 'UI/UXデザインを通じて、ユーザー体験を創造していきます。',
  },
];

const NewGraduate = () => {
  return (
    <section className={styles.newGraduate}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textSection}>
            <span className={styles.label}>NEW GRADUATE</span>
            <h2 className={styles.title}>新卒採用</h2>
            <p className={styles.description}>
              2026年卒業予定の方を対象とした新卒採用を行っています。
              未来を一緒につくる仲間を募集しています。
            </p>

            <div className={styles.positions}>
              {positions.map((position) => (
                <div key={position.id} className={styles.positionItem}>
                  <h3 className={styles.positionTitle}>{position.title}</h3>
                  <p className={styles.positionDescription}>{position.description}</p>
                </div>
              ))}
            </div>

            <div className={styles.action}>
              <Button to="/new-graduate" variant="primary" size="lg">
                新卒採用について
              </Button>
            </div>
          </div>

          <div className={styles.imageSection}>
            <div className={styles.imageGrid}>
              <div className={styles.imageItem}>
                <img
                  src="/images/new-graduate-1.jpg"
                  alt="若手社員の様子"
                  className={styles.image}
                />
              </div>
              <div className={styles.imageItem}>
                <img
                  src="/images/new-graduate-2.jpg"
                  alt="研修の様子"
                  className={styles.image}
                />
              </div>
              <div className={styles.imageItem}>
                <img
                  src="/images/new-graduate-3.jpg"
                  alt="チームミーティング"
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewGraduate;
