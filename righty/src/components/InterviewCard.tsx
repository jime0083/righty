import { Link } from 'react-router-dom'
import './InterviewCard.css'

export interface InterviewCardData {
  image: string
  role: string
  name: string
  year: string
  quote: string
  link?: string
}

interface InterviewCardProps {
  interview: InterviewCardData
}

export function InterviewCard({ interview }: InterviewCardProps) {
  const content = (
    <>
      <div className="intv-card-pic">
        <img src={interview.image} alt={interview.name} />
      </div>
      <div className="intv-card-info">
        <div className="intv-card-role">{interview.role}</div>
        <div className="intv-card-name">{interview.name}</div>
        <div className="intv-card-year">{interview.year}</div>
        <p className="intv-card-quote">
          {interview.quote.split('\n').map((line, i) => (
            <span key={i}>{line}{i < interview.quote.split('\n').length - 1 && <br />}</span>
          ))}
        </p>
        <span className="intv-card-more">詳しく見る<span className="ar">→</span></span>
      </div>
    </>
  )

  if (interview.link) {
    return (
      <Link to={interview.link} className="intv-card intv-card--link">
        {content}
      </Link>
    )
  }

  return (
    <article className="intv-card">
      {content}
    </article>
  )
}
