import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Link } from 'react-router-dom'
import type { JobCardData } from './JobCard'

import 'swiper/css'
import 'swiper/css/pagination'
import './JobSlider.css'

interface JobSliderProps {
  jobs: JobCardData[]
}

export function JobSlider({ jobs }: JobSliderProps) {
  return (
    <div className="job-slider">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.job-slider-pagination',
        }}
        breakpoints={{
          560: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          840: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          1100: {
            slidesPerView: 4,
            spaceBetween: 28,
          },
        }}
      >
        {jobs.map((job, index) => (
          <SwiperSlide key={index}>
            <article className="job-slide-card">
              <div className="job-slide-img">
                <img
                  src={job.image}
                  alt={job.title}
                  style={{ objectPosition: job.imagePosition || 'center center' }}
                />
              </div>
              <div className="job-slide-body">
                <h3>{job.title}</h3>
                <p className="desc">{job.description}</p>
                <Link className="job-slide-more" to={`/jobs/${job.slug}`}>
                  詳しく見る<span className="ar">→</span>
                </Link>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="job-slider-pagination"></div>
    </div>
  )
}
