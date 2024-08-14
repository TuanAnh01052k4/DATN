

const NavbarBottom = () => {
    const onHandleNavbarMenu = (index: number) => {
        const content_menu_bottom = document.querySelectorAll<HTMLElement>('.content-menu-bottom');
        content_menu_bottom.forEach((item, i) => {
            if (index !== i) {
                item.classList.add('hidden');
                item.classList.remove('block');
            }
        });
        content_menu_bottom[index].classList.toggle('hidden');
        content_menu_bottom[index].classList.toggle('block');
    }
    return (
        <div className="fixed bottom-0 left-0 w-full z-40 pt-1 bg-white border-t border-gray-200 lg:hidden">
            <div className="px-[15px] w-full ">
                <div className="flex items-center w-max mx-auto">
                    <div onClick={() => onHandleNavbarMenu(0)} className="menu-bottom-item cursor-pointer text-center  px-4">
                        <span className="mb-1">
                            <i className="fa-solid fa-magnifying-glass" />
                        </span>
                        <p className="text-[12px]/[150%]">Tìm kiếm</p>
                    </div>
                    <div onClick={() => onHandleNavbarMenu(1)} className="menu-bottom-item cursor-pointer text-center  px-4">
                        <span className="mb-1">
                            <i className="fa-solid fa-headphones" />
                        </span>
                        <p className="text-[12px]/[150%]">Trợ giúp</p>
                        <div className="content-menu-bottom menu-animation-top fixed bottom-[50px] left-0 w-full bg-white hidden  transition-all duration-500 ease-in-out z-20">
                            <div className="border-b border-gray-200">
                                <h3 className="text-sm font-semibold pt-6 pb-5 text-[#221F20] text-left px-[15px]">Trợ giúp</h3>
                            </div>
                            <ul className="px-[15px] py-4">
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
                                <li className="group mb-6 ">
                                    <a href="#" className="flex items-center text-sm font-semibold group-hover:text-gray-800 ">
                                        <span className="mr-3 "><i className="fa-solid fa-paw" /></span>
                                        Tra cứu đơn hàng
                                    </a>
                                </li>
                                <li className="group ">
                                    <a href="#" className="flex items-center text-sm font-semibold group-hover:text-gray-800 ">
                                        <span className="mr-3 "><i className="fa-regular fa-comments" /></span>
                                        Liên hệ
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                {/* phần menu có user */}
                    <div onClick={() => onHandleNavbarMenu(2)} className=" menu-bottom-item cursor-pointer text-center px-4">
                        <span className="mb-1">
                            <i className="fa-regular fa-user" />
                        </span>
                        <p className="text-[12px]/[150%]">Tài khoản</p>
                        <div className="content-menu-bottom menu-animation-top fixed bottom-[50px] left-0 w-full bg-white hidden  transition-all duration-500 ease-in-out rounded-md z-20">
                            <div className="border-b border-gray-200">
                                <h3 className="text-sm font-semibold pt-6 pb-5 text-[#221F20] text-left px-[15px]">Tài khoản của tôi
                                </h3>
                            </div>
                            <ul className="px-[15px] py-4">
                                <li className="group mb-6">
                                    <a href="#" className="flex items-center text-sm font-semibold group-hover:text-gray-800 ">
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarBottom