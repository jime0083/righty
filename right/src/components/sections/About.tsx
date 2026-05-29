import { Link } from 'react-router-dom';
import styles from './About.module.css';

const aboutLinks = [
  {
    id: 1,
    title: '採用メッセージ',
    to: '/about/message',
  },
  {
    id: 2,
    title: 'ライティの事業',
    to: '/about/services',
  },
  {
    id: 3,
    title: '私たちが目指すこと',
    to: '/about/vision',
  },
];

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        {/* セクションヘッダー */}
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>ライティについて</h2>
          <p className={styles.sectionDescription}>
            私たちは、ギフトを軸に
            <span className={styles.highlight}>"意味の紡ぎ合い"</span>
            を社会に広げていくことを目指しています
          </p>
        </div>

        {/* リンクカード */}
        <div className={styles.linkCards}>
          {aboutLinks.map((link) => (
            <Link key={link.id} to={link.to} className={styles.linkCard}>
              <span className={styles.linkTitle}>{link.title}</span>
              <span className={styles.linkArrow}>→</span>
            </Link>
          ))}
        </div>

        {/* セクション全体へのリンク */}
        <div className={styles.moreLink}>
          <Link to="/about" className={styles.moreButton}>
            <span>ライティについてもっと見る</span>
            <span className={styles.moreArrow}>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
