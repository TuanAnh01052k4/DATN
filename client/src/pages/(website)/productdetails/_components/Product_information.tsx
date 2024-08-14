import React from 'react'
import Product_description from './Product_description'

type Props = {}

const Product_information = (props: Props) => {
  return (
    <>
        <div className="lg:pl-[112px]">
                        <div className="lg:mb-[20px] mt-[10px] lg:mt-0">
                            <h1 className="lg:text-[32px] text-[18px] font-semibold text-[#221f20]">ÁO THUN REGULAR IN HÌNH</h1>
                        </div>
                    {/*  */}
                        <div className="lg:flex lg:text-[18px] lg:mb-[28px] text-[14px] mt-4 lg:mt-0 ">
                            <p>SKU: <span>57E3930</span></p>
                            <div className="lg:ml-[34px] mr-[17px] inline-block">
                            <i className="fa-solid fa-star text-[#EEB256]" />
                            <i className="fa-solid fa-star text-[#EEB256]" />
                            <i className="fa-solid fa-star text-[#EEB256]" />
                            <i className="fa-solid fa-star text-[#EEB256]" />
                            <i className="fa-solid fa-star text-[#EEB256]" />
                            </div>
                            <p className='inline-block'>(0 đánh giá)</p>
                        </div>
                    {/*  */}
                        <div className="flex lg:mb-[24px] mt-4 lg:mt-0 mb-4">
                            <b className="lg:text-[27px] text-[18px] font-semibold">375.000đ</b>
                            <del className="lg:mt-2 mt-[6px] lg:text-[18px] text-[12px] ml-[9px] text-[#a8a9ad]">750.000đ</del>
                            <div className="product-detail__price-sale ml-[11px]  font-semibold text-[15px] text-white border bg-[#dc633a] h-[23px] px-2 mt-[-12px] lg:mt-0 pt-[2px]">
                            -50<span>%</span>
                            </div>
                        </div>
                    {/*  */}
                        <div className="">
                            <div className="text-[16px]">
                            <h3 className="lg:text-2xl font-semibold">Màu sắc: <span id="selected-color">Trắng</span></h3> 
                            <div className="color-options flex lg:mt-4 lg:text-[16px] mt-2">
                                <div className="color-option lg:w-6 lg:h-6 w-5 h-5 bg-black rounded-full mr-4 relative" data-color="Đen">
                                <span className="check-icon hidden absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-white"><i className="fas fa-check" /></span>
                                </div>
                                <div className="color-option lg:w-6 lg:h-6 w-5 h-5 bg-white border rounded-full mr-4 relative" data-color="Trắng">
                                <span className="check-icon hidden absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-black"><i className="fas fa-check" /></span>
                                </div>
                            </div>
                            </div>   
                            {/*  */}
                            <div className="product-detail__size">
                            <div className="size-options flex mt-[24px] mb-[12px]">
                                <div className="size-option lg:w-[54px] lg:h-[37px] w-[48px] h-[32px] border flex items-center justify-center lg:mr-[14px] mr-3">S</div>
                                <div className="size-option lg:w-[54px] lg:h-[37px] w-[48px] h-[32px] border flex items-center justify-center lg:mr-[14px] mr-3">M</div>
                                <div className="size-option lg:w-[54px] lg:h-[37px] w-[48px] h-[32px] border flex items-center justify-center lg:mr-[14px] mr-3">L</div>
                                <div className="size-option lg:w-[54px] lg:h-[37px] w-[48px] h-[32px] border flex items-center justify-center lg:mr-[14px] mr-3">XL</div>
                                <div className="size-option lg:w-[54px] lg:h-[37px] w-[48px] h-[32px] border flex items-center justify-center lg:mr-[14px] mr-3">XXL</div>
                            </div>
                            <div className="mb-6">
                                <i className="fa-solid fa-ruler" /><span className="ml-[10px] lg:text-[14px] text-[12px] text-[#373737]">Kiểm tra size của bạn</span>
                            </div>
                            </div>
                            {/*  */}
                            <div className="product-detail__quantity flex items-center">
                            <h3 className="lg:text-[19px] text-[19px] font-semibold mr-4">Số lượng:</h3>
                            <div className="quantity-control flex border lg:rounded-tl-2xl lg:rounded-br-2xl rounded-tl-md rounded-br-md mt-[-12px] lg:mt-0  ">
                                <button className="quantity-decrease lg:w-[55px] lg:h-[54px] w-8 h-8 border flex items-center justify-center mr-[5px] lg:rounded-tl-2xl lg:rounded-br-2xl rounded-tl-md rounded-br-md">-</button>
                                <input type="number" className="quantity-input lg:w-[60px] lg:h-[54px] w-8 h-8  text-center" defaultValue={1} min={1} />
                                <button className="quantity-increase lg:w-[55px] lg:h-[54px] w-8 h-8 border flex items-center justify-center ml-[5px] lg:rounded-tl-2xl lg:rounded-br-2xl rounded-tl-md rounded-br-md">+</button>
                            </div>
                            </div>
                            {/*  */}
                            <div className="product-detail__actions flex lg:mt-[24px] mb-4 mt-4">
                            <button className="add-to-cart hover:text-black hover:bg-white border-black border  w-[160px] h-[48px] bg-[#221f20] text-white lg:text-[16px] text-[13px] px-4 font-semibold lg:mr-[10px] mr-1
                            rounded-tl-2xl rounded-br-2xl">THÊM VÀO GIỎ</button>
                            <button className="buy-now hover:text-white hover:bg-black w-[125px] lg:text-[16px] text-[13px] rounded-tl-2xl rounded-br-2xl border border-black h-[48px] text-black font-semibold mx-4">MUA HÀNG</button>
                            <button className="h-[48px] w-[48px] hover:text-white hover:bg-black border border-black rounded-tl-2xl rounded-br-2xl"><i className="fa-regular fa-heart" /></button>
                            </div>
                            {/*  */}
                            <div>
                            <a href="#" className="text-lg text-black border-b border-black hover:no-underline text-[14px]">Tìm tại cửa hàng</a>
                            </div>
                            <div className="product-detail-divider mt-[57px] mb-[45px]">
                            <hr />
                            </div>
                            {/*  */}
                            <Product_description />
                            {/*  */}
                        </div>
                    </div>
    </>
  )
}

export default Product_information