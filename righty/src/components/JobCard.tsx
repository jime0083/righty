import { Link } from 'react-router-dom'
import './JobCard.css'

export interface JobCardData {
  slug: string
  title: string
  description: string
  image: string
  imagePosition?: string
}

interface JobCardProps {
  job: JobCardData
}

export function JobCard({ job }: JobCardProps) {
  return (
    <article className="job-card">
      <div className="job-img">
        <img
          src={job.image}
          alt={job.title}
          style={{ objectPosition: job.imagePosition || 'center center' }}
        />
      </div>
      <div className="job-body">
        <h3>{job.title}</h3>
        <p className="desc">{job.description}</p>
        <Link className="job-more" to={`/jobs/${job.slug}`}>
          詳しく見る<span className="ar">→</span>
        </Link>
      </div>
    </article>
  )
}
