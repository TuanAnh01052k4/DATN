import { useState } from 'react'

const MenuHeader = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const onMenuMobile = () => {
        const menu = document.querySelector<HTMLElement>('.menu');
        if (isOpenMenu == true) {
            if (menu) {
                menu.classList.add('hidden');
                menu.style.opacity = '0';
            }
        } else {
            if (menu) {
                menu.classList.remove('hidden');
                menu.style.opacity = '1';
            }
        }
        setIsOpenMenu(!isOpenMenu)
    }
  return (
    <>
          <span onClick={onMenuMobile} className="open-menu block cursor-pointer text-xl lg:hidden">
                            <i className="fa-solid fa-bars" />
                        </span>
                        <div className="menu fixed px-[15px] pt-6 top-0 left-0 w-full transition-all duration-500 ease-in-out bg-white z-10 h-screen hidden lg:block lg:static lg:w-auto lg:h-auto lg:pt-0">
                            <span onClick={onMenuMobile} className="close-menu block cursor-pointer text-2xl mb-8 lg:hidden">
                                <i className="fa-solid fa-xmark" />
                            </span>
                            <ul className="menu-item m-0 flex flex-col gap-8 lg:py-7 lg:flex-row lg:items-center lg:gap-x-3">
                                <li><a href="#" className="text-[12px]/[150%] text-[#221F20] font-semibold transition duration-300 ease-in-out uppercase hover:text-[#AC2F33]">Home</a>
                                </li>
                                <li><a href="#" className="text-[12px]/[150%] text-[#221F20] font-semibold transition duration-300 ease-in-out uppercase hover:text-[#AC2F33]">Shop</a>
                                </li>
                                <li><a href="#" className="text-[12px]/[150%] text-[#221F20] font-semibold transition duration-300 ease-in-out uppercase hover:text-[#AC2F33]">Blogs</a>
                                </li>
                                <li><a href="#" className="text-[12px]/[150%] text-[#221F20] font-semibold transition duration-300 ease-in-out uppercase hover:text-[#AC2F33]">Contact</a>
                                </li>
                            </ul>
                        </div>
    </>
  )
}

export default MenuHeader