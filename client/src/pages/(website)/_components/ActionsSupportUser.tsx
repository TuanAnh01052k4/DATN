import { useState } from 'react'

const ActionsSupportUser = () => {
    const [actionSupport, setActionSupport] = useState(false)
    const [actionUser, setActionUser] = useState(false)
    const onHandeActionSupport = () => {
        setActionSupport(!actionSupport)
        setActionUser(false)
    }
    const onHandeActionUser = () => {
        setActionUser(!actionUser)
        setActionSupport(false)
    }
    return (
        <>
            <div className="relative hidden lg:block">
                <span onClick={onHandeActionSupport} className="sub-top cursor-pointer text-base hover:text-gray-800 block">
                    <i className="fa-solid fa-headphones" />
                </span>
                {actionSupport && (
                    <div className="sub-menu transition-all duration-500 ease-in-out  absolute min-w-[255px] top-10 right-0 bg-white border border-gray rounded-md z-[3]">
                        <div className="border-b border-gray">
                            <h3 className="text-sm font-semibold px-6 pt-6 pb-5 text-[#221F20]">Trợ giúp</h3>
                        </div>
                        <ul className="p-6">
                            <li className="group mb-6">
                                <a href="#" className="flex items-center text-sm font-semibold group-hover:text-gray-800 ">
                                    <span className="mr-3 "><i className="fa-solid fa-phone-volume" /></span>
                                    Hotline
                                </a>
                            </li>
                            <li className="group mb-6">
                                <a href="#" className="flex items-center text-sm font-semibold group-hover:text-gray-800 ">
                                    <span className="mr-3 "><i className="fa-brands fa-rocketchat" /></span>
                                    Live Chat
                                </a>
                            </li>
                            <li className="group mb-6">
                                <a href="#" className="flex items-center text-sm font-semibold group-hover:text-gray-800 ">
                                    <span className="mr-3 "><i className="fa-solid fa-arrows-rotate" /></span>
                                    Messenger
                                </a>
                            </li>
                            <li className="group mb-6">
                                <a href="#" className="flex items-center text-sm font-semibold group-hover:text-gray-800 ">
                                    <span className="mr-3 "><i className="fa-regular fa-envelope" /></span>
                                    Email
                                </a>
                            </li>
                            <li className="group ">
                                <a href="#" className="flex items-center text-sm font-semibold group-hover:text-gray-800 ">
                                    <span className="mr-3 "><i className="fa-solid fa-paw" /></span>
                                    Tra cứu đơn hàng
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            <div className="relative hidden lg:block">
                <span onClick={onHandeActionUser} className="sub-top block cursor-pointer text-base hover:text-gray-800 ">
                    <i className="fa-regular fa-user" />
                </span>
                {actionUser && (
                    <div className="sub-menu transition-all duration-500 ease-in-out  absolute min-w-[255px] top-10 right-0 bg-white border border-gray rounded-md z-[3]">
                        <div className="border-b border-gray">
                            <h3 className="text-sm font-semibold px-6 pt-6 pb-5 text-[#221F20]">Tài khoản của tôi</h3>
                        </div>
                        <ul className="p-6">
                            <li className="group mb-6">
                                <a href="/customer/infor" className="flex items-center text-sm font-semibold group-hover:text-gray-800 ">
                                    <span className="mr-3 "><i className="fa-regular fa-user" /></span>
                                    Thông tin tài khoản
                                </a>
                            </li>
                            <li className="group mb-6">
                                <a href="#" className="flex items-center text-sm font-semibold group-hover:text-gray-800 ">
                                    <span className="mr-3 "><i className="fa-solid fa-arrows-rotate" /></span>
                                    Quản lý đơn hàng
                                </a>
                            </li>
                            <li className="group mb-6">
                                <a href="#" className="flex items-center text-sm font-semibold group-hover:text-gray-800 ">
                                    <span className="mr-3 "><i className="fa-solid fa-location-dot" /></span>
                                    Sổ địa chỉ
                                </a>
                            </li>
                            <li className="group mb-6">
                                <a href="#" className="flex items-center text-sm font-semibold group-hover:text-gray-800 ">
                                    <span className="mr-3 "><i className="fa-solid fa-glasses" /></span>
                                    Sản phẩm đã xem
                                </a>
                            </li>
                            <li className="group mb-6">
                                <a href="#" className="flex items-center text-sm font-semibold group-hover:text-gray-800 ">
                                    <span className="mr-3 "><i className="fa-regular fa-heart" /></span>
                                    Sản phẩm yêu thích
                                </a>
                            </li>
                            <li className="group mb-6">
                                <a href="#" className="flex items-center text-sm font-semibold group-hover:text-gray-800 ">
                                    <span className="mr-3 "><i className="fa-solid fa-headphones" /></span>
                                    Hỏi đáp sản phẩm
                                </a>
                            </li>
                            <li className="group mb-6">
                                <a href="#" className="flex items-center text-sm font-semibold group-hover:text-gray-800 ">
                                    <span className="mr-3 "><i className="fa-regular fa-hand-point-right" /></span>
                                    Hỗ trợ - Mail Shop
                                </a>
                            </li>
                            <li className="group ">
                                <a href="#" className="flex items-center text-sm font-semibold group-hover:text-gray-800 ">
                                    <span className="mr-3 "><i className="fa-solid fa-arrow-right-from-bracket" /></span>
                                    Đăng xuất
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    )
}

export default ActionsSupportUser