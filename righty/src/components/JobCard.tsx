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
    <Link className="job-card" to={`/jobs/${job.slug}`}>
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
        <span className="job-more">
          詳しく見る<span className="ar">→</span>
        </span>
      </div>
    </Link>
  )
}
