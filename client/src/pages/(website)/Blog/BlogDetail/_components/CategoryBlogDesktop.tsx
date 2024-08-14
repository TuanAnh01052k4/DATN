import React from 'react'

const CategoryBlogDesktop = () => {
  return (
    <div className="border w-[300px] border-gray-200 rounded-tl-[32px] rounded-br-[32px] p-10 sticky top-[100px] z-20 bg-white hidden lg:block">
    <div>
        <h1 className="text-xl font-semibold mb-8 text-dark">Danh Mục</h1>
        <div>
            <a href="#" className=" block mb-8">
                <p className="flex justify-between items-center">
                    <span>Sự kiện thời trang</span>
                    <span><i className="fa-solid fa-arrow-right" /></span>
                </p>
            </a>
            <a href="#" className=" block mb-8 ">
                <p className="flex justify-between items-center ">
                    <span>Blog chia sẻ</span>
                    <span><i className="fa-solid fa-arrow-right" /></span>
                </p>
            </a>
            <a href="#" className=" block ">
                <p className="flex justify-between items-center ">
                    <span>Hoạt động cộng đồng</span>
                    <span><i className="fa-solid fa-arrow-right" /></span>
                </p>
            </a>
        </div>
    </div>
</div>
  )
}

export default CategoryBlogDesktop