import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { useEffect, useState } from 'react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

type Props = {}

const Slider_product_details = (props: Props) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', ()=>{
            setIsMobile(window.innerWidth)
        })
    }, []);
  return (
    <>
        <div className='lg:flex lg:justify-between'>
                        <div className='w-full lg:w-[485px] lg:h-[729px]'>
                                <Swiper
                                            modules={[Navigation, Pagination,EffectFade]}
                                            effect='fade'
                                            slidesPerView={1}
                                            navigation
                                        >
                                            <SwiperSlide className=''>
                                                <div className=''>
                                                    <img src="https://pubcdn.ivymoda.com/files/product/thumab/400/2024/04/04/dc06923d4097dc13f365dcf7c21180a4.webp" className='object-cover w-full h-full' />
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide className=''>
                                                <div className=''>
                                                    <img src="https://pubcdn.ivymoda.com/files/product/thumab/400/2023/08/04/95437d1b09113b992ad2496ee3e3e3f8.webp" className='object-cover w-full h-full' />
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide className=''>
                                                <div className=''>
                                                    <img src="https://pubcdn.ivymoda.com/files/product/thumab/400/2024/04/04/dc06923d4097dc13f365dcf7c21180a4.webp" className='object-cover w-full h-full' />
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide className=''>
                                                <div className=''>
                                                    <img src="https://pubcdn.ivymoda.com/files/product/thumab/400/2024/04/04/dc06923d4097dc13f365dcf7c21180a4.webp" className='object-cover w-full h-full' />
                                                </div>
                                            </SwiperSlide>
                                </Swiper>
                        </div>
                        {/* --------------------------------------------------------- */}
                        <div className='lg:h-[729px] mt-4 lg:mt-0'>
                            <button className='swiper-gallery-prev cursor-pointer pt-1 pl-[50px] pb-[37px] hidden lg:block  bg-white'><i className="fa-solid fa-chevron-up text-[20px]"></i></button>
                            <Swiper
                                                modules={[Navigation]}
                                                pagination={{
                                                    clickable: true,
                                                }}
                                                navigation={{
                                                    prevEl:'.swiper-gallery-prev ',
                                                    nextEl:'.swiper-gallery-next'
                                                }}
                                                direction={isMobile <=1024 ? 'horizontal':'vertical'}
                                                slidesPerView={4}
                                                spaceBetween={9}
                                                breakpoints={{
                                                    576:{
                                                        slidesPerView:4,
                                                        spaceBetween:9
                                                    },
                                                    0:{
                                                        slidesPerView:4,
                                                        spaceBetween:8
                                                    }
                                                }}
                                                className='lg:h-[604px]'
                                                
                                            >
                                                <SwiperSlide>
                                                    <div className='lg:w-[95px] lg:h-[142px]'>
                                                        <img src="https://pubcdn.ivymoda.com/files/product/thumab/400/2024/04/04/dc06923d4097dc13f365dcf7c21180a4.webp" className='w-full h-full object-cover' />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className='lg:w-[95px] lg:h-[142px]'>
                                                        <img src="https://pubcdn.ivymoda.com/files/product/thumab/400/2024/04/04/dc06923d4097dc13f365dcf7c21180a4.webp" className='w-full h-full object-cover' />
                                                      </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className='lg:w-[95px] lg:h-[142px]'>
                                                        <img src="https://pubcdn.ivymoda.com/files/product/thumab/400/2024/04/04/dc06923d4097dc13f365dcf7c21180a4.webp" className='w-full h-full object-cover' />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className='lg:w-[95px] lg:h-[142px]'>
                                                        <img src="https://pubcdn.ivymoda.com/files/product/thumab/400/2024/04/04/dc06923d4097dc13f365dcf7c21180a4.webp" className='w-full h-full object-cover' />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className='lg:w-[95px] lg:h-[142px]'>
                                                        <img src="https://pubcdn.ivymoda.com/files/product/thumab/400/2024/04/04/dc06923d4097dc13f365dcf7c21180a4.webp" className='w-full h-full object-cover' />
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className='lg:w-[95px] lg:h-[142px]'>
                                                        <img src="https://pubcdn.ivymoda.com/files/product/thumab/400/2024/04/04/dc06923d4097dc13f365dcf7c21180a4.webp" className='w-full h-full object-cover' />
                                                    </div>
                                                </SwiperSlide>
                            </Swiper>
                            <button className='swiper-gallery-next cursor-pointer pl-[50px] pt-[37px] hidden bg-white lg:block'><i className="fa-solid fa-chevron-down text-[20px]"></i></button>
                        </div>
                    </div>
    </>
  )
}

export default Slider_product_details