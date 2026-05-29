import { useEffect, useState } from 'react';
import styles from './Hero.module.css';

// 画像データ
const heroImages = [
  {
    id: 1,
    src: '/images/meeting1.png',
    alt: 'ミーティング風景1',
    delay: 0,
  },
  {
    id: 2,
    src: '/images/meeting2.png',
    alt: 'ミーティング風景2',
    delay: 200,
  },
  {
    id: 3,
    src: '/images/meeting3.png',
    alt: 'ミーティング風景3',
    delay: 400,
  },
  {
    id: 4,
    src: '/images/meeting4.png',
    alt: 'ミーティング風景4',
    delay: 600,
  },
  {
    id: 5,
    src: '/images/desk1.png',
    alt: 'オフィス風景',
    delay: 800,
  },
];

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(
    new Array(heroImages.length).fill(false)
  );

  useEffect(() => {
    // 初期ロードアニメーション
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleImageLoad = (index: number) => {
    setImagesLoaded((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  return (
    <section className={styles.hero}>
      {/* コンテンツエリア */}
      <div className={styles.container}>
        {/* テキストエリア（左側） */}
        <div className={styles.textArea}>
          <div
            className={`${styles.textContent} ${isLoaded ? styles.loaded : ''}`}
          >
            <h1 className={styles.title}>
              <span className={styles.titleLine}>つくりたいのは、</span>
              <span className={styles.titleLine}>
                <span className={styles.highlight}>「つながり」</span>の
              </span>
              <span className={styles.titleLine}>先にある価値</span>
            </h1>

            <div className={styles.description}>
              <p>
                ギフトは、社会のつながりを形づくる人間にとって根源的な営みです。
                そんなギフトの意味や可能性について、改めて「問い」を立てていくこと。
                それが私たちの使命です。
              </p>
              <p>
                贈る人と受け取る人の間に生まれる「キモチの循環」。
                その循環が、新しい関係性を生み、社会をより良くしていく。
                私たちライティは、そんな未来を一緒につくる仲間を探しています。
              </p>
            </div>

            <div className={styles.scrollHint}>
              <span className={styles.scrollText}>SCROLL</span>
              <div className={styles.scrollLine}>
                <div className={styles.scrollDot}></div>
              </div>
            </div>
          </div>
        </div>

        {/* 画像エリア（右側） */}
        <div className={styles.imageArea}>
          <div className={styles.imageGrid}>
            {heroImages.map((image, index) => (
              <div
                key={image.id}
                className={`${styles.imageWrapper} ${styles[`image${index + 1}`]} ${
                  imagesLoaded[index] && isLoaded ? styles.imageLoaded : ''
                }`}
                style={{ transitionDelay: `${image.delay}ms` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={styles.image}
                  onLoad={() => handleImageLoad(index)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
