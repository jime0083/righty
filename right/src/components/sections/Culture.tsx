import { Button, Card } from '../common';
import styles from './Culture.module.css';

const cultureItems = [
  {
    id: 1,
    title: 'チームワーク',
    description:
      '部門を超えた協力体制を大切にし、一人ひとりの強みを活かしながらチームで成果を出すことを重視しています。',
    image: '/images/culture-teamwork.jpg',
  },
  {
    id: 2,
    title: 'チャレンジ精神',
    description:
      '失敗を恐れず新しいことに挑戦する姿勢を大切にしています。スピード感を持って、まずはやってみる文化です。',
    image: '/images/culture-challenge.jpg',
  },
  {
    id: 3,
    title: 'ユーザーファースト',
    description:
      '常にユーザーの視点に立ち、本当に価値のあるサービスを追求しています。',
    image: '/images/culture-user.jpg',
  },
  {
    id: 4,
    title: 'オープンなコミュニケーション',
    description:
      'フラットな組織文化で、誰もが意見を言いやすい環境づくりを心がけています。',
    image: '/images/culture-communication.jpg',
  },
];

const Culture = () => {
  return (
    <section className={styles.culture}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>CULTURE</span>
          <h2 className={styles.title}>カルチャー</h2>
          <p className={styles.description}>
            ライティが大切にしている価値観と文化をご紹介します。
            私たちは「つながり」を軸に、日々成長し続けています。
          </p>
        </div>

        <div className={styles.grid}>
          {cultureItems.map((item) => (
            <Card key={item.id} variant="filled" className={styles.card}>
              <Card.Image src={item.image} alt={item.title} />
              <Card.Content>
                <Card.Title>{item.title}</Card.Title>
                <Card.Description>{item.description}</Card.Description>
              </Card.Content>
            </Card>
          ))}
        </div>

        <div className={styles.action}>
          <Button to="/culture" variant="outline">
            カルチャーを見る
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Culture;
