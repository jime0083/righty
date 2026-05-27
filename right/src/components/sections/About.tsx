import { Button, Card } from '../common';
import styles from './About.module.css';

const aboutCards = [
  {
    id: 1,
    shoulder: 'VISION',
    title: '私たちのビジョン',
    description:
      'テクノロジーの力で、人と人のつながりを豊かにし、日常に感動を届ける企業を目指しています。',
    to: '/about/vision',
  },
  {
    id: 2,
    shoulder: 'BUSINESS',
    title: '事業内容',
    description:
      'デジタルギフトサービスを中心に、企業のマーケティング支援から個人向けサービスまで幅広く展開しています。',
    to: '/about/business',
  },
  {
    id: 3,
    shoulder: 'MESSAGE',
    title: '採用メッセージ',
    description:
      '「つながり」を大切にする私たちと一緒に、新しい価値を創造していきませんか。',
    to: '/about/message',
  },
];

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>ABOUT US</span>
          <h2 className={styles.title}>ライティについて</h2>
          <p className={styles.description}>
            私たちは「eギフト」を通じて、人と人、企業と顧客の
            つながりを豊かにするサービスを提供しています。
            小さな「ありがとう」から大きなビジネスチャンスまで、
            様々な場面で価値を届けています。
          </p>
        </div>

        <div className={styles.cards}>
          {aboutCards.map((card) => (
            <Card key={card.id} variant="glass" to={card.to}>
              <Card.Content>
                <Card.Shoulder>{card.shoulder}</Card.Shoulder>
                <Card.Title>{card.title}</Card.Title>
                <Card.Description>{card.description}</Card.Description>
              </Card.Content>
            </Card>
          ))}
        </div>

        <div className={styles.action}>
          <Button to="/about" variant="outline">
            詳しく見る
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
