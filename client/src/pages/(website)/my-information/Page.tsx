import { Outlet } from "react-router-dom"
import SidebarAccount from "./_components/SidebarAccount"


const MyInformation = () => {
  return (
  <section className="myAccount mb-[18px] lg:mb-10">
  <div className="container">
    {/* header  */}
    <div className="flex items-center gap-x-2 mt-5 mb-10">
      <a href="#" className="block text-sm">Trang chủ</a>
      <span>-</span>
      <a href="#" className="block ml-1 text-sm text-dark">Tài khoản của tôi</a>
    </div>
    {/* body  */}
    <div className="flex flex-col lg:flex-row">
      {/* left  */}
      <SidebarAccount />
      {/* right  */}
       <Outlet />
    </div>
  </div>
</section>

  )
}

export default MyInformation