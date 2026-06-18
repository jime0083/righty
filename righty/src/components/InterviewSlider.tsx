import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { InterviewCard, type InterviewCardData } from './InterviewCard'

import 'swiper/css'
import 'swiper/css/pagination'
import './InterviewSlider.css'

interface InterviewSliderProps {
  interviews: InterviewCardData[]
}

export function InterviewSlider({ interviews }: InterviewSliderProps) {
  return (
    <div className="interview-slider">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.interview-slider-pagination',
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 28,
          },
        }}
      >
        {interviews.map((interview, index) => (
          <SwiperSlide key={index}>
            <InterviewCard interview={interview} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="interview-slider-pagination"></div>
    </div>
  )
}
