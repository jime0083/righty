import { Link } from 'react-router-dom';
import styles from './Culture.module.css';

const Culture = () => {
  return (
    <section className={styles.culture}>
      <div className={styles.container}>
        {/* 画像エリア */}
        <div className={styles.imageArea}>
          <div className={styles.imageWrapper}>
            <img
              src="/images/meeting2.png"
              alt="カルチャー1"
              className={styles.image}
            />
          </div>
          <div className={styles.imageWrapper}>
            <img
              src="/images/meeting3.png"
              alt="カルチャー2"
              className={styles.image}
            />
          </div>
        </div>

        {/* コンテンツエリア */}
        <div className={styles.contentArea}>
          <div className={styles.content}>
            <h2 className={styles.sectionTitle}>カルチャー</h2>
            <p className={styles.sectionDescription}>
              ライティという会社の考え方と、
              <br className={styles.brDesktop} />
              実現したい社会づくりのための
              <br className={styles.brDesktop} />
              価値観をご紹介します。
            </p>
            <Link to="/culture" className={styles.moreLink}>
              <span>カルチャーを見る</span>
              <span className={styles.arrow}>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;
