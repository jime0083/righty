import { Link } from 'react-router-dom';
import styles from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'outlined' | 'filled' | 'glass';
  href?: string;
  to?: string;
  className?: string;
  onClick?: () => void;
}

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

interface CardTitleProps {
  children: React.ReactNode;
  as?: 'h2' | 'h3' | 'h4' | 'h5';
  className?: string;
}

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

interface CardTagsProps {
  tags: string[];
  className?: string;
}

interface CardShoulderProps {
  children: React.ReactNode;
  className?: string;
}

// メインのCardコンポーネント
const Card = ({
  children,
  variant = 'default',
  href,
  to,
  className = '',
  onClick,
}: CardProps) => {
  const classNames = [styles.card, styles[variant], className]
    .filter(Boolean)
    .join(' ');

  // 外部リンクの場合
  if (href) {
    return (
      <a
        href={href}
        className={classNames}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  // 内部リンクの場合
  if (to) {
    return (
      <Link to={to} className={classNames}>
        {children}
      </Link>
    );
  }

  // クリッカブルなカードの場合
  if (onClick) {
    return (
      <button type="button" className={classNames} onClick={onClick}>
        {children}
      </button>
    );
  }

  // 通常のカードの場合
  return <div className={classNames}>{children}</div>;
};

// サブコンポーネント: Image
const CardImage = ({ src, alt, className = '' }: CardImageProps) => (
  <div className={`${styles.imageWrapper} ${className}`}>
    <img src={src} alt={alt} className={styles.image} />
  </div>
);

// サブコンポーネント: Content
const CardContent = ({ children, className = '' }: CardContentProps) => (
  <div className={`${styles.content} ${className}`}>{children}</div>
);

// サブコンポーネント: Shoulder (カテゴリなどのラベル)
const CardShoulder = ({ children, className = '' }: CardShoulderProps) => (
  <div className={`${styles.shoulder} ${className}`}>{children}</div>
);

// サブコンポーネント: Title
const CardTitle = ({
  children,
  as: Component = 'h3',
  className = '',
}: CardTitleProps) => (
  <Component className={`${styles.title} ${className}`}>{children}</Component>
);

// サブコンポーネント: Description
const CardDescription = ({ children, className = '' }: CardDescriptionProps) => (
  <p className={`${styles.description} ${className}`}>{children}</p>
);

// サブコンポーネント: Tags
const CardTags = ({ tags, className = '' }: CardTagsProps) => (
  <div className={`${styles.tags} ${className}`}>
    {tags.map((tag) => (
      <span key={tag} className={styles.tag}>
        {tag}
      </span>
    ))}
  </div>
);

// サブコンポーネントをCardに紐付け
Card.Image = CardImage;
Card.Content = CardContent;
Card.Shoulder = CardShoulder;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Tags = CardTags;

export default Card;
