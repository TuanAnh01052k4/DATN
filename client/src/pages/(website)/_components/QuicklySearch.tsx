
const QuicklySearch = () => {
  return (
    <div className="search-wrapper content-menu-bottom fixed z-[13]  top-0 left-0 w-full h-screen hidden bg-white lg:w-auto lg:block lg:h-auto lg:px-0 lg:static lg:z-auto">
    <div className=" mt-3 relative mx-[15px] lg:mr-5 lg:block group lg:mx-0 lg:mt-0 ">
        <form className=" z-[11] w-full lg:w-60 h-10 border border-gray rounded-md overflow-hidden">
            <button className="size-10 border-0 outline-0 font-thin absolute left-0 top-0 text-dark">
                <i className="fa-solid fa-magnifying-glass" />
            </button>
            <input type="text" className="pl-10 py-[15px] text-sm pr-[15px] w-full h-10 border-0 outline-0 font-light" placeholder="Tìm kiếm sản phẩm" />
        </form>
        {/* quicksearch menu  */}
        <div className="quicksearch absolute top-8 left-0 z-10 w-full lg:hidden lg:group-hover:block lg:w-[440px]">
            <div className="mt-[15px] border border-gray-200 rounded-md p-6   bg-white">
                <h1 className="mb-4 text-sm text-[#221F20] font-semibold">Tìm kiếm nhiều nhất</h1>
                <div className="flex items-center flex-wrap gap-3 mb-4">
                    <a href="#" className="block px-2 py-2 border border-gray-200 text-[12px]/[150%] rounded-tl-lg rounded-br-lg transition duration-300 ease-in-out hover:text-white hover:bg-black">Áo
                        polo</a>
                    <a href="#" className="block px-2 py-2 border border-gray-200 text-[12px]/[150%] rounded-tl-lg rounded-br-lg transition duration-300 ease-in-out hover:text-white hover:bg-black">Đầm</a>
                    <a href="#" className="block px-2 py-2 border border-gray-200 text-[12px]/[150%] rounded-tl-lg rounded-br-lg transition duration-300 ease-in-out hover:text-white hover:bg-black">Trễ
                        Vai</a>
                    <a href="#" className="block px-2 py-2 border border-gray-200 text-[12px]/[150%] rounded-tl-lg rounded-br-lg transition duration-300 ease-in-out hover:text-white hover:bg-black">Quần
                        Jean</a>
                    <a href="#" className="block px-2 py-2 border border-gray-200 text-[12px]/[150%] rounded-tl-lg rounded-br-lg transition duration-300 ease-in-out hover:text-white hover:bg-black">Váy
                        học sinh</a>
                    <a href="#" className="block px-2 py-2 border border-gray-200 text-[12px]/[150%] rounded-tl-lg rounded-br-lg transition duration-300 ease-in-out hover:text-white hover:bg-black">Croptop</a>
                    <a href="#" className="block px-2 py-2 border border-gray-200 text-[12px]/[150%] rounded-tl-lg rounded-br-lg transition duration-300 ease-in-out hover:text-white hover:bg-black">Áo
                        thun</a>
                </div>
                <h1 className="mb-4 text-sm text-[#221F20] font-semibold">Vừa tìm kiếm</h1>
                <div className="flex items-center flex-wrap gap-3 ">
                    <a href="#" className="block px-2 py-2 border border-gray-200 text-[12px]/[150%] rounded-tl-lg rounded-br-lg transition duration-300 ease-in-out hover:text-white hover:bg-black">Áo
                        polo</a>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default QuicklySearch