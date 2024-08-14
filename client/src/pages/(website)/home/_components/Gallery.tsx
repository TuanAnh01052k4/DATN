import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
const Gallery = () => {
  return (
   <section className="gallery  mb-[18px] lg:mb-10">
  <div className="container">
    <h1 className="text-xl lg:text-3xl font-semibold text-dark tracking-[2px] text-center uppercase mb-[10px] lg:mb-5">GALLERY</h1>
    <div>
      <div className="w-full relative">
        <div className="swiper myArrival">
          <Swiper
          slidesPerView={5}
          spaceBetween={30}
          breakpoints={{
            567:{
                slidesPerView:5,
                spaceBetween:30
            },
            0: {
                slidesPerView:2,
                spaceBetween:20
            }
          }}
          className="swiper-wrapper ">
            <SwiperSlide className="swiper-slide">
              <div className="h-[236px] lg:h-[350px] w-full relative overflow-hidden mb-4">
                <a href="#" className="block w-full h-full">
                  <img src="./assets/images/products/ao1.jpg" className="w-full h-full object-cover"  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="h-[236px] lg:h-[350px] w-full relative overflow-hidden mb-4">
                <a href="#" className="block w-full h-full">
                  <img src="./assets/images/products/ao1.jpg" className="w-full h-full object-cover"  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="h-[236px] lg:h-[350px] w-full relative overflow-hidden mb-4">
                <a href="#" className="block w-full h-full">
                  <img src="./assets/images/products/ao1.jpg" className="w-full h-full object-cover"  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="h-[236px] lg:h-[350px] w-full relative overflow-hidden mb-4">
                <a href="#" className="block w-full h-full">
                  <img src="./assets/images/products/ao1.jpg" className="w-full h-full object-cover"  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="h-[236px] lg:h-[350px] w-full relative overflow-hidden mb-4">
                <a href="#" className="block w-full h-full">
                  <img src="./assets/images/products/ao1.jpg" className="w-full h-full object-cover"  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="h-[236px] lg:h-[350px] w-full relative overflow-hidden mb-4">
                <a href="#" className="block w-full h-full">
                  <img src="./assets/images/products/ao1.jpg" className="w-full h-full object-cover"  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="h-[236px] lg:h-[350px] w-full relative overflow-hidden mb-4">
                <a href="#" className="block w-full h-full">
                  <img src="./assets/images/products/ao1.jpg" className="w-full h-full object-cover"  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="h-[236px] lg:h-[350px] w-full relative overflow-hidden mb-4">
                <a href="#" className="block w-full h-full">
                  <img src="./assets/images/products/ao1.jpg" className="w-full h-full object-cover"  />
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Gallery