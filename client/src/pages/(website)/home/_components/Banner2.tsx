
import { Swiper, SwiperSlide } from 'swiper/react'

const Banner2 = () => {
  return (
    <section className="banner">
    <div className="container">
    {/* Swiper */}
    <div className="swiper myBanner overflow-hidden rounded-tl-[32px] rounded-br-[32px]  lg:rounded-tl-[80px] lg:rounded-br-[80px] mb-[18px] lg:mb-10">
      <Swiper className="swiper-wrapper rounded-tl-[32px] rounded-br-[32px]  lg:rounded-tl-[80px] lg:rounded-br-[80px]">
        <SwiperSlide className="swiper-slide w-full h-[396px] lg:h-[508px] overflow-hidden  rounded-tl-[32px] rounded-br-[32px]  lg:rounded-tl-[80px] lg:rounded-br-[80px] ">
          <a href="#" className="block w-full h-full">
            <img src="https://cotton4u.vn/files/news/2024/06/18/8678df9a0f0d3eb466073f5c305c88aa.webp" className="w-full h-full object-cover"  />
          </a>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide w-full h-[396px] lg:h-[508px] overflow-hidden  rounded-tl-[32px] rounded-br-[32px]  lg:rounded-tl-[80px] lg:rounded-br-[80px] ">
          <a href="#" className="block  w-full h-full">
            <img src="https://cotton4u.vn/files/news/2024/06/18/8678df9a0f0d3eb466073f5c305c88aa.webp" className="w-full h-full object-cover"  />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</section>
  )
}

export default Banner2