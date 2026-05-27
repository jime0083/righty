import { Button, Card } from '../common';
import styles from './Blog.module.css';

const blogPosts = [
  {
    id: 1,
    title: 'エンジニアチームの開発文化について',
    description:
      'ライティのエンジニアチームがどのような開発文化を大切にしているか、具体的な取り組みとともにご紹介します。',
    date: '2024.03.15',
    category: 'Tech',
    image: '/images/blog-1.jpg',
    href: '#',
  },
  {
    id: 2,
    title: '新卒1年目社員が語る、入社後の成長',
    description:
      '2023年に入社した新卒社員に、1年間を振り返ってもらいました。成長できたことや大変だったことなど、リアルな声をお届けします。',
    date: '2024.03.10',
    category: 'Interview',
    image: '/images/blog-2.jpg',
    href: '#',
  },
  {
    id: 3,
    title: 'リモートワーク時代のチームビルディング',
    description:
      'オフィス出社とリモートワークを組み合わせたハイブリッドワークの中で、どのようにチームの一体感を醸成しているかをご紹介。',
    date: '2024.03.05',
    category: 'Culture',
    image: '/images/blog-3.jpg',
    href: '#',
  },
];

const Blog = () => {
  return (
    <section className={styles.blog}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>BLOG</span>
          <h2 className={styles.title}>採用広報ブログ</h2>
          <p className={styles.description}>
            ライティの文化や働く環境、社員の声など、
            採用に関する様々な情報を発信しています。
          </p>
        </div>

        <div className={styles.grid}>
          {blogPosts.map((post) => (
            <Card key={post.id} variant="default" href={post.href}>
              <Card.Image src={post.image} alt={post.title} />
              <Card.Content>
                <div className={styles.postMeta}>
                  <span className={styles.postCategory}>{post.category}</span>
                  <span className={styles.postDate}>{post.date}</span>
                </div>
                <Card.Title as="h3">{post.title}</Card.Title>
                <Card.Description>{post.description}</Card.Description>
              </Card.Content>
            </Card>
          ))}
        </div>

        <div className={styles.action}>
          <Button href="https://note.com/" target="_blank" variant="outline">
            ブログをもっと見る
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
