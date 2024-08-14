import facebook from '../../../assets/icons/facebook.png'
import instagram from '../../../assets/icons/instagram.jpg'
import youtube from '../../../assets/icons/youtube.png'
import google from '../../../assets/icons/google.png'
import logo from '../../../assets/logos/logo.png'
const Footer = () => {
    const onHandleInfor = (index:number)=>{
        const footer_contents = document.querySelectorAll<HTMLElement>('.footer-infomation-content')
        const footer_icons = document.querySelectorAll<HTMLElement>('.footer-infomation-icon ')
        footer_contents.forEach((item, i) => {
            if (index != i) {
              item.classList.add('hidden')
              item.classList.remove('block')
              footer_icons[i].classList.remove('active')
            }
          })
          footer_contents[index].classList.toggle('hidden')
          footer_contents[index].classList.toggle('block')
          footer_icons[index].classList.toggle('active')
    }

    return (
        <footer className="border-t border-gray-200">
            <div className="container">
                <div className="flex flex-col w-full pt-[23px] pb-8 border-b border-gray-200 lg:pt-[60px]  lg:justify-between lg:flex-row ">
                    <div className="order-3 lg:max-w-[22.05%] w-full lg:order-1">
                        <div className="mb-4">
                            <a href="#" className="block">
                                <img src={logo} className="w-[115px] object-contain"  />
                            </a>
                        </div>
                        <div className="flex items-center gap-6 mb-8">
                            <a href="#" className="block size-6 ">
                                <span className="flex justify-center items-center  w-full h-full">
                                    <img src={facebook} className="w-full object-cover"  />
                                </span>
                            </a>
                            <a href="#" className="block size-6  ">
                                <span className="flex justify-center items-center  w-full h-full">
                                    <img src={instagram} className="w-full object-cover"  />
                                </span>
                            </a>
                            <a href="#" className="block size-6 ">
                                <span className="flex justify-center items-center  w-full h-full">
                                    <img src={google} className="w-full object-cover"  />
                                </span>
                            </a>
                            <a href="#" className="block size-6 ">
                                <span className="flex justify-center items-center w-full h-full">
                                    <img src={youtube} className="w-full object-cover"  />
                                </span>
                            </a>
                        </div>
                        <a href="#" className="block text-base text-white uppercase font-semibold px-6 py-3 border border-[#221F20] rounded-tl-lg rounded-br-lg bg-[#221F20] transition duration-300 ease-in-out text-center hover:text-black hover:bg-white ">
                            Hotline: 0345.908.973
                        </a>
                    </div>
                    <div className="order-2 mb-4  w-full flex flex-col lg:justify-between lg:flex-row lg:max-w-[45.2%] lg:mb-0 lg:order-2">
                        <div>
                            <div  onClick={() =>onHandleInfor(0)} className="footer-information cursor-pointer flex justify-between lg:justify-normal lg:cursor-auto ">
                                <h3 className="text-dark text-base mb-[14px] font-semibold lg:mb-5 lg:text-2xl">Giới thiệu</h3>
                                <span className="footer-infomation-icon lg:hidden"><i className="fa-solid fa-chevron-right" /></span>
                            </div>
                            <ul className="footer-infomation-content hidden lg:block mb-6 lg:mb-0">
                                <li><a href="#" className="block text-sm mb-4 hover:text-dark">Về Mail-Shop</a></li>
                                <li><a href="#" className="block text-sm mb-4 hover:text-dark">Tuyển dụng</a></li>
                                <li><a href="#" className="block text-sm hover:text-dark">Hệ thống cửa hàng</a></li>
                            </ul>
                        </div>
                        <div>
                            <div  onClick={() =>onHandleInfor(1)} className=" footer-information cursor-pointer flex justify-between lg:justify-normal lg:cursor-auto ">
                                <h3 className="text-dark text-base mb-[14px] font-semibold lg:mb-5 lg:text-2xl">Dịch vụ khách hàng</h3>
                                <span className="footer-infomation-icon lg:hidden"><i className="fa-solid fa-chevron-right" /></span>
                            </div>
                            <ul className="footer-infomation-content hidden lg:block mb-6 lg:mb-0">
                                <li><a href="#" className="block text-sm mb-4 hover:text-dark">Chính sách điều khoản</a></li>
                                <li><a href="#" className="block text-sm mb-4 hover:text-dark">Hướng dẫn mua hàng</a></li>
                                <li><a href="#" className="block text-sm mb-4 hover:text-dark">Chính sách thanh toán</a></li>
                                <li><a href="#" className="block text-sm mb-4 hover:text-dark">Chính sách đổi trả</a></li>
                                <li><a href="#" className="block text-sm mb-4 hover:text-dark">Chính sách bảo hành</a></li>
                                <li><a href="#" className="block text-sm mb-4 hover:text-dark">Chính sách giao nhận vận chuyển</a></li>
                                <li><a href="#" className="block text-sm mb-4 hover:text-dark">Chính sách thẻ thành viên</a></li>
                                <li><a href="#" className="block text-sm hover:text-dark">Q&amp;A</a></li>
                            </ul>
                        </div>
                        <div>
                            <div onClick={() =>onHandleInfor(2)} className=" footer-information cursor-pointer flex justify-between lg:justify-normal lg:cursor-auto">
                                <h3 className="text-dark text-base mb-[14px] font-semibold lg:mb-5 lg:text-2xl">Liên hệ</h3>
                                <span className="footer-infomation-icon lg:hidden"><i className="fa-solid fa-chevron-right" /></span>
                            </div>
                            <ul className="footer-infomation-content hidden lg:block mb-6 lg:mb-0">
                                <li><a href="#" className="block text-sm mb-4 hover:text-dark">Hotline</a></li>
                                <li><a href="#" className="block text-sm mb-4 hover:text-dark">Email</a></li>
                                <li><a href="#" className="block text-sm mb-4 hover:text-dark">Live Chat</a></li>
                                <li><a href="#" className="block text-sm mb-4 hover:text-dark">Messenger</a></li>
                                <li><a href="#" className="block text-sm hover:text-dark">Liên hệ</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className=" order-1 lg:max-w-[23.75%] w-full mb-8 lg:order-3">
                        <div className="w-full px-4 py-6 border-[4px] rounded-tl-[56px] rounded-br-[56px] ">
                            <h3 className="text-xl text-dark max-w-[80%] mb-2 font-semibold ">Nhận thông tin các chương trình của Mail Shop
                            </h3>
                            <form className="flex border-b border-gray-200 rounded-br-3xl">
                                <input type="text" placeholder="Nhập địa chỉ email" className="w-full text-sm pb-3 pr-[10px] outline-0 border-0" />
                                <button type="submit" className="flex-shrink-0 py-3 px-[27px] rounded-tl-3xl rounded-br-3xl text-base border border-gray-900 transition duration-300 ease-in-out hover:bg-dark hover:text-white">Đăng
                                    ký</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="py-6 lg:py-8">
                    <p className="text-center">© Mail Shop All rights reserved</p>
                </div>
                {/* Đệm cho phần navbar-mobile  */}
                <div className="h-10 lg:hidden" />
            </div>
        </footer>

    )
}

export default Footer