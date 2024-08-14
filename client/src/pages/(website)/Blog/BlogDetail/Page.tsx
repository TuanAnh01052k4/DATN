import React from 'react'
import BannerSale from './_components/BannerSale'
import NewsBlog from '../../_components/NewsBlog'
import PostBlogDetail from './_components/PostBlogDetail'
import CategoryBlogDetail from './_components/CategoryBlogDetail'

const PageDetail = () => {
    return (
        <div>
           
            <section className="container mb-10  ">
                {/* đường dẫn của trang */}
                <div className=" flex justify-start items-center gap-3 border-t-2 border-b-[1px] py-3  ">
                    <a href="http://">Trang chủ</a>
                    <a href="http://">-</a>
                    <a href="http://">Tin Tức</a>
                    <a href="http://">-</a>
                    <a href="http://">THE WHISPER OF CLASSY DẪN DẮT XU HƯỚNG VỚI VẺ ĐẸP SANG TRỌNG</a>
                </div>
                {/* trang chủ bài viết */}
                <div className="flex flex-col justify-between pt-[50px] lg:flex-row">
                    {/* dang mục bên trái */}
                    <CategoryBlogDetail />
                    {/* bài viết của blog  */}
                    <PostBlogDetail />
                    {/* banner sale và tin mới nhất */}
                    <div className="w-full px-[15px] order-2 lg:order-3">
                        {/* tin mới nhất  */}
                        <NewsBlog />
                        {/* banner sale */}
                        <BannerSale />
                    </div>
                </div>
            </section>
            <hr className="container my-10" />
            {/* phần list sản phẩm bên dưới */}
            <section className="newArrival mb-[18px] lg:mb-10">
                <div className="container">
                    <h1 className="text-xl lg:text-3xl font-semibold text-dark tracking-[2px] text-center uppercase mb-[10px] lg:mb-5">
                        NEW
                        ARRIVAL | SALE 50% TOÀN BỘ SP</h1>
                    <div>
                        <div className="w-max mx-auto">
                            <ul className="tabs-btn flex items-center gap-8 mb-4 lg:mb-[28px]">
                                <li className="cursor-pointer text-dark text-base lg:text-xl pb-2 lg:pb-0 active">Mail-Shop Women
                                </li>
                                <li className="cursor-pointer text-dark text-base  lg:text-xl pb-2 lg:pb-0">Mail-Shop Men</li>
                            </ul>
                        </div>
                        <div className="w-full relative">
                            <div className="swiper myArrival">
                                <div className="swiper-wrapper ">
                                    <div className="swiper-slide">
                                        <div>
                                            <div className="h-[236px] lg:h-[350px] w-full relative overflow-hidden mb-4">
                                                <a href="#" className="block w-full h-full">
                                                    <img src="./assets/images/products/ao1.jpg" className="w-full h-full object-cover" />
                                                </a>
                                                <span className="absolute top-0 left-0 text-[12px]/[150%] font-semibold py-1 px-3 bg-rose-900 text-white rounded-br-full">
                                                    Best seller
                                                </span>
                                                <span className="absolute size-6 lg:size-10 rounded-full top-2 right-2 text-[12px]/[150%] font-semibold bg-black text-white flex justify-center items-center">
                                                    30%
                                                </span>
                                            </div>
                                            <div className="flex justify-between mb-2 lg:mb-3">
                                                <ul className="flex items-center gap-x-[10px]">
                                                    <li className="cursor-pointer size-4 text-white lg:size-[18px] rounded-full bg-black font-thin text-sm flex items-center justify-center">
                                                        <i className="fa-solid fa-check" />
                                                    </li>
                                                    <li className="cursor-pointer size-4 text-white lg:size-[18px] rounded-full bg-black font-thin text-sm flex items-center justify-center">
                                                        <i className="fa-solid fa-check" />
                                                    </li>
                                                    <li className="cursor-pointer size-4 text-white lg:size-[18px] rounded-full bg-black font-thin text-sm flex items-center justify-center">
                                                        <i className="fa-solid fa-check" />
                                                    </li>
                                                    <li className="cursor-pointer size-4 text-white lg:size-[18px] rounded-full bg-black font-thin text-sm flex items-center justify-center">
                                                        <i className="fa-solid fa-check" />
                                                    </li>
                                                </ul>
                                                <span className=" cursor-pointer text-sm font-thin text-black ">
                                                    <i className="fa-regular fa-heart" />
                                                </span>
                                            </div>
                                            <a href="#" className="block text-[12px]/[16px] lg:text-sm hover:text-rose-800 mb-2 lg:mb-[10px]">Sản
                                                phẩm A</a>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-1">
                                                    <span className=" text-sm font-semibold text-dark lg:text-base">999.999đ</span>
                                                    <span className=" text-[10px]/[150%] line-through lg:text-[12px]/[150%]">999.999đ</span>
                                                </div>
                                                <div className="relative btn-cart">
                                                    <button className="card-add-to-cart size-5 text-[12px] border-dark border bg-dark rounded-tl-lg rounded-br-lg text-white transition duration-500 ease-in-out hover:bg-white lg:text-base hover:text-black lg:size-8">
                                                        <i className="fa-solid fa-cart-arrow-down" />
                                                    </button>
                                                    <ul className="card-list-size w-[100px] absolute bottom-[35px] hidden transition-all duration-300 ease-in-out right-0 bg-white lg:w-[132px] border border-gray-200 z-10">
                                                        <li>
                                                            <button className=" w-full text-sm py-2 text-dark font-semibold border border-white lg:text-base lg:py-3 hover:border-dark ">M</button>
                                                        </li>
                                                        <li>
                                                            <button className=" w-full text-sm py-2 text-dark font-semibold border border-white lg:text-base lg:py-3 hover:border-dark ">L</button>
                                                        </li>
                                                        <li>
                                                            <button className=" w-full text-sm py-2 text-dark font-semibold border border-white lg:text-base lg:py-3 hover:border-dark ">XL</button>
                                                        </li>
                                                        <li>
                                                            <button className=" w-full text-sm py-2 text-dark font-semibold border border-white lg:text-base lg:py-3 hover:border-dark ">XXL</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div>
                                            <div className="h-[236px] lg:h-[350px] w-full relative overflow-hidden mb-4">
                                                <a href="#" className="block w-full h-full">
                                                    <img src="./assets/images/products/ao1.jpg" className="w-full h-full object-cover" />
                                                </a>
                                                <span className="absolute top-0 left-0 text-[12px]/[150%] font-semibold py-1 px-3 bg-rose-900 text-white rounded-br-full">
                                                    Best seller
                                                </span>
                                                <span className="absolute size-6 lg:size-10 rounded-full top-2 right-2 text-[12px]/[150%] font-semibold bg-black text-white flex justify-center items-center">
                                                    30%
                                                </span>
                                            </div>
                                            <div className="flex justify-between mb-2 lg:mb-3">
                                                <ul className="flex items-center gap-x-[10px]">
                                                    <li className="cursor-pointer size-4 text-white lg:size-[18px] rounded-full bg-black font-thin text-sm flex items-center justify-center">
                                                        <i className="fa-solid fa-check" />
                                                    </li>
                                                    <li className="cursor-pointer size-4 text-white lg:size-[18px] rounded-full bg-black font-thin text-sm flex items-center justify-center">
                                                        <i className="fa-solid fa-check" />
                                                    </li>
                                                    <li className="cursor-pointer size-4 text-white lg:size-[18px] rounded-full bg-black font-thin text-sm flex items-center justify-center">
                                                        <i className="fa-solid fa-check" />
                                                    </li>
                                                    <li className="cursor-pointer size-4 text-white lg:size-[18px] rounded-full bg-black font-thin text-sm flex items-center justify-center">
                                                        <i className="fa-solid fa-check" />
                                                    </li>
                                                </ul>
                                                <span className=" cursor-pointer text-sm font-thin text-black ">
                                                    <i className="fa-regular fa-heart" />
                                                </span>
                                            </div>
                                            <a href="#" className="block text-[12px]/[16px] lg:text-sm hover:text-rose-800 mb-2 lg:mb-[10px]">Sản
                                                phẩm A</a>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-1">
                                                    <span className=" text-sm font-semibold text-dark lg:text-base">999.999đ</span>
                                                    <span className=" text-[10px]/[150%] line-through lg:text-[12px]/[150%]">999.999đ</span>
                                                </div>
                                                <div className="relative btn-cart">
                                                    <button className="card-add-to-cart size-5 text-[12px] border-dark border bg-dark rounded-tl-lg rounded-br-lg text-white transition duration-500 ease-in-out hover:bg-white lg:text-base hover:text-black lg:size-8">
                                                        <i className="fa-solid fa-cart-arrow-down" />
                                                    </button>
                                                    <ul className="card-list-size w-[100px] absolute bottom-[35px] hidden transition-all duration-300 ease-in-out right-0 bg-white lg:w-[132px] border border-gray-200 z-10">
                                                        <li>
                                                            <button className=" w-full text-sm py-2 text-dark font-semibold border border-white lg:text-base lg:py-3 hover:border-dark ">M</button>
                                                        </li>
                                                        <li>
                                                            <button className=" w-full text-sm py-2 text-dark font-semibold border border-white lg:text-base lg:py-3 hover:border-dark ">L</button>
                                                        </li>
                                                        <li>
                                                            <button className=" w-full text-sm py-2 text-dark font-semibold border border-white lg:text-base lg:py-3 hover:border-dark ">XL</button>
                                                        </li>
                                                        <li>
                                                            <button className=" w-full text-sm py-2 text-dark font-semibold border border-white lg:text-base lg:py-3 hover:border-dark ">XXL</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div>
                                            <div className="h-[236px] lg:h-[350px] w-full relative overflow-hidden mb-4">
                                                <a href="#" className="block w-full h-full">
                                                    <img src="./assets/images/products/ao1.jpg" className="w-full h-full object-cover" />
                                                </a>
                                                <span className="absolute top-0 left-0 text-[12px]/[150%] font-semibold py-1 px-3 bg-rose-900 text-white rounded-br-full">
                                                    Best seller
                                                </span>
                                                <span className="absolute size-6 lg:size-10 rounded-full top-2 right-2 text-[12px]/[150%] font-semibold bg-black text-white flex justify-center items-center">
                                                    30%
                                                </span>
                                            </div>
                                            <div className="flex justify-between mb-2 lg:mb-3">
                                                <ul className="flex items-center gap-x-[10px]">
                                                    <li className="cursor-pointer size-4 text-white lg:size-[18px] rounded-full bg-black font-thin text-sm flex items-center justify-center">
                                                        <i className="fa-solid fa-check" />
                                                    </li>
                                                    <li className="cursor-pointer size-4 text-white lg:size-[18px] rounded-full bg-black font-thin text-sm flex items-center justify-center">
                                                        <i className="fa-solid fa-check" />
                                                    </li>
                                                    <li className="cursor-pointer size-4 text-white lg:size-[18px] rounded-full bg-black font-thin text-sm flex items-center justify-center">
                                                        <i className="fa-solid fa-check" />
                                                    </li>
                                                    <li className="cursor-pointer size-4 text-white lg:size-[18px] rounded-full bg-black font-thin text-sm flex items-center justify-center">
                                                        <i className="fa-solid fa-check" />
                                                    </li>
                                                </ul>
                                                <span className=" cursor-pointer text-sm font-thin text-black ">
                                                    <i className="fa-regular fa-heart" />
                                                </span>
                                            </div>
                                            <a href="#" className="block text-[12px]/[16px] lg:text-sm hover:text-rose-800 mb-2 lg:mb-[10px]">Sản
                                                phẩm A</a>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-1">
                                                    <span className=" text-sm font-semibold text-dark lg:text-base">999.999đ</span>
                                                    <span className=" text-[10px]/[150%] line-through lg:text-[12px]/[150%]">999.999đ</span>
                                                </div>
                                                <div className="relative btn-cart">
                                                    <button className="card-add-to-cart size-5 text-[12px] border-dark border bg-dark rounded-tl-lg rounded-br-lg text-white transition duration-500 ease-in-out hover:bg-white lg:text-base hover:text-black lg:size-8">
                                                        <i className="fa-solid fa-cart-arrow-down" />
                                                    </button>
                                                    <ul className="card-list-size w-[100px] absolute bottom-[35px] hidden transition-all duration-300 ease-in-out right-0 bg-white lg:w-[132px] border border-gray-200 z-10">
                                                        <li>
                                                            <button className=" w-full text-sm py-2 text-dark font-semibold border border-white lg:text-base lg:py-3 hover:border-dark ">M</button>
                                                        </li>
                                                        <li>
                                                            <button className=" w-full text-sm py-2 text-dark font-semibold border border-white lg:text-base lg:py-3 hover:border-dark ">L</button>
                                                        </li>
                                                        <li>
                                                            <button className=" w-full text-sm py-2 text-dark font-semibold border border-white lg:text-base lg:py-3 hover:border-dark ">XL</button>
                                                        </li>
                                                        <li>
                                                            <button className=" w-full text-sm py-2 text-dark font-semibold border border-white lg:text-base lg:py-3 hover:border-dark ">XXL</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div>
                                            <div className="h-[236px] lg:h-[350px] w-full relative overflow-hidden mb-4">
                                                <a href="#" className="block w-full h-full">
                                                    <img src="./assets/images/products/ao1.jpg" className="w-full h-full object-cover" />
                                                </a>
                                                <span className="absolute top-0 left-0 text-[12px]/[150%] font-semibold py-1 px-3 bg-rose-900 text-white rounded-br-full">
                                                    Best seller
                                                </span>
                                                <span className="absolute size-6 lg:size-10 rounded-full top-2 right-2 text-[12px]/[150%] font-semibold bg-black text-white flex justify-center items-center">
                                                    30%
                                                </span>
                                            </div>
                                            <div className="flex justify-between mb-2 lg:mb-3">
                                                <ul className="flex items-center gap-x-[10px]">
                                                    <li className="cursor-pointer size-4 text-white lg:size-[18px] rounded-full bg-black font-thin text-sm flex items-center justify-center">
                                                        <i className="fa-solid fa-check" />
                                                    </li>
                                                    <li className="cursor-pointer size-4 text-white lg:size-[18px] rounded-full bg-black font-thin text-sm flex items-center justify-center">
                                                        <i className="fa-solid fa-check" />
                                                    </li>
                                                    <li className="cursor-pointer size-4 text-white lg:size-[18px] rounded-full bg-black font-thin text-sm flex items-center justify-center">
                                                        <i className="fa-solid fa-check" />
                                                    </li>
                                                    <li className="cursor-pointer size-4 text-white lg:size-[18px] rounded-full bg-black font-thin text-sm flex items-center justify-center">
                                                        <i className="fa-solid fa-check" />
                                                    </li>
                                                </ul>
                                                <span className=" cursor-pointer text-sm font-thin text-black ">
                                                    <i className="fa-regular fa-heart" />
                                                </span>
                                            </div>
                                            <a href="#" className="block text-[12px]/[16px] lg:text-sm hover:text-rose-800 mb-2 lg:mb-[10px]">Sản
                                                phẩm A</a>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-1">
                                                    <span className=" text-sm font-semibold text-dark lg:text-base">999.999đ</span>
                                                    <span className=" text-[10px]/[150%] line-through lg:text-[12px]/[150%]">999.999đ</span>
                                                </div>
                                                <div className="relative btn-cart">
                                                    <button className="card-add-to-cart size-5 text-[12px] border-dark border bg-dark rounded-tl-lg rounded-br-lg text-white transition duration-500 ease-in-out hover:bg-white lg:text-base hover:text-black lg:size-8">
                                                        <i className="fa-solid fa-cart-arrow-down" />
                                                    </button>
                                                    <ul className="card-list-size w-[100px] absolute bottom-[35px] hidden transition-all duration-300 ease-in-out right-0 bg-white lg:w-[132px] border border-gray-200 z-10">
                                                        <li>
                                                            <button className=" w-full text-sm py-2 text-dark font-semibold border border-white lg:text-base lg:py-3 hover:border-dark ">M</button>
                                                        </li>
                                                        <li>
                                                            <button className=" w-full text-sm py-2 text-dark font-semibold border border-white lg:text-base lg:py-3 hover:border-dark ">L</button>
                                                        </li>
                                                        <li>
                                                            <button className=" w-full text-sm py-2 text-dark font-semibold border border-white lg:text-base lg:py-3 hover:border-dark ">XL</button>
                                                        </li>
                                                        <li>
                                                            <button className=" w-full text-sm py-2 text-dark font-semibold border border-white lg:text-base lg:py-3 hover:border-dark ">XXL</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div>
                                            <div className="h-[236px] lg:h-[350px] w-full relative overflow-hidden mb-4">
                                                <a href="#" className="block w-full h-full">
                                                    <img src="./assets/images/products/ao1.jpg" className="w-full h-full object-cover" />
                                                </a>
                                                <span className="absolute top-0 left-0 text-[12px]/[150%] font-semibold py-1 px-3 bg-rose-900 text-white rounded-br-full">
                                                    Best seller
                                                </span>
                                                <span className="absolute size-6 lg:size-10 rounded-full top-2 right-2 text-[12px]/[150%] font-semibold bg-black text-white flex justify-center items-center">
                                                    30%
                                                </span>
                                            </div>
                                            <div className="flex justify-between mb-2 lg:mb-3">
                                                <ul className="flex items-center gap-x-[10px]">
                                                    <li className="cursor-pointer size-4 text-white lg:size-[18px] rounded-full bg-black font-thin text-sm flex items-center justify-center">
                                                        <i className="fa-solid fa-check" />
                                                    </li>
                                                    <li className="cursor-pointer size-4 text-white lg:size-[18px] rounded-full bg-black font-thin text-sm flex items-center justify-center">
                                                        <i className="fa-solid fa-check" />
                                                    </li>
                                                    <li className="cursor-pointer size-4 text-white lg:size-[18px] rounded-full bg-black font-thin text-sm flex items-center justify-center">
                                                        <i className="fa-solid fa-check" />
                                                    </li>
                                                    <li className="cursor-pointer size-4 text-white lg:size-[18px] rounded-full bg-black font-thin text-sm flex items-center justify-center">
                                                        <i className="fa-solid fa-check" />
                                                    </li>
                                                </ul>
                                                <span className=" cursor-pointer text-sm font-thin text-black ">
                                                    <i className="fa-regular fa-heart" />
                                                </span>
                                            </div>
                                            <a href="#" className="block text-[12px]/[16px] lg:text-sm hover:text-rose-800 mb-2 lg:mb-[10px]">Sản
                                                phẩm A</a>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-1">
                                                    <span className=" text-sm font-semibold text-dark lg:text-base">999.999đ</span>
                                                    <span className=" text-[10px]/[150%] line-through lg:text-[12px]/[150%]">999.999đ</span>
                                                </div>
                                                <div className="relative btn-cart">
                                                    <button className="card-add-to-cart size-5 text-[12px] border-dark border bg-dark rounded-tl-lg rounded-br-lg text-white transition duration-500 ease-in-out hover:bg-white lg:text-base hover:text-black lg:size-8">
                                                        <i className="fa-solid fa-cart-arrow-down" />
                                                    </button>
                                                    <ul className="card-list-size w-[100px] absolute bottom-[35px] hidden transition-all duration-300 ease-in-out right-0 bg-white lg:w-[132px] border border-gray-200 z-10">
                                                        <li>
                                                            <button className=" w-full text-sm py-2 text-dark font-semibold border border-white lg:text-base lg:py-3 hover:border-dark ">M</button>
                                                        </li>
                                                        <li>
                                                            <button className=" w-full text-sm py-2 text-dark font-semibold border border-white lg:text-base lg:py-3 hover:border-dark ">L</button>
                                                        </li>
                                                        <li>
                                                            <button className=" w-full text-sm py-2 text-dark font-semibold border border-white lg:text-base lg:py-3 hover:border-dark ">XL</button>
                                                        </li>
                                                        <li>
                                                            <button className=" w-full text-sm py-2 text-dark font-semibold border border-white lg:text-base lg:py-3 hover:border-dark ">XXL</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div>
                                            <div className="h-[236px] lg:h-[350px] w-full relative overflow-hidden mb-4">
                                                <a href="#" className="block w-full h-full">
                                                    <img src="./assets/images/products/ao1.jpg" className="w-full h-full object-cover" />
                                                </a>
                                                <span className="absolute top-0 left-0 text-[12px]/[150%] font-semibold py-1 px-3 bg-rose-900 text-white rounded-br-full">
                                                    Best seller
                                                </span>
                                                <span className="absolute size-6 lg:size-10 rounded-full top-2 right-2 text-[12px]/[150%] font-semibold bg-black text-white flex justify-center items-center">
                                                    30%
                                                </span>
                                            </div>
                                            <div className="flex justify-between mb-2 lg:mb-3">
                                                <ul className="flex items-center gap-x-[10px]">
                                                    <li className="cursor-pointer size-4 text-white lg:size-[18px] rounded-full bg-black font-thin text-sm flex items-center justify-center">
                                                        <i className="fa-solid fa-check" />
                                                    </li>
                                                    <li className="cursor-pointer size-4 text-white lg:size-[18px] rounded-full bg-black font-thin text-sm flex items-center justify-center">
                                                        <i className="fa-solid fa-check" />
                                                    </li>
                                                    <li className="cursor-pointer size-4 text-white lg:size-[18px] rounded-full bg-black font-thin text-sm flex items-center justify-center">
                                                        <i className="fa-solid fa-check" />
                                                    </li>
                                                    <li className="cursor-pointer size-4 text-white lg:size-[18px] rounded-full bg-black font-thin text-sm flex items-center justify-center">
                                                        <i className="fa-solid fa-check" />
                                                    </li>
                                                </ul>
                                                <span className=" cursor-pointer text-sm font-thin text-black ">
                                                    <i className="fa-regular fa-heart" />
                                                </span>
                                            </div>
                                            <a href="#" className="block text-[12px]/[16px] lg:text-sm hover:text-rose-800 mb-2 lg:mb-[10px]">Sản
                                                phẩm A</a>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-1">
                                                    <span className=" text-sm font-semibold text-dark lg:text-base">999.999đ</span>
                                                    <span className=" text-[10px]/[150%] line-through lg:text-[12px]/[150%]">999.999đ</span>
                                                </div>
                                                <div className="relative btn-cart">
                                                    <button className="card-add-to-cart size-5 text-[12px] border-dark border bg-dark rounded-tl-lg rounded-br-lg text-white transition duration-500 ease-in-out hover:bg-white lg:text-base hover:text-black lg:size-8">
                                                        <i className="fa-solid fa-cart-arrow-down" />
                                                    </button>
                                                    <ul className="card-list-size w-[100px] absolute bottom-[35px] hidden transition-all duration-300 ease-in-out right-0 bg-white lg:w-[132px] border border-gray-200 z-10">
                                                        <li>
                                                            <button className=" w-full text-sm py-2 text-dark font-semibold border border-white lg:text-base lg:py-3 hover:border-dark ">M</button>
                                                        </li>
                                                        <li>
                                                            <button className=" w-full text-sm py-2 text-dark font-semibold border border-white lg:text-base lg:py-3 hover:border-dark ">L</button>
                                                        </li>
                                                        <li>
                                                            <button className=" w-full text-sm py-2 text-dark font-semibold border border-white lg:text-base lg:py-3 hover:border-dark ">XL</button>
                                                        </li>
                                                        <li>
                                                            <button className=" w-full text-sm py-2 text-dark font-semibold border border-white lg:text-base lg:py-3 hover:border-dark ">XXL</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div>
                                            <div className="h-[236px] lg:h-[350px] w-full relative overflow-hidden mb-4">
                                                <a href="#" className="block w-full h-full">
                                                    <img src="./assets/images/products/ao1.jpg" className="w-full h-full object-cover" />
                                                </a>
                                                <span className="absolute top-0 left-0 text-[12px]/[150%] font-semibold py-1 px-3 bg-rose-900 text-white rounded-br-full">
                                                    Best seller
                                                </span>
                                                <span className="absolute size-6 lg:size-10 rounded-full top-2 right-2 text-[12px]/[150%] font-semibold bg-black text-white flex justify-center items-center">
                                                    30%
                                                </span>
                                            </div>
                                            <div className="flex justify-between mb-2 lg:mb-3">
                                                <ul className="flex items-center gap-x-[10px]">
                                                    <li className="cursor-pointer size-4 text-white lg:size-[18px] rounded-full bg-black font-thin text-sm flex items-center justify-center">
                                                        <i className="fa-solid fa-check" />
                                                    </li>
                                                    <li className="cursor-pointer size-4 text-white lg:size-[18px] rounded-full bg-black font-thin text-sm flex items-center justify-center">
                                                        <i className="fa-solid fa-check" />
                                                    </li>
                                                    <li className="cursor-pointer size-4 text-white lg:size-[18px] rounded-full bg-black font-thin text-sm flex items-center justify-center">
                                                        <i className="fa-solid fa-check" />
                                                    </li>
                                                    <li className="cursor-pointer size-4 text-white lg:size-[18px] rounded-full bg-black font-thin text-sm flex items-center justify-center">
                                                        <i className="fa-solid fa-check" />
                                                    </li>
                                                </ul>
                                                <span className=" cursor-pointer text-sm font-thin text-black ">
                                                    <i className="fa-regular fa-heart" />
                                                </span>
                                            </div>
                                            <a href="#" className="block text-[12px]/[16px] lg:text-sm hover:text-rose-800 mb-2 lg:mb-[10px]">Sản
                                                phẩm A</a>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-1">
                                                    <span className=" text-sm font-semibold text-dark lg:text-base">999.999đ</span>
                                                    <span className=" text-[10px]/[150%] line-through lg:text-[12px]/[150%]">999.999đ</span>
                                                </div>
                                                <div className="relative btn-cart">
                                                    <button className="card-add-to-cart size-5 text-[12px] border-dark border bg-dark rounded-tl-lg rounded-br-lg text-white transition duration-500 ease-in-out hover:bg-white lg:text-base hover:text-black lg:size-8">
                                                        <i className="fa-solid fa-cart-arrow-down" />
                                                    </button>
                                                    <ul className="card-list-size w-[100px] absolute bottom-[35px] hidden transition-all duration-300 ease-in-out right-0 bg-white lg:w-[132px] border border-gray-200 z-10">
                                                        <li>
                                                            <button className=" w-full text-sm py-2 text-dark font-semibold border border-white lg:text-base lg:py-3 hover:border-dark ">M</button>
                                                        </li>
                                                        <li>
                                                            <button className=" w-full text-sm py-2 text-dark font-semibold border border-white lg:text-base lg:py-3 hover:border-dark ">L</button>
                                                        </li>
                                                        <li>
                                                            <button className=" w-full text-sm py-2 text-dark font-semibold border border-white lg:text-base lg:py-3 hover:border-dark ">XL</button>
                                                        </li>
                                                        <li>
                                                            <button className=" w-full text-sm py-2 text-dark font-semibold border border-white lg:text-base lg:py-3 hover:border-dark ">XXL</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div>
                                            <div className="h-[236px] lg:h-[350px] w-full relative overflow-hidden mb-4">
                                                <a href="#" className="block w-full h-full">
                                                    <img src="./assets/images/products/ao1.jpg" className="w-full h-full object-cover" />
                                                </a>
                                                <span className="absolute top-0 left-0 text-[12px]/[150%] font-semibold py-1 px-3 bg-rose-900 text-white rounded-br-full">
                                                    Best seller
                                                </span>
                                                <span className="absolute size-6 lg:size-10 rounded-full top-2 right-2 text-[12px]/[150%] font-semibold bg-black text-white flex justify-center items-center">
                                                    30%
                                                </span>
                                            </div>
                                            <div className="flex justify-between mb-2 lg:mb-3">
                                                <ul className="flex items-center gap-x-[10px]">
                                                    <li className="cursor-pointer size-4 text-white lg:size-[18px] rounded-full bg-black font-thin text-sm flex items-center justify-center">
                                                        <i className="fa-solid fa-check" />
                                                    </li>
                                                    <li className="cursor-pointer size-4 text-white lg:size-[18px] rounded-full bg-black font-thin text-sm flex items-center justify-center">
                                                        <i className="fa-solid fa-check" />
                                                    </li>
                                                    <li className="cursor-pointer size-4 text-white lg:size-[18px] rounded-full bg-black font-thin text-sm flex items-center justify-center">
                                                        <i className="fa-solid fa-check" />
                                                    </li>
                                                    <li className="cursor-pointer size-4 text-white lg:size-[18px] rounded-full bg-black font-thin text-sm flex items-center justify-center">
                                                        <i className="fa-solid fa-check" />
                                                    </li>
                                                </ul>
                                                <span className=" cursor-pointer text-sm font-thin text-black ">
                                                    <i className="fa-regular fa-heart" />
                                                </span>
                                            </div>
                                            <a href="#" className="block text-[12px]/[16px] lg:text-sm hover:text-rose-800 mb-2 lg:mb-[10px]">Sản
                                                phẩm A</a>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-1">
                                                    <span className=" text-sm font-semibold text-dark lg:text-base">999.999đ</span>
                                                    <span className=" text-[10px]/[150%] line-through lg:text-[12px]/[150%]">999.999đ</span>
                                                </div>
                                                <div className="relative btn-cart">
                                                    <button className="card-add-to-cart size-5 text-[12px] border-dark border bg-dark rounded-tl-lg rounded-br-lg text-white transition duration-500 ease-in-out hover:bg-white lg:text-base hover:text-black lg:size-8">
                                                        <i className="fa-solid fa-cart-arrow-down" />
                                                    </button>
                                                    <ul className="card-list-size w-[100px] absolute bottom-[35px] hidden transition-all duration-300 ease-in-out right-0 bg-white lg:w-[132px] border border-gray-200 z-10">
                                                        <li>
                                                            <button className=" w-full text-sm py-2 text-dark font-semibold border border-white lg:text-base lg:py-3 hover:border-dark ">M</button>
                                                        </li>
                                                        <li>
                                                            <button className=" w-full text-sm py-2 text-dark font-semibold border border-white lg:text-base lg:py-3 hover:border-dark ">L</button>
                                                        </li>
                                                        <li>
                                                            <button className=" w-full text-sm py-2 text-dark font-semibold border border-white lg:text-base lg:py-3 hover:border-dark ">XL</button>
                                                        </li>
                                                        <li>
                                                            <button className=" w-full text-sm py-2 text-dark font-semibold border border-white lg:text-base lg:py-3 hover:border-dark ">XXL</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div>
                                            <div className="h-[236px] lg:h-[350px] w-full relative overflow-hidden mb-4">
                                                <a href="#" className="block w-full h-full">
                                                    <img src="./assets/images/products/ao1.jpg" className="w-full h-full object-cover" />
                                                </a>
                                                <span className="absolute top-0 left-0 text-[12px]/[150%] font-semibold py-1 px-3 bg-rose-900 text-white rounded-br-full">
                                                    Best seller
                                                </span>
                                                <span className="absolute size-6 lg:size-10 rounded-full top-2 right-2 text-[12px]/[150%] font-semibold bg-black text-white flex justify-center items-center">
                                                    30%
                                                </span>
                                            </div>
                                            <div className="flex justify-between mb-2 lg:mb-3">
                                                <ul className="flex items-center gap-x-[10px]">
                                                    <li className="cursor-pointer size-4 text-white lg:size-[18px] rounded-full bg-black font-thin text-sm flex items-center justify-center">
                                                        <i className="fa-solid fa-check" />
                                                    </li>
                                                    <li className="cursor-pointer size-4 text-white lg:size-[18px] rounded-full bg-black font-thin text-sm flex items-center justify-center">
                                                        <i className="fa-solid fa-check" />
                                                    </li>
                                                    <li className="cursor-pointer size-4 text-white lg:size-[18px] rounded-full bg-black font-thin text-sm flex items-center justify-center">
                                                        <i className="fa-solid fa-check" />
                                                    </li>
                                                    <li className="cursor-pointer size-4 text-white lg:size-[18px] rounded-full bg-black font-thin text-sm flex items-center justify-center">
                                                        <i className="fa-solid fa-check" />
                                                    </li>
                                                </ul>
                                                <span className=" cursor-pointer text-sm font-thin text-black ">
                                                    <i className="fa-regular fa-heart" />
                                                </span>
                                            </div>
                                            <a href="#" className="block text-[12px]/[16px] lg:text-sm hover:text-rose-800 mb-2 lg:mb-[10px]">Sản
                                                phẩm A</a>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-1">
                                                    <span className=" text-sm font-semibold text-dark lg:text-base">999.999đ</span>
                                                    <span className=" text-[10px]/[150%] line-through lg:text-[12px]/[150%]">999.999đ</span>
                                                </div>
                                                <div className="relative btn-cart">
                                                    <button className="card-add-to-cart size-5 text-[12px] border-dark border bg-dark rounded-tl-lg rounded-br-lg text-white transition duration-500 ease-in-out hover:bg-white lg:text-base hover:text-black lg:size-8">
                                                        <i className="fa-solid fa-cart-arrow-down" />
                                                    </button>
                                                    <ul className="card-list-size w-[100px] absolute bottom-[35px] hidden transition-all duration-300 ease-in-out right-0 bg-white lg:w-[132px] border border-gray-200 z-10">
                                                        <li>
                                                            <button className=" w-full text-sm py-2 text-dark font-semibold border border-white lg:text-base lg:py-3 hover:border-dark ">M</button>
                                                        </li>
                                                        <li>
                                                            <button className=" w-full text-sm py-2 text-dark font-semibold border border-white lg:text-base lg:py-3 hover:border-dark ">L</button>
                                                        </li>
                                                        <li>
                                                            <button className=" w-full text-sm py-2 text-dark font-semibold border border-white lg:text-base lg:py-3 hover:border-dark ">XL</button>
                                                        </li>
                                                        <li>
                                                            <button className=" w-full text-sm py-2 text-dark font-semibold border border-white lg:text-base lg:py-3 hover:border-dark ">XXL</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span className=" arrival-prev hidden absolute z-[15] left-4 top-1/2 -translate-y-1/2 cursor-pointer  text-[#BCBDC0] text-3xl font-thin lg:block hover:text-dark">
                                <i className="fa-solid fa-arrow-left-long" />
                            </span>
                            <span className="  arrival-next hidden absolute z-[15] right-4 top-1/2 -translate-y-1/2 cursor-pointer text-[#BCBDC0] text-3xl font-thin lg:block hover:text-dark">
                                <i className="fa-solid fa-arrow-right-long" />
                            </span>
                        </div>
                        <div className="w-max mx-auto mt-5">
                            <a href="#" className="block">
                                <span className=" btn-lg block  py-2 px-4 lg:py-3 lg:px-6 border border-dark">
                                    Xem tất cả
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default PageDetail