import styles from './Blog.module.css';

const blogPosts = [
  {
    id: 1,
    title: 'エンジニアチームの開発文化について',
    date: '2024.03.15',
    image: '/images/meeting1.png',
    href: '#',
  },
  {
    id: 2,
    title: '新卒1年目社員が語る、入社後の成長',
    date: '2024.03.10',
    image: '/images/meeting2.png',
    href: '#',
  },
  {
    id: 3,
    title: 'リモートワーク時代のチームビルディング',
    date: '2024.03.05',
    image: '/images/meeting3.png',
    href: '#',
  },
];

const techPosts = [
  {
    id: 1,
    title: 'React Server Componentsを活用した開発',
    date: '2024.03.12',
    image: '/images/meeting4.png',
    href: '#',
  },
  {
    id: 2,
    title: 'モノレポでのCI/CDパイプライン構築',
    date: '2024.03.08',
    image: '/images/desk1.png',
    href: '#',
  },
  {
    id: 3,
    title: 'マイクロサービス移行の軌跡',
    date: '2024.03.01',
    image: '/images/meeting1.png',
    href: '#',
  },
];

const Blog = () => {
  return (
    <section className={styles.blog}>
      <div className={styles.container}>
        {/* 採用広報note */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>採用広報note</h2>
            <a href="#" className={styles.viewAllLink}>
              <span>一覧を見る</span>
              <span className={styles.viewAllArrow}>→</span>
            </a>
          </div>

          <div className={styles.grid}>
            {blogPosts.map((post) => (
              <a key={post.id} href={post.href} className={styles.card}>
                <div className={styles.cardImage}>
                  <img src={post.image} alt={post.title} />
                </div>
                <div className={styles.cardContent}>
                  <time className={styles.cardDate}>{post.date}</time>
                  <h3 className={styles.cardTitle}>
                    {post.title}
                    <span className={styles.cardArrow}>→</span>
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Tech Blog */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Tech Blog</h2>
            <a href="#" className={styles.viewAllLink}>
              <span>一覧を見る</span>
              <span className={styles.viewAllArrow}>→</span>
            </a>
          </div>

          <div className={styles.grid}>
            {techPosts.map((post) => (
              <a key={post.id} href={post.href} className={styles.card}>
                <div className={styles.cardImage}>
                  <img src={post.image} alt={post.title} />
                </div>
                <div className={styles.cardContent}>
                  <time className={styles.cardDate}>{post.date}</time>
                  <h3 className={styles.cardTitle}>
                    {post.title}
                    <span className={styles.cardArrow}>→</span>
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
