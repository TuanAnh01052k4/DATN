
import Posts from './_components/Posts'
import NewsBlog from '../../_components/NewsBlog'
import CategoryBlog from '../../_components/CategoryBlog'

const PageBlog = () => {
    return (
        <section className="container ">
            {/* đường dẫn đén trang */}
            <div className=" flex justify-start items-center gap-3 border-t-2 border-b-[1px] py-3  ">
                <a href="http://">Trang chủ</a>
                <a href="http://">-</a>
                <a href="http://">Tin Tức</a>
                <a href="http://">-</a>
                <a href="http://">Sự kiện thời trang</a>
            </div>
            {/* bài viết */}
            <div className=" py-[50px] px-[15px] lg:flex lg:justify-between">
                {/* box trái có bài viết */}
                <Posts />
                {/* box phải có danh mục và tin mới */}
                <div className=" basis-4/12 hidden lg:block  ">
                    {/* Danh mục bài viết */}
                    <CategoryBlog />
                    {/* Tin mới nhất */}
                    <NewsBlog />
                </div>
            </div>
        </section>

    )
}

export default PageBlog