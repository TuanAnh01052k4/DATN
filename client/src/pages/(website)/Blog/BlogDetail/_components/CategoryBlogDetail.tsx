import React from 'react'
import CategoryBlogDesktop from './CategoryBlogDesktop'

const CategoryBlogDetail = () => {
    return (
        <div className="px-[15px]">
            {/* menu danh mục khi vể mobile */}
            <select className=" h-12 w-full mb-8 px-3 py-2  text-#57585A border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent block lg:hidden">
                <option >Danh mục</option>
                <option >Sự kiện thời trang</option>
                <option >Blog chia sẻ</option>
                <option >Hoạt động cộng đồng</option>
            </select>
            {/* danh mục trên desktop */}
            <CategoryBlogDesktop />
        </div>
    )
}

export default CategoryBlogDetail