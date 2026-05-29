import { Link } from 'react-router-dom';
import styles from './NewGraduate.module.css';

// カルーセル用画像
const carouselImages = [
  { id: 1, src: '/images/meeting1.png', alt: '新卒採用1' },
  { id: 2, src: '/images/meeting2.png', alt: '新卒採用2' },
  { id: 3, src: '/images/meeting3.png', alt: '新卒採用3' },
  { id: 4, src: '/images/meeting4.png', alt: '新卒採用4' },
  { id: 5, src: '/images/desk1.png', alt: '新卒採用5' },
];

const NewGraduate = () => {
  return (
    <section className={styles.newGraduate}>
      <div className={styles.container}>
        {/* ヘッダー */}
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>新卒採用</h2>
          <p className={styles.sectionDescription}>
            ライティのミッション・カルチャーに共感し、
            <br className={styles.brDesktop} />
            事業成長を一緒に牽引してくれる仲間を募集しています。
          </p>
        </div>

        {/* カルーセル */}
        <div className={styles.carousel}>
          <div className={styles.carouselTrack}>
            {/* 無限スクロール用に2倍配置 */}
            {[...carouselImages, ...carouselImages].map((image, index) => (
              <div key={`${image.id}-${index}`} className={styles.carouselItem}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className={styles.carouselImage}
                />
              </div>
            ))}
          </div>
        </div>

        {/* 職種リンク */}
        <div className={styles.positionLinks}>
          <Link to="/newgrads/business" className={styles.positionCard}>
            <span className={styles.positionTitle}>ビジネス職</span>
            <span className={styles.positionArrow}>→</span>
          </Link>
          <Link to="/newgrads/engineer" className={styles.positionCard}>
            <span className={styles.positionTitle}>エンジニア職</span>
            <span className={styles.positionArrow}>→</span>
          </Link>
        </div>

        {/* もっと見るリンク */}
        <div className={styles.moreLink}>
          <Link to="/newgrads" className={styles.moreButton}>
            <span>新卒採用を見る</span>
            <span className={styles.moreArrow}>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewGraduate;
