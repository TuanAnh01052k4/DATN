import { useState } from "react"
import imageVisa from '../../../assets/images/products/image 10.jpg'

const OrderPage = () => {
    const [clickCity, setClickCity] = useState(false)
    const [clickDistrict, setClickDistrict] = useState(false)
    const [clickWard, setClickWard] = useState(false)
    const [displayVoucher, setDisplayVoucher] = useState(false)
    const [payment, setPayment] = useState<number | null>(null)

    const [address, setAddress] = useState<number | null>(null)

    const onClickAddress = (number: number) => {
        if (address == null || address !== number) {
            setAddress(number)
        } else {
            setAddress(null)
        }
    }


    const onClickPayment = (number: number) => {
        if (payment == null || payment !== number) {
            setPayment(number)
        } else {
            setPayment(null)
        }
    }

    return (
        <section>
            <div>
                <div className="container mx-auto lg:flex pt-11 pb-4 gap-10">
                    <div className="lg:w-[68%]">
                        <div className=''>
                            <div className="border border-[#91979c] rounded-tl-[20px] rounded-br-[20px] py-5 relative mb-9">
                                <div className="flex items-center px-4 pb-6 w-[90%] mx-auto lg:pb-10">
                                    <div className="flex items-center basis-1/3 ">
                                        <div className="size-4 lg:size-5 rounded-full bg-black border relative flex-shrink-0">
                                            <div className="top-6 left-7 text-sm absolute lg:left-1/2 transform -translate-x-1/2 lg:top-8 lg:text-xs leading-snug w-24 text-center">
                                                Giỏ hàng
                                            </div>
                                        </div>
                                        <div className="w-full h-[4px] lg:h-[2px] bg-black" />
                                    </div>
                                    <div className="flex items-center  basis-1/3 ">
                                        <div className="size-4 lg:size-5 rounded-full bg-black border border-gray-300 relative flex-shrink-0">
                                            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-8 text-xs leading-snug w-24 text-center">
                                                Đặt hàng
                                            </div>
                                        </div>
                                        <div className="w-full h-[4px]  lg:h-[2px] bg-gray-300" />
                                    </div>

                                    <div className="flex items-center  basis-1/3 ">
                                        <div className="size-4 lg:size-5 rounded-full bg-white border border-gray-300 relative flex-shrink-0">
                                            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-8 text-xs leading-snug w-24 text-center">
                                                Thanh toán
                                            </div>
                                        </div>
                                        <div className="w-full h-[4px] lg:h-[2px] bg-gray-300" />
                                        <div className="size-4 lg:size-5 rounded-full bg-white border border-gray-300 relative flex-shrink-0">
                                            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-8 text-xs leading-snug w-24 text-center">
                                                Hoàn thành đơn
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className=''>
                                <div className="pb-4">
                                    <span className="text-lg lg:text-xl text-black font-semibold">Địa chỉ giao hàng</span>
                                    <div className="py-4 flex items-center gap-5">
                                        <button className="py-3 bg-black w-48 lg:py-4 rounded-tl-[20px] rounded-br-[20px] font-semibold text-white hover:bg-white hover:text-black hover:border hover:border-black">ĐĂNG
                                            NHẬP</button>
                                        <button className="py-3 bg-white w-48 lg:py-4 rounded-tl-[20px] rounded-br-[20px] font-semibold text-black border-black border hover:bg-black hover:text-white">ĐĂNG
                                            KÝ</button>
                                    </div>
                                    <span className="text-xs lg:text-sm">Đăng nhập/ Đăng ký tài khoản để được tích điểm và nhận thêm nhiều ưu
                                        đãi từ IVY
                                        moda.</span>
                                    <div className="hidden py-6">
                                        <div className="my-4 border rounded-tl-[30px] rounded-br-[30px]">
                                            <div className="px-5 py-6 lg:py-8 lg:px-10 justify-between">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-lg text-black font-semibold">Hiếu(Cơ quan)</span>
                                                    <div className="flex items-center gap-2">
                                                        <a href=''><u>Chọn địa chỉ khác</u></a>
                                                        <button className="bg-black rounded-tl-[10px] rounded-br-[10px] px-4 py-2 text-white hover:bg-white hover:text-black hover:border hover:border-black">MẶC ĐỊNH</button>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <span>Điện thoại: 0123456789</span>
                                                    <span>Địa chỉ: Ứng hoà,Ninh Bình</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-6">
                                    <div className="flex gap-2 items-center">
                                        <span className="size-4 bg-black rounded-full text-white text-sm flex items-center justify-center"><i className="fa-solid fa-check" /></span>
                                        <p className="text-sm font-semibold text-black lg:text-base">Địa chỉ</p>
                                    </div>
                                    <div className="w-full flex justify-between items-center gap-8">
                                        <input type="text" placeholder="Họ tên" className="placeholder:text-sm lg:text-base border rounded-md py-3 px-5 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent  text-base placeholder-black " />
                                        <input type="text" placeholder="Số điện thoại" className="placeholder:text-sm lg:text-base border rounded-md py-3 px-5 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent  text-base placeholder-black" />
                                    </div>
                                    <div className="w-full flex justify-between items-center gap-8" >
                                        <div className="w-full relative select-information" >
                                            <select onBlur={() => { setAddress(null) }} className="text-sm border rounded-md py-3 px-5 w-full appearance-none select-content focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent  lg:text-base text-black" onClick={() => onClickAddress(1)}>
                                                <option disabled selected>Tỉnh/Thành Phố</option>
                                                <option >Hà nội</option>
                                            </select>
                                            <span className={`absolute right-5 top-1/2 -translate-y-1/2 ${address == 1 ? 'active' : 'anactive'}`}><i className="fa-solid fa-chevron-right" /></span>
                                        </div>
                                        <div className="w-full relative select-information">
                                            <select onBlur={() => { setAddress(null) }} className="text-sm border rounded-md py-3 px-5 w-full appearance-none select-content focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent lg:text-base text-black " onClick={() => onClickAddress(2)}>
                                                <option disabled selected>Quận/Huyện</option>
                                                <option>Hà nội</option>
                                            </select>
                                            <span className={`absolute right-5 top-1/2 -translate-y-1/2 ${address == 2 ? 'active' : 'anactive'}`}><i className="fa-solid fa-chevron-right" /></span>
                                        </div>
                                    </div>
                                    <div className="w-full relative select-information">
                                        <select onBlur={() => { setAddress(null) }} className="text-sm border rounded-md py-3 px-5 w-full appearance-none select-content focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent lg:text-base text-black " onClick={() => onClickAddress(3)}>
                                            <option disabled selected>Phường/Xã</option>
                                            <option >Hà nội</option>
                                        </select>
                                        <span className={`absolute right-5 top-1/2 -translate-y-1/2 ${address == 3 ? 'active' : 'anactive'}`}><i className="fa-solid fa-chevron-right" /></span>
                                    </div>
                                    <div>
                                        <input type="text" className="w-full  border rounded-md py-3 px-5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent lg:placeholder:text-base placeholder-black placeholder:text-sm" placeholder="Địa chỉ" />
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                            <div className="py-6">
                                <span className="text-lg lg:text-xl text-black font-semibold">Phương thức giao hàng</span>
                                <div className="my-4 border rounded-tl-[30px] rounded-br-[30px]">
                                    <div className="px-5 py-6 flex items-center gap-2 lg:py-8 lg:px-10">
                                        <span className="size-3 text-[10px] bg-black rounded-full text-white lg:size-4 flex justify-center items-center lg:text-[12px]"><i className="fa-solid fa-check " /></span>
                                        <p className="text-sm text-black font-semibold">Chuyển phát nhanh</p>
                                    </div>
                                </div>
                            </div>
                            <div className=''>
                                <span className="text-lg lg:text-xl text-black font-semibold">Phương thức thanh toán</span>
                                <div className="px-5 py-4 my-4 border rounded-tl-[30px] rounded-br-[30px] lg:py-8 lg:px-10 flex flex-col gap-8" >
                                    <span className="text-sm ">Mọi giao dịch đều được bảo mật và mã hóa. Thông tin thẻ tín dụng sẽ không bao giờ
                                        được lưu lại.</span>
                                    <div className="  flex items-center gap-3">
                                        <div className={` cursor-pointer flex items-center gap-x-3`} onClick={() => onClickPayment(1)}>
                                            <input type="radio" name="radio-example" id="payment" checked={payment == 1 ? true : false} className='hidden' />
                                            <div className={`size-4 rounded-full border flex justify-center items-center  ${payment == 1 ? 'bg-black' : ''} `}>
                                                <span className={`text-white text-[12px] ${payment !== 1 && 'hidden'}`}><i className="fa-solid fa-check" /></span>
                                            </div>
                                            <span className="text-sm text-black">Phương thức thanh toán</span>
                                        </div>

                                        <img src={imageVisa} />

                                    </div>
                                    <div className="  flex items-center gap-3">
                                        <div className={` cursor-pointer flex items-center gap-x-3`} onClick={() => onClickPayment(2)}>
                                            <input type="radio" name="radio-example" id="payment" checked={payment == 2 ? true : false} className='hidden' />
                                            <div className={`size-4 rounded-full border flex justify-center items-center  ${payment == 2 ? 'bg-black' : ''} `}>
                                                <span className={`text-white text-[12px] ${payment !== 2 && 'hidden'}`}><i className="fa-solid fa-check" /></span>
                                            </div>
                                            <span className="text-sm text-black">Thanh toán bằng thẻ ATM</span>
                                        </div>



                                    </div>
                                    <div className="  flex items-center gap-3">
                                        <div className={` cursor-pointer flex items-center gap-x-3`} onClick={() => onClickPayment(3)}>
                                            <input type="radio" name="radio-example" id="payment" checked={payment == 3 ? true : false} className='hidden' />
                                            <div className={`size-4 rounded-full border flex justify-center items-center  ${payment == 3 ? 'bg-black' : ''} `}>
                                                <span className={`text-white text-[12px] ${payment !== 3 && 'hidden'}`}><i className="fa-solid fa-check" /></span>
                                            </div>
                                            <span className="text-sm text-black">Thanh toán bằng Momo</span>
                                        </div>



                                    </div>
                                    <div className="  flex items-center gap-3">
                                        <div className={` cursor-pointer flex items-center gap-x-3`} onClick={() => onClickPayment(4)}>
                                            <input type="radio" name="radio-example" id="payment" checked={payment == 4 ? true : false} className='hidden' />
                                            <div className={`size-4 rounded-full border flex justify-center items-center  ${payment == 4 ? 'bg-black' : ''} `}>
                                                <span className={`text-white text-[12px] ${payment !== 4 && 'hidden'}`}><i className="fa-solid fa-check" /></span>
                                            </div>
                                            <span className="text-sm text-black">Thanh toán khi nhận hàng</span>
                                        </div>



                                    </div>
                                </div>
                            </div>
                            <div className="py-7">
                                <div className="w-[60%] flex group items-center border border-black lg:w-[35%] py-3 justify-center gap-2 rounded-tl-[20px] rounded-br-[20px] hover:bg-white bg-black">
                                    <button className="text-sm lg:text-lg text-white group-hover:text-black">HIỂN THỊ SẢN PHẨM</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[32%]">
                        <div className="bg-[#FBFBFC]">
                            <div className="px-5 pt-4 pb-8 flex flex-col gap-4">
                                <span className="text-xl text-[#000000] font-medium">Tóm tắt đơn hàng</span>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm">Tổng tiền hàng</span>
                                    <span className="text-sm">1.299.000đ</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm">Tạm tính</span>
                                    <span className="text-sm">1.299.000đ</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm">Phí vận chuyển</span>
                                    <span className="text-sm">1.299.000đ</span>
                                </div>
                                <div className="flex justify-between items-center border-b pb-5">
                                    <span className="text-sm">Tiền thanh toán</span>
                                    <span className="text-lg text-dark font-semibold">1.990.000đ</span>
                                </div>
                            </div>
                            <div className="px-5 pb-8 flex flex-col gap-4">
                                <div className="flex items-center justify-between lg:justify-around">
                                    <span className="lg:text-lg text-black font-semibold">Mã phiếu giảm giá</span>
                                    <div className="w-[1px] h-6 bg-black" />
                                    <button className="lg:text-lg text-gray-400 font-semibold" id="zoomVoucher" onClick={() => setDisplayVoucher(!displayVoucher)}>Mã của tôi</button>
                                </div>
                                <div className="flex items-center gap-3 justify-between">
                                    <input type="text" className="placeholder:text-sm border rounded-md py-3 px-5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent lg:placeholder:text-base " placeholder="Mã giảm giá" />
                                    <button className="text-sm lg:text-base bg-white px-3 lg:px-1 py-1 lg:py-3 rounded-tl-[20px] rounded-br-[20px] font-semibold text-black border-black border hover:bg-black hover:text-white">ÁP
                                        DỤNG</button>
                                </div>
                                <div>
                                    <select name='' id='' className="text-sm border w-full rounded-md py-3 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent lg:text-base ">
                                        <option value=''>Mã nhân viên hỗ trợ</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div id="myModalVoucher" className={`modal fixed top-0 left-0 w-full h-full bg-black/45  z-[51]  ${displayVoucher ? "" : "hidden"}`}>
                            <div className="w-[400px] mt-3 lg:w-[800px] mx-auto bg-white lg:mt-9 rounded-lg" >
                                <div className="border-b">
                                    <div className="flex items-center justify-between px-5 py-4" >
                                        <span className="text-black text-lg font-semibold">Danh sách Voucher</span>
                                        <button id="closeModalVoucher" onClick={() => setDisplayVoucher(!displayVoucher)}><i className="fa-solid fa-xmark" /></button>
                                    </div>
                                </div>
                                <div className="px-5 pt-4 pb-6">
                                    <span className=''>Rấc tiếc, bạn không có mã giảm giá nào !</span>
                                </div>
                            </div>
                        </div>
                        <button className="bg-black text-white w-full py-3 text-lg font-semibold rounded-tl-[20px] rounded-br-[20px] hover:bg-white hover:text-black hover:border hover:border-black">HOÀN
                            THÀNH</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OrderPage