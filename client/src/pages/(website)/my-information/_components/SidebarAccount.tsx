/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react"
import { NavLink } from "react-router-dom"

const SidebarAccount = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 576)
    const [maxHeightUl, setMaxHeightUl] = useState(null)
    const listMenu = useRef<any>()
    useEffect(()=>{
        window.addEventListener('resize',()=>{
            if(window.innerWidth < 576){
                setIsMobile(true)
            }else{
                setIsMobile(false)
            }
        })
    },[])
  useEffect(()=>{
    // lấy max chiều cao của thẻ ul
    setMaxHeightUl(listMenu.current.scrollHeight)
  },[])
    const onChangeSidebar = () =>{
       
        if(isMobile){
        if (listMenu.current.style.height === '0px' || listMenu.current.style.height === '') {
            listMenu.current.style.height = maxHeightUl + 'px';
            listMenu.current.style.padding = '20px 0 0 0'; 
        } else {
            listMenu.current.style.height = '0px'; 
            listMenu.current.style.padding = '0'; // Collapse the element
        }
        }
    }
  return (
    <div className="p-4 mb-4  overflow-hidden w-full border border-gray-200 flex-shrink-0 rounded-tl-3xl rounded-br-3xl lg:mr-[30px] lg:rounded-tl-[32px] lg:rounded-br-[32px]  lg:p-8 lg:w-auto lg:mb-0 ">
    <div onClick={onChangeSidebar} className="account-avt cursor-pointer flex justify-between items-center lg:mb-10 lg:cursor-auto lg:justify-normal">
      <div className="flex items-center gap-x-2">
        <div className="size-10 rounded-full overflow-hidden">
          <img src="http://picsum.photos/id/3/300/300" className="w-full object-cover"   />
        </div>
        <p className="font-semibold text-lg">Bùi Văn Đoàn</p>
      </div>
      <span className="w-max rotate-90 lg:hidden ">
        <i className="fa-solid fa-chevron-right" />
      </span>
    </div>
    <ul ref={listMenu} className="account-sidebar h-0 overflow-hidden transition-all ease-in-out duration-500 lg:overflow-visible lg:h-auto">
      <li className=" text mb-5 lg:mb-8">
        <NavLink to="/customer/infor" className="flex items-center text-sm font-semibold group-hover:text-gray-800 ">
          <span className="mr-3 "><i className="fa-regular fa-user" /></span>
          Thông tin tài khoản
        </NavLink>
      </li>
      <li className="group mb-5 lg:mb-8">
        <a href="#" className="flex items-center text-sm font-semibold group-hover:text-gray-800 ">
          <span className="mr-3 "><i className="fa-solid fa-unlock" /></span>
          Lịch sử đăng nhập
        </a>
      </li>
      <li className="group mb-5 lg:mb-8">
        <a href="#" className="flex items-center text-sm font-semibold group-hover:text-gray-800 ">
          <span className="mr-3 "><i className="fa-solid fa-arrows-rotate" /></span>
          Quản lý đơn hàng
        </a>
      </li>
      <li className="group mb-5 lg:mb-8">
        <a href="#" className="flex items-center text-sm font-semibold group-hover:text-gray-800 ">
          <span className="mr-3 "><i className="fa-solid fa-location-dot" /></span>
          Sổ địa chỉ
        </a>
      </li>
      <li className="group mb-5 lg:mb-8">
        <a href="#" className="flex items-center text-sm font-semibold group-hover:text-gray-800 ">
          <span className="mr-3 "><i className="fa-solid fa-glasses" /></span>
          Sản phẩm đã xem
        </a>
      </li>
      <li className="group mb-5 lg:mb-8">
        <a href="#" className="flex items-center text-sm font-semibold group-hover:text-gray-800 ">
          <span className="mr-3 "><i className="fa-regular fa-heart" /></span>
          Sản phẩm yêu thích
        </a>
      </li>
      <li className="group mb-5 lg:mb-8">
        <a href="#" className="flex items-center text-sm font-semibold group-hover:text-gray-800 ">
          <span className="mr-3 "><i className="fa-solid fa-headphones" /></span>
          Hỏi đáp sản phẩm
        </a>
      </li>
      <li className="group ">
        <a href="#" className="flex items-center text-sm font-semibold group-hover:text-gray-800 ">
          <span className="mr-3 "><i className="fa-regular fa-hand-point-right" /></span>
          Hỗ trợ - Mail Shop
        </a>
      </li>
    </ul>
  </div>
  )
}

export default SidebarAccount